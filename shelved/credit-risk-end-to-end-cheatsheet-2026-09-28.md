---
title: "Credit Risk, End to End — The Complete Cheatsheet"
description: "Credit risk from zero, as one dense cheatsheet: lending and who writes the rules; PD, LGD and EAD; mitigation; expected and unexpected loss; IFRS 9; Basel capital and Basel 3.1; derivatives, counterparty risk and CVA; model validation; portfolio monitoring; the data machine; and the business analyst's toolkit."
subject: finance
format: masterclass
order: 1
status: live
updated: 2026-09-27
verified: false
tags:
  - credit risk
  - business analysis
  - ifrs 9
  - basel 3.1
  - capital
  - derivatives
  - counterparty credit risk
  - cva
  - model validation
  - data quality
---

## Part 0 — The map

<svg viewBox="0 0 400 1038" width="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Credit risk on one page: the thirteen parts of this note, each with its key formula or rule" style="width:100%;max-width:400px;height:auto;display:block;margin:1rem auto">
<g font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#1f2937">
<text x="200.0" y="26.0" text-anchor="middle" font-size="16" font-weight="700">Credit risk on one page</text>
<rect x="12.0" y="44.0" width="376.0" height="70.0" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
<circle cx="36.0" cy="79.0" r="15" fill="#3b82f6"/>
<text x="36.0" y="84.5" text-anchor="middle" font-weight="700" fill="#ffffff">1</text>
<text x="62.0" y="66.0" font-weight="700" fill="#1d4ed8">Lending and the rules</text>
<text x="62.0" y="86.0">Thin margins, fat tails</text>
<text x="62.0" y="105.0">Basel, IASB write; regulators enforce</text>
<rect x="12.0" y="120.0" width="376.0" height="70.0" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
<circle cx="36.0" cy="155.0" r="15" fill="#3b82f6"/>
<text x="36.0" y="160.5" text-anchor="middle" font-weight="700" fill="#ffffff">2</text>
<text x="62.0" y="142.0" font-weight="700" fill="#1d4ed8">Making a loan</text>
<text x="62.0" y="162.0">Decide, deliver, defend</text>
<text x="62.0" y="181.0">SME: draw up to min(limit, DP)</text>
<rect x="12.0" y="196.0" width="376.0" height="70.0" rx="8" fill="#f0fdfa" stroke="#14b8a6" stroke-width="1.5"/>
<circle cx="36.0" cy="231.0" r="15" fill="#14b8a6"/>
<text x="36.0" y="236.5" text-anchor="middle" font-weight="700" fill="#ffffff">3</text>
<text x="62.0" y="218.0" font-weight="700" fill="#0f766e">Measuring</text>
<text x="62.0" y="238.0">Default: over 90 DPD or unlikely to pay</text>
<text x="62.0" y="257.0">EL = PD × LGD × EAD</text>
<rect x="12.0" y="272.0" width="376.0" height="70.0" rx="8" fill="#f0fdfa" stroke="#14b8a6" stroke-width="1.5"/>
<circle cx="36.0" cy="307.0" r="15" fill="#14b8a6"/>
<text x="36.0" y="312.5" text-anchor="middle" font-weight="700" fill="#ffffff">4</text>
<text x="62.0" y="294.0" font-weight="700" fill="#0f766e">Mitigation</text>
<text x="62.0" y="314.0">Collateral, guarantees, netting</text>
<text x="62.0" y="333.0">shrink EAD, LGD or the risk weight</text>
<rect x="12.0" y="348.0" width="376.0" height="70.0" rx="8" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
<circle cx="36.0" cy="383.0" r="15" fill="#f59e0b"/>
<text x="36.0" y="388.5" text-anchor="middle" font-weight="700" fill="#ffffff">5</text>
<text x="62.0" y="370.0" font-weight="700" fill="#b45309">EL and UL</text>
<text x="62.0" y="390.0">EL → provisions; UL → capital</text>
<text x="62.0" y="409.0">UL = 99.9% loss − EL</text>
<rect x="12.0" y="424.0" width="376.0" height="70.0" rx="8" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
<circle cx="36.0" cy="459.0" r="15" fill="#f59e0b"/>
<text x="36.0" y="464.5" text-anchor="middle" font-weight="700" fill="#ffffff">6</text>
<text x="62.0" y="446.0" font-weight="700" fill="#b45309">IFRS 9</text>
<text x="62.0" y="466.0">Stage 1: 12-month; Stages 2–3: lifetime</text>
<text x="62.0" y="485.0">ECL = Σ PD × LGD × EAD × DF</text>
<rect x="12.0" y="500.0" width="376.0" height="70.0" rx="8" fill="#fff1f2" stroke="#f43f5e" stroke-width="1.5"/>
<circle cx="36.0" cy="535.0" r="15" fill="#f43f5e"/>
<text x="36.0" y="540.5" text-anchor="middle" font-weight="700" fill="#ffffff">7</text>
<text x="62.0" y="522.0" font-weight="700" fill="#be123c">Basel capital</text>
<text x="62.0" y="542.0">Capital ÷ RWA ≥ 8% plus buffers</text>
<text x="62.0" y="561.0">IRB: stress the PD, take away EL</text>
<rect x="12.0" y="576.0" width="376.0" height="70.0" rx="8" fill="#fff1f2" stroke="#f43f5e" stroke-width="1.5"/>
<circle cx="36.0" cy="611.0" r="15" fill="#f43f5e"/>
<text x="36.0" y="616.5" text-anchor="middle" font-weight="700" fill="#ffffff">8</text>
<text x="62.0" y="598.0" font-weight="700" fill="#be123c">Basel 3.1</text>
<text x="62.0" y="618.0">Fixes the denominator: RWA</text>
<text x="62.0" y="637.0">Output floor: 72.5% of SA RWA</text>
<rect x="12.0" y="652.0" width="376.0" height="70.0" rx="8" fill="#f5f3ff" stroke="#8b5cf6" stroke-width="1.5"/>
<circle cx="36.0" cy="687.0" r="15" fill="#8b5cf6"/>
<text x="36.0" y="692.5" text-anchor="middle" font-weight="700" fill="#ffffff">9</text>
<text x="62.0" y="674.0" font-weight="700" fill="#6d28d9">Derivatives and CVA</text>
<text x="62.0" y="694.0">Exposure = replacement cost</text>
<text x="62.0" y="713.0">EAD = 1.4 × (RC + PFE)</text>
<rect x="12.0" y="728.0" width="376.0" height="70.0" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
<circle cx="36.0" cy="763.0" r="15" fill="#10b981"/>
<text x="36.0" y="768.5" text-anchor="middle" font-weight="700" fill="#ffffff">10</text>
<text x="62.0" y="750.0" font-weight="700" fill="#047857">Models</text>
<text x="62.0" y="770.0">Order: Gini = 2 × AUC − 1</text>
<text x="62.0" y="789.0">Levels: binomial, HL; drift: PSI</text>
<rect x="12.0" y="804.0" width="376.0" height="70.0" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
<circle cx="36.0" cy="839.0" r="15" fill="#10b981"/>
<text x="36.0" y="844.5" text-anchor="middle" font-weight="700" fill="#ffffff">11</text>
<text x="62.0" y="826.0" font-weight="700" fill="#047857">Portfolio</text>
<text x="62.0" y="846.0">Appetite → limits → early warnings</text>
<text x="62.0" y="865.0">RAROC = risk-adjusted return ÷ capital</text>
<rect x="12.0" y="880.0" width="376.0" height="70.0" rx="8" fill="#f3f4f6" stroke="#6b7280" stroke-width="1.5"/>
<circle cx="36.0" cy="915.0" r="15" fill="#6b7280"/>
<text x="36.0" y="920.5" text-anchor="middle" font-weight="700" fill="#ffffff">12</text>
<text x="62.0" y="902.0" font-weight="700" fill="#374151">The machine</text>
<text x="62.0" y="922.0">Source → transform → engine → report</text>
<text x="62.0" y="941.0">Golden source, lineage, reconciled</text>
<rect x="12.0" y="956.0" width="376.0" height="70.0" rx="8" fill="#f3f4f6" stroke="#6b7280" stroke-width="1.5"/>
<circle cx="36.0" cy="991.0" r="15" fill="#6b7280"/>
<text x="36.0" y="996.5" text-anchor="middle" font-weight="700" fill="#ffffff">13</text>
<text x="62.0" y="978.0" font-weight="700" fill="#374151">BA toolkit</text>
<text x="62.0" y="998.0">BRD → FSD → SIT → UAT → parallel</text>
<text x="62.0" y="1017.0">No artefact, no step</text>
</g>
</svg>

## Part 1 — The business of lending

**A bank borrows cheaply and lends dearer: margins are thin and steady, losses rare and heavy.** Credit risk management prices the average loss in advance, stops any single loss being fatal, and holds capital for the bad year.

### What credit risk is

**Credit risk** is the risk of loss because a borrower or counterparty does not pay what it owes, or becomes less likely to.

| Form | What happens |
|---|---|
| Default risk | The borrower stops paying |
| Migration risk | Credit quality worsens before any default: the loan is worth less and needs more capital |
| Counterparty risk | The other side of a derivative or repo defaults while owing you |
| Concentration risk | Too much riding on one name, group, sector or region |
| Settlement risk | You pay; they fail to deliver |
| Country risk | The borrower can pay, but its country stops the money leaving |
| Next door, not credit risk | Market risk (prices move), liquidity risk (cash runs short), operational risk (processes, people or systems fail) |

### Three kinds of borrower

| | Retail | SME | Corporate |
|---|---|---|---|
| Who | Individuals | Small and mid-sized businesses, often run by a promoter (founder-owner) | Large companies and groups |
| Ticket size | Thousands to a few crore | Lakhs to tens of crores | Hundreds to thousands of crores |
| Who decides | Scorecards and rules, mostly automatic | A score plus an analyst | Analyst, credit memo, committee |
| Main data | Credit bureau, income, bank statements | GST (goods and services tax) returns, bank statements, bureau on promoter and business | Audited accounts, projections, industry and management view |
| Risk viewed as | Pools of similar loans | Pools when small, names when large | Name by name |
| Watched through | Repayment behaviour | Account conduct, stock statements, tax filings | Covenants, annual review, early warnings |
| Regulatory line [verify] | Basel: an individual or small business under €1 million, in a granular pool. India: up to ₹7.5 crore per borrower | Basel: annual sales up to €50 million. India MSME (micro, small and medium enterprise), medium: investment up to ₹125 crore, turnover up to ₹500 crore | Everything larger |

### What banks lend

| Product | Type | What goes wrong |
|---|---|---|
| Term loan | Funded | The schedule can't be kept |
| Home loan | Funded, secured on property | Default and a falling property price together |
| Auto, personal loan | Funded | Job loss, over-borrowing |
| Credit card | Funded, revolving | Spending to the limit just before default |
| Cash credit, overdraft | Funded, revolving | Drawn to the limit as the business weakens |
| Bill discounting | Funded | The buyer who owes the bill doesn't pay |
| Letter of credit (LC) | Non-funded | The bank pays the seller; the buyer can't reimburse |
| Bank guarantee | Non-funded | Invoked when the client fails to pay (financial) or to perform (performance) |
| Undrawn commitment | Non-funded | Drawn just before trouble |
| Derivative | Neither: value moves with markets | The other side defaults while the contract is worth money to you |

**Funded** means money already out; **non-funded**, a promise that may become money out, so it gets a conversion factor (Part 3); **derivative**, exposure that moves with markets (Part 9).

### Who writes the rules

**Global standards bind nobody until a country adopts them; the national rulebook is what binds a bank.**

| | Who, in plain words | Capital rules | Loan-loss rules | Returns | Model risk |
|---|---|---|---|---|---|
| **Global** | **BCBS**, the Basel Committee on Banking Supervision: supervisors from about 28 jurisdictions, meeting at the Bank for International Settlements (BIS) in Basel. **IASB**: the International Accounting Standards Board. **BCBS 239**: Basel's 14 principles for risk data | Basel III and its 2017 finalisation, Basel 3.1 (Part 8) | IFRS 9: expected credit loss (ECL) | Pillar 3 disclosure templates | — |
| **India** | **RBI**, the Reserve Bank of India: central bank and bank regulator in one | RBI Master Directions; a new standardised approach from 1 April 2027 | IRAC norms (income recognition and asset classification) today; ECL from 1 April 2027. Large NBFCs (non-bank lenders) already use Ind AS 109, India's IFRS 9 | RBI returns through its CIMS portal; CRILC, the RBI's database of large borrowers | Draft guidance, June 2026 [verify] |
| **UK** | **PRA**, the Prudential Regulation Authority, part of the Bank of England: keeps banks safe and solvent (conduct is the FCA's job) | PRA Rulebook; Basel 3.1 from 1 January 2027 | IFRS 9 | PRA returns built on COREP and FINREP | SS1/23, in force since May 2024 |
| **EU** | **EBA**, the European Banking Authority: writes the detailed rules and templates. **ECB**, the European Central Bank: supervises the largest euro-area banks | **CRR3**, a regulation (the same law word for word everywhere), plus **CRD6**, a directive each country copies into its own law | IFRS 9 | **COREP** = capital; **FINREP** = financials, including IFRS 9 stages | ECB guide to internal models |
| **US** | **Fed**, the Federal Reserve (holding companies); **OCC**, the Office of the Comptroller of the Currency (national banks); **FDIC**, the Federal Deposit Insurance Corporation (state banks, deposit insurance) | US capital rule; the "Basel III endgame" still pending | **CECL**, current expected credit loss: lifetime loss from day one | FR Y-9C (capital and financials), Call Reports, FFIEC 101, FR Y-14 (stress-test data) | **SR 26-2**, which replaced SR 11-7 on 17 April 2026 |

## Part 2 — How a loan is made

### Eight stages: decide, deliver, defend

**Every loan passes through eight stages in three verbs, 3-2-3:** decide whether to lend, deliver it safely, defend the money until it's back. Each stage leaves data that the risk systems later use (Part 12).

| Verb | Stage | What happens | Data it leaves |
|---|---|---|---|
| Decide | Origination | Application; identity, sanctions and anti-money-laundering checks (KYC, AML) | Customer, application, KYC records |
| Decide | Underwriting | Can they pay (capacity)? Will they (character)? | Bureau report, spread accounts, scores, rating |
| Decide | Approval | A decision within delegated authority | Decision, approver, conditions, exceptions |
| Deliver | Documentation | Agreements signed; security created and registered | Facility, limits, collateral, charges |
| Deliver | Disbursement | Money released or a limit made available | Drawn balance, repayment schedule |
| Defend | Monitoring | Payments and financial health watched | Days past due, behaviour scores, covenant tests |
| Defend | Collections, recovery | Arrears chased; security enforced | Actions, recoveries, costs |
| Defend | Closure | Repaid, or the loss written off | Closure or write-off record |

### Retail: decided by scorecard

| Step | What happens |
|---|---|
| 1 Application, KYC | Identity, address, sanctions and fraud screening |
| 2 Credit bureau | Score, repayment history, current loans, recent enquiries (India: CIBIL, Experian, Equifax, CRIF) |
| 3 Policy rules | Knock-outs: age, minimum income, a recent 90-day delinquency, too many enquiries |
| 4 Application scorecard | A statistical model turns applicant data into a score and a probability of default, PD (Parts 3 and 10) |
| 5 Affordability | Can the income carry the new instalment? (FOIR, below) |
| 6 Decision | Score band × affordability: approve, refer to an underwriter, or decline |
| 7 Pricing | Riskier bands pay a higher rate |
| 8 Disbursement | Loan booked; repayment mandate set up |

$$
\text{EMI} = P \times \frac{r\,(1+r)^{n}}{(1+r)^{n} - 1}
$$

| Symbol | Meaning |
|---|---|
| EMI | Equated monthly instalment: the fixed monthly payment |
| P | Loan amount (principal) |
| r | Monthly interest rate: annual rate ÷ 12 |
| n | Number of monthly instalments |

**Read it as:** the fixed payment that clears principal and interest exactly on the last instalment; early EMIs are mostly interest, later ones mostly principal.

$$
\text{FOIR} = \frac{\text{existing EMIs} + \text{new EMI}}{\text{net monthly income}}
$$

**Read it as:** the fixed obligation to income ratio, the share of take-home pay already promised to lenders. Lenders commonly cap it at 50–60%, lower for small incomes; the UK and US call it debt-to-income (DTI).

| DPD: days the oldest unpaid instalment is overdue | India label [verify] | Action |
|---|---|---|
| 0 | Standard | Behaviour score refreshed monthly |
| 1–30 | SMA-0 (special mention account) | Reminders: SMS, app, automated calls |
| 31–60 | SMA-1 | Collection calls |
| 61–90 | SMA-2 | Field visits, restructuring talks |
| Over 90 | NPA (non-performing asset) | Default: recovery, legal action, settlement, write-off |
| First instalment missed | First payment default | Usually fraud or an underwriting failure, not bad luck; reported separately |

### SME: cash credit, limit and drawing power

**A cash-credit (CC) line is an overdraft backed by stock and receivables.** The bank sanctions a limit for the year; each month the goods and bills actually held set the drawing power (DP); the borrower can draw the lower of the two.

| Feature | How it works |
|---|---|
| Why it exists | The borrower's cash is stuck in stock and in bills customers haven't paid yet (**working capital**); the line funds that gap |
| Limit | The ceiling sanctioned for the year, sized on the working-capital need |
| Drawing | Draw, repay and redraw any amount up to what is available |
| Interest | Only on the amount drawn, charged daily |
| Tenor | Renewed every year; no repayment schedule |

#### Sizing the limit

| Method | Used for | Bank's limit |
|---|---|---|
| Turnover method [verify] | Smaller borrowers (traditionally limits up to ₹5 crore) | Working-capital need = 25% of projected annual turnover; the borrower brings 5% of turnover; the bank funds 20% |
| MPBF, maximum permissible bank finance (Tandon, second method) | Larger borrowers | 75% of current assets, minus current liabilities other than bank borrowings |
| Cash budget | Seasonal or project-like businesses | The peak monthly funding gap in a month-by-month cash plan |

$$
\text{Limit}_{\text{turnover}} = 20\% \times \text{projected annual turnover}
$$

**Read it as:** money is stuck for about a quarter of the year (25% of turnover); the owner puts in a fifth of that (5%); the bank funds the rest.

$$
\text{MPBF} = 75\% \times \text{CA} - \text{OCL}
$$

| Symbol | Meaning |
|---|---|
| CA | Current assets: stock, receivables, cash, all turning into cash within a year |
| OCL | Other current liabilities: current liabilities except bank borrowings, such as suppliers and short-term dues |

**Read it as:** the borrower must fund at least a quarter of its current assets from long-term money, and the bank funds the remaining gap. That is why Indian banks look for a current ratio of at least 1.33.

#### Drawing power

$$
\text{DP} = (\text{stock} - \text{unpaid creditors}) \times (1 - m_s) + \text{receivables}_{<90\ \text{days}} \times (1 - m_r)
$$

| Term | Meaning |
|---|---|
| Stock − unpaid creditors | Stock the borrower truly owns; stock bought on credit is really the suppliers' money |
| m<sub>s</sub>, stock margin (commonly 25%) | A cushion for damage, obsolescence and forced-sale discounts |
| Receivables under 90 days | Bills customers owe that are fresh enough to be paid; older ones are excluded |
| m<sub>r</sub>, receivables margin (commonly 25–40%) | A cushion for customers who pay late or never |

$$
\text{Available to draw} = \min(\text{limit},\ \text{DP})
$$

**Read it as:** the limit is a ceiling on paper; DP is what real goods and bills support this month, so the line always stays backed by real assets.

#### How banks run it

| Step | What the bank does |
|---|---|
| Assess | GST returns (sales the tax system saw), bank statements (sales actually banked), tax returns, basic accounts, promoter and business bureau, a site visit; account aggregators share bank data digitally, with consent |
| Sanction | Limit set by one of the three methods; margins, security and conditions written into the sanction letter |
| Secure | Hypothecation of stock and receivables (goods stay with the borrower; the bank holds a registered claim); often a property mortgage, promoters' personal guarantees, and CGTMSE cover (a government-backed trust that guarantees much of an eligible small-business loan, Part 4) |
| Compute DP monthly | From the borrower's monthly stock statement; stock audits for larger accounts |
| Police it | Drawings above DP are irregular, as is DP from a stock statement over three months old. The account is **out of order** when the balance stays above limit or DP for 90 days, or no credits come in for 90 days, or credits don't cover the interest; out of order for 90 days makes it an NPA |
| Renew | Annual review of the whole account; conduct signals feed early warnings (Part 11) |

### Corporate: analyst, memo, committee

**The relationship manager brings the deal; a credit analyst assesses it independently in a credit appraisal memo (CAM).** Approval follows the delegation of authority: the bigger the exposure and the weaker the grade, the more senior the approver, up to the board's credit committee.

| CAM section | Answers |
|---|---|
| Borrower and group | Who owns it; who else in the group may need support |
| Industry and management | Cyclicality, competition, input costs; track record, governance, succession |
| Financials | Three to five years of **spread** accounts (keyed into the bank's standard template), ratios, cash flow |
| Projections | Base and downside cases: can it repay under stress? |
| Rating | **Obligor grade** (the borrower's chance of default, PD) from the internal rating model; **facility grade** (the share lost if it defaults, LGD) from its security |
| Structure and security | Facilities, tenor, repayment, pricing; what is charged and how enforceable it is |
| Covenants, risks, recommendation | The promises it must keep; what could go wrong and what protects the bank; approve, amend or decline |

### Reading a borrower

| The five Cs | Question | Evidence |
|---|---|---|
| Character | Will they pay? | Repayment history, bureau, reputation, governance |
| Capacity | Can they pay? | Cash flow, FOIR, DSCR, interest cover |
| Capital | How much of their own money is at stake? | Net worth, leverage |
| Collateral | What if they don't? | Security, its value and enforceability |
| Conditions | What around them could change? | Industry, economy, the loan's terms |

| Ratio | Formula | Tells you | Worry sign |
|---|---|---|---|
| Debt ÷ EBITDA | Total debt ÷ EBITDA (earnings before interest, tax, depreciation and amortisation: rough operating cash) | Years of operating cash needed to repay all debt | Above 4–5× for most industries |
| Debt ÷ equity | Total debt ÷ net worth (the owners' stake) | Lenders' money against owners' money | Rising year after year |
| Interest cover (ICR) | EBIT (earnings before interest and tax) ÷ interest | How many times profit covers the interest bill | Below about 2× |
| DSCR, debt service coverage ratio | (PAT + depreciation + interest) ÷ (principal due + interest); PAT = profit after tax | Whether this year's cash covers interest **and** principal: the lender's real question | Below about 1.2× |
| Current ratio | Current assets ÷ current liabilities | Whether short-term assets cover short-term debts | Below 1.33× (the MPBF benchmark); below 1× is a red flag |
| EBITDA margin | EBITDA ÷ revenue | Pricing power and cost control | Falling |
| ROCE, return on capital employed | EBIT ÷ (debt + equity) | Return on all the money in the business | Below the cost of borrowing |
| Debtor days | Receivables ÷ revenue × 365 | How long customers take to pay | Rising while sales rise: sales bought with easy credit |
| Inventory days | Inventory ÷ cost of goods sold × 365 | How long stock sits | Rising in a falling market: stock worth less than booked |
| Creditor days | Payables ÷ cost of goods sold × 365 | How long it takes to pay suppliers | A sudden jump: stretching suppliers because it can't pay |
| Cash conversion cycle | Debtor days + inventory days − creditor days | Days its own cash is locked between paying suppliers and being paid: the gap a working-capital line funds | Lengthening every year |

**Trends beat levels; cash beats profit.** A ratio sliding for three years says more than today's value, and profit that never becomes operating cash is usually stuck in receivables or stock.

### Covenants and the stressed path

| Covenant | Typical test |
|---|---|
| Financial | Net debt ÷ EBITDA at most 3.5×; interest cover at least 2.5×; DSCR at least 1.25× |
| Information | Quarterly accounts within 45 days; audited annual accounts; a compliance certificate |
| Restrictive | No new secured borrowing, asset sales or dividends above a cap without consent |
| Event | A change of control or a downgrade triggers a review or repayment |
| Breach | Not a default: it gives the bank the right to act, to reprice, add security or call the loan |

| When a borrower slips | Stress stage | Resolution |
|---|---|---|
| India | SMA status reported to CRILC for exposures of ₹5 crore or more; lenders sign an inter-creditor agreement and must agree a resolution plan within set timelines [verify] | Restructuring; insolvency under the IBC (Insolvency and Bankruptcy Code) at the NCLT (company law tribunal); SARFAESI enforcement of security without a court; debt recovery tribunals |
| UK, EU | Watchlist, forbearance, restructuring | Administration; restructuring plans and schemes; enforcement |
| US | Watchlist, workout | Chapter 11 reorganisation or Chapter 7 liquidation |

## Part 3 — Measuring the risk: PD, LGD, EAD

### What counts as default

| Rulebook | The default rule | In plain words |
|---|---|---|
| Basel | Over 90 days past due on a material amount, **or** unlikely to pay (UTP) in full without the bank selling collateral | The two tests; everything below is a local version |
| EU (EBA) [verify] | 90 DPD counts only once arrears pass both €100 (retail) or €500 (others) **and** 1% of the borrower's exposure; at least 3 months' good behaviour before cure (12 after a distressed restructuring) | Tiny arrears don't trip default; one payment doesn't make a borrower healthy |
| UK (PRA) [verify] | Retail: any overdue amount counts. Others: the EU test | Stricter for individuals |
| US [verify] | Non-accrual at 90 DPD; retail charged off by 120 days (instalment loans) or 180 days (cards) | Non-accrual: unpaid interest no longer booked as income. Charge-off: the loss taken |
| India (RBI) | NPA when interest or principal is overdue for more than 90 days; a CC or overdraft when out of order for 90 days; farm loans by crop season | Out of order: as defined for cash credit in Part 2 |

| UTP signal | Meaning |
|---|---|
| Non-accrual | Interest no longer believed collectable, so not booked |
| Specific provision | Money already set aside against this particular loan |
| Distressed sale | Loan sold at a material credit-related loss |
| Distressed restructuring | Terms eased (rate, tenor, a haircut) because the original deal couldn't be paid |
| Bankruptcy filing | By the borrower or a creditor |
| Fraud | The loan was obtained dishonestly |

**Default = over 90 days past due, or clearly not going to pay.** Countries differ only on how small an arrear is ignored and how long a cure takes.

### Three numbers and one formula

$$
\text{EL} = \text{PD} \times \text{LGD} \times \text{EAD}
$$

| Term | Meaning | Driven by |
|---|---|---|
| PD, probability of default | Chance the borrower defaults within a horizon, usually 12 months | The borrower: cash flow, leverage, behaviour, the economy |
| LGD, loss given default | Share of the exposure lost if default happens, after recoveries and costs | The deal: collateral, seniority, legal system, time to recover |
| EAD, exposure at default | What is owed at the moment of default | The product: drawn balance, undrawn limits, amortisation |
| EL, expected loss | The average loss per year; adds up loan by loan | All three |

**Where they go:** under the **standardised approach (SA)** capital comes from the regulator's risk-weight table and ignores the bank's PD; under the **internal ratings-based (IRB)** approach the bank's own PD (and, under advanced IRB, its LGD and CCF) drives capital. Indian banks all use the SA, so their PD and LGD models serve approval, pricing, early warning and, from April 2027, ECL (Parts 6 and 7).

### PD: grades and the master scale

**A master scale buckets every model's PD into one shared set of grades, so grade 5 means the same risk everywhere** (illustrative below; each bank sets its own).

| Grades | PD range | Roughly like | Reading |
|---|---|---|---|
| 1–2 | Below 0.05% | AAA–AA | Minimal |
| 3–4 | 0.05–0.25% | A | Low |
| 5–6 | 0.25–1% | BBB | Moderate |
| 7–8 | 1–5% | BB | Elevated |
| 9–10 | 5–20% | B | High |
| 11 | Above 20% | CCC | Watch |
| D | 100% | D | Default |

| PD type | Meaning | Used for |
|---|---|---|
| 12-month | Default within the next year | Basel capital; IFRS 9 Stage 1 |
| Lifetime | Default before the loan ends | IFRS 9 Stages 2 and 3 |
| Point-in-time (PIT) | Next year's chance given today's economy: rises in downturns, so grades migrate with the cycle | IFRS 9, pricing, early warning |
| Through-the-cycle (TTC) | The chance in an average year: barely moves, so grades stay stable | Basel capital, built on long-run averages |
| Hybrid | In between; IFRS 9 teams often convert a TTC-style rating to PIT with macro adjustments | Most real models |

<svg viewBox="0 0 400 318" width="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Chart: a point-in-time PD rises in a downturn and falls in good years; a through-the-cycle PD stays near the long-run average; a hybrid sits between" style="width:100%;max-width:400px;height:auto;display:block;margin:1rem auto">
<g font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#1f2937">
<text x="200.0" y="24.0" text-anchor="middle" font-size="16" font-weight="700">One borrower, two ways to read its PD</text>
<rect x="180.0" y="58.0" width="74.8" height="156.0" rx="0" fill="#fff1f2"/>
<text x="217.4" y="76.0" text-anchor="middle" fill="#be123c">downturn</text>
<line x1="44.0" y1="214.0" x2="384.0" y2="214.0" stroke="#9ca3af" stroke-width="1.2"/>
<line x1="44.0" y1="58.0" x2="44.0" y2="214.0" stroke="#9ca3af" stroke-width="1.2"/>
<text x="38.0" y="62.0" text-anchor="end" fill="#4b5563">PD</text>
<text x="384.0" y="234.0" text-anchor="end" fill="#4b5563">years →</text>
<path d="M 44.0 155.3 L 46.8 154.9 L 49.7 154.6 L 52.5 154.3 L 55.3 154.0 L 58.2 153.7 L 61.0 153.5 L 63.8 153.3 L 66.7 153.2 L 69.5 153.0 L 72.3 153.0 L 75.2 152.9 L 78.0 152.9 L 80.8 152.9 L 83.7 153.0 L 86.5 153.1 L 89.3 153.3 L 92.2 153.5 L 95.0 153.7 L 97.8 153.9 L 100.7 154.2 L 103.5 154.5 L 106.3 154.8 L 109.2 155.2 L 112.0 155.6 L 114.8 155.9 L 117.7 156.3 L 120.5 156.7 L 123.3 157.1 L 126.2 157.5 L 129.0 157.9 L 131.8 158.2 L 134.7 158.6 L 137.5 158.9 L 140.3 159.2 L 143.2 159.5 L 146.0 159.8 L 148.8 160.0 L 151.7 160.2 L 154.5 160.3 L 157.3 160.4 L 160.2 160.5 L 163.0 160.5 L 165.8 160.4 L 168.7 160.3 L 171.5 160.1 L 174.3 159.8 L 177.2 159.4 L 180.0 159.0 L 182.8 158.5 L 185.7 158.0 L 188.5 157.3 L 191.3 156.6 L 194.2 155.9 L 197.0 155.1 L 199.8 154.4 L 202.7 153.6 L 205.5 152.9 L 208.3 152.2 L 211.2 151.6 L 214.0 151.0 L 216.8 150.6 L 219.7 150.3 L 222.5 150.0 L 225.3 149.9 L 228.2 149.8 L 231.0 149.8 L 233.8 149.9 L 236.7 150.1 L 239.5 150.3 L 242.3 150.5 L 245.2 150.8 L 248.0 151.1 L 250.8 151.3 L 253.7 151.6 L 256.5 151.9 L 259.3 152.2 L 262.2 152.5 L 265.0 152.7 L 267.8 153.0 L 270.7 153.3 L 273.5 153.6 L 276.3 154.0 L 279.2 154.3 L 282.0 154.6 L 284.8 155.0 L 287.7 155.4 L 290.5 155.8 L 293.3 156.2 L 296.2 156.5 L 299.0 156.9 L 301.8 157.3 L 304.7 157.7 L 307.5 158.1 L 310.3 158.5 L 313.2 158.8 L 316.0 159.1 L 318.8 159.4 L 321.7 159.7 L 324.5 160.0 L 327.3 160.2 L 330.2 160.4 L 333.0 160.5 L 335.8 160.6 L 338.7 160.7 L 341.5 160.7 L 344.3 160.7 L 347.2 160.6 L 350.0 160.5 L 352.8 160.4 L 355.7 160.3 L 358.5 160.1 L 361.3 159.8 L 364.2 159.6 L 367.0 159.3 L 369.8 159.0 L 372.7 158.6 L 375.5 158.3 L 378.3 157.9 L 381.2 157.5 L 384.0 157.1" fill="none" stroke="#be123c" stroke-width="2.4" stroke-linejoin="round"/>
<path d="M 44.0 161.6 L 46.8 160.6 L 49.7 159.6 L 52.5 158.8 L 55.3 158.0 L 58.2 157.2 L 61.0 156.6 L 63.8 156.0 L 66.7 155.6 L 69.5 155.2 L 72.3 155.0 L 75.2 154.9 L 78.0 154.9 L 80.8 155.0 L 83.7 155.2 L 86.5 155.5 L 89.3 155.9 L 92.2 156.4 L 95.0 157.0 L 97.8 157.8 L 100.7 158.5 L 103.5 159.4 L 106.3 160.3 L 109.2 161.3 L 112.0 162.4 L 114.8 163.4 L 117.7 164.5 L 120.5 165.6 L 123.3 166.8 L 126.2 167.9 L 129.0 168.9 L 131.8 170.0 L 134.7 171.0 L 137.5 172.0 L 140.3 172.9 L 143.2 173.7 L 146.0 174.4 L 148.8 175.1 L 151.7 175.6 L 154.5 176.0 L 157.3 176.3 L 160.2 176.4 L 163.0 176.4 L 165.8 176.1 L 168.7 175.6 L 171.5 174.8 L 174.3 173.7 L 177.2 172.2 L 180.0 170.2 L 182.8 167.7 L 185.7 164.7 L 188.5 161.1 L 191.3 157.0 L 194.2 152.5 L 197.0 147.6 L 199.8 142.5 L 202.7 137.4 L 205.5 132.6 L 208.3 128.2 L 211.2 124.5 L 214.0 121.7 L 216.8 119.9 L 219.7 119.1 L 222.5 119.4 L 225.3 120.7 L 228.2 122.8 L 231.0 125.6 L 233.8 128.7 L 236.7 132.1 L 239.5 135.5 L 242.3 138.8 L 245.2 141.8 L 248.0 144.5 L 250.8 146.8 L 253.7 148.8 L 256.5 150.5 L 259.3 152.0 L 262.2 153.2 L 265.0 154.2 L 267.8 155.2 L 270.7 156.1 L 273.5 157.1 L 276.3 158.0 L 279.2 158.9 L 282.0 159.9 L 284.8 160.9 L 287.7 161.9 L 290.5 163.0 L 293.3 164.1 L 296.2 165.2 L 299.0 166.3 L 301.8 167.4 L 304.7 168.5 L 307.5 169.6 L 310.3 170.6 L 313.2 171.6 L 316.0 172.5 L 318.8 173.4 L 321.7 174.2 L 324.5 174.8 L 327.3 175.5 L 330.2 176.0 L 333.0 176.4 L 335.8 176.7 L 338.7 176.9 L 341.5 176.9 L 344.3 176.9 L 347.2 176.8 L 350.0 176.5 L 352.8 176.2 L 355.7 175.7 L 358.5 175.1 L 361.3 174.5 L 364.2 173.7 L 367.0 172.9 L 369.8 172.0 L 372.7 171.1 L 375.5 170.1 L 378.3 169.0 L 381.2 167.9 L 384.0 166.8" fill="none" stroke="#6b7280" stroke-width="2.0" stroke-linejoin="round" stroke-dasharray="6 5"/>
<path d="M 44.0 167.9 L 46.8 166.3 L 49.7 164.7 L 52.5 163.2 L 55.3 161.9 L 58.2 160.7 L 61.0 159.6 L 63.8 158.7 L 66.7 158.0 L 69.5 157.4 L 72.3 157.0 L 75.2 156.8 L 78.0 156.8 L 80.8 157.0 L 83.7 157.3 L 86.5 157.8 L 89.3 158.5 L 92.2 159.4 L 95.0 160.4 L 97.8 161.6 L 100.7 162.9 L 103.5 164.3 L 106.3 165.9 L 109.2 167.5 L 112.0 169.2 L 114.8 171.0 L 117.7 172.8 L 120.5 174.6 L 123.3 176.4 L 126.2 178.2 L 129.0 180.0 L 131.8 181.7 L 134.7 183.4 L 137.5 185.0 L 140.3 186.5 L 143.2 187.8 L 146.0 189.0 L 148.8 190.1 L 151.7 191.0 L 154.5 191.7 L 157.3 192.2 L 160.2 192.4 L 163.0 192.3 L 165.8 191.8 L 168.7 191.0 L 171.5 189.6 L 174.3 187.6 L 177.2 184.9 L 180.0 181.3 L 182.8 176.9 L 185.7 171.4 L 188.5 164.9 L 191.3 157.4 L 194.2 149.0 L 197.0 140.0 L 199.8 130.6 L 202.7 121.2 L 205.5 112.3 L 208.3 104.2 L 211.2 97.4 L 214.0 92.3 L 216.8 89.1 L 219.7 88.0 L 222.5 88.8 L 225.3 91.6 L 228.2 95.8 L 231.0 101.3 L 233.8 107.5 L 236.7 114.1 L 239.5 120.7 L 242.3 127.0 L 245.2 132.8 L 248.0 137.9 L 250.8 142.3 L 253.7 146.1 L 256.5 149.1 L 259.3 151.7 L 262.2 153.9 L 265.0 155.7 L 267.8 157.4 L 270.7 159.0 L 273.5 160.5 L 276.3 162.0 L 279.2 163.5 L 282.0 165.1 L 284.8 166.7 L 287.7 168.5 L 290.5 170.2 L 293.3 172.0 L 296.2 173.8 L 299.0 175.7 L 301.8 177.5 L 304.7 179.3 L 307.5 181.1 L 310.3 182.8 L 313.2 184.4 L 316.0 185.9 L 318.8 187.3 L 321.7 188.6 L 324.5 189.7 L 327.3 190.7 L 330.2 191.6 L 333.0 192.2 L 335.8 192.7 L 338.7 193.1 L 341.5 193.2 L 344.3 193.1 L 347.2 192.9 L 350.0 192.5 L 352.8 191.9 L 355.7 191.1 L 358.5 190.2 L 361.3 189.1 L 364.2 187.9 L 367.0 186.5 L 369.8 185.1 L 372.7 183.5 L 375.5 181.8 L 378.3 180.1 L 381.2 178.3 L 384.0 176.5" fill="none" stroke="#1d4ed8" stroke-width="2.6" stroke-linejoin="round"/>
<line x1="16.0" y1="239.0" x2="44.0" y2="239.0" stroke="#1d4ed8" stroke-width="2.6"/>
<text x="52.0" y="244.0">PIT: moves with the cycle → IFRS 9</text>
<line x1="16.0" y1="264.0" x2="44.0" y2="264.0" stroke="#be123c" stroke-width="2.6"/>
<text x="52.0" y="269.0">TTC: long-run average → Basel capital</text>
<line x1="16.0" y1="289.0" x2="44.0" y2="289.0" stroke="#6b7280" stroke-width="2.6" stroke-dasharray="6 5"/>
<text x="52.0" y="294.0">Hybrid: in between → most real models</text>
</g>
</svg>

### LGD: what is lost

$$
\text{LGD} = 1 - \frac{\text{PV(recoveries)} - \text{PV(costs)}}{\text{EAD}}
$$

| Term | Meaning |
|---|---|
| Recoveries | Cash collected after default: collateral sold, guarantees paid, borrower payments; capped at what is owed |
| Costs | Legal, selling and collection costs |
| PV | Present value: discounted back to the default date, because a rupee recovered years later is worth less |

**Read it as:** the share of the exposure you never get back, in default-date money.

$$
\text{LGD} = (1 - \text{cure rate}) \times \text{LGD}_{\text{no cure}}
$$

**Read it as:** many retail defaulters **cure**, clearing their arrears and returning to performing at almost no cost, so retail LGD models split into cure and no-cure paths.

| Exposure | Typical LGD |
|---|---|
| Home loan, moderate LTV (loan-to-value) | 10–25% |
| Auto loan | 30–50% |
| Credit card, personal loan (unsecured) | 60–85% |
| SME, secured on property and stock | 30–50% |
| Large corporate, senior unsecured | 40–45% |
| Subordinated debt | 75% or more |

**Downturn LGD:** recoveries are worst exactly when defaults peak, because collateral prices fall together, so Basel capital uses a downturn LGD while IFRS 9 uses a probability-weighted best estimate.

### EAD and CCF: what is owed at default

$$
\text{EAD} = \text{drawn} + \text{CCF} \times \text{undrawn}
$$

**Read it as:** the **credit conversion factor (CCF)** is the share of today's undrawn limit expected to be drawn by default. Borrowers heading for default draw their lines to the limit, so undrawn is never zero. For guarantees and LCs, EAD = amount × CCF.

| Off-balance-sheet item | Basel 3 | Basel 3.1 | India today [verify] |
|---|---|---|---|
| Unconditionally cancellable commitments: card limits, cancellable overdrafts | 0% | 10% | 0% |
| Other commitments, original maturity up to 1 year | 20% | 40% | 20% |
| Other commitments, over 1 year | 50% | 40% | 50% |
| Short-term, self-liquidating trade LCs | 20% | 20% | 20% |
| Performance guarantees, bid bonds, warranties | 50% | 50% | 50% |
| Note issuance and revolving underwriting facilities | 50% | 50% | 50% |
| Financial guarantees, standby LCs backing debt, acceptances | 100% | 100% | 100% |
| Securities lent, asset sales with recourse, forward purchases | 100% | 100% | 100% |

**Read the ladder:** the more a promise behaves like a loan, the higher its CCF. Basel 3.1 moved only the commitment rows: banks almost never cancel lines in practice (0% → 10%), and maturity stopped mattering (one 40%). India's column changes with its new SA from 1 April 2027 [verify].

## Part 4 — Reducing the risk: collateral, guarantees, netting

**PD belongs to the borrower; LGD and EAD depend on how the deal is built.** Credit risk mitigation (CRM) shrinks them, or swaps the borrower's risk weight for a stronger party's.

| Mitigant | Shrinks | SA banks | IRB banks |
|---|---|---|---|
| Financial collateral: cash, deposits, government bonds, listed shares | EAD | **Simple approach:** the covered part takes the collateral's risk weight (floor 20%). **Comprehensive approach:** haircut the collateral, then cut the exposure (below) | Comprehensive approach, giving a lower effective LGD; advanced IRB: own LGD models |
| Physical collateral: property, vehicles, machinery, stock, receivables | LGD | Not mitigation: property loans form their own classes, weighted by LTV (Part 7) | Lower supervisory LGD after haircuts (foundation); own LGD models (advanced) |
| Guarantee, or credit default swap (CDS: default insurance, Part 9) | The risk weight | **Substitution:** the guaranteed part takes the guarantor's risk weight | Substitution; advanced IRB may adjust PD or LGD instead |
| Netting | EAD | Loans against the same customer's deposits; master netting agreements for derivatives and repos (Part 9) | Same |
| Covenants | Nothing, in the formula | Not a capital mitigant: they cut losses in practice by letting the bank act early | Same |

**To count at all,** protection must be legally enforceable, charges registered and collateral valued regularly; guarantees must be direct, explicit, irrevocable and unconditional. India (all SA) uses the comprehensive approach plus substitution; the part guaranteed by CGTMSE and similar government-backed trusts carries a 0% risk weight [verify].

### Haircuts: the comprehensive approach

$$
E^{*} = \max\left(0,\ E \times (1 + H_e) - C \times (1 - H_c - H_{fx})\right)
$$

| Symbol | Meaning |
|---|---|
| E, E* | Exposure before and after the collateral |
| C | The collateral's current market value |
| H<sub>e</sub> | Haircut on the exposure (zero for a plain loan) |
| H<sub>c</sub> | Haircut on the collateral: how far its price could fall before the bank can sell it |
| H<sub>fx</sub> | An extra 8% when collateral and exposure are in different currencies |

**Read it as:** count collateral only after knocking off what it could lose before you can sell it.

| Collateral | Supervisory haircut, Basel 3.1 [verify] |
|---|---|
| Cash, same currency | 0% |
| Sovereign bonds rated AA− or better: up to 1 year / 1–5 years / over 5 years | 0.5% / 2% / 4% |
| Main-index equities | 20% |
| Other listed equities | 30% |
| Currency mismatch | Add 8% |

### Guarantees: substitution

$$
\text{RWA} = \text{EAD}_{\text{guaranteed}} \times \text{RW}_{\text{guarantor}} + \text{EAD}_{\text{rest}} \times \text{RW}_{\text{borrower}}
$$

**Read it as:** the protected slice is treated as lent to the guarantor. RWA (risk-weighted assets) is exposure × risk weight (RW), the base that capital is held against (Part 7).

### What makes mitigation fail

| Failure | Why it hurts |
|---|---|
| Legal uncertainty | A charge never registered (India: with CERSAI, the central charge registry, or the Registrar of Companies) may not survive insolvency |
| Wrong-way collateral | The borrower's own shares, or receivables from its own group, lose value exactly when it fails |
| Stale values | A property valued years ago, in a falling market |
| Double counting | One item counted in full against several facilities |
| Currency mismatch | Dollar collateral against a rupee loan swings with the exchange rate |

**To an analyst, collateral is a data model:** ID, type, value, valuation date and source, haircut, charge details, and an allocation to the facilities it secures, pro rata or to minimise capital.

## Part 5 — Expected and unexpected loss

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

| Layer | What it is | Paid for by |
|---|---|---|
| **EL**, expected loss | The average year's loss: PD × LGD × EAD | **Provisions**, charged to profit in advance and priced into the loan rate (IFRS 9, Part 6) |
| **UL**, unexpected loss | How much worse a 1-in-1,000 year is than the average | **Capital**, the owners' money (Basel, Part 7) |
| **Tail** | Losses beyond the 99.9% line | **Stress tests** and recovery plans (Part 11) |

$$
\text{UL} = \text{Loss}_{99.9\%} - \text{EL}
$$

**Read it as:** capital covers the gap between the average year and the worst year in a thousand; the average itself is already covered by provisions.

| Idea | Meaning |
|---|---|
| EL is a cost, not a risk | Across a big book it is as predictable as rent: provide for it and price it in |
| UL is the risk | Nobody knows which year will be bad, so capital is held to survive one |
| Why the tail is long | **Correlation:** a recession pushes many borrowers over at once. **Concentration:** a few large loans lose in lumps, many small ones smoothly |
| Regulatory vs economic capital | Regulatory: what the rules require (Basel's 99.9% formula). Economic: what the bank's own model says it needs, often stricter and tied to its target credit rating |

**Provisions for the average year, capital for the bad year, stress tests for the disaster.** IFRS 9 and Basel then calibrate the same PD, LGD and EAD differently (compared at the end of Part 7).

## Part 6 — Provisions for expected loss: IFRS 9

**Expected loss is a cost, so accounting makes banks book it before it arrives:** a **provision** (loss allowance) that cuts profit and the loan's carrying value. IFRS 9, from 1 January 2018, replaced IAS 39's incurred-loss model, which provided too little, too late in 2008.

### The three stages

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

| Stage | When | Provision | Interest income on |
|---|---|---|---|
| 1 | Performing; no significant increase in credit risk since origination | 12-month ECL: loss from defaults in the next 12 months | Gross carrying amount (before the allowance) |
| 2 | Significant increase in credit risk (SICR), not yet impaired | Lifetime ECL | Gross carrying amount |
| 3 | Credit-impaired: in default | Lifetime ECL | Net carrying amount (after the allowance) |
| POCI | Purchased or originated credit-impaired | Lifetime ECL from day one | A credit-adjusted effective interest rate |

### SICR: the move to Stage 2

**SICR compares risk now with risk at origination, not with an absolute level:** a loan booked at BBB and still BBB stays in Stage 1; one booked at A and now BBB may move to Stage 2.

| Trigger | Typical design |
|---|---|
| Quantitative | Lifetime PD now against lifetime PD at origination: a relative threshold (doubled or tripled) plus an absolute one (up by at least half a percentage point) |
| Qualitative | Watchlist, forbearance, sector or borrower warnings |
| Backstop | 30 DPD: a rebuttable presumption in the standard |
| Low credit risk exemption | Investment-grade exposures may stay in Stage 1 |
| Stage 3 | Usually the regulatory default definition; 90 DPD is a rebuttable presumption |
| Cure | Back to a lower stage only after a probation period, so loans don't flicker between stages |

### The ECL formula

$$
\text{ECL} = \sum_{t=1}^{T} \text{PD}_t \times \text{LGD}_t \times \text{EAD}_t \times \text{DF}_t
$$

| Symbol | Meaning |
|---|---|
| t | Each future period, usually a year |
| T | 1 year for Stage 1; the remaining life for Stages 2 and 3 |
| PD<sub>t</sub> | Marginal PD: the chance, seen from today, of defaulting in period t |
| LGD<sub>t</sub>, EAD<sub>t</sub> | Loss rate and exposure if default happens in period t |
| DF<sub>t</sub> | Discount factor at the loan's effective interest rate (EIR): 1 ÷ (1 + EIR)<sup>t</sup> |

**Read it as:** for each future year, the chance it defaults that year × the share lost × the amount owed, discounted to today; then add up the years. Moving a loan to Stage 2 stretches T from one year to its whole life, so the provision jumps without a rupee defaulting: the **cliff effect**.

### The PD family

| PD | Question it answers | Link | Used for |
|---|---|---|---|
| Marginal | Seen from today, the chance it defaults **in** year t | Cumulative<sub>t</sub> − cumulative<sub>t−1</sub> | Each year's slice of ECL |
| Cumulative | Seen from today, the chance it has defaulted **by the end of** year t | The marginals added up to year t | Lifetime PD; SICR tests |
| Survival | The chance it is still performing at the end of year t | 1 − cumulative | Links the others |
| Conditional (hazard) | **Given it survived to the start of** year t, the chance it defaults during it | Marginal ÷ survival at the start of year t | What models and macro adjustments work in |
| 12-month | Default within the next 12 months | The year-1 marginal | Stage 1; Basel capital |
| Lifetime | Default before the loan ends | Cumulative at maturity | Stages 2 and 3 |

**ECL uses the marginal PD because a loan can default only once.**

### Term structures and transition matrices

| Method | How it works | Best for |
|---|---|---|
| Transition matrices | Track how borrowers move between grades each year; chain the years | Rated corporates |
| Vintage curves, survival models | Follow cohorts by months on book; read off defaults at each age | Retail |
| Scaling a long-run curve | Shift a standard curve up or down with the economy | Thin data |

$$
\text{PD}^{(2)}_{i} = \sum_{j} m_{ij} \times \text{PD}_{j}
$$

| Symbol | Meaning |
|---|---|
| m<sub>ij</sub> | Share of grade-i borrowers in grade j a year later: one cell of the one-year **transition matrix**, whose default column is each grade's 12-month PD |
| PD<sub>j</sub> | Grade j's one-year PD; 100% for the default state, which is permanent |
| PD<sup>(2)</sup><sub>i</sub> | Grade i's cumulative two-year PD |

**Read it as:** add up every path to default within two years: wherever a borrower lands after year 1, times that grade's chance of defaulting in year 2. Repeating this, which is multiplying the matrix by itself, builds the whole term structure; a downturn scenario first tilts the matrix towards downgrades.

### Forward-looking information and scenarios

| Element | What it means |
|---|---|
| Forward-looking information (FLI) | PDs and LGDs must reflect forecasts of GDP, unemployment, interest rates and house prices |
| Satellite models | Link default rates to those macro variables; forecast three to five years, then revert to long-run averages |
| Multiple scenarios | A recession adds more loss than a boom removes, so the answer must be probability-weighted, not the base case |

$$
\text{ECL} = \sum_{s} w_s \times \text{ECL}_s
$$

**Read it as:** weight each scenario's ECL by its probability w<sub>s</sub> (the weights sum to 100%). Because the downside hurts more than the upside helps, the weighted ECL sits above the base-case ECL.

### Overlays and the provision walk

**Management overlays** (post-model adjustments) top up or trim modelled ECL for what history can't see, such as a pandemic, a sector shock or a data gap. They are acceptable when specific, quantified, approved by the impairment committee, documented, and released once the risk passes.

| Provision walk | What moves it |
|---|---|
| Opening allowance | Last period's closing figure |
| + New loans | Day-one 12-month ECL on new business |
| ± Stage transfers | Loans moving between 12-month and lifetime ECL: the cliff effect |
| ± Remeasurement | PD, LGD, EAD or scenario changes on existing loans |
| ± Model changes | New models, recalibrations, new overlays |
| − Repaid or derecognised | Loans that left the book |
| − Write-offs | Losses taken, using up the allowance |
| = Closing allowance | On the balance sheet; every line rebuilt from loan-level data for auditors and finance |

### What moves ECL

| Lever | Effect on ECL |
|---|---|
| Scenario weights shift to the downside | Up |
| PDs rise across the book | Up in proportion, plus a jump as more loans cross SICR into lifetime ECL |
| LGDs rise | Up in proportion |
| SICR threshold tightened, from doubled to tripled | Down: fewer loans in Stage 2 |
| Overlay added or released | Up or down by the overlay |

**Every lever lives as versioned reference data,** so each run is tagged with its parameter set and can be reproduced months later.

### IFRS 9, CECL and India

| | IFRS 9 | US: CECL | India: commercial banks |
|---|---|---|---|
| Who | UK, EU, most of the world; Indian NBFCs under Ind AS 109 | US banks | Commercial banks |
| Approach | Staged: 12-month, then lifetime | Lifetime ECL from day one; no stages | Today IRAC: NPA at over 90 days, fixed provision percentages. From 1 April 2027: ECL under the RBI's directions of 27 April 2026, with prudential floors and the NPA definition kept [verify] |
| In force | 2018 | 2020 for large public banks; 2023 for the rest | ECL from 1 April 2027 |

| IRAC class | Provision today [verify] |
|---|---|
| Standard | 0.40% generally; 0.25% farm and SME; 1% commercial real estate |
| Sub-standard: an NPA for up to 12 months | 15%; 25% if unsecured |
| Doubtful: up to 1 year / 1–3 years / over 3 years | 25% / 40% / 100% of the secured part, plus 100% of the unsecured part |
| Loss | 100% |

## Part 7 — Capital for unexpected loss: Basel

**Capital is the owners' money and loss-absorbing debt standing between losses and depositors.** Basel sets how much a bank must hold to survive the 1-in-1,000 year (UL, Part 5).

| Pillar | Who | What |
|---|---|---|
| 1: minimum capital | Every bank | Formula capital for credit, market and operational risk: most of this part |
| 2: ICAAP | The bank | Internal capital adequacy assessment process: its own capital need for every material risk, including those Pillar 1 ignores (concentration, interest-rate risk in the banking book, strategy), stress-tested |
| 2: SREP | The supervisor | Supervisory review and evaluation process: reviews the ICAAP and can demand capital above Pillar 1 |
| 3: disclosure | The bank, publicly | Standard templates on capital, RWA, credit quality, leverage and counterparty risk, so the market can discipline weak banks |

**Pillar 1 is the formula, Pillar 2 the conversation, Pillar 3 the shop window.**

### The capital ratio and RWA

$$
\text{Capital ratio} = \frac{\text{eligible capital}}{\text{credit RWA} + \text{market RWA} + \text{operational RWA}}
$$

$$
\text{RWA}_{\text{credit, SA}} = \text{EAD} \times \text{risk weight}
$$

| Term | Meaning |
|---|---|
| Eligible capital | CET1 + AT1 + Tier 2, after deductions (see What counts as capital) |
| RWA, risk-weighted assets | Every exposure scaled by its riskiness: a safe loan counts for less than its size, a risky one for more |
| Risk weight (RW) | The riskiness factor: from the regulator's table (SA), or from the bank's models inside Basel's formula (IRB) |
| Market and operational RWA | Their capital charge × 12.5 (= 1 ÷ 8%), so all three risks meet in one ratio |

**Minimum capital = 8% × RWA, plus buffers.**

### The standardised approach (SA)

| Exposure class | Risk weight, Basel 3.1 [verify] |
|---|---|
| Sovereigns: AAA to AA− / A / BBB / BB to B / below B− / unrated | 0% / 20% / 50% / 100% / 150% / 100% |
| Banks, rated: AAA to AA− / A / BBB / BB to B / below B− | 20% / 30% / 50% / 100% / 150% |
| Banks, unrated, graded A / B / C | 40% (30% if very strong) / 75% / 150% |
| Corporates, rated: AAA to AA− / A / BBB / BB / below BB− | 20% / 50% / 75% / 100% / 150% |
| Corporates, unrated | 100%; 65% if investment grade where ratings can't be used |
| SME corporates, unrated | 85% |
| Project finance: pre-operational / operational / high-quality | 130% / 100% / 80% |
| Regulatory retail | 75% |
| Retail transactors: cards repaid in full each month | 45% |
| Other retail | 100% |
| Residential mortgages, by LTV: up to 50% / 60% / 80% / 90% / 100% / above | 20% / 25% / 30% / 40% / 50% / 70% |
| Commercial real estate | Up to 60% LTV: the lower of 60% and the borrower's weight; above: the borrower's weight |
| Land acquisition, development, construction | 150% |
| Subordinated debt | 150% |
| Equity | 250%; 400% if speculative |
| Defaulted | 150%; 100% if specific provisions cover at least 20% |
| Unhedged currency mismatch (retail, mortgages) | × 1.5, capped at 150% |

**India's revised SA, from 1 April 2027,** brings finer weights: lower for MSMEs and low-LTV home loans, 75% for retail including cards and overdrafts, differentiated real estate, and weights that depend on each rating agency's default record [verify].

### The internal ratings-based approach (IRB)

| Input | SA | Foundation IRB | Advanced IRB | Retail IRB |
|---|---|---|---|---|
| PD | Not used: the table stands in | Bank | Bank | Bank |
| LGD | Not used | Supervisor: 40% senior unsecured corporates, 45% financials, 75% subordinated | Bank, with floors | Bank, with floors |
| EAD, CCF | Regulator's CCFs | Regulator's CCFs | Bank (revolving lines only under Basel 3.1), with floors | Bank |
| M, effective maturity | Not used | Supervisory or bank | Bank | Not used |

**The formula is the asymptotic single risk factor (ASRF, or Vasicek) model:** one factor, the economy, moves every borrower together (single risk factor), and the book is so granular that each borrower's own luck averages out (asymptotic). Real books are lumpier, so concentration goes to Pillar 2.

**Step 1: stress the PD**

$$
\text{PD}_{\text{stressed}} = \Phi\!\left(\frac{\Phi^{-1}(\text{PD}) + \sqrt{R}\ \Phi^{-1}(0.999)}{\sqrt{1 - R}}\right)
$$

**Step 2: keep only the unexpected part, adjusted for maturity**

$$
K = \left(\text{LGD} \times \text{PD}_{\text{stressed}} - \text{LGD} \times \text{PD}\right) \times \text{MA}
$$

**Step 3: turn capital into RWA**

$$
\text{RWA} = K \times 12.5 \times \text{EAD}
$$

| Symbol | Meaning |
|---|---|
| Φ, Φ<sup>−1</sup> | The standard normal distribution and its inverse: they turn a score into a probability and back |
| Φ<sup>−1</sup>(0.999) ≈ 3.09 | How deep into the bad side of the economy a 1-in-1,000 year sits |
| R | Asset correlation, set by the regulator: how strongly the borrower moves with the economy. 12–24% for corporates (higher for larger, safer names), 15% mortgages, 4% cards, 3–16% other retail |
| K | Capital per rupee of EAD |
| MA | Maturity adjustment: (1 + (M − 2.5) × b) ÷ (1 − 1.5 × b), where b = (0.11852 − 0.05478 × ln PD)<sup>2</sup> and M is effective maturity, 1–5 years. Retail: none |
| 12.5 | 1 ÷ 8%: turns capital back into RWA |

**In Part 5's terms:** LGD × stressed PD is the loss in the 1-in-1,000 year and LGD × PD is EL, so **K is UL per rupee**. The IRB formula is the EL and UL picture written as algebra.

| When this rises | The risk weight | Why |
|---|---|---|
| PD | Rises steeply, then flattens | The stressed PD climbs fast; at high PDs more of the loss is already EL, and R falls |
| LGD | Rises in proportion | K is LGD times a gap in PDs |
| M | Rises | More time to be downgraded |
| R | Rises | The borrower moves more with the economy |

<svg viewBox="0 0 400 360" width="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Chart: the IRB corporate risk weight rises steeply with PD, far below the flat standardised 100% for strong borrowers and above it for weak ones" style="width:100%;max-width:400px;height:auto;display:block;margin:1rem auto">
<g font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#1f2937">
<text x="200.0" y="24.0" text-anchor="middle" font-size="16" font-weight="700">Corporate risk weight: IRB vs SA</text>
<text x="200.0" y="45.0" text-anchor="middle" fill="#4b5563">senior unsecured, LGD 45%, maturity 2.5 years</text>
<line x1="58.0" y1="262.0" x2="384.0" y2="262.0" stroke="#e5e7eb" stroke-width="1"/>
<text x="52.0" y="267.0" text-anchor="end" fill="#4b5563">0%</text>
<line x1="58.0" y1="224.3" x2="384.0" y2="224.3" stroke="#e5e7eb" stroke-width="1"/>
<line x1="58.0" y1="186.6" x2="384.0" y2="186.6" stroke="#e5e7eb" stroke-width="1"/>
<text x="52.0" y="191.6" text-anchor="end" fill="#4b5563">100%</text>
<line x1="58.0" y1="148.9" x2="384.0" y2="148.9" stroke="#e5e7eb" stroke-width="1"/>
<line x1="58.0" y1="111.2" x2="384.0" y2="111.2" stroke="#e5e7eb" stroke-width="1"/>
<text x="52.0" y="116.2" text-anchor="end" fill="#4b5563">200%</text>
<line x1="58.0" y1="73.5" x2="384.0" y2="73.5" stroke="#e5e7eb" stroke-width="1"/>
<line x1="58.0" y1="262.0" x2="58.0" y2="267.0" stroke="#9ca3af" stroke-width="1.2"/>
<text x="58.0" y="284.0" fill="#4b5563">0.05%</text>
<line x1="95.7" y1="262.0" x2="95.7" y2="267.0" stroke="#9ca3af" stroke-width="1.2"/>
<line x1="183.3" y1="262.0" x2="183.3" y2="267.0" stroke="#9ca3af" stroke-width="1.2"/>
<text x="183.3" y="284.0" text-anchor="middle" fill="#4b5563">0.5%</text>
<line x1="221.0" y1="262.0" x2="221.0" y2="267.0" stroke="#9ca3af" stroke-width="1.2"/>
<text x="221.0" y="284.0" text-anchor="middle" fill="#4b5563">1%</text>
<line x1="308.6" y1="262.0" x2="308.6" y2="267.0" stroke="#9ca3af" stroke-width="1.2"/>
<text x="308.6" y="284.0" text-anchor="middle" fill="#4b5563">5%</text>
<line x1="384.0" y1="262.0" x2="384.0" y2="267.0" stroke="#9ca3af" stroke-width="1.2"/>
<text x="384.0" y="284.0" text-anchor="end" fill="#4b5563">20%</text>
<text x="384.0" y="306.0" text-anchor="end" fill="#4b5563">PD (log scale) →</text>
<line x1="58.0" y1="262.0" x2="384.0" y2="262.0" stroke="#9ca3af" stroke-width="1.2"/>
<line x1="58.0" y1="186.6" x2="384.0" y2="186.6" stroke="#be123c" stroke-width="2.2" stroke-dasharray="7 5"/>
<text x="384.0" y="208.6" text-anchor="end" font-weight="700" fill="#be123c">SA, unrated: 100%</text>
<path d="M 58.0 247.2 L 60.7 246.7 L 63.4 246.3 L 66.2 245.8 L 68.9 245.3 L 71.6 244.8 L 74.3 244.3 L 77.0 243.7 L 79.7 243.2 L 82.5 242.6 L 85.2 242.0 L 87.9 241.5 L 90.6 240.8 L 93.3 240.2 L 96.0 239.6 L 98.8 238.9 L 101.5 238.2 L 104.2 237.5 L 106.9 236.8 L 109.6 236.1 L 112.3 235.3 L 115.0 234.6 L 117.8 233.8 L 120.5 233.0 L 123.2 232.2 L 125.9 231.3 L 128.6 230.5 L 131.3 229.6 L 134.1 228.7 L 136.8 227.8 L 139.5 226.9 L 142.2 225.9 L 144.9 224.9 L 147.7 223.9 L 150.4 222.9 L 153.1 221.9 L 155.8 220.9 L 158.5 219.8 L 161.2 218.8 L 163.9 217.7 L 166.7 216.6 L 169.4 215.5 L 172.1 214.3 L 174.8 213.2 L 177.5 212.0 L 180.2 210.8 L 183.0 209.7 L 185.7 208.5 L 188.4 207.3 L 191.1 206.1 L 193.8 204.8 L 196.5 203.6 L 199.3 202.4 L 202.0 201.1 L 204.7 199.9 L 207.4 198.6 L 210.1 197.4 L 212.8 196.2 L 215.6 194.9 L 218.3 193.7 L 221.0 192.4 L 223.7 191.2 L 226.4 189.9 L 229.2 188.7 L 231.9 187.4 L 234.6 186.2 L 237.3 185.0 L 240.0 183.8 L 242.7 182.5 L 245.5 181.3 L 248.2 180.1 L 250.9 178.9 L 253.6 177.7 L 256.3 176.5 L 259.0 175.3 L 261.8 174.1 L 264.5 172.8 L 267.2 171.6 L 269.9 170.4 L 272.6 169.1 L 275.3 167.8 L 278.0 166.5 L 280.8 165.2 L 283.5 163.8 L 286.2 162.4 L 288.9 161.0 L 291.6 159.5 L 294.4 158.0 L 297.1 156.4 L 299.8 154.8 L 302.5 153.1 L 305.2 151.3 L 307.9 149.5 L 310.6 147.6 L 313.4 145.6 L 316.1 143.6 L 318.8 141.4 L 321.5 139.2 L 324.2 137.0 L 327.0 134.6 L 329.7 132.2 L 332.4 129.8 L 335.1 127.3 L 337.8 124.7 L 340.5 122.1 L 343.2 119.4 L 346.0 116.8 L 348.7 114.1 L 351.4 111.4 L 354.1 108.7 L 356.8 106.0 L 359.5 103.3 L 362.3 100.7 L 365.0 98.1 L 367.7 95.6 L 370.4 93.1 L 373.1 90.8 L 375.8 88.5 L 378.6 86.3 L 381.3 84.3 L 384.0 82.4" fill="none" stroke="#1d4ed8" stroke-width="2.8" stroke-linejoin="round"/>
<text x="298.6" y="147.0" text-anchor="end" font-weight="700" fill="#1d4ed8">IRB</text>
<circle cx="234.6" cy="186.6" r="4.5" fill="#1f2937"/>
<text x="224.6" y="174.6" text-anchor="end" fill="#1f2937">equal near PD 1.3%</text>
<text x="66.0" y="103.7" fill="#1d4ed8">strong names:</text>
<text x="66.0" y="123.7" fill="#1d4ed8">far less capital</text>
</g>
</svg>

**Stress the PD, take away the average, adjust for time, scale by 12.5.**

### What counts as capital

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

| Layer | Made of | Absorbs losses | Key conditions |
|---|---|---|---|
| **CET1**, Common Equity Tier 1 | Ordinary shares, share premium, retained earnings, accumulated other comprehensive income, disclosed reserves; minus deductions (below) | First and automatically, while the bank is open (**going concern**) | Permanent; nothing ever has to be paid on it |
| **AT1**, Additional Tier 1 | Perpetual subordinated bonds | While the bank is open: converted into shares or written down if CET1 falls below a trigger | No maturity; coupons can be skipped and are never owed later; callable after five years, with approval only; trigger at least 5.125% CET1 (India 6.125%) [verify] |
| **Tier 2** | Subordinated debt of at least five years' original maturity, plus eligible provisions (see Where provisions meet capital) | Only once the bank has failed (**gone concern**) | Counts 20% less each year in its last five years |

**Point of non-viability:** when the regulator decides a bank can't survive without rescue, AT1 and Tier 2 are written down or converted, as AT1 holders learned at Yes Bank (2020) and Credit Suisse (2023).

| Deducted from CET1 | Why |
|---|---|
| Goodwill and intangibles | Can't be sold to pay depositors in a crisis |
| Deferred tax assets relying on future profits | Worth something only if the bank makes profits, exactly what fails in trouble |
| IRB provision shortfall | Provisions below regulatory EL: the bank should have set more aside |
| Gains from the bank's own worsening credit | A paper gain from becoming riskier |
| Pension fund surpluses | Rarely recoverable |
| Own shares held | Buying your own shares hands capital back |
| Large holdings in other financial firms | The same capital can't prop up two banks |

### Minimums and buffers

| | Basel | UK | EU | US | India |
|---|---|---|---|---|---|
| CET1 minimum | 4.5% | 4.5% | 4.5% | 4.5% | 5.5% |
| Tier 1 minimum | 6% | 6% | 6% | 6% | 7% |
| Total capital minimum | 8% | 8% | 8% | 8% | 9% |
| Conservation buffer (CET1) | 2.5% | 2.5% | 2.5% | Stress capital buffer, at least 2.5% for large banks | 2.5% |
| Countercyclical buffer (CCyB) | 0–2.5% | Set by the Bank of England [verify] | Set by each country | Set at 0% | Not activated [verify] |
| Systemic surcharge: G-SIB and D-SIB are global and domestic systemically important banks | G-SIBs 1–3.5% | G-SIB and O-SII (other systemically important) buffers | G-SII, O-SII and systemic risk buffers | G-SIB surcharge | D-SIBs 0.2–0.8% [verify] |
| Firm-specific (Pillar 2) | Supervisor's call | Pillar 2A + PRA buffer | P2R + P2G (Pillar 2 requirement, guidance) | Through the stress tests | Through the SREP |

**Buffers are not minimums:** dipping into them isn't a breach, but automatic limits on dividends, bonuses and AT1 coupons, the **maximum distributable amount (MDA)**, apply until they are rebuilt.

### Leverage ratio

$$
\text{Leverage ratio} = \frac{\text{Tier 1 capital}}{\text{exposure measure}}
$$

**Read it as:** a backstop that ignores risk weights, so model errors can't shrink it. The exposure measure is on-balance-sheet assets plus derivatives, securities financing and off-balance-sheet items at their CCFs. Minimums: Basel 3% (plus half the surcharge for G-SIBs); UK 3.25% for large banks; India 4% for D-SIBs and 3.5% for others [verify].

### Large exposures

**One huge borrower can sink a bank however good its ratios.** "One borrower" includes everyone connected to it by ownership or economic dependence, because they fail together.

| | Basel | India [verify] |
|---|---|---|
| Reportable large exposure | 10% of Tier 1 or more | 10% of Tier 1 or more |
| Limit: one counterparty | 25% of Tier 1 | 20% (25% with board approval, exceptionally) |
| Limit: connected group | 25% of Tier 1 | 25% |
| Between two G-SIBs | 15% | — |

### The other Pillar 1 risks, and liquidity

| Risk | Basel 3 | Basel 3.1 |
|---|---|---|
| Market risk: trading positions losing value as prices move | **Value-at-risk (VaR):** the loss not exceeded on 99% of days over 10 days, plus a stressed VaR | **FRTB** (Fundamental Review of the Trading Book): **expected shortfall**, the average loss in the worst 2.5% of days; model approval desk by desk; a sensitivities-based standard method |
| Operational risk: failed processes, people or systems, or outside events | Basic indicator (15% of income), standardised (a percentage by business line), advanced (own models) | One standardised approach: a **business indicator** (an income-based size measure) × 12–18%, rising with size, scaled by loss history; many regulators, India included, set that scaling to 1 [verify] |
| Liquidity: outside the capital ratio | **LCR** (liquidity coverage ratio): high-quality liquid assets at least cover 30 days of stressed net outflows. **NSFR** (net stable funding ratio): available stable funding at least covers required stable funding, over a year | Unchanged |

**Banking book vs trading book:** loans held to maturity carry credit risk capital; positions held to trade carry market risk capital; a firm boundary stops banks moving positions to whichever side needs less.

### Where provisions meet capital

| Bank | Rule |
|---|---|
| SA banks | General provisions (broadly Stages 1 and 2) count as Tier 2, up to 1.25% of credit RWA |
| IRB banks | Eligible provisions against regulatory EL: a shortfall comes off CET1; an excess counts as Tier 2, up to 0.6% of credit RWA |
| Transition [verify] | The EU and UK phased IFRS 9's day-one hit into capital (largely run off); India spreads the day-one ECL increase over four years, 25% a year from 2027–28 to 2030–31 |

**IFRS 9 against Basel: the same three letters, two answers.**

| | IFRS 9 provisions | Basel IRB capital |
|---|---|---|
| Purpose | An unbiased accounting estimate of EL | Prudent capital for UL in a bad year |
| PD | Point-in-time, forward-looking; 12-month or lifetime | Long-run average; 12-month; floored |
| LGD | Best estimate across scenarios | Downturn; floored |
| EAD | Over the contractual or behavioural life | One-year horizon; regulatory CCFs or floors |
| Discounting | At the effective interest rate | Only inside the LGD workout |
| Output | An allowance on the balance sheet and a charge to profit | RWA and a capital requirement |

## Part 8 — From Basel 3 to Basel 3.1

**Basel III (2010) made capital bigger and better, but RWA stayed unreliable:** banks produced wildly different RWA for the same portfolio, mostly through their internal models. **Basel 3 fixed the numerator; Basel 3.1 fixes the denominator.**

| Accord | Year | What it fixed |
|---|---|---|
| Basel I | 1988 | A first global minimum: 8% capital against crude risk weights |
| Basel II | 2004 | Risk sensitivity: the SA and IRB approaches, and the three pillars |
| Basel III | 2010 | After 2008: more and better capital (CET1), buffers, leverage and liquidity ratios |
| Basel 3.1 | Agreed 2017; applied from 2025 | Credible RWA: an output floor, a finer SA, limits on models |

| Name for the 2017 package | Who uses it |
|---|---|
| Basel III finalisation, "the 2017 reforms" | The Basel Committee |
| Basel IV | Industry shorthand; not a fourth accord |
| Basel 3.1 | UK (PRA) |
| CRR3 and CRD6 | EU law |
| Basel III endgame | US regulators |

### What changed

| Area | Basel 3 | Basel 3.1 |
|---|---|---|
| Output floor | None (only old transitional floors based on Basel I) | IRB RWA at least 72.5% of SA RWA, bank-wide |
| SA credit risk | Ratings-driven and coarse: unrated corporates 100%, mortgages a flat 35% | Finer: BBB corporates 75%, unrated SMEs 85%, investment-grade unrated 65% where ratings can't be used, mortgages by LTV, unrated banks graded A, B or C, due diligence on ratings |
| IRB scope | Advanced IRB for every class | No advanced IRB for large corporates (revenue above €500 million) or financial firms; no IRB for equities |
| PD floor | 0.03% | 0.05%; 0.10% for revolving retail such as cards |
| Foundation LGD, senior unsecured | 45% | 40% for non-financial corporates; 45% for financials |
| Advanced LGD floors | Few | Unsecured corporates 25%; mortgages 5%; cards 50%; other unsecured retail 30%; secured corporates 0–15% by collateral |
| CCFs | Cancellable 0%; commitments 20% or 50% | Cancellable 10%; commitments 40%; own estimates only for revolving lines, never below half the SA CCF |
| 1.06 scaling factor on IRB RWA | Applied | Removed |
| CVA risk (credit valuation adjustment, Part 9) | Standardised, or advanced with internal models | Basic or standardised approaches (BA-CVA, SA-CVA); no internal models |
| Counterparty exposure | Current exposure method (CEM) | SA-CCR, the standardised approach for counterparty credit risk (agreed 2014, implemented alongside; Part 9) |
| Operational risk | Three approaches, one using own models | One standardised approach |
| Market risk | Basel 2.5: VaR and stressed VaR | FRTB, finalised 2019 |
| Leverage ratio | 3% | 3%, plus half the surcharge for G-SIBs |

### The output floor

$$
\text{RWA}_{\text{final}} = \max\left(\text{RWA}_{\text{internal models}},\ 72.5\% \times \text{RWA}_{\text{standardised}}\right)
$$

**Read it as:** however good a bank's models, its RWA can't fall below 72.5% of what the standardised approach gives, measured on the whole bank rather than loan by loan.

| Hit hardest | Why |
|---|---|
| IRB banks with low-risk mortgage books, common in Europe | IRB mortgage weights of 5–15% sit far below the SA's 20% and up |
| IRB banks lending to large unrated corporates | The floor measures them at the SA's 100% |
| Banks with large undrawn cancellable lines | CCF 0% → 10% |
| Trading banks | FRTB, and the end of internal CVA models |
| SA banks | Mixed: BBB corporates, low-LTV mortgages and SMEs fall; others rise |

### Who implements, and when

| Jurisdiction | Status [verify] |
|---|---|
| Basel Committee | Agreed 2017; from 1 January 2023; floor phased up to 72.5% by 2028 |
| EU (CRR3) | From 1 January 2025; floor 50% in 2025, rising to 72.5% in 2030, some transitions to 2032; FRTB from 1 January 2027 |
| UK (Basel 3.1) | From 1 January 2027, rules finalised January 2026; FRTB internal models from 1 January 2028; floor 72.5% by 1 January 2030 |
| US (endgame) | 2023 proposal withdrawn; re-proposed 19 March 2026 (an expanded risk-based approach for the largest banks, a revised SA for the rest); comments closed 18 June 2026; final rule pending |
| India (RBI) | SA only: no bank uses IRB. Credit risk: new SA issued 27 April 2026, in force 1 April 2027. Market risk: final directions September 2026, in force 1 April 2027. Operational risk: new standardised approach adopted. SA-CCR: draft June 2026. Output floor and new CVA rules: not yet issued |

## Part 9 — Derivatives, counterparty credit risk and CVA

**A loan's risk is money not coming back. A derivative's is stranger:** the other side defaults while the contract is worth money to you, and what you lose is the cost of replacing it at today's prices.

### What a derivative is

| Term | Meaning |
|---|---|
| Derivative | A contract whose value comes from something else: an interest rate, a currency, a share or commodity price. No money is lent; both sides promise future payments |
| Hedge | Using a derivative to remove uncertainty, such as fixing today the rate for a future currency payment |
| Forward | Agree today to buy or sell on a future date at a price fixed today |
| Future | A forward with standard terms, traded on an exchange |
| Swap | Exchange one stream of payments for another over years, most often fixed interest for floating |
| Option | The right, not the obligation, to buy or sell at a set price, for a premium paid up front |
| Notional | The reference amount payments are calculated on; usually never exchanged |
| Mark-to-market (value) | What the contract is worth today to one side: what someone would pay to take it over. Usually zero at the start |
| In the money | Worth something to you: on today's prices, the other side owes you |

| | Loan | Derivative |
|---|---|---|
| Exposure today | The balance | Today's value to you, if positive |
| Exposure tomorrow | A known repayment schedule | Unknown: moves with markets |
| Who is at risk | Only the lender | Either side, whoever is in the money |
| Measured with | Drawn + CCF × undrawn (Part 3) | Simulation for pricing and limits; SA-CCR for capital |

**Exposure is the value, never the notional.**

### Measuring exposure

$$
\text{CE} = \max(V,\ 0)
$$

**Read it as:** current exposure is the contract's value to you, V, when positive; if you owe them, their failure costs you nothing.

| Measure | Meaning | Used for |
|---|---|---|
| Current exposure (CE), replacement cost | Today's loss if they fail now | Today's loss |
| Expected exposure (EE) | The average positive exposure at a future date, across thousands of simulated market paths | Pricing: CVA |
| Potential future exposure (PFE) | A high percentile, say the 95th, of exposure at a future date: bad but plausible | Credit limits on derivatives |
| Expected positive exposure (EPE); effective EPE | EE averaged over time; the effective version never lets the profile fall | Capital under internal models |

<svg viewBox="0 0 400 360" width="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Chart: a five-year interest rate swap has a humped exposure profile, with potential future exposure above expected exposure; an FX forward exposure keeps rising until maturity" style="width:100%;max-width:400px;height:auto;display:block;margin:1rem auto">
<g font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#1f2937">
<text x="200.0" y="24.0" text-anchor="middle" font-size="16" font-weight="700">How derivative exposure moves</text>
<line x1="30.0" y1="226.0" x2="384.0" y2="226.0" stroke="#9ca3af" stroke-width="1.2"/>
<line x1="30.0" y1="44.0" x2="30.0" y2="226.0" stroke="#9ca3af" stroke-width="1.2"/>
<path d="M 30.0 226.0 L 33.5 184.4 L 37.1 167.7 L 40.6 155.3 L 44.2 145.2 L 47.7 136.6 L 51.2 129.1 L 54.8 122.5 L 58.3 116.5 L 61.9 111.1 L 65.4 106.3 L 68.9 101.8 L 72.5 97.8 L 76.0 94.0 L 79.6 90.6 L 83.1 87.5 L 86.6 84.6 L 90.2 82.0 L 93.7 79.6 L 97.3 77.5 L 100.8 75.5 L 104.3 73.7 L 107.9 72.1 L 111.4 70.6 L 115.0 69.4 L 118.5 68.2 L 122.0 67.3 L 125.6 66.4 L 129.1 65.7 L 132.7 65.1 L 136.2 64.7 L 139.7 64.4 L 143.3 64.2 L 146.8 64.1 L 150.4 64.1 L 153.9 64.2 L 157.4 64.5 L 161.0 64.8 L 164.5 65.2 L 168.1 65.7 L 171.6 66.4 L 175.1 67.1 L 178.7 67.9 L 182.2 68.8 L 185.8 69.7 L 189.3 70.8 L 192.8 71.9 L 196.4 73.1 L 199.9 74.4 L 203.5 75.8 L 207.0 77.3 L 210.5 78.8 L 214.1 80.4 L 217.6 82.1 L 221.2 83.8 L 224.7 85.6 L 228.2 87.5 L 231.8 89.4 L 235.3 91.4 L 238.9 93.5 L 242.4 95.7 L 245.9 97.9 L 249.5 100.1 L 253.0 102.5 L 256.6 104.8 L 260.1 107.3 L 263.6 109.8 L 267.2 112.4 L 270.7 115.0 L 274.3 117.7 L 277.8 120.4 L 281.3 123.2 L 284.9 126.0 L 288.4 129.0 L 292.0 131.9 L 295.5 134.9 L 299.0 138.0 L 302.6 141.1 L 306.1 144.3 L 309.7 147.5 L 313.2 150.7 L 316.7 154.1 L 320.3 157.4 L 323.8 160.8 L 327.4 164.3 L 330.9 167.8 L 334.4 171.4 L 338.0 175.0 L 341.5 178.6 L 345.1 182.3 L 348.6 186.1 L 352.1 189.9 L 355.7 193.7 L 359.2 197.6 L 362.8 201.5 L 366.3 205.5 L 369.8 209.5 L 373.4 213.6 L 376.9 217.7 L 380.5 221.8 L 384.0 226.0" fill="none" stroke="#6d28d9" stroke-width="2.6" stroke-linejoin="round"/>
<path d="M 30.0 226.0 L 33.5 215.9 L 37.1 211.9 L 40.6 208.9 L 44.2 206.4 L 47.7 204.3 L 51.2 202.5 L 54.8 200.9 L 58.3 199.5 L 61.9 198.1 L 65.4 197.0 L 68.9 195.9 L 72.5 194.9 L 76.0 194.0 L 79.6 193.2 L 83.1 192.4 L 86.6 191.7 L 90.2 191.1 L 93.7 190.5 L 97.3 190.0 L 100.8 189.5 L 104.3 189.1 L 107.9 188.7 L 111.4 188.3 L 115.0 188.0 L 118.5 187.7 L 122.0 187.5 L 125.6 187.3 L 129.1 187.1 L 132.7 187.0 L 136.2 186.9 L 139.7 186.8 L 143.3 186.8 L 146.8 186.7 L 150.4 186.7 L 153.9 186.8 L 157.4 186.8 L 161.0 186.9 L 164.5 187.0 L 168.1 187.1 L 171.6 187.3 L 175.1 187.5 L 178.7 187.7 L 182.2 187.9 L 185.8 188.1 L 189.3 188.4 L 192.8 188.6 L 196.4 188.9 L 199.9 189.2 L 203.5 189.6 L 207.0 189.9 L 210.5 190.3 L 214.1 190.7 L 217.6 191.1 L 221.2 191.5 L 224.7 192.0 L 228.2 192.4 L 231.8 192.9 L 235.3 193.4 L 238.9 193.9 L 242.4 194.4 L 245.9 194.9 L 249.5 195.5 L 253.0 196.0 L 256.6 196.6 L 260.1 197.2 L 263.6 197.8 L 267.2 198.4 L 270.7 199.1 L 274.3 199.7 L 277.8 200.4 L 281.3 201.1 L 284.9 201.8 L 288.4 202.5 L 292.0 203.2 L 295.5 203.9 L 299.0 204.7 L 302.6 205.4 L 306.1 206.2 L 309.7 207.0 L 313.2 207.8 L 316.7 208.6 L 320.3 209.4 L 323.8 210.2 L 327.4 211.0 L 330.9 211.9 L 334.4 212.8 L 338.0 213.6 L 341.5 214.5 L 345.1 215.4 L 348.6 216.3 L 352.1 217.2 L 355.7 218.2 L 359.2 219.1 L 362.8 220.1 L 366.3 221.0 L 369.8 222.0 L 373.4 223.0 L 376.9 224.0 L 380.5 225.0 L 384.0 226.0" fill="none" stroke="#8b5cf6" stroke-width="2.4" stroke-linejoin="round" stroke-dasharray="6 4"/>
<path d="M 30.0 226.0 L 33.5 215.1 L 37.1 210.6 L 40.6 207.1 L 44.2 204.2 L 47.7 201.6 L 51.2 199.3 L 54.8 197.1 L 58.3 195.1 L 61.9 193.3 L 65.4 191.5 L 68.9 189.8 L 72.5 188.2 L 76.0 186.7 L 79.6 185.2 L 83.1 183.7 L 86.6 182.4 L 90.2 181.0 L 93.7 179.7 L 97.3 178.4 L 100.8 177.2 L 104.3 176.0 L 107.9 174.8 L 111.4 173.7 L 115.0 172.5 L 118.5 171.4 L 122.0 170.4 L 125.6 169.3 L 129.1 168.3 L 132.7 167.2 L 136.2 166.2 L 139.7 165.2 L 143.3 164.3 L 146.8 163.3 L 150.4 162.4 L 153.9 161.4 L 157.4 160.5 L 161.0 159.6 L 164.5 158.7 L 168.1 157.9 L 171.6 157.0 L 175.1 156.1 L 178.7 155.3 L 182.2 154.4 L 185.8 153.6 L 189.3 152.8 L 192.8 152.0 L 196.4 151.2 L 199.9 150.4 L 203.5 149.6 L 207.0 148.8 L 210.5 148.1 L 214.1 147.3 L 217.6 146.6 L 221.2 145.8 L 224.7 145.1 L 228.2 144.3 L 231.8 143.6 L 235.3 142.9 L 238.9 142.2 L 242.4 141.5 L 245.9 140.8 L 249.5 140.1 L 253.0 139.4 L 256.6 138.7 L 260.1 138.0 L 263.6 137.4 L 267.2 136.7 L 270.7 136.0 L 274.3 135.4 L 277.8 134.7 L 281.3 134.1 L 284.9 133.4 L 288.4 132.8 L 292.0 132.1 L 295.5 131.5 L 299.0 130.9 L 302.6 130.2 L 306.1 129.6 L 309.7 129.0 L 313.2 128.4 L 316.7 127.8 L 320.3 127.2 L 323.8 126.6 L 327.4 126.0 L 330.9 125.4 L 334.4 124.8 L 338.0 124.2 L 341.5 123.6 L 345.1 123.1 L 348.6 122.5 L 352.1 121.9 L 355.7 121.3 L 359.2 120.8 L 362.8 120.2 L 366.3 119.6 L 369.8 119.1 L 373.4 118.5 L 376.9 118.0 L 380.5 117.4 L 384.0 116.9" fill="none" stroke="#b45309" stroke-width="2.6" stroke-linejoin="round"/>
<text x="148.0" y="56.1" text-anchor="middle" font-weight="700" fill="#6d28d9">swap PFE (95%)</text>
<text x="284.9" y="191.8" text-anchor="middle" fill="#6d28d9">swap EE</text>
<text x="382.0" y="106.9" text-anchor="end" font-weight="700" fill="#b45309">FX forward</text>
<text x="30.0" y="246.0" fill="#4b5563">trade date</text>
<text x="384.0" y="246.0" text-anchor="end" fill="#4b5563">maturity</text>
<text x="14.0" y="272.0" fill="#1f2937">Swap: more time for rates to move (↑),</text>
<text x="14.0" y="293.0" fill="#1f2937">fewer payments left to lose (↓) → a hump</text>
<text x="14.0" y="314.0" fill="#1f2937">FX forward: all paid at the end → keeps rising</text>
<text x="14.0" y="335.0" fill="#1f2937">EE → pricing (CVA); PFE → credit limits</text>
</g>
</svg>

### Shrinking exposure: netting, collateral, clearing

| Tool | How it works |
|---|---|
| ISDA master agreement | The industry's standard contract (International Swaps and Derivatives Association), signed once; every trade under it forms one **netting set** |
| Close-out netting | On default, all trades in the set close together and only the net is owed: exposure = max(sum of values, 0), not the sum of each positive value |
| CSA, credit support annex | The collateral add-on to the ISDA: whoever is out of the money posts collateral, above an agreed threshold and in calls no smaller than a minimum transfer amount |
| Variation margin (VM) | Daily settling-up equal to the current value, so exposure resets near zero every day |
| Initial margin (IM) | A security deposit from both sides, covering how far value could move while a defaulter's trades are closed out; with VM, compulsory for larger firms' uncleared trades in the major markets (India's rules date from 2024 [verify]) |
| Margin period of risk (MPOR) | Time from the last good margin payment to close-out, typically 10 business days; exposure can grow in the gap |
| Central counterparty (CCP) | Standardised trades are cleared through a CCP that faces both sides, collects margin and keeps a default fund; in India, CCIL (Clearing Corporation of India) for many rupee swaps and FX forwards [verify]. Qualifying CCP exposure: 2% risk weight |
| Repo, securities lending | A repo sells a bond and buys it back later at a slightly higher price: a secured loan in disguise; securities lending is the mirror image. Exposure = what was lent minus collateral, both after haircuts (Part 4) |

### SA-CCR: the regulator's exposure number

$$
\text{EAD} = \alpha \times (\text{RC} + \text{PFE}), \qquad \alpha = 1.4
$$

| Piece | Meaning |
|---|---|
| RC, replacement cost | The netting set's net value less collateral held, floored at zero: the loss if they failed today |
| PFE, potential future exposure | An add-on for how much worse it could get: each trade's adjusted notional × a supervisory factor × a maturity factor, combined by asset class with credit for hedges, times a multiplier below 1 when over-collateralised or out of the money |
| α = 1.4 | Basel's safety factor |
| Supervisory factors [verify] | Interest rates 0.5%; FX 4%; single-name credit 0.38–6% by rating; single-name equity 32%; equity indices 20%; commodities 18% (electricity 40%) |
| CEM, the old method | Value plus a flat percentage of notional. SA-CCR rewards netting and margining properly and is often higher for unmargined trades. India still uses CEM; draft SA-CCR directions June 2026 [verify] |

**Read it as:** the same EAD a loan has (Part 3), so the rest of the capital machinery runs unchanged.

### Wrong-way risk

**Wrong-way risk is exposure rising exactly as the counterparty weakens.**

| Type | How it arises |
|---|---|
| General | Through the market: a company earning only rupees owes dollars under a contract, so a rupee collapse makes the contract valuable to the bank just as the company weakens |
| Specific | Through a direct link: the company posts its own shares as collateral, or protection on it is bought from its own affiliate. Capitalised as if already defaulted |

### CVA: the price of the other side's credit risk

**The credit valuation adjustment (CVA) is the market value of counterparty default risk, deducted from a derivative's value:** the same swap is worth less with a shaky counterparty than with a solid one.

| Term | Meaning |
|---|---|
| Credit spread | The extra yield investors demand to lend to a company rather than the government; riskier means wider |
| Credit default swap (CDS) | Insurance against a company's default: the buyer pays a yearly premium, the CDS spread, and is paid out on default; the market's live view of that risk |
| From spread to PD | Yearly default rate ≈ spread ÷ LGD |

$$
\text{CVA} \approx \text{LGD} \times \sum_{i} \text{EE}(t_i) \times \text{PD}(t_{i-1}, t_i) \times \text{DF}(t_i)
$$

| Symbol | Meaning |
|---|---|
| EE(t<sub>i</sub>) | Expected exposure at date t<sub>i</sub>, from the simulation |
| PD(t<sub>i−1</sub>, t<sub>i</sub>) | Chance the counterparty defaults in that period, implied from its credit spread |
| DF(t<sub>i</sub>) | Discount factor back to today |
| LGD | Share lost if it defaults |

**Read it as:** for each future period, possible loss × chance they fail then × today's value of a rupee then, summed. A wider spread raises CVA and books a loss **before anyone defaults**; in 2008 about two-thirds of counterparty credit losses came this way rather than from defaults, hence a separate CVA capital charge.

| | Basel 3 | Basel 3.1 |
|---|---|---|
| CVA capital methods | Standardised; or advanced, with internal models | BA-CVA (basic: reduced, or full with hedges recognised) or SA-CVA (sensitivity-based, needs approval); no internal models |
| Small books | — | Up to €100 billion of non-centrally-cleared derivatives notional: may set CVA capital equal to counterparty credit risk capital [verify] |
| Scope | Derivatives | Derivatives, plus securities financing at fair value; the EU exempts trades with non-financial companies, pension funds and sovereigns [verify] |

**Two CVAs:** accounting CVA (IFRS 13, fair value) is today's adjustment in profit and loss; regulatory CVA risk is how far it could move in a bad year, held as capital. Its relatives, the **XVAs**, price the bank's own default (DVA, stripped out of capital because it turns worsening credit into a gain), funding (FVA), collateral terms (ColVA), capital (KVA) and initial margin (MVA).

**Counterparty risk is where credit meets market risk:** exposures come from market simulations, CVA is hedged with CDS and limits are PFE limits, so the data must join trades, netting sets, CSAs, collateral, market data and ratings.

### Assessing financial counterparties

**Banks, NBFCs, insurers and funds are rated like companies, but on CAMELS;** for funds, add strategy, leverage, asset liquidity, redemption terms and transparency.

| CAMELS | Checks |
|---|---|
| Capital | Capital ratios, leverage |
| Asset quality | NPAs, provisioning, concentration |
| Management | Governance, risk management, strategy |
| Earnings | Profitability and its stability |
| Liquidity | Liquidity ratios, funding mix |
| Sensitivity | Exposure to rate, FX and market moves |

## Part 10 — Models, and how to prove them

**Every number so far (PD, LGD, CCF, ECL, RWA) comes out of a model, and models fail in ways that cost money,** so each one is built, independently validated, approved and monitored.

| Parameter | Retail | SME | Corporate | Banks, sovereigns |
|---|---|---|---|---|
| PD | Application (at origination) and behavioural (monthly) scorecards, usually logistic regression | Scorecards on bureau, GST and bank data, with analyst overrides | Rating models: ratios plus qualitative factors | Low-default portfolios: expert models, or shadow ratings calibrated to agencies |
| LGD | Cure and workout models by product | Workout LGD by collateral | Workout LGD by seniority and collateral | Market-implied or expert |
| EAD, CCF | Balance and utilisation models | Utilisation models | Drawdown models by facility | Mostly supervisory |
| IFRS 9 | Point-in-time conversion with macro satellite models; lifetime term structures | Same | Same | Same |

### How a scorecard is built

| Step | What happens |
|---|---|
| Define "bad" | Typically 90+ DPD within 12 months of the observation date |
| Set windows | An observation date and a 12-month outcome window; a development sample plus a later, out-of-time sample |
| Prepare data | Clean it, treat missing values, exclude frauds and policy declines |
| Bin variables | Group values into bins with steady bad rates |
| Measure strength | Weight of evidence (WoE) per bin, information value (IV) per variable |
| Fit | Logistic regression on the WoE values |
| Scale | Turn log-odds into points |
| Validate | Discrimination, calibration, stability on out-of-time data |
| Set cut-offs | Trade approval rate against bad rate and profit |

$$
\text{WoE}_i = \ln\left(\frac{\%\,\text{goods}_i}{\%\,\text{bads}_i}\right)
$$

$$
\text{IV} = \sum_i \left(\%\,\text{goods}_i - \%\,\text{bads}_i\right) \times \text{WoE}_i
$$

**Read it as:** %goods<sub>i</sub> and %bads<sub>i</sub> are bin i's shares of all goods and all bads. WoE says how strongly a bin leans good (positive) or bad (negative); IV adds that up into one strength score per variable: below 0.02 useless, 0.02–0.1 weak, 0.1–0.3 medium, 0.3–0.5 strong, above 0.5 suspicious (check for leakage from the outcome).

$$
\text{Score} = \text{Offset} + \text{Factor} \times \ln(\text{odds}), \qquad \text{Factor} = \frac{\text{PDO}}{\ln 2}
$$

**Read it as:** odds are goods to bads; every **PDO** (points to double the odds) points doubles the odds of being good; Offset anchors a chosen score to chosen odds; and PD = 1 ÷ (1 + odds).

| Term | Meaning |
|---|---|
| Reject inference | Estimating how declined applicants would have performed, since their outcomes are never seen |
| Override | An underwriter reversing the score's decision; tracked, because frequent overrides mean nobody trusts the model |

### Model risk

**Lifecycle:** business need → data → development → documentation → independent validation → approval → implementation → use → monitoring → redevelopment or retirement. Whatever the rulebook (Part 1's rules table), the common ground is a full **model inventory**, **tiering** by potential harm, **independent validation** before use and periodically after, **effective challenge** (reviewers with the skill, independence and standing to push back), clear ownership, documented limitations and board oversight.

### Discrimination: does it rank?

**In credit, "positive" means default.**

| | Model says bad | Model says good |
|---|---|---|
| Actually defaulted | True positive (TP): caught | False negative (FN): a missed default, costing LGD × EAD |
| Actually repaid | False positive (FP): a good customer refused, costing the margin | True negative (TN): rightly passed |

| Metric | Formula | Meaning |
|---|---|---|
| Accuracy | (TP + TN) ÷ all | Share of calls right; useless when defaults are rare, since approving everyone looks accurate and catches no one |
| Precision | TP ÷ (TP + FP) | Of those flagged bad, the share that were |
| Recall: sensitivity, true positive rate (TPR) | TP ÷ (TP + FN) | Of real defaulters, the share caught |
| Specificity: true negative rate | TN ÷ (TN + FP) | Of good borrowers, the share passed |
| False positive rate (FPR) | FP ÷ (FP + TN) = 1 − specificity | Of good borrowers, the share wrongly flagged |
| F1 | 2 × precision × recall ÷ (precision + recall) | One number balancing the two |

<svg viewBox="0 0 400 384" width="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ROC curve: true positive rate against false positive rate at every cut-off; the model curve sits above the random diagonal and below the perfect corner; the area under it is the AUC" style="width:100%;max-width:400px;height:auto;display:block;margin:1rem auto">
<g font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#1f2937">
<text x="200.0" y="24.0" text-anchor="middle" font-size="16" font-weight="700">ROC: every cut-off at once</text>
<path d="M 64.0 348.0 L 64.0 348.0 L 66.9 316.7 L 69.8 299.6 L 72.6 286.0 L 75.5 274.5 L 78.4 264.4 L 81.3 255.3 L 84.2 247.0 L 87.0 239.4 L 89.9 232.3 L 92.8 225.6 L 95.7 219.4 L 98.6 213.5 L 101.4 207.9 L 104.3 202.7 L 107.2 197.6 L 110.1 192.8 L 113.0 188.2 L 115.8 183.8 L 118.7 179.6 L 121.6 175.5 L 124.5 171.6 L 127.4 167.9 L 130.2 164.2 L 133.1 160.8 L 136.0 157.4 L 138.9 154.1 L 141.8 151.0 L 144.6 147.9 L 147.5 145.0 L 150.4 142.1 L 153.3 139.4 L 156.2 136.7 L 159.0 134.1 L 161.9 131.5 L 164.8 129.1 L 167.7 126.7 L 170.6 124.4 L 173.4 122.1 L 176.3 120.0 L 179.2 117.8 L 182.1 115.8 L 185.0 113.8 L 187.8 111.8 L 190.7 109.9 L 193.6 108.1 L 196.5 106.3 L 199.4 104.5 L 202.2 102.8 L 205.1 101.2 L 208.0 99.6 L 210.9 98.0 L 213.8 96.5 L 216.6 95.0 L 219.5 93.6 L 222.4 92.2 L 225.3 90.8 L 228.2 89.5 L 231.0 88.2 L 233.9 86.9 L 236.8 85.7 L 239.7 84.5 L 242.6 83.4 L 245.4 82.2 L 248.3 81.2 L 251.2 80.1 L 254.1 79.1 L 257.0 78.1 L 259.8 77.1 L 262.7 76.2 L 265.6 75.3 L 268.5 74.4 L 271.4 73.5 L 274.2 72.7 L 277.1 71.9 L 280.0 71.1 L 282.9 70.4 L 285.8 69.7 L 288.6 69.0 L 291.5 68.3 L 294.4 67.7 L 297.3 67.0 L 300.2 66.4 L 303.0 65.9 L 305.9 65.3 L 308.8 64.8 L 311.7 64.3 L 314.6 63.8 L 317.4 63.4 L 320.3 62.9 L 323.2 62.5 L 326.1 62.2 L 329.0 61.8 L 331.8 61.5 L 334.7 61.2 L 337.6 60.9 L 340.5 60.6 L 343.4 60.4 L 346.2 60.2 L 349.1 60.1 L 352.0 60.0 L 352.0 348.0 Z" fill="#d1fae5"/>
<rect x="64.0" y="60.0" width="288.0" height="288.0" rx="0" fill="none" stroke="#9ca3af" stroke-width="1.2"/>
<line x1="64.0" y1="348.0" x2="352.0" y2="60.0" stroke="#9ca3af" stroke-width="1.6" stroke-dasharray="6 5"/>
<path d="M 64.0 348.0 L 64.0 60.0 L 352.0 60.0" fill="none" stroke="#10b981" stroke-width="1.8" stroke-linejoin="round" stroke-dasharray="3 4"/>
<path d="M 64.0 348.0 L 66.9 316.7 L 69.8 299.6 L 72.6 286.0 L 75.5 274.5 L 78.4 264.4 L 81.3 255.3 L 84.2 247.0 L 87.0 239.4 L 89.9 232.3 L 92.8 225.6 L 95.7 219.4 L 98.6 213.5 L 101.4 207.9 L 104.3 202.7 L 107.2 197.6 L 110.1 192.8 L 113.0 188.2 L 115.8 183.8 L 118.7 179.6 L 121.6 175.5 L 124.5 171.6 L 127.4 167.9 L 130.2 164.2 L 133.1 160.8 L 136.0 157.4 L 138.9 154.1 L 141.8 151.0 L 144.6 147.9 L 147.5 145.0 L 150.4 142.1 L 153.3 139.4 L 156.2 136.7 L 159.0 134.1 L 161.9 131.5 L 164.8 129.1 L 167.7 126.7 L 170.6 124.4 L 173.4 122.1 L 176.3 120.0 L 179.2 117.8 L 182.1 115.8 L 185.0 113.8 L 187.8 111.8 L 190.7 109.9 L 193.6 108.1 L 196.5 106.3 L 199.4 104.5 L 202.2 102.8 L 205.1 101.2 L 208.0 99.6 L 210.9 98.0 L 213.8 96.5 L 216.6 95.0 L 219.5 93.6 L 222.4 92.2 L 225.3 90.8 L 228.2 89.5 L 231.0 88.2 L 233.9 86.9 L 236.8 85.7 L 239.7 84.5 L 242.6 83.4 L 245.4 82.2 L 248.3 81.2 L 251.2 80.1 L 254.1 79.1 L 257.0 78.1 L 259.8 77.1 L 262.7 76.2 L 265.6 75.3 L 268.5 74.4 L 271.4 73.5 L 274.2 72.7 L 277.1 71.9 L 280.0 71.1 L 282.9 70.4 L 285.8 69.7 L 288.6 69.0 L 291.5 68.3 L 294.4 67.7 L 297.3 67.0 L 300.2 66.4 L 303.0 65.9 L 305.9 65.3 L 308.8 64.8 L 311.7 64.3 L 314.6 63.8 L 317.4 63.4 L 320.3 62.9 L 323.2 62.5 L 326.1 62.2 L 329.0 61.8 L 331.8 61.5 L 334.7 61.2 L 337.6 60.9 L 340.5 60.6 L 343.4 60.4 L 346.2 60.2 L 349.1 60.1 L 352.0 60.0" fill="none" stroke="#047857" stroke-width="2.8" stroke-linejoin="round"/>
<text x="75.5" y="80.2" fill="#047857">perfect: AUC 1</text>
<text x="242.6" y="204.0" fill="#4b5563">random: AUC 0.5</text>
<text x="208.0" y="290.4" text-anchor="middle" font-weight="700" fill="#047857">shaded area = AUC</text>
<text x="208.0" y="316.3" text-anchor="middle" fill="#047857">Gini = 2 × AUC − 1</text>
<circle cx="121.6" cy="175.5" r="5" fill="#1f2937"/>
<text x="131.6" y="193.5" fill="#1f2937">one cut-off</text>
<text x="64.0" y="48.0" fill="#4b5563">↑ defaulters caught (TPR)</text>
<text x="352.0" y="372.0" text-anchor="end" fill="#4b5563">good borrowers flagged (FPR) →</text>
<text x="58.0" y="353.0" text-anchor="end" fill="#4b5563">0</text>
<text x="58.0" y="70.0" text-anchor="end" fill="#4b5563">1</text>
</g>
</svg>

| Ranking measure | How it is built | Meaning | Range |
|---|---|---|---|
| ROC curve | TPR against FPR at every possible cut-off | The whole trade-off at once | Diagonal = random |
| AUC (AUROC) | Area under the ROC curve | Chance a random defaulter gets a worse score than a random good borrower | 0.5 random, 1 perfect |
| CAP curve, accuracy ratio (AR) | Share of defaults captured as borrowers are sorted riskiest first; AR = the model's area above random ÷ a perfect model's | How fast the model finds defaulters | 0 to 1 |
| Gini | Equals AR, and 2 × AUC − 1 | The industry's headline ranking number | 0 random, 1 perfect |
| KS, Kolmogorov–Smirnov | Widest gap between the cumulative score distributions of bads and goods | Best single-point separation, often near a natural cut-off | 0 to 100 |
| Rank ordering | Default rate by score band | Must rise steadily as scores worsen; a reversal is a warning even with a good Gini | Monotonic |

$$
\text{Gini} = \text{AR} = 2 \times \text{AUC} - 1
$$

$$
\text{KS} = \max_{s} \left\lvert F_{\text{bad}}(s) - F_{\text{good}}(s) \right\rvert
$$

**Read it as:** F(s) is each group's share scoring at or below s; KS is the biggest distance between the two curves.

| Model | Gini | KS |
|---|---|---|
| Retail application scorecard | 40–60% | 30–45 |
| Retail behavioural scorecard | 60–80% | 45–60 |
| Corporate rating model | 50–70% | Rarely used |
| Low-default portfolios | Hard to measure; judged on expert review | — |

### Calibration: are the PD levels right?

**Discrimination decides who gets a loan; calibration decides provisions, capital and price:** of borrowers given a 2% PD, do about 2% default?

$$
z = \frac{D - N \times \text{PD}}{\sqrt{N \times \text{PD} \times (1 - \text{PD})}}
$$

| Symbol | Meaning |
|---|---|
| N | Borrowers in the grade |
| D | Defaults observed |
| N × PD | Defaults expected |
| √(N × PD × (1 − PD)) | The typical wobble: how far default counts bounce around even when the PD is right |

**Read it as (the binomial test):** how many typical wobbles the outcome landed from expectation. About 1 is noise; beyond about 2 the PD is probably wrong, too low if z is positive.

$$
\text{HL} = \sum_{g} \frac{(O_g - E_g)^2}{E_g \times (1 - \text{PD}_g)}
$$

**Read it as (Hosmer–Lemeshow):** O<sub>g</sub> and E<sub>g</sub> are observed and expected defaults in grade g. Each grade's miss is squared (over- and under-shoots both count), scaled by its natural wobble, summed, and compared with chi-squared, with degrees of freedom equal to the number of grades on fresh data (grades minus 2 on the development sample). **A portfolio test can hide a broken grade: read HL with the per-grade binomial tests.**

$$
\text{Brier} = \frac{1}{N} \sum_{i=1}^{N} (\text{PD}_i - y_i)^2
$$

| Measure | Meaning |
|---|---|
| Brier score | Average squared gap between each PD and the outcome (y = 1 for default, 0 otherwise); lower is better; blends calibration and discrimination |
| Jeffreys test | The binomial question asked the Bayesian way; favoured by the ECB |
| Traffic lights | Typically: p-value above 5% green, 1–5% amber, below 1% red |
| Calibration target | Capital: the long-run average default rate over a cycle (the **central tendency**) plus a **margin of conservatism**. IFRS 9: point-in-time and forward-looking |
| Fixing it | Calibration is a quick shift of PD levels; weak discrimination means redevelopment |

### Stability: is the population still the same?

$$
\text{PSI} = \sum_{i} (A_i - E_i) \times \ln\left(\frac{A_i}{E_i}\right)
$$

**Read it as:** E<sub>i</sub> is score band i's share of the development population and A<sub>i</sub> its share today. Below 0.10 is stable; 0.10–0.25 a shift worth investigating; above 0.25 a significant shift, where the model may no longer apply. The **characteristic stability index (CSI)** runs the same formula on each input variable to find what moved.

### The full check-list

| Stage | Check | Catches | Rule of thumb |
|---|---|---|---|
| Build | Information value | Variables too weak, or suspiciously strong | Keep 0.1–0.5 |
| Build | WoE trend | Bins whose bad rates don't move in a sensible order | Monotonic, or explained |
| Build | Coefficient signs | A variable pushing the score the wrong way | Every sign makes business sense |
| Build | Correlation between inputs | Two variables saying the same thing | Drop or combine above about 0.7 |
| Build | VIF, variance inflation factor | An input the others can predict, making coefficients unstable | Flag above 5, act above 10 |
| Validate | Conceptual soundness, data | A method wrong for the purpose; an unrepresentative or mis-defined sample | Documented and challenged |
| Validate | Implementation | The system not reproducing the model exactly | Validators recompute scores |
| Validate, then monitor | Discrimination, calibration, stability | Wrong order, wrong levels, a changed population | Gini within 5% (relative) of development; no grade failing calibration; PSI below 0.10 |
| Validate | Benchmarking, sensitivity | Far from challengers or agency ratings; outputs that jump, or don't move, when inputs move | Differences explained |
| Use | Override rate | Underwriters ignoring the model | Below about 5–10% |
| Use | Grade concentration | The model has stopped telling borrowers apart | No grade above about 20–30% of the book |
| Use | Migration matrix | Grades jumping wildly year to year | Most stay put or move one grade |
| Use | LGD, EAD back-testing | Realised losses or drawdowns off from predictions | By segment, over time |

$$
\text{VIF} = \frac{1}{1 - R^2}
$$

**Read it as:** R² is how much of one input the other inputs explain; a VIF of 5 means 80% of it is already said by the others. **Built soundly? Works? Still working?**

**In production a model is data plus logic** (bins and points as reference data, the score as a specified calculation, monitoring as quarterly queries), so a system change, not the economy, can move its numbers; each bank sets its own traffic-light thresholds.

## Part 11 — Watching the portfolio

**Loans are approved one at a time, but risk arrives as a portfolio;** monitoring keeps the book inside what the board decided it could bear.

### Risk appetite and limits

| Term | Meaning |
|---|---|
| Risk appetite statement (RAS) | The board's statement of how much risk the bank will take to reach its goals, turned into metrics: CET1 ratio, credit cost, gross NPA ratio, largest sector's share, top-20 borrowers against Tier 1, Stage 2 share |
| Trigger (amber) | An early-warning level: act by discussing, planning, slowing down |
| Limit (red) | The hard line: escalate to the risk committee or board, with a plan to get back inside |
| Limit hierarchy | Appetite cascades: country → sector → group → borrower → facility → sub-limit, each with an owner and a daily utilisation |
| Active breach | Caused by a new transaction: needs approval in advance, or the system blocks it |
| Passive breach | Caused by something else moving (an exchange rate, a downgrade that cuts the limit, a derivative's PFE rising): needs a plan to cure |

### Concentration

$$
\text{HHI} = \sum_{i} s_i^2, \qquad \text{equivalent equal sectors} = \frac{1}{\text{HHI}}
$$

**Read it as:** s<sub>i</sub> is each sector's (or borrower's) share of the book. The Herfindahl–Hirschman index rises as the book concentrates, and 1 ÷ HHI converts it into the number of equal-sized sectors with the same concentration. Watch its trend and the largest shares.

### Early warning signals

| Retail | SME | Corporate |
|---|---|---|
| Bureau score drops; new loans taken elsewhere | CC line pinned at its limit for weeks: no cash coming back | Rating downgrades; covenant breaches |
| Repayment mandates bouncing | Cheques returned | Accounts filed late |
| Card utilisation climbing; only minimum payments | GST filings missed; banked turnover below GST turnover (money routed elsewhere) | Promoters pledging their shares |
| Salary credits stop | Stock statements late: often less stock than claimed | The auditor resigns or qualifies the accounts |
| A burst of credit enquiries | Statutory dues unpaid | Bond prices fall; CDS spreads widen |

**SME trouble shows in the account before the accounts.** Signals feed a **watchlist** of named borrowers reviewed more often, with actions: cut limits, add security, reprice or exit.

### Roll rates and vintages

$$
\text{Roll rate}_{a \to b} = \frac{\text{accounts in bucket } b \text{ now that were in bucket } a \text{ last month}}{\text{accounts in bucket } a \text{ last month}}
$$

| Tool | What it shows | Warning sign |
|---|---|---|
| Roll-rate matrix | Last month's delinquency bucket against this month's: cure, stay or roll forward. Chaining the forward rolls (current → 1–30 → 31–60 → 61–90 → 90+) estimates how much of today's current book defaults in four months | Forward rolls rising |
| Vintage analysis | Each cohort's cumulative bad rate by months on book | Newer cohorts going bad faster than older ones at the same age: looser underwriting or a turning market, months before portfolio ratios show it |

### NPA metrics and credit cost

| Metric | Formula | Tells you |
|---|---|---|
| GNPA ratio | Gross NPAs ÷ gross advances | Share of the book that is non-performing |
| NNPA ratio | (Gross NPAs − NPA provisions) ÷ (gross advances − NPA provisions) | Bad book still unprovided |
| PCR, provision coverage ratio | NPA provisions ÷ gross NPAs | How much of the bad book is already provided |
| Credit cost | Year's provision charge ÷ average loans | The year's provisioning hit, usually in basis points (1 bp = 0.01%) |

### Outliers and data checks

| Method | Catches |
|---|---|
| Month-on-month change beyond a threshold | A sudden exposure jump, often a units or currency error |
| Interquartile-range fences, z-scores | Values far outside their peer group |
| Rule checks | LTV above 200%, a default date before the start date, negative balances |
| Peer comparison | One branch's Stage 2 share at several times its region's |

**Every outlier ends with a verdict:** a genuine event; a data error, fixed at source; or a known issue with an owner and a date.

### Stress testing

**Scenario (GDP, unemployment, rates, property prices) → satellite models → stressed PD, LGD and EAD → losses and RWA → stressed capital ratio.**

| Type | Question |
|---|---|
| Sensitivity | What if one thing moves: PDs up, property prices down? |
| Scenario | What if a coherent recession hits, every variable moving together? |
| Reverse | What would it take to breach minimum capital, and how plausible is that? |

$$
\text{Stressed CET1 ratio} = \frac{\text{CET1} - \text{stressed losses}}{\text{stressed RWA}}
$$

**Read it as:** losses eat the numerator while downgrades inflate the denominator. Supervisors run their own tests (the Bank of England's, the EBA's EU-wide exercise, the Fed's annual test that sets large banks' stress capital buffer, the RBI's in its Financial Stability Report [verify]); the bank's own tests feed its ICAAP.

### Pricing for risk, and RAROC

$$
\text{Minimum rate} = \text{cost of funds} + \text{operating cost} + \text{EL rate} + \text{capital charge}
$$

$$
\text{Capital charge} = \text{capital per rupee of loan} \times (\text{hurdle rate} - \text{cost of funds})
$$

**Read it as:** a loan must pay for its funding, its running cost, its average loss, and a return on the capital it ties up, less the funding cost that capital saves.

$$
\text{RAROC} = \frac{\text{income} - \text{funding cost} - \text{operating cost} - \text{EL}}{\text{economic capital}}
$$

**Read it as:** risk-adjusted return on capital, the return per rupee of capital at risk, compared across deals and against a hurdle rate. A riskier loan can earn more rupees yet less per rupee of capital; when capital is scarce, RAROC decides.

## Part 12 — The machine: data, reporting and controls

**Every number in this note comes out of a chain of systems, every month, against deadlines, and must reconcile, trace back to source and survive an audit.** Follow one month-end run: each concept sits on the step where it happens.

<svg viewBox="0 0 400 544" width="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The month-end run: source systems, staging, transformation with reference data, data-quality checks, the risk data warehouse, calculation engines, reconciliation to finance, reports and returns, review and sign-off, each with its control" style="width:100%;max-width:400px;height:auto;display:block;margin:1rem auto">
<g font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#1f2937">
<text x="200.0" y="26.0" text-anchor="middle" font-size="16" font-weight="700">The month-end run and its checks</text>
<rect x="12.0" y="46.0" width="192.0" height="36.0" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
<text x="24.0" y="69.5" font-weight="700" fill="#1d4ed8">1  Source systems</text>
<rect x="216.0" y="50.0" width="172.0" height="28.0" rx="14" fill="#ecfdf5" stroke="#10b981" stroke-width="1.2"/>
<text x="228.0" y="69.5" fill="#047857">control totals</text>
<line x1="204.0" y1="64.0" x2="216.0" y2="64.0" stroke="#10b981" stroke-width="1.2" stroke-dasharray="3 3"/>
<line x1="38.0" y1="82.0" x2="38.0" y2="88.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="38.0,96.0 42.0,88.0 34.0,88.0" fill="#6b7280"/>
<rect x="12.0" y="96.0" width="192.0" height="36.0" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
<text x="24.0" y="119.5" font-weight="700" fill="#1d4ed8">2  Staging</text>
<rect x="216.0" y="100.0" width="172.0" height="28.0" rx="14" fill="#ecfdf5" stroke="#10b981" stroke-width="1.2"/>
<text x="228.0" y="119.5" fill="#047857">counts match</text>
<line x1="204.0" y1="114.0" x2="216.0" y2="114.0" stroke="#10b981" stroke-width="1.2" stroke-dasharray="3 3"/>
<line x1="38.0" y1="132.0" x2="38.0" y2="138.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="38.0,146.0 42.0,138.0 34.0,138.0" fill="#6b7280"/>
<rect x="12.0" y="146.0" width="192.0" height="36.0" rx="8" fill="#f0fdfa" stroke="#14b8a6" stroke-width="1.5"/>
<text x="24.0" y="169.5" font-weight="700" fill="#0f766e">3  Transform</text>
<rect x="216.0" y="150.0" width="172.0" height="28.0" rx="14" fill="#ecfdf5" stroke="#10b981" stroke-width="1.2"/>
<text x="228.0" y="169.5" fill="#047857">versioned rules</text>
<line x1="204.0" y1="164.0" x2="216.0" y2="164.0" stroke="#10b981" stroke-width="1.2" stroke-dasharray="3 3"/>
<line x1="38.0" y1="182.0" x2="38.0" y2="188.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="38.0,196.0 42.0,188.0 34.0,188.0" fill="#6b7280"/>
<rect x="12.0" y="196.0" width="192.0" height="36.0" rx="8" fill="#f0fdfa" stroke="#14b8a6" stroke-width="1.5"/>
<text x="24.0" y="219.5" font-weight="700" fill="#0f766e">4  DQ checks</text>
<rect x="216.0" y="200.0" width="172.0" height="28.0" rx="14" fill="#ecfdf5" stroke="#10b981" stroke-width="1.2"/>
<text x="228.0" y="219.5" fill="#047857">thresholds met</text>
<line x1="204.0" y1="214.0" x2="216.0" y2="214.0" stroke="#10b981" stroke-width="1.2" stroke-dasharray="3 3"/>
<line x1="38.0" y1="232.0" x2="38.0" y2="238.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="38.0,246.0 42.0,238.0 34.0,238.0" fill="#6b7280"/>
<rect x="12.0" y="246.0" width="192.0" height="36.0" rx="8" fill="#f0fdfa" stroke="#14b8a6" stroke-width="1.5"/>
<text x="24.0" y="269.5" font-weight="700" fill="#0f766e">5  Warehouse</text>
<rect x="216.0" y="250.0" width="172.0" height="28.0" rx="14" fill="#ecfdf5" stroke="#10b981" stroke-width="1.2"/>
<text x="228.0" y="269.5" fill="#047857">counted once</text>
<line x1="204.0" y1="264.0" x2="216.0" y2="264.0" stroke="#10b981" stroke-width="1.2" stroke-dasharray="3 3"/>
<line x1="38.0" y1="282.0" x2="38.0" y2="288.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="38.0,296.0 42.0,288.0 34.0,288.0" fill="#6b7280"/>
<rect x="12.0" y="296.0" width="192.0" height="36.0" rx="8" fill="#f5f3ff" stroke="#8b5cf6" stroke-width="1.5"/>
<text x="24.0" y="319.5" font-weight="700" fill="#6d28d9">6  Engines</text>
<rect x="216.0" y="300.0" width="172.0" height="28.0" rx="14" fill="#ecfdf5" stroke="#10b981" stroke-width="1.2"/>
<text x="228.0" y="319.5" fill="#047857">all calculated</text>
<line x1="204.0" y1="314.0" x2="216.0" y2="314.0" stroke="#10b981" stroke-width="1.2" stroke-dasharray="3 3"/>
<line x1="38.0" y1="332.0" x2="38.0" y2="338.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="38.0,346.0 42.0,338.0 34.0,338.0" fill="#6b7280"/>
<rect x="12.0" y="346.0" width="192.0" height="36.0" rx="8" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
<text x="24.0" y="369.5" font-weight="700" fill="#b45309">7  Reconcile</text>
<rect x="216.0" y="350.0" width="172.0" height="28.0" rx="14" fill="#ecfdf5" stroke="#10b981" stroke-width="1.2"/>
<text x="228.0" y="369.5" fill="#047857">ties to ledger</text>
<line x1="204.0" y1="364.0" x2="216.0" y2="364.0" stroke="#10b981" stroke-width="1.2" stroke-dasharray="3 3"/>
<line x1="38.0" y1="382.0" x2="38.0" y2="388.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="38.0,396.0 42.0,388.0 34.0,388.0" fill="#6b7280"/>
<rect x="12.0" y="396.0" width="192.0" height="36.0" rx="8" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
<text x="24.0" y="419.5" font-weight="700" fill="#b45309">8  Report</text>
<rect x="216.0" y="400.0" width="172.0" height="28.0" rx="14" fill="#ecfdf5" stroke="#10b981" stroke-width="1.2"/>
<text x="228.0" y="419.5" fill="#047857">traced to source</text>
<line x1="204.0" y1="414.0" x2="216.0" y2="414.0" stroke="#10b981" stroke-width="1.2" stroke-dasharray="3 3"/>
<line x1="38.0" y1="432.0" x2="38.0" y2="438.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="38.0,446.0 42.0,438.0 34.0,438.0" fill="#6b7280"/>
<rect x="12.0" y="446.0" width="192.0" height="36.0" rx="8" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
<text x="24.0" y="469.5" font-weight="700" fill="#b45309">9  Sign off</text>
<rect x="216.0" y="450.0" width="172.0" height="28.0" rx="14" fill="#ecfdf5" stroke="#10b981" stroke-width="1.2"/>
<text x="228.0" y="469.5" fill="#047857">evidence kept</text>
<line x1="204.0" y1="464.0" x2="216.0" y2="464.0" stroke="#10b981" stroke-width="1.2" stroke-dasharray="3 3"/>
<rect x="12.0" y="496.0" width="376.0" height="34.0" rx="8" fill="#f3f4f6" stroke="#6b7280" stroke-width="1.5"/>
<text x="200.0" y="518.0" text-anchor="middle" font-weight="700" fill="#374151">BCBS 239: any number, back to source</text>
</g>
</svg>

| Step | What happens | What lives here | Check |
|---|---|---|---|
| 1 Source systems | Raw data held: loan origination system (LOS), core banking, rating and spreading tool, limits, collateral, treasury | Data owners; each field born at a loan stage (Part 2) | Extracts carry control totals |
| 2 Staging | Extracts land unchanged, frozen as at the reporting date | The month-end data freeze | Record counts and totals match the source |
| 3 Transform | Source data turned into what the calculations need | Transformation rules; reference data | Rules versioned and tested; reference data maker-checked |
| 4 DQ checks | Every data-quality (DQ) rule runs | The six DQ dimensions; the issue log | Thresholds met; fixes made at source |
| 5 Warehouse | Integrated, loan-level, one version of the truth | Entities and grain; golden sources | Nothing dropped or duplicated; rejects explained |
| 6 Engines | ECL engine (staging, scenarios, overlays); regulatory engine (RWA, SA-CCR, CVA, leverage, large exposures) | Parts 3 to 9 | Every exposure calculated; totals agree |
| 7 Reconcile | Risk numbers agreed to finance | Risk to general ledger; engine to report | Breaks explained within tolerance |
| 8 Report | Returns, disclosures, dashboards | COREP, FINREP, RBI returns, Pillar 3 (Part 1) | Every figure traces to engine output |
| 9 Sign off | An accountable senior manager signs; the return is submitted | Governance, three lines of defence | Evidence of how each figure was made and who approved it |

**Typical calendar:** working days 1–3 for data, 4–7 for calculations and reconciliations, then review, sign-off and submission.

### Entities and grain

**Grain, what one row means, is the first question in any data requirement;** joining facility limits onto account rows and then summing is the classic double count.

| Entity | One row per | Key fields |
|---|---|---|
| Counterparty | Legal entity | ID, LEI (legal entity identifier), group parent, sector, country, segment |
| Group | Connected group | Parent, members, type of connection |
| Facility | Limit or agreement | Limit, product, tenor, committed or cancellable, currency |
| Exposure | Drawn position on a reporting date | Drawn, undrawn, accrued interest, DPD, stage |
| Collateral | Collateral item | Type, value, valuation date, haircut, charge, allocation |
| Rating | Rating event | Grade, PD, model version, approver, date |
| Default event | Default | Date, trigger (DPD or UTP), cure date |
| Derivative trade | Trade | Netting set, CSA, notional, maturity, market value |

### Reference data under central control

| Dataset | Holds | Typical owner |
|---|---|---|
| Counterparty hierarchy | Which entities form one group | Client data or credit |
| Industry codes | Mappings to NIC (India), NACE (EU), NAICS (US) | Risk data governance |
| Product catalogue | Product → exposure class → CCF | Product control, regulatory reporting |
| Regulatory parameters | Risk weights, CCFs, haircuts, floors | Regulatory policy |
| Master scale | Grade → PD range | Credit risk methodology |
| IFRS 9 parameters | Macro paths, scenario weights, SICR thresholds | Impairment team |
| FX rates, calendars | Month-end rates, business days | Finance, treasury |

**Central control** means one **golden source** per dataset; every value **effective-dated** (valid from, valid to) so any past run reproduces; **maker-checker** approval on every change (one person enters, another approves); version history and an audit trail; a named owner; never a local spreadsheet copy.

### Transformation rules

| A rule specification has | Why |
|---|---|
| Rule ID and purpose | Traceable from requirement to test |
| Inputs | The exact source fields |
| Logic, as a decision table | One row per case makes gaps visible ("what if the flag is blank?") |
| Output | The target field |
| Exceptions | The conservative default for missing data, plus a DQ issue raised |
| Owner, version, effective date | Governance and reproducible history |
| Test cases | One per decision-table row, plus every boundary |

### Data quality

| Dimension | Question | Typical check |
|---|---|---|
| Completeness | Is it there? | Every exposure has a sector code |
| Accuracy | Is it right? | Collateral value agrees with the valuation report |
| Validity | Is it allowed? | Grade exists on the master scale; LTV between 0% and 300% |
| Consistency | Does it agree across systems? | Default flag in core banking equals the ECL engine's |
| Timeliness | Is it current? | Valuations within policy age; data in by working day 3 |
| Uniqueness | Is it counted once? | No counterparty under two IDs |

**Rules with thresholds → a DQ dashboard every run → issues logged with owners → root cause → fix at source.** A manual fix in a report is a control failure waiting to repeat.

### BCBS 239

**Basel's 2013 principles for risk data aggregation and reporting, expected of G-SIBs since 2016 and applied to many other banks.** In practice: a data dictionary, lineage from every report back to source, reconciliations, automated aggregation, and the ability to answer a regulator's new question fast.

| Group | Principles |
|---|---|
| Governance and infrastructure | 1 Governance; 2 Data architecture and IT |
| Risk data aggregation | 3 Accuracy and integrity; 4 Completeness; 5 Timeliness; 6 Adaptability |
| Risk reporting | 7 Accuracy; 8 Comprehensiveness; 9 Clarity and usefulness; 10 Frequency; 11 Distribution |
| Supervisory review | 12 Review; 13 Remedial action; 14 Home–host cooperation |

### Dashboards

**Dashboard rules:** one question per tile; colour only against a trigger or limit; change since last period as the headline; the formula, source, owner and as-at date one tap away; drill-down that follows the grain (portfolio → sector → borrower → facility → collateral, each level adding up to the one above); phone first, with nothing scrolling sideways.

### Governance and controls

| Line of defence | Who | Role |
|---|---|---|
| First | The business | Owns and manages the risk |
| Second | Risk management, compliance | Sets policy and limits; challenges; tests key controls |
| Third | Internal audit | Independent assurance over both |

| Committee | Decides |
|---|---|
| Board risk committee | Appetite, major policies, the largest exposures |
| Credit committee | Large or out-of-policy credit decisions |
| Model risk committee | Model approvals and validation findings |
| Impairment committee | IFRS 9 scenarios, weights and overlays: the final ECL |
| ALCO, asset-liability committee | Balance sheet, capital and liquidity plans |

**Controls are preventive** (maker-checker, system validations, access rights) **or detective** (reconciliations, DQ dashboards, reviews). Auditors and regulators want evidence, not assurances: approved policies, minutes, model documentation and validation reports, reconciliations with every break explained, DQ logs, test evidence, sign-offs and access reviews.

## Part 13 — The BA toolkit

**The analyst makes change safe:** capture exactly what the business and the rules need, specify it so it can be built and tested, and prove it works before and after go-live. Follow one change from rule to live: each tool sits on the step where it is used.

<svg viewBox="0 0 400 602" width="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The change lifecycle: read the rule, assess impact, capture the need in a BRD, specify in an FSD and stories, fix the data, build, test through SIT, UAT and a parallel run, go live, report, then check with post-production validation" style="width:100%;max-width:400px;height:auto;display:block;margin:1rem auto">
<g font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#1f2937">
<text x="200.0" y="26.0" text-anchor="middle" font-size="16" font-weight="700">One change, from rule to live</text>
<rect x="12.0" y="46.0" width="192.0" height="36.0" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
<text x="24.0" y="69.5" font-weight="700" fill="#1d4ed8">1  Read the rule</text>
<rect x="216.0" y="50.0" width="172.0" height="28.0" rx="14" fill="#f3f4f6" stroke="#6b7280" stroke-width="1.2"/>
<text x="228.0" y="69.5" fill="#374151">interpretation note</text>
<line x1="204.0" y1="64.0" x2="216.0" y2="64.0" stroke="#6b7280" stroke-width="1.2" stroke-dasharray="3 3"/>
<line x1="38.0" y1="82.0" x2="38.0" y2="88.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="38.0,96.0 42.0,88.0 34.0,88.0" fill="#6b7280"/>
<rect x="12.0" y="96.0" width="192.0" height="36.0" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
<text x="24.0" y="119.5" font-weight="700" fill="#1d4ed8">2  Assess impact</text>
<rect x="216.0" y="100.0" width="172.0" height="28.0" rx="14" fill="#f3f4f6" stroke="#6b7280" stroke-width="1.2"/>
<text x="228.0" y="119.5" fill="#374151">before and after</text>
<line x1="204.0" y1="114.0" x2="216.0" y2="114.0" stroke="#6b7280" stroke-width="1.2" stroke-dasharray="3 3"/>
<line x1="38.0" y1="132.0" x2="38.0" y2="138.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="38.0,146.0 42.0,138.0 34.0,138.0" fill="#6b7280"/>
<rect x="12.0" y="146.0" width="192.0" height="36.0" rx="8" fill="#f0fdfa" stroke="#14b8a6" stroke-width="1.5"/>
<text x="24.0" y="169.5" font-weight="700" fill="#0f766e">3  Capture the need</text>
<rect x="216.0" y="150.0" width="172.0" height="28.0" rx="14" fill="#f3f4f6" stroke="#6b7280" stroke-width="1.2"/>
<text x="228.0" y="169.5" fill="#374151">BRD</text>
<line x1="204.0" y1="164.0" x2="216.0" y2="164.0" stroke="#6b7280" stroke-width="1.2" stroke-dasharray="3 3"/>
<line x1="38.0" y1="182.0" x2="38.0" y2="188.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="38.0,196.0 42.0,188.0 34.0,188.0" fill="#6b7280"/>
<rect x="12.0" y="196.0" width="192.0" height="36.0" rx="8" fill="#f0fdfa" stroke="#14b8a6" stroke-width="1.5"/>
<text x="24.0" y="219.5" font-weight="700" fill="#0f766e">4  Specify</text>
<rect x="216.0" y="200.0" width="172.0" height="28.0" rx="14" fill="#f3f4f6" stroke="#6b7280" stroke-width="1.2"/>
<text x="228.0" y="219.5" fill="#374151">FSD, stories</text>
<line x1="204.0" y1="214.0" x2="216.0" y2="214.0" stroke="#6b7280" stroke-width="1.2" stroke-dasharray="3 3"/>
<line x1="38.0" y1="232.0" x2="38.0" y2="238.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="38.0,246.0 42.0,238.0 34.0,238.0" fill="#6b7280"/>
<rect x="12.0" y="246.0" width="192.0" height="36.0" rx="8" fill="#f3f4f6" stroke="#6b7280" stroke-width="1.5"/>
<text x="24.0" y="269.5" font-weight="700" fill="#374151">5  Fix the data</text>
<rect x="216.0" y="250.0" width="172.0" height="28.0" rx="14" fill="#f3f4f6" stroke="#6b7280" stroke-width="1.2"/>
<text x="228.0" y="269.5" fill="#374151">DQ log</text>
<line x1="204.0" y1="264.0" x2="216.0" y2="264.0" stroke="#6b7280" stroke-width="1.2" stroke-dasharray="3 3"/>
<line x1="38.0" y1="282.0" x2="38.0" y2="288.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="38.0,296.0 42.0,288.0 34.0,288.0" fill="#6b7280"/>
<rect x="12.0" y="296.0" width="192.0" height="36.0" rx="8" fill="#f3f4f6" stroke="#6b7280" stroke-width="1.5"/>
<text x="24.0" y="319.5" font-weight="700" fill="#374151">6  Build</text>
<rect x="216.0" y="300.0" width="172.0" height="28.0" rx="14" fill="#f3f4f6" stroke="#6b7280" stroke-width="1.2"/>
<text x="228.0" y="319.5" fill="#374151">engine, ref data</text>
<line x1="204.0" y1="314.0" x2="216.0" y2="314.0" stroke="#6b7280" stroke-width="1.2" stroke-dasharray="3 3"/>
<line x1="38.0" y1="332.0" x2="38.0" y2="338.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="38.0,346.0 42.0,338.0 34.0,338.0" fill="#6b7280"/>
<rect x="12.0" y="346.0" width="192.0" height="36.0" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
<text x="24.0" y="369.5" font-weight="700" fill="#047857">7  SIT, UAT, parallel</text>
<rect x="216.0" y="350.0" width="172.0" height="28.0" rx="14" fill="#f3f4f6" stroke="#6b7280" stroke-width="1.2"/>
<text x="228.0" y="369.5" fill="#374151">test evidence, RTM</text>
<line x1="204.0" y1="364.0" x2="216.0" y2="364.0" stroke="#6b7280" stroke-width="1.2" stroke-dasharray="3 3"/>
<line x1="38.0" y1="382.0" x2="38.0" y2="388.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="38.0,396.0 42.0,388.0 34.0,388.0" fill="#6b7280"/>
<rect x="12.0" y="396.0" width="192.0" height="36.0" rx="8" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
<text x="24.0" y="419.5" font-weight="700" fill="#b45309">8  Go live</text>
<rect x="216.0" y="400.0" width="172.0" height="28.0" rx="14" fill="#f3f4f6" stroke="#6b7280" stroke-width="1.2"/>
<text x="228.0" y="419.5" fill="#374151">CAB, go/no-go</text>
<line x1="204.0" y1="414.0" x2="216.0" y2="414.0" stroke="#6b7280" stroke-width="1.2" stroke-dasharray="3 3"/>
<line x1="38.0" y1="432.0" x2="38.0" y2="438.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="38.0,446.0 42.0,438.0 34.0,438.0" fill="#6b7280"/>
<rect x="12.0" y="446.0" width="192.0" height="36.0" rx="8" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
<text x="24.0" y="469.5" font-weight="700" fill="#b45309">9  Report</text>
<rect x="216.0" y="450.0" width="172.0" height="28.0" rx="14" fill="#f3f4f6" stroke="#6b7280" stroke-width="1.2"/>
<text x="228.0" y="469.5" fill="#374151">new returns</text>
<line x1="204.0" y1="464.0" x2="216.0" y2="464.0" stroke="#6b7280" stroke-width="1.2" stroke-dasharray="3 3"/>
<line x1="38.0" y1="482.0" x2="38.0" y2="488.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="38.0,496.0 42.0,488.0 34.0,488.0" fill="#6b7280"/>
<rect x="12.0" y="496.0" width="192.0" height="36.0" rx="8" fill="#f5f3ff" stroke="#8b5cf6" stroke-width="1.5"/>
<text x="24.0" y="519.5" font-weight="700" fill="#6d28d9">10  Check (PPV)</text>
<rect x="216.0" y="500.0" width="172.0" height="28.0" rx="14" fill="#f3f4f6" stroke="#6b7280" stroke-width="1.2"/>
<text x="228.0" y="519.5" fill="#374151">sign-off, hypercare</text>
<line x1="204.0" y1="514.0" x2="216.0" y2="514.0" stroke="#6b7280" stroke-width="1.2" stroke-dasharray="3 3"/>
<rect x="12.0" y="550.0" width="14.0" height="14.0" rx="3" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
<text x="32.0" y="562.0" font-weight="700" fill="#1d4ed8">Understand</text>
<rect x="140.0" y="550.0" width="14.0" height="14.0" rx="3" fill="#f0fdfa" stroke="#14b8a6" stroke-width="1.5"/>
<text x="160.0" y="562.0" font-weight="700" fill="#0f766e">Specify</text>
<rect x="268.0" y="550.0" width="14.0" height="14.0" rx="3" fill="#f3f4f6" stroke="#6b7280" stroke-width="1.5"/>
<text x="288.0" y="562.0" font-weight="700" fill="#374151">Build</text>
<rect x="12.0" y="574.0" width="14.0" height="14.0" rx="3" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
<text x="32.0" y="586.0" font-weight="700" fill="#047857">Prove</text>
<rect x="140.0" y="574.0" width="14.0" height="14.0" rx="3" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
<text x="160.0" y="586.0" font-weight="700" fill="#b45309">Release</text>
<rect x="268.0" y="574.0" width="14.0" height="14.0" rx="3" fill="#f5f3ff" stroke="#8b5cf6" stroke-width="1.5"/>
<text x="288.0" y="586.0" font-weight="700" fill="#6d28d9">Check</text>
</g>
</svg>

| Step | Who | Produces | Tools |
|---|---|---|---|
| 1 Read the rule | Regulatory policy, with the analyst | Interpretation note: which products, which rows, from which date | Document analysis |
| 2 Assess impact | Analyst, with finance | Before-and-after numbers by product | Data analysis, SQL |
| 3 Capture the need | Analyst | BRD, the business requirements document | Elicitation, MoSCoW |
| 4 Specify | Analyst | FSD, the functional specification: rules as decision tables, data mappings; stories with acceptance criteria | UML, wireframes, INVEST, definition of ready |
| 5 Fix the data | Data owners | Missing fields filled; gaps logged | DQ log |
| 6 Build | Technology | Engine and reference-data changes | Sprints, story points |
| 7 Prove | Testers and analyst | Test cases per rule row; evidence from system integration testing (SIT), user acceptance testing (UAT) and a parallel run | Traceability matrix, boundary cases, defect triage |
| 8 Go live | Release management | Change advisory board (CAB) approval, cut-over and rollback plans, go/no-go | Release plan |
| 9 Report | Regulatory reporting | New numbers in the returns | — |
| 10 Check | Analyst and business | Post-production validation (PPV): first live runs reconciled; hypercare | Definition of done |

**If a step has no artefact, it didn't happen.**

### Documents and stories

| Artefact | Answers | Contains |
|---|---|---|
| BRD | What does the business need, and why? For owners and sponsors | Objectives, scope, stakeholders, current and future process, business rules, reporting needs, success measures |
| FSD | Exactly how will the system behave? For developers and testers | Data mappings, calculations, screens, validations, interfaces, error handling |
| Non-functional requirements | How well must it run? | Run-time windows, reproducibility, audit logging, access entitlements |
| User story | Who needs what, and why? | "As a [role], I want [capability], so that [benefit]" |
| Acceptance criteria | When is it done? | Gherkin: "Given [state], when [action], then [result]"; one scenario per rule row and boundary |

| Term | Meaning |
|---|---|
| Elicitation | Stakeholder interviews (single experts), workshops (agreeing rules across teams), document analysis (regulations, policies), observation (the real process, workarounds included), prototypes (something to react to), data analysis (what the data really holds) |
| INVEST | A good story is independent, negotiable, valuable, estimable, small and testable |
| Definition of ready; of done | Ready: criteria, data and sign-offs in place before work starts. Done: built, tested, documented, accepted |
| MoSCoW | Must, should, could, won't this time: keeps scope honest against a fixed regulatory date |
| Traceability matrix (RTM) | Links every requirement to its design, test cases and defects: nothing built untested, nothing tested unbuilt |

### UML and wireframes

| Diagram | Shows | Credit risk use |
|---|---|---|
| Use case | Who does what with a system | An officer approves a limit; an analyst runs ECL |
| Activity, with swimlanes | A process across roles | Limit approval, from request to sanction |
| Sequence | Messages between systems over time | Origination system → bureau → decision engine → core banking |
| State | The states an object can pass through | A loan: applied, performing, overdue, default, restructured, recovered, written off |
| Class | Data entities and their relationships | Counterparty, facility, exposure, collateral |
| Wireframe | A screen's layout before build | Annotated with each field's source, validations, permissions, empty and error states, maker-checker actions |

**A state diagram is a specification:** every arrow is an allowed transition with a trigger, and anything without an arrow must be impossible. BPMN (business process model and notation) is a common alternative for process flows.

### Testing

| Level | Who | Proves |
|---|---|---|
| Unit | Developers | Each component works |
| SIT | Test team | Systems work together; data flows end to end |
| UAT | Business users, with the analyst | It meets the business need on realistic data |
| Regression | Test team, often automated | Nothing that worked before is broken |
| Parallel run | Business and analyst | Old and new agree, or differ only as explained, over two or three cycles, at portfolio and loan level, against tolerances agreed in advance |
| PPV | Analyst and business | The first live runs are right: counts, totals against the ledger, a sample of loans recomputed by hand |

| Term | Meaning |
|---|---|
| Test case | ID, requirement covered, pre-conditions, test data, steps, the expected result worked out in advance, actual result, status |
| Boundary testing | Test both sides of every threshold: under "more than 90 DPD", 90 is performing and 91 is default, so the wording decides |
| Severity vs priority | Severity is how bad the impact is; priority is how soon it must be fixed. A typo in a regulator-facing heading: low severity, high priority |

### Delivery: waterfall and agile

| | Waterfall | Agile (Scrum) |
|---|---|---|
| Shape | Sequential phases (requirements, design, build, test, deploy), each signed off | Short sprints, usually two weeks, each delivering a working increment |
| Suits | Fixed, well-understood scope; heavy sign-off regimes | Evolving requirements; fast feedback |
| Documents | Full BRD and FSD up front | Epics, stories and acceptance criteria, refined continuously |
| Main risk | Late discovery: problems surface in testing | Scope drifting against a fixed date |
| In regulatory change | Common for large programmes | Often **hybrid**: agile sprints inside a fixed regulatory deadline, with MoSCoW doing the trade-offs |

| Scrum term | Meaning |
|---|---|
| Roles | Product owner (sets priorities; the analyst often acts as proxy), Scrum master (runs the process), developers |
| Events | Sprint planning, daily stand-up, sprint review, retrospective, backlog refinement |
| Artefacts | Product backlog, sprint backlog, increment |
| Story points, velocity | Relative size, often on the Fibonacci scale (1, 2, 3, 5, 8, 13), set by planning poker; velocity is points done per sprint, so sprints needed ≈ backlog points ÷ velocity, net of leave and month-end support |
| Release | CAB with test evidence and a rollback plan → go/no-go → hypercare |
| Scaling | Scrum of Scrums; SAFe (Scaled Agile Framework) programme-increment planning |

### Keeping control

| Tool | Holds |
|---|---|
| RAID log | Risks, assumptions, issues and dependencies, each with an owner and a date |
| Decision log | What was decided, by whom, and why |
| Status report | RAG (red, amber, green) status, with written definitions for each colour |
| Transition plan | Updated processes, controls and procedures; role-based training (hands-on in test, quick guides, train-the-trainer); communications; a named hypercare contact |

### SQL, Python and Excel

| Task | Pattern |
|---|---|
| Totals by group | `SELECT sector, stage, SUM(ead) FROM exposure GROUP BY sector, stage` |
| Buckets | `CASE WHEN dpd = 0 THEN 'Current' WHEN dpd <= 30 THEN '1-30' ELSE '31+' END` |
| Latest row per key | `ROW_NUMBER() OVER (PARTITION BY counterparty_id ORDER BY rating_date DESC)`, then keep row 1 |
| Month-on-month change | `ead / NULLIF(LAG(ead) OVER (PARTITION BY id ORDER BY reporting_date), 0)` |
| Missing values | `SUM(CASE WHEN sector IS NULL THEN 1 ELSE 0 END)` |
| Duplicates | `GROUP BY lei HAVING COUNT(*) > 1` |
| Reconciliation | `FULL OUTER JOIN` source to target on the key; keep rows where either side is missing or the amounts differ beyond tolerance |
| Oracle dialect | `NVL` for `COALESCE`, `DECODE` for a simple `CASE`, `FETCH FIRST n ROWS ONLY` for top-n, `TO_DATE` for dates |
| Roll-rate matrix (Python) | `pd.crosstab(df.bucket_prev, df.bucket_now, normalize="index")` |
| PSI (Python) | `np.sum((a - e) * np.log(a / e))` |
| Conditional sum (Excel) | `=SUMIFS(EAD, Sector, "Steel", Stage, 2)` |
| Lookup (Excel) | `=XLOOKUP(Grade, MasterScale[Grade], MasterScale[PD])` |
| Count in a range (Excel) | `=COUNTIFS(DPD, ">30", DPD, "<=60")` |
| Weighted sum (Excel) | `=SUMPRODUCT(Weights, ScenarioECL)` |
| What-if (Excel) | A one- or two-variable Data Table over the input cells |
| BI (business intelligence) | A fact table of exposures by date joined to counterparty, product, sector and date dimensions (a star schema), with measures doing the maths |

## Acronyms

| Acronym | Stands for | Part |
|---|---|---|
| ALCO | Asset-liability committee | 12 |
| AML, KYC | Anti-money-laundering; know your customer | 2 |
| AT1 | Additional Tier 1 capital | 7 |
| AUC, AR | Area under the ROC curve; accuracy ratio | 10 |
| BA-CVA, SA-CVA | Basic and standardised approaches to CVA risk | 9 |
| BCBS | Basel Committee on Banking Supervision | 1 |
| BRD, FSD | Business requirements document; functional specification document | 13 |
| CAM | Credit appraisal memo | 2 |
| CC, DP | Cash credit; drawing power | 2 |
| CCF | Credit conversion factor | 3 |
| CCP | Central counterparty | 9 |
| CDS | Credit default swap | 9 |
| CE, EE, PFE, EPE | Current, expected, potential future and expected positive exposure | 9 |
| CECL | Current expected credit loss (US accounting) | 1 |
| CET1 | Common Equity Tier 1 capital | 7 |
| CGTMSE | Credit Guarantee Fund Trust for Micro and Small Enterprises | 2 |
| COREP, FINREP | EU templates for capital and for financial reporting | 1 |
| CRILC | Central Repository of Information on Large Credits (RBI) | 1 |
| CRR3, CRD6 | EU Capital Requirements Regulation and Directive carrying Basel 3.1 | 1 |
| CSA | Credit support annex | 9 |
| CVA, XVA | Credit valuation adjustment; the family of valuation adjustments | 9 |
| DPD | Days past due | 2 |
| DQ | Data quality | 12 |
| DSCR, ICR | Debt service coverage ratio; interest cover ratio | 2 |
| EAD | Exposure at default | 3 |
| EBITDA | Earnings before interest, tax, depreciation and amortisation | 2 |
| ECL | Expected credit loss | 6 |
| EIR | Effective interest rate | 6 |
| EL, UL | Expected loss; unexpected loss | 3, 5 |
| EMI, FOIR | Equated monthly instalment; fixed obligation to income ratio | 2 |
| FRTB | Fundamental Review of the Trading Book | 7 |
| G-SIB, D-SIB | Global and domestic systemically important bank | 7 |
| GNPA, NNPA, PCR | Gross and net non-performing assets; provision coverage ratio | 11 |
| HHI | Herfindahl–Hirschman index | 11 |
| HL | Hosmer–Lemeshow test | 10 |
| ICAAP, SREP | Internal capital adequacy assessment process; supervisory review and evaluation process | 7 |
| IM, VM | Initial margin; variation margin | 9 |
| IRAC | Income recognition and asset classification (RBI norms) | 1 |
| IRB | Internal ratings-based approach | 3 |
| ISDA | International Swaps and Derivatives Association | 9 |
| IV, WoE | Information value; weight of evidence | 10 |
| KS | Kolmogorov–Smirnov statistic | 10 |
| LCR, NSFR | Liquidity coverage ratio; net stable funding ratio | 7 |
| LGD | Loss given default | 3 |
| LTV | Loan-to-value ratio | 3 |
| MDA | Maximum distributable amount | 7 |
| MPBF | Maximum permissible bank finance | 2 |
| NPA, SMA | Non-performing asset; special mention account (RBI) | 2 |
| PD | Probability of default | 3 |
| PIT, TTC | Point-in-time; through-the-cycle | 3 |
| POCI | Purchased or originated credit-impaired | 6 |
| PPV | Post-production validation | 13 |
| PSI, CSI | Population and characteristic stability indices | 10 |
| RAROC | Risk-adjusted return on capital | 11 |
| RAS | Risk appetite statement | 11 |
| RC | Replacement cost | 9 |
| RTM | Requirements traceability matrix | 13 |
| RWA, RW | Risk-weighted assets; risk weight | 7 |
| SA | Standardised approach | 3 |
| SA-CCR | Standardised approach for counterparty credit risk | 9 |
| SICR | Significant increase in credit risk | 6 |
| SIT, UAT | System integration testing; user acceptance testing | 13 |
| UTP | Unlikely to pay | 3 |
| VaR | Value-at-risk | 7 |
| VIF | Variance inflation factor | 10 |
