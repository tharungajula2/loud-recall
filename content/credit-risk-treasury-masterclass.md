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

A **share** is ownership, not a promise to repay. There is no maturity, no contractual interest and no date on which anyone owes you anything. If the company does well the share is worth more; if it fails, shareholders are paid last, usually nothing.

Banks hold very little equity, and the reason is the capital rules from section 5. Every asset is multiplied by a **risk weight** to produce the capital the bank must hold against it. A government bond might carry a weight of 0%, a good corporate loan 100%, an equity holding 250% or more. So ₹100 crore parked in shares forces the bank to hold several times the capital that the same ₹100 crore in loans would. The regulator is pricing the fact that equity has no floor and no repayment promise. The holding is not forbidden — it is made expensive enough that banks lend instead.

### 2.7 Foreign exchange

Three shapes.

**Spot** — you exchange currency at today's rate, and the cash moves in a day or two. Ordinary conversion.

**Forward** — you agree today the rate at which you will exchange on a date months away. Nothing moves now. An importer who must pay dollars in six months uses one so the rupee cost is known today instead of being whatever the market does in the meantime.

**FX swap** — two exchanges bolted together: you swap currencies now at the spot rate, and simultaneously agree to swap them back on a future date at an agreed forward rate. You have not taken a view on the exchange rate at all, because you end where you started. What you have done is borrow one currency and lend the other for that period. Treasury uses it to move surplus funding from a currency it has into a currency it needs, without changing the bank's overall currency position.

The forward rate is not somebody's forecast. It is fixed by arithmetic, and here is the reasoning.

Suppose rupee deposits earn 7% and dollar deposits earn 4%, and you want dollars in one year. You have two routes. Route one: convert to dollars today and earn 4% on them for the year. Route two: keep the rupees, earn 7%, and agree a forward rate now to convert at the end. Both routes start with the same rupees and end with dollars on the same day. If the forward rate made route two better, everyone would take route two, riskless, in unlimited size — so the forward rate must be set exactly where the two routes give the same answer. The 3% interest advantage on rupees is precisely offset by a weaker forward rate for the rupee.

That is all the formula says.

$$
F = S \times \frac{1 + r_d}{1 + r_f}
$$

where:

- **F** — forward rate
- **S** — spot rate, same quotation convention
- **r₍d₎** — domestic interest rate for the period
- **r₍f₎** — foreign interest rate for the same period

The currency with the higher interest rate always trades weaker forward. That is a mechanical consequence, not a prediction that it will weaken.

**Trap — a forward rate is not a forecast of future spot.** Actual spot in a year's time will be nothing like the forward, and that is not an error in the forward. The forward answers "what rate makes both routes equal today", not "where will the rupee be".

### 2.8 Derivatives

A **derivative** is a contract whose value comes from something else — a rate, a price, an index. You are not buying the thing. You are buying an agreement about the thing.

**Forward.** An agreement made privately between two parties to buy something later at a price fixed today. Both sides are obliged. Whoever ends up on the wrong side of the market still has to perform. Because it is private, each side carries the risk that the other fails to settle.

**Future.** The same economics, but standardised and traded on an exchange. The exchange sets the contract size and dates, stands between the two parties, and demands **margin** — cash posted up front and topped up daily as the position moves. The margining is the real difference: losses are settled every day, so nobody accumulates a large unpaid obligation. A forward accumulates; a future settles as it goes.

**Swap.** An agreement to exchange two streams of payments over time. Nothing is bought, nothing is sold; two payment patterns are traded for each other.

**Option.** The right, but not the obligation, to transact at an agreed price. The holder uses it only if it suits them, so the holder can never lose more than the premium paid at the start. The seller has the mirror image: they keep the premium and carry an obligation they cannot walk away from. That asymmetry is the whole instrument.

| Instrument | Obliged? | Traded where | Settled how |
|---|---|---|---|
| Forward | Both sides | Privately | Once, at maturity |
| Future | Both sides | Exchange | Margined daily |
| Swap | Both sides | Mostly privately | Net, each period |
| Option | Buyer chooses | Either | On exercise |

### 2.9 The interest rate swap

This is the one to actually understand, because it reappears in the rate risk section.

Two parties agree a **notional** amount and a term. One pays a fixed rate on that notional each period; the other pays a floating rate that resets each period. Only the difference changes hands. The notional itself is never exchanged — it exists solely to size the payments.

Why a bank uses it: suppose our bank has made a large book of fixed-rate loans, funded by deposits whose cost moves with the market. If rates rise, funding cost climbs while loan income stays fixed, and the margin is squeezed. By entering a swap where it pays fixed and receives floating, the bank converts that fixed income stream into a floating one that moves with its funding. The mismatch is neutralised without touching a single customer contract.

**Trap — notional, market value and exposure are three different numbers.**

| Number | What it is | Rough size |
|---|---|---|
| Notional | Reference amount used to compute payments; never exchanged | ₹100 crore |
| Market value | What the contract is worth today; starts near zero, then moves | A few crore either way |
| Credit exposure | What could be lost if the counterparty fails — market value plus an allowance for future movement | Small relative to notional |

Quoting notional as exposure overstates risk by orders of magnitude. A bank with ₹5,000 crore of swap notional does not have ₹5,000 crore at risk; it has the replacement cost of contracts currently in its favour.

### 2.10 Market risk measures

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

Start with the two words that cause all the confusion.

- The **allowance** is a **balance**. It sits on the balance sheet, reducing the loan book. Ours is ₹22 crore. It is a number that exists at a point in time, like the level of water in a tank.
- The **impairment charge** is a **movement**. It is what passes through the profit and loss account this quarter. It is the water flowing in.

They are not the same thing and they are not the same size. The allowance can be ₹22 crore while this quarter's charge is ₹3 crore.

The walk is simply the tank's arithmetic: what was in it, what flowed in, what drained out, what is in it now.

$$
\text{Closing allowance} = \text{Opening allowance} + \text{Charge} - \text{Write-offs} + \text{Recoveries}
$$

where:

- **Opening allowance** — the balance at the start of the period
- **Charge** — the amount recognised in profit this period, which raises the allowance
- **Write-offs** — amounts removed from the books as unrecoverable, which drain the allowance
- **Recoveries** — cash received on amounts previously written off

Take it one term at a time.

**Opening.** Last quarter closed at ₹20 crore. That is where we begin.

**Charge.** Over the quarter, some loans deteriorated, some new lending was written, some estimates were updated. The net effect is that the allowance needs to be bigger. Making it bigger costs profit — that cost is the charge. Say ₹4 crore.

**Write-off.** A ₹2 crore loan is finally accepted as unrecoverable. Here is the part that surprises everyone: **the write-off does not create a loss.** The loss was already taken, quarters ago, when the allowance against that loan was raised. The write-off just cleans up the books — it removes ₹2 crore of gross loan and ₹2 crore of allowance at the same time. Gross falls, allowance falls, and the net loan figure does not move at all. Profit is untouched.

**Recovery.** ₹0 crore this quarter. If money did come in on something previously written off, it would flow back in as a gain.

**Closing.** 20 + 4 − 2 + 0 = **₹22 crore**. That is the ₹22 crore on our balance sheet.

Why anyone cares: management and the regulator both want the ₹2 crore increase explained, not just stated. So the charge is decomposed further — how much came from new lending, how much from loans migrating between stages, how much from changed assumptions, how much simply from loans ageing. If the pieces do not add up to the total, there is an unexplained residual, and the residual is where errors live. This decomposition is one of the most common things a reporting analyst is asked to produce.

**Trap — allowance is a stock, charge is a flow.** "Our provisions went up by ₹4 crore" and "we hold ₹22 crore of provisions" are answers to different questions. Being asked for one and giving the other is the fastest way to look like you have not done this work.

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

### 5.4 The IRB formula and what it is called

Under the internal ratings based approach, the bank's own PD, LGD and EAD are fed into a supervisory formula that produces the risk weight. That formula is the **asymptotic single risk factor (ASRF) model**, built on **Vasicek's** single-factor credit model. You will hear both names, and "the Basel IRB formula" refers to the same thing.

The essential move is this. Regulatory capital covers **unexpected** loss, so the formula does not ask for the average PD. It asks: what would the default rate look like in a severely bad year? It takes the bank's ordinary PD and stresses it to a 99.9% adverse outcome of one common economic factor, then subtracts the expected loss that provisions already cover.

$$
K = \left[ LGD \times N\!\left( \frac{N^{-1}(PD) + \sqrt{R}\, N^{-1}(0.999)}{\sqrt{1-R}} \right) - PD \times LGD \right] \times M_{adj}
$$

where:

- **K** — capital requirement per unit of exposure
- **PD, LGD** — the bank's estimates
- **R** — asset correlation, prescribed by the regulator, capturing how much borrowers move together
- **N** and **N⁻¹** — the normal distribution function and its inverse
- **0.999** — the supervisory confidence level, a one-in-a-thousand year
- **M₍adj₎** — maturity adjustment, since longer exposures can deteriorate for longer

$$
RW = K \times 12.5
$$

where the 12.5 converts a capital requirement into a risk weight, being the reciprocal of the 8% minimum ratio.

Three things to take from it, which is all you need:

1. It is a **stressed** PD, not the normal one. Capital is for the bad year.
2. **R**, the correlation, is prescribed rather than estimated, because correlation is what makes many borrowers fail at once and regulators will not let banks choose their own.
3. Expected loss is explicitly subtracted, because provisions already cover it. The formula is doing the expected-versus-unexpected split from section 3.2 in algebra.

**Trap — you are not expected to compute this.** You are expected to know what it is for, why the PD inside it is stressed, and that its inputs are exactly the data quality problem the rest of this note is about.

### 5.5 The leverage ratio

$$
\text{Leverage ratio} = \frac{\text{Tier 1 capital}}{\text{Total exposure measure}}
$$

where:

- **Tier 1 capital** — as defined above
- **Total exposure measure** — on-balance-sheet assets plus off-balance-sheet and derivative exposure, with no risk weighting

It exists as a backstop. If risk weights are wrong or gamed, an unweighted measure still constrains the balance sheet.

### 5.6 Why deterioration hurts twice

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

Where LCR asks "can we survive a month", NSFR asks a slower question over one year: **is the way we are funded sensible in the first place?**

A bank could pass LCR every day and still be building a fragile balance sheet — twenty-year mortgages funded by three-month borrowing that has to be rolled over again and again. NSFR is the rule against that.

$$
NSFR = \frac{ASF}{RSF}
$$

where:

- **ASF** — available stable funding: the funding the bank has, weighted by how durable it is
- **RSF** — required stable funding: the funding the asset side needs, weighted by how long and illiquid the assets are

Both sides are just balances multiplied by prescribed factors and added up. The factors carry the entire idea:

| Side | Item | Factor direction |
|---|---|---|
| ASF | Equity and long-term borrowing | Highest — it cannot run |
| ASF | Retail deposits | High — sticky in practice |
| ASF | Short wholesale funding | Low — it leaves first |
| RSF | Cash and government securities | Low — sell them if needed |
| RSF | Long corporate loans | High — cannot be liquidated |
| RSF | Undrawn commitments | Small but not zero |

Read as one sentence: **stable sources on top, hungry assets underneath, and the ratio must exceed the minimum.**

| Ratio | Horizon | The question |
|---|---|---|
| LCR | 30 days | Can we survive a run? |
| NSFR | 1 year | Is our funding model sound? |

They are not substitutes, and both are reported. For a treasury reporting role these two returns are likely to be the bulk of the actual work, which is why they earn the space they get here.

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

### 8.1 The problem, concretely

A branch in Coimbatore takes a ₹10 crore deposit and pays the customer 5%.

A corporate desk in Mumbai lends ₹10 crore to a manufacturer at 9%.

The bank earns 4%. Now answer a simple management question: **whose 4% is it?**

The branch will say it raised the money. The desk will say it made the loan. Both are partly right, and if you let both book the full 4%, the bank's internal profit figures add up to twice its actual profit. Worse, a third problem is invisible: the deposit can leave next month while the loan runs five years. Somebody is carrying that mismatch, and under this arrangement nobody is paid for it or held responsible for it.

**Funds transfer pricing (FTP)** is the mechanism that settles all three issues.

### 8.2 How it works

Treasury sits in the middle and acts as an internal bank to the rest of the bank.

- Every business that **uses** funding is **charged** an internal rate for it.
- Every business that **supplies** funding is **credited** an internal rate for it.
- Treasury pays all the credits, receives all the charges, and is left holding the mismatch.

Put numbers on our example. Say the internal rate for this maturity is 6.5%.

| Party | Calculation | Margin |
|---|---|---|
| Branch (deposit) | Credited 6.5%, pays customer 5% | 1.5% |
| Corporate desk (loan) | Charges customer 9%, charged 6.5% | 2.5% |
| Treasury | Receives 6.5%, pays 6.5% on this pair | 0% here |
| **Bank total** | | **4%** |

The 4% is now split, once, with a reason. The branch is rewarded for raising cheap funding. The desk is rewarded for pricing credit well. Neither can claim the other's work.

$$
\text{Lending margin} = \text{Customer rate} - \text{FTP charge}
$$

$$
\text{Deposit margin} = \text{FTP credit} - \text{Customer rate}
$$

where:

- **Customer rate** — the rate actually contracted with the customer
- **FTP charge / credit** — the internal rate applied by treasury

### 8.3 Where treasury's margin comes from

In the table above treasury earned nothing, because both sides happened to be priced off the same point. In reality they are not.

The deposit behaves like short money. The loan runs five years. Treasury credits the branch at the short rate and charges the desk at the five-year rate, and **keeps the difference** — which is exactly payment for carrying the maturity mismatch. If rates move against it, that same mismatch is where the loss appears. This is the third margin.

| Margin | Owner | What it rewards |
|---|---|---|
| Lending margin | The asset business | Credit selection and pricing |
| Deposit margin | The liability business | Raising durable funding |
| Mismatch margin | Treasury | Bearing the maturity and rate risk |

The three add to the bank's total spread. **FTP allocates profit; it never creates it.**

### 8.4 The curve, and the one decision that matters

Treasury does not use a single internal rate. It publishes a **transfer pricing curve** — an internal rate for each tenor: overnight, 1 month, 1 year, 5 years, and so on. Longer tenors cost more, because funding long is genuinely more expensive.

A product is priced at the point on the curve matching its **behavioural** life, not its contractual one.

That one choice is the hinge of the whole document. A savings account is contractually repayable on demand — overnight. If the branch were credited at the overnight rate, it would earn almost nothing for a deposit book that in practice sits there for years, and the branch would stop caring about deposits entirely. So treasury credits it at, say, the three-year point, because the behavioural evidence says that is how it acts.

The moment that three-year assumption is made, it does not stay in FTP. The same assumption sets the run-off rate in LCR and the repricing bucket in EVE. One analytical judgement, three regulatory and management consequences.

### 8.5 The four components

| Component | What it charges for |
|---|---|
| Base rate for the tenor | The plain cost of funds for that maturity |
| Term liquidity premium | The extra cost of funding long rather than short |
| Contingent liquidity charge | Standing ready to fund commitments not yet drawn |
| Optionality charge | The customer's right to prepay or withdraw early |

$$
\text{FTP rate} = r_{base}(t) + TLP(t) + CLC + OC
$$

where:

- **r₍base₎(t)** — base transfer rate at behavioural tenor t
- **TLP(t)** — term liquidity premium for that tenor
- **CLC** — contingent liquidity charge on committed but undrawn facilities
- **OC** — optionality charge for prepayment or early withdrawal rights

The last two are worth pausing on, because they are where FTP stops being accounting and starts changing behaviour.

**Contingent liquidity charge.** Our bank has promised ₹108 crore of credit that nobody has drawn. Not a rupee has left the building, so a naive system charges nothing. But the bank must be ready to fund it tomorrow, and readiness costs money. Charging for it means a relationship manager who hands out large unused limits sees the cost in their own margin. Without the charge, promising credit appears free, and banks discover in a crisis that free promises were drawn all at once.

**Optionality charge.** A borrower who can repay early will do so when rates fall — exactly when the bank least wants the money back. That right has a value, the customer received it, and the charge makes the business pay for handing it out.

### 8.6 Governance

Charges and credits must net to zero across the bank. If they do not, the allocation mechanism is manufacturing or destroying profit, and someone's performance numbers are wrong.

Rates are normally locked at origination for fixed-rate products, so a later curve move does not retrospectively rewrite a business unit's margin on a loan written two years ago.

**Trap — FTP is not an overhead allocation.** It is a price for a real service: funding, liquidity and optionality. Treat it as a cost to be argued down and the incentives it exists to create disappear.

## 9. Where the numbers come from

Everything up to here has been a measure. From this point on, the subject is the machinery that produces it — and this is where the job actually is.

### 9.1 Follow one number

Make it concrete. The bank must file an LCR return for 31 March. That return has a single headline figure, say 118%. Here is what physically had to happen for that number to exist.

1. The **core banking system** holds every deposit and loan account. Overnight, a file is produced listing every account, its balance, its type and its maturity date.
2. The **treasury system** holds the securities portfolio and the interbank borrowings. It produces its own file.
3. Both files land in a **staging area**, untouched.
4. Checks run. Did we get 4.2 million account rows, as expected, or 3.9 million? Do the balances sum to the general ledger?
5. Each deposit is **classified** — retail or wholesale, operational or not — because classification determines the run-off rate applied.
6. Run-off rates are applied, securities are haircut, undrawn commitments are given a draw-down assumption, and the outflows are summed.
7. The ratio is computed, reviewed by a named person, and submitted.

Every concept in this section is about one of those seven steps failing.

### 9.2 What staging actually is

In step 3 the word **staging** appears, and it is worth defining precisely because it is used constantly and explained rarely.

**Staging is a holding area that keeps source data exactly as it arrived, before anything is done to it.** It is a set of database tables that mirror the incoming file, plus a timestamp and a batch identifier.

Why it exists: suppose the LCR comes out at 118% and someone challenges it. The question is always "is the source wrong, or did we break it?" If you transformed the data the moment it arrived, you cannot answer — the original is gone. With staging you can compare the raw file against the source system, and the transformed data against the raw file, and say exactly which link failed.

Staging is also what makes reconciliation possible at all. You reconcile staging to the source system to prove nothing was lost in transmission, then reconcile the final output to staging to prove nothing was lost in processing.

### 9.3 ETL, and what "load" means

**ETL — extract, transform, load** — is the three-step movement of data from source to report.

| Step | What physically happens |
|---|---|
| **Extract** | A copy is pulled from the source system, usually as a dated file or a database read. Nothing is changed. |
| **Transform** | Rules are applied to the staged copy: mapping codes to standard values, joining to reference data, deriving fields, bucketing by date, filtering out what is not in scope. |
| **Load** | The transformed result is written into the destination tables that the report and the calculation actually read from. |

**Load** is simply the write step. It is the point at which data stops being work-in-progress and becomes the official version the reporting layer will use. It matters because of what surrounds it: a load either succeeds completely or is rolled back completely, so a report never reads half a day's data. If a load fails at 4 a.m., the reporting layer still holds yesterday's complete position rather than today's partial one, and somebody is paged.

The sequencing is also why cut-off times are absolute. A feed that arrives after the transform has run does not get loaded, and its data is simply absent from the number — usually without any error appearing anywhere.

### 9.4 BCBS 239 in plain terms

**BCBS 239** is the Basel Committee's principle set for risk data. Strip away the language and it requires a bank to produce risk numbers that are **accurate**, **complete**, **timely** and **adaptable** — and to be able to prove it.

The proof requirement is the hard part. It is not enough for 118% to be right. The bank must be able to demonstrate why it is right.

**Lineage** is that demonstration: the ability to take the 118%, and walk it backwards — to the outflow total, to the deposit classification, to the staged file, to the account record in the core banking system. In practice lineage is documentation plus the staging tables that let you actually perform the walk.

"Adaptable" is the one people underestimate. When the regulator asks on Friday what the ratio would be if wholesale deposits ran off twice as fast, a bank with good aggregation answers by Monday and a bank without it answers in three weeks.

### 9.5 The three kinds of wrong

When a number is wrong, it is wrong in one of three ways, and they belong to different people.

| Kind | What happened | Who fixes it |
|---|---|---|
| **Source defect** | The data was captured wrong at origin — a maturity date keyed incorrectly at the branch | The originating business |
| **Transformation defect** | Correct data was mangled in the pipeline — a join dropped rows, a rule bucketed the wrong field | Technology |
| **Definition defect** | Everyone applied a different meaning — two teams disagree on what counts as an operational deposit | The data owner, through written policy |

The diagnostic question never changes: **where is the first incorrect hand-off?** Everything downstream of that point is a symptom. Fix a symptom and you get a report that reconciles while the number stays wrong.

Definition defects are the most expensive, because nothing is technically broken. Two teams can report different exposure figures with both systems running correct code against a term nobody ever agreed.

### 9.6 Data quality in practice

The dimensions, each with the question it asks:

| Dimension | Question |
|---|---|
| Completeness | Is every record and field present? |
| Accuracy | Does the value match reality? |
| Validity | Is it a permitted value in a permitted format? |
| Consistency | Does it agree with the same fact held elsewhere? |
| Timeliness | Did it arrive before the cut-off? |
| Uniqueness | Is the same thing recorded once, not twice? |

A **data quality rule** is a test on one of these, applied at a stated point, with a threshold and a named owner. In the system it looks like a condition, a severity, and an action: reject the record, flag it, or fail the batch.

**Trap — a rule exists to protect a named number, not to improve data in the abstract.** Compare two versions of the same rule:

- Weak: "Maturity date must not be null."
- Strong: "Maturity date must not be null, because it determines the LCR time bucket and the FTP tenor; a null currently defaults the record to the overnight bucket, overstating 30-day outflows."

The first gets deprioritised for two years. The second gets fixed, because someone can see what it costs.

### 9.7 The controls that catch things

- **Control totals** — count the rows and sum the balances at each stage and compare. The cheapest control that exists, and it catches the most common failure of all: records silently lost between two systems.
- **Reconciliation to the general ledger** — risk figures must tie back to the accounting books. If the loan book in the risk system is ₹1,000 crore and the ledger says ₹1,004 crore, one of them is wrong and the difference must be identified, not netted.
- **Exception queues** — records that fail a rule are written to a queue that a named person works through daily. They are never dropped silently.
- **Suspense treatment** — records that cannot be classified are held in a visible bucket, reported, and cleared. An unclassifiable record must never simply vanish from the population.
- **Golden source** — for each critical field, one system is designated authoritative. Without this you get two defensible answers and no way to choose.

**Trap — a reconciliation that always passes is usually not a control.** If it nets opposing differences, tolerates unexplained variances, or compares a feed to a copy of itself, it proves nothing and provides false comfort.

### 9.8 The data you will actually query

Risk and treasury data is relational, and an analyst is expected to interrogate it directly rather than waiting for a developer.

| Table | One row per |
|---|---|
| Exposure / position | Facility or instrument, per as-of date |
| Counterparty | Borrower, with rating and group linkage |
| Collateral | Security held, linked to facilities |
| Cash flow | Dated contractual and behavioural cash flow |
| Reference | Product codes, currencies, rate curves, mappings |

Four things go wrong repeatedly:

- **The join.** Linking exposures to counterparties, collateral and reference data. The wrong join type silently changes the answer.
- **The as-of date.** Almost every risk table is dated and holds many days of history. Filtering to the wrong date produces a completely plausible wrong number with no error at all.
- **Nulls.** A missing value is not zero. Treating it as zero converts a visible data problem into an invisible reporting error.
- **Grain.** Joining a facility table to a cash flow table multiplies rows. Summing a balance afterwards double-counts it, sometimes many times over.

**Trap — an inner join silently drops exposures.** If a facility has no matching counterparty record, an inner join removes it from the population entirely. The report still balances internally, the total is simply short, and nothing raises an error. A left join plus an explicit null check keeps the record and makes the gap visible — which is the whole point.

### 9.9 Models

Several numbers in this note are model outputs: PD, LGD, EAD, ECL, behavioural maturity, prepayment rates, VaR.

A model has three parts — **inputs**, **methodology**, **assumptions** — and model risk is the risk that any of the three is wrong or wrongly applied.

- **Validation** — independent review before use and periodically afterwards.
- **Back-testing** — comparing what the model predicted against what actually happened.
- **Benchmarking** — comparing it against an alternative approach.
- **Overlays** — management adjustments on top of a model output, used when conditions have moved beyond what the model saw in its data. They must be documented, quantified and approved, because an undocumented overlay is indistinguishable from someone picking a number.

**Trap — a validated model on bad data gives a precisely calculated wrong answer,** and validation will not catch it, because validation tests the methodology rather than the feed.

---

## 10. How the numbers are proved and submitted

### 10.1 The reporting estate

"Estate" just means the full set of reports the team is responsible for. Knowing it cold is most of the job in the first month.

| Report | Goes to | Broad frequency |
|---|---|---|
| LCR return | RBI | Monthly, monitored daily |
| NSFR return | RBI | Quarterly |
| Structural liquidity statement | RBI | Periodic |
| Form A — CRR and SLR position | RBI | Fortnightly |
| Large exposures | RBI | Periodic |
| Provisioning and asset classification | RBI | Quarterly |
| ALCO pack | Internal — the asset-liability committee | Monthly |

The **ALCO** is the internal committee that sets and monitors balance sheet risk appetite. Its pack is not a regulatory submission, and in practice it attracts the most senior attention in the building, so it is prepared with the same rigour.

### 10.2 One exposure, several returns

Take the ₹50 crore corporate loan from earlier and follow it across the estate in the same month.

| Return | How the loan appears |
|---|---|
| Liquidity | A dated inflow in a maturity bucket, possibly discounted |
| Capital | An exposure multiplied by a risk weight |
| Provisioning | A classification, a stage and an allowance |
| Large exposures | A number counted against the borrower group's limit |

Four returns, four different figures, one loan. The differences are legitimate — each return asks a different question on a different basis. What must be true is that all four trace back to the same underlying record.

**Trap — consistency does not mean identical numbers.** It means every difference is explainable by a documented difference in basis. An unexplainable difference is a defect, not a presentation choice.

### 10.3 Reconciliation versus movement analysis

Two controls, permanently confused, both required.

| | Reconciliation | Movement analysis |
|---|---|---|
| Question | Does this agree with an independent source? | Why is this different from last period? |
| Compares | Report against ledger or source | This period against prior period |
| Failure means | The number may be wrong | The number may be right but indefensible |

A figure that reconciles perfectly and cannot be explained is not finished work. When the allowance moves ₹4 crore, that movement must break into new lending, stage migration, changed assumptions, write-offs and recoveries. If the pieces leave a residual, something is unidentified — and the residual is precisely where errors hide.

This is the single most common task handed to a new analyst: "the number moved, find out why."

### 10.4 Ownership

Every reported number has a named owner — not a team, a person. Someone who can explain the figure, defend the assumptions behind it, and authorise a change to how it is produced.

Where ownership is vague, three things follow reliably: nobody challenges the number, nobody funds the data fix, and nobody can answer a supervisory question without a week of archaeology.

### 10.5 Submission discipline

- **As-of date** — the position date the return describes
- **Submission date** — when it must reach the regulator
- **Cut-off** — the point after which late data goes into the next cycle rather than this one
- **Restatement** — the defined process for correcting a figure already submitted, including notifying the regulator

**Trap — the calculation is rarely the binding constraint. The timetable is.** Late feeds, data arriving after cut-off, and unworked exception queues cause far more late and wrong submissions than any formula ever has.

---

## 11. How the reporting machine is built and changed

Section 10 described the machine running. This section is what happens when it has to change — which is the actual project work, and the reason the role exists.

### 11.1 The four shapes of the work

| Shape | Typical trigger |
|---|---|
| A **new return** | The regulator introduces a reporting requirement |
| A **changed definition** | An existing return's rules are amended |
| A **new source** | An acquired portfolio or new product must feed an existing calculation |
| A **remediation** | A number was found to be wrong and must be fixed at its cause |

All four run the same sequence, and the analyst is the person who owns the middle of it.

### 11.2 The sequence

| Stage | What it produces | Signed off by |
|---|---|---|
| Requirements | What the number must be, and why | Number owner and risk |
| Source assessment | Whether the data can support it | Data owners and technology |
| Mapping specification | Field-by-field rules, source to target | Technology, risk, number owner |
| Build | The pipeline and calculation | Technology |
| Test | Evidence the output is correct | Business and technology |
| Parallel run | Old and new producing side by side | Number owner |
| Cutover | The switch, with rollback defined | Governance forum |

### 11.3 Requirements

A requirement for a reported number states four things:

- **Definition** — what is being measured
- **Population** — which records are in scope and which are excluded
- **Basis** — contractual or behavioural, gross or net, which as-of date, which currency treatment
- **Edge cases** — what happens to the awkward records

Edge cases are where reporting projects fail, and they are always the same list: undrawn commitments, pledged assets, intragroup balances, foreign currency positions, restructured loans, off-balance-sheet items, and accounts with missing key fields. Each has a defensible answer. None has an obvious one.

**Trap — ambiguity is discovered in testing, not in build.** A specification saying "include corporate exposures" without defining what counts as corporate will be built two ways by two developers, and both will pass a review that asks only whether the code matches the specification.

### 11.4 Source assessment

Before accepting a feed, establish five things.

| Question | Why it matters |
|---|---|
| Is it complete? | A partial feed produces a plausible, understated number |
| Is it timely? | Data after cut-off is useless regardless of quality |
| Is it granular enough? | Pre-aggregated data cannot be re-bucketed later |
| Is it authoritative? | If it is a copy, the original may change without it |
| How does it handle change? | Backdated amendments, corrections, reversals |

Granularity is the one that cannot be repaired afterwards. If a feed arrives already summed by product, no downstream work recovers the account-level detail needed to bucket it differently when a definition changes — and definitions change constantly.

### 11.5 Mapping specification

This is the analyst's core artefact. It is a table, usually a spreadsheet, with one row per target field:

**source system → source field → transformation rule → target field → default → exception handling**

The last two columns are the ones that get skipped and the ones that matter. "What happens when this field is null" must have a written answer — reject the record to an exception queue, apply a stated default, or fail the run. Left blank, the pipeline chooses silently, and silence becomes a wrong number that nobody sees for six months.

### 11.6 Testing

| Stage | What it proves |
|---|---|
| Unit | One rule behaves as specified |
| Integration | Stages hand over correctly between systems |
| System | End-to-end output is correct for known inputs |
| User acceptance | The business agrees this is the number it asked for |
| Regression | Existing correct outputs did not break |

**Expected results are written before the test runs.** Otherwise the test records whatever the system produced, which is not a test — it is a transcript with a tick next to it.

The test pack must contain the awkward records: the null, the backdated amendment, the record sitting exactly on a bucket boundary, the negative balance, the foreign currency item, the one that fails a data quality rule. A pack of clean records proves only that the happy path works, and the happy path was never the risk.

### 11.7 Parallel run and cutover

**Parallel run** means the old process and the new one produce the same number, for the same date, at the same time, and the outputs are compared.

Every difference must be **explained**, not netted. A total that matches while two components offset each other is two errors wearing a disguise.

Cutover needs four things: the parallel run signed off by the number owner, a dated switch with a named decision-maker, a rollback plan that can actually be executed, and heightened review of the first live submission.

**Trap — a rollback plan that says "rerun the old process" is not a plan if the old process has already been decommissioned.** Confirm it still exists and still runs.

### 11.8 Dependencies

What actually delays this work, in rough order of frequency:

- **Definitional sign-off** — an edge case waiting on a policy decision nobody wants to own
- **Upstream data** — a source system change that has not been built yet
- **Environment and access** — production-like test data arriving weeks late
- **Regulatory timing** — a submission date that will not move for any reason
- **Competing change** — another project altering the same feed in the same window

The last is the most commonly missed. Two projects changing one source in parallel will each test successfully in isolation and break together in production, on the same night.

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
27. Staging holds source data untouched, which is what makes "source or us?" answerable.
28. Wrong is source, transformation or definition. Find the first incorrect hand-off.
29. A data quality rule protects a named reported number.
30. Reconciliation asks "does it agree". Movement analysis asks "why did it change". Both.
31. An inner join silently drops exposures and the report still balances.
32. Expected results are written before the test runs.
33. In a parallel run, explain every difference — never net them.
34. Granularity lost at source cannot be recovered downstream.
35. Every reported number has a named human owner.

---

## 14. Acronyms

| Acronym | Expansion |
|---|---|
| ALCO | Asset-liability committee |
| ALM | Asset and liability management |
| ASF | Available stable funding |
| ASRF | Asymptotic single risk factor (the Basel IRB model) |
| BCBS | Basel Committee on Banking Supervision |
| CCF | Credit conversion factor |
| CET1 | Common equity tier 1 |
| CLC | Contingent liquidity charge |
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
| IRB | Internal ratings based |
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
| TLP | Term liquidity premium |
| UL | Unexpected loss |
| VaR | Value at risk |
