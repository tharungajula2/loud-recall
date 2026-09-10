---
title: "Capital Markets Products — From Zero"
description: "What is actually traded, assuming no prior knowledge. Bonds, shares, currencies and derivatives: what each one is, the cash flows, the numbers that describe it, and where every product lands in the bank's accounting, capital and liquidity returns."
series: masterclass
status: live
updated: 2026-09-10
verified: false
tags:
  - fixed income
  - equities
  - derivatives
  - foreign exchange
  - trading book
  - market risk
---

## Part 0 — What is being traded, and how this note works

Volume 1 followed money the bank **lends**. Volume 2 followed money the bank **borrows**. This note is about the things the bank **buys and sells** — and they are, without exception, promises.

A bond is a promise to pay money on dates. A share is a promise of a slice of whatever is left over. A currency trade is a promise to swap one country's money for another's. A derivative is a promise whose size depends on some other price.

None of them is a physical object. All of them are contracts, and every number in this note is an attempt to answer one of two questions: **what is this promise worth today**, and **how much does that change when something moves.**

| Family | In one sentence | Our bank holds |
|---|---|---|
| **Fixed income** — bonds | A loan you can sell to someone else | ₹400 crore government, ₹120 crore corporate |
| **Equities** — shares | Ownership of a slice of a company | Very little, deliberately |
| **Foreign exchange** | One currency swapped for another | Positions arising from customer business |
| **Derivatives** | A contract whose value comes from another price | A ₹100 crore interest rate swap |

| Part | Builds |
|---|---|
| **1** | Bonds — the largest family and the one closest to credit risk |
| **2** | Shares — small in a bank, and why |
| **3** | Currencies — spot, forward, and why a forward is not a forecast |
| **4** | Derivatives — the four shapes, and notional versus exposure |
| **5** | Banking book and trading book — the boundary that decides everything |
| **6** | The risks, and the numbers that measure them |
| **7** | Where every product lands, in one table |

The running bank is the same one: **₹1,700 crore of assets, ₹520 crore of securities, ₹1,234 crore of risk-weighted assets of which ₹40 crore is market risk.**

---

## Part 1 — Fixed income

### A bond is a loan you can sell

The bank lent ₹100 crore to the steel manufacturer. It cannot sell that loan easily — it is a private agreement between two parties, documented specifically, with no market for it.

Now imagine the same borrowing done differently. Instead of one lender, the company borrows from a thousand lenders, each contributing a small standardised piece, on identical terms written once. Each piece is a **bond**, and because every piece is identical, they can be traded. Someone who wants their money back before maturity does not need the company's permission — they sell to somebody else.

**That is the only real difference between a loan and a bond: standardisation, which makes a market possible.** Everything else is the same. Money out now, interest along the way, principal back at the end, and the risk that the borrower fails.

### The four things that define one

| Term | What it means | Example |
|---|---|---|
| **Face value** (par, principal) | The amount repaid at maturity | ₹100 |
| **Coupon** | The interest rate paid on face value, on fixed dates | 7% a year |
| **Maturity** | When the face value is repaid | 5 years from now |
| **Issuer** | Who owes the money | Government of India, or a company |

Those four give you every cash flow the bond will ever produce.

| Year | Cash received |
|---:|---:|
| 1 | ₹7 |
| 2 | ₹7 |
| 3 | ₹7 |
| 4 | ₹7 |
| 5 | ₹107 |

Indian government bonds pay half-yearly rather than annually. The arithmetic below is identical with the coupon halved and the number of periods doubled; annual is used here so the numbers stay readable.

### Price and yield move in opposite directions

Here is the one mechanic that everything in fixed income rests on, and it is worth taking slowly because it is counterintuitive the first time.

The bond above pays ₹7 a year. Suppose you bought it at ₹100, so you are earning 7%.

Now the market changes and newly issued bonds of the same kind pay 8%. **Would anyone buy your bond at ₹100?** No — they can get ₹8 a year for the same ₹100 elsewhere. Your bond only becomes attractive if it is cheaper, so its price falls until the ₹7 a year plus the ₹100 at maturity adds up to an 8% return for whoever buys it now.

How far does it fall? Discount every cash flow at 8% — exactly the present value machinery from Volume 1, where the same operation turned five years of loan receipts into ₹98 crore.

| Year | Cash | Discount factor at 8% | Present value |
|---:|---:|---:|---:|
| 1 | 7 | 0.9259 | 6.48 |
| 2 | 7 | 0.8573 | 6.00 |
| 3 | 7 | 0.7938 | 5.56 |
| 4 | 7 | 0.7350 | 5.15 |
| 5 | 107 | 0.6806 | 72.82 |
| | | **Price** | **96.01** |

**The price fell to ₹96.01.** Nothing about the bond changed — same issuer, same coupon, same maturity. Only the return available elsewhere changed, and the price moved to compensate.

Run it the other way. If market rates fall to 6%, the same discounting gives **₹104.21**, because a bond paying 7% is now generous.

| Market yield | Price | Relationship |
|---:|---:|---|
| 6% | ₹104.21 | Below coupon → price above par, "premium" |
| 7% | ₹100.00 | Equal to coupon → price at par |
| 8% | ₹96.01 | Above coupon → price below par, "discount" |

### Yield to maturity

**Yield to maturity (YTM)** is the single rate that makes the bond's future cash flows equal its current price. It is the return you earn if you buy at that price and hold to maturity.

If that sounds familiar, it is: **YTM is the effective interest rate from Volume 1**, applied to a traded instrument instead of a loan. The 10.54% that reconciled ₹98 crore out to five years of receipts, and the 8% that reconciles ₹96.01 to the table above, are the same idea and the same arithmetic.

Price and yield are therefore two ways of saying one thing. Quote a bond by price and its yield is implied; quote it by yield and its price is implied. Traders quote government bonds by yield and corporate bonds often by spread over the government yield, which is the next idea.

### Clean price, dirty price and accrued interest

A bond pays its coupon on fixed dates. If you buy four months after the last coupon, you will receive the whole next coupon even though the seller held the bond for a third of the period. So you pay them for it.

| | Working | ₹ |
|---|---|---:|
| **Clean price** — what is quoted | | 96.01 |
| **Accrued interest** — the seller's share of the next coupon | 7 × 120 ÷ 365 | 2.30 |
| **Dirty price** — what actually settles | 96.01 + 2.30 | **98.31** |

The quoted price is clean because it moves only with market conditions. The dirty price sawtooths upwards between coupon dates and drops on each payment, which would make price charts unreadable. **You pay dirty and you quote clean.**

Get this wrong in a system specification and every bond in the book is mispriced by up to a full coupon — a defect that reconciles nowhere and is invisible on coupon dates.

### Duration — how much the price moves

If price moves with yield, the next question is *how much*, and the answer is **duration**.

**Macaulay duration** is the weighted average time until you get your money back, weighting each cash flow by its present value. For our bond it is **4.39 years** — less than the 5-year maturity, because the coupons arrive earlier than the principal.

**Modified duration** converts that into a sensitivity:

$$
\text{Modified duration} = \frac{\text{Macaulay duration}}{1 + y} = \frac{4.39}{1.07} = 4.10
$$

Read it as: **a 1% rise in yield costs about 4.10% of the price.**

| | Predicted by duration | Actually happened |
|---|---:|---:|
| Yield +100 bp | −4.10% | −3.99% |
| Yield −100 bp | +4.10% | +4.21% |

The prediction is slightly wrong both times, and always in the holder's favour: the fall is smaller than predicted and the rise is larger. That asymmetry is **convexity** — the price-yield relationship is a curve, not a straight line, and duration is the straight line drawn at a tangent to it. Over small moves the difference is negligible. Over large ones it matters, which is why long-dated books report convexity alongside duration.

### DV01 — duration in rupees

Duration is a percentage. Risk limits are in money, so the working measure is **DV01**: the value change for a one basis point move.

$$
DV01 = \text{Position} \times \text{Modified duration} \times 0.0001
$$

| Step | Working | Value |
|---|---|---:|
| Position | The bank's government book | ₹400 crore |
| Modified duration | From above | 4.10 |
| **DV01** | 400 × 4.10 × 0.0001 | **₹0.164 crore per bp** |
| Same figure in lakhs | | **₹16.4 lakh per bp** |
| Move of 100 bp | 0.164 × 100 | **₹16.4 crore** |

That ₹16.4 crore is the number Volume 2 quoted as "about ₹16 crore" when it said the government book loses value as yields rise. **DV01 is how a treasury desk actually holds a position in its head** — not "₹400 crore of five-year bonds" but "₹16.4 lakh a basis point", because that is the form in which it can be compared to a limit, netted against a hedge, and added to other positions.

### Credit spread

Two bonds, same maturity, same coupon. One issued by the government, one by a company. The company's must yield more, because it might not pay.

$$
\text{Corporate yield} = \text{Government yield} + \text{Credit spread}
$$

The spread is the market's price for the borrower's default risk — the traded equivalent of everything in Volume 1. Where the loan book expressed that risk as a PD of 0.50% and an expected loss of ₹0.20 crore, the bond market expresses it as a number of basis points, continuously, and revises it every day.

Two consequences:

- **A bond's price falls when its issuer deteriorates, even if rates do not move.** Two independent sources of loss, and market risk systems must separate them or a credit event looks like a rate move.
- **The spread is a live opinion on credit quality**, available for any traded issuer without waiting for a rating action. Banks use spreads as an early warning input alongside the ratings from Volume 1.

### The main types

| Type | What is different | Where our bank meets it |
|---|---|---|
| **Government bond (G-sec)** | Sovereign issuer, deepest market, repo-eligible | ₹400 crore — SLR, HQLA, and repo collateral |
| **Treasury bill** | Government, under one year, no coupon — issued at a discount | Short-dated HQLA |
| **Corporate bond** | Company issuer, carries a credit spread | ₹120 crore of AA paper, Level 2A HQLA at a 15% haircut |
| **Floating rate note** | Coupon resets to a benchmark periodically | Very low duration — the coupon moves so the price barely does |
| **Zero coupon bond** | No coupon; all return from the discount to par | Duration equals maturity exactly, so maximum rate sensitivity |
| **Covered bond, securitisation** | Backed by a pool of assets rather than the issuer alone | Not held here |

The floating rate note row is worth pausing on, because it explains something in Volume 2. **A floating rate note has almost no duration** — when market rates rise, the note's own coupon rises with them, so its price barely moves. That is why a bank worried about the ₹17.5 crore EVE sensitivity holds floating rather than fixed paper. The same instinct, on the other side, is why the borrower's fixed-rate five-year loan was the problem in the first place.

---

## Part 2 — Equities

### A share is ownership, not a promise to repay

A bond is a claim of a fixed amount. A **share** is a claim on whatever is left after everyone else has been paid — employees, suppliers, lenders, bondholders, the tax authority. It has no maturity and no promised payment.

| | Bond | Share |
|---|---|---|
| What you own | A claim to fixed amounts on fixed dates | A fraction of the company |
| Paid | Before shareholders | Last, out of what remains |
| Upside | Capped at the promised cash flows | Unlimited |
| Downside | The issuer defaults, and you recover something | Can go to zero, and often does first |
| Maturity | Yes | None |

That ordering — the **capital stack** — is the same one in Volume 1: depositors first, then Tier 2 subordinated debt, then Additional Tier 1, then common equity absorbing losses immediately and without any trigger. **A share is the riskiest claim on any company, including a bank**, and the reason equity is the only capital the regulator fully trusts is the reason a share is the last thing paid.

### The numbers that describe one

| Measure | Meaning | Reading it |
|---|---|---|
| **Market capitalisation** | Share price × shares outstanding | What the market says the whole company's equity is worth |
| **Dividend yield** | Annual dividend ÷ price | The cash return, if the dividend continues — it need not |
| **Price/earnings ratio** | Price ÷ earnings per share | Rupees paid per rupee of annual profit; a high number means growth is expected |
| **Beta** | Sensitivity to the whole market | Beta 1.3 means the share tends to move 1.3× the index |
| **Delta** | Value change per unit move in the price | For a share held outright, delta is simply the position size |

Beta is the equity version of a familiar idea. It is the same question the Basel asset correlation asked in Volume 1's IRB calculation — how tied is this name to the wider economy — answered from market prices rather than a prescribed formula.

### Why a bank holds almost none

Equity investments attract punitive capital treatment, and **holdings in other financial institutions' capital are deducted from CET1 outright** rather than risk-weighted. The reasoning is the one behind every CET1 deduction in Volume 1: if banks hold each other's equity, the system's capital is counted twice and vanishes together in exactly the stress it was held for.

So a commercial bank's equity exposure is small and deliberate. An investment bank is different — it holds equities as **trading inventory**, bought to be sold, plus positions arising from market-making, prime brokerage and equity derivatives hedging. Same instrument, entirely different purpose, and Part 5 is about why that difference decides the accounting and the capital.

### Corporate actions

Shares change form. A **dividend** pays cash and the price drops by roughly that amount on the ex-date. A **bonus issue or split** multiplies the share count and divides the price, leaving value unchanged. A **rights issue** offers existing holders new shares below market price. A **buyback** reduces the share count.

Trivial economically; a persistent source of data defects. Every corporate action requires a position and a price history to be adjusted on the right date, and a missed split makes a share look as though it lost half its value overnight.

---

## Part 3 — Foreign exchange

### What is being traded

An FX rate is a price of one money in another. **USD/INR 86.00** means one US dollar costs 86 rupees. The first currency is what you are buying; the second is what you pay in.

Every FX trade has two sides — you cannot buy dollars without selling rupees — which makes it the one market where a "position" is always simultaneously long one thing and short another.

### Three shapes

| Type | What it is | Settles |
|---|---|---|
| **Spot** | Buy currency now at today's rate | Usually two business days |
| **Forward** | Agree today a rate for a fixed future date | On that future date |
| **FX swap** | Spot one way and a forward the other, together | Both legs |

The FX swap is the workhorse and it is not really a currency trade at all. Selling dollars spot and buying them back forward is **borrowing rupees against dollars for the period in between** — a secured loan in another currency, which is why treasury desks use it to manage funding rather than to take a currency view.

### Why a forward rate is not a forecast

This is the point where FX becomes intuitive, so it is worth doing the arithmetic.

You have ₹86 and want dollars in a year. Two routes.

| Route | Steps | Ends with |
|---|---|---|
| **A — wait** | Keep ₹86 in rupees for a year at 6.40%, then buy dollars | ₹91.50, converted at the unknown future rate |
| **B — now** | Buy $1 today at 86.00, deposit it for a year at 4.20% | $1.042, guaranteed |

If a forward rate existed that made route B better than route A with certainty, everyone would take it and the rate would move. So the forward rate must be the one that makes both routes identical.

$$
\text{Forward} = \text{Spot} \times \frac{1 + r_{\text{INR}}}{1 + r_{\text{USD}}}
$$

| Step | Working | Value |
|---|---|---:|
| Spot | | 86.00 |
| Rupee rate, 1 year | The transfer pricing curve | 6.40% |
| Dollar rate, 1 year | | 4.20% |
| **Forward** | 86.00 × 1.0640 ÷ 1.0420 | **87.82** |
| Forward premium | 87.82 − 86.00 | **1.82** |
| As a percentage | 1.82 ÷ 86.00 | **2.11%**, close to the 2.20% rate difference |

**The dollar is more expensive forward than spot purely because rupee interest rates are higher.** It says nothing whatsoever about where anyone thinks the rate is going. This is **covered interest parity**, and it is the single most useful thing to know about FX: forward points are an interest rate difference wearing a currency costume.

A practical consequence for a bank: **an FX forward is a rates position, not a currency position.** Hedging currency with forwards leaves you with interest rate exposure in two currencies, which is why FX and rates desks sit together.

### The risk

The **net open position** is the bank's exposure in each currency after netting everything — assets, liabilities, spot, forward and derivatives. A bank with more dollar assets than dollar liabilities loses when the dollar weakens, regardless of how well those assets perform.

Regulators cap it, usually as a percentage of capital and both per currency and in aggregate. [verify] The measurement problem is that it must include every product in this note at once: a dollar bond, a dollar loan, a forward and a cross-currency swap all contribute, and if any one system is missed the position is wrong in a direction nobody can see.

**Settlement risk** is the FX-specific hazard. In a spot trade you pay rupees in Mumbai and receive dollars in New York, hours apart. In between, you have paid and not been paid. The industry's answer is payment-versus-payment settlement, which makes both legs conditional on each other.

---

## Part 4 — Derivatives

### The definition, and what it is for

A **derivative** is a contract whose value is *derived* from something else — a rate, a price, an index. You never own the underlying thing. You own a claim whose size depends on where it goes.

Two legitimate reasons to use one, and they look identical on a trade ticket:

| Purpose | What it does | Volume 2's example |
|---|---|---|
| **Hedging** | Offsets an exposure you already have | The bank pays fixed on a swap to offset floating funding cost |
| **Speculation** | Creates an exposure you did not have | The same swap, with no underlying position |

The distinction is intent, it is invisible in the contract, and Part 5 is entirely about how a bank is required to prove which one it was.

### The four shapes

| | Obligation | Traded | Payoff |
|---|---|---|---|
| **Forward** | Both parties **must** transact at an agreed price on an agreed date | Over-the-counter, bilateral, customisable | Linear |
| **Future** | The same obligation, standardised and exchange-traded with daily margin | Exchange | Linear |
| **Swap** | Exchange two streams of cash flows over time | Mostly OTC, increasingly cleared | Linear — a series of forwards |
| **Option** | One party has the **right**, not the obligation; the other must perform if asked | Both | Asymmetric |

The first three are **linear**: gains and losses are proportional and symmetric. Only the option is not, and that is what makes it a different animal.

**Forward versus future** is worth one line because the difference is operational, not economic. A future is standardised, cleared through an exchange, and marked to market daily with margin flowing each day — so counterparty risk is small but cash moves constantly. A forward is bespoke, bilateral, and settles once — so it fits the exposure exactly but carries the counterparty for the whole life.

### Working the swap

Volume 2's hedge: **₹100 crore notional, five years, the bank pays fixed at 7.2% and receives six-month MIBOR.**

| Rates | Funding cost change on ₹100 crore | Swap: receives floating, pays fixed | Net |
|---|---:|---:|---:|
| Unchanged | 0 | 0 | **0** |
| +200 bp | −₹2.0 crore | +₹2.0 crore | **0** |
| −200 bp | +₹2.0 crore | −₹2.0 crore | **0** |

The floating funding cost has been converted to fixed, matching the fixed-rate asset it funds, and the interest rate exposure on that ₹100 crore is gone.

**No principal ever changes hands.** Only the difference between two interest streams is exchanged, calculated on a notional amount that exists purely as a multiplier. Which leads to the distinction that matters more than any other in derivatives.

### Notional, market value, exposure

| Measure | On our swap | What it is | What it is good for |
|---|---:|---|---|
| **Notional** | ₹100 crore | The number the interest calculation is multiplied by | Almost nothing. It is never paid or received |
| **Market value** | ₹8 crore after a 200 bp rise | What the contract is worth today if closed out | Accounting; the balance sheet carrying amount |
| **Current exposure** | ₹8 crore | The mark-to-market, when it is in your favour | What you lose if the counterparty fails **today** |
| **Potential future exposure** | An add-on | How far in your favour it could move before maturity | What you could lose if they fail **later** |
| **Exposure at default** | Current + potential future | The two together | The capital calculation |

**A ₹100 crore notional swap is not a ₹100 crore exposure.** It is an ₹8 crore exposure plus an estimate of how much worse that could get. Headlines about hundreds of trillions of derivatives outstanding are quoting gross notional, which is the least informative number available.

Compare it to Volume 1's loan exposure, where exposure at default was the drawn balance plus a conversion factor on the undrawn:

| | Loan | Derivative |
|---|---|---|
| Exposure at default | Roughly the outstanding balance | Depends where market rates are that day |
| Direction | The bank is always owed | Either party may owe the other |
| Can it be zero? | Not while money is outstanding | Yes, and it can turn negative |

That second row is the real difference. **A derivative can be an asset one week and a liability the next**, which is why collateral is exchanged daily under a credit support annex rather than taken once at the start.

### Options

An option gives its buyer a **right** and its seller an **obligation**. The buyer pays a **premium** for that asymmetry, and the premium is the most the buyer can lose.

| Term | Meaning |
|---|---|
| **Call** | The right to **buy** at the strike price |
| **Put** | The right to **sell** at the strike price |
| **Strike** | The agreed price |
| **Premium** | What the buyer pays upfront |
| **In the money** | Exercising now would be profitable |
| **Expiry** | The last date the right can be used |

Take a call: strike ₹500, premium ₹30.

<svg viewBox="0 0 480 350" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Payoff diagram for a bought call option with a strike of 500 and premium of 30, showing maximum loss of 30 and break-even at 530">
  <line x1="70" y1="229" x2="440" y2="229" stroke="#000" stroke-width="1"/>
  <line x1="70" y1="300" x2="70" y2="55" stroke="#000" stroke-width="1"/>
  <line x1="70" y1="272" x2="420" y2="272" stroke="#000" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="210" y1="272" x2="210" y2="229" stroke="#000" stroke-width="1" stroke-dasharray="3 3"/>
  <polyline points="70,272 210,272 420,60" fill="none" stroke="#000" stroke-width="2"/>
  <circle cx="252" cy="229" r="4" fill="#fff" stroke="#000" stroke-width="1.5"/>
  <text x="76" y="290" font-size="12" fill="#000">Maximum loss ₹30</text>
  <text x="180" y="320" font-size="12" fill="#000">Strike ₹500</text>
  <text x="258" y="222" font-size="12" fill="#000">Break-even ₹530</text>
  <text x="330" y="90" font-size="12" fill="#000">Profit unlimited</text>
  <text x="440" y="247" font-size="12" fill="#000" text-anchor="end">Price at expiry →</text>
  <text x="26" y="150" font-size="12" fill="#000" text-anchor="middle" transform="rotate(-90 26 150)">Profit per share</text>
</svg>

Read it in three pieces.

| Price at expiry | What the buyer does | Profit |
|---|---|---:|
| Below ₹500 | Does not exercise — buying in the market is cheaper | −₹30, the premium |
| ₹500 to ₹530 | Exercises, but the gain is less than the premium | Between −₹30 and 0 |
| Above ₹530 | Exercises profitably | Price − 530, rising without limit |

**The flat left-hand section is the whole point.** The buyer's loss stops at the premium however far the price falls, while the upside continues — which is exactly what insurance looks like, and an option is best understood as insurance with a market price.

The seller has the mirror image: a small fixed income and, on a naked position, unlimited loss. **Selling options is profitable almost all the time and occasionally catastrophic**, and that shape is why option sellers are capitalised, margined and monitored differently from everyone else.

Rate-market versions of the same instrument appear constantly in a bank: a **cap** is a set of call options on an interest rate that pays when the rate rises above a strike, a **floor** pays when it falls below, and a **swaption** is the right to enter a swap. A bank worried about the ₹3 crore of net interest income it loses per 100 basis points can buy a cap instead of swapping — paying a premium to keep the upside if rates fall, rather than giving it up.

Two more terms you will hear. **Delta** is how much the option's value moves per unit move in the underlying — near zero when far out of the money, near one when deep in. **Vega** is sensitivity to volatility, and it exists only for options: for a linear product, how much the price *wobbles* is irrelevant to what the contract is worth. For an option it is central, because volatility is what makes the right to choose valuable.

---

## Part 5 — Banking book and trading book

### One boundary, three consequences

The same government bond can sit in two places on the same balance sheet and be treated completely differently. The dividing question is **intent**.

| | Banking book | Trading book |
|---|---|---|
| Why it is held | To hold — for yield, liquidity, or a regulatory requirement | To trade — for short-term resale or to hedge a trading position |
| Horizon | Long | Short, actively managed against limits |
| Our bank | Most of the ₹400 crore government book: SLR, HQLA, repo collateral | A small desk, producing ₹40 crore of market risk RWA |

Three things follow, and they are why the boundary is policed.

| Consequence | Banking book | Trading book |
|---|---|---|
| **Accounting** | Amortised cost, or fair value through other comprehensive income. Price moves may bypass profit entirely | Fair value through profit and loss. Every price move hits earnings, daily |
| **Capital** | **Credit risk** RWA — the standardised weights from Volume 1 | **Market risk** RWA — computed from price volatility, and separately from counterparty credit risk on derivatives |
| **Risk measurement** | Interest rate risk in the banking book: the NII and EVE measures | Value at risk, sensitivities, stress — measured daily |

### Why it is worth policing

The incentive runs one way. A position sitting on a loss is more comfortable in the banking book, where the loss need not pass through profit. A position sitting on a gain is more comfortable in the trading book, where it can be recognised immediately.

Moving instruments across the boundary to choose the treatment is **regulatory arbitrage**, and it was a real and material failure in 2008, when illiquid positions sat in trading books at low capital charges and then could not be sold at anything near their marked value. The response has been to make the boundary far harder to cross: designation at initial recognition, a documented policy, board approval for any reclassification, and a capital floor that prevents a transfer from reducing the requirement.

**For a business analyst this is a data field, and a consequential one.** Every instrument carries a book designation that determines its accounting treatment, its capital calculation and which return it lands in. It is set once, it is expensive to change, and a mapping specification that treats it as a routine attribute rather than a governed one has understated the control around it.

---

## Part 6 — The risks, and the numbers that measure them

| Risk | The question | Measured by |
|---|---|---|
| **Market risk** | What do we lose if prices move? | VaR, sensitivities, stress scenarios |
| **Counterparty credit risk** | What do we lose if the other side fails? | Current exposure plus potential future exposure |
| **Settlement risk** | What do we lose if we pay and they do not? | Amount at risk during the settlement window |
| **Liquidity of the instrument** | Can we get out at a fair price? | Bid-ask spread, market depth, days to liquidate |
| **Issuer credit risk** | What if the bond's issuer defaults? | Credit spread, and everything in Volume 1 |

### Sensitivities

The working measures, one per product family. Each answers "how much do I lose for a one-unit move."

| Measure | Applies to | Our bank |
|---|---|---|
| **DV01** | Anything with interest rate exposure | ₹16.4 lakh per basis point on the government book |
| **Delta** | Equities, options, FX | Position size for outright holdings |
| **Vega** | Options only | Nil — the bank holds none |
| **Credit spread sensitivity** | Corporate bonds | Loss per basis point of spread widening |

Sensitivities are what limits are written against, because they are additive across positions and immediately comparable to a hedge.

### Value at risk

**VaR** answers: over a given horizon and confidence level, what loss will not be exceeded?

Work it on the government book.

| Step | Working | Value |
|---|---|---:|
| DV01 | From Part 1 | ₹0.164 crore per bp |
| Daily volatility of the yield | Historical | 4 bp |
| Daily volatility of the position | 0.164 × 4 | ₹0.66 crore |
| 99% confidence multiplier | Normal distribution | 2.326 |
| **1-day 99% VaR** | 0.66 × 2.326 | **₹1.53 crore** |
| **10-day 99% VaR** | 1.53 × √10 | **₹4.83 crore** |

Read it precisely: **on 99 days out of 100, one day's loss on this book should be less than ₹1.53 crore.** It says nothing about the hundredth day.

That silence is VaR's known weakness and the reason it is never used alone. The regulatory response has been to supplement or replace it with **expected shortfall**, which averages the losses beyond the threshold and therefore does describe the tail, and to require stress testing against specific historical and hypothetical scenarios regardless of what the statistics say.

The same limitation appeared in Volume 1. The 99.9th percentile that set the IRB capital requirement, and the ₹62.77 crore loss that sat inside the tail of the loss distribution, are the identical shape of problem: a percentile tells you where a line is, not what lies past it.

---

## Part 7 — Where every product lands

One table, joining this note to both volumes.

| Product | Book | Accounting | Capital treatment | Liquidity treatment | Appears in |
|---|---|---|---|---|---|
| **Government bonds ₹400 crore** | Banking | Amortised cost or FVOCI | Credit risk RWA at 0% | Level 1 HQLA at no haircut; 5% RSF; SLR in Form A | Capital return, LCR, NSFR, structural liquidity, Form A |
| **Corporate bonds ₹120 crore** | Banking | FVOCI | Credit risk RWA at 100% — ₹120 crore | Level 2A HQLA at a 15% haircut; 50% RSF | Capital return, LCR, NSFR |
| **Trading inventory** | Trading | Fair value through profit and loss | Market risk RWA — ₹40 crore | Generally excluded from HQLA | Capital return, market risk return |
| **Equities** | Either | FVPL, or FVOCI by election | Punitive weight; deducted from CET1 where in financial institutions | Not HQLA | Capital return |
| **FX positions** | Either | Fair value | Market risk RWA for the net open position | Currency-specific LCR where material | Capital return, net open position return |
| **Interest rate swap** | Banking, as a hedge | Fair value; hedge accounting if documented | Counterparty credit risk RWA, plus a CVA charge | Collateral flows are LCR outflows | Capital return, LCR, derivatives returns |
| **Repo** | Banking | Secured borrowing — the security stays on balance sheet | Counterparty risk on the cash leg | Funding, and the mechanism that turns HQLA into cash | LCR, NSFR, Form A |

Two rows repay a second look.

**The repo row.** In a repo the security is legally sold, yet it stays on the balance sheet, because the bank retains the risk and rewards — it will buy the bond back at an agreed price whatever happens to its value in between. **Accounting follows economic substance, not legal form**, and that principle decides the treatment of securitisations, sale-and-leasebacks and a large part of structured finance.

**The swap row.** Hedge accounting is available only if the hedge relationship is **documented at inception** and demonstrated to be effective. Without that documentation the swap is fair-valued through profit and loss while the exposure it hedges sits at amortised cost, so a perfect economic hedge produces violently swinging reported earnings. The hedge works and the accounting does not — a documentation failure with an eight-figure consequence, and one of the cleanest examples of why the paperwork in Volume 2 is not administrative.

---

## Reference numbers

| Figure | Value |
|---|---:|
| Reference bond | 5 years, 7% coupon, ₹100 face |
| Price at 6% / 7% / 8% yield | ₹104.21 / ₹100.00 / ₹96.01 |
| Accrued interest, 120 days | ₹2.30 |
| Clean and dirty price at 8% | ₹96.01 and ₹98.31 |
| Macaulay duration | 4.39 years |
| Modified duration | 4.10 |
| Predicted vs actual on +100 bp | −4.10% vs −3.99% |
| DV01 on the ₹400 crore book | ₹16.4 lakh per bp |
| Value change on 100 bp | ₹16.4 crore |
| 1-day 99% VaR | ₹1.53 crore |
| 10-day 99% VaR | ₹4.83 crore |
| USD/INR spot and 1-year forward | 86.00 and 87.82 |
| Forward premium | 1.82, or 2.11% |
| Swap notional / market value at +200 bp | ₹100 crore / ₹8 crore |
| Call option strike, premium, break-even | ₹500, ₹30, ₹530 |
| Market risk RWA | ₹40 crore |

Yield levels, haircuts, risk weights and net open position limits are illustrative and subject to change; marked **[verify]** where they appear.

---

## Acronyms

| Term | Expansion |
|---|---|
| CVA | Credit valuation adjustment |
| DV01 | Dollar value of one basis point |
| ES | Expected shortfall |
| FVOCI | Fair value through other comprehensive income |
| FVPL | Fair value through profit and loss |
| G-sec | Government security |
| MIBOR | Mumbai interbank offered rate |
| NOP | Net open position |
| OTC | Over the counter |
| PFE | Potential future exposure |
| VaR | Value at risk |
| YTM | Yield to maturity |

---

## Recall check

1. What is the only real difference between a ₹100 crore loan and ₹100 crore of bonds?
2. A 7% bond, market yields rise to 8%, nothing about the issuer changes. Why does the price fall, and to what?
3. What is YTM, and which number in Volume 1 is it the same idea as?
4. You buy a bond four months after the last coupon. Which price is quoted, which price do you pay, and what is the difference called?
5. Modified duration is 4.10. Yields rise 100 bp and the price falls 3.99%, not 4.10%. Why, and does the error favour you?
6. Convert a ₹400 crore holding at duration 4.10 into the number a treasury desk would actually quote.
7. Why does a floating rate note have almost no duration, and which Volume 2 problem would holding them have reduced?
8. The one-year forward dollar costs more than spot. Does the market expect the rupee to weaken?
9. A ₹100 crore notional swap is worth ₹8 crore. Which of those is the exposure, and what is missing from it?
10. Draw the buyer's payoff on a ₹500 call bought for ₹30. Where is the maximum loss, where is break-even, and what does the seller's picture look like?
11. Vega exists for options and not for swaps. Why?
12. The same government bond, banking book or trading book. Name the three things that change.
13. In a repo the security is legally sold and stays on the balance sheet. What principle decides that?
14. 1-day 99% VaR is ₹1.53 crore. State exactly what that means, and what it does not.
15. Which single number in this note appears in five different regulatory returns?

---

## The compression

Everything traded in capital markets is a promise, and the two questions asked of every one of them are what it is worth today and how much that changes when something moves.

A bond is a loan cut into identical standardised pieces so it can be sold, which is the only thing separating it from the loan in Volume 1. Its price moves opposite to its yield, because a fixed stream of coupons is worth less when better returns are available elsewhere. How far it moves is duration, expressed in money as DV01, and that single number is how a treasury desk holds a position in its head. Corporate bonds add a credit spread on top, which is the traded, continuously revised version of the PD and LGD that took a whole volume to estimate.

A share is the last claim on a company, below every lender, which is why its upside is unlimited and why it is the only capital a regulator fully trusts. A bank holds almost none, because banks holding each other's equity is how the system's capital gets counted twice.

A currency forward is not a forecast. It is the spot rate adjusted by the interest rate difference, because otherwise a riskless profit would exist — which makes an FX forward a rates position wearing a currency costume.

A derivative is a claim whose size depends on another price. Forwards, futures and swaps are linear and symmetric; options are neither, and an option is insurance with a market price. The number to distrust is notional, which is never paid — the exposure is the mark-to-market plus how much worse it could get, and unlike a loan it can be negative next week.

Where any of it sits — banking book or trading book — is a statement about intent, and it decides the accounting, the capital and the return. It is expensive to change for exactly the reason it is tempting to change, which is why it is one of the most governed fields in the bank.

And every risk number here has the same shape as one in the earlier volumes. VaR gives a percentile and says nothing about what lies past it, which is the identical limitation as the 99.9th percentile that set the IRB capital requirement. Duration is a straight line drawn against a curve, which is why it is slightly wrong in the holder's favour every time. Both are useful, both are approximations, and knowing which approximation you are relying on is most of the job.
