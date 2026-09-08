---
title: "SQL and Oracle for Risk Data — A Pattern Library"
description: "Reference masterclass on the SQL that risk and regulatory reporting work actually requires: joins across exposure, collateral and rating tables, window functions for vintage and cohort analysis, hierarchical group aggregation, point-in-time queries on slowly changing dimensions, reconciliation and data quality patterns, and Oracle performance tuning."
order: 10
collection: default
verified: unverified
format: markdown
series: masterclass
tags: [sql, oracle, risk-data, window-functions, analytic-functions, reconciliation, data-quality, execution-plan, slowly-changing-dimensions]
related: [risk-data-regulatory-reporting, credit-risk]
created: 2026-09-07
updated: 2026-09-07
---

## 1. The shape of the work

SQL in a risk function is not application development. It is investigation, reconciliation and evidence production against a data mart that someone else built.

| Task | Typical query |
|---|---|
| Answer a supervisory question | Aggregate an exposure population with specific filters |
| Reconcile to the general ledger | Sum by product and compare to a GL extract |
| Investigate a movement | Compare two reporting dates, attribute the difference |
| Build a data quality check | Count records failing a rule, by segment |
| Prepare an analysis | Vintage curves, transition matrices, concentration |
| Support a model build | Extract a clean, point-in-time training population |
| Test a change | Compare old and new logic on the same population |

:::mental-model
The queries that matter in risk work are almost never complicated in their logic. They are complicated in their *definitions* — which date, which population, which version of the customer record, which of three exposure fields. The SQL is easy; getting the population right is the job.
:::

**The tables used throughout this document:**

| Table | Contents |
|---|---|
| `exposure_fact` | One row per exposure per as-of date |
| `customer_dim` | Customer attributes, versioned by effective date |
| `collateral` | Security held, with valuations |
| `rating_hist` | Rating assignments over time |
| `gl_balance` | General ledger balances by account and product |

## 2. Order of execution

Written order and execution order differ, and almost every "why can't I use my alias there" question comes from this.

| Written | Executed |
|---|---|
| `SELECT` | 5 |
| `FROM` / `JOIN` | 1 |
| `WHERE` | 2 |
| `GROUP BY` | 3 |
| `HAVING` | 4 |
| `SELECT` list, window functions | 5 |
| `DISTINCT` | 6 |
| `ORDER BY` | 7 |
| `FETCH FIRST` / `ROWNUM` | 8 |

| Consequence | Rule |
|---|---|
| `WHERE` cannot see aggregates | Use `HAVING` |
| `WHERE` cannot see column aliases | Repeat the expression, or use a subquery |
| `ORDER BY` **can** see aliases | It runs last |
| Window functions cannot be filtered in `WHERE` | Wrap in a subquery, then filter |
| `WHERE` filters before grouping | Cheaper — filter as early as possible |

```sql
-- Filtering on a window function requires a wrapper
SELECT *
FROM (
    SELECT customer_id,
           exposure_id,
           outstanding_amt,
           ROW_NUMBER() OVER (PARTITION BY customer_id
                              ORDER BY outstanding_amt DESC) AS rn
    FROM   exposure_fact
    WHERE  as_of_date = DATE '2026-03-31'
)
WHERE rn = 1;   -- largest exposure per customer
```

## 3. Joins across risk tables

| Join | Use | Risk in risk data |
|---|---|---|
| `INNER` | Both sides must match | **Silently drops exposures** with no collateral or no rating |
| `LEFT` | Keep all of the left | The default for fact-to-dimension |
| `FULL OUTER` | Keep both sides | Reconciliation — finds records missing from either side |
| `CROSS` | Cartesian product | Date spines, scenario grids |
| Anti-join (`NOT EXISTS`) | Rows with no match | Orphan and completeness checks |

**The fan-out trap** is the single most common cause of overstated exposure totals. Joining `exposure_fact` to `collateral` where an exposure has three securities triples the exposure rows, and `SUM(outstanding_amt)` triples the balance.

```sql
-- WRONG: exposure is multiplied by the number of collateral rows
SELECT SUM(e.outstanding_amt)
FROM   exposure_fact e
JOIN   collateral    c ON c.exposure_id = e.exposure_id
WHERE  e.as_of_date = DATE '2026-03-31';

-- RIGHT: aggregate collateral first, then join one-to-one
WITH coll AS (
    SELECT exposure_id,
           SUM(market_value * (1 - haircut_pct/100)) AS realisable_value,
           COUNT(*)                                  AS collateral_items,
           MIN(valuation_date)                       AS oldest_valuation
    FROM   collateral
    GROUP  BY exposure_id
)
SELECT e.product_code,
       SUM(e.outstanding_amt)                    AS exposure,
       SUM(NVL(c.realisable_value, 0))           AS security_value,
       SUM(GREATEST(e.outstanding_amt
                    - NVL(c.realisable_value, 0), 0)) AS unsecured_portion
FROM   exposure_fact e
LEFT   JOIN coll c ON c.exposure_id = e.exposure_id
WHERE  e.as_of_date = DATE '2026-03-31'
GROUP  BY e.product_code
ORDER  BY exposure DESC;
```

**Always aggregate the many-side before joining.** Then verify: the row count after the join must equal the row count of `exposure_fact` alone.

## 4. Aggregation and subtotals

```sql
-- Stage and product summary with subtotals and a grand total
SELECT NVL(product_code, 'ALL PRODUCTS')          AS product_code,
       NVL(TO_CHAR(stage_cd), 'ALL STAGES')       AS stage_cd,
       COUNT(*)                                   AS accounts,
       SUM(outstanding_amt)                       AS exposure,
       SUM(provision_amt)                         AS provision,
       ROUND(SUM(provision_amt)
             / NULLIF(SUM(outstanding_amt), 0) * 100, 2) AS coverage_pct,
       GROUPING(product_code)                     AS is_product_total
FROM   exposure_fact
WHERE  as_of_date = DATE '2026-03-31'
GROUP  BY ROLLUP (product_code, stage_cd)
ORDER  BY GROUPING(product_code), product_code,
          GROUPING(stage_cd), stage_cd;
```

| Construct | Produces |
|---|---|
| `GROUP BY a, b` | Detail only |
| `ROLLUP (a, b)` | Detail, subtotal per `a`, grand total |
| `CUBE (a, b)` | Every combination including totals by `b` alone |
| `GROUPING SETS ((a),(b),())` | Exactly the levels you specify |
| `GROUPING(col)` | 1 where the column is aggregated away — label the total rows |

**`NULLIF` on every divisor.** Division by zero terminates the query, and a coverage ratio on a segment with zero exposure is a realistic occurrence, not an edge case.

## 5. Window functions

The single highest-value construct in risk analysis: aggregate *and* keep the detail row.

```sql
SELECT customer_id,
       exposure_id,
       product_code,
       outstanding_amt,
       SUM(outstanding_amt) OVER (PARTITION BY customer_id)     AS customer_total,
       ROUND(outstanding_amt * 100
             / SUM(outstanding_amt) OVER (PARTITION BY customer_id), 2)
                                                                AS pct_of_customer,
       COUNT(*)             OVER (PARTITION BY customer_id)     AS facility_count,
       MAX(dpd)             OVER (PARTITION BY customer_id)     AS worst_dpd_in_group
FROM   exposure_fact
WHERE  as_of_date = DATE '2026-03-31';
```

| Clause | Effect |
|---|---|
| `PARTITION BY` | Resets the calculation per group |
| `ORDER BY` inside `OVER` | Makes it cumulative or positional |
| `ROWS BETWEEN` | Physical row window |
| `RANGE BETWEEN` | Logical value window — ties included |
| No frame with `ORDER BY` | Defaults to `RANGE UNBOUNDED PRECEDING AND CURRENT ROW` |

| Function | Returns |
|---|---|
| `ROW_NUMBER()` | 1,2,3 — no ties |
| `RANK()` | 1,1,3 — gaps after ties |
| `DENSE_RANK()` | 1,1,2 — no gaps |
| `LAG` / `LEAD` | Prior or next row's value |
| `FIRST_VALUE` / `LAST_VALUE` | Boundary value in the frame |
| `NTILE(n)` | Split into n buckets — deciles, quintiles |
| `PERCENT_RANK`, `CUME_DIST` | Relative position |

**The `LAST_VALUE` trap.** With the default frame it returns the current row, not the last row of the partition. Always state the frame explicitly:

```sql
LAST_VALUE(rating_cd) OVER (PARTITION BY customer_id ORDER BY rating_date
                            ROWS BETWEEN UNBOUNDED PRECEDING
                                     AND UNBOUNDED FOLLOWING)
```

## 6. Deduplication and latest-record patterns

The most-used pattern in the entire document: one row per key, the most recent.

```sql
-- Latest rating per customer as at a reporting date
WITH ranked AS (
    SELECT customer_id,
           rating_cd,
           rating_date,
           ROW_NUMBER() OVER (PARTITION BY customer_id
                              ORDER BY rating_date DESC, rating_id DESC) AS rn
    FROM   rating_hist
    WHERE  rating_date <= DATE '2026-03-31'
)
SELECT customer_id, rating_cd, rating_date
FROM   ranked
WHERE  rn = 1;
```

**Add a tie-breaker to the `ORDER BY`.** Two ratings on the same date with only `rating_date` in the sort makes the result non-deterministic — the query returns a different answer on different runs, which is the worst possible defect in a regulatory number.

```sql
-- Finding genuine duplicates before they reach a report
SELECT exposure_id, as_of_date, COUNT(*) AS row_count
FROM   exposure_fact
GROUP  BY exposure_id, as_of_date
HAVING COUNT(*) > 1;
```

| Alternative | Note |
|---|---|
| `KEEP (DENSE_RANK FIRST ORDER BY ...)` | Compact for a single value; Oracle-specific |
| `FETCH FIRST 1 ROW` in a correlated subquery | Readable, often slower |
| `DISTINCT` | Deduplicates whole rows only — rarely what is wanted |

```sql
-- KEEP FIRST: latest rating without a subquery
SELECT customer_id,
       MAX(rating_cd) KEEP (DENSE_RANK FIRST ORDER BY rating_date DESC) AS latest_rating
FROM   rating_hist
WHERE  rating_date <= DATE '2026-03-31'
GROUP  BY customer_id;
```

## 7. Running totals and concentration

```sql
-- Top exposures with cumulative concentration
WITH ranked AS (
    SELECT c.customer_name,
           SUM(e.outstanding_amt) AS exposure
    FROM   exposure_fact e
    JOIN   customer_dim  c ON c.customer_id = e.customer_id
                          AND c.current_flag = 'Y'
    WHERE  e.as_of_date = DATE '2026-03-31'
    GROUP  BY c.customer_name
)
SELECT customer_name,
       exposure,
       ROW_NUMBER() OVER (ORDER BY exposure DESC)             AS rank_no,
       SUM(exposure) OVER (ORDER BY exposure DESC
                           ROWS BETWEEN UNBOUNDED PRECEDING
                                    AND CURRENT ROW)          AS cumulative_exposure,
       ROUND(SUM(exposure) OVER (ORDER BY exposure DESC
                                 ROWS BETWEEN UNBOUNDED PRECEDING
                                          AND CURRENT ROW)
             * 100 / SUM(exposure) OVER (), 2)                AS cumulative_pct
FROM   ranked
ORDER  BY exposure DESC
FETCH  FIRST 20 ROWS ONLY;
```

`SUM(exposure) OVER ()` with an empty window is the grand total available on every row — the cleanest way to compute a percentage of total without a second pass.

```sql
-- Herfindahl index by sector
SELECT sector_cd,
       ROUND(SUM(POWER(share_pct, 2)), 2) AS hhi
FROM (
    SELECT c.sector_cd,
           e.customer_id,
           SUM(e.outstanding_amt) * 100
             / SUM(SUM(e.outstanding_amt)) OVER (PARTITION BY c.sector_cd) AS share_pct
    FROM   exposure_fact e
    JOIN   customer_dim  c ON c.customer_id = e.customer_id
                          AND c.current_flag = 'Y'
    WHERE  e.as_of_date = DATE '2026-03-31'
    GROUP  BY c.sector_cd, e.customer_id
)
GROUP BY sector_cd
ORDER BY hhi DESC;
```

Note the nesting: an aggregate inside a window function (`SUM(SUM(...)) OVER (...)`) is legal and idiomatic, because window functions execute after `GROUP BY`.

## 8. Vintage and cohort analysis

The standard credit analysis — how each origination cohort performs as it ages.

```sql
-- Cumulative default rate by origination quarter and months on book
SELECT origination_quarter,
       months_on_book,
       accounts_in_cohort,
       ROUND(defaulted_by_mob * 100 / accounts_in_cohort, 3) AS cum_default_rate_pct
FROM (
    SELECT TO_CHAR(f.origination_date, 'YYYY"Q"Q')                    AS origination_quarter,
           MONTHS_BETWEEN(e.as_of_date, f.origination_date)           AS months_on_book,
           COUNT(DISTINCT e.exposure_id)                              AS accounts_in_cohort,
           COUNT(DISTINCT CASE WHEN e.default_flag = 'Y'
                               THEN e.exposure_id END)                AS defaulted_by_mob
    FROM   exposure_fact e
    JOIN   facility_dim  f ON f.facility_id = e.facility_id
    WHERE  e.as_of_date BETWEEN DATE '2023-01-31' AND DATE '2026-03-31'
      AND  f.product_code = 'PL'
    GROUP  BY TO_CHAR(f.origination_date, 'YYYY"Q"Q'),
              MONTHS_BETWEEN(e.as_of_date, f.origination_date)
)
WHERE months_on_book BETWEEN 0 AND 36
ORDER BY origination_quarter, months_on_book;
```

| Column | Reading |
|---|---|
| Rows = cohorts | Compare underwriting quality across origination periods |
| Columns = months on book | The seasoning curve |
| Down a column | Vintage quality — is new business worse? |
| Across a row | Seasoning — when does risk emerge? |

This output is the input to the PD term structure in the ECL document. **The denominator must be the cohort at origination, not the surviving population**, or the rate is understated as accounts leave.

## 9. Transition matrices

```sql
-- Stage migration between two reporting dates
WITH opening AS (
    SELECT exposure_id, stage_cd AS open_stage, outstanding_amt AS open_amt
    FROM   exposure_fact
    WHERE  as_of_date = DATE '2025-12-31'
),
closing AS (
    SELECT exposure_id, stage_cd AS close_stage, outstanding_amt AS close_amt
    FROM   exposure_fact
    WHERE  as_of_date = DATE '2026-03-31'
)
SELECT NVL(TO_CHAR(o.open_stage),  'NEW')      AS from_stage,
       NVL(TO_CHAR(c.close_stage), 'EXITED')   AS to_stage,
       COUNT(*)                                AS accounts,
       SUM(NVL(o.open_amt, c.close_amt))       AS amount,
       ROUND(COUNT(*) * 100
             / SUM(COUNT(*)) OVER (PARTITION BY o.open_stage), 2) AS row_pct
FROM   opening o
FULL   OUTER JOIN closing c ON c.exposure_id = o.exposure_id
GROUP  BY o.open_stage, c.close_stage
ORDER  BY from_stage, to_stage;
```

**`FULL OUTER JOIN` is essential here.** An inner join loses both new originations and exited accounts, and the resulting matrix will not reconcile to either period's total. The `NVL` labels make those two populations explicit rather than silently absent.

```sql
-- Pivoted into matrix form
SELECT *
FROM (
    SELECT o.stage_cd AS from_stage, c.stage_cd AS to_stage, COUNT(*) AS cnt
    FROM   exposure_fact o
    JOIN   exposure_fact c ON c.exposure_id = o.exposure_id
                          AND c.as_of_date  = DATE '2026-03-31'
    WHERE  o.as_of_date = DATE '2025-12-31'
    GROUP  BY o.stage_cd, c.stage_cd
)
PIVOT (SUM(cnt) FOR to_stage IN (1 AS stage_1, 2 AS stage_2, 3 AS stage_3))
ORDER BY from_stage;
```

## 10. Dates and reporting periods

| Need | Oracle |
|---|---|
| Month end | `LAST_DAY(dt)` |
| Quarter start | `TRUNC(dt, 'Q')` |
| Financial year start (April, India) | `ADD_MONTHS(TRUNC(ADD_MONTHS(dt, -3), 'YYYY'), 3)` |
| Months between | `MONTHS_BETWEEN(d1, d2)` |
| Add months | `ADD_MONTHS(dt, n)` |
| Days past due | `TRUNC(as_of_date) - TRUNC(due_date)` |
| Date literal | `DATE '2026-03-31'` |
| Strip time | `TRUNC(dt)` |

```sql
-- Month-end spine, then left join the fact so gaps are visible as zeros
WITH month_ends AS (
    SELECT LAST_DAY(ADD_MONTHS(DATE '2025-04-30', LEVEL - 1)) AS as_of_date
    FROM   dual
    CONNECT BY LEVEL <= 12
)
SELECT m.as_of_date,
       NVL(SUM(e.outstanding_amt), 0) AS exposure,
       COUNT(e.exposure_id)           AS accounts
FROM   month_ends m
LEFT   JOIN exposure_fact e ON e.as_of_date = m.as_of_date
GROUP  BY m.as_of_date
ORDER  BY m.as_of_date;
```

**Never write `WHERE TRUNC(as_of_date) = DATE '2026-03-31'`** on an indexed date column — the function on the column disables the index. Use a range instead:

```sql
WHERE as_of_date >= DATE '2026-03-31'
  AND as_of_date <  DATE '2026-04-01'
```

## 11. Slowly changing dimensions and point-in-time

Risk dimensions are versioned: a customer's sector, rating grade or group parent changes over time, and a reproduced report must use the version that was current **then**.

| Type | Behaviour | Use |
|---|---|---|
| Type 1 | Overwrite | Corrections only |
| Type 2 | New row with effective dates | **The standard for risk** |
| Type 3 | Prior value in a column | Limited |

```sql
-- Point-in-time join: the customer record as it stood on the reporting date
SELECT e.exposure_id,
       e.outstanding_amt,
       c.customer_name,
       c.sector_cd,
       c.risk_grade
FROM   exposure_fact e
JOIN   customer_dim  c
       ON  c.customer_id   =  e.customer_id
       AND e.as_of_date    >= c.eff_from_date
       AND e.as_of_date    <  NVL(c.eff_to_date, DATE '9999-12-31')
WHERE  e.as_of_date = DATE '2026-03-31';
```

| Requirement | Reason |
|---|---|
| Half-open interval (`>=` … `<`) | Prevents an overlap on the changeover date returning two rows |
| `NVL(eff_to_date, '9999-12-31')` | The open current record must not be excluded |
| Never `current_flag = 'Y'` for a past date | That returns today's attributes on a historic exposure |

**Using `current_flag = 'Y'` to reproduce a prior period is the classic point-in-time error.** The exposure is correct, the customer attributes are today's, and the restated report will not match the original with no obvious reason why.

```sql
-- Detecting broken version history
SELECT customer_id, eff_from_date, eff_to_date,
       LEAD(eff_from_date) OVER (PARTITION BY customer_id
                                 ORDER BY eff_from_date) AS next_from
FROM   customer_dim
WHERE  eff_to_date IS NOT NULL
  AND  eff_to_date <> LEAD(eff_from_date) OVER (PARTITION BY customer_id
                                                ORDER BY eff_from_date);
```

## 12. Hierarchical queries — group exposure

Large exposure limits apply at the connected-group level, so exposures must be rolled up through a parent hierarchy of unknown depth.

```sql
-- Oracle CONNECT BY: every customer with its ultimate parent
SELECT customer_id,
       customer_name,
       CONNECT_BY_ROOT customer_id   AS ultimate_parent_id,
       LEVEL                         AS depth,
       SYS_CONNECT_BY_PATH(customer_name, ' > ') AS ownership_path
FROM   customer_dim
WHERE  current_flag = 'Y'
START  WITH parent_customer_id IS NULL
CONNECT BY NOCYCLE PRIOR customer_id = parent_customer_id;
```

```sql
-- Group exposure aggregation, ANSI recursive CTE
WITH group_tree (root_id, customer_id) AS (
    SELECT customer_id, customer_id
    FROM   customer_dim
    WHERE  parent_customer_id IS NULL
      AND  current_flag = 'Y'
    UNION ALL
    SELECT g.root_id, c.customer_id
    FROM   group_tree  g
    JOIN   customer_dim c ON c.parent_customer_id = g.customer_id
                         AND c.current_flag = 'Y'
)
SELECT g.root_id                     AS group_id,
       COUNT(DISTINCT g.customer_id) AS entities_in_group,
       SUM(e.outstanding_amt)        AS group_exposure
FROM   group_tree    g
JOIN   exposure_fact e ON e.customer_id = g.customer_id
                      AND e.as_of_date  = DATE '2026-03-31'
GROUP  BY g.root_id
HAVING SUM(e.outstanding_amt) > 500000000
ORDER  BY group_exposure DESC;
```

**`NOCYCLE` matters.** Ownership data with a circular reference — A owns B owns A — makes a hierarchical query run until it errors. `NOCYCLE` terminates the branch instead, and `CONNECT_BY_ISCYCLE` identifies where the loop is so the data can be fixed.

## 13. Reconciliation queries

```sql
-- Risk mart against the general ledger, by product
WITH mart AS (
    SELECT product_code, SUM(outstanding_amt) AS mart_balance
    FROM   exposure_fact
    WHERE  as_of_date = DATE '2026-03-31'
    GROUP  BY product_code
),
gl AS (
    SELECT product_code, SUM(balance_amt) AS gl_balance
    FROM   gl_balance
    WHERE  as_of_date = DATE '2026-03-31'
    GROUP  BY product_code
)
SELECT NVL(m.product_code, g.product_code)              AS product_code,
       NVL(m.mart_balance, 0)                           AS mart_balance,
       NVL(g.gl_balance, 0)                             AS gl_balance,
       NVL(m.mart_balance, 0) - NVL(g.gl_balance, 0)    AS difference,
       CASE
         WHEN m.product_code IS NULL THEN 'MISSING FROM MART'
         WHEN g.product_code IS NULL THEN 'MISSING FROM GL'
         WHEN ABS(NVL(m.mart_balance,0) - NVL(g.gl_balance,0)) > 100000
              THEN 'BREAK ABOVE TOLERANCE'
         WHEN m.mart_balance <> g.gl_balance THEN 'WITHIN TOLERANCE'
         ELSE 'MATCHED'
       END                                              AS status
FROM   mart m
FULL   OUTER JOIN gl g ON g.product_code = m.product_code
ORDER  BY ABS(NVL(m.mart_balance,0) - NVL(g.gl_balance,0)) DESC;
```

**`FULL OUTER JOIN` is the whole point of a reconciliation.** An inner join reports only on products present in both sides and silently hides the two failure modes that matter most — a product in the GL with no mart data, and mart data with no GL account.

```sql
-- Period-on-period movement attribution
SELECT NVL(cur.product_code, pri.product_code)                  AS product_code,
       NVL(pri.balance, 0)                                      AS opening,
       NVL(cur.balance, 0)                                      AS closing,
       NVL(cur.balance, 0) - NVL(pri.balance, 0)                AS movement,
       ROUND((NVL(cur.balance,0) - NVL(pri.balance,0)) * 100
             / NULLIF(pri.balance, 0), 2)                       AS movement_pct
FROM      (SELECT product_code, SUM(outstanding_amt) AS balance
           FROM exposure_fact WHERE as_of_date = DATE '2026-03-31'
           GROUP BY product_code) cur
FULL OUTER JOIN
          (SELECT product_code, SUM(outstanding_amt) AS balance
           FROM exposure_fact WHERE as_of_date = DATE '2025-12-31'
           GROUP BY product_code) pri
       ON pri.product_code = cur.product_code
ORDER BY ABS(NVL(cur.balance,0) - NVL(pri.balance,0)) DESC;
```

## 14. Data quality queries

One query covering the dimensions from the risk data document.

```sql
-- Completeness and validity profile on critical data elements
SELECT COUNT(*)                                                   AS total_rows,
       -- completeness
       SUM(CASE WHEN customer_id     IS NULL THEN 1 ELSE 0 END)   AS missing_customer,
       SUM(CASE WHEN rating_cd       IS NULL THEN 1 ELSE 0 END)   AS missing_rating,
       SUM(CASE WHEN outstanding_amt IS NULL THEN 1 ELSE 0 END)   AS missing_amount,
       -- validity
       SUM(CASE WHEN outstanding_amt < 0 THEN 1 ELSE 0 END)       AS negative_amount,
       SUM(CASE WHEN dpd < 0 OR dpd > 3650 THEN 1 ELSE 0 END)     AS implausible_dpd,
       SUM(CASE WHEN stage_cd NOT IN (1,2,3) THEN 1 ELSE 0 END)   AS invalid_stage,
       SUM(CASE WHEN currency_cd NOT IN
                 (SELECT currency_cd FROM currency_ref) THEN 1 ELSE 0 END)
                                                                  AS invalid_currency,
       -- business rule consistency
       SUM(CASE WHEN dpd > 90 AND stage_cd <> 3 THEN 1 ELSE 0 END)
                                                                  AS dpd90_not_stage3,
       SUM(CASE WHEN dpd BETWEEN 31 AND 90 AND stage_cd = 1 THEN 1 ELSE 0 END)
                                                                  AS dpd30_still_stage1,
       -- completeness as a percentage
       ROUND(SUM(CASE WHEN rating_cd IS NOT NULL THEN 1 ELSE 0 END) * 100
             / COUNT(*), 2)                                       AS rating_coverage_pct
FROM   exposure_fact
WHERE  as_of_date = DATE '2026-03-31';
```

```sql
-- Staleness: collateral valuations older than the policy window
SELECT c.collateral_type,
       COUNT(*)                                                    AS items,
       SUM(c.market_value)                                         AS value,
       ROUND(AVG(DATE '2026-03-31' - c.valuation_date))            AS avg_age_days,
       SUM(CASE WHEN DATE '2026-03-31' - c.valuation_date > 365
                THEN 1 ELSE 0 END)                                 AS stale_items
FROM   collateral c
GROUP  BY c.collateral_type
ORDER  BY stale_items DESC;
```

```sql
-- Orphans: exposures whose customer does not exist
SELECT e.exposure_id, e.customer_id, e.outstanding_amt
FROM   exposure_fact e
WHERE  e.as_of_date = DATE '2026-03-31'
  AND  NOT EXISTS (SELECT 1 FROM customer_dim c
                   WHERE c.customer_id = e.customer_id);
```

**`NOT EXISTS` over `NOT IN`.** If the subquery returns any `NULL`, `NOT IN` returns no rows at all — silently, with no error. In a data quality check that is the worst possible behaviour: the query reports a clean result precisely because the data is dirty.

## 15. Oracle-specific constructs

```sql
-- MERGE: upsert a snapshot without delete-then-insert
MERGE INTO risk_summary tgt
USING (
    SELECT as_of_date, product_code,
           SUM(outstanding_amt) AS exposure,
           SUM(provision_amt)   AS provision
    FROM   exposure_fact
    WHERE  as_of_date = DATE '2026-03-31'
    GROUP  BY as_of_date, product_code
) src
ON (tgt.as_of_date = src.as_of_date AND tgt.product_code = src.product_code)
WHEN MATCHED THEN
    UPDATE SET tgt.exposure  = src.exposure,
               tgt.provision = src.provision,
               tgt.updated_ts = SYSTIMESTAMP
WHEN NOT MATCHED THEN
    INSERT (as_of_date, product_code, exposure, provision, updated_ts)
    VALUES (src.as_of_date, src.product_code, src.exposure, src.provision,
            SYSTIMESTAMP);
```

| Construct | Use |
|---|---|
| `MERGE` | Upsert in one statement |
| `NVL`, `NVL2`, `COALESCE` | Null handling; `COALESCE` is the portable one |
| `DECODE` | Oracle shorthand; prefer `CASE` for readability |
| `LISTAGG` | Concatenate values within a group |
| `PIVOT` / `UNPIVOT` | Rows to columns and back |
| Materialised view | Precomputed aggregate, refreshable |
| Partitioning | Split a large table by range, usually `as_of_date` |
| `WITH ... AS` | Common table expressions for readable staging |
| `FLASHBACK QUERY` | Read a table as of a past timestamp |

```sql
-- LISTAGG: collateral types per exposure on one line
SELECT exposure_id,
       LISTAGG(collateral_type, ', ')
         WITHIN GROUP (ORDER BY market_value DESC) AS collateral_types,
       COUNT(*)                                    AS items
FROM   collateral
GROUP  BY exposure_id;
```

**Partitioning by `as_of_date` is the structural decision that makes a risk mart usable.** Queries filtered to one reporting date then read one partition instead of scanning years of history — partition pruning, visible in the execution plan, and typically the difference between seconds and hours.

## 16. Execution plans and indexing

```sql
EXPLAIN PLAN FOR
SELECT product_code, SUM(outstanding_amt)
FROM   exposure_fact
WHERE  as_of_date = DATE '2026-03-31'
GROUP  BY product_code;

SELECT * FROM TABLE(DBMS_XPLAN.DISPLAY);

-- What actually ran, with real row counts against estimates
SELECT * FROM TABLE(DBMS_XPLAN.DISPLAY_CURSOR(NULL, NULL, 'ALLSTATS LAST'));
```

| Plan operation | Meaning | Concern |
|---|---|---|
| `TABLE ACCESS FULL` | Full scan | Fine on small tables or high-selectivity queries; bad on a large table with a narrow filter |
| `INDEX RANGE SCAN` | Index used for a range | Usually good |
| `INDEX UNIQUE SCAN` | Single row via a unique index | Best case |
| `TABLE ACCESS BY INDEX ROWID` | Index then table lookup | Expensive if many rows |
| `NESTED LOOPS` | Row-by-row join | Good for small driving sets |
| `HASH JOIN` | Build a hash table | Good for large joins |
| `MERGE JOIN CARTESIAN` | Cartesian product | **Almost always a missing join condition** |
| `PARTITION RANGE SINGLE` | Pruning worked | What you want on a partitioned mart |
| `PARTITION RANGE ALL` | Every partition scanned | Pruning failed — check the filter |

**Read `DISPLAY_CURSOR` with `ALLSTATS LAST`, not `EXPLAIN PLAN`.** The first shows estimated rows against actual rows for each step. A step estimating 100 rows and returning 4 million explains the whole problem: the optimiser chose nested loops on bad statistics.

| Index type | Suits |
|---|---|
| B-tree | High cardinality — IDs, dates, amounts |
| Bitmap | Low cardinality in a read-mostly warehouse — stage, product, flags |
| Composite | Multi-column filters; leading column must be in the predicate |
| Function-based | Where a function on the column is unavoidable |

## 17. Performance patterns

| Anti-pattern | Fix |
|---|---|
| `TRUNC(date_col) = ...` | Range predicate on the raw column |
| `SUBSTR(id, 1, 4) = 'CORP'` | Store the attribute as its own column |
| `col || '' = 'X'` | Remove the concatenation |
| `SELECT *` in production | Name the columns needed |
| `DISTINCT` masking a fan-out | Fix the join |
| Correlated subquery per row | Rewrite as a join or window function |
| `NOT IN` on a nullable column | `NOT EXISTS` |
| Cursor or PL/SQL loop over rows | Set-based single statement |
| Filtering after joining | Filter in the CTE, before the join |
| Implicit datatype conversion | Match the types; conversions disable indexes |

```sql
-- Correlated subquery: executes once per row
SELECT e.exposure_id,
       (SELECT MAX(c.market_value) FROM collateral c
        WHERE c.exposure_id = e.exposure_id) AS max_collateral
FROM   exposure_fact e
WHERE  e.as_of_date = DATE '2026-03-31';

-- Window function over a single scan
SELECT exposure_id, max_collateral
FROM (
    SELECT e.exposure_id,
           MAX(c.market_value) OVER (PARTITION BY e.exposure_id) AS max_collateral,
           ROW_NUMBER()        OVER (PARTITION BY e.exposure_id
                                     ORDER BY c.market_value DESC) AS rn
    FROM   exposure_fact e
    LEFT   JOIN collateral c ON c.exposure_id = e.exposure_id
    WHERE  e.as_of_date = DATE '2026-03-31'
)
WHERE rn = 1;
```

| Habit | Why |
|---|---|
| Row-count the result against the driving table | Catches fan-out immediately |
| Test on one reporting date first | Then widen |
| Save the query with the number it produced | Reproducibility is the evidence |
| Comment the definition, not the syntax | Future-you needs to know *which population*, not what `SUM` does |
| Gather statistics after a large load | The optimiser is only as good as its statistics |

## 18. Defensible under questioning

| Question | The answer that lands |
|---|---|
| Why did the exposure total double? | Fan-out — a one-to-many join not aggregated first. Row-count the result against the fact table |
| `WHERE` or `HAVING`? | `WHERE` before grouping, `HAVING` after; `WHERE` cannot see aggregates |
| Why can't I filter on a window function? | It computes after `WHERE`; wrap it in a subquery and filter outside |
| `ROW_NUMBER` or `RANK`? | `ROW_NUMBER` for deduplication — it never ties. Add a tie-breaker or the result is non-deterministic |
| Why `NOT EXISTS` rather than `NOT IN`? | A single `NULL` in the subquery makes `NOT IN` return nothing, silently |
| How do you reproduce a prior period exactly? | Point-in-time join on the SCD Type 2 effective dates — never `current_flag = 'Y'` |
| Why `FULL OUTER JOIN` for reconciliation? | Inner joins hide records missing from either side, which is what a reconciliation exists to find |
| Why is my date filter slow? | A function on an indexed column disables the index; use a range predicate |
| What is partition pruning? | Reading only the partitions the filter needs; check for `PARTITION RANGE SINGLE` in the plan |
| Which plan operation alarms you most? | `MERGE JOIN CARTESIAN` — almost always a missing join condition |
| `EXPLAIN PLAN` or `DISPLAY_CURSOR`? | `DISPLAY_CURSOR` with `ALLSTATS LAST` — estimated against actual rows is where the problem shows |
| How do you build a group exposure view? | Recursive CTE or `CONNECT BY` up the parent hierarchy, with `NOCYCLE` for circular ownership |

**Three patterns to be able to write from memory:** the `ROW_NUMBER` deduplication with a tie-breaker, the point-in-time SCD Type 2 join with the half-open interval, and the `FULL OUTER JOIN` reconciliation with a tolerance flag. Those three cover the majority of real risk-data work, and each has a failure mode that produces a wrong number silently rather than an error.
