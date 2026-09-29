---
title: "Derivatives, Counterparty Credit Risk & CVA — Cheatsheet"
description: "Derivatives, counterparty credit risk and CVA from absolute zero, with one running example."
subject: finance
format: masterclass
order: 2
status: live
updated: 2026-09-29
verified: false
tags:
  - counterparty credit risk
  - cva
  - derivatives
  - basel 3.1
  - ifrs 9
---

*Built for someone who has never met a derivative. Every term is explained the first time it appears. One running example carries you from start to finish.*

---

## The running example — meet the two sides

We follow **one bank** and **one client** through the whole note.

| Who | What they do | What worries them |
|---|---|---|
| **Our Bank** | An Indian bank in Mumbai | Losing money if a client fails to pay |
| **The Exporter** | Makes auto parts in Pune and sells them to buyers in the US. Gets paid in **US dollars**, but pays salaries and suppliers in **rupees** | The dollar getting weaker before the money arrives |

**Today:** 1 US dollar = ₹84.
**The Exporter's problem:** it will receive **$1 million in 3 months**. Nobody knows what a dollar will be worth in rupees then.

- If the dollar stays at ₹84 → the Exporter gets ₹8.4 crore.
- If the dollar falls to ₹80 → it gets only ₹8.0 crore. **₹40 lakh gone**, through no fault of its own.
- If the dollar rises to ₹88 → it gets ₹8.8 crore. A lucky ₹40 lakh extra.

The Exporter makes auto parts, not currency bets. It wants **certainty**. That is where derivatives come in.

---

## The whole topic on one page

<svg viewBox="0 0 360 600" width="100%" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
  <defs>
    <marker id="ah" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#94a3b8"/></marker>
  </defs>
  <g font-size="12">
    <rect x="20" y="10" width="320" height="66" rx="10" fill="#eff6ff" stroke="#2563eb"/>
    <text x="36" y="34" font-weight="700" fill="#1d4ed8">1 · Derivative</text>
    <text x="36" y="56" fill="#334155">A contract whose value moves with a price</text>
    <line x1="180" y1="76" x2="180" y2="92" stroke="#94a3b8" stroke-width="2" marker-end="url(#ah)"/>
    <rect x="20" y="96" width="320" height="66" rx="10" fill="#f0fdf4" stroke="#16a34a"/>
    <text x="36" y="120" font-weight="700" fill="#15803d">2 · Exposure</text>
    <text x="36" y="142" fill="#334155">Sometimes the client ends up owing the bank</text>
    <line x1="180" y1="162" x2="180" y2="178" stroke="#94a3b8" stroke-width="2" marker-end="url(#ah)"/>
    <rect x="20" y="182" width="320" height="66" rx="10" fill="#fef2f2" stroke="#dc2626"/>
    <text x="36" y="206" font-weight="700" fill="#b91c1c">3 · Counterparty Credit Risk</text>
    <text x="36" y="228" fill="#334155">The client might go bust before paying</text>
    <line x1="180" y1="248" x2="180" y2="264" stroke="#94a3b8" stroke-width="2" marker-end="url(#ah)"/>
    <rect x="20" y="268" width="320" height="66" rx="10" fill="#fffbeb" stroke="#d97706"/>
    <text x="36" y="292" font-weight="700" fill="#b45309">4 · Measure it</text>
    <text x="36" y="314" fill="#334155">EE, EPE, PFE, EAD — how big could it get?</text>
    <line x1="180" y1="334" x2="180" y2="350" stroke="#94a3b8" stroke-width="2" marker-end="url(#ah)"/>
    <rect x="20" y="354" width="320" height="66" rx="10" fill="#f5f3ff" stroke="#7c3aed"/>
    <text x="36" y="378" font-weight="700" fill="#6d28d9">5 · Shrink it</text>
    <text x="36" y="400" fill="#334155">Netting, collateral, central clearing</text>
    <line x1="180" y1="420" x2="180" y2="436" stroke="#94a3b8" stroke-width="2" marker-end="url(#ah)"/>
    <rect x="20" y="440" width="320" height="66" rx="10" fill="#f1f5f9" stroke="#475569"/>
    <text x="36" y="464" font-weight="700" fill="#334155">6 · Capital — SA-CCR</text>
    <text x="36" y="486" fill="#334155">Regulator: how much cushion must you hold?</text>
    <line x1="180" y1="506" x2="180" y2="522" stroke="#94a3b8" stroke-width="2" marker-end="url(#ah)"/>
    <rect x="20" y="526" width="320" height="66" rx="10" fill="#ecfeff" stroke="#0891b2"/>
    <text x="36" y="550" font-weight="700" fill="#0e7490">7 · Price — CVA</text>
    <text x="36" y="572" fill="#334155">What is that default risk worth today, in ₹?</text>
  </g>
</svg>

**Read the note in exactly this order.** Each step needs the one before it.

---

## Part 1 — Derivatives from zero

### 1.1 Three words you need first

| Word | Plain meaning | In our example |
|---|---|---|
| **Price risk** | The danger that a price moves against you | The dollar might fall |
| **Underlying** | The thing whose price you are worried about | The USD/INR exchange rate |
| **Derivative** | A contract whose value **comes from** (is *derived* from) the underlying | A deal fixing the dollar rate today |

> **One line to keep:** a derivative is a promise about a price. Its value goes up and down as that price goes up and down.

### 1.2 Why anyone uses derivatives

| Purpose | Plain meaning | Example |
|---|---|---|
| **Hedge** | Cancel out a risk you already have | The Exporter fixes the dollar rate so a falling dollar can't hurt it |
| **Speculate** | Take a bet to make money | A trader who has no dollars bets the dollar will rise |
| **Arbitrage** | Earn a small, near-riskless profit from the same thing priced differently in two places | Buy dollars cheap in one market, sell them dearer in another |

Most bank clients (exporters, importers, borrowers) **hedge**. Keep that in mind — it matters later for wrong-way risk.

### 1.3 The four building blocks

There are only four basic shapes. Everything else is a mix of these.

#### Forward — "fix today, swap later"

**Forward** = a private agreement to buy or sell something **on a future date** at a price **fixed today**.

**Our example:** the Exporter signs a forward with Our Bank:
*"In 3 months, I will sell you $1 million, and you will pay me ₹84 per dollar."*

Now watch what happens on the day, for three possible dollar rates:

| Dollar rate in 3 months | Exporter gets from bank | Exporter would have got in the market | Who is better off? |
|---|---|---|---|
| ₹80 | ₹8.4 crore | ₹8.0 crore | **Exporter** by ₹40 lakh (bank is down ₹40 lakh) |
| ₹84 | ₹8.4 crore | ₹8.4 crore | Nobody |
| ₹88 | ₹8.4 crore | ₹8.8 crore | **Bank** by ₹40 lakh (it buys dollars worth ₹88 for ₹84) |

- The Exporter always gets ₹8.4 crore. **Certainty achieved.** That was the whole point.
- But look at the last column. **Nobody knows today who will end up owing whom.**

> **This one table is the seed of the entire topic.** When the dollar rises, the Exporter owes Our Bank value. If the Exporter disappears at that moment, Our Bank loses. That is counterparty credit risk.

#### Future — "a forward, but on an exchange"

**Exchange** = an organised public marketplace, like the NSE (National Stock Exchange of India).
**Future** = the same idea as a forward, but:

- **Standardised** — fixed sizes and dates (e.g. USD/INR futures on NSE come in lots of $1,000).
- **Traded on an exchange**, not privately.
- **Settled daily** — gains and losses are paid in cash every single day, not at the end.
- A **clearing house** (explained in Part 4) stands in the middle, so you never depend on the stranger on the other side.

**Why it matters for us:** futures carry very little counterparty risk. Forwards do. That's why this note is mostly about private deals.

#### Swap — "exchange one stream of payments for another"

**Interest rate** = the price of borrowing money, as a % per year.
**Fixed rate** = stays the same for the whole loan (say 7%).
**Floating rate** = resets every few months to follow a **benchmark rate**.
**Benchmark rate** = a published rate everyone agrees to use. In India the main one for swaps is **MIBOR** (Mumbai Interbank Offered Rate — roughly, the rate at which banks lend to each other overnight).

**Our example:** the Exporter has also borrowed **₹100 crore at a floating rate**. If rates rise, its interest bill rises. It wants a steady bill.

It signs an **interest rate swap** with Our Bank for 5 years:

- The Exporter **pays Our Bank a fixed 7%**.
- Our Bank **pays the Exporter the floating rate**.
- The Exporter uses the floating money it receives to pay its loan. Net effect: its cost is **locked at 7%**.

Only the **difference** changes hands. Look at one year:

| Floating rate that year | Exporter owes bank (7%) | Bank owes Exporter (floating) | Net payment |
|---|---|---|---|
| 6% | ₹7 crore | ₹6 crore | **Exporter pays bank ₹1 crore** |
| 7% | ₹7 crore | ₹7 crore | Nothing |
| 8% | ₹7 crore | ₹8 crore | **Bank pays Exporter ₹1 crore** |

- **Notional** = the ₹100 crore used to calculate payments. **It is never paid over.** It is just a reference size.
- **Net settlement** = only the difference is paid.
- Again: **who owes whom flips** as rates move.

> **Never confuse notional with risk.** A ₹100 crore swap might put only ₹2 crore at risk. We will measure the real number in Part 3.

#### Option — "the right, but not the duty"

**Option** = a contract giving the **buyer the right, but not the obligation,** to buy or sell at a fixed price.

| Term | Plain meaning |
|---|---|
| **Call option** | Right to **buy** at a fixed price |
| **Put option** | Right to **sell** at a fixed price |
| **Strike price** | The fixed price written in the option |
| **Premium** | The price the buyer pays upfront for this right. The seller keeps it no matter what |
| **Exercise** | Using the right |

**Our example:** instead of a forward, the Exporter buys a **put on $1 million at strike ₹84**, paying a premium of **₹10 lakh**.

| Dollar in 3 months | What the Exporter does | Result |
|---|---|---|
| ₹80 | **Exercises** — sells to the bank at ₹84 | Protected. Gets ₹8.4 crore |
| ₹88 | **Walks away** — sells in the market at ₹88 | Gets ₹8.8 crore. Only lost the ₹10 lakh premium |

**Why options are special for credit risk:**

- After the premium is paid, only **the seller** has anything left to do (pay up if the buyer exercises).
- So only **the buyer** has counterparty risk — risk that the seller fails.
- Credit risk here is **one-way**. Forwards and swaps are **two-way**.

### 1.4 Words you will see everywhere

| Term | Plain meaning | Example |
|---|---|---|
| **OTC (over-the-counter)** | A private deal between two parties, no exchange in the middle | Our Bank's forward with the Exporter. **This is where counterparty risk lives** |
| **Exchange-traded** | A standard contract bought and sold on an exchange | NSE currency futures |
| **Counterparty** | The other side of the contract | For Our Bank, the counterparty is the Exporter |
| **MTM (mark-to-market)** | What the contract is worth **today** if you had to close it at today's prices | See below |
| **In the money** | The contract has positive value for you — the other side owes you | Bank, when the dollar is at ₹88 |
| **Out of the money** | Negative value for you — you owe the other side | Bank, when the dollar is at ₹80 |
| **Long** | You gain if the price **rises** | Our Bank is long dollars in the forward (it is buying them) |
| **Short** | You gain if the price **falls** | The Exporter is short dollars (it is selling them) |

**MTM in our example:**
One month later, the market rate for a dollar delivered on the same date has moved to ₹86.
Our Bank's contract lets it buy at ₹84 something now worth ₹86.

- Value to Our Bank = (86 − 84) × $1 million = **+₹20 lakh**.
- Value to the Exporter = **−₹20 lakh**.
- That ₹20 lakh is the **MTM**. Tomorrow it will be a different number.

(For simplicity we ignore discounting to today's rupees here; banks do discount.)

---

## Part 2 — Why derivatives create credit risk

### 2.1 The bad day

Two months in. The dollar has jumped. The MTM to Our Bank is **+₹40 lakh**.
Then the Exporter **goes bankrupt**.

**Why does Our Bank lose money?**

- Banks don't bet. Our Bank had already promised those dollars onward to someone else (another client, or the market), expecting to get them from the Exporter at ₹84.
- The Exporter's dollars will never come.
- Our Bank must now buy the same dollars **in today's market at ₹88**.
- It pays ₹4 more per dollar × $1 million = **₹40 lakh loss**.

**Replacement cost (RC)** = the cost of replacing a lost contract with a new one at today's price. Here it is ₹40 lakh — exactly the MTM.

### 2.2 The lucky twist

Now flip it. The dollar has **fallen**. MTM to Our Bank is **−₹40 lakh** (the bank owes the Exporter). The Exporter goes bankrupt.

- Does Our Bank lose? **No.**
- The Exporter's liquidator (the official who sells off a bankrupt company's assets) will still collect the ₹40 lakh from Our Bank. The bank just pays what it owed anyway.

So only **positive** value can be lost:

$$\text{Exposure} = \max(\text{MTM}, 0)$$

where:

- **MTM** = today's value of the contract to the bank.
- **max(…, 0)** = "take the MTM if it's positive, otherwise zero".

### 2.3 Definition

**Counterparty Credit Risk (CCR)** = the risk that the other side of a derivative **defaults while the contract is worth something to you**.

**Default** = failing to pay what you owe (bankruptcy, missed payment).

### 2.4 Loan vs derivative — the crucial difference

| | Loan | Derivative |
|---|---|---|
| Who owes whom? | Borrower always owes the bank | **Either side** — it flips as prices move |
| How much? | Known: the outstanding balance | **Unknown** — depends on future prices |
| Risk to the bank | One-way | **Two-way** |
| Today's exposure | ₹1 crore loan = ₹1 crore exposure | ₹100 crore swap = maybe ₹2 crore exposure, maybe ₹8 crore next year |

> **Everything that follows is about one problem:** how do you manage a credit risk when you don't know how big it will be?

---

## Part 3 — Measuring exposure

### 3.1 The idea: simulate many futures

We can't know tomorrow's dollar rate. So banks do what weather forecasters do:

1. Generate **thousands of possible futures** for the dollar (some up, some down, some flat). Each is called a **scenario**.
2. In each scenario, **value the contract** at future dates.
3. **Summarise** all those values with a few numbers.

This is called **Monte Carlo simulation** (named after the casino — it's organised dice-rolling).

### 3.2 A tiny simulation you can do in your head

Take the forward. Look **one year ahead**. Pretend we run just **5 scenarios**:

| Scenario | MTM to Our Bank | Exposure = max(MTM, 0) |
|---|---|---|
| 1 | −₹30 lakh | 0 |
| 2 | −₹10 lakh | 0 |
| 3 | +₹5 lakh | ₹5 lakh |
| 4 | +₹20 lakh | ₹20 lakh |
| 5 | +₹50 lakh | ₹50 lakh |

From this one column we get the two most important numbers:

- **Expected Exposure (EE)** = the **average** of the exposure column = (0 + 0 + 5 + 20 + 50) ÷ 5 = **₹15 lakh**.
  *The zeros count.* In those scenarios the bank owes money, so nothing can be lost.
- **Potential Future Exposure (PFE)** = a **bad-case** number = here, the worst one = **₹50 lakh**.

In real life with thousands of scenarios, PFE is taken at a **percentile**.
**Percentile** = the value below which a given % of scenarios fall. **95th percentile** = only 5 scenarios in 100 are worse.

### 3.3 From one date to the whole life

Repeat the calculation at many future dates. You get a list of EEs:

| Future date | EE |
|---|---|
| 3 months | ₹10 lakh |
| 6 months | ₹15 lakh |
| 9 months | ₹18 lakh |
| 12 months | ₹20 lakh |

**Expected Positive Exposure (EPE)** = the **average EE over time** = (10 + 15 + 18 + 20) ÷ 4 = **₹15.75 lakh**.

One number for the whole life of the trade. Used for **pricing** and for **CVA** (Part 6).

### 3.4 The regulator's cautious twist — Effective EE

Sometimes EE **dips** (e.g. a payment falls due and exposure drops). But the bank will probably **roll into a new trade** with the same client, so the dip is not real safety.

**Effective EE** = EE that is **never allowed to fall** — if it dips, keep the previous high.

| Date | EE | Effective EE |
|---|---|---|
| 3m | 10 | 10 |
| 6m | 15 | 15 |
| 9m | **12** (dip) | **15** (held at the high) |
| 12m | 20 | 20 |

**Effective EPE (EEPE)** = average of Effective EE over the **first year** = (10 + 15 + 15 + 20) ÷ 4 = **₹15 lakh**.
Regulators use EEPE in the advanced capital method (Part 5).

### 3.5 EAD — the bridge to capital

**EAD (Exposure at Default)** = one single exposure number fed into the capital formula.

You already know the credit risk trio:

- **PD** — Probability of Default (chance the client fails)
- **LGD** — Loss Given Default (share of the exposure lost if it fails)
- **EAD** — how much is exposed when it fails

For a loan, EAD ≈ the balance. For derivatives, EAD comes from **SA-CCR** (Part 5).

### 3.6 All measures in one table

| Measure | Plain meaning | Question it answers | Used for |
|---|---|---|---|
| **CE** — Current Exposure | max(MTM today, 0) | What do they owe me right now? | Daily monitoring |
| **EE** — Expected Exposure | Average exposure at one future date | What do they typically owe me then? | Building block |
| **EPE** — Expected Positive Exposure | Average EE across time | Typical exposure over the life? | Pricing, CVA |
| **PFE** — Potential Future Exposure | High percentile of exposure at a date | How bad could it get? | **Limits** |
| **EEPE** — Effective EPE | Non-falling EE averaged over year one | Cautious typical exposure | Advanced capital |
| **EAD** — Exposure at Default | One regulatory number | What goes into capital? | Capital |

**Limit** = a maximum a bank allows. *"PFE to the Exporter must stay below ₹5 crore."* Traders check this before doing a new deal.

### 3.7 The formulas, written properly

$$\text{Exposure}(t) = \max(V_t, 0)$$

$$EE(t) = \mathbb{E}\left[\max(V_t, 0)\right]$$

$$EPE = \frac{1}{T}\int_0^T EE(t)\,dt$$

where:

- $V_t$ = value of the contract at future time $t$.
- $\mathbb{E}[\;]$ = "average over all scenarios".
- $T$ = maturity (the end date of the trade).
- $\int_0^T \ldots\,dt$ = "add up continuously from today to maturity". Divided by $T$, it becomes an average over time.

### 3.8 Exposure shapes — how exposure moves over a trade's life

<svg viewBox="0 0 360 260" width="100%" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
  <g font-size="11">
    <line x1="40" y1="210" x2="345" y2="210" stroke="#475569"/>
    <line x1="40" y1="210" x2="40" y2="40" stroke="#475569"/>
    <text x="300" y="228" fill="#475569">Time →</text>
    <text x="8" y="40" fill="#475569">EE</text>
    <text x="36" y="228" fill="#475569">Today</text>
    <text x="310" y="245" fill="#475569">Maturity</text>
    <polyline fill="none" stroke="#2563eb" stroke-width="3" points="40,210 80,168 120,150 160,137 200,127 240,119 280,112 330,105"/>
    <polyline fill="none" stroke="#16a34a" stroke-width="3" points="40,210 80,160 120,140 150,135 180,140 220,158 260,180 300,198 330,210"/>
    <polyline fill="none" stroke="#dc2626" stroke-width="3" points="40,210 80,160 120,135 160,115 200,98 240,82 280,68 330,52"/>
    <rect x="50" y="10" width="10" height="10" fill="#2563eb"/><text x="64" y="19" fill="#334155">FX forward</text>
    <rect x="140" y="10" width="10" height="10" fill="#16a34a"/><text x="154" y="19" fill="#334155">Interest rate swap</text>
    <rect x="50" y="26" width="10" height="10" fill="#dc2626"/><text x="64" y="35" fill="#334155">Cross-currency swap</text>
  </g>
</svg>

| Product | Shape | Why, in one sleepy line |
|---|---|---|
| **FX forward** (blue) | Keeps **rising** till the end | The further away the date, the more the dollar can wander. One big payment at the end |
| **Interest rate swap** (green) | **Hump** — rises, peaks around a third of the way, falls to zero | Two forces fight: uncertainty grows, but each year there are fewer payments left to lose |
| **Cross-currency swap** (red) | Keeps **rising**, steeply | Payments in two currencies **plus** a large exchange of the full amounts at the end |

**Cross-currency swap** = a swap where each side pays in a different currency (e.g. one pays rupees, the other pays dollars), usually swapping the full amounts at the start and end.

> **Sleepy picture of the swap hump:** a swap is like a stack of forwards, one per payment date. Each year, one forward expires and falls off the stack. Early on, uncertainty wins. Later, the shrinking stack wins.

---

## Part 4 — Shrinking the risk

Four tools. Learn them in this order.

### 4.1 Netting — "add everything up first"

**ISDA** = International Swaps and Derivatives Association, the global industry body for derivatives.
**ISDA Master Agreement** = the standard umbrella contract two parties sign **once**. Every trade they do afterwards hangs under it.
**Close-out netting** = if one side defaults, **all** trades under that umbrella are ended together and squashed into **one net number**.

**Our example.** Our Bank now has three trades with the Exporter:

| Trade | What it is | MTM to Our Bank |
|---|---|---|
| A | The dollar forward | +₹10 crore |
| B | The interest rate swap | −₹6 crore |
| C | An option | +₹3 crore |

The Exporter goes bankrupt. What can Our Bank lose?

**Without netting** — the liquidator **cherry-picks**:

- Refuses to pay A and C (money the Exporter owes): bank loses **10 + 3 = ₹13 crore**.
- Still demands B (money the bank owes): bank must pay ₹6 crore in full.
- **Exposure = ₹13 crore.**

**With netting** — one pot:

- 10 − 6 + 3 = **+₹7 crore**.
- **Exposure = max(7, 0) = ₹7 crore.**

**Cherry-picking** = choosing to enforce only the contracts that suit you. Netting stops it.
**Netting set** = the group of trades that legally net together (usually all trades under one ISDA).

$$\text{Net exposure} = \max\left(\sum_i V_i,\; 0\right)$$

where:

- $V_i$ = MTM of trade $i$ in the netting set.
- $\sum_i$ = add up all trades.

**Payment netting** (a smaller cousin) = on any day when both sides owe each other money, only the difference is paid. We saw this in the swap.

### 4.2 Collateral — "give me a deposit"

**Collateral** = cash or safe securities handed over to cover what you owe. If you default, the other side keeps it.
**CSA (Credit Support Annex)** = the part of the ISDA agreement that sets the collateral rules — who posts, how often, what counts.

| Term | Plain meaning | Our example |
|---|---|---|
| **Variation Margin (VM)** | Collateral that moves **daily** to match **today's** MTM | MTM is +₹7 crore, so the Exporter posts ₹7 crore |
| **Initial Margin (IM)** | Extra buffer posted **upfront**, on top of VM, to cover **future** moves during a default | The Exporter posts another ₹1 crore at the start |
| **Threshold** | Exposure allowed **before** any collateral is called | Threshold ₹2 crore → Exporter posts only 7 − 2 = ₹5 crore |
| **MTA (Minimum Transfer Amount)** | Smallest call worth making | MTA ₹50 lakh → a ₹30 lakh move triggers no call |
| **Haircut** | Discount on the value of non-cash collateral, because its price can fall | A government bond worth ₹100 counts as ₹98 |

**Continuing the example:** net exposure ₹7 crore, threshold ₹2 crore, so the Exporter has posted **₹5 crore** of collateral.

**Exposure after collateral = max(7 − 5, 0) = ₹2 crore.**

<svg viewBox="0 0 360 200" width="100%" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
  <g font-size="12">
    <text x="10" y="20" font-weight="700" fill="#334155">Our Bank's exposure to the Exporter</text>
    <text x="10" y="55" fill="#334155">No netting</text>
    <rect x="120" y="40" width="221" height="24" rx="4" fill="#dc2626"/>
    <text x="300" y="57" fill="#ffffff" font-weight="700">₹13 cr</text>
    <text x="10" y="105" fill="#334155">After netting</text>
    <rect x="120" y="90" width="119" height="24" rx="4" fill="#d97706"/>
    <text x="200" y="107" fill="#ffffff" font-weight="700">₹7 cr</text>
    <text x="10" y="155" fill="#334155">After collateral</text>
    <rect x="120" y="140" width="34" height="24" rx="4" fill="#16a34a"/>
    <text x="160" y="157" fill="#15803d" font-weight="700">₹2 cr</text>
    <text x="10" y="192" fill="#64748b" font-size="11">Same three trades. Legal paperwork cut the risk by 85%.</text>
  </g>
</svg>

### 4.3 Margin Period of Risk — why collateral is never perfect

**MPoR (Margin Period of Risk)** = the gap between the **last time collateral was received** and the moment the bank **finishes closing out** the defaulted trades.

A sleepy walk-through:

| Day | What happens |
|---|---|
| Day 0 | The Exporter posts its last collateral. All square |
| Day 1 | A margin call goes out. The Exporter doesn't pay |
| Days 2–3 | Reminders, legal notices. Is it a delay or a default? |
| Days 4–8 | Default is declared. Bank prepares to replace the trades |
| Day 10 | Trades replaced in the market |

All those days, the **dollar kept moving**. The collateral from Day 0 no longer matches. That gap is **uncovered exposure**.

- Typical MPoR: about **10 business days** for bilateral trades, about **5** for centrally cleared trades.
- **This is exactly what Initial Margin is for** — it covers the move during the MPoR.

### 4.4 Central clearing — "put a referee in the middle"

**Bilateral** = directly between two parties.
**CCP (Central Counterparty)** = a clearing house that steps into the middle of every trade: it becomes **buyer to every seller and seller to every buyer**.
**Novation** = the legal step where the original contract is replaced by two new ones, each with the CCP.

**Sleepy picture:** bicycle wheel. Without a CCP, every bank is tied to every other bank by a string — a tangled web. With a CCP, every bank is a spoke tied only to the hub.

What the CCP demands from every member:

- **VM daily** — no running up losses.
- **IM upfront** — covers the MPoR.
- A contribution to a **default fund** — a shared pot for extreme losses.

**Default waterfall** = the order in which losses are absorbed if a member fails:

1. The defaulter's own IM
2. The defaulter's default-fund contribution
3. The CCP's own money (called **skin in the game**)
4. Other members' default-fund contributions

**India:** **CCIL** (Clearing Corporation of India Ltd) clears most interbank USD/INR forwards, rupee interest rate swaps and government bond trades.

**After 2008**, the G20 (the group of the world's 20 largest economies) required standard OTC derivatives to be centrally cleared. Deals with ordinary companies — like Our Bank's deals with the Exporter — are usually **not** cleared. That is where CCR still bites.

### 4.5 Wrong-way risk — the worst combination

**Wrong-way risk (WWR)** = exposure **rises exactly when** the counterparty becomes **more likely to default**. Two bad things arrive together.

| Type | Plain meaning | Example |
|---|---|---|
| **Specific WWR** | A direct, built-in link | A company posts **its own shares** as collateral. If it fails, the shares crash too — the collateral vanishes when you need it |
| **General WWR** | A link through the wider market | Our Bank buys default protection on Indian Bank A **from** Indian Bank B. A banking crisis makes the protection valuable exactly when B is also likely to fail |

**Right-way risk** = the opposite: exposure rises when the counterparty gets **stronger**.

**Our running example is right-way!**

- When the dollar rises, the Exporter owes Our Bank on the forward (exposure up).
- But a rising dollar also means **the Exporter earns more rupees** from its US sales. It is **stronger**.
- Most genuine hedges are right-way. Speculative trades are where WWR often hides.

---

## Part 5 — Capital: SA-CCR

**Capital** = the bank's own money (shareholders' funds) kept aside to absorb losses, so depositors don't lose. Regulators decide the minimum.

### 5.1 Where it came from

**CEM (Current Exposure Method)** = the older method Indian banks long used:

$$EAD_{CEM} = \text{Current exposure} + \text{Notional} \times \text{add-on factor}$$

- Simple, but crude: it gave little credit for collateral and weak credit for netting.

**SA-CCR (Standardised Approach for Counterparty Credit Risk)** = Basel's replacement. **Basel** = the global committee (Basel Committee on Banking Supervision) that sets bank capital standards; each country, including India via the RBI, puts them into local rules.

### 5.2 The formula

$$EAD = \alpha \times (RC + PFE)$$

where:

- $\alpha$ (alpha) = **1.4**, a fixed safety buffer set by Basel.
- $RC$ = **replacement cost** — what you'd lose if they defaulted **today**, after collateral.
- $PFE$ = **potential future exposure** — an add-on for how much it could **grow**.

**Sleepy version:** *EAD = 1.4 × (what they owe me now + how much more they might owe me).*

### 5.3 Replacement Cost

For trades **without** daily collateral (unmargined):

$$RC = \max(V - C,\; 0)$$

For trades **with** daily collateral (margined):

$$RC = \max(V - C,\; TH + MTA - NICA,\; 0)$$

where:

- $V$ = net MTM of the netting set.
- $C$ = collateral held (after haircuts).
- $TH$ = threshold, $MTA$ = minimum transfer amount.
- $NICA$ = **Net Independent Collateral Amount** — roughly, the initial margin you hold.
- The middle term says: even with perfect margining, you can still be exposed up to threshold + MTA.

### 5.4 PFE

$$PFE = \text{multiplier} \times \text{AddOn}$$

**AddOn** = Basel's estimate of how much exposure could grow. It is built separately for each **asset class** (interest rates, FX, credit, equity, commodities), roughly as:

$$\text{AddOn}_{trade} \approx \text{Notional} \times \text{Supervisory factor} \times \text{Maturity factor} \times \delta$$

where:

- **Supervisory factor** = how volatile Basel thinks the asset class is. Examples: **0.5%** for interest rates, **4%** for FX.
- **Maturity factor** (unmargined) = $\sqrt{\min(M, 1\text{ year}) / 1\text{ year}}$. Trades shorter than a year get less; a year or longer counts as 1.
- $\delta$ (**supervisory delta**) = +1 if you gain when the price rises (long), −1 if short. Options get a value in between.

**Multiplier** = a discount (between 0.05 and 1) for holding **more collateral than you need**:

$$\text{multiplier} = \min\left\{1,\; 0.05 + 0.95 \times \exp\left(\frac{V - C}{2 \times 0.95 \times \text{AddOn}}\right)\right\}$$

where:

- $\exp(\;)$ = the exponential function. When $V - C$ is positive (under-collateralised), the multiplier is 1. When you hold surplus collateral ($V - C$ negative), it shrinks towards 0.05.

### 5.5 Worked example — sleepy mode

Our Bank has one **USD/INR forward** with the Exporter:

- Size: $10 million = **₹84 crore** notional.
- Maturity: **6 months**. No daily collateral.
- MTM to Our Bank today: **+₹2 crore**.

**Step 1 — RC**
No collateral, so RC = max(2 − 0, 0) = **₹2 crore**.

**Step 2 — AddOn**

- Supervisory factor for FX = 4%.
- Maturity factor = √(0.5 ÷ 1) = **0.707**.
- Delta = +1 (bank is long dollars).
- AddOn = 84 × 4% × 0.707 × 1 = **₹2.38 crore**.

**Step 3 — Multiplier**
V − C = +2 (positive) → multiplier = **1**.
PFE = 1 × 2.38 = **₹2.38 crore**.

**Step 4 — EAD**
EAD = 1.4 × (2 + 2.38) = 1.4 × 4.38 = **₹6.13 crore**.

**Step 5 — Capital**

- Risk weight for an unrated corporate = say 100% → **RWA** (Risk-Weighted Assets) = ₹6.13 crore.
- Minimum total capital in India = 9% of RWA (before extra buffers).
- Capital ≈ 6.13 × 9% = **about ₹55 lakh**.

> A ₹84 crore forward needs about ₹55 lakh of Our Bank's own money set aside.

**Now add collateral.** Suppose the Exporter had posted ₹5 crore:

- V − C = 2 − 5 = −3 → RC = max(−3, 0) = **0**.
- Multiplier = 0.05 + 0.95 × exp(−3 ÷ (2 × 0.95 × 2.38)) = 0.05 + 0.95 × 0.515 ≈ **0.54**.
- PFE = 0.54 × 2.38 ≈ **₹1.28 crore**.
- EAD = 1.4 × (0 + 1.28) ≈ **₹1.80 crore** — down from ₹6.13 crore.

That is why banks chase collateral agreements.

### 5.6 The advanced option — IMM

**IMM (Internal Model Method)** = big banks with regulator approval use **their own simulations** (Part 3) instead of the SA-CCR formula:

$$EAD_{IMM} = \alpha \times EEPE$$

where:

- $\alpha$ = 1.4 (regulators may allow a lower value, but not below 1.2).
- $EEPE$ = Effective EPE from Part 3.4.

---

## Part 6 — CVA: the price of the other side's default

### 6.1 The intuition

**Sleepy picture:** a friend owes you ₹100 next year. There's a 10% chance he disappears and you get nothing back. Is that IOU worth ₹100 today? **No.** Roughly ₹90. The missing ₹10 is the **price of his default risk**.

**CVA (Credit Valuation Adjustment)** = the same idea for derivatives.

$$\text{True value} = \text{Risk-free value} - CVA$$

where:

- **Risk-free value** = what the trade would be worth if the counterparty could never default.
- **CVA** = the reduction for the chance that it can.

The only difference from the IOU: with a derivative, the amount owed is **uncertain** and changes **over time**. So we use EE at every future date.

### 6.2 The formula

$$CVA = LGD \times \sum_{i} EE(t_i) \times PD(t_{i-1}, t_i) \times DF(t_i)$$

where:

- $LGD$ = **Loss Given Default** = 1 − recovery rate. **Recovery rate** = the share you eventually get back from a bankrupt company. Often 40%, so LGD = **60%**.
- $EE(t_i)$ = expected exposure at future date $t_i$ (Part 3).
- $PD(t_{i-1}, t_i)$ = probability the counterparty defaults **within that slice of time** (e.g. during year 3), called **marginal PD**.
- $DF(t_i)$ = **discount factor** = converts a future rupee into today's rupees. ₹1 in a year at 7% is worth 1 ÷ 1.07 = ₹0.935 today.
- $\sum_i$ = add up across all the time slices.

**Same DNA you already know:** Expected Loss = PD × LGD × EAD. CVA is that, spread across time and brought back to today.

### 6.3 Where the PD comes from — market prices

For CVA, PD is **not** the bank's internal rating PD. It comes from the **market**, because CVA is part of a fair price.

**CDS (Credit Default Swap)** = insurance against a company defaulting. The buyer pays a yearly fee; if the company defaults, the seller pays out the loss.
**Credit spread** = that yearly fee, as a %. It is the market's price for the company's default risk.
**bps (basis points)** = hundredths of a percent. 100 bps = 1%.

A handy approximation:

$$PD_{\text{annual}} \approx \frac{\text{Credit spread}}{LGD}$$

**Example:** the Exporter's credit spread is **120 bps = 1.2%**, LGD = 60%.
PD ≈ 1.2% ÷ 60% = **2% per year**.

(If a company has no CDS, banks use a **proxy** — the spread of similar companies by sector, rating and region.)

### 6.4 Worked example — a 5-year swap, sleepy mode

Our Bank has a 5-year interest rate swap with the Exporter (a bigger one than before). Inputs:

- EE per year (hump shape): 8, 12, 12, 9, 4 — in ₹ crore.
- PD per year = 2%. LGD = 60%. Discount rate = 7%.

| Year | EE (₹ cr) | × PD | × LGD | × DF | = CVA piece (₹ cr) |
|---|---|---|---|---|---|
| 1 | 8 | 2% | 60% | 0.935 | 0.090 |
| 2 | 12 | 2% | 60% | 0.873 | 0.126 |
| 3 | 12 | 2% | 60% | 0.816 | 0.118 |
| 4 | 9 | 2% | 60% | 0.763 | 0.082 |
| 5 | 4 | 2% | 60% | 0.713 | 0.034 |
| **Total** | | | | | **0.45** |

**CVA ≈ ₹0.45 crore = ₹45 lakh.**

Read a row aloud: *"In year 2, the Exporter typically owes us ₹12 crore; there's a 2% chance it fails that year; we'd lose 60% of it; and that loss, in today's money, is worth 87% of face value."*

(Strictly, the PD of year 2 is "survive year 1, then fail in year 2", slightly below 2%. At small PDs the difference is tiny.)

### 6.5 The back-of-envelope version

$$CVA \approx EPE \times \text{Credit spread} \times \text{Duration}$$

where:

- $EPE$ = average EE = (8 + 12 + 12 + 9 + 4) ÷ 5 = **₹9 crore**.
- Credit spread = **1.2%**.
- **Duration** = roughly the life of the trade in years, adjusted for discounting.

Without discounting: 9 × 1.2% × 5 = ₹54 lakh. With discounting the effective duration is nearer 4.2 years → about **₹45 lakh**. Same answer as the table.

> **The one-breath version:** CVA ≈ average exposure × the market's yearly default fee × number of years.

### 6.6 What the bank does with CVA

- **Charges it to the client.** The ₹45 lakh is built into the swap rate. Instead of 7%, the Exporter might be quoted 7.1%. The client rarely sees "CVA" written anywhere.
- **Books it in the accounts.** **Ind AS 113** (India's version of IFRS 13, the fair value accounting standard) requires fair values to reflect counterparty credit risk. So CVA sits on the balance sheet as a reduction in derivative assets.
- **Hedges it.** A **CVA desk** inside the bank manages CVA for all trading desks, typically hedging with CDS.

### 6.7 Why CVA became huge — 2008

The Exporter doesn't default. But the economy wobbles, and its credit spread **doubles from 1.2% to 2.4%**.

- CVA roughly doubles: ₹45 lakh → **₹90 lakh**.
- Our Bank books a **₹45 lakh loss**. **Nobody defaulted.**

This happened at massive scale in 2008. Basel observed that **about two-thirds** of CCR losses in the crisis came from **CVA losses like this**, not from actual defaults.

> **CVA is a daily market risk, not just a default risk.**

---

## Part 7 — The XVA family

**XVA** = the collective name for all the "valuation adjustments" banks add to derivative prices. The X is a placeholder.

| Term | Full name | Plain meaning | Sleepy example |
|---|---|---|---|
| **CVA** | Credit Valuation Adjustment | Cost of **their** default risk | The ₹45 lakh above |
| **DVA** | Debit Valuation Adjustment | Mirror of CVA: the "benefit" from **our own** default risk | If Our Bank might fail, it might never pay what it owes — so its liabilities look smaller |
| **FVA** | Funding Valuation Adjustment | Cost of borrowing money to support trades without collateral | Bank posts collateral to the market but gets none from the Exporter — it must fund the gap |
| **MVA** | Margin Valuation Adjustment | Cost of funding the initial margin you post | IM locked up at a CCP earns little but costs funding |
| **KVA** | Capital Valuation Adjustment | Cost of the capital the trade uses up | The ₹55 lakh of capital from Part 5 has a cost too |

**The DVA paradox:** when Our Bank's own credit gets **worse**, DVA **rises**, and it reports a **gain**. Getting weaker makes you look richer. That's why regulators **exclude DVA gains from capital**.

**Beginner rule:** master CVA fully. Know the rest by name and one line.

---

## Part 8 — CVA capital: a separate charge

After 2008, Basel added a **CVA risk capital charge** — capital for the danger that **CVA itself moves** (like the doubling in 6.7). It is **on top of** SA-CCR capital.

| Approach | Who uses it | Plain idea |
|---|---|---|
| **BA-CVA** (Basic Approach) | Most banks | A formula using each counterparty's EAD, maturity and a supervisory risk weight based on its sector and credit quality |
| **SA-CVA** (Standardised Approach) | Sophisticated banks, with approval | Measures how CVA changes when market inputs move (spreads, rates, FX) — like market-risk capital |
| **Simple option** | Banks with small derivatives books, below a Basel threshold | Set CVA capital equal to CCR capital |

**Sensitivity** = how much a value changes when an input moves a little. SA-CVA is built from these.

> **Two capital charges, two different risks:**
> - **SA-CCR** → the counterparty **defaults**.
> - **CVA charge** → the counterparty's **credit quality worsens** (no default needed).

---

## Part 9 — India notes

- **Common OTC products in Indian banks:** USD/INR forwards (by far the biggest with corporates), MIBOR OIS (swaps on the overnight MIBOR rate), rupee interest rate swaps, currency swaps, FX options.
- **OIS (Overnight Indexed Swap)** = an interest rate swap where the floating side follows an **overnight** rate, compounded. In India, MIBOR OIS is the dominant interest rate derivative.
- **CCIL** clears most interbank forwards and rupee swaps — so a large share of interbank CCR sits with a CCP.
- **Corporate trades** (bank ↔ exporter, importer, borrower) are mostly **bilateral and uncollateralised**. This is where exposure measurement, CVA and wrong-way risk matter most.
- **RBI** has been aligning Indian capital rules with Basel's **SA-CCR** and revised **CVA** frameworks. Check the latest RBI circulars for current effective dates before quoting them.
- **Accounting:** Ind AS 113 (fair value, including CVA/DVA) and Ind AS 109 (how financial instruments, including derivatives, are classified and measured).

---

## Part 10 — Three risks side by side

| | Loan credit risk | CCR (default) | CVA risk |
|---|---|---|---|
| **Loss happens when** | Borrower defaults | Counterparty defaults while owing you | Counterparty's credit spread widens |
| **Exposure** | Known | Uncertain, two-way | Uncertain, two-way |
| **Key number** | EAD = balance | EAD via SA-CCR or IMM | CVA |
| **Where PD comes from** | Internal rating | Internal rating | **Market** (CDS, spreads) |
| **Capital** | Credit risk RWA | CCR RWA | CVA capital charge |
| **Our example** | The Exporter's ₹100 crore loan | The forward and swap defaulting | The spread doubling from 1.2% to 2.4% |

---

## Part 11 — The ten lines to remember

1. A derivative is a **promise about a price**. **Notional is not risk; MTM is.**
2. OTC derivatives create **two-way, uncertain** exposure. That is **CCR**.
3. You lose only if they default **while the trade is in your favour**: exposure = max(MTM, 0).
4. **EE / EPE** = typical exposure (pricing, CVA). **PFE** = bad-case exposure (limits).
5. **Netting** squashes trades into one number. **Collateral** covers what's left. **MPoR** is the gap collateral can't cover.
6. **CCPs** (CCIL in India) sit in the middle and take margin every day.
7. **Wrong-way risk** = exposure rises as the counterparty weakens. Genuine hedges are usually right-way.
8. **SA-CCR:** EAD = 1.4 × (RC + PFE).
9. **CVA** = LGD × Σ EE × PD × DF — the price of their default, using **market** PDs.
10. Two capital charges: **SA-CCR for default**, **CVA charge for spread moves**.

---

## Part 12 — Every term in one table

| Term | One-line meaning |
|---|---|
| Underlying | The price a derivative depends on |
| Derivative | A contract whose value comes from an underlying |
| Forward | Private deal to trade later at a price fixed today |
| Future | Standardised forward on an exchange, settled daily |
| Swap | Exchange of payment streams; only the difference is paid |
| Option | Right, not duty, to buy (call) or sell (put) at a strike price |
| Premium | Upfront price of an option |
| Notional | Reference size of a deal; never paid over in most swaps |
| OTC | Private deal with no exchange in the middle |
| MTM | Today's value of the contract |
| Counterparty | The other side of the contract |
| CCR | Risk they default while the trade is worth something to you |
| Replacement cost (RC) | Cost to replace a lost contract at today's price |
| EE | Average exposure at a future date |
| EPE | Average EE over time |
| Effective EE / EEPE | Non-falling EE / its first-year average |
| PFE | High-percentile exposure — the bad case |
| EAD | Single exposure number used for capital |
| ISDA Master Agreement | One umbrella contract for all trades between two parties |
| Close-out netting | On default, all trades collapse into one net amount |
| Netting set | Trades that legally net together |
| CSA | Collateral rules inside the ISDA |
| VM | Daily collateral matching today's MTM |
| IM | Upfront buffer for future moves |
| Threshold / MTA | Exposure allowed before collateral / smallest call made |
| Haircut | Discount on non-cash collateral |
| MPoR | Days between last collateral and close-out |
| CCP | Clearing house in the middle of every trade |
| Wrong-way risk | Exposure rises as counterparty weakens |
| SA-CCR | Basel formula: EAD = 1.4 × (RC + PFE) |
| IMM | Bank's own model: EAD = α × EEPE |
| CVA | Market price of counterparty default risk |
| CDS / credit spread | Default insurance / its yearly fee |
| DVA, FVA, MVA, KVA | Own-default, funding, margin and capital adjustments |
| BA-CVA / SA-CVA | Basic / sensitivity-based CVA capital approaches |
