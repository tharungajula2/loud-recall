---
title: "Credit Risk Cheatsheet"
description: "The 20% of credit risk that handles 80% of the work: default, PD, LGD and EAD, drawing power, derivatives, CCR and CVA, IFRS 9, Basel capital and 3.1, liquidity, ALM, model checks, portfolio metrics, reports and the data flow."
subject: finance
format: masterclass
order: 1
status: live
updated: 2026-09-29
verified: false
tags:
  - credit risk
  - ifrs 9
  - basel 3.1
  - capital
  - model validation
  - business analysis
  - counterparty credit risk
  - cva
  - liquidity
  - regulatory reporting
---

**How this note is laid out**

| Part | Sections | Covers |
|---|---|---|
| 1. Foundations | 1–4 | The one idea, who sets the rules, default, PD × LGD × EAD |
| 2. Lending risk | 5–6 | SME cash credit, reducing loan risk |
| 3. Derivatives and counterparty risk | 7–13 | Derivatives, CCR, exposure, wrong-way risk, netting and collateral, CVA |
| 4. IFRS 9: the accounting view | 14–16 | Classification, ECL, derivatives and hedging |
| 5. Basel: the capital view | 17–23 | Capital, SA-CCR, CCR and CVA capital, Basel 3.1, the two books, where provisions meet capital |
| 6. Liquidity and the balance sheet | 24–25 | LCR, NSFR, ALM, treasury |
| 7. Running the machine | 26–29 | Model checks, portfolio metrics, the data flow, reports |
| 8. Holding it together | 30–32 | Distinctions, edge topics, the whole thing on one screen |

## 1 — The one idea behind everything

**A bank expects some loans to go bad. The average loss is a cost, paid by provisions. A bad year's extra loss is a risk, paid by capital.**

<svg viewBox="0 0 400 338" width="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Chart: the loss distribution of a loan book. Expected loss is the average year, covered by provisions; unexpected loss up to the 99.9% point is covered by capital; the tail beyond is for stress tests" style="width:100%;max-width:400px;height:auto;display:block;margin:1rem auto">
<g font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#1f2937">
<text x="200.0" y="24.0" text-anchor="middle" font-size="16" font-weight="700">Next year's loss on a loan book</text>
<path d="M 24.3 222.0 L 24.3 218.8 L 26.6 205.7 L 28.8 186.2 L 31.1 164.8 L 33.4 144.1 L 35.6 125.6 L 37.9 109.8 L 40.2 97.0 L 42.5 86.9 L 44.8 79.5 L 47.0 74.4 L 49.3 71.4 L 51.6 70.0 L 53.9 70.1 L 56.1 71.3 L 58.4 73.6 L 60.7 76.6 L 62.9 80.2 L 65.2 84.4 L 67.5 88.8 L 69.8 93.5 L 72.1 98.4 L 74.3 103.4 L 76.6 108.4 L 78.9 113.3 L 78.9 222.0 Z" fill="#fde68a"/>
<path d="M 81.2 222.0 L 81.2 118.3 L 83.4 123.1 L 85.7 127.9 L 88.0 132.5 L 90.3 137.0 L 92.5 141.3 L 94.8 145.5 L 97.1 149.5 L 99.3 153.4 L 101.6 157.0 L 103.9 160.6 L 106.2 163.9 L 108.5 167.1 L 110.7 170.2 L 113.0 173.1 L 115.3 175.8 L 117.5 178.4 L 119.8 180.9 L 122.1 183.2 L 124.4 185.5 L 126.6 187.6 L 128.9 189.5 L 131.2 191.4 L 133.5 193.2 L 135.8 194.9 L 138.0 196.4 L 140.3 197.9 L 142.6 199.3 L 144.8 200.7 L 147.1 201.9 L 149.4 203.1 L 151.7 204.2 L 153.9 205.2 L 156.2 206.2 L 158.5 207.2 L 160.8 208.0 L 163.0 208.9 L 165.3 209.6 L 167.6 210.4 L 169.9 211.0 L 172.2 211.7 L 174.4 212.3 L 176.7 212.9 L 179.0 213.4 L 181.3 213.9 L 183.5 214.4 L 185.8 214.8 L 188.1 215.3 L 190.3 215.7 L 192.6 216.0 L 194.9 216.4 L 197.2 216.7 L 199.4 217.0 L 201.7 217.3 L 204.0 217.6 L 206.3 217.9 L 208.6 218.1 L 210.8 218.3 L 213.1 218.6 L 215.4 218.8 L 217.6 219.0 L 219.9 219.1 L 222.2 219.3 L 224.5 219.5 L 226.8 219.6 L 229.0 219.7 L 231.3 219.9 L 233.6 220.0 L 235.8 220.1 L 238.1 220.2 L 240.4 220.3 L 242.7 220.4 L 245.0 220.5 L 247.2 220.6 L 249.5 220.7 L 251.8 220.8 L 254.0 220.8 L 256.3 220.9 L 258.6 221.0 L 260.9 221.0 L 263.2 221.1 L 265.4 221.1 L 267.7 221.2 L 270.0 221.2 L 272.2 221.3 L 274.5 221.3 L 276.8 221.4 L 279.1 221.4 L 281.4 221.4 L 283.6 221.5 L 285.9 221.5 L 288.2 221.5 L 290.4 221.6 L 292.7 221.6 L 295.0 221.6 L 297.3 221.6 L 299.6 221.7 L 301.8 221.7 L 304.1 221.7 L 306.4 221.7 L 306.4 222.0 Z" fill="#fecdd3"/>
<path d="M 306.4 222.0 L 306.4 221.7 L 308.7 221.7 L 310.9 221.7 L 313.2 221.8 L 315.5 221.8 L 317.7 221.8 L 320.0 221.8 L 322.3 221.8 L 324.6 221.8 L 326.9 221.8 L 329.1 221.8 L 331.4 221.9 L 333.7 221.9 L 335.9 221.9 L 338.2 221.9 L 340.5 221.9 L 342.8 221.9 L 345.1 221.9 L 347.3 221.9 L 349.6 221.9 L 351.9 221.9 L 354.2 221.9 L 356.4 221.9 L 358.7 221.9 L 361.0 221.9 L 363.2 221.9 L 365.5 221.9 L 367.8 221.9 L 370.1 221.9 L 372.3 222.0 L 374.6 222.0 L 376.9 222.0 L 379.2 222.0 L 381.4 222.0 L 383.7 222.0 L 383.7 222.0 Z" fill="#cbd5e1"/>
<path d="M 24.3 218.8 L 26.6 205.7 L 28.8 186.2 L 31.1 164.8 L 33.4 144.1 L 35.6 125.6 L 37.9 109.8 L 40.2 97.0 L 42.5 86.9 L 44.8 79.5 L 47.0 74.4 L 49.3 71.4 L 51.6 70.0 L 53.9 70.1 L 56.1 71.3 L 58.4 73.6 L 60.7 76.6 L 62.9 80.2 L 65.2 84.4 L 67.5 88.8 L 69.8 93.5 L 72.1 98.4 L 74.3 103.4 L 76.6 108.4 L 78.9 113.3 L 81.2 118.3 L 83.4 123.1 L 85.7 127.9 L 88.0 132.5 L 90.3 137.0 L 92.5 141.3 L 94.8 145.5 L 97.1 149.5 L 99.3 153.4 L 101.6 157.0 L 103.9 160.6 L 106.2 163.9 L 108.5 167.1 L 110.7 170.2 L 113.0 173.1 L 115.3 175.8 L 117.5 178.4 L 119.8 180.9 L 122.1 183.2 L 124.4 185.5 L 126.6 187.6 L 128.9 189.5 L 131.2 191.4 L 133.5 193.2 L 135.8 194.9 L 138.0 196.4 L 140.3 197.9 L 142.6 199.3 L 144.8 200.7 L 147.1 201.9 L 149.4 203.1 L 151.7 204.2 L 153.9 205.2 L 156.2 206.2 L 158.5 207.2 L 160.8 208.0 L 163.0 208.9 L 165.3 209.6 L 167.6 210.4 L 169.9 211.0 L 172.2 211.7 L 174.4 212.3 L 176.7 212.9 L 179.0 213.4 L 181.3 213.9 L 183.5 214.4 L 185.8 214.8 L 188.1 215.3 L 190.3 215.7 L 192.6 216.0 L 194.9 216.4 L 197.2 216.7 L 199.4 217.0 L 201.7 217.3 L 204.0 217.6 L 206.3 217.9 L 208.6 218.1 L 210.8 218.3 L 213.1 218.6 L 215.4 218.8 L 217.6 219.0 L 219.9 219.1 L 222.2 219.3 L 224.5 219.5 L 226.8 219.6 L 229.0 219.7 L 231.3 219.9 L 233.6 220.0 L 235.8 220.1 L 238.1 220.2 L 240.4 220.3 L 242.7 220.4 L 245.0 220.5 L 247.2 220.6 L 249.5 220.7 L 251.8 220.8 L 254.0 220.8 L 256.3 220.9 L 258.6 221.0 L 260.9 221.0 L 263.2 221.1 L 265.4 221.1 L 267.7 221.2 L 270.0 221.2 L 272.2 221.3 L 274.5 221.3 L 276.8 221.4 L 279.1 221.4 L 281.4 221.4 L 283.6 221.5 L 285.9 221.5 L 288.2 221.5 L 290.4 221.6 L 292.7 221.6 L 295.0 221.6 L 297.3 221.6 L 299.6 221.7 L 301.8 221.7 L 304.1 221.7 L 306.4 221.7 L 308.7 221.7 L 310.9 221.7 L 313.2 221.8 L 315.5 221.8 L 317.7 221.8 L 320.0 221.8 L 322.3 221.8 L 324.6 221.8 L 326.9 221.8 L 329.1 221.8 L 331.4 221.9 L 333.7 221.9 L 335.9 221.9 L 338.2 221.9 L 340.5 221.9 L 342.8 221.9 L 345.1 221.9 L 347.3 221.9 L 349.6 221.9 L 351.9 221.9 L 354.2 221.9 L 356.4 221.9 L 358.7 221.9 L 361.0 221.9 L 363.2 221.9 L 365.5 221.9 L 367.8 221.9 L 370.1 221.9 L 372.3 222.0 L 374.6 222.0 L 376.9 222.0 L 379.2 222.0 L 381.4 222.0 L 383.7 222.0" fill="none" stroke="#1f2937" stroke-width="2.2" stroke-linejoin="round"/>
<line x1="22.0" y1="222.0" x2="386.0" y2="222.0" stroke="#9ca3af" stroke-width="1.2"/>
<line x1="80.6" y1="54.0" x2="80.6" y2="222.0" stroke="#b45309" stroke-width="1.6" stroke-dasharray="5 4"/>
<line x1="306.4" y1="54.0" x2="306.4" y2="222.0" stroke="#be123c" stroke-width="1.6" stroke-dasharray="5 4"/>
<text x="80.6" y="48.0" text-anchor="middle" font-weight="700" fill="#b45309">EL</text>
<text x="306.4" y="48.0" text-anchor="middle" font-weight="700" fill="#be123c">99.9%</text>
<text x="312.4" y="214.0" fill="#4b5563">tail →</text>
<text x="386.0" y="242.0" text-anchor="end" fill="#4b5563">loss →</text>
<text x="22.0" y="242.0" fill="#4b5563">height = how likely</text>
<rect x="14.0" y="252.0" width="22.0" height="18.0" rx="3" fill="#fde68a"/>
<text x="46.0" y="266.0" font-weight="700">EL: the average year</text>
<text x="236.0" y="266.0">→ provisions, IFRS 9</text>
<rect x="14.0" y="278.0" width="22.0" height="18.0" rx="3" fill="#fecdd3"/>
<text x="46.0" y="292.0" font-weight="700">UL = 99.9% loss − EL</text>
<text x="236.0" y="292.0">→ capital, Basel</text>
<rect x="14.0" y="304.0" width="22.0" height="18.0" rx="3" fill="#cbd5e1"/>
<text x="46.0" y="318.0" font-weight="700">Tail: beyond 99.9%</text>
<text x="236.0" y="318.0">→ stress tests</text>
</g>
</svg>

| Layer | Meaning | Paid for by | Rulebook |
|---|---|---|---|
| EL, expected loss | The average year's loss | Provisions: set aside from profit in advance | IFRS 9 (India: ECL from 1 April 2027) |
| UL, unexpected loss | How much worse a 1-in-1,000 year is | Capital: the owners' money | Basel |
| Tail | Worse than 1-in-1,000 | Stress tests | Stress testing |

## 2 — Who sets the rules

| Level | Who | Loan-loss rules | Capital rules |
|---|---|---|---|
| Global | BCBS (Basel Committee), IASB (accounting standards) | IFRS 9 | Basel III, and its 2017 finish, Basel 3.1 |
| India | RBI | IRAC today (NPA, fixed provision percentages); ECL from 1 April 2027 | Standardised approach only; revised SA from 1 April 2027 |
| UK | PRA | IFRS 9 | Basel 3.1 from 1 January 2027 |
| EU | EBA, ECB | IFRS 9 | CRR3 from 1 January 2025 |
| US | Fed, OCC, FDIC | CECL: lifetime loss from day one | Basel III endgame, still pending |

## 3 — What counts as default

**Default = over 90 days past due (DPD) on a material amount, or unlikely to pay (UTP) in full.**

| DPD | India label | Meaning |
|---|---|---|
| 1–30 | SMA-0 (special mention account) | Early slip |
| 31–60 | SMA-1 | Worrying |
| 61–90 | SMA-2 | One step from default |
| Over 90 | NPA, non-performing asset | Default |

UTP signals: interest no longer booked, a specific provision, a distressed restructuring, bankruptcy, fraud.

## 4 — The three numbers

$$
\text{EL} = \text{PD} \times \text{LGD} \times \text{EAD}
$$

| Term | Meaning | Driven by |
|---|---|---|
| PD, probability of default | Chance of default within 12 months | The borrower |
| LGD, loss given default | Share lost after recoveries | Collateral, seniority, legal system |
| EAD, exposure at default | Amount owed at default | The product and its undrawn limit |

$$
\text{EAD} = \text{drawn} + \text{CCF} \times \text{undrawn}
$$

**Read it as:** the credit conversion factor (CCF) is the share of an unused limit likely to be drawn before default, because failing borrowers draw their lines to the limit.

| PD type | Meaning | Used for |
|---|---|---|
| Point-in-time (PIT) | Moves with today's economy | IFRS 9 |
| Through-the-cycle (TTC) | Average over a whole cycle; stable | Basel capital |
| 12-month vs lifetime | Default in the next year, or before the loan ends | IFRS 9 Stage 1 vs Stages 2 and 3 |

## 5 — SME cash credit: limit and drawing power

**The limit is the yearly ceiling; drawing power (DP) is what this month's stock and bills support. The borrower can draw the lower of the two.**

$$
\text{MPBF} = 75\% \times \text{CA} - \text{OCL}
$$

**Read it as:** maximum permissible bank finance = 75% of current assets (CA: stock, receivables, cash) minus other current liabilities (OCL: current debts except bank loans). Smaller borrowers use the turnover method: limit = 20% of projected annual turnover.

$$
\text{DP} = (\text{stock} - \text{unpaid creditors}) \times (1 - m_s) + \text{receivables}_{<90\ \text{days}} \times (1 - m_r)
$$

$$
\text{Available} = \min(\text{limit},\ \text{DP})
$$

**Read it as:** m<sub>s</sub> and m<sub>r</sub> are safety margins, commonly 25%. The bank computes DP monthly from the borrower's stock statement. The account becomes an NPA when it stays out of order (over limit or DP, or with no credits coming in) for 90 days.

## 6 — Reducing the risk

| Tool | What it cuts | How |
|---|---|---|
| Financial collateral: cash, bonds, shares | EAD | Count its value only after a haircut for how far its price could fall |
| Property, stock, receivables | LGD | More is recovered after default |
| Guarantee | Risk weight | The covered part takes the guarantor's risk weight (substitution) |
| Netting | EAD | Only the net amount owed counts |

**Collateral counts only if it is legally enforceable, registered and recently valued.**

## 7 — Derivatives in four lines

**The short version. Sections 8–13 go deep.**

| Idea | Meaning |
|---|---|
| Counterparty risk | The other side defaults while the contract is worth money to you |
| Exposure | Today's value if positive, plus a buffer for how it could grow; never the notional |
| SA-CCR | Regulatory EAD = 1.4 × (replacement cost + potential future exposure) |
| CVA | The price of the counterparty's default risk; it rises as their credit spread widens, so a loss can come before any default |

## 8 — Derivatives: what they are

**A derivative is a contract whose value comes from something else, called the underlying: a rate, a currency, a price or a credit.**

| Building block | Meaning |
|---|---|
| Forward | Buy or sell later at a price fixed today |
| Future | A forward that is standardised and traded on an exchange |
| Swap | Exchange one stream of payments for another, such as fixed for floating interest |
| Option | The right, but not the obligation, to buy or sell |

| How it trades | Meaning |
|---|---|
| Exchange-traded | Standard contracts, cleared by a central counterparty |
| OTC, over the counter | A private bilateral contract with custom terms |

**Why banks use them:** to hedge their own risk, to serve clients, and to trade.

| Number | Meaning |
|---|---|
| Notional | The reference amount payments are calculated on; not what is at risk |
| MtM, mark-to-market | Today's value: what it would cost to replace the contract now. Positive means the counterparty owes you; negative means you owe them |

## 9 — Counterparty credit risk: the core idea

**Counterparty credit risk (CCR) is the risk that the other side defaults before the contract's final cash flows are settled.**

| How CCR differs from loan risk | Meaning |
|---|---|
| Two-way | Either side can be the one exposed |
| Uncertain | Exposure moves with markets, not with a repayment schedule |
| Market-driven | Market risk creates the exposure; credit risk turns it into a loss |

**You lose only if two things happen together:** the counterparty defaults, and the contract is worth money to you at that moment.

| Risk | Meaning |
|---|---|
| Pre-settlement risk | Default before the settlement date. This is CCR |
| Settlement risk | You pay your leg and do not receive theirs on the settlement day. The classic case is Herstatt risk in FX, reduced by payment-versus-payment systems such as CLS |

## 10 — Measuring exposure

$$
\text{Current exposure} = \max(\text{MtM},\ 0)
$$

**Read it as:** if the contract is worth nothing to you, you have nothing to lose today. Future exposure is simulated: markets are projected forward and the contract is revalued at each date.

| Measure | Meaning | Used for |
|---|---|---|
| EE, expected exposure | Average positive exposure at a future date | CVA |
| PFE, potential future exposure | A high percentile of exposure, usually 95% or 97.5% | Credit limits |
| EPE, expected positive exposure | EE averaged over time | Exposure summaries |
| Effective EE | EE that is not allowed to fall, capturing rollover of short trades | Regulatory models |
| EEPE, effective EPE | Effective EE averaged over the first year | The regulatory model measure |
| ENE, expected negative exposure | What the counterparty is exposed to you | DVA |

| Profile shape | Why |
|---|---|
| Interest rate swap: hump-shaped, peaking about a third of the way through its life | Rate uncertainty grows over time while the remaining payments shrink |
| FX forward or cross-currency swap: rises until maturity | The principal is exchanged at the end |

**Exposure is measured per netting set, not per trade.**

## 11 — Wrong-way risk

**Wrong-way risk: exposure rises exactly when the counterparty's credit worsens.**

| Type | Source | Case |
|---|---|---|
| General wrong-way risk | Macro correlation | Exposure to an emerging-market bank through a trade that gains when its currency collapses |
| Specific wrong-way risk | A legal or structural link | Collateral issued by the counterparty itself, or protection bought from someone on themselves |
| Right-way risk | The reverse | Exposure falls as credit worsens |

Regulators require specific wrong-way risk to be identified and capitalised separately.

## 12 — Reducing counterparty risk

| Netting | Meaning |
|---|---|
| ISDA Master Agreement | Governs the OTC trades between two parties |
| Close-out netting | On default, all trades under the agreement collapse into one net amount |
| Legal opinion | Netting counts only if a legal opinion confirms it is enforceable in the counterparty's jurisdiction |

| Collateral term | Meaning |
|---|---|
| CSA, credit support annex | Sets the collateral terms |
| VM, variation margin | Covers today's MtM; exchanged daily |
| IM, initial margin | Covers how far the MtM could move before a defaulted position is closed out; posted by both sides, segregated, not reused |
| Threshold | Exposure allowed before collateral is called |
| MTA, minimum transfer amount | The smallest amount worth calling |
| Independent amount | Extra collateral agreed up front |

**MPOR, margin period of risk:** the time from the last good margin call to closing out the position.

| MPOR floor | Business days |
|---|---|
| Repos and securities financing | 5 |
| Bilateral OTC derivatives | 10 |
| Netting sets above 5,000 trades, or with illiquid collateral or hard-to-replace trades | 20 |
| After repeated margin disputes | Doubled |

**Central clearing:** a CCP, central counterparty, stands between buyer and seller. It becomes the buyer to every seller and the seller to every buyer. Standardised OTC derivatives must be cleared.

| CCP default waterfall, in order | Who pays |
|---|---|
| 1 | The defaulter's margin |
| 2 | The defaulter's default fund contribution |
| 3 | The CCP's own capital ("skin in the game") |
| 4 | The surviving members' default fund |
| 5 | Further calls on members |

| Uncleared margin rules (UMR) | Rule |
|---|---|
| Scope | Non-cleared OTC derivatives between covered firms |
| VM | Mandatory since 2017 |
| IM | Phased in through 2022 by size of derivatives book; calibrated to a 99%, 10-day move; usually computed with ISDA SIMM or a regulatory schedule |

## 13 — CVA: the price of counterparty risk

**CVA, credit valuation adjustment, is the market price of the counterparty's default risk.**

$$
\text{True value} = \text{risk-free value} - \text{CVA}
$$

$$
\text{CVA} = \text{LGD} \times \sum_{t} \text{EE}_t \times \text{DF}_t \times \text{PD}_{t-1,\,t}
$$

**Read it as:** for each future period, the expected exposure, discounted to today, times the chance the counterparty defaults in that period, all times the share lost.

| Input | Source |
|---|---|
| LGD | The market LGD, often 60%, meaning a 40% recovery |
| EE | The exposure simulation |
| PD | Implied from the counterparty's market credit spread, not from a rating model. Rule of thumb: PD ≈ spread ÷ LGD |

| What moves CVA | Effect |
|---|---|
| Counterparty's spread widens | Implied PD rises, CVA rises, the bank books a loss |
| Market rates or FX move | EE changes, so CVA changes |

So CVA carries both credit risk and market risk.

| Topic | Meaning |
|---|---|
| Accounting | IFRS 13 fair value is an exit price and must include counterparty risk, so CVA sits inside the fair value of every derivative and runs through P&L (section 16) |
| The CVA desk | Charges each trading desk a CVA price at inception and manages the book; hedges with CDS on the counterparty or on indices, plus market hedges on exposure drivers |
| Hedging problems | Many counterparties have no liquid CDS; hedging only exposure drivers creates P&L noise |
| DVA, debit valuation adjustment | The mirror image: your own default risk, as your counterparty sees it. When your credit worsens, DVA rises and you book a gain. Basel III removes all DVA gains and losses from CET1, so a bank cannot grow capital by becoming riskier |

| XVA family | Meaning |
|---|---|
| FVA, funding valuation adjustment | Cost of funding uncollateralised positions |
| MVA, margin valuation adjustment | Cost of funding initial margin |
| KVA, capital valuation adjustment | Cost of the capital the trade consumes |

These go into pricing, and some into accounting. CVA and DVA are the core accounting ones.

## 14 — IFRS 9: three parts and classification

| Part of IFRS 9 | Covers |
|---|---|
| Classification and measurement | Which bucket each asset sits in, and how it is valued |
| Impairment | ECL, expected credit loss (section 15) |
| Hedge accounting | Matching the P&L of a hedge with what it hedges (section 16) |

**Two tests decide the bucket.** The business model: hold to collect, hold to collect and sell, or other. And SPPI: are the cash flows solely payments of principal and interest?

| Business model | SPPI met? | Measurement |
|---|---|---|
| Hold to collect | Yes | Amortised cost |
| Hold to collect and sell | Yes | FVOCI, fair value through other comprehensive income |
| Anything else, including all derivatives not in hedges | — | FVTPL, fair value through profit or loss |

## 15 — IFRS 9: provisions for expected loss

**Scope:** ECL applies to amortised cost and FVOCI debt, loan commitments, financial guarantees, lease receivables and trade receivables. It does not apply to FVTPL items.

<svg viewBox="0 0 400 492" width="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="IFRS 9 stages: Stage 1 performing with 12-month expected credit loss; a significant increase in credit risk moves a loan to Stage 2 with lifetime loss; default moves it to Stage 3, credit-impaired; loans cure back after probation" style="width:100%;max-width:400px;height:auto;display:block;margin:1rem auto">
<g font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#1f2937">
<text x="200.0" y="24.0" text-anchor="middle" font-size="16" font-weight="700">IFRS 9: three stages, two triggers</text>
<rect x="12.0" y="44.0" width="318.0" height="84.0" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
<text x="28.0" y="70.0" font-weight="700" fill="#047857">Stage 1: performing</text>
<text x="28.0" y="92.0">12-month ECL</text>
<text x="28.0" y="113.0" fill="#4b5563">interest on the gross amount</text>
<rect x="12.0" y="206.0" width="318.0" height="84.0" rx="8" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
<text x="28.0" y="232.0" font-weight="700" fill="#b45309">Stage 2: risk up since origination</text>
<text x="28.0" y="254.0">lifetime ECL</text>
<text x="28.0" y="275.0" fill="#4b5563">interest on the gross amount</text>
<rect x="12.0" y="352.0" width="318.0" height="84.0" rx="8" fill="#fff1f2" stroke="#f43f5e" stroke-width="1.5"/>
<text x="28.0" y="378.0" font-weight="700" fill="#be123c">Stage 3: credit-impaired</text>
<text x="28.0" y="400.0">lifetime ECL</text>
<text x="28.0" y="421.0" fill="#4b5563">interest on the net amount</text>
<line x1="40.0" y1="130.0" x2="40.0" y2="196.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="40.0,204.0 44.0,196.0 36.0,196.0" fill="#6b7280"/>
<text x="56.0" y="152.0" font-weight="700" fill="#b45309">SICR vs origination:</text>
<text x="56.0" y="172.0">lifetime PD ×2–3, or 30 DPD,</text>
<text x="56.0" y="192.0">or watchlist, forbearance</text>
<line x1="40.0" y1="292.0" x2="40.0" y2="342.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="40.0,350.0 44.0,342.0 36.0,342.0" fill="#6b7280"/>
<text x="56.0" y="314.0" font-weight="700" fill="#be123c">Default:</text>
<text x="56.0" y="334.0">over 90 DPD, or unlikely to pay</text>
<line x1="300.0" y1="204.0" x2="300.0" y2="138.0" stroke="#6b7280" stroke-width="1.6" stroke-dasharray="5 4"/>
<polygon points="300.0,130.0 304.0,138.0 296.0,138.0" fill="#6b7280"/>
<text x="308.0" y="172.0" fill="#4b5563">cure</text>
<line x1="300.0" y1="350.0" x2="300.0" y2="300.0" stroke="#6b7280" stroke-width="1.6" stroke-dasharray="5 4"/>
<polygon points="300.0,292.0 304.0,300.0 296.0,300.0" fill="#6b7280"/>
<text x="308.0" y="326.0" fill="#4b5563">cure</text>
<text x="12.0" y="462.0" fill="#4b5563">Cure = back a stage, after a probation period</text>
<text x="12.0" y="484.0" fill="#4b5563">POCI (bought or made impaired): lifetime ECL</text>
</g>
</svg>

| Stage | When | Provision |
|---|---|---|
| 1 | Performing, no big change since the loan was made | 12-month ECL |
| 2 | Significant increase in credit risk (SICR); 30 DPD is the backstop | Lifetime ECL |
| 3 | In default; 90 DPD | Lifetime ECL |

$$
\text{ECL} = \sum_{t} \text{PD}_t \times \text{LGD}_t \times \text{EAD}_t \times \text{DF}_t
$$

**Read it as:** for each future year, chance of default that year × share lost × amount owed × a discount factor back to today (DF), then add up the years. Stage 1 counts one year; Stages 2 and 3 count the whole life. So a move to Stage 2 makes the provision jump with no default yet: the **cliff effect**.

| Key rule | Meaning |
|---|---|
| SICR | Risk now compared with risk at origination; a typical trigger is lifetime PD doubled or tripled |
| Scenarios | Base, upside and downside, weighted by probability; the downside hurts more than the upside helps |
| Overlay | A management adjustment for what the models miss; approved, documented and reversed later |

## 16 — IFRS 9 for derivatives and hedging

**Derivatives sit at FVTPL, so they have no ECL and no stages.** Their counterparty risk is captured through CVA inside fair value. IFRS 13 fair value includes CVA and DVA (section 13).

**Hedge accounting** aligns the timing of P&L between a hedge and what it hedges.

| Hedge type | Hedges | Where gains and losses go |
|---|---|---|
| Fair value hedge | Changes in the fair value of an asset or liability | P&L, alongside the hedged item |
| Cash flow hedge | Variable future cash flows | Wait in OCI until the hedged cash flow hits P&L |
| Net investment hedge | FX on foreign operations | OCI |

Banks may keep IAS 39 hedge accounting, and portfolio or macro hedging is still largely under IAS 39.

## 17 — Basel: capital for unexpected loss

$$
\text{Capital ratio} = \frac{\text{capital}}{\text{RWA}}, \qquad \text{RWA} = \text{EAD} \times \text{risk weight}
$$

**Read it as:** risk-weighted assets (RWA) scale each exposure by how risky it is. Credit, market and operational risk all add to the RWA. Counterparty risk and CVA get their own charges (sections 19 and 20).

| Approach | Who picks the risk weight | Where used |
|---|---|---|
| Standardised (SA) | The regulator's table | All Indian banks; smaller banks everywhere |
| Internal ratings-based (IRB) | The bank's own PD (and LGD), fed into Basel's formula | Large UK, EU and US banks |

| Standardised risk weights (Basel 3.1) | Weight |
|---|---|
| Unrated corporate | 100% |
| Unrated SME corporate | 85% |
| Regulatory retail | 75% |
| Home loan | 20–70%, rising with LTV (loan-to-value) |
| Defaulted | 150% |

**IRB in one line:** stress the PD to a 1-in-1,000 year, take away the average loss, adjust for maturity and scale to RWA. The result is capital = UL per rupee lent.

<svg viewBox="0 0 400 452" width="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Stacked bars of capital as a share of risk-weighted assets: Basel minimum CET1 4.5, AT1 1.5, Tier 2 2.0 plus a 2.5 conservation buffer, 10.5 in all; India CET1 5.5, AT1 1.5, Tier 2 2.0 plus 2.5, 11.5 in all" style="width:100%;max-width:400px;height:auto;display:block;margin:1rem auto">
<g font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#1f2937">
<text x="200.0" y="24.0" text-anchor="middle" font-size="16" font-weight="700">The capital stack, % of RWA</text>
<rect x="40.0" y="240.0" width="130.0" height="90.0" rx="2" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
<text x="105.0" y="290.0" text-anchor="middle" font-weight="700" fill="#1d4ed8">CET1 4.5%</text>
<rect x="40.0" y="210.0" width="130.0" height="30.0" rx="2" fill="#f5f3ff" stroke="#8b5cf6" stroke-width="1.5"/>
<text x="105.0" y="230.0" text-anchor="middle" font-weight="700" fill="#6d28d9">AT1 1.5%</text>
<rect x="40.0" y="170.0" width="130.0" height="40.0" rx="2" fill="#f0fdfa" stroke="#14b8a6" stroke-width="1.5"/>
<text x="105.0" y="195.0" text-anchor="middle" font-weight="700" fill="#0f766e">Tier 2 2%</text>
<rect x="40.0" y="120.0" width="130.0" height="50.0" rx="2" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
<text x="105.0" y="150.0" text-anchor="middle" font-weight="700" fill="#b45309">Buffer 2.5%</text>
<text x="105.0" y="110.0" text-anchor="middle" font-size="16" font-weight="700">10.5%</text>
<text x="105.0" y="86.0" text-anchor="middle" fill="#4b5563">+ CCyB 0–2.5%</text>
<text x="105.0" y="66.0" text-anchor="middle" fill="#4b5563">+ G-SIB 1–3.5%</text>
<text x="105.0" y="352.0" text-anchor="middle" font-weight="700">Basel</text>
<rect x="230.0" y="220.0" width="130.0" height="110.0" rx="2" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
<text x="295.0" y="280.0" text-anchor="middle" font-weight="700" fill="#1d4ed8">CET1 5.5%</text>
<rect x="230.0" y="190.0" width="130.0" height="30.0" rx="2" fill="#f5f3ff" stroke="#8b5cf6" stroke-width="1.5"/>
<text x="295.0" y="210.0" text-anchor="middle" font-weight="700" fill="#6d28d9">AT1 1.5%</text>
<rect x="230.0" y="150.0" width="130.0" height="40.0" rx="2" fill="#f0fdfa" stroke="#14b8a6" stroke-width="1.5"/>
<text x="295.0" y="175.0" text-anchor="middle" font-weight="700" fill="#0f766e">Tier 2 2%</text>
<rect x="230.0" y="100.0" width="130.0" height="50.0" rx="2" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
<text x="295.0" y="130.0" text-anchor="middle" font-weight="700" fill="#b45309">Buffer 2.5%</text>
<text x="295.0" y="90.0" text-anchor="middle" font-size="16" font-weight="700">11.5%</text>
<text x="295.0" y="66.0" text-anchor="middle" fill="#4b5563">+ D-SIB 0.2–0.8%</text>
<text x="295.0" y="352.0" text-anchor="middle" font-weight="700">India</text>
<line x1="20.0" y1="330.0" x2="380.0" y2="330.0" stroke="#9ca3af" stroke-width="1.2"/>
<rect x="14.0" y="365.0" width="18.0" height="16.0" rx="3" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
<text x="42.0" y="378.0">CET1: the owners’ money, absorbs first</text>
<rect x="14.0" y="387.0" width="18.0" height="16.0" rx="3" fill="#f5f3ff" stroke="#8b5cf6" stroke-width="1.5"/>
<text x="42.0" y="400.0">AT1: a bond that behaves like a share</text>
<rect x="14.0" y="409.0" width="18.0" height="16.0" rx="3" fill="#f0fdfa" stroke="#14b8a6" stroke-width="1.5"/>
<text x="42.0" y="422.0">Tier 2: a bond that pays out last</text>
<rect x="14.0" y="431.0" width="18.0" height="16.0" rx="3" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
<text x="42.0" y="444.0">Buffer: dip in, and payouts are capped</text>
</g>
</svg>

| Minimum, % of RWA | Basel | India |
|---|---|---|
| CET1 (shares and retained profit) | 4.5% | 5.5% |
| Tier 1 (CET1 + AT1 bonds) | 6% | 7% |
| Total capital (+ Tier 2) | 8% | 9% |
| Conservation buffer (CET1) | 2.5% | 2.5% |

| Backstop | Rule |
|---|---|
| Leverage ratio | Tier 1 ÷ total exposure, with no risk weights: Basel 3%; India 3.5% (4% for systemically important banks) |
| LCR | Liquid assets must cover 30 days of stressed outflows |
| NSFR | Stable funding must cover one year's needs |
| Large exposure | One group at most 25% of Tier 1 |

LCR and NSFR in detail: section 24.

## 18 — Regulatory EAD for derivatives: SA-CCR

**SA-CCR, the standardised approach for counterparty credit risk, replaced the older CEM (current exposure method) and SM (standardised method).**

$$
\text{EAD} = \alpha \times (\text{RC} + \text{PFE}), \qquad \alpha = 1.4
$$

**Read it as:** replacement cost today plus potential future exposure, times a supervisory alpha of 1.4 that covers model error and concentration.

$$
\text{RC}_{\text{unmargined}} = \max(V - C,\ 0)
$$

$$
\text{RC}_{\text{margined}} = \max(V - C,\ \text{TH} + \text{MTA} - \text{NICA},\ 0)
$$

**Read it as:** V is the MtM of the netting set; C is the net collateral held, after haircuts; TH is the threshold; NICA is the net independent collateral amount. So margined RC is at least the exposure the bank could reach without triggering a call.

$$
\text{PFE} = \text{multiplier} \times \text{aggregate add-on}
$$

**Read it as:** the multiplier recognises over-collateralisation and negative MtM, floored at 5%. Add-ons are built by asset class (interest rate, FX, credit, equity, commodity). Within each class, trades go into hedging sets where offsets are allowed. Each trade's add-on = adjusted notional × supervisory delta × maturity factor × supervisory factor.

| Supervisory factor | Value |
|---|---|
| Interest rate | 0.5% |
| FX | 4% |
| Equity | 32% single name; 20% index |
| Commodity | 40% electricity; 18% others |
| Credit | Rises with rating: 0.38% for AAA up to 6% for CCC |

| Maturity factor | Formula |
|---|---|
| Unmargined | √(min(M, 1 year) ÷ 1 year) |
| Margined | 1.5 × √(MPOR ÷ 1 year) |

A margined netting set's EAD is capped at its unmargined EAD.

| Approach | Rule |
|---|---|
| IMM, internal model method | The bank simulates exposure itself. EAD = α × EEPE, α = 1.4; supervisors may allow lower, never below 1.2. Needs approval; large banks only |
| India | CEM still in use; move to SA-CCR [verify] |

## 19 — Capital for counterparty risk: two separate charges

| Charge | Covers | How |
|---|---|---|
| 1. Default risk | The counterparty actually defaulting | RWA = SA-CCR or IMM EAD × the counterparty's risk weight, under SA or IRB |
| 2. CVA risk | Losses as the counterparty's credit spread widens, before any default | CVA capital (section 20). Added in Basel III because in 2008 about two-thirds of counterparty losses came from CVA moves, not defaults |

| Special case | Rule |
|---|---|
| Qualifying CCP (QCCP) trade exposures | 2% risk weight |
| Default fund contributions to a CCP | Their own separate charge |
| Cleared trades | No CVA charge |
| IRB for CCR | Effective maturity uses the netting set's cash flows, with a 1-year floor for most derivatives |

## 20 — CVA capital under Basel 3.1

**Internal models for CVA capital are removed. Two approaches remain, plus a small-bank option.**

| Approach | How it works |
|---|---|
| BA-CVA, basic approach | Formula-based, using the counterparty's EAD, maturity and a supervisory risk weight by sector and rating. The reduced version recognises no hedges; the full version recognises eligible CDS and index hedges |
| SA-CVA, standardised approach | Sensitivity-based: to counterparty credit spreads and to the market drivers of exposure. Needs supervisory approval and a proper regulatory CVA model. Recognises both credit and market hedges |
| Materiality option | A bank with non-centrally cleared derivatives notional of €100 billion or less may set CVA capital = 100% of its CCR default capital |
| Out of scope | Trades with QCCPs. The EU also exempts some counterparties, such as non-financial corporates, pension funds and sovereigns [verify] |

## 21 — Basel 3.1 in six changes

**Basel III fixed the quality of capital; Basel 3.1 fixes RWA, which banks' own models had pushed too low.**

| Change | Effect |
|---|---|
| Output floor | IRB RWA at least 72.5% of standardised RWA, bank-wide |
| Finer SA | Weights by rating and LTV; unrated SMEs 85% |
| Limits on IRB | No advanced IRB for large corporates or banks; PD floor 0.05% |
| CCF | Cancellable limits move from 0% to 10% |
| Operational risk | One standardised approach, based on income |
| Market risk and CVA | FRTB for market risk; no internal models for CVA |

$$
\text{RWA}_{\text{final}} = \max\left(\text{RWA}_{\text{models}},\ 72.5\% \times \text{RWA}_{\text{SA}}\right)
$$

| Where | Start [verify] |
|---|---|
| EU | 1 January 2025 |
| UK | 1 January 2027 |
| India | Revised SA from 1 April 2027; no output floor, since India has no IRB banks |
| US | Re-proposed March 2026; still pending |

## 22 — Banking book and trading book

**Every position sits in one of two books, and the book decides the capital rules.**

| | Banking book | Trading book |
|---|---|---|
| Holds | Held to maturity or long term: loans, investment securities, deposits | Held with trading intent: short-term resale, profiting from price moves, market-making, and hedges of these |
| Capital | Credit risk (SA or IRB); plus IRRBB, interest rate risk in the banking book, under Pillar 2 | Market risk, under FRTB |
| Accounting | Mostly amortised cost or FVOCI | FVTPL |

| FRTB boundary rule | Meaning |
|---|---|
| Presumptive lists | Decide default placement |
| Transfers between books | Strictly limited; any capital benefit from a switch is disallowed |
| Internal risk transfers | Must be documented and controlled |

| FRTB market risk capital | Content |
|---|---|
| Standardised approach | Sensitivities-based method (delta, vega, curvature), default risk charge (jump-to-default in trading positions), residual risk add-on |
| Internal models approach | Expected shortfall at 97.5% replacing VaR at 99% and stressed VaR; liquidity horizons of 10 to 120 days; desk-by-desk approval with backtesting and P&L attribution tests; a separate charge for non-modellable risk factors |

| Credit risk in each book | Form |
|---|---|
| Banking book | Default of borrowers |
| Trading book | Credit spread risk and default risk charge on bonds and CDS |
| Both books | CCR and CVA on derivatives |

**India:** from 1 April 2024, investments are classified as HTM, AFS and FVTPL, with HFT (held for trading) inside FVTPL as the trading book.

## 23 — How IFRS 9 and Basel connect

| Point | IFRS 9 | Basel |
|---|---|---|
| PD | Point-in-time, forward-looking | Through-the-cycle |
| LGD | Best estimate | Downturn LGD |
| Horizon | 12-month or lifetime | 12-month only |
| Discounting | At the effective interest rate | None in the formula |
| Floors | None | Regulatory floors |
| Economic views | Probability-weighted scenarios | A single calibrated view |

| Provisions meet capital | Rule |
|---|---|
| Under SA | General provisions count in Tier 2, up to 1.25% of credit RWA |
| Under IRB: shortfall | Provisions below regulatory EL: the gap is deducted from CET1 |
| Under IRB: excess | Provisions above regulatory EL: counts in Tier 2, up to 0.6% of credit RWA |
| Transition | Regulators allow the day-one ECL hit to capital to be phased in over a few years; India's approach for April 2027 is [verify] |

## 24 — LCR and NSFR

**Liquidity is the ability to pay when due. It is separate from solvency.**

$$
\text{LCR} = \frac{\text{HQLA}}{\text{net cash outflows over 30 stressed days}} \geq 100\%
$$

| HQLA, high-quality liquid assets | Content | Haircut | Cap |
|---|---|---|---|
| Level 1 | Cash, central bank reserves, top sovereigns | None | None |
| Level 2A | Higher-quality non-Level-1 assets | 15% | Level 2 in total at most 40% of HQLA |
| Level 2B | Lower-quality eligible assets | 25–50% | At most 15% of HQLA |

| Outflow rate | Value |
|---|---|
| Stable retail deposits | 5% |
| Less stable retail | 10% |
| Operational wholesale | 25% |
| Non-operational corporate | 40% |
| Financial institutions | 100% |
| Undrawn committed facilities | 10% corporate credit; 30% liquidity lines |

Inflows are capped at 75% of outflows. **India:** LCR 100%; part of the SLR holdings counts as Level 1 through FALLCR.

$$
\text{NSFR} = \frac{\text{available stable funding (ASF)}}{\text{required stable funding (RSF)}} \geq 100\%, \text{ over one year}
$$

| ASF factor | Value | RSF factor | Value |
|---|---|---|---|
| Capital | 100% | Cash | 0% |
| Stable retail | 95% | Level 1 | 5% |
| Less stable retail | 90% | Retail and SME loans under 1 year | 50% |
| Corporate funding under 1 year | 50% | Low-risk mortgages | 65% |
| Short-term funding from financial institutions | 0% | Other loans over 1 year | 85% |
| | | Non-performing | 100% |

**India:** NSFR has applied since October 2021.

| Derivatives and liquidity | Effect |
|---|---|
| Collateral calls on downgrades or market moves | LCR outflows |
| Net derivative liabilities | Add to required stable funding in the NSFR |

## 25 — ALM, treasury and their risks

**ALM, asset-liability management, manages the mismatches between what a bank owns and what it owes. It is owned by ALCO, the asset-liability committee.**

| Mismatch | Meaning |
|---|---|
| Liquidity | Long loans funded by short deposits |
| Interest rate | Assets and liabilities reprice at different times |

| Treasury runs | Meaning |
|---|---|
| Funding and liquidity | Liquidity buffers and reserve requirements |
| Investment book | The bank's securities |
| FX and derivatives | Hedging and client flows |
| FTP, funds transfer pricing | Charges each business for funds used and credits it for funds brought, moving rate and liquidity risk to the centre |
| Front, middle, back office | Front trades; middle measures risk and P&L; back settles |
| India | CRR and SLR are RBI-set shares of NDTL, net demand and time liabilities [verify current rates] |

| Risk | Meaning | Tools |
|---|---|---|
| Funding liquidity | Can't raise cash | LCR, NSFR, maturity gap buckets, stress tests, contingency funding plan; India: structural liquidity statement |
| Market liquidity | Can't sell assets without large losses | As above |
| IRRBB | Rate risk in the banking book, measured on earnings (change in NII, net interest income, over 12 months) and economic value (change in EVE, present value of assets minus liabilities) | Six standard shocks: parallel up, parallel down, steepener, flattener, short up, short down. Outlier test: EVE falling more than 15% of Tier 1. India: interest rate sensitivity statement |
| FX risk | Open currency positions | Position limits |
| Market risk | The trading book | FRTB |
| Credit risk | Issuers in the investment book | Credit limits |
| CCR | On hedges and trades | Netting, collateral, limits |

**How it connects:** treasury hedges rate risk with swaps → swaps create CCR and CVA → collateral on those swaps drains liquidity → liquidity is tested by LCR and NSFR.

## 26 — Proving a model works

| Question | Measure | Rule of thumb |
|---|---|---|
| Does it rank good from bad? | Gini = 2 × AUC − 1 | Retail application 40–60%; behavioural 60–80% |
| Where does it separate best? | KS: widest gap between the bad and good score curves | 30–60 |
| Are PD levels right? | Binomial test: observed against expected defaults per grade | z beyond about 2 means the PD is wrong |
| Has the population changed? | PSI | Below 0.10 stable; 0.10–0.25 watch; above 0.25 act |
| Do underwriters trust it? | Override rate | Below about 5–10% |

$$
z = \frac{D - N \times \text{PD}}{\sqrt{N \times \text{PD} \times (1 - \text{PD})}}
$$

**Read it as:** D defaults seen in a grade of N borrowers, compared with the N × PD expected, measured in units of normal random wobble.

## 27 — Watching the portfolio

| Metric | Formula | Tells you |
|---|---|---|
| GNPA ratio | Gross NPAs ÷ gross advances | How much of the book is bad |
| NNPA ratio | (Gross NPAs − NPA provisions) ÷ (gross advances − NPA provisions) | Bad book not yet covered by provisions |
| PCR | NPA provisions ÷ gross NPAs | Share of the bad book already provided |
| Credit cost | Year's provision charge ÷ average loans | The year's loss cost |
| Roll rate | Accounts moving to a worse DPD bucket ÷ accounts in the bucket | Retail trouble, months early |

| Early warning | Retail | SME | Corporate |
|---|---|---|---|
| Top signals | Bureau score drops, bounced payments | Line stuck at its limit, GST filings missed | Downgrade, covenant breach, late accounts |

## 28 — The data machine and the analyst's job

**Month-end:** source systems → staging → data-quality checks → warehouse → ECL and RWA engines → reconcile to the general ledger → reports → sign-off.

| Must know | Meaning |
|---|---|
| Six data-quality dimensions | Complete, accurate, valid, consistent, timely, unique |
| BCBS 239 | Basel's principles for risk data: accurate, complete, timely, traceable back to source |
| Reference data | Risk weights, CCFs, master scale, scenarios: one controlled source, dated, checked by a second person (maker-checker) |
| Grain | What one row means; the first question in any data requirement |

| Step of a change | Document or test |
|---|---|
| What the business needs | BRD, business requirements document |
| Exactly how the system behaves | FSD, functional specification, with rules as decision tables |
| Systems working together | SIT, system integration testing |
| Business sign-off | UAT, user acceptance testing |
| Old and new give the same answer | Parallel run |
| First live run is right | PPV, post-production validation |

**Boundary rule:** test both sides of every threshold. Under "more than 90 DPD", 90 days is performing and 91 is default.

## 29 — Reports: what gets produced

| Pillar | Meaning |
|---|---|
| Pillar 1 | Minimum capital for credit, market, operational and CVA risk |
| Pillar 2 | Supervisory review: the bank's own ICAAP (internal capital adequacy assessment process) and ILAAP (for liquidity); the supervisor's SREP review |
| Pillar 3 | Public disclosure in standard templates: KM1 key metrics, OV1 RWA overview, and credit risk, CCR, CVA, market risk, leverage and liquidity tables |

| India: returns to the RBI, filed through CIMS | Content |
|---|---|
| Capital adequacy return | Basel III, RWA by risk type |
| Asset quality returns | NPA, provisions, restructuring |
| CRILC | Borrowers with ₹5 crore or more aggregate exposure, with SMA and default status |
| Credit information to the four credit bureaus | Fortnightly [verify] |
| LCR and NSFR returns | Liquidity ratios |
| Structural liquidity statement, interest rate sensitivity statement | ALM gaps |
| Large exposures return | Concentration |
| Form A; Form VIII | Fortnightly CRR under Section 42 of the RBI Act; SLR under the Banking Regulation Act |
| BSR, basic statistical returns | Loan-level statistics |
| Fraud reporting | Frauds |
| Pillar 3 disclosures and ICAAP | Public and supervisory |

| Region | Main reports |
|---|---|
| EU | COREP, common reporting on capital: own funds, credit SA and IRB, CCR, CVA, market risk, operational risk, large exposures, leverage, LCR, NSFR. FINREP, financial reporting on an IFRS basis, including IFRS 9 stages and non-performing and forborne exposures. AnaCredit, loan-level credit data to the ECB. EBA stress test templates |
| UK | PRA returns on COREP-style templates; Bank of England stress tests |
| US | Call reports (FFIEC forms); FR Y-9C for holding companies; FR Y-14 for stress test data (CCAR and DFAST); FR 2052a for liquidity |

| Internal MIS, run monthly | Content |
|---|---|
| Portfolio dashboard | Exposure, DPD buckets, NPA, PCR, credit cost |
| ECL movement | Opening, new loans, stage transfers, repayments, write-offs, model and scenario changes, closing |
| Stage migration matrix | Loans moving between stages |
| RWA walk | What drove RWA up or down |
| Capital and leverage | Ratios against risk appetite limits |
| CCR limits | Use against PFE limits, plus collateral and dispute reports |
| CVA P&L attribution | Split into spread moves, exposure moves and hedges |
| ALCO pack | Liquidity gaps, LCR, NSFR, IRRBB, FTP |
| Early warning | Early warning list and watchlist |
| Model monitoring | Gini, PSI, backtesting, overrides |

## 30 — Distinctions worth holding

| Losses and capital | Difference |
|---|---|
| EL vs UL | Average loss vs bad-year excess; provisions vs capital |
| Provisions vs capital | A cost set aside from profit vs the owners' money at risk |
| PIT vs TTC PD | Moves with the economy vs stable over the cycle |
| IFRS 9 ECL vs Basel EL | Lifetime, point-in-time, scenarios vs 12-month, through-the-cycle, downturn |
| IFRS 9 vs CECL | Stage-based vs lifetime from day one |
| NPA vs Stage 3 | A regulatory label vs an accounting stage; close, but not identical |

| Derivative risk | Difference |
|---|---|
| Loan credit risk vs CCR | One-way and known vs two-way and market-driven |
| CCR default charge vs CVA charge | Loss on default vs loss on spread widening |
| CVA vs DVA | Their default risk vs your own |
| Notional vs MtM vs EAD | Reference amount vs today's value vs regulatory exposure |
| EE vs PFE | Average exposure vs high-percentile exposure |
| VM vs IM | Covers today's value vs covers the close-out move |
| Bilateral vs cleared | Exposure to each counterparty vs exposure to the CCP |
| Pre-settlement vs settlement risk | Default before settlement vs one leg failing on the day |
| General vs specific wrong-way risk | Macro correlation vs legal link |

| Books, liquidity and reporting | Difference |
|---|---|
| Banking book vs trading book | Credit risk capital vs market risk capital; hold vs trade |
| Liquidity vs solvency | Can pay today vs worth more than it owes |
| LCR vs NSFR | 30-day stress vs one-year structure |
| Funding vs market liquidity | Raising cash vs selling assets |
| NII vs EVE | Earnings view vs value view of rate risk |
| SA vs IRB vs IMM | Regulator's numbers vs own risk parameters vs own exposure model |
| Pillar 1 vs 2 vs 3 | Minimum rules vs bank and supervisor judgement vs public disclosure |
| ICAAP vs ILAAP | Capital adequacy vs liquidity adequacy |
| COREP vs FINREP | Capital view vs accounting view |

## 31 — Also worth knowing

| Topic | In short |
|---|---|
| Stress testing | Sensitivity: one factor moved. Scenario: a full macro story. Reverse stress test: start from failure and ask what causes it |
| Risk appetite framework | The board sets how much risk the bank will take; limits cascade down to desks and portfolios |
| Concentration risk | Too much to one name, sector or region; covered by large exposure limits and Pillar 2 |
| Country risk | Loss from a country's events: transfer restrictions, sovereign default |
| Securitisation | Pooling loans and selling tranches; a separate capital framework where senior tranches get low risk weights and junior tranches high ones |
| Model risk management | Model inventory, independent validation, tiering by materiality, ongoing monitoring; main guidance US SR 11-7 and UK PRA SS1/23 |
| TLAC and MREL | The largest banks hold debt that can be written down in resolution, so failure does not need a bailout |
| Recovery and resolution | Recovery plan: the bank's own playbook to survive stress. Resolution plan: the authority's playbook to wind it down safely |
| Climate risk | Physical and transition risks feeding into PD, LGD and collateral values; mostly Pillar 2 and disclosure for now |

## 32 — The whole thing on one screen

| Idea | In one line |
|---|---|
| The split | Provisions pay for the average year; capital pays for the bad year |
| Loan risk | PD × LGD × EAD; default at 90 DPD, or earlier if unlikely to pay |
| IFRS 9 | Stages provisions; Stage 2 brings the cliff effect |
| Basel | Sizes capital on RWA; Basel 3.1 floors banks' own models |
| Derivatives | Create exposure that moves with markets |
| CCR | The other side defaults while that exposure is positive; SA-CCR EAD = 1.4 × (RC + PFE) |
| CCR capital | Two charges: default, and CVA, the loss when spreads widen before any default |
| Accounting for derivatives | Fair value, so their credit risk lives in CVA, not ECL |
| The books | Banking book for credit capital; trading book for FRTB |
| Liquidity chain | Treasury hedges → hedges create CCR → collateral drains liquidity → LCR and NSFR test it |
| Running it | Models are proven, portfolios watched, and data decides whether every number is right |
| Reporting | Pillar 3 publicly, returns to the regulator, MIS internally |
