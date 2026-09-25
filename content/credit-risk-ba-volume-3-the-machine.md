---
title: "Credit Risk for the Business Analyst — Volume 3: The Machine"
description: "How the numbers of Volumes 1 and 2 are produced every day for every loan: the book as data, reference data, transformation rules, data quality, lineage and BCBS 239, requirements from BRD to user story, UML, dashboards, SQL and Python on the 20-borrower book, testing, agile delivery against a regulatory date, and the controls auditors test — compared across the UK, EU, US and India."
series: masterclass
track: guest
subject: "Credit Risk for the Business Analyst"
order: 3
status: live
updated: 2026-09-25
verified: false
tags:
  - credit risk
  - business analysis
  - data lineage
  - bcbs 239
  - reference data
  - data quality
  - requirements
  - user stories
  - uml
  - dashboards
  - sql
  - python
  - user acceptance testing
  - agile
  - audit
  - jurisdiction comparison
---

## Part 0 — The machine, and your seat in it

Volume 1 built every number the bank has about the manufacturer. Volume 2 took those numbers through the rulebooks. Both were done by hand, for one client, at four dates. The bank has to do the same for every facility, every day, and prove each result to an auditor years later. The thing that does that is the machine — and a business analyst's work is to specify it, trace it, test it and defend it.

### The machine in one picture

<svg viewBox="0 0 720 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Data flows from six source systems through a landing area and data quality gate into a risk data store, then through calculation engines into a results store, and out to ledger postings, regulatory returns, dashboards and stress tests" style="width:100%;max-width:720px;height:auto;display:block;margin:1rem auto">
<g font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="11" fill="#1f2937">
<text x="58" y="24" text-anchor="middle" font-weight="600">Sources</text>
<text x="179" y="24" text-anchor="middle" font-weight="600">Land and check</text>
<text x="300" y="24" text-anchor="middle" font-weight="600">Risk data store</text>
<text x="423" y="24" text-anchor="middle" font-weight="600">Engines</text>
<text x="536" y="24" text-anchor="middle" font-weight="600">Results</text>
<text x="658" y="24" text-anchor="middle" font-weight="600">Consumers</text>
<rect x="3" y="44" width="110" height="32" rx="4" fill="#eff6ff" stroke="#93c5fd"/>
<text x="58" y="64" text-anchor="middle">Loan system</text>
<rect x="3" y="84" width="110" height="32" rx="4" fill="#eff6ff" stroke="#93c5fd"/>
<text x="58" y="104" text-anchor="middle">Treasury system</text>
<rect x="3" y="124" width="110" height="32" rx="4" fill="#eff6ff" stroke="#93c5fd"/>
<text x="58" y="144" text-anchor="middle">Collateral system</text>
<rect x="3" y="164" width="110" height="32" rx="4" fill="#eff6ff" stroke="#93c5fd"/>
<text x="58" y="184" text-anchor="middle">Ratings, workflow</text>
<rect x="3" y="204" width="110" height="32" rx="4" fill="#eff6ff" stroke="#93c5fd"/>
<text x="58" y="224" text-anchor="middle">General ledger</text>
<rect x="3" y="244" width="110" height="32" rx="4" fill="#eff6ff" stroke="#93c5fd"/>
<text x="58" y="264" text-anchor="middle">Economics</text>
<line x1="113" y1="60" x2="122" y2="60" stroke="#6b7280"/>
<line x1="113" y1="100" x2="122" y2="100" stroke="#6b7280"/>
<line x1="113" y1="140" x2="122" y2="140" stroke="#6b7280"/>
<line x1="113" y1="180" x2="122" y2="180" stroke="#6b7280"/>
<line x1="113" y1="220" x2="122" y2="220" stroke="#6b7280"/>
<line x1="113" y1="260" x2="122" y2="260" stroke="#6b7280"/>
<line x1="122" y1="60" x2="122" y2="260" stroke="#6b7280"/>
<line x1="122" y1="178" x2="126" y2="178" stroke="#6b7280"/>
<polygon points="131,178 125,174 125,182" fill="#6b7280"/>
<rect x="131" y="124" width="96" height="108" rx="4" fill="#fef3c7" stroke="#f59e0b"/>
<text x="179" y="164" text-anchor="middle">Landing area</text>
<text x="179" y="188" text-anchor="middle">Data quality</text>
<text x="179" y="202" text-anchor="middle">gate</text>
<line x1="227" y1="178" x2="240" y2="178" stroke="#6b7280"/>
<polygon points="245,178 239,174 239,182" fill="#6b7280"/>
<rect x="245" y="44" width="110" height="232" rx="4" fill="#ecfdf5" stroke="#34d399"/>
<text x="300" y="66" text-anchor="middle" font-weight="600">Integrated</text>
<text x="300" y="92" text-anchor="middle">Counterparty</text>
<text x="300" y="116" text-anchor="middle">Group</text>
<text x="300" y="140" text-anchor="middle">Facility</text>
<text x="300" y="164" text-anchor="middle">Balance</text>
<text x="300" y="188" text-anchor="middle">Collateral</text>
<text x="300" y="212" text-anchor="middle">Rating</text>
<text x="300" y="236" text-anchor="middle">Trade</text>
<text x="300" y="260" text-anchor="middle">Reference data</text>
<line x1="355" y1="178" x2="364" y2="178" stroke="#6b7280"/>
<line x1="364" y1="60" x2="364" y2="260" stroke="#6b7280"/>
<line x1="364" y1="60" x2="373" y2="60" stroke="#6b7280"/>
<line x1="364" y1="100" x2="373" y2="100" stroke="#6b7280"/>
<line x1="364" y1="140" x2="373" y2="140" stroke="#6b7280"/>
<line x1="364" y1="180" x2="373" y2="180" stroke="#6b7280"/>
<line x1="364" y1="220" x2="373" y2="220" stroke="#6b7280"/>
<line x1="364" y1="260" x2="373" y2="260" stroke="#6b7280"/>
<rect x="373" y="44" width="100" height="32" rx="4" fill="#eff6ff" stroke="#93c5fd"/>
<text x="423" y="64" text-anchor="middle">Staging</text>
<rect x="373" y="84" width="100" height="32" rx="4" fill="#eff6ff" stroke="#93c5fd"/>
<text x="423" y="104" text-anchor="middle">ECL</text>
<rect x="373" y="124" width="100" height="32" rx="4" fill="#eff6ff" stroke="#93c5fd"/>
<text x="423" y="144" text-anchor="middle">Floors</text>
<rect x="373" y="164" width="100" height="32" rx="4" fill="#eff6ff" stroke="#93c5fd"/>
<text x="423" y="184" text-anchor="middle">RWA</text>
<rect x="373" y="204" width="100" height="32" rx="4" fill="#eff6ff" stroke="#93c5fd"/>
<text x="423" y="224" text-anchor="middle">Limits</text>
<rect x="373" y="244" width="100" height="32" rx="4" fill="#eff6ff" stroke="#93c5fd"/>
<text x="423" y="264" text-anchor="middle">Early warning</text>
<line x1="473" y1="60" x2="482" y2="60" stroke="#6b7280"/>
<line x1="473" y1="100" x2="482" y2="100" stroke="#6b7280"/>
<line x1="473" y1="140" x2="482" y2="140" stroke="#6b7280"/>
<line x1="473" y1="180" x2="482" y2="180" stroke="#6b7280"/>
<line x1="473" y1="220" x2="482" y2="220" stroke="#6b7280"/>
<line x1="473" y1="260" x2="482" y2="260" stroke="#6b7280"/>
<line x1="482" y1="60" x2="482" y2="260" stroke="#6b7280"/>
<line x1="482" y1="178" x2="486" y2="178" stroke="#6b7280"/>
<polygon points="491,178 485,174 485,182" fill="#6b7280"/>
<rect x="491" y="124" width="90" height="108" rx="4" fill="#ecfdf5" stroke="#34d399"/>
<text x="536" y="174" text-anchor="middle">Results</text>
<text x="536" y="190" text-anchor="middle">store</text>
<line x1="581" y1="178" x2="590" y2="178" stroke="#6b7280"/>
<line x1="590" y1="100" x2="590" y2="220" stroke="#6b7280"/>
<line x1="590" y1="100" x2="594" y2="100" stroke="#6b7280"/>
<line x1="590" y1="140" x2="594" y2="140" stroke="#6b7280"/>
<line x1="590" y1="180" x2="594" y2="180" stroke="#6b7280"/>
<line x1="590" y1="220" x2="594" y2="220" stroke="#6b7280"/>
<polygon points="599,100 593,96 593,104" fill="#6b7280"/>
<polygon points="599,140 593,136 593,144" fill="#6b7280"/>
<polygon points="599,180 593,176 593,184" fill="#6b7280"/>
<polygon points="599,220 593,216 593,224" fill="#6b7280"/>
<rect x="599" y="84" width="118" height="32" rx="4" fill="#eff6ff" stroke="#93c5fd"/>
<text x="658" y="104" text-anchor="middle">Ledger postings</text>
<rect x="599" y="124" width="118" height="32" rx="4" fill="#eff6ff" stroke="#93c5fd"/>
<text x="658" y="144" text-anchor="middle">Regulatory returns</text>
<rect x="599" y="164" width="118" height="32" rx="4" fill="#eff6ff" stroke="#93c5fd"/>
<text x="658" y="184" text-anchor="middle">Dashboards</text>
<rect x="599" y="204" width="118" height="32" rx="4" fill="#eff6ff" stroke="#93c5fd"/>
<text x="658" y="224" text-anchor="middle">Stress tests</text>
<text x="360" y="312" text-anchor="middle" font-size="12">Data flows left to right. Lineage runs right to left: every output must trace back to the fields it came from.</text>
</g>
</svg>

Six kinds of source feed the machine. The **loan system** holds limits, balances, rates and payment histories. The **treasury system** holds the swap and the forward. The **collateral system** holds the plant's valuation and the charges over it. **Ratings and credit workflow** hold grades, watchlist states and approvals. The **general ledger** holds the accounts. **Economics** supplies the scenarios and their weights.

Everything lands, is checked, and is integrated into one risk data store at a common grain. Engines compute stages, expected credit losses, floors, risk-weighted assets, limit utilisation and early-warning flags. Results are stored with the run that produced them, and flow out to the ledger, the regulators, the dashboards and the stress tests.

### Your seat, and the feature this volume follows

You are still the business analyst in the risk change team at the India centre, and the three dates from Volume 1 have not moved: Basel 3.1 in the UK from 1 January 2027, expected credit loss for Indian banks from 1 April 2027, SA-CCR in India proposed from the same day [verify].

This volume follows one feature from the regulation to the auditor's file: **the RBI prudential floor** from Volume 2, Part 4 — the rule that no Stage 1 or Stage 2 exposure may carry less than a minimum provision. It is a good feature to learn on because it touches everything: balances and limits from the loan system, stages from the staging engine, model output from the ECL engine, conversion factors and floor rates from reference data, and postings to the ledger and the RBI's returns. And its right answers are already known: for the manufacturer, **₹0.528 crore at T0 and ₹7.32 crore at T2**, with the floor binding both times.

| What a business analyst does | For the floor feature |
|---|---|
| Understands the rule | What the RBI's directions require, on what exposure, from when |
| Specifies it | Business requirements, functional rules, user stories, acceptance criteria |
| Traces it | Every input field back to its source; every output to its consumers |
| Tests it | Test cases whose expected results are derived by hand before the system runs |
| Defends it | The evidence an auditor or supervisor will ask for |

### How the volume runs

Parts 1 to 5 are the data: the book as tables (Part 1), reference data (Part 2), transformation rules (Part 3), data quality (Part 4), and lineage under BCBS 239 (Part 5). Parts 6 to 8 are specification: requirements from business need to user story (Part 6), the UML and process pictures that remove ambiguity (Part 7), and dashboards (Part 8). Parts 9 and 10 are hands-on: SQL, then Python and Excel, on the 20-borrower book. Parts 11 to 13 take the feature live: testing (Part 11), agile delivery against a fixed regulatory date (Part 12), and the controls and audits that follow it for years (Part 13).

Each part closes with **On your desk** and three checks. Where the UK, EU, US and India differ, the part sets them side by side.

---

## Part 1 — The book as data

### From one table to many

Volume 1's book was one table: a row per borrower. A machine cannot work from that. It needs one table for each kind of thing, each with a **key** that identifies a row and a **grain** that says what one row is.

| Entity | One row per | Key | The manufacturer's rows |
|---|---|---|---|
| Counterparty | Legal entity | Counterparty ID | C01 — the manufacturer |
| Group | Group of connected clients | Group ID | G01 — the manufacturer and anything it controls |
| Facility | Credit facility | Facility ID | F01 term loan; F02 RCF |
| Balance | Facility, per day | Facility ID and date | F02 on T2: limit 50.00, drawn 44.00 |
| Collateral | Asset | Collateral ID | K01 plant and machinery; K02 stock and receivables |
| Charge | Link between a facility and an asset, with its rank | Facility ID and collateral ID | F01 on K01, first charge; F02 on K02, first charge |
| Rating | Grade for a counterparty, with dates it was valid | Counterparty ID and valid-from date | Grade 4 from T0; 7 from T2; 10 from T3 |
| Trade | Derivative | Trade ID | D01 swap; D02 currency forward |
| Netting set | Trades under one master agreement | Netting set ID | N01, holding D01 and D02 |
| Result | Calculated figure for a facility, date, regime and run | Facility ID, date, regime, run ID | F02 at T2 under the RBI's rules: stage, model ECL, floor, provision held |

The last row is the one that matters most and is most often forgotten: **results are data too**. A provision is not just a number on a report; it is a row, with the run that produced it and the inputs it used.

### Grain

Most wrong totals come from mixing grains. The manufacturer's rating is held once per counterparty; its balances once per facility. Join the two and the rating appears on both facility rows — harmless. But sum a counterparty-level figure across those facility rows and it is counted twice.

Collateral is where this bites hardest. The plant secures the term loan. If a new charge also ties it to the RCF, the plant appears on two facility rows, and a report that sums collateral value across facility rows shows ₹220 crore of plant that is worth ₹110 crore. Volume 1's allocation rule (Part 5) exists because of exactly this.

### Time

Risk data describes a moment. Every row needs to say **which moment** — and history must be kept, never overwritten.

| Counterparty | Grade | Valid from | Valid to |
|---|---:|---|---|
| C01 | 4 | T0 | T2 |
| C01 | 7 | T2 | T3 |
| C01 | 10 — default | T3 | — |

A question asked at T3 about the manufacturer's grade "as at T1" must return 4. The **valid-from and valid-to** dates make that possible; a table that simply updated the grade in place would answer 10 and quietly rewrite history.

Regulators push one step further. They ask not only what was true on a date, but **what the bank believed on that date** — because a rating approved late and back-dated changes history twice. Keeping both timelines, when a fact was true and when it was recorded, is called **bitemporal** data. Any figure that has been reported to a regulator needs it.

### Four kinds of data

| Kind | What it is | Changes | Examples from this series |
|---|---|---|---|
| Master | The identity of things | Rarely | Counterparty name, LEI, sector, country |
| Transactional | What happened | Constantly | Drawings, repayments, interest payments, trades |
| Reference | Shared values that rules depend on | Rarely, on known dates | Master scale, conversion factors, floor rates |
| Derived | What the machine calculates | Every run | Stage, ECL, floor, RWA |

### The practice dataset

Parts 9 and 10 work on Volume 1's book, held as four tables: **counterparty** (20 rows: ID, name, sector), **master_scale** (grade and PD), **grade_limit** (grade and the most EAD one borrower may have), and **exposure** (one row per borrower per date: grade, EAD, LGD). The exposure table holds two dates, T0 and T2. Only the manufacturer changes between them:

| cpty_id | as_of | grade | ead | lgd |
|---|---|---:|---:|---:|
| C01 | T0 | 4 | 145.60 | 0.1820 |
| C01 | T2 | 7 | 154.40 | 0.2331 |

The T2 LGD is the manufacturer's blended figure, loss if default ÷ EAD, from Volume 1's T2 estimates: (27.6% × 100 + 10% × 48.50 + 60% × 5.90) ÷ 154.40 = 35.99 ÷ 154.40 = 23.31%.

A **data dictionary** says what every field means. It is the analyst's first artefact and the one every later argument returns to.

| Field | Type | Unit | Definition | Source |
|---|---|---|---|---|
| cpty_id | Text | — | The bank's identifier for the legal entity | Party master |
| as_of | Date | — | The reporting date the row describes | Run parameter |
| grade | Integer, 1 to 10 | — | Approved internal grade valid on as_of | Rating system |
| ead | Decimal | ₹ crore | Exposure at default: own CCF for loans, SA-CCR for derivatives | Exposure engine |
| lgd | Decimal | Fraction, 0 to 1 | Blended LGD: loss if default ÷ EAD | LGD engine |

### On your desk

- **Keys and grain, per table, in writing.** Every table in a specification states its key and its grain. Most reconciliation breaks trace back to a join that silently changed the grain.
- **History by design.** Ratings, limits, stages, collateral values and reference data are effective-dated. Updating in place is a defect, however convenient.
- **Units in the dictionary.** Crore or rupees, fraction or percentage, positive or negative for liabilities. Part 4 shows what a single unit mismatch does to a book.

### Check yourself

1. The plant, K01, is linked to the term loan. A new second charge links it to the RCF as well. A report sums collateral value across facility rows. What does it show for the plant, and what should the specification have said?
2. At T3 someone runs a report "as at T1". Which rating row must it use, and what breaks if the rating table has no valid-to date?
3. Why store the manufacturer's LGD as 0.2331 rather than 23.31 — and what must the dictionary say either way?

<details>
<summary>Answers</summary>

1. ₹220 crore — the plant counted once per facility row. The specification should have stated that collateral value is held at collateral grain and allocated to facilities by a rule, so that it is never summed across facility rows.
2. The grade 4 row, valid from T0 to T2. Without a valid-to date the query cannot tell which row applied at T1, and a table updated in place would return the current grade — 10 — for every past date.
3. Either convention works if it is used everywhere; the danger is mixing them. The dictionary must state the unit — here, a fraction between 0 and 1 — so that every feed and every calculation agrees.

</details>

---

## Part 2 — Reference data

### Small tables, large consequences

**Reference data** is the set of shared values that rules look up: the master scale, conversion factors, risk weights, floor rates, thresholds. The tables are small and change rarely, which is why they are dangerous. One wrong row is read by every calculation that touches it, and nothing looks broken.

This series has already built most of the bank's reference data.

| Table | Built in | Example row | Changes when |
|---|---|---|---|
| Master scale | Volume 1, Part 3 | Grade 7 → PD 3.20% | The PD model is recalibrated |
| Grade limits | Volume 1, Part 8 | Grade 7 → at most ₹90 crore to one borrower | Credit policy changes |
| Appetite thresholds | Volume 1, Part 8 | Grades 7–9 share: limit 10%, amber 8% | The board reviews appetite |
| Early-warning triggers | Volume 1, Part 8 | RCF utilisation above 80% | Credit policy changes |
| Delegated authority | Volume 1, Part 8 | Grade 7–9, up to ₹75 crore → credit committee | Governance changes |
| Collateral haircuts | Volume 1, Part 5 | Plant and machinery → 40% | Recovery evidence changes |
| Standardised CCFs | Volume 1, Part 4 | UK committed line → 40% from 1 January 2027 [verify] | Regulation changes |
| Scenario weights and multipliers | Volume 2, Part 3 | T2 downside → 30%, × 2.00 | Every quarter |
| Standardised risk weights | Volume 2, Part 7 | UK unrated investment-grade corporate → 65% [verify] | Regulation changes |
| RBI floor rates | Volume 2, Part 4 | Corporate loan, Stage 2 → 5.00% [verify] | Regulation changes |
| Output floor percentage | Volume 2, Part 9 | UK, 2027 → 60% [verify] | Regulation, on a schedule |

### Effective dating

Regulation changes on a date, and reference data must change on the same date without disturbing the past. From 1 April 2027 the RBI weight for a BBB-rated corporate falls from 100% to 75% (Volume 2, Part 7):

| Regime | Rating | Risk weight | Valid from | Valid to |
|---|---|---:|---|---|
| RBI standardised | BBB | 100% | — | 31 March 2027 |
| RBI standardised | BBB | 75% | 1 April 2027 | — |

A run for 31 March 2027 must use 100%, and a re-run of that date in June — to answer an auditor's question — must still use 100%. The run looks up reference data **as at its reporting date**, never as at the day it happens to be executed. The same holds for the floor rates: there is no row before 1 April 2027, because until then India provisions under IRAC.

### Mappings

A **mapping** translates one classification into another, and every regime needs its own. The manufacturer's RCF is one product in the loan system and three different things to three rulebooks:

| Source value | Maps to | For |
|---|---|---|
| Product: committed revolving credit | Other commitment, 40% from 1 January 2027 [verify] | UK standardised CCF |
| Product: committed revolving credit | Commitment over one year, 50% [verify] | US standardised CCF |
| Product: committed revolving credit | Undrawn committed line, at the RBI's conversion factor [verify] | Credit equivalent for India's floors |
| Internal grade 1 to 5 | Investment grade | UK risk-sensitive unrated corporate weight |
| Internal grade 6 to 9 | Not investment grade | UK risk-sensitive unrated corporate weight |

The last two rows are why the manufacturer's standardised weight jumped from 65% to 135% at T2. A mapping is a policy decision stored as data: it needs an owner, an approval and a history, like any rule.

### Identifiers and codes, four ways

| | UK | EU | US | India |
|---|---|---|---|---|
| Legal entity identifier (LEI) | Required for derivative trade reporting [verify] | Required for legal-entity borrowers in AnaCredit and for derivative reporting [verify] | Collected in large banks' loan-level stress-test data and derivative reporting [verify] | Required for non-individual borrowers with aggregate exposure of ₹5 crore or more, and for OTC derivative users [verify] |
| Industry classification | UK SIC 2007 | NACE | NAICS | NIC 2008 |
| Codes for reported items | The PRA's data point model for capital returns [verify] | The EBA's data point model; the ECB's AnaCredit manual | An MDRM code — from the Federal Reserve's Micro Data Reference Manual — for every item in every return [verify] | RBI return codes and its XBRL taxonomy, a machine-readable format for reports [verify] |

In India the LEI is not just a field. A borrower above ₹5 crore without one may not be sanctioned new exposure or have existing exposure renewed or enhanced [verify]. The manufacturer's ₹157 crore of limits puts it well above the line, so a lapsed LEI at annual review would stop the renewal — a data gap that becomes a lending decision.

### Ownership and change

| Role | Does what | For the RBI floor rates |
|---|---|---|
| Owner | Decides the values and is accountable for them | Head of credit risk for the India branch |
| Steward | Maintains definitions, quality and history | Risk data management |
| Custodian | Runs the systems that hold it | Technology |

A change to reference data is a change to every calculation that reads it, so it follows its own control: a request with a reason and a regulatory reference, an impact analysis naming the engines that read the table, a second person's approval, a test in a lower environment, and an effective date.

### On your desk

- **An inventory of reference tables**, each with its owner, its consumers, and its change history. The first question in any calculation defect is "which reference table did it read, and which row?"
- **As-at lookups everywhere.** Every engine reads reference data as at the reporting date. The requirement has to say so explicitly, because the easy implementation reads the latest row.
- **Mapping coverage checks.** Every product, every grade and every industry code must map to something in every regime. An unmapped value should stop the run, not fall silently into a default.

### Check yourself

1. On 15 April 2027 a report for 31 March 2027 is re-run. Which RBI weight for a BBB-rated corporate should it use, and what in the data makes that possible?
2. Why is "grades 1 to 5 are investment grade" held as a mapping table rather than written into the calculation code?
3. At T2 the manufacturer's LEI has lapsed and the annual review is due. What happens in India, and why does it concern a business analyst?

<details>
<summary>Answers</summary>

1. 100%. The reference table holds both rows with their valid-from and valid-to dates, and the engine looks up the row valid on the reporting date, 31 March, not on the day of the run.
2. Because it is a policy decision that can change, needs an owner's approval and a history, and must be visible to auditors and supervisors. Buried in code, it changes only with a software release and leaves no record of who decided.
3. Without a valid LEI the bank may not renew or enhance the manufacturer's facilities [verify]. The LEI is master data; its absence must be caught by a data check before the review, or a data gap becomes a lending stop.

</details>

---

## Part 3 — Transformation rules

### What a rule has to say

A **transformation rule** turns inputs into an output. Written well, a developer can build it without asking a question, and a tester can derive its answer before the system runs. Written badly, it is a sentence like "apply the RBI floor" — which leaves every real decision to whoever codes it.

| Element | What it states |
|---|---|
| ID and name | A stable reference used by tests, lineage and audit |
| Purpose | Why the rule exists, with the regulatory or policy reference |
| Inputs | Every field, with its source and unit |
| Logic | A formula or pseudo-code, precise enough to have exactly one reading |
| Grain | The level at which the output is produced |
| Output | Field, type and unit |
| Exceptions and defaults | What happens when an input is missing, negative or out of range |
| Effective dates | When the rule applies |
| Worked example | A real case with its answer |
| Tests | The test cases that prove it |

### The floor, as eight rules

| ID | Rule | Logic |
|---|---|---|
| TR-01 | Undrawn commitment | For committed facilities: max(0, limit − drawn). For a term loan fully disbursed: 0 |
| TR-02 | Credit equivalent | Undrawn × the RBI conversion factor for the product, effective on the reporting date |
| TR-03 | Floor base | Funded balance + credit equivalent |
| TR-04 | Stage | 3 if the counterparty is in default; otherwise 2 if any SICR test fires (Volume 2, Part 2); otherwise 1. Record every test that fired as a reason code |
| TR-05 | Floor rate | Look up exposure class and stage in the floor-rate table effective on the reporting date. No row before 1 April 2027 |
| TR-06 | Floor amount | Floor base × floor rate |
| TR-07 | Provision held | max(model ECL, floor amount), **per facility** |
| TR-08 | Provision source | "Floor" if the floor amount exceeds the model ECL, otherwise "Model" |

Each rule does one thing. That makes each one testable on its own, and lets the lineage in Part 5 point at the exact rule behind every field.

### The manufacturer, run through the rules

The model ECL per facility comes from Volume 2, Part 3: at T0, 0.0915 on the term loan and 0.0173 on the RCF; at T2, 2.9710 and 0.4923. Take the RBI conversion factor as 40%, as Volume 2 did [verify].

| T0 | Funded | Limit | Undrawn | Credit equivalent | Floor base | Stage | Floor rate | Floor | Model ECL | Held | Source |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| F01 term loan | 100.00 | 100.00 | 0.00 | 0.00 | 100.00 | 1 | 0.40% | 0.400 | 0.0915 | 0.400 | Floor |
| F02 RCF | 20.00 | 50.00 | 30.00 | 12.00 | 32.00 | 1 | 0.40% | 0.128 | 0.0173 | 0.128 | Floor |
| **Total** | **120.00** | | | **12.00** | **132.00** | | | **0.528** | **0.1088** | **0.528** | |

| T2 | Funded | Limit | Undrawn | Credit equivalent | Floor base | Stage | Floor rate | Floor | Model ECL | Held | Source |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| F01 term loan | 100.00 | 100.00 | 0.00 | 0.00 | 100.00 | 2 | 5.00% | 5.000 | 2.9710 | 5.000 | Floor |
| F02 RCF | 44.00 | 50.00 | 6.00 | 2.40 | 46.40 | 2 | 5.00% | 2.320 | 0.4923 | 2.320 | Floor |
| **Total** | **144.00** | | | **2.40** | **146.40** | | | **7.320** | **3.4633** | **7.320** | |

The totals are Volume 2's: ₹0.528 crore and ₹7.32 crore. At T2 the staging rule fires on two tests — the residual PD at 9.0 times its origination level, and the watchlist at "Reduce" — so the stage carries both reason codes.

### Grain changes answers

TR-07 says **per facility**. Suppose instead the rule compared totals for the counterparty. For the manufacturer it makes no difference, because the floor binds on both facilities. But suppose at some date the term loan's model ECL were ₹5.20 crore against a floor of ₹5.00 crore, while the RCF's were ₹0.49 crore against ₹2.32 crore.

- Per facility: 5.20 + 2.32 = **7.52**
- Per counterparty: max(5.20 + 0.49, 5.00 + 2.32) = max(5.69, 7.32) = **7.32**

The same inputs, ₹0.20 crore apart, depending on one word in the specification. The regulation decides which is right; the analyst's job is to find out, write it down, and make sure a test proves it.

### Exceptions: never default silently

The dangerous case is the missing input. A committed RCF arrives with no limit. The easy code treats the limit as zero, so undrawn is zero, so the credit equivalent is zero, so the floor falls — and nothing looks wrong. The rule must say what happens instead: use the last approved limit and flag the record, or hold the facility out and stop the run. Which one is a policy decision for the rule's owner, not the developer.

The same discipline applies to drawings above the limit. If the RCF were drawn to ₹52 crore against a ₹50 crore limit, TR-01's max(0, …) keeps undrawn at zero rather than letting a negative number cut the floor base.

### Units and rounding

Calculate at full precision and round only when presenting. Rounding each facility before adding can make a total differ from the sum of its rounded parts, and a reconciliation that fails by ₹0.01 crore still fails. Returns often want a different unit from the platform: ₹7.32 crore is ₹732 lakh or ₹7,32,00,000, and the conversion is a rule like any other, with its own test.

### The same pattern for Basel 3.1 in the UK

| ID | Rule | Logic | The manufacturer |
|---|---|---|---|
| TR-09 | Investment-grade flag | "Y" if internal grade is 1 to 5, else "N" — from the mapping table | T0: Y. T2: N |
| TR-10 | Standardised risk weight, unrated corporate, risk-sensitive option | 65% if the flag is Y, else 135% | T0: 65%. T2: 135% |
| TR-11 | Standardised exposure, committed line | Drawn + 40% × undrawn, from 1 January 2027 [verify] | RCF at T0: 20 + 0.40 × 30 = 32.00 |

Different regulation, same shape: mapped inputs, one-step rules, effective dates, and answers that can be derived by hand.

### On your desk

- **Rules are numbered and versioned.** Tests, lineage and audit evidence cite rule IDs. When the RBI revises a rate, the rule does not change; the reference data does. When the logic changes, the rule gets a new version.
- **Grain is in the rule.** Every aggregation step — per facility, per counterparty, per group — is stated. So is every place where a maximum or minimum is taken.
- **Exception paths have owners.** For every missing or impossible input, the specification names the behaviour and who decided it.

### Check yourself

1. At T0 the term loan's credit equivalent is zero and the RCF's is ₹12 crore. Why?
2. Under what condition does taking the maximum per facility give a higher provision than taking it per counterparty?
3. A committed RCF arrives with a blank limit. What happens under code that treats blanks as zero, and what should the rule say?

<details>
<summary>Answers</summary>

1. The term loan is fully disbursed, so nothing is undrawn. The RCF has ₹30 crore undrawn at T0, and 40% of it counts: 0.40 × 30 = 12.00.
2. When the model exceeds the floor on some facilities and the floor exceeds the model on others. Per facility, each takes its own higher figure; per counterparty, the totals are compared and the excess on one facility offsets the shortfall on another.
3. Undrawn becomes zero, the credit equivalent disappears and the floor is understated — silently. The rule should name the behaviour: use the last approved limit and flag it, or hold the facility out and stop the run, as decided by the rule's owner.

</details>

---

## Part 4 — Data quality

### Six questions to ask of every field

| Dimension | The question | A rule from this book |
|---|---|---|
| Completeness | Is everything there? | Every committed facility has a limit; every counterparty has a grade |
| Validity | Is it an allowed value? | LGD between 0 and 1; grade between 1 and 10 |
| Accuracy | Does it match the source of truth? | Drawn balances agree with the ledger |
| Consistency | Do related fields agree? | Stage 3 if and only if the default flag is set; watchlist "Reduce" implies Stage 2 |
| Timeliness | Is it recent enough? | Rating reviewed in the last twelve months; collateral valued in the last twelve months |
| Uniqueness | Is each thing recorded once? | One exposure row per counterparty per date |

### A bad load

The T2 extract arrives in the landing area with 21 rows for 20 borrowers, and five problems:

- **Cement**: LGD of 35.0 — keyed as a percentage, not a fraction
- **Hotels**: grade missing — the rating feed failed for that counterparty
- **Construction contractor**: EAD of −120.00 — a sign flipped in the source extract
- **Food processing**: LGD missing
- **Logistics**: the same row twice

The data quality gate runs its rules before anything moves on:

| Rule | Dimension | Rows failing | Pass rate | Threshold | Result |
|---|---|---:|---:|---:|---|
| Grade present | Completeness | 1 | 95.2% | 100% | Fail |
| LGD present | Completeness | 1 | 95.2% | 100% | Fail |
| LGD between 0 and 1 | Validity | 1 | 95.2% | 100% | Fail |
| EAD positive | Validity | 1 | 95.2% | 100% | Fail |
| One row per borrower | Uniqueness | 1 borrower duplicated | — | None allowed | Fail |

Two things in that table are easy to miss.

**A missing value escapes a range check.** The LGD rule caught cement's 35.0 but not food processing's blank, because a comparison with a missing value is neither true nor false — it is unknown, and "unknown" is not counted as a failure. Only the separate completeness rule caught it. Every range check needs a completeness check beside it.

**The damage is not where the error is.** Had the load gone through unchecked, the book would have reported:

| ₹ crore at T2 | Unchecked load | Correct |
|---|---:|---:|
| Book EAD | 1,778.80 | 2,008.80 |
| Book expected loss | 22.87 | 6.69 |

Hotels vanished entirely — its blank grade found no PD, so the join to the master scale dropped the row. Construction's ₹120 crore was subtracted instead of added. Logistics counted twice. And one LGD entered in the wrong unit — ₹0.18 crore of expected loss becoming ₹18.2 crore — more than tripled the book's expected loss on its own. Part 9 writes these checks in SQL and reproduces both columns.

### Severity decides what the gate does

Not every failure should stop the machine. The rule's severity says what happens.

| Severity | Gate action | Example |
|---|---|---|
| Critical | Stop the run; nothing moves on | Unit error in LGD; duplicate rows |
| High | Hold out the failing records; run the rest; report what was excluded | Grade missing for one counterparty |
| Medium | Run with a flag; fix before the next cycle | Collateral valuation thirteen months old |
| Low | Record the issue | Industry code missing for a counterparty with no exposure |

Holding a record out is not the end of it: a borrower missing from the provisioning run is itself a completeness failure in the result. Holdouts are reported, owned and fixed before sign-off.

### Unusual is not wrong

**Outlier** checks look for values that are possible but surprising. One common test flags anything outside fences built from the middle half of the data:

$$
\text{Lower fence} = Q_1 - 1.5 \times IQR \qquad \text{Upper fence} = Q_3 + 1.5 \times IQR
$$

where

- **Q₁** and **Q₃** are the first and third quartiles — a quarter of values fall below Q₁, a quarter above Q₃
- **IQR**, the interquartile range, is Q₃ − Q₁

For the twenty LGDs at T2, Q₁ is 0.35 and Q₃ is 0.40, so the IQR is 0.05 and the fences are 0.275 and 0.475. Cement's 35.0 is far outside — and wrong. But the manufacturer's 0.2331 is outside too, and it is right: the manufacturer is better secured than anyone else in the book.

That is the whole lesson of outliers. An outlier rule does not correct anything; it raises a question for someone who knows the business. The manufacturer's RCF utilisation jumping from 50% to 88% between T1 and T2 would trip any outlier test. It was not a data error. It was the early warning Volume 1 described.

### The issue log

Every failure that is not fixed in the run becomes an issue with an owner.

| Field | Example: the cement LGD |
|---|---|
| Issue ID | DQ-017 |
| Rule and dimension | LGD between 0 and 1 — validity |
| Records affected | 1 |
| Impact | Book expected loss overstated by ₹18.02 crore if loaded |
| Severity | Critical |
| Root cause | The LGD engine's output changed from fraction to percentage in a release |
| Fix | Correct at source; add a unit check to the engine's own release tests |
| Owner and due date | LGD model owner; before the next run |
| Status | Open, then closed with evidence |

### Data quality expectations, four ways

| | UK | EU | US | India |
|---|---|---|---|---|
| Supervisory focus | Accuracy of regulatory returns, with skilled-person reviews where it fails [verify] | Data quality within the supervisory review; the ECB's 2024 guide on risk data aggregation and reporting [verify] | Validity and quality edits in the Call Report and the stress-test data [verify] | Automated data flow from core systems to the RBI, and a supervisory data quality index on returns [verify] |
| What it asks of the bank | Controls over every return, and senior accountability for them | Data quality frameworks, lineage and management reporting | Edit checks passed before submission; resubmission when wrong | Returns generated from systems without manual intervention |

### On your desk

- **Rules with thresholds and severities**, catalogued like reference data: every rule has an ID, a dimension, a threshold and an owner.
- **A completeness rule beside every range rule**, and counts before and after every join.
- **Outlier rules route to people.** The output of an outlier check is a question with an addressee, not an automatic fix.
- **The issue log is evidence.** Auditors and supervisors read it to judge whether the bank knows its own data.

### Check yourself

1. The LGD range check reported one failure, but two LGDs were wrong. Why, and what fixes it?
2. Unchecked, the hotels' ₹60 crore disappears from the book. Where exactly does it go?
3. The manufacturer's LGD falls outside the outlier fences. What should happen next?

<details>
<summary>Answers</summary>

1. Food processing's LGD was blank. A range comparison with a blank value is unknown, not false, so it is not counted as a failure. A separate completeness rule — LGD present — catches it.
2. Nowhere visible. Its grade is blank, so the join to the master scale finds no matching grade and drops the row. The total falls by ₹60 crore with no error raised — which is why row counts are checked before and after every join.
3. Someone who knows the manufacturer confirms the value is genuine — here, because it is better secured than the rest of the book — and the check is recorded as reviewed. An outlier is a question, not an error.

</details>

---

## Part 5 — Lineage, and BCBS 239

### The principles

In 2008 many large banks could not say quickly and accurately how much they were owed by a failing counterparty, because the figure lived in dozens of systems that did not agree. The Basel Committee's response, published in 2013 as **BCBS 239**, is a set of principles for **risk data aggregation and risk reporting**.

| Group | Principle | What it means for the floor number |
|---|---|---|
| Governance and infrastructure | 1. Governance | A named owner for the ECL and floor data, approved by the board |
| | 2. Data architecture and IT infrastructure | One integrated store and one taxonomy, so the RBI return and the group figure come from the same rows |
| Aggregation | 3. Accuracy and integrity | ₹7.32 crore reconciles to the ledger and can be reproduced |
| | 4. Completeness | Every Indian facility is in the run; holdouts are counted and reported |
| | 5. Timeliness | The figure is ready inside the quarter-end timetable — and faster in a crisis |
| | 6. Adaptability | New cuts on demand: the floor top-up for auto borrowers, by this afternoon |
| Reporting | 7. Accuracy | Reports reconcile to the data they came from |
| | 8. Comprehensiveness | Every material credit risk is reported, not just the modelled ones |
| | 9. Clarity and usefulness | The committee sees what it needs to decide, with definitions |
| | 10. Frequency | Monthly in normal times, more often in stress |
| | 11. Distribution | The right people get it in time, and only they do |
| Supervisors | 12. Review | Supervisors test the bank against the principles |
| | 13. Remedial action | They require fixes and can impose measures |
| | 14. Home–host cooperation | The PRA and the RBI coordinate on a UK bank's Indian branch |

Principle 14 describes this bank exactly: its home supervisor is the PRA, its host supervisor for the branch is the RBI, and each will look at the same data.

| | UK | EU | US | India |
|---|---|---|---|---|
| How BCBS 239 applies | A supervisory expectation for the largest UK banks [verify] | The ECB's 2024 guide sets expectations for the banks it supervises directly [verify] | Expected of the largest banks through supervision, with no separate rule [verify] | No standalone rule; the RBI pursues the same aims through automated data flow and its data quality index on returns [verify] |

### Lineage: one number, walked back

**Lineage** is the record of where a number came from: every field, every system, every rule. It is how a bank shows accuracy and completeness rather than asserting them. Here is the manufacturer's T2 provision in India, walked from the output back to its sources.

<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Lineage of the manufacturer's T2 provision of 7.32 crore: seven source systems supply inputs to the staging, ECL and floor engines, whose results combine into the provision held" style="width:100%;max-width:720px;height:auto;display:block;margin:1rem auto">
<g font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="11" fill="#1f2937">
<text x="70" y="18" text-anchor="middle" font-weight="600">Source system</text>
<text x="240" y="18" text-anchor="middle" font-weight="600">Input at T2</text>
<text x="445" y="18" text-anchor="middle" font-weight="600">Engine</text>
<text x="635" y="18" text-anchor="middle" font-weight="600">Output</text>
<rect x="10" y="30" width="120" height="34" rx="4" fill="#eff6ff" stroke="#93c5fd"/>
<text x="70" y="51" text-anchor="middle">Rating system</text>
<rect x="10" y="74" width="120" height="34" rx="4" fill="#eff6ff" stroke="#93c5fd"/>
<text x="70" y="95" text-anchor="middle">Credit workflow</text>
<rect x="10" y="118" width="120" height="34" rx="4" fill="#eff6ff" stroke="#93c5fd"/>
<text x="70" y="139" text-anchor="middle">Model store</text>
<rect x="10" y="162" width="120" height="34" rx="4" fill="#eff6ff" stroke="#93c5fd"/>
<text x="70" y="183" text-anchor="middle">Economics</text>
<rect x="10" y="206" width="120" height="34" rx="4" fill="#eff6ff" stroke="#93c5fd"/>
<text x="70" y="227" text-anchor="middle">Collateral system</text>
<rect x="10" y="250" width="120" height="34" rx="4" fill="#eff6ff" stroke="#93c5fd"/>
<text x="70" y="271" text-anchor="middle">Loan system</text>
<rect x="10" y="294" width="120" height="34" rx="4" fill="#eff6ff" stroke="#93c5fd"/>
<text x="70" y="315" text-anchor="middle">Reference data</text>
<line x1="130" y1="47" x2="150" y2="47" stroke="#6b7280"/>
<line x1="130" y1="91" x2="150" y2="91" stroke="#6b7280"/>
<line x1="130" y1="135" x2="150" y2="135" stroke="#6b7280"/>
<line x1="130" y1="179" x2="150" y2="179" stroke="#6b7280"/>
<line x1="130" y1="223" x2="150" y2="223" stroke="#6b7280"/>
<line x1="130" y1="267" x2="150" y2="267" stroke="#6b7280"/>
<line x1="130" y1="311" x2="150" y2="311" stroke="#6b7280"/>
<rect x="150" y="30" width="180" height="34" rx="4" fill="#ffffff" stroke="#9ca3af"/>
<text x="240" y="51" text-anchor="middle">Grade 7</text>
<rect x="150" y="74" width="180" height="34" rx="4" fill="#ffffff" stroke="#9ca3af"/>
<text x="240" y="95" text-anchor="middle">Watchlist: Reduce</text>
<rect x="150" y="118" width="180" height="34" rx="4" fill="#ffffff" stroke="#9ca3af"/>
<text x="240" y="139" text-anchor="middle">Origination PD, 0.40% a year</text>
<rect x="150" y="162" width="180" height="34" rx="4" fill="#ffffff" stroke="#9ca3af"/>
<text x="240" y="183" text-anchor="middle">Scenarios and weights</text>
<rect x="150" y="206" width="180" height="34" rx="4" fill="#ffffff" stroke="#9ca3af"/>
<text x="240" y="227" text-anchor="middle">Plant valued at ₹90 crore</text>
<rect x="150" y="250" width="180" height="34" rx="4" fill="#ffffff" stroke="#9ca3af"/>
<text x="240" y="271" text-anchor="middle">Funded 144.00 · limit 50.00</text>
<rect x="150" y="294" width="180" height="34" rx="4" fill="#ffffff" stroke="#9ca3af"/>
<text x="240" y="315" text-anchor="middle">Floor rate 5.00% · CCF 40%</text>
<line x1="330" y1="47" x2="364" y2="47" stroke="#6b7280"/>
<polygon points="370,47 364,43 364,51" fill="#6b7280"/>
<line x1="330" y1="91" x2="364" y2="91" stroke="#6b7280"/>
<polygon points="370,91 364,87 364,95" fill="#6b7280"/>
<line x1="330" y1="135" x2="364" y2="135" stroke="#6b7280"/>
<polygon points="370,135 364,131 364,139" fill="#6b7280"/>
<line x1="330" y1="47" x2="366" y2="172" stroke="#6b7280" stroke-dasharray="3 3"/>
<line x1="330" y1="179" x2="364" y2="179" stroke="#6b7280"/>
<polygon points="370,179 364,175 364,183" fill="#6b7280"/>
<line x1="330" y1="223" x2="364" y2="223" stroke="#6b7280"/>
<polygon points="370,223 364,219 364,227" fill="#6b7280"/>
<line x1="330" y1="267" x2="366" y2="234" stroke="#6b7280" stroke-dasharray="3 3"/>
<line x1="330" y1="267" x2="364" y2="267" stroke="#6b7280"/>
<polygon points="370,267 364,263 364,271" fill="#6b7280"/>
<line x1="330" y1="311" x2="364" y2="311" stroke="#6b7280"/>
<polygon points="370,311 364,307 364,315" fill="#6b7280"/>
<rect x="370" y="30" width="150" height="122" rx="4" fill="#ecfdf5" stroke="#34d399"/>
<text x="445" y="80" text-anchor="middle" font-weight="600">Staging engine</text>
<text x="445" y="100" text-anchor="middle">Stage 2</text>
<text x="445" y="116" text-anchor="middle">two reasons fired</text>
<line x1="445" y1="152" x2="445" y2="157" stroke="#6b7280"/>
<polygon points="445,162 441,156 449,156" fill="#6b7280"/>
<rect x="370" y="162" width="150" height="78" rx="4" fill="#ecfdf5" stroke="#34d399"/>
<text x="445" y="194" text-anchor="middle" font-weight="600">ECL engine</text>
<text x="445" y="214" text-anchor="middle">Model ECL 3.4633</text>
<rect x="370" y="250" width="150" height="78" rx="4" fill="#ecfdf5" stroke="#34d399"/>
<text x="445" y="282" text-anchor="middle" font-weight="600">Floor engine</text>
<text x="445" y="302" text-anchor="middle">5.00% × 146.40 = 7.32</text>
<line x1="520" y1="100" x2="535" y2="100" stroke="#6b7280"/>
<line x1="535" y1="100" x2="535" y2="275" stroke="#6b7280"/>
<line x1="535" y1="275" x2="526" y2="275" stroke="#6b7280"/>
<polygon points="520,275 526,271 526,279" fill="#6b7280"/>
<line x1="520" y1="201" x2="554" y2="201" stroke="#6b7280"/>
<polygon points="560,201 554,197 554,205" fill="#6b7280"/>
<line x1="520" y1="300" x2="545" y2="300" stroke="#6b7280"/>
<line x1="545" y1="300" x2="545" y2="235" stroke="#6b7280"/>
<line x1="545" y1="235" x2="554" y2="235" stroke="#6b7280"/>
<polygon points="560,235 554,231 554,239" fill="#6b7280"/>
<rect x="560" y="160" width="150" height="90" rx="4" fill="#fef3c7" stroke="#f59e0b"/>
<text x="635" y="184" text-anchor="middle" font-weight="600">Provision held</text>
<text x="635" y="204" text-anchor="middle" font-size="14" font-weight="600">7.32</text>
<text x="635" y="222" text-anchor="middle">max(3.4633, 7.32)</text>
<text x="635" y="240" text-anchor="middle">Source: Floor</text>
<line x1="635" y1="250" x2="635" y2="266" stroke="#6b7280"/>
<polygon points="635,272 631,266 639,266" fill="#6b7280"/>
<rect x="560" y="272" width="150" height="34" rx="4" fill="#eff6ff" stroke="#93c5fd"/>
<text x="635" y="293" text-anchor="middle">Ledger · RBI return</text>
<text x="360" y="350" text-anchor="middle" font-size="12">Dashed lines: the grade and the balances also feed the ECL engine, as PD and EAD.</text>
</g>
</svg>

The same walk, at field level — the form an auditor actually asks for:

| Figure | At T2 | Produced by | Field | Rule |
|---|---:|---|---|---|
| Provision held | 7.32 | Results store | provision_held | TR-07 |
| Floor amount | 7.32 | Floor engine | floor_amount | TR-06 |
| Model ECL | 3.4633 | ECL engine | ecl_weighted | Volume 2, Part 3 |
| Floor rate | 5.00% | Reference data | floor_rate: corporate, Stage 2 | TR-05 |
| Stage | 2 | Staging engine | stage, reason codes | TR-04 |
| Grade | 7 | Rating system | approved_grade | — |
| Watchlist state | Reduce | Credit workflow | watchlist_state | — |
| Origination PD | 0.40% a year | Model store | pd_curve_at_origination | — |
| Floor base | 146.40 | Floor engine | floor_base | TR-03 |
| Funded balance | 144.00 | Loan system | outstanding_principal: F01 100.00, F02 44.00 | — |
| Undrawn | 6.00 | Floor engine | undrawn = limit − drawn | TR-01 |
| Credit equivalent | 2.40 | Floor engine | credit_equivalent | TR-02 |
| Conversion factor | 40% | Reference data | ccf: RBI, committed line [verify] | — |

Three **reconciliation points** sit on the path: funded balances against the ledger before the run; provisions held against the ledger postings after it; and the return against the results store before submission. Each is a control (Part 13) and a test (Part 11).

### On your desk

- **Lineage is written as the system is built**, at field level, with rule IDs — not reconstructed afterwards from code.
- **Critical data elements.** Not every field needs full lineage. The bank designates the fields that drive its key reports — grade, EAD, LGD, stage, provision — and documents those end to end first.
- **Home and host see the same data.** Where the PRA and the RBI both receive figures on the same book, the platform must prove they came from the same rows, or explain every difference.

### Check yourself

1. BCBS 239 separates aggregation from reporting. Which principle does a missing Indian facility breach, and which does a report that silently excludes it breach?
2. The auditor asks where the 146.40 in the floor came from. Walk it back to source fields.
3. Why do the grade and the loan balances each feed two engines in the lineage?

<details>
<summary>Answers</summary>

1. The missing facility breaches completeness of aggregation, principle 4. A report that leaves it out without saying so breaches the reporting principles on accuracy and comprehensiveness, 7 and 8.
2. Floor base 146.40 = funded balance 144.00 + credit equivalent 2.40 (TR-03). Funded: the loan system's outstanding principal, 100.00 on F01 and 44.00 on F02. Credit equivalent: undrawn 6.00 — limit 50.00 less drawn 44.00, both from the loan system (TR-01) — times the RBI conversion factor of 40% from reference data (TR-02).
3. The grade drives both the stage (through the SICR test) and the PD in the ECL calculation. The balances drive both the floor base and the EAD in the ECL calculation. One wrong source field therefore moves two numbers — and both sides of the maximum.

</details>

---

## Part 6 — Requirements

### From a regulation to a test

A requirement is a chain, and every link must be written down.

| Link | For the floor | Written by |
|---|---|---|
| The rule text | The RBI's ECL directions: minimum provisions for Stage 1 and Stage 2 exposures [verify] | The regulator |
| Business requirement | The branch must never hold less than the floor | Business analyst, with the rule's owner |
| Functional requirement | How the platform computes and stores it | Business analyst, with technology |
| User story | A slice of it that one team can build and demonstrate in one sprint | Business analyst, with the product owner |
| Acceptance criteria | The examples that prove the story works | Business analyst, with testers |
| Test case | Inputs, steps and expected results, run and evidenced | Testers, reviewed by the analyst |

If any link is missing, nobody can prove the regulation was met — which is the only question an auditor asks.

### Two documents, two audiences

| | Business requirements document (BRD) | Functional specification (FSD) |
|---|---|---|
| Answers | What the business needs, and why | How the system will behave |
| Written for | Business owners, finance, risk, compliance | Developers, testers, architects |
| Contains | Scope, objectives, business rules, reports, constraints, success measures | Data, transformation rules, screens, interfaces, error handling, non-functional requirements |
| Signed off by | The business owner | The business owner and the technology lead |

In agile teams the same content often lives in an epic, its features and their stories rather than in two documents — but the content does not go away, and regulated work usually keeps a signed-off BRD because audit asks for one.

### The BRD, for the floor

| ID | Requirement | Priority |
|---|---|---|
| BR-01 | From 1 April 2027, every Stage 1 and Stage 2 exposure of the India branch carries at least the RBI's floor for its exposure class [verify] | Must |
| BR-02 | The floor is measured on funded balances plus the credit equivalent of off-balance-sheet exposure, at the RBI's conversion factors | Must |
| BR-03 | For every exposure, the platform records whether the model or the floor set the provision | Must |
| BR-04 | Stage 3 floors rise with time in Stage 3, as the directions prescribe [verify] | Must |
| BR-05 | The day-one increase in provisions is captured for the CET1 transitional add-back, 2027–28 to 2030–31 [verify] | Must |
| BR-06 | Management sees the total floor top-up by portfolio every month | Should |
| BR-07 | Analysts can run what-ifs on the floor impact of staging changes | Could |

The priorities follow **MoSCoW**: must, should, could, won't this time. In regulatory work, "must" is not a matter of taste — it is whatever the rule requires by the date it requires it.

### The FSD, for the floor

| ID | Functional requirement | Rules |
|---|---|---|
| FR-01 | Compute undrawn commitment per committed facility | TR-01 |
| FR-02 | Compute the credit equivalent using the RBI conversion factor effective on the reporting date | TR-02 |
| FR-03 | Compute the floor base per facility | TR-03 |
| FR-04 | Assign the stage with reason codes | TR-04 |
| FR-05 | Look up the floor rate; compute the floor; hold the higher of model and floor per facility; record the source | TR-05 to TR-08 |
| FR-06 | Store every input and output per facility, reporting date and run | — |
| FR-07 | Produce the monthly floor top-up report by portfolio | — |

**Non-functional requirements** describe how well, not what:

| ID | Requirement |
|---|---|
| NFR-01 | Performance: the quarter-end provisioning run for the India book completes within four hours of data cut-off |
| NFR-02 | Reproducibility: any past run can be re-executed from its stored inputs with identical results |
| NFR-03 | Auditability: every output field is traceable to its inputs, rule versions and reference data rows |
| NFR-04 | Access: only authorised roles change reference data, with a second person's approval |
| NFR-05 | Retention: runs, inputs and results are kept for the bank's record-retention period |

Non-functional requirements are where regulated platforms most often fail. A calculation that is right but cannot be reproduced six months later is, to a supervisor, not right.

### User stories

A **user story** is a slice of a requirement written from the point of view of the person who needs it:

> As an **ECL analyst**, I want each Stage 1 and Stage 2 facility's provision to be the higher of its model ECL and the RBI floor, so that the branch never holds less than the regulatory minimum.

Its **acceptance criteria** are worked examples, written in the Given–When–Then form so that they can be read by the business and automated by testers.

```gherkin
Feature: RBI prudential floor

  Scenario: The floor binds on a Stage 2 corporate RCF
    Given a Stage 2 corporate RCF with a limit of 50.00 and drawn of 44.00 (₹ crore)
    And its model ECL is 0.4923
    And the RBI conversion factor is 40% and the Stage 2 floor rate is 5.00%
    When the provisioning run completes for T2
    Then the floor base is 46.40
    And the provision held is 2.32
    And the provision source is "Floor"

  Scenario: The model binds on a Stage 1 term loan
    Given a Stage 1 corporate term loan fully drawn at 80.00
    And its model ECL is 0.70
    And the Stage 1 floor rate is 0.40%
    When the provisioning run completes
    Then the floor amount is 0.32
    And the provision held is 0.70
    And the provision source is "Model"

  Scenario: A drawing above the limit never creates negative headroom
    Given a Stage 2 corporate RCF with a limit of 50.00 and drawn of 52.00
    And its model ECL is 0.00
    When the provisioning run completes
    Then the credit equivalent is 0.00
    And the provision held is 2.60
```

The first scenario is the manufacturer's RCF at T2 from Part 3; the second is a borrower whose own model is above its floor; the third is a boundary. Every expected value was worked out by hand before anyone wrote code.

A story is **ready** when it has acceptance criteria with worked answers, its data sources are identified, its rules are referenced, and its dependencies are known. It is **done** when the criteria pass, the lineage is updated, the tests are evidenced and the owner has accepted it.

### Tracing it all

The **traceability matrix** is how the chain is proven.

| Business requirement | Functional | Story | Tests | Status |
|---|---|---|---|---|
| BR-01 | FR-04, FR-05 | Floor per facility | TC-01, TC-02, TC-03 | Passed |
| BR-02 | FR-01, FR-02, FR-03 | Floor base | TC-02, TC-07, TC-08 | Passed |
| BR-03 | FR-05, FR-06 | Provision source | TC-01, TC-02 | Passed |
| BR-04 | FR-05 | Stage 3 floors | TC-03 | In progress |

A requirement without a test has not been proven. A test without a requirement is testing something nobody asked for.

### Who does what

| Activity | Business analyst | Credit risk, India | Finance | Technology | Model owner | Internal audit |
|---|---|---|---|---|---|---|
| Interpret the directions | R | A | C | I | C | I |
| Write BRD and FSD | R | A | C | C | C | I |
| Approve floor rates and conversion factors | C | A | R | I | I | I |
| Build | C | I | I | R, A | C | I |
| User acceptance testing | R | A | R | C | C | I |
| Post to the ledger | I | C | R, A | C | I | I |
| Review the controls | C | C | C | C | C | R, A |

**R**esponsible does the work, **A**ccountable owns the outcome, **C**onsulted is asked before, **I**nformed is told after. One A per row — two owners means no owner.

### On your desk

- **Worked answers before code.** Every acceptance criterion carries a number derived by hand. The spine of this series exists so that you can do that.
- **The rule, not the solution.** A requirement says what must be true; it does not say "add a column to table X". Solutions change; the regulation does not.
- **Traceability is maintained, not assembled.** The matrix is updated as stories move, so that it is true on the day an auditor asks.

### Check yourself

1. Write BR-02 as a story, from the point of view of the regulatory reporting analyst.
2. In the second scenario, why is the provision 0.70 and not 0.32?
3. A test exists for "the floor top-up report sorts portfolios alphabetically", but no requirement mentions sorting. What is wrong?

<details>
<summary>Answers</summary>

1. As a regulatory reporting analyst, I want the floor measured on funded balances plus the credit equivalent of undrawn commitments at the RBI's conversion factors, so that the provision I report meets the directions on the right exposure measure.
2. The floor is 0.40% × 80.00 = 0.32, but the model ECL is 0.70. The provision held is the higher of the two, and the model sets it.
3. Either a requirement is missing — someone needs that order and it should be written down — or the test is testing a design choice nobody asked for. Both break traceability.

</details>

---

## Part 7 — Pictures that specify: UML and process

### Which picture answers which question

Words describe; diagrams constrain. A sentence can hide an ambiguity for months. A box with an arrow into it cannot: either the floor engine receives balances from the data platform or it does not. The **Unified Modelling Language (UML)** gives each question its own picture.

| Diagram | Answers | In this volume |
|---|---|---|
| Use case | Who uses the system, and for what | The actors table below |
| Activity | What happens, in what order, with which decisions | The quarter-end run |
| Sequence | Which system asks which, and when | The provisioning run |
| State | What states a thing can be in, and what moves it between them | IFRS 9 stages |
| Class, or entity–relationship | What data exists and how it connects | Part 1's entity table |

### Who uses it

| Actor | Goal | Use cases |
|---|---|---|
| ECL analyst | Produce quarter-end provisions | Run provisioning; review floor impact; propose an overlay |
| Credit officer | Understand one borrower | View stage and the reasons for it |
| Model owner | Keep the model sound | Review model output and monitoring |
| Finance controller | Keep the books right | Approve the journal; reconcile to the ledger |
| Regulatory reporting analyst | File the RBI's returns | Extract provisions by return line |
| Internal auditor | Test the controls | Retrieve run evidence and lineage |
| Scheduler — a system, not a person | Start runs on time | Trigger the run at data cut-off |

Listing actors surfaces requirements that nobody mentioned: the auditor's use case is why NFR-02 and NFR-03 exist.

### What happens, in order

| Step | Activity | Decision |
|---:|---|---|
| 1 | Quarter-end data cut-off; extracts land | |
| 2 | Quality gate | Critical failure: stop, fix, re-extract. High: hold records out and report them |
| 3 | Stage every facility (TR-04) | |
| 4 | Model ECL per facility | |
| 5 | Floors (TR-01 to TR-08) | |
| 6 | Overlays proposed and approved | |
| 7 | Review against last quarter, with the attribution | Not approved: back to step 4 or 6, with the reason recorded |
| 8 | Post to the ledger and reconcile | Break above tolerance: investigate before sign-off |
| 9 | Reports and returns | |

The loops matter as much as the steps. Step 7 can send the run back, and the specification must say what may change on the second pass — overlays yes, source data no — or the loop becomes a way to tune the answer.

### Which system asks which

<svg viewBox="0 0 720 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sequence diagram of the quarter-end provisioning run across seven participants: scheduler, data platform, staging engine, ECL engine, floor engine, results store and general ledger" style="width:100%;max-width:720px;height:auto;display:block;margin:1rem auto">
<g font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="11" fill="#1f2937">
<rect x="15" y="16" width="90" height="34" rx="4" fill="#eff6ff" stroke="#93c5fd"/>
<text x="60" y="37" text-anchor="middle">Scheduler</text>
<rect x="115" y="16" width="90" height="34" rx="4" fill="#eff6ff" stroke="#93c5fd"/>
<text x="160" y="37" text-anchor="middle">Data platform</text>
<rect x="215" y="16" width="90" height="34" rx="4" fill="#eff6ff" stroke="#93c5fd"/>
<text x="260" y="37" text-anchor="middle">Staging</text>
<rect x="315" y="16" width="90" height="34" rx="4" fill="#eff6ff" stroke="#93c5fd"/>
<text x="360" y="37" text-anchor="middle">ECL engine</text>
<rect x="415" y="16" width="90" height="34" rx="4" fill="#eff6ff" stroke="#93c5fd"/>
<text x="460" y="37" text-anchor="middle">Floor engine</text>
<rect x="515" y="16" width="90" height="34" rx="4" fill="#eff6ff" stroke="#93c5fd"/>
<text x="560" y="37" text-anchor="middle">Results store</text>
<rect x="615" y="16" width="90" height="34" rx="4" fill="#eff6ff" stroke="#93c5fd"/>
<text x="660" y="37" text-anchor="middle">Ledger</text>
<line x1="60" y1="50" x2="60" y2="388" stroke="#9ca3af" stroke-dasharray="4 4"/>
<line x1="160" y1="50" x2="160" y2="388" stroke="#9ca3af" stroke-dasharray="4 4"/>
<line x1="260" y1="50" x2="260" y2="388" stroke="#9ca3af" stroke-dasharray="4 4"/>
<line x1="360" y1="50" x2="360" y2="388" stroke="#9ca3af" stroke-dasharray="4 4"/>
<line x1="460" y1="50" x2="460" y2="388" stroke="#9ca3af" stroke-dasharray="4 4"/>
<line x1="560" y1="50" x2="560" y2="388" stroke="#9ca3af" stroke-dasharray="4 4"/>
<line x1="660" y1="50" x2="660" y2="388" stroke="#9ca3af" stroke-dasharray="4 4"/>
<line x1="60" y1="80" x2="154" y2="80" stroke="#1f2937"/>
<polygon points="160,80 153,76 153,84" fill="#1f2937"/>
<text x="110" y="74" text-anchor="middle">1 · Run T2</text>
<line x1="160" y1="104" x2="190" y2="104" stroke="#1f2937"/>
<line x1="190" y1="104" x2="190" y2="120" stroke="#1f2937"/>
<line x1="190" y1="120" x2="166" y2="120" stroke="#1f2937"/>
<polygon points="160,120 167,116 167,124" fill="#1f2937"/>
<text x="166" y="99" font-size="10">2 · Quality gate</text>
<line x1="160" y1="144" x2="254" y2="144" stroke="#1f2937"/>
<polygon points="260,144 253,140 253,148" fill="#1f2937"/>
<text x="210" y="138" text-anchor="middle">3 · Facilities</text>
<line x1="260" y1="176" x2="354" y2="176" stroke="#1f2937"/>
<polygon points="360,176 353,172 353,180" fill="#1f2937"/>
<text x="310" y="170" text-anchor="middle">4 · Stages</text>
<line x1="160" y1="208" x2="454" y2="208" stroke="#1f2937"/>
<polygon points="460,208 453,204 453,212" fill="#1f2937"/>
<text x="310" y="202" text-anchor="middle">5 · Balances, limits, reference data</text>
<line x1="360" y1="240" x2="454" y2="240" stroke="#1f2937"/>
<polygon points="460,240 453,236 453,244" fill="#1f2937"/>
<text x="410" y="234" text-anchor="middle">6 · Stage, ECL</text>
<line x1="460" y1="272" x2="554" y2="272" stroke="#1f2937"/>
<polygon points="560,272 553,268 553,276" fill="#1f2937"/>
<text x="510" y="266" text-anchor="middle">7 · Provision</text>
<line x1="560" y1="304" x2="654" y2="304" stroke="#1f2937"/>
<polygon points="660,304 653,300 653,308" fill="#1f2937"/>
<text x="610" y="298" text-anchor="middle">8 · Journal</text>
<line x1="660" y1="336" x2="566" y2="336" stroke="#1f2937" stroke-dasharray="5 3"/>
<polygon points="560,336 567,332 567,340" fill="#1f2937"/>
<text x="610" y="330" text-anchor="middle">9 · Posted</text>
<line x1="560" y1="368" x2="66" y2="368" stroke="#1f2937" stroke-dasharray="5 3"/>
<polygon points="60,368 67,364 67,372" fill="#1f2937"/>
<text x="310" y="362" text-anchor="middle">10 · Complete and reconciled</text>
</g>
</svg>

Each arrow is an interface, and each interface needs its own specification: what is sent, at what grain, in what format, and what happens if it fails. Message 5 is the one a first draft usually misses. The floor engine needs balances, limits and reference data directly — not only what the ECL engine passes on — because its base is the RBI's exposure measure, not the model's. Solid arrows are requests; dashed arrows are replies.

### What moves a loan between stages

<svg viewBox="0 0 720 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="State diagram of IFRS 9 stages: Stage 1 to Stage 2 on a significant increase in credit risk, back after probation; Stage 2 to Stage 3 on default, back on cure; Stage 1 directly to Stage 3 on sudden default; Stage 3 to written off. The manufacturer's path runs Stage 1, Stage 2, Stage 3, written off" style="width:100%;max-width:720px;height:auto;display:block;margin:1rem auto">
<g font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="11" fill="#1f2937">
<circle cx="14" cy="135" r="6" fill="#1f2937"/>
<line x1="20" y1="135" x2="34" y2="135" stroke="#1f2937"/>
<polygon points="40,135 33,131 33,139" fill="#1f2937"/>
<text x="10" y="120" font-size="10">Made</text>
<rect x="40" y="110" width="130" height="50" rx="10" fill="#eff6ff" stroke="#1d4ed8" stroke-width="2"/>
<text x="105" y="131" text-anchor="middle" font-weight="600">Stage 1</text>
<text x="105" y="148" text-anchor="middle">12-month ECL</text>
<rect x="295" y="110" width="130" height="50" rx="10" fill="#eff6ff" stroke="#1d4ed8" stroke-width="2"/>
<text x="360" y="131" text-anchor="middle" font-weight="600">Stage 2</text>
<text x="360" y="148" text-anchor="middle">Lifetime ECL</text>
<rect x="550" y="110" width="130" height="50" rx="10" fill="#eff6ff" stroke="#1d4ed8" stroke-width="2"/>
<text x="615" y="131" text-anchor="middle" font-weight="600">Stage 3</text>
<text x="615" y="148" text-anchor="middle">Credit-impaired</text>
<rect x="550" y="228" width="130" height="44" rx="10" fill="#f3f4f6" stroke="#1d4ed8" stroke-width="2"/>
<text x="615" y="255" text-anchor="middle" font-weight="600">Written off</text>
<line x1="170" y1="124" x2="288" y2="124" stroke="#1d4ed8" stroke-width="2"/>
<polygon points="295,124 287,119 287,129" fill="#1d4ed8"/>
<text x="232" y="104" text-anchor="middle" font-size="10">Significant increase</text>
<text x="232" y="117" text-anchor="middle" font-size="10">in credit risk</text>
<line x1="295" y1="148" x2="177" y2="148" stroke="#9ca3af" stroke-width="1.5"/>
<polygon points="170,148 178,143 178,153" fill="#9ca3af"/>
<text x="232" y="168" text-anchor="middle" font-size="10">No longer significant,</text>
<text x="232" y="181" text-anchor="middle" font-size="10">after probation</text>
<line x1="425" y1="124" x2="543" y2="124" stroke="#1d4ed8" stroke-width="2"/>
<polygon points="550,124 542,119 542,129" fill="#1d4ed8"/>
<text x="487" y="104" text-anchor="middle" font-size="10">Default: over 90 days</text>
<text x="487" y="117" text-anchor="middle" font-size="10">or unlikely to pay</text>
<line x1="550" y1="148" x2="432" y2="148" stroke="#9ca3af" stroke-width="1.5"/>
<polygon points="425,148 433,143 433,153" fill="#9ca3af"/>
<text x="487" y="168" text-anchor="middle" font-size="10">Cured,</text>
<text x="487" y="181" text-anchor="middle" font-size="10">after probation</text>
<path d="M105,110 C105,50 615,50 615,103" fill="none" stroke="#9ca3af" stroke-width="1.5"/>
<polygon points="615,110 610,102 620,102" fill="#9ca3af"/>
<text x="360" y="54" text-anchor="middle" font-size="10">Sudden default</text>
<line x1="615" y1="160" x2="615" y2="221" stroke="#1d4ed8" stroke-width="2"/>
<polygon points="615,228 610,220 620,220" fill="#1d4ed8"/>
<text x="623" y="194" font-size="10">No expectation</text>
<text x="623" y="207" font-size="10">of recovery</text>
<text x="105" y="200" text-anchor="middle" font-size="10" fill="#1d4ed8">Manufacturer: T0, T1</text>
<text x="360" y="200" text-anchor="middle" font-size="10" fill="#1d4ed8">Manufacturer: T2</text>
<text x="540" y="200" text-anchor="end" font-size="10" fill="#1d4ed8">Manufacturer: T3</text>
<text x="360" y="262" text-anchor="middle" font-size="10" fill="#1d4ed8">Blue: the manufacturer's path</text>
</g>
</svg>

Every arrow is a rule, and every rule needs a test: the SICR tests of Volume 2, Part 2; the probation periods; the default definition; the write-off policy. A state diagram also makes the **missing** arrows visible. There is no arrow from Stage 3 straight to Stage 1: under this bank's rules a cured loan passes through Stage 2 and its probation first. If the rules said otherwise, the diagram would have to.

### On your desk

- **Diagrams are specifications**, versioned with the rules they describe. A sequence diagram that disagrees with the interface specification is a defect in one of them.
- **Precision beats notation.** A plain box-and-arrow picture that shows every interface is worth more than a perfectly notated diagram that leaves one out.
- **Draw the unhappy paths.** The quality gate's stop, the sign-off loop, the missing arrow — that is where defects live.

### Check yourself

1. Which diagram would have caught, before build, that the floor engine needs balances directly from the data platform?
2. Can a loan go from Stage 3 to Stage 1 in one reporting period under this bank's rules? How does the diagram tell you?
3. In the activity table, where can the run loop back, and what must the specification say about the loop?

<details>
<summary>Answers</summary>

1. The sequence diagram. Drawing message 5 forces the question of where the floor engine's exposure measure comes from, and the answer is not the ECL engine.
2. No. The only arrow out of Stage 3 other than write-off goes to Stage 2, after probation. The absence of an arrow is itself the specification.
3. At step 7, when the review does not approve the result, back to step 4 or 6. The specification must say what may change on the second pass — overlays and model reruns, with reasons recorded — and what may not, such as source data, so the loop cannot be used to tune the answer.

</details>

---

## Part 8 — Dashboards and wireframes

### What the committee needs at T2

A risk committee has an hour and three questions: what changed, how much does it matter, and what are we doing about it? A dashboard is a set of answers to those questions — each one defined, sourced and reconciled — and a **wireframe** is the drawing that fixes what goes where before anyone builds it.

### The specification comes first

Every tile is specified like any other output.

| Tile | Definition | Sources | Thresholds | T0 | T2 |
|---|---|---|---|---:|---:|
| Book EAD | Σ EAD | Exposure | — | 2,000.00 | 2,008.80 |
| Expected loss ÷ EAD | Σ PD × LGD × EAD ÷ Σ EAD | Exposure, master scale | Limit 0.35%; amber from 0.30% | 0.28% | 0.33% |
| Largest sector share | Largest sector's EAD ÷ book EAD | Exposure, counterparty | Limit 20%; amber from 18% | 20.00% | 20.35% |
| EAD in grades 7–9 | EAD in grades 7 to 9 ÷ book EAD | Exposure | Limit 10%; amber from 8% | 4.00% | 11.67% |
| Borrowers over their limit | Count where EAD exceeds the grade limit | Exposure, grade limits | Limit 0 | 0 | 1 |
| Watchlist | Borrowers and EAD by state | Credit workflow | — | None | 1 in Reduce: 154.40 |
| Output floor | RWA at the fully phased floor, 72.5% of standardised, less IRB RWA; zero if negative | Results store | Any positive amount | 0 | 31.95 |

The figures are Volume 1's appetite table and Volume 2's book capital, now defined precisely enough to be built. Every threshold is read from the appetite reference table in Part 2, never typed into the dashboard, so the board can change a limit without a software release.

### The wireframe

<svg viewBox="0 0 720 430" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Wireframe of the T2 credit risk dashboard: four appetite tiles, a bar chart of EAD by sector with the auto sector over its limit, a watchlist panel showing the manufacturer in Reduce at 171.6% of its limit, and a capital and provisions panel" style="width:100%;max-width:720px;height:auto;display:block;margin:1rem auto">
<g font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="11" fill="#1f2937">
<rect x="5" y="5" width="710" height="420" rx="6" fill="#ffffff" stroke="#9ca3af"/>
<text x="20" y="32" font-size="14" font-weight="600">India mid-corporate book — as at T2</text>
<text x="700" y="32" text-anchor="end" font-size="10" fill="#6b7280">Run reconciled to the ledger · definitions on every tile</text>
<rect x="20" y="48" width="155" height="72" rx="4" fill="#f9fafb" stroke="#d1d5db"/>
<text x="30" y="68">Expected loss ÷ EAD</text>
<circle cx="161" cy="64" r="6" fill="#f59e0b"/>
<text x="30" y="96" font-size="20" font-weight="600">0.33%</text>
<text x="30" y="112" font-size="10" fill="#6b7280">Limit 0.35% · amber 0.30%</text>
<rect x="195" y="48" width="155" height="72" rx="4" fill="#f9fafb" stroke="#d1d5db"/>
<text x="205" y="68">Largest sector: auto</text>
<circle cx="336" cy="64" r="6" fill="#dc2626"/>
<text x="205" y="96" font-size="20" font-weight="600">20.35%</text>
<text x="205" y="112" font-size="10" fill="#6b7280">Limit 20% · amber 18%</text>
<rect x="370" y="48" width="155" height="72" rx="4" fill="#f9fafb" stroke="#d1d5db"/>
<text x="380" y="68">EAD in grades 7–9</text>
<circle cx="511" cy="64" r="6" fill="#dc2626"/>
<text x="380" y="96" font-size="20" font-weight="600">11.67%</text>
<text x="380" y="112" font-size="10" fill="#6b7280">Limit 10% · amber 8%</text>
<rect x="545" y="48" width="155" height="72" rx="4" fill="#f9fafb" stroke="#d1d5db"/>
<text x="555" y="68">Borrowers over limit</text>
<circle cx="686" cy="64" r="6" fill="#dc2626"/>
<text x="555" y="96" font-size="20" font-weight="600">1</text>
<text x="555" y="112" font-size="10" fill="#6b7280">Limit 0</text>
<rect x="20" y="134" width="330" height="180" rx="4" fill="#f9fafb" stroke="#d1d5db"/>
<text x="30" y="154" font-weight="600">EAD by sector, top five (₹ crore)</text>
<text x="30" y="183">Auto</text>
<rect x="110" y="170" width="200" height="18" fill="#dc2626"/>
<text x="316" y="183" font-size="10">408.80</text>
<line x1="306.5" y1="164" x2="306.5" y2="194" stroke="#1f2937" stroke-dasharray="3 2"/>
<text x="30" y="209">Financial</text>
<rect x="110" y="196" width="73.4" height="18" fill="#93c5fd"/>
<text x="189" y="209" font-size="10">150.00</text>
<text x="30" y="235">Telecom</text>
<rect x="110" y="222" width="68.5" height="18" fill="#93c5fd"/>
<text x="184" y="235" font-size="10">140.00</text>
<text x="30" y="261">Cement</text>
<rect x="110" y="248" width="63.6" height="18" fill="#93c5fd"/>
<text x="180" y="261" font-size="10">130.00</text>
<text x="30" y="287">Construction</text>
<rect x="110" y="274" width="58.7" height="18" fill="#93c5fd"/>
<text x="175" y="287" font-size="10">120.00</text>
<text x="30" y="306" font-size="10" fill="#6b7280">Dashed line: sector limit, 20% of book = 401.76</text>
<rect x="365" y="134" width="335" height="180" rx="4" fill="#f9fafb" stroke="#d1d5db"/>
<text x="375" y="154" font-weight="600">Watchlist and limit excesses</text>
<text x="375" y="178" font-size="10" fill="#6b7280">Borrower</text>
<text x="495" y="178" font-size="10" fill="#6b7280">Grade</text>
<text x="535" y="178" font-size="10" fill="#6b7280">State</text>
<text x="595" y="178" font-size="10" fill="#6b7280">EAD</text>
<text x="645" y="178" font-size="10" fill="#6b7280">Limit use</text>
<line x1="375" y1="184" x2="690" y2="184" stroke="#d1d5db"/>
<text x="375" y="202">The manufacturer</text>
<text x="495" y="202">7</text>
<text x="535" y="202">Reduce</text>
<text x="595" y="202">154.40</text>
<text x="645" y="202" fill="#dc2626" font-weight="600">171.6%</text>
<text x="375" y="232" font-size="10">Passive breach: limit fell from 175 to 90 on the downgrade</text>
<text x="375" y="250" font-size="10">Covenant waiver approved by the board risk committee</text>
<text x="375" y="268" font-size="10">Stage 1 to Stage 2 this quarter: 1 borrower</text>
<text x="375" y="300" font-size="10" fill="#6b7280">Click a row: facilities, collateral, early-warning history</text>
<rect x="20" y="328" width="680" height="84" rx="4" fill="#f9fafb" stroke="#d1d5db"/>
<text x="30" y="348" font-weight="600">Capital and provisions</text>
<text x="30" y="372">IRB RWA 1,244.75 · output floor at 72.5%: 1,276.70 · the floor binds by 31.95</text>
<text x="30" y="396">The manufacturer: IFRS 9 allowance 3.46 plus overlay 1.60 · India provision 7.32, set by the floor</text>
</g>
</svg>

The bar for auto is red because it crosses the dashed limit line: 20% of ₹2,008.80 crore is ₹401.76 crore, and the sector holds ₹408.80 crore.

### Design rules

- **One question per tile.** A tile that needs a paragraph to explain is two tiles, or none.
- **Definitions one click away.** Each tile links to its row in the specification: formula, sources, thresholds, owner.
- **One as-at date, one run.** Every number on the page comes from the same run of the results store, and the page says which. A committee pack that shows ₹2,000.00 crore of EAD beside a dashboard showing ₹2,008.80 crore is not a contradiction — it is two dates — but only if both are labelled.
- **Sorted bars, not pies.** Seventeen sectors in a pie cannot be compared; sorted bars with the limit drawn on them can.
- **Change is the headline.** The column most read in any risk pack is "since last period". The manufacturer moved every appetite metric; the dashboard should make that the first thing seen.
- **Drill-down follows the grain.** Book to sector, sector to borrower, borrower to facility, facility to collateral — each level reconciles to the one above.

### On your desk

- **Specify before you draw.** The wireframe fixes layout; the tile specification fixes meaning. Build from both.
- **Test dashboards like calculations.** Each tile's T2 value is a test case with an expected answer from Part 9's queries.
- **Access is part of the design.** A dashboard with borrower names and exposures is confidential information, and BCBS 239's distribution principle asks for the right people to see it — and only them.

### Check yourself

1. The auto tile is red at 20.35%. Where does the colour come from, and what goes wrong if the amber and red thresholds are typed into the dashboard?
2. A committee member sees book EAD of ₹2,008.80 crore on the dashboard and ₹2,000.00 crore in last quarter's pack. What should the dashboard have shown to prevent the question?
3. By how much is the auto sector over its limit at T2, and how would the wireframe show it?

<details>
<summary>Answers</summary>

1. From the appetite reference table: red above the 20% limit, amber from 18%. Typed into the dashboard, the thresholds drift from the board's approved values the first time the board changes them, and the dashboard shows a colour nobody approved.
2. The as-at date and the run identifier on every number, and a "since last period" column: +8.80, all from the manufacturer's larger RCF drawing and derivative exposure.
3. By ₹7.04 crore: 408.80 − 401.76. The bar is drawn in red and crosses a dashed line marking the limit.

</details>

---

## Part 9 — SQL on the book

SQL is how an analyst asks a database a question without waiting for someone else to write the report. Everything in this part runs as written on the practice dataset of Part 1 — in SQLite, which needs nothing installed beyond a single file, and with small changes in any other database.

### Reading a query

Every query in this part is built from the same few clauses, always in this order.

| Clause | What it does | Example |
|---|---|---|
| SELECT | Picks the columns to show, or calculates new ones | SELECT name, ead |
| FROM | Names the table the rows come from | FROM exposure |
| JOIN … ON | Lines up rows from a second table where a key matches | JOIN counterparty c ON c.cpty_id = e.cpty_id |
| WHERE | Keeps only the rows that pass a test | WHERE as_of = 'T0' |
| GROUP BY | Collapses rows into one per group | GROUP BY sector |
| ORDER BY | Sorts the result; DESC means largest first | ORDER BY ead DESC |
| LIMIT | Shows only the first few rows | LIMIT 5 |

A few more words complete the vocabulary. AS gives a calculated column a name. SUM, COUNT, MAX and ROUND do what they say. A table can be given a short alias — exposure e — so that e.ead means the ead column of exposure. NULL means a value is missing. CREATE TABLE defines a table and its columns, INSERT adds rows, and UPDATE changes them. To run everything below, open a database file with SQLite's command-line tool — sqlite3 book.db — and paste each block in turn.

### Setting up the book

```sql
CREATE TABLE master_scale (
  grade INTEGER PRIMARY KEY,
  pd    REAL    NOT NULL
);

CREATE TABLE counterparty (
  cpty_id TEXT PRIMARY KEY,
  name    TEXT NOT NULL,
  sector  TEXT NOT NULL
);

CREATE TABLE exposure (
  cpty_id TEXT    NOT NULL REFERENCES counterparty (cpty_id),
  as_of   TEXT    NOT NULL,
  grade   INTEGER NOT NULL REFERENCES master_scale (grade),
  ead     REAL    NOT NULL,
  lgd     REAL    NOT NULL,
  PRIMARY KEY (cpty_id, as_of)
);

CREATE TABLE grade_limit (
  grade   INTEGER PRIMARY KEY,
  max_ead REAL    NOT NULL
);

INSERT INTO master_scale VALUES
  (1, 0.0005), (2, 0.0010), (3, 0.0020), (4, 0.0040), (5, 0.0080),
  (6, 0.0160), (7, 0.0320), (8, 0.0640), (9, 0.1280);

INSERT INTO grade_limit VALUES
  (1, 250), (2, 250), (3, 175), (4, 175), (5, 150),
  (6, 125), (7, 90), (8, 40), (9, 40);

INSERT INTO counterparty VALUES
  ('C01', 'The manufacturer',        'Auto'),
  ('C02', 'Tyre maker',              'Auto'),
  ('C03', 'Vehicle dealer group',    'Auto'),
  ('C04', 'Forging supplier',        'Auto'),
  ('C05', 'Pharmaceuticals',         'Pharmaceuticals'),
  ('C06', 'IT services',             'IT services'),
  ('C07', 'Cement',                  'Cement'),
  ('C08', 'Steel',                   'Steel'),
  ('C09', 'Textile exporter',        'Textiles'),
  ('C10', 'Non-bank lender',         'Financial'),
  ('C11', 'Real estate developer',   'Real estate'),
  ('C12', 'Hotels',                  'Hotels'),
  ('C13', 'Consumer goods',          'Consumer goods'),
  ('C14', 'Power distribution',      'Power'),
  ('C15', 'Logistics',               'Logistics'),
  ('C16', 'Chemicals',               'Chemicals'),
  ('C17', 'Telecom towers',          'Telecom'),
  ('C18', 'Retail chain',            'Retail'),
  ('C19', 'Construction contractor', 'Construction'),
  ('C20', 'Food processing',         'Food processing');

INSERT INTO exposure VALUES
  ('C01', 'T0', 4, 145.60, 0.182), ('C02', 'T0', 3, 150.00, 0.35),
  ('C03', 'T0', 6,  60.00, 0.40),  ('C04', 'T0', 5,  44.40, 0.35),
  ('C05', 'T0', 3, 120.00, 0.40),  ('C06', 'T0', 2,  90.00, 0.45),
  ('C07', 'T0', 4, 130.00, 0.35),  ('C08', 'T0', 6, 110.00, 0.40),
  ('C09', 'T0', 6,  70.00, 0.45),  ('C10', 'T0', 3, 150.00, 0.45),
  ('C11', 'T0', 7,  80.00, 0.30),  ('C12', 'T0', 6,  60.00, 0.35),
  ('C13', 'T0', 2, 100.00, 0.40),  ('C14', 'T0', 5, 120.00, 0.35),
  ('C15', 'T0', 5,  70.00, 0.40),  ('C16', 'T0', 4, 100.00, 0.35),
  ('C17', 'T0', 4, 140.00, 0.30),  ('C18', 'T0', 5,  80.00, 0.45),
  ('C19', 'T0', 6, 120.00, 0.40),  ('C20', 'T0', 5,  60.00, 0.40);

INSERT INTO exposure (cpty_id, as_of, grade, ead, lgd)
SELECT cpty_id, 'T2', grade, ead, lgd FROM exposure WHERE as_of = 'T0';

UPDATE exposure SET grade = 7, ead = 154.40, lgd = 0.2331
WHERE cpty_id = 'C01' AND as_of = 'T2';
```

Four tables, the grain stated by each primary key: one row per grade, per counterparty, per counterparty and date. The T2 rows are copied from T0 and only the manufacturer is changed — exactly as Volume 1 held the other nineteen still.

### Expected loss, borrower by borrower

A **join** lines up rows from two tables on a shared key. Here each exposure picks up its borrower's name and its grade's PD.

```sql
SELECT c.name, e.grade, m.pd, e.ead, e.lgd,
       ROUND(m.pd * e.ead * e.lgd, 3) AS el
FROM exposure e
JOIN counterparty c ON c.cpty_id = e.cpty_id
JOIN master_scale m ON m.grade = e.grade
WHERE e.as_of = 'T0'
ORDER BY el DESC, c.name
LIMIT 5;
```

| name | grade | pd | ead | lgd | el |
|---|---:|---:|---:|---:|---:|
| Construction contractor | 6 | 0.016 | 120.0 | 0.40 | 0.768 |
| Real estate developer | 7 | 0.032 | 80.0 | 0.30 | 0.768 |
| Steel | 6 | 0.016 | 110.0 | 0.40 | 0.704 |
| Textile exporter | 6 | 0.016 | 70.0 | 0.45 | 0.504 |
| Vehicle dealer group | 6 | 0.016 | 60.0 | 0.40 | 0.384 |

Replace the select list with totals and drop the ordering:

```sql
SELECT COUNT(*)                                        AS borrowers,
       ROUND(SUM(e.ead), 2)                            AS ead,
       ROUND(SUM(m.pd * e.ead * e.lgd), 3)             AS el,
       ROUND(100 * SUM(m.pd * e.ead * e.lgd) / SUM(e.ead), 2) AS el_pct
FROM exposure e
JOIN master_scale m ON m.grade = e.grade
WHERE e.as_of = 'T0';
```

| borrowers | ead | el | el_pct |
|---:|---:|---:|---:|
| 20 | 2000.0 | 5.641 | 0.28 |

Volume 1's ₹5.641 crore, from twenty rows.

### Sector concentration

**GROUP BY** collapses rows into one per group; the subquery supplies the book total for the share.

```sql
SELECT c.sector,
       COUNT(*)             AS borrowers,
       ROUND(SUM(e.ead), 2) AS ead,
       ROUND(100.0 * SUM(e.ead) /
             (SELECT SUM(ead) FROM exposure WHERE as_of = 'T0'), 2) AS share_pct
FROM exposure e
JOIN counterparty c ON c.cpty_id = e.cpty_id
WHERE e.as_of = 'T0'
GROUP BY c.sector
ORDER BY ead DESC, c.sector
LIMIT 5;
```

| sector | borrowers | ead | share_pct |
|---|---:|---:|---:|
| Auto | 4 | 400.0 | 20.0 |
| Financial | 1 | 150.0 | 7.5 |
| Telecom | 1 | 140.0 | 7.0 |
| Cement | 1 | 130.0 | 6.5 |
| Construction | 1 | 120.0 | 6.0 |

Three sectors tie at ₹120 crore. The second sort key, the sector name, makes the fifth row the same every time the query runs — without it, the database may return any of the three. A report whose rows change order between runs fails reconciliation for no reason.

### Concentration in one number

A **window function** computes across rows without collapsing them. SUM(ead) OVER () puts the book total on every row, so each share can be squared and added — the HHI of Volume 1, Part 7.

```sql
WITH book AS (
  SELECT ead, SUM(ead) OVER () AS total
  FROM exposure
  WHERE as_of = 'T0'
)
SELECT ROUND(SUM((ead / total) * (ead / total)), 4)       AS hhi,
       ROUND(1.0 / SUM((ead / total) * (ead / total)), 1) AS effective_names
FROM book;
```

| hhi | effective_names |
|---:|---:|
| 0.0554 | 18.1 |

### The largest names, and how fast they add up

RANK() numbers rows by exposure, giving ties the same rank; a running SUM shows how much of the book the top names hold together.

```sql
SELECT c.name, e.ead,
       RANK() OVER (ORDER BY e.ead DESC) AS rnk,
       ROUND(100.0 * SUM(e.ead) OVER (ORDER BY e.ead DESC, c.name
                                      ROWS UNBOUNDED PRECEDING)
             / SUM(e.ead) OVER (), 1) AS cum_share_pct
FROM exposure e
JOIN counterparty c ON c.cpty_id = e.cpty_id
WHERE e.as_of = 'T0'
ORDER BY rnk, c.name
LIMIT 5;
```

| name | ead | rnk | cum_share_pct |
|---|---:|---:|---:|
| Non-bank lender | 150.0 | 1 | 7.5 |
| Tyre maker | 150.0 | 1 | 15.0 |
| The manufacturer | 145.6 | 3 | 22.3 |
| Telecom towers | 140.0 | 4 | 29.3 |
| Cement | 130.0 | 5 | 35.8 |

Five names, a quarter of the borrowers, hold 35.8% of the book.

### The appetite table, from data

Volume 1's appetite table was worked by hand. Here it is as one query. Each **common table expression** — a named step introduced by WITH — does one job: sector totals, book totals, the four metrics, and finally the status against the thresholds.

```sql
WITH sector_ead AS (
  SELECT e.as_of, c.sector, SUM(e.ead) AS ead
  FROM exposure e
  JOIN counterparty c ON c.cpty_id = e.cpty_id
  GROUP BY e.as_of, c.sector
),
book AS (
  SELECT e.as_of,
         SUM(e.ead)                                                   AS ead,
         SUM(m.pd * e.ead * e.lgd)                                    AS el,
         SUM(CASE WHEN e.grade BETWEEN 7 AND 9 THEN e.ead ELSE 0 END) AS weak_ead,
         SUM(CASE WHEN e.ead > l.max_ead THEN 1 ELSE 0 END)           AS over_limit
  FROM exposure e
  JOIN master_scale m ON m.grade = e.grade
  JOIN grade_limit  l ON l.grade = e.grade
  GROUP BY e.as_of
),
metrics AS (
  SELECT b.as_of,
         ROUND(100 * b.el / b.ead, 2)       AS el_pct,
         ROUND(100 * MAX(s.ead) / b.ead, 2) AS sector_pct,
         ROUND(100 * b.weak_ead / b.ead, 2) AS weak_pct,
         b.over_limit
  FROM book b
  JOIN sector_ead s ON s.as_of = b.as_of
  GROUP BY b.as_of
)
SELECT as_of,
       el_pct,
       CASE WHEN el_pct     > 0.35 THEN 'Red' WHEN el_pct     >= 0.30 THEN 'Amber' ELSE 'Green' END AS el_rag,
       sector_pct,
       CASE WHEN sector_pct > 20   THEN 'Red' WHEN sector_pct >= 18   THEN 'Amber' ELSE 'Green' END AS sector_rag,
       weak_pct,
       CASE WHEN weak_pct   > 10   THEN 'Red' WHEN weak_pct   >= 8    THEN 'Amber' ELSE 'Green' END AS weak_rag,
       over_limit,
       CASE WHEN over_limit > 0    THEN 'Red' ELSE 'Green' END                                    AS limit_rag
FROM metrics
ORDER BY as_of;
```

| as_of | el_pct | el_rag | sector_pct | sector_rag | weak_pct | weak_rag | over_limit | limit_rag |
|---|---:|---|---:|---|---:|---|---:|---|
| T0 | 0.28 | Green | 20.0 | Amber | 4.0 | Green | 0 | Green |
| T2 | 0.33 | Amber | 20.35 | Red | 11.67 | Red | 1 | Red |

Volume 1's table, reproduced — including the auto sector sitting amber on day one. Two design choices are written into the query and belong in the specification. The status is computed on the **rounded** figure the committee sees, so a tile never shows 20.00% in red. And the thresholds here are typed into the query only for readability: in the platform they come from the appetite reference table, joined in like any other.

### Checking a load

First, the landing table **exposure_load** — a copy of the T2 rows with Part 4's five problems planted in it — and two small tables for the reconciliation that follows:

```sql
CREATE TABLE exposure_load AS
SELECT cpty_id, as_of, grade, ead, lgd FROM exposure WHERE as_of = 'T2';

UPDATE exposure_load SET lgd = 35.0   WHERE cpty_id = 'C07';
UPDATE exposure_load SET grade = NULL WHERE cpty_id = 'C12';
UPDATE exposure_load SET ead = -120.0 WHERE cpty_id = 'C19';
UPDATE exposure_load SET lgd = NULL   WHERE cpty_id = 'C20';
INSERT INTO exposure_load SELECT * FROM exposure_load WHERE cpty_id = 'C15';

CREATE TABLE risk_facility (facility_id TEXT, cpty_id TEXT, drawn REAL);
CREATE TABLE gl_balance    (facility_id TEXT, balance REAL);
INSERT INTO risk_facility VALUES ('F01', 'C01', 100.00), ('F02', 'C01', 44.00), ('F03', 'C02', 150.00);
INSERT INTO gl_balance    VALUES ('F01', 100.00), ('F02', 44.25), ('F03', 150.00), ('F04', 5.00);
```

Then the five data quality rules of Part 4:

```sql
SELECT 'Grade present'        AS rule, COUNT(*) AS failures FROM exposure_load WHERE grade IS NULL
UNION ALL
SELECT 'LGD present',          COUNT(*) FROM exposure_load WHERE lgd IS NULL
UNION ALL
SELECT 'LGD between 0 and 1',  COUNT(*) FROM exposure_load WHERE lgd NOT BETWEEN 0 AND 1
UNION ALL
SELECT 'EAD positive',         COUNT(*) FROM exposure_load WHERE ead <= 0
UNION ALL
SELECT 'One row per borrower', COUNT(*) FROM (
  SELECT cpty_id FROM exposure_load GROUP BY cpty_id HAVING COUNT(*) > 1
);
```

| rule | failures |
|---|---:|
| Grade present | 1 |
| LGD present | 1 |
| LGD between 0 and 1 | 1 |
| EAD positive | 1 |
| One row per borrower | 1 |

The third row is the missing-value trap from Part 4: food processing's blank LGD is not counted by NOT BETWEEN, because the comparison is unknown rather than false. Summing the unchecked table the way the book query does gives the wrong figures of Part 4 — ₹1,778.80 crore of EAD and ₹22.865 crore of expected loss — with the hotels silently dropped by the join.

### Reconciling risk to the ledger

A **full outer join** keeps rows from both sides, so items missing from either one show up.

```sql
SELECT COALESCE(r.facility_id, g.facility_id) AS facility_id,
       r.drawn,
       g.balance,
       ROUND(COALESCE(r.drawn, 0) - COALESCE(g.balance, 0), 2) AS difference,
       CASE
         WHEN r.facility_id IS NULL             THEN 'Missing in risk'
         WHEN g.facility_id IS NULL             THEN 'Missing in ledger'
         WHEN ABS(r.drawn - g.balance) <= 0.01  THEN 'Matched'
         ELSE 'Break'
       END AS status
FROM risk_facility r
FULL OUTER JOIN gl_balance g ON g.facility_id = r.facility_id
ORDER BY facility_id;
```

| facility_id | drawn | balance | difference | status |
|---|---:|---:|---:|---|
| F01 | 100.0 | 100.0 | 0.0 | Matched |
| F02 | 44.0 | 44.25 | −0.25 | Break |
| F03 | 150.0 | 150.0 | 0.0 | Matched |
| F04 | — | 5.0 | −5.0 | Missing in risk |

The RCF's ledger balance includes ₹0.25 crore of interest added after the risk extract was taken — a timing difference, explained and closed. F04 is an overdraft the ledger holds and the risk platform has never seen — a completeness failure under BCBS 239, and a borrower whose provision was never calculated. An inner join would have hidden both.

### On your desk

- **Count before and after every join.** Rows that vanish or multiply at a join are the most common source of wrong totals.
- **Make ordering deterministic.** Every ORDER BY ends in a unique key, so reports are reproducible.
- **Write the check before the report.** The data quality queries and the reconciliation run first; the book query runs on what passes.

### Check yourself

1. Why does the sector query sort by sector name as well as EAD?
2. In the appetite query, what would change at T0 if the status were computed on the unrounded share, and why might that matter?
3. Which rows would the reconciliation lose if it used an inner join, and what would each have hidden?

<details>
<summary>Answers</summary>

1. Three sectors tie at ₹120 crore. Without a second key the database may return them in any order, so the fifth row could change between runs and two identical reports would not match.
2. Nothing here, because the unrounded T0 share is exactly 20%. But where arithmetic leaves a share a hair above a limit — 20.000000001% — the unrounded test says red while the tile shows 20.00%. Computing on the displayed precision keeps the colour and the number consistent; either way, the specification must say which.
3. F04, missing from the risk platform — hiding a borrower with no provision at all. The F02 break would still appear, but anything present on only one side would vanish from the report.

</details>

---

## Part 10 — Python and Excel on the book

SQL asks questions of data where it lives. Python takes the data out and does anything with it: models, simulations, tests, charts. Excel is where most of the bank will check an analyst's numbers. A business analyst on a credit risk programme needs enough of all three to reproduce a figure independently — which is what a test is.

### Reading the Python here

Six ideas are enough to read every line in this part.

- **A variable holds a value.** `rate = 0.05` stores the Stage 2 floor rate under the name rate.
- **A function is a named calculation.** `def floor(base, rate): return base * rate` defines one; `floor(146.40, 0.05)` runs it and gives 7.32.
- **A loop repeats.** `for t in range(1, 4):` runs the indented lines below it three times, with t equal to 1, then 2, then 3.
- **A dictionary looks things up.** `{1: 0.004, 2: 0.05}` maps a stage to its floor rate; `.get(stage, 0.0)` returns the rate, or 0.0 if the stage is not listed.
- **import loads a library** — pandas for tables, sqlite3 for the database. A line starting `#` is a comment for people, ignored by Python. `**` means "to the power of".
- **Running it.** Save the code in a file ending .py and run `python file.py`. Install the libraries once with `pip install pandas pytest`.

### The book in pandas

**pandas** is Python's table library. A DataFrame is a table in memory; each operation below is the Python twin of a query from Part 9. The script reads the SQLite file that Part 9's setup script builds, saved as book.db.

```python
import sqlite3
import pandas as pd

con = sqlite3.connect("book.db")
book = pd.read_sql("""
    SELECT c.cpty_id, c.name, c.sector, e.grade, m.pd, e.ead, e.lgd
    FROM exposure e
    JOIN counterparty c ON c.cpty_id = e.cpty_id
    JOIN master_scale m ON m.grade = e.grade
    WHERE e.as_of = 'T0'
""", con)

book["el"] = book["pd"] * book["ead"] * book["lgd"]
print(round(book["el"].sum(), 3))

by_sector = (book.groupby("sector")["ead"].sum()
                 .div(book["ead"].sum())
                 .sort_values(ascending=False))
print(by_sector.head(3).round(4))

share = book["ead"] / book["ead"].sum()
hhi = (share ** 2).sum()
print(round(hhi, 4), round(1 / hhi, 1))

stressed = book.assign(pd=(book["pd"] * 2).clip(upper=1))
print(round((stressed["pd"] * stressed["ead"] * stressed["lgd"]).sum(), 3))
```

| Printed | Value | The same figure in |
|---|---:|---|
| Book expected loss | 5.641 | Part 9, and Volume 1, Part 7 |
| Sector shares, top three | Auto 0.200 · Financial 0.075 · Telecom 0.070 | Part 9 |
| HHI and effective names | 0.0554 · 18.1 | Part 9 |
| Expected loss with every PD doubled | 11.282 | — |

The last line is a one-line stress: double every PD, capped at 100%, and expected loss doubles to ₹11.282 crore. It is exactly double here because no PD comes near the cap, and it is smaller than Volume 2's stressed ₹12.82 crore because that stress also added five points to every LGD.

### The calculation, as code

The IFRS 9 calculation of Volume 2, Part 3 and the floor rules of Part 3, as two functions.

```python
def ecl(pd_grade, scenarios, ead_tl, ead_rcf, eir, years, lifetime, lgd_rcf=0.10):
    """Probability-weighted expected credit loss for the term loan and RCF (Volume 2, Part 3)."""
    total = 0.0
    for s in scenarios:
        survive, ecl_s = 1.0, 0.0
        horizon = years if lifetime else 1
        for t in range(1, horizon + 1):
            p = pd_grade * (s["mult"] if t <= 2 else 1.0)
            loss = s["lgd_tl"] * ead_tl + lgd_rcf * ead_rcf
            ecl_s += survive * p * loss / (1 + eir) ** t
            survive *= 1 - p
        total += s["weight"] * ecl_s
    return total


FLOOR_RATE = {1: 0.004, 2: 0.05}   # corporate loans, RBI ECL directions [verify]
CCF_RBI = 0.40                     # credit equivalent of undrawn lines [verify]


def provision_held(model_ecl, stage, funded, undrawn):
    """Higher of the model ECL and the RBI floor. Stage 3 floors are a separate rule."""
    base = funded + CCF_RBI * max(undrawn, 0.0)
    floor = FLOOR_RATE.get(stage, 0.0) * base
    return (floor, "Floor") if floor > model_ecl else (model_ecl, "Model")
```

Every constant that is really reference data is named and marked. In the platform they would be read, as at the reporting date, from the tables of Part 2.

### What-ifs in a loop

Volume 2, Part 5's scenario table is four calls to the same function:

```python
from ecl import ecl

upside   = dict(mult=1.00, lgd_tl=0.240)
base     = dict(mult=1.25, lgd_tl=0.276)
downside = dict(mult=2.00, lgd_tl=0.330)

cases = {
    "As reported, 15/55/30": (0.15, 0.55, 0.30),
    "Base only":             (0.00, 1.00, 0.00),
    "Downside only":         (0.00, 0.00, 1.00),
    "Downside at 50%":       (0.15, 0.35, 0.50),
}

for name, (wu, wb, wd) in cases.items():
    scenarios = [dict(upside, weight=wu), dict(base, weight=wb), dict(downside, weight=wd)]
    print(f"{name:24} {ecl(0.032, scenarios, 100, 48.50, 0.09, 3, lifetime=True):.4f}")
```

| Case | Allowance |
|---|---:|
| As reported, 15/55/30 | 3.4633 |
| Base only | 2.9786 |
| Downside only | 4.9502 |
| Downside at 50% | 3.8577 |

Volume 2's figures, reproduced independently — which is the point. An analyst who can re-derive the engine's answer can tell when the engine is wrong.

### Hand-derived numbers become automated tests

The expected values worked out by hand across this series are exactly what a test needs. **pytest** runs every function whose name starts with test_ and reports which assertions failed.

```python
from pytest import approx
from ecl import ecl, provision_held

T0 = [dict(weight=0.20, mult=0.80, lgd_tl=0.186),
      dict(weight=0.60, mult=1.00, lgd_tl=0.204),
      dict(weight=0.20, mult=1.80, lgd_tl=0.276)]
T2 = [dict(weight=0.15, mult=1.00, lgd_tl=0.240),
      dict(weight=0.55, mult=1.25, lgd_tl=0.276),
      dict(weight=0.30, mult=2.00, lgd_tl=0.330)]


def test_t0_stage1_ecl():
    assert ecl(0.004, T0, 100, 42.50, 0.10, 5, lifetime=False) == approx(0.1088, abs=5e-5)


def test_t2_stage2_ecl():
    assert ecl(0.032, T2, 100, 48.50, 0.09, 3, lifetime=True) == approx(3.4633, abs=5e-5)


def test_t0_floor_binds():
    held, source = provision_held(0.1088, 1, funded=120, undrawn=30)
    assert held == approx(0.528) and source == "Floor"


def test_t2_floor_binds():
    held, source = provision_held(3.4633, 2, funded=144, undrawn=6)
    assert held == approx(7.32) and source == "Floor"


def test_excess_drawing_never_adds_negative_headroom():
    held, _ = provision_held(0.0, 2, funded=52, undrawn=-2)
    assert held == approx(2.60)
```

Run with `pytest -q`, all five pass. approx() allows for the last decimal place of rounding, because a test that demands 3.4633 to fifteen decimal places tests the floating-point hardware, not the rule. The tolerance is itself a requirement: half a unit of the last digit shown.

These five tests are Volume 2's numbers and Part 3's rules, frozen. If a future change to the engine moves the manufacturer's T2 allowance, a test fails before a quarter-end does.

### The same in Excel

| Figure | Excel formula, in a table named Book with a table named Scale |
|---|---|
| PD for a row | =XLOOKUP([@Grade], Scale[Grade], Scale[PD]) |
| Expected loss for a row | =[@PD] * [@EAD] * [@LGD] |
| Book expected loss | =SUM(Book[EL]) |
| Auto sector EAD | =SUMIFS(Book[EAD], Book[Sector], "Auto") |
| HHI | =SUMPRODUCT((Book[EAD] / SUM(Book[EAD]))^2) |
| Floor for the manufacturer's RCF at T2 | =5% * (44 + 40% * MAX(0, 50 - 44)) → 2.32 |
| Provision held | =MAX(0.4923, 2.32) → 2.32 |
| Status against a limit | =IF(x > limit, "Red", IF(x >= amber, "Amber", "Green")) |

### Which tool, when

| Task | Best tool | Why |
|---|---|---|
| Questions across millions of rows | SQL | The data stays where it is; the database does the work |
| Reproducing an engine's calculation | Python | Loops, functions, scenarios, and tests that can run on every change |
| A quick check a colleague can open | Excel | Everyone has it; every formula is visible |
| A number that goes to a regulator | None of these, alone | The platform produces it; the analyst's copy is how it is verified |

### On your desk

- **Independent reproduction.** For every key output, keep a small script or workbook that derives it another way. It is the fastest way to know whether a defect is in the engine or in the expectation.
- **Named constants, marked as reference data.** In analysis code as in the platform, a hard-coded 0.05 is a floor rate waiting to go stale.
- **Tests from the spine.** The worked examples in a specification should arrive in the test suite unchanged.

### Check yourself

1. Doubling every PD exactly doubled the book's expected loss. Under what condition would it not?
2. Why does the floor test compare with approx() rather than ==?
3. In the Excel floor formula, what does MAX(0, 50 − 44) protect against?

<details>
<summary>Answers</summary>

1. If doubling pushed any PD above 100%. The cap binds and that borrower's expected loss rises by less than double. In this book the highest PD is 3.20%, far from the cap.
2. Because calculations in floating point can differ from the decimal answer in the last few binary digits. The test should prove the rule to the precision the business uses, not to the hardware's.
3. A drawing above the limit. Without it, a negative undrawn amount would reduce the floor base — TR-01's max(0, …) in spreadsheet form.

</details>

---

## Part 11 — Testing

### Levels of testing

| Level | Asks | Who | For the floor |
|---|---|---|---|
| Unit | Does each rule work alone? | Developers | TR-01 to TR-08, one at a time |
| System integration (SIT) | Do the systems work together? | Test team | Loan system → data platform → engines → results → ledger |
| User acceptance (UAT) | Does it do what the business needs? | Business users and the analyst | The manufacturer at T0, T2 and T3; the boundaries; the book |
| Regression | Did the change break anything else? | Automated suite | The IFRS 9 allowance and the RWA, unchanged by the floor |
| Parallel run | Do old and new agree where they should, and differ only where they should? | Finance and credit risk | IRAC and ECL, side by side, on real quarter-ends |
| Dress rehearsal | Can the whole quarter-end run on time, end to end? | Everyone | The full timetable, with sign-offs, before go-live |

### Test cases from the spine

A test case states its inputs and its expected result **before** it runs. The spine supplies both.

| ID | Scenario | Inputs | Expected |
|---|---|---|---|
| TC-01 | Stage 1, floor binds — the manufacturer at T0 | Funded 120.00; RCF limit 50.00; model 0.0915 and 0.0173 | Held 0.528; source Floor on both facilities |
| TC-02 | Stage 2, floor binds — the manufacturer at T2 | Funded 144.00; RCF limit 50.00; model 2.9710 and 0.4923 | Floors 5.00 and 2.32; held 7.32; source Floor |
| TC-03 | Stage 3 — the manufacturer at T3 | Model 77.42; Stage 3 floors start at 25% [verify] — under ₹40 crore on this exposure | Held 77.42; source Model |
| TC-04 | SICR boundary, met exactly | Residual PD 0.50% at origination, 1.00% now | Stage 2: exactly twice, exactly 0.50 points higher |
| TC-05 | SICR boundary, just missed | Residual PD 0.50% at origination, 0.995% now | Stage 1, if no other test fires |
| TC-06 | Backstop boundary | 30 days past due; then 31 | Stage 1 at 30; Stage 2 at 31 |
| TC-07 | Committed facility with no limit | Limit blank | Record flagged under the approved exception rule; never a silent zero |
| TC-08 | Drawn above the limit | Limit 50.00; drawn 52.00; model 0.00; Stage 2 | Undrawn 0.00; held 2.60 |
| TC-09 | Effective dating | Runs for 31 March 2027 and 1 April 2027 | No floor on 31 March; floors from 1 April |
| TC-10 | Reconciliation | Any completed run | Total provision held = ledger postings for the run |
| TC-11 | Reproducibility | Re-run T2 from stored inputs | Every output identical, field by field |
| TC-12 | Default boundary | 90 days past due; then 91 | Stage 2 at 90; Stage 3 at 91 |

Most of the cases are boundaries. Defects cluster at edges — exactly 30 days, exactly twice, exactly the limit — because that is where "more than" and "at least" part company, and where a specification that did not say which gets built both ways.

### A defect, from failure to fix

In the first UAT cycle, TC-02 fails. The engine holds ₹7.50 crore at T2, not ₹7.32 crore.

| Field | Content |
|---|---|
| Defect | DEF-042: T2 floor on the manufacturer's RCF is 2.50, expected 2.32 |
| Found by | TC-02 |
| Analysis | 5% × 50.00 = 2.50. The floor base used the whole undrawn amount: the conversion factor applied was 100%, not 40% |
| Root cause | The product had no row in the RBI conversion-factor mapping, and the code fell back to 1.0 without saying so |
| Severity | High — a regulatory provision misstated |
| Priority | Must be fixed before UAT exit |
| Fix | Mapping row added; the engine now stops the run on an unmapped product, as Part 2 requires |
| New test | TC-13: an unmapped product stops the run and names the product |

One failed test, derived from a hand-worked number, found both a missing reference row and a silent default that would have hidden the next one. That is what tests from the spine are for.

**Severity** measures the damage; **priority** measures the urgency, and they differ. A wrong heading code on an RBI return does no harm to any number, but the return will be rejected on the filing deadline: low severity, top priority.

### Entry, exit and sign-off

| | UAT entry | UAT exit |
|---|---|---|
| Criteria | SIT exit met; test data loaded and reconciled to source; test cases reviewed and approved | Every must-have requirement's tests passed; no open critical or high defects; parallel-run differences explained; the business owner's sign-off |

### The parallel run

Before go-live the bank runs both regimes on the same real quarter-ends — December 2026 and March 2027 — and explains every difference. For a borrower in the manufacturer's T2 position, IRAC holds ₹0.58 crore and the new rules hold ₹7.32 crore. That is not a defect; it is the regulation, and the explanation is the Stage 2 floor. The parallel run's report is the difference, driver by driver, for the whole book — and it becomes the basis of the day-one transition adjustment in BR-05.

### Test data, and the people in it

UAT on production-like data finds the defects synthetic data misses, but the data describes real people: promoters, guarantors, individual borrowers. Where it travels, and who sees it, is regulated — and a team in India testing a UK group's data sits across two regimes at once.

| | UK | EU | US | India |
|---|---|---|---|---|
| Personal data law | UK GDPR and the Data Protection Act 2018 | GDPR | Gramm–Leach–Bliley Act and state privacy laws [verify] | Digital Personal Data Protection Act 2023; most of its rules apply from May 2027 [verify] |
| For test environments | Mask or pseudonymise; transfers abroad need a lawful basis and safeguards [verify] | The same [verify] | Safeguard customer information; limits on sharing [verify] | Consent, purpose limitation and security safeguards for personal data [verify] |

The manufacturer itself is a company, not a person. But its file holds its directors' and guarantors' details, and those fields are masked before any test environment sees them.

### On your desk

- **Expected results before execution**, always. A test whose expected result is read off the system's output proves nothing.
- **Boundaries first.** For every "more than", "at least" and "up to" in the rules, a test at the value, just above, and just below.
- **Every defect adds a test.** DEF-042 left behind TC-13, so the same failure cannot return unnoticed.
- **Parallel runs explain, not just compare.** A difference with a named driver is a result; a difference without one is a defect.

### Check yourself

1. TC-06 expects Stage 1 at 30 days past due. Why not Stage 2?
2. DEF-042 produced 2.50 where 2.32 was expected. Which single input explains the whole difference?
3. The parallel run shows the new rules holding ₹6.74 crore more than IRAC for a borrower like the manufacturer at T2. Is that a defect?

<details>
<summary>Answers</summary>

1. The backstop in the bank's SICR rules is **more than** 30 days past due. At exactly 30 it has not fired; at 31 it has.
2. The conversion factor: 100% applied instead of 40%. 5% × (44 + 6) = 2.50 against 5% × (44 + 0.40 × 6) = 2.32.
3. No. 7.32 − 0.58 = 6.74 is the Stage 2 floor applying where IRAC's standard-asset rate did. The parallel run explains it by driver and it feeds the transition adjustment.

</details>

---

## Part 12 — Delivery: agile against a fixed date

### The contradiction, and how banks resolve it

Agile delivery assumes the date follows the learning: build a slice, show it, adjust. Regulation fixes the date and much of the scope: floors from 1 April 2027, whatever was learned in February. Banks resolve the contradiction with a hybrid. **Milestones are fixed** — test phases, parallel runs, go-live. **Scope the regulation requires is fixed.** Everything else — the order of work, how stories are sliced, which "should" and "could" items make the release — flexes inside those walls.

### The backlog

Work is held as a hierarchy: an **epic** for the outcome, **features** for its parts, **stories** for slices a team can finish in a sprint.

| Feature, under the epic "India ECL go-live" | Needed by 1 April 2027? | Example stories |
|---|---|---|
| Staging with reason codes | Yes | SICR tests; backstops; probation; reason codes on every stage |
| Model ECL integration | Yes | Facility-level output; scenario weights from economics |
| Prudential floors | Yes | TR-01 to TR-08; the floor top-up report |
| Effective interest rate | Yes, for new loans; legacy loans by 31 March 2030 [verify] | EIR calculation; amortisation of fees |
| Ledger postings | Yes | Journal mapping; reconciliation to the ledger |
| Regulatory returns | Yes | Return lines, units and validations |
| CET1 transitional add-back | Yes | Day-one amount; the taper schedule |
| What-if tool | No — BR-07 is a "could" | Staging-threshold sensitivities |

### What goes first

MoSCoW decides what is in. For the order of what is in, many banks use **weighted shortest job first (WSJF)**, from the Scaled Agile Framework:

$$
WSJF = \frac{\text{Cost of delay}}{\text{Job size}}
$$

where

- **Cost of delay** is the sum of relative scores for business value, time criticality, and risk reduction
- **Job size** is the relative effort to deliver it

| Feature | Value | Time criticality | Risk reduction | Cost of delay | Size | WSJF |
|---|---:|---:|---:|---:|---:|---:|
| Prudential floors | 8 | 10 | 5 | 23 | 5 | 4.6 |
| Staging with reason codes | 8 | 10 | 8 | 26 | 13 | 2.0 |
| What-if tool | 5 | 2 | 1 | 8 | 8 | 1.0 |

The scores are relative judgements, not measurements, and two things override them. Dependencies: the floor needs a stage, so staging's first stories go before the floor's, whatever the arithmetic says. And regulatory must-haves: the what-if tool can wait for a later release; the floors cannot.

### The analyst in the ceremonies

| Ceremony | What happens | What the analyst brings |
|---|---|---|
| Refinement | Stories are clarified, split and estimated | Acceptance criteria with worked answers; rule IDs; data sources |
| Sprint planning | The team commits to stories that meet the definition of ready | Answers to the last open questions |
| Daily stand-up | Blockers surface | Decisions from rule owners, fast |
| Review | Finished stories are shown to the business | A demonstration against the spine: 0.528 at T0, 7.32 at T2 |
| Retrospective | The team improves how it works | What the specification got wrong, and why |

### The plan to 1 April 2027

| When | What |
|---|---|
| October–November 2026 | Sprints 1 to 4: staging, floors, ledger mapping, returns |
| December 2026 | System integration testing. The December quarter-end becomes the first parallel-run dataset |
| January 2027 | UAT cycle 1, on December data |
| February 2027 | UAT cycle 2; the parallel-run report on December |
| March 2027 | Dress rehearsal on February data; go/no-go decision; March quarter-end run under both regimes |
| 1 April 2027 | Go-live |
| 30 June 2027 | The first quarter-end under ECL: the first real provisions, postings and returns |

The same platform team delivers the UK's Basel 3.1 release for 1 January 2027 — the investment-grade flag and weights (TR-09, TR-10), the new conversion factors (TR-11), the output floor. Both releases want the same test environments and the same people in December. That contention is the single biggest risk on the plan, and it belongs in the log.

### RAID: risks, assumptions, issues, dependencies

| Type | Item | Owner | Response |
|---|---|---|---|
| Risk | The UK and India releases compete for test environments in December | Programme manager | Separate environments booked; UK regression suite automated first |
| Risk | RBI conversion factors not in reference data before UAT | Credit risk, India | Loaded and approved by the end of November; TC-13 proves an unmapped product stops the run |
| Assumption | The ECL engine produces output per facility, as TR-07 needs | Model owner | Confirmed in writing; interface specified |
| Issue | Origination PD curves are missing for loans booked before the current rating model, so the SICR test cannot run on them | Model owner and credit risk | A fallback rule decided by the owners, documented and approved |
| Dependency | Finance technology changes the ledger interface | Finance technology | Delivery date in the plan; SIT slot reserved |

A **risk** might happen; an **issue** has happened. The missing origination curves are an issue because the data does not exist today — and the fallback is a policy decision for the rule's owners, which the analyst frames and documents but does not make.

### After go-live

Delivery does not end at go-live; it changes gear. A change to a live regulatory calculation needs an impact analysis, a regression run against the spine tests, sign-off from the rule owner, and a release window away from quarter-end. Most banks freeze releases to risk and finance platforms in the weeks around each quarter-end close.

### On your desk

- **Fixed and flexible, written down.** The plan states which milestones and which scope are fixed, so trade-offs in February are argued against the regulation, not against whoever is loudest.
- **Parallel-run data is a deliverable.** Quarter-ends before go-live are scarce. Missing December's means going live with one parallel run instead of two.
- **The RAID log is a management tool, not a record.** Every item has an owner and a response, and it is read at every steering meeting.

### Check yourself

1. It is February and the team is behind. Which of BR-01 to BR-07 could move to a later release, and which cannot?
2. Why does the December 2026 quarter-end matter so much to a go-live on 1 April 2027?
3. Why is the missing origination data an issue rather than a risk, and who decides the fallback?

<details>
<summary>Answers</summary>

1. BR-07, the what-if tool, is a "could" and can move; BR-06, the monthly top-up report, is a "should" and might, with the owner's agreement. BR-01 to BR-05 are what the directions require from 1 April 2027 and cannot.
2. It is the first real quarter-end that can be run through both regimes before go-live, giving UAT real data and the parallel run its first result. Lose it, and March is the only full rehearsal.
3. Because it has already happened — the data does not exist — rather than being something that might. The fallback is a policy decision for the rule's owners in credit risk and model risk; the analyst frames the options and documents the decision.

</details>

---

## Part 13 — Controls, audit and accountability

### Three lines of defence

| Line | Who | For the floor |
|---|---|---|
| First | The functions that run the process and own its risks: credit risk India, finance, the ECL team | Run the provisioning process and operate its controls |
| Second | Risk management and compliance, independent of the first | Set policy; challenge the results; validate the ECL model; check the directions are met |
| Third | Internal audit | Independent assurance to the board's audit committee that the first two lines work |

A business analyst in a change team works with all three: building the first line's controls into the platform, answering the second line's challenge, and assembling the evidence the third will test.

### The controls around the floor

A **control** is a step that prevents an error or detects it before it does harm.

| ID | Control | Type | Frequency | Owner | Evidence |
|---|---|---|---|---|---|
| C-01 | Facility count and balances in the run agree with the loan system | Detective, automated | Every run | ECL team | Completeness report, reviewed and signed |
| C-02 | Changes to reference data need a second person's approval | Preventive, manual | Every change | Credit risk, India | Change request with maker and checker |
| C-03 | Management overlays are approved with a documented rationale | Preventive, manual | Every quarter | Provisions committee | Minutes: amount, reason, expiry |
| C-04 | Provisions held reconcile to ledger postings | Detective, automated | Every run | Finance | Reconciliation with breaks explained |
| C-05 | Movements against last quarter are explained by driver | Detective, manual | Every quarter | ECL team, reviewed by finance | Attribution, signed |
| C-06 | The ECL model is monitored and periodically validated | Detective | Quarterly, and yearly | Model owner; model risk validates | Monitoring and validation reports |
| C-07 | Access to reference data and results is limited and reviewed | Preventive, automated | Continuous; reviewed quarterly | Technology | Access review sign-offs |

Every defect in this volume would have met one of them. The missing F04 overdraft fails C-01. The unmapped conversion factor of DEF-042 would have been caught by C-02's impact analysis, or by C-05 — a ₹0.18 crore movement with no driver to explain it. The ₹0.25 crore interest timing difference is the kind of break C-04 exists to explain.

### What auditors test

Auditors ask two questions of every control. **Design**: if it works as described, would it prevent or detect the error it is meant for? **Operation**: did it actually work, every time, over the period? The second is tested by sampling. An auditor who picks 25 of the year's reference data changes and finds one without a second approver has found an operating failure in C-02 — the design was sound; it was not followed.

A finding is written up with its risk, the action to fix it, an owner and a date. The action is tested before the finding closes. A remediation that cannot be evidenced has not happened.

### The evidence pack

At go-live the analyst assembles the file that answers "prove it":

- The signed BRD and FSD, with the rule references
- The traceability matrix: every requirement to its passed tests
- Test cases, results and run IDs; the defect log, closed
- The parallel-run report, with every difference explained
- Field-level lineage for the critical data elements
- Control descriptions, and evidence of each control's first operation
- The go/no-go minutes

It is assembled as the work happens. Rebuilt from memory in the week of an audit, it is always missing the one thing asked for.

### Accountability and assurance, four ways

| | UK | EU | US | India |
|---|---|---|---|---|
| Personal accountability | Senior Managers and Certification Regime: named senior managers answer for their areas, including regulatory reporting [verify] | Fit-and-proper assessment of the management body; no EU-wide named-responsibility regime [verify] | Sarbanes–Oxley: chief executive and finance officer certify financial reports and internal control over them, for listed companies [verify] | Board and senior management responsible under the RBI's governance directions [verify] |
| Supervisory findings | Skilled-person reviews commissioned by the PRA [verify] | Findings from on-site inspections and the annual supervisory review (SREP) [verify] | Matters requiring attention, and requiring immediate attention [verify] | Findings under risk-based supervision [verify] |
| Internal audit | Required, reporting to the audit committee | Required | Required; heightened standards for the largest national banks [verify] | Risk-based internal audit, and concurrent audit of key processes [verify] |
| Assurance over data sent to the supervisor | Controls over regulatory returns, with senior accountability [verify] | Validation rules and data quality reviews [verify] | Edit checks; resubmission when wrong [verify] | Automated data flow; the supervisory data quality index [verify] |

The bank in this series meets the UK and Indian columns at once: its senior managers answer to the PRA for the group, and the branch answers to the RBI for the same numbers.

### On your desk

- **Design controls in, don't bolt them on.** C-01, C-04 and C-07 are automated because the analyst wrote them into the requirements. Manual controls added after go-live are slower, weaker and first to be skipped.
- **Every control has evidence by design.** If a control produces no record, an auditor cannot test it, and an untested control counts as absent.
- **Findings are requirements.** An audit finding becomes a story in the backlog, with acceptance criteria that the auditor can re-test.

### Check yourself

1. Classify C-01 and C-02 by type, and name an error from this volume that each would catch.
2. An auditor samples 25 reference data changes and finds one with no second approver. Is that a design or an operating failure, and what does remediation look like?
3. Which items in the evidence pack together prove BR-01 was met?

<details>
<summary>Answers</summary>

1. C-01 is detective and automated; it would catch the F04 overdraft missing from the risk platform. C-02 is preventive and manual; its impact analysis would have caught a new product with no conversion-factor row before DEF-042 reached a run.
2. An operating failure: the control was designed correctly but not followed. Remediation fixes the cause — for instance, the platform refuses to activate a change without a second approval — reviews the unapproved change itself, and is re-tested by audit before the finding closes.
3. The traceability matrix linking BR-01 to FR-04 and FR-05, the passed tests TC-01 to TC-03 with their run IDs, the lineage showing the floor and provision fields, and the business owner's sign-off.

</details>

---

## The whole machine, on one table

One number — the manufacturer's provision in India at T2 — through every stage of the machine, with the control that guards each stage and the test that proves it.

| Stage | What happens | The manufacturer at T2 | Control | Test |
|---|---|---|---|---|
| Source | Facts are recorded where business happens | Loan system: term loan 100.00, RCF drawn 44.00, limit 50.00. Rating system: grade 7. Credit workflow: Reduce | — | — |
| Land and check | Quality rules run before anything moves on | Grade present, limit present, balances positive: pass | C-01 | Part 4's rules |
| Reference data | Values looked up as at the reporting date | Conversion factor 40% [verify]; Stage 2 floor rate 5.00% [verify] | C-02 | TC-09, TC-13 |
| Rules | Inputs become the floor base | Undrawn 6.00; credit equivalent 2.40; base 146.40 | — | TC-02, TC-07, TC-08 |
| Staging | A stage, with its reasons | Stage 2: PD at 9.0 times its origination level; watchlist Reduce | C-06 | TC-04, TC-05, TC-06, TC-12 |
| Model | Expected credit loss per facility | 2.9710 + 0.4923 = 3.4633 | C-03, C-06 | Part 10's tests |
| Floor | The minimum per facility | 5.00 + 2.32 = 7.32 | — | TC-02 |
| Result | The higher of the two, and which one set it | 7.32, set by the floor | C-05 | TC-02, TC-11 |
| Ledger | Posted and reconciled | Postings equal 7.32 | C-04 | TC-10 |
| Out | Returns, dashboards, evidence | RBI return; the T2 dashboard; the evidence pack | C-07 | Lineage; reproducibility |

Read down the fourth column and it is the manufacturer's story told as data. Read down the last two and it is the reason anyone should believe it.

---

## One client, four jurisdictions

The same manufacturer, seen through the data and control expectations of each regime.

| | UK | EU | US | India |
|---|---|---|---|---|
| Identifying the borrower | LEI for derivative reporting [verify] | LEI in AnaCredit and derivative reporting [verify] | LEI in loan-level stress-test data [verify] | LEI required above ₹5 crore of aggregate exposure; no renewal without it [verify] |
| Industry code | UK SIC 2007 | NACE | NAICS | NIC 2008 |
| Coding reported items | The PRA's data point model [verify] | The EBA's data point model | MDRM codes [verify] | RBI return codes and XBRL taxonomy [verify] |
| Risk data aggregation | Supervisory expectation for the largest banks [verify] | The ECB's 2024 guide [verify] | Supervisory expectation for the largest banks [verify] | Automated data flow and a data quality index on returns [verify] |
| Accountability | Senior Managers and Certification Regime [verify] | Fit and proper; supervisory review [verify] | Sarbanes–Oxley for listed banks; matters requiring attention [verify] | Board responsibility; risk-based supervision [verify] |
| Personal data in testing | UK GDPR | GDPR | Gramm–Leach–Bliley and state laws [verify] | DPDP Act 2023, rules phased in to 2027 [verify] |

The platform is one; the obligations are four. A business analyst who knows which column a requirement came from can tell a regulatory must from a local preference — and can tell a supervisor which rows in the data answer which of its questions.

---

## Reference numbers

| Figure | Value | Where |
|---|---:|---|
| Floor base at T0: 120.00 funded + 40% × 30.00 undrawn | 132.00 | Part 3 |
| Floor at T0: 0.40% × 132.00 (term loan 0.400, RCF 0.128) | 0.528 | Part 3 |
| Model ECL at T0: 0.0915 + 0.0173 | 0.1088 | Part 3 |
| Floor base at T2: 144.00 funded + 40% × 6.00 undrawn | 146.40 | Part 3 |
| Floor at T2: 5.00% × 146.40 (term loan 5.00, RCF 2.32) | 7.32 | Part 3 |
| Model ECL at T2: 2.9710 + 0.4923 | 3.4633 | Part 3 |
| Grain example: per facility against per counterparty | 7.52 against 7.32 | Part 3 |
| Manufacturer's LGD at T2: 35.99 ÷ 154.40 | 23.31% | Part 1 |
| Unchecked T2 load: EAD and expected loss | 1,778.80 and 22.87 | Part 4 |
| Correct T2 book: EAD and expected loss | 2,008.80 and 6.69 | Parts 4 and 9 |
| Cement unit error: impact on expected loss | 18.02 | Part 4 |
| LGD quartiles and outlier fences | 0.35, 0.40; 0.275, 0.475 | Part 4 |
| Book at T0: expected loss, and as a share of EAD | 5.641; 0.28% | Part 9 |
| HHI and effective names | 0.0554; 18.1 | Part 9 |
| Top five names' share of the book | 35.8% | Part 9 |
| Auto sector limit at T2, and the excess | 401.76; 7.04 | Part 8 |
| Reconciliation: RCF timing break; overdraft missing in risk | −0.25; 5.00 | Part 9 |
| Book expected loss with every PD doubled | 11.282 | Part 10 |
| Allowance at T2: as reported; base only; downside only; downside at 50% | 3.4633; 2.9786; 4.9502; 3.8577 | Part 10 |
| DEF-042: floor at a 100% conversion factor against 40% | 2.50 against 2.32 | Part 11 |
| New rules against IRAC at T2 | 7.32 against 0.58: 6.74 | Part 11 |

---

## Acronyms

| Acronym | Meaning |
|---|---|
| ADF | Automated data flow — the RBI's requirement for returns generated straight from bank systems |
| BCBS | Basel Committee on Banking Supervision |
| BCBS 239 | The committee's principles for risk data aggregation and risk reporting |
| BR | Business requirement |
| BRD | Business requirements document |
| CCF | Credit conversion factor |
| CET1 | Common equity tier 1 capital |
| C-01 … C-07 | The controls around the floor |
| DPDP | India's Digital Personal Data Protection Act 2023 |
| EAD | Exposure at default |
| ECL | Expected credit loss |
| EIR | Effective interest rate |
| FR | Functional requirement |
| FSD | Functional specification document |
| GDPR | General Data Protection Regulation |
| HHI | Herfindahl–Hirschman index |
| IG | Investment grade |
| IQR | Interquartile range |
| IRAC | Income recognition and asset classification — India's rules before ECL |
| LEI | Legal entity identifier |
| LGD | Loss given default |
| MDRM | Micro Data Reference Manual — the US dictionary of reported items |
| MoSCoW | Must, should, could, won't |
| NACE | The EU's classification of economic activities |
| NAICS | North American Industry Classification System |
| NFR | Non-functional requirement |
| NIC | India's National Industrial Classification |
| PD | Probability of default |
| PRA | Prudential Regulation Authority |
| RACI | Responsible, accountable, consulted, informed |
| RAG | Red, amber, green |
| RAID | Risks, assumptions, issues, dependencies |
| RWA | Risk-weighted assets |
| SIC | Standard Industrial Classification — the UK's industry codes |
| SICR | Significant increase in credit risk |
| SIT | System integration testing |
| SQL | Structured Query Language |
| SREP | Supervisory review and evaluation process |
| TC | Test case |
| TR | Transformation rule |
| UAT | User acceptance testing |
| UML | Unified Modelling Language |
| WSJF | Weighted shortest job first |
| XBRL | eXtensible Business Reporting Language |

---

## The compression

Volume 1 found that every number about a borrower can be derived by hand: a probability, an exposure, a loss, multiplied. Volume 2 found that four rulebooks ask two questions of those numbers — how much is already lost, and how much capital must stand behind the rest — and differ only in the parameters and the dates. This volume found that a bank answers both questions every day through a machine, and that the machine is only as good as three things: data whose meaning is fixed, rules precise enough to have one reading, and evidence that connects every output to its inputs.

That is the job. The regulation says what must be true. The business analyst turns it into rules that say exactly how, data that is defined before it is used, tests whose answers are known before the system runs, and controls that leave evidence behind. The platform then produces the number — and when someone asks, in a year or in five, why the manufacturer carried ₹7.32 crore at T2, the answer is not an opinion. It is a row, a rule, a reference value, a test and a signature, in that order.

Know the number. Know the rule. Prove the machine.
