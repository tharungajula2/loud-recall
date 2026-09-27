---
title: "Credit Risk in 20 Minutes — The Pareto Cheatsheet"
description: "The 20% of credit risk that handles 80% of the work: default, PD, LGD and EAD, drawing power, IFRS 9, Basel capital and 3.1, model checks, portfolio metrics and the data flow."
subject: finance
format: masterclass
order: 1
status: live
updated: 2026-09-28
verified: false
tags:
  - credit risk
  - ifrs 9
  - basel 3.1
  - capital
  - model validation
  - business analysis
---

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

## 7 — IFRS 9: provisions for expected loss

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

## 8 — Basel: capital for unexpected loss

$$
\text{Capital ratio} = \frac{\text{capital}}{\text{RWA}}, \qquad \text{RWA} = \text{EAD} \times \text{risk weight}
$$

**Read it as:** risk-weighted assets (RWA) scale each exposure by how risky it is. Credit, market and operational risk all add to the RWA.

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

## 9 — Basel 3.1 in six changes

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

## 10 — Derivatives in four lines

| Idea | Meaning |
|---|---|
| Counterparty risk | The other side defaults while the contract is worth money to you |
| Exposure | Today's value if positive, plus a buffer for how it could grow; never the notional |
| SA-CCR | Regulatory EAD = 1.4 × (replacement cost + potential future exposure) |
| CVA | The price of the counterparty's default risk; it rises as their credit spread widens, so a loss can come before any default |

## 11 — Proving a model works

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

## 12 — Watching the portfolio

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

## 13 — The data machine and the analyst's job

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
