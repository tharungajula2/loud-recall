---
title: "Credit Risk and Treasury — One Balance Sheet, One Reporting Chain"
description: "This note covers what a credit risk, capital and regulatory reporting business analyst needs to hold in working memory. It assumes no banking background. Every term is defined before it is used. It follows one bank from the products it holds, through the risks those products create, to the returns it files with the regulator and the project work that produces them."
series: masterclass
status: live
updated: 2026-09-11
verified: false
tags:
  - credit risk
  - treasury
  - alm
  - liquidity
  - regulatory reporting
---

This note covers what a credit risk, capital and regulatory reporting business analyst needs to hold in working memory. It assumes no banking background. Every term is defined before it is used. It follows one bank from the products it holds, through the risks those products create, to the returns it files with the regulator and the project work that produces them.

Amounts are in Indian rupees, stated in ₹ crore. One crore is ten million.

---

## 1. The bank and the journey

### 1.1 What a bank actually does

A bank borrows money from people who want it back soon and lends it to people who repay slowly. It earns the difference between the two rates.

That single sentence contains every risk in this document:

- The borrowers may not repay — **credit risk**
- The lenders may want their money back faster than it arrives — **liquidity risk**
- Interest rates may move between the two sides — **interest rate risk**
- The bank must hold a buffer for the losses it cannot predict — **capital**
- And it must prove all of this to a regulator, from data, on a schedule — **reporting**

### 1.2 The balance sheet

A **balance sheet** is a photograph, taken on one date, of what a bank owns and what it owes.

- **Assets** are what the bank owns or is owed. Loans are assets — someone owes the bank money.
- **Liabilities** are what the bank owes to others. Deposits are liabilities — the bank owes its depositors.
- **Equity** is what is left for the owners after every liability is met.

$$
\text{Assets} = \text{Liabilities} + \text{Equity}
$$

where:

- **Assets** — resources owned and amounts owed to the bank
- **Liabilities** — obligations owed by the bank to others
- **Equity** — the owners' residual claim

This identity always holds. If an asset loses value and no liability changes, equity absorbs the fall. That is the mechanism by which losses reach shareholders.

### 1.3 Our bank

One institution runs through this entire note. Every later section stands somewhere on this table.

| Assets | ₹ crore | Liabilities and equity | ₹ crore |
|---|---:|---|---:|
| Cash and balances with the RBI | 130 | Retail deposits | 900 |
| Investments | 520 | Wholesale deposits | 400 |
| Advances, net of allowance | 978 | Borrowings | 200 |
| Fixed and other assets | 72 | Other liabilities | 50 |
| — | — | Equity capital and reserves | 150 |
| **Total** | **1,700** | **Total** | **1,700** |

Detail to carry forward:

- The loan book is **₹1,000 crore gross**. The **allowance** against it is **₹22 crore**. The ₹978 crore shown is the net of the two.
- Investments are **₹400 crore government securities** and **₹120 crore corporate bonds**.
- There is **₹108 crore of undrawn commitments** — credit the bank has promised but the customer has not yet drawn. It is not on the balance sheet, and it still creates risk.
- The **RBI** is the Reserve Bank of India, the central bank and the prudential regulator.

**Trap — allowance, capital and cash are three different things.** The allowance is an accounting deduction from the loan book for losses already expected. Capital is the equity buffer for losses not yet expected. Cash is money available today to pay someone. A bank can be well provided, well capitalised and still fail because it has no cash on the day.

### 1.4 The journey

| Stage | Question | Section |
|---|---|---|
| Products | What do we hold and trade? | 2 |
| Credit risk | What can go wrong on the asset side? | 3 |
| Valuation and provisioning | What is it worth, what do we set aside? | 4 |
| Capital | What absorbs the losses we cannot predict? | 5 |
| Liquidity and funding | Can we pay people on time? | 6 |
| Rate risk | What do rate moves do to earnings and value? | 7 |
| FTP | Who inside the bank earned which slice? | 8 |
| Risk data | Where do the numbers come from? | 9 |
| Reporting | How are they proved and submitted? | 10 |
| Delivery | How is the machine built and changed? | 11 |

---

## 2. What the bank holds and trades

### 2.1 The book boundary

Every instrument sits in one of two books, and the choice decides everything downstream.

| | Banking book | Trading book |
|---|---|---|
| Intent | Hold to earn interest | Buy and sell for short-term gain |
| Typical contents | Loans, deposits, most investments | Actively traded securities and derivatives |
| Valuation | Amortised cost or similar | Market value, daily |
| Main risk measures | Credit risk, IRRBB | Market risk, VaR |

**Trap — the boundary is an intent decision made at inception, not a description of what happened later.** Reclassifying between books is heavily restricted, because a free choice would let a bank move a loss out of daily market valuation the moment it appeared.

### 2.2 Loans

A **loan** is money advanced now against a promise of repayment with interest.

Terms that matter throughout:

- **Principal** — the amount advanced
- **Tenor** — how long the loan runs; **maturity** is the date it ends
- **Drawn** — the amount actually taken; **undrawn** — the approved amount still available
- **Secured** — backed by specific assets the bank can claim on failure; **unsecured** — backed only by the promise
- **Amortising** — principal repays gradually; **bullet** — all principal repays at the end

### 2.3 Bonds

A **bond** is a loan that can be sold to someone else. Four features define it: who issues it, the **coupon** (the periodic interest rate), the **maturity**, and the **face value** repaid at the end.

Price and yield move in opposite directions. This is arithmetic, not sentiment: the future payments are fixed, so if buyers demand a higher return, the only thing that can adjust is the price they pay today.

$$
P = \sum_{t=1}^{n} \frac{C_t}{(1+y)^t} + \frac{F}{(1+y)^n}
$$

where:

- **P** — price today
- **C₍t₎** — coupon paid in period t
- **F** — face value repaid at maturity
- **y** — the market yield per period
- **n** — number of periods to maturity

**Clean price** excludes interest accrued since the last coupon. **Dirty price** includes it. Bonds are quoted clean and settled dirty.

### 2.4 Interest rate sensitivity

**Duration** measures how much a bond's price moves when yields move. **Modified duration** expresses it as a percentage price change per one percentage point of yield.

$$
\frac{\Delta P}{P} \approx -D_{\text{mod}} \times \Delta y
$$

where:

- **ΔP/P** — proportional change in price
- **D₍mod₎** — modified duration in years
- **Δy** — change in yield, as a decimal

**DV01** is the same idea in rupees: the change in value for a one basis point move. A **basis point** is one hundredth of a percentage point.

$$
DV01 = D_{\text{mod}} \times P \times 0.0001
$$

where:

- **D₍mod₎** — modified duration
- **P** — current value of the position
- **0.0001** — one basis point expressed as a decimal

Longer maturity and lower coupon both mean higher duration, so both mean more price movement per unit of yield change.

### 2.5 Credit spread

The **credit spread** is the extra yield demanded over a government bond of the same maturity, compensating for the chance the issuer fails.

$$
y_{\text{corporate}} = y_{\text{risk-free}} + s
$$

where:

- **y₍corporate₎** — yield on the corporate bond
- **y₍risk-free₎** — yield on the government bond of matching maturity
- **s** — credit spread

Spread widens, price falls. Same direction as yield, because spread is part of yield.

### 2.6 Equities

A **share** is ownership, not a promise to repay. There is no maturity and no contractual payment. A bank holds very little equity, because equity investments attract a punitive capital requirement.

### 2.7 Foreign exchange

Three shapes:

- **Spot** — exchange at today's rate, settling in a couple of days
- **Forward** — a rate agreed today for exchange on a future date
- **FX swap** — a spot exchange combined with a reversing forward

A forward rate is not a prediction. It is today's spot adjusted for the interest rate difference between the two currencies.

$$
F = S \times \frac{1 + r_d}{1 + r_f}
$$

where:

- **F** — forward rate
- **S** — spot rate, same quotation convention
- **r₍d₎** — domestic interest rate for the period
- **r₍f₎** — foreign interest rate for the same period

**Trap — a forward rate is not a forecast of future spot.** If it differed from the interest-rate-adjusted spot, a riskless profit would exist. The forward price is set by arbitrage, not by a view.

### 2.8 Derivatives

A **derivative** takes its value from something else — a rate, a price, an index.

| Instrument | What it is |
|---|---|
| Forward | Obligation to transact later at an agreed price, privately agreed |
| Future | The same, standardised, exchange-traded, margined daily |
| Swap | Exchange of two payment streams over an agreed term |
| Option | The right, not the obligation, to transact |

The **interest rate swap** is the one to actually know. One party pays a fixed rate, the other pays a floating rate, both calculated on an agreed **notional** amount, for an agreed term. Only the net difference changes hands each period. A bank uses it to convert fixed-rate exposure into floating or the reverse, which is why it reappears in the rate risk section.

**Trap — notional, market value and exposure are three different numbers.**

| Number | Meaning |
|---|---|
| Notional | The reference amount used to calculate payments. Never exchanged. |
| Market value | What the contract is worth today. Starts near zero, then moves. |
| Credit exposure | What could be lost if the counterparty fails — market value plus an allowance for future movement |

Quoting notional as exposure overstates risk by orders of magnitude.

### 2.9 Market risk measures

**Sensitivities** are first-order measures: how much value moves per unit move in the underlying. DV01 for rates, **delta** for options.

**Value at risk (VaR)** summarises a trading portfolio in one number: the loss that will not be exceeded over a stated holding period at a stated confidence level.

$$
P(\text{Loss} > VaR_\alpha) = 1 - \alpha
$$

where:

- **VaR₍α₎** — the value at risk at confidence level α
- **α** — the confidence level, typically 0.99
- **Loss** — portfolio loss over the stated holding period

Two things VaR does not tell you: how bad the tail beyond that confidence level gets, and how the estimate behaves when correlations break in a crisis. Both are why stress testing exists alongside it.

---

## 3. What can go wrong on the asset side

### 3.1 Default

**Credit risk** is the risk that a borrower fails to pay as agreed. **Default** is the formal recognition of that failure — typically when payment is more than 90 days overdue, or when the bank judges repayment unlikely without recourse to security.

Three inputs describe it, and they answer three different questions.

| Input | Question it answers | Units |
|---|---|---|
| **PD** — probability of default | How likely is failure? | A probability, over a stated horizon |
| **LGD** — loss given default | If it fails, what fraction do we lose? | A percentage of exposure |
| **EAD** — exposure at default | How much is outstanding when it fails? | Rupees |

### 3.2 Expected loss

$$
EL = PD \times LGD \times EAD
$$

where:

- **EL** — expected loss, in rupees
- **PD** — probability of default over the horizon
- **LGD** — loss fraction if default occurs
- **EAD** — exposure at the time of default

Expected loss is the average outcome. It is a cost of doing business, priced into the interest rate and covered by provisions. It is not a surprise.

**Unexpected loss** is the amount by which a bad year exceeds that average. It cannot be provided for, because it is by definition not expected. It is covered by capital.

That split is the organising logic of the next two sections: **expected loss is provisioned, unexpected loss is capitalised.**

**Trap — collateral does not make a weak borrower strong.** Security improves recovery after failure, so it lowers LGD. It does not change how likely the borrower is to fail, so it does not lower PD.

### 3.3 Probability of default

PD is estimated for a stated horizon, usually one year. It comes from a rating or a scorecard.

- **Through-the-cycle** PD is a long-run average that deliberately ignores where we are in the economic cycle. It is used for capital, to stop requirements swinging violently.
- **Point-in-time** PD reflects current conditions. It is used for accounting provisions, which are supposed to reflect the present.

**Trap — a PD is meaningless without its horizon.** A 2% one-year PD and a 2% lifetime PD describe completely different borrowers.

### 3.4 Loss given default

$$
LGD = 1 - \frac{PV(\text{net recoveries})}{EAD}
$$

where:

- **PV(net recoveries)** — recovery cash flows, net of costs, discounted to the measurement date
- **EAD** — exposure at default on the same basis

Three things reduce recovery below the headline value of the security: the **haircut** applied to its assessed value, the **costs** of enforcement, and the **delay** before cash arrives, which discounting converts into lost value.

**Trap — collateral value is not recovery value.** A property valued at ₹10 crore may recover far less after haircut, legal costs and two years of delay.

### 3.5 Exposure at default

For a term loan with no undrawn portion, EAD is close to the outstanding balance. For anything with an available limit, it is not — borrowers in trouble draw what remains.

$$
EAD = \text{Drawn} + CCF \times \text{Undrawn}
$$

where:

- **Drawn** — the amount currently outstanding
- **Undrawn** — the approved limit not yet used
- **CCF** — credit conversion factor, the fraction of the undrawn amount assumed to be drawn by the time of default

Our bank's ₹108 crore of undrawn commitments is exactly this exposure. It is off the balance sheet and firmly inside the risk numbers.

### 3.6 Ratings and migration

A **rating** is a grade summarising a borrower's creditworthiness, each grade mapped to a PD. **Migration** is movement between grades over time, usually presented as a matrix showing the probability of moving from each grade to each other grade within a year.

Migration matters because deterioration short of default still costs money: it raises PD, which raises the provision, and it raises the risk weight, which raises the capital requirement. Loss arrives long before default does.

### 3.7 Portfolio risk

Individual expected losses add up. Risk does not.

**Concentration** is the accumulation of exposure to a single borrower, group, sector or geography. It matters because defaults are **correlated** — borrowers exposed to the same shock fail together, and it is simultaneous failure that exhausts capital.

Concentration is monitored through limits: single borrower, group, sector, and largest-exposure measures.

**Trap — a diversified-looking book can be concentrated in its drivers.** Different borrowers in different cities are still one exposure if they all depend on the same commodity price.

### 3.8 Credit risk mitigation

| Technique | What it does |
|---|---|
| Collateral | Gives a claim on specific assets — reduces LGD |
| Guarantee | Substitutes a stronger party's obligation — can substitute PD |
| Netting | Offsets amounts owed both ways with one counterparty — reduces EAD |
| Covenants | Contractual conditions triggering early action — reduces the time spent deteriorating |

Mitigation only counts if it is legally enforceable, properly documented and correctly valued. Recognition in capital and provisions depends on that evidence existing, not on the arrangement being described in a credit paper.

---

## 4. What the assets are worth and what is provided against them

### 4.1 Effective interest rate

When a loan is written, its yield is locked in. The **effective interest rate (EIR)** is the rate that discounts all expected cash flows back to the amount initially advanced, including fees and costs.

$$
\text{Initial carrying amount} = \sum_{t=1}^{n} \frac{CF_t}{(1 + EIR)^t}
$$

where:

- **CF₍t₎** — expected cash flow in period t
- **EIR** — effective interest rate per period
- **n** — number of periods

EIR then drives interest income and the carrying amount for the life of the loan.

**Trap — EIR is not the market yield.** EIR is fixed at origination and stays fixed. Market yield moves daily. A banking-book loan does not reprice because market yields moved; a traded bond does. Confusing the two is the most common valuation error in this territory.

### 4.2 Amortised cost

$$
\text{Carrying amount}_t = \text{Carrying amount}_{t-1} + \text{Interest accrued} - \text{Cash received} - \text{Allowance movement}
$$

where:

- **Interest accrued** — EIR applied to the opening carrying amount
- **Cash received** — actual payments in the period
- **Allowance movement** — change in the impairment allowance

### 4.3 Expected credit loss

**Expected credit loss (ECL)** is the accounting provision for credit losses. It is forward-looking: losses are recognised before they occur, not when they crystallise.

$$
ECL = \sum_{t} PD_t \times LGD_t \times EAD_t \times DF_t
$$

where:

- **PD₍t₎** — probability of default in period t
- **LGD₍t₎** — loss fraction if default occurs in that period
- **EAD₍t₎** — expected exposure at that time
- **DF₍t₎** — discount factor bringing the loss back to today

### 4.4 The three stages

| Stage | Condition | Loss measured over |
|---|---|---|
| 1 | Performing, no significant deterioration | Defaults occurring in the next 12 months |
| 2 | Significant increase in credit risk since origination | The whole remaining life |
| 3 | Credit-impaired | The whole remaining life, with interest on the net amount |

**Significant increase in credit risk (SICR)** is the trigger for Stage 2. It is assessed against the risk **at origination**, not against an absolute threshold. A loan written as high-risk that stays high-risk has not deteriorated. A loan written as very safe that becomes merely safe may have.

**Trap — Stage 1 limits the default window, not the loss.** It counts defaults that occur within 12 months, but for each of those defaults it measures the full loss, which may run for years. It is a 12-month window on defaults, not a 12-month cap on losses.

The move from Stage 1 to Stage 2 is the single largest driver of provision volatility, because the measurement horizon jumps from twelve months to the full remaining life in one step.

### 4.5 The provision walk

Two different things are constantly confused:

- **Allowance** is a **stock** — the balance sitting against the loan book at a date. Ours is ₹22 crore.
- **Impairment expense** is a **flow** — the charge passing through profit in a period.

$$
\text{Closing allowance} = \text{Opening allowance} + \text{Charge} - \text{Write-offs} + \text{Recoveries} \pm \text{Other movements}
$$

where:

- **Charge** — the amount recognised in profit for the period
- **Write-offs** — amounts removed as unrecoverable, which reduce both loan and allowance
- **Recoveries** — cash received on amounts previously written off

A **write-off** does not create a loss. The loss was recognised when the allowance was raised. The write-off removes both the gross asset and the allowance, leaving the net figure unchanged. This surprises people every time.

### 4.6 IRAC — the Indian prudential classification

The RBI's **income recognition and asset classification (IRAC)** norms run alongside ECL, on a different basis.

| IRAC class | Broad condition |
|---|---|
| Standard | Performing |
| Sub-standard | Non-performing up to 12 months |
| Doubtful | Non-performing beyond that |
| Loss | Identified as unrecoverable |

A **non-performing asset (NPA)** is broadly one overdue beyond 90 days. Once an asset is an NPA, interest stops being recognised in income unless received.

IRAC is rule-driven and mainly days-past-due. ECL is estimate-driven and forward-looking. They produce different numbers from the same loan and both are reported.

**Trap — IRAC Standard does not mean ECL Stage 1.** A loan can be perfectly current on payments, and therefore Standard, while its credit risk has increased significantly enough for Stage 2. Days past due is one SICR indicator among several, not the definition.

---

## 5. The capital behind the assets

### 5.1 What capital is

Capital is not a reserve of cash. It is the portion of the balance sheet funded by owners rather than creditors, and its function is to absorb losses without the bank failing to pay anyone.

Our bank has ₹150 crore of equity capital and reserves. If ₹50 crore of loans turn out to be worthless, equity falls to ₹100 crore and every depositor is still paid. That is what capital does.

**Common equity tier 1 (CET1)** is the highest quality: paid-up equity plus retained earnings, less regulatory deductions. **Tier 1** adds certain perpetual instruments. **Tier 2** is subordinated and lower quality.

### 5.2 Risk-weighted assets

Capital is measured against **risk-weighted assets (RWA)** rather than total assets, because ₹100 crore of government securities and ₹100 crore of unsecured personal loans are not the same risk.

$$
RWA = \sum_i E_i \times w_i
$$

where:

- **E₍i₎** — exposure amount of item i, after eligible mitigation
- **w₍i₎** — the risk weight applicable to it

$$
\text{Capital ratio} = \frac{\text{Eligible capital}}{RWA}
$$

where:

- **Eligible capital** — capital of the relevant tier, after deductions
- **RWA** — risk-weighted assets across credit, market and operational risk

### 5.3 The two approaches

| | Standardised | Internal ratings based |
|---|---|---|
| Risk weights | Prescribed by the regulator | Derived from the bank's own PD, LGD and EAD estimates |
| Data demand | Moderate | Heavy — long histories, validated models |
| Supervisory approval | Not required for weights | Required, with ongoing validation |

### 5.4 The leverage ratio

$$
\text{Leverage ratio} = \frac{\text{Tier 1 capital}}{\text{Total exposure measure}}
$$

where:

- **Tier 1 capital** — as defined above
- **Total exposure measure** — on-balance-sheet assets plus off-balance-sheet and derivative exposure, with no risk weighting

It exists as a backstop. If risk weights are wrong or gamed, an unweighted measure still constrains the balance sheet.

### 5.5 Why deterioration hurts twice

This is the connection to carry forward. When a borrower deteriorates:

1. The risk weight rises, so **RWA increases** — the denominator grows.
2. The provision rises, the charge hits profit, so **capital falls** — the numerator shrinks.

The capital ratio falls from both ends at once, and it does so before any default occurs.

**Trap — provisions and capital are not alternatives.** They cover different losses. Raising a provision does not reduce the capital requirement for the same exposure; it reduces capital itself.

---

## 6. How the bank funds itself and meets payments

### 6.1 The problem

Our bank's assets mature over years. Its deposits are repayable in days. That mismatch is not a defect — it is the business. **Maturity transformation** is what a bank is for.

It is also the thing that kills banks, and quickly. Profit is not cash. A bank can be solvent, well provided and well capitalised, and still fail on a Tuesday because it could not fund an outflow.

### 6.2 Contractual versus behavioural

This is the hinge concept of the whole document.

- **Contractual maturity** is what the document says. A savings deposit is repayable on demand.
- **Behavioural maturity** is what actually happens. Most of that deposit stays for years.

The same asymmetry runs the other way: a five-year loan may repay early, because borrowers **prepay**.

Every treasury number depends on which one you use, and behavioural assumptions are where the real analytical work sits.

**Trap — a core percentage is not proof of a behavioural life.** Saying 70% of savings balances are stable is one claim. Saying that stable portion behaves like five-year money is a second, separate claim. Both need evidence, and aggregate stability never means individual deposits stay.

### 6.3 The maturity ladder

The underlying picture behind every liquidity ratio. Expected cash inflows and outflows are placed into time buckets — overnight, up to 7 days, up to 30 days, and onward — and the gap in each bucket is examined.

$$
\text{Gap}_t = \text{Inflows}_t - \text{Outflows}_t
$$

where:

- **Inflows₍t₎** — expected cash receipts in bucket t
- **Outflows₍t₎** — expected cash payments in bucket t

Cumulative gaps matter more than individual ones, because a surplus in one bucket can fund a deficit in the next.

### 6.4 The liquidity coverage ratio

The **liquidity coverage ratio (LCR)** asks one question: if the next thirty days went badly, would we survive them on our own liquid assets?

$$
LCR = \frac{HQLA}{\text{Net cash outflows over 30 days}}
$$

where:

- **HQLA** — high-quality liquid assets, valued after haircuts
- **Net cash outflows** — stressed outflows less capped stressed inflows, over a 30-day stress

**High-quality liquid assets (HQLA)** are assets that can be turned into cash quickly, in size, at little loss. Cash and government securities dominate. **Level 1** assets are the most liquid and count in full. **Level 2** assets count after haircuts and subject to caps.

$$
\text{Net outflows} = \text{Stressed outflows} - \min(\text{Stressed inflows},\ 0.75 \times \text{Stressed outflows})
$$

where:

- **Stressed outflows** — balances multiplied by prescribed run-off rates
- **Stressed inflows** — expected receipts multiplied by prescribed inflow rates
- **0.75** — the cap ensuring at least 25% of outflows are met from HQLA

The outflow rates are prescribed, not estimated. Retail deposits run off more slowly than wholesale. Operational balances more slowly than non-operational. Undrawn commitments carry a draw-down assumption — our ₹108 crore appears here too.

The inflow cap is the part people forget: you cannot assume everyone pays you on time in a crisis while assuming your own depositors flee.

**Trap — LCR can rise while HQLA falls in rupees.** It is a ratio. Shrinking the outflow side lifts it just as effectively as buying liquid assets. Always read the numerator and the denominator together.

### 6.5 The net stable funding ratio

The **net stable funding ratio (NSFR)** asks a structural question over one year: are long-lived assets funded by durable money?

$$
NSFR = \frac{ASF}{RSF}
$$

where:

- **ASF** — available stable funding, the supply of durable funding
- **RSF** — required stable funding, the amount the asset side needs

$$
ASF = \sum_i L_i \times a_i
$$

where:

- **L₍i₎** — liability or capital amount in category i
- **a₍i₎** — the ASF factor for that category, higher for more durable funding

$$
RSF = \sum_j A_j \times r_j
$$

where:

- **A₍j₎** — asset or off-balance-sheet amount in category j
- **r₍j₎** — the RSF factor, higher for assets that are long or illiquid

Equity gets the highest ASF factor. Retail deposits score well. Short wholesale funding scores poorly. On the asset side, cash and HQLA need little stable funding; long illiquid loans need a lot.

| Ratio | Horizon | Nature of the question |
|---|---|---|
| LCR | 30 days | Survival under acute stress |
| NSFR | 1 year | Structural soundness of the funding model |

Both must hold. They are not substitutes — one is about surviving a run, the other about not building a fragile balance sheet in the first place.

### 6.6 Other liquidity controls

- **Intraday liquidity** — the cash needed at specific moments during the day to settle payments. A bank can end the day comfortably and still fail a settlement at 11 a.m.
- **Encumbrance** — assets pledged as security are not available for anything else. Pledged HQLA is not HQLA.
- **Concentration of funding** — reliance on a few large depositors or a single market is itself a risk.
- **CRR and SLR** — Indian requirements. The **cash reserve ratio (CRR)** is a proportion of deposits held with the RBI. The **statutory liquidity ratio (SLR)** is a proportion held in prescribed liquid assets, largely government securities. Our ₹400 crore of government securities sits substantially here.

**Trap — SLR securities are not automatically free HQLA.** Assets required to meet another obligation, or already pledged, cannot simultaneously be counted as available.

---

## 7. What funding does to earnings and economic value

**Interest rate risk in the banking book (IRRBB)** is the risk that rate movements hurt the bank through its banking-book assets and liabilities. **Asset and liability management (ALM)** is the function that manages it.

There are two views, measuring different things over different horizons. Neither replaces the other.

### 7.1 The earnings view

**Net interest income (NII)** is the margin the bank earns.

$$
NII = \text{Interest income} - \text{Interest expense}
$$

where:

- **Interest income** — interest recognised on assets in the period
- **Interest expense** — interest cost of funding for the same period

The exposure comes from timing. **Repricing** is when an instrument's rate resets — which is not the same as when it matures. A ten-year loan on a floating rate reprices every three months.

$$
G = RSA - RSL
$$

where:

- **G** — repricing gap for the chosen time bucket
- **RSA** — rate-sensitive assets repricing within that bucket
- **RSL** — rate-sensitive liabilities repricing within that bucket

$$
\Delta NII \approx G \times \Delta r
$$

where:

- **ΔNII** — approximate change in net interest income over the horizon
- **G** — repricing gap
- **Δr** — assumed rate change, as a decimal

| Gap | Rates rise | Rates fall |
|---|---|---|
| Positive — more assets reprice | NII rises | NII falls |
| Negative — more liabilities reprice | NII falls | NII rises |

The approximation ignores timing within the bucket, balance changes, and **pass-through** — the extent to which the bank actually moves deposit rates when policy rates move. Pass-through is a behavioural assumption, and it is often the largest source of error.

**Trap — maturity and repricing are different dates.** Bucketing a floating-rate loan by its maturity instead of its next reset produces a gap that is simply wrong.

### 7.2 The economic value view

**Economic value of equity (EVE)** measures the present value of everything, not this year's earnings.

$$
EVE = PV(\text{Assets}) - PV(\text{Liabilities})
$$

where:

- **PV(Assets)** — present value of all asset cash flows
- **PV(Liabilities)** — present value of all liability cash flows

Rates rise, present values fall, and they fall by more on the side with longer duration. If assets are longer than liabilities, rising rates reduce EVE.

| | NII sensitivity | EVE sensitivity |
|---|---|---|
| Measures | Earnings | Value |
| Horizon | Short, usually 12 months | Full remaining life |
| Misses | Long-dated risk beyond the horizon | Near-term earnings pressure |

A balance sheet can look comfortable on earnings and be badly exposed on value, because the damage sits beyond the earnings window. Reporting both is the point.

**Trap — EVE is not a market valuation of the bank.** It is a cash-flow present value under stated assumptions, and it is only as good as the behavioural inputs feeding it.

---

## 8. How the spread is split internally

### 8.1 The problem FTP solves

The branch takes a deposit at 5%. The corporate desk lends at 9%. Who earned the 4%?

Without a mechanism, both claim it, and neither is accountable for the mismatch risk sitting between them. **Funds transfer pricing (FTP)** is that mechanism.

### 8.2 How it works

Every asset is **charged** an internal rate for the funding it consumes. Every liability is **credited** an internal rate for the funding it supplies. Treasury sits in the middle, receiving all charges and paying all credits, and holds the mismatch.

$$
\text{Lending margin} = \text{Customer rate} - \text{FTP charge}
$$

$$
\text{Deposit margin} = \text{FTP credit} - \text{Customer rate}
$$

$$
\text{Treasury margin} = \text{Total spread} - \text{Lending margin} - \text{Deposit margin}
$$

where:

- **Customer rate** — the rate actually contracted with the customer
- **FTP charge / credit** — the internal rate applied to the asset or liability
- **Total spread** — the bank's overall interest margin

The three add to the total. Nothing is created or destroyed — FTP allocates, it does not generate.

| Margin | Owner | What it rewards |
|---|---|---|
| Lending margin | The asset business | Pricing and credit selection |
| Deposit margin | The liability business | Raising durable funding |
| Mismatch margin | Treasury | Bearing the maturity and rate mismatch |

### 8.3 The curve

The **transfer pricing curve** is a term structure of internal rates — one rate for each tenor. A product is priced at the point on the curve that matches its **behavioural** life, not its contractual one.

That single choice is why FTP cannot be separated from liquidity work. The behavioural life assumed for a savings book determines the credit the branch receives, and the same assumption determines the outflow treatment in LCR.

### 8.4 The components

| Component | What it charges for |
|---|---|
| Base rate for the tenor | The cost of funds for that maturity |
| Term liquidity premium | The extra cost of funding long rather than short |
| Contingent liquidity charge | Standing ready to fund undrawn commitments |
| Optionality charge | The customer's right to prepay or withdraw early |

$$
\text{FTP rate} = r_{\text{base}}(t) + \text{TLP}(t) + \text{CLC} + \text{OC}
$$

where:

- **r₍base₎(t)** — base transfer rate for behavioural tenor t
- **TLP(t)** — term liquidity premium for that tenor
- **CLC** — contingent liquidity charge for committed but undrawn facilities
- **OC** — optionality charge for prepayment or early withdrawal rights

The contingent liquidity charge is what makes our ₹108 crore of undrawn commitments cost something before anyone draws it. Without it, promising credit looks free.

### 8.5 Governance

Internal charges and credits must net to zero across the bank. If they do not, profit is being manufactured or destroyed by the allocation mechanism, and someone's performance figures are wrong.

Curve changes are approved, dated and applied consistently. Rates are usually locked at origination for fixed-rate products, so that a later curve move does not retrospectively rewrite a business unit's margin.

**Trap — FTP is not a cost allocation.** It is a price for a real economic service: funding, liquidity and optionality. Treating it as an overhead invites gaming and destroys the incentive it was built to create.

---

## 9. Where the numbers come from

Everything so far has been a measure. This section is about the machinery that produces it, and it is where the business analyst actually lives.

### 9.1 The chain

Every reported number travels the same path:

**Source system → extract → staging → transformation → calculation → reporting layer → return**

A number is only as good as the weakest link, and the analyst's job is to know which link failed.

### 9.2 BCBS 239

**BCBS 239** is the Basel Committee's set of principles for risk data aggregation and reporting. Stripped to essentials, it requires that a bank can produce risk numbers that are **accurate**, **complete**, **timely** and **adaptable** — and that it can prove all four.

The proof requirement is the hard part. It is not enough for the number to be right. The bank must be able to demonstrate why it is right.

**Lineage** is that demonstration: the ability to walk a reported figure backwards through every transformation to the source records it came from. Without lineage, a challenge to a number cannot be answered, only asserted against.

### 9.3 The three kinds of wrong

When a number is wrong, it is wrong in one of three ways, and they belong to different people.

| Kind | What happened | Who owns the fix |
|---|---|---|
| Source defect | The data was captured wrong at origin | The originating business |
| Transformation defect | Correct data was mangled in the pipeline | Technology |
| Definition defect | Everyone applied a different meaning to the same field | The data owner, through policy |

The diagnostic question is always the same: **where is the first incorrect hand-off?** Everything downstream of that point is a symptom, and fixing symptoms produces a reconciliation that passes while the number stays wrong.

Definition defects are the most expensive, because nothing is technically broken. Two teams reporting different exposure figures may both be running correct code against a term that was never agreed.

### 9.4 Data quality dimensions

| Dimension | Question |
|---|---|
| Completeness | Is every record and field present? |
| Accuracy | Does the value match reality? |
| Validity | Is it a permitted value in a permitted format? |
| Consistency | Does it agree with the same fact held elsewhere? |
| Timeliness | Did it arrive in time for the calculation? |
| Uniqueness | Is the same thing recorded once, not twice? |

A **data quality rule** is a test against one of these, applied at a defined point, with a threshold and a named owner.

**Trap — a data quality rule exists to protect a named output, not to improve data in the abstract.** "Maturity date must be present" is a weak rule. "Maturity date must be present, because it determines the LCR bucket and the FTP tenor, and a missing value silently defaults the record to the shortest bucket" is a rule someone will fund and fix.

### 9.5 Controls

- **Control totals** — count and sum records at each stage and compare. The cheapest control that exists, and it catches the most common failure: silent record loss between stages.
- **Reconciliation to the general ledger** — risk figures must tie to the accounting books.
- **Exception queues** — failed records go somewhere visible and get worked. They are never dropped silently.
- **Suspense treatment** — records that cannot be classified are held in a named bucket, reported, and cleared. An unclassified record must never vanish.
- **Golden source** — for each critical field, one system is designated authoritative. Without this, two correct answers exist and neither can be defended.

**Trap — a reconciliation that always passes is usually not a control.** If it nets differences, tolerates unexplained variances, or reconciles a feed to itself, it proves nothing.

### 9.6 The data layer

Risk and treasury data is relational, and the analyst is expected to interrogate it directly.

| Structure | What it holds |
|---|---|
| Exposure or position table | One row per facility or instrument, per date |
| Counterparty table | One row per borrower, with rating and group linkage |
| Collateral table | Security held, with valuations and linkage to facilities |
| Cash flow table | Dated contractual and behavioural cash flows |
| Reference tables | Product codes, currencies, rate curves, mappings |

The operations that matter in practice:

- **Joins** — linking exposures to counterparties, collateral and reference data. A wrong join type is the most common cause of a number being silently too large or too small.
- **Aggregation** — grouping and summing to portfolio, sector or bucket level.
- **Filtering by date** — almost every risk table is dated, and picking the wrong as-of date produces a plausible, wrong answer.
- **Null handling** — a missing value is not zero, and treating it as zero is how missing data becomes a wrong number instead of an exception.

**Trap — an inner join silently drops exposures.** If a facility has no matching counterparty record, an inner join removes it from the total. The report balances, the sum is short, and nothing raises an error. Left joins plus a null check are how completeness is preserved and the gap made visible.

### 9.7 Models

Several numbers in this document are model outputs: PD, LGD, EAD, ECL, behavioural maturity, prepayment rates, VaR.

A model has three parts: **inputs**, **methodology**, **assumptions**. Model risk is the risk of loss from any of the three being wrong or wrongly applied.

- **Validation** is independent review before use and periodically after.
- **Back-testing** compares what the model predicted with what subsequently happened.
- **Benchmarking** compares it against an alternative approach.
- **Overlays** are management adjustments applied on top of a model output, used when the model cannot capture current conditions. They must be documented, quantified and governed, because an undocumented overlay is indistinguishable from an arbitrary number.

**Trap — a model's outputs inherit the quality of the data feeding it.** A validated methodology running on incomplete exposure data produces a precisely calculated wrong answer, and the validation will not catch it.

---

## 10. How the numbers are proved and submitted

### 10.1 The reporting estate

| Report | Audience | Broad frequency |
|---|---|---|
| LCR return | RBI | Monthly, with daily internal monitoring |
| NSFR return | RBI | Quarterly |
| Structural liquidity statement | RBI | Periodic |
| Form A — CRR and SLR position | RBI | Fortnightly |
| Large exposures and concentration | RBI | Periodic |
| Provisioning and asset classification | RBI | Quarterly |
| ALCO pack | Internal — the asset-liability committee | Monthly |

The **ALCO** — asset-liability committee — is the internal body that sets and monitors balance sheet risk appetite. Its pack is internal, and in practice it attracts the most senior attention, so the analyst treats it with the same rigour as a regulatory return.

### 10.2 One exposure, several returns

A single ₹50 crore corporate loan appears in the liquidity return as a dated inflow, in the capital return as a risk-weighted exposure, in the provisioning return with its classification and allowance, and in the large exposure return against the group limit.

Each return applies a different basis, so the figures differ legitimately. What must be true is that they all trace to the same underlying record. When two returns disagree in a way that cannot be explained by their bases, the difference is a defect, not a presentation choice.

**Trap — consistency does not mean identical numbers.** It means every difference is explainable by a documented difference in basis.

### 10.3 Reconciliation and movement analysis

Two controls, constantly confused, both required.

| | Reconciliation | Movement analysis |
|---|---|---|
| Question | Does this agree with an independent source? | Why is this different from last period? |
| Compares | Report against the general ledger or source | This period against the prior period |
| Failure means | The number may be wrong | The number may be right and unexplained |

A number that reconciles but cannot be explained is not yet defensible. A movement of ₹14 crore in the allowance must decompose into new lending, stage migration, changes in inputs, write-offs and recoveries. If a residual remains, something is unidentified — and the residual is where errors hide.

### 10.4 Ownership

Every reported number has a named owner accountable for it. Not the team that runs the process — a person who can explain the figure, defend the assumptions, and authorise a change.

Where ownership is vague, three failures follow: no one challenges the number, no one funds the data fix, and no one can answer a supervisory question without a week of archaeology.

### 10.5 Submission discipline

- **As-of date** — the position date the return describes
- **Submission date** — when it must reach the regulator
- **Cut-off** — the point after which late data goes into the next cycle, not this one
- **Restatement** — the defined process for correcting a submitted figure, including notification

**Trap — the calculation is rarely the binding constraint.** The timetable is. Data arriving after cut-off, a late feed, or an unresolved exception queue causes more late and wrong submissions than any formula.
---

## 11. How the reporting machine is built and changed

This section is the job description. Everything before it is the subject matter the job is about.

### 11.1 The shape of the work

A treasury or credit risk reporting workstream is almost always one of four things:

1. A **new return** the regulator has introduced
2. A **changed definition** in an existing return
3. A **new source** feeding an existing calculation
4. A **remediation** — a number is wrong and must be fixed at its cause

All four run the same sequence.

### 11.2 The sequence

| Stage | What it produces | Signed off by |
|---|---|---|
| Requirements | What the number must be and why | Number owner and risk |
| Source assessment | Whether the data can support it | Data owners and technology |
| Mapping specification | Field-by-field rules from source to target | Technology, risk, owner |
| Build | The pipeline and calculation | Technology |
| Test | Evidence the output is correct | Business and technology |
| Parallel run | Old and new producing side by side | Number owner |
| Cutover | The switch, with rollback defined | Governance forum |

### 11.3 Requirements

A requirement for a reported number states four things: the **definition** (what is being measured), the **population** (which records are in and out), the **basis** (contractual or behavioural, gross or net, which date), and the **treatment of edge cases**.

Edge cases are where reporting projects fail. Undrawn commitments, pledged assets, intragroup balances, foreign currency positions, restructured loans, off-balance-sheet items — each has a defensible answer and none has an obvious one.

**Trap — ambiguity is discovered in testing, not in build.** A specification saying "include corporate exposures" without defining what counts as corporate will be built two different ways by two developers, and both will pass a review that asks only whether the code matches the spec.

### 11.4 Source assessment

Before accepting a feed, establish:

| Question | Why it matters |
|---|---|
| Is it complete? | A partial feed produces a plausible, understated number |
| Is it timely? | Data after cut-off is useless regardless of quality |
| Is it granular enough? | Aggregated data cannot be re-bucketed later |
| Is it authoritative? | If it is a copy, the original may move without it |
| How does it handle change? | Late corrections, backdated amendments, reversals |

Granularity is the one that cannot be fixed afterwards. If a feed arrives pre-summed, no downstream work recovers the detail needed to bucket it differently when a definition changes.

### 11.5 Mapping specification

Field by field: **source field → transformation rule → target field**, plus defaults, permitted values, and what happens when the rule cannot be applied.

That last column is the one that gets skipped and the one that matters. "What happens when this is null" must have a written answer — reject to an exception queue, apply a stated default, or fail the run. Left unanswered, the pipeline chooses silently, and silence becomes a wrong number.

### 11.6 The pipeline

**ETL — extract, transform, load** — is the movement of data from source to reporting layer.

| Layer | What it physically is |
|---|---|
| Extract | A copy of source data, unchanged, timestamped |
| Staging | The raw copy held for validation and reconciliation to source |
| Transform | Rules applied — mapping, enrichment, derivation, bucketing |
| Calculation | The measure computed from transformed data |
| Reporting layer | The presented figures and the store behind the return |

Keeping the raw extract is what makes investigation possible. Transforming on arrival destroys the evidence that would show whether a defect was source or transformation.

### 11.7 Testing

| Stage | What it proves |
|---|---|
| Unit | One rule behaves as specified |
| Integration | Stages hand over correctly between systems |
| System | End-to-end output is correct for known inputs |
| User acceptance | The business agrees this is the number it asked for |
| Regression | Existing correct outputs did not break |

**Expected results are written before the test is run.** Otherwise the test documents whatever the system produced, which is not a test but a transcript.

Test data must include the awkward cases: the null, the backdated amendment, the record at a bucket boundary, the negative balance, the foreign currency item, the record that fails a data quality rule. A pack of clean records proves only that the happy path works, and the happy path was never the risk.

### 11.8 Parallel run and cutover

**Parallel run**: the old process and the new one produce the same number, for the same date, side by side.

Every difference must be **explained**, not netted. A total that matches while components offset each other is two errors, not a pass.

Cutover requires the parallel run signed off by the number owner, a dated switch with a named decision-maker, a rollback plan that is actually executable, and heightened review of the first live submission.

### 11.9 Dependencies

What actually delays this work:

- **Upstream data** — a source system change that has not happened yet
- **Definitional sign-off** — an edge case awaiting a policy decision
- **Environment and access** — production-like test data arriving late
- **Regulatory timing** — a submission date that will not move
- **Competing change** — another project altering the same feed in the same window

The last is the most commonly missed. Two projects changing one source in parallel will each test successfully in isolation and break together in production.

---

## 12. The connections that make this one subject

Each of these is one fact appearing in several places. They are the links that separate someone who has read about the subject from someone who has worked in it.

**1. One behavioural assumption, three consequences.** What you assume about how long deposits stay drives the FTP credit the branch receives, the outflow rate in the LCR, and the repricing bucket in EVE. One assumption, three numbers, three owners — each still applying its own calculation rules on top.

**2. One exposure record, several measures.** The same loan produces an ECL provision, a risk-weighted asset, a dated liquidity inflow and a line in a large exposure return. Different bases, legitimately different figures, one underlying record they must all trace to.

**3. Deterioration hits capital from both ends.** A downgrade raises RWA and raises the provision. The denominator grows, the numerator shrinks, and it happens before any default.

**4. The book boundary decides everything downstream.** Banking or trading determines the valuation basis, the risk measure, the capital treatment and the return it lands in. Set at inception, rarely changeable.

**5. A missing field breaks a named number.** Maturity date missing means the LCR bucket is wrong and the FTP tenor is wrong. That is why the data quality rule exists, and it should be written that way.

**6. FTP and NSFR see the same deposit differently.** FTP prices its funding value; NSFR weights its stability. Same liability, two questions.

**7. Provisions and capital are not alternatives.** Provisions cover expected loss, capital covers unexpected loss. Raising one does not remove the need for the other.

**8. The allowance is a stock, the charge is a flow.** The walk between them is what must be explained, and the unexplained residual is where the error hides.

---

## 13. One-page compression

1. Assets = Liabilities + Equity. Losses eat equity.
2. Allowance, capital and cash are three different things.
3. Expected loss is provisioned. Unexpected loss is capitalised.
4. EL = PD × LGD × EAD — three inputs answering three different questions.
5. Collateral lowers LGD, not PD.
6. Collateral value is not recovery value — haircut, costs, delay.
7. EAD includes undrawn limits, because distressed borrowers draw them.
8. EIR is fixed at origination; market yield moves daily. Not the same rate.
9. Stage 1 limits the default window to 12 months, not the losses to 12 months.
10. SICR is measured against risk at origination, not an absolute level.
11. IRAC Standard does not mean ECL Stage 1.
12. A write-off does not create a loss; it removes an asset already provided against.
13. Deterioration raises RWA and cuts capital at the same time.
14. Yield up, price down. Spread up, price down. Same direction.
15. Notional is not exposure. Market value is not exposure either.
16. Maturity and repricing are different dates.
17. Contractual and behavioural life are different, and behavioural is what gets used.
18. A core percentage is not proof of a behavioural life.
19. LCR is 30 days under stress. NSFR is one year and structural.
20. LCR inflows are capped — you cannot assume you are paid while assuming you are run on.
21. LCR can rise while HQLA falls in rupees. Read both halves.
22. Pledged assets are not available assets.
23. NII is earnings over a year; EVE is value over the whole life. Both, always.
24. FTP allocates the spread into three margins; it does not create profit.
25. FTP prices at the behavioural tenor, not the contractual one.
26. Undrawn commitments cost something before they are drawn — the contingent liquidity charge.
27. Wrong is source, transformation or definition. Find the first incorrect hand-off.
28. A data quality rule protects a named reported number.
29. Reconciliation asks "does it agree". Movement analysis asks "why did it change". Both.
30. An inner join silently drops exposures and the report still balances.
31. Expected results are written before the test runs.
32. In a parallel run, explain every difference — never net them.
33. Granularity lost at source cannot be recovered downstream.
34. Every reported number has a named human owner.

---

## 14. Acronyms

| Acronym | Expansion |
|---|---|
| ALCO | Asset-liability committee |
| ALM | Asset and liability management |
| ASF | Available stable funding |
| BCBS | Basel Committee on Banking Supervision |
| CCF | Credit conversion factor |
| CET1 | Common equity tier 1 |
| CRR | Cash reserve ratio |
| DV01 | Rupee value of one basis point |
| EAD | Exposure at default |
| ECL | Expected credit loss |
| EIR | Effective interest rate |
| EL | Expected loss |
| ETL | Extract, transform, load |
| EVE | Economic value of equity |
| FTP | Funds transfer pricing |
| HQLA | High-quality liquid assets |
| IRAC | Income recognition and asset classification |
| IRRBB | Interest rate risk in the banking book |
| LCR | Liquidity coverage ratio |
| LGD | Loss given default |
| NII | Net interest income |
| NPA | Non-performing asset |
| NSFR | Net stable funding ratio |
| PD | Probability of default |
| RBI | Reserve Bank of India |
| RSA | Rate-sensitive assets |
| RSF | Required stable funding |
| RSL | Rate-sensitive liabilities |
| RWA | Risk-weighted assets |
| SICR | Significant increase in credit risk |
| SLR | Statutory liquidity ratio |
| UL | Unexpected loss |
| VaR | Value at risk |
