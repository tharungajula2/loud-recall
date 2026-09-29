---
title: "My Work — Projects, Roles and Skills"
description: "My six projects, Jana Small Finance Bank, Lentra AI and my technical skills, each explained from zero: what it is, how it works, the results and the terms behind it."
subject: life
format: masterclass
order: 1
status: live
updated: 2026-09-28
verified: false
tags:
  - portfolio
  - credit risk
  - business analysis
  - applied ai
---

## At a glance

<svg viewBox="0 0 400 592" width="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="My work on one page: six projects and two roles, each with its one-line point" style="width:100%;max-width:400px;height:auto;display:block;margin:1rem auto">
<g font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#1f2937">
<text x="200.0" y="26.0" text-anchor="middle" font-size="16" font-weight="700">My work on one page</text>
<rect x="12.0" y="44.0" width="376.0" height="60.0" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
<circle cx="36.0" cy="74.0" r="15" fill="#3b82f6"/>
<text x="36.0" y="79.5" text-anchor="middle" font-weight="700" fill="#ffffff">1</text>
<text x="62.0" y="68.0" font-weight="700" fill="#1d4ed8">Retail credit risk system</text>
<text x="62.0" y="89.0">Who defaults, what it costs, what to hold</text>
<rect x="12.0" y="112.0" width="376.0" height="60.0" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
<circle cx="36.0" cy="142.0" r="15" fill="#10b981"/>
<text x="36.0" y="147.5" text-anchor="middle" font-weight="700" fill="#ffffff">2</text>
<text x="62.0" y="136.0" font-weight="700" fill="#047857">Parents Health OS</text>
<text x="62.0" y="157.0">A secure family care console</text>
<rect x="12.0" y="180.0" width="376.0" height="60.0" rx="8" fill="#f5f3ff" stroke="#8b5cf6" stroke-width="1.5"/>
<circle cx="36.0" cy="210.0" r="15" fill="#8b5cf6"/>
<text x="36.0" y="215.5" text-anchor="middle" font-weight="700" fill="#ffffff">3</text>
<text x="62.0" y="204.0" font-weight="700" fill="#6d28d9">Evidence-grounded AI agent</text>
<text x="62.0" y="225.0">Answers only from verified evidence</text>
<rect x="12.0" y="248.0" width="376.0" height="60.0" rx="8" fill="#f0fdfa" stroke="#14b8a6" stroke-width="1.5"/>
<circle cx="36.0" cy="278.0" r="15" fill="#14b8a6"/>
<text x="36.0" y="283.5" text-anchor="middle" font-weight="700" fill="#ffffff">4</text>
<text x="62.0" y="272.0" font-weight="700" fill="#0f766e">Bank churn model</text>
<text x="62.0" y="293.0">Who will leave the bank</text>
<rect x="12.0" y="316.0" width="376.0" height="60.0" rx="8" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
<circle cx="36.0" cy="346.0" r="15" fill="#f59e0b"/>
<text x="36.0" y="351.5" text-anchor="middle" font-weight="700" fill="#ffffff">5</text>
<text x="62.0" y="340.0" font-weight="700" fill="#b45309">SARIMA forecasting</text>
<text x="62.0" y="361.0">Next months of drug prescriptions</text>
<rect x="12.0" y="384.0" width="376.0" height="60.0" rx="8" fill="#fff1f2" stroke="#f43f5e" stroke-width="1.5"/>
<circle cx="36.0" cy="414.0" r="15" fill="#f43f5e"/>
<text x="36.0" y="419.5" text-anchor="middle" font-weight="700" fill="#ffffff">6</text>
<text x="62.0" y="408.0" font-weight="700" fill="#be123c">Client equity strategies</text>
<text x="62.0" y="429.0">Backtests for stock-picking strategies</text>
<rect x="12.0" y="452.0" width="376.0" height="60.0" rx="8" fill="#f3f4f6" stroke="#6b7280" stroke-width="1.5"/>
<circle cx="36.0" cy="482.0" r="15" fill="#6b7280"/>
<text x="36.0" y="487.5" text-anchor="middle" font-weight="700" fill="#ffffff">J</text>
<text x="62.0" y="476.0" font-weight="700" fill="#374151">Jana Small Finance Bank</text>
<text x="62.0" y="497.0">Portfolio reporting, automated in SQL</text>
<rect x="12.0" y="520.0" width="376.0" height="60.0" rx="8" fill="#f3f4f6" stroke="#6b7280" stroke-width="1.5"/>
<circle cx="36.0" cy="550.0" r="15" fill="#6b7280"/>
<text x="36.0" y="555.5" text-anchor="middle" font-weight="700" fill="#ffffff">L</text>
<text x="62.0" y="544.0" font-weight="700" fill="#374151">Lentra AI</text>
<text x="62.0" y="565.0">Lending policy → specs → tested system</text>
</g>
</svg>

| Part | What it covers |
|---|---|
| Projects 1–6 | Three systems I built, then three quantitative projects |
| Jana Small Finance Bank | Manager, Loan Product and Portfolio Analytics, November 2021 to March 2022 |
| Lentra AI | Business Analyst (Product Management), April to October 2021 |
| Technical skills | Every skill on my resume, in plain words, with where I used it |

## Project 1 — Retail credit risk system

**In one line:** I took one public book of 466,285 loans through the whole chain a bank runs: who will default, what a default costs, how much to set aside, and how much capital to hold.

| Question | Answer |
|---|---|
| Data | 466,285 personal loans from LendingClub, a US lending platform that made its loan records public; issued 2007 to 2014 |
| "Default" means | The loan was written off, or was more than 30 days late and heading there. 3.44% of loans defaulted |
| Built | PD scorecard, LGD, EAD, IFRS 9-style ECL staging, Basel III IRB capital, validation and portfolio monitoring |
| Status | Live |

| Step | What happens |
|---|---|
| 1 Group the data | Each input (income, loan purpose, grade…) is split into bands, and each band gets a weight of evidence: how strongly it points to good or bad |
| 2 Predict default | A logistic regression turns those bands into a PD for every loan |
| 3 Make a scorecard | The model becomes a points table: each answer earns points, and the total is the score |
| 4 Test it | Rank, calibration and stability checks, including on 2014 loans the model never saw |
| 5 Price the loss | LGD and EAD are estimated, so expected loss = PD × LGD × EAD |
| 6 Provide for it | Loans are put into IFRS 9 stages and expected credit loss is calculated (compared with the US CECL rules) |
| 7 Hold capital | Basel IRB formulas turn PD and LGD into the capital a bank would need |
| 8 Watch it | Vintage curves and a monitoring dashboard |

| Term | Plain meaning |
|---|---|
| PD, probability of default | The chance a borrower stops paying within a year |
| LGD, loss given default | The share of the loan lost if they do default |
| EAD, exposure at default | How much is owed when they default |
| ECL, expected credit loss | The loss expected on average, which a bank sets aside in advance (a provision) |
| IFRS 9 staging | Stage 1: healthy, provide 1 year of loss. Stage 2: risk has risen, provide lifetime loss. Stage 3: in default |
| Basel III IRB capital | Using the bank's own PD and LGD in the regulator's formula to find the capital needed for a bad year |
| Out-of-time test | Testing on later years the model never saw, as happens in real life |

| Result | Value | What it means |
|---|---|---|
| AUC on 2014 loans | 0.69 | Picks the defaulter over the good borrower about 69% of the time |
| Gini | 0.36–0.38 | Modest, because LendingClub had already screened out risky applicants |
| The bar to beat | LendingClub's own grade alone: 0.6886 | The platform's pricing already held most of the signal |
| Expected loss | USD 58.67 million, 3.21% of the book | PD × LGD × EAD, added up across every loan |
| Calibration test (Hosmer–Lemeshow) on 2014 loans | p = 0.001 | On a sample this large, even tiny gaps fail the test, so it is read alongside grade-by-grade checks |

**Why it matters:** it shows the full credit risk chain, end to end, on real data, with the limits stated openly.

## Project 2 — Parents Health OS

**In one line:** a family care console for looking after my parents' health. AI helps read documents, but a person approves everything important.

| Question | Answer |
|---|---|
| Problem | Keeping on top of parents' health check-ins, documents and reminders safely, in one place |
| Built on | Next.js (the web app) and Supabase (a hosted PostgreSQL database with sign-in) |
| Key design | 15 database tables protected by row-level security; AI document reading held behind human review; a scheduler that can't double-send |

| Step | What happens |
|---|---|
| 1 Check in | A parent taps a button in WhatsApp |
| 2 Receive | The message reaches the app through a signed webhook, so fakes are rejected |
| 3 Store | It is saved under that family's access rules |
| 4 Schedule | The scheduler plans the next reminder, safely, even if messages arrive twice or out of order |
| 5 Documents | AI extracts details from a health document; nothing is saved until a person approves it |

| Term | Plain meaning |
|---|---|
| PostgreSQL | A widely used database |
| Row-level security (RLS) | The database itself checks, row by row, who is allowed to see each record |
| WhatsApp Cloud API | Meta's official way for an app to send and receive WhatsApp messages |
| Webhook | A message one system pushes to another when something happens |
| HMAC SHA-256 signature | A code attached to each message that proves it really came from WhatsApp |
| Compare-and-swap (CAS) | Update a record only if nobody changed it in between, so jobs never run twice |
| Human review | AI suggests; a person decides |

**Why it matters:** it is a working, secure product built end to end, with AI kept under human control.

## Project 3 — Evidence-grounded AI agent

**In one line:** a chat assistant on my website that answers questions about my work only from a verified record, shows where each answer came from, and refuses anything it can't back.

| Question | Answer |
|---|---|
| Problem | AI chatbots invent things; this one must never claim what can't be proven |
| Evidence | 15 verified records: my positioning, projects, analytics work, experience, education and skills |
| Tested with | A 22-case test harness |

| Step | What happens |
|---|---|
| 1 Route | Works out what kind of question it is: a project, experience, skills, education, role fit, limitations or unknown |
| 2 Retrieve | Finds the matching evidence records |
| 3 Generate | Writes the answer from that evidence only, using Google's Gemini 2.5 Flash model (or a fixed local answer if the model is unavailable) |
| 4 Verify | Removes any statement the evidence doesn't support; if nothing matches, it refuses |
| 5 Reply | Streams the answer with its sources |

| Term | Plain meaning |
|---|---|
| Intent routing | Sorting a question into a type before answering it |
| Retrieval | Looking up the relevant facts before writing, instead of relying on the model's memory |
| Citation check | Every claim must point to a real evidence record |
| Refusal control | When there's no evidence, it says: "I don't have verified public evidence for that." |
| Test harness | A fixed set of questions with the right behaviour written down in advance, run after every change |
| Rate limit | At most 10 questions a minute per visitor, to stop abuse |

| Test, 22 cases | Result |
|---|---|
| Found the right evidence | 17 of 17 |
| Refused when it should | 10 of 10 |
| Rejected claims about retired projects | 3 of 3 |
| Citations valid | 17 of 17 |
| Sources relevant | 17 of 17 |

**Why it matters:** it is AI built the way a bank needs it: grounded, cited, tested, and allowed to say "I don't know".

## Project 4 — Bank churn model

**In one line:** a neural network that predicts which of a bank's 10,000 customers will close their accounts, so the bank can try to keep them.

| Question | Answer |
|---|---|
| Data | 10,000 retail banking customers; about one in five left |
| Model | A neural network built in Keras |
| Measured by | Recall: the share of real leavers the model catches |

| Term | Plain meaning |
|---|---|
| Churn | A customer leaving the bank |
| Neural network | A model of connected layers that learns patterns from examples |
| Recall | Of everyone who actually left, how many the model caught |
| Precision | Of everyone the model flagged, how many actually left |
| AUC | How well the model ranks leavers above stayers: 0.5 is guessing, 1 is perfect |
| Imbalanced data | When one outcome is much rarer, so a model tends to ignore it |
| SMOTE | Creates synthetic examples of the rare group so the model learns it better |

| Model | Recall | Precision | AUC |
|---|---|---|---|
| First network | 0.48 | 0.79 | 0.85 |
| **With SMOTE** | **0.75** | 0.51 | 0.85 |

**Why recall:** a missed leaver is a lost customer, while a false alarm only costs a retention offer. SMOTE lifted recall from 0.48 to 0.75; the unchanged AUC shows it moved where the model draws the line, not how well it ranks.

## Project 5 — SARIMA forecasting

**In one line:** forecasting how many antidiabetic drug prescriptions Australia will have each month, and proving the model beats a simple rule.

| Question | Answer |
|---|---|
| Data | Monthly prescriptions, July 1991 to June 2008: 204 months |
| Split | Train on the first 168 months, test on the last 36, always in time order |
| Model | SARIMA(2,1,3)(1,1,3)<sub>12</sub>, chosen from 625 candidates |

| Step | What happens |
|---|---|
| 1 Look | Plot the series: a rising trend and a pattern that repeats every year |
| 2 Decompose | STL splits the series into trend, yearly season and leftover noise |
| 3 Make it steady | The ADF test says the series is not steady; subtract last month and last year's same month until it is |
| 4 Choose | Try 625 model settings and keep the one with the lowest AIC |
| 5 Check | The leftover errors must be pure noise (Ljung–Box test passed) |
| 6 Forecast | Forecast 12 months at a time, rolling forward through the test years |
| 7 Compare | Measure against a simple rule: "this month = the same month last year" |

| Term | Plain meaning |
|---|---|
| Time series | Numbers recorded in time order, such as monthly sales |
| Seasonality | A pattern that repeats on a calendar, such as every December |
| SARIMA | A forecasting model that uses the series' own past values, its past errors and the yearly season |
| Stationary | The series' average and spread don't drift over time, which the model needs |
| Differencing | Subtracting the previous value (or last year's) to remove the trend or season |
| AIC | A score that rewards good fit and penalises complexity; lower is better |
| MAPE | The average forecast error as a percentage |

| Model | MAPE on the 36 test months |
|---|---|
| Simple rule: same month last year | 12.69% |
| **SARIMA** | **7.90%** |

**Why it matters:** it shows the full forecasting discipline: check the data, test the assumptions, pick the model by evidence, and beat a baseline.

## Project 6 — Client equity strategies

**In one line:** a client designed stock-picking strategies; I built the Python backtest suite that tests how they would have performed, on 500 US stocks over 10 years.

| Question | Answer |
|---|---|
| The strategies | The client's own |
| My part | The Python implementation and the four-part testing suite |
| Universe | 500 US stocks, 10-year backtest |

| Part of the suite | What it does |
|---|---|
| 1 Strategy engine | Screens out stocks (high debt, weak earnings, AI predictions), ranks the rest by factors within each sector, picks and weights them, and rebalances on schedule |
| 2 Performance and robustness | Return, risk, Sharpe and Sortino ratios, worst drop, tracking error, information ratio, rolling 1- and 3-year views, factor regressions |
| 3 Diversification, turnover, liquidity | How much trading each strategy needs, which sectors drive returns, how spread out the portfolio is |
| 4 Turnover control | Adjusts weights as little as possible to stay within a trading limit, comparing two optimisation methods |

| Term | Plain meaning |
|---|---|
| Backtest | Running a strategy on past data to see how it would have done |
| Factor | A trait used to pick stocks: value (cheap), momentum (rising), quality (strong finances) |
| Sector-neutral | Ranking within each industry, so no industry is overloaded by accident |
| Rebalancing | Resetting the portfolio to its target on a schedule |
| Turnover | How much of the portfolio is traded; more trading means more cost |
| Survivorship bias | Testing only on companies that still exist, which flatters results; the suite includes the ones that dropped out |
| Sharpe ratio | Return earned per unit of risk taken |
| Tracking error | How far the strategy's returns wander from its benchmark index |
| Maximum drawdown | The worst fall from a peak before recovering |

**Why it matters:** it shows I can turn someone else's investment idea into tested, reproducible code.

## Jana Small Finance Bank

**Manager — Loan Product and Portfolio Analytics · Bengaluru · November 2021 to March 2022**

**In one line:** I automated the retail lending book's reporting and made every team measure the same metric the same way.

| What I did | In plain words |
|---|---|
| Automated portfolio reporting for the retail lending book in SQL | Reports that were built by hand from manual extracts now run automatically on a schedule, and turnaround fell by 30% |
| Worked across retail and SME teams to turn credit policy into consistent reporting definitions | Agreed one definition for each metric, taken from the lending policy |
| Reconciled a metric computed differently across sources | Found why two systems gave different numbers for the same thing, and fixed it |

| Term | Plain meaning |
|---|---|
| Portfolio | All the loans a bank has given out, viewed together |
| Retail and SME | Loans to individuals; loans to small and medium businesses |
| SQL | The language used to pull and summarise data from databases |
| Scheduled workflow | A report that runs by itself at set times |
| Reporting definition | The exact rule for calculating a number, so everyone gets the same answer |
| Reconciliation | Checking that two numbers that should match really do, and explaining any gap |

## Lentra AI

**Business Analyst (Product Management) — B2B lending platform · Pune · April to October 2021**

**In one line:** I turned banks' lending policies into precise specifications for a loan system, then tested that what was built matched them.

| What I did | In plain words |
|---|---|
| Mapped end-to-end workflows for a loan origination platform | Drew every step a loan goes through, from application to decision, across bank clients, product and engineering |
| Turned lending policy, eligibility and calculations into functional specifications | Wrote exactly how the system must apply each rule and calculation, plus the data and connections it needs |
| Ran UAT and loan calculation checks before go-live | Built test packs with the right answers worked out in advance, tracked defects with engineering until fixed, and got sign-off |

| Term | Plain meaning |
|---|---|
| B2B SaaS | Software sold to businesses (here, banks) and used online |
| Loan origination system (LOS) | The software a bank uses to take a loan from application to approval |
| Underwriting rule layer | The logic that approves, refers or declines each application |
| Eligibility criteria | The conditions a borrower must meet, such as minimum income |
| Functional specification (FSD) | A document stating exactly how the system must behave |
| UAT, user acceptance testing | The business testing the system on realistic cases before it goes live |
| Test pack | A set of test cases with expected results written beforehand |
| Defect | Something the system does differently from the specification |
| Go-live | The day a client starts using the system for real |

## Technical skills

### Credit risk and regulation

| Skill | Plain meaning | Where I used it |
|---|---|---|
| PD, LGD, EAD | Chance of default; share lost; amount owed at default | Project 1 |
| RWA, risk-weighted assets | Loans scaled by riskiness; capital is held as a percentage of them | Project 1 |
| IFRS 9 and Ind AS 109 ECL | Accounting rules for setting aside expected loan losses; Ind AS 109 is India's version | Project 1 |
| SICR and staging | Moving a loan to Stage 2 when its risk has risen significantly since it was given | Project 1 |
| Basel III IRB capital | Capital calculated from the bank's own risk estimates | Project 1 |
| Scorecards (WoE, IV) | Points-based credit scores; weight of evidence and information value measure how predictive each input is | Project 1 |
| Model validation and monitoring (AUROC, Gini, KS, PSI) | Checks that a model ranks well (AUROC, Gini, KS) and that today's customers still resemble the ones it learned from (PSI) | Project 1 |
| Lifetime PD term structures | The chance of default in each future year of a loan's life | Project 1 |
| Portfolio provisioning | Setting aside money for expected losses across the whole book | Project 1 |

### Business analysis

| Skill | Plain meaning | Where I used it |
|---|---|---|
| BRDs and functional specifications | What the business needs; exactly how the system must behave | Lentra |
| Requirements elicitation | Drawing out what people really need through conversations, workshops and documents | Lentra |
| Data mapping specifications | Which source field feeds which target field, and how it is transformed | Lentra |
| Gap and impact analysis | What's missing today, and what a change will affect | Lentra, Jana |
| Workflow mapping | Drawing each step of a process and who does it | Lentra |
| Rules and decision logic | Writing business rules precisely enough to build | Lentra |
| UAT planning and test packs | Planning business testing with expected results written first | Lentra |
| Release validation | Confirming a release works before and after it goes live | Lentra |
| Stakeholder management | Keeping business, product and engineering aligned | Lentra, Jana |
| Waterfall and agile | Delivering in fixed phases; or in short cycles with regular feedback | Lentra |

### Data and engineering

| Skill | Plain meaning | Where I used it |
|---|---|---|
| SQL | Querying and summarising data in databases | Jana |
| Python | The main language for data work and modelling | Projects 1, 4, 5, 6 |
| REST APIs and integrations | How systems request data from each other over the web | Projects 2, 3 |
| Data sourcing and ETL analysis | Finding data, then extracting, transforming and loading it | Lentra, Jana |
| Data lineage and quality controls | Tracing each number back to its source, and checking it is right | Jana |
| Reporting automation | Reports that build themselves on a schedule | Jana |
| Dashboarding | Visual summaries of key numbers | Jana, Project 1 |
| Next.js, TypeScript | A framework and language for building web apps | Projects 2, 3 |
| GitHub | Where code is stored, versioned and shared | All projects |

### Applied AI

| Skill | Plain meaning | Where I used it |
|---|---|---|
| LLM integration | Connecting a large language model, such as Gemini, into an app | Projects 2, 3 |
| Retrieval-augmented generation (RAG) | Looking up the facts first, then letting the model write from them | Project 3 |
| Local embeddings and retrieval | Finding relevant text on your own machine, without an outside service | Project 3 |
| Structured output schemas | Making the model answer in a fixed format that code can read | Projects 2, 3 |
| Evaluation harness design | A fixed test set that measures AI behaviour after every change | Project 3 |
| Guardrails and refusal controls | Rules that stop the AI from answering what it shouldn't | Project 3 |
| Citation grounding | Every answer points to its source | Project 3 |
| Machine learning | Models that learn patterns from data | Projects 1, 4 |
