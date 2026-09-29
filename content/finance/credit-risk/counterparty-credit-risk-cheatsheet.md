## The story — one bank, one client

We follow **one bank** and **one client** through the whole note.

| Who | What they do |
|---|---|
| **Our Bank** | An Indian bank in Mumbai |
| **The Exporter** | Makes auto parts in Pune, sells them in the US, gets paid in **dollars**, but pays its bills in **rupees** |

**Today:** 1 dollar = ₹84.
**The Exporter's worry:** it will receive **$1 million in 3 months**. If the dollar falls to ₹80 by then, it gets ₹40 lakh less. It wants certainty.

Everything in this note grows out of this one situation.

<svg viewBox="0 0 360 330" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
  <g font-size="12">
    <rect x="10" y="8" width="340" height="54" rx="10" fill="#eff6ff" stroke="#2563eb"/>
    <text x="24" y="30" font-weight="700" fill="#1d4ed8">1 · A promise about a price</text>
    <text x="24" y="50" fill="#334155">The derivative</text>
    <rect x="10" y="74" width="340" height="54" rx="10" fill="#f0fdf4" stroke="#16a34a"/>
    <text x="24" y="96" font-weight="700" fill="#15803d">2 · Its value keeps moving</text>
    <text x="24" y="116" fill="#334155">Sometimes the client owes the bank</text>
    <rect x="10" y="140" width="340" height="54" rx="10" fill="#fef2f2" stroke="#dc2626"/>
    <text x="24" y="162" font-weight="700" fill="#b91c1c">3 · The client might go bust then</text>
    <text x="24" y="182" fill="#334155">Counterparty credit risk</text>
    <rect x="10" y="206" width="340" height="54" rx="10" fill="#fffbeb" stroke="#d97706"/>
    <text x="24" y="228" font-weight="700" fill="#b45309">4 · Estimate it, then shrink it</text>
    <text x="24" y="248" fill="#334155">Exposure, netting, collateral</text>
    <rect x="10" y="272" width="340" height="54" rx="10" fill="#ecfeff" stroke="#0891b2"/>
    <text x="24" y="294" font-weight="700" fill="#0e7490">5 · Put a price tag on it</text>
    <text x="24" y="314" fill="#334155">CVA</text>
  </g>
</svg>

**Five ideas.** Read them in order. Each one needs the one before it.

---

## Idea 1 — A derivative is a promise about a price

**Derivative** = a contract whose value **comes from** the price of something else.
**Underlying** = that something else. Here, the dollar–rupee rate.

The Exporter makes a promise with Our Bank:
*"In 3 months, I'll sell you $1 million at ₹84 — whatever the market rate is then."*

This promise is called a **forward**: a private deal to buy or sell on a future date, at a price fixed today.

**Why do it?** To **hedge** — cancel a risk you already have. The Exporter now knows it will get exactly ₹8.4 crore.

### The four shapes of derivative

You only need to recognise these four. All the rest are mixes of them.

| Type | Plain meaning | Our story |
|---|---|---|
| **Forward** | Private deal: trade later at a price fixed today | Sell $1 million at ₹84 in 3 months |
| **Future** | Same idea, but standardised and traded on an exchange (like NSE), settled daily | Very little credit risk — an exchange stands in the middle |
| **Swap** | Swap one stream of payments for another, over years | Exporter pays a fixed 7% interest, bank pays a floating rate |
| **Option** | The **right**, not the duty, to buy or sell at a fixed price. The buyer pays upfront for it (the **premium**) | Right to sell dollars at ₹84; walk away if the market is better |

**OTC (over-the-counter)** = a private deal between two parties, with no exchange in the middle. **Forwards, swaps and most options with companies are OTC. That's where this whole topic lives.**

> **Notional** = the size a deal is written on (the $1 million, or ₹100 crore in a swap). It is **not** the amount at risk. Keep reading to see what is.

---

## Idea 2 — The promise's value keeps moving

On the settlement day, three things can happen:

| Dollar in 3 months | What the bank does | Who is better off |
|---|---|---|
| ₹80 | Pays ₹84 for dollars worth ₹80 | **Exporter**, by ₹40 lakh |
| ₹84 | Pays ₹84 for dollars worth ₹84 | Nobody |
| ₹88 | Pays ₹84 for dollars worth ₹88 | **Our Bank**, by ₹40 lakh |

The Exporter always gets ₹8.4 crore. But between the two of them, **someone ends up ahead** — and nobody knows who until the day.

It doesn't wait until the last day, either. Every day the dollar moves, the promise gains or loses value.

**MTM (mark-to-market)** = what the promise is worth **today**, at today's prices.
One month in, the dollar for that date has moved to ₹86. The bank's right to buy at ₹84 is worth (86 − 84) × $1 million = **+₹20 lakh** to the bank. That ₹20 lakh is the MTM. Tomorrow it will be different.

| Word | Meaning |
|---|---|
| **In the money** | MTM is positive for you — the other side owes you value |
| **Out of the money** | MTM is negative for you — you owe them |

> **Key picture:** in a loan, the borrower always owes the bank. In a derivative, **who owes whom flips** as prices move.

---

## Idea 3 — The client might go bust at the wrong moment

**Counterparty** = the other side of the contract. For Our Bank, that's the Exporter.
**Counterparty credit risk (CCR)** = the risk that the counterparty **defaults** (fails to pay) **while the contract is worth something to you**.

### The bad day

The dollar has jumped. MTM to Our Bank is **+₹40 lakh**. Then the Exporter goes bankrupt.

- Our Bank had already promised those dollars to someone else, expecting to buy them at ₹84.
- Now it must buy them in the market at ₹88.
- ₹4 × $1 million = **₹40 lakh lost**.

**Replacement cost** = what it costs to replace the lost deal at today's price. It equals the positive MTM.

### The lucky twist

The dollar has **fallen** instead. The bank owes the Exporter ₹40 lakh. The Exporter goes bankrupt.

- Does the bank lose? **No.** The bankrupt company's administrators still collect the ₹40 lakh from the bank. The bank just pays what it owed anyway.

So a bank can only lose when the value is **positive**:

$$\text{Exposure} = \max(\text{MTM}, 0)$$

In words: *if the MTM is positive, that's the exposure; if not, the exposure is zero.*

### Loan vs derivative

| | Loan | Derivative |
|---|---|---|
| Who owes whom | Borrower always owes | **Either side** |
| How much | Known | **Unknown** — changes daily |
| Risk | One-way | **Two-way** |

> **The whole problem in one line:** how do you manage a credit risk when you don't know how big it will be?

---

## Idea 4 — Estimate it, then shrink it

### 4a. Estimate: how much could they owe us?

Nobody knows the future dollar rate. So banks **simulate thousands of possible futures** (called **scenarios**), value the deal in each, and summarise.

A tiny version you can do in your head — 5 scenarios, one year from now:

| Scenario | MTM to bank | Exposure = max(MTM, 0) |
|---|---|---|
| 1 | −₹30 lakh | 0 |
| 2 | −₹10 lakh | 0 |
| 3 | +₹5 lakh | 5 |
| 4 | +₹20 lakh | 20 |
| 5 | +₹50 lakh | 50 |

Two numbers come out of this:

- **Expected Exposure (EE)** — the **average**: (0 + 0 + 5 + 20 + 50) ÷ 5 = **₹15 lakh**. *The typical amount they might owe us.*
- **Potential Future Exposure (PFE)** — a **bad case**: here **₹50 lakh**. *How bad could it get?*

| Measure | Question it answers | Used for |
|---|---|---|
| **EE** | What might they typically owe us at a future date? | Pricing, CVA |
| **EPE** | Same, averaged over the whole life of the deal | Pricing, CVA |
| **PFE** | How bad could it get? | **Limits** — "never more than ₹5 crore at risk with this client" |
| **EAD** | One final number for the regulator | Capital (see below) |

### 4b. Shrink: three tools and one warning

**Tool 1 — Netting: add everything up first.**
Our Bank has three deals with the Exporter:

| Deal | MTM to bank |
|---|---|
| A — forward | +₹10 crore |
| B — swap | −₹6 crore |
| C — option | +₹3 crore |

- **Without netting:** the bankrupt company refuses to pay A and C, but still demands B. Bank's exposure = 10 + 3 = **₹13 crore**.
- **With netting:** all deals collapse into one number: 10 − 6 + 3 = **₹7 crore**.

What makes this legally possible is the **ISDA Master Agreement** — one umbrella contract signed once, covering every deal between the two sides.

**Tool 2 — Collateral: take a deposit.**
**Collateral** = cash or safe bonds the client hands over to cover what it owes. If it defaults, the bank keeps it.
The Exporter posts **₹5 crore**. Exposure = 7 − 5 = **₹2 crore**.

<svg viewBox="0 0 360 190" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
  <g font-size="12">
    <text x="10" y="20" font-weight="700" fill="#334155">Our Bank's exposure to the Exporter</text>
    <text x="10" y="55" fill="#334155">No netting</text>
    <rect x="120" y="40" width="221" height="24" rx="4" fill="#dc2626"/>
    <text x="296" y="57" fill="#ffffff" font-weight="700">₹13 cr</text>
    <text x="10" y="105" fill="#334155">After netting</text>
    <rect x="120" y="90" width="119" height="24" rx="4" fill="#d97706"/>
    <text x="200" y="107" fill="#ffffff" font-weight="700">₹7 cr</text>
    <text x="10" y="155" fill="#334155">After collateral</text>
    <rect x="120" y="140" width="34" height="24" rx="4" fill="#16a34a"/>
    <text x="162" y="157" fill="#15803d" font-weight="700">₹2 cr</text>
    <text x="10" y="184" fill="#64748b" font-size="11">Same three deals. Paperwork cut the risk by 85%.</text>
  </g>
</svg>

Collateral is never perfect: between the client's **last** payment and the bank closing everything out, a week or two passes, and prices keep moving. That gap is called the **margin period of risk**.

**Tool 3 — A clearing house in the middle.**
A **CCP (central counterparty)** steps into the middle of deals, so each bank faces the CCP instead of each other. The CCP collects collateral from everyone, every day. In India, that's **CCIL**. Most bank-to-bank deals go through it — but deals with ordinary companies like the Exporter usually don't. That's where CCR still bites.

**The warning — wrong-way risk.**
**Wrong-way risk** = the client owes you **more** exactly when it becomes **weaker**. Two bad things at once.
*Example:* a company gives its **own shares** as collateral. If the company fails, the shares crash too — the deposit vanishes when you need it.

Our Exporter is the happy opposite, **right-way risk**: when the dollar rises, it owes the bank more, but it also earns more rupees from its US sales — so it's **stronger**, not weaker.

---

## Idea 5 — CVA puts a price tag on the risk

### The idea

A friend owes you ₹100 next year. There's a 10% chance he disappears.
Is that IOU worth ₹100 today? **No — about ₹90.**
The missing ₹10 is the **price of his default risk**.

**CVA (Credit Valuation Adjustment)** = the same idea for derivatives.

$$\text{True value} = \text{Value if nobody could default} - CVA$$

### The formula, in words first

> **CVA ≈ how much they might owe you × chance they go bust × share you'd lose**
> *…added up over each year of the deal.*

$$CVA \approx EPE \times PD \times LGD \times \text{years}$$

In words:

- **EPE** — how much they typically owe you (from Idea 4).
- **PD** — probability of default per year.
- **LGD** — loss given default: the share you lose if they fail. Usually around 60%, because about 40% is recovered.
- **years** — how long the deal runs.

### A worked example

A 5-year swap with the Exporter:

- Typical exposure (EPE) = **₹10 crore**
- Chance of default = **2% a year**
- Loss if it defaults = **60%**

CVA ≈ 10 crore × 2% × 60% × 5 = **₹60 lakh**.

*(Real banks also discount future losses to today's money, which trims this a little.)*

### Where the 2% comes from

For CVA, the chance of default comes from the **market**, not the bank's internal rating.
**Credit spread** = the extra yearly interest the market demands to lend to a company — the market's price for its default risk.

$$PD \approx \frac{\text{Credit spread}}{LGD}$$

The Exporter's spread is 1.2%. 1.2% ÷ 60% = **2% a year**.

### What the bank does with it

- **Charges it.** The ₹60 lakh is quietly built into the price quoted to the Exporter.
- **Books it.** Accounting rules (Ind AS 113 in India) require fair values to include this risk.
- **Manages it.** A **CVA desk** inside the bank looks after it.

### Why CVA matters so much

The Exporter does **not** default — but its credit spread **doubles** from 1.2% to 2.4%.
CVA doubles too: ₹60 lakh → ₹1.2 crore. The bank books a **₹60 lakh loss**, and **nobody defaulted**.

This happened on a huge scale in 2008. Most counterparty losses in that crisis came from CVA moves like this, not from actual defaults.

> **CVA is a daily risk, not just a default risk.**

---

## What the regulator asks for — capital

**Capital** = the bank's own money kept aside to absorb losses. The regulator sets two separate charges here:

| Charge | Covers | Plain formula |
|---|---|---|
| **SA-CCR** | The client **defaults** (Idea 3) | EAD = 1.4 × (what they owe now + how much more they might owe) |
| **CVA capital charge** | The client's credit **worsens** (Idea 5) | A separate Basel formula based on each client's exposure and credit quality |

The **1.4** is a safety buffer. Collateral and netting shrink both parts of the SA-CCR formula — one more reason banks chase them.

---

## The CVA family — names only

| Name | One line |
|---|---|
| **CVA** | Cost of **their** default risk |
| **DVA** | The mirror: the bank's **own** default risk |
| **FVA** | Cost of funding deals where the client posts no collateral |
| **KVA** | Cost of the capital a deal uses up |

Together these are called **XVA**. Know CVA well; know the rest by name.

---

## The whole picture in five lines

1. **A derivative is a promise about a price.** Notional is not risk.
2. **Its value moves every day**, so who owes whom keeps flipping.
3. **CCR** = the client goes bust while it owes you. Exposure = max(MTM, 0).
4. **Estimate it** (EE, PFE), then **shrink it** (netting, collateral, clearing houses). Watch out for wrong-way risk.
5. **CVA** = the price tag on that risk: exposure × chance of default × loss share, over time.

---

## Every term in one table

| Term | One line |
|---|---|
| Derivative | Contract whose value comes from another price |
| Forward / Future / Swap / Option | The four basic shapes |
| OTC | Private deal, no exchange in the middle |
| Notional | Size a deal is written on — not the risk |
| MTM | What the deal is worth today |
| Counterparty | The other side of the deal |
| CCR | Risk they default while owing you value |
| Replacement cost | Cost to redo a lost deal at today's price |
| EE / EPE | Typical exposure at a date / over the life |
| PFE | Bad-case exposure, used for limits |
| EAD | Final exposure number for capital |
| Netting | Adding all deals into one number |
| ISDA Master Agreement | The umbrella contract that makes netting legal |
| Collateral | Deposit that covers what the client owes |
| Margin period of risk | Days collateral can't cover after a default |
| CCP / CCIL | Clearing house in the middle / India's one |
| Wrong-way risk | Client owes more exactly as it gets weaker |
| CVA | Price of the client's default risk |
| Credit spread | Market's yearly price for a company's default risk |
| SA-CCR | Regulator's formula for CCR capital |
| XVA | CVA and its cousins (DVA, FVA, KVA) |
