---
title: "Credit Risk and Capital — Volume 2: The Funding Side and the Reporting Machine"
description: "The same bank, read from the right-hand side. Funding, liquidity and repricing at working knowledge; then, in full, the machine that turns every number in both volumes into a signed regulatory return — the data, the returns, the build, and the models underneath."
series: masterclass
status: live
updated: 2026-09-10
verified: false
tags:
  - liquidity
  - alm
  - irrbb
  - regulatory reporting
  - risk data
  - model risk
---

## Part 0 — Where the money comes from, and how to read this volume

Volume 1 read the asset side: ₹1,000 crore lent to ten borrowers, one of which failed, and what that did to capital. It treated the ₹1,300 crore of funding as given.

It is not given. It belongs to other people, most of whom can ask for it back tomorrow.

| Liabilities and equity | ₹ crore | Contractual maturity | Can it leave at short notice? |
|---|---:|---|---|
| Retail deposits — savings and current | 500 | On demand | Contractually yes; behaviourally rarely |
| Retail deposits — term | 400 | 6 months to 3 years | On premature withdrawal, with penalty |
| Wholesale deposits — corporates | 250 | 1 to 6 months | At maturity, and they will not roll if worried |
| Wholesale deposits — financial institutions | 150 | 7 to 90 days | Immediately, and first to go |
| Borrowings — market and refinance | 160 | Overnight to 5 years | Partly |
| Borrowings — Tier 2 subordinated | 40 | Over 5 years | No |
| Other liabilities | 50 | Various | No |
| Equity capital and reserves | 150 | Perpetual | Never |
| **Total** | **1,700** | | |

The business is the gap between the two sides: ₹1,000 crore lent for about four years, funded with money whose average contractual life is nearer one. Net interest income is **₹50.1 crore** a year — worth holding on to, because the steel default in Volume 1 cost ₹62.77 crore, more than a full year of it.

### How this volume is weighted

| Parts | Subject | Depth | Why |
|---|---|---|---|
| **1 to 3** | Liquidity, repricing, the investment book | **Working knowledge** — what it is, the formula, the number that moves, what breaks | Adjacent to a credit risk role; enough to hold the conversation and pick up the detail when the situation arises |
| **4 to 7** | Risk data, regulatory reporting, delivery, models | **Full** | This is the machine a credit risk business analyst actually works inside, and it is what connects everything in both volumes |

Parts 1 to 3 are deliberately compressed. Parts 4 to 7 are the point of this volume.

---

## Part 1 — Liquidity

Two tests, two horizons. **Thirty days:** do we survive a run? **One year:** is the funding structure sustainable?

### The event

April Y4. The steel default becomes public, a rating agency puts the bank on watch citing single-name concentration, and **₹270 crore walks out in a month** — ₹150 crore of financial-institution placements that decline to roll, ₹100 crore of maturing corporate deposits, ₹20 crore of retail. Nothing about the loan book changed. The bank simply became a name people did not want.

Loans cannot be called in. Only what can be sold or pledged today counts.

### The thirty-day test — LCR

$$
LCR = \frac{\text{High quality liquid assets}}{\text{Net cash outflows over 30 days under stress}} \geq 100\%
$$

Both halves are prescribed, not estimated, so the number means the same at every bank.

| Numerator — HQLA | ₹ crore | Haircut | Counts |
|---|---:|---:|---:|
| Balances with RBI above CRR | 72 | 0% | 72 |
| Government securities available | 374 | 0% | 374 |
| Corporate bonds, AA rated (Level 2A) | 60 | 15% | 51 |
| **Total HQLA** | | | **497** |

Advances count for nothing — they cannot be sold in thirty days near value. Level 2 assets are capped at 40% of HQLA; here they are 10%. Government securities held for the **statutory liquidity ratio (SLR)** are mandatory and therefore in principle unavailable, but RBI permits a defined portion to count anyway, on the reasoning that the bank could borrow against them from the central bank. [verify]

| Denominator — outflows | Balance ₹ crore | Run-off | Outflow ₹ crore |
|---|---:|---:|---:|
| Retail deposits — stable | 600 | 5% | 30.0 |
| Retail deposits — less stable | 300 | 10% | 30.0 |
| Wholesale — non-financial corporates | 250 | 40% | 100.0 |
| Wholesale — financial institutions | 150 | 100% | 150.0 |
| Undrawn committed credit lines | 108 | 30% | 32.4 |
| Other contractual outflows | — | — | 10.0 |
| **Gross outflows** | | | **352.4** |
| Less inflows within 30 days, capped at 50% | 80 | 50% | (40.0) |
| **Net cash outflows** | | | **312.4** |

Rates indicative and subject to change. [verify]

$$
LCR = \frac{497}{312.4} = 159\%
$$

**Three things to take from that table.**

**Funding is priced by who is lending it.** Retail savings run off at 5%; other banks' money runs off at 100%. Twenty times the flight risk on the same rupee, because a household does not move its salary account over a headline and a treasury desk moves that morning.

**The ₹108 crore of undrawn limits appears again.** It made ₹54 crore of RWA in Volume 1 and it makes ₹32.4 crore of assumed outflow here — same reasoning both times: distressed borrowers draw everything available.

**Inflows are capped** at 50% for corporate exposures and 75% of outflows overall. A bank cannot assume its way out by claiming borrowers will pay on time in a stress; the borrowers are in the same stress.

### What the ratio does not tell you

Run the actual ₹270 crore of outflows and rebuild both halves.

| | Before | Working, after the run | After |
|---|---:|---|---:|
| HQLA ₹ crore | 497 | 497 − 270 paid out | 227 |
| Retail deposits | 900 | 900 − 20 | 880 |
| ↳ outflow at 5% / 10% | 60.0 | 580(5%) + 300(10%) | 59.0 |
| Wholesale — corporates | 250 | 250 − 100 | 150 |
| ↳ outflow at 40% | 100.0 | 150 × 40% | 60.0 |
| Wholesale — financial institutions | 150 | all gone | 0 |
| ↳ outflow at 100% | 150.0 | — | 0.0 |
| Undrawn lines, other, less inflows | 2.4 | unchanged | 2.4 |
| **Net cash outflows ₹ crore** | **312.4** | | **121.4** |
| **LCR** | **159%** | 227 / 121.4 | **187%** |

**The ratio improved.** The bank has lost 54% of its liquid assets and all its wholesale bank funding, and the regulatory liquidity metric went up.

That is arithmetic behaving correctly, and it teaches the most important thing about the LCR: **the runnable funding ran, so the assumed future run-off fell.** The denominator shrank faster than the numerator. The ratio describes the *next* thirty days, and after the flighty money has gone, the next thirty days genuinely do look calmer.

What it cannot say is that a second month of the same size leaves the bank with nothing. Which is why a bank does not manage liquidity on the LCR. It manages on the **stock of HQLA in rupees**, the **daily net funding position**, and the maturity ladder below. The ratio is the regulatory floor, not the control.

### The maturity ladder

The LCR says nothing about *when inside* the thirty days the gaps fall, or about months two to sixty. The **structural liquidity statement (SLS)** slots every asset and liability into a time bucket by when it produces or consumes cash.

**Cumulative gap** is the running total of (inflows − outflows) from bucket 1 to that bucket. It is the number that matters, because a hole in week three is not fixed by a surplus in year four. **Tolerance limits** are RBI caps on how negative that cumulative gap may be, expressed as a percentage of cumulative outflows, and they tighten at the near end where the risk is — commonly cited as 5%, 10%, 15% and 20% for the first four buckets. [verify]

| Bucket | Inflows | Outflows | Gap | Cumulative gap | Cumulative outflows | Cum. gap % | Limit |
|---|---:|---:|---:|---:|---:|---:|---:|
| Day 1 | 130 | 40 | +90 | +90 | 40 | +225% | −5% |
| 2–7 days | 10 | 60 | −50 | +40 | 100 | +40% | −10% |
| 8–14 days | 10 | 50 | −40 | 0 | 150 | 0% | −15% |
| 15–30 days | 20 | 90 | −70 | −70 | 240 | **−29%** | **−20%** |
| 31 days–2 months | 30 | 120 | −90 | −160 | 360 | −44% | — |
| 2–3 months | 30 | 130 | −100 | −260 | 490 | −53% | — |
| 3–6 months | 80 | 200 | −120 | −380 | 690 | −55% | — |
| 6 months–1 year | 150 | 250 | −100 | −480 | 940 | −51% | — |
| 1–3 years | 400 | 300 | +100 | −380 | 1,240 | −31% | — |
| 3–5 years | 500 | 250 | +250 | −130 | 1,490 | −9% | — |
| Over 5 years | 340 | 210 | +130 | 0 | 1,700 | 0% | — |
| **Total** | **1,700** | **1,700** | | | | | |

All ₹ crore. Read the 15–30 day row across: outflows of ₹90 crore against inflows of ₹20 crore give a gap of −₹70 crore; added to the +₹0 running total it makes a cumulative gap of −₹70 crore; against ₹240 crore of cumulative outflows that is −29%, and the limit is −20%. **A breach** — on the same balance sheet, on the same day, that the LCR read 159%.

**Why they disagree.** Both are computed correctly and they treat the same ₹400 crore of government securities completely differently: HQLA under the LCR because they can be repo'd this afternoon, bucket ten under the SLS because they contractually mature in 3–5 years. The statement therefore permits marketable securities to be slotted by **expected realisation**, documented — and reslotting ₹374 crore into the near buckets turns the gaps positive.

**Behavioural slotting** is the same idea on the liability side, and it is bigger. ₹500 crore of savings and current accounts are contractually repayable on demand. Slot them at contractual maturity and Day 1 goes catastrophically negative and the statement is useless. But aggregate balances at this bank have not fallen below ₹380 crore in six years through two rate cycles. That ₹380 crore is the **core deposit** assumption: modelled, board-approved, back-tested, and reused in the EVE calculation in Part 2. It is the single most consequential judgement in ALM, and it sits under governance rather than in a modeller's spreadsheet.

### The one-year test — NSFR

The steel loan runs five years; the wholesale deposits funding part of it run three months. Every quarter the bank bets the market stays open. Nothing about that fails a thirty-day test.

$$
NSFR = \frac{\text{Available stable funding}}{\text{Required stable funding}} \geq 100\%
$$

**ASF** asks how much of each liability will still be here in a year: equity 100%, retail 90–95%, three-month bank money 0%. **RSF** asks how much long-term funding each asset needs behind it: cash 0%, government securities 5%, a five-year corporate loan 85%.

| | ₹ crore |
|---|---:|
| Available stable funding — equity 150, Tier 2 40, retail 840, corporate wholesale 125, long borrowings 100 | **1,255** |
| Required stable funding — advances 846, corporate bonds 60, G-secs 20, fixed assets 72, commitments 5 | **1,003** |
| **NSFR** | **125%** |

Factors indicative. [verify]

| | LCR | NSFR |
|---|---|---|
| Question | Survive thirty days of a run? | Is the structure sustainable for a year? |
| Fixed by | Holding liquid assets | Changing the composition of liabilities |
| Failure looks like | Not enough government securities | Long assets funded with short money |

A bank holding ₹800 crore of government securities funded entirely overnight has a magnificent LCR and a dreadful NSFR. It passes the thirty-day test and its business model is a bet that the interbank market opens tomorrow. That is why the second ratio was written, and it states the instruction that summarises this part: **fund long assets with long money.**

---

## Part 2 — Repricing, and who gets paid for it

Liquidity asks whether the money is there. This part asks what happens to the **spread** when rates move, and then who inside the bank should be credited with earning it.

### The trade

₹100 crore lent for five years at 10%, funded with six-month wholesale deposits at 6.5%. Spread ₹3.5 crore. Then the deposit matures and must be replaced — and if short rates have risen 200 basis points it costs 8.5%, while the loan still pays 10%, fixed.

Borrowing short and lending long is the business. It is also the exposure, and it is measured two ways.

### The earnings view — NII sensitivity

Everything repricing within a year is counted; everything beyond is ignored.

| | ₹ crore |
|---|---:|
| Rate-sensitive assets repricing within 1 year | 500 |
| Rate-sensitive liabilities repricing within 1 year | 800 |
| **Repricing gap** | **−300** |

$$
\Delta NII \approx \text{Gap} \times \Delta r = -300 \times 1\% = -\text{₹}3.0\ \text{crore}
$$

The bank is **liability-sensitive** — costs move up before income does. ₹3 crore is **6% of the ₹50.1 crore of net interest income** from Part 0.

Two limitations supervisors probe: it is blind beyond twelve months, so a thirty-year fixed mortgage book and a thirteen-month one look identical; and it assumes deposit rates move one-for-one with the market, which they do not. That pass-through is the **deposit beta**, a modelled input sitting under governance beside the core deposit assumption.

### The value view — EVE sensitivity

The ₹3 crore is one year's instalment of a longer bill. If rates rise and stay there, the bank is stuck earning 10% on a five-year loan while funding it dearer for its whole life.

So revalue everything. Assets fall when the discount rate rises; liabilities also fall, and a fall in what you owe is a gain. Which side wins depends on **duration** — how long the money is tied up.

$$
\Delta EVE \approx -\left(D_A - D_L \times \frac{L}{A}\right) \times A \times \Delta r
$$

| Input | Value |
|---|---:|
| Duration of assets | 2.4 years |
| Duration of liabilities | 1.5 years |
| Liabilities / assets | 1,550 / 1,700 |
| **Duration gap** | **1.03 years** |

$$
\Delta EVE = -1.03 \times 1{,}700 \times 1\% = -\text{₹}17.5\ \text{crore}
$$

That is **11.7% of Tier 1 capital**. The Basel outlier test applies six prescribed shocks and flags a bank whose EVE falls by more than 15% of Tier 1 under any of them. [verify] At ±200 basis points our bank is near 23% — an outlier, meaning supervisory attention and probably a Pillar 2 add-on.

| | NII sensitivity | EVE sensitivity |
|---|---|---|
| Horizon | Next 12 months | All future cash flows |
| Measures | Earnings | Value |
| Blind to | Anything beyond a year | Timing of earnings inside the horizon |

**The trap is running only one.** Manage to NII alone and a bank loads up on long fixed-rate assets funded by sticky deposits, which looks wonderful for twelve months and accumulates enormous duration. Manage to EVE alone and reported earnings swing violently, which is what analysts actually see. Both go to ALCO, both carry board limits, and both run on the same behavioural assumptions — so when the core deposit number changes, both numbers change.

### Funds transfer pricing

The branch lent at 10%, the retail network raised deposits at 5%, the bank earned 5%. Who earned it?

Give it all to lending and nobody raises deposits. Give it all to deposits and nobody lends. Split it and both are paid for something neither did — because a large part of that 5% was earned by **funding a five-year asset with six-month money**, which is a risk position, not a customer relationship.

**FTP** puts treasury in the middle as an internal counterparty: it buys funds from the deposit unit at a rate matched to their behavioural tenor and sells them to the lending unit at a rate matched to the loan's tenor.

| Component | On the steel loan | What it is | Who bears the risk |
|---|---:|---|---|
| Credit spread | ₹2.50 crore | Compensation for default risk | Lending unit |
| Deposit spread | ₹1.00 crore | Value of raising funds below market | Deposit unit |
| Maturity transformation | ₹1.50 crore | Compensation for the term mismatch | Treasury |
| | **₹5.00 crore** | | |

Now the incentives are right. The lending unit's ₹2.50 crore is what the ₹0.20 crore of day-one expected credit loss should be measured against. And **the ₹1.50 crore sits in treasury, the only unit that can hedge the risk that produced it.**

**The failure mode:** charge the lending unit at overnight rates — roughly 6% instead of 7.5% — and the five-year loan appears to earn ₹4 crore instead of ₹2.5 crore. Long-dated lending looks more profitable than it is, the bank writes more of it, and the maturity transformation risk accumulates in a unit that cannot see it and cannot hedge it. Mispriced FTP is how a balance sheet quietly acquires the exposure Part 2 measures.

---

## Part 3 — The investment book and the market

### Why the bank owns ₹520 crore of securities

| Purpose | Which holdings |
|---|---|
| Satisfy the statutory liquidity ratio | Government securities |
| Provide HQLA for the LCR | G-secs, AA corporate bonds |
| Serve as repo collateral for funding | Government securities |
| Earn a return on surplus funds | All of it |

One holding, four jobs. How it is **classified** at purchase determines whether its price moves hit profit, hit reserves, or hit nothing — which is why classification is a governed decision, not a bookkeeping one.

### The mechanics that matter

**Price and yield move inversely,** and the sensitivity is duration — the same duration as the EVE calculation. The ₹400 crore government book at duration 4 loses about ₹16 crore on a 100 basis point rise.

**Repo turns securities into cash.** Sell ₹210 crore of G-secs today, agree to buy them back tomorrow slightly dearer, receive ₹200 crore — a 5% haircut. Economically a secured overnight loan; legally a sale and repurchase, which is what makes it robust if the counterparty fails. Repo is what makes the Part 1 claim that government securities are liquid operationally true.

**The Indian money market** is where the short funding actually comes from.

| Market | What it is | Secured |
|---|---|---|
| Call, notice and term money | Overnight to 14 days interbank | No |
| **TREPS** | Triparty repo cleared through CCIL — the dominant overnight market | Yes |
| **LAF** | Repo and reverse repo with RBI; the policy corridor | Yes |
| **MSF** | Marginal standing facility, above the repo rate — emergency overnight | Yes |
| Treasury bills, CDs, commercial paper | 91–364 day government, bank and corporate paper | — |

Subject to change. [verify]

The ₹150 crore that ran in April Y4 came largely from these markets, which is why it ran fast — it is priced daily and reprices on sentiment. And the **MSF is what the bank reaches for in month two of a run**, at a penal rate, which is the point at which a liquidity problem becomes public.

### Hedging, and the risk the hedge creates

The balance sheet cannot be changed by decree, so the bank hedges: an **interest rate swap**, ₹100 crore notional, five years, **pay fixed 7.2% / receive six-month MIBOR**. No principal moves; only the difference between the two streams. Floating funding cost becomes fixed, matching the fixed asset, and the Part 2 exposure disappears on that ₹100 crore.

| Instrument | Obligation | Character |
|---|---|---|
| **Forward** | Both must transact at an agreed future price | Linear, over-the-counter |
| **Future** | Same, standardised and exchange-traded with daily margin | Linear, low counterparty risk |
| **Swap** | Exchange of two cash flow streams | Linear — a series of forwards |
| **Option** | One party has the right, not the obligation | Asymmetric; buyer pays a premium |

But when rates rise 200 basis points the swap is worth about ₹8 crore **to us**, owed by the counterparty. If it fails, the hedge fails exactly when it was needed.

| | Loan credit risk | Counterparty credit risk |
|---|---|---|
| Exposure at default | Roughly the outstanding balance | Depends where market rates are that day |
| Direction | The bank is always owed | Either party may owe the other |
| Measured as | Drawn + CCF × undrawn | Current exposure + potential future exposure |

Mitigated by **netting** (all trades with one counterparty collapse to a single enforceable exposure), **collateral under a CSA** (variation margin daily), **initial margin**, and **central clearing** through **CCIL**, which novates the trade to a central counterparty holding margin from everyone. The capital charge for the counterparty's own credit deterioration is **CVA**.

**Wrong-way risk** is the failure to watch for: exposure grows in exactly the scenarios where the counterparty is most likely to fail. Buying protection on a company from a bank heavily exposed to that same company is the textbook case — and it is the same correlation problem as downturn LGD in Volume 1, where the steel plant was worth least in precisely the year the steel borrower failed.

Settlement infrastructure worth knowing by name: **CCIL** (central counterparty), **NDS-OM** (G-sec order matching), **RTGS and NEFT** (payments), **CDSL and NSDL** (depositories).

---

## Part 4 — Risk data

### The question that exposes everything

At 5pm on the day the steel default becomes public, the CFO asks one question:

**"What is our total exposure to the steel sector, across every product and every entity, right now?"**

Not the loan book. Total. The ₹100 crore term loan. The undrawn cash credit limit to the same borrower. Corporate bonds of steel companies inside the ₹120 crore investment portfolio. Derivative exposure to steel counterparties. Guarantees issued. The overseas branch.

If the answer takes three days, the bank has a data problem no amount of modelling sophistication compensates for. Every number in both volumes — the ₹66.51 crore allowance, the ₹1,234 crore of RWA, the 159% LCR, the ₹17.5 crore EVE sensitivity — is downstream of whether the bank can find its own exposures reliably.

### BCBS 239

That failure was systemic in 2008: banks could not aggregate their own risk fast enough to act. **BCBS 239** is the response — principles for risk data aggregation and risk reporting, in four areas. [verify]

The principles read as abstractions. Each one is a specific thing that goes wrong, and the three-day answer above is a symptom of all four at once.

| Area | What it requires | What its absence looked like at 5pm | What fixing it means in practice |
|---|---|---|---|
| **Governance and infrastructure** | The board owns data as an asset; architecture that aggregates in normal *and* stressed conditions | Nobody could say who owns "sector code". Three systems held one, populated by three different teams, none accountable | A named data owner per critical element, a data policy the board approved, and an architecture review before any new system is bought |
| **Risk data aggregation** | Accurate, complete, timely, adaptable — and largely automated | Loans came from the warehouse, bonds from the treasury system by email, the overseas branch by spreadsheet | One conformed exposure layer where a loan, a bond and a guarantee to the same obligor sit as three rows under one obligor identifier |
| **Risk reporting** | Reports that are accurate, clear, comprehensive, frequent enough, and reach the right people | A sector report existed. It ran monthly, covered advances only, and was four weeks old | Reports defined by the decision they support, not by what the system can produce; on-demand rather than calendar-driven for anything used in a crisis |
| **Supervisory review** | The supervisor assesses compliance and can compel remediation | The bank self-assessed as "largely compliant" for three years while the gaps above persisted | Evidence, not assertion: lineage documents, data quality dashboards, and a remediation plan with dates that get met |

**The pattern across all four:** none of them is a technology problem. Each is a question about who is accountable for a number, and technology only reflects the answer.

Four words carry the operational weight, and each is tested a specific way.

| Requirement | Plain meaning | How it is tested | Failure in our bank |
|---|---|---|---|
| **Accuracy** | The number is right, and can be shown to be right | Reconcile the risk figure to the finance general ledger; explain every difference, don't just quantify it | Advances in the risk system do not tie to the ledger |
| **Completeness** | Nothing material is missing | Count exposures and total value against source system control totals, across every product, entity and geography | The overseas branch's steel exposure sits on a separate system nobody extracts |
| **Timeliness** | It arrives early enough to act on | Measure elapsed time from data cut-off to usable answer, in business-as-usual **and** in a stress simulation | Three days for a sector exposure question |
| **Adaptability** | A new question can be answered without a project | Ask a question the reports were not designed for and see whether anyone can answer it this week | Sector analysis was never built, so it needs a change request |

**Adaptability is the one quietly hardest and most often failed.** A bank can meet the first three with a rigid, well-controlled pipeline producing exactly the reports it was designed to produce — and then be unable to answer a question nobody anticipated. Crises consist entirely of questions nobody anticipated. The design answer is to hold **granular data** in the warehouse rather than pre-aggregated totals: if the warehouse stores one row per exposure with sector, obligor, product and entity on it, the CFO's question is a query. If it stores monthly sector subtotals, the question is a project.

### Lineage — walking a number back

**Data lineage** is the documented path from a number in a submitted return back to the field in the source system it came from, including every transformation on the way. It sounds like documentation. It is actually the only way to answer a challenge.

Here is the challenge. The risk committee pack shows a Stage 3 allowance of **₹66.51 crore** on the steel exposure. The finance ledger shows an impairment balance of **₹64.10 crore**. A difference of **₹2.41 crore**, and the return is due on Friday.

Nobody in the room knows which is right. So walk it back, layer by layer, checking one thing at each.

| # | Layer | What you check here | What you find |
|---:|---|---|---|
| 6 | **Regulatory return** | Does the cell equal the ledger balance it is mapped to? | Return cell = ₹64.10 crore, sourced from the ledger. Consistent — the defect is upstream |
| 5 | **Finance ledger** | What journal created this balance, and what fed it? | A ₹60.36 crore impairment charge posted from the ECL engine's month-end file, on top of the ₹3.74 crore already held at T2. Total ₹64.10 crore — but the charge should have been ₹62.77 crore |
| 4 | **ECL engine** | What inputs produced the number the committee saw? | Today's run: GCA ₹99.09 crore − PV of recoveries ₹32.58 crore = ₹66.51 crore, using a collateral realisation of **₹48.00 crore** |
| 3 | **Staging module** | Is the stage right, and on what evidence? | Stage 3 on 95 days past due and unlikely-to-pay. Correct, and not the issue |
| 2 | **Risk data warehouse** | Which collateral valuation was in the snapshot the *ledger* file was built from? | The month-end snapshot carries a valuation of **₹51.25 crore**, dated three months earlier |
| 1 | **Collateral system** | When was the current valuation actually keyed in? | The ₹48.00 crore revaluation was entered at 23:10 on the cut-off date |

**The root cause.** The collateral system's nightly extract runs at 22:00. The revaluation was keyed at 23:10 — seventy minutes late. So the month-end warehouse snapshot, and therefore the file that fed the ledger, carried the old ₹51.25 crore valuation. The committee pack was produced two days later from a refreshed run that had picked the revaluation up.

Check the arithmetic both ways and the difference explains itself exactly:

| Valuation used | Working | Allowance |
|---|---|---:|
| Stale, ₹51.25 crore | 99.09 − (51.25 − 4.00) × 0.7405 | ₹64.10 crore |
| Current, ₹48.00 crore | 99.09 − (48.00 − 4.00) × 0.7405 | ₹66.51 crore |
| | **Difference** | **₹2.41 crore** |

The 0.7405 is the three-year discount factor at the 10.54% effective interest rate from Volume 1 — the same rate, doing the same job, three layers down the stack.

**Three things this shows, and they are why lineage exists.**

Neither number was *wrong*. Both were correctly computed from the inputs each had. The defect was a **cut-off dependency**, not a calculation error, and no amount of re-checking the formula would have found it.

Every arrow between two layers is a transformation that can silently be wrong — a currency conversion, a date convention, an obligor identifier that does not match between the loan system and the collateral system. Lineage is what lets someone walk it back instead of defending the number by assertion.

And the fix is not "re-run". It is a scheduling dependency (the extract must wait for the valuation window to close, or the window must close before the extract), plus a data quality rule that rejects a snapshot whose valuation date is older than the reporting date by more than a stated tolerance. **Fix the class, not the instance** — otherwise the same seventy minutes recurs next quarter on a different exposure.

### Making the data trustworthy

Five controls. Each one exists because of a specific failure, and our ₹2.41 crore supplies most of them.

| Control | What it does | The instance behind it |
|---|---|---|
| **Golden source** | One designated authoritative system per data element, so two systems cannot both claim to be right | Collateral valuation is authoritative in the collateral system. The loan system also holds a valuation field, populated at sanction and never updated — it says ₹70 crore and it is not the golden source |
| **Reconciliation** | Risk figures tie to the finance ledger, with differences *explained*, not merely quantified | The ₹2.41 crore. A reconciliation that reported "difference ₹2.41 crore, under investigation" for three cycles would have been useless; one that named the cut-off dependency ended the problem |
| **Data quality rules** | Automated checks for completeness, validity, consistency and duplication, with a dashboard and named owners | "Collateral valuation date must be within twelve months of the reporting date"; "an exposure in Stage 3 must have a security record"; "days past due may not decrease without a payment record" |
| **Data dictionary** | One agreed definition per term, so a word means the same thing in every system | Volume 1 used **exposure** three ways: drawn advances in the HHI calculation, drawn plus converted undrawn in the capital calculation, and gross carrying amount in the impairment calculation. All three are correct in their context — and a bank without a dictionary has three systems each confident it holds "exposure" and three totals nobody can reconcile |
| **Data ownership** | A named business person accountable for each critical data element — not a team, a person | Somebody owns "collateral valuation". They own the definition, the quality thresholds, and the decision when a rule fires |

The dictionary sounds bureaucratic and is not: it is the reason the CFO's 5pm question can be answered at all, because "steel sector exposure" has to mean one thing before it can be summed.

---

## Part 5 — Regulatory reporting

### What actually gets submitted

Every number built across both volumes ends up in a return.

| Return | Content | Frequency |
|---|---|---|
| Capital adequacy | RWA, capital components, CET1 and total ratios | Quarterly |
| Asset classification and provisioning | IRAC classification, NPAs, provisions held | Quarterly |
| **CRILC** | Borrowers at or above ₹5 crore, classification, SMA flags | Periodic; SMA-2 weekly |
| Structural liquidity statement | The bucket ladder | Fortnightly |
| LCR and NSFR | Liquidity ratios and their components | Monthly and quarterly |
| Form A | CRR and SLR maintenance | Fortnightly |
| Large exposures | Exposures against single and group counterparty limits | Quarterly |
| Interest rate sensitivity | The repricing gap | Monthly |
| Pillar 3 disclosures | Public risk and capital disclosure | Half-yearly |

Names, thresholds and frequencies subject to change. [verify]

**Every row of that table has already been built.** Here is where, so the table reads as a summary of what you know rather than a list of new things.

| Return | Built in | The number, to recall it |
|---|---|---|
| Capital adequacy | Volume 1, Part 7 | RWA ₹1,234 crore; CET1 12.16%, falling to 7.07% at T3 |
| Asset classification and provisioning | Volume 1, Part 6 | The days-past-due ladder; sub-standard at T3 at 15% secured, ₹15.00 crore |
| CRILC | Volume 1, Part 6 | Every borrower at or above ₹5 crore, so every lender sees the SMA flag we raise |
| Structural liquidity statement | Volume 2, Part 1 | The eleven buckets; a −29% cumulative gap against a −20% limit |
| LCR and NSFR | Volume 2, Part 1 | 159% and 125% |
| Large exposures | Volume 1, Part 4 | The 20%-of-Tier-1 cap — ₹30 crore, which every exposure in the book breaches |
| Interest rate sensitivity | Volume 2, Part 2 | The −₹300 crore one-year repricing gap |
| Pillar 3 | Volume 1, Part 7 | The third pillar — public disclosure so funding markets can price the bank themselves |
| **Form A** | **Not yet** | Below |

### The gap — CRR, SLR and Form A

Two mandatory holdings sit underneath everything in Volume 2 and have only been referred to in passing.

| | **Cash reserve ratio (CRR)** | **Statutory liquidity ratio (SLR)** |
|---|---|---|
| What it is | A percentage of net demand and time liabilities held as a balance with RBI | A percentage of NDTL held in cash, gold or approved securities |
| Our bank | ₹58 crore of the ₹130 crore RBI balance | Most of the ₹400 crore government securities book |
| Earns | Nothing | The coupon on the securities |
| Maintained | On a fortnightly average, with a daily minimum | Daily |

**Net demand and time liabilities (NDTL)** is the base both are struck on: broadly deposits and other liabilities to the system, net of interbank assets. **Form A** is the fortnightly return reporting NDTL and the maintenance of both ratios. [verify]

Why a credit risk person should care: **it is the same ₹400 crore.** It is an SLR holding in Form A, HQLA in the LCR, a 5% RSF item in the NSFR, bucket-ten collateral in the structural liquidity statement until it is reslotted by expected realisation, a 0% risk weight in the capital return, and ₹34.3 crore of interest income in Part 0. One holding, six treatments, all defensible, all reported separately — and if the totals do not reconcile back to one securities position, one of the six is wrong.

### One exposure, five returns

These are not independent documents. The ₹99.09 crore steel exposure appears in the **capital return** as risk-weighted assets, in the **asset classification return** as a sub-standard NPA, in **CRILC** as a defaulted borrower visible to every other lender, in the **large exposures return** against the ₹30 crore limit it breaches, and in the **structural liquidity statement** as an inflow that will not arrive. **One exposure, five returns, and they must agree.**

That sentence is the whole reason Parts 4 to 7 exist. Five returns produced by different teams on different calendars from the same underlying row is only possible if there is one underlying row.

### The production cycle

| # | Step | What it produces |
|---:|---|---|
| 1 | Data cut-off | A frozen position across every source system |
| 2 | Extract | Raw records landed in staging, unaltered |
| 3 | Transform and enrich | Mapped, conformed, joined to reference data |
| 4 | Compute | RWA, ratios, buckets, sensitivities |
| 5 | Reconcile to ledger | Risk figures tied to finance, differences explained |
| 6 | Variance analysis | Every material movement attributed to a business event |
| 7 | Review and challenge | Independent scrutiny of the output |
| 8 | Sign-off | Preparer, reviewer, function head, attesting officer |
| 9 | Submit | Filed within the regulatory deadline |

That is the theory. Here is the same nine steps as the quarter actually ran — 31 March Y4, the quarter the steel borrower defaulted, producing the capital adequacy and provisioning returns.

The **credit risk business analyst** on this cycle sits between the risk function, which owns what the number should be, and the technology and vendor teams, who own how it is produced. The right-hand column is that job.

| Day | What happens | What goes wrong | What the BA is doing |
|---|---|---|---|
| **31 Mar, 22:00** | Cut-off. Every source system freezes its position | The collateral revaluation is keyed at 23:10 — seventy minutes after the extract | Nothing yet. This surfaces on day 4 and is the ₹2.41 crore from Part 4 |
| **Day 1** | Extract and staging load | Three obligor records fail the load with a null sector code | Confirming with the business whether "unclassified" is a valid sector or a data defect — a definition question, not a technical one |
| **Day 2** | Transform, enrich, compute | The staging rule flags 41 accounts crossing 90 days past due, including steel | Checking the rule fired for the right reason: is it 90 days, or unlikely-to-pay, or both? The classification drives the provision and must be evidenced |
| **Day 3** | ECL and RWA engines run | The steel exposure's risk weight drops from 150% to 50% on provision coverage above 50% | Producing the evidence that coverage is 67% — because a weight *falling* while a borrower defaults is the first thing a reviewer will challenge |
| **Day 4** | Reconcile to the ledger | Risk allowance ₹66.51 crore, ledger ₹64.10 crore. ₹2.41 crore unexplained | Running the lineage walk from Part 4. Finding the cut-off dependency. Deciding which number is right for *this* return |
| **Day 5** | Variance analysis | RWA moved ₹1,234 → ₹1,184 crore while the bank lost ₹62.77 crore | Attributing every rupee of the movement to a named business event, below |
| **Day 6** | Review and challenge | The risk committee asks why the capital ratio fell 434 basis points | Explaining it through two channels — the provision cut CET1, the migration moved the weight — with the Volume 1 arithmetic behind each |
| **Day 7** | Sign-off | The attesting officer will not sign while the ₹2.41 crore is open | Writing it up: cause, which figure is correct, the correction, and the control that stops it recurring |
| **Day 8** | Submit | Filed | Logging the manual adjustment and raising the change request for the extract schedule |

### Reconciliation and variance — the two that get compressed

These are steps 5 and 6, and they are the two most often squeezed when the deadline is tight. They are also the two that do the real work.

**Reconciliation to the ledger.** RWA is computed in a risk engine; advances are recorded in a finance ledger. They must tie. A ₹2.41 crore unexplained difference is not a rounding issue — it means one system holds something the other does not, and whichever is wrong, a return is about to be filed with a number nobody can defend. The discipline is that a difference must be **explained**, not merely quantified: "difference ₹2.41 crore, under investigation" carried for three cycles is a control that has failed silently.

**Variance analysis.** Every material movement from the prior period must be attributed to a business event, not to a system change.

| Driver | ₹ crore |
|---|---:|
| Opening RWA at T2 | 1,284 |
| Steel: weight 150% → 50% on provision coverage above 50% | (100) |
| New lending | 0 |
| Repayments | 0 |
| **Closing RWA at T3** | **1,184** |

If that ₹100 crore cannot be attributed to a named cause, the bank does not know why its capital ratio moved, which means it does not know its capital ratio. This is the **allowance walk from Volume 1 applied to a different number** — the same walk that split the ₹3.54 crore charge at T2 into stage transfer, LGD change and overlay. The principle is identical in both places: **proving the closing balance proves nothing; explaining the movement proves everything.**

### The controls around the number

Five controls, and each one answers a specific question a supervisor will ask.

| Control | The question it answers | What it looks like on our cycle |
|---|---|---|
| **Four-eyes review** | Did anyone other than the preparer look at this? | The person who ran the ECL engine did not also approve its output. Two named individuals, recorded, on every return |
| **Sign-off hierarchy** | Did accountability rise to someone who can be held to it? | Preparer → reviewer → head of regulatory reporting → CFO or CRO → board risk committee where required. The attesting officer's refusal to sign on day 7 is this control working, not this control failing |
| **Attestation** | Is a named person formally stating this is accurate and complete? | A signed statement attached to the submission. It is personal and it is why day 7 exists |
| **Audit trail** | Can every change be traced to a person, a time and a reason? | The ₹2.41 crore correction is logged as a manual adjustment with the cause, the approver and the change request number |
| **Restatement protocol** | What happens if a filed return turns out to be wrong? | A defined route to notify, correct and resubmit — decided in advance, because deciding it under pressure produces the wrong answer |

**Manual adjustments deserve their own attention.** Every cycle produces a few — a correction the system cannot make in time, a mapping gap, a known defect. Each is legitimate on its own. Collectively, a growing population of *recurring* manual adjustments is the clearest available evidence that the underlying system no longer produces the right answer and the reporting team is compensating by hand every month. Supervisors count them and ask what is being done to remove them.

Our ₹2.41 crore is the perfect specimen. Adjusted by hand once, it is a control working. Adjusted by hand every quarter because nobody moved the extract schedule, it is a finding.

---

## Part 6 — How the machine is built and changed

### Who owns what

Three parties are involved in every regulatory reporting programme, and most delivery failures are a confusion about which one owns a decision.

| Party | Who they actually are | Owns | Does **not** own |
|---|---|---|---|
| **Business and risk** | Credit risk policy, the CRO's team, finance, regulatory reporting | What the number *means* — the regulation's interpretation, the definition of default, the LGD assumption, the sign-off | How it is built, or when the release goes out |
| **Technology** | Data engineering, application support, release management, infrastructure | The pipeline, the platform, the deployment, availability, performance | What the number *should be* |
| **Vendor** | The supplier of the ECL, RWA or ALM engine and its regulatory update cycle | The product, its calculation logic, its regulatory content updates, its documentation | The bank's own data, its correctness, or how the bank has configured the product |

**The commonest failure, precisely stated.** A regulatory rule changes. The vendor ships a release implementing it. Technology deploys the release from the vendor's release notes. Nobody in the business ever wrote down the bank's own interpretation of the rule. Six months later a supervisor asks why an exposure is being treated the way it is, and the honest answer is "because the vendor's release did that", which is not an answer.

**Which is the business analyst's job.** Sitting between those three, the BA owns no system and no policy — and owns the artefacts that connect them:

| Artefact | What it is | Why it is the BA's |
|---|---|---|
| Requirements and interpretation | The bank's written reading of the rule, approved by risk | Written in business language, testable by technology |
| Mapping specification | Every field, every transformation, every default | The only document both sides can hold each other to |
| Test scenarios and expected results | What "correct" looks like, before the build | Derived from the interpretation, not from the output |
| Parallel run reconciliation | Old versus new, every difference explained | Neither side can do this alone |
| Traceability matrix | Requirement → spec → build → test → evidence | What proves, later, that the rule was implemented deliberately |

### The layers — what the machine physically is

Five layers. This is the part most often taught as a diagram and never explained, so here is what each one actually is, and what our steel loan looks like standing in it.

**1. Source systems.** The applications that *run* the bank — where a loan is opened, an instalment posted, a valuation captured, a deposit taken. Core banking, the collateral system, treasury, trade finance, the general ledger. The critical point: **these systems exist to transact, not to report.** They were designed to open an account in ninety seconds, not to answer what the bank's steel exposure is. Everything downstream exists because they cannot.

**2. Staging.** A landing area holding raw extracts exactly as received — the whole file, unaltered, one per system per day, never overwritten. It looks like waste until you need it. **Immutable staging is what makes variance analysis possible at all:** if last quarter's extract can be overwritten, there is no way to prove that a difference between last quarter's number and this quarter's came from the business rather than from a change in what the source sent. It is also what let the Part 4 lineage walk establish that the warehouse snapshot carried ₹51.25 crore.

**3. Risk data warehouse.** Cleansed, conformed, joined. This is where a loan account, a collateral record and a rating become **one row about one exposure**, and where the same borrower held under three different customer numbers in three systems becomes one obligor. It is also where "exposure" stops being three things and becomes one defined thing — the data dictionary from Part 4, implemented.

**4. Calculation engines.** The products that take that row and compute — an ECL engine, an RWA engine, an ALM engine, typically bought rather than built. They hold the regulatory logic and receive vendor updates when rules change. They are configured by the bank, which is where most of the bank-specific risk lives.

**5. Reporting layer.** Return templates, aggregation, validation rules, the submission file, and the disclosure pack. Owned by finance and regulatory reporting.

Now the same loan, standing in each layer.

| Layer | Our steel exposure here | Who you talk to |
|---|---|---|
| **Source systems** | Loan account with principal ₹100 crore, a next-due-date, a 95-days-past-due flag; a separate collateral record with a ₹48.00 crore valuation and its date; a customer record with a sector code | Business operations, application support |
| **Staging** | Last night's full loan master dump and full collateral dump, as received, including the fields nobody uses, kept and never altered | Data engineering |
| **Risk data warehouse** | One row: obligor ID, facility ID, gross carrying amount ₹99.09 crore, EIR 10.54%, rating BB, days past due 95, security value ₹48.00 crore, sector "steel" | Risk data team |
| **Calculation engines** | Staging rules return Stage 3; the ECL engine computes 99.09 − 32.58 = ₹66.51 crore; the RWA engine returns a 50% weight on 67% coverage | Risk, and the vendor |
| **Reporting layer** | ₹66.51 crore lands in a provisioning return cell; ₹50 crore of steel RWA lands in the capital return; the SMA history lands in CRILC | Regulatory reporting, finance |

Read that table downwards and the whole of Part 4 and Part 5 becomes concrete: the ₹2.41 crore defect was a mismatch between layers 1 and 2, the data dictionary is a layer 3 problem, the vendor relationship is layer 4, and the five returns from one exposure happen at layer 5.

### Oracle, in practical terms

**Oracle** — or an equivalent relational database — is what layers 3 and 4 physically sit on. Worth knowing plainly what that means, because it comes up constantly and is rarely explained.

Data lives in **tables**: rows and columns, one row per exposure per reporting date. Tables are linked by **keys** — an obligor ID in the exposure table matching the obligor ID in the customer table — and **referential integrity** means the database itself refuses to hold an exposure whose obligor does not exist. Calculations run as **set-based operations**: not "loop through 40,000 loans one at a time" but "apply this rule to every row at once", which is why a quarter-end run finishes in minutes rather than days.

Four things a business analyst actually meets:

| Thing | What it is | Why it matters to you |
|---|---|---|
| **Schema** | A named collection of tables — staging, warehouse and results usually sit in separate ones | Tells you which layer you are looking at |
| **View** | A saved query presented as if it were a table | Reporting often reads views, not tables, so the definition you care about may live in the view, not the data |
| **Partition by reporting date** | The table is physically split by date | This is what lets the bank re-run or re-open a prior quarter without disturbing the current one. If it is missing, history is not reproducible |
| **Stored procedure** | Calculation logic written and run inside the database | Business rules can be buried here rather than in the engine — so "where is this rule implemented?" has more than one possible answer |

### What SQL is actually for

Not building the system — **investigating** it. The value is not the syntax; it is knowing which question to ask.

| Situation | The question | Shape of the query | What a result means |
|---|---|---|---|
| Quarter-end reconciliation | Do risk and finance agree on advances? | Sum exposure by classification in the warehouse; compare to the ledger balance | A difference is a defect until named |
| Variance investigation | Why did RWA move ₹100 crore? | Join this period's exposure table to last period's on facility ID; return rows where rating, classification or balance changed | The list *is* the variance explanation |
| Proving a control fired | Are there Stage 1 accounts more than 30 days past due? | Select accounts where days past due > 30 and stage = 1 | **The result should be empty.** A row is a staging rule that did not fire |
| Lineage trace | Where did ₹66.51 crore come from? | Follow one facility ID through staging, warehouse and results tables for one reporting date | Shows which layer the value changed at |
| Data quality check | Is the collateral data fit to use? | Count nulls, duplicates and out-of-range values in valuation and valuation date | Sizes the problem before you escalate it |
| UAT evidence | Does the build match the spec? | Run the spec's rule by hand on a sample; compare to what the engine produced | Discrepancies are defects with evidence attached |
| Regulatory challenge | Which exposures breach the large exposure limit? | Aggregate exposure by obligor group; return groups above 20% of Tier 1 | This is the Volume 1 Part 4 limit, queried |

**The pattern worth internalising is the third row: write the query that should return nothing.** An exception query coming back empty is a passed control. A query confirming what you expect to see proves far less than one designed to find what should not exist.

### The mapping specification

The single most important artefact in a regulatory reporting build, and the one most often written badly.

| Column | Content |
|---|---|
| Source system | Where the field comes from |
| Source field | Its exact name in that system |
| Target field | Where it lands |
| Transformation | The rule, stated unambiguously |
| Default and null handling | What happens when the source is empty |
| Owner | The named business person who approved this rule |
| Regulatory reference | The paragraph this implements |

Abstract until you write one. Here are two rows for our steel exposure — one simple, one not.

| | Row 1 | Row 2 |
|---|---|---|
| **Source system** | Core banking | Collateral system |
| **Source field** | `DPD_COUNT` | `SEC_VAL_AMT`, `SEC_VAL_DT` |
| **Target field** | `days_past_due` | `collateral_value_inr` |
| **Transformation** | Days since the earliest unpaid instalment on any facility of the obligor, not per facility | Value in INR at the latest valuation on or before the reporting date. Where the valuation is more than 12 months old, apply the prescribed indexation haircut |
| **Null handling** | Null is **not** zero — reject the record to the exception queue | Null value with a Stage 3 exposure rejects the record; null on a Stage 1 unsecured exposure defaults to zero |
| **Owner** | Head of credit policy | Head of credit risk |
| **Regulatory reference** | IRAC — 90-day NPA definition; Ind AS 109 — 30-day SICR backstop | Basel credit risk mitigation; internal collateral valuation policy |

Look at what those two transformation cells actually decide. **Row 1 says days past due is measured at obligor level, not facility level** — so a borrower current on its term loan and 95 days overdue on its cash credit is 95 days past due on both. That single sentence moves exposures into Stage 3 and into sub-standard classification. It is a policy decision, written as a mapping rule, and if it is wrong the provision is wrong on every affected borrower.

**Row 2 is where the ₹2.41 crore lived.** "The latest valuation on or before the reporting date" is exactly the rule that the 23:10 keying broke, and "more than 12 months old" is exactly the data quality rule that should have caught it.

**The last two columns are the ones dropped under time pressure and the ones that matter in two years,** when the person who wrote the rule has left and a supervisor asks why an exposure is treated as it is. Owner and regulatory reference are what turn "the vendor's release did that" into a defensible answer.

### Change and run

| | Change | Run |
|---|---|---|
| Purpose | Implement new requirements | Produce the numbers each cycle |
| Rhythm | Project timelines | The reporting calendar |
| Risk | Delivering late or wrong | Missing a deadline, filing a bad number |
| Who | Programme team, vendor, technology | Reporting team, risk, finance |

They compete for the same people, and **run always wins in the short term** because the deadline is real and immediate. A change programme staffed with people who also carry the quarter-end close will slip every quarter-end, predictably. The plan should assume it rather than discover it — which in practice means not scheduling a design workshop for the first week of April, and not asking the person doing day-4 reconciliation to also review a specification that week.

### Testing, and the stage that cannot be skipped

| Stage | Question | On our build |
|---|---|---|
| Unit | Does this component behave as specified? | Does the staging rule return Stage 3 at 95 days past due? |
| Integration | Do the components work together across the pipeline? | Does a collateral revaluation flow from source through staging to the ECL engine in one run? |
| User acceptance | Does the business agree the output is correct? | Risk recomputes ₹66.51 crore by hand from the spec and compares |
| Regression | Did the change break anything that previously worked? | The other 39 accounts that crossed 90 days still classify as before |
| **Parallel run** | Do old and new produce the same numbers, and where they differ, **why**? | Both systems produce the same return for the same quarter, line by line |

**Parallel run is the one that cannot be skipped** on a regulatory change. Old and new produce the same return for the same period, and every difference is explained and signed off *before* cutover. **An unexplained difference is a defect until proven otherwise** — because on the day of cutover the bank files the new system's number and will be asked why it changed.

And the difference log is the deliverable, not a by-product. "New system shows ₹66.51 crore where old showed ₹64.10 crore, because the new extract schedule picks up same-day revaluations" is a *good* parallel run result: the number changed, deliberately, for a stated reason, approved in advance.

Cutover then needs a stated go/no-go decision, a rollback plan that has been **tested** rather than written, a heightened review of the first production cycle, and a documented handover from the project team to the run team. **Projects that end at go-live rather than at the first successful production cycle** leave the run team debugging someone else's build against a regulatory deadline.

---

## Part 7 — Models

### None of Volume 1's numbers were observed

Every parameter that drove the allowance and the capital ratio came out of a model.

| Model | Produces | Consumed by |
|---|---|---|
| **PD model** | 0.50% for BBB, 2.30% for BB | ECL staging and measurement; IRB capital |
| **LGD model** | 45%, raised to 55% on downgrade | ECL measurement; IRB capital |
| **EAD / CCF model** | The 80% conversion factor on undrawn limits | ECL measurement; capital on the ₹108 crore off balance sheet |
| **Behavioural models** | ₹380 crore of core deposits; prepayment rates | Liquidity buckets; NII and EVE |
| **Scenario models** | 60 / 30 / 10 base, downside, upside weights | Forward-looking ECL; stress testing |

The ₹66.51 crore allowance, the ₹1,234 crore of RWA and the ₹17.5 crore EVE sensitivity are all model outputs. **A model wrong by a modest margin moves the capital ratio further than most business decisions do** — which is why the rest of this part is about proving one works.

### What a PD model actually is

It takes what the bank knows about a borrower and returns a number between 0 and 1.

The visible half is a **scorecard**: drivers, each contributing points. Here is our steel borrower's, at origination and again at T2.

| Driver | At origination | Points | At T2 | Points |
|---|---|---:|---|---:|
| Base — portfolio average | | 50 | | 50 |
| Leverage — debt / EBITDA | 3.4× | +6 | 5.2× | +1 |
| Interest cover | 3.1× | +8 | 0.9× | −1 |
| Size — turnover | ₹900 crore | +5 | ₹780 crore | +5 |
| Sector outlook | Steel, stable | −4 | Steel, negative | −8 |
| Payment behaviour, 12 months | Clean | +5 | 40 days past due | 0 |
| **Score** | | **70** | | **47** |

| Score band | Grade |
|---|---|
| 85 and above | AA |
| 78 – 84 | A |
| 62 – 77 | **BBB** |
| 42 – 61 | **BB** |
| Below 42 | B |

**That is the BBB → BB downgrade from Volume 1 Part 3, produced.** The migration that moved the exposure to Stage 2, raised the risk weight from 100% to 150% and cost 75 basis points of CET1 did not come from a committee's opinion. It came from interest cover falling below 1.0 and forty days of arrears, converted into nine lost points.

### Why logistic regression

The score becomes a probability through a **logistic** function. Logistic regression models the **log-odds** of default as a straight line in the drivers:

$$
\ln\left(\frac{PD}{1 - PD}\right) = \beta_0 + \beta_1 x_1 + \dots + \beta_n x_n
$$

Rearranged, that is $PD = 1 / (1 + e^{-\text{log-odds}})$. For our scorecard the fitted relationship is:

$$
\ln\left(\frac{PD}{1-PD}\right) = -5.293 - 0.0671 \times (\text{score} - 70)
$$

| Score | Log-odds | Working | PD |
|---:|---:|---|---:|
| 70 (BBB) | −5.293 | $1/(1+e^{5.293})$ | **0.50%** |
| 47 (BB) | −3.749 | $1/(1+e^{3.749})$ | **2.30%** |

The slope has a useful reading. Since $\ln 2 / 0.0671 = 10.3$, **roughly every ten points of score doubles the odds of default.** That is the *points to double the odds*, and it is how a scorecard is explained to a credit officer who will never look at a coefficient.

Why this technique, when better-performing ones exist:

| Property | Why it decides the choice |
|---|---|
| **Output is bounded 0 to 1** | A PD must be a probability. Ordinary linear regression would happily return −3% |
| **The coefficients *are* the explanation** | You can show a borrower, an auditor and a supervisor exactly which driver cost how many points |
| **Monotonic by construction** | Worse leverage always means a worse score. No unexplainable reversal where a slightly worse borrower scores better |
| **Few parameters, so it is stable** | It does not chase noise in the development sample, and it holds up on a small book |
| **Recalibration is cheap** | If levels drift, shift the intercept $\beta_0$; the ranking is untouched and no rebuild is needed |

**Linear regression** does the neighbouring jobs, where the target is a continuous quantity rather than a yes/no event — LGD as a recovery rate, CCF as a drawdown fraction. Both are bounded between 0 and 1 too, so they are usually fitted on a transformed target, or in two stages: first the probability of any recovery at all, then the amount given some recovery.

### Does the model rank? — discrimination

Three questions have to be asked of any model, and **passing one says nothing about the others.**

| Question | Property | Metric |
|---|---|---|
| Does it put the right borrowers at the bottom? | **Discrimination** | AUROC, Gini, KS |
| Are the levels right? | **Calibration** | Predicted versus observed default rate |
| Is it still being used on the population it was built for? | **Stability** | Population stability index |

Discrimination first. Take the development sample: **1,000 obligor-years from the bank's corporate book, of which 50 defaulted.** Score them all, sort worst to best, cut into ten equal groups of 100, and count where the defaults fall.

| Decile, worst first | Defaults | Non-defaults | Cumulative defaults | Cumulative non-defaults | Share of defaults caught | Share of non-defaults flagged | Difference |
|---:|---:|---:|---:|---:|---:|---:|---:|
| 1 | 19 | 81 | 19 | 81 | 38.0% | 8.5% | 29.5% |
| 2 | 12 | 88 | 31 | 169 | 62.0% | 17.8% | 44.2% |
| 3 | 7 | 93 | 38 | 262 | 76.0% | 27.6% | **48.4%** |
| 4 | 5 | 95 | 43 | 357 | 86.0% | 37.6% | **48.4%** |
| 5 | 3 | 97 | 46 | 454 | 92.0% | 47.8% | 44.2% |
| 6 | 2 | 98 | 48 | 552 | 96.0% | 58.1% | 37.9% |
| 7 | 1 | 99 | 49 | 651 | 98.0% | 68.5% | 29.5% |
| 8 | 1 | 99 | 50 | 750 | 100.0% | 78.9% | 21.1% |
| 9 | 0 | 100 | 50 | 850 | 100.0% | 89.5% | 10.5% |
| 10 | 0 | 100 | 50 | 950 | 100.0% | 100.0% | 0.0% |

Read the first row. **The worst-scoring 10% of the book contains 38% of all the defaults.** That is what "the model ranks" means, stated as a number a credit committee can use.

Plot the last two columns against each other — defaults caught on the vertical, non-defaults wrongly flagged on the horizontal — and you have the **receiver operating characteristic (ROC) curve**. Each point is one possible cut-off score.

<svg viewBox="0 0 480 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ROC curve for the PD model, showing AUROC of 0.81 and KS of 0.48">
  <path d="M 70 340 L 93.8 233.6 L 119.8 166.4 L 147.3 127.2 L 175.3 99.2 L 203.8 82.4 L 232.7 71.2 L 261.8 65.6 L 290.9 60 L 350 60 Z" fill="#ececec"/>
  <line x1="70" y1="340" x2="350" y2="60" stroke="#000" stroke-width="1" stroke-dasharray="4 3"/>
  <polyline points="70,340 93.8,233.6 119.8,166.4 147.3,127.2 175.3,99.2 203.8,82.4 232.7,71.2 261.8,65.6 290.9,60 320.6,60 350,60" fill="none" stroke="#000" stroke-width="1.8"/>
  <line x1="147.3" y1="262.7" x2="147.3" y2="127.2" stroke="#000" stroke-width="1.2" stroke-dasharray="3 3"/>
  <line x1="70" y1="340" x2="350" y2="340" stroke="#000" stroke-width="1"/>
  <line x1="70" y1="340" x2="70" y2="60" stroke="#000" stroke-width="1"/>
  <text x="240" y="120" font-size="13" fill="#000">AUROC = 0.81</text>
  <text x="240" y="138" font-size="13" fill="#000">Gini = 0.63</text>
  <text x="155" y="215" font-size="13" fill="#000">KS = 0.48</text>
  <text x="268" y="222" font-size="12" fill="#000">Random = 0.50</text>
  <text x="64" y="356" font-size="11" fill="#000" text-anchor="middle">0</text>
  <text x="350" y="356" font-size="11" fill="#000" text-anchor="middle">1</text>
  <text x="58" y="64" font-size="11" fill="#000" text-anchor="end">1</text>
  <text x="210" y="378" font-size="12" fill="#000" text-anchor="middle">Non-defaulters flagged</text>
  <text x="30" y="200" font-size="12" fill="#000" text-anchor="middle" transform="rotate(-90 30 200)">Defaulters caught</text>
</svg>

Three numbers come off that picture.

| Metric | What it is | Formula | Ours |
|---|---|---|---:|
| **AUROC** | The area under the curve. Equivalently: the probability that a randomly chosen defaulter scores worse than a randomly chosen non-defaulter | Area under the ROC | **0.81** |
| **Gini** | The same information rescaled so a coin flip is 0 and perfection is 1 — twice the shaded area | $2 \times AUROC - 1$ | **0.63** |
| **KS statistic** | The largest gap between the two cumulative curves; also the cut-off where separation is greatest | $\max(\text{defaults caught} - \text{non-defaults flagged})$ | **0.48** |

The diagonal is a model with no information: flag 30% of the book at random and you catch 30% of the defaults. AUROC 0.5, Gini 0. Our curve bows towards the top-left, which is the shape of a model that finds defaulters early.

**KS has a practical use the others do not.** It occurs at deciles 3 and 4 — around score 55 — which is the cut-off separating good from bad most sharply. That is where a bank would set an automatic-decline or a watch-list trigger.

Typical benchmarks for a corporate PD model run around 0.55 to 0.75 Gini; retail behavioural scorecards run higher because payment history is far more predictive than financial statements. Below roughly 0.40 on a corporate model would trigger a review. [verify]

### Are the levels right? — calibration

**A model can rank perfectly and be uniformly too optimistic.** Ranking is what the credit officer uses; the *level* is what the provision and the capital are computed from. Both must hold.

The test compares the predicted PD attached to each grade against defaults actually observed.

| Grade | Obligor-years | Predicted PD | Expected defaults | Observed defaults | Observed rate |
|---|---:|---:|---:|---:|---:|
| AA | 100 | 0.10% | 0.10 | 0 | 0.00% |
| A | 150 | 0.20% | 0.30 | 1 | 0.67% |
| BBB | 300 | 0.50% | 1.50 | 3 | 1.00% |
| BB | 250 | 2.30% | 5.75 | 14 | 5.60% |
| B | 200 | 8.00% | 16.00 | 32 | 16.00% |
| **Total** | **1,000** | | **23.65** | **50** | **5.00%** |

The ranking is fine — observed rates rise monotonically down the scale, which is the Gini of 0.63 seen a different way. **The levels are not.** Observed defaults are roughly twice predicted, and the gap widens at the bottom of the scale where it matters most.

The formal test is **binomial**: given 250 BB obligors and a predicted 2.30%, how likely is it that 14 defaults occur by chance? Well outside any reasonable confidence band, so the grade fails. Supervisors usually want this presented as a traffic light per grade rather than a single portfolio number, because a portfolio total can pass while two grades fail in opposite directions and cancel.

**One legitimate part of the gap.** These PDs are point-in-time and the observation window spans a full cycle including two recession years, so the observed through-the-cycle rate is expected to exceed a PIT prediction — the same TTC-versus-PIT distinction from Volume 1 Part 2, now doing damage. **The validator's job is to say how much of the gap that explains and how much is model error.** It is never all of it.

**What happens if this is not corrected.** Under-prediction is the dangerous direction. A BB PD of 2.30% instead of 5.60% understates lifetime ECL at Stage 2, understates the IRB conditional PD and therefore the capital requirement, and delays SICR triggers because the origination-versus-today comparison is being made between two numbers from the same biased model. The bank looks better than it is, on both sides of Volume 1.

### Is it still the right population? — stability

A model built on one population and applied to another is being used outside its evidence. The **population stability index** measures the drift.

$$
PSI = \sum_i (A_i - E_i) \times \ln\!\left(\frac{A_i}{E_i}\right)
$$

where $E_i$ is the share of the development sample in score band $i$ and $A_i$ the share of today's book.

| Score band | Development | Today | Difference | $\ln(A/E)$ | Contribution |
|---|---:|---:|---:|---:|---:|
| 0 – 40 | 10% | 18% | +8% | +0.588 | 0.047 |
| 41 – 55 | 20% | 26% | +6% | +0.262 | 0.016 |
| 56 – 70 | 35% | 31% | −4% | −0.121 | 0.005 |
| 71 – 85 | 25% | 18% | −7% | −0.329 | 0.023 |
| 86 – 100 | 10% | 7% | −3% | −0.357 | 0.011 |
| | | | | **PSI** | **0.10** |

| PSI | Reading | Action |
|---|---|---|
| Below 0.10 | Stable | Continue monitoring |
| 0.10 to 0.25 | Moderate shift | Investigate the cause; consider recalibration |
| Above 0.25 | Significant shift | The model is being applied outside its evidence — rebuild |

Ours sits at **0.10, on the amber boundary**, and the table says exactly what happened: the book has drifted downwards, with the two worst bands growing and the two best shrinking. Our steel borrower scored 47 at T2, in the 41–55 band that grew by six points.

**This is the metric that justified the ₹0.40 crore overlay at T2** — the sector stress was visible in the market and absent from the model's development data, which is precisely what a rising PSI detects. An overlay without a metric behind it is a guess; this is the metric.

### Governance — who is allowed to say the model is fine

Models that determine capital and provisions cannot be owned by the people who build them.

| Line of defence | Who | Role |
|---|---|---|
| **First** | Model developers and the business that uses the output | Build it, document it, monitor it, own the outcome |
| **Second** | Independent model validation | Challenge it, test it independently, and **be able to reject it** |
| **Third** | Internal audit | Check that the first two lines are doing their jobs to policy |

| Control | Content | On our five models |
|---|---|---|
| **Model inventory** | Every model in use, with an ID, owner, purpose, tier and last validation date | Five entries: PD, LGD, CCF, core deposit, scenario weighting |
| **Tiering** | Scrutiny scaled to materiality | PD, LGD and CCF are tier 1 — they drive capital and provisions. The core deposit model is tier 1 too, because it drives EVE and the liquidity buckets |
| **Independent validation** | A separate function, reporting separately, that signs off before use and at each material change | Would have caught the calibration failure above |
| **Ongoing monitoring** | Discrimination, calibration and stability tracked on a schedule against thresholds, with a defined action per breach | Quarterly Gini and PSI, annual calibration |
| **Periodic review** | Full revalidation at a defined frequency regardless of whether anything has breached | Annual for tier 1 |
| **Documentation** | Data, methodology, assumptions, limitations and testing, sufficient for a competent third party to reproduce the model | The coefficient, the score bands and the development sample above |

**What a validator actually does** — this is the part that is usually left as the word "validation":

| Activity | The question |
|---|---|
| Conceptual soundness | Are these the right drivers, is logistic regression the right technique, and is the default definition the same one Volume 1 Part 2 set? |
| Data review | Is the development sample representative, long enough to span a cycle, and free of look-ahead information the model would not have had in real time? |
| Implementation testing | Recompute the model independently on a sample and compare to what the production engine returned. This is where a correct model, wrongly implemented, is caught |
| Outcomes analysis | The discrimination, calibration and stability tests above, on data the model did not see |
| Benchmarking | Compare against an alternative model or an external rating on the same names |
| Limitations and use conditions | State where the model stops being reliable, in writing, and carry it forward |

Two disciplines are worth stating plainly.

**Independence has to be real.** A validator who reports to the model's developer, or whose performance is measured on how many models get approved, is running a documentation exercise. The function's entire value is its ability to say no.

**Limitations must be documented and carried forward.** Our PD model was calibrated on data ending before the steel import surge. That is a limitation. It justified the overlay, it appears in the PSI, and it must sit in the model documentation so the next person to use the model knows where it stops being reliable — including the next person, who will not be in the room.

**Where the business analyst sits in all of this:** writing what the model must output and in what form, specifying the data it needs and where it comes from, testing that the implementation matches the specification rather than that the output looks plausible, and being the person who can explain the number to the business afterwards. Not building the model — connecting it to everything else in this volume.

### Machine learning, and where it is allowed

Gradient boosting and similar methods regularly beat logistic regression on Gini when the data is rich. The constraint is not technical.

A bank must **explain** a credit decision to the customer, to the auditor and to the supervisor, and must show it does not discriminate on prohibited grounds. A model whose reasoning cannot be articulated is hard to defend in all three conversations. Add the use test from Volume 1 Part 7 — the same ratings must drive credit decisions, pricing and collections, not just the capital number — and explainability stops being a preference.

| Use | Technique | Reason |
|---|---|---|
| Regulatory capital, ECL parameters | Logistic regression, scorecards | Must be explainable, stable and reproducible |
| Early warning, collections prioritisation, fraud | Machine learning | No individual adverse decision to justify |
| **Challenger models** | Machine learning | Benchmarks the production model without ever making a decision |

The challenger arrangement is the useful settlement. A machine learning model runs alongside the production model, and a persistent, material performance gap is evidence that the production model needs rebuilding — without the machine learning model ever making a call that has to be defended. It is the benchmarking row of the validation table, industrialised.

---

## Reference numbers

| Figure | Value | Part |
|---|---:|---|
| Net interest income | ₹50.1 crore | 0 |
| Deposits and borrowings | ₹1,300 crore | 0 |
| Outflow in the April Y4 run | ₹270 crore | 1 |
| HQLA | ₹497 crore | 1 |
| Net cash outflows, 30 days | ₹312.4 crore | 1 |
| **LCR** | **159%**, rising to 187% after the run | 1 |
| Cumulative gap, 15–30 day bucket | −29% against a −20% limit | 1 |
| Core deposit assumption | ₹380 crore of ₹500 crore | 1 |
| **NSFR** | **125%** | 1 |
| One-year repricing gap | −₹300 crore | 2 |
| ΔNII per 100 bp | −₹3.0 crore, 6% of NII | 2 |
| Duration gap | 1.03 years | 2 |
| ΔEVE per 100 bp | −₹17.5 crore, 11.7% of Tier 1 | 2 |
| FTP split on the steel loan | 2.50 / 1.00 / 1.50 | 2 |
| Repo haircut | 5% | 3 |
| Swap notional and fixed rate | ₹100 crore at 7.2% | 3 |
| Lineage difference investigated | ₹2.41 crore | 4 |
| Stale versus current collateral valuation | ₹51.25 crore versus ₹48.00 crore | 4 |
| RWA variance explained, T2 to T3 | −₹100 crore | 5 |
| CRR held with RBI | ₹58 crore | 5 |
| Steel score at origination and T2 | 70 (BBB) and 47 (BB) | 7 |
| Points to double the odds | 10.3 | 7 |
| Development sample | 1,000 obligor-years, 50 defaults | 7 |
| **AUROC / Gini / KS** | **0.81 / 0.63 / 0.48** | 7 |
| Predicted versus observed defaults | 23.65 versus 50 | 7 |
| **PSI** | **0.10** | 7 |

Run-off factors, ASF and RSF factors, the bucket structure, tolerance limits, the outlier threshold, CRR and SLR rates, PSI bands and Gini benchmarks are subject to change and are marked **[verify]** where they appear.

---

## Acronyms

| Term | Expansion |
|---|---|
| ALCO | Asset and liability committee |
| ALM | Asset and liability management |
| ASF | Available stable funding |
| AUROC | Area under the receiver operating characteristic curve |
| BCBS 239 | Basel principles for risk data aggregation and risk reporting |
| CCIL | Clearing Corporation of India Limited |
| CRR | Cash reserve ratio |
| CSA | Credit support annex |
| CVA | Credit valuation adjustment |
| EVE | Economic value of equity |
| FTP | Funds transfer pricing |
| HQLA | High quality liquid assets |
| IRRBB | Interest rate risk in the banking book |
| KS | Kolmogorov-Smirnov statistic |
| LAF | Liquidity adjustment facility |
| LCR | Liquidity coverage ratio |
| MIBOR | Mumbai interbank offered rate |
| MSF | Marginal standing facility |
| NDS-OM | Negotiated dealing system — order matching |
| NDTL | Net demand and time liabilities |
| NII | Net interest income |
| NSFR | Net stable funding ratio |
| PSI | Population stability index |
| ROC | Receiver operating characteristic |
| RSF | Required stable funding |
| SLR | Statutory liquidity ratio |
| SLS | Structural liquidity statement |
| TREPS | Triparty repo dealing system |
| UAT | User acceptance testing |

---

## Recall check

1. The bank pays out ₹270 crore and its LCR *rises* from 159% to 187%. Explain, and say why the bank does not manage liquidity on the LCR.
2. The 15–30 day cumulative gap is −29% against a −20% limit, on the same day the LCR reads 159%. Which ₹400 crore is being treated two different ways, and how is the statement fixed?
3. What is the core deposit assumption, and name two numbers elsewhere in this volume that move if it changes.
4. A bank holds ₹800 crore of government securities funded entirely overnight. Which ratio does it pass, which does it fail, and why does that failure matter?
5. NII sensitivity says −₹3 crore and EVE sensitivity says −₹17.5 crore for the same 100 basis point rise. Why are both right?
6. FTP charges the lending unit at overnight rates instead of matched tenor. What does the bank do more of, and which unit ends up holding a risk it cannot see?
7. The CFO's 5pm question goes unanswered for three days. Which of the four BCBS 239 areas failed, and what design choice in the warehouse would have prevented it?
8. Risk says ₹66.51 crore, the ledger says ₹64.10 crore. Walk it back through the six layers and name the root cause. Why is "re-run it" the wrong fix?
9. "Exposure" meant three different things in Volume 1. Name them, and say which control exists to stop that becoming three irreconcilable totals.
10. One ₹400 crore government securities holding appears in six places across both volumes. List them.
11. RWA fell ₹100 crore between T2 and T3. What must the variance analysis say, and which Volume 1 control is it the twin of?
12. What is staging, why must it be immutable, and which analysis becomes impossible without it?
13. A regulatory rule changes and the vendor ships a release. What is the failure mode, and which artefact prevents it?
14. Why is "the result should be empty" the most useful shape of SQL query in this job?
15. The mapping spec says days past due is measured at obligor level, not facility level. What does that single sentence decide?
16. Old system says ₹64.10 crore, new says ₹66.51 crore in parallel run. Is that a defect?
17. Interest cover fell below 1.0 and the borrower went 40 days past due. Trace that through the scorecard to the risk weight and the CET1 ratio.
18. Gini is 0.63 and the model still fails. Which test does it fail, what does the failure do to the ECL and the capital number, and in which direction?
19. PSI is 0.10. What has drifted, and which ₹0.40 crore does it justify?
20. Why is logistic regression used for capital models when gradient boosting scores a better Gini?

---

## The compression

A bank's funding belongs to other people. Most of it can leave, and the ones who leave fastest are the ones who lent most professionally. Liquidity regulation asks two questions — survive thirty days, and is the structure sustainable for a year — and a bank can pass either while failing the other. The maturity ladder underneath both is only as good as the behavioural assumptions in it, which is why a single core deposit number sits under board governance.

The two sides of the balance sheet reprice at different speeds, and that gap is measured twice: as next year's earnings and as the value of every remaining cash flow. Both are correct, both are reported, and managing to only one of them is how banks accumulate the exposure they are not looking at. Inside the bank, funds transfer pricing decides who is credited with the spread — and mispricing it is how a balance sheet quietly acquires risk in a unit that cannot hedge it.

Then the machine.

Every number in both volumes is downstream of whether the bank can find its own exposures. BCBS 239 is not a documentation exercise; it is four questions about who is accountable for a number, and the test of it is a question nobody anticipated, asked at 5pm. When a figure is challenged, lineage is what lets someone walk it back through six layers to a valuation keyed seventy minutes after an extract ran — and the fix is the schedule and the data quality rule, never the re-run.

One exposure appears in five returns and they must agree, which is only possible if there is one underlying row. Producing them is nine steps, of which reconciliation and variance analysis do the real work and are the two most often compressed. Proving the closing balance proves nothing; explaining the movement proves everything — the same sentence that governed the allowance walk in Volume 1.

The machine is five layers: systems that transact, a staging area that never forgets, a warehouse where one borrower becomes one row, engines that compute, and templates that submit. Three parties build and change it, and most failures are a confusion about who owns a decision. The artefact that prevents that confusion is a mapping specification with an owner and a regulatory reference on every row.

And underneath all of it, models. The 0.50% and the 2.30%, the 45% and the 55%, the 80% and the ₹380 crore — none of it was observed. A model has to rank, has to be calibrated, and has to still fit the population it is used on, and passing one of those says nothing about the others. Ours ranks well at a Gini of 0.63 and under-predicts defaults by half, which would understate every provision and every capital number in Volume 1 in the direction that flatters the bank. That is what independent validation exists to catch, and why the function's whole value is its ability to say no.

Follow one borrower and it all connects. Interest cover falls below 1.0 and forty days of arrears cost nine points of score. Nine points move the grade from BBB to BB. The grade moves the exposure to Stage 2, the allowance from ₹0.20 crore to ₹3.74 crore, the risk weight from 100% to 150%, and the CET1 ratio down 75 basis points. Then it defaults, and the number that reaches the return depends on whether a valuation was keyed before ten o'clock at night.
