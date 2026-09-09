---
title: "Credit Risk and Capital — Volume 2: The Funding Side and the Reporting Machine"
description: "The same bank, read from the right-hand side. Where the money comes from, what happens when it leaves, how the two sides reprice against each other, and how every number in both volumes is assembled, controlled and submitted."
series: masterclass
status: live
updated: 2026-09-09
verified: false
tags:
  - liquidity
  - alm
  - irrbb
  - regulatory reporting
  - risk data
  - model risk
---

## Part 0 — Where the money comes from

Volume 1 read the asset side: ₹1,000 crore lent to ten borrowers, one of which failed, and what that did to capital. It treated the funding as a given — ₹1,300 crore of deposits and borrowings that simply existed.

They do not simply exist. They belong to other people, most of whom can ask for them back tomorrow.

| Liabilities and equity | ₹ crore | Contractual maturity | Can it leave at short notice? |
|---|---:|---|---|
| Retail deposits — savings and current | 500 | On demand | Contractually yes; behaviourally rarely |
| Retail deposits — term | 400 | 6 months to 3 years | On premature withdrawal, with penalty |
| Wholesale deposits — corporates | 250 | 1 to 6 months | At maturity, and they will not roll if worried |
| Wholesale deposits — financial institutions | 150 | 7 to 90 days | Immediately at maturity, and first to go |
| Borrowings — market and refinance | 160 | Overnight to 5 years | Partly |
| Borrowings — Tier 2 subordinated | 40 | Over 5 years | No |
| Other liabilities | 50 | Various | No |
| Equity capital and reserves | 150 | Perpetual | Never |
| **Total** | **1,700** | | |

The bank's whole business is the difference between the two sides of Part 0. It has lent ₹1,000 crore for an average of about four years, and funded it with money that has an average contractual life closer to one. It earns the gap between a five-year lending rate and a six-month deposit rate, and it takes two risks to do so.

| Risk | The question | Part |
|---|---|---:|
| **Liquidity risk** | Can the bank meet the outflows when they come? | 1, 2 |
| **Interest rate risk** | What happens to the spread when the short rate moves? | 3 |

Everything in Parts 1 to 5 of this volume is one of those two questions. Everything in Parts 6 to 9 is how the answers get computed, controlled and submitted — for both volumes.

### What the bank earns

Before the risks, the reward.

| | ₹ crore | Average rate |
|---|---:|---:|
| Interest on advances | 98.0 | 9.80% |
| Interest on investments | 34.3 | 6.60% |
| Interest on balances with RBI | 4.4 | 3.35% |
| **Interest income** | **136.7** | |
| Interest on retail deposits | (45.0) | 5.00% |
| Interest on wholesale deposits | (26.0) | 6.50% |
| Interest on borrowings | (15.6) | 7.80% |
| **Interest expense** | **(86.6)** | |
| **Net interest income** | **50.1** | |

Hold on to **₹50.1 crore**. That is the bank's core annual earnings, and Part 3 measures how much of it a rate move can take away. For scale: the steel default in Volume 1 cost ₹62.77 crore, which is more than a full year of net interest income. One borrower erased a year's earnings.

---

## Part 1 — Surviving thirty days

### The event

In the first week of April Y4, the steel manufacturer's default becomes public. A rating agency places the bank on watch, citing single-name concentration. Within days the bank's treasury desk starts getting the calls it does not want:

- Three financial-institution depositors with ₹150 crore between them decline to roll their maturing placements.
- Corporate depositors withdraw ₹100 crore as their term deposits mature.
- ₹20 crore of retail deposits leave, mostly from customers who read the newspaper.

**₹270 crore walks out of the bank in one month.** Nothing about the loan book changed in that month. The bank simply became a name people did not want to be exposed to.

The bank must pay every rupee of it on demand, from assets it can turn into cash immediately. It cannot call in loans. It cannot ask the road construction borrower for ₹200 crore back. It has exactly what it can sell or pledge today.

That is the entire premise of the **liquidity coverage ratio**.

### The ratio

$$
LCR = \frac{\text{High quality liquid assets}}{\text{Net cash outflows over 30 days under stress}} \geq 100\%
$$

Both halves are prescribed, not estimated, so that the number means the same thing at every bank.

### The numerator: what actually counts as liquid

**High quality liquid assets (HQLA)** are assets that can be converted to cash quickly with little or no loss of value, even when everyone else is trying to do the same thing. That last clause is what excludes most of the balance sheet.

| Asset held | ₹ crore | Counts? | Reason |
|---|---:|---|---|
| Balances with RBI, required for CRR | 58 | No | Mandatory; not available to spend |
| Balances with RBI, above CRR | 72 | Yes, Level 1 | Cash |
| Government securities | 400 | Yes, Level 1 | Deep market, repo-eligible with RBI |
| Corporate bonds, AA rated | 120 | Partly, Level 2A | Marketable, but at a haircut |
| Advances | 1,000 | No | Cannot be sold in thirty days at anything near value |
| Fixed and other assets | 72 | No | Not liquid in any sense |

There is an Indian complication worth understanding rather than memorising. Government securities are held partly to satisfy the **statutory liquidity ratio (SLR)** — a mandatory minimum holding — and mandatory holdings are, by definition, not available. RBI resolves this by permitting a defined portion of SLR securities to be counted as HQLA anyway, on the reasoning that in a genuine stress the bank could borrow against them from the central bank. [verify]

| Level | Component | Value ₹ crore | Haircut | HQLA ₹ crore |
|---|---|---:|---:|---:|
| 1 | Balances with RBI above CRR | 72 | 0% | 72 |
| 1 | Government securities available | 374 | 0% | 374 |
| 2A | Corporate bonds, AA rated | 60 | 15% | 51 |
| | **Total HQLA** | | | **497** |

Level 2 assets are capped at 40% of total HQLA. Here they are 10%, so the cap does not bite.

### The denominator: outflows the regulator tells you to assume

The rates below are supervisory assumptions about how much of each funding type runs in a thirty-day stress. A bank does not get to argue that its own depositors are more loyal.

| Funding type | Balance ₹ crore | Run-off rate | Outflow ₹ crore |
|---|---:|---:|---:|
| Retail deposits — stable | 600 | 5% | 30.0 |
| Retail deposits — less stable | 300 | 10% | 30.0 |
| Wholesale — non-financial corporates | 250 | 40% | 100.0 |
| Wholesale — financial institutions | 150 | 100% | 150.0 |
| Undrawn committed credit lines | 108 | 30% | 32.4 |
| Other contractual outflows | — | — | 10.0 |
| **Gross outflows** | | | **352.4** |
| Less contractual inflows within 30 days | 80 | 50% | (40.0) |
| **Net cash outflows** | | | **312.4** |

Rates indicative and subject to change. [verify]

Two features of that table carry most of the meaning.

**Funding is priced by who is lending it.** Retail savings deposits run off at 5%; deposits from other financial institutions run off at 100%. Same rupee, same balance sheet line, twenty times the assumed flight risk — because a household with a salary account does not move it over a rating agency headline and a treasury desk at another bank moves it that morning. This is why the ₹150 crore of financial-institution funding is the most expensive ₹150 crore on the bank's balance sheet in liquidity terms, even though it pays a competitive rate.

**The ₹108 crore of undrawn limits appears again.** It generated ₹54 crore of risk-weighted assets in Volume 1 and it generates ₹32.4 crore of assumed outflow here. It is off the balance sheet and it costs the bank capital and liquidity, on the same reasoning both times: distressed borrowers draw everything available.

**Inflows are capped.** Only 50% of contractual inflows are recognised for corporate exposures, and total inflows are capped at 75% of outflows regardless. A bank cannot assume its way out of a liquidity requirement by claiming borrowers will repay on time in a stress — the borrowers are in the same stress.

$$
LCR = \frac{497}{312.4} = 159\%
$$

Comfortably above 100%. The bank could withstand the prescribed stress with ₹185 crore of HQLA left over.

### What the ratio does not tell you

Now run the actual event. ₹270 crore of real outflows in April Y4, paid entirely from HQLA.

| | Before | After |
|---|---:|---:|
| HQLA ₹ crore | 497 | 227 |
| Total deposits ₹ crore | 1,300 | 1,030 |
| Wholesale from financial institutions ₹ crore | 150 | 0 |
| Net cash outflows ₹ crore | 312.4 | 120.4 |
| **LCR** | **159%** | **189%** |

**The ratio improved.** The bank has just lost 54% of its liquid assets and all of its wholesale bank funding, and the regulatory liquidity metric went up.

This is not a flaw to be indignant about. It is arithmetic behaving correctly and it teaches the most important thing about the LCR: **the runnable funding ran, so the assumed future run-off fell**. The denominator shrank faster than the numerator. The ratio is a statement about the *next* thirty days, and after the flighty money has gone, the next thirty days genuinely do look calmer.

What the ratio cannot say is that a second month of the same magnitude would leave the bank with nothing. HQLA fell ₹270 crore in one month against a starting stock of ₹497 crore. Two more weeks at that rate and the bank is selling loans at distressed prices or at the central bank's emergency window.

Which is why a bank does not manage liquidity on the LCR alone. It manages on the **stock of HQLA in rupees**, on the **daily net funding position**, and on the maturity ladder in Part 2. The ratio is the regulatory floor, not the control.

---

## Part 2 — The shape of the mismatch

### Why a single number is not enough

The LCR asks whether the bank survives thirty days. It says nothing about *when inside those thirty days* the gaps fall, and nothing at all about months two through sixty.

For that the bank prepares a **structural liquidity statement**: every asset and every liability slotted into a time bucket by when it will actually produce or consume cash, with the gap and the running cumulative gap computed for each.

RBI's bucket structure tightens at the near end, where the risk is, and widens further out.

| # | Bucket |
|---:|---|
| 1 | Day 1 |
| 2 | 2 to 7 days |
| 3 | 8 to 14 days |
| 4 | 15 to 30 days |
| 5 | 31 days to 2 months |
| 6 | Over 2 months to 3 months |
| 7 | Over 3 months to 6 months |
| 8 | Over 6 months to 1 year |
| 9 | Over 1 year to 3 years |
| 10 | Over 3 years to 5 years |
| 11 | Over 5 years |

Structure subject to change. [verify]

Eleven buckets rather than four exists for a reason: a bank can be perfectly matched over a month and have a ₹200 crore hole on day nine. Aggregation hides exactly the gap that kills.

### The statement, slotted by contractual maturity

Here is our bank's ₹1,700 crore, each side placed in the bucket when it contractually falls due.

| Bucket | Inflows | Outflows | Gap | Cumulative gap | Cum. outflows | Cum. gap % |
|---|---:|---:|---:|---:|---:|---:|
| Day 1 | 130 | 40 | +90 | +90 | 40 | +225% |
| 2–7 days | 10 | 60 | −50 | +40 | 100 | +40% |
| 8–14 days | 10 | 50 | −40 | 0 | 150 | 0% |
| 15–30 days | 20 | 90 | −70 | −70 | 240 | **−29%** |
| 31 days–2 months | 30 | 120 | −90 | −160 | 360 | −44% |
| 2–3 months | 30 | 130 | −100 | −260 | 490 | −53% |
| 3–6 months | 80 | 200 | −120 | −380 | 690 | −55% |
| 6 months–1 year | 150 | 250 | −100 | −480 | 940 | −51% |
| 1–3 years | 400 | 300 | +100 | −380 | 1,240 | −31% |
| 3–5 years | 500 | 250 | +250 | −130 | 1,490 | −9% |
| Over 5 years | 340 | 210 | +130 | 0 | 1,700 | 0% |
| **Total** | **1,700** | **1,700** | | | | |

All figures ₹ crore.

RBI prescribes tolerance limits on the cumulative negative gap in the first four buckets — commonly cited as 5%, 10%, 15% and 20% of cumulative cash outflows. [verify] Our bank's 15–30 day cumulative gap is **−29% against a −20% limit**. A breach.

And the LCR read 159% on the same balance sheet on the same day.

### Reconciling the two

Both numbers are computed correctly. They disagree because they treat the same ₹400 crore of government securities completely differently.

| Treatment | LCR | Structural liquidity statement |
|---|---|---|
| Government securities | Level 1 HQLA — available today | Slotted at contractual maturity, mostly 3–5 years |
| Basis | Saleability under stress | Residual contractual life |

A bond that matures in four years but can be repo'd this afternoon is liquid by any sensible definition and illiquid by a contractual-maturity rule. Slotting it in bucket ten produces a statement that says the bank has a hole in week four when it does not.

The statement therefore permits marketable securities to be slotted by **expected realisation** rather than contractual maturity, subject to the bank documenting its basis. Reslot ₹374 crore of available government securities into the first bucket and the near-end cumulative gaps turn positive immediately.

That single adjustment is the doorway into the most consequential part of liquidity management.

### Behavioural slotting

Contractual maturity is wrong in both directions, and the securities case is the easy one.

The hard one is on the liability side. **₹500 crore of savings and current account deposits are contractually repayable on demand.** Slot them at contractual maturity and the entire ₹500 crore lands in Day 1, the bucket goes catastrophically negative, and the statement becomes useless — it would show every bank in the country failing every day.

But those balances do not behave that way. A savings account has been open for eleven years and has never gone below ₹40,000. Aggregate current account balances at this bank have not fallen below ₹380 crore in six years, through two rate cycles.

So the bank splits them.

| Deposit behaviour | ₹ crore | Slotted at | Basis |
|---|---:|---|---|
| **Core** — the floor the balance never falls below | 400 | Over 1 year | Six years of daily minimum balance observation |
| **Volatile** — the fluctuating remainder | 100 | Near buckets | Observed variability around the core |

The same logic runs the other way on assets. A five-year term loan with no prepayment clause is a five-year inflow contractually; observed behaviour says a fraction repays early every year, so part of it is slotted nearer. Term deposits with premature withdrawal facilities leave earlier than their maturity says.

| Item | Contractual | Behavioural | Direction of the correction |
|---|---|---|---|
| Savings and current deposits | Day 1 | Core beyond 1 year | Far less near-term outflow |
| Term deposits with withdrawal option | At maturity | Fraction pulled earlier | More near-term outflow |
| Term loans | At maturity | Fraction prepays | More near-term inflow |
| Undrawn credit lines | No outflow | Fraction drawn | More near-term outflow |
| Marketable securities | At maturity | Saleable now | More near-term inflow |

**Every one of these is an assumption, and every one is a control point.** A bank that assumes 85% of its savings balances are core rather than 80% moves ₹25 crore out of the near buckets and can cure a breach with a spreadsheet change. This is why behavioural assumptions must be documented, back-tested against actual observed behaviour, approved at ALCO, and reviewed at least annually — and why a supervisor's first question on any liquidity statement is what the core deposit assumption is and what evidence supports it.

The assumptions also break precisely when needed. Deposits that were core for eleven years are not core in the week the bank appears in the newspapers, which is exactly what happened in April Y4.

### The one-year test

The LCR asks about thirty days. The **net stable funding ratio** asks a different question over a different horizon: is the *structure* of the funding sustainable for a year?

$$
NSFR = \frac{\text{Available stable funding}}{\text{Required stable funding}} \geq 100\%
$$

**Available stable funding** weights liabilities and capital by how likely they are to still be there in a year. **Required stable funding** weights assets by how difficult they would be to monetise, and therefore how much long-term funding they need behind them.

| Available stable funding | ₹ crore | Factor | ASF ₹ crore |
|---|---:|---:|---:|
| Equity capital and reserves | 150 | 100% | 150 |
| Tier 2 subordinated debt, over 1 year | 40 | 100% | 40 |
| Retail deposits — stable | 600 | 95% | 570 |
| Retail deposits — less stable | 300 | 90% | 270 |
| Wholesale — non-financial, under 1 year | 250 | 50% | 125 |
| Wholesale — financial institutions, under 6 months | 150 | 0% | 0 |
| Borrowings over 1 year | 100 | 100% | 100 |
| Borrowings under 1 year, other liabilities | 110 | 0% | 0 |
| **Total** | **1,700** | | **1,255** |

| Required stable funding | ₹ crore | Factor | RSF ₹ crore |
|---|---:|---:|---:|
| Balances with RBI | 130 | 0% | 0 |
| Government securities | 400 | 5% | 20 |
| Corporate bonds | 120 | 50% | 60 |
| Advances, performing, over 1 year | 878 | 85% | 746 |
| Advances, non-performing | 100 | 100% | 100 |
| Fixed and other assets | 72 | 100% | 72 |
| Undrawn commitments | 108 | 5% | 5 |
| **Total** | | | **1,003** |

Factors indicative and subject to change. [verify]

$$
NSFR = \frac{1{,}255}{1{,}003} = 125\%
$$

### Why both ratios exist

They are not two versions of the same test, and a bank can pass one while failing the other.

| | LCR | NSFR |
|---|---|---|
| Question | Do we survive thirty days of a run? | Is the funding structure sustainable over a year? |
| Horizon | 30 days | 1 year |
| Answered by | Holding a stock of liquid assets | Changing the composition of liabilities |
| Failure looks like | Not enough government securities | Long assets funded with short money |

Picture a bank holding ₹800 crore of government securities funded entirely by overnight borrowing from other banks. Its LCR is enormous — HQLA is huge and the assets are Level 1. Its NSFR is dreadful, because overnight financial-institution funding gets a 0% ASF factor and it has no stable funding at all. It passes the thirty-day test and its business model is a bet that the interbank market opens tomorrow. That is a real failure mode and it is the reason the second ratio was written.

The NSFR also states the single instruction that summarises everything in this part: **fund long assets with long money.**

---

## Part 3 — Repricing: the yield curve and interest rate risk

### The trade the bank is actually making

Return to the steel loan. ₹100 crore lent for five years at 10%. The bank funded it with six-month wholesale deposits at 6.5%.

Spread in year one: 3.5%, or ₹3.5 crore. Good business.

Now the six-month deposit matures and must be replaced. If short rates have risen 200 basis points, the replacement costs 8.5%. The loan still pays 10%, fixed for five years.

| | At origination | After a 200bp rise |
|---|---:|---:|
| Loan yield | 10.00% | 10.00% |
| Funding cost | 6.50% | 8.50% |
| **Spread** | **3.50%** | **1.50%** |
| Annual margin on ₹100 crore | ₹3.5 crore | ₹1.5 crore |

The loan did not change. The borrower did not change. The bank lost 57% of the margin on a good performing asset because it borrowed short and lent long, and short rates moved.

That is **interest rate risk in the banking book (IRRBB)**, and it is the second of the two risks Part 0 named.

### The curve

Interest rates are not a single number. They are a **term structure** — a different rate for each maturity — and the shape carries information.

| Feature | What it is | What moves it |
|---|---|---|
| **Level** | The whole curve up or down | Policy rate, inflation expectations |
| **Slope** | Long rates minus short rates | Growth expectations, term premium |
| **Curvature** | The middle relative to the ends | Supply and demand at specific tenors |

An upward-sloping curve is the normal state and is the entire economic basis for maturity transformation: the bank borrows at the short end where rates are low and lends at the long end where they are higher. It is paid for bearing the risk that the short end moves.

Three curves are built from the same underlying data and used for different jobs:

| Curve | Definition | Used for |
|---|---|---|
| **Par** | Coupon rate at which a bond of that maturity prices at 100 | Quoting new issues |
| **Spot** | Rate for a single cash flow at one future date, no intermediate coupons | Discounting individual cash flows |
| **Forward** | Rate implied today for a future period | Projecting the cost of rolling short funding |

The forward curve is what the bank should have looked at before funding a five-year loan with six-month money. It states, from today's prices, what the market expects six-month funding to cost in six months, twelve months, eighteen months. If the forward curve had shown 8.5% funding in a year, the 3.5% spread was never a 3.5% spread — it was a spread that shrinks on a schedule the market had already published.

### Where the risk comes from

Four distinct sources, and they need different measurement.

| Source | Mechanism | In our bank |
|---|---|---|
| **Repricing or gap risk** | Assets and liabilities reprice at different times | The five-year loan against six-month deposits |
| **Basis risk** | Both reprice, but off different reference rates that do not move together | Loans on repo-linked EBLR, deposits priced off market rates |
| **Yield curve risk** | The curve changes shape rather than shifting in parallel | Short rates rise while long rates do not |
| **Optionality** | Customers exercise embedded options against the bank | Loan prepayment when rates fall; deposit withdrawal when rates rise |

Optionality is the one that is always asymmetric. When rates fall, borrowers refinance and the bank loses its high-yielding assets. When rates rise, depositors withdraw and re-place at the new higher rate. Customers exercise when it suits them, which is always when it does not suit the bank.

### The earnings view

The first measurement asks: **what happens to net interest income over the next twelve months?**

Everything that reprices within a year is counted; everything that does not is ignored.

| | ₹ crore |
|---|---:|
| Rate-sensitive assets repricing within 1 year | 500 |
| Rate-sensitive liabilities repricing within 1 year | 800 |
| **Repricing gap** | **−300** |

The bank is **liability-sensitive**: more of its funding reprices in the next year than its lending does. When rates rise, its costs move up before its income does.

$$
\Delta NII \approx \text{Gap} \times \Delta r = -300 \times 1\% = -\text{₹}3.0\text{ crore}
$$

Against net interest income of ₹50.1 crore, a 100 basis point rise costs **6.0% of core earnings**. A 200 basis point rise costs ₹6 crore, or 12%.

Two limitations of this measure, both of which supervisors probe:

- **It ignores everything beyond twelve months.** A thirty-year fixed-rate mortgage book and a thirteen-month one look identical to a one-year gap analysis.
- **It assumes deposit rates move one-for-one with market rates.** They do not. Savings rates are administered and sticky, so the actual pass-through might be 50%, which halves the impact. That assumption — the **deposit beta** — is a modelled input and a control point, exactly like the core deposit assumption in Part 2.

### The economic value view

The second measurement asks a different question over a different horizon: **what happens to the present value of everything on the balance sheet?**

Revalue every asset and every liability at the shifted curve. The change in the difference is the change in **economic value of equity (EVE)**.

$$
\Delta EVE \approx -\left(D_A - D_L \times \frac{L}{A}\right) \times A \times \Delta r
$$

where $D_A$ and $D_L$ are the durations of assets and liabilities.

| Input | Value |
|---|---:|
| Duration of assets | 2.4 years |
| Duration of liabilities | 1.5 years |
| Total assets | ₹1,700 crore |
| Total liabilities | ₹1,550 crore |
| Duration gap | 1.03 years |

$$
\Delta EVE = -1.03 \times 1{,}700 \times 1\% = -\text{₹}17.5 \text{ crore}
$$

A 100 basis point rise destroys ₹17.5 crore of economic value — **11.7% of the bank's Tier 1 capital of ₹150 crore**.

The Basel outlier test applies six prescribed interest rate shock scenarios and flags a bank whose EVE declines by more than 15% of Tier 1 capital under any of them. [verify] At 100 basis points our bank is inside the threshold. Under the ±200 basis point parallel shock it is at roughly 23% and would be flagged as an outlier, triggering supervisory attention and probably a capital add-on under Pillar 2.

### Why the two measures disagree, and why you need both

| | NII sensitivity | EVE sensitivity |
|---|---|---|
| Horizon | Next 12 months | All future cash flows |
| Measures | Earnings | Value |
| Sees | Near-term repricing | Long-dated positions |
| Blind to | Anything beyond a year | Timing of earnings within the horizon |

A bank can be liability-sensitive over one year — NII falls when rates rise — and hold short-duration assets so that EVE rises when rates rise. The two measures then point in opposite directions, and both are correct, because they are answering different questions.

Our bank happens to be exposed the same way on both, which makes its position unambiguous: rising rates hurt earnings and hurt value simultaneously. That is the classic borrow-short-lend-long profile, and the classic remedy is either to change the balance sheet or to hedge it — which is Part 5.

**The trap** is running only one measure. Manage exclusively to NII and a bank will happily load up on long-dated fixed-rate assets funded with sticky core deposits, because that combination looks wonderful for twelve months and accumulates enormous duration risk. Manage exclusively to EVE and a bank may hedge its way to a stable economic value while its reported earnings swing violently, which is what shareholders and analysts actually see.

Both are reported to ALCO, both carry board-approved limits, and both are computed on the same behavioural assumptions from Part 2. If the core deposit assumption changes, both numbers change — which is why that assumption sits under governance rather than in a modeller's spreadsheet.

---

## Part 4 — Funds transfer pricing

### Who earned the spread?

The branch lent ₹100 crore to the steel manufacturer at 10%. The retail network raised deposits at 5%. The bank earned 5% and everyone is pleased with themselves.

Now allocate that 5% between the branch that made the loan and the network that raised the deposits. Whatever answer you pick will determine what those units do next, so pick carefully.

Give it all to the lending unit and deposit-gathering looks unprofitable, so nobody raises deposits. Give it all to the deposit unit and lending looks unprofitable, so nobody lends. Split it in half and both units are being paid for something neither of them did — because a large part of that 5% was not earned by lending or by deposit-taking at all. It was earned by **funding a five-year asset with six-month money**, which is a risk position, not a customer relationship.

**Funds transfer pricing (FTP)** is the internal mechanism that allocates it correctly. Treasury sits in the middle as an internal counterparty. It **buys** funds from the deposit unit at a rate matched to those deposits' behavioural tenor, and **sells** funds to the lending unit at a rate matched to the loan's tenor.

| Unit | Pays | Receives | Margin |
|---|---:|---:|---:|
| Lending unit | 7.50% FTP charge, matched to 5-year tenor | 10.00% from the borrower | **2.50%** |
| Deposit unit | 5.00% to the depositor | 6.00% FTP credit, matched to behavioural tenor | **1.00%** |
| Treasury | 6.00% to the deposit unit | 7.50% from the lending unit | **1.50%** |
| | | **Total** | **5.00%** |

The 5% decomposes into three economically distinct things:

| Component | ₹ crore on the steel loan | What it is | Who bears the risk |
|---|---:|---|---|
| Credit spread | 2.50 | Compensation for the borrower's default risk | Lending unit |
| Deposit spread | 1.00 | Value of raising funds below market | Deposit unit |
| Maturity transformation | 1.50 | Compensation for the term mismatch | Treasury |

Now the incentives are right. The lending unit's ₹2.50 crore is compensation for credit risk and is the number against which the ₹0.20 crore of expected credit loss from Volume 1 should be measured. The deposit unit is rewarded for cheap, stable funding — which is exactly the funding that scores well in Part 2's ratios. And **the ₹1.50 crore of maturity transformation profit sits in treasury, which is the only unit that can hedge the risk that produced it.**

### The failure mode

Charge the lending unit at overnight rates instead of matched tenor. In our curve that is roughly 6%, not 7.5%.

| | Matched-tenor FTP | Overnight FTP |
|---|---:|---:|
| FTP charge to lending unit | 7.50% | 6.00% |
| Lending unit's apparent margin | 2.50% | 4.00% |
| Interest rate risk visible in treasury | ₹1.50 crore | ₹0.00 crore |

The lending unit now shows a 4% margin and will write as many five-year fixed-rate loans as it can find. Its scorecard rewards it. The interest rate risk those loans create accumulates in the banking book, is priced at nothing, is owned by nobody, and shows up only when rates move — as a ₹17.5 crore hit to economic value that no business unit's P&L predicted.

Mispriced FTP is one of the more reliable ways to build a large hidden risk position inside a bank that looks profitable throughout. The transfer rate is not an accounting convention; it is the price signal that determines what the balance sheet becomes.

The same discipline extends to **liquidity premium**: the FTP curve should charge more for assets that consume liquidity — long-dated, illiquid, or committed undrawn lines — so that the ₹108 crore of undrawn limits that cost the bank capital in Volume 1 and outflow assumptions in Part 1 also costs the business unit that granted them.

---

## Part 5 — The investment book and the market

### Why the bank owns ₹520 crore of securities

The advances book is the business. The investment book exists for four reasons that have already appeared in this volume.

| Purpose | Which holdings | Where it appeared |
|---|---|---|
| Satisfy the statutory liquidity ratio | Government securities | Part 1 |
| Provide high quality liquid assets | Government securities, AA corporate bonds | Part 1 |
| Serve as repo collateral for funding | Government securities | Below |
| Earn a return on surplus funds | All of it | Part 0 |

The ₹400 crore of government securities is therefore not idle. It is simultaneously a regulatory holding, a liquidity buffer, a funding instrument and an earning asset — and how it is classified for accounting determines whether its price moves hit profit or reserves.

### The instruments

**Bonds** are the core. A bond's price and its yield move inversely: when market yields rise, the price of an existing fixed-coupon bond falls, because a buyer will only pay less for a below-market coupon. The sensitivity is **duration** — the same duration that drove the EVE calculation in Part 3.

A ₹100 crore holding of a five-year government bond with duration 4.2 loses roughly ₹4.2 crore in value on a 100 basis point rise in yields. The bank's ₹400 crore government book, at an average duration of 4, loses about ₹16 crore on the same move. Whether that ₹16 crore hits the income statement, other comprehensive income, or nothing at all depends entirely on the classification bucket it sits in — which is why investment classification is a governed decision made at purchase and not revisited casually.

**Equities** the bank holds only in small amounts, because equity investments attract punitive capital treatment and are deducted from CET1 where they are in other financial institutions.

**Repo** is where securities become funding. The bank sells ₹210 crore of government securities today and agrees to buy them back tomorrow at a slightly higher price. Economically it is a secured overnight loan; legally it is a sale and repurchase, which is what makes it robust in a counterparty failure.

| | ₹ crore |
|---|---:|
| Cash raised | 200 |
| Securities delivered | 210 |
| **Haircut** | **5%** |

The haircut protects the lender against the securities falling in value before it can sell them. It is the same concept as the collateral haircut in Volume 1's mitigation section, applied to a one-day horizon instead of a three-year enforcement.

Repo is the mechanism by which HQLA becomes cash within hours, and it is what makes the Part 1 claim — that government securities are liquid — operationally true rather than theoretical.

### The Indian money market

Where the bank's overnight and short-tenor funding actually comes from.

| Market | Instrument | Secured? | Typical use |
|---|---|---|---|
| Call money | Overnight interbank lending | No | Managing the daily cash position |
| Notice and term money | 2 to 14 days, and beyond | No | Short funding gaps |
| **TREPS** | Triparty repo, cleared through CCIL | Yes | The dominant overnight market |
| **LAF** | Repo and reverse repo with RBI | Yes | Policy rate corridor; system liquidity |
| **MSF** | Marginal standing facility, above the repo rate | Yes | Emergency overnight borrowing |
| Treasury bills | 91, 182, 364 day government paper | — | Short-dated HQLA |
| Certificates of deposit | Bank-issued short-term paper | No | Wholesale deposit raising |
| Commercial paper | Corporate short-term paper | No | Investment for the bank |

Details subject to change. [verify]

Two things about that table matter for our bank. The ₹150 crore of financial-institution funding that ran in April Y4 came largely from these markets, which is why it ran so fast — it is priced daily and reprices on sentiment. And the **MSF** is the facility our bank would have reached for in month two of the run, at a penal rate, which is the point at which liquidity problems become public.

### Hedging the banking book

Part 3 left our bank exposed: rates rise, net interest income falls ₹3 crore per 100 basis points and economic value falls ₹17.5 crore. The balance sheet cannot easily be changed — the bank cannot recall the steel loan or lengthen its deposits by decree.

So it hedges with an **interest rate swap**. On a notional of ₹100 crore for five years, the bank agrees to **pay fixed at 7.2%** and **receive six-month MIBOR**.

| Rates | Funding cost change on ₹100 crore | Swap: receives floating, pays 7.2% fixed | Net |
|---|---:|---:|---:|
| Unchanged | 0 | 0 | 0 |
| +200 bp | −₹2.0 crore | +₹2.0 crore | **0** |
| −200 bp | +₹2.0 crore | −₹2.0 crore | **0** |

No principal ever changes hands. Only the difference between the two interest streams is exchanged, on the notional. The swap converts the bank's floating-rate funding cost into a fixed one, matching the fixed-rate asset it is funding, and the exposure in Part 3 disappears on that ₹100 crore.

The swap is one of four instrument families, all of which do the same job on different underlyings:

| Instrument | Obligation | Payoff |
|---|---|---|
| **Forward** | Both parties must transact at an agreed future price | Linear, over-the-counter |
| **Future** | Same, but standardised and exchange-traded with daily margin | Linear, low counterparty risk |
| **Swap** | Exchange of two cash flow streams over time | Linear, a series of forwards |
| **Option** | One party has the right, not the obligation | Asymmetric; the buyer pays a premium |

### The risk the hedge creates

The swap removed interest rate risk and created something else. When rates rise 200 basis points, the swap is worth roughly ₹8 crore to our bank — and that ₹8 crore is owed by the counterparty. If the counterparty fails, the hedge fails at exactly the moment the bank needed it.

This is **counterparty credit risk**, and it differs from the loan credit risk of Volume 1 in one crucial way.

| | Loan | Derivative |
|---|---|---|
| Exposure at default | Known, roughly the outstanding balance | Depends on where market rates are on the day |
| Direction | Always the bank is owed | Either party may owe the other |
| Measurement | EAD from drawn plus CCF × undrawn | Current exposure plus potential future exposure |

Because the exposure moves with the market, it is measured in two parts: **current exposure**, the swap's mark-to-market today, and **potential future exposure**, an estimate of how far in the money it could move before maturity. The credit charge for the risk that the counterparty's own creditworthiness deteriorates is the **credit valuation adjustment (CVA)**, and it is capitalised separately under Basel.

Four mitigants apply, and they are the derivative equivalents of Volume 1's collateral and netting:

| Mitigant | Mechanism |
|---|---|
| **Netting agreement** | All trades with one counterparty net to a single exposure, enforceable in insolvency |
| **Collateral (CSA)** | Variation margin posted daily against mark-to-market moves |
| **Initial margin** | Posted upfront against potential future exposure |
| **Central clearing** | A central counterparty interposes itself, novating the trade |

**Wrong-way risk** is the failure mode to watch for: exposure to the counterparty grows in exactly the scenarios where the counterparty is most likely to fail. Buying credit protection on a company from a bank that is itself heavily exposed to that company is the textbook case. It is the same correlation problem as downturn LGD in Volume 1 — collateral and borrower failing together — appearing in a different market.

### The infrastructure

In India, most of this settles through institutions worth knowing by name.

| Institution | Role |
|---|---|
| **CCIL** | Central counterparty for government securities, TREPS, forex and rupee derivatives |
| **NDS-OM** | Electronic order-matching platform for government securities |
| **RTGS and NEFT** | Large-value and retail payment settlement |
| **CDSL and NSDL** | Securities depositories |

Central clearing through CCIL is what converts the bilateral counterparty risk on our swap into exposure to a central counterparty that holds margin from every participant. It concentrates risk deliberately, in an institution designed and supervised to hold it.

---

## Part 6 — Risk data

### The question that exposes everything

At 5pm on the day the steel default became public, the CFO asks a simple question:

**"What is our total exposure to the steel sector, across every product and entity, right now?"**

Not the loan book — total exposure. The ₹100 crore term loan. The undrawn cash credit limit to the same borrower. Corporate bonds of steel companies in the ₹120 crore investment portfolio. Derivative exposure to steel counterparties. Guarantees issued. Exposures in the overseas branch.

If the answer takes three days, the bank has a data problem that no amount of modelling sophistication compensates for. Every number in both volumes — the ₹66.51 crore allowance, the ₹1,234 crore of RWA, the 159% LCR, the ₹17.5 crore EVE sensitivity — is downstream of whether the bank can find its own exposures reliably.

### BCBS 239

That failure was systemic in 2008: banks could not aggregate their own risk quickly enough to act. **BCBS 239** is the response — principles for risk data aggregation and risk reporting, grouped into four areas. [verify]

| Area | What it requires |
|---|---|
| **Governance and infrastructure** | Board-level ownership of data; architecture that supports aggregation in normal and stressed conditions |
| **Risk data aggregation** | Accuracy, completeness, timeliness, adaptability |
| **Risk reporting** | Reports that are accurate, clear, comprehensive, frequent, and reach the right people |
| **Supervisory review** | The supervisor assesses compliance and can require remediation |

Four words in that table carry the operational weight.

| Requirement | The test | Failure in our bank |
|---|---|---|
| **Accuracy** | The number agrees to the general ledger and to source | Advances in the risk system do not tie to the finance ledger |
| **Completeness** | Every material exposure is captured across products, entities and geographies | The overseas branch's steel exposure is on a separate system |
| **Timeliness** | Available fast enough to act, including in a stress | Three days for a sector exposure question |
| **Adaptability** | New questions can be answered without a project | Sector analysis was never built, so it needs a change request |

Adaptability is the one that is quietly hardest and most often failed. A bank can meet the first three with a rigid, well-controlled pipeline that produces exactly the reports it was designed to produce — and then be unable to answer a question nobody anticipated. Crises consist entirely of questions nobody anticipated.

### Lineage

**Data lineage** is the documented path from the number in a submitted return back to the field in the source system it came from, including every transformation on the way.

Trace the ₹66.51 crore allowance backwards:

| Step | Where it lives | What happens |
|---|---|---|
| 6 | Regulatory return | Provision disclosed |
| 5 | Finance ledger | Posted as an impairment charge |
| 4 | ECL engine | Gross carrying amount less PV of expected recoveries |
| 3 | Staging module | Days past due and rating trigger Stage 3 |
| 2 | Risk data warehouse | Exposure, rating, security, EIR assembled |
| 1 | Core banking and collateral systems | Loan account, days past due, valuation |

Every arrow between those layers is a transformation that can silently be wrong. A currency conversion, a date convention, a customer identifier that does not match between the loan system and the collateral system. Lineage exists so that when the number is challenged — by an auditor, a supervisor, or a risk committee that does not believe it — someone can walk it back to source rather than defending it by assertion.

### Making the data trustworthy

| Control | What it does |
|---|---|
| **Golden source** | One designated authoritative system per data element, so two systems cannot both be right |
| **Reconciliation** | Risk figures tie to the finance general ledger, with differences explained not just quantified |
| **Data quality rules** | Automated checks for completeness, validity, consistency and duplication, with a dashboard and owners |
| **Data dictionary** | One agreed definition per term, so "exposure" means the same thing in every system |
| **Data ownership** | A named business owner accountable for each critical element |

The data dictionary sounds bureaucratic and is not. Volume 1 used "exposure" to mean drawn advances in the concentration calculation, drawn plus converted undrawn in the capital calculation, and gross carrying amount in the impairment calculation. All three are correct in context. A bank without a dictionary has three systems each confident it holds "exposure" and three different totals nobody can reconcile.

---

## Part 7 — Regulatory reporting

### What actually gets submitted

Every number built across both volumes ends up in a return. The main ones for our bank:

| Return | Content | Frequency |
|---|---|---|
| Capital adequacy | RWA, capital components, CET1 and total ratios | Quarterly |
| Asset classification and provisioning | IRAC classification, NPAs, provisions held | Quarterly |
| **CRILC** | Borrowers at or above ₹5 crore, classification, SMA flags | Periodic; SMA-2 weekly |
| Structural liquidity statement | The bucket ladder from Part 2 | Fortnightly |
| LCR and NSFR | Liquidity ratios and their components | Monthly and quarterly |
| Form A | CRR and SLR maintenance | Fortnightly |
| Large exposures | Exposures against the single and group counterparty limits | Quarterly |
| Interest rate sensitivity | The repricing gap from Part 3 | Monthly |
| Pillar 3 disclosures | Public risk and capital disclosure | Half-yearly |

Names, thresholds and frequencies subject to change. [verify]

These are not independent documents. The ₹99.09 crore steel exposure appears in the capital return as risk-weighted assets, in the asset classification return as a sub-standard NPA, in CRILC as a defaulted borrower visible to every other lender, in the large exposures return against the ₹30 crore limit it breaches, and in the structural liquidity statement as an inflow that will not arrive. **One exposure, five returns, and they must agree.**

### The production cycle

| # | Step | What it produces |
|---:|---|---|
| 1 | Data cut-off | A frozen position across every source system |
| 2 | Extract | Raw records landed in staging, unaltered |
| 3 | Transform and enrich | Mapped, conformed and joined to reference data |
| 4 | Compute | RWA, ratios, buckets, sensitivities |
| 5 | Reconcile to ledger | Risk figures tied to finance, differences explained |
| 6 | Variance analysis | Every material movement attributed to a business event |
| 7 | Review and challenge | Independent scrutiny of the output |
| 8 | Sign-off | Preparer, reviewer, function head, attesting officer |
| 9 | Submit | Filed within the regulatory deadline |

Two steps in that chain do the real work, and they are the two most often compressed when the deadline is tight.

**Reconciliation to the ledger.** Risk-weighted assets are computed in a risk engine; advances are recorded in a finance ledger. They must tie. A ₹5 crore unexplained difference is not a rounding issue — it means one system has an exposure the other does not, and whichever is wrong, a return is about to be filed with a number that cannot be defended.

**Variance analysis.** Every material movement from the prior period must be explained by a business event, not by a system change. Our bank's RWA moved from ₹1,234 crore to ₹1,284 crore between T1 and T2. The explanation must be specific:

| Driver | ₹ crore |
|---|---:|
| Opening RWA | 1,234 |
| Steel exposure: risk weight 100% → 150% on downgrade | +50 |
| New lending | 0 |
| Repayments | 0 |
| **Closing RWA** | **1,284** |

If the ₹50 crore cannot be attributed to a named cause, the bank does not know why its capital ratio moved, which means it does not know its capital ratio. The same discipline is the allowance walk from Volume 1 applied to a different number, and it is the same control: **proving the closing balance proves nothing; explaining the movement proves everything.**

### The controls around the number

| Control | Purpose |
|---|---|
| **Four-eyes review** | A preparer and an independent reviewer, both named |
| **Sign-off hierarchy** | Preparer, reviewer, function head, CFO or CRO, board committee where required |
| **Attestation** | A named individual formally attests the return is accurate and complete |
| **Audit trail** | Every manual adjustment logged with who, when and why |
| **Restatement protocol** | A defined process for correcting a submitted return |

Manual adjustments deserve particular attention. Every reporting cycle produces a handful — a correction the system cannot make in time, a mapping gap, a known defect. Each is legitimate individually. Collectively, a growing population of recurring manual adjustments is the clearest available signal that the underlying system no longer produces the right answer, and that the reporting team is compensating by hand every month. Supervisors count them and ask what is being done to remove them.

---

## Part 8 — How the machine is built and changed

### Who does what

Three parties are involved in every regulatory reporting programme, and most delivery failures are a confusion about which one owns a decision.

| Party | Owns | Does not own |
|---|---|---|
| **Business and risk** | The definition of the number, the interpretation of the regulation, the sign-off | How it is built |
| **Technology** | The build, the data pipeline, the platform, the release | What the number should be |
| **Vendor** | The reporting or risk product and its regulatory update cycle | The bank's own data and its correctness |

The commonest failure: a regulatory rule change arrives, technology implements it from the vendor's release notes, and nobody in the business ever wrote down what the bank's own interpretation is. The number then changes for reasons nobody can articulate when the supervisor asks.

### The layers

| Layer | Contains | Owned by |
|---|---|---|
| **Source systems** | Core banking, treasury, collateral, trade finance | Business operations |
| **Staging** | Raw extracts, as-received, immutable | Technology |
| **Risk data warehouse** | Cleansed, conformed, enriched exposure data | Risk and technology jointly |
| **Calculation engines** | ECL engine, RWA engine, ALM engine | Risk |
| **Reporting layer** | Return templates, aggregation, disclosure | Finance and regulatory reporting |

The staging layer being immutable matters more than it sounds. If raw extracts are overwritten, there is no way to prove that a difference between last quarter's number and this quarter's came from the business rather than from a change in what the source sent. Immutable staging is what makes the variance analysis in Part 7 possible at all.

**Oracle**, or an equivalent relational platform, typically underpins the warehouse and the engines: exposures, parameters, results and audit trails all live in structured tables with referential integrity, and the calculations run as set-based operations across them.

### What SQL is actually for

Not building the system. Investigating it.

| Task | Shape of the query |
|---|---|
| Reconcile | Sum exposures by classification in the risk warehouse; compare to the ledger balance |
| Investigate a variance | Join this period's exposure table to the prior period's on account identifier; return rows where classification or rating changed |
| Prove a rule fired | Select accounts where days past due exceeds 30 and stage is 1 — the result should be empty |
| Trace lineage | Follow one account identifier through staging, warehouse and results tables |
| Test data quality | Count nulls, duplicates and out-of-range values in critical fields |

The third row is the pattern worth internalising: **write the query that should return nothing.** An exception query that comes back empty is a passed control. A test that confirms what you expect to see proves far less than one designed to find what should not exist.

### The mapping specification

The single most important artefact in a regulatory reporting build, and the one most often written badly.

| Column | Content |
|---|---|
| Source system | Where the field comes from |
| Source field | Its exact name in that system |
| Target field | Where it lands |
| Transformation | The rule applied, stated unambiguously |
| Default and null handling | What happens when the source is empty |
| Owner | The named business person who approved this rule |
| Regulatory reference | The paragraph of the rule this implements |

The last two columns are the ones dropped under time pressure and the ones that matter in two years, when the person who wrote the rule has left and a supervisor asks why an exposure is being treated as it is.

### Change and run

| | Change | Run |
|---|---|---|
| Purpose | Implement new requirements | Produce the numbers each cycle |
| Rhythm | Project timelines | The reporting calendar |
| Risk | Delivering late or wrong | Missing a deadline, filing a bad number |

They compete for the same people, and run always wins in the short term because the deadline is real and immediate. A change programme staffed with people who also carry the monthly close will slip every month-end, predictably, and the plan should assume it rather than discover it.

### Testing, and the stage that matters most

| Stage | Question |
|---|---|
| Unit | Does this component behave as specified? |
| Integration | Do the components work together across the pipeline? |
| User acceptance | Does the business agree the output is correct? |
| Regression | Did the change break anything that previously worked? |
| **Parallel run** | Do old and new produce the same numbers, and where they differ, why? |

**Parallel run is the one that cannot be skipped** on a regulatory change. Old and new systems produce the same return for the same period, and every difference is explained line by line and signed off before cutover. An unexplained difference is a defect until proven otherwise — because on the day of cutover, the bank is filing the new system's number and will be asked to justify why it changed.

Cutover then needs a stated go/no-go decision, a rollback plan that has been tested rather than written, a first-cycle heightened review, and a documented handover from the project team to the run team. Projects that end at go-live rather than at the first successful production cycle leave the run team debugging someone else's build against a regulatory deadline.

---

## Part 9 — Models

### Where models sit in all of this

Volume 1's numbers were not observed. They were produced by models.

| Model | Produces | Consumed by |
|---|---|---|
| PD model | 0.50% for BBB, 2.30% for BB | ECL staging and measurement; IRB capital |
| LGD model | 45%, raised to 55% on downgrade | ECL measurement; IRB capital |
| EAD and CCF model | 80% conversion factor | ECL measurement; capital on undrawn limits |
| Behavioural models | Core deposit proportion, prepayment rates | Liquidity buckets, NII and EVE |
| Scenario models | Base, upside, downside weights | Forward-looking ECL; stress testing |

The ₹66.51 crore allowance, the ₹1,234 crore of RWA and the ₹17.5 crore EVE sensitivity are all model outputs. A model that is wrong by a modest margin moves the capital ratio by more than most business decisions do.

### Measuring whether a model works

Three questions, three different answers, and passing one says nothing about the others.

| Question | Metric | Our PD model |
|---|---|---:|
| Does it rank borrowers correctly? | Gini coefficient, AUC | Gini 0.62 |
| Are the levels right? | Predicted versus observed default rate by grade | Within tolerance |
| Is the population still the one it was built on? | Population stability index | PSI 0.08 |

**Discrimination** asks whether defaulters score worse than non-defaulters. A Gini of 0.62 means the model ranks well. It says nothing about whether the PD of 0.50% attached to BBB is the right level — a model can rank perfectly and be uniformly too optimistic.

**Calibration** asks whether the predicted 0.50% actually corresponds to observed defaults near 0.50%. This is the property that matters for provisioning and capital, because those are computed from the level, not the ranking.

**Stability** asks whether the borrowers being scored today resemble the ones the model was built on. A PSI of 0.08 is acceptable; above roughly 0.25 the population has shifted enough that the model's estimates are being applied outside their evidence. [verify] This is the metric that flags a model going stale after a book has grown into a new segment — which is exactly what happened to our bank's steel exposure, and the reason a ₹0.40 crore overlay was applied at T2.

### Governance

Models that determine capital and provisions cannot be owned solely by the people who build them.

| Control | Content |
|---|---|
| **Model inventory** | Every model in use, its owner, its purpose, its tier |
| **Tiering** | Materiality-based; a capital model gets more scrutiny than a marketing score |
| **Independent validation** | A separate function, reporting separately, that can reject a model |
| **Approval** | A model committee signs off before use and at each material change |
| **Ongoing monitoring** | Discrimination, calibration and stability tracked on a schedule with thresholds |
| **Periodic review** | Full revalidation at a defined frequency |
| **Documentation** | Data, methodology, assumptions, limitations and testing, sufficient to reproduce |

Two disciplines are worth stating plainly.

**Independent validation must be genuinely independent.** A validator who reports to the model's developer, or whose performance is measured on how many models get approved, is a documentation exercise. The function's value lies entirely in its ability to say no.

**Limitations must be documented and carried forward.** Every model has a range of conditions it was built for. Our PD model was calibrated on data that did not include the steel import surge; that is a limitation, it justified the overlay, and it must appear in the model documentation so the next person to use the model knows where it stops being reliable.

### Machine learning, and where it is allowed

Newer techniques offer better discrimination on rich data — gradient boosting and similar methods regularly outperform logistic regression on Gini.

The constraint is not technical. It is that a bank must **explain** a credit decision to the customer, to the auditor, and to the supervisor, and must demonstrate that the decision does not discriminate on prohibited grounds. A model whose reasoning cannot be articulated is difficult to defend in any of those three conversations.

The practical settlement in most banks:

| Use | Technique | Reason |
|---|---|---|
| Regulatory capital, ECL parameters | Interpretable models — logistic regression, scorecards | Must be explainable and stable |
| Early warning, collections prioritisation, fraud | Machine learning | No individual adverse decision to justify |
| Challenger models | Machine learning | Benchmarks the production model without replacing it |

The challenger arrangement is the useful compromise. A machine learning model runs alongside the production model, and a persistent, material gap in performance is evidence that the production model needs rebuilding — without the machine learning model ever making a decision that has to be defended.

---

## Reference numbers

| Figure | Value | Where it appears |
|---|---:|---|
| Net interest income | ₹50.1 crore | Part 0 |
| Total HQLA | ₹497 crore | Part 1 |
| Net cash outflows, 30 days | ₹312.4 crore | Part 1 |
| **LCR** | **159%** | Part 1 |
| Actual outflow in the April Y4 event | ₹270 crore | Part 1 |
| HQLA after the event | ₹227 crore | Part 1 |
| LCR after the event | 189% | Part 1 |
| Cumulative gap, 15–30 day bucket | −29% | Part 2 |
| Tolerance limit, fourth bucket | −20% | Part 2 |
| Core savings and current balances | ₹400 crore | Part 2 |
| Available stable funding | ₹1,255 crore | Part 2 |
| Required stable funding | ₹1,003 crore | Part 2 |
| **NSFR** | **125%** | Part 2 |
| One-year repricing gap | −₹300 crore | Part 3 |
| ΔNII per 100 bp | −₹3.0 crore | Part 3 |
| Duration gap | 1.03 years | Part 3 |
| ΔEVE per 100 bp | −₹17.5 crore | Part 3 |
| ΔEVE as % of Tier 1 | 11.7% | Part 3 |
| Outlier test threshold | 15% of Tier 1 | Part 3 |
| FTP charge to lending unit | 7.50% | Part 4 |
| Maturity transformation margin | 1.50% | Part 4 |
| Repo haircut | 5% | Part 5 |
| Swap notional | ₹100 crore | Part 5 |
| PD model Gini | 0.62 | Part 9 |
| Population stability index | 0.08 | Part 9 |

Regulatory ratios, run-off factors, bucket structures, tolerance limits and thresholds are subject to change and are marked **[verify]** where they appear.

---

## Acronyms

| Term | Expansion |
|---|---|
| ALCO | Asset liability committee |
| ALM | Asset liability management |
| ASF | Available stable funding |
| AUC | Area under the curve |
| BCBS | Basel Committee on Banking Supervision |
| CCIL | Clearing Corporation of India Limited |
| CRR | Cash reserve ratio |
| CSA | Credit support annex |
| CVA | Credit valuation adjustment |
| EBLR | External benchmark lending rate |
| EVE | Economic value of equity |
| FTP | Funds transfer pricing |
| HQLA | High quality liquid assets |
| IRRBB | Interest rate risk in the banking book |
| LAF | Liquidity adjustment facility |
| LCR | Liquidity coverage ratio |
| MIBOR | Mumbai interbank offered rate |
| MSF | Marginal standing facility |
| NDS-OM | Negotiated dealing system — order matching |
| NII | Net interest income |
| NSFR | Net stable funding ratio |
| PSI | Population stability index |
| RSF | Required stable funding |
| RTGS | Real time gross settlement |
| SLR | Statutory liquidity ratio |
| TREPS | Triparty repo dealing system |

---

## Recall check

1. Retail savings deposits run off at 5% in the LCR and financial institution deposits at 100%. Same rupee, same balance sheet. Why twenty times the difference?
2. The bank lost ₹270 crore of deposits and 54% of its liquid assets, and its LCR rose from 159% to 189%. Explain, and say what the ratio is failing to tell you.
3. The LCR read 159% while the 15–30 day bucket breached its tolerance limit, on the same day. What single item is treated differently by the two, and how?
4. ₹500 crore of savings deposits are contractually repayable on demand. Why are ₹400 crore of them slotted beyond one year, and what is the risk in doing so?
5. A bank holds ₹800 crore of government securities funded entirely overnight. Which ratio does it pass, which does it fail, and why does that matter?
6. The steel loan earns 10% and the deposits cost 5%. Who earned the ₹1.50 crore of maturity transformation margin, and why must it sit there?
7. A bank charges its lending units overnight FTP rates instead of matched-tenor. What accumulates, where, and when does anyone find out?
8. NII sensitivity says −₹3 crore per 100 bp; EVE sensitivity says −₹17.5 crore. Why are they different numbers rather than one number computed twice?
9. The bank hedges with a pay-fixed swap and removes its interest rate risk. What risk has it created, and why is its exposure at default harder to measure than a loan's?
10. Why does a repo have a 5% haircut, and what is the Volume 1 concept it corresponds to?
11. The CFO asks for total steel sector exposure and it takes three days. Which BCBS 239 requirement has failed, and why is that the hardest one to meet?
12. RWA moved from ₹1,234 crore to ₹1,284 crore. What must the reporting team be able to produce, and why is proving the closing balance insufficient?
13. A PD model has a Gini of 0.62 and is uniformly too optimistic. Which test catches this, and why does the Gini not?
14. Why do banks use machine learning for collections prioritisation but not for regulatory capital?

---

## The compression

A bank borrows short and lends long. Volume 1 asked what happens when the lending goes wrong. This volume asks what happens when the borrowing goes away, and what happens when the price of both moves.

Funding is not one thing. It is graded by how fast it can leave — a household's savings account and another bank's overnight placement are the same rupee and twenty times the flight risk. The liquidity coverage ratio holds enough sellable assets against thirty days of the assumed run; the net stable funding ratio insists the structure be sustainable for a year; the bucket ladder shows where inside those horizons the holes actually fall. All three rest on behavioural assumptions about money that is contractually on demand and practically permanent — until the week the bank appears in the newspapers, when it is neither.

Because the two sides reprice at different speeds, a rate move changes the spread without anything happening to a single customer. Measured over a year it is an earnings number; measured over all time it is a value number; the two disagree because they are different questions, and a bank managing only one of them accumulates the risk the other would have shown. Funds transfer pricing decides who owns that risk, and getting it wrong builds a large hidden position inside a bank that looks profitable throughout.

The investment book is simultaneously a regulatory holding, a liquidity buffer, collateral and an earning asset. Derivatives move the interest rate risk somewhere it can be managed and leave counterparty risk behind in its place.

None of it is worth anything if the bank cannot find its own exposures. Every figure across both volumes — the allowance, the risk-weighted assets, the ratios, the sensitivities — is downstream of data that must be accurate, complete, timely, traceable to source, reconciled to the ledger, and explainable when it moves. The controls that matter are the ones that explain movements rather than confirm balances, and the tests that matter are the ones written to return nothing.

Two volumes, one bank, one borrower. It was written at ₹98 crore, provided at ₹66.51 crore, took the capital ratio from 12.16% to 7.07%, drove ₹270 crore of deposits out of the door, and appeared in five different regulatory returns that all had to agree.
