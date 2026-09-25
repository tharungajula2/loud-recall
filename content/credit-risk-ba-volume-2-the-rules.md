---
title: "Credit Risk for the Business Analyst — Volume 2: The Rules"
description: "The same manufacturer taken through the rulebooks: IFRS 9 staging and expected credit loss, CECL, India's IRAC and ECL norms, scenario what-ifs and overlays, standardised and IRB capital, the output floor, the PD model and its validation, stress tests and regulatory reporting — compared across the UK, EU, US and India, with the data each rule puts on a business analyst's desk."
series: masterclass
track: guest
subject: "Credit Risk for the Business Analyst"
order: 2
status: live
updated: 2026-09-25
verified: false
tags:
  - credit risk
  - ifrs 9
  - expected credit loss
  - cecl
  - basel 3.1
  - risk-weighted assets
  - irb
  - output floor
  - pd model validation
  - stress testing
  - regulatory reporting
  - jurisdiction comparison
  - business analysis
---

## Part 0 — Where Volume 1 left off

Volume 1 built every number the bank has about one client. This volume takes those numbers into the rulebooks, which decide two things: how much of the loan the accounts should already count as lost, and how much of the bank's own capital must stand behind the rest.

### The manufacturer, in four columns

| | T0 | T1 | T2 | T3 |
|---|---:|---:|---:|---:|
| Grade and one-year PD | 4 · 0.40% | 4 · 0.40% | 7 · 3.20% | 10 · default |
| Days past due | 0 | 0 | 0 | 91 |
| Benchmark rate | 7.50% | 7.00% | 6.50% | 6.00% |
| Plant and machinery, valuer's figure | 110 | 110 | 90 | 75 |
| Term loan EAD | 100.00 | 100.00 | 100.00 | 104.50 |
| RCF drawn · EAD | 20.00 · 42.50 | 25.00 · 43.75 | 44.00 · 48.50 | 49.00 · 49.00 |
| Derivatives EAD, SA-CCR | 3.10 | 4.90 | 5.90 | 3.75 claim |
| Term loan LGD, policy estimate | 20.4% | 20.4% | 27.6% | — |
| Expected loss, Volume 1 | 0.1060 | 0.1109 | 1.1517 | — |

₹ crore unless a percentage. Around the manufacturer sits the book: 20 borrowers, ₹2,000 crore of EAD and ₹5.64 crore of expected loss a year.

### Two questions, two rulebooks

| Question | Answered by | Covers |
|---|---|---|
| How much should the accounts already count as lost? | Accounting: IFRS 9 in the UK and EU, CECL in the US, the RBI's ECL directions in India | The loss the bank expects |
| How much capital must stand behind the rest? | Prudential rules: Basel 3.1 in the UK, CRR3 in the EU, the US capital rules, the RBI's Basel III | The loss it does not expect — a very bad year |

The **allowance** absorbs expected loss. **Capital** absorbs unexpected loss. Volume 1's loss distribution drew the line between them (Part 7): the allowance sits at the average, capital covers the distance out to a one-in-a-thousand year.

Both are built from PD, LGD and EAD — but not the same versions of them. The accounts want today's best estimate under several possible futures. Capital wants a long-run PD, a downturn LGD and conservative exposures. Part 8 lays one loan's five different LGDs side by side.

### How the volume runs

Parts 1 to 5 are the accounts: what an allowance is (Part 1), IFRS 9's three stages (Part 2), measuring expected credit loss (Part 3), the same client under CECL and India's rules (Part 4), and the scenario what-ifs and overlays that surround the number (Part 5). Parts 6 to 9 are capital: what it is and how much is required (Part 6), the standardised approach (Part 7), the internal ratings-based approach (Part 8), and the output floor across the whole book (Part 9). Part 10 builds and validates the PD model behind the master scale. Part 11 is stress testing and the regulatory reports all of this becomes.

Each part closes with **On your desk** and three checks. Wherever the UK, EU, US and India differ, the part sets them side by side.

---

## Part 1 — What the accounts say about a loan

### Three numbers on the balance sheet

For a loan held to collect its payments, the accounts carry three numbers.

| Number | What it is |
|---|---|
| **Gross carrying amount** | What the borrower owes, measured at the loan's effective interest rate |
| **Loss allowance** | The bank's estimate of how much of that it will not get back |
| **Net carrying amount** | Gross less allowance — what the balance sheet shows |

The allowance is not cash put aside anywhere. It is a deduction from the value of the asset — the bank admitting, on the face of its balance sheet, that part of what it is owed will not come back. Whenever the allowance goes up, the increase is charged against that period's profit as the **impairment charge**. When it goes down, the release adds back.

The **effective interest rate (EIR)** is the rate that discounts a loan's expected payments back to the amount actually lent. The manufacturer's loans were made at par with no fees, so the EIR is simply the contractual rate: 10.00% in year one. Because the loans float, the EIR resets with the benchmark — 9.50% in year two, 9.00% in year three. The EIR matters twice in this volume: interest income is earned at it, and expected losses are discounted at it.

### Two ways to measure the allowance

**Incurred loss.** Provide only once there is objective evidence that a loss has happened — a missed payment, a default. Until then, the loan carries at most a small general allowance. The charge against it is simple: too little, too late. Banks entered the 2008 crisis carrying allowances that recognised losses only as they arrived, and India's 2015–2020 bad-loan cycle is remembered the same way.

**Expected loss.** Provide from day one for the losses the bank expects, using forward-looking information about the economy, and increase the allowance as soon as the expectation worsens — before anything is missed.

| Regime | Where | In force | How it measures |
|---|---|---|---|
| IAS 39, incurred loss | UK, EU | Until 2018 | Loss once there is evidence of impairment |
| IFRS 9, expected credit loss | UK, EU | From 1 January 2018 | Twelve months or lifetime, by stage |
| CECL, current expected credit loss | US | 2020 for large listed banks, 2023 for the rest [verify] | Lifetime, from day one |
| IRAC norms — India's income recognition and asset classification rules | India, banks | Until 31 March 2027 [verify] | Fixed percentages by asset class and age of default |
| RBI expected credit loss directions | India, banks | From 1 April 2027 [verify] | IFRS 9-style stages, with minimum floors |

India's non-bank lenders already apply Ind AS 109, India's version of IFRS 9. Its banks do not, until April 2027.

### What is in scope

| The manufacturer's items | How it is measured | Where its credit risk is recognised |
|---|---|---|
| Term loan | Amortised cost | An expected credit loss allowance |
| RCF, drawn | Amortised cost | An expected credit loss allowance |
| RCF, undrawn | A loan commitment, off the balance sheet | An expected credit loss provision, shown as a liability |
| Swap and forward | Fair value through profit or loss | Inside the fair value, as CVA (Volume 1, Part 6) |

The derivatives never carry an expected credit loss allowance. Their credit risk is already in their price.

### On your desk

- **Two views of one loan.** Risk measures exposure at default; finance measures the gross carrying amount. They differ — by accrued interest, fees folded into the EIR, and undrawn amounts that are exposure but not an asset. Reconciling the two, loan by loan and in total, is one of the most frequent tasks on a credit risk programme.
- **Classification decides the route.** Whether an instrument is at amortised cost or fair value — decided by the business model and the nature of its cash flows — determines whether it enters the expected-credit-loss engine or the valuation engine. That flag has to be on every instrument before any calculation starts.
- **The EIR is data.** Fees, costs and rate resets feed it, and it drives both interest income and discounting. Its source and recalculation rules are requirements, not assumptions.

### Check yourself

1. Why does the manufacturer's swap carry no expected credit loss allowance?
2. A ₹50 crore loan carries an allowance of ₹0.20 crore. What does the balance sheet show, and what hit profit when the allowance was first booked?
3. Under an incurred-loss regime, what allowance would the manufacturer's loans carry at T2, and why?

<details>
<summary>Answers</summary>

1. It is measured at fair value through profit or loss. Its fair value already includes the market's charge for the manufacturer's credit — the CVA — so a separate allowance would count the same risk twice.
2. A net carrying amount of ₹49.80 crore. The whole ₹0.20 crore went through profit as an impairment charge when the allowance was first recognised.
3. Little or nothing specific. At T2 every payment was on time, so there was no objective evidence of impairment — only whatever general allowance the regime allows. India's IRAC norms, for example, would hold the standard 0.40%.

</details>

---

## Part 2 — IFRS 9: three stages

### Measured against the day it was made

IFRS 9 does not ask whether a loan is risky. It asks whether it has become **riskier than it was when the bank made it**. A grade 7 loan made to a grade 7 borrower sits happily in Stage 1. A grade 4 loan that slides to grade 6 may not.

| Stage | When | The allowance covers | Interest income is earned on |
|---|---|---|---|
| **1** | No significant increase in credit risk since origination | Losses from defaults in the next twelve months | Gross carrying amount |
| **2** | A **significant increase in credit risk (SICR)** since origination, but not in default | Losses from defaults over the loan's whole remaining life | Gross carrying amount |
| **3** | Credit-impaired — in default | Lifetime losses on a loan that has already defaulted | Net carrying amount |

The jump from twelve months to lifetime is the heart of IFRS 9. A loan moving from Stage 1 to Stage 2 does not get a little more allowance; it gets a different horizon.

### The bank's SICR test

IFRS 9 sets the principle; each bank writes its own rules. This bank moves a loan to Stage 2 if **any one** of three tests is met.

| Test | Rule | Why |
|---|---|---|
| Quantitative | The residual lifetime PD today is at least **twice** what was expected at origination for the same future period, and at least **0.50 points** higher | Measures relative change, not absolute risk |
| Qualitative | On the watchlist at "Reduce" or worse, or forbearance granted | Catches what the PD misses |
| Backstop | More than 30 days past due | IFRS 9's rebuttable presumption |

The quantitative test needs something most systems do not keep: the **lifetime PD curve the loan was expected to follow when it was made**. At T0 the bank expected the manufacturer's PD to be 0.40% a year. So for years three to five — the part of the loan still to run at T2 — the expectation at origination was:

$$
PD_{\text{years 3 to 5, expected at T0}} = 1 - (1 - 0.004)^3 = 1.195\%
$$

At T2 the same three years look like this under the base scenario (Part 3 builds it): 4.00% in each of the next two years, then 3.20%.

$$
PD_{\text{years 3 to 5, seen at T2}} = 1 - (1 - 0.04)(1 - 0.04)(1 - 0.032) = 10.79\%
$$

Nine times the origination expectation, and 9.6 points higher. **Stage 2** — and the watchlist status at "Reduce" would have put it there on its own.

At T1 the grade had not moved and the outlook matched the origination case: the residual four-year PD was 1.59% then and 1.59% now. A ratio of 1.0. Stage 1.

### Stage 3, and the way back

**Stage 3** means credit-impaired, which in practice means in default under the same definition as Volume 1, Part 3: more than 90 days past due, or unlikely to pay. The manufacturer enters Stage 3 at T3.

Loans can move back. A Stage 2 loan returns to Stage 1 when the SICR test is no longer met — most banks require a probation period first, so that loans do not flicker between stages. A Stage 3 loan returns when it is no longer in default, after the default probation described in Volume 1.

IFRS 9 also allows a **low credit risk** simplification: an instrument that is investment grade at the reporting date may stay in Stage 1 regardless of how far it has moved. Banks use it for high-quality bonds; supervisors discourage it for loans [verify].

| | T0 | T1 | T2 | T3 |
|---|---:|---:|---:|---:|
| **The manufacturer's stage** | 1 | 1 | 2 | 3 |

### Stages in the other jurisdictions

| | UK and EU | US | India, from 2027 |
|---|---|---|---|
| Stages | 1, 2 and 3 | None — one lifetime measure for every loan | 1, 2 and 3 [verify] |
| Supervisory classification alongside | Performing, non-performing, forborne — in regulatory reports | Pass, special mention, substandard, doubtful, loss | Standard, SMA-0, 1 and 2, sub-standard, doubtful, loss — the NPA norms are retained [verify] |
| The manufacturer at T2 | Stage 2 | A criticised loan — special mention or worse — still one lifetime allowance | Stage 2 |

### On your desk

- **Keep the origination curve.** The SICR test compares today with the day of origination, so the platform must store, per loan, the lifetime PD expected at origination — and the master scale version it came from. Losing it means the test cannot be run.
- **Stage is derived, then stored.** Each reporting date, the staging engine applies the rules and stores the result with its reason code: which test fired. Auditors ask why a loan is in Stage 2 far more often than what its allowance is.
- **Transfers are reported.** Disclosures show allowance and exposure moving between stages in the period, so stage history must be kept at every reporting date — never overwritten.
- **One definition of default.** Stage 3 and regulatory default should use the same definition, the same days-past-due counter and the same cure rules. Two definitions produce two answers to "is this loan in default?", and a reconciliation no one can close.

### Check yourself

1. A grade 7 borrower is lent to at T0 at a PD of 3.20%. A year later it is still grade 7. Which stage is it in?
2. The manufacturer's residual PD at T2 was 10.79% against 1.195% expected. Suppose instead it had risen to 2.00%. Would the quantitative test fire?
3. Why does the SICR test need data from origination that no other calculation uses?

<details>
<summary>Answers</summary>

1. Stage 1. Its risk is high, but it has not increased since the day the bank chose to lend at that level.
2. No. 2.00% is 1.7 times 1.195% — below the doubling threshold — even though it is 0.8 points higher. Both conditions must hold. The watchlist or the 30-day backstop could still move it.
3. Because IFRS 9 measures deterioration, not level: every Stage 2 decision is today's lifetime PD compared with what was expected for the same period when the loan was made.

</details>

---

## Part 3 — Measuring expected credit loss

### The formula

Expected credit loss is Volume 1's expected loss with four refinements: it looks forward year by year, it uses today's view of the economy rather than a long-run average, it weights several possible futures, and it discounts.

$$
ECL = \sum_{s} w_s \sum_{t=1}^{T} PD_{s,t} \times LGD_s \times EAD_t \times \frac{1}{(1 + EIR)^t}
$$

where

- **s** runs over the economic scenarios, each with probability weight **w**
- **t** runs over future years; **T** is 1 in Stage 1 and the remaining life in Stage 2
- **PD** with subscripts s and t is the **marginal** probability of defaulting in year t under scenario s — having survived every year before it
- **EIR** is the effective interest rate, so losses are counted in today's money

The marginal PD chains year by year:

$$
PD_{s,t} = S_{s,t-1} \times p_{s,t} \qquad S_{s,t} = \prod_{k=1}^{t} (1 - p_{s,k})
$$

where **p** is the annual PD in that year and **S** is the probability of having survived to the end of it.

### Point-in-time, forward-looking PDs

Volume 1's master scale PDs are through-the-cycle averages. IFRS 9 wants point-in-time PDs that reflect where the economy is heading. This bank's model does it the simplest defensible way: each scenario carries a **multiplier** on the grade's PD for the next two years — the period over which it believes it can forecast — and then the PD **reverts** to the grade's long-run level.

At T0 the economists' three scenarios, and what each does to the term loan's LGD through the plant's value (the Volume 1 policy method: 60% of the plant's value is covered, and the uncovered part loses 60%):

| Scenario | Vehicle sales next year | PD multiplier, years 1–2 | Weight | Plant value | Term loan LGD |
|---|---:|---:|---:|---:|---:|
| Upside | +10% | 0.80 | 20% | 115 | 18.6% |
| Base | +6% | 1.00 | 60% | 110 | 20.4% |
| Downside | −8% | 1.80 | 20% | 90 | 27.6% |

The RCF's stock and receivables cover it even in the downside, so its LGD stays at the 10% floor in all three. EAD is ₹100 crore for the term loan and ₹42.50 crore for the RCF (Volume 1, Part 4); the EIR is 10.00%.

### T0: Stage 1, twelve months

Under the base scenario, the term loan's twelve-month ECL is:

$$
ECL = 0.40\% \times 20.4\% \times 100 \times \frac{1}{1.10} = 0.0742
$$

| Scenario | Weight | 12-month PD | Term loan | RCF | Total |
|---|---:|---:|---:|---:|---:|
| Upside | 20% | 0.32% | 0.0541 | 0.0124 | 0.0665 |
| Base | 60% | 0.40% | 0.0742 | 0.0155 | 0.0896 |
| Downside | 20% | 0.72% | 0.1807 | 0.0278 | 0.2085 |
| **Probability-weighted** | | | **0.0915** | **0.0173** | **0.1088** |

The allowance at T0 is **₹0.1088 crore**, about ₹10.9 lakh — booked on the day the loans are made, as a day-one charge against profit.

Note what weighting did. The base scenario alone gives ₹0.0896 crore; the weighted answer is 21% higher. Losses are **non-linear**: the downside costs more than the upside saves, because a bad economy raises both the PD and the LGD at once. Using only the most likely scenario would understate the allowance every time — which is why IFRS 9 requires the probability-weighted figure.

At T1 nothing had changed but the calendar: the EIR had reset to 9.50% and the RCF's EAD was ₹43.75 crore. The same calculation gives **₹0.1098 crore**. Still Stage 1.

### T2: Stage 2, lifetime

At T2 the downturn has arrived. The economists now see it lasting, and the base scenario itself carries a raised PD.

| Scenario | Vehicle sales next year | PD multiplier, years 1–2 | Weight | Plant value | Term loan LGD |
|---|---:|---:|---:|---:|---:|
| Upside | +3% | 1.00 | 15% | 100 | 24.0% |
| Base | −4% | 1.25 | 55% | 90 | 27.6% |
| Downside | −12% | 2.00 | 30% | 75 | 33.0% |

The grade is 7, so the base scenario's annual PDs are 3.20% × 1.25 = 4.00% for two years, then 3.20%. Three years remain; the EIR is 9.00%; EADs are ₹100 crore and ₹48.50 crore. The term loan under the base scenario, year by year:

| Year | Survived to start | Annual PD | Marginal PD | × LGD × EAD, discounted |
|---:|---:|---:|---:|---:|
| 1 | 100.00% | 4.00% | 4.00% | 4.00% × 27.6 ÷ 1.09 = 1.0128 |
| 2 | 96.00% | 4.00% | 3.84% | 3.84% × 27.6 ÷ 1.09² = 0.8920 |
| 3 | 92.16% | 3.20% | 2.95% | 2.95% × 27.6 ÷ 1.09³ = 0.6285 |
| **Lifetime** | | | **10.79%** | **2.5334** |

The same for every scenario and both facilities:

| Scenario | Weight | Annual PDs, years 1–3 | Lifetime PD | Term loan | RCF | Total |
|---|---:|---|---:|---:|---:|---:|
| Upside | 15% | 3.20 · 3.20 · 3.20% | 9.30% | 1.8860 | 0.3811 | 2.2671 |
| Base | 55% | 4.00 · 4.00 · 3.20% | 10.79% | 2.5334 | 0.4452 | 2.9786 |
| Downside | 30% | 6.40 · 6.40 · 3.20% | 15.19% | 4.3159 | 0.6343 | 4.9502 |
| **Probability-weighted** | | | | **2.9710** | **0.4923** | **3.4633** |

The allowance at T2 is **₹3.4633 crore**.

### The cliff

Had the manufacturer stayed in Stage 1 at T2 — same grade, same scenarios, only twelve months of losses — the allowance would have been ₹1.4487 crore. The move to Stage 2 alone added ₹2.0146 crore, more than doubling it.

That jump is the **cliff effect**: deterioration shows up gradually in the PD, but the allowance moves in a single step when the loan crosses the SICR line. It is why staging rules are the most scrutinised part of any IFRS 9 model, and why a quarter-end with many loans crossing at once produces a sharp charge.

### T3: Stage 3, credit-impaired

Once a loan has defaulted, the PD is no longer in doubt. The allowance becomes the gap between what is owed and what the bank expects to recover, discounted at the EIR and weighted across recovery scenarios.

| Recovery scenario | Weight | Plant, net | Stock and receivables, net | PV, term loan | PV, RCF |
|---|---:|---|---|---:|---:|
| Base | 70% | ₹64 crore in 2 years | ₹31 crore in 1 year | 64 ÷ 1.09² = 53.87 | 31 ÷ 1.09 = 28.44 |
| Downside | 30% | ₹50 crore in 3 years | ₹25 crore in 1 year | 50 ÷ 1.09³ = 38.61 | 25 ÷ 1.09 = 22.94 |
| **Probability-weighted** | | | | **49.29** | **26.79** |

The EIR used is 9.00%, the rate in force when the loans became credit-impaired.

| ₹ crore at T3 | Term loan | RCF | Total |
|---|---:|---:|---:|
| Gross carrying amount | 104.50 | 49.00 | 153.50 |
| Expected recoveries, PV | 49.29 | 26.79 | 76.08 |
| **Allowance** | **55.21** | **22.21** | **77.42** |
| Net carrying amount | 49.29 | 26.79 | 76.08 |

The net carrying amount of a Stage 3 loan is precisely the present value of what the bank expects to get back.

**Interest income changes basis.** In Stages 1 and 2 interest is earned on the gross carrying amount. In Stage 3 it is earned on the net. For the term loan in year four: 9.00% × 104.50 = ₹9.41 crore on gross, but 9.00% × 49.29 = ₹4.44 crore on net. The ₹4.44 crore is not cash from the borrower. It is the discount unwinding as the recoveries come closer — the bank's expected recoveries growing towards their face value with the passage of time.

### The allowance, date by date

| ₹ crore | T0 | T1 | T2 | T3 |
|---|---:|---:|---:|---:|
| Stage | 1 | 1 | 2 | 3 |
| Allowance | 0.1088 | 0.1098 | 3.4633 | 77.4210 |
| Impairment charge in the period | 0.1088 | 0.0010 | 3.3535 | 73.9577 |

Almost the entire charge lands in two periods: T2, when the manufacturer crossed into Stage 2 with every payment still current, and T3, when it defaulted. IFRS 9 moved ₹3.35 crore of the recognition a full year earlier than an incurred-loss regime would have.

When the workout ends, whatever the bank will never collect is **written off**: the gross carrying amount and the allowance fall together, and profit is untouched, because the loss was recognised when the allowance was built.

### On your desk

- **The ECL engine's inputs**, per facility and reporting date: stage, grade, PD term structures by scenario, LGD by scenario, EAD profile, EIR, remaining life, scenario weights. Every one has an owner and a source, and each run must be reproducible months later — so inputs are versioned, not overwritten.
- **Drawn and undrawn.** The RCF's ECL covers both the drawn balance and the expected drawings. The part that relates to the undrawn commitment is presented as a provision, a liability, not as an allowance against the loan — so the engine's output must be split between the two.
- **The movement table.** Disclosures require the allowance to be walked from opening to closing: new lending, transfers between stages, changes in risk parameters, model changes, write-offs. Each line needs its own attribution logic, and it is one of the hardest reports a credit risk programme builds.
- **Reconciliation to the ledger.** The allowance in the risk engine must equal the allowance in the general ledger, facility by facility.

### Check yourself

1. Why is the probability-weighted T0 allowance higher than the base scenario's, when the base scenario has a 60% weight?
2. At T2, what would the allowance have been had the bank simply applied twelve months of loss — and what explains the difference?
3. In year four, the Stage 3 term loan earns ₹4.44 crore of interest income. Where does that money come from?

<details>
<summary>Answers</summary>

1. The downside raises the PD by 80% and the LGD by 7.2 points at the same time, so it adds far more loss than the upside removes. A weighted average of a curved relationship is higher than its value at the average input.
2. ₹1.4487 crore. The ₹2.0146 crore difference is the change of horizon — lifetime instead of twelve months — which is what Stage 2 means.
3. Not from the borrower, who is paying nothing. It is the unwinding of the discount: the present value of the expected recoveries rises as they come a year closer, and that rise is recognised as interest.

</details>

---

## Part 4 — The same client, four provisioning regimes

The bank reports the manufacturer under IFRS 9 for the group. Had the loans sat in a US bank, or on an Indian bank's books, the allowance would have followed different rules from the same PD, LGD and EAD.

### CECL, in the US

The US standard, **current expected credit loss (CECL)**, has no stages. Every loan carries **lifetime** expected loss from the day it is made.

- **Forecasts, then reversion.** The bank forecasts over a "reasonable and supportable" period and then reverts to historical loss experience — exactly the shape of this bank's two-year multipliers.
- **Discounting is optional.** Only a discounted-cash-flow method discounts; many US banks use loss rates without discounting. The figures below are undiscounted.
- **Unfunded commitments count** unless the bank can cancel them unconditionally, so the RCF's expected drawings are in.

Under each scenario, CECL is the lifetime PD times the loss if default:

$$
CECL_s = PD^{\text{lifetime}}_s \times (LGD_s \times EAD_{TL} + 10\% \times EAD_{RCF})
$$

At T0, the base scenario's five-year PD is 1 − (1 − 0.004)⁵ = 1.98%, so CECL is 1.98% × (20.4% × 100 + 10% × 42.50) = 1.98% × 24.65 = **0.4891**. Weighting the three scenarios gives **₹0.5434 crore** — five times the IFRS 9 figure on day one, because it counts five years of risk instead of one.

At T3, US banks usually measure a defaulted loan that will be repaid from its collateral by the **collateral-dependent** method: the allowance is what is owed less the collateral's fair value today, net of selling costs — no discounting for the time the sale will take. The valuer puts the plant at ₹75 crore and the stock and receivables at ₹35 crore; selling costs are expected at ₹6 crore and ₹2 crore.

- Term loan: 104.50 − (75 − 6) = 35.50
- RCF: 49.00 − (35 − 2) = 16.00

That gives **₹51.50 crore**. US practice then **charges off** the part not covered by the collateral's value once it is identified, rather than carrying it as allowance until the workout ends [verify].

### India today: IRAC

Until April 2027, Indian banks provide by the **IRAC** norms — fixed percentages, not models.

- **Standard assets**: 0.40% of the funded balance for most corporate loans [verify]. At T0 the funded balance is 100 + 20 = 120, so 0.48; at T1, 0.50; at T2, 0.40% × 144 = 0.58. The downgrade, the covenant breach and the watchlist move nothing.
- **Non-performing assets**: from default, 15% of the outstanding for a secured sub-standard asset, rising with the age of the default — 25%, 40% and then 100% of the secured part as it becomes doubtful, and 100% of any unsecured part [verify]. At T3: 15% × 153.50 = **₹23.03 crore**.

### India from April 2027: ECL with floors

The RBI's final directions of April 2026 bring IFRS 9-style stages to Indian banks from 1 April 2027, with one decisive addition: **prudential floors** — minimum provisions regardless of what the model says [verify].

| Corporate loans | Minimum provision |
|---|---|
| Stage 1 | 0.40% [verify] |
| Stage 2 | 5.00% [verify] |
| Stage 3 | Rising with time in Stage 3, to 100% [verify] |

The floors apply to funded balances and to the credit equivalents of off-balance-sheet items. Taking the undrawn RCF at a 40% conversion factor [verify]:

| ₹ crore | Model ECL | Floor | Provision held | Which binds |
|---|---:|---|---:|---|
| T0, Stage 1 | 0.1088 | 0.40% × (120 + 0.40 × 30) = 0.528 | 0.528 | Floor |
| T1, Stage 1 | 0.1098 | 0.40% × (125 + 0.40 × 25) = 0.540 | 0.540 | Floor |
| T2, Stage 2 | 3.4633 | 5.00% × (144 + 0.40 × 6) = 7.320 | 7.320 | Floor |
| T3, Stage 3 | 77.42 | Well below half the exposure in the first year | 77.42 | Model |

For a borrower of this quality the floors decide the number until default. The day-one increase in provisions across a bank's book is added back to CET1 on a taper over four years, 2027–28 to 2030–31 [verify].

### The EU's extra backstop

EU banks carry one further floor, on defaulted loans only. Under the **non-performing exposure backstop** in the Capital Requirements Regulation, any shortfall between a bank's provisions and a minimum coverage that rises with the age of the default is deducted from CET1: unsecured exposures must be fully covered after three years, those secured on property after nine, those secured on other collateral after seven [verify]. Not an accounting rule — a capital deduction that forces the same result.

### Side by side

| ₹ crore | T0 | T1 | T2 | T3 |
|---|---:|---:|---:|---:|
| IFRS 9 — UK, EU | 0.11 | 0.11 | 3.46 | 77.42 |
| CECL — US | 0.54 | 0.44 | 4.05 | 51.50 |
| IRAC — India today | 0.48 | 0.50 | 0.58 | 23.03 |
| RBI ECL — India from April 2027 | 0.53 | 0.54 | 7.32 | 77.42 |

<svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar chart of the manufacturer's allowance at T0 and T2 under four regimes: IFRS 9 rises from 0.11 to 3.46 crore, CECL from 0.54 to 4.05, IRAC from 0.48 to 0.58, and India's 2027 ECL from 0.53 to 7.32" style="width:100%;max-width:640px;height:auto;display:block;margin:1rem auto">
<g font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="13" fill="#1f2937">
<line x1="60" y1="280" x2="600" y2="280" stroke="#9ca3af" stroke-width="1"/>
<line x1="60" y1="220" x2="600" y2="220" stroke="#e5e7eb" stroke-width="1"/>
<line x1="60" y1="160" x2="600" y2="160" stroke="#e5e7eb" stroke-width="1"/>
<line x1="60" y1="100" x2="600" y2="100" stroke="#e5e7eb" stroke-width="1"/>
<line x1="60" y1="40" x2="600" y2="40" stroke="#e5e7eb" stroke-width="1"/>
<text x="52" y="284" text-anchor="end">0</text>
<text x="52" y="224" text-anchor="end">2</text>
<text x="52" y="164" text-anchor="end">4</text>
<text x="52" y="104" text-anchor="end">6</text>
<text x="52" y="44" text-anchor="end">8</text>
<text x="20" y="24">₹ crore</text>
<rect x="90" y="276.7" width="36" height="3.3" fill="#93c5fd"/>
<rect x="134" y="176.2" width="36" height="103.8" fill="#1d4ed8"/>
<rect x="220" y="263.8" width="36" height="16.2" fill="#93c5fd"/>
<rect x="264" y="158.5" width="36" height="121.5" fill="#1d4ed8"/>
<rect x="350" y="265.6" width="36" height="14.4" fill="#93c5fd"/>
<rect x="394" y="262.6" width="36" height="17.4" fill="#1d4ed8"/>
<rect x="480" y="264.1" width="36" height="15.9" fill="#93c5fd"/>
<rect x="524" y="60.4" width="36" height="219.6" fill="#1d4ed8"/>
<text x="108" y="270" text-anchor="middle" font-size="12">0.11</text>
<text x="152" y="170" text-anchor="middle" font-size="12">3.46</text>
<text x="238" y="257" text-anchor="middle" font-size="12">0.54</text>
<text x="282" y="152" text-anchor="middle" font-size="12">4.05</text>
<text x="368" y="259" text-anchor="middle" font-size="12">0.48</text>
<text x="412" y="256" text-anchor="middle" font-size="12">0.58</text>
<text x="498" y="258" text-anchor="middle" font-size="12">0.53</text>
<text x="542" y="54" text-anchor="middle" font-size="12">7.32</text>
<text x="130" y="300" text-anchor="middle">IFRS 9</text>
<text x="130" y="316" text-anchor="middle" font-size="11">UK, EU</text>
<text x="260" y="300" text-anchor="middle">CECL</text>
<text x="260" y="316" text-anchor="middle" font-size="11">US</text>
<text x="390" y="300" text-anchor="middle">IRAC</text>
<text x="390" y="316" text-anchor="middle" font-size="11">India today</text>
<text x="520" y="300" text-anchor="middle">RBI ECL</text>
<text x="520" y="316" text-anchor="middle" font-size="11">India, 2027</text>
<rect x="330" y="28" width="14" height="14" fill="#93c5fd"/>
<text x="350" y="40">T0</text>
<rect x="390" y="28" width="14" height="14" fill="#1d4ed8"/>
<text x="410" y="40">T2 — downgraded, nothing missed</text>
</g>
</svg>

Four regimes, four philosophies:

- **IFRS 9 waits for deterioration, then jumps.** Small on day one, a cliff at T2.
- **CECL front-loads.** Lifetime from day one, so the day-one number is large and the T2 increase is proportionally smaller.
- **IRAC waits for default.** Nothing at T2 distinguishes the manufacturer from a healthy borrower.
- **India's 2027 rules put a floor under everything.** For a good corporate the floor, not the model, sets the provision.

At T3 the order reverses. IFRS 9 is highest because it discounts a two-year workout and weights a worse recovery; CECL is lower because it takes today's collateral value without discounting; IRAC takes a fixed 15%.

### On your desk

- **One loan, several regimes.** A global bank reports IFRS 9 to the group, CECL in a US subsidiary and India's rules in its Indian branch — often from one platform. Every parameter and result must carry the regime it belongs to.
- **Floors are a separate step.** Compute the model ECL, compute the floor on the regulator's exposure measure, hold the higher, and record which one bound. Reports and audits ask which it was.
- **The floor's exposure measure is the regulator's.** Credit equivalents for the Indian floors use the RBI's conversion factors, not the bank's own 75%.
- **Write-off timing differs.** US charge-offs remove uncollectible amounts early; IFRS 9 banks often carry them in allowance until the workout ends. Movement tables and loss histories have to record which practice produced each number.

### Check yourself

1. Why is the CECL allowance at T0 five times the IFRS 9 allowance on the same loans?
2. At T2 the RBI's model output is ₹3.46 crore, but the provision held is ₹7.32 crore. Where does the difference come from?
3. At T3, IFRS 9 gives ₹77.42 crore and CECL ₹51.50 crore. Give two reasons.

<details>
<summary>Answers</summary>

1. CECL counts expected losses over the loans' whole five-year life from day one; IFRS 9 Stage 1 counts only defaults in the next twelve months, and discounts them.
2. The Stage 2 prudential floor: 5.00% of the funded balance plus the credit equivalent of the undrawn line, 146.40, is 7.32 — more than twice what the model produces.
3. IFRS 9 discounts the recoveries over the time the workout will take, at the EIR, while CECL's collateral-dependent method uses today's fair value without discounting; and IFRS 9 weights a 30% downside recovery scenario, while the CECL figure takes a single fair value.

</details>

---

## Part 5 — Scenarios, what-ifs and overlays

The allowance is one number in the accounts, but it is produced by a machine that is run far more often than the accounts are published. Before every quarter-end, finance, risk and senior management ask the same question in different forms: *what would the number be if…?*

### What-if at T2

Each row changes one thing and re-runs the T2 calculation from Part 3.

| What-if | Allowance (₹ crore) | Change |
|---|---:|---:|
| **As reported**: weights 15 / 55 / 30 | **3.4633** | — |
| Base scenario only | 2.9786 | −0.4848 |
| Upside only | 2.2671 | −1.1962 |
| Downside only | 4.9502 | +1.4868 |
| Downside weight raised to 50%: 15 / 35 / 50 | 3.8577 | +0.3943 |
| One grade worse: PD 6.40% | 6.6486 | +3.1852 |
| Term loan LGD 10 points higher in every scenario | 4.4784 | +1.0151 |
| SICR not triggered: still Stage 1 | 1.4487 | −2.0146 |

Three lessons sit in that table.

- **The biggest levers are the grade and the stage.** One notch of rating or one staging decision moves the number by more than any change to the economic outlook. That is why rating overrides and SICR rules get more audit attention than the macro forecasts.
- **Weights are judgement, and they matter.** Moving 20 points of weight from base to downside adds 11% to the allowance. The weights are set by a committee, not a model, and have to be defended.
- **"100% downside" is the standard stress.** Banks disclose what the allowance would be under each scenario alone. For the manufacturer, the range runs from ₹2.27 crore to ₹4.95 crore around a reported ₹3.46 crore.

### Explaining the change

The most common question of all is not "what if" but "why": why did the allowance go from ₹0.1098 crore at T1 to ₹3.4633 crore at T2? The answer is an **attribution**, built by changing one input at a time, in a fixed order.

| Step | Allowance after the step | Change |
|---|---:|---:|
| T1 allowance | 0.1098 | |
| Roll forward: EIR 9.00%, RCF drawn to ₹44 crore | 0.1122 | +0.0024 |
| New economic scenarios and weights | 0.1481 | +0.0359 |
| Plant revalued: new LGDs | 0.1811 | +0.0330 |
| Downgrade, grade 4 to grade 7, still Stage 1 | 1.4487 | +1.2676 |
| Transfer to Stage 2: lifetime horizon | 3.4633 | +2.0146 |
| **Total change** | | **+3.3535** |

Now swap the last two steps — transfer to Stage 2 first, then downgrade. The stage transfer is worth only +0.2674, and the downgrade +3.0148. The total is identical, but the story is not: in one order the stage transfer looks like the main driver, in the other the downgrade does. **Attribution depends on the order of the steps**, so the order is not a technical detail. It is a requirement, written down once, applied every quarter, and printed on the report.

### Overlays

Sometimes the model is wrong in a way the bank can see. At T2, the credit risk team knows from its own history that working-capital lines to borrowers who defaulted in past downturns lost about 42.5% — because stock and receivables run down before default — while the LGD policy method holds the manufacturer's RCF at a 10% floor. The model cannot see this; its haircuts were set in better times.

The bank books an **overlay** — a post-model adjustment. Re-running the RCF at a 42.5% LGD in every scenario gives ₹5.0634 crore, so the overlay is **₹1.60 crore**, and the reported allowance becomes ₹5.06 crore.

An overlay is legitimate only with discipline around it:

| Element | What it means |
|---|---|
| Rationale | What the model misses, and the evidence that it misses it |
| Quantification | How the amount was calculated — here, a re-run at a historical LGD, not a round number |
| Approval | Signed off by a committee with authority over the allowance |
| Release | When and how it will come out: when the LGD model is recalibrated with the new data |
| Disclosure | Reported to the audit committee and, in total, in the accounts |

An overlay without a release plan quietly becomes permanent model error. And overlays differ from India's floors: a floor is a regulator's minimum applied to everyone; an overlay is the bank's own judgement about its own model.

### Across the four jurisdictions

| | UK | EU | US | India, from 2027 |
|---|---|---|---|---|
| Multiple scenarios | Required in effect: the allowance must be unbiased and probability-weighted | The same | Permitted but not required; many large banks weight several | Required: forward-looking information and scenario analysis [verify] |
| Supervisory focus | PRA reviews of IFRS 9 models, scenarios and overlays [verify] | ECB reviews of overlays and staging [verify] | Examiner review of the CECL allowance and qualitative adjustments | Board oversight and model risk principles in the ECL directions [verify] |
| Overlays called | Post-model adjustments | Overlays, post-model adjustments | Qualitative factors | Management overlays [verify] |

### On your desk

- **Runs are objects.** Each calculation run — official or what-if — needs an identifier, a frozen copy of its inputs, and a status. A what-if must never overwrite the official quarter-end result.
- **The attribution order** is a documented requirement, with each step defined as a change to specific inputs.
- **The overlay register.** Each overlay: identifier, portfolio, amount, rationale, method, approver, approval date, release trigger. Overlays are data, not spreadsheet footnotes.
- **Sensitivities as standard outputs.** Single-scenario results, weight shifts and parameter shocks produced automatically with every run, not rebuilt by hand under deadline.

### Check yourself

1. Which single change in the what-if table moves the T2 allowance most, and why is that uncomfortable for the people who own it?
2. Why must the attribution order be fixed before the first quarter it is used?
3. At T2 the overlay adds ₹1.60 crore. What event should release it?

<details>
<summary>Answers</summary>

1. One grade worse, +₹3.19 crore — nearly doubling the allowance. The grade is set by a scorecard plus human judgement (Volume 1, Part 3), so a single override decision can move the provision more than the whole economic forecast.
2. Because the size of each step depends on what has already been changed. If the order moves from quarter to quarter, the drivers reported to management move with it, and the explanation stops meaning anything.
3. The LGD model being recalibrated with recovery data that reflects how working-capital collateral behaves before default — the evidence behind the overlay built into the model itself.

</details>

---

## Part 6 — Capital: what it is, and how much

### The bank's own money

Volume 1 ended its loss distribution at the 99.9th percentile: the bad year that capital must survive. **Capital** is the bank's own money — the part of its funding that can absorb losses without the bank failing to repay depositors. It comes in tiers, ordered by how early they absorb loss.

| Tier | What it is | Absorbs losses |
|---|---|---|
| **Common equity Tier 1 (CET1)** | Ordinary shares, retained profits and reserves, less deductions such as goodwill, intangible assets and certain tax assets | First, while the bank is still running |
| Additional Tier 1 (AT1) | Perpetual instruments that convert into shares or are written down if CET1 falls below a trigger | While the bank is still running |
| Tier 2 | Subordinated debt, and some provisions | When the bank fails, before depositors |

Every impairment charge from Parts 3 and 4 passes through profit into retained earnings, so **every rupee of allowance is a rupee of CET1 gone**. Accounting and capital are joined at that line.

### Why "risk-weighted"

Regulators do not ask for capital against the book's size. They ask for it against its **risk-weighted assets (RWA)**: each exposure multiplied by a risk weight that reflects how much it could lose in a very bad year.

$$
\text{Capital ratio} = \frac{\text{Capital}}{\text{RWA}} \qquad RWA = \sum_i EAD_i \times RW_i
$$

A risk weight of 100% means the full exposure counts; 20% means a fifth of it does. Two ways of setting the weights exist: the **standardised approach**, where the regulator's tables decide (Part 7), and the **internal ratings-based (IRB)** approach, where the bank's own PD, LGD and EAD feed the regulator's formula (Part 8). RWA also includes market risk and operational risk; this volume covers credit risk, counterparty credit risk and CVA.

### How much: four jurisdictions

| Minimum, % of RWA | UK | EU | US | India |
|---|---|---|---|---|
| CET1 | 4.5% | 4.5% | 4.5% | 5.5% |
| Tier 1 | 6% | 6% | 6% | 7% |
| Total capital | 8% | 8% | 8% | 9% |
| Conservation buffer | 2.5% | 2.5% | Replaced by the stress capital buffer, at least 2.5% [verify] | 2.5% |
| Countercyclical buffer | 2% on UK exposures [verify] | Set country by country [verify] | 0% [verify] | 0% [verify] |
| Firm-specific requirement | Pillar 2A, set by the PRA | Pillar 2 requirement, set by the supervisor | The stress capital buffer, from the Fed's annual stress test | Pillar 2, through the RBI's supervisory review |
| Systemic banks | Global and domestic systemic buffers | Global and other systemic buffers | Global systemic surcharge | Domestic systemic surcharge |
| Leverage ratio, Tier 1 ÷ total exposure | 3.25% for the largest banks [verify] | 3% [verify] | 4%, plus a supplementary ratio for the largest [verify] | 4% for domestic systemic banks, 3.5% for others [verify] |

The **leverage ratio** ignores risk weights altogether — Tier 1 capital over the bank's unweighted exposures — as a backstop against models and tables that make risk look too small.

### Provisions meet capital

An IRB bank compares its accounting allowance with the **regulatory expected loss** — PD × downturn LGD × EAD on the same loans. A shortfall is deducted from CET1; an excess can count as Tier 2, up to a limit of 0.6% of IRB credit RWA [verify].

For the manufacturer's two loans, with the downturn LGD of 27.6% on the term loan (Part 8):

| ₹ crore | T0 | T2 |
|---|---:|---:|
| Regulatory expected loss: PD × (27.6% × 100 + 10% × RCF EAD) | 0.40% × (27.60 + 4.25) = 0.1274 | 3.20% × (27.60 + 4.85) = 1.0384 |
| IFRS 9 allowance on the two loans | 0.1088 | 3.4633 |
| **Shortfall or excess** | **0.0186 shortfall — deducted from CET1** | **2.4249 excess — eligible for Tier 2** |

On day one IFRS 9's twelve-month allowance is smaller than a full year's regulatory expected loss under a downturn LGD, and capital takes the difference. At T2 the lifetime allowance overtakes it. The same comparison, run across every IRB exposure, is a line in every capital return.

### On your desk

- **Two data worlds meet in one ratio.** Capital — the numerator — comes from finance's ledger. RWA — the denominator — comes from risk's calculations. The ratio is only as reliable as the reconciliation between them.
- **Buffers and minima are parameters**, by jurisdiction and by legal entity. The same group reports different requirements to the PRA, the ECB, the Federal Reserve and the RBI for its different entities.
- **The expected-loss comparison** needs the allowance per exposure, joined to regulatory expected loss per exposure — two engines, one key.

### Check yourself

1. At T0 the manufacturer's loans cost CET1 twice: once through the impairment charge, and once more. What is the second route, and why has it gone by T2?
2. The leverage ratio ignores risk weights. What does it protect against?
3. The US has no conservation buffer. What sits in its place?

<details>
<summary>Answers</summary>

1. The expected-loss shortfall: the ₹0.1088 crore allowance is below the ₹0.1274 crore of regulatory expected loss, so the ₹0.0186 crore gap is deducted from CET1 as well. By T2 the lifetime allowance exceeds regulatory expected loss, so there is no deduction — the excess can even count as Tier 2.
2. Risk weights that are too low — whether from a table that underprices a risk or a model that underestimates it. A bank cannot lever up without limit on assets that look safe.
3. The stress capital buffer, set for each large bank from the result of the Federal Reserve's annual stress test, with a minimum of 2.5%.

</details>

---

## Part 7 — The standardised approach

### How it works

Under the **standardised approach (SA)**, the regulator decides the risk weight. The bank's job is to put each exposure in the right class, find the right weight, and apply it to the right exposure amount.

1. **Classify** the exposure — sovereign, bank, corporate, retail, real estate, defaulted, and so on.
2. **Find the weight** — from the borrower's external credit rating where the jurisdiction uses ratings, or from a fixed weight for its class.
3. **Measure the exposure** — the drawn balance, plus undrawn amounts at the standardised conversion factors (Volume 1, Part 4), plus derivatives at SA-CCR (Volume 1, Part 6).
4. **Apply eligible risk mitigation** — financial collateral such as cash and securities, and guarantees from stronger parties.

That last step is where the standardised approach is bluntest. **Plant and machinery, stock and receivables are not eligible collateral for a corporate exposure under the SA.** The manufacturer's security package — which cut its LGD from 60% to 20.4% in Volume 1 — earns no capital relief at all.

### Corporate risk weights, four ways

| Corporate exposures | UK | EU | US | India |
|---|---|---|---|---|
| Uses external ratings? | Yes, with the bank's own due diligence | Yes | No — US rules may not rely on credit ratings [verify] | Yes, from domestic agencies; from 2027 adjusted for each agency's default record [verify] |
| AAA to AA− | 20% | 20% | — | 20% (AA 30% today) [verify] |
| A+ to A− | 50% | 50% | — | 50% |
| BBB+ to BBB− | 75% | 75% | — | 75% from 2027; 100% today [verify] |
| BB+ to BB− | 100% | 100% | — | 100% from 2027; 150% today [verify] |
| Below BB− | 150% | 150% | — | 150% |
| **Unrated** | 100%, or with PRA permission 65% if investment grade and 135% if not [verify] | 100% [verify] | 100% today; 95% proposed for most banks, 65% for investment grade at the largest [verify] | 100% [verify] |

The manufacturer has no international rating. Under the UK's risk-sensitive option the bank decides investment grade by its own grade: grades 1 to 5 map to BBB− or better (Volume 1, Part 3), so at T0 the manufacturer is investment grade and at T2 it is not. In India it carries a domestic agency rating: A at T0, cut to BBB by T2.

### The manufacturer's standardised RWA

The SA exposure: at T0, term loan 100 + RCF 20 + 40% × 30 + derivatives 3.10 = **135.10**; at T2, 100 + 44 + 40% × 6 + 5.90 = **152.30**. The same exposure is used in every row below so that only the weight differs; in reality each jurisdiction's own conversion factors and derivative method would move it too.

| Jurisdiction and approach | T0 weight | T0 RWA | T2 weight | T2 RWA |
|---|---:|---:|---:|---:|
| UK, risk-sensitive unrated | 65% | 87.82 | 135% | 205.61 |
| UK, flat unrated | 100% | 135.10 | 100% | 152.30 |
| EU | 100% | 135.10 | 100% | 152.30 |
| US today | 100% | 135.10 | 100% | 152.30 |
| US proposal, largest banks | 65% | 87.82 | 100% | 152.30 |
| India today: rated A, then BBB | 50% | 67.55 | 100% | 152.30 |
| India from April 2027 | 50% | 67.55 | 75% | 114.23 |

Read down the columns and the SA's character shows. Under a flat 100%, the downgrade costs nothing but the extra exposure: the rulebook cannot see that the manufacturer is now three grades worse. Under the UK's risk-sensitive option it sees it all at once — the weight more than doubles across the investment-grade line. And in India, where mid-sized companies are routinely rated by domestic agencies, the weight follows the agency, a step behind the bank's own view.

### At default

A defaulted exposure is risk-weighted **net of the provisions** already held against it, and the weight depends on how much has been provided. In the UK and EU: 150% if specific provisions are below 20% of the outstanding, 100% if they are 20% or more [verify].

At T3 the IFRS 9 allowance is ₹77.42 crore against ₹153.50 crore outstanding — above 20% — so the net ₹76.08 crore carries 100%: **RWA 76.08**.

In India today the IRAC provision is only 15%, so the net ₹130.47 crore carries 150%: **RWA 195.71** [verify]. The same default, provisioned more slowly, consumes more than twice the capital.

### The swap's other capital charge: CVA

The swap's counterparty exposure is weighted like any exposure to the manufacturer: its SA-CCR EAD times the manufacturer's risk weight, already inside the rows above. Basel adds a second charge for **CVA risk** — the risk that the swap's CVA (Volume 1, Part 6) rises as the manufacturer's credit worsens, costing the bank money before any default.

| | UK | EU | US | India |
|---|---|---|---|---|
| CVA capital | Applies: Basel 3.1 removes the old exemption for non-financial companies, with a transition for older trades to 2030 [verify] | Revised framework, but trades with non-financial companies remain exempt [verify] | Introduced by the 2026 proposals for the largest banks [verify] | A CVA charge in force [verify] |
| SA-CCR alpha for non-financial companies | 1.0 instead of 1.4, from 1 January 2027 [verify] | 1.4 | 1.4 | Current exposure method today |

In the EU the manufacturer's swap would carry no CVA capital at all; in the UK it carries CVA capital, but a lighter exposure, because the UK sets SA-CCR's alpha at 1.0 for non-financial companies — the swap's EAD at T0 would be 2.21 rather than 3.10. This volume keeps Basel's 1.4 so its numbers match Volume 1. It is one of the widest gaps between the rulebooks: the same swap, a different exposure and a different capital charge in each.

### On your desk

- **Exposure class assignment** is a set of rules applied to reference data — counterparty type, size, purpose, collateral — and the most common source of SA errors.
- **Rating mapping tables.** Each agency's grades mapped to the regulator's credit quality steps, versioned by jurisdiction; in India from 2027, adjusted by each agency's default record.
- **Due diligence overrides.** UK and EU rules require the bank to assign a higher weight where its own analysis says the external rating is too generous. The override, its reason and its approver are data.
- **Eligibility flags on collateral.** The same collateral item is eligible for IRB LGD, ineligible for SA, and relevant to the accounting LGD. One item, three flags.

### Check yourself

1. The manufacturer's security package cut its LGD from 60% to 20.4%. What does it save in SA capital, and why?
2. Under the UK's flat 100% option, what does the downgrade to grade 7 cost in RWA? Under the risk-sensitive option?
3. At T3, why does the Indian branch hold more capital against the defaulted manufacturer than the UK group does?

<details>
<summary>Answers</summary>

1. Nothing. Physical and trade collateral is not eligible risk mitigation for a corporate exposure under the standardised approach; only financial collateral and guarantees are.
2. Flat: RWA moves from 135.10 to 152.30 only because the exposure grew — the weight stays at 100%. Risk-sensitive: from 87.82 to 205.61, as the weight goes from 65% to 135%.
3. Because its IRAC provision is 15% rather than 50%. Defaulted exposures are weighted net of provisions, and below 20% coverage the weight is 150% on a much larger net exposure: 195.71 against 76.08.

</details>

---

## Part 8 — The internal ratings-based approach

### From unexpected loss to a formula

Volume 1 showed that a book's loss in a bad year depends on how many borrowers fail together. The IRB formula turns that idea into one equation, using a single common factor — the state of the economy — that pushes every borrower towards or away from default at once.

The question it asks of each exposure: **what would this borrower's default probability be in the worst year in a thousand?** Then it charges capital for the loss in that year, less the part already expected.

$$
K = \left[ LGD \times N\!\left( \frac{N^{-1}(PD) + \sqrt{R} \times N^{-1}(0.999)}{\sqrt{1 - R}} \right) - PD \times LGD \right] \times \frac{1 + (M - 2.5) \times b}{1 - 1.5 \times b}
$$

$$
RWA = K \times 12.5 \times EAD
$$

where

- **K** is the capital required per rupee of exposure
- **N** is the standard normal distribution and **N⁻¹** its inverse: N⁻¹(PD) says how many standard deviations the borrower sits from default, and N⁻¹(0.999) = 3.09 is how far a one-in-a-thousand economy moves everyone
- **R** is the **asset correlation** — how strongly the borrower moves with the economy — set by the formula, not the bank
- **M** is the effective maturity in years, between 1 and 5, and **b** the maturity adjustment: longer loans have more time to be downgraded
- **12.5** is 1 ÷ 8%, turning a capital amount back into RWA

The correlation and the maturity adjustment are themselves functions of PD:

$$
R = 0.12 \times \frac{1 - e^{-50 \times PD}}{1 - e^{-50}} + 0.24 \times \left( 1 - \frac{1 - e^{-50 \times PD}}{1 - e^{-50}} \right)
$$

$$
b = (0.11852 - 0.05478 \times \ln PD)^2
$$

Correlation falls as PD rises — from 24% for the safest companies to 12% for the weakest — on the evidence that strong companies fail mainly when the whole economy does, while weak ones fail for reasons of their own.

### The term loan at T0, step by step

PD 0.40%; downturn LGD 27.6% (below); EAD 100; M = 5.

| Step | Working | Result |
|---|---|---:|
| Correlation | R at PD 0.40% | 0.2182 |
| Distance to default | N⁻¹(0.004) | −2.6521 |
| The bad-year shift | √0.2182 × 3.0902 = 0.4672 × 3.0902 | 1.4437 |
| Conditional PD | N((−2.6521 + 1.4437) ÷ √(1 − 0.2182)) = N(−1.3667) | **8.59%** |
| Loss in that year | 8.59% × 27.6% | 2.37% |
| Less expected loss | 0.40% × 27.6% | 0.11% |
| Maturity adjustment | b = 0.17723; (1 + 2.5 × b) ÷ (1 − 1.5 × b) | 1.9656 |
| **K** | (2.37% − 0.11%) × 1.9656 | **4.44%** |
| **Risk weight** | 4.44% × 12.5 | **55.5%** |
| **RWA** | 55.5% × 100 | **55.51** |

In the worst year in a thousand, a borrower with a normal-year PD of 0.40% defaults with a probability of 8.59% — more than twenty times higher. That multiplication is what capital is for.

### All three facilities, T0 and T2

| ₹ crore | PD | LGD | EAD | M | Risk weight | RWA |
|---|---:|---:|---:|---:|---:|---:|
| **T0** | | | | | | |
| Term loan | 0.40% | 27.6% | 100.00 | 5 | 55.5% | 55.51 |
| RCF | 0.40% | 10.0% | 42.50 | 5 | 20.1% | 8.55 |
| Derivatives | 0.40% | 60.0% | 3.10 | 5 | 120.7% | 3.74 |
| **Total** | | | **145.60** | | **46.6%** | **67.80** |
| **T2** | | | | | | |
| Term loan | 3.20% | 27.6% | 100.00 | 3 | 84.0% | 83.99 |
| RCF | 3.20% | 10.0% | 48.50 | 3 | 30.4% | 14.76 |
| Derivatives | 3.20% | 60.0% | 5.90 | 3 | 182.6% | 10.77 |
| **Total** | | | **154.40** | | **70.9%** | **109.53** |

At T2 the correlation drops to 0.1442, the conditional PD rises to 23.16%, and the shorter remaining maturity pulls the other way. The net effect of the downgrade: **RWA up 62%**, from 67.80 to 109.53, and 8% capital up from ₹5.42 crore to ₹8.76 crore — with every payment still on time.

That is **procyclicality**: IRB capital rises as borrowers deteriorate, which in a downturn means everywhere at once, which is exactly when capital is hardest to raise. It is the reason for the countercyclical buffer (Part 6), which regulators release in bad times.

### The parameters are not free

Basel 3.1 constrains every input a bank may bring.

| Parameter | UK and EU rule |
|---|---|
| PD | Floor of 0.05% for corporates [verify] |
| LGD, own estimates | Must reflect a downturn; floors of 25% unsecured, 15% secured on other physical collateral, 10% on receivables [verify] |
| LGD, supervisory | Where the bank may not use its own: 40% for senior unsecured corporate claims, less for eligible collateral by formula [verify] |
| Own LGD and CCF permitted? | Not for large corporates — group revenue above £440 million in the UK or €500 million in the EU — who must use supervisory LGDs [verify] |
| CCF, own estimates | Only for revolving lines to smaller corporates, floored at half the standardised factor [verify] |
| Scaling factor | The old 1.06 multiplier on credit RWA is removed [verify] |

The manufacturer, with sales far below those thresholds, may be modelled with the bank's own LGD and CCF. Check the term loan's LGD against its floor, which blends the unsecured and secured floors across the part the plant covers (66% after a 40% haircut) and the part it does not (34%):

$$
LGD_{\text{floor}} = 25\% \times 0.34 + 15\% \times 0.66 = 18.4\%
$$

The bank's 27.6% clears it. Had the bank not had permission, the supervisory formula would have set the LGD at 40% × 0.34 + 25% × 0.66 = **30.1%**.

### One loan, five LGDs

The term loan now has as many LGDs as uses.

| LGD of the term loan | Value | Used for | Why this version |
|---|---:|---|---|
| Policy estimate, T0 (Volume 1) | 20.4% | Limits, pricing | Collateral at today's value |
| IFRS 9, by scenario, T0 | 18.6% · 20.4% · 27.6% | The allowance | Unbiased, weighted across futures |
| IRB downturn | 27.6% | Capital | Must hold in a downturn year |
| Supervisory formula | 30.1% | Capital, without own-LGD permission | The regulator's number |
| Realised (Volume 1, Part 9) | 49.4% | The model's next calibration | What actually happened |

The IRB downturn LGD is the bank's estimate for the collateral in a downturn — the plant at ₹90 crore rather than ₹110 crore. At T2 the downturn arrived as modelled and the valuer marked the plant to ₹90 crore; the capital LGD did not need to move. That is the point of a downturn LGD: it is set for the bad year in advance, so capital does not lurch when the bad year comes.

### IRB across the four jurisdictions

| | UK | EU | US | India |
|---|---|---|---|---|
| IRB for credit risk | Permitted, with the restrictions above | Permitted, with the restrictions above | The 2026 proposals would remove internal models for credit risk capital at the largest banks [verify] | Framework exists, but no bank uses it for capital [verify] |
| Where internal PDs still matter | Capital, IFRS 9, pricing | Capital, IFRS 9, pricing | CECL, stress tests, pricing | ECL from 2027, pricing |

### At default

At T3 the PD is 100%, and the IRB charge becomes the gap between a downturn loss on the defaulted exposure and the bank's best estimate of its expected loss — which the allowance already covers. What remains is usually small: once a loan has defaulted, provisions do most of the work that capital did before.

### On your desk

- **Parameter lineage.** Each IRB input — PD, LGD, CCF, M — carries its model, version, floor applied, and whether the floor bound. Supervisors ask for the pre-floor and post-floor values.
- **Effective maturity** is a calculation from contractual cash flows, capped at five years and floored at one — and different for loans and derivative netting sets.
- **Size thresholds are data.** Whether a borrower may use own LGD depends on its group revenue, so the platform needs consolidated group revenue in reference data, refreshed annually, in the right currency.
- **Five LGDs, five fields.** Policy, IFRS 9 by scenario, downturn, supervisory and realised — named distinctly, never overwriting one another.

### Check yourself

1. At T0 the manufacturer's term loan has a normal-year PD of 0.40% but a conditional PD of 8.59%. What is the second number, and what is it for?
2. The derivatives carry a higher risk weight than the term loan at both dates. Why?
3. Why did the term loan's IRB LGD not change at T2, when the plant was marked down?

<details>
<summary>Answers</summary>

1. It is the borrower's probability of default in a one-in-a-thousand economic year, given its correlation with the economy. Capital is sized to cover the loss in that year above the loss already expected.
2. Their LGD is 60% — they are unsecured — against 27.6% for the term loan. Risk weight is proportional to LGD, and the same PD and maturity apply.
3. Because it was already a downturn LGD: estimated with the plant at its downturn value of ₹90 crore. The markdown at T2 was the downturn the estimate had assumed.

</details>

---

## Part 9 — The output floor, and the book

### Why a floor

IRB lets banks use their own models, and models can be optimistic. Supervisors found that banks holding similar portfolios reported risk weights that differed by multiples. The Basel reforms answered with the **output floor**: an IRB bank's total RWA may not fall below a set percentage of what the standardised approach would produce for the same book.

$$
RWA_{\text{floored}} = \max\left( RWA_{\text{IRB}},\ x\% \times RWA_{\text{SA}} \right)
$$

where **x** rises to 72.5% when fully phased in. The floor applies to the whole bank's RWA, not loan by loan — which is why it has to be seen on the book.

| Floor percentage | 2025 | 2026 | 2027 | 2028 | 2029 | 2030 |
|---|---:|---:|---:|---:|---:|---:|
| EU | 50% | 55% | 60% | 65% | 70% | 72.5% |
| UK | — | — | 60% | 65% | 70% | 72.5% |

Dates and percentages [verify]. In the US, the 2026 proposals remove internal models for credit risk at the largest banks and, with them, the need for this floor [verify]. In India no bank uses IRB, so the floor does not arise.

### The book at T0 and T2

For the book, the other nineteen borrowers are run through the IRB formula with the LGDs from Volume 1's book table standing in for their downturn estimates, and a maturity of 2.5 years. The manufacturer's facilities are as in Part 8. For the SA side, the bank uses the UK's risk-sensitive option: 65% for grades 1 to 5, 135% for grades 6 to 9. Only the manufacturer changes between T0 and T2.

| ₹ crore | T0 | T2 |
|---|---:|---:|
| IRB RWA | 1,203.02 | 1,244.75 |
| SA RWA, UK risk-sensitive | 1,643.18 | 1,760.97 |
| Floor at 72.5% of SA | 1,191.30 | 1,276.70 |
| **RWA that binds** | **1,203.02 — IRB** | **1,276.70 — the floor** |
| Floor bites by | — | 31.95 |
| Total capital at 8% | 96.24 | 102.14 |

At T0 the book's IRB RWA sits just above the fully phased floor. At T2 one borrower's downgrade pushes it below. The manufacturer's SA weight jumped from 65% to 135% — adding 117.79 of SA RWA — while its IRB RWA rose by only 41.73; 72.5% of the first exceeds the second, and the book falls onto the floor.

Now suppose the bank had chosen the flat 100% option for unrated corporates instead:

| ₹ crore | T0 | T2 |
|---|---:|---:|
| SA RWA, flat 100% | 1,989.50 | 2,006.70 |
| Floor at 72.5% | 1,442.39 | 1,454.86 |
| **Floor bites by** | **239.37** | **210.11** |

Under the flat option the floor binds from day one, by far more. For a book of mostly unrated, mostly investment-grade companies, the choice between the UK's two options decides whether the bank's own models set its capital at all. And the PRA allows no mixing: one option, for every unrated corporate, so the choice is made once.

In 2027 the UK floor is only 60%: 60% of 1,643.18 is 985.91 at T0 and 60% of 1,760.97 is 1,056.58 at T2, far below the IRB figures. The floor bites later, as it phases up — which makes it a capital-planning problem years before it is a capital problem.

### The downgrade's price, three ways

| The manufacturer, T0 to T2 | RWA before | RWA after | Change |
|---|---:|---:|---:|
| IRB | 67.80 | 109.53 | +41.73 |
| SA, UK risk-sensitive | 87.82 | 205.61 | +117.79 |
| SA, UK flat | 135.10 | 152.30 | +17.20 |

The same event, three capital consequences, depending entirely on the approach the bank has chosen and the regulator has allowed.

### On your desk

- **Two full calculations, always.** An IRB bank must run the standardised approach on its entire book every period, purely to compute the floor. Every IRB exposure needs complete SA data — exposure class, rating, SA conversion factors — even though the SA result may never bind.
- **The floor is computed at the top.** It applies to total RWA of the entity, so it cannot be pushed down to facilities without an allocation rule. How the floor's cost is allocated to businesses and products is a policy decision that pricing and profitability reports depend on.
- **Transitional percentages are parameters by year and by jurisdiction** — the UK and EU phase-ins differ, and the group reports both.

### Check yourself

1. Why does the output floor bind at T2 but not at T0 under the risk-sensitive option?
2. Why must an IRB bank maintain full standardised-approach data for exposures whose capital comes from its models?
3. In 2027 the UK floor is 60%. Does it bind for this book under either option?

<details>
<summary>Answers</summary>

1. The manufacturer's downgrade raised its SA RWA by 117.79 but its IRB RWA by only 41.73. The floor rose by 72.5% × 117.79 = 85.40 while IRB RWA rose by 41.73, so the floor overtook the IRB figure: 1,276.70 against 1,244.75.
2. Because the floor is 72.5% of the SA result for the whole book, and the SA result cannot be computed without SA data for every exposure.
3. No. Under the risk-sensitive option 60% of SA RWA is 985.91 at T0 and 1,056.58 at T2; under the flat option 1,193.70 and 1,204.02. All are below IRB RWA of 1,203.02 and 1,244.75.

</details>

---

## Part 10 — The PD model behind the master scale

Every number in this volume starts with a PD, and every PD starts with a model. Volume 1 used the scorecard; this part opens it.

### What the model is

The data is one row per borrower per year — an **obligor-year**. Each row holds what the bank knew at the start of the year (the ratios and qualitative scores from Volume 1, Part 3) and one outcome: did the borrower default within the next twelve months, yes or no? Ten years of a mid-corporate book give tens of thousands of such rows, with a few hundred defaults among them.

The model is a **logistic regression**: the log of the odds of default is a straight line in the score.

$$
\ln\left( \frac{PD}{1 - PD} \right) = a + b \times \text{Score}
$$

where **PD ÷ (1 − PD)** is the odds of default, and **a** and **b** are estimated from the data. For this bank's corporate model, a = −1.3015 and b = −0.05855.

| Score | Log-odds: a + b × score | PD |
|---:|---:|---:|
| 72 — the manufacturer at T0 | −1.3015 − 0.05855 × 72 = −5.517 | 0.40% |
| 54 | −4.463 | 1.14% |
| 36 — the manufacturer at T2 | −3.409 | 3.20% |

Every 0.693 ÷ 0.05855 = **11.8 points** of score halves the odds of default — which is why Volume 1's score bands, about ten points wide, each double the PD from one grade to the next. The scorecard and the master scale are the same model seen from two ends.

In practice the bank fits the regression on the individual factors, not the total, then converts coefficients to points so that credit officers can see what drives a grade. And it calibrates each grade's PD to a **long-run default rate** — with a margin of conservatism for data weaknesses — because capital wants through-the-cycle PDs. The IFRS 9 model then takes those PDs and adds the scenario multipliers of Part 3.

### Validation: three questions

A model is validated by people independent of those who built it, against three questions.

**1. Does it rank?** — *discrimination*. Ten borrowers from a validation sample, sorted by score:

| Borrower | Score | Defaulted within a year |
|---|---:|---|
| A | 84 | No |
| B | 78 | No |
| C | 72 | No |
| D | 70 | No |
| E | 66 | **Yes** |
| F | 61 | No |
| G | 55 | No |
| H | 48 | **Yes** |
| I | 41 | No |
| J | 33 | **Yes** |

Take every pair of one defaulter and one survivor: 3 × 7 = 21 pairs. In how many did the survivor score higher? Against E, four survivors scored higher; against H, six; against J, all seven. That is 17 of 21.

$$
AUC = \frac{17}{21} = 0.81 \qquad Gini = 2 \times AUC - 1 = 0.62
$$

The **area under the curve (AUC)** is the probability that a randomly chosen survivor outscores a randomly chosen defaulter: 0.5 is a coin toss, 1.0 perfect ranking. The **Gini coefficient** rescales it from 0 to 1. Corporate models commonly land in the range 0.5 to 0.8 of Gini.

**2. Is it right on average?** — *calibration*. Over five years, grade 7 held 250 borrower-years. At a PD of 3.20% the model expected 8.0 defaults. There were 13.

Is that bad luck or a wrong PD? The **binomial test** asks how likely 13 or more defaults would be if 3.20% were true. The exact answer is **6.1%**. The bank's traffic lights: green above 10%, amber from 1% to 10%, red below 1%. Grade 7 is **amber**: investigate, watch next year, and recalibrate if it persists. Fourteen defaults would have fallen below 5%.

A shortcut that treats the count as normally distributed gives z = (13 − 8.0) ÷ √(250 × 0.032 × 0.968) = 1.80, and a probability of 3.6% — a different verdict. With expected counts this small the normal approximation misleads, so the exact test belongs in the requirement.

**3. Is it the same population?** — *stability*. The **population stability index (PSI)** compares how borrowers are spread across score bands now against the development sample.

$$
PSI = \sum_{\text{bands}} (\text{Actual \%} - \text{Expected \%}) \times \ln\frac{\text{Actual \%}}{\text{Expected \%}}
$$

| Score band | Development | Now | Contribution |
|---|---:|---:|---:|
| 75 and above | 30% | 22% | (0.22 − 0.30) × ln(0.22 ÷ 0.30) = 0.0248 |
| 55 to 74 | 50% | 48% | 0.0008 |
| Below 55 | 20% | 30% | 0.0406 |
| **PSI** | | | **0.066** |

Conventional reading: below 0.10 stable, 0.10 to 0.25 worth investigating, above 0.25 a population the model was not built for. The book has drifted towards weaker scores — the downturn — but the model still describes it.

### The manufacturer becomes a data point

The manufacturer was grade 7 at the start of the year after T2 and defaulted within it. It is one of the 13. Its default also adds a realised LGD and a realised CCF to their datasets (Volume 1, Part 9). The next validation will see all three — provided the rows were captured.

### One borrower, two PD models

| | IRB model | IFRS 9 model |
|---|---|---|
| Horizon | One year | Twelve months in Stage 1, lifetime in Stage 2 |
| Economy | Through the cycle | Point in time, with scenarios |
| Bias | Conservative by design: a margin of conservatism is required | Unbiased: no deliberate conservatism |
| LGD alongside | Downturn | Scenario-weighted, today's view |
| Definition of default | The regulatory definition | Aligned to the same definition in practice |

### Model risk rules, four ways

| | UK | EU | US | India |
|---|---|---|---|---|
| Main rules | PRA SS1/23, model risk management principles for banks [verify] | ECB guide to internal models; EBA guidelines on PD and LGD estimation and on the definition of default [verify] | SR 11-7 and OCC 2011-12, supervisory guidance on model risk management [verify] | Model risk principles within the RBI's ECL directions [verify] |
| Common core | A model inventory, risk tiering, independent validation, ongoing monitoring, and senior accountability | The same, plus supervisory approval of IRB models before use | The same, built around effective challenge | The same, with board oversight of ECL models |

### On your desk

- **Reproducible development data.** The obligor-year dataset, frozen, with the definition of default and the observation dates it used. A model that cannot be rebuilt from its own data cannot be validated.
- **Monitoring as a product.** AUC, calibration by grade, PSI and overrides, produced on a fixed calendar with thresholds as parameters and traffic lights computed, not judged.
- **The model inventory.** Every model: owner, tier, use, version, last validation, open findings, known limitations — and links to any overlay compensating for it (Part 5).

### Check yourself

1. The validation sample's AUC is 0.81. Say what that means without using the word "curve".
2. Grade 7 saw 13 defaults against 8.0 expected. Why amber, not red — and why not green?
3. Why does the IFRS 9 model start from the IRB model's PDs but must not keep their margin of conservatism?

<details>
<summary>Answers</summary>

1. Pick one borrower that defaulted and one that did not, at random: 81% of the time, the one that did not default had the higher score.
2. If 3.20% were the true PD, 13 or more defaults would happen about 6.1% of the time — unusual enough to investigate, not so rare as to prove the PD wrong. Green would need that probability above 10%.
3. IFRS 9 requires an unbiased estimate of expected loss; a deliberate cushion would overstate the allowance. Capital wants caution, accounting wants the best estimate — so the conservatism is removed before the PDs enter the ECL engine.

</details>

---

## Part 11 — Stress tests and regulatory reports

### Stressing the book

A stress test asks what the book would lose, and need, in a severe but plausible downturn — deliberately worse than the downside scenario of Part 3. The simplest version doubles every PD and adds five points to every LGD, holding exposures still.

| ₹ crore | Base | Stressed | Change |
|---|---:|---:|---:|
| Book expected loss, one year | 5.64 | 12.82 | ×2.3 |
| Book IRB RWA | 1,203.02 | 1,768.41 | +47% |
| Capital at 8% of RWA | 96.24 | 141.47 | +45.23 |

The stressed PDs push RWA up by nearly half at the moment losses more than double — the procyclicality of Part 8, across the whole book. A real stress test also moves exposures, grades and stages year by year through a scenario, and projects the allowance and profit alongside; this is its first step.

### Supervisory stress tests, four ways

| | UK | EU | US | India |
|---|---|---|---|---|
| Run by | The Bank of England, for the largest UK banks [verify] | The EBA with the ECB, EU-wide, every two years [verify] | The Federal Reserve, annually [verify] | The RBI's macro stress tests in its Financial Stability Report; banks' own stress tests in their capital assessments [verify] |
| What it feeds | Buffers and supervisory capital judgements | Pillar 2 guidance | Each bank's stress capital buffer | Supervisory review |
| Bank data behind it | Projections in the Bank's templates | EBA templates | FR Y-14, loan-level and portfolio data | Internal capital assessment submissions |

In the US the stress test *is* part of the capital requirement: a bank's stress capital buffer is set from its projected losses in the Fed's scenario. That is why the heaviest use of a US bank's PD and LGD models is in stress testing, not in the capital formula.

### Regulatory reporting

Every number in both volumes ends up in a regulator's template.

| Report | UK | EU | US | India |
|---|---|---|---|---|
| Capital and RWA | COREP — the common reporting templates for capital — own funds and credit risk, revised for Basel 3.1 [verify] | COREP: own funds, requirements, SA and IRB credit risk, counterparty risk [verify] | Call Report schedule RC-R, FR Y-9C [verify] | Capital adequacy returns filed with the RBI [verify] |
| Loan quality and allowances | Returns on performing, non-performing and forborne exposures [verify] | FINREP — the financial reporting templates: non-performing and forborne exposures, allowance movements [verify] | Call Report schedule RC-N: past due and nonaccrual loans | Asset quality returns; CRILC |
| Large exposures | Large exposures templates [verify] | COREP large exposures templates [verify] | FR 2590 for single-counterparty limits [verify] | Large exposures returns [verify] |
| Loan-level data | — | AnaCredit, in the euro area | FR Y-14 | CRILC |
| Public disclosure | Pillar 3 | Pillar 3 | Pillar 3 | Pillar 3 |

Follow the manufacturer into the returns at T2. Its facilities appear in the IRB credit risk template at grade 7 — EAD, PD, LGD, RWA. It appears again in the standardised template, because the output floor needs it. The swap appears in the counterparty risk template by approach. In the loan-quality returns it moves from performing to performing-but-Stage-2, and at T3 to non-performing. One client, a dozen rows, across reports owned by different teams — and every row must agree with every other, and with the ledger.

### On your desk

- **Cell-level mapping.** Each template cell has a regulatory definition. The analyst's work is to map it to platform fields, with the transformation rules written down — this cell is EAD net of this, for exposures in this class, as at this date.
- **Validation rules.** Regulators publish cross-checks between cells and between templates; a failure blocks submission. They belong in the platform's own checks, run before the deadline week.
- **Reconciliations across reports.** Exposure in the capital return, gross carrying amount in the loan-quality return, balances in the ledger: three numbers for the same loans that must reconcile, with every difference explained.
- **Calendar and ownership.** Each report has a deadline, a submitter, a reviewer and a sign-off. Volume 3 builds the machine that meets them.

### Check yourself

1. The stress raises expected loss by 127% but RWA by only 47%. Why doesn't capital move as much as losses?
2. Why does a US bank's stress test matter more to its capital than its PD model's direct use in the capital formula?
3. At T2, name three templates in which the manufacturer appears, and one number that must agree between two of them.

<details>
<summary>Answers</summary>

1. Capital is sized for unexpected loss, not expected. As PD rises, expected loss rises in proportion, but the correlation in the IRB formula falls, so the bad-year PD does not rise as fast, and part of the extra loss moves from the capital charge into expected loss, which provisions cover.
2. Because the stress capital buffer — part of its requirement — is set from projected losses in the Fed's scenario, which run on its loss models; and under the 2026 proposals the largest banks' credit risk capital would not use internal models at all.
3. The IRB credit risk template, the standardised credit risk template (for the output floor), and the counterparty credit risk template; and the loan-quality return. The exposure in the capital returns must reconcile with the gross carrying amount in the loan-quality return, with differences such as undrawn amounts and accrued interest explained.

</details>

---

## The whole thing, on one table

One manufacturer, four dates, every rulebook.

| | T0 | T1 | T2 | T3 |
|---|---:|---:|---:|---:|
| Grade and PD | 4 · 0.40% | 4 · 0.40% | 7 · 3.20% | Default |
| IFRS 9 stage | 1 | 1 | 2 | 3 |
| **Allowance, IFRS 9** | **0.1088** | **0.1098** | **3.4633** | **77.42** |
| Allowance, CECL | 0.5434 | 0.4443 | 4.0531 | 51.50 |
| Provision, IRAC | 0.48 | 0.50 | 0.58 | 23.03 |
| Provision, RBI ECL from 2027 | 0.53 | 0.54 | 7.32 | 77.42 |
| Regulatory EL on the loans against the IFRS 9 allowance | 0.0186 shortfall | — | 2.4249 excess | — |
| **IRB RWA** | **67.80** | **61.60** | **109.53** | — |
| SA RWA, UK risk-sensitive | 87.82 | 90.94 | 205.61 | 76.08 |
| Capital at 8%, IRB | 5.42 | 4.93 | 8.76 | — |

₹ crore. The T1 IRB figures come from the same formula with a four-year maturity and the T1 exposures: IRB RWA fell between T0 and T1 even though the RCF grew, because a year less to run means a year less to be downgraded.

Read the T2 column. Nothing had been missed. Yet the allowance had multiplied thirty-two times under IFRS 9 and fourteen times under India's floors, IRB capital had risen by 62%, the standardised weight had more than doubled, and the book had dropped onto the output floor. Every rulebook saw T2 as the moment the loan changed. They disagreed only on how much it cost.

---

## One client, four jurisdictions

| The manufacturer | UK | EU | US | India |
|---|---|---|---|---|
| Accounting | IFRS 9 | IFRS 9 | CECL | IRAC until March 2027; ECL with floors after |
| Allowance at T0 | 0.11 | 0.11 | 0.54 | 0.48, then 0.53 |
| Allowance at T2 | 3.46 | 3.46 | 4.05 | 0.58, then 7.32 |
| Allowance at T3 | 77.42 | 77.42, with the non-performing exposure backstop behind it | 51.50, largely charged off | 23.03, then 77.42 |
| Capital approach | IRB, with the output floor | IRB, with the output floor | Standardised; IRB proposed to be removed at the largest banks | Standardised |
| Standardised weight, T0 to T2 | 65% to 135%, or 100% flat | 100% | 100%; 65% to 100% proposed for the largest | 50% to 100%; 50% to 75% from 2027 |
| CVA capital on the swap | Yes | Exempt | Proposed for the largest | Yes |
| Model risk rules | SS1/23 | ECB guide, EBA guidelines | SR 11-7 | RBI ECL directions |
| Stress test that bites | Bank of England | EBA and ECB | The Fed's, setting the stress capital buffer | RBI and the bank's own |

Each of these carries a [verify] where it appears in the parts above. What never changes across the columns is the arithmetic: a PD, an LGD and an EAD, pushed forward through time for the accounts and pushed out to a one-in-a-thousand year for capital.

---

## Reference numbers

| Figure | Value | Part |
|---|---:|---|
| EIR by year | 10.00% / 9.50% / 9.00% | 1 |
| Residual PD, years 3–5: expected at T0 / seen at T2 | 1.195% / 10.79% | 2 |
| Scenario weights, T0 and T2 | 20/60/20; 15/55/30 | 3 |
| PD multipliers, T0 and T2 | 0.8/1.0/1.8; 1.0/1.25/2.0 | 3 |
| IFRS 9 allowance, T0 · T1 · T2 · T3 | 0.1088 · 0.1098 · 3.4633 · 77.42 | 3 |
| Base scenario only at T0 | 0.0896 | 3 |
| T2 allowance if still Stage 1 | 1.4487 | 3 |
| Stage 3 recoveries, PV: term loan / RCF | 49.29 / 26.79 | 3 |
| Stage 3 interest in year four: gross / net | 9.41 / 4.44 | 3 |
| CECL, T0 · T1 · T2 · T3 | 0.5434 · 0.4443 · 4.0531 · 51.50 | 4 |
| IRAC, T0 · T1 · T2 · T3 | 0.48 · 0.50 · 0.58 · 23.03 | 4 |
| RBI ECL with floors, T0 · T1 · T2 | 0.528 · 0.540 · 7.320 | 4 |
| Allowance range at T2, single scenarios | 2.27 to 4.95 | 5 |
| One grade worse at T2 | 6.65 | 5 |
| Overlay for working-capital LGD | 1.60 | 5 |
| Regulatory EL vs allowance: T0 / T2 | 0.0186 shortfall / 2.4249 excess | 6 |
| SA exposure, T0 / T2 | 135.10 / 152.30 | 7 |
| SA RWA, UK risk-sensitive, T0 / T2 / T3 | 87.82 / 205.61 / 76.08 | 7 |
| SA RWA at T3 under IRAC provisioning | 195.71 | 7 |
| Conditional PD in a one-in-a-thousand year, T0 / T2 | 8.59% / 23.16% | 8 |
| Asset correlation, T0 / T2 | 0.2182 / 0.1442 | 8 |
| Term loan risk weight, T0 / T2 | 55.5% / 84.0% | 8 |
| Manufacturer IRB RWA, T0 · T1 · T2 | 67.80 · 61.60 · 109.53 | 8 |
| A-IRB LGD floor / supervisory LGD, term loan | 18.4% / 30.1% | 8 |
| Book IRB RWA, T0 / T2 | 1,203.02 / 1,244.75 | 9 |
| Output floor at 72.5%, risk-sensitive SA, T0 / T2 | 1,191.30 / 1,276.70 | 9 |
| Floor shortfall under flat 100%, T0 / T2 | 239.37 / 210.11 | 9 |
| Logistic model: a / b / points to halve the odds | −1.3015 / −0.05855 / 11.8 | 10 |
| Validation AUC / Gini | 0.81 / 0.62 | 10 |
| Grade 7 calibration: expected / observed / exact p | 8.0 / 13 / 6.1% | 10 |
| PSI | 0.066 | 10 |
| Stressed book EL / IRB RWA | 12.82 / 1,768.41 | 11 |

₹ crore unless a percentage. Regulatory parameters, thresholds and effective dates are subject to change and are marked **[verify]** where they appear.

---

## Acronyms

| Term | Expansion |
|---|---|
| AnaCredit | Analytical credit datasets (euro area) |
| AT1 | Additional Tier 1 capital |
| AUC | Area under the curve |
| CECL | Current expected credit loss (US GAAP) |
| CET1 | Common equity Tier 1 capital |
| COREP | Common reporting — the EU and UK capital returns |
| CRILC | Central Repository of Information on Large Credits |
| CRR3 | Capital Requirements Regulation, third revision (EU) |
| CVA | Credit valuation adjustment |
| EAD | Exposure at default |
| EBA | European Banking Authority |
| ECB | European Central Bank |
| ECL | Expected credit loss |
| EIR | Effective interest rate |
| EL | Expected loss |
| FINREP | Financial reporting — the EU's supervisory financial returns |
| GAAP | Generally accepted accounting principles |
| IFRS | International Financial Reporting Standards |
| IRAC | Income recognition, asset classification and provisioning (India) |
| IRB | Internal ratings-based approach |
| LGD | Loss given default |
| NPA | Non-performing asset |
| NPE | Non-performing exposure |
| OCC | Office of the Comptroller of the Currency |
| PD | Probability of default |
| PIT | Point-in-time |
| PRA | Prudential Regulation Authority |
| PSI | Population stability index |
| PV | Present value |
| RBI | Reserve Bank of India |
| RCF | Revolving credit facility |
| RWA | Risk-weighted assets |
| SA | Standardised approach |
| SA-CCR | Standardised approach for counterparty credit risk |
| SICR | Significant increase in credit risk |
| SMA | Special mention account |
| TTC | Through-the-cycle |

---

## The compression

A loan carries two burdens beyond its funding. The loss the bank expects is carried as an **allowance**, charged against profit. The loss it does not expect — a very bad year — is carried as **capital**, the bank's own money. Both are built from Volume 1's three numbers, but never quite the same versions of them.

The accounts moved from waiting for losses to expecting them. **IFRS 9** asks a relative question — is this loan riskier than when it was made? — and answers with a change of horizon: twelve months of loss while it is not, lifetime once it is. The manufacturer's allowance was ₹0.11 crore on day one and ₹3.46 crore at T2, with every payment current; the step from Stage 1 to Stage 2 alone was worth ₹2.01 crore. It is a probability-weighted number across futures, because losses are curved and the bad future costs more than the good one saves; and a set of judgements — the grade, the staging rule, the weights, the overlays — sits around the model and moves the number more than the economy does. **CECL** takes the lifetime view from day one and has no cliff. **India's IRAC** norms waited for default; its **2027 ECL** rules adopt the stages and put a floor under them that, for a good corporate, sets the number outright.

Capital asks what the bank must survive. The **standardised approach** reads a table: blunt, blind to physical collateral, and — depending on the country and the option chosen — either blind to the manufacturer's downgrade or more than doubling on it. The **IRB** approach asks what each borrower's PD becomes in the worst year in a thousand and charges for the loss beyond the expected — 8.59% for a borrower whose normal-year PD is 0.40%. It rose 62% on the downgrade, before any default, and would rise across a whole book at once in a downturn. The **output floor** ties the two together: the book's own models set its capital at T0, and one borrower's downgrade put it on the floor at T2.

Behind every PD sits a model that must rank borrowers, be right on average and still describe the population it scores — and a default that becomes the model's next data point. Around all of it sit stress tests that ask the question again, harder, and regulatory returns that report the same client a dozen times across templates that must agree with each other and with the ledger.

The four jurisdictions differ in parameters, dates and philosophy — IFRS 9's cliff, CECL's front-loading, India's floors; UK and EU models under a floor, a US moving away from models for capital, an India that never used them. They never differ in what a PD, an LGD or an EAD is.

Volume 3 builds the machine that computes all of it: the data that feeds these calculations, the lineage and controls regulators demand, the requirements, models and tests a business analyst writes, and the SQL, Python and dashboards that run on the book from Volume 1.
