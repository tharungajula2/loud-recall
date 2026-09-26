---
title: "Credit Risk, End to End — The Complete Cheatsheet"
description: "Credit risk from zero, for business analysts: how banks lend to retail, SME and corporate borrowers; PD, LGD and EAD; collateral; IFRS 9 provisions; Basel capital and the move to Basel 3.1; counterparty risk and CVA; model validation from the confusion matrix to Hosmer–Lemeshow; portfolio monitoring; the data, reporting and controls machine; and the analyst's toolkit — with interview questions throughout."
series: masterclass
track: guest
subject: "Credit Risk"
order: 1
status: live
updated: 2026-09-26
verified: false
tags:
  - credit risk
  - business analysis
  - ifrs 9
  - basel 3.1
  - capital
  - counterparty credit risk
  - cva
  - model validation
  - data quality
  - interview preparation
---

## Part 0 — Who this is for, and how to read it

### Who this is for

This note is for anyone preparing for — or starting — a business analyst role in credit risk. The role sits between the people who own credit risk (credit officers, risk managers, model teams, finance) and the people who build the systems that measure it (technology and data teams). The analyst turns rules and business needs into requirements, data definitions, calculation logic and tests, then proves the new system gives the right numbers.

You'll find the role in a bank's risk change team, in a global bank's capability centre, at a consultancy, or at a firm that sells risk software. The note is just as useful if you are a credit analyst moving into change work, or a data or technology professional moving into risk.

### What you'll be able to do

- Explain how a bank lends to individuals, small businesses and large companies — how each loan is approved, watched and, sometimes, recovered.
- Read a set of financial statements the way a credit analyst does.
- Measure credit risk with PD, LGD and EAD, and explain expected versus unexpected loss.
- Explain IFRS 9 provisions and Basel capital, and what changes with Basel 3.1.
- Explain counterparty credit risk on derivatives, and CVA.
- Read a model validation report: confusion matrix, AUROC, Gini, KS, calibration tests, PSI.
- Describe how risk numbers flow from source systems to regulatory returns, and the controls around them.
- Write requirements, business rules, user stories and test cases for credit risk systems.
- Answer the theory questions credit risk interviews ask.

### What it assumes

Nothing. Every term is explained where it first appears, and the acronyms table at the end catches anything you forget.

### How to read it

In order. Each part uses only what came before it. The examples change with the topic — a personal loan for scorecards, a trader's cash-credit line for working capital, a manufacturer's accounts for ratios, a swap for counterparty risk — so every idea lands on the kind of loan where it matters most.

Each part ends with **Check yourself**: interview-style questions with the answers folded away. Try first, then open. Part 13 is a rapid-fire bank of the questions interviews ask most.

### Conventions

- Worked numbers are in rupees: 1 lakh = 100,000; 1 crore = 100 lakh = 10 million.
- Regulatory figures are quoted in the rule's own terms — percentages, or euros for Basel thresholds.
- **[verify]** marks figures and dates that change with regulation. Check the current rule before relying on them.
- The global Basel standard is the base. The UK, EU, US and India appear side by side only where they genuinely differ.

### The ecosystem on one page

<svg viewBox="0 0 400 850" width="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Map of the credit risk ecosystem: business, measurement, mitigation, provisions and capital, derivatives, models, monitoring, the data machine and the analyst&#x27;s toolkit" style="width:100%;max-width:400px;height:auto;display:block;margin:1rem auto">
<g font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#1f2937">
<text x="200" y="24" font-size="16" text-anchor="middle" font-weight="700">The credit risk ecosystem on one page</text>
<rect x="12" y="44" width="376" height="70" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
<text x="200" y="64" text-anchor="middle" font-weight="600" fill="#1d4ed8">The business</text>
<text x="200" y="84" text-anchor="middle">borrowers, products, the loan&#x27;s life</text>
<text x="200" y="104" text-anchor="middle">Parts 1–2</text>
<rect x="12" y="132" width="376" height="70" rx="8" fill="#f0fdfa" stroke="#14b8a6" stroke-width="1.5"/>
<text x="200" y="152" text-anchor="middle" font-weight="600" fill="#0f766e">Measure</text>
<text x="200" y="172" text-anchor="middle">PD × LGD × EAD = expected loss</text>
<text x="200" y="192" text-anchor="middle">Part 3</text>
<rect x="12" y="220" width="376" height="70" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
<text x="200" y="240" text-anchor="middle" font-weight="600" fill="#047857">Reduce</text>
<text x="200" y="260" text-anchor="middle">collateral, guarantees, netting</text>
<text x="200" y="280" text-anchor="middle">Part 4</text>
<rect x="12" y="308" width="182" height="70" rx="8" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
<text x="103" y="328" text-anchor="middle" font-weight="600" fill="#b45309">Provisions</text>
<text x="103" y="348" text-anchor="middle">expected loss</text>
<text x="103" y="368" text-anchor="middle">IFRS 9 · Part 5</text>
<rect x="206" y="308" width="182" height="70" rx="8" fill="#f5f3ff" stroke="#8b5cf6" stroke-width="1.5"/>
<text x="297" y="328" text-anchor="middle" font-weight="600" fill="#6d28d9">Capital</text>
<text x="297" y="348" text-anchor="middle">unexpected loss</text>
<text x="297" y="368" text-anchor="middle">Basel · Parts 6–7</text>
<rect x="12" y="396" width="376" height="70" rx="8" fill="#fff1f2" stroke="#f43f5e" stroke-width="1.5"/>
<text x="200" y="416" text-anchor="middle" font-weight="600" fill="#be123c">Derivatives</text>
<text x="200" y="436" text-anchor="middle">counterparty risk and CVA</text>
<text x="200" y="456" text-anchor="middle">Part 8</text>
<rect x="12" y="484" width="376" height="70" rx="8" fill="#f0fdfa" stroke="#14b8a6" stroke-width="1.5"/>
<text x="200" y="504" text-anchor="middle" font-weight="600" fill="#0f766e">Prove</text>
<text x="200" y="524" text-anchor="middle">models and their validation</text>
<text x="200" y="544" text-anchor="middle">Part 9</text>
<rect x="12" y="572" width="376" height="70" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
<text x="200" y="592" text-anchor="middle" font-weight="600" fill="#1d4ed8">Watch</text>
<text x="200" y="612" text-anchor="middle">appetite, limits, early warnings, stress</text>
<text x="200" y="632" text-anchor="middle">Part 10</text>
<rect x="12" y="660" width="376" height="70" rx="8" fill="#f3f4f6" stroke="#6b7280" stroke-width="1.5"/>
<text x="200" y="680" text-anchor="middle" font-weight="600" fill="#374151">The machine</text>
<text x="200" y="700" text-anchor="middle">data, reports, controls</text>
<text x="200" y="720" text-anchor="middle">Part 11</text>
<rect x="12" y="748" width="376" height="70" rx="8" fill="#f5f3ff" stroke="#8b5cf6" stroke-width="1.5"/>
<text x="200" y="768" text-anchor="middle" font-weight="600" fill="#6d28d9">Change it</text>
<text x="200" y="788" text-anchor="middle">the business analyst&#x27;s toolkit</text>
<text x="200" y="808" text-anchor="middle">Part 12</text>
<line x1="200.0" y1="115.0" x2="200.0" y2="123.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="200.0,131.0 204.0,123.0 196.0,123.0" fill="#6b7280"/>
<line x1="200.0" y1="203.0" x2="200.0" y2="211.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="200.0,219.0 204.0,211.0 196.0,211.0" fill="#6b7280"/>
<line x1="150.0" y1="291.0" x2="110.6" y2="304.4" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="103.0,307.0 111.9,308.2 109.3,300.6" fill="#6b7280"/>
<line x1="250.0" y1="291.0" x2="289.4" y2="304.4" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="297.0,307.0 290.7,300.6 288.1,308.2" fill="#6b7280"/>
<line x1="103.0" y1="379.0" x2="172.2" y2="393.4" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="180.0,395.0 173.0,389.5 171.4,397.3" fill="#6b7280"/>
<line x1="297.0" y1="379.0" x2="227.8" y2="393.4" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="220.0,395.0 228.6,397.3 227.0,389.5" fill="#6b7280"/>
<line x1="200.0" y1="467.0" x2="200.0" y2="475.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="200.0,483.0 204.0,475.0 196.0,475.0" fill="#6b7280"/>
<line x1="200.0" y1="555.0" x2="200.0" y2="563.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="200.0,571.0 204.0,563.0 196.0,563.0" fill="#6b7280"/>
<line x1="200.0" y1="643.0" x2="200.0" y2="651.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="200.0,659.0 204.0,651.0 196.0,651.0" fill="#6b7280"/>
<line x1="200.0" y1="731.0" x2="200.0" y2="739.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="200.0,747.0 204.0,739.0 196.0,739.0" fill="#6b7280"/>
<text x="200" y="840" text-anchor="middle" fill="#4b5563">Each part uses only what came before it</text>
</g>
</svg>

Read it top to bottom. Lending creates risk; measurement turns it into three numbers; mitigation shrinks them; the expected part becomes provisions and the unexpected part becomes capital; derivatives add a twist; models produce the numbers and validation proves them; monitoring keeps the portfolio inside the bank's appetite; a data machine produces all of it; and change work — the analyst's job — keeps the machine right as rules and products change.

## Part 1 — The business of lending

A bank borrows money cheaply — from depositors and markets — and lends it at a higher rate. Credit risk is the chance that the second half of that sentence goes wrong.

### One loan's economics

A ₹100 crore loan to a company, for one year:

| Line | Rate | ₹ crore a year |
|---|---|---|
| Interest earned | 10.0% | 10.0 |
| Cost of funds | 6.5% | (6.5) |
| Operating cost | 1.0% | (1.0) |
| Profit before credit losses | 2.5% | 2.5 |

If the borrower defaults and the bank recovers 55% of its money, it loses ₹45 crore — eighteen years of this loan's profit.

That asymmetry is the whole subject. Lending earns thin, steady margins and suffers rare, heavy losses. Credit risk management exists to price the loss in advance, to stop any single loss being fatal, and to hold enough capital to survive a bad year.

### What credit risk is

**Credit risk** is the risk of loss because a borrower or counterparty does not meet its obligations — or becomes less likely to.

| Form | What happens | Example |
|---|---|---|
| Default risk | The borrower stops paying | A trader closes shop owing ₹1.2 crore |
| Migration risk | Credit quality worsens before any default; the loan is worth less and needs more capital | A manufacturer's rating slips from BBB to BB |
| Counterparty risk | The other side of a derivative or repo defaults while owing you | A bank's swap counterparty collapses mid-contract |
| Concentration risk | Too much riding on one name, group, sector or region | A third of the book in real estate |
| Settlement risk | You pay; they fail to deliver | An FX trade settling across time zones |
| Country risk | The borrower can pay, but its country stops the money leaving | Capital controls in a crisis |

Banks also carry market risk (prices move), liquidity risk (cash runs short) and operational risk (processes, people or systems fail). Credit risk touches all of them, but it is the subject here.

### Three kinds of borrower

<svg viewBox="0 0 400 416" width="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Retail, SME and corporate borrowers compared: number of loans, size, how decisions are made and how risk is managed" style="width:100%;max-width:400px;height:auto;display:block;margin:1rem auto">
<g font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#1f2937">
<text x="200" y="24" font-size="16" text-anchor="middle" font-weight="700">Three kinds of borrower</text>
<text x="200" y="52" text-anchor="middle" fill="#4b5563">▲ many small loans, decided by models</text>
<rect x="12" y="66" width="376" height="96" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
<text x="200" y="89" text-anchor="middle" font-weight="600" fill="#1d4ed8">Retail</text>
<text x="200" y="109" text-anchor="middle">millions of loans, ₹ lakhs each</text>
<text x="200" y="129" text-anchor="middle">scorecards, mostly automatic</text>
<text x="200" y="149" text-anchor="middle">managed as pools</text>
<rect x="12" y="174" width="376" height="96" rx="8" fill="#f0fdfa" stroke="#14b8a6" stroke-width="1.5"/>
<text x="200" y="197" text-anchor="middle" font-weight="600" fill="#0f766e">SME</text>
<text x="200" y="217" text-anchor="middle">thousands of loans, ₹ crores</text>
<text x="200" y="237" text-anchor="middle">score plus analyst judgement</text>
<text x="200" y="257" text-anchor="middle">pools for small, names for big</text>
<rect x="12" y="282" width="376" height="96" rx="8" fill="#f5f3ff" stroke="#8b5cf6" stroke-width="1.5"/>
<text x="200" y="305" text-anchor="middle" font-weight="600" fill="#6d28d9">Corporate</text>
<text x="200" y="325" text-anchor="middle">hundreds of names, ₹ 100s of crores</text>
<text x="200" y="345" text-anchor="middle">credit memo and committee</text>
<text x="200" y="365" text-anchor="middle">managed name by name</text>
<text x="200" y="404" text-anchor="middle" fill="#4b5563">▼ few large loans, decided by people</text>
</g>
</svg>

| | Retail | SME | Corporate |
|---|---|---|---|
| Who | Individuals | Small and mid-sized businesses, often run by a promoter | Large companies and groups |
| Typical ticket | Thousands to a few crore | Lakhs to tens of crores | Hundreds or thousands of crores |
| How many | Millions | Thousands | Hundreds |
| Who decides | Scorecards and rules, mostly automatic | A score plus an analyst | Analyst, credit memo, committee |
| Main data | Credit bureau, income, bank statements | GST returns, bank statements, promoter and business bureau, basic accounts | Audited accounts, projections, industry and management assessment |
| Risk viewed as | Pools of similar loans | Pools when small, names when large | Name by name |
| Watched through | Repayment behaviour | Account conduct, stock statements, tax filings | Covenants, annual review, early warnings |

Regulators draw their own lines. Under Basel, an **SME** is a company with annual sales up to €50 million, and a **retail** exposure is to an individual or small business, below €1 million per borrower and part of a granular pool [verify]. India's MSME definition uses investment and turnover — up to ₹125 crore of investment and ₹500 crore of turnover for a medium enterprise since 2025 [verify] — and the RBI's revised standardised approach treats retail exposures up to ₹7.5 crore per borrower as regulatory retail from April 2027 [verify].

Banks also lend to, and trade with, other banks, governments and non-bank financial firms such as NBFCs and funds. These are assessed much like corporates, with sector-specific ratios (Part 8).

### What banks lend

| Product | Segment | Type | What can go wrong |
|---|---|---|---|
| Term loan | All | Funded | The borrower can't keep to the repayment schedule |
| Home loan (mortgage) | Retail | Funded, secured on property | Default and a falling property price together |
| Auto loan, personal loan | Retail | Funded | Job loss, over-borrowing |
| Credit card | Retail | Funded, revolving | Spending up to the limit just before default |
| Cash credit or overdraft | SME, corporate | Funded, revolving | Drawn to the limit as the business weakens |
| Bill discounting | SME, corporate | Funded | The buyer who owes the bill doesn't pay |
| Letter of credit (LC) | SME, corporate | Non-funded | The bank pays the seller; the buyer can't reimburse |
| Bank guarantee | SME, corporate | Non-funded | Invoked when the client fails to pay (financial) or to perform (performance) |
| Undrawn commitment | All | Non-funded | The borrower draws it just before trouble |
| Derivative — swap, forward, option | Corporate, banks | Neither: value moves with markets | The counterparty defaults while the trade is worth money to you |

**Funded** exposure is money already out of the door. **Non-funded** exposure is a promise that may become money out of the door — so it gets a conversion factor (Part 3). **Derivative** exposure moves with markets — so it gets its own part (Part 8).

### Check yourself

1. A loan earns 2.5% a year after funding and operating costs, and a default would lose 45% of it. How many years of profit does one default wipe out, and what follows for pricing?
2. Classify each as funded, non-funded or derivative: an undrawn overdraft limit, a performance guarantee, a five-year interest rate swap, a home loan.
3. Why are retail loans managed as pools and corporate loans name by name?

<details>
<summary>Answers</summary>

1. Eighteen (45 ÷ 2.5). The price must cover the expected loss plus a return on the capital held against the unexpected one — and no single name can be allowed to grow large enough to hurt.
2. Non-funded (a commitment); non-funded (a contingent); derivative; funded.
3. Retail loans are small, numerous and alike, so statistics predict a pool's behaviour well, and reviewing each by hand would cost more than the loan earns. Corporate loans are large, few and all different; each one matters, so each gets an analyst.

</details>

## Part 2 — How a loan is made: retail, SME, corporate

Every loan passes through the same eight stages. What changes by segment is who decides, and on what data.

<svg viewBox="0 0 400 480" width="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The eight stages of a loan: origination, underwriting, approval, documentation, disbursement, monitoring, collections and closure" style="width:100%;max-width:400px;height:auto;display:block;margin:1rem auto">
<g font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#1f2937">
<text x="200" y="24" font-size="16" text-anchor="middle" font-weight="700">Eight stages in the life of a loan</text>
<rect x="12" y="44" width="376" height="40" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
<text x="24" y="69" font-weight="600" fill="#1d4ed8">1 Origination</text>
<text x="376" y="69" text-anchor="end" fill="#4b5563">application, KYC</text>
<line x1="200.0" y1="85.0" x2="200.0" y2="89.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="200.0,97.0 204.0,89.0 196.0,89.0" fill="#6b7280"/>
<rect x="12" y="98" width="376" height="40" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
<text x="24" y="123" font-weight="600" fill="#1d4ed8">2 Underwriting</text>
<text x="376" y="123" text-anchor="end" fill="#4b5563">can and will they pay?</text>
<line x1="200.0" y1="139.0" x2="200.0" y2="143.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="200.0,151.0 204.0,143.0 196.0,143.0" fill="#6b7280"/>
<rect x="12" y="152" width="376" height="40" rx="8" fill="#f5f3ff" stroke="#8b5cf6" stroke-width="1.5"/>
<text x="24" y="177" font-weight="600" fill="#6d28d9">3 Approval</text>
<text x="376" y="177" text-anchor="end" fill="#4b5563">within delegated authority</text>
<line x1="200.0" y1="193.0" x2="200.0" y2="197.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="200.0,205.0 204.0,197.0 196.0,197.0" fill="#6b7280"/>
<rect x="12" y="206" width="376" height="40" rx="8" fill="#f5f3ff" stroke="#8b5cf6" stroke-width="1.5"/>
<text x="24" y="231" font-weight="600" fill="#6d28d9">4 Documentation</text>
<text x="376" y="231" text-anchor="end" fill="#4b5563">contracts, security</text>
<line x1="200.0" y1="247.0" x2="200.0" y2="251.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="200.0,259.0 204.0,251.0 196.0,251.0" fill="#6b7280"/>
<rect x="12" y="260" width="376" height="40" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
<text x="24" y="285" font-weight="600" fill="#047857">5 Disbursement</text>
<text x="376" y="285" text-anchor="end" fill="#4b5563">money or limit released</text>
<line x1="200.0" y1="301.0" x2="200.0" y2="305.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="200.0,313.0 204.0,305.0 196.0,305.0" fill="#6b7280"/>
<rect x="12" y="314" width="376" height="40" rx="8" fill="#f0fdfa" stroke="#14b8a6" stroke-width="1.5"/>
<text x="24" y="339" font-weight="600" fill="#0f766e">6 Monitoring</text>
<text x="376" y="339" text-anchor="end" fill="#4b5563">for the loan&#x27;s whole life</text>
<line x1="200.0" y1="355.0" x2="200.0" y2="359.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="200.0,367.0 204.0,359.0 196.0,359.0" fill="#6b7280"/>
<rect x="12" y="368" width="376" height="40" rx="8" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
<text x="24" y="393" font-weight="600" fill="#b45309">7 Collections</text>
<text x="376" y="393" text-anchor="end" fill="#4b5563">arrears, recovery</text>
<line x1="200.0" y1="409.0" x2="200.0" y2="413.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="200.0,421.0 204.0,413.0 196.0,413.0" fill="#6b7280"/>
<rect x="12" y="422" width="376" height="40" rx="8" fill="#f3f4f6" stroke="#6b7280" stroke-width="1.5"/>
<text x="24" y="447" font-weight="600" fill="#374151">8 Closure</text>
<text x="376" y="447" text-anchor="end" fill="#4b5563">repaid or written off</text>
</g>
</svg>

| Stage | What happens | Data it leaves behind |
|---|---|---|
| Origination | Lead, application, identity and anti-money-laundering checks (KYC, AML) | Customer, application and KYC records |
| Underwriting | Can they pay (capacity)? Will they pay (character)? | Bureau report, spread accounts, scores, rating |
| Approval | A decision within delegated authority | Decision, approver, conditions, exceptions |
| Documentation | Agreements signed; security created and registered | Facility, limits, collateral, charges |
| Disbursement | Money released, or a limit made available | Drawn balance, repayment schedule |
| Monitoring | Payments and financial health watched | Days past due, behaviour scores, covenant tests, reviews |
| Collections and recovery | Arrears chased, security enforced | Collection actions, recoveries, costs |
| Closure | Repaid, or the loss written off | Closure or write-off records |

Every item in the right-hand column becomes a table in the bank's risk data (Part 11). An analyst who knows which stage created a field knows who owns it — and why it might be wrong.

<svg viewBox="0 0 400 564" width="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Retail, SME and corporate lending processes: the steps each segment uses to decide and monitor a loan" style="width:100%;max-width:400px;height:auto;display:block;margin:1rem auto">
<g font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#1f2937">
<text x="200" y="24" font-size="16" text-anchor="middle" font-weight="700">Same stages, three ways of deciding</text>
<rect x="8" y="42" width="384" height="162" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
<text x="200" y="68" text-anchor="middle" font-weight="700" fill="#1d4ed8">Retail — the model decides</text>
<rect x="18" y="82" width="176" height="30" rx="15" fill="#ffffff" stroke="#3b82f6" stroke-width="1.2"/>
<text x="106" y="102" text-anchor="middle">Application, KYC</text>
<rect x="206" y="82" width="176" height="30" rx="15" fill="#ffffff" stroke="#3b82f6" stroke-width="1.2"/>
<text x="294" y="102" text-anchor="middle">Bureau + rules</text>
<rect x="18" y="120" width="176" height="30" rx="15" fill="#ffffff" stroke="#3b82f6" stroke-width="1.2"/>
<text x="106" y="140" text-anchor="middle">Scorecard</text>
<rect x="206" y="120" width="176" height="30" rx="15" fill="#ffffff" stroke="#3b82f6" stroke-width="1.2"/>
<text x="294" y="140" text-anchor="middle">FOIR check</text>
<rect x="18" y="158" width="176" height="30" rx="15" fill="#ffffff" stroke="#3b82f6" stroke-width="1.2"/>
<text x="106" y="178" text-anchor="middle">Auto decision</text>
<rect x="206" y="158" width="176" height="30" rx="15" fill="#ffffff" stroke="#3b82f6" stroke-width="1.2"/>
<text x="294" y="178" text-anchor="middle">DPD collections</text>
<rect x="8" y="216" width="384" height="162" rx="10" fill="#f0fdfa" stroke="#14b8a6" stroke-width="1.5"/>
<text x="200" y="242" text-anchor="middle" font-weight="700" fill="#0f766e">SME — model plus analyst</text>
<rect x="18" y="256" width="176" height="30" rx="15" fill="#ffffff" stroke="#14b8a6" stroke-width="1.2"/>
<text x="106" y="276" text-anchor="middle">GST + bank data</text>
<rect x="206" y="256" width="176" height="30" rx="15" fill="#ffffff" stroke="#14b8a6" stroke-width="1.2"/>
<text x="294" y="276" text-anchor="middle">Promoter bureau</text>
<rect x="18" y="294" width="176" height="30" rx="15" fill="#ffffff" stroke="#14b8a6" stroke-width="1.2"/>
<text x="106" y="314" text-anchor="middle">Working capital</text>
<rect x="206" y="294" width="176" height="30" rx="15" fill="#ffffff" stroke="#14b8a6" stroke-width="1.2"/>
<text x="294" y="314" text-anchor="middle">Drawing power</text>
<rect x="18" y="332" width="176" height="30" rx="15" fill="#ffffff" stroke="#14b8a6" stroke-width="1.2"/>
<text x="106" y="352" text-anchor="middle">Collateral, CGTMSE</text>
<rect x="206" y="332" width="176" height="30" rx="15" fill="#ffffff" stroke="#14b8a6" stroke-width="1.2"/>
<text x="294" y="352" text-anchor="middle">Account conduct</text>
<rect x="8" y="390" width="384" height="162" rx="10" fill="#f5f3ff" stroke="#8b5cf6" stroke-width="1.5"/>
<text x="200" y="416" text-anchor="middle" font-weight="700" fill="#6d28d9">Corporate — people decide</text>
<rect x="18" y="430" width="176" height="30" rx="15" fill="#ffffff" stroke="#8b5cf6" stroke-width="1.2"/>
<text x="106" y="450" text-anchor="middle">Credit memo</text>
<rect x="206" y="430" width="176" height="30" rx="15" fill="#ffffff" stroke="#8b5cf6" stroke-width="1.2"/>
<text x="294" y="450" text-anchor="middle">Spreading</text>
<rect x="18" y="468" width="176" height="30" rx="15" fill="#ffffff" stroke="#8b5cf6" stroke-width="1.2"/>
<text x="106" y="488" text-anchor="middle">Internal rating</text>
<rect x="206" y="468" width="176" height="30" rx="15" fill="#ffffff" stroke="#8b5cf6" stroke-width="1.2"/>
<text x="294" y="488" text-anchor="middle">Committee</text>
<rect x="18" y="506" width="176" height="30" rx="15" fill="#ffffff" stroke="#8b5cf6" stroke-width="1.2"/>
<text x="106" y="526" text-anchor="middle">Covenants</text>
<rect x="206" y="506" width="176" height="30" rx="15" fill="#ffffff" stroke="#8b5cf6" stroke-width="1.2"/>
<text x="294" y="526" text-anchor="middle">Annual review</text>
</g>
</svg>

### Retail: decided by scorecard

Take a personal loan of ₹6 lakh over 36 months at 14%, for a salaried applicant earning ₹1,00,000 a month after tax and already paying ₹25,000 a month in instalments.

| Step | What happens |
|---|---|
| 1. Application and KYC | Identity, address, sanctions and fraud screening |
| 2. Credit bureau | Bureau score, repayment history, current loans, recent enquiries (India: CIBIL, Experian, Equifax, CRIF; UK: Experian, Equifax, TransUnion) |
| 3. Policy rules | Knock-outs: age, minimum income, a recent 90-day delinquency, too many recent enquiries |
| 4. Application scorecard | A statistical model turns applicant data into a score and a probability of default (Part 9) |
| 5. Affordability | Can the income carry the new instalment? |
| 6. Decision | Score band and affordability together: approve, refer to an underwriter, or decline |
| 7. Pricing | Riskier bands pay more |
| 8. Disbursement | Loan booked; repayment mandate set up |

The equated monthly instalment (EMI) comes to ₹20,507. Affordability is usually tested with the fixed obligation to income ratio (FOIR):

$$
\text{FOIR} = \frac{\text{existing EMIs} + \text{new EMI}}{\text{net monthly income}} = \frac{25{,}000 + 20{,}507}{1{,}00{,}000} = 45.5\%
$$

Many lenders cap FOIR at 50–60%, lower for small incomes. The UK and US test the same idea as debt-to-income (DTI).

The decision matrix (illustrative):

| Score band | FOIR up to 40% | 40–55% | Above 55% |
|---|---|---|---|
| Low risk | Approve | Approve | Refer |
| Medium risk | Approve | Refer | Decline |
| High risk | Refer | Decline | Decline |

At 45.5%, a medium-risk applicant goes to an underwriter.

After disbursement, retail risk is managed by **days past due (DPD)** — how many days the oldest unpaid instalment is overdue:

| DPD | India label [verify] | Typical action |
|---|---|---|
| 0 | Standard | None; behaviour score refreshed monthly |
| 1–30 | SMA-0 | Reminders by SMS, app and automated calls |
| 31–60 | SMA-1 | Collection calls |
| 61–90 | SMA-2 | Field visits, restructuring talks |
| 90+ | NPA (non-performing asset) | Default: recovery, legal action, settlement, write-off |

SMA stands for special mention account — the RBI's labels for early stress. A loan that misses its very first instalment (a **first payment default**) is usually a fraud or underwriting failure rather than bad luck, and gets its own report.

### SME: cash flow plus judgement

Take a textile trader projecting ₹8 crore of annual turnover and asking for a cash-credit line — a revolving working-capital limit.

The data: GST returns (turnover the tax system has seen), bank statements (turnover actually banked), income tax returns, basic accounts, a bureau report on each promoter, a commercial bureau rank for the business, and usually a site visit. In India, account aggregators let the borrower share bank data digitally, with consent.

**How big a limit.** For smaller SMEs, Indian banks often use the turnover method: the working capital need is 25% of projected turnover, of which the promoter funds 5% and the bank 20% [verify].

| | ₹ crore |
|---|---|
| Projected turnover | 8.00 |
| Working capital need (25%) | 2.00 |
| Promoter's margin (5% of turnover) | 0.40 |
| Bank's cash-credit limit (20%) | 1.60 |

Larger borrowers are sized on a projected balance sheet (the MPBF method) or a monthly cash budget.

**How much they can actually draw.** A cash-credit line is backed by stock and receivables, so the borrower may draw only what those currently support — the **drawing power (DP)**:

$$
\text{DP} = \text{net stock} \times (1 - \text{stock margin}) + \text{receivables} \times (1 - \text{receivables margin})
$$

where net stock is stock less unpaid creditors, receivables counts only bills under 90 days old, and the margins are the bank's haircuts.

With stock of ₹1.20 crore, unpaid creditors of ₹0.20 crore, receivables of ₹0.80 crore and margins of 25% and 40%: DP = 1.00 × 0.75 + 0.80 × 0.60 = **₹1.23 crore**. The limit is ₹1.60 crore, but this month the trader can draw only ₹1.23 crore — the stock statement sets the ceiling.

**Security.** Usually a charge on stock and receivables, often property as extra cover, and personal guarantees from the promoters. In India, the Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE) guarantees much of an eligible loan, which cuts both the loss and the capital needed (Part 4).

**Monitoring.** SME trouble shows in the account before it shows in the accounts: the line sits at its limit for weeks, cheques bounce, stock statements arrive late, GST filings stop, and turnover through the account falls below GST turnover.

### Corporate: analyst, memo, committee

Take a steel-products manufacturer asking for a ₹250 crore term loan for a new plant, a ₹100 crore working-capital line and ₹50 crore of bank guarantees.

The relationship manager brings the deal in; a credit analyst in the risk function assesses it independently and writes the **credit appraisal memo (CAM)**:

| Section | Answers |
|---|---|
| Borrower and group | Who owns it; who else in the group might need support |
| Industry | Cyclicality, competition, regulation, input costs |
| Management | Track record, governance, succession |
| Financial analysis | Three to five years of spread accounts, ratios, cash flow |
| Projections | Base and downside cases — can it repay under stress? |
| Rating | Obligor grade (PD) and facility grade (LGD) |
| Structure | Facilities, tenor, repayment, pricing |
| Security | What is charged, what it is worth, how enforceable it is |
| Covenants and conditions | The promises the borrower must keep |
| Risks and mitigants | What could go wrong, and what protects the bank |
| Recommendation | Approve, amend or decline |

**Spreading** means keying the borrower's accounts into the bank's standard template, so every company is read the same way. The **internal rating model** then combines financial ratios with judgement on industry and management into an obligor grade, and the security into a facility grade. Approval follows the **delegation of authority** matrix: the bigger the exposure and the weaker the grade, the more senior the approver — up to the board's credit committee.

**Covenants** are promises written into the loan agreement:

| Type | Example |
|---|---|
| Financial | Net debt to EBITDA at most 3.5×; interest cover at least 2.5×; DSCR at least 1.25× |
| Information | Quarterly accounts within 45 days; audited annual accounts; a compliance certificate |
| Restrictive | No new secured borrowing, asset sales or dividends above a cap without consent |
| Event | A change of control or a rating downgrade triggers a review or repayment |

A breach does not automatically mean default. It gives the bank the right to act — reprice, demand more security, or call the loan.

**Monitoring and the stressed path.** Covenants are tested quarterly, the whole relationship is reviewed at least once a year, and early warning signals are watched all the time (Part 10). When a borrower slips, the path depends on the country:

| | Stress stage | Resolution |
|---|---|---|
| India | SMA status of borrowers with ₹5 crore or more of exposure reported to the RBI's CRILC database; lenders sign an inter-creditor agreement and must agree a resolution plan within set timelines [verify] | Restructuring; insolvency under the IBC through the NCLT; enforcement of security under SARFAESI; debt recovery tribunals |
| UK and EU | Watchlist, forbearance, restructuring | Administration; restructuring plans and schemes; enforcement |
| US | Watchlist, workout | Chapter 11 reorganisation or Chapter 7 liquidation |

### Reading a borrower

Lenders summarise what they look for as the five Cs:

| C | Question | Evidence |
|---|---|---|
| Character | Will they pay? | Repayment history, bureau, reputation, governance |
| Capacity | Can they pay? | Cash flow, FOIR, DSCR, interest cover |
| Capital | How much of their own money is at stake? | Net worth, leverage |
| Collateral | What if they don't? | Security, its value, its enforceability |
| Conditions | What around them could change? | Industry, economy, the loan's own terms |

For a company, capacity and capital come from the accounts. The manufacturer's last year, in ₹ crore:

| Income statement | | Balance sheet | |
|---|---|---|---|
| Revenue | 1,200 | Total debt | 540 |
| Cost of goods sold | 840 | Net worth (equity) | 600 |
| EBITDA | 180 | Current assets | 450 |
| Depreciation | 40 | Current liabilities | 300 |
| EBIT | 140 | Receivables | 200 |
| Interest | 45 | Inventory | 150 |
| Tax | 24 | Payables | 120 |
| Profit after tax (PAT) | 71 | Principal due next year | 60 |

EBITDA is earnings before interest, tax, depreciation and amortisation — a rough stand-in for operating cash. EBIT is earnings after depreciation but before interest and tax.

| Ratio | Formula | Here | What it says |
|---|---|---|---|
| Debt ÷ EBITDA | Total debt ÷ EBITDA | 3.0× | Years of operating cash needed to repay all debt; above 4–5× is stretched for most industries |
| Interest cover (ICR) | EBIT ÷ interest | 3.1× | Profit covers interest three times over |
| DSCR | (PAT + depreciation + interest) ÷ (principal + interest) | 1.49× | Cash covers this year's debt service about 1.5 times; below 1.2× is thin |
| Debt ÷ equity | Debt ÷ net worth | 0.9× | Lenders fund slightly less than the owners do |
| Current ratio | Current assets ÷ current liabilities | 1.5× | Short-term assets cover short-term debts |
| EBITDA margin | EBITDA ÷ revenue | 15% | Pricing power and cost control |
| ROCE | EBIT ÷ (debt + equity) | 12.3% | Return on all the capital employed |
| Debtor days | Receivables ÷ revenue × 365 | 61 | How long customers take to pay |
| Inventory days | Inventory ÷ cost of goods sold × 365 | 65 | How long stock sits |
| Creditor days | Payables ÷ cost of goods sold × 365 | 52 | How long the company takes to pay suppliers |
| Cash conversion cycle | Debtor days + inventory days − creditor days | 74 | Days of operations the company funds itself — hence the working-capital line |

Two habits separate analysts from readers. **Trends beat levels**: interest cover falling from 5× to 3× over three years says more than 3× today. **Cash beats profit**: compare operating cash flow with EBITDA — profit that never turns into cash is usually sitting in rising receivables or inventory.

### Check yourself

1. An applicant earns ₹80,000 a month after tax and pays ₹20,000 in EMIs. The new loan's EMI is ₹16,000. What is the FOIR, and does it pass a 50% cap?
2. A cash-credit limit is ₹2 crore, but drawing power this month is ₹1.4 crore. How much can the borrower draw, and why?
3. A company's debt is ₹600 crore and its EBITDA ₹120 crore. Its covenant says net debt to EBITDA at most 4.0×. Is it in breach, and what can the bank do?
4. Why is a first payment default treated differently from a default after two years of payments?

<details>
<summary>Answers</summary>

1. (20,000 + 16,000) ÷ 80,000 = 45%. It passes.
2. ₹1.4 crore. The line is backed by stock and receivables, so drawing power, not the sanctioned limit, is the ceiling at any moment.
3. 600 ÷ 120 = 5.0× before deducting any cash — above 4.0×, so in breach unless cash brings net debt down. The bank can waive the breach (usually for a fee), reset the covenant, reprice, take more security or, in the end, call the loan.
4. A borrower who never paid once was probably never going to. It points to fraud or a failed underwriting check rather than a change in circumstances, and it is fixed in origination, not in collections.

</details>

## Part 3 — Measuring the risk: PD, LGD, EAD

Underwriting ends in a yes or a no. Measurement asks the portfolio question: across all the yeses, how much will we lose — on average, and in a bad year?

### First, what counts as default

Every model and every report hangs on one definition. If it is applied inconsistently, PDs, provisions and capital all go wrong together.

| Rulebook | A borrower is in default when… |
|---|---|
| Basel | A material obligation is more than 90 days past due, or the bank judges the borrower unlikely to pay in full without selling collateral |
| EU | As Basel, with a materiality test — €100 for retail or €500 otherwise, and 1% of the borrower's exposure — and at least three months' probation before a default cures [verify] |
| UK | As Basel, with the PRA's materiality thresholds [verify] |
| US | Generally 90 days past due or on non-accrual; charge-off by 120 days for instalment loans and 180 days for cards [verify] |
| India | Non-performing asset (NPA): interest or principal overdue more than 90 days; a cash-credit account "out of order" for 90 days; bills overdue 90 days; farm loans by crop season |

**Unlikeliness to pay (UTP)** signs include: the bank stops accruing interest, raises a specific provision, sells the loan at a material credit loss, agrees a distressed restructuring — or the borrower files for insolvency.

### Three numbers and one formula

$$
\text{EL} = \text{PD} \times \text{LGD} \times \text{EAD}
$$

| Term | Meaning | Driven by |
|---|---|---|
| PD — probability of default | The chance the borrower defaults within a horizon, usually 12 months | The borrower: cash flow, leverage, behaviour, the economy |
| LGD — loss given default | The share of the exposure lost if it defaults, after recoveries and costs | The deal: collateral, seniority, legal system, time to recover |
| EAD — exposure at default | The amount owed at the moment of default | The product: drawn balance, undrawn limits, amortisation |
| EL — expected loss | The average loss per year | All three |

A corporate term loan with PD 2%, LGD 40% and EAD ₹100 crore: EL = 0.02 × 0.40 × 100 = **₹0.8 crore a year**. Across a portfolio, EL simply adds up loan by loan.

### PD: grades and the master scale

Models produce a PD per borrower. Banks bucket PDs into grades on a **master scale** — one scale shared by all models, so that grade 5 means the same risk everywhere.

| Grades | PD range | Roughly like | Reading |
|---|---|---|---|
| 1–2 | Below 0.05% | AAA to AA | Minimal |
| 3–4 | 0.05–0.25% | A | Low |
| 5–6 | 0.25–1% | BBB | Moderate |
| 7–8 | 1–5% | BB | Elevated |
| 9–10 | 5–20% | B | High |
| 11 | Above 20% | CCC | Watch |
| D | 100% | D | Default |

Illustrative — every bank's scale differs.

Two horizons matter: a **12-month PD** (default within a year?) for capital and for IFRS 9 Stage 1, and a **lifetime PD** (default before the loan ends?) for IFRS 9 Stages 2 and 3 (Part 5).

Two philosophies matter even more:

<svg viewBox="0 0 400 364" width="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Chart: point-in-time PD rises in a downturn and falls in good years, through-the-cycle PD stays near the long-run average, hybrid sits between" style="width:100%;max-width:400px;height:auto;display:block;margin:1rem auto">
<g font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#1f2937">
<text x="200" y="24" font-size="16" text-anchor="middle" font-weight="700">PIT and TTC PD through a credit cycle</text>
<line x1="70" y1="312.0" x2="384" y2="312.0" stroke="#e5e7eb"/>
<text x="64" y="317" text-anchor="end" fill="#4b5563">0%</text>
<line x1="70" y1="272.0" x2="384" y2="272.0" stroke="#e5e7eb"/>
<text x="64" y="277" text-anchor="end" fill="#4b5563">1%</text>
<line x1="70" y1="232.0" x2="384" y2="232.0" stroke="#e5e7eb"/>
<text x="64" y="237" text-anchor="end" fill="#4b5563">2%</text>
<line x1="70" y1="192.0" x2="384" y2="192.0" stroke="#e5e7eb"/>
<text x="64" y="197" text-anchor="end" fill="#4b5563">3%</text>
<line x1="70" y1="152.0" x2="384" y2="152.0" stroke="#e5e7eb"/>
<text x="64" y="157" text-anchor="end" fill="#4b5563">4%</text>
<line x1="70" y1="112.0" x2="384" y2="112.0" stroke="#e5e7eb"/>
<text x="64" y="117" text-anchor="end" fill="#4b5563">5%</text>
<line x1="70.0" y1="312" x2="70.0" y2="317" stroke="#9ca3af"/>
<text x="70" y="334" text-anchor="middle" fill="#4b5563">0</text>
<line x1="132.8" y1="312" x2="132.8" y2="317" stroke="#9ca3af"/>
<text x="133" y="334" text-anchor="middle" fill="#4b5563">2</text>
<line x1="195.6" y1="312" x2="195.6" y2="317" stroke="#9ca3af"/>
<text x="196" y="334" text-anchor="middle" fill="#4b5563">4</text>
<line x1="258.4" y1="312" x2="258.4" y2="317" stroke="#9ca3af"/>
<text x="258" y="334" text-anchor="middle" fill="#4b5563">6</text>
<line x1="321.2" y1="312" x2="321.2" y2="317" stroke="#9ca3af"/>
<text x="321" y="334" text-anchor="middle" fill="#4b5563">8</text>
<line x1="384.0" y1="312" x2="384.0" y2="317" stroke="#9ca3af"/>
<text x="384" y="334" text-anchor="middle" fill="#4b5563">10</text>
<line x1="70" y1="312" x2="384" y2="312" stroke="#9ca3af" stroke-width="1.2"/>
<line x1="70" y1="112" x2="70" y2="312" stroke="#9ca3af" stroke-width="1.2"/>
<text x="227" y="356" text-anchor="middle" fill="#4b5563">Years</text>
<text x="16" y="212" text-anchor="middle" fill="#4b5563" transform="rotate(-90 16 212)">PD</text>
<rect x="170.5" y="112" width="81.6" height="200" fill="#fff1f2"/>
<text x="211" y="132" text-anchor="middle" fill="#be123c">downturn</text>
<polyline points="70.0,224.0 384.0,224.0" fill="none" stroke="#8b5cf6" stroke-width="3" stroke-linejoin="round" stroke-dasharray="7 5"/>
<polyline points="70.0,248.3 73.1,247.8 76.3,247.2 79.4,246.4 82.6,245.6 85.7,244.7 88.8,243.7 92.0,242.7 95.1,241.5 98.3,240.3 101.4,239.0 104.5,237.7 107.7,236.3 110.8,234.9 114.0,233.4 117.1,231.9 120.2,230.4 123.4,228.8 126.5,227.2 129.7,225.6 132.8,224.0 135.9,222.4 139.1,220.8 142.2,219.2 145.4,217.6 148.5,216.1 151.6,214.6 154.8,213.1 157.9,211.7 161.1,210.3 164.2,209.0 167.3,207.7 170.5,206.5 173.6,205.3 176.8,204.3 179.9,203.3 183.0,202.4 186.2,201.6 189.3,200.8 192.5,200.2 195.6,199.7 198.7,199.2 201.9,198.9 205.0,198.6 208.2,198.5 211.3,198.4 214.4,198.5 217.6,198.6 220.7,198.9 223.9,199.2 227.0,199.7 230.1,200.2 233.3,200.8 236.4,201.6 239.6,202.4 242.7,203.3 245.8,204.3 249.0,205.3 252.1,206.5 255.3,207.7 258.4,209.0 261.5,210.3 264.7,211.7 267.8,213.1 271.0,214.6 274.1,216.1 277.2,217.6 280.4,219.2 283.5,220.8 286.7,222.4 289.8,224.0 292.9,225.6 296.1,227.2 299.2,228.8 302.4,230.4 305.5,231.9 308.6,233.4 311.8,234.9 314.9,236.3 318.1,237.7 321.2,239.0 324.3,240.3 327.5,241.5 330.6,242.7 333.8,243.7 336.9,244.7 340.0,245.6 343.2,246.4 346.3,247.2 349.5,247.8 352.6,248.3 355.7,248.8 358.9,249.1 362.0,249.4 365.2,249.5 368.3,249.6 371.4,249.5 374.6,249.4 377.7,249.1 380.9,248.8 384.0,248.3" fill="none" stroke="#14b8a6" stroke-width="2.5" stroke-linejoin="round"/>
<polyline points="70.0,284.9 73.1,283.5 76.3,281.9 79.4,280.1 82.6,278.0 85.7,275.8 88.8,273.3 92.0,270.7 95.1,267.8 98.3,264.8 101.4,261.6 104.5,258.3 107.7,254.8 110.8,251.2 114.0,247.6 117.1,243.8 120.2,239.9 123.4,236.0 126.5,232.0 129.7,228.0 132.8,224.0 135.9,220.0 139.1,216.0 142.2,212.0 145.4,208.1 148.5,204.2 151.6,200.4 154.8,196.8 157.9,193.2 161.1,189.7 164.2,186.4 167.3,183.2 170.5,180.2 173.6,177.3 176.8,174.7 179.9,172.2 183.0,170.0 186.2,167.9 189.3,166.1 192.5,164.5 195.6,163.1 198.7,162.0 201.9,161.1 205.0,160.5 208.2,160.1 211.3,160.0 214.4,160.1 217.6,160.5 220.7,161.1 223.9,162.0 227.0,163.1 230.1,164.5 233.3,166.1 236.4,167.9 239.6,170.0 242.7,172.2 245.8,174.7 249.0,177.3 252.1,180.2 255.3,183.2 258.4,186.4 261.5,189.7 264.7,193.2 267.8,196.8 271.0,200.4 274.1,204.2 277.2,208.1 280.4,212.0 283.5,216.0 286.7,220.0 289.8,224.0 292.9,228.0 296.1,232.0 299.2,236.0 302.4,239.9 305.5,243.8 308.6,247.6 311.8,251.2 314.9,254.8 318.1,258.3 321.2,261.6 324.3,264.8 327.5,267.8 330.6,270.7 333.8,273.3 336.9,275.8 340.0,278.0 343.2,280.1 346.3,281.9 349.5,283.5 352.6,284.9 355.7,286.0 358.9,286.9 362.0,287.5 365.2,287.9 368.3,288.0 371.4,287.9 374.6,287.5 377.7,286.9 380.9,286.0 384.0,284.9" fill="none" stroke="#f43f5e" stroke-width="3" stroke-linejoin="round"/>
<line x1="74" y1="45" x2="96" y2="45" stroke="#f43f5e" stroke-width="3"/>
<text x="104" y="50">PIT — moves with the economy</text>
<line x1="74" y1="67" x2="96" y2="67" stroke="#14b8a6" stroke-width="3"/>
<text x="104" y="72">Hybrid</text>
<line x1="74" y1="89" x2="96" y2="89" stroke="#8b5cf6" stroke-width="3" stroke-dasharray="7 5"/>
<text x="104" y="94">TTC — long-run average</text>
</g>
</svg>

| | Point-in-time (PIT) | Through-the-cycle (TTC) |
|---|---|---|
| Question | How likely is default in the next year, given today's economy? | How likely is default in an average year? |
| In a downturn | Rises | Barely moves |
| Grades | Migrate with the cycle | Stay stable |
| Used for | IFRS 9 provisions, pricing, early warning | Basel capital, built on long-run average default rates |
| Weakness | Capital would swing with the cycle | Slow to react |

Most real models are **hybrid**. IFRS 9 teams often start from a TTC-style rating model and convert it to PIT with macroeconomic adjustments.

### LGD: what is lost

$$
\text{LGD} = 1 - \frac{\text{discounted recoveries} - \text{discounted costs}}{\text{EAD}}
$$

Take a home loan in default. EAD is ₹40 lakh. The property is worth ₹60 lakh and fetches 80% of that in a forced sale — ₹48 lakh; legal and selling costs are ₹3 lakh; the sale completes two years after default; recoveries are discounted at 9%.

The bank can recover at most what it is owed, ₹40 lakh — the ₹5 lakh surplus goes back to the borrower. Discounted over two years: 40 ÷ 1.09² = ₹33.67 lakh. **LGD = 1 − 33.67 ÷ 40 = 15.8%.** Even a well-covered loan loses money to time and cost.

Now a downturn cuts the property price by 25%, to ₹45 lakh. The forced sale fetches ₹36 lakh; less ₹3 lakh of costs, ₹33 lakh; discounted, ₹27.78 lakh. **LGD = 30.6%** — nearly double. Recoveries are worst exactly when defaults are most common, which is why Basel requires a **downturn LGD** for capital, while IFRS 9 uses a probability-weighted best estimate.

Typical LGDs, as rough orders of magnitude:

| Exposure | Typical LGD |
|---|---|
| Home loan, moderate LTV | 10–25% |
| Auto loan | 30–50% |
| Credit card, personal loan (unsecured) | 60–85% |
| SME loan, secured on property and stock | 30–50% |
| Large corporate, senior unsecured | 40–45% (Basel 3.1 foundation IRB uses 40%) |
| Subordinated debt | 75% or more |

Retail LGD models often split in two, because many defaulters **cure** — they pay off the arrears and return to performing, losing the bank almost nothing. LGD = (1 − cure rate) × the loss when there is no cure.

### EAD and CCF: what is owed at default

For a plain loan, EAD is the outstanding balance plus accrued interest. For anything with an undrawn part:

$$
\text{EAD} = \text{drawn} + \text{CCF} \times \text{undrawn}
$$

where the **credit conversion factor (CCF)** is the share of the undrawn amount expected to be drawn by the time of default.

A ₹100 crore revolving facility with ₹60 crore drawn and a 40% CCF: EAD = 60 + 0.40 × 40 = **₹76 crore**. Borrowers heading for default draw down their lines — the cash-credit line runs to its limit, the card to its maximum — which is why undrawn limits are never treated as zero.

Guarantees and letters of credit are entirely undrawn until they are called, so EAD = amount × CCF.

The standardised CCFs are among the most-asked interview tables:

| Off-balance-sheet item | Basel 3 | Basel 3.1 | India today [verify] |
|---|---|---|---|
| Commitments the bank can cancel at any time without notice — card limits, cancellable overdraft lines | 0% | 10% | 0% |
| Other commitments, original maturity up to 1 year | 20% | 40% | 20% |
| Other commitments, original maturity over 1 year | 50% | 40% | 50% |
| Short-term, self-liquidating trade letters of credit, secured on the goods | 20% | 20% | 20% |
| Transaction-related contingents: performance guarantees, bid bonds, warranties | 50% | 50% | 50% |
| Note issuance and revolving underwriting facilities | 50% | 50% | 50% |
| Direct credit substitutes: financial guarantees, standby LCs backing debt, acceptances | 100% | 100% | 100% |
| Securities lent or posted, asset sales with recourse, forward asset purchases | 100% | 100% | 100% |

The logic: the more a promise behaves like a loan, the higher its CCF. A financial guarantee *is* a loan the moment the borrower fails (100%). A performance guarantee pays only if the client fails to deliver on a contract — rarer, and often partial (50%). A trade LC is short and backed by the goods (20%). Basel 3.1 ended the free ride for "cancellable" limits (0% to 10%) because banks rarely cancel customers' lines in practice.

India's revised standardised approach from 1 April 2027 updates its treatment [verify]. Under IRB (Part 6), foundation-IRB banks use the standardised CCFs under Basel 3.1, and advanced-IRB banks may estimate their own CCFs only for revolving facilities, floored at half the standardised figure [verify].

### Maturity

Longer loans have more time to go wrong. For corporates, the IRB capital formula adds effective maturity (M), between one and five years (Part 6). Retail exposures have no maturity adjustment.

### Expected and unexpected loss

EL is an average, and some years are far worse than average — because defaults are **correlated**. A recession pushes many borrowers over the edge at once. Plot the possible losses of a portfolio for next year and you get a long right-hand tail.

<svg viewBox="0 0 400 398" width="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Chart: portfolio loss distribution. Expected loss of 0.9% is covered by provisions, unexpected loss up to the 99.9% point, 5.7%, by capital, and the tail beyond by stress planning" style="width:100%;max-width:400px;height:auto;display:block;margin:1rem auto">
<g font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#1f2937">
<text x="200" y="24" font-size="16" text-anchor="middle" font-weight="700">Loss distribution of a loan portfolio</text>
<line x1="58.0" y1="260" x2="58.0" y2="265" stroke="#9ca3af"/>
<text x="58" y="282" text-anchor="middle" fill="#4b5563">0%</text>
<line x1="123.2" y1="260" x2="123.2" y2="265" stroke="#9ca3af"/>
<text x="123" y="282" text-anchor="middle" fill="#4b5563">2%</text>
<line x1="188.4" y1="260" x2="188.4" y2="265" stroke="#9ca3af"/>
<text x="188" y="282" text-anchor="middle" fill="#4b5563">4%</text>
<line x1="253.6" y1="260" x2="253.6" y2="265" stroke="#9ca3af"/>
<text x="254" y="282" text-anchor="middle" fill="#4b5563">6%</text>
<line x1="318.8" y1="260" x2="318.8" y2="265" stroke="#9ca3af"/>
<text x="319" y="282" text-anchor="middle" fill="#4b5563">8%</text>
<line x1="384.0" y1="260" x2="384.0" y2="265" stroke="#9ca3af"/>
<text x="384" y="282" text-anchor="middle" fill="#4b5563">10%</text>
<line x1="58" y1="260" x2="384" y2="260" stroke="#9ca3af" stroke-width="1.2"/>
<line x1="58" y1="70" x2="58" y2="260" stroke="#9ca3af" stroke-width="1.2"/>
<text x="221" y="304" text-anchor="middle" fill="#4b5563">Loss, % of exposure</text>
<polygon points="87.3,260.0 87.3,168.6 89.0,174.8 90.6,180.5 92.2,185.9 93.9,190.9 95.5,195.5 97.1,199.8 98.8,203.8 100.4,207.5 102.0,210.9 103.6,214.1 105.3,217.1 106.9,219.9 108.5,222.4 110.2,224.8 111.8,227.1 113.4,229.1 115.1,231.1 116.7,232.9 118.3,234.5 119.9,236.1 121.6,237.6 123.2,238.9 124.8,240.2 126.5,241.4 128.1,242.5 129.7,243.5 131.4,244.5 133.0,245.4 134.6,246.3 136.2,247.1 137.9,247.8 139.5,248.5 141.1,249.2 142.8,249.8 144.4,250.4 146.0,250.9 147.7,251.4 149.3,251.9 150.9,252.4 152.5,252.8 154.2,253.2 155.8,253.6 157.4,253.9 159.1,254.2 160.7,254.5 162.3,254.8 163.9,255.1 165.6,255.4 167.2,255.6 168.8,255.9 170.5,256.1 172.1,256.3 173.7,256.5 175.4,256.7 177.0,256.8 178.6,257.0 180.2,257.2 181.9,257.3 183.5,257.4 185.1,257.6 186.8,257.7 188.4,257.8 190.0,257.9 191.7,258.0 193.3,258.1 194.9,258.2 196.5,258.3 198.2,258.4 199.8,258.5 201.4,258.5 203.1,258.6 204.7,258.7 206.3,258.7 208.0,258.8 209.6,258.9 211.2,258.9 212.8,259.0 214.5,259.0 216.1,259.1 217.7,259.1 219.4,259.2 221.0,259.2 222.6,259.2 224.3,259.3 225.9,259.3 227.5,259.3 229.2,259.4 230.8,259.4 232.4,259.4 234.0,259.5 235.7,259.5 237.3,259.5 238.9,259.5 240.6,259.6 242.2,259.6 243.8,259.6 245.4,259.6 247.1,259.6 248.7,259.6 250.3,259.7 252.0,259.7 253.6,259.7 255.2,259.7 256.9,259.7 258.5,259.7 260.1,259.7 261.8,259.8 263.4,259.8 265.0,259.8 266.6,259.8 268.3,259.8 269.9,259.8 271.5,259.8 273.2,259.8 274.1,260.0" fill="#8b5cf6" fill-opacity="0.32" stroke="none"/>
<polygon points="274.1,260.0 274.8,259.8 276.4,259.8 278.1,259.8 279.7,259.9 281.3,259.9 282.9,259.9 284.6,259.9 286.2,259.9 287.8,259.9 289.5,259.9 291.1,259.9 292.7,259.9 294.3,259.9 296.0,259.9 297.6,259.9 299.2,259.9 300.9,259.9 302.5,259.9 304.1,259.9 305.8,259.9 307.4,259.9 309.0,259.9 310.6,259.9 312.3,259.9 313.9,259.9 315.5,259.9 317.2,259.9 318.8,259.9 320.4,260.0 322.1,260.0 323.7,260.0 325.3,260.0 326.9,260.0 328.6,260.0 330.2,260.0 331.8,260.0 333.5,260.0 335.1,260.0 336.7,260.0 338.4,260.0 340.0,260.0 341.6,260.0 343.2,260.0 344.9,260.0 346.5,260.0 348.1,260.0 349.8,260.0 351.4,260.0 353.0,260.0 354.7,260.0 356.3,260.0 357.9,260.0 359.6,260.0 361.2,260.0 362.8,260.0 364.4,260.0 366.1,260.0 367.7,260.0 369.3,260.0 371.0,260.0 372.6,260.0 374.2,260.0 375.8,260.0 377.5,260.0 379.1,260.0 380.7,260.0 382.4,260.0 384.0,260.0" fill="#f43f5e" fill-opacity="0.35" stroke="none"/>
<polyline points="59.6,181.8 61.3,120.8 62.9,88.6 64.5,74.1 66.2,70.0 67.8,72.1 69.4,77.7 71.0,85.5 72.7,94.3 74.3,103.5 75.9,112.9 77.6,122.0 79.2,130.9 80.8,139.4 82.5,147.4 84.1,154.9 85.7,162.0 87.3,168.6 89.0,174.8 90.6,180.5 92.2,185.9 93.9,190.9 95.5,195.5 97.1,199.8 98.8,203.8 100.4,207.5 102.0,210.9 103.6,214.1 105.3,217.1 106.9,219.9 108.5,222.4 110.2,224.8 111.8,227.1 113.4,229.1 115.1,231.1 116.7,232.9 118.3,234.5 119.9,236.1 121.6,237.6 123.2,238.9 124.8,240.2 126.5,241.4 128.1,242.5 129.7,243.5 131.4,244.5 133.0,245.4 134.6,246.3 136.2,247.1 137.9,247.8 139.5,248.5 141.1,249.2 142.8,249.8 144.4,250.4 146.0,250.9 147.7,251.4 149.3,251.9 150.9,252.4 152.5,252.8 154.2,253.2 155.8,253.6 157.4,253.9 159.1,254.2 160.7,254.5 162.3,254.8 163.9,255.1 165.6,255.4 167.2,255.6 168.8,255.9 170.5,256.1 172.1,256.3 173.7,256.5 175.4,256.7 177.0,256.8 178.6,257.0 180.2,257.2 181.9,257.3 183.5,257.4 185.1,257.6 186.8,257.7 188.4,257.8 190.0,257.9 191.7,258.0 193.3,258.1 194.9,258.2 196.5,258.3 198.2,258.4 199.8,258.5 201.4,258.5 203.1,258.6 204.7,258.7 206.3,258.7 208.0,258.8 209.6,258.9 211.2,258.9 212.8,259.0 214.5,259.0 216.1,259.1 217.7,259.1 219.4,259.2 221.0,259.2 222.6,259.2 224.3,259.3 225.9,259.3 227.5,259.3 229.2,259.4 230.8,259.4 232.4,259.4 234.0,259.5 235.7,259.5 237.3,259.5 238.9,259.5 240.6,259.6 242.2,259.6 243.8,259.6 245.4,259.6 247.1,259.6 248.7,259.6 250.3,259.7 252.0,259.7 253.6,259.7 255.2,259.7 256.9,259.7 258.5,259.7 260.1,259.7 261.8,259.8 263.4,259.8 265.0,259.8 266.6,259.8 268.3,259.8 269.9,259.8 271.5,259.8 273.2,259.8 274.8,259.8 276.4,259.8 278.1,259.8 279.7,259.9 281.3,259.9 282.9,259.9 284.6,259.9 286.2,259.9 287.8,259.9 289.5,259.9 291.1,259.9 292.7,259.9 294.3,259.9 296.0,259.9 297.6,259.9 299.2,259.9 300.9,259.9 302.5,259.9 304.1,259.9 305.8,259.9 307.4,259.9 309.0,259.9 310.6,259.9 312.3,259.9 313.9,259.9 315.5,259.9 317.2,259.9 318.8,259.9 320.4,260.0 322.1,260.0 323.7,260.0 325.3,260.0 326.9,260.0 328.6,260.0 330.2,260.0 331.8,260.0 333.5,260.0 335.1,260.0 336.7,260.0 338.4,260.0 340.0,260.0 341.6,260.0 343.2,260.0 344.9,260.0 346.5,260.0 348.1,260.0 349.8,260.0 351.4,260.0 353.0,260.0 354.7,260.0 356.3,260.0 357.9,260.0 359.6,260.0 361.2,260.0 362.8,260.0 364.4,260.0 366.1,260.0 367.7,260.0 369.3,260.0 371.0,260.0 372.6,260.0 374.2,260.0 375.8,260.0 377.5,260.0 379.1,260.0 380.7,260.0 382.4,260.0" fill="none" stroke="#374151" stroke-width="2.2" stroke-linejoin="round"/>
<line x1="87.3" y1="70" x2="87.3" y2="260" stroke="#f59e0b" stroke-width="2" stroke-dasharray="5 4"/>
<line x1="274.1" y1="70" x2="274.1" y2="260" stroke="#f43f5e" stroke-width="2" stroke-dasharray="5 4"/>
<text x="93" y="58" font-weight="600" fill="#b45309">EL 0.9%</text>
<text x="270" y="58" text-anchor="middle" font-weight="600" fill="#be123c">99.9% loss 6.6%</text>
<text x="182" y="190" text-anchor="middle" font-weight="700" fill="#6d28d9">UL 5.7%</text>
<text x="182" y="210" text-anchor="middle" fill="#6d28d9">held as capital</text>
<rect x="12" y="330" width="120" height="58" rx="8" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
<text x="72" y="354" text-anchor="middle" font-weight="600" fill="#b45309">EL</text>
<text x="72" y="374" text-anchor="middle">provisions</text>
<rect x="140" y="330" width="120" height="58" rx="8" fill="#f5f3ff" stroke="#8b5cf6" stroke-width="1.5"/>
<text x="200" y="354" text-anchor="middle" font-weight="600" fill="#6d28d9">UL</text>
<text x="200" y="374" text-anchor="middle">capital</text>
<rect x="268" y="330" width="120" height="58" rx="8" fill="#fff1f2" stroke="#f43f5e" stroke-width="1.5"/>
<text x="328" y="354" text-anchor="middle" font-weight="600" fill="#be123c">Tail</text>
<text x="328" y="374" text-anchor="middle">stress plans</text>
</g>
</svg>

For a portfolio with PD 2%, LGD 45% and moderate correlation between borrowers, the expected loss is 0.9% of exposure. In the worst year in a thousand, losses reach 6.6%. The gap — 5.7% — is the **unexpected loss (UL)**.

| Loss | Covered by | Part |
|---|---|---|
| Expected loss | Provisions — charged to profit in advance and priced into the loan | 5 |
| Unexpected loss, up to a chosen confidence level (99.9% for Basel) | Capital — the bank's own money | 6 |
| Beyond that | Stress testing, recovery and resolution plans | 10 |

**Concentration** fattens the tail further. A book of 20 large loans loses in lumps; a book of 20,000 small ones loses smoothly. Correlation and concentration, not EL, decide how much capital a bank needs.

### Check yourself

1. A ₹50 crore guarantee carries a 50% CCF. The borrower has PD 3% and LGD 45%. What are EAD and EL, and what kind of guarantee carries that CCF?
2. Why does Basel ask for downturn LGD when IFRS 9 does not?
3. A bank's grades barely move through a recession. Is its rating system PIT or TTC, and what problem does that create for IFRS 9?
4. Name three signs of unlikeliness to pay that don't depend on days past due.

<details>
<summary>Answers</summary>

1. EAD = 50 × 0.5 = ₹25 crore; EL = 0.03 × 0.45 × 25 = ₹0.34 crore. A 50% CCF fits a transaction-related contingent, such as a performance guarantee.
2. Capital must survive a bad year, and recoveries are worst when defaults are highest, so capital uses downturn LGD. IFRS 9 wants an unbiased, probability-weighted estimate for the accounts, so it uses a best estimate across scenarios.
3. TTC. IFRS 9 needs point-in-time, forward-looking PDs, so the bank must add a macroeconomic adjustment — otherwise its provisions lag the cycle.
4. Any three of: non-accrual status; a specific provision; sale of the loan at a material credit loss; a distressed restructuring; a bankruptcy or insolvency filing; fraud.

</details>

## Part 4 — Reducing the risk: collateral, guarantees, netting

PD belongs mostly to the borrower. LGD and EAD belong partly to the lender, because they depend on how the deal is structured. **Credit risk mitigation (CRM)** is the toolkit.

<svg viewBox="0 0 400 338" width="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram: financial collateral and netting reduce exposure, physical collateral reduces LGD, guarantees and credit default swaps substitute the guarantor&#x27;s risk weight, covenants trigger early action" style="width:100%;max-width:400px;height:auto;display:block;margin:1rem auto">
<g font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#1f2937">
<text x="200" y="24" font-size="16" text-anchor="middle" font-weight="700">What each mitigant moves</text>
<rect x="12" y="44" width="190" height="42" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
<text x="107" y="70" text-anchor="middle" font-weight="600" fill="#047857">Cash, bonds, shares</text>
<line x1="204.0" y1="65.0" x2="228.0" y2="65.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="236.0,65.0 228.0,61.0 228.0,69.0" fill="#6b7280"/>
<rect x="238" y="44" width="150" height="42" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
<text x="313" y="70" text-anchor="middle" font-weight="600" fill="#1d4ed8">EAD ↓</text>
<rect x="12" y="98" width="190" height="42" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
<text x="107" y="124" text-anchor="middle" font-weight="600" fill="#047857">Property, machinery</text>
<line x1="204.0" y1="119.0" x2="228.0" y2="119.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="236.0,119.0 228.0,115.0 228.0,123.0" fill="#6b7280"/>
<rect x="238" y="98" width="150" height="42" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
<text x="313" y="124" text-anchor="middle" font-weight="600" fill="#1d4ed8">LGD ↓</text>
<rect x="12" y="152" width="190" height="42" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
<text x="107" y="178" text-anchor="middle" font-weight="600" fill="#047857">Guarantee, CDS</text>
<line x1="204.0" y1="173.0" x2="228.0" y2="173.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="236.0,173.0 228.0,169.0 228.0,177.0" fill="#6b7280"/>
<rect x="238" y="152" width="150" height="42" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
<text x="313" y="178" text-anchor="middle" font-weight="600" fill="#1d4ed8">Guarantor&#x27;s RW</text>
<rect x="12" y="206" width="190" height="42" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
<text x="107" y="232" text-anchor="middle" font-weight="600" fill="#047857">Netting (ISDA)</text>
<line x1="204.0" y1="227.0" x2="228.0" y2="227.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="236.0,227.0 228.0,223.0 228.0,231.0" fill="#6b7280"/>
<rect x="238" y="206" width="150" height="42" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
<text x="313" y="232" text-anchor="middle" font-weight="600" fill="#1d4ed8">EAD ↓</text>
<rect x="12" y="260" width="190" height="42" rx="8" fill="#f3f4f6" stroke="#6b7280" stroke-width="1.5"/>
<text x="107" y="286" text-anchor="middle" font-weight="600" fill="#374151">Covenants</text>
<line x1="204.0" y1="281.0" x2="228.0" y2="281.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="236.0,281.0 228.0,277.0 228.0,285.0" fill="#6b7280"/>
<rect x="238" y="260" width="150" height="42" rx="8" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
<text x="313" y="286" text-anchor="middle" font-weight="600" fill="#b45309">Early action</text>
<text x="200" y="326" text-anchor="middle" fill="#4b5563">Covenants give no capital relief — they buy time</text>
</g>
</svg>

| Mitigant | How it protects | Main conditions for it to count |
|---|---|---|
| Financial collateral — cash, deposits, government bonds, listed shares | The bank can sell it quickly at a known price | Legally enforceable, valued often, haircut for price and currency moves |
| Physical collateral — property, vehicles, machinery, stock | Recovered by selling it after default | Charge registered, independent valuation, insurance |
| Receivables | Collected directly from the borrower's own customers | Assignment perfected; ageing and concentration monitored |
| Guarantee or credit default swap (CDS) | A stronger party pays if the borrower doesn't | Direct, explicit, irrevocable, unconditional |
| Netting | Amounts owed each way are set off, so only the net is at risk | A netting agreement enforceable in every relevant jurisdiction |
| Covenants | Give the bank the right to act early | Not a capital mitigant: they cut losses in practice, not in the formula |

### Financial collateral and haircuts

Under the **comprehensive approach**, both the exposure and the collateral are adjusted for how their values could move before the bank can act:

$$
E^{*} = \max\left(0,\; E \times (1 + H_e) - C \times (1 - H_c - H_{fx})\right)
$$

where E is the exposure and C the collateral's current value. The H terms are haircuts: on the exposure (zero for a plain loan), on the collateral (set by its type), and an 8% add-on when collateral and exposure are in different currencies. E* is what remains exposed.

A ₹10 crore loan against collateral worth ₹8 crore:

| Collateral | Haircut | Collateral counted | Still exposed |
|---|---|---|---|
| Government bonds, top-rated, three years to maturity | 2% | 7.84 | ₹2.16 crore |
| Shares in a main stock-market index | 20% | 6.40 | ₹3.60 crore |
| The same shares, in another currency | 20% + 8% | 5.76 | ₹4.24 crore |

The riskier the collateral's price, the less of it counts. Selected supervisory haircuts under Basel 3.1 [verify]:

| Collateral | Haircut |
|---|---|
| Cash in the same currency | 0% |
| Sovereign bonds rated AA− or better: up to 1 year / 1–5 years / over 5 years | 0.5% / 2% / 4% |
| Main-index equities | 20% |
| Other listed equities | 30% |
| Currency mismatch | Add 8% |

The alternative **simple approach** gives the covered part the collateral's risk weight instead of the borrower's, with a 20% floor.

### Physical collateral and real estate

Under the standardised approach, loans secured on property are not treated as "mitigated". They form their own exposure classes, risk-weighted by loan-to-value (Part 6). Under IRB, physical collateral lowers LGD. Either way, the valuation is the weak point — stale valuations, optimistic valuers and falling markets all hide risk.

### Guarantees: substitution

The guaranteed part takes the guarantor's risk weight; the rest keeps the borrower's.

A ₹10 crore loan to an unrated SME carries an 85% risk weight under Basel 3.1 — risk-weighted assets (RWA) of ₹8.5 crore. If a bank rated AA guarantees 60% of it (risk weight 20%):

RWA = 6 × 20% + 4 × 85% = 1.2 + 3.4 = **₹4.6 crore** — the capital needed almost halves.

In India, the part of a loan guaranteed by CGTMSE and similar government-backed trusts carries a 0% risk weight [verify].

### Netting

If a bank has lent ₹10 crore to a company that keeps ₹3 crore on deposit with it, and a netting agreement lets the bank set one against the other on default, the exposure is ₹7 crore. For derivatives, netting is the single biggest reducer of exposure (Part 8).

### What makes mitigation fail

- **Legal uncertainty.** A charge that was never registered — in India, with CERSAI or the Registrar of Companies — may not survive the borrower's insolvency.
- **Wrong-way collateral.** A borrower's own shares, or receivables owed by the borrower's own group, lose value exactly when the borrower fails.
- **Stale values.** A property valued three years ago in a falling market.
- **Double-counting.** One piece of collateral counted in full against several facilities.
- **Currency mismatch.** Dollar collateral against a rupee loan moves with the exchange rate.

To an analyst, collateral is a data model. Each item needs an identifier, type, value, valuation date and source, haircut, legal charge details, and an allocation to the facilities it secures. When one item secures several facilities, a rule must split it — pro rata, or to minimise capital.

### Check yourself

1. A ₹20 crore loan is secured by listed shares worth ₹15 crore, not in a main index, in the same currency. How much remains exposed?
2. Why doesn't a guarantee from the borrower's own parent company always help?
3. Covenants let the bank act early. Why don't they reduce capital?

<details>
<summary>Answers</summary>

1. Haircut 30%, so collateral counted = 15 × 0.70 = 10.5. Still exposed: 20 − 10.5 = ₹9.5 crore.
2. Parent and subsidiary tend to fail together — the guarantee is correlated with the very risk it covers. It counts only if the guarantor is eligible and independently strong.
3. They lower the chance of loss in practice by triggering action, but they neither move the loss to someone else nor give the bank an asset to sell. Capital recognises only mitigants that pay out when the borrower doesn't.

</details>

## Part 5 — Provisions for expected loss: IFRS 9

Expected loss is a cost of lending, as certain as rent. Accounting makes the bank recognise it before the loss arrives — as a **provision**, or **loss allowance**, which reduces profit and the loan's carrying value.

### Why IFRS 9

Its predecessor, IAS 39, used **incurred loss**: provide only once a loss event has happened. In 2008 banks provided too little, too late. IFRS 9, effective from 1 January 2018, uses **expected credit loss (ECL)**: provide from day one for the losses you expect, and more when risk rises.

<svg viewBox="0 0 400 436" width="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="IFRS 9 stages: Stage 1 performing with 12-month expected credit loss, Stage 2 after a significant increase in credit risk with lifetime loss, Stage 3 credit-impaired with lifetime loss; loans can cure back" style="width:100%;max-width:400px;height:auto;display:block;margin:1rem auto">
<g font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#1f2937">
<text x="200" y="24" font-size="16" text-anchor="middle" font-weight="700">IFRS 9: three stages</text>
<rect x="12" y="44" width="300" height="84" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
<text x="162" y="71" text-anchor="middle" font-weight="600" fill="#047857">Stage 1 — performing</text>
<text x="162" y="91" text-anchor="middle">12-month ECL</text>
<text x="162" y="111" text-anchor="middle">interest on gross amount</text>
<line x1="110.0" y1="130.0" x2="110.0" y2="160.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="110.0,168.0 114.0,160.0 106.0,160.0" fill="#6b7280"/>
<text x="122" y="154" font-weight="600">SICR</text>
<line x1="220.0" y1="168.0" x2="220.0" y2="138.0" stroke="#6b7280" stroke-width="1.6" stroke-dasharray="5 4"/>
<polygon points="220.0,130.0 216.0,138.0 224.0,138.0" fill="#6b7280"/>
<text x="232" y="154" fill="#4b5563">cure</text>
<rect x="12" y="168" width="300" height="84" rx="8" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
<text x="162" y="195" text-anchor="middle" font-weight="600" fill="#b45309">Stage 2 — risk up a lot</text>
<text x="162" y="215" text-anchor="middle">lifetime ECL</text>
<text x="162" y="235" text-anchor="middle">interest on gross amount</text>
<line x1="110.0" y1="254.0" x2="110.0" y2="284.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="110.0,292.0 114.0,284.0 106.0,284.0" fill="#6b7280"/>
<text x="122" y="278" font-weight="600">default</text>
<line x1="220.0" y1="292.0" x2="220.0" y2="262.0" stroke="#6b7280" stroke-width="1.6" stroke-dasharray="5 4"/>
<polygon points="220.0,254.0 216.0,262.0 224.0,262.0" fill="#6b7280"/>
<text x="232" y="278" fill="#4b5563">cure</text>
<rect x="12" y="292" width="300" height="84" rx="8" fill="#fff1f2" stroke="#f43f5e" stroke-width="1.5"/>
<text x="162" y="319" text-anchor="middle" font-weight="600" fill="#be123c">Stage 3 — credit-impaired</text>
<text x="162" y="339" text-anchor="middle">lifetime ECL</text>
<text x="162" y="359" text-anchor="middle">interest on net amount</text>
<text x="200" y="404" text-anchor="middle" fill="#4b5563">POCI: impaired when bought or made —</text>
<text x="200" y="424" text-anchor="middle" fill="#4b5563">lifetime ECL from day one</text>
</g>
</svg>

| Stage | When | Provision | Interest income on |
|---|---|---|---|
| 1 | Performing, with no significant increase in credit risk since origination | 12-month ECL: loss from defaults in the next 12 months | Gross carrying amount |
| 2 | Significant increase in credit risk (SICR), not yet impaired | Lifetime ECL | Gross carrying amount |
| 3 | Credit-impaired (in default) | Lifetime ECL | Net carrying amount, after the allowance |
| POCI | Purchased or originated credit-impaired | Lifetime ECL, from day one | A credit-adjusted effective rate |

### SICR: the move to Stage 2

The test compares risk *now* with risk *at origination* — not with an absolute level. A BBB loan made as BBB stays in Stage 1; a BBB loan made as A may be in Stage 2.

| Trigger | Typical design |
|---|---|
| Quantitative | Lifetime PD now against lifetime PD at origination, with relative thresholds (doubled or tripled, say) and absolute ones (up by at least half a percentage point, say) |
| Qualitative | Watchlist, forbearance, sector or borrower-specific warnings |
| Backstop | 30 days past due — a rebuttable presumption in the standard |
| Low credit risk exemption | Investment-grade exposures may stay in Stage 1 |

A loan's lifetime PD was 3% at origination and is 8% now: 2.67 times. Against a "doubled" threshold, it moves to Stage 2.

Stage 3 usually matches the regulatory default definition, with 90 days past due as a rebuttable presumption. Loans cure back only after a **probation** period, so that they don't flicker between stages.

### The ECL formula

$$
\text{ECL} = \sum_{t=1}^{T} \text{PD}_t \times \text{LGD}_t \times \text{EAD}_t \times \text{DF}_t
$$

where, for each period t: PD is the marginal chance of defaulting in that period (having survived until then), LGD and EAD are the loss rate and the exposure if default happens then, and DF discounts back to today at the loan's **effective interest rate (EIR)**. T is one year for Stage 1 and the remaining life of the loan for Stages 2 and 3.

A ₹100 crore, three-year amortising corporate loan with an EIR of 10% and LGD of 40%:

| Year | Marginal PD | EAD | Discount factor | ECL contribution |
|---|---|---|---|---|
| 1 | 2.0% | 100 | 0.909 | 0.727 |
| 2 | 2.8% | 70 | 0.826 | 0.648 |
| 3 | 3.2% | 40 | 0.751 | 0.385 |
| **Total** | | | | **1.760** |

In Stage 1 the provision is the first year only: **₹0.73 crore**. Move the same loan to Stage 2 and it jumps to **₹1.76 crore** — the **cliff effect**, a jump in provisions without a single rupee defaulting.

<svg viewBox="0 0 400 336" width="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar chart: the same loan carries 0.73 crore of 12-month expected loss in Stage 1 and 1.76 crore of lifetime loss in Stage 2" style="width:100%;max-width:400px;height:auto;display:block;margin:1rem auto">
<g font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#1f2937">
<text x="200" y="24" font-size="16" text-anchor="middle" font-weight="700">Stage 2 cliff: same loan, two horizons</text>
<line x1="70" y1="280.0" x2="370" y2="280.0" stroke="#e5e7eb"/>
<text x="64" y="285" text-anchor="end" fill="#4b5563">0</text>
<line x1="70" y1="225.0" x2="370" y2="225.0" stroke="#e5e7eb"/>
<text x="64" y="230" text-anchor="end" fill="#4b5563">0.5</text>
<line x1="70" y1="170.0" x2="370" y2="170.0" stroke="#e5e7eb"/>
<text x="64" y="175" text-anchor="end" fill="#4b5563">1.0</text>
<line x1="70" y1="115.0" x2="370" y2="115.0" stroke="#e5e7eb"/>
<text x="64" y="120" text-anchor="end" fill="#4b5563">1.5</text>
<line x1="70" y1="60.0" x2="370" y2="60.0" stroke="#e5e7eb"/>
<text x="64" y="65" text-anchor="end" fill="#4b5563">2.0</text>
<line x1="70" y1="280" x2="370" y2="280" stroke="#9ca3af" stroke-width="1.2"/>
<line x1="70" y1="60" x2="70" y2="280" stroke="#9ca3af" stroke-width="1.2"/>
<text x="16" y="170" text-anchor="middle" fill="#4b5563" transform="rotate(-90 16 170)">ECL, ₹ crore</text>
<rect x="100.0" y="200.0" width="90" height="80.0" fill="#10b981" fill-opacity="0.75"/>
<text x="145" y="192" text-anchor="middle" font-weight="700">0.73</text>
<rect x="250.0" y="200.0" width="90" height="80.0" fill="#10b981" fill-opacity="0.75"/>
<text x="348" y="245" fill="#4b5563">year 1</text>
<rect x="250.0" y="128.8" width="90" height="71.3" fill="#f59e0b" fill-opacity="0.75"/>
<text x="348" y="169" fill="#4b5563">year 2</text>
<rect x="250.0" y="86.4" width="90" height="42.3" fill="#f43f5e" fill-opacity="0.75"/>
<text x="348" y="113" fill="#4b5563">year 3</text>
<text x="295" y="78" text-anchor="middle" font-weight="700">1.76</text>
<text x="145" y="302" text-anchor="middle" font-weight="600">Stage 1</text>
<text x="145" y="322" text-anchor="middle" fill="#4b5563">12 months</text>
<text x="295" y="302" text-anchor="middle" font-weight="600">Stage 2</text>
<text x="295" y="322" text-anchor="middle" fill="#4b5563">lifetime</text>
</g>
</svg>

### Lifetime PD and forward-looking information

Lifetime PDs come from a **term structure** — how cumulative PD builds up year by year — built from rating migration matrices, survival models or vintage data.

<svg viewBox="0 0 400 352" width="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Chart: cumulative probability of default over ten years for three grades; the riskier the grade, the steeper the curve" style="width:100%;max-width:400px;height:auto;display:block;margin:1rem auto">
<g font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#1f2937">
<text x="200" y="24" font-size="16" text-anchor="middle" font-weight="700">Lifetime PD grows with the horizon</text>
<line x1="70" y1="296.0" x2="370" y2="296.0" stroke="#e5e7eb"/>
<text x="64" y="301" text-anchor="end" fill="#4b5563">0%</text>
<line x1="70" y1="246.0" x2="370" y2="246.0" stroke="#e5e7eb"/>
<text x="64" y="251" text-anchor="end" fill="#4b5563">10%</text>
<line x1="70" y1="196.0" x2="370" y2="196.0" stroke="#e5e7eb"/>
<text x="64" y="201" text-anchor="end" fill="#4b5563">20%</text>
<line x1="70" y1="146.0" x2="370" y2="146.0" stroke="#e5e7eb"/>
<text x="64" y="151" text-anchor="end" fill="#4b5563">30%</text>
<line x1="70" y1="96.0" x2="370" y2="96.0" stroke="#e5e7eb"/>
<text x="64" y="101" text-anchor="end" fill="#4b5563">40%</text>
<line x1="70.0" y1="296" x2="70.0" y2="301" stroke="#9ca3af"/>
<text x="70" y="318" text-anchor="middle" fill="#4b5563">0</text>
<line x1="130.0" y1="296" x2="130.0" y2="301" stroke="#9ca3af"/>
<text x="130" y="318" text-anchor="middle" fill="#4b5563">2</text>
<line x1="190.0" y1="296" x2="190.0" y2="301" stroke="#9ca3af"/>
<text x="190" y="318" text-anchor="middle" fill="#4b5563">4</text>
<line x1="250.0" y1="296" x2="250.0" y2="301" stroke="#9ca3af"/>
<text x="250" y="318" text-anchor="middle" fill="#4b5563">6</text>
<line x1="310.0" y1="296" x2="310.0" y2="301" stroke="#9ca3af"/>
<text x="310" y="318" text-anchor="middle" fill="#4b5563">8</text>
<line x1="370.0" y1="296" x2="370.0" y2="301" stroke="#9ca3af"/>
<text x="370" y="318" text-anchor="middle" fill="#4b5563">10</text>
<line x1="70" y1="296" x2="370" y2="296" stroke="#9ca3af" stroke-width="1.2"/>
<line x1="70" y1="96" x2="70" y2="296" stroke="#9ca3af" stroke-width="1.2"/>
<text x="220" y="340" text-anchor="middle" fill="#4b5563">Years from today</text>
<text x="16" y="196" text-anchor="middle" fill="#4b5563" transform="rotate(-90 16 196)">Cumulative PD</text>
<polyline points="70.0,296.0 77.5,295.6 85.0,295.2 92.5,294.9 100.0,294.5 107.5,294.1 115.0,293.8 122.5,293.4 130.0,293.0 137.5,292.6 145.0,292.3 152.5,291.9 160.0,291.5 167.5,291.1 175.0,290.8 182.5,290.4 190.0,290.0 197.5,289.7 205.0,289.3 212.5,288.9 220.0,288.5 227.5,288.2 235.0,287.8 242.5,287.4 250.0,287.1 257.5,286.7 265.0,286.3 272.5,286.0 280.0,285.6 287.5,285.2 295.0,284.9 302.5,284.5 310.0,284.1 317.5,283.8 325.0,283.4 332.5,283.0 340.0,282.7 347.5,282.3 355.0,281.9 362.5,281.6 370.0,281.2" fill="none" stroke="#10b981" stroke-width="3" stroke-linejoin="round"/>
<polyline points="70.0,296.0 77.5,294.1 85.0,292.2 92.5,290.4 100.0,288.5 107.5,286.6 115.0,284.8 122.5,282.9 130.0,281.1 137.5,279.3 145.0,277.5 152.5,275.6 160.0,273.8 167.5,272.0 175.0,270.2 182.5,268.5 190.0,266.7 197.5,264.9 205.0,263.1 212.5,261.4 220.0,259.6 227.5,257.9 235.0,256.1 242.5,254.4 250.0,252.7 257.5,250.9 265.0,249.2 272.5,247.5 280.0,245.8 287.5,244.1 295.0,242.4 302.5,240.7 310.0,239.1 317.5,237.4 325.0,235.7 332.5,234.1 340.0,232.4 347.5,230.8 355.0,229.1 362.5,227.5 370.0,225.9" fill="none" stroke="#f59e0b" stroke-width="3" stroke-linejoin="round"/>
<polyline points="70.0,296.0 77.5,289.6 85.0,283.3 92.5,277.1 100.0,271.0 107.5,264.9 115.0,259.0 122.5,253.1 130.0,247.2 137.5,241.5 145.0,235.8 152.5,230.2 160.0,224.7 167.5,219.2 175.0,213.8 182.5,208.5 190.0,203.3 197.5,198.1 205.0,192.9 212.5,187.9 220.0,182.9 227.5,178.0 235.0,173.1 242.5,168.3 250.0,163.5 257.5,158.9 265.0,154.2 272.5,149.7 280.0,145.2 287.5,140.7 295.0,136.3 302.5,132.0 310.0,127.7 317.5,123.5 325.0,119.3 332.5,115.2 340.0,111.1 347.5,107.1 355.0,103.1 362.5,99.2 370.0,95.4" fill="none" stroke="#f43f5e" stroke-width="3" stroke-linejoin="round"/>
<line x1="74" y1="39" x2="96" y2="39" stroke="#f43f5e" stroke-width="3"/>
<text x="104" y="44">Grade C — 5% a year</text>
<line x1="74" y1="61" x2="96" y2="61" stroke="#f59e0b" stroke-width="3"/>
<text x="104" y="66">Grade B — 1.5% a year</text>
<line x1="74" y1="83" x2="96" y2="83" stroke="#10b981" stroke-width="3"/>
<text x="104" y="88">Grade A — 0.3% a year</text>
</g>
</svg>

IFRS 9 also demands **forward-looking information**: PDs and LGDs must reflect forecasts of the economy — GDP growth, unemployment, interest rates, house prices. Banks build **satellite models** linking default rates to these variables, forecast three to five years ahead, then revert to long-run averages.

### Scenarios — and why the weighted answer is higher

Losses respond to the economy unevenly: a recession adds far more loss than a boom removes. So IFRS 9 requires an unbiased, **probability-weighted** estimate across several scenarios, not just the base case.

| Scenario | Weight | Portfolio ECL, ₹ crore |
|---|---|---|
| Upside | 20% | 60 |
| Base | 50% | 80 |
| Downside | 30% | 150 |
| **Weighted** | | **0.2 × 60 + 0.5 × 80 + 0.3 × 150 = 97** |

The weighted ECL of ₹97 crore is ₹17 crore above the base case — the price of the downside's asymmetry.

### Overlays

Models are built on history, and history doesn't contain every risk: a pandemic, a sector shock, a new product, a data gap. **Management overlays** — post-model adjustments — top up or trim the modelled ECL. Auditors and regulators accept them when they are specific, quantified, approved by the impairment committee, documented, and released once the risk passes.

### The provision walk

At every reporting date, the allowance is explained as a movement from opening to closing:

| Movement | ₹ crore |
|---|---|
| Opening allowance | 500 |
| New loans originated | +60 |
| Transfers between stages, net | +45 |
| Remeasurement: PD and LGD changes on existing loans | +30 |
| Model and methodology changes | +15 |
| Loans repaid or derecognised | −40 |
| Written off | −70 |
| **Closing allowance** | **540** |

Auditors and finance teams live in this table. An analyst building an ECL platform must produce every line of it from loan-level data.

### What-if analysis on IFRS 9 parameters

Committees don't only want the number; they want to know how it moves. Starting from a weighted ECL of ₹97 crore (illustrative):

| Lever | Change | ECL, ₹ crore | Movement |
|---|---|---|---|
| Scenario weights | 20/50/30 to 20/40/40 | 104 | +7 |
| Severe view | 100% downside | 150 | +53 |
| PD shift | All PDs up 10% | 106.7 | +9.7 |
| LGD shift | 40% to 45% | 109.1 | +12.1 |
| SICR threshold | "Doubled" to "tripled" | About 91 | About −6: fewer loans in Stage 2 |

To run these safely, the parameters — scenario weights, macroeconomic paths, PD shifts, SICR thresholds, overlays — live as **versioned reference data**. Each run is tagged with its parameter set, so any result can be reproduced months later.

### IFRS 9 against Basel

The same three letters mean different things in the accounts and in capital:

| | IFRS 9 provisions | Basel IRB capital |
|---|---|---|
| Purpose | An unbiased accounting estimate | Prudent capital for a bad year |
| PD | Point-in-time, forward-looking; 12-month or lifetime | Long-run average; 12-month; floored |
| LGD | Best estimate across scenarios | Downturn; floored |
| EAD | Over the contractual (or behavioural) life | At a one-year horizon, with regulatory CCFs or floors |
| Discounting | At the effective interest rate | Only inside the LGD workout |
| Output | An allowance on the balance sheet | RWA and a capital requirement |

### IFRS 9, CECL and India

| | IFRS 9 | US GAAP — CECL | India — commercial banks |
|---|---|---|---|
| Who | UK, EU and most of the world; Indian NBFCs under Ind AS 109 | US banks | Commercial banks |
| Approach | Staged: 12-month, then lifetime | Lifetime ECL from day one; no stages | Today: IRAC rules — NPA at 90 days, fixed provision percentages. From 1 April 2027: ECL under the RBI's directions of 27 April 2026, with prudential floors and the NPA definition retained [verify] |
| In force | 2018 | 2020 for large public banks; 2023 for the rest | ECL from 1 April 2027 [verify] |

Indian banks' provisioning today, for reference [verify]:

| Category | Provision |
|---|---|
| Standard asset | 0.40% generally (0.25% for farm and SME loans; 1% for commercial real estate) |
| Sub-standard (an NPA for up to 12 months) | 15%, or 25% if unsecured |
| Doubtful — up to 1 year / 1–3 years / over 3 years | 25% / 40% / 100% of the secured part, plus 100% of the unsecured part |
| Loss | 100% |

### How provisions touch capital

- **Standardised banks**: general provisions (broadly Stages 1 and 2) count as Tier 2 capital, up to 1.25% of credit RWA.
- **IRB banks**: compare total eligible provisions with regulatory EL. A shortfall is deducted from CET1; an excess counts as Tier 2, up to 0.6% of credit RWA.
- **Transition**: the EU and UK let banks phase IFRS 9's day-one hit into capital; those arrangements have largely run off [verify]. India's move to ECL comes with its own transition [verify].

### Check yourself

1. How can a loan move to Stage 2 without a single missed payment?
2. ECL is 50, 70 and 130 under upside, base and downside scenarios weighted 25%, 50% and 25%. What is the reported ECL, and why isn't it simply 70?
3. What is the cliff effect, and how do banks soften it?
4. Give two differences between the PD used in IFRS 9 and the PD used in IRB capital.

<details>
<summary>Answers</summary>

1. SICR is judged against the risk at origination. A downgrade, a watchlist flag or a large rise in lifetime PD is enough — the 30-days-past-due backstop is the last trigger, not the first.
2. 0.25 × 50 + 0.5 × 70 + 0.25 × 130 = 80. Losses respond more to bad scenarios than to good ones, so the probability-weighted answer sits above the base case.
3. The jump from 12-month to lifetime ECL when a loan crosses into Stage 2. Banks soften it with well-calibrated SICR thresholds, probation periods that stop loans flickering between stages, and early monitoring that acts before the move.
4. IFRS 9 PD is point-in-time and forward-looking, and lifetime for Stages 2 and 3. IRB PD is a long-run average over one year, with a regulatory floor.

</details>

## Part 6 — Capital for unexpected loss: Basel

Provisions cover the average year. Capital covers the bad one. It is the bank's own money — shareholders' equity and loss-absorbing debt — standing between losses and depositors.

The **Basel Committee on Banking Supervision (BCBS)**, which meets at the Bank for International Settlements, writes the global standards. Each country turns them into its own rules: the PRA in the UK; the EU through its Capital Requirements Regulation (CRR); the Federal Reserve, FDIC and OCC in the US; the RBI in India.

**Regulatory capital** is what the rules require. **Economic capital** is what the bank's own model says it needs — often at a stricter confidence level, tied to its target credit rating. Banks manage to both.

<svg viewBox="0 0 400 292" width="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Basel&#x27;s three pillars: Pillar 1 minimum capital for credit, market and operational risk; Pillar 2 supervisory review; Pillar 3 disclosure" style="width:100%;max-width:400px;height:auto;display:block;margin:1rem auto">
<g font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#1f2937">
<text x="200" y="24" font-size="16" text-anchor="middle" font-weight="700">Basel&#x27;s three pillars</text>
<polygon points="200,40 390,90 10,90" fill="#f5f3ff" stroke="#8b5cf6" stroke-width="1.5"/>
<text x="200" y="78" text-anchor="middle" font-weight="700" fill="#6d28d9">Bank capital framework</text>
<rect x="14" y="100" width="118" height="150" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
<text x="73" y="128" text-anchor="middle" font-weight="600" fill="#1d4ed8">Pillar 1</text>
<text x="73" y="148" text-anchor="middle">Minimum</text>
<text x="73" y="170" text-anchor="middle">capital</text>
<text x="73" y="190" text-anchor="middle">credit,</text>
<text x="73" y="212" text-anchor="middle">market,</text>
<text x="73" y="232" text-anchor="middle">operational</text>
<rect x="140" y="100" width="118" height="150" rx="8" fill="#f0fdfa" stroke="#14b8a6" stroke-width="1.5"/>
<text x="199" y="128" text-anchor="middle" font-weight="600" fill="#0f766e">Pillar 2</text>
<text x="199" y="148" text-anchor="middle">Supervisory</text>
<text x="199" y="170" text-anchor="middle">review</text>
<text x="199" y="190" text-anchor="middle">ICAAP,</text>
<text x="199" y="212" text-anchor="middle">risks P1</text>
<text x="199" y="232" text-anchor="middle">misses</text>
<rect x="266" y="100" width="118" height="150" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
<text x="325" y="148" text-anchor="middle" font-weight="600" fill="#047857">Pillar 3</text>
<text x="325" y="170" text-anchor="middle">Disclosure</text>
<text x="325" y="190" text-anchor="middle">market</text>
<text x="325" y="212" text-anchor="middle">discipline</text>
<rect x="10" y="258" width="380" height="26" rx="4" fill="#f3f4f6" stroke="#6b7280" stroke-width="1.5"/>
<text x="200" y="276" text-anchor="middle" font-weight="600" fill="#374151">Capital that can absorb losses</text>
</g>
</svg>

### The capital ratio

$$
\text{Capital ratio} = \frac{\text{eligible capital}}{\text{credit RWA} + \text{market RWA} + \text{operational RWA}}
$$

**Risk-weighted assets (RWA)** turn every exposure into a risk-adjusted amount. For credit risk under the standardised approach:

$$
\text{RWA} = \text{EAD} \times \text{risk weight}
$$

Market and operational risk produce a capital charge directly, converted to RWA by multiplying by 12.5 (the inverse of 8%).

A ₹50 crore loan to an unrated SME has a risk weight of 85%, so RWA = ₹42.5 crore. At the 8% Basel minimum it needs ₹3.4 crore of capital; with the 2.5% conservation buffer — 10.5% in all — ₹4.46 crore.

### The standardised approach (SA)

Risk weights come from tables, driven by the exposure class, the external rating and — for property — the loan-to-value (LTV) ratio. The main Basel 3.1 weights [verify]:

| Exposure class | Risk weight |
|---|---|
| Sovereigns: AAA to AA− / A / BBB / BB to B / below B− / unrated | 0% / 20% / 50% / 100% / 150% / 100% |
| Banks, rated: AAA to AA− / A / BBB / BB to B / below B− | 20% / 30% / 50% / 100% / 150% |
| Banks, unrated, assessed as grade A / B / C | 40% (30% if very strong) / 75% / 150% |
| Corporates, rated: AAA to AA− / A / BBB / BB / below BB− | 20% / 50% / 75% / 100% / 150% |
| Corporates, unrated | 100% (65% if investment grade, where ratings can't be used, as in the US) |
| SME corporates, unrated | 85% |
| Project finance: pre-operational / operational / high-quality operational | 130% / 100% / 80% |
| Regulatory retail | 75% |
| Retail "transactors" — cards paid in full each month | 45% |
| Other retail | 100% |
| Residential mortgages | 20–70% by loan-to-value (chart below) |
| Commercial real estate, general | Up to 60% LTV: the lower of 60% and the borrower's weight; above that: the borrower's weight |
| Land acquisition, development and construction | 150% |
| Subordinated debt | 150% |
| Equity | 250% (400% if speculative) |
| Defaulted | 150% (100% if specific provisions cover at least 20%) |

Unhedged currency mismatches in retail and mortgage lending multiply the weight by 1.5, capped at 150%.

<svg viewBox="0 0 400 352" width="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar chart: Basel 3.1 residential mortgage risk weights rise with loan-to-value, from 20% at 50% LTV or less to 70% above 100%, replacing Basel 3&#x27;s flat 35%" style="width:100%;max-width:400px;height:auto;display:block;margin:1rem auto">
<g font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#1f2937">
<text x="200" y="24" font-size="16" text-anchor="middle" font-weight="700">Home-loan risk weights under Basel 3.1</text>
<line x1="70" y1="296.0" x2="380" y2="296.0" stroke="#e5e7eb"/>
<text x="64" y="301" text-anchor="end" fill="#4b5563">0%</text>
<line x1="70" y1="246.0" x2="380" y2="246.0" stroke="#e5e7eb"/>
<text x="64" y="251" text-anchor="end" fill="#4b5563">20%</text>
<line x1="70" y1="196.0" x2="380" y2="196.0" stroke="#e5e7eb"/>
<text x="64" y="201" text-anchor="end" fill="#4b5563">40%</text>
<line x1="70" y1="146.0" x2="380" y2="146.0" stroke="#e5e7eb"/>
<text x="64" y="151" text-anchor="end" fill="#4b5563">60%</text>
<line x1="70" y1="96.0" x2="380" y2="96.0" stroke="#e5e7eb"/>
<text x="64" y="101" text-anchor="end" fill="#4b5563">80%</text>
<line x1="95.8" y1="296" x2="95.8" y2="301" stroke="#9ca3af"/>
<text x="96" y="318" text-anchor="middle" fill="#4b5563">≤50</text>
<line x1="147.5" y1="296" x2="147.5" y2="301" stroke="#9ca3af"/>
<text x="148" y="318" text-anchor="middle" fill="#4b5563">≤60</text>
<line x1="199.2" y1="296" x2="199.2" y2="301" stroke="#9ca3af"/>
<text x="199" y="318" text-anchor="middle" fill="#4b5563">≤80</text>
<line x1="250.8" y1="296" x2="250.8" y2="301" stroke="#9ca3af"/>
<text x="251" y="318" text-anchor="middle" fill="#4b5563">≤90</text>
<line x1="302.5" y1="296" x2="302.5" y2="301" stroke="#9ca3af"/>
<text x="302" y="318" text-anchor="middle" fill="#4b5563">≤100</text>
<line x1="354.2" y1="296" x2="354.2" y2="301" stroke="#9ca3af"/>
<text x="354" y="318" text-anchor="middle" fill="#4b5563">&gt;100</text>
<line x1="70" y1="296" x2="380" y2="296" stroke="#9ca3af" stroke-width="1.2"/>
<line x1="70" y1="96" x2="70" y2="296" stroke="#9ca3af" stroke-width="1.2"/>
<text x="225" y="340" text-anchor="middle" fill="#4b5563">Loan-to-value, %</text>
<polyline points="70.0,208.5 380.0,208.5" fill="none" stroke="#f43f5e" stroke-width="2.5" stroke-linejoin="round" stroke-dasharray="7 5"/>
<rect x="75.8" y="246.0" width="40" height="50.0" fill="#3b82f6" fill-opacity="0.75"/>
<text x="96" y="238" text-anchor="middle" font-weight="600">20%</text>
<rect x="127.5" y="233.5" width="40" height="62.5" fill="#3b82f6" fill-opacity="0.75"/>
<text x="148" y="226" text-anchor="middle" font-weight="600">25%</text>
<rect x="179.2" y="221.0" width="40" height="75.0" fill="#3b82f6" fill-opacity="0.75"/>
<text x="199" y="213" text-anchor="middle" font-weight="600">30%</text>
<rect x="230.8" y="196.0" width="40" height="100.0" fill="#3b82f6" fill-opacity="0.75"/>
<text x="251" y="188" text-anchor="middle" font-weight="600">40%</text>
<rect x="282.5" y="171.0" width="40" height="125.0" fill="#3b82f6" fill-opacity="0.75"/>
<text x="302" y="163" text-anchor="middle" font-weight="600">50%</text>
<rect x="334.2" y="121.0" width="40" height="175.0" fill="#3b82f6" fill-opacity="0.75"/>
<text x="354" y="113" text-anchor="middle" font-weight="600">70%</text>
<line x1="74" y1="45" x2="96" y2="45" stroke="#3b82f6" stroke-width="3"/>
<text x="104" y="50">Basel 3.1: by loan-to-value</text>
<line x1="74" y1="67" x2="96" y2="67" stroke="#f43f5e" stroke-width="3" stroke-dasharray="7 5"/>
<text x="104" y="72">Basel 3: 35% for all</text>
</g>
</svg>

India's revised standardised approach, in force from 1 April 2027, brings finer weights: lower for MSMEs and low-LTV home loans, 75% for retail including cards and overdrafts, differentiated real estate, and weights that also depend on each rating agency's default record [verify].

### The internal ratings-based approach (IRB)

With supervisory approval, a bank may use its own models for some of the inputs:

| | Foundation IRB (F-IRB) | Advanced IRB (A-IRB) | Retail IRB |
|---|---|---|---|
| PD | Bank | Bank | Bank |
| LGD | Supervisory: 40% for senior unsecured corporates under Basel 3.1, 45% for financial institutions, 75% for subordinated | Bank, with floors | Bank, with floors |
| EAD and CCF | Supervisory | Bank, with floors | Bank |
| Maturity | Supervisory or bank | Bank | Not used |

The capital requirement per unit of exposure, K, comes from the **asymptotic single risk factor (ASRF)** model, often called the Vasicek formula:

$$
K = \left[\text{LGD} \times \Phi\!\left(\frac{\Phi^{-1}(\text{PD}) + \sqrt{R}\,\Phi^{-1}(0.999)}{\sqrt{1-R}}\right) - \text{PD} \times \text{LGD}\right] \times \frac{1 + (M - 2.5)\,b}{1 - 1.5\,b}
$$

$$
\text{RWA} = K \times 12.5 \times \text{EAD}
$$

where Φ is the standard normal distribution and Φ⁻¹ its inverse; R is the borrower's correlation with the economy (12–24% for corporates, higher for safer names; 15% for mortgages; 4% for revolving retail; 3–16% for other retail); M is the effective maturity; and b = (0.11852 − 0.05478 × ln PD)² is the maturity adjustment.

In words: take the PD and push it to what it would become in a 1-in-1,000 bad year (the fraction); multiply by LGD to get the loss in that year; subtract the expected part, already covered by provisions; adjust for maturity. What remains is the unexpected loss — the capital.

For a corporate with PD 1%, LGD 45% and M 2.5 years: R = 19.3%, K = 7.39%, and the **risk weight is 92%**.

<svg viewBox="0 0 400 352" width="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Chart: the IRB corporate risk weight climbs from about 20% at PD 0.05% to over 200% at PD 20%, crossing the flat standardised 100% line near PD 1.2%" style="width:100%;max-width:400px;height:auto;display:block;margin:1rem auto">
<g font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#1f2937">
<text x="200" y="24" font-size="16" text-anchor="middle" font-weight="700">IRB risk weight rises with PD</text>
<line x1="70" y1="296.0" x2="370" y2="296.0" stroke="#e5e7eb"/>
<text x="64" y="301" text-anchor="end" fill="#4b5563">0%</text>
<line x1="70" y1="256.0" x2="370" y2="256.0" stroke="#e5e7eb"/>
<text x="64" y="261" text-anchor="end" fill="#4b5563">50%</text>
<line x1="70" y1="216.0" x2="370" y2="216.0" stroke="#e5e7eb"/>
<text x="64" y="221" text-anchor="end" fill="#4b5563">100%</text>
<line x1="70" y1="176.0" x2="370" y2="176.0" stroke="#e5e7eb"/>
<text x="64" y="181" text-anchor="end" fill="#4b5563">150%</text>
<line x1="70" y1="136.0" x2="370" y2="136.0" stroke="#e5e7eb"/>
<text x="64" y="141" text-anchor="end" fill="#4b5563">200%</text>
<line x1="70" y1="96.0" x2="370" y2="96.0" stroke="#e5e7eb"/>
<text x="64" y="101" text-anchor="end" fill="#4b5563">250%</text>
<line x1="70.0" y1="296" x2="70.0" y2="301" stroke="#9ca3af"/>
<text x="70" y="318" text-anchor="middle" fill="#4b5563">0.05</text>
<line x1="104.7" y1="296" x2="104.7" y2="301" stroke="#9ca3af"/>
<text x="105" y="318" text-anchor="middle" fill="#4b5563">0.1</text>
<line x1="185.3" y1="296" x2="185.3" y2="301" stroke="#9ca3af"/>
<text x="185" y="318" text-anchor="middle" fill="#4b5563">0.5</text>
<line x1="220.0" y1="296" x2="220.0" y2="301" stroke="#9ca3af"/>
<text x="220" y="318" text-anchor="middle" fill="#4b5563">1</text>
<line x1="300.6" y1="296" x2="300.6" y2="301" stroke="#9ca3af"/>
<text x="301" y="318" text-anchor="middle" fill="#4b5563">5</text>
<line x1="370.0" y1="296" x2="370.0" y2="301" stroke="#9ca3af"/>
<text x="370" y="318" text-anchor="middle" fill="#4b5563">20</text>
<line x1="70" y1="296" x2="370" y2="296" stroke="#9ca3af" stroke-width="1.2"/>
<line x1="70" y1="96" x2="70" y2="296" stroke="#9ca3af" stroke-width="1.2"/>
<text x="220" y="340" text-anchor="middle" fill="#4b5563">PD, % (log scale)</text>
<polyline points="70.0,216.0 370.0,216.0" fill="none" stroke="#6b7280" stroke-width="2" stroke-linejoin="round" stroke-dasharray="6 5"/>
<polyline points="70.0,228.0 370.0,228.0" fill="none" stroke="#14b8a6" stroke-width="2" stroke-linejoin="round" stroke-dasharray="6 5"/>
<polyline points="70.0,280.3 73.9,279.5 77.7,278.8 81.6,277.9 85.4,277.1 89.3,276.2 93.1,275.3 97.0,274.3 100.8,273.3 104.7,272.3 108.5,271.2 112.4,270.1 116.2,268.9 120.1,267.7 123.9,266.4 127.8,265.1 131.7,263.8 135.5,262.4 139.4,260.9 143.2,259.4 147.1,257.9 150.9,256.3 154.8,254.7 158.6,253.0 162.5,251.3 166.3,249.5 170.2,247.7 174.0,245.9 177.9,244.0 181.8,242.1 185.6,240.2 189.5,238.2 193.3,236.2 197.2,234.2 201.0,232.2 204.9,230.2 208.7,228.1 212.6,226.1 216.4,224.0 220.3,222.0 224.1,220.0 228.0,217.9 231.8,215.9 235.7,213.9 239.6,211.9 243.4,209.9 247.3,207.9 251.1,206.0 255.0,204.0 258.8,202.0 262.7,200.0 266.5,197.9 270.4,195.8 274.2,193.7 278.1,191.5 281.9,189.1 285.8,186.7 289.7,184.2 293.5,181.5 297.4,178.6 301.2,175.6 305.1,172.4 308.9,169.0 312.8,165.5 316.6,161.7 320.5,157.8 324.3,153.7 328.2,149.5 332.0,145.2 335.9,140.8 339.7,136.4 343.6,132.0 347.5,127.7 351.3,123.4 355.2,119.2 359.0,115.3 362.9,111.5 366.7,108.1" fill="none" stroke="#8b5cf6" stroke-width="3" stroke-linejoin="round"/>
<circle cx="220.0" cy="222.2" r="5" fill="#6d28d9"/>
<text x="212" y="246" text-anchor="middle" font-weight="600" fill="#6d28d9">PD 1% → 92%</text>
<line x1="74" y1="37" x2="96" y2="37" stroke="#8b5cf6" stroke-width="3"/>
<text x="104" y="42">IRB corporate, LGD 45%</text>
<line x1="74" y1="59" x2="96" y2="59" stroke="#6b7280" stroke-width="3" stroke-dasharray="6 5"/>
<text x="104" y="64">SA unrated corporate</text>
<line x1="74" y1="81" x2="96" y2="81" stroke="#14b8a6" stroke-width="3" stroke-dasharray="6 5"/>
<text x="104" y="86">SA unrated SME</text>
</g>
</svg>

That is the point of IRB. A borrower with a 0.1% PD gets a weight of about 30%, and one with a 10% PD about 190%, where the SA would give either of them, unrated, 100%.

Basel 3.1 narrowed IRB [verify]: no A-IRB for large corporates (revenue above €500 million) or for banks and other financial institutions; no IRB at all for equities; floors on the inputs — PD at least 0.05% (0.1% for revolving retail), LGD floors from 0% to 50% by collateral and product, own-estimate CCFs at least half the SA value; and the old 1.06 scaling factor removed.

### What counts as capital

<svg viewBox="0 0 400 396" width="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Stacked bars: Basel minimum of CET1 4.5, AT1 1.5 and Tier 2 2.0 plus a 2.5 conservation buffer and up to 2.5 countercyclical buffer; India CET1 5.5, AT1 1.5, Tier 2 2.0 plus 2.5 conservation buffer and a D-SIB add-on" style="width:100%;max-width:400px;height:auto;display:block;margin:1rem auto">
<g font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#1f2937">
<text x="200" y="24" font-size="16" text-anchor="middle" font-weight="700">Minimum capital, as % of RWA</text>
<line x1="70" y1="334.0" x2="370" y2="334.0" stroke="#e5e7eb"/>
<text x="64" y="339" text-anchor="end" fill="#4b5563">0%</text>
<line x1="70" y1="292.6" x2="370" y2="292.6" stroke="#e5e7eb"/>
<text x="64" y="298" text-anchor="end" fill="#4b5563">2%</text>
<line x1="70" y1="251.1" x2="370" y2="251.1" stroke="#e5e7eb"/>
<text x="64" y="256" text-anchor="end" fill="#4b5563">4%</text>
<line x1="70" y1="209.7" x2="370" y2="209.7" stroke="#e5e7eb"/>
<text x="64" y="215" text-anchor="end" fill="#4b5563">6%</text>
<line x1="70" y1="168.3" x2="370" y2="168.3" stroke="#e5e7eb"/>
<text x="64" y="173" text-anchor="end" fill="#4b5563">8%</text>
<line x1="70" y1="126.9" x2="370" y2="126.9" stroke="#e5e7eb"/>
<text x="64" y="132" text-anchor="end" fill="#4b5563">10%</text>
<line x1="70" y1="85.4" x2="370" y2="85.4" stroke="#e5e7eb"/>
<text x="64" y="90" text-anchor="end" fill="#4b5563">12%</text>
<line x1="70" y1="44.0" x2="370" y2="44.0" stroke="#e5e7eb"/>
<text x="64" y="49" text-anchor="end" fill="#4b5563">14%</text>
<line x1="70" y1="334" x2="370" y2="334" stroke="#9ca3af" stroke-width="1.2"/>
<line x1="70" y1="44" x2="70" y2="334" stroke="#9ca3af" stroke-width="1.2"/>
<rect x="90.0" y="240.8" width="110" height="93.2" fill="#10b981" fill-opacity="0.8" stroke="#ffffff"/>
<text x="145" y="292" text-anchor="middle" font-weight="600" fill="#111827">CET1 4.5%</text>
<rect x="90.0" y="209.7" width="110" height="31.1" fill="#14b8a6" fill-opacity="0.8" stroke="#ffffff"/>
<text x="145" y="230" text-anchor="middle" font-weight="600" fill="#111827">AT1 1.5%</text>
<rect x="90.0" y="168.3" width="110" height="41.4" fill="#3b82f6" fill-opacity="0.8" stroke="#ffffff"/>
<text x="145" y="194" text-anchor="middle" font-weight="600" fill="#111827">Tier 2 2%</text>
<rect x="90.0" y="116.5" width="110" height="51.8" fill="#f59e0b" fill-opacity="0.8" stroke="#ffffff"/>
<text x="145" y="147" text-anchor="middle" font-weight="600" fill="#111827">CCB 2.5%</text>
<rect x="90.0" y="64.7" width="110" height="51.8" fill="#f43f5e" fill-opacity="0.35" stroke="#ffffff"/>
<text x="145" y="96" text-anchor="middle" font-weight="600" fill="#111827">CCyB 0–2.5%</text>
<text x="145" y="356" text-anchor="middle" font-weight="700">Basel</text>
<rect x="240.0" y="220.1" width="110" height="113.9" fill="#10b981" fill-opacity="0.8" stroke="#ffffff"/>
<text x="295" y="282" text-anchor="middle" font-weight="600" fill="#111827">CET1 5.5%</text>
<rect x="240.0" y="189.0" width="110" height="31.1" fill="#14b8a6" fill-opacity="0.8" stroke="#ffffff"/>
<text x="295" y="210" text-anchor="middle" font-weight="600" fill="#111827">AT1 1.5%</text>
<rect x="240.0" y="147.6" width="110" height="41.4" fill="#3b82f6" fill-opacity="0.8" stroke="#ffffff"/>
<text x="295" y="173" text-anchor="middle" font-weight="600" fill="#111827">Tier 2 2%</text>
<rect x="240.0" y="95.8" width="110" height="51.8" fill="#f59e0b" fill-opacity="0.8" stroke="#ffffff"/>
<text x="295" y="127" text-anchor="middle" font-weight="600" fill="#111827">CCB 2.5%</text>
<rect x="240.0" y="79.2" width="110" height="16.6" fill="#f43f5e" fill-opacity="0.35" stroke="#ffffff"/>
<text x="295" y="356" text-anchor="middle" font-weight="700">India</text>
<text x="145" y="122" text-anchor="middle" fill="#4b5563"></text>
<text x="295" y="71" text-anchor="middle" fill="#be123c">D-SIB up to 0.8</text>
<text x="200" y="380" text-anchor="middle" fill="#4b5563">Basel 10.5% + buffers · India 11.5% + D-SIB</text>
</g>
</svg>

| Tier | What it is | Instruments and features | Deductions and triggers |
|---|---|---|---|
| Common Equity Tier 1 (CET1) | The purest loss absorber — the owners' money | Ordinary shares, share premium, retained earnings, accumulated other comprehensive income, disclosed reserves | Deduct goodwill and intangibles, deferred tax assets that rely on future profits, any IRB shortfall of provisions against EL, gains from the bank's own worsening credit, defined-benefit pension surpluses, own shares held, and large investments in other financial firms above set thresholds |
| Additional Tier 1 (AT1) | Absorbs losses while the bank is still running (going concern) | Perpetual and subordinated, with no step-ups; coupons fully discretionary and non-cumulative; callable only after five years and only with supervisory approval; converts to equity or is written down at a CET1 trigger, or at the point of non-viability | Minimum trigger 5.125% of CET1 under Basel; 6.125% in India [verify] |
| Tier 2 (T2) | Absorbs losses once the bank has failed (gone concern) | Subordinated debt with at least five years' original maturity, recognised 20% less in each of its last five years; general provisions up to 1.25% of credit RWA (SA) or excess provisions up to 0.6% (IRB) | Written down or converted at the point of non-viability |

Two AT1 stories every interviewer knows:

- **Yes Bank, March 2020.** As part of its RBI-led rescue, ₹8,415 crore of AT1 bonds were written off — a decision later fought in the courts [verify].
- **Credit Suisse, March 2023.** In the UBS takeover, about CHF 16 billion of AT1 was written down to zero while shareholders still received something — reversing the usual order of losses and shaking the global AT1 market.

The lesson of both: AT1 is equity-like risk sold as a bond.

### Minimums and buffers

| | Basel | UK | EU | US | India |
|---|---|---|---|---|---|
| CET1 minimum | 4.5% | 4.5% | 4.5% | 4.5% | 5.5% |
| Tier 1 minimum | 6% | 6% | 6% | 6% | 7% |
| Total capital minimum | 8% | 8% | 8% | 8% | 9% |
| Conservation buffer (CET1) | 2.5% | 2.5% | 2.5% | A stress capital buffer of at least 2.5% for large banks | 2.5% |
| Countercyclical buffer | 0–2.5% | Set by the Bank of England [verify] | Set by each country | Framework exists, set at 0% | Framework exists, not activated [verify] |
| Systemic surcharge | G-SIBs 1–3.5% | G-SIB and O-SII buffers | G-SII, O-SII and systemic risk buffers | GSIB surcharge | D-SIBs 0.2–0.8% [verify] |
| Firm-specific (Pillar 2) | The supervisor's call | Pillar 2A plus a PRA buffer | P2R plus P2G | Through the stress tests | Through the SREP |

Buffers are not minimums. A bank that dips into its buffers is not in breach, but automatic limits on dividends, bonuses and AT1 coupons apply — the **maximum distributable amount (MDA)** — until it rebuilds.

### Leverage ratio

A simple backstop that ignores risk weights, so model errors can't shrink it:

$$
\text{Leverage ratio} = \frac{\text{Tier 1 capital}}{\text{exposure measure}}
$$

where the exposure measure is on-balance-sheet assets plus derivatives (replacement cost and potential future exposure), securities financing, and off-balance-sheet items at their CCFs.

Tier 1 of ₹900 crore against an exposure measure of ₹22,000 crore gives 4.09%. The minimums: Basel 3%, plus half the G-SIB buffer for G-SIBs; UK 3.25% for large banks; India 4% for D-SIBs and 3.5% for other banks [verify].

### Large exposures

No single counterparty — counting together all counterparties connected through ownership or economic dependence — may exceed 25% of Tier 1 under Basel (15% between two G-SIBs). India's limits are 20% for a single counterparty and 25% for a group [verify]. With Tier 1 of ₹900 crore, that means ₹180 crore per counterparty and ₹225 crore per group.

### Market and operational risk, in one screen

| | Before Basel 3.1 | Basel 3.1 |
|---|---|---|
| Market risk (trading book) | Basel 2.5: value-at-risk plus stressed value-at-risk, or a standardised method | FRTB: expected-shortfall models by trading desk, a sensitivities-based standardised approach, and a firmer boundary between trading and banking books |
| Operational risk | Basic indicator, standardised or advanced (internal-model) approaches | One standardised measurement approach: a business indicator scaled by 12–18%, multiplied by a factor for the bank's own loss history |

Basel III also introduced liquidity rules — the liquidity coverage ratio and the net stable funding ratio — which sit outside this note.

### Pillar 2 and Pillar 3

- **Pillar 2.** The bank runs its own **internal capital adequacy assessment process (ICAAP)**, covering every material risk — including those Pillar 1 ignores, such as concentration, interest rate risk in the banking book and strategic risk — and the supervisor reviews it (the SREP, in the EU and India). Extra capital can follow.
- **Pillar 3.** Public disclosures in standard templates — capital, RWA by approach, credit quality, counterparty risk, leverage — so the market can compare banks.

### Check yourself

1. What makes AT1 different from Tier 2?
2. An unrated corporate loan of ₹200 crore under the SA: what are the RWA, and the minimum total capital at 8%?
3. Why does the IRB formula subtract PD × LGD?
4. A bank's CET1 ratio falls into its conservation buffer. Is it in breach? What happens?

<details>
<summary>Answers</summary>

1. AT1 absorbs losses while the bank is still a going concern — it is perpetual, its coupons can be cancelled, and a trigger converts or writes it down. Tier 2 is dated subordinated debt that absorbs losses only at the point of non-viability, in resolution or liquidation.
2. RWA = 200 × 100% = ₹200 crore; minimum capital = 8% × 200 = ₹16 crore.
3. Because expected loss is already covered by provisions and pricing. Capital covers only the unexpected part.
4. No — buffers are there to be used. But the MDA rules restrict dividends, bonuses and AT1 coupons until the ratio is rebuilt, and the bank must submit a capital conservation plan.

</details>

## Part 7 — From Basel 3 to Basel 3.1

Basel III (2010) answered the 2008 crisis by fixing the top of the capital ratio: more capital, better capital, buffers, leverage and liquidity. But the bottom — RWA — stayed unreliable. The Basel Committee found banks computing wildly different RWA for the same hypothetical portfolio, mostly because of their internal models. Basel 3.1 — the 2017 package that finalised the post-crisis reforms — fixes the bottom.

**Basel 3 fixed the numerator; Basel 3.1 fixes the denominator.** That one line answers half the interview questions on the subject.

### One reform, several names

| Name | Who uses it |
|---|---|
| Basel III finalisation, or "the 2017 reforms" | The Basel Committee |
| Basel IV | Industry shorthand, because the impact felt like a new accord |
| Basel 3.1 | The UK's PRA |
| CRR3 and CRD6 | The EU's implementing laws |
| Basel III endgame | US regulators |

<svg viewBox="0 0 400 484" width="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Timeline of the Basel accords from Basel I in 1988 to Basel 3.1 agreed in 2017 and implemented from 2025" style="width:100%;max-width:400px;height:auto;display:block;margin:1rem auto">
<g font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#1f2937">
<text x="200" y="24" font-size="16" text-anchor="middle" font-weight="700">How the Basel rules grew</text>
<line x1="62" y1="46" x2="62" y2="450" stroke="#9ca3af" stroke-width="2"/>
<circle cx="62" cy="68" r="7" fill="#6b7280"/>
<text x="50" y="73" text-anchor="end" font-weight="700">1988</text>
<rect x="78" y="46" width="310" height="50" rx="8" fill="#f3f4f6" stroke="#6b7280" stroke-width="1.5"/>
<text x="90" y="67" font-weight="700" fill="#374151">Basel I</text>
<text x="90" y="87">8% capital, a few risk buckets</text>
<circle cx="62" cy="130" r="7" fill="#3b82f6"/>
<text x="50" y="135" text-anchor="end" font-weight="700">2004</text>
<rect x="78" y="108" width="310" height="50" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
<text x="90" y="129" font-weight="700" fill="#1d4ed8">Basel II</text>
<text x="90" y="149">three pillars, internal models</text>
<circle cx="62" cy="192" r="7" fill="#14b8a6"/>
<text x="50" y="197" text-anchor="end" font-weight="700">2009</text>
<rect x="78" y="170" width="310" height="50" rx="8" fill="#f0fdfa" stroke="#14b8a6" stroke-width="1.5"/>
<text x="90" y="191" font-weight="700" fill="#0f766e">Basel 2.5</text>
<text x="90" y="211">market risk repaired after 2008</text>
<circle cx="62" cy="254" r="7" fill="#10b981"/>
<text x="50" y="259" text-anchor="end" font-weight="700">2010</text>
<rect x="78" y="232" width="310" height="50" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
<text x="90" y="253" font-weight="700" fill="#047857">Basel III</text>
<text x="90" y="273">better capital, buffers, leverage</text>
<circle cx="62" cy="316" r="7" fill="#8b5cf6"/>
<text x="50" y="321" text-anchor="end" font-weight="700">2017</text>
<rect x="78" y="294" width="310" height="50" rx="8" fill="#f5f3ff" stroke="#8b5cf6" stroke-width="1.5"/>
<text x="90" y="315" font-weight="700" fill="#6d28d9">Basel 3.1</text>
<text x="90" y="335">fixes RWAs: floor, SA, IRB, CVA</text>
<circle cx="62" cy="378" r="7" fill="#14b8a6"/>
<text x="50" y="383" text-anchor="end" font-weight="700">2019</text>
<rect x="78" y="356" width="310" height="50" rx="8" fill="#f0fdfa" stroke="#14b8a6" stroke-width="1.5"/>
<text x="90" y="377" font-weight="700" fill="#0f766e">FRTB</text>
<text x="90" y="397">market risk rebuilt</text>
<circle cx="62" cy="440" r="7" fill="#f59e0b"/>
<text x="50" y="445" text-anchor="end" font-weight="700">2025+</text>
<rect x="78" y="418" width="310" height="50" rx="8" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
<text x="90" y="439" font-weight="700" fill="#b45309">Go-live</text>
<text x="90" y="459">EU 2025 · UK, India 2027 · US tbc</text>
</g>
</svg>

### What changed

| Area | Basel 3 | Basel 3.1 |
|---|---|---|
| Output floor | None (only old transitional floors based on Basel I) | IRB banks' RWA must be at least 72.5% of what the SA would give |
| SA credit risk | Ratings-driven and coarse; unrated corporates 100%; mortgages a flat 35% | Finer: BBB corporates 75%; unrated SMEs 85%; investment-grade unrated 65% where ratings can't be used; mortgages by LTV; unrated banks graded A, B or C; due diligence on ratings |
| IRB scope | A-IRB available for every class | No A-IRB for large corporates (above €500 million revenue) or financial institutions; no IRB for equities |
| IRB inputs | PD floor 0.03%, few other floors | PD floor 0.05%; LGD and CCF floors; F-IRB senior unsecured LGD down from 45% to 40% |
| Scaling | A 1.06 multiplier on IRB credit RWA | Removed |
| CCFs | Unconditionally cancellable 0%; commitments 20% or 50% | Unconditionally cancellable 10%; commitments 40% |
| CVA risk | Standardised, or advanced (model-based) | Basic (BA-CVA) or standardised (SA-CVA); no internal models |
| Operational risk | Basic indicator, standardised or advanced models | One standardised measurement approach |
| Market risk | Basel 2.5: VaR and stressed VaR | FRTB, finalised in 2019 |
| Leverage ratio | 3% | 3%, plus a buffer for G-SIBs of half their surcharge |
| Counterparty exposure | Current exposure method (CEM) | SA-CCR — agreed in 2014, but implemented alongside the same packages |

### The output floor

$$
\text{RWA}_{\text{final}} = \max\left(\text{RWA}_{\text{internal models}},\; 72.5\% \times \text{RWA}_{\text{standardised}}\right)
$$

A bank's models give RWA of ₹5,000 crore; the same book under the SA gives ₹8,000 crore. The floor is 72.5% × 8,000 = ₹5,800 crore, so it binds. With CET1 of ₹700 crore, the ratio falls from 14.0% to 12.07% — without a single loan changing.

The floor applies to the whole bank, not loan by loan, so a bank can still hold some very low RWAs as long as its total clears the floor.

<svg viewBox="0 0 400 346" width="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Step chart: the output floor rises from 50% towards 72.5%; the Basel timetable reached it in 2028, the EU phases in from 2025 and the UK from 2027, both reaching 72.5% in 2030" style="width:100%;max-width:400px;height:auto;display:block;margin:1rem auto">
<g font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#1f2937">
<text x="200" y="24" font-size="16" text-anchor="middle" font-weight="700">Output floor phase-in</text>
<line x1="70" y1="260.0" x2="376" y2="260.0" stroke="#e5e7eb"/>
<text x="64" y="265" text-anchor="end" fill="#4b5563">50%</text>
<line x1="70" y1="200.0" x2="376" y2="200.0" stroke="#e5e7eb"/>
<text x="64" y="205" text-anchor="end" fill="#4b5563">60%</text>
<line x1="70" y1="140.0" x2="376" y2="140.0" stroke="#e5e7eb"/>
<text x="64" y="145" text-anchor="end" fill="#4b5563">70%</text>
<line x1="89.1" y1="290" x2="89.1" y2="295" stroke="#9ca3af"/>
<text x="89" y="312" text-anchor="middle" fill="#4b5563">23</text>
<line x1="165.7" y1="290" x2="165.7" y2="295" stroke="#9ca3af"/>
<text x="166" y="312" text-anchor="middle" fill="#4b5563">25</text>
<line x1="242.3" y1="290" x2="242.3" y2="295" stroke="#9ca3af"/>
<text x="242" y="312" text-anchor="middle" fill="#4b5563">27</text>
<line x1="318.9" y1="290" x2="318.9" y2="295" stroke="#9ca3af"/>
<text x="319" y="312" text-anchor="middle" fill="#4b5563">29</text>
<line x1="70" y1="290" x2="376" y2="290" stroke="#9ca3af" stroke-width="1.2"/>
<line x1="70" y1="110" x2="70" y2="290" stroke="#9ca3af" stroke-width="1.2"/>
<text x="223" y="334" text-anchor="middle" fill="#4b5563">Year (20xx)</text>
<polyline points="70.0,260.0 108.3,260.0 108.3,230.0 146.6,230.0 146.6,200.0 184.9,200.0 184.9,170.0 223.2,170.0 223.2,140.0 261.5,140.0 261.5,125.0 299.8,125.0 299.8,125.0 338.1,125.0 338.1,125.0 376.4,125.0" fill="none" stroke="#9ca3af" stroke-width="2.5" stroke-linejoin="round" stroke-dasharray="6 5"/>
<polyline points="146.6,260.0 184.9,260.0 184.9,230.0 223.2,230.0 223.2,200.0 261.5,200.0 261.5,170.0 299.8,170.0 299.8,140.0 338.1,140.0 338.1,125.0 376.4,125.0" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linejoin="round"/>
<polyline points="223.2,200.0 261.5,200.0 261.5,170.0 299.8,170.0 299.8,140.0 338.1,140.0 338.1,125.0 376.4,125.0" fill="none" stroke="#f43f5e" stroke-width="3" stroke-linejoin="round"/>
<polyline points="70.0,125.0 376.4,125.0" fill="none" stroke="#8b5cf6" stroke-width="1.5" stroke-linejoin="round" stroke-dasharray="2 4"/>
<text x="74" y="119" fill="#6d28d9">72.5% end state</text>
<line x1="74" y1="39" x2="96" y2="39" stroke="#9ca3af" stroke-width="3" stroke-dasharray="6 5"/>
<text x="104" y="44">Basel Committee timetable</text>
<line x1="74" y1="61" x2="96" y2="61" stroke="#3b82f6" stroke-width="3"/>
<text x="104" y="66">EU (CRR3)</text>
<line x1="74" y1="83" x2="96" y2="83" stroke="#f43f5e" stroke-width="3"/>
<text x="104" y="88">UK [verify]</text>
</g>
</svg>

### Who feels it most

| Hit hardest | Why |
|---|---|
| IRB banks with low-risk mortgage books, common in Europe | IRB mortgage weights of 5–15% sit far below the SA's 20% and up |
| IRB banks lending to large unrated corporates | The floor measures them at 100% under the SA (65% under some transitional or US-style treatments) |
| Banks with large undrawn, cancellable lines | The CCF rises from 0% to 10% |
| Trading banks | FRTB, and the end of internal CVA models |
| SA banks | Mixed: some weights fall (BBB corporates, low-LTV mortgages, SMEs), some rise |

### Who implements, and when

| Jurisdiction | Status |
|---|---|
| Basel Committee | Agreed 2017; implementation date 1 January 2023; output floor phased in to 72.5% by 2028 |
| EU (CRR3) | Applies from 1 January 2025; floor starts at 50% in 2025 and reaches 72.5% in 2030, with some transitions running to 2032; FRTB market risk from 1 January 2027, with temporary relief [verify] |
| UK (Basel 3.1) | From 1 January 2027, after two delays; fully implemented, floor included, by 1 January 2030 [verify] |
| US (endgame) | The 2023 proposal was withdrawn; a re-proposal of 19 March 2026 has an "expanded risk-based approach" for the largest banks and revisions to the standardised approach for the rest; final rule and dates pending [verify] |
| India (RBI) | Standardised approach only — no bank uses IRB. Revised credit risk SA from 1 April 2027; SA-CCR proposed from 1 April 2027; a new operational risk approach issued, with its start date not yet notified [verify] |

### Check yourself

1. In one sentence, how does Basel 3.1 differ from Basel 3?
2. Models give RWA of ₹10,000 crore; the SA would give ₹12,000 crore. Does a 72.5% floor bind?
3. Why did Basel 3.1 remove A-IRB for banks and large corporates?

<details>
<summary>Answers</summary>

1. Basel 3 raised the quantity and quality of capital; Basel 3.1 makes the risk-weighted assets it is measured against more credible and comparable, by limiting internal models and making the standardised approaches more risk-sensitive.
2. 72.5% × 12,000 = ₹8,700 crore, which is below ₹10,000 crore — so no; the modelled RWA stands.
3. They are low-default portfolios: too few defaults to estimate LGD and EAD reliably, which produced the widest differences in RWA between banks.

</details>

## Part 8 — Counterparty credit risk and CVA

A loan's exposure is known: it is the balance. A derivative's exposure depends on markets. That one difference needs its own toolkit.

| | Loan | Derivative |
|---|---|---|
| Exposure today | The balance | What the contract is worth to you now, if positive |
| Exposure tomorrow | Follows a known schedule | Uncertain — moves with rates, currencies and prices |
| Who is at risk | Only the lender | Either side, depending on who is owed money |
| Measured with | Drawn balance plus CCF | Exposure simulation, or SA-CCR |

Take a five-year interest rate swap on ₹500 crore with a company: the bank pays a fixed rate and receives a floating one. On day one the swap is worth nothing to either side. If rates rise, the floating payments the bank receives grow, and the swap becomes worth money to the bank — so if the company then defaults, the bank loses that value. If rates fall, the bank owes the company, and it is the company that is exposed.

### Measuring exposure

| Measure | Meaning |
|---|---|
| Current exposure (CE), or replacement cost | Today's value if positive: max(value, 0) |
| Expected exposure (EE) | The average positive exposure at a future date, across simulated market paths |
| Potential future exposure (PFE) | A high percentile — say 95% — of exposure at a future date: a bad-but-plausible case, used for limits |
| Expected positive exposure (EPE) | EE averaged over time |
| Effective EPE (EEPE) | EPE with the profile not allowed to fall — used for internal-model capital |

<svg viewBox="0 0 400 352" width="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Chart: expected exposure and 95% potential future exposure of a five-year interest rate swap rise, peak around years one to two, and fall to zero at maturity" style="width:100%;max-width:400px;height:auto;display:block;margin:1rem auto">
<g font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#1f2937">
<text x="200" y="24" font-size="16" text-anchor="middle" font-weight="700">Exposure over a 5-year swap&#x27;s life</text>
<line x1="70" y1="296.0" x2="376" y2="296.0" stroke="#e5e7eb"/>
<text x="64" y="301" text-anchor="end" fill="#4b5563">0</text>
<line x1="70" y1="246.0" x2="376" y2="246.0" stroke="#e5e7eb"/>
<text x="64" y="251" text-anchor="end" fill="#4b5563">10</text>
<line x1="70" y1="196.0" x2="376" y2="196.0" stroke="#e5e7eb"/>
<text x="64" y="201" text-anchor="end" fill="#4b5563">20</text>
<line x1="70" y1="146.0" x2="376" y2="146.0" stroke="#e5e7eb"/>
<text x="64" y="151" text-anchor="end" fill="#4b5563">30</text>
<line x1="70" y1="96.0" x2="376" y2="96.0" stroke="#e5e7eb"/>
<text x="64" y="101" text-anchor="end" fill="#4b5563">40</text>
<line x1="70.0" y1="296" x2="70.0" y2="301" stroke="#9ca3af"/>
<text x="70" y="318" text-anchor="middle" fill="#4b5563">0</text>
<line x1="131.2" y1="296" x2="131.2" y2="301" stroke="#9ca3af"/>
<text x="131" y="318" text-anchor="middle" fill="#4b5563">1</text>
<line x1="192.4" y1="296" x2="192.4" y2="301" stroke="#9ca3af"/>
<text x="192" y="318" text-anchor="middle" fill="#4b5563">2</text>
<line x1="253.6" y1="296" x2="253.6" y2="301" stroke="#9ca3af"/>
<text x="254" y="318" text-anchor="middle" fill="#4b5563">3</text>
<line x1="314.8" y1="296" x2="314.8" y2="301" stroke="#9ca3af"/>
<text x="315" y="318" text-anchor="middle" fill="#4b5563">4</text>
<line x1="376.0" y1="296" x2="376.0" y2="301" stroke="#9ca3af"/>
<text x="376" y="318" text-anchor="middle" fill="#4b5563">5</text>
<line x1="70" y1="296" x2="376" y2="296" stroke="#9ca3af" stroke-width="1.2"/>
<line x1="70" y1="96" x2="70" y2="296" stroke="#9ca3af" stroke-width="1.2"/>
<text x="223" y="340" text-anchor="middle" fill="#4b5563">Years</text>
<text x="16" y="196" text-anchor="middle" fill="#4b5563" transform="rotate(-90 16 196)">₹ crore</text>
<polygon points="70.0,296.0 70.0,296.0 73.1,253.6 76.1,236.6 79.2,224.0 82.2,213.7 85.3,205.0 88.4,197.4 91.4,190.6 94.5,184.5 97.5,179.1 100.6,174.1 103.7,169.5 106.7,165.4 109.8,161.6 112.8,158.2 115.9,155.0 119.0,152.1 122.0,149.4 125.1,147.0 128.1,144.7 131.2,142.7 134.3,140.9 137.3,139.3 140.4,137.8 143.4,136.5 146.5,135.4 149.6,134.4 152.6,133.5 155.7,132.8 158.7,132.2 161.8,131.8 164.9,131.4 167.9,131.2 171.0,131.1 174.0,131.1 177.1,131.3 180.2,131.5 183.2,131.8 186.3,132.3 189.3,132.8 192.4,133.4 195.5,134.2 198.5,135.0 201.6,135.9 204.6,136.9 207.7,137.9 210.8,139.1 213.8,140.3 216.9,141.7 219.9,143.1 223.0,144.5 226.1,146.1 229.1,147.7 232.2,149.4 235.2,151.2 238.3,153.0 241.4,154.9 244.4,156.9 247.5,159.0 250.5,161.1 253.6,163.3 256.7,165.5 259.7,167.8 262.8,170.2 265.8,172.6 268.9,175.1 272.0,177.7 275.0,180.3 278.1,183.0 281.1,185.7 284.2,188.5 287.3,191.3 290.3,194.2 293.4,197.2 296.4,200.2 299.5,203.3 302.6,206.4 305.6,209.5 308.7,212.8 311.7,216.0 314.8,219.4 317.9,222.7 320.9,226.2 324.0,229.7 327.0,233.2 330.1,236.8 333.2,240.4 336.2,244.1 339.3,247.8 342.3,251.5 345.4,255.4 348.5,259.2 351.5,263.1 354.6,267.1 357.6,271.1 360.7,275.1 363.8,279.2 366.8,283.3 369.9,287.5 372.9,291.7 376.0,296.0 376.0,296.0" fill="#f43f5e" fill-opacity="0.1" stroke="none"/>
<polyline points="70.0,296.0 73.1,253.6 76.1,236.6 79.2,224.0 82.2,213.7 85.3,205.0 88.4,197.4 91.4,190.6 94.5,184.5 97.5,179.1 100.6,174.1 103.7,169.5 106.7,165.4 109.8,161.6 112.8,158.2 115.9,155.0 119.0,152.1 122.0,149.4 125.1,147.0 128.1,144.7 131.2,142.7 134.3,140.9 137.3,139.3 140.4,137.8 143.4,136.5 146.5,135.4 149.6,134.4 152.6,133.5 155.7,132.8 158.7,132.2 161.8,131.8 164.9,131.4 167.9,131.2 171.0,131.1 174.0,131.1 177.1,131.3 180.2,131.5 183.2,131.8 186.3,132.3 189.3,132.8 192.4,133.4 195.5,134.2 198.5,135.0 201.6,135.9 204.6,136.9 207.7,137.9 210.8,139.1 213.8,140.3 216.9,141.7 219.9,143.1 223.0,144.5 226.1,146.1 229.1,147.7 232.2,149.4 235.2,151.2 238.3,153.0 241.4,154.9 244.4,156.9 247.5,159.0 250.5,161.1 253.6,163.3 256.7,165.5 259.7,167.8 262.8,170.2 265.8,172.6 268.9,175.1 272.0,177.7 275.0,180.3 278.1,183.0 281.1,185.7 284.2,188.5 287.3,191.3 290.3,194.2 293.4,197.2 296.4,200.2 299.5,203.3 302.6,206.4 305.6,209.5 308.7,212.8 311.7,216.0 314.8,219.4 317.9,222.7 320.9,226.2 324.0,229.7 327.0,233.2 330.1,236.8 333.2,240.4 336.2,244.1 339.3,247.8 342.3,251.5 345.4,255.4 348.5,259.2 351.5,263.1 354.6,267.1 357.6,271.1 360.7,275.1 363.8,279.2 366.8,283.3 369.9,287.5 372.9,291.7 376.0,296.0" fill="none" stroke="#f43f5e" stroke-width="3" stroke-linejoin="round"/>
<polyline points="70.0,296.0 73.1,285.7 76.1,281.6 79.2,278.5 82.2,276.0 85.3,273.9 88.4,272.1 91.4,270.4 94.5,268.9 97.5,267.6 100.6,266.4 103.7,265.3 106.7,264.3 109.8,263.4 112.8,262.5 115.9,261.8 119.0,261.1 122.0,260.4 125.1,259.8 128.1,259.3 131.2,258.8 134.3,258.4 137.3,258.0 140.4,257.6 143.4,257.3 146.5,257.0 149.6,256.8 152.6,256.6 155.7,256.4 158.7,256.2 161.8,256.1 164.9,256.1 167.9,256.0 171.0,256.0 174.0,256.0 177.1,256.0 180.2,256.1 183.2,256.2 186.3,256.3 189.3,256.4 192.4,256.5 195.5,256.7 198.5,256.9 201.6,257.1 204.6,257.4 207.7,257.6 210.8,257.9 213.8,258.2 216.9,258.5 219.9,258.9 223.0,259.2 226.1,259.6 229.1,260.0 232.2,260.4 235.2,260.9 238.3,261.3 241.4,261.8 244.4,262.2 247.5,262.7 250.5,263.3 253.6,263.8 256.7,264.3 259.7,264.9 262.8,265.5 265.8,266.1 268.9,266.7 272.0,267.3 275.0,267.9 278.1,268.6 281.1,269.2 284.2,269.9 287.3,270.6 290.3,271.3 293.4,272.0 296.4,272.7 299.5,273.5 302.6,274.2 305.6,275.0 308.7,275.8 311.7,276.6 314.8,277.4 317.9,278.2 320.9,279.1 324.0,279.9 327.0,280.8 330.1,281.6 333.2,282.5 336.2,283.4 339.3,284.3 342.3,285.2 345.4,286.1 348.5,287.1 351.5,288.0 354.6,289.0 357.6,290.0 360.7,290.9 363.8,291.9 366.8,292.9 369.9,293.9 372.9,295.0 376.0,296.0" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linejoin="round"/>
<line x1="74" y1="39" x2="96" y2="39" stroke="#f43f5e" stroke-width="3"/>
<text x="104" y="44">PFE 95% — a bad-but-plausible case</text>
<line x1="74" y1="61" x2="96" y2="61" stroke="#3b82f6" stroke-width="3"/>
<text x="104" y="66">EE — average exposure</text>
</g>
</svg>

A swap's exposure is hump-shaped: it grows as rates have time to move, then falls as fewer payments remain, reaching zero at maturity. An FX forward's exposure only grows, because the whole notional is exchanged at the end.

### Netting and collateral

Under an **ISDA master agreement**, all the trades with one counterparty form a single **netting set**. On default they are closed out together and only the net amount is owed.

<svg viewBox="0 0 400 276" width="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bars: three derivative trades create 13 crore of exposure without netting, 7 crore once netted, and 2 crore after collateral" style="width:100%;max-width:400px;height:auto;display:block;margin:1rem auto">
<g font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#1f2937">
<text x="200" y="24" font-size="16" text-anchor="middle" font-weight="700">Netting and collateral shrink exposure</text>
<text x="12" y="54" font-weight="600">Three trades, no netting</text>
<rect x="12" y="64" width="260" height="28" rx="4" fill="#f43f5e" fill-opacity="0.75"/>
<text x="280" y="84" font-weight="700">₹13 crore</text>
<text x="12" y="124" font-weight="600">One netting set (ISDA)</text>
<rect x="12" y="134" width="140" height="28" rx="4" fill="#f59e0b" fill-opacity="0.75"/>
<text x="160" y="154" font-weight="700">₹7 crore</text>
<text x="12" y="194" font-weight="600">Net, after ₹5 cr collateral</text>
<rect x="12" y="204" width="40" height="28" rx="4" fill="#10b981" fill-opacity="0.75"/>
<text x="60" y="224" font-weight="700">₹2 crore</text>
<text x="200" y="264" text-anchor="middle" fill="#4b5563">Trades worth +10, −6 and +3 to the bank</text>
</g>
</svg>

Three trades worth +10, −6 and +3 to the bank: without netting, the exposure is 10 + 3 = 13; with netting, 10 − 6 + 3 = 7. A **credit support annex (CSA)** adds collateral:

| CSA term | Meaning |
|---|---|
| Variation margin (VM) | Collateral exchanged daily to cover the current value |
| Initial margin (IM) | Extra collateral against the value moving before a defaulter's trades can be closed out |
| Threshold | The exposure allowed before any collateral is called |
| Minimum transfer amount (MTA) | The smallest call worth making |
| Margin period of risk (MPOR) | The time from the last good collateral exchange to closing out — typically 10 business days |
| Eligible collateral and haircuts | What may be posted, and how its value is discounted |

With ₹5 crore of collateral held, the netted exposure of 7 falls to 2. Margin rules for **non-centrally cleared derivatives** now make VM — and, for larger firms, IM — compulsory in the major markets, including India since 2024 [verify].

### SA-CCR

The **standardised approach for counterparty credit risk** sets the regulatory EAD for derivatives:

$$
\text{EAD} = \alpha \times (\text{RC} + \text{PFE})
$$

where α is 1.4; RC is the replacement cost (the net value less collateral, floored at zero); and PFE is a multiplier times an aggregate add-on. Each trade's add-on is its adjusted notional × a supervisory factor × a maturity factor, aggregated by asset class and hedging set. The multiplier gives credit for over-collateralisation and for positions that are out of the money.

For the swap, unmargined, worth ₹8 crore to the bank, with five years left:

| Step | Value |
|---|---|
| Supervisory duration = (1 − e^(−0.05 × 5)) ÷ 0.05 | 4.424 |
| Adjusted notional = 500 × 4.424 | 2,212 |
| Add-on = 2,212 × 0.5% (the interest rate supervisory factor) × maturity factor 1 | 11.06 |
| PFE, with a multiplier of 1 because the trade is in the money | 11.06 |
| RC | 8.00 |
| **EAD = 1.4 × (8.00 + 11.06)** | **₹26.68 crore** |

The older **current exposure method (CEM)** gives 8 + 0.5% × 500 = ₹10.5 crore. SA-CCR is more risk-sensitive — it properly rewards margining and netting — and for unmargined trades it often comes out higher.

Supervisory factors [verify]: interest rates 0.5%; FX 4%; single-name credit 0.38–6% by rating; single-name equity 32%; equity indices 20%; commodities 18% (electricity 40%).

India still uses CEM; SA-CCR is proposed from 1 April 2027 [verify].

### Central clearing

Since the G20 commitments of 2009, standardised OTC derivatives must be cleared through **central counterparties (CCPs)**, which stand between the two sides and hold margin and default funds. Trade exposures to a qualifying CCP carry a 2% risk weight; contributions to its default fund get a separate charge.

### Wrong-way risk

Wrong-way risk is exposure to a counterparty rising exactly as its credit quality falls.

- **General** — through the market. An Indian company with rupee revenues has sold dollars forward to the bank. If the rupee collapses, the bank's exposure to the company soars at the very moment the company, earning rupees and owing dollars, is at its weakest.
- **Specific** — through a legal or structural link. A company posts its own shares as collateral; or a bank buys protection on a company from that company's own affiliate.

Wrong-way risk must be identified, reported and — for specific wrong-way trades — capitalised as though the counterparty had already defaulted.

### Securities financing

Repos and securities lending are short, collateralised loans of cash or securities. The exposure is what was lent less the collateral, both adjusted with haircuts — the comprehensive formula from Part 4 again.

### CVA

A derivative with a risky counterparty is worth less than the same derivative with a risk-free one. The difference is the **credit valuation adjustment (CVA)** — the market value of counterparty default risk.

$$
\text{CVA} \approx \text{LGD} \times \sum_{i} \text{EE}(t_i) \times \text{PD}(t_{i-1}, t_i) \times \text{DF}(t_i)
$$

where, for each period i: EE is the expected exposure; PD is the counterparty's chance of defaulting in that period, implied from its credit spread in the market; and DF discounts to today.

The swap's counterparty has a credit default swap spread of 2% and an assumed LGD of 60%, which implies a default rate of about 3.33% a year. Discounting at 6%:

| Year | EE, ₹ crore | PD in the year | Discount factor | LGD × EE × PD × DF |
|---|---|---|---|---|
| 1 | 6 | 3.28% | 0.942 | 0.111 |
| 2 | 8 | 3.17% | 0.887 | 0.135 |
| 3 | 7 | 3.07% | 0.835 | 0.108 |
| 4 | 5 | 2.97% | 0.787 | 0.070 |
| 5 | 2 | 2.87% | 0.741 | 0.026 |
| **CVA** | | | | **₹0.45 crore** |

The bank marks the swap about ₹45 lakh below its risk-free value. If the company's credit spread widens, CVA rises and the bank books a loss — even though nobody has defaulted.

**Why CVA has its own capital charge.** The Basel Committee found that in 2008 about two-thirds of counterparty credit losses came from CVA mark-to-market losses, and only a third from actual defaults. So Basel III added a CVA risk capital charge.

| | Basel 3 | Basel 3.1 |
|---|---|---|
| Methods | Standardised; or advanced, using internal models for exposure and VaR for credit spreads | Basic approach, BA-CVA (reduced, or full with hedges recognised); standardised approach, SA-CVA (sensitivity-based, needs approval) |
| Small-book option | — | Banks with up to €100 billion notional of non-centrally cleared derivatives may set CVA capital equal to their counterparty credit risk capital [verify] |
| Scope | Derivatives | Derivatives, and securities financing held at fair value |

The EU exempts trades with non-financial corporates, pension funds and sovereigns from CVA capital [verify].

**The XVA family.** CVA has relatives: **DVA** (debit valuation adjustment — the bank's own default risk, which paradoxically becomes a gain when its own credit worsens, so regulators strip it out of capital), **FVA** (the funding cost of uncollateralised trades), **ColVA** (collateral terms), **KVA** (the cost of capital) and **MVA** (the cost of initial margin).

| | Accounting CVA | Regulatory CVA risk |
|---|---|---|
| Question | What is the fair-value adjustment today? | How far could CVA move in a bad year? |
| Rulebook | IFRS 13, fair value measurement | The Basel CVA framework |
| Output | A profit-and-loss number | RWA and capital |

### Where credit meets market risk

Counterparty risk joins the two disciplines. Exposure simulation runs on the market risk team's models for rates, FX and prices. CVA is a market risk position, hedged with credit default swaps. Collateral values move with markets. And a derivative's credit limit is a PFE limit, not a loan amount. The data spans both worlds — trades, netting sets, CSAs, collateral balances, market data and counterparty ratings — and all of it must join correctly.

### Assessing financial counterparties

Banks, NBFCs, insurers and funds are rated like corporates, but on different measures, often summarised as **CAMELS**:

| Letter | Checks |
|---|---|
| Capital | Capital ratios, leverage |
| Asset quality | NPAs, provisioning, concentration |
| Management | Governance, risk management, strategy |
| Earnings | Profitability, and how stable it is |
| Liquidity | Liquidity ratios, funding mix |
| Sensitivity | Exposure to rate, FX and market moves |

For investment funds the questions shift to strategy, leverage, the liquidity of the assets, redemption terms and transparency.

### Check yourself

1. Why is the exposure on an FX forward shaped differently from the exposure on an interest rate swap?
2. Three trades are worth +12, −9 and +2. What is the exposure with and without netting?
3. What is CVA, and why did regulators give it a capital charge?
4. Give one general and one specific example of wrong-way risk.

<details>
<summary>Answers</summary>

1. The FX forward exchanges its whole notional at the end, so the uncertainty keeps growing to maturity. The swap's remaining payments shrink over time, so its exposure rises, peaks and falls.
2. Without netting, 12 + 2 = 14. With netting, 12 − 9 + 2 = 5.
3. The market price of counterparty default risk — how much a derivative's value is marked down for the chance the counterparty defaults. It moves every day with credit spreads, and in 2008 CVA losses were about twice as large as losses from actual defaults.
4. General: a company with rupee revenues that has sold dollars forward to the bank — a rupee collapse raises the exposure and weakens the company together. Specific: accepting a counterparty's own shares as collateral.

</details>

## Part 9 — Models, and how to prove them

Every number so far — PDs, LGDs, CCFs, ECL, RWA — came out of a model. Models go wrong in ways that cost money, so every model is built, independently validated, approved and watched.

| Parameter | Retail | SME | Corporate | Banks and sovereigns |
|---|---|---|---|---|
| PD | Application and behavioural scorecards, usually logistic regression | Scorecards on bureau, GST and bank data, with analyst overrides | Rating models: financial ratios plus qualitative factors, expert-weighted or statistical | Low-default portfolios: expert models, or "shadow ratings" calibrated to agency ratings |
| LGD | Cure-rate models; workout data by product | Workout LGD by collateral type | Workout LGD by seniority and collateral | Market-implied or expert |
| EAD and CCF | Balance and limit-utilisation models | Utilisation models | Drawdown models by facility type | Mostly supervisory |
| IFRS 9 | Conversion to point-in-time with macro satellite models; lifetime term structures | The same | The same | The same |

### How a scorecard is built

| Step | What happens |
|---|---|
| Define "bad" | For example, 90 or more days past due within 12 months of the observation date |
| Set the windows | An observation date and a 12-month outcome window after it; a development sample plus a later, out-of-time sample |
| Prepare the data | Clean it, treat missing values, exclude frauds and policy declines |
| Bin the variables | Group values into bins with steady bad rates |
| Measure strength | Weight of evidence and information value for each variable |
| Fit | Logistic regression on the weight-of-evidence values |
| Scale | Convert the log-odds into points |
| Validate | Discrimination, calibration and stability on out-of-time data |
| Set cut-offs | Balance the approval rate against the bad rate and profit |

**Weight of evidence (WoE)** measures how well a bin separates goods from bads. **Information value (IV)** adds that up across the bins into one score for the variable:

$$
\begin{gathered}
\text{WoE}_i = \ln\left(\frac{\%\,\text{goods}_i}{\%\,\text{bads}_i}\right) \\[6pt]
\text{IV} = \sum_i \left(\%\,\text{goods}_i - \%\,\text{bads}_i\right) \times \text{WoE}_i
\end{gathered}
$$

where the percentages are each bin's share of all goods and of all bads.

FOIR as a scorecard variable, on 7,500 goods and 500 bads:

| FOIR bin | Goods | Bads | % of goods | % of bads | WoE | Bad rate |
|---|---|---|---|---|---|---|
| Below 30% | 3,000 | 90 | 40.0% | 18.0% | 0.799 | 2.9% |
| 30–45% | 2,700 | 160 | 36.0% | 32.0% | 0.118 | 5.6% |
| 45–60% | 1,400 | 150 | 18.7% | 30.0% | −0.474 | 9.7% |
| Above 60% | 400 | 100 | 5.3% | 20.0% | −1.322 | 20.0% |

IV = 0.428: a strong variable. The usual reading: below 0.02 useless; 0.02–0.1 weak; 0.1–0.3 medium; 0.3–0.5 strong; above 0.5 suspiciously strong — check for leakage from the outcome.

**Scaling.** A scorecard states what a score means — for example, 600 points means odds of 50 goods to 1 bad, and every 20 points doubles the odds (the **points to double the odds**, PDO):

$$
\begin{gathered}
\text{Score} = \text{Offset} + \text{Factor} \times \ln(\text{odds}) \\[6pt]
\text{Factor} = \frac{\text{PDO}}{\ln 2}
\end{gathered}
$$

Here Factor = 20 ÷ ln 2 = 28.85, and Offset = 600 − 28.85 × ln 50 = 487.12. A score of 620 means odds of 100 to 1; 560 means 12.5 to 1; and 600 means a PD of 1 ÷ 51 = 1.96%.

Two more words from scorecard work. **Reject inference** estimates how declined applicants would have performed, since the bank never sees their outcomes. **Overrides** are underwriters reversing the score's decision — tracked closely, because frequent overrides mean nobody trusts the model.

### The model lifecycle and model risk

<svg viewBox="0 0 400 526" width="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The model lifecycle from business need through data, development, documentation, independent validation, approval, implementation, use and monitoring to annual review, looping back to redevelopment" style="width:100%;max-width:400px;height:auto;display:block;margin:1rem auto">
<g font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#1f2937">
<text x="200" y="24" font-size="16" text-anchor="middle" font-weight="700">The life of a model</text>
<rect x="12" y="44" width="330" height="36" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
<text x="24" y="67" font-weight="600" fill="#1d4ed8">Need</text>
<text x="330" y="67" text-anchor="end" fill="#4b5563">the business question</text>
<line x1="177.0" y1="81.0" x2="177.0" y2="83.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="177.0,91.0 181.0,83.0 173.0,83.0" fill="#6b7280"/>
<rect x="12" y="92" width="330" height="36" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
<text x="24" y="115" font-weight="600" fill="#1d4ed8">Data</text>
<text x="330" y="115" text-anchor="end" fill="#4b5563">sample, definitions</text>
<line x1="177.0" y1="129.0" x2="177.0" y2="131.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="177.0,139.0 181.0,131.0 173.0,131.0" fill="#6b7280"/>
<rect x="12" y="140" width="330" height="36" rx="8" fill="#f0fdfa" stroke="#14b8a6" stroke-width="1.5"/>
<text x="24" y="163" font-weight="600" fill="#0f766e">Develop</text>
<text x="330" y="163" text-anchor="end" fill="#4b5563">variables, fit, test</text>
<line x1="177.0" y1="177.0" x2="177.0" y2="179.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="177.0,187.0 181.0,179.0 173.0,179.0" fill="#6b7280"/>
<rect x="12" y="188" width="330" height="36" rx="8" fill="#f0fdfa" stroke="#14b8a6" stroke-width="1.5"/>
<text x="24" y="211" font-weight="600" fill="#0f766e">Document</text>
<text x="330" y="211" text-anchor="end" fill="#4b5563">method, limits</text>
<line x1="177.0" y1="225.0" x2="177.0" y2="227.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="177.0,235.0 181.0,227.0 173.0,227.0" fill="#6b7280"/>
<rect x="12" y="236" width="330" height="36" rx="8" fill="#f5f3ff" stroke="#8b5cf6" stroke-width="1.5"/>
<text x="24" y="259" font-weight="600" fill="#6d28d9">Validate</text>
<text x="330" y="259" text-anchor="end" fill="#4b5563">independent team</text>
<line x1="177.0" y1="273.0" x2="177.0" y2="275.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="177.0,283.0 181.0,275.0 173.0,275.0" fill="#6b7280"/>
<rect x="12" y="284" width="330" height="36" rx="8" fill="#f5f3ff" stroke="#8b5cf6" stroke-width="1.5"/>
<text x="24" y="307" font-weight="600" fill="#6d28d9">Approve</text>
<text x="330" y="307" text-anchor="end" fill="#4b5563">model committee</text>
<line x1="177.0" y1="321.0" x2="177.0" y2="323.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="177.0,331.0 181.0,323.0 173.0,323.0" fill="#6b7280"/>
<rect x="12" y="332" width="330" height="36" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
<text x="24" y="355" font-weight="600" fill="#047857">Implement</text>
<text x="330" y="355" text-anchor="end" fill="#4b5563">build, UAT</text>
<line x1="177.0" y1="369.0" x2="177.0" y2="371.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="177.0,379.0 181.0,371.0 173.0,371.0" fill="#6b7280"/>
<rect x="12" y="380" width="330" height="36" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
<text x="24" y="403" font-weight="600" fill="#047857">Use</text>
<text x="330" y="403" text-anchor="end" fill="#4b5563">decisions, reports</text>
<line x1="177.0" y1="417.0" x2="177.0" y2="419.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="177.0,427.0 181.0,419.0 173.0,419.0" fill="#6b7280"/>
<rect x="12" y="428" width="330" height="36" rx="8" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
<text x="24" y="451" font-weight="600" fill="#b45309">Monitor</text>
<text x="330" y="451" text-anchor="end" fill="#4b5563">Gini, calibration, PSI</text>
<line x1="177.0" y1="465.0" x2="177.0" y2="467.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="177.0,475.0 181.0,467.0 173.0,467.0" fill="#6b7280"/>
<rect x="12" y="476" width="330" height="36" rx="8" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
<text x="24" y="499" font-weight="600" fill="#b45309">Annual review</text>
<text x="330" y="499" text-anchor="end" fill="#4b5563">keep, fix or retire</text>
<polyline points="342,494 376,494 376,158 350,158" fill="none" stroke="#b45309" stroke-width="1.8" stroke-dasharray="5 4"/>
<line x1="360.0" y1="158.0" x2="352.0" y2="158.0" stroke="#b45309" stroke-width="1.6"/>
<polygon points="344.0,158.0 352.0,162.0 352.0,154.0" fill="#b45309"/>
</g>
</svg>

| Framework | Where |
|---|---|
| SR 11-7, supervisory guidance on model risk management (2011) | US — Federal Reserve and OCC |
| SS1/23, model risk management principles (effective May 2024) | UK — PRA |
| ECB guide to internal models | Euro area |
| RBI guidance on model risk in credit [verify] | India |

The common ground: a complete **model inventory**; **tiering** by materiality; **independent validation** before first use and periodically afterwards; clear ownership; documented limitations; and board-level oversight of model risk.

What validators check:

| Area | Question |
|---|---|
| Conceptual soundness | Is the method right for the purpose and the data? |
| Data | Is the sample representative, complete and correctly defined? |
| Implementation | Does the system reproduce the model exactly? Validators recompute scores to prove it |
| Discrimination | Does the model rank risky borrowers above safe ones? |
| Calibration | Are the PD levels right? |
| Stability | Is today's population like the one the model was built on? |
| Use | Is it used as intended, and how often is it overridden? |
| Benchmarking | How does it compare with challenger models or external ratings? |

### Discrimination: does it rank?

**The confusion matrix.** Pick a cut-off — say, decline anyone with a PD above 4% — and count four outcomes across 10,000 past loans that produced 500 defaults:

<svg viewBox="0 0 400 322" width="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Confusion matrix: 350 true positives, 1,900 false positives, 150 false negatives and 7,600 true negatives out of 10,000 loans" style="width:100%;max-width:400px;height:auto;display:block;margin:1rem auto">
<g font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#1f2937">
<text x="200" y="24" font-size="16" text-anchor="middle" font-weight="700">Confusion matrix at one cut-off</text>
<text x="265" y="56" text-anchor="middle" font-weight="600" fill="#4b5563">What actually happened</text>
<text x="200" y="80" text-anchor="middle" font-weight="700">Defaulted</text>
<text x="330" y="80" text-anchor="middle" font-weight="700">Repaid</text>
<rect x="135" y="92" width="128" height="90" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
<text x="199" y="122" text-anchor="middle" font-weight="600" fill="#047857">350</text>
<text x="199" y="142" text-anchor="middle">true positive</text>
<text x="199" y="162" text-anchor="middle">caught</text>
<rect x="265" y="92" width="128" height="90" rx="8" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
<text x="329" y="122" text-anchor="middle" font-weight="600" fill="#b45309">1,900</text>
<text x="329" y="142" text-anchor="middle">false positive</text>
<text x="329" y="162" text-anchor="middle">good refused</text>
<rect x="135" y="190" width="128" height="90" rx="8" fill="#fff1f2" stroke="#f43f5e" stroke-width="1.5"/>
<text x="199" y="220" text-anchor="middle" font-weight="600" fill="#be123c">150</text>
<text x="199" y="240" text-anchor="middle">false negative</text>
<text x="199" y="260" text-anchor="middle">missed default</text>
<rect x="265" y="190" width="128" height="90" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
<text x="329" y="220" text-anchor="middle" font-weight="600" fill="#047857">7,600</text>
<text x="329" y="240" text-anchor="middle">true negative</text>
<text x="329" y="260" text-anchor="middle">good, approved</text>
<text x="64" y="130" text-anchor="middle" font-weight="700">Model</text>
<text x="64" y="150" text-anchor="middle">says bad</text>
<text x="64" y="228" text-anchor="middle" font-weight="700">Model</text>
<text x="64" y="248" text-anchor="middle">says good</text>
<text x="200" y="310" text-anchor="middle" fill="#4b5563">10,000 loans · 500 defaults · 5% bad rate</text>
</g>
</svg>

In credit, "positive" means default.

| Metric | Formula | Value | Plain meaning |
|---|---|---|---|
| Accuracy | (TP + TN) ÷ all | 79.5% | Share of all calls that were right |
| Precision | TP ÷ (TP + FP) | 15.6% | Of those flagged bad, the share that were |
| Recall — sensitivity, true positive rate | TP ÷ (TP + FN) | 70.0% | Of the real defaulters, the share caught |
| Specificity — true negative rate | TN ÷ (TN + FP) | 80.0% | Of the good borrowers, the share passed |
| False positive rate | FP ÷ (FP + TN) | 20.0% | Of the good borrowers, the share wrongly flagged |
| F1 score | 2 × precision × recall ÷ (precision + recall) | 25.5% | One number balancing precision and recall |

TP, FP, FN and TN are true positives, false positives, false negatives and true negatives.

**The accuracy trap.** A "model" that approves everyone is 95% accurate here — and catches no defaulters at all. When only 5% default, accuracy is useless. Credit teams read recall and the false positive rate, and weigh them by cost: a missed default costs LGD × EAD; a refused good customer costs the margin you would have earned.

**ROC and AUROC.** Every cut-off gives one pair of numbers: a false positive rate and a true positive rate. Slide the cut-off across every possible score and plot the pairs: that is the **receiver operating characteristic (ROC) curve**.

<svg viewBox="0 0 400 380" width="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ROC curve of a model with area under the curve of 0.78, above the random diagonal and below the perfect corner" style="width:100%;max-width:400px;height:auto;display:block;margin:1rem auto">
<g font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#1f2937">
<text x="200" y="24" font-size="16" text-anchor="middle" font-weight="700">ROC curve: AUROC 0.78</text>
<line x1="70" y1="324.0" x2="370" y2="324.0" stroke="#e5e7eb"/>
<text x="64" y="329" text-anchor="end" fill="#4b5563">0</text>
<line x1="70" y1="184.0" x2="370" y2="184.0" stroke="#e5e7eb"/>
<text x="64" y="189" text-anchor="end" fill="#4b5563">0.5</text>
<line x1="70" y1="44.0" x2="370" y2="44.0" stroke="#e5e7eb"/>
<text x="64" y="49" text-anchor="end" fill="#4b5563">1</text>
<line x1="70.0" y1="324" x2="70.0" y2="329" stroke="#9ca3af"/>
<text x="70" y="346" text-anchor="middle" fill="#4b5563">0</text>
<line x1="220.0" y1="324" x2="220.0" y2="329" stroke="#9ca3af"/>
<text x="220" y="346" text-anchor="middle" fill="#4b5563">0.5</text>
<line x1="370.0" y1="324" x2="370.0" y2="329" stroke="#9ca3af"/>
<text x="370" y="346" text-anchor="middle" fill="#4b5563">1</text>
<line x1="70" y1="324" x2="370" y2="324" stroke="#9ca3af" stroke-width="1.2"/>
<line x1="70" y1="44" x2="70" y2="324" stroke="#9ca3af" stroke-width="1.2"/>
<text x="220" y="368" text-anchor="middle" fill="#4b5563">False positive rate</text>
<text x="16" y="184" text-anchor="middle" fill="#4b5563" transform="rotate(-90 16 184)">True positive rate</text>
<polygon points="70.0,324.0 70.0,323.5 70.0,323.4 70.0,323.3 70.0,323.3 70.0,323.2 70.0,323.1 70.0,322.9 70.0,322.8 70.0,322.6 70.0,322.5 70.0,322.3 70.1,322.1 70.1,321.9 70.1,321.6 70.1,321.4 70.1,321.1 70.1,320.7 70.1,320.4 70.2,320.0 70.2,319.6 70.2,319.1 70.2,318.6 70.3,318.0 70.3,317.4 70.4,316.8 70.4,316.1 70.5,315.4 70.5,314.5 70.6,313.7 70.7,312.7 70.8,311.7 70.9,310.7 71.0,309.5 71.1,308.3 71.2,307.0 71.4,305.6 71.6,304.1 71.8,302.5 72.0,300.9 72.2,299.1 72.5,297.3 72.7,295.3 73.1,293.3 73.4,291.1 73.8,288.9 74.2,286.5 74.6,284.0 75.1,281.4 75.6,278.8 76.2,276.0 76.8,273.1 77.5,270.0 78.2,266.9 79.0,263.7 79.9,260.4 80.8,256.9 81.8,253.4 82.8,249.8 83.9,246.1 85.2,242.3 86.4,238.4 87.8,234.4 89.3,230.4 90.8,226.3 92.5,222.1 94.2,217.9 96.1,213.6 98.0,209.2 100.1,204.9 102.2,200.5 104.5,196.0 106.9,191.6 109.4,187.1 112.0,182.7 114.8,178.2 117.6,173.7 120.6,169.3 123.6,164.9 126.8,160.5 130.1,156.1 133.6,151.8 137.1,147.6 140.7,143.4 144.5,139.2 148.3,135.2 152.3,131.2 156.3,127.3 160.5,123.4 164.7,119.7 169.0,116.0 173.4,112.5 177.8,109.0 182.3,105.6 186.9,102.4 191.5,99.2 196.2,96.1 200.9,93.2 205.7,90.3 210.4,87.6 215.2,85.0 220.0,82.5 224.8,80.1 229.6,77.8 234.3,75.6 239.1,73.5 243.8,71.5 248.5,69.6 253.1,67.8 257.7,66.1 262.2,64.5 266.6,63.0 271.0,61.6 275.3,60.2 279.5,59.0 283.7,57.8 287.7,56.7 291.7,55.7 295.5,54.7 299.3,53.8 302.9,53.0 306.4,52.2 309.9,51.5 313.2,50.8 316.4,50.2 319.4,49.6 322.4,49.1 325.2,48.6 328.0,48.2 330.6,47.8 333.1,47.4 335.5,47.1 337.8,46.8 339.9,46.5 342.0,46.2 343.9,46.0 345.8,45.8 347.5,45.6 349.2,45.4 350.7,45.3 352.2,45.1 353.6,45.0 354.8,44.9 356.1,44.8 357.2,44.7 358.2,44.6 359.2,44.5 360.1,44.5 361.0,44.4 361.8,44.4 362.5,44.3 363.2,44.3 363.8,44.2 364.4,44.2 364.9,44.2 365.4,44.2 365.8,44.1 366.2,44.1 366.6,44.1 366.9,44.1 367.3,44.1 367.5,44.1 367.8,44.1 368.0,44.0 368.2,44.0 368.4,44.0 368.6,44.0 368.8,44.0 368.9,44.0 369.0,44.0 369.1,44.0 369.2,44.0 369.3,44.0 369.4,44.0 369.5,44.0 369.5,44.0 369.6,44.0 369.6,44.0 369.7,44.0 369.7,44.0 369.8,44.0 369.8,44.0 369.8,44.0 369.8,44.0 369.9,44.0 369.9,44.0 369.9,44.0 369.9,44.0 369.9,44.0 369.9,44.0 369.9,44.0 370.0,44.0 370.0,44.0 370.0,44.0 370.0,44.0 370.0,44.0 370.0,44.0 370.0,44.0 370.0,44.0 370.0,44.0 370.0,44.0 370.0,44.0 370.0,324.0" fill="#3b82f6" fill-opacity="0.12" stroke="none"/>
<polyline points="70.0,324.0 70.0,44.0 370.0,44.0" fill="none" stroke="#10b981" stroke-width="2" stroke-linejoin="round" stroke-dasharray="6 5"/>
<polyline points="70.0,324.0 370.0,44.0" fill="none" stroke="#9ca3af" stroke-width="2" stroke-linejoin="round" stroke-dasharray="6 5"/>
<polyline points="70.0,323.5 70.0,323.4 70.0,323.3 70.0,323.3 70.0,323.2 70.0,323.1 70.0,322.9 70.0,322.8 70.0,322.6 70.0,322.5 70.0,322.3 70.1,322.1 70.1,321.9 70.1,321.6 70.1,321.4 70.1,321.1 70.1,320.7 70.1,320.4 70.2,320.0 70.2,319.6 70.2,319.1 70.2,318.6 70.3,318.0 70.3,317.4 70.4,316.8 70.4,316.1 70.5,315.4 70.5,314.5 70.6,313.7 70.7,312.7 70.8,311.7 70.9,310.7 71.0,309.5 71.1,308.3 71.2,307.0 71.4,305.6 71.6,304.1 71.8,302.5 72.0,300.9 72.2,299.1 72.5,297.3 72.7,295.3 73.1,293.3 73.4,291.1 73.8,288.9 74.2,286.5 74.6,284.0 75.1,281.4 75.6,278.8 76.2,276.0 76.8,273.1 77.5,270.0 78.2,266.9 79.0,263.7 79.9,260.4 80.8,256.9 81.8,253.4 82.8,249.8 83.9,246.1 85.2,242.3 86.4,238.4 87.8,234.4 89.3,230.4 90.8,226.3 92.5,222.1 94.2,217.9 96.1,213.6 98.0,209.2 100.1,204.9 102.2,200.5 104.5,196.0 106.9,191.6 109.4,187.1 112.0,182.7 114.8,178.2 117.6,173.7 120.6,169.3 123.6,164.9 126.8,160.5 130.1,156.1 133.6,151.8 137.1,147.6 140.7,143.4 144.5,139.2 148.3,135.2 152.3,131.2 156.3,127.3 160.5,123.4 164.7,119.7 169.0,116.0 173.4,112.5 177.8,109.0 182.3,105.6 186.9,102.4 191.5,99.2 196.2,96.1 200.9,93.2 205.7,90.3 210.4,87.6 215.2,85.0 220.0,82.5 224.8,80.1 229.6,77.8 234.3,75.6 239.1,73.5 243.8,71.5 248.5,69.6 253.1,67.8 257.7,66.1 262.2,64.5 266.6,63.0 271.0,61.6 275.3,60.2 279.5,59.0 283.7,57.8 287.7,56.7 291.7,55.7 295.5,54.7 299.3,53.8 302.9,53.0 306.4,52.2 309.9,51.5 313.2,50.8 316.4,50.2 319.4,49.6 322.4,49.1 325.2,48.6 328.0,48.2 330.6,47.8 333.1,47.4 335.5,47.1 337.8,46.8 339.9,46.5 342.0,46.2 343.9,46.0 345.8,45.8 347.5,45.6 349.2,45.4 350.7,45.3 352.2,45.1 353.6,45.0 354.8,44.9 356.1,44.8 357.2,44.7 358.2,44.6 359.2,44.5 360.1,44.5 361.0,44.4 361.8,44.4 362.5,44.3 363.2,44.3 363.8,44.2 364.4,44.2 364.9,44.2 365.4,44.2 365.8,44.1 366.2,44.1 366.6,44.1 366.9,44.1 367.3,44.1 367.5,44.1 367.8,44.1 368.0,44.0 368.2,44.0 368.4,44.0 368.6,44.0 368.8,44.0 368.9,44.0 369.0,44.0 369.1,44.0 369.2,44.0 369.3,44.0 369.4,44.0 369.5,44.0 369.5,44.0 369.6,44.0 369.6,44.0 369.7,44.0 369.7,44.0 369.8,44.0 369.8,44.0 369.8,44.0 369.8,44.0 369.9,44.0 369.9,44.0 369.9,44.0 369.9,44.0 369.9,44.0 369.9,44.0 369.9,44.0 370.0,44.0 370.0,44.0 370.0,44.0 370.0,44.0 370.0,44.0 370.0,44.0 370.0,44.0 370.0,44.0 370.0,44.0 370.0,44.0 370.0,44.0" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linejoin="round"/>
<text x="298" y="206" text-anchor="middle" fill="#4b5563">random: 0.5</text>
<text x="160" y="64" text-anchor="middle" font-weight="700" fill="#1d4ed8">model</text>
<text x="94" y="300" text-anchor="middle" fill="#4b5563"></text>
<text x="268" y="268" text-anchor="middle" fill="#1d4ed8">area under curve</text>
<text x="268" y="288" text-anchor="middle" font-weight="700" fill="#1d4ed8">= 0.78</text>
</g>
</svg>

The **area under the ROC curve (AUROC, or AUC)** has a clean meaning. Pick one defaulter and one non-defaulter at random: AUC is the probability that the model gives the defaulter the worse score. 0.5 is a coin toss; 1.0 is perfect. It judges the ranking across all cut-offs at once.

**Gini and the CAP curve.** Sort borrowers from riskiest to safest and plot the share of all defaults captured as you move down the list: the **cumulative accuracy profile (CAP)**. The **accuracy ratio (AR)** is the model's area above the random line, divided by a perfect model's.

<svg viewBox="0 0 400 380" width="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cumulative accuracy profile: the model&#x27;s curve captures most defaults among the riskiest borrowers, between the random diagonal and the perfect curve; accuracy ratio 0.56" style="width:100%;max-width:400px;height:auto;display:block;margin:1rem auto">
<g font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#1f2937">
<text x="200" y="24" font-size="16" text-anchor="middle" font-weight="700">CAP curve: accuracy ratio 0.56</text>
<line x1="70" y1="324.0" x2="370" y2="324.0" stroke="#e5e7eb"/>
<text x="64" y="329" text-anchor="end" fill="#4b5563">0</text>
<line x1="70" y1="184.0" x2="370" y2="184.0" stroke="#e5e7eb"/>
<text x="64" y="189" text-anchor="end" fill="#4b5563">50%</text>
<line x1="70" y1="44.0" x2="370" y2="44.0" stroke="#e5e7eb"/>
<text x="64" y="49" text-anchor="end" fill="#4b5563">100%</text>
<line x1="70.0" y1="324" x2="70.0" y2="329" stroke="#9ca3af"/>
<text x="70" y="346" text-anchor="middle" fill="#4b5563">0</text>
<line x1="220.0" y1="324" x2="220.0" y2="329" stroke="#9ca3af"/>
<text x="220" y="346" text-anchor="middle" fill="#4b5563">50%</text>
<line x1="370.0" y1="324" x2="370.0" y2="329" stroke="#9ca3af"/>
<text x="370" y="346" text-anchor="middle" fill="#4b5563">100%</text>
<line x1="70" y1="324" x2="370" y2="324" stroke="#9ca3af" stroke-width="1.2"/>
<line x1="70" y1="44" x2="70" y2="324" stroke="#9ca3af" stroke-width="1.2"/>
<text x="220" y="368" text-anchor="middle" fill="#4b5563">Share of borrowers, riskiest first</text>
<text x="16" y="184" text-anchor="middle" fill="#4b5563" transform="rotate(-90 16 184)">Share of defaults caught</text>
<polyline points="70.0,324.0 370.0,44.0" fill="none" stroke="#9ca3af" stroke-width="2" stroke-linejoin="round" stroke-dasharray="6 5"/>
<polyline points="70.0,324.0 85.0,44.0 370.0,44.0" fill="none" stroke="#10b981" stroke-width="2" stroke-linejoin="round" stroke-dasharray="6 5"/>
<polyline points="70.0,324.0 70.0,323.5 70.0,323.4 70.0,323.3 70.1,323.3 70.1,323.2 70.1,323.1 70.1,322.9 70.1,322.8 70.1,322.6 70.1,322.5 70.1,322.3 70.2,322.1 70.2,321.9 70.2,321.6 70.2,321.4 70.3,321.1 70.3,320.7 70.3,320.4 70.4,320.0 70.4,319.6 70.5,319.1 70.5,318.6 70.6,318.0 70.6,317.4 70.7,316.8 70.8,316.1 70.9,315.4 71.0,314.5 71.1,313.7 71.2,312.7 71.4,311.7 71.5,310.7 71.7,309.5 71.9,308.3 72.1,307.0 72.3,305.6 72.6,304.1 72.8,302.5 73.1,300.9 73.4,299.1 73.8,297.3 74.1,295.3 74.5,293.3 75.0,291.1 75.5,288.9 76.0,286.5 76.5,284.0 77.1,281.4 77.8,278.8 78.5,276.0 79.2,273.1 80.0,270.0 80.9,266.9 81.8,263.7 82.8,260.4 83.8,256.9 85.0,253.4 86.1,249.8 87.4,246.1 88.8,242.3 90.2,238.4 91.7,234.4 93.3,230.4 95.0,226.3 96.8,222.1 98.7,217.9 100.7,213.6 102.8,209.2 105.0,204.9 107.3,200.5 109.6,196.0 112.2,191.6 114.8,187.1 117.5,182.7 120.3,178.2 123.3,173.7 126.3,169.3 129.5,164.9 132.7,160.5 136.1,156.1 139.6,151.8 143.2,147.6 146.9,143.4 150.6,139.2 154.5,135.2 158.5,131.2 162.5,127.3 166.7,123.4 170.9,119.7 175.2,116.0 179.5,112.5 184.0,109.0 188.4,105.6 192.9,102.4 197.5,99.2 202.1,96.1 206.8,93.2 211.4,90.3 216.1,87.6 220.8,85.0 225.4,82.5 230.1,80.1 234.8,77.8 239.4,75.6 244.0,73.5 248.6,71.5 253.2,69.6 257.6,67.8 262.1,66.1 266.5,64.5 270.8,63.0 275.0,61.6 279.2,60.2 283.3,59.0 287.3,57.8 291.2,56.7 295.0,55.7 298.7,54.7 302.3,53.8 305.8,53.0 309.2,52.2 312.5,51.5 315.6,50.8 318.7,50.2 321.7,49.6 324.5,49.1 327.2,48.6 329.9,48.2 332.4,47.8 334.8,47.4 337.0,47.1 339.2,46.8 341.3,46.5 343.3,46.2 345.1,46.0 346.9,45.8 348.6,45.6 350.1,45.4 351.6,45.3 353.0,45.1 354.3,45.0 355.6,44.9 356.7,44.8 357.8,44.7 358.8,44.6 359.7,44.5 360.6,44.5 361.4,44.4 362.2,44.4 362.9,44.3 363.5,44.3 364.1,44.2 364.6,44.2 365.1,44.2 365.6,44.2 366.0,44.1 366.4,44.1 366.8,44.1 367.1,44.1 367.4,44.1 367.7,44.1 367.9,44.1 368.1,44.0 368.3,44.0 368.5,44.0 368.7,44.0 368.8,44.0 368.9,44.0 369.1,44.0 369.2,44.0 369.3,44.0 369.4,44.0 369.4,44.0 369.5,44.0 369.6,44.0 369.6,44.0 369.7,44.0 369.7,44.0 369.7,44.0 369.8,44.0 369.8,44.0 369.8,44.0 369.9,44.0 369.9,44.0 369.9,44.0 369.9,44.0 369.9,44.0 369.9,44.0 369.9,44.0 369.9,44.0 370.0,44.0 370.0,44.0 370.0,44.0 370.0,44.0 370.0,44.0 370.0,44.0 370.0,44.0 370.0,44.0 370.0,44.0 370.0,44.0 370.0,44.0 370.0,44.0" fill="none" stroke="#8b5cf6" stroke-width="3" stroke-linejoin="round"/>
<text x="130" y="70" fill="#047857">perfect</text>
<text x="205" y="122" text-anchor="middle" font-weight="700" fill="#6d28d9">model</text>
<text x="280" y="178" text-anchor="middle" fill="#4b5563">random</text>
</g>
</svg>

The Gini coefficient equals the accuracy ratio, and it is tied directly to AUC:

$$
\text{Gini} = \text{AR} = 2 \times \text{AUC} - 1
$$

So an AUC of 0.78 is a Gini of 0.56.

**KS.** The Kolmogorov–Smirnov statistic is the widest gap between the cumulative score distributions of bads and goods:

$$
\text{KS} = \max_{s}\; \left\lvert F_{\text{bad}}(s) - F_{\text{good}}(s) \right\rvert
$$

where F(s) is the share of each group scoring at or below s, usually quoted from 0 to 100.

<svg viewBox="0 0 400 352" width="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Chart: cumulative share of defaulters and of good borrowers by score; the maximum vertical gap, the KS statistic, is 41.5 around a score of 617" style="width:100%;max-width:400px;height:auto;display:block;margin:1rem auto">
<g font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#1f2937">
<text x="200" y="24" font-size="16" text-anchor="middle" font-weight="700">KS: the widest gap is 41.5</text>
<line x1="70" y1="296.0" x2="376" y2="296.0" stroke="#e5e7eb"/>
<text x="64" y="301" text-anchor="end" fill="#4b5563">0%</text>
<line x1="70" y1="196.0" x2="376" y2="196.0" stroke="#e5e7eb"/>
<text x="64" y="201" text-anchor="end" fill="#4b5563">50%</text>
<line x1="70" y1="96.0" x2="376" y2="96.0" stroke="#e5e7eb"/>
<text x="64" y="101" text-anchor="end" fill="#4b5563">100%</text>
<line x1="70.0" y1="296" x2="70.0" y2="301" stroke="#9ca3af"/>
<text x="70" y="318" text-anchor="middle" fill="#4b5563">400</text>
<line x1="172.0" y1="296" x2="172.0" y2="301" stroke="#9ca3af"/>
<text x="172" y="318" text-anchor="middle" fill="#4b5563">550</text>
<line x1="274.0" y1="296" x2="274.0" y2="301" stroke="#9ca3af"/>
<text x="274" y="318" text-anchor="middle" fill="#4b5563">700</text>
<line x1="376.0" y1="296" x2="376.0" y2="301" stroke="#9ca3af"/>
<text x="376" y="318" text-anchor="middle" fill="#4b5563">850</text>
<line x1="70" y1="296" x2="376" y2="296" stroke="#9ca3af" stroke-width="1.2"/>
<line x1="70" y1="96" x2="70" y2="296" stroke="#9ca3af" stroke-width="1.2"/>
<text x="223" y="340" text-anchor="middle" fill="#4b5563">Score (low = risky)</text>
<text x="16" y="196" text-anchor="middle" fill="#4b5563" transform="rotate(-90 16 196)">Cumulative share</text>
<polyline points="70.0,295.8 73.4,295.7 76.8,295.6 80.2,295.5 83.6,295.4 87.0,295.2 90.4,295.0 93.8,294.7 97.2,294.4 100.6,294.0 104.0,293.5 107.4,292.9 110.8,292.2 114.2,291.4 117.6,290.4 121.0,289.2 124.4,287.8 127.8,286.3 131.2,284.5 134.6,282.4 138.0,280.1 141.4,277.5 144.8,274.6 148.2,271.3 151.6,267.7 155.0,263.8 158.4,259.6 161.8,255.0 165.2,250.2 168.6,244.9 172.0,239.4 175.4,233.7 178.8,227.7 182.2,221.5 185.6,215.1 189.0,208.6 192.4,202.0 195.8,195.3 199.2,188.7 202.6,182.1 206.0,175.6 209.4,169.2 212.8,163.1 216.2,157.1 219.6,151.4 223.0,145.9 226.4,140.8 229.8,136.0 233.2,131.5 236.6,127.3 240.0,123.5 243.4,120.0 246.8,116.8 250.2,114.0 253.6,111.4 257.0,109.1 260.4,107.1 263.8,105.4 267.2,103.9 270.6,102.5 274.0,101.4 277.4,100.5 280.8,99.6 284.2,99.0 287.6,98.4 291.0,97.9 294.4,97.5 297.8,97.2 301.2,97.0 304.6,96.7 308.0,96.6 311.4,96.4 314.8,96.3 318.2,96.3 321.6,96.2 325.0,96.1 328.4,96.1 331.8,96.1 335.2,96.1 338.6,96.0 342.0,96.0 345.4,96.0 348.8,96.0 352.2,96.0 355.6,96.0 359.0,96.0 362.4,96.0 365.8,96.0 369.2,96.0 372.6,96.0 376.0,96.0" fill="none" stroke="#f43f5e" stroke-width="3" stroke-linejoin="round"/>
<polyline points="70.0,296.0 73.4,296.0 76.8,296.0 80.2,296.0 83.6,296.0 87.0,296.0 90.4,296.0 93.8,296.0 97.2,296.0 100.6,295.9 104.0,295.9 107.4,295.9 110.8,295.8 114.2,295.8 117.6,295.7 121.0,295.6 124.4,295.5 127.8,295.4 131.2,295.2 134.6,295.0 138.0,294.8 141.4,294.4 144.8,294.0 148.2,293.6 151.6,293.0 155.0,292.3 158.4,291.4 161.8,290.5 165.2,289.3 168.6,288.0 172.0,286.4 175.4,284.7 178.8,282.6 182.2,280.3 185.6,277.8 189.0,274.9 192.4,271.7 195.8,268.1 199.2,264.3 202.6,260.1 206.0,255.5 209.4,250.7 212.8,245.5 216.2,240.0 219.6,234.3 223.0,228.3 226.4,222.1 229.8,215.7 233.2,209.2 236.6,202.6 240.0,196.0 243.4,189.4 246.8,182.8 250.2,176.3 253.6,169.9 257.0,163.7 260.4,157.7 263.8,152.0 267.2,146.5 270.6,141.3 274.0,136.5 277.4,131.9 280.8,127.7 284.2,123.9 287.6,120.3 291.0,117.1 294.4,114.2 297.8,111.7 301.2,109.4 304.6,107.3 308.0,105.6 311.4,104.0 314.8,102.7 318.2,101.5 321.6,100.6 325.0,99.7 328.4,99.0 331.8,98.4 335.2,98.0 338.6,97.6 342.0,97.2 345.4,97.0 348.8,96.8 352.2,96.6 355.6,96.5 359.0,96.4 362.4,96.3 365.8,96.2 369.2,96.2 372.6,96.1 376.0,96.1" fill="none" stroke="#10b981" stroke-width="3" stroke-linejoin="round"/>
<line x1="217.7" y1="154.5" x2="217.7" y2="237.5" stroke="#111827" stroke-width="2.5"/>
<text x="226" y="201" font-weight="700">KS 41.5</text>
<line x1="74" y1="39" x2="96" y2="39" stroke="#f43f5e" stroke-width="3"/>
<text x="104" y="44">Bads, share with score ≤ x</text>
<line x1="74" y1="61" x2="96" y2="61" stroke="#10b981" stroke-width="3"/>
<text x="104" y="66">Goods, share with score ≤ x</text>
</g>
</svg>

Here KS is 41.5, at a score of about 617 — often a natural candidate for the cut-off.

Rough industry rules of thumb, which vary with product and data:

| Model | Gini | KS |
|---|---|---|
| Retail application scorecard | 40–60% | 30–45 |
| Retail behavioural scorecard | 60–80% | 45–60 |
| Corporate rating model | 50–70% | Rarely used |
| Low-default portfolios | Hard to measure; judged more on expert review | — |

**Rank ordering.** Default rates should rise steadily as scores worsen — as they did across the FOIR bins (2.9%, 5.6%, 9.7%, 20.0%). A reversal between neighbouring bands is a warning even when the Gini looks healthy.

### Calibration: are the PDs right?

Discrimination asks whether the model puts borrowers in the right *order*. **Calibration** asks whether the PD *levels* are right: of all the borrowers given a 2% PD, do about 2% default?

Think of a weather forecast. It is calibrated if it rains on about 70% of the days it says "70% chance of rain". A forecaster could rank days perfectly — always giving higher numbers to rainier days — and still be badly calibrated if every number were twice too high. A PD model is the same. Discrimination decides who gets a loan; calibration decides the provisions, the capital and the price.

One year of outcomes by grade:

| Grade | Borrowers | PD | Expected defaults | Observed defaults | Observed rate | Binomial p-value, one-sided |
|---|---|---|---|---|---|---|
| A | 4,000 | 0.5% | 20 | 18 | 0.45% | 0.70 |
| B | 3,000 | 1.5% | 45 | 49 | 1.63% | 0.29 |
| C | 2,000 | 4.0% | 80 | 86 | 4.30% | 0.26 |
| D | 800 | 10.0% | 80 | 98 | 12.25% | 0.02 |
| E | 200 | 25.0% | 50 | 52 | 26.0% | 0.40 |

<svg viewBox="0 0 400 380" width="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Calibration plot on log scales: grades A, B, C and E sit close to the diagonal; grade D&#x27;s observed default rate of 12.25% is above its 10% PD" style="width:100%;max-width:400px;height:auto;display:block;margin:1rem auto">
<g font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#1f2937">
<text x="200" y="24" font-size="16" text-anchor="middle" font-weight="700">Calibration: predicted vs observed</text>
<line x1="70" y1="275.6" x2="370" y2="275.6" stroke="#e5e7eb"/>
<text x="64" y="281" text-anchor="end" fill="#4b5563">0.5</text>
<line x1="70" y1="238.9" x2="370" y2="238.9" stroke="#e5e7eb"/>
<text x="64" y="244" text-anchor="end" fill="#4b5563">1</text>
<line x1="70" y1="153.9" x2="370" y2="153.9" stroke="#e5e7eb"/>
<text x="64" y="159" text-anchor="end" fill="#4b5563">5</text>
<line x1="70" y1="117.3" x2="370" y2="117.3" stroke="#e5e7eb"/>
<text x="64" y="122" text-anchor="end" fill="#4b5563">10</text>
<line x1="70" y1="68.8" x2="370" y2="68.8" stroke="#e5e7eb"/>
<text x="64" y="74" text-anchor="end" fill="#4b5563">25</text>
<line x1="121.9" y1="324" x2="121.9" y2="329" stroke="#9ca3af"/>
<text x="122" y="346" text-anchor="middle" fill="#4b5563">0.5</text>
<line x1="161.1" y1="324" x2="161.1" y2="329" stroke="#9ca3af"/>
<text x="161" y="346" text-anchor="middle" fill="#4b5563">1</text>
<line x1="252.3" y1="324" x2="252.3" y2="329" stroke="#9ca3af"/>
<text x="252" y="346" text-anchor="middle" fill="#4b5563">5</text>
<line x1="291.5" y1="324" x2="291.5" y2="329" stroke="#9ca3af"/>
<text x="292" y="346" text-anchor="middle" fill="#4b5563">10</text>
<line x1="343.4" y1="324" x2="343.4" y2="329" stroke="#9ca3af"/>
<text x="343" y="346" text-anchor="middle" fill="#4b5563">25</text>
<line x1="70" y1="324" x2="370" y2="324" stroke="#9ca3af" stroke-width="1.2"/>
<line x1="70" y1="44" x2="70" y2="324" stroke="#9ca3af" stroke-width="1.2"/>
<text x="220" y="368" text-anchor="middle" fill="#4b5563">Predicted PD, % (log)</text>
<text x="16" y="184" text-anchor="middle" fill="#4b5563" transform="rotate(-90 16 184)">Observed default rate, %</text>
<polyline points="70.0,324.0 370.0,44.0" fill="none" stroke="#9ca3af" stroke-width="2" stroke-linejoin="round" stroke-dasharray="6 5"/>
<circle cx="121.9" cy="281.1" r="7" fill="#1d4ed8"/>
<text x="110" y="271" text-anchor="middle" font-weight="700" fill="#1d4ed8">A</text>
<circle cx="184.1" cy="213.1" r="7" fill="#1d4ed8"/>
<text x="172" y="203" text-anchor="middle" font-weight="700" fill="#1d4ed8">B</text>
<circle cx="239.6" cy="161.9" r="7" fill="#1d4ed8"/>
<text x="228" y="152" text-anchor="middle" font-weight="700" fill="#1d4ed8">C</text>
<circle cx="291.5" cy="106.5" r="7" fill="#be123c"/>
<text x="280" y="97" text-anchor="middle" font-weight="700" fill="#be123c">D</text>
<circle cx="343.4" cy="66.8" r="7" fill="#1d4ed8"/>
<text x="331" y="57" text-anchor="middle" font-weight="700" fill="#1d4ed8">E</text>
<text x="83" y="76" fill="#4b5563">on the line =</text>
<text x="83" y="99" fill="#4b5563">well calibrated</text>
</g>
</svg>

**The binomial test, grade by grade.** If the PD is right and defaults are independent, the number of defaults in a grade follows a binomial distribution. The normal approximation:

$$
z = \frac{D - N \times \text{PD}}{\sqrt{N \times \text{PD} \times (1 - \text{PD})}}
$$

where D is the observed defaults and N the number of borrowers. For grade D: z = (98 − 80) ÷ √(800 × 0.10 × 0.90) = 18 ÷ 8.49 = 2.12, a one-sided p-value of about 0.02. There is only about a 2% chance of seeing so many defaults if the 10% PD were right — grade D is **under-predicting** risk.

**Hosmer–Lemeshow (HL), across all grades at once:**

$$
\text{HL} = \sum_{g=1}^{G} \frac{(O_g - E_g)^2}{E_g \times (1 - \text{PD}_g)}
$$

where, for each grade g, O is the observed and E the expected number of defaults. HL follows a chi-squared distribution with G − 2 degrees of freedom on development data, or G on fresh data. Here HL = 0.20 + 0.36 + 0.47 + 4.50 + 0.11 = 5.64; with 3 degrees of freedom, p = 0.13. The model **passes overall**, even though grade D fails on its own.

That is the lesson: a portfolio-level test can hide a broken grade. Validators read both.

Two more tests you'll meet:

- **The Jeffreys test**, favoured by the ECB, is a Bayesian cousin of the binomial test: it treats the true default rate as a Beta(D + ½, N − D + ½) distribution. For grade D it gives p = 0.019 — the same verdict.
- **The Brier score** is the mean squared difference between each borrower's PD and what happened, where the outcome y is 1 for a default and 0 otherwise. Lower is better; it blends calibration and discrimination into one number.

$$
\text{Brier} = \frac{1}{N} \sum_{i=1}^{N} (\text{PD}_i - y_i)^2
$$

Results are usually shown as **traffic lights** — for example, green if p is above 5%, amber from 1% to 5%, red below 1%. Grade D is amber.

**Calibration targets.** For capital, PDs are calibrated to the long-run average default rate over a full cycle — the **central tendency** — plus a **margin of conservatism** for data gaps and uncertainty. For IFRS 9, they are calibrated to point-in-time, forward-looking rates. Fixing calibration, by shifting the PD levels, is quick; fixing discrimination means redeveloping the model.

### Stability: is the population still the same?

A model is only as good as today's borrowers' resemblance to the ones it was built on. The **population stability index (PSI)** compares the current score distribution with the development sample:

$$
\text{PSI} = \sum_{i} (A_i - E_i) \times \ln\left(\frac{A_i}{E_i}\right)
$$

where, for each score band i, E is the development population's share and A the current population's share.

| Score band | Development | This quarter | Contribution |
|---|---|---|---|
| Below 560 | 10% | 4% | 0.055 |
| 560–599 | 20% | 14% | 0.021 |
| 600–639 | 40% | 36% | 0.004 |
| 640–679 | 20% | 28% | 0.027 |
| 680 and above | 10% | 18% | 0.047 |
| **PSI** | | | **0.15** |

<svg viewBox="0 0 400 336" width="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Grouped bars: the share of applicants in each score band at development versus this quarter; mass has moved towards higher scores, giving a PSI of 0.15" style="width:100%;max-width:400px;height:auto;display:block;margin:1rem auto">
<g font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#1f2937">
<text x="200" y="24" font-size="16" text-anchor="middle" font-weight="700">PSI 0.15: the applicants have shifted</text>
<line x1="70" y1="280.0" x2="376" y2="280.0" stroke="#e5e7eb"/>
<text x="64" y="285" text-anchor="end" fill="#4b5563">0%</text>
<line x1="70" y1="195.6" x2="376" y2="195.6" stroke="#e5e7eb"/>
<text x="64" y="201" text-anchor="end" fill="#4b5563">20%</text>
<line x1="70" y1="111.1" x2="376" y2="111.1" stroke="#e5e7eb"/>
<text x="64" y="116" text-anchor="end" fill="#4b5563">40%</text>
<line x1="100.6" y1="280" x2="100.6" y2="285" stroke="#9ca3af"/>
<text x="101" y="302" text-anchor="middle" fill="#4b5563">&lt;560</text>
<line x1="161.8" y1="280" x2="161.8" y2="285" stroke="#9ca3af"/>
<text x="162" y="302" text-anchor="middle" fill="#4b5563">560s</text>
<line x1="223.0" y1="280" x2="223.0" y2="285" stroke="#9ca3af"/>
<text x="223" y="302" text-anchor="middle" fill="#4b5563">600s</text>
<line x1="284.2" y1="280" x2="284.2" y2="285" stroke="#9ca3af"/>
<text x="284" y="302" text-anchor="middle" fill="#4b5563">640s</text>
<line x1="345.4" y1="280" x2="345.4" y2="285" stroke="#9ca3af"/>
<text x="345" y="302" text-anchor="middle" fill="#4b5563">680+</text>
<line x1="70" y1="280" x2="376" y2="280" stroke="#9ca3af" stroke-width="1.2"/>
<line x1="70" y1="90" x2="70" y2="280" stroke="#9ca3af" stroke-width="1.2"/>
<text x="223" y="324" text-anchor="middle" fill="#4b5563">Score band</text>
<rect x="76.6" y="237.8" width="22" height="42.2" fill="#9ca3af"/>
<rect x="102.6" y="263.1" width="22" height="16.9" fill="#3b82f6"/>
<rect x="137.8" y="195.6" width="22" height="84.4" fill="#9ca3af"/>
<rect x="163.8" y="220.9" width="22" height="59.1" fill="#3b82f6"/>
<rect x="199.0" y="111.1" width="22" height="168.9" fill="#9ca3af"/>
<rect x="225.0" y="128.0" width="22" height="152.0" fill="#3b82f6"/>
<rect x="260.2" y="195.6" width="22" height="84.4" fill="#9ca3af"/>
<rect x="286.2" y="161.8" width="22" height="118.2" fill="#3b82f6"/>
<rect x="321.4" y="237.8" width="22" height="42.2" fill="#9ca3af"/>
<rect x="347.4" y="204.0" width="22" height="76.0" fill="#3b82f6"/>
<line x1="74" y1="39" x2="96" y2="39" stroke="#9ca3af" stroke-width="3"/>
<text x="104" y="44">When the model was built</text>
<line x1="74" y1="61" x2="96" y2="61" stroke="#3b82f6" stroke-width="3"/>
<text x="104" y="66">This quarter&#x27;s applicants</text>
</g>
</svg>

Below 0.1 is stable. From 0.1 to 0.25 is a shift worth investigating — here, perhaps a marketing campaign pulling in better-scoring applicants. Above 0.25 is a significant shift: the model may no longer apply. The **characteristic stability index (CSI)** runs the same formula on each input variable, to find what moved.

### Other checks

| Check | Why |
|---|---|
| Variance inflation factor (VIF) | Inputs too correlated with each other make the coefficients unstable; a VIF above 5–10 is a flag |
| Override rate | Frequent overrides mean the model isn't trusted — or isn't right |
| Grade concentration | Too many borrowers in one grade weakens differentiation |
| Migration matrix | Grades should move gradually; wild jumps suggest instability |
| LGD and EAD back-testing | Realised against predicted, by segment and over time |
| Sensitivity | Do the outputs move sensibly when the inputs move? |

### The monitoring pack

| Metric | Green | Amber | Red |
|---|---|---|---|
| Gini, against development | Within 5% (relative) | 5–10% lower | More than 10% lower |
| PSI | Below 0.10 | 0.10–0.25 | Above 0.25 |
| Grades failing calibration | None | One | Two or more |
| Override rate | Below 5% | 5–10% | Above 10% |

The thresholds are illustrative; each bank sets its own in its model risk policy.

### The analyst's view

In production, a model is data plus logic: the bins and points held as **reference data**, the score formula as a specified calculation, and test cases that recompute scores for applicants on every boundary. Monitoring packs are queries run every quarter. An analyst who can read Gini, calibration and PSI can write the requirements to build them — and can spot when a system change, not the economy, has moved the numbers.

### Check yourself

1. A model has an AUC of 0.72. What is its Gini, and what does 0.72 mean in plain words?
2. Why is accuracy a poor metric for a default model?
3. A model ranks well, but every grade's observed default rate is about half its PD. What is wrong, how do you fix it, and what does it cost the bank in the meantime?
4. The HL test passes, but one grade fails the binomial test. What do you conclude?
5. PSI is 0.32. What do you do?

<details>
<summary>Answers</summary>

1. Gini = 2 × 0.72 − 1 = 0.44. Pick a random defaulter and a random non-defaulter: 72% of the time, the model scores the defaulter as riskier.
2. Defaults are rare, so a model that predicts "no default" for everyone is highly accurate and completely useless. Use recall, the false positive rate, AUC, Gini and KS, weighed by the cost of each kind of error.
3. It discriminates well but is mis-calibrated — too conservative. Recalibrate the PD levels, which is a quick fix. Meanwhile the bank holds too much capital and too many provisions, and prices its loans too high.
4. The model is broadly calibrated, but one grade under-predicts risk. Investigate that grade — a segment, a policy change or a data issue — and consider recalibrating it. An overall pass does not clear it.
5. It is a significant population shift. Find the cause with CSI on each variable, check whether performance has degraded on recent outcomes, and escalate for recalibration or redevelopment under the model risk policy.

</details>

## Part 10 — Watching the portfolio

Loans are approved one at a time, but risk arrives as a portfolio. Monitoring keeps the portfolio inside what the board decided the bank could bear.

### Risk appetite

<svg viewBox="0 0 400 404" width="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Risk appetite cascade from the board&#x27;s statement to metrics, limits and daily monitoring, with green, amber and red escalation" style="width:100%;max-width:400px;height:auto;display:block;margin:1rem auto">
<g font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#1f2937">
<text x="200" y="24" font-size="16" text-anchor="middle" font-weight="700">From board appetite to daily limits</text>
<rect x="12" y="44" width="376" height="58" rx="8" fill="#f5f3ff" stroke="#8b5cf6" stroke-width="1.5"/>
<text x="200" y="68" text-anchor="middle" font-weight="600" fill="#6d28d9">Risk appetite statement</text>
<text x="200" y="88" text-anchor="middle">the board: how much risk, where</text>
<line x1="200.0" y1="103.0" x2="200.0" y2="109.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="200.0,117.0 204.0,109.0 196.0,109.0" fill="#6b7280"/>
<rect x="12" y="118" width="376" height="58" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
<text x="200" y="142" text-anchor="middle" font-weight="600" fill="#1d4ed8">Metrics and thresholds</text>
<text x="200" y="162" text-anchor="middle">CET1, credit cost, concentration</text>
<line x1="200.0" y1="177.0" x2="200.0" y2="183.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="200.0,191.0 204.0,183.0 196.0,183.0" fill="#6b7280"/>
<rect x="12" y="192" width="376" height="58" rx="8" fill="#f0fdfa" stroke="#14b8a6" stroke-width="1.5"/>
<text x="200" y="216" text-anchor="middle" font-weight="600" fill="#0f766e">Limits that cascade</text>
<text x="200" y="236" text-anchor="middle">sector, product, group, name</text>
<line x1="200.0" y1="251.0" x2="200.0" y2="257.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="200.0,265.0 204.0,257.0 196.0,257.0" fill="#6b7280"/>
<rect x="12" y="266" width="376" height="58" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
<text x="200" y="290" text-anchor="middle" font-weight="600" fill="#047857">Daily monitoring</text>
<text x="200" y="310" text-anchor="middle">utilisation, excesses, warnings</text>
<line x1="200.0" y1="325.0" x2="200.0" y2="331.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="200.0,339.0 204.0,331.0 196.0,331.0" fill="#6b7280"/>
<rect x="12" y="340" width="120" height="56" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
<text x="72" y="363" text-anchor="middle" font-weight="600" fill="#047857">Green</text>
<text x="72" y="383" text-anchor="middle">carry on</text>
<rect x="140" y="340" width="120" height="56" rx="8" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
<text x="200" y="363" text-anchor="middle" font-weight="600" fill="#b45309">Amber</text>
<text x="200" y="383" text-anchor="middle">act</text>
<rect x="268" y="340" width="120" height="56" rx="8" fill="#fff1f2" stroke="#f43f5e" stroke-width="1.5"/>
<text x="328" y="363" text-anchor="middle" font-weight="600" fill="#be123c">Red</text>
<text x="328" y="383" text-anchor="middle">escalate</text>
</g>
</svg>

The board's **risk appetite statement (RAS)** says how much risk the bank will take to reach its goals, then turns that into measurable limits:

| Metric (illustrative) | Within appetite | Trigger (amber) | Limit (red) |
|---|---|---|---|
| CET1 ratio | Above 13% | 12.5% | 12% |
| Credit cost | Below 1.0% | 1.2% | 1.5% |
| Gross NPA ratio | Below 2.5% | 3.0% | 3.5% |
| Largest sector's share of the book | Below 15% | 17.5% | 20% |
| Top-20 borrowers, as a share of Tier 1 | Below 150% | 175% | 200% |
| Stage 2 share of loans | Below 8% | 10% | 12% |

A trigger means act — discuss, plan, slow down. A limit means escalate — to the risk committee or the board, with a plan to get back inside.

### Limits and exposure monitoring

Limits cascade down from the appetite through a hierarchy: country, sector, group, borrower, facility, sub-limit. Each limit has an owner, a utilisation figure refreshed daily, and rules for **excesses**:

- An **active breach** comes from a new transaction. It needs approval in advance, or the system blocks it.
- A **passive breach** comes from something else moving — an exchange rate, a downgrade that cuts the limit, a derivative's PFE rising. It needs a plan to cure it.

Derivatives are limited on PFE, not on notional amount (Part 8).

### Concentration

$$
\text{HHI} = \sum_{i} s_i^2
$$

where s is each sector's (or borrower's) share of the portfolio. The Herfindahl–Hirschman index (HHI) of sector shares of 25%, 20%, 15%, 15%, 10%, 10% and 5% is 0.17 — the same concentration as about **5.9 equal-sized sectors** (1 ÷ 0.17). The lower the HHI, the more diversified the book; banks watch its trend and the largest shares.

### Early warning signals

| Retail | SME | Corporate |
|---|---|---|
| Bureau score drops; new loans taken elsewhere | Cash-credit line pinned at its limit | Rating downgrades; covenant breaches |
| Repayment mandates bouncing | Cheques returned | Accounts filed late |
| Card utilisation climbing; only minimum payments made | GST filings missed; banked turnover below GST turnover | Promoters pledging their shares |
| Salary credits stop | Stock statements late | The auditor resigns or qualifies the accounts |
| A burst of new credit enquiries | Statutory dues unpaid | Bond prices fall or CDS spreads widen |

Signals feed a **watchlist**: named borrowers reviewed more often, with actions attached — cut limits, take more security, reprice, or exit.

### Retail portfolio analytics

**Roll rates** measure how accounts flow between delinquency buckets from one month to the next:

$$
\text{Roll rate}_{a \to b} = \frac{\text{accounts in bucket } b \text{ this month that were in bucket } a \text{ last month}}{\text{accounts in bucket } a \text{ last month}}
$$

An illustrative roll-rate matrix, with last month's bucket down the side:

| Last month ↓ This month → | Current | 1–30 | 31–60 | 61–90 | 90+ |
|---|---|---|---|---|---|
| Current | 96% | 4% | — | — | — |
| 1–30 | 55% | 25% | 20% | — | — |
| 31–60 | 20% | 10% | 25% | 45% | — |
| 61–90 | 8% | 2% | 5% | 25% | 60% |

Chaining the forward rolls — 4% × 20% × 45% × 60% ≈ 0.02% — estimates the share of today's current accounts that will reach 90+ days past due four months from now: a quick early read on losses.

**Vintage analysis** follows each cohort of loans by months on book:

<svg viewBox="0 0 400 356" width="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Vintage chart: cumulative share of loans 30 or more days past due by months on book; each newer quarterly cohort rises faster than the one before" style="width:100%;max-width:400px;height:auto;display:block;margin:1rem auto">
<g font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#1f2937">
<text x="200" y="24" font-size="16" text-anchor="middle" font-weight="700">Vintage curves: 30+ DPD by cohort</text>
<line x1="70" y1="300.0" x2="376" y2="300.0" stroke="#e5e7eb"/>
<text x="64" y="305" text-anchor="end" fill="#4b5563">0%</text>
<line x1="70" y1="262.0" x2="376" y2="262.0" stroke="#e5e7eb"/>
<text x="64" y="267" text-anchor="end" fill="#4b5563">1%</text>
<line x1="70" y1="224.0" x2="376" y2="224.0" stroke="#e5e7eb"/>
<text x="64" y="229" text-anchor="end" fill="#4b5563">2%</text>
<line x1="70" y1="186.0" x2="376" y2="186.0" stroke="#e5e7eb"/>
<text x="64" y="191" text-anchor="end" fill="#4b5563">3%</text>
<line x1="70" y1="148.0" x2="376" y2="148.0" stroke="#e5e7eb"/>
<text x="64" y="153" text-anchor="end" fill="#4b5563">4%</text>
<line x1="70" y1="110.0" x2="376" y2="110.0" stroke="#e5e7eb"/>
<text x="64" y="115" text-anchor="end" fill="#4b5563">5%</text>
<line x1="70.0" y1="300" x2="70.0" y2="305" stroke="#9ca3af"/>
<text x="70" y="322" text-anchor="middle" fill="#4b5563">0</text>
<line x1="172.0" y1="300" x2="172.0" y2="305" stroke="#9ca3af"/>
<text x="172" y="322" text-anchor="middle" fill="#4b5563">6</text>
<line x1="274.0" y1="300" x2="274.0" y2="305" stroke="#9ca3af"/>
<text x="274" y="322" text-anchor="middle" fill="#4b5563">12</text>
<line x1="376.0" y1="300" x2="376.0" y2="305" stroke="#9ca3af"/>
<text x="376" y="322" text-anchor="middle" fill="#4b5563">18</text>
<line x1="70" y1="300" x2="376" y2="300" stroke="#9ca3af" stroke-width="1.2"/>
<line x1="70" y1="110" x2="70" y2="300" stroke="#9ca3af" stroke-width="1.2"/>
<text x="223" y="344" text-anchor="middle" fill="#4b5563">Months on book</text>
<text x="16" y="205" text-anchor="middle" fill="#4b5563" transform="rotate(-90 16 205)">Cumulative 30+ DPD</text>
<polyline points="70.0,300.0 78.5,290.9 87.0,282.5 95.5,274.8 104.0,267.7 112.5,261.2 121.0,255.1 129.5,249.6 138.0,244.5 146.5,239.8 155.0,235.5 163.5,231.6 172.0,227.9 180.5,224.6 189.0,221.5 197.5,218.7 206.0,216.1 214.5,213.6 223.0,211.4 231.5,209.4 240.0,207.5 248.5,205.8 257.0,204.2 265.5,202.8 274.0,201.4 282.5,200.2 291.0,199.1 299.5,198.0 308.0,197.1 316.5,196.2 325.0,195.4 333.5,194.6 342.0,193.9 350.5,193.3 359.0,192.7 367.5,192.2 376.0,191.7" fill="none" stroke="#10b981" stroke-width="3" stroke-linejoin="round"/>
<polyline points="70.0,300.0 78.5,289.1 87.0,279.0 95.5,269.7 104.0,261.2 112.5,253.4 121.0,246.2 129.5,239.5 138.0,233.4 146.5,227.8 155.0,222.7 163.5,217.9 172.0,213.5 180.5,209.5 189.0,205.8 197.5,202.4 206.0,199.3 214.5,196.4 223.0,193.7 231.5,191.3 240.0,189.0 248.5,187.0 257.0,185.1 265.5,183.3 274.0,181.7 282.5,180.2 291.0,178.9 299.5,177.6 308.0,176.5 316.5,175.4 325.0,174.4" fill="none" stroke="#f59e0b" stroke-width="3" stroke-linejoin="round"/>
<polyline points="70.0,300.0 78.5,285.4 87.0,272.0 95.5,259.7 104.0,248.3 112.5,237.8 121.0,228.2 129.5,219.4 138.0,211.2 146.5,203.8 155.0,196.9 163.5,190.5 172.0,184.7 180.5,179.3 189.0,174.4 197.5,169.9 206.0,165.7 214.5,161.8 223.0,158.3 231.5,155.0 240.0,152.1 248.5,149.3 257.0,146.8 265.5,144.4 274.0,142.3" fill="none" stroke="#f43f5e" stroke-width="3" stroke-linejoin="round"/>
<line x1="74" y1="39" x2="96" y2="39" stroke="#f43f5e" stroke-width="3"/>
<text x="104" y="44">Q3 cohort — worse, and younger</text>
<line x1="74" y1="61" x2="96" y2="61" stroke="#f59e0b" stroke-width="3"/>
<text x="104" y="66">Q2 cohort</text>
<line x1="74" y1="83" x2="96" y2="83" stroke="#10b981" stroke-width="3"/>
<text x="104" y="88">Q1 cohort</text>
</g>
</svg>

When newer cohorts go bad faster than older ones did at the same age, underwriting has loosened or the market has turned — months before it shows up in portfolio-wide ratios.

### NPA metrics and credit cost

$$
\begin{gathered}
\text{GNPA ratio} = \frac{\text{gross NPAs}}{\text{gross advances}} \\[6pt]
\text{PCR} = \frac{\text{provisions on NPAs}}{\text{gross NPAs}} \\[6pt]
\text{NNPA ratio} = \frac{\text{gross NPAs} - \text{provisions}}{\text{gross advances} - \text{provisions}}
\end{gathered}
$$

With gross advances of ₹10,000 crore, gross NPAs of ₹300 crore and provisions against them of ₹210 crore: **GNPA 3.0%, provision coverage ratio (PCR) 70%, NNPA 0.92%**. Credit cost — the year's provision charge divided by average loans — of ₹120 crore on ₹9,500 crore is 1.26%, or **126 basis points**.

### Outliers and data quality in monitoring

Before a number reaches a committee, it is challenged:

| Method | Catches |
|---|---|
| Month-on-month change beyond a threshold | A borrower's exposure jumping from ₹5 crore to ₹500 crore — a units or currency error |
| Interquartile-range fences, z-scores | Values far outside their peer group |
| Rule checks | LTV above 200%, a default date before the start date, negative balances |
| Peer comparison | One branch's Stage 2 share at three times its region's |

Every outlier ends with a verdict: a genuine event; a data error to be fixed at source; or a known issue, with an owner and a date.

### Stress testing

<svg viewBox="0 0 400 464" width="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Stress test flow: a macroeconomic scenario runs through satellite models to stressed risk parameters, losses and risk-weighted assets, a capital path and management actions" style="width:100%;max-width:400px;height:auto;display:block;margin:1rem auto">
<g font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#1f2937">
<text x="200" y="24" font-size="16" text-anchor="middle" font-weight="700">How a stress test runs</text>
<rect x="12" y="44" width="376" height="56" rx="8" fill="#fff1f2" stroke="#f43f5e" stroke-width="1.5"/>
<text x="200" y="67" text-anchor="middle" font-weight="600" fill="#be123c">Scenario</text>
<text x="200" y="87" text-anchor="middle">GDP −3%, jobless +2pp, rates +2pp</text>
<line x1="200.0" y1="101.0" x2="200.0" y2="105.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="200.0,113.0 204.0,105.0 196.0,105.0" fill="#6b7280"/>
<rect x="12" y="114" width="376" height="56" rx="8" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
<text x="200" y="137" text-anchor="middle" font-weight="600" fill="#b45309">Satellite models</text>
<text x="200" y="157" text-anchor="middle">link the economy to PD, LGD, EAD</text>
<line x1="200.0" y1="171.0" x2="200.0" y2="175.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="200.0,183.0 204.0,175.0 196.0,175.0" fill="#6b7280"/>
<rect x="12" y="184" width="376" height="56" rx="8" fill="#f5f3ff" stroke="#8b5cf6" stroke-width="1.5"/>
<text x="200" y="207" text-anchor="middle" font-weight="600" fill="#6d28d9">Stressed parameters</text>
<text x="200" y="227" text-anchor="middle">PDs up, collateral values down</text>
<line x1="200.0" y1="241.0" x2="200.0" y2="245.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="200.0,253.0 204.0,245.0 196.0,245.0" fill="#6b7280"/>
<rect x="12" y="254" width="376" height="56" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
<text x="200" y="277" text-anchor="middle" font-weight="600" fill="#1d4ed8">Losses and RWAs</text>
<text x="200" y="297" text-anchor="middle">ECL, migrations, write-offs</text>
<line x1="200.0" y1="311.0" x2="200.0" y2="315.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="200.0,323.0 204.0,315.0 196.0,315.0" fill="#6b7280"/>
<rect x="12" y="324" width="376" height="56" rx="8" fill="#f0fdfa" stroke="#14b8a6" stroke-width="1.5"/>
<text x="200" y="347" text-anchor="middle" font-weight="600" fill="#0f766e">Capital path</text>
<text x="200" y="367" text-anchor="middle">CET1 year by year vs minimum</text>
<line x1="200.0" y1="381.0" x2="200.0" y2="385.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="200.0,393.0 204.0,385.0 196.0,385.0" fill="#6b7280"/>
<rect x="12" y="394" width="376" height="56" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
<text x="200" y="417" text-anchor="middle" font-weight="600" fill="#047857">Actions</text>
<text x="200" y="437" text-anchor="middle">limits, pricing, capital plan</text>
</g>
</svg>

| Type | Question |
|---|---|
| Sensitivity | What if one thing moves — PDs up 20%, property prices down 15%? |
| Scenario | What if a coherent recession happens, with every variable moving together? |
| Reverse | What would it take to breach our minimum capital — and how plausible is that? |

An illustrative result: CET1 of ₹1,400 crore on RWA of ₹10,000 crore is 14.0%. A severe scenario adds ₹250 crore of credit losses and, through downgrades, lifts RWA by 8% to ₹10,800 crore. Stressed CET1 = (1,400 − 250) ÷ 10,800 = **10.65%** — above a 7% minimum-plus-buffer, with 3.65 points to spare.

Supervisors run their own exercises: the Bank of England's stress tests, the EBA's EU-wide exercise, the Federal Reserve's annual test that sets each large bank's stress capital buffer, and the RBI's macro stress tests in its Financial Stability Report [verify]. The bank's own stress tests feed its ICAAP (Part 6).

### Pricing for risk, and RAROC

A loan's rate must cover funding, costs, expected loss and a return on the capital the loan uses up:

| Component | Rate |
|---|---|
| Cost of funds | 6.50% |
| Operating cost | 0.80% |
| Expected loss | 1.00% |
| Capital charge: 10% capital × (15% target return − the 6.5% funding it replaces) | 0.85% |
| **Minimum price** | **9.15%** |

**Risk-adjusted return on capital (RAROC)** compares deals fairly:

$$
\text{RAROC} = \frac{\text{income} - \text{funding cost} - \text{operating cost} - \text{EL}}{\text{economic capital}}
$$

| ₹100 crore loan | A-rated corporate | BB-rated SME |
|---|---|---|
| Net return after funding, costs and EL | ₹1.6 crore | ₹2.6 crore |
| Economic capital | ₹6 crore | ₹12 crore |
| RAROC | 26.7% | 21.7% |

The SME loan earns more money, but less per rupee of capital. Against a 15% hurdle, both pass; if capital is scarce, the corporate loan is the better use of it.

### Check yourself

1. What is the difference between an active and a passive limit breach?
2. Gross advances ₹5,000 crore, gross NPAs ₹200 crore, provisions on NPAs ₹150 crore. Work out the GNPA ratio, PCR and NNPA ratio.
3. Newer cohorts show more 30+ DPD at six months on book than older cohorts did. What might explain it, and why does vintage analysis show it sooner than the NPA ratio?
4. Why can a higher-yielding loan be the worse deal?

<details>
<summary>Answers</summary>

1. An active breach comes from a new transaction and needs approval in advance. A passive breach comes from a market move, a downgrade or a limit cut, and needs a plan to cure it.
2. GNPA = 200 ÷ 5,000 = 4.0%; PCR = 150 ÷ 200 = 75%; NNPA = 50 ÷ 4,850 = 1.03%.
3. Looser underwriting, a new channel or product, a fraud ring, or a turning economy. Vintages compare loans of the same age; the NPA ratio mixes old loans with new ones, and fresh stress takes months to reach 90 days.
4. It can use up far more capital and carry far more expected loss, leaving a lower return per unit of capital than a safer, lower-yielding loan.

</details>

## Part 11 — The machine: data, reporting and controls

Every number in this note is produced by a chain of systems, every month, against deadlines — and every number must reconcile, trace back to its source and survive an audit. This is where a credit risk business analyst spends most days.

<svg viewBox="0 0 400 532" width="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Data flow: source systems feed staging, then transformation with data-quality checks, a risk data warehouse, calculation engines and outputs, with a reference data hub feeding the transformations and the engines" style="width:100%;max-width:400px;height:auto;display:block;margin:1rem auto">
<g font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#1f2937">
<text x="200" y="24" font-size="16" text-anchor="middle" font-weight="700">Where credit risk numbers come from</text>
<rect x="12" y="44" width="272" height="76" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
<text x="148" y="67" text-anchor="middle" font-weight="600" fill="#1d4ed8">Source systems</text>
<text x="148" y="87" text-anchor="middle">core banking, LOS, cards,</text>
<text x="148" y="107" text-anchor="middle">trading, collateral, GL</text>
<line x1="148.0" y1="121.0" x2="148.0" y2="125.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="148.0,133.0 152.0,125.0 144.0,125.0" fill="#6b7280"/>
<rect x="12" y="134" width="272" height="58" rx="8" fill="#f3f4f6" stroke="#6b7280" stroke-width="1.5"/>
<text x="148" y="158" text-anchor="middle" font-weight="600" fill="#374151">Staging</text>
<text x="148" y="178" text-anchor="middle">raw, exactly as received</text>
<line x1="148.0" y1="193.0" x2="148.0" y2="197.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="148.0,205.0 152.0,197.0 144.0,197.0" fill="#6b7280"/>
<rect x="12" y="206" width="272" height="58" rx="8" fill="#f0fdfa" stroke="#14b8a6" stroke-width="1.5"/>
<text x="148" y="230" text-anchor="middle" font-weight="600" fill="#0f766e">Transform and check</text>
<text x="148" y="250" text-anchor="middle">rules, mappings, DQ checks</text>
<line x1="148.0" y1="265.0" x2="148.0" y2="269.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="148.0,277.0 152.0,269.0 144.0,269.0" fill="#6b7280"/>
<rect x="12" y="278" width="272" height="76" rx="8" fill="#f5f3ff" stroke="#8b5cf6" stroke-width="1.5"/>
<text x="148" y="301" text-anchor="middle" font-weight="600" fill="#6d28d9">Risk data warehouse</text>
<text x="148" y="321" text-anchor="middle">counterparty, facility,</text>
<text x="148" y="341" text-anchor="middle">exposure, collateral, rating</text>
<line x1="148.0" y1="355.0" x2="148.0" y2="359.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="148.0,367.0 152.0,359.0 144.0,359.0" fill="#6b7280"/>
<rect x="12" y="368" width="272" height="58" rx="8" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
<text x="148" y="392" text-anchor="middle" font-weight="600" fill="#b45309">Calculation engines</text>
<text x="148" y="412" text-anchor="middle">RWA, ECL, SA-CCR, limits</text>
<line x1="148.0" y1="427.0" x2="148.0" y2="431.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="148.0,439.0 152.0,431.0 144.0,431.0" fill="#6b7280"/>
<rect x="12" y="440" width="272" height="58" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
<text x="148" y="464" text-anchor="middle" font-weight="600" fill="#047857">Outputs</text>
<text x="148" y="484" text-anchor="middle">returns, Pillar 3, dashboards</text>
<rect x="296" y="206" width="92" height="150" rx="8" fill="#fff1f2" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="5 4"/>
<text x="342" y="264" text-anchor="middle" font-weight="600" fill="#be123c">Ref.</text>
<text x="342" y="286" text-anchor="middle">data</text>
<text x="342" y="308" text-anchor="middle">hub</text>
<line x1="296.0" y1="236.0" x2="294.0" y2="236.0" stroke="#be123c" stroke-width="1.6"/>
<polygon points="286.0,236.0 294.0,240.0 294.0,232.0" fill="#be123c"/>
<line x1="296.0" y1="396.0" x2="294.0" y2="396.0" stroke="#be123c" stroke-width="1.6"/>
<polygon points="286.0,396.0 294.0,400.0 294.0,392.0" fill="#be123c"/>
<line x1="342" y1="356" x2="342" y2="396" stroke="#be123c" stroke-width="1.6" stroke-dasharray="5 4"/>
<line x1="342" y1="396" x2="297" y2="396" stroke="#be123c" stroke-width="1.6" stroke-dasharray="5 4"/>
<text x="200" y="520" text-anchor="middle" fill="#4b5563">Reconcile totals at every hop, and to the GL</text>
</g>
</svg>

### The platforms

| Platform type | What it does |
|---|---|
| Loan origination system (LOS) | Applications, underwriting workflow, decisions |
| Core banking | Accounts, balances, repayments, days past due |
| Rating and spreading tool | Spreading accounts, running rating models, recording overrides |
| Limit and exposure management | The limit hierarchy, utilisation, excesses, PFE for derivatives |
| Collateral management | Collateral items, valuations, charges, allocation to facilities |
| Trading and treasury systems | Derivatives, repos, market values |
| ECL engine | Staging, ECL calculation, scenarios, overlays |
| Regulatory calculation engine | RWA under the SA and IRB, SA-CCR, CVA, leverage, large exposures |
| Reporting and disclosure | Regulatory returns, Pillar 3, management information |
| Data warehouse and BI | Integrated risk data; dashboards |

Banks buy some of these, build others and glue them together. The product names differ from bank to bank; the jobs don't.

### Entities and grain

| Entity | Grain — one row per… | Key fields |
|---|---|---|
| Counterparty | Legal entity | Identifier, legal entity identifier (LEI), group parent, sector code, country, segment |
| Group | Group of connected counterparties | Parent, members, type of connection |
| Facility | Limit or agreement | Limit, product, tenor, committed or cancellable, currency |
| Exposure (account) | Drawn position on a reporting date | Drawn, undrawn, accrued interest, DPD, stage |
| Collateral | Collateral item | Type, value, valuation date, haircut, charge, allocation |
| Rating | Rating event | Grade, PD, model version, approver, date |
| Default event | Default | Default date, trigger (DPD or UTP), cure date |
| Derivative trade | Trade | Netting set, CSA, notional, maturity, market value |

**Grain** — what one row means — is the first question in any data requirement. Mixing grains, such as joining facility limits onto account-level rows and then summing, is the classic cause of double-counted exposure.

### Reference data under central control

**Reference data** is the slow-moving lookup data that every calculation depends on:

| Dataset | Example | Typical owner |
|---|---|---|
| Counterparty hierarchy | Which entities form one group | Client data or credit team |
| Industry and sector codes | Mapping to NACE, NAICS or India's NIC codes | Risk data governance |
| Product catalogue | Product → exposure class → CCF | Product control and regulatory reporting |
| Regulatory parameters | Risk-weight tables, CCFs, haircuts, floors | Regulatory policy |
| Rating master scale | Grade → PD range | Credit risk methodology |
| Scenario and IFRS 9 parameters | Macro paths, weights, SICR thresholds | Impairment team |
| FX rates and calendars | Month-end rates, business days | Finance and treasury |

**Centralised control** means: one golden source for each dataset; every value **effective-dated** (valid from, valid to), so any past run can be reproduced; **maker-checker** approval for every change; version history and an audit trail; a named owner; and controlled distribution to every system that uses it — never a local copy in someone's spreadsheet.

### Transformation rules

A **transformation rule** turns source data into what a calculation needs. A well-documented rule has:

| Field | Example |
|---|---|
| Rule ID | TR-CCF-004 |
| Purpose | Assign the credit conversion factor to off-balance-sheet items |
| Inputs | Product type, cancellability flag, original maturity |
| Logic | A decision table (below) |
| Output | The CCF on the exposure record |
| Exceptions | Missing cancellability flag: treat as committed (the conservative choice) and raise a data-quality issue |
| Owner, version, effective date | Regulatory reporting; version 3; 1 January 2027 |
| Test cases | One for each row of the decision table, plus each boundary |

The decision table under Basel 3.1:

| Product type | Unconditionally cancellable? | CCF |
|---|---|---|
| Commitment — revolving line, undrawn term loan | Yes | 10% |
| Commitment | No | 40% |
| Trade LC, short-term and self-liquidating | Not applicable | 20% |
| Performance guarantee, bid bond | Not applicable | 50% |
| Financial guarantee, standby LC backing debt | Not applicable | 100% |

Writing rules as decision tables makes the gaps visible ("what if the flag is blank?") and gives testers one case per row.

### Data quality

| Dimension | Question | Example check |
|---|---|---|
| Completeness | Is it there? | Every exposure has a counterparty sector code |
| Accuracy | Is it right? | The collateral value agrees with the valuation report |
| Validity | Is it allowed? | The rating grade exists on the master scale; LTV between 0% and 300% |
| Consistency | Does it agree across systems? | The default flag in core banking matches the one in the ECL engine |
| Timeliness | Is it current? | Valuations no older than policy allows; data in by working day 3 |
| Uniqueness | Is it counted once? | No counterparty appears under two identifiers |

The process: data-quality rules with thresholds; a DQ dashboard for every run; issues logged with owners; root-cause analysis; and **fixes at source**, not in the report. A manual adjustment in a report is a control failure waiting to happen again.

### BCBS 239

The Basel Committee's 2013 **principles for effective risk data aggregation and risk reporting** — expected of global systemically important banks since 2016, and applied by supervisors to many others:

| Group | Principles |
|---|---|
| Governance and infrastructure | 1 Governance · 2 Data architecture and IT infrastructure |
| Risk data aggregation | 3 Accuracy and integrity · 4 Completeness · 5 Timeliness · 6 Adaptability |
| Risk reporting | 7 Accuracy · 8 Comprehensiveness · 9 Clarity and usefulness · 10 Frequency · 11 Distribution |
| Supervisory review | 12 Review · 13 Remedial actions and supervisory measures · 14 Home–host cooperation |

In practice it means a data dictionary; lineage from every report back to source; reconciliations; automated rather than manual aggregation; and the ability to answer a new question from a regulator quickly — adaptability.

### Reconciliations

| Point | Check |
|---|---|
| Source to staging | Record counts and control totals match the extract |
| Staging to warehouse | Nothing dropped or duplicated by the transformations; every reject explained |
| Warehouse to engine | Every exposure calculated; totals agree |
| Engine to report | Every report figure traces to engine output |
| Risk to finance | Exposures agree with the general ledger balance sheet, within tolerance, with every break explained |

### Regulatory reporting

| Jurisdiction | Main credit risk and capital returns [verify] |
|---|---|
| EU | COREP — own funds and ratios, SA and IRB credit risk, counterparty risk, CVA, large exposures, leverage; and FINREP for financial information, including IFRS 9 stages and allowance movements |
| UK | PRA returns built on COREP and FINREP, with new templates under Basel 3.1 |
| US | FR Y-9C and the Call Reports, including the regulatory capital schedule; FFIEC 101 for advanced-approaches banks; FR Y-14 for stress testing |
| India | RBI returns submitted through its CIMS portal, including capital adequacy and asset quality returns; CRILC reporting of large borrowers; Pillar 3 disclosures |

A reporting cycle runs to a calendar: data frozen at month end; working days 1–3 for data, 4–7 for calculations and reconciliations; then review, sign-off by an accountable senior manager, and submission. Every figure needs evidence of how it was produced and who approved it.

### Dashboards

<svg viewBox="0 0 400 524" width="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Wireframe of a phone credit risk dashboard: exposure, stage mix, gross NPA, capital headroom, limit breaches and sector bars" style="width:100%;max-width:400px;height:auto;display:block;margin:1rem auto">
<g font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#1f2937">
<text x="200" y="24" font-size="16" text-anchor="middle" font-weight="700">A credit risk dashboard, phone first</text>
<rect x="50" y="40" width="300" height="470" rx="26" fill="#ffffff" stroke="#374151" stroke-width="2"/>
<text x="200" y="72" text-anchor="middle" font-weight="700">Credit risk · as at 31 March</text>
<rect x="66" y="88" width="268" height="60" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
<text x="200" y="113" text-anchor="middle" font-weight="600" fill="#1d4ed8">Exposure</text>
<text x="200" y="133" text-anchor="middle">₹12,400 cr  ▲ 2%</text>
<rect x="66" y="158" width="268" height="60" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
<text x="200" y="183" text-anchor="middle" font-weight="600" fill="#047857">Stages 1 / 2 / 3</text>
<text x="200" y="203" text-anchor="middle">88% · 9% · 3%</text>
<rect x="66" y="228" width="268" height="60" rx="8" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
<text x="200" y="253" text-anchor="middle" font-weight="600" fill="#b45309">Gross NPA</text>
<text x="200" y="273" text-anchor="middle">3.0%  — amber</text>
<rect x="66" y="298" width="268" height="60" rx="8" fill="#f5f3ff" stroke="#8b5cf6" stroke-width="1.5"/>
<text x="200" y="323" text-anchor="middle" font-weight="600" fill="#6d28d9">CET1 headroom</text>
<text x="200" y="343" text-anchor="middle">3.1 pp over minimum</text>
<rect x="66" y="368" width="268" height="60" rx="8" fill="#fff1f2" stroke="#f43f5e" stroke-width="1.5"/>
<text x="200" y="393" text-anchor="middle" font-weight="600" fill="#be123c">Limit breaches</text>
<text x="200" y="413" text-anchor="middle">4 active · 1 new</text>
<rect x="66" y="438" width="268" height="56" rx="8" fill="#f3f4f6" stroke="#6b7280" stroke-width="1.5"/>
<text x="200" y="460" text-anchor="middle" font-weight="600" fill="#374151">Top sectors vs limit</text>
<rect x="80" y="470" width="45" height="14" fill="#9ca3af"/>
<rect x="142" y="470" width="35" height="14" fill="#9ca3af"/>
<rect x="204" y="470" width="28" height="14" fill="#9ca3af"/>
<rect x="266" y="470" width="20" height="14" fill="#9ca3af"/>
</g>
</svg>

- **One question per tile.** A tile that needs a paragraph is really two tiles.
- **Against appetite.** Colour means something only relative to a trigger or a limit.
- **Change is the headline.** "Since last month" is the most-read column in any risk pack.
- **Definitions one click away.** The formula, source, owner and as-at date for every tile.
- **Drill-down follows the grain.** Portfolio → sector → borrower → facility → collateral, each level adding up to the one above.
- **Phone first.** Committee members read on phones: tiles stack, and nothing needs sideways scrolling.

### Governance and controls

<svg viewBox="0 0 400 376" width="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three lines of defence: the business owns risk, risk and compliance set rules and challenge, internal audit gives independent assurance, overseen by the board with regulators and external auditors outside" style="width:100%;max-width:400px;height:auto;display:block;margin:1rem auto">
<g font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#1f2937">
<text x="200" y="24" font-size="16" text-anchor="middle" font-weight="700">Three lines of defence</text>
<rect x="12" y="44" width="376" height="52" rx="8" fill="#f5f3ff" stroke="#8b5cf6" stroke-width="1.5"/>
<text x="200" y="65" text-anchor="middle" font-weight="600" fill="#6d28d9">Board and its risk committee</text>
<text x="200" y="85" text-anchor="middle">sets appetite, holds everyone to it</text>
<line x1="200.0" y1="97.0" x2="200.0" y2="103.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="200.0,111.0 204.0,103.0 196.0,103.0" fill="#6b7280"/>
<rect x="12" y="112" width="376" height="58" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
<text x="200" y="136" text-anchor="middle" font-weight="600" fill="#1d4ed8">1st line — the business</text>
<text x="200" y="156" text-anchor="middle">owns the risk: lends, prices, monitors</text>
<rect x="12" y="180" width="376" height="58" rx="8" fill="#f0fdfa" stroke="#14b8a6" stroke-width="1.5"/>
<text x="200" y="204" text-anchor="middle" font-weight="600" fill="#0f766e">2nd line — risk and compliance</text>
<text x="200" y="224" text-anchor="middle">sets the rules, challenges, validates</text>
<rect x="12" y="248" width="376" height="58" rx="8" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
<text x="200" y="272" text-anchor="middle" font-weight="600" fill="#b45309">3rd line — internal audit</text>
<text x="200" y="292" text-anchor="middle">independent check that it all works</text>
<rect x="12" y="316" width="376" height="52" rx="8" fill="#f3f4f6" stroke="#6b7280" stroke-width="1.5"/>
<text x="200" y="347" text-anchor="middle" font-weight="600" fill="#374151">Outside: regulators, external auditors</text>
</g>
</svg>

| Committee | Decides |
|---|---|
| Board risk committee | Risk appetite, major policies, the largest exposures |
| Credit committee | Large or out-of-policy credit decisions |
| Model risk committee | Model approvals and validation findings |
| Impairment committee | IFRS 9 scenarios, weights, overlays — the final ECL number |
| Asset-liability committee (ALCO) | The balance sheet, capital and liquidity plans |

Controls come in two kinds — **preventive** (maker-checker, system validations, access rights) and **detective** (reconciliations, DQ dashboards, reviews) — and in two modes, manual and automated. Key controls are tested by the second line of defence and audited by the third.

**Auditors and regulators** want evidence, not assurances: policies and their approvals, committee minutes, model documentation and validation reports, reconciliations with every break explained, DQ logs, test evidence and sign-offs for every change, and access reviews. The analyst's own documents — requirements, traceability, test results — are part of that evidence.

### Check yourself

1. Why must reference data be effective-dated?
2. The ECL engine shows 12,450 exposures, but core banking extracted 12,500. What do you check?
3. Name the four groups of BCBS 239 principles.
4. A report figure is wrong because a product was mapped to the wrong exposure class. Where do you fix it?

<details>
<summary>Answers</summary>

1. So that any past calculation can be reproduced exactly, with the parameters that were in force at the time — essential for audit, restatements and explaining movements.
2. The reconciliation at each hop: the staging load (record counts), transformation rejects (which 50 records failed which rule), and scope filters (products deliberately excluded). Then decide whether the difference is explained and approved, or a break to fix.
3. Governance and infrastructure; risk data aggregation; risk reporting; supervisory review.
4. At source — in the product-to-exposure-class mapping in reference data — with an issue logged and the root cause fixed. Never with a manual adjustment in the report.

</details>

## Part 12 — The BA toolkit

The analyst's job is to make change safe: capture exactly what the business and the rules need, specify it so it can be built and tested, and prove it works before and after it goes live.

<svg viewBox="0 0 400 496" width="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Change lifecycle: need, business requirements, functional specification and user stories, build, system integration testing, user acceptance testing, parallel run, go-live and post-production validation" style="width:100%;max-width:400px;height:auto;display:block;margin:1rem auto">
<g font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#1f2937">
<text x="200" y="24" font-size="16" text-anchor="middle" font-weight="700">How a change reaches production</text>
<rect x="12" y="44" width="376" height="38" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
<text x="24" y="68" font-weight="600" fill="#1d4ed8">Need</text>
<text x="376" y="68" text-anchor="end" fill="#4b5563">business owner</text>
<line x1="200.0" y1="83.0" x2="200.0" y2="85.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="200.0,93.0 204.0,85.0 196.0,85.0" fill="#6b7280"/>
<rect x="12" y="94" width="376" height="38" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
<text x="24" y="118" font-weight="600" fill="#1d4ed8">BRD</text>
<text x="376" y="118" text-anchor="end" fill="#4b5563">what and why</text>
<line x1="200.0" y1="133.0" x2="200.0" y2="135.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="200.0,143.0 204.0,135.0 196.0,135.0" fill="#6b7280"/>
<rect x="12" y="144" width="376" height="38" rx="8" fill="#f0fdfa" stroke="#14b8a6" stroke-width="1.5"/>
<text x="24" y="168" font-weight="600" fill="#0f766e">FSD, stories</text>
<text x="376" y="168" text-anchor="end" fill="#4b5563">how, exactly</text>
<line x1="200.0" y1="183.0" x2="200.0" y2="185.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="200.0,193.0 204.0,185.0 196.0,185.0" fill="#6b7280"/>
<rect x="12" y="194" width="376" height="38" rx="8" fill="#f5f3ff" stroke="#8b5cf6" stroke-width="1.5"/>
<text x="24" y="218" font-weight="600" fill="#6d28d9">Build</text>
<text x="376" y="218" text-anchor="end" fill="#4b5563">technology</text>
<line x1="200.0" y1="233.0" x2="200.0" y2="235.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="200.0,243.0 204.0,235.0 196.0,235.0" fill="#6b7280"/>
<rect x="12" y="244" width="376" height="38" rx="8" fill="#f5f3ff" stroke="#8b5cf6" stroke-width="1.5"/>
<text x="24" y="268" font-weight="600" fill="#6d28d9">SIT</text>
<text x="376" y="268" text-anchor="end" fill="#4b5563">systems fit together</text>
<line x1="200.0" y1="283.0" x2="200.0" y2="285.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="200.0,293.0 204.0,285.0 196.0,285.0" fill="#6b7280"/>
<rect x="12" y="294" width="376" height="38" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
<text x="24" y="318" font-weight="600" fill="#047857">UAT</text>
<text x="376" y="318" text-anchor="end" fill="#4b5563">business users</text>
<line x1="200.0" y1="333.0" x2="200.0" y2="335.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="200.0,343.0 204.0,335.0 196.0,335.0" fill="#6b7280"/>
<rect x="12" y="344" width="376" height="38" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
<text x="24" y="368" font-weight="600" fill="#047857">Parallel run</text>
<text x="376" y="368" text-anchor="end" fill="#4b5563">old vs new</text>
<line x1="200.0" y1="383.0" x2="200.0" y2="385.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="200.0,393.0 204.0,385.0 196.0,385.0" fill="#6b7280"/>
<rect x="12" y="394" width="376" height="38" rx="8" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
<text x="24" y="418" font-weight="600" fill="#b45309">Go-live</text>
<text x="376" y="418" text-anchor="end" fill="#4b5563">change board</text>
<line x1="200.0" y1="433.0" x2="200.0" y2="435.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="200.0,443.0 204.0,435.0 196.0,435.0" fill="#6b7280"/>
<rect x="12" y="444" width="376" height="38" rx="8" fill="#f3f4f6" stroke="#6b7280" stroke-width="1.5"/>
<text x="24" y="468" font-weight="600" fill="#374151">PPV, hypercare</text>
<text x="376" y="468" text-anchor="end" fill="#4b5563">first cycles</text>
</g>
</svg>

### BRD and FSD

| | Business requirements document (BRD) | Functional specification document (FSD) |
|---|---|---|
| Answers | What does the business need, and why? | How exactly will the system behave? |
| Written for | Business owners and sponsors | Developers and testers |
| Contains | Objectives, scope, stakeholders, current and future process, business rules, reporting needs, success measures | Data mappings, calculations, screen behaviour, validations, interfaces, error handling, non-functional requirements |
| Example line | "Off-balance-sheet exposures must use Basel 3.1 CCFs from 1 January 2027." | "Rule TR-CCF-004: where product type is commitment and cancellable is Y, set CCF to 10%." |

Agile teams carry the same content as epics and user stories, with acceptance criteria.

### Eliciting requirements

| Technique | Best for |
|---|---|
| Interviews | Individual experts: a model owner, a credit officer |
| Workshops | Agreeing rules across risk, finance and technology |
| Document analysis | Regulations, policies, existing specifications |
| Observation | How the process really runs, workarounds included |
| Prototypes and wireframes | Screens and reports people can react to |
| Data analysis | What the data actually contains — before promising what it can do |

### User stories and acceptance criteria

> As a regulatory reporting analyst, I want off-balance-sheet commitments to receive the Basel 3.1 credit conversion factor, so that RWA is correct from 1 January 2027.

Acceptance criteria in Gherkin — given, when, then:

```gherkin
Scenario: Cancellable commitment
  Given an undrawn commitment of 1,000,000
  And the facility is unconditionally cancellable
  When the RWA run executes for 31 January 2027
  Then the CCF is 10%
  And the EAD is 100,000

Scenario: Missing cancellability flag
  Given an undrawn commitment with no cancellability flag
  When the RWA run executes for 31 January 2027
  Then the CCF is 40%
  And a data-quality exception is raised for the facility

Scenario: Run date before go-live
  Given an unconditionally cancellable commitment
  When the RWA run executes for 31 December 2026
  Then the CCF is 0%
```

Good stories are **INVEST**: independent, negotiable, valuable, estimable, small and testable. Teams agree a **definition of ready** — what a story needs before work starts: criteria, data, sign-offs — and a **definition of done**: built, tested, documented and accepted.

### Prioritising and tracing

**MoSCoW** — must have, should have, could have, won't have this time — keeps scope honest when a regulatory date is fixed.

A **requirements traceability matrix** links each requirement to its design, its test cases and its defects, so nothing is built untested or tested unbuilt:

| Requirement | Design | Test cases | Status |
|---|---|---|---|
| BR-12 Basel 3.1 CCFs | FSD 4.3, rule TR-CCF-004 | TC-101 to TC-108 | Passed |
| BR-13 CCF data-quality exception | FSD 4.4 | TC-109, TC-110 | Defect D-57 open |

**Non-functional requirements** matter as much in risk as the calculations: the month-end run finishes within four hours; every result can be reproduced; every change is logged; users see only the portfolios they are entitled to.

### UML

| Diagram | Shows | Credit risk example |
|---|---|---|
| Use case | Who does what with a system | A credit officer approves a limit; an analyst runs ECL |
| Activity, with swimlanes | A process flowing across roles | Limit approval, from request to sanction |
| Sequence | Messages between systems over time | Origination system, bureau, decision engine, core banking |
| State | The states an object passes through | A loan, from application to closure |
| Class | Data entities and their relationships | Counterparty, facility, exposure, collateral |

Business process model and notation (BPMN) is a common alternative for process flows.

<svg viewBox="0 0 400 514" width="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="State diagram of a loan: applied, declined or approved, performing, overdue and possibly cured, default, then restructured, recovered or written off; performing loans close when repaid" style="width:100%;max-width:400px;height:auto;display:block;margin:1rem auto">
<g font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#1f2937">
<text x="200" y="24" font-size="16" text-anchor="middle" font-weight="700">UML state diagram: a loan</text>
<rect x="20" y="44" width="150" height="40" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
<text x="95" y="69" text-anchor="middle" font-weight="600" fill="#1d4ed8">Applied</text>
<rect x="230" y="44" width="150" height="40" rx="8" fill="#f3f4f6" stroke="#6b7280" stroke-width="1.5"/>
<text x="305" y="69" text-anchor="middle" font-weight="600" fill="#374151">Declined</text>
<line x1="170.0" y1="64.0" x2="220.0" y2="64.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="228.0,64.0 220.0,60.0 220.0,68.0" fill="#6b7280"/>
<rect x="20" y="112" width="150" height="40" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
<text x="95" y="137" text-anchor="middle" font-weight="600" fill="#1d4ed8">Approved</text>
<line x1="95.0" y1="85.0" x2="95.0" y2="102.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="95.0,110.0 99.0,102.0 91.0,102.0" fill="#6b7280"/>
<rect x="20" y="180" width="150" height="40" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
<text x="95" y="205" text-anchor="middle" font-weight="600" fill="#047857">Performing</text>
<line x1="95.0" y1="153.0" x2="95.0" y2="170.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="95.0,178.0 99.0,170.0 91.0,170.0" fill="#6b7280"/>
<rect x="230" y="180" width="150" height="40" rx="8" fill="#f3f4f6" stroke="#6b7280" stroke-width="1.5"/>
<text x="305" y="205" text-anchor="middle" font-weight="600" fill="#374151">Closed</text>
<line x1="170.0" y1="200.0" x2="220.0" y2="200.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="228.0,200.0 220.0,196.0 220.0,204.0" fill="#6b7280"/>
<text x="199" y="192" text-anchor="middle" fill="#4b5563">repaid</text>
<rect x="20" y="262" width="150" height="40" rx="8" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
<text x="95" y="287" text-anchor="middle" font-weight="600" fill="#b45309">Overdue 1–89</text>
<line x1="80.0" y1="221.0" x2="80.0" y2="252.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="80.0,260.0 84.0,252.0 76.0,252.0" fill="#6b7280"/>
<line x1="120.0" y1="260.0" x2="120.0" y2="229.0" stroke="#6b7280" stroke-width="1.6" stroke-dasharray="5 4"/>
<polygon points="120.0,221.0 116.0,229.0 124.0,229.0" fill="#6b7280"/>
<text x="128" y="246" fill="#4b5563">cured</text>
<rect x="20" y="344" width="150" height="40" rx="8" fill="#fff1f2" stroke="#f43f5e" stroke-width="1.5"/>
<text x="95" y="369" text-anchor="middle" font-weight="600" fill="#be123c">Default 90+</text>
<line x1="95.0" y1="303.0" x2="95.0" y2="334.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="95.0,342.0 99.0,334.0 91.0,334.0" fill="#6b7280"/>
<text x="105" y="330" fill="#4b5563">90 DPD or UTP</text>
<rect x="230" y="360" width="150" height="40" rx="8" fill="#f5f3ff" stroke="#8b5cf6" stroke-width="1.5"/>
<text x="305" y="385" text-anchor="middle" font-weight="600" fill="#6d28d9">Restructured</text>
<polyline points="170,364 200,364 200,380 222,380" fill="none" stroke="#6b7280" stroke-width="1.6"/>
<line x1="222.0" y1="380.0" x2="221.0" y2="380.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="229.0,380.0 221.0,376.0 221.0,384.0" fill="#6b7280"/>
<rect x="230" y="412" width="150" height="40" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
<text x="305" y="437" text-anchor="middle" font-weight="600" fill="#047857">Recovered</text>
<polyline points="170,364 200,364 200,432 222,432" fill="none" stroke="#6b7280" stroke-width="1.6"/>
<line x1="222.0" y1="432.0" x2="221.0" y2="432.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="229.0,432.0 221.0,428.0 221.0,436.0" fill="#6b7280"/>
<rect x="230" y="464" width="150" height="40" rx="8" fill="#f3f4f6" stroke="#6b7280" stroke-width="1.5"/>
<text x="305" y="489" text-anchor="middle" font-weight="600" fill="#374151">Written off</text>
<polyline points="170,364 200,364 200,484 222,484" fill="none" stroke="#6b7280" stroke-width="1.6"/>
<line x1="222.0" y1="484.0" x2="221.0" y2="484.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="229.0,484.0 221.0,480.0 221.0,488.0" fill="#6b7280"/>
</g>
</svg>

A state diagram is a specification. Every arrow is a transition the system must allow, with a trigger and a rule; anything without an arrow must be impossible. "Can a written-off loan return to performing?" is answered by the diagram, not by debate.

<svg viewBox="0 0 400 430" width="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sequence diagram: the loan origination system pulls a bureau report, sends the application to the decision engine, receives an approval and asks core banking to create the loan" style="width:100%;max-width:400px;height:auto;display:block;margin:1rem auto">
<g font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#1f2937">
<text x="200" y="24" font-size="16" text-anchor="middle" font-weight="700">UML sequence: a retail decision</text>
<rect x="4" y="40" width="92" height="36" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
<text x="50" y="63" text-anchor="middle" font-weight="600" fill="#1d4ed8">LOS</text>
<line x1="50" y1="77" x2="50" y2="420" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="4 4"/>
<rect x="104" y="40" width="92" height="36" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
<text x="150" y="63" text-anchor="middle" font-weight="600" fill="#1d4ed8">Bureau</text>
<line x1="150" y1="77" x2="150" y2="420" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="4 4"/>
<rect x="204" y="40" width="92" height="36" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
<text x="250" y="63" text-anchor="middle" font-weight="600" fill="#1d4ed8">Decision</text>
<line x1="250" y1="77" x2="250" y2="420" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="4 4"/>
<rect x="304" y="40" width="92" height="36" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
<text x="350" y="63" text-anchor="middle" font-weight="600" fill="#1d4ed8">Core bank</text>
<line x1="350" y1="77" x2="350" y2="420" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="4 4"/>
<line x1="50.0" y1="110.0" x2="142.0" y2="110.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="150.0,110.0 142.0,106.0 142.0,114.0" fill="#6b7280"/>
<rect x="50.6" y="86" width="98.8" height="20" fill="#ffffff"/>
<text x="100" y="102" text-anchor="middle" fill="#1f2937">pull report</text>
<line x1="150.0" y1="162.0" x2="58.0" y2="162.0" stroke="#6b7280" stroke-width="1.6" stroke-dasharray="5 4"/>
<polygon points="50.0,162.0 58.0,166.0 58.0,158.0" fill="#6b7280"/>
<rect x="50.6" y="138" width="98.8" height="20" fill="#ffffff"/>
<text x="100" y="154" text-anchor="middle" fill="#4b5563">score, DPDs</text>
<line x1="50.0" y1="214.0" x2="242.0" y2="214.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="250.0,214.0 242.0,210.0 242.0,218.0" fill="#6b7280"/>
<rect x="63.5" y="190" width="173.0" height="20" fill="#ffffff"/>
<text x="150" y="206" text-anchor="middle" fill="#1f2937">application + bureau</text>
<line x1="250.0" y1="266.0" x2="58.0" y2="266.0" stroke="#6b7280" stroke-width="1.6" stroke-dasharray="5 4"/>
<polygon points="50.0,266.0 58.0,270.0 58.0,262.0" fill="#6b7280"/>
<rect x="71.8" y="242" width="156.5" height="20" fill="#ffffff"/>
<text x="150" y="258" text-anchor="middle" fill="#4b5563">approve ₹6L at 14%</text>
<line x1="50.0" y1="318.0" x2="342.0" y2="318.0" stroke="#6b7280" stroke-width="1.6"/>
<polygon points="350.0,318.0 342.0,314.0 342.0,322.0" fill="#6b7280"/>
<rect x="134.1" y="294" width="131.8" height="20" fill="#ffffff"/>
<text x="200" y="310" text-anchor="middle" fill="#1f2937">create the loan</text>
<line x1="350.0" y1="370.0" x2="58.0" y2="370.0" stroke="#6b7280" stroke-width="1.6" stroke-dasharray="5 4"/>
<polygon points="50.0,370.0 58.0,374.0 58.0,366.0" fill="#6b7280"/>
<rect x="150.6" y="346" width="98.8" height="20" fill="#ffffff"/>
<text x="200" y="362" text-anchor="middle" fill="#4b5563">loan number</text>
</g>
</svg>

### Wireframes

A wireframe fixes the layout before anyone builds. Annotate it with each field's source and format, the validations and error messages, who can see or edit what, the empty, loading and error states, and every action — especially those needing maker-checker approval. Low-fidelity sketches settle the structure; high-fidelity mock-ups settle the detail.

### Testing

| Level | Who | Proves |
|---|---|---|
| Unit | Developers | Each component works |
| System integration testing (SIT) | Test team | The systems work together; data flows end to end |
| User acceptance testing (UAT) | Business users, with the analyst | It does what the business needs, on realistic data |
| Regression | Test team, often automated | Nothing that worked before is broken |
| Parallel run | Business and analyst | Old and new systems give the same answers — or explained differences — over several cycles |
| Post-production validation (PPV) | Analyst and business | The first live runs are right |

A test case needs an ID, the requirement it covers, pre-conditions, test data, steps, the **expected result, worked out in advance**, the actual result and a status.

Boundaries catch the most defects. Take a default rule written as "more than 90 days past due":

| Case | DPD | Expected |
|---|---|---|
| TC-201 | 89 | Performing (SMA-2 in India) |
| TC-202 | 90 | Performing — "more than 90" starts at 91 |
| TC-203 | 91 | Default, Stage 3 |

The wording decides the middle case. Pin the rule down in the requirement, then test both sides of it.

Defects are triaged on two axes:

| | Meaning | Example |
|---|---|---|
| Severity | How bad the impact is | RWA wrong for every guarantee: critical |
| Priority | How soon it must be fixed | A typo in a report heading: low severity, but high priority before the regulator sees it |

A **parallel run** compares old and new over two or three reporting cycles, at portfolio and loan level, against tolerances agreed in advance, with every difference explained — either expected (the new rule) or a defect. **PPV** checks the first live runs: record counts, totals against the general ledger, a sample of loans recomputed by hand, dashboards against source.

### Agile delivery

| Scrum | |
|---|---|
| Roles | Product owner, who sets priorities (the analyst often acts as proxy); Scrum master, who runs the process; developers |
| Events | Sprint planning, daily stand-up, sprint review, retrospective, backlog refinement |
| Artefacts | Product backlog, sprint backlog, increment |

**Estimation.** Teams size stories in relative **story points** — often on the Fibonacci scale of 1, 2, 3, 5, 8, 13 — through planning poker. **Velocity** is the points completed per sprint. A backlog of 240 points at a velocity of 30 needs about 8 sprints — 16 weeks in two-week sprints — before leave, holidays and the month-end support that risk teams always carry. Plan to capacity, not to hope.

**Release management.** A release plan groups stories into dated releases. Each release goes to a **change advisory board (CAB)** with its test evidence, a rollback plan and a cut-over plan; a **go/no-go** meeting makes the final call; and a **hypercare** period follows. Regulatory changes have fixed dates, so teams run agile inside a fixed deadline, with MoSCoW doing the trade-offs. Large programmes coordinate many teams through a Scrum of Scrums, or through programme-increment planning in SAFe.

### Keeping control

| RAID log | Example |
|---|---|
| Risk | Valuation dates missing for 8% of property collateral — may push exposures into the unsecured risk weight |
| Assumption | The RBI's final SA-CCR rules will match the June 2026 draft |
| Issue | The test environment lacks December data |
| Dependency | The group reference-data release on 15 November |

Add a decision log, clear escalation paths, and status reports whose RAG colours have written definitions, and nobody is surprised.

### Transition and training

Moving to a new framework — Basel 3.1, ECL, SA-CCR — changes jobs, not only systems. Plan business readiness (processes, controls and procedures updated), training by role (hands-on in a test environment, quick-reference guides, train-the-trainer for large groups), communications, and hypercare with a named contact.

### SQL, Python and Excel

A handful of patterns covers most credit risk data work.

```sql
-- Exposure and ECL by sector and stage, for one reporting date
SELECT c.sector, e.stage,
       SUM(e.ead)              AS ead,
       SUM(e.ecl)              AS ecl,
       SUM(e.ecl) / SUM(e.ead) AS coverage
FROM   exposure e
JOIN   counterparty c ON c.counterparty_id = e.counterparty_id
WHERE  e.reporting_date = DATE '2027-03-31'
GROUP  BY c.sector, e.stage
ORDER  BY ead DESC;

-- DPD buckets
SELECT CASE WHEN dpd = 0   THEN 'Current'
            WHEN dpd <= 30 THEN '1-30'
            WHEN dpd <= 60 THEN '31-60'
            WHEN dpd <= 90 THEN '61-90'
            ELSE '90+' END AS bucket,
       COUNT(*)     AS accounts,
       SUM(balance) AS balance
FROM   loan_snapshot
WHERE  reporting_date = DATE '2027-03-31'
GROUP  BY 1;

-- Latest rating for each counterparty
SELECT *
FROM  (SELECT r.*,
              ROW_NUMBER() OVER (PARTITION BY counterparty_id
                                 ORDER BY rating_date DESC) AS rn
       FROM   rating r) x
WHERE  rn = 1;

-- Month-on-month exposure jumps: candidates for outlier review
SELECT counterparty_id, reporting_date, ead,
       ead / NULLIF(LAG(ead) OVER (PARTITION BY counterparty_id
                                   ORDER BY reporting_date), 0) AS ratio
FROM   exposure_by_counterparty;

-- Data quality: missing sectors, duplicate identifiers
SELECT SUM(CASE WHEN sector IS NULL THEN 1 ELSE 0 END) AS missing_sector
FROM   counterparty;

SELECT lei, COUNT(*) AS n
FROM   counterparty
GROUP  BY lei
HAVING COUNT(*) > 1;

-- Reconciliation: source extract against the warehouse
SELECT COALESCE(s.account_id, w.account_id) AS account_id,
       s.balance AS source_balance,
       w.balance AS warehouse_balance
FROM   source_extract s
FULL OUTER JOIN warehouse_exposure w ON w.account_id = s.account_id
WHERE  s.account_id IS NULL
   OR  w.account_id IS NULL
   OR  ABS(s.balance - w.balance) > 1;
```

```python
import numpy as np
import pandas as pd

# Roll-rate matrix: last month's bucket against this month's
roll = pd.crosstab(df["bucket_prev"], df["bucket_now"], normalize="index")

# Population stability index
def psi(expected, actual):
    e, a = np.asarray(expected), np.asarray(actual)
    return float(np.sum((a - e) * np.log(a / e)))

psi([0.10, 0.20, 0.40, 0.20, 0.10], [0.04, 0.14, 0.36, 0.28, 0.18])  # 0.1545
```

| Excel task | Formula pattern |
|---|---|
| Exposure for one sector and stage | `=SUMIFS(EAD, Sector, "Steel", Stage, 2)` |
| PD for a grade | `=XLOOKUP(Grade, MasterScale[Grade], MasterScale[PD])` |
| Accounts 31–60 days past due | `=COUNTIFS(DPD, ">30", DPD, "<=60")` |
| Weighted ECL across scenarios | `=SUMPRODUCT(Weights, ScenarioECL)` |
| What-if on scenario weights | A one- or two-variable Data Table over the weight cells |

In BI tools the same logic lives in measures over a star schema: a fact table of exposures by date, joined to dimensions for counterparty, product, sector and date.

### Check yourself

1. What belongs in a BRD but not in an FSD?
2. Write the boundary test cases for the rule "SICR if lifetime PD is at least twice its value at origination".
3. Give an example of a defect with high severity but low priority.
4. The backlog is 300 points, velocity is 25, and the regulatory date is 10 sprints away. What do you do?

<details>
<summary>Answers</summary>

1. The business need and its rationale: objectives, scope, stakeholders, current and future process, business rules in business language, success measures. The FSD specifies system behaviour: mappings, calculations, validations, interfaces.
2. A PD ratio of 1.99 stays in Stage 1; exactly 2.00 goes to Stage 2 ("at least"); 2.01 goes to Stage 2. Add a case for a missing origination PD: the defined fallback applies and a data-quality exception is raised.
3. A calculation error in a legacy report that nobody uses and that is being decommissioned next month: severe if it were used, but low priority.
4. 300 ÷ 25 = 12 sprints of work in 10. Cut to the must-haves with MoSCoW, check whether capacity can grow, sequence the regulatory must-haves first, and escalate the gap early through the RAID log. Don't plan on hope.

</details>

## Part 13 — Rapid-fire interview bank

The questions interviews ask most, with short answers you can say out loud. Open one only after answering it yourself.

### Lending and measurement

<details>
<summary>What is credit risk?</summary>

The risk of loss because a borrower or counterparty fails to meet its obligations, or becomes less likely to. It includes default, migration, counterparty, concentration, settlement and country risk.

</details>

<details>
<summary>Define PD, LGD and EAD, and give the expected loss formula.</summary>

PD is the probability of default within a horizon, usually a year. LGD is the share of the exposure lost if default happens, after recoveries and costs. EAD is the amount owed at default. EL = PD × LGD × EAD.

</details>

<details>
<summary>Expected versus unexpected loss — who covers what?</summary>

Expected loss is the average and is covered by provisions and pricing. Unexpected loss is the loss above the average in a bad year, up to a confidence level (99.9% in Basel), and is covered by capital. Beyond that sits stress testing and resolution planning.

</details>

<details>
<summary>What is a default?</summary>

Under Basel, a material obligation more than 90 days past due, or the bank judging the borrower unlikely to pay without selling collateral. In India, the NPA definition: overdue more than 90 days, or a cash-credit account out of order for 90 days.

</details>

<details>
<summary>PIT versus TTC PD?</summary>

Point-in-time PD reflects today's economy and rises in a downturn; it is used for IFRS 9 and pricing. Through-the-cycle PD reflects an average year and stays stable; it is used for Basel capital. Most models are hybrids.

</details>

<details>
<summary>What is a CCF? Give examples by product.</summary>

The credit conversion factor turns an undrawn or off-balance-sheet amount into exposure: EAD = drawn + CCF × undrawn. Under Basel 3.1: unconditionally cancellable commitments 10%; other commitments 40%; short-term trade LCs 20%; performance guarantees and bid bonds 50%; financial guarantees and acceptances 100%.

</details>

<details>
<summary>Financial guarantee versus performance guarantee?</summary>

A financial guarantee covers a borrower's debt, so it pays out whenever the borrower doesn't: 100% CCF. A performance guarantee covers delivery on a contract, which fails less often and usually only in part: 50% CCF.

</details>

<details>
<summary>What are DSCR, ICR and FOIR?</summary>

DSCR (debt service coverage) is cash available for debt service divided by principal plus interest due. ICR (interest cover) is EBIT divided by interest. FOIR is all EMIs, including the new one, divided by net monthly income — the retail affordability test.

</details>

<details>
<summary>What is drawing power?</summary>

The amount a borrower may actually draw on a working-capital line at any moment: stock less unpaid creditors, and receivables under 90 days old, each after the bank's margin. The limit is the ceiling; drawing power is the ceiling this month.

</details>

<details>
<summary>What happens when a covenant is breached?</summary>

It is not automatically a default. The bank gains the right to act: waive (often for a fee), reset the covenant, reprice, take more security or, ultimately, call the loan.

</details>

### Provisions

<details>
<summary>What are the IFRS 9 stages?</summary>

Stage 1: performing, 12-month ECL. Stage 2: significant increase in credit risk since origination, lifetime ECL. Stage 3: credit-impaired, lifetime ECL, with interest on the net amount. POCI assets carry lifetime ECL from day one.

</details>

<details>
<summary>What is SICR, and what triggers it?</summary>

A significant increase in credit risk since origination. Triggers: a relative and absolute rise in lifetime PD, watchlist or forbearance flags, and the 30-days-past-due backstop. Low-credit-risk (investment-grade) exposures may be exempt.

</details>

<details>
<summary>Why use probability-weighted scenarios?</summary>

Losses respond non-linearly to the economy — a downturn adds more loss than an upturn removes — so the base case alone understates expected loss. IFRS 9 requires an unbiased, probability-weighted estimate.

</details>

<details>
<summary>What is a management overlay?</summary>

An adjustment on top of modelled ECL for a risk the models can't see: a new shock, a data gap, a sector event. It must be specific, quantified, approved, documented and released when the risk passes.

</details>

<details>
<summary>IFRS 9 versus CECL?</summary>

IFRS 9 stages loans: 12-month ECL until risk rises significantly, lifetime after. CECL, in the US, books lifetime ECL from day one for every loan, with no stages.

</details>

### Capital and Basel

<details>
<summary>What are RWA, and how are they calculated under the standardised approach?</summary>

Risk-weighted assets scale exposures by risk: RWA = EAD × risk weight, with weights from regulatory tables by exposure class, rating and — for property — LTV. Capital ratios divide capital by total RWA.

</details>

<details>
<summary>SA versus IRB, and F-IRB versus A-IRB?</summary>

Under the SA, risk weights come from tables. Under IRB, the bank's own models feed a regulatory formula. In F-IRB the bank estimates only PD; in A-IRB it also estimates LGD and EAD. Basel 3.1 bars A-IRB for large corporates and financial institutions.

</details>

<details>
<summary>What goes into CET1, AT1 and Tier 2?</summary>

CET1: ordinary shares, retained earnings and reserves, less deductions such as goodwill, certain deferred tax assets and any IRB provision shortfall. AT1: perpetual, subordinated instruments with discretionary coupons that convert or are written down at a trigger. Tier 2: subordinated debt of at least five years, plus limited general provisions.

</details>

<details>
<summary>What are the capital buffers, and what happens if a bank dips into them?</summary>

The conservation buffer (2.5%), the countercyclical buffer (0–2.5%) and systemic surcharges, all in CET1. Dipping in is not a breach, but it triggers automatic limits on dividends, bonuses and AT1 coupons until the bank rebuilds.

</details>

<details>
<summary>Why were the AT1 bonds of Yes Bank and Credit Suisse written off?</summary>

Both were rescues at the point of non-viability. AT1 is designed to absorb losses before depositors do. Yes Bank's ₹8,415 crore was written off in 2020; at Credit Suisse in 2023, about CHF 16 billion went to zero while shareholders still received something — which is why that case was so contentious.

</details>

<details>
<summary>Basel 3 versus Basel 3.1 — what changed?</summary>

Basel 3 fixed the numerator: more and better capital, buffers, leverage and liquidity. Basel 3.1 fixes the denominator: a 72.5% output floor, a more granular standardised approach, limits and floors on IRB, new CCFs, new CVA and operational risk approaches, and FRTB for market risk.

</details>

<details>
<summary>What is the output floor? Give an example.</summary>

IRB banks' total RWA cannot fall below 72.5% of what the standardised approach would give. If models give 5,000 and the SA gives 8,000, the floor is 5,800 and it binds.

</details>

<details>
<summary>Why have a leverage ratio?</summary>

It is Tier 1 capital divided by total exposure, ignoring risk weights — a backstop against model error and excessive balance-sheet growth. The Basel minimum is 3%.

</details>

<details>
<summary>What is Pillar 2 and the ICAAP?</summary>

Pillar 2 is supervisory review. In the ICAAP, the bank assesses capital for every material risk, including those Pillar 1 misses — concentration, interest rate risk in the banking book, strategic risk — and the supervisor can require more.

</details>

<details>
<summary>What is the large exposures limit?</summary>

Exposure to one counterparty, or a group of connected ones, capped at 25% of Tier 1 under Basel (15% between G-SIBs). India uses 20% for a single counterparty and 25% for a group.

</details>

### Counterparty risk

<details>
<summary>How does counterparty credit risk differ from loan risk?</summary>

The exposure is uncertain and moves with markets, and either side can end up owed money. It is measured with simulated exposure profiles or SA-CCR, and reduced by netting and collateral.

</details>

<details>
<summary>EE, PFE and EPE?</summary>

Expected exposure is the average positive exposure at a future date. Potential future exposure is a high percentile of it, used for limits. Expected positive exposure is EE averaged over time.

</details>

<details>
<summary>What is SA-CCR?</summary>

The standardised approach for counterparty credit risk: EAD = 1.4 × (replacement cost + potential future exposure), with add-ons by asset class and proper recognition of netting and margin. It replaced the current exposure method.

</details>

<details>
<summary>What is CVA, and why does it attract capital?</summary>

The credit valuation adjustment is the market value of counterparty default risk — the markdown on a derivative for the chance the counterparty defaults. In 2008, about two-thirds of counterparty losses came from CVA moves rather than defaults, so Basel III added a CVA capital charge; Basel 3.1 replaced it with BA-CVA and SA-CVA.

</details>

<details>
<summary>What is wrong-way risk?</summary>

Exposure rising as the counterparty's credit quality falls — generally through market correlation, or specifically through a legal link, such as a counterparty posting its own shares as collateral.

</details>

<details>
<summary>What do netting and a CSA do?</summary>

Netting under an ISDA master agreement lets all trades with a counterparty be closed out as one net amount. A credit support annex adds collateral — variation margin for current value, initial margin for future moves.

</details>

### Models and validation

<details>
<summary>AUC, Gini and KS — how do they relate?</summary>

AUC is the chance the model ranks a random defaulter as riskier than a random non-defaulter. Gini = 2 × AUC − 1, and equals the accuracy ratio from the CAP curve. KS is the widest gap between the cumulative score distributions of bads and goods.

</details>

<details>
<summary>What is calibration, and how is it tested?</summary>

Whether PD levels match observed default rates. Grade by grade with the binomial or Jeffreys test; across all grades with Hosmer–Lemeshow; overall with the Brier score — reported as traffic lights.

</details>

<details>
<summary>Why is accuracy misleading for default models?</summary>

Defaults are rare: with 5% defaults, predicting "no default" for everyone scores 95% accuracy and catches nothing. Use recall, the false positive rate and ranking measures, weighed by the cost of each error.

</details>

<details>
<summary>What is PSI, and what are its thresholds?</summary>

The population stability index measures how far the score distribution has moved from development. Below 0.1 stable; 0.1–0.25 investigate; above 0.25 significant — the model may no longer apply.

</details>

<details>
<summary>What are WoE and IV?</summary>

Weight of evidence is the log of a bin's share of goods over its share of bads. Information value sums the differences in shares, weighted by WoE, across bins: below 0.02 useless, 0.1–0.3 medium, 0.3–0.5 strong, above 0.5 suspicious.

</details>

### Portfolio, data and delivery

<details>
<summary>What is risk appetite? Trigger versus limit?</summary>

The board's statement of how much risk the bank will take, turned into metrics and limits. A trigger means act and plan; a limit means escalate with a remediation plan.

</details>

<details>
<summary>What are roll rates and vintage analysis?</summary>

Roll rates are the monthly flows of accounts between delinquency buckets. Vintage analysis tracks each origination cohort by months on book, so newer cohorts can be compared with older ones at the same age.

</details>

<details>
<summary>GNPA, NNPA and PCR?</summary>

GNPA ratio = gross NPAs ÷ gross advances. NNPA ratio = (gross NPAs − provisions) ÷ (gross advances − provisions). PCR = provisions ÷ gross NPAs.

</details>

<details>
<summary>What is BCBS 239?</summary>

The Basel principles for risk data aggregation and reporting — fourteen principles in four groups: governance and infrastructure, data aggregation, risk reporting, supervisory review. In practice: lineage, a data dictionary, reconciliations, automation and adaptability.

</details>

<details>
<summary>What is reference data, and why centralise it?</summary>

The slow-moving lookups every calculation uses: hierarchies, sector codes, product mappings, risk weights, CCFs, master scales, scenarios. Centralised with effective dating and maker-checker control, it gives one truth, reproducible runs and an audit trail.

</details>

<details>
<summary>BRD versus FSD?</summary>

The BRD states what the business needs and why. The FSD states exactly how the system will behave: mappings, calculations, validations, interfaces.

</details>

<details>
<summary>SIT, UAT, parallel run and PPV?</summary>

SIT proves the systems work together. UAT proves the change meets business needs. A parallel run compares old and new over several cycles. PPV checks the first live runs.

</details>

<details>
<summary>How do you estimate and plan sprints?</summary>

Size stories in story points, measure velocity, and divide the backlog by velocity — 240 points at 30 a sprint is about 8 sprints — adjusted for leave and business-as-usual work. Against a fixed regulatory date, prioritise with MoSCoW and escalate gaps early.

</details>

## The whole ecosystem on one screen

| Part | Hold on to this |
|---|---|
| 1 Lending | Thin margins, fat tails: one default can erase years of profit |
| 2 Making a loan | Eight stages everywhere; retail decided by models, SME by model plus analyst, corporate by people |
| 3 Measuring | EL = PD × LGD × EAD; EAD = drawn + CCF × undrawn; unexpected loss, not expected loss, drives capital |
| 4 Mitigation | Collateral cuts EAD or LGD after haircuts; guarantees swap in the guarantor's risk weight |
| 5 IFRS 9 | Stage 1 is 12-month ECL, Stages 2–3 lifetime; SICR is judged against origination; scenarios are probability-weighted |
| 6 Basel | Capital ÷ RWA; CET1 4.5% + AT1 1.5% + Tier 2 2% = 8%, plus buffers; IRB capital is unexpected loss at 99.9% |
| 7 Basel 3.1 | Fixes the denominator: a 72.5% output floor, a finer SA, IRB limits, new CCFs, new CVA and operational risk approaches |
| 8 CCR and CVA | EAD = 1.4 × (RC + PFE); netting and collateral shrink it; CVA prices counterparty default |
| 9 Models | Discrimination (AUC, Gini = 2 × AUC − 1, KS), calibration (binomial, HL), stability (PSI) |
| 10 Portfolio | Appetite → limits → early warnings; roll rates and vintages; stress tests; RAROC |
| 11 The machine | Grain; golden-source reference data; rules as decision tables; DQ; BCBS 239; reconciliations |
| 12 BA toolkit | BRD → FSD → build → SIT → UAT → parallel run → PPV; boundaries catch defects |

## Acronyms

| Acronym | Meaning |
|---|---|
| A-IRB, F-IRB | Advanced and foundation internal ratings-based approaches |
| AT1 | Additional Tier 1 capital |
| AUC, AUROC | Area under the ROC curve |
| BA-CVA, SA-CVA | Basic and standardised approaches for CVA risk |
| BCBS | Basel Committee on Banking Supervision |
| BRD, FSD | Business requirements document; functional specification document |
| CAM | Credit appraisal memo |
| CAP | Cumulative accuracy profile |
| CCB, CCyB | Capital conservation buffer; countercyclical capital buffer |
| CCF | Credit conversion factor |
| CCP | Central counterparty |
| CCR | Counterparty credit risk |
| CECL | Current expected credit loss (US GAAP) |
| CEM | Current exposure method |
| CET1 | Common Equity Tier 1 capital |
| CGTMSE | Credit Guarantee Fund Trust for Micro and Small Enterprises |
| CRILC | Central Repository of Information on Large Credits (RBI) |
| CRM | Credit risk mitigation |
| CRR | Capital Requirements Regulation (EU) |
| CSA | Credit support annex |
| CSI | Characteristic stability index |
| CVA, DVA | Credit and debit valuation adjustments |
| D-SIB, G-SIB | Domestic and global systemically important banks |
| DP | Drawing power |
| DPD | Days past due |
| DQ | Data quality |
| DSCR | Debt service coverage ratio |
| EAD | Exposure at default |
| EBITDA | Earnings before interest, tax, depreciation and amortisation |
| ECL | Expected credit loss |
| EE, EPE, EEPE | Expected exposure; expected positive exposure; effective EPE |
| EIR | Effective interest rate |
| EL, UL | Expected loss; unexpected loss |
| EMI | Equated monthly instalment |
| FOIR | Fixed obligation to income ratio |
| FRTB | Fundamental review of the trading book |
| GNPA, NNPA | Gross and net non-performing assets |
| HHI | Herfindahl–Hirschman index |
| HL | Hosmer–Lemeshow test |
| IBC | Insolvency and Bankruptcy Code (India) |
| ICAAP | Internal capital adequacy assessment process |
| ICR | Interest coverage ratio |
| IFRS 9 | International Financial Reporting Standard 9, Financial Instruments |
| IM, VM | Initial margin; variation margin |
| IRAC | Income recognition and asset classification (RBI norms) |
| IRB | Internal ratings-based approach |
| ISDA | International Swaps and Derivatives Association |
| IV, WoE | Information value; weight of evidence |
| KS | Kolmogorov–Smirnov statistic |
| LEI | Legal entity identifier |
| LGD | Loss given default |
| LOS | Loan origination system |
| LTV | Loan-to-value ratio |
| MDA | Maximum distributable amount |
| MPOR | Margin period of risk |
| MSME, SME | Micro, small and medium enterprises; small and medium-sized enterprise |
| NPA | Non-performing asset |
| PCR | Provision coverage ratio |
| PD | Probability of default |
| PDO | Points to double the odds |
| PFE | Potential future exposure |
| PIT, TTC | Point-in-time; through-the-cycle |
| POCI | Purchased or originated credit-impaired |
| PPV | Post-production validation |
| PRA | Prudential Regulation Authority (UK) |
| PSI | Population stability index |
| RAID | Risks, assumptions, issues and dependencies |
| RAROC | Risk-adjusted return on capital |
| RAS | Risk appetite statement |
| RC | Replacement cost |
| RWA | Risk-weighted assets |
| SA | Standardised approach |
| SA-CCR | Standardised approach for counterparty credit risk |
| SICR | Significant increase in credit risk |
| SIT, UAT | System integration testing; user acceptance testing |
| SMA | Special mention account (RBI) |
| SREP | Supervisory review and evaluation process |
| UTP | Unlikely to pay |
