---
title: "Machine Learning, End to End — on a Real Credit Risk Project"
description: "Every step of a machine learning project as a cheatsheet — framing, cleaning, EDA, leakage and splits, features, baselines and metrics, linear and logistic regression, trees and ensembles, the other classic algorithms, class imbalance, neural networks, tuning, calibration, explainability, monitoring and production — taught on one real project: a retail credit risk system on 466,285 LendingClub loans, with its credit risk workflow (PD, LGD, EAD, IFRS 9, CECL, Basel) side by side, a bank churn neural network, and side-lines for every technique the project did not use. Every number comes from code that was run."
series: masterclass
track: guest
subject: "Machine Learning"
order: 1
status: live
updated: 2026-09-25
verified: false
tags:
  - machine learning
  - credit risk
  - probability of default
  - scorecard
  - feature engineering
  - model evaluation
  - class imbalance
  - ensembles
  - neural networks
  - model monitoring
  - python
  - scikit-learn
---

## Part 0 — The project, and how to read this

One project runs through every page: a retail credit risk system built in Python on **466,285 public LendingClub loans** issued in the US between 2007 and 2014. It predicts which borrowers will default, turns that prediction into a scorecard, estimates what a default costs, and carries the results into IFRS 9 provisions, a US CECL comparison and Basel capital.

Every stage of a machine learning project happens somewhere inside it. Where the project did not need a technique — a random forest, SMOTE, a tuned gradient-boosting model, SHAP, each explained where it appears — this note builds a **side-line** on the same loans, so that every idea lands on data you already know.

### The project on one page

<svg viewBox="0 0 720 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The retail credit risk project as five phases: data, probability of default, loss, accounting and capital, and monitoring and reporting, each with its stages" style="width:100%;max-width:720px;height:auto;display:block;margin:1rem auto">
<g font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="10" fill="#1f2937">
<text x="64" y="20" text-anchor="middle" font-weight="600" font-size="11">Data</text>
<rect x="2" y="34" width="124" height="36" rx="4" fill="#eff6ff" stroke="#93c5fd"/>
<text x="64" y="56" text-anchor="middle">466,285 loans × 75</text>
<line x1="64" y1="70" x2="64" y2="78" stroke="#6b7280"/>
<polygon points="60,78 68,78 64,84" fill="#6b7280"/>
<rect x="2" y="84" width="124" height="36" rx="4" fill="#eff6ff" stroke="#93c5fd"/>
<text x="64" y="106" text-anchor="middle">12-month target</text>
<line x1="64" y1="120" x2="64" y2="128" stroke="#6b7280"/>
<polygon points="60,128 68,128 64,134" fill="#6b7280"/>
<rect x="2" y="134" width="124" height="36" rx="4" fill="#eff6ff" stroke="#93c5fd"/>
<text x="64" y="156" text-anchor="middle">Train · test · OOT</text>
<line x1="128" y1="52" x2="144" y2="52" stroke="#6b7280"/>
<polygon points="144,48 144,56 150,52" fill="#6b7280"/>
<text x="212" y="20" text-anchor="middle" font-weight="600" font-size="11">Probability of default</text>
<rect x="150" y="34" width="124" height="36" rx="4" fill="#ecfdf5" stroke="#34d399"/>
<text x="212" y="56" text-anchor="middle">WoE binning and IV</text>
<line x1="212" y1="70" x2="212" y2="78" stroke="#6b7280"/>
<polygon points="208,78 216,78 212,84" fill="#6b7280"/>
<rect x="150" y="84" width="124" height="36" rx="4" fill="#ecfdf5" stroke="#34d399"/>
<text x="212" y="106" text-anchor="middle">Logistic Models A, B</text>
<line x1="212" y1="120" x2="212" y2="128" stroke="#6b7280"/>
<polygon points="208,128 216,128 212,134" fill="#6b7280"/>
<rect x="150" y="134" width="124" height="36" rx="4" fill="#ecfdf5" stroke="#34d399"/>
<text x="212" y="156" text-anchor="middle">Scorecard 600 at 50:1</text>
<line x1="212" y1="170" x2="212" y2="178" stroke="#6b7280"/>
<polygon points="208,178 216,178 212,184" fill="#6b7280"/>
<rect x="150" y="184" width="124" height="36" rx="4" fill="#ecfdf5" stroke="#34d399"/>
<text x="212" y="206" text-anchor="middle">Validate, calibrate</text>
<line x1="212" y1="220" x2="212" y2="228" stroke="#6b7280"/>
<polygon points="208,228 216,228 212,234" fill="#6b7280"/>
<rect x="150" y="234" width="124" height="36" rx="4" fill="#ecfdf5" stroke="#34d399"/>
<text x="212" y="256" text-anchor="middle">Stability: PSI, CSI</text>
<line x1="276" y1="52" x2="292" y2="52" stroke="#6b7280"/>
<polygon points="292,48 292,56 298,52" fill="#6b7280"/>
<text x="360" y="20" text-anchor="middle" font-weight="600" font-size="11">Loss</text>
<rect x="298" y="34" width="124" height="36" rx="4" fill="#fef3c7" stroke="#f59e0b"/>
<text x="360" y="56" text-anchor="middle">LGD in two stages</text>
<line x1="360" y1="70" x2="360" y2="78" stroke="#6b7280"/>
<polygon points="356,78 364,78 360,84" fill="#6b7280"/>
<rect x="298" y="84" width="124" height="36" rx="4" fill="#fef3c7" stroke="#f59e0b"/>
<text x="360" y="106" text-anchor="middle">EAD at default</text>
<line x1="360" y1="120" x2="360" y2="128" stroke="#6b7280"/>
<polygon points="356,128 364,128 360,134" fill="#6b7280"/>
<rect x="298" y="134" width="124" height="36" rx="4" fill="#fef3c7" stroke="#f59e0b"/>
<text x="360" y="156" text-anchor="middle">Expected loss</text>
<line x1="424" y1="52" x2="440" y2="52" stroke="#6b7280"/>
<polygon points="440,48 440,56 446,52" fill="#6b7280"/>
<text x="508" y="20" text-anchor="middle" font-weight="600" font-size="11">Accounting, capital</text>
<rect x="446" y="34" width="124" height="36" rx="4" fill="#f5f3ff" stroke="#a78bfa"/>
<text x="508" y="56" text-anchor="middle">Lifetime PD curve</text>
<line x1="508" y1="70" x2="508" y2="78" stroke="#6b7280"/>
<polygon points="504,78 512,78 508,84" fill="#6b7280"/>
<rect x="446" y="84" width="124" height="36" rx="4" fill="#f5f3ff" stroke="#a78bfa"/>
<text x="508" y="106" text-anchor="middle">IFRS 9 staging, ECL</text>
<line x1="508" y1="120" x2="508" y2="128" stroke="#6b7280"/>
<polygon points="504,128 512,128 508,134" fill="#6b7280"/>
<rect x="446" y="134" width="124" height="36" rx="4" fill="#f5f3ff" stroke="#a78bfa"/>
<text x="508" y="156" text-anchor="middle">US CECL comparison</text>
<line x1="508" y1="170" x2="508" y2="178" stroke="#6b7280"/>
<polygon points="504,178 512,178 508,184" fill="#6b7280"/>
<rect x="446" y="184" width="124" height="36" rx="4" fill="#f5f3ff" stroke="#a78bfa"/>
<text x="508" y="206" text-anchor="middle">Basel IRB capital</text>
<line x1="572" y1="52" x2="588" y2="52" stroke="#6b7280"/>
<polygon points="588,48 588,56 594,52" fill="#6b7280"/>
<text x="656" y="20" text-anchor="middle" font-weight="600" font-size="11">Monitor, report</text>
<rect x="594" y="34" width="124" height="36" rx="4" fill="#f3f4f6" stroke="#9ca3af"/>
<text x="656" y="56" text-anchor="middle">Vintage curves</text>
<line x1="656" y1="70" x2="656" y2="78" stroke="#6b7280"/>
<polygon points="652,78 660,78 656,84" fill="#6b7280"/>
<rect x="594" y="84" width="124" height="36" rx="4" fill="#f3f4f6" stroke="#9ca3af"/>
<text x="656" y="106" text-anchor="middle">Grade-outcome matrix</text>
<line x1="656" y1="120" x2="656" y2="128" stroke="#6b7280"/>
<polygon points="652,128 660,128 656,134" fill="#6b7280"/>
<rect x="594" y="134" width="124" height="36" rx="4" fill="#f3f4f6" stroke="#9ca3af"/>
<text x="656" y="156" text-anchor="middle">HTML dashboard</text>
<line x1="656" y1="170" x2="656" y2="178" stroke="#6b7280"/>
<polygon points="652,178 660,178 656,184" fill="#6b7280"/>
<rect x="594" y="184" width="124" height="36" rx="4" fill="#f3f4f6" stroke="#9ca3af"/>
<text x="656" y="206" text-anchor="middle">RAG assistant</text>
<text x="360" y="292" text-anchor="middle" font-size="11">Each phase feeds the next: the PD model scores every loan, and every later number is built on those scores.</text>
</g>
</svg>

Every box in the map is explained in its own part — you do not need to follow it yet. OOT means the **out-of-time** sample: later loans kept back to test on (Part 4). The RAG assistant is a question-answering tool over the project's documents, outside the scope of this note.

### How each part reads

| Block | What it holds |
|---|---|
| **The cheatsheet** | The idea, compressed: tables, the one formula that defines it, and rules of thumb |
| **In the project** | What the retail credit risk repository does at this step, with the numbers its code produces |
| **Side-line** | A technique the project did not use, run on the same loans for this note. Not in the repository |
| **In the churn project** | The bank churn neural network, wherever it teaches the step better |

Every part ends with the decision it forces and two checks with worked answers. **New to credit risk, statistics or Python?** Read the starter kit that follows this part before Part 1 — it covers everything the note assumes.

### The two projects

| | Retail credit risk | Bank churn |
|---|---|---|
| Question | Will this borrower default within 12 months of the loan being issued? | Will this customer leave the bank? |
| Data | 466,285 LendingClub loans, 75 columns, issued 2007–2014 | 10,000 bank customers, 14 columns |
| Positive class | 16,018 loans, **3.44%** | About **one customer in five** |
| Core models | Weight-of-evidence logistic regression and scorecard; two-stage LGD model; hazard curve for lifetime PD | Keras neural network, tuned, then trained on SMOTE-balanced data |
| What the output feeds | Provisions (IFRS 9, CECL), capital (Basel), monitoring | A retention campaign |

### What is real, what is demonstration, what is a proxy

The project is honest about its own edges, and so is this note.

| Status | Components |
|---|---|
| Run on the full data | Target, samples, WoE binning, PD Models A and B, scorecard, validation, calibration, stability, two-stage LGD, EAD, lifetime PD, IFRS 9 staging and ECL, CECL comparison, macroeconomic scenarios, Basel capital, vintage curves, dashboard |
| Synthetic demonstration | The credit conversion factor (CCF) model, on 5,000 simulated revolving accounts — term loans have no undrawn limit to convert |
| Proxy | Roll rates and the transition matrix, built from one snapshot rather than monthly histories; origination PD approximated by the average PD of each grade |
| Needs a manual step | The RAG assistant's live answers need an API key |

All of the project's numbers in this note were reproduced by re-running its pipeline end to end on the raw file. All side-line numbers come from the code shown beside them, with `random_state=42`.

---

## Before you start — the starter kit

Everything in this note is built from four small toolkits: a little credit risk, a little statistics, a little Python, and the vocabulary of machine learning. If any of them is new, read this section first; every later part assumes only what is here.

### Credit risk, from zero

| Term | Plain meaning | In this project |
|---|---|---|
| Loan, borrower, lender | Money lent now, repaid with interest over time | Unsecured personal loans of 36 or 60 months |
| LendingClub | A US online lending platform that published the records of the loans it made | The source of all 466,285 loans |
| Grade, sub-grade | LendingClub's own risk rating: A (safest) to G, each split 1 to 5, so A1 … G5. It set the interest rate | A strong input — and the bar to beat |
| Default | The borrower stops paying | Charged off, or more than 30 days late and heading for charge-off (Part 1) |
| **PD** — probability of default | How likely the borrower is to default within a period | The main model of this project |
| **LGD** — loss given default | If they default, the share of the balance that is lost | About 93% here (Part 17) |
| **EAD** — exposure at default | How much is owed at the moment of default | The unpaid balance (Part 17) |
| **Expected loss** | PD × LGD × EAD — the loss to expect on average | Part 17 |
| Scorecard | A points table: each answer on the application earns points, the total is the score | Part 8 |
| **Provision** | Money set aside in the accounts today for losses expected later | Worked out under IFRS 9 (international rules), where it is called **ECL**, expected credit loss, and compared with CECL (US rules), Part 18 |
| **Capital** | The bank's own money, kept to absorb losses bigger than expected | Worked out under Basel rules, Part 18 |
| Vintage | All loans issued in the same period | Loans issued in 2014 are the 2014 vintage |
| DTI | Debt-to-income: the borrower's monthly debt payments ÷ monthly income | `dti` |
| Revolving utilisation | The share of the borrower's credit-card limits already in use | `revol_util` |
| Inquiries | How many times lenders checked the borrower's credit recently — a sign of hunting for credit | `inq_last_6mths` |

### Statistics, from zero

Examples use annual income in the training sample of 184,525 loans.

| Term | Plain meaning | Example |
|---|---|---|
| Mean | The average: add up, divide by the count | $71,691 |
| Median | The middle value when sorted — not pulled by extremes | $61,000 |
| Percentile | The value below which that share of rows falls | 99th percentile: $234,000 |
| Quartiles, IQR | The 25th and 75th percentiles; the interquartile range is the gap between them | $45,000 and $85,288; IQR $40,288 |
| Standard deviation | The typical distance of values from their mean | $56,231 |
| Variance | The standard deviation squared | — |
| Distribution | How the values are spread | Income is **skewed**: a long tail of high earners, which is why the mean sits above the median |
| Normal distribution | The symmetric bell curve many measurements roughly follow | Used inside the Basel formula, Part 18 |
| Correlation | How strongly two variables move together, from −1 to +1 | Income and loan amount: +0.48 |
| Probability | A chance between 0 and 1 | A PD of 0.034 is 3.4% |
| Odds, log-odds | Another way to state a chance — see below | Part 8 |
| p-value | The chance of seeing an effect this large if there were really no effect. Below 0.05 is called **significant** | A p-value of 0.85 means "no evidence this input matters" |

$$
\text{odds} = \frac{p}{1 - p}
\qquad
\text{log-odds} = \ln(\text{odds})
$$

where

- **p** is a probability
- **ln** is the natural logarithm, which undoes e<sup>x</sup> and turns multiplying into adding

A 20% chance is odds of 0.2 ÷ 0.8 = 0.25 — "one to four" — and log-odds of ln 0.25 = −1.39. A 50% chance is odds of 1 and log-odds of 0. Logistic regression (Part 8) works in log-odds because they run from minus to plus infinity, like a straight line.

### Python, from zero

| Idea | What it looks like | Meaning |
|---|---|---|
| Variable | `rate = 0.05` | A name holding a value |
| List | `["term", "grade"]` | An ordered collection |
| Dictionary | `{1: 0.004, 2: 0.05}` | Keys mapped to values |
| Function | `def prepare(df): ...` | A named, reusable calculation; `prepare(train)` runs it |
| Import | `import pandas as pd` | Loads a library under a short name |
| Comment | `# like this` | Notes for people; Python ignores them |
| DataFrame | `train` | A table in memory: rows and named columns |
| Column | `train["annual_inc"]` or `train.annual_inc` | One column of the table |
| Method | `train.describe()` | A function that belongs to an object |

| Library | Used for |
|---|---|
| pandas | Tables: loading, filtering, grouping |
| NumPy | Fast arithmetic on arrays of numbers |
| scikit-learn | Most models, pipelines and metrics |
| statsmodels | Regression with p-values — the scorecard builder's tool |
| LightGBM, XGBoost | Gradient-boosted trees |
| imbalanced-learn | Resampling such as SMOTE |
| SHAP | Explaining individual predictions |
| TensorFlow and Keras | Neural networks, in the churn project |

Almost every model in scikit-learn follows one pattern:

```python
model = SomeModel(settings)                 # choose the model and its settings
model.fit(X_train, y_train)                 # learn from the training rows
model.predict_proba(X_test)[:, 1]           # the probability of the positive class for new rows
```

To run the code: install Python, run `pip install pandas pyarrow scikit-learn statsmodels lightgbm xgboost imbalanced-learn shap` once, and put the project's raw file, `loan_data_2007_2014.csv`, beside your notebook. Then run the blocks in a Jupyter notebook, in order. They build on each other: the loans loaded in Part 1 are split in Part 4 and prepared in Part 5, and every model after that uses them. Part 8's block needs the project's own fitted binner from its repository; every other block needs only the raw file.

### Machine learning, from zero

| Term | Meaning | Here |
|---|---|---|
| Row, observation | One example | One loan |
| Feature, input, X | What the model sees | Income, grade, DTI … |
| Target, label, y | What the model must predict | `default_12m`: 1 if the loan defaulted within 12 months |
| Model | A rule learned from examples that turns inputs into a prediction | Logistic regression, a tree, a network |
| Training, fitting | Learning the rule from labelled rows | `model.fit(...)` |
| Prediction, scoring | Applying the rule to new rows | `model.predict_proba(...)` |
| Parameters | What the model learns — coefficients, split points, weights | Found by `fit` |
| Hyperparameters | Settings chosen before training — depth, learning rate, number of trees | Chosen by you, or by tuning (Part 13) |
| Train, test | Rows to learn from, and rows kept back to judge on | Part 4 |
| Overfitting | Learning the training rows' noise instead of the pattern | Part 13 |

With these four toolkits, every part that follows can be read without leaving the page.

---

## Part 1 — Framing the problem, and the target

### The cheatsheet

| Kind of learning | Learns from | Predicts | Where it appears here |
|---|---|---|---|
| **Supervised: classification** | Examples with a known label | A class, or the probability of one | Default within 12 months; churn |
| **Supervised: regression** | Examples with a known number | A number | LGD, the CCF, a loan's interest rate |
| **Time-to-event (survival)** | When events happened, and who is still waiting | How the risk builds over time | The lifetime PD curve |
| **Unsupervised** | Examples with no label | Structure: groups, directions, oddities | Borrower segments, anomalies (Part 19) |
| **Reinforcement** | Rewards from acting | A policy for acting | Not used here |

Framing is five decisions, made before any code:

| Decision | The question | Get it wrong and… |
|---|---|---|
| The event | What exactly counts as a "yes"? | The model predicts something nobody manages |
| The window | Within how long? | Old and new loans are not comparable |
| The prediction point | When is the prediction made, and what is known then? | Leakage (Part 4) |
| The unit | One row per what — loan, customer, month? | Double counting; leakage between rows |
| Success | Which metric, against which baseline, worth how much? | A "good" model nobody can use |

### In the project

**The event.** A loan is a default if its status is *Charged Off*, *Default*, *Late (31–120 days)*, or the charged-off variant of *Does not meet the credit policy*. Everything else — *Fully Paid*, *Current*, *In Grace Period*, *Late (16–30 days)* — is not.

**The window.** The file has no default date, only the date of the last payment. The project estimates the default date as **three months after the last payment** — roughly when a missed payment becomes 90 days past due — and counts a default only if it lands within **12 months of issue**. The 12-month window is what Basel and IFRS 9 PDs use, and it makes old and young loans comparable.

```python
import pandas as pd

loans = pd.read_csv("loan_data_2007_2014.csv", low_memory=False)     # 466,285 rows, 75 columns

DEFAULT = ["Charged Off", "Default", "Late (31-120 days)",
           "Does not meet the credit policy. Status:Charged Off"]

def lc_date(s):                      # 'Dec-68' must become 1968, not 2068
    d = pd.to_datetime(s, format="%b-%y", errors="coerce")
    return d.mask(d.dt.year > 2049, d - pd.DateOffset(years=100))

loans["ever_default"] = loans.loan_status.isin(DEFAULT).astype(int)
issue = lc_date(loans.issue_d)
default_date = (lc_date(loans.last_pymnt_d) + pd.DateOffset(months=3)).fillna(issue)
months = (default_date.dt.year - issue.dt.year) * 12 + (default_date.dt.month - issue.dt.month)
loans["default_12m"] = ((loans.ever_default == 1) & months.between(0, 12)).astype(int)
loans["vintage_year"] = issue.dt.year
```

| | Loans | Share |
|---|---:|---:|
| All loans | 466,285 | 100% |
| Ever defaulted | 50,968 | 10.93% |
| **Defaulted within 12 months — the target** | **16,018** | **3.44%** |
| Defaulted later than 12 months | 34,950 | 7.50% |

Why the window matters shows up the moment the book is cut by year of issue — the **vintage**:

| Vintage | Loans | Ever defaulted | Within 12 months |
|---:|---:|---:|---:|
| 2007 | 603 | 26.2% | 5.14% |
| 2008 | 2,393 | 20.7% | 6.56% |
| 2009 | 5,281 | 13.7% | 4.64% |
| 2010 | 12,537 | 14.0% | 3.45% |
| 2011 | 21,721 | 15.0% | 3.55% |
| 2012 | 53,367 | 15.6% | 3.73% |
| 2013 | 134,755 | 12.5% | 3.18% |
| 2014 | 235,628 | 8.3% | 3.44% |

The 2014 loans look safest on "ever defaulted" only because they had barely a year to go wrong before the data was taken at the end of January 2016. On the 12-month target every vintage has had the same chance, and 2014 sits in the middle.

**The rule leaves a fingerprint.** The first instalment falls due a month after issue, so the earliest estimated default a paying loan can have is month 4. The 376 defaults at month 0 are loans that never made a payment, dated at issue; months 1 to 3 hold none; months 4 to 6 hold 2,888. An engineered target carries the shape of its rule, and a model trained on it learns that shape too.

### In the churn project

The target is `Exited`: whether the customer left. About one customer in five did, so the imbalance is milder than the loan book's one in thirty. The unit is a customer; the prediction point is the snapshot date of the data.

**Decision:** one row per loan; the target is default within 12 months of issue, 3.44% of loans; everything the model sees must be known on the day the loan is issued.

### Check yourself

1. A loan issued in March 2013 has its last payment in May 2013 and is later charged off. Is it a 12-month default?
2. Why would a model trained on "ever defaulted" rate 2014 loans as safer than they are?

<details>
<summary>Answers</summary>

1. Yes. The estimated default date is May 2013 plus three months, August 2013 — five months after issue, inside the 12-month window.
2. Because 2014 loans had only about a year of history when the data was taken, so far fewer of them had yet reached default. The label would be measuring age, not risk; a fixed window removes that.

</details>

---

## Part 2 — Understanding and cleaning the data

### The cheatsheet

First look, always in this order:

```python
df.shape                          # rows, columns
df.info()                         # types and non-missing counts
df.describe(percentiles=[.01, .5, .99])   # ranges, and where the tails are
df.isna().mean().sort_values()    # share missing, per column
df.nunique()                      # IDs (all unique) and constants (one value)
df[col].value_counts(dropna=False)
```

| Problem | How to spot it | Usual fix |
|---|---|---|
| Wrong type | Numbers or dates stored as text | Parse once, early; check the result |
| Two-digit years | 1968 read as 2068 | Correct the century after parsing |
| Duplicates | `df.duplicated(subset=key).sum()` | Keep one row per unit |
| Impossible values | Negative income, utilisation above 100% | Fix at source, else cap or set missing |
| Missing at random | Gaps unrelated to anything | Impute: median, or a model |
| Missing for a reason | Gaps that mean something ("never delinquent") | Keep a flag; impute only alongside it |
| Structurally missing | A field that did not exist in older records | Drop it, or model only the period that has it |
| Outliers | Values far beyond the 99th percentile | Cap (winsorise), bin, or transform — remove only true errors |
| Rare categories | Levels with a handful of rows | Group into "other" |
| Identifiers, free text | IDs, URLs, descriptions | Drop from the model; text needs its own treatment |

### In the project

The raw file is **466,285 rows × 75 columns**. The project decides what may enter a model before any modelling, in a configuration file that sorts every column into four groups:

| Group | Examples | Use |
|---|---|---|
| Known at application | `loan_amnt`, `term`, `int_rate`, `grade`, `annual_inc`, `dti`, `inq_last_6mths`, `revol_util` | Eligible for the PD model |
| Sparse in early years | `tot_cur_bal`, `total_rev_hi_lim`, `open_acc_6m`, `il_util` | Treated with suspicion |
| Outcomes, recorded after the loan was made | `loan_status`, `total_rec_prncp`, `recoveries`, `last_pymnt_d` | Banned from the PD model; needed for LGD and EAD |
| Identifiers | `id`, `member_id`, `url` | Never modelled |

Cleaning decisions the code makes:

- **Dates** arrive as text like `Dec-68`. Parsed naively, that is 2068. The project subtracts 100 years from anything after 2049.
- **Missing values** are kept, not filled: the binning in Part 5 — grouping each variable's values into ranges — gives each variable a separate *missing* bin with its own risk.
- **Structurally missing** fields are dropped: `tot_cur_bal` and `total_rev_hi_lim` were not collected in early vintages, so their distribution shifts sharply between samples, and the configuration removes them.
- **Outliers** are not removed. Binning puts a $7 million income in the same top bin as a $150,000 one, so the extreme value cannot pull the model.

What the missing values look like in the training sample:

| Column | Missing | What missing means |
|---|---:|---|
| `mths_since_last_record` | 90.8% | No public record, ever |
| `mths_since_last_delinq` | 58.3% | Never delinquent |
| `tot_cur_bal` | 30.5% | Not collected before later vintages — structural |
| `emp_length` | 3.9% | Not stated |
| `revol_util` | 0.1% | Genuinely unknown |

A value missing because the borrower was *never delinquent* is information, not a gap. Filling it with the median number of months would invent a delinquency for more than half the book.

### Side-line: the string-date trap

The project's own sample summary reports the development sample as issued from **Apr-08 to Sep-13**. The real range is **June 2007 to December 2013**. The summary took the minimum and maximum of the date *text*, and text sorts alphabetically: "Apr" comes before "Jun", and "Sep" after "Dec".

```python
dev = loans[loans.vintage_year <= 2013]
dev.issue_d.min(), dev.issue_d.max()                      # ('Apr-08', 'Sep-13') — alphabetical
d = pd.to_datetime(dev.issue_d, format="%b-%y")
d.min(), d.max()                                          # 2007-06-01, 2013-12-01 — correct
```

Nothing downstream used the wrong range — the samples themselves were split on the parsed year — but it is the cleanest possible lesson in why types are fixed first.

**Outliers, measured.** Annual income in the training sample has a median of $61,000, a 99th percentile of $234,000, and a maximum of **$7,141,778**. A linear model would let that one borrower bend the income coefficient; capping at the 99th percentile, taking a logarithm, or binning (as the project does) all stop it.

### In the churn project

The notebook removed outliers with the interquartile-range rule on four columns, dropping **374 customers**: 15 on credit score and **359 on age**. Older customers are exactly the group that churns most — the notebook's own exploratory analysis (EDA, Part 3) found age the strongest correlate of leaving. Removing them before the split also removed them from the test set, so the reported scores describe a bank without its older customers, and the model has never seen one. Outliers that are real customers should be kept and handled — capped, binned or transformed — not deleted.

**Decision:** parse types first; keep missing values and give them meaning; drop structurally missing fields; never delete real customers to make a distribution look tidy.

### Check yourself

1. Without the century fix, what happens to a credit history length for a borrower whose first credit line was in December 1968 and whose loan was issued in 2012?
2. Median imputation would fill `mths_since_last_delinq` for 58% of borrowers. Why is that wrong here, and what should replace it?

<details>
<summary>Answers</summary>

1. The first credit line would read December 2068, so the history length — issue date minus first credit line — comes out at about minus 56 years instead of about 43.
2. The value is missing because the borrower has never been delinquent. Filling in a median would give them a delinquency that never happened. Keep a "never delinquent" flag, and let the value itself be missing or sit in its own bin, as the project's binning does.

</details>

---

## Part 3 — Exploratory data analysis

### The cheatsheet

Exploratory data analysis — **EDA** — answers four questions before any model is fitted.

| Question | How | Look for |
|---|---|---|
| What does each variable look like? | Histograms, `describe()`, `value_counts()` | Skew, long tails, spikes, rare levels, impossible values |
| How does each variable relate to the target? | Target rate by band or level | Direction, steepness, straight line or curve, surprises |
| How do variables relate to each other? | Correlation matrix, crosstabs | Near-duplicates that will fight inside a model |
| Does anything move over time? | Target rate and distributions by month or vintage | Policy changes, drift, breaks in the data |

Do EDA on the **training sample only**: studying the test set is a quiet form of leakage, because what you see there shapes the choices you make. In code, that means running Part 4's split before this part's blocks.

The workhorse is one line: cut a variable into bands and read the target rate in each.

```python
def rate_by(df, col, bands=None):
    key = pd.qcut(df[col], bands) if bands else df[col]
    return df.groupby(key, observed=True).default_12m.agg(loans="size", default_rate="mean")

rate_by(train, "grade")
rate_by(train, "annual_inc", bands=5)
```

| Correlation | Measures | Use |
|---|---|---|
| Pearson | Straight-line association | Numeric variables with roughly linear links |
| Spearman | Association of ranks | Skewed variables and curved but steady links — the safer default |
| Target rate by band | Association with a binary outcome | Every variable against default |

### Side-line: the book, variable by variable

Default rates within 12 months, training sample (184,525 loans, 3.43% overall):

| Grade | A | B | C | D | E | F | G |
|---|---:|---:|---:|---:|---:|---:|---:|
| Loans | 31,018 | 59,958 | 46,953 | 27,311 | 12,422 | 5,551 | 1,312 |
| Default rate | 1.22% | 2.32% | 3.71% | 5.34% | 6.21% | 8.39% | 9.22% |

| Variable | From | To | Shape |
|---|---|---|---|
| Term | 36 months: 3.13% | 60 months: 4.39% | Longer loans default more |
| Home ownership | Mortgage: 2.84% | Rent: 4.10% (own: 3.63%) | Homeowners safer |
| Purpose | Credit card: 2.50% | Small business: 8.31% | A 3× spread between purposes |
| Debt-to-income (DTI) | Up to 10: 2.92% | Above 25: 4.41% | Steady, gentle rise |
| Annual income, fifths | Up to $40,000: 4.64% | Above $94,000: 2.31% | Steady fall |

Grade spreads risk 7.6 times from A to G; DTI spreads it 1.5 times. Both rise steadily in one direction — **monotonic** — which is exactly the shape that ordered bins and a logistic regression capture well (Part 5).

Spearman correlations worth knowing: interest rate with revolving utilisation **0.40**; income with loan amount **0.48**; DTI with income **−0.18**. Nothing is so correlated that two variables are copies — except the grade, sub-grade and interest rate, which are three views of LendingClub's own pricing (Part 8).

**A surprise, which is the point of EDA.** Borrowers with no delinquency on record — the 58% whose `mths_since_last_delinq` is blank — default at **3.58%**; borrowers with a past delinquency default at **3.23%**. The opposite of intuition. The honest response is not to explain it away but to let the data decide: keep the flag, and let the model weigh it.

**Over time.** The 12-month default rate of the development vintages runs from 6.1% for 2007 to 3.2% for 2013: the early book was small and risky, and LendingClub tightened as it grew. A model trained on 2007–2013 and used on 2014 must survive that shift — which is why the project tests on 2014 separately (Part 4).

### In the project

The project's EDA lives in its reporting tables rather than in a notebook: the vintage table (Part 1), the information value of every candidate variable (Part 5), and the default rate by LendingClub grade over each loan's whole life — **3.42% for grade A up to 23.75% for grade G** across all 466,285 loans.

**Decision:** every strong variable is monotonic in risk, so ordered bins will work; income needs taming; the delinquency gap is a flag, not noise; time must be part of the test.

### Check yourself

1. DTI moves the default rate from 2.92% to 4.41%; grade moves it from 1.22% to 9.22%. Which will carry more weight in a model, and why?
2. Why is Spearman the safer default than Pearson for income against loan amount?

<details>
<summary>Answers</summary>

1. Grade. Its bands separate defaulters from non-defaulters far more — a 7.6-fold spread against 1.5-fold for DTI — and Part 5 confirms it: information value 0.294 for grade against 0.023 for DTI.
2. Income is heavily skewed, with a tail running to $7 million. Pearson is pulled by a few extreme values; Spearman uses ranks, so one very rich borrower counts as one rank, not as a lever on the whole line.

</details>

---

## Part 4 — Leakage, and the split that tells the truth

### The cheatsheet

**Leakage** is any information in training that will not exist at the moment of prediction. It makes a model look brilliant in development and fail in use, and it is the most common way a model is wrong without anyone noticing.

| Kind of leakage | What happens | Example |
|---|---|---|
| **Target leakage** | A feature is recorded after the outcome, or is built from it | Principal repaid, recoveries, date of last payment |
| **Time leakage** | Training on the future to predict the past | A random split across years for a model that will score next year's loans |
| **Preprocessing leakage** | Scalers, imputers, encoders or bins fitted on all the data | WoE bins learned on train and test together |
| **Group leakage** | The same customer or entity on both sides of the split | Several loans per borrower, split row by row |
| **Selection leakage** | Choosing the model or threshold on the test set | Validating on the test set while training (the churn project) |

| Split | Use it when |
|---|---|
| Random | Rows are independent and time does not matter |
| **Stratified** | The target is rare — it keeps the same event rate on every side |
| **Out-of-time (OOT)** | The model will be used on later data. Always, in credit risk |
| Group | Several rows belong to one entity |
| k-fold cross-validation | Choosing settings without using up the test set (Part 13) |
| Time-series cross-validation | Choosing settings on data ordered in time |

The rule behind all of it: **fit on train, choose on validation, judge once on test.** Every learned step — scaling, imputing, encoding, binning — belongs to "fit".

### In the project

**Leakage is blocked by configuration.** The variable file lists every post-origination field — `loan_status`, `total_pymnt`, `total_rec_prncp`, `recoveries`, `last_pymnt_d` and the rest — as banned from the PD model. They are still in the data because LGD and EAD need them.

**Time is respected.** Loans issued 2007–2013 form the development sample; loans issued in 2014 are held out entirely as the out-of-time sample. The development sample is split 80/20, stratified on the target:

```python
from sklearn.model_selection import train_test_split

dev = loans[loans.vintage_year <= 2013]
oot = loans[loans.vintage_year == 2014]
train, test = train_test_split(dev, test_size=0.2, stratify=dev.default_12m, random_state=42)
```

| Sample | Loans | Defaults | Default rate | Used for |
|---|---:|---:|---:|---|
| Train | 184,525 | 6,329 | 3.4299% | Fitting bins and models |
| Test | 46,132 | 1,582 | 3.4293% | Judging on unseen loans from the same years |
| Out-of-time, 2014 | 235,628 | 8,107 | 3.4406% | Judging on the next year's loans |

Stratification is why train and test agree to the fourth decimal. And the WoE bins are fitted on the training sample only, so the test and out-of-time samples are scored with rules they never influenced.

### Side-line: what leakage looks like

Add four post-origination fields — principal repaid, total paid, recoveries and last payment amount — to the same logistic regression:

| Model | Test AUC |
|---|---:|
| Application data only | 0.6872 |
| Plus four payment fields | **0.9993** |

AUC is defined in Part 6; 0.5 is guessing and 1.0 is perfect. The leaky model is not better. It is reading the answer: a loan that repaid its whole principal did not default. At application none of those fields exists, and in production the model would collapse. An AUC above 0.95 on a credit problem is a leakage alarm, not a result.

### In the churn project

The notebook trained every network with `validation_data=(X_test, y_test)`, watched the test scores epoch by epoch, and then picked the best of five models on that same test set. Nothing was held back for an honest final judgement, so every reported score is slightly optimistic. The fix costs one line: split off a validation set from the training data, choose on it, and open the test set once.

**Decision:** application-time fields only; development 2007–2013, stratified 80/20; 2014 untouched until the end; every learned transformation fitted on train.

### Check yourself

1. A colleague proposes a random 80/20 split of all 466,285 loans instead of holding out 2014. What does the test score stop measuring?
2. Why must the WoE bins be fitted on the training sample only, when they are "just" a transformation?

<details>
<summary>Answers</summary>

1. Whether the model survives the passage of time. With 2014 loans mixed into training, the model has already seen the year it will be judged on, so drift between years is invisible — exactly the failure that hurts in production.
2. Because binning learns from the target: bin edges and WoE values come from default rates. Fitted on test data too, the test sample's own defaults would shape the rules used to score it, and the test score would be optimistic.

</details>

---

## Part 5 — Features: preprocessing, engineering, selection

### The cheatsheet

**Preprocessing** makes columns usable; **engineering** creates new signal; **selection** keeps what earns its place.

| Scaling | How | Needed by |
|---|---|---|
| Standardise | Subtract the mean, divide by the standard deviation | Regularised linear and logistic regression (Part 7), kNN and SVM (Part 10), neural networks (Part 12), PCA and k-means (Part 19) |
| Min–max | Squeeze into 0 to 1 | Some neural networks, bounded inputs |
| Robust | Subtract the median, divide by the interquartile range | Columns with heavy outliers |
| None | — | Trees, random forests, boosting — splits do not care about scale |

| Encoding | How | Good for | Watch |
|---|---|---|---|
| One-hot | One 0/1 column per level | Linear models, neural networks | Many levels make many columns; group rare levels |
| Ordinal | Integers in order | Ordered levels such as grade A–G; trees | Implies equal spacing |
| Target or WoE | Replace a level by its event rate or log-odds | Many levels; scorecards | Must be fitted on train only |
| Frequency | Replace a level by its share of rows | Trees with high-cardinality columns | Loses the meaning of the level |

| Missing values | When |
|---|---|
| Median or most frequent value | Few gaps, missing at random |
| Value plus a "was missing" flag | Gaps that carry information |
| A separate bin | Binned models and scorecards |
| Model-based (kNN, iterative) | Many related columns, gaps at random |

| Engineering idea | Example here |
|---|---|
| Ratios | Loan amount ÷ income; instalment ÷ monthly income |
| Durations | Credit history length = issue date − first credit line |
| Flags | Never delinquent |
| Bins for curves and outliers | Income bands, DTI bands |
| Interactions | Term × grade — trees find these themselves |

| Selection | Methods | Idea |
|---|---|---|
| Filter | Information value, target correlation, mutual information | Score each feature alone |
| Wrapper | Forward or backward selection, recursive elimination | Try subsets with the model |
| Embedded | Lasso (L1, Part 7), tree importance | Selection happens while fitting |
| Redundancy | Correlation matrix, variance inflation factor (VIF) | Drop near-copies |
| Stability | CSI between samples (Part 16) | Drop features whose distribution moves |

### Weight of evidence and information value

The scorecard world's way of turning any variable — numeric or categorical — into one ordered, model-ready number:

$$
WoE_i = \ln\left(\frac{\%\,\text{good}_i}{\%\,\text{bad}_i}\right)
$$

$$
IV = \sum_i \left(\%\,\text{good}_i - \%\,\text{bad}_i\right) \times WoE_i
$$

where

- **%good<sub>i</sub>** is the share of all non-defaulted loans that fall in bin *i*
- **%bad<sub>i</sub>** is the share of all defaulted loans that fall in bin *i*
- a positive **WoE** means the bin is safer than average; negative, riskier

| IV | Reading |
|---|---|
| Below 0.02 | Useless |
| 0.02 to 0.1 | Weak |
| 0.1 to 0.3 | Medium |
| 0.3 to 0.5 | Strong |
| Above 0.5 | Suspiciously strong — check for leakage |

WoE handles missing values (their own bin), outliers (they fall into the end bin), curves (bins can take any shape) and categories (each level or group is a bin) in one step — which is why scorecards use it.

### In the project

The binner starts every numeric variable at 20 equal-count bins, then merges neighbours until **every bin holds at least 5% of loans and the WoE moves in one direction only**. Laplace smoothing — adding 0.5 to every count — keeps WoE finite when a bin has no defaults. Income, after binning:

| Annual income | Loans | Default rate | WoE |
|---|---:|---:|---:|
| Below $40,000 | 37,178 | 4.64% | −0.315 |
| $40,000–50,000 | 27,926 | 3.94% | −0.144 |
| $50,000–65,000 | 37,734 | 3.52% | −0.026 |
| $65,000–75,000 | 19,946 | 3.10% | +0.105 |
| $75,000–102,200 | 34,059 | 2.74% | +0.233 |
| $102,200 and above | 27,678 | 2.26% | +0.428 |
| Missing | 4 | 0.00% | −1.140 |

Monotonic, as Part 3 promised — and the $7 million income sits harmlessly in the top bin. One thing to fix: the **four-loan missing bin** has no defaults yet gets the most negative WoE of all, because smoothing adds half a default to a bin with almost no loans. Tiny bins should be merged into a neighbour.

Information value decides who enters:

| Variable | IV | Fate |
|---|---:|---|
| `grade` | 0.294 | Model B only |
| `int_rate` | 0.277 | Model B only |
| `inq_last_6mths` | 0.076 | Both models |
| `sub_grade` | 0.074 | Model B only |
| `annual_inc` | 0.060 | Both |
| `purpose` | 0.051 | Both |
| `tot_cur_bal` | 0.038 | Dropped: unstable across vintages |
| `home_ownership` | 0.034 | Both |
| `total_rev_hi_lim` | 0.026 | Dropped: unstable across vintages |
| `term` | 0.025 | Both |
| `dti` | 0.023 | Both |
| `revol_util` | 0.021 | Both |
| `emp_length` | 0.019 | Dropped: below 0.02 |

**Model A** uses the seven borrower variables. **Model B** adds LendingClub's own grade, sub-grade and interest rate. Model A answers "what do the borrower's facts say?"; Model B answers "how much better can we do by also using the platform's pricing?" — a distinction that matters because a lender copying another lender's grade is partly copying its model.

### Side-line: the same book, one-hot instead of WoE

The other standard route — impute, scale, one-hot encode — as one scikit-learn pipeline, so every step is fitted on train only. First, a function that turns raw columns into model inputs:

```python
import numpy as np, pandas as pd

NUM = ["loan_amnt", "int_rate", "installment", "annual_inc", "dti", "delinq_2yrs",
       "inq_last_6mths", "mths_since_last_delinq", "mths_since_last_record", "open_acc",
       "pub_rec", "revol_bal", "revol_util", "total_acc"]
CAT = ["term", "grade", "home_ownership", "verification_status", "purpose", "initial_list_status"]

def prepare(df):
    X = df[NUM + CAT].copy()
    emp = df["emp_length"]
    X["emp_years"] = (emp.str.extract(r"(\d+)")[0].astype(float)
                      .where(~emp.str.startswith("<", na=False), 0.5))
    X["credit_history_yrs"] = (lc_date(df["issue_d"]) - lc_date(df["earliest_cr_line"])).dt.days / 365.25
    X["sub_grade_num"] = df["sub_grade"].str[0].map("ABCDEFG".index) * 5 + df["sub_grade"].str[1].astype(int)
    X["never_delinquent"] = df["mths_since_last_delinq"].isna().astype(int)
    return X, df["default_12m"]

NUM_ALL = NUM + ["emp_years", "credit_history_yrs", "sub_grade_num", "never_delinquent"]
X_train, y_train = prepare(train)
X_test, y_test = prepare(test)
X_oot, y_oot = prepare(oot)
```

Then the pipeline:

```python
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import roc_auc_score

prep = ColumnTransformer([
    ("num", Pipeline([("impute", SimpleImputer(strategy="median")),
                      ("scale", StandardScaler())]), NUM_ALL),
    ("cat", OneHotEncoder(handle_unknown="ignore", min_frequency=100), CAT),
])
logit = Pipeline([("prep", prep), ("model", LogisticRegression(max_iter=2000))])
logit.fit(X_train, y_train)
roc_auc_score(y_test, logit.predict_proba(X_test)[:, 1])     # 0.6872
```

| Model | Inputs | Test AUC | OOT AUC |
|---|---|---:|---:|
| Project Model A — WoE, 7 variables | Borrower facts only | 0.6485 | 0.6357 |
| Project Model B — WoE, 10 variables | Plus LendingClub's pricing | 0.6817 | 0.6923 |
| Side-line — one-hot, 24 variables | Everything known at application | 0.6872 | 0.6960 |

Twenty-four raw variables in 51 columns edge out ten binned ones by 0.004 on the out-of-time sample. The gap is small because most of the signal is in grade, income and inquiries, which both routes capture. The scorecard gives up almost nothing for being readable.

**Decision:** bin into monotonic WoE for the scorecard, drop unstable and weak variables, keep missing values as their own bins — and remember that the one-hot pipeline is the benchmark any cleverer model must beat.

### Check yourself

1. The top income bin has 27,678 loans and 626 defaults; the training sample has 178,196 non-defaults and 6,329 defaults. Work out the bin's WoE.
2. Why does a random forest not need the scaler in the pipeline, when the logistic regression does?

<details>
<summary>Answers</summary>

1. %good = (27,678 − 626) ÷ 178,196 = 15.18%; %bad = 626 ÷ 6,329 = 9.89%. WoE = ln(15.18 ÷ 9.89) = ln(1.535) = **+0.428**: safer than average.
2. A tree splits on thresholds — "income above $102,200?" — and a threshold works the same whatever the units. The logistic regression's penalty, and the speed at which it fits, depend on coefficient sizes, which depend on units.

</details>

---

## Part 6 — Baselines, and the metrics that matter

### The cheatsheet

A model is only good relative to something simpler. Build the baselines first.

| Baseline | What it is | Beat it by |
|---|---|---|
| Dummy | Predict the average for everyone | Any real ranking at all |
| Rule | One variable or policy rule — here, LendingClub's own sub-grade | Adding information the rule lacks |
| Simple model | Logistic or linear regression on clean features | Enough to justify the complexity |

Every classification metric starts from the **confusion matrix**: predictions against outcomes at one threshold.

<svg viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Confusion matrix of Model B on the test sample at a 5% PD threshold: 659 true positives, 923 false negatives, 8,568 false positives and 35,982 true negatives" style="width:100%;max-width:700px;height:auto;display:block;margin:1rem auto">
<g font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="12" fill="#1f2937">
<text x="330" y="22" text-anchor="middle" font-weight="600" font-size="13">Predicted</text>
<text x="250" y="46" text-anchor="middle">Default (PD ≥ 5%)</text>
<text x="430" y="46" text-anchor="middle">No default</text>
<text x="40" y="160" text-anchor="middle" font-weight="600" font-size="13" transform="rotate(-90 40 160)">Actual</text>
<text x="120" y="110" text-anchor="end">Defaulted</text>
<text x="120" y="210" text-anchor="end">Repaid</text>
<rect x="160" y="60" width="170" height="90" rx="6" fill="#dcfce7" stroke="#16a34a"/>
<text x="245" y="96" text-anchor="middle">True positive</text>
<text x="245" y="124" text-anchor="middle" font-size="18" font-weight="600">659</text>
<rect x="340" y="60" width="170" height="90" rx="6" fill="#fee2e2" stroke="#dc2626"/>
<text x="425" y="96" text-anchor="middle">False negative</text>
<text x="425" y="124" text-anchor="middle" font-size="18" font-weight="600">923</text>
<rect x="160" y="160" width="170" height="90" rx="6" fill="#fef3c7" stroke="#d97706"/>
<text x="245" y="196" text-anchor="middle">False positive</text>
<text x="245" y="224" text-anchor="middle" font-size="18" font-weight="600">8,568</text>
<rect x="340" y="160" width="170" height="90" rx="6" fill="#e0f2fe" stroke="#0284c7"/>
<text x="425" y="196" text-anchor="middle">True negative</text>
<text x="425" y="224" text-anchor="middle" font-size="18" font-weight="600">35,982</text>
<text x="600" y="92" font-size="11">Recall</text><text x="600" y="108" font-size="11">659 ÷ 1,582</text><text x="600" y="124" font-size="11" font-weight="600">= 41.7%</text>
<text x="600" y="192" font-size="11">Precision</text><text x="600" y="208" font-size="11">659 ÷ 9,227</text><text x="600" y="224" font-size="11" font-weight="600">= 7.1%</text>
<text x="345" y="282" text-anchor="middle" font-size="11">Test sample, 46,132 loans. Flagging every loan with a predicted PD of 5% or more flags 20.0% of the book.</text>
</g>
</svg>

TP, FP, FN and TN name the four cells: true positives, false positives, false negatives, true negatives.

| Metric | Definition | Answers | Use when |
|---|---|---|---|
| Accuracy | (TP + TN) ÷ all | How often right | Classes balanced — almost never in risk |
| Precision | TP ÷ (TP + FP) | Of those flagged, how many were real | False alarms are costly |
| Recall (sensitivity) | TP ÷ (TP + FN) | Of the real ones, how many were caught | Misses are costly |
| F1 | Harmonic mean of precision and recall | One number for both | Comparing thresholds on rare events |
| ROC-AUC | Area under the ROC curve — the curve of recall against the false-alarm rate as the threshold moves. Equals the chance a random defaulter scores riskier than a random non-defaulter | Ranking, at every threshold at once | Scorecards, PD models |
| Gini | 2 × AUC − 1 | The same, on a 0 to 1 scale | Credit risk convention |
| KS | Largest gap between the cumulative score distributions of defaulters and non-defaulters | Best single separation point | Credit risk convention |
| PR-AUC | Average precision across recall levels | Ranking, when positives are rare | Fraud, rare defaults |
| Log loss | Penalty for confident wrong probabilities | Quality of probabilities | Training; comparing PD models |
| Brier score | Average squared gap between probability and outcome | Calibration and ranking together | PD models |

$$
\text{Log loss} = -\frac{1}{n}\sum_{i=1}^{n}\left[\,y_i \ln p_i + (1 - y_i)\ln(1 - p_i)\,\right]
$$

$$
\text{Brier} = \frac{1}{n}\sum_{i=1}^{n}\left(p_i - y_i\right)^2
$$

where

- **y<sub>i</sub>** is 1 if loan *i* defaulted and 0 if not
- **p<sub>i</sub>** is the predicted probability of default for loan *i*

| Regression metric | Definition | Reads as |
|---|---|---|
| MAE | Average absolute error | Typical miss, in the target's units |
| RMSE | Square root of the average squared error | Like MAE, but punishes big misses more |
| R² | Share of the target's variance explained | 0 = no better than the average; 1 = perfect |
| MAPE | Average percentage error | Scale-free — but explodes near zero |

### Side-line: why accuracy lies

On the test sample, 96.57% of loans did not default within 12 months.

| Model | Accuracy | AUC |
|---|---:|---:|
| Dummy — "nobody defaults" | **96.57%** | 0.5000 |
| LendingClub sub-grade alone | — | 0.6517 test · 0.6886 OOT |
| Project Model B at a 50% threshold | **96.57%** | 0.6817 |

Model B's highest predicted PD on the whole test sample is 21.1%, so at the textbook 50% threshold it flags nobody and scores exactly the dummy's accuracy. Its value is in the **ranking**, which only threshold-free metrics see. At a 5% threshold — the matrix above — it flags one loan in five, catches 41.7% of the defaults, and is right 7.1% of the time it flags: twice the 3.43% base rate. Accuracy falls to 79.4%, and the model has become useful.

| Model B, test sample | Value | Against |
|---|---:|---|
| PR-AUC | 0.0675 | 0.0343 for random ranking |
| Log loss | 0.1425 | — |
| Brier score | 0.0326 | — |
| F1 at 5% | 0.122 | 0 at 50% |

And note the rule baseline: **LendingClub's sub-grade on its own scores 0.6886 out of time**, against Model B's 0.6923. Most of the ranking power in this book comes from the platform's own pricing, and every model here is measured against that bar.

### In the project

The validation battery runs every model on all three samples:

| Model | Sample | AUC | Gini | KS | Brier | Hosmer–Lemeshow p |
|---|---|---:|---:|---:|---:|---:|
| A | Train | 0.6507 | 0.3013 | 0.2193 | 0.0328 | 0.001 |
| A | Test | 0.6484 | 0.2969 | 0.2233 | 0.0328 | 0.236 |
| A | OOT 2014 | 0.6357 | 0.2715 | 0.1955 | 0.0330 | 0.0000003 |
| B | Train | 0.6839 | 0.3678 | 0.2736 | 0.0326 | 0.0004 |
| B | Test | 0.6817 | 0.3634 | 0.2728 | 0.0326 | 0.494 |
| B | OOT 2014 | 0.6923 | 0.3845 | 0.2843 | 0.0327 | 0.001 |

A Gini of 0.30–0.38 is modest for a credit scorecard — typical application scorecards with bureau data reach 0.40–0.60 — because LendingClub had already screened these borrowers, so the book holds only approved applicants. The Hosmer–Lemeshow column is calibration, and Part 14 explains why it fails on 235,628 loans even when the model is close.

### In the churn project

The notebook chose **recall** for churners as its metric, because a missed churner is a lost customer while a false alarm only costs a retention offer. The first network, trained with plain stochastic gradient descent (SGD — gradient descent on small random batches, Part 12):

| | Predicted stay | Predicted leave |
|---|---:|---:|
| Actually stayed | 1,486 | 50 |
| Actually left | 204 | 186 |

Recall 186 ÷ 390 = **0.48**; precision 186 ÷ 236 = 0.79; AUC 0.8533. Part 11 shows what SMOTE did to that recall — and what it cost.

**Decision:** rank with AUC, Gini and KS; judge probabilities with log loss, Brier and calibration; pick thresholds by what an error costs; never report accuracy on a 3% event.

### Check yourself

1. Model B's out-of-time AUC is 0.6923. What is its Gini?
2. Lowering the threshold from 5% to 3% will change recall and precision how, and AUC how?

<details>
<summary>Answers</summary>

1. Gini = 2 × 0.6923 − 1 = **0.3846** — the table's 0.3845 before rounding.
2. More loans are flagged, so recall rises and precision falls. AUC does not change at all: it measures the ranking across every threshold, not the choice of one.

</details>

---

## Part 7 — Linear regression, exactly

### The cheatsheet

Linear regression predicts a number as a weighted sum of inputs:

$$
\hat{y} = b_0 + b_1 x_1 + b_2 x_2 + \dots + b_k x_k
$$

where

- **ŷ** is the predicted value
- **b<sub>0</sub>** is the intercept: the prediction when every input is zero
- **b<sub>j</sub>** is the change in ŷ for one unit more of **x<sub>j</sub>**, holding the other inputs fixed

"Best" means **least squares**: choose the coefficients that make the sum of squared errors as small as possible.

$$
\min_{b}\ \sum_{i=1}^{n}\left(y_i - \hat{y}_i\right)^2
\qquad
R^2 = 1 - \frac{\sum_i (y_i - \hat{y}_i)^2}{\sum_i (y_i - \bar{y})^2}
$$

where **ȳ** is the average of the target, so R² compares the model's squared errors with those of simply predicting the average.

For linear regression there is an exact formula for the best coefficients. Most other models have none, and learn by **gradient descent** instead: start with any coefficients, measure the error, nudge every coefficient a small step in the direction that lowers it, and repeat until it stops falling. The size of the step is the **learning rate**. Neural networks (Part 12) learn exactly this way.

| Assumption | Means | Check |
|---|---|---|
| Linearity | The effect of each input is a straight line | Residuals against each input show no curve |
| Independence | Errors of different rows are unrelated | No repeated units or time patterns |
| Constant variance | Errors are as big for small predictions as for large | Residuals against predictions form an even band |
| Normal errors | Needed for p-values and intervals, not for predictions | Histogram of residuals |
| No multicollinearity | Inputs are not near-copies of each other | VIF below about 5 |

| Variant | Adds | Effect | Use when |
|---|---|---|---|
| Ridge (L2) | Penalty on squared coefficients | Shrinks all coefficients | Many correlated inputs |
| Lasso (L1) | Penalty on absolute coefficients | Sets some exactly to zero | You want selection built in |
| Elastic net | Both | A mix | Many inputs, groups of correlated ones |

Penalised models need scaled inputs, or the penalty falls unevenly.

### Side-line: rediscovering LendingClub's price list

LendingClub set each loan's interest rate from its sub-grade — A1, A2 … G5. Number the sub-grades 1 to 35 and ask a straight line to find the pricing rule:

```python
from sklearn.linear_model import LinearRegression
from sklearn.metrics import r2_score, mean_absolute_error

line = LinearRegression().fit(X_train[["sub_grade_num"]], X_train.int_rate)
pred = line.predict(X_test[["sub_grade_num"]])
line.intercept_, line.coef_            # 6.342, [0.6464]
r2_score(X_test.int_rate, pred)        # 0.926
```

**Interest rate ≈ 6.34% + 0.646% × sub-grade number.** Each step down the grade ladder costs the borrower about two-thirds of a percentage point.

| Sub-grade | Number | Predicted rate |
|---|---:|---:|
| A1 | 1 | 6.99% |
| B5 | 10 | 12.81% |
| D5 | 20 | 19.27% |
| G5 | 35 | 28.96% |

One input explains 92.6% of the variation in rates, with a typical miss of 0.87 points. Add the loan's term and the year it was issued:

| Input | Coefficient | Reading |
|---|---:|---|
| Intercept | 2.942 | — |
| Sub-grade number | +0.647 | Two-thirds of a point per step, as before |
| 60-month term | −0.117 | At the same sub-grade, longer loans were priced a touch lower |
| Years since 2007 | **+0.651** | The same sub-grade cost 0.65 points more each year |

R² rises to 0.954 and the typical miss falls to 0.70 points. The regression has found something the grade alone hides: **LendingClub repriced upwards year after year.** A model that treats a 2008 "B3" and a 2013 "B3" as the same risk-price is wrong by several points.

### In the project

The one place the project uses a straight line on purpose is the **credit conversion factor** — how much of an unused credit line a borrower draws before defaulting. LendingClub's term loans have no unused lines, so the project simulates 5,000 revolving accounts and fits, on the 1,039 that default:

**CCF = 0.198 + 0.475 × utilisation**, with a negligible term for the credit limit. Mean absolute error 0.122; the mean predicted CCF equals the mean actual, 0.429, as least squares with an intercept always guarantees on the data it was fitted to. It is labelled a synthetic demonstration in the repository and here.

### Side-line: where a straight line fails

Try the same tool on **LGD** — the share of the balance lost after default — for the 50,965 defaulted loans with a positive balance:

| | Value |
|---|---:|
| Loans with LGD of exactly 100% | 52.2% |
| R² of a linear regression on six loan features | **0.006** |
| Range of its predictions | 0.87 to 0.99 |

The target is a lump at 100% plus a spread of partial losses, and a line through that predicts almost the average for everyone. Part 17 shows the project's answer: split the question in two.

**Decision:** use linear regression where the target is a number with a roughly straight-line relationship — pricing, CCF; reach for other shapes when the target is bounded or lumped.

### Check yourself

1. Using the simple line, what rate would a C3 loan (sub-grade 13) carry?
2. The years-since-2007 coefficient is +0.651. What did an identical B3 loan cost in 2013 compared with 2009?

<details>
<summary>Answers</summary>

1. 6.342 + 0.6464 × 13 = **14.75%**.
2. Four years later, so about 4 × 0.651 = **2.6 points more**, with sub-grade and term held fixed.

</details>

---

## Part 8 — Logistic regression, and the scorecard

### The cheatsheet

Logistic regression is a straight line squeezed into a probability:

$$
PD = \frac{1}{1 + e^{-z}}
\qquad
z = b_0 + b_1 x_1 + \dots + b_k x_k
$$

where

- **z** is the **log-odds** of default, ln(PD ÷ (1 − PD)), which the model keeps linear in the inputs
- **e<sup>b<sub>j</sub></sup>** is the **odds ratio**: how many times the odds of default multiply for one unit more of x<sub>j</sub>

It is fitted by making the observed outcomes as likely as possible — which is the same as minimising the log loss of Part 6.

| Library | Default behaviour | Gives |
|---|---|---|
| `statsmodels` `Logit` | No penalty | Coefficients, standard errors, p-values — the scorecard builder's view |
| scikit-learn `LogisticRegression` | **L2 penalty on by default** (`C=1.0`) | Predictions in a pipeline — the engineer's view |

That default penalty surprises people: scikit-learn's coefficients are shrunk unless you set a very large `C` or `penalty=None`.

| Check | Why |
|---|---|
| Every coefficient has the expected sign | A wrong sign usually means two inputs fighting (collinearity) |
| Every coefficient is significant — p-value below 0.05 | Insignificant inputs add noise and instability |
| Inputs are not near-copies | Otherwise coefficients swing between samples |
| Scores rank-order on test and OOT | Each worse band should default more |

### In the project

The PD models are `statsmodels` logistic regressions on WoE inputs. Because WoE here is ln(good ÷ bad) — higher is safer — every coefficient should be **negative** on the log-odds of default, and the code flags any that are not.

| Model A | Coefficient | p-value |
|---|---:|---:|
| Intercept | −3.338 | — |
| `inq_last_6mths` | −1.084 | < 10⁻¹³⁰ |
| `annual_inc` | −0.976 | < 10⁻⁶² |
| `purpose` | −0.939 | < 10⁻⁶⁰ |
| `home_ownership` | −0.779 | < 10⁻²⁴ |
| `term` | −1.199 | < 10⁻⁴⁸ |
| `dti` | −0.684 | < 10⁻¹⁴ |
| `revol_util` | −1.178 | < 10⁻⁴² |

All seven negative, all overwhelmingly significant. **Model B** adds grade, interest rate and sub-grade — and two variables stop earning their place:

| Model B | Coefficient | p-value | Reading |
|---|---:|---:|---|
| `grade` | −0.618 | < 10⁻²⁰ | Carries most of the pricing signal |
| `int_rate` | −0.236 | 0.0007 | Adds a little |
| `sub_grade` | −0.107 | **0.088** | Not significant: a finer copy of grade |
| `term` | −0.017 | **0.853** | Not significant: LendingClub already priced term into the grade |

A stricter build would drop both and refit. The model still ranks well, but two of its ten inputs are near-copies of others.

**From log-odds to points.** A scorecard rescales the model so that scores are round, positive and easy to read:

$$
\text{Score} = \text{Offset} + \text{Factor} \times \ln(\text{odds of repaying})
\qquad
\text{Factor} = \frac{\text{PDO}}{\ln 2}
$$

where

- **PDO**, points to double the odds, is 20
- **Offset** is set so that a score of 600 means odds of 50 to 1

So Factor = 20 ÷ 0.693 = **28.85**, and Offset = 600 − 28.85 × ln 50 = **487.1**. A score of 600 is a PD of 1 ÷ 51 = 1.96%; 620 halves the odds of default; 580 doubles them. The project splits the offset and intercept evenly across the variables and gives each bin **Factor × (−coefficient × WoE)** on top, so every attribute carries points and the score is their sum.

Model A's scorecard, for two applicants:

| Attribute | Applicant 1 | Points | Applicant 2 | Points |
|---|---|---:|---|---:|
| Inquiries, last 6 months | 0 | 88 | 2 or more | 64 |
| Annual income | $80,000 | 90 | $35,000 | 74 |
| Purpose | Credit card | 92 | Other | 72 |
| Home | Mortgage | 88 | Rent | 79 |
| Term | 36 months | 87 | 60 months | 74 |
| DTI | 12 | 85 | 28 | 78 |
| Revolving utilisation | 35% | 87 | 90% | 74 |
| **Score** | | **617** | | **515** |
| **PD** | | **1.08%** | | **26.8%** |

Every point is traceable to a bin and every bin to its default rate — the explanation is the model itself (Part 15). Cutting Model B's scores into eight rating grades gives a clean ladder on the training sample:

| Rating grade | Scores | Loans | Observed default rate |
|---:|---|---:|---:|
| 1 | 614–639 | 21,930 | 0.86% |
| 2 | 604–613 | 23,998 | 1.34% |
| 3 | 597–603 | 22,475 | 1.94% |
| 4 | 591–596 | 21,074 | 2.52% |
| 5 | 584–590 | 24,353 | 3.08% |
| 6 | 577–583 | 22,564 | 4.31% |
| 7 | 568–576 | 23,203 | 5.19% |
| 8 | 522–567 | 24,928 | 7.72% |

Each grade defaults more than the one above it: the ranking holds.

```python
import statsmodels.api as sm

features = ["inq_last_6mths", "annual_inc", "purpose", "home_ownership", "term", "dti", "revol_util"]
woe_train = binner.transform(train[features])          # binner: the project's fitted WoEBinner
woe_test = binner.transform(test[features])
model = sm.Logit(train.default_12m, sm.add_constant(woe_train)).fit(disp=0)
model.params, model.pvalues                            # Model A: intercept -3.338, inquiries -1.084 ...

factor = 20 / np.log(2)
offset = 600 - factor * np.log(50)
score = offset - factor * model.predict(sm.add_constant(woe_test), which="linear")
```

**Decision:** Model B ranks best; its two insignificant inputs should go; the scorecard makes every PD explainable in points.

### Check yourself

1. Applicant 2 scores 515. Using the factor and offset, confirm the PD is about 27%.
2. Model B's `term` coefficient is insignificant, yet term had an IV of 0.025 and a clear default gap in Part 3. How can both be true?

<details>
<summary>Answers</summary>

1. ln(odds of repaying) = (515 − 487.1) ÷ 28.85 = 0.967, so the odds are e^0.967 = 2.63 to 1. PD = 1 ÷ 3.63 = **27.5%** — the 26.8% in the table comes from the unrounded points (516.1).
2. Term matters on its own, but LendingClub already priced it into the grade and rate. Once grade and interest rate are in the model, term adds no new information — the same signal counted twice.

</details>

---

## Part 9 — Trees and ensembles

### The cheatsheet

A **decision tree** asks yes/no questions — "sub-grade worse than C2?", "income below $40,000?" — choosing each question to make the groups below it as pure as possible:

$$
\text{Gini impurity} = 1 - \sum_{k} p_k^2
$$

where **p<sub>k</sub>** is the share of class *k* in a node. A node with 3.43% defaults has impurity 1 − (0.0343² + 0.9657²) = 0.066; a node of only one class has 0. The tree keeps splitting until a stopping rule halts it — and left alone, it never stops: it memorises.

| Control | What it limits | Typical |
|---|---|---|
| `max_depth` | How many questions in a row | 3–8 |
| `min_samples_leaf` | The smallest group allowed at the end | 1–5% of rows for noisy targets |
| `max_features` | How many inputs each split may consider | √(number of inputs) in forests |
| `ccp_alpha` | Cost-complexity pruning after growth | Tuned |

**Ensembles** combine many trees:

| Method | How | Fixes | Examples |
|---|---|---|---|
| **Bagging** | Many deep trees, each on a **bootstrap sample** — rows drawn at random with replacement — averaged | Variance — one tree's instability | Random forest (also samples features at each split) |
| **Boosting** | Many shallow trees in sequence, each fitted to the errors of the ones before | Bias — one tree's crudeness | Gradient boosting, XGBoost, LightGBM, CatBoost |
| Voting or averaging | Average the predictions of different models | Individual models' blind spots | Scorecard + boosting |
| Stacking | A second model learns how to combine the first models' predictions | Same, learned | Logistic regression on top of several models |

| Library | Strength |
|---|---|
| XGBoost | Regularised, mature, robust defaults |
| LightGBM | Fast on large data; handles categories and missing values natively |
| CatBoost | Best with many categorical columns; careful target encoding built in |

| Boosting setting | Controls |
|---|---|
| `n_estimators` with `learning_rate` | How many trees, and how much each one counts — more trees need a smaller rate |
| `max_depth` or `num_leaves` | How complex each tree is |
| `min_child_samples` | The smallest leaf — the main guard against noise |
| `subsample`, `colsample_bytree` | Rows and columns sampled per tree — adds randomness, cuts overfitting |
| `reg_lambda` | Penalty on leaf values |
| Early stopping | Stop adding trees when a validation score stops improving |

### In the project

Boosting appears once, inside the LGD model: a `GradientBoostingRegressor` with 100 trees of depth 3 and learning rate 0.05 predicts how much is recovered on defaulted loans that recover anything (Part 17). The PD model stays a logistic scorecard.

### Side-line: one tree, then many

The same 24 inputs from Part 5, one tree at a time, deeper and deeper:

<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Train and test AUC of a single decision tree by maximum depth: test AUC peaks at depth 6 while train AUC keeps rising to 1.0, and an unlimited tree falls to 0.51 on test" style="width:100%;max-width:680px;height:auto;display:block;margin:1rem auto">
<g font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="12" fill="#1f2937">
<line x1="70" y1="250.0" x2="630" y2="250.0" stroke="#e5e7eb"/>
<text x="62" y="254.0" text-anchor="end" font-size="11">0.5</text>
<line x1="70" y1="210.0" x2="630" y2="210.0" stroke="#e5e7eb"/>
<text x="62" y="214.0" text-anchor="end" font-size="11">0.6</text>
<line x1="70" y1="170.0" x2="630" y2="170.0" stroke="#e5e7eb"/>
<text x="62" y="174.0" text-anchor="end" font-size="11">0.7</text>
<line x1="70" y1="130.0" x2="630" y2="130.0" stroke="#e5e7eb"/>
<text x="62" y="134.0" text-anchor="end" font-size="11">0.8</text>
<line x1="70" y1="90.0" x2="630" y2="90.0" stroke="#e5e7eb"/>
<text x="62" y="94.0" text-anchor="end" font-size="11">0.9</text>
<line x1="70" y1="50.0" x2="630" y2="50.0" stroke="#e5e7eb"/>
<text x="62" y="54.0" text-anchor="end" font-size="11">1.0</text>
<text x="70.0" y="270" text-anchor="middle" font-size="11">2</text>
<text x="182.0" y="270" text-anchor="middle" font-size="11">4</text>
<text x="294.0" y="270" text-anchor="middle" font-size="11">6</text>
<text x="406.0" y="270" text-anchor="middle" font-size="11">8</text>
<text x="518.0" y="270" text-anchor="middle" font-size="11">12</text>
<text x="630.0" y="270" text-anchor="middle" font-size="11">none</text>
<text x="350.0" y="290" text-anchor="middle">Maximum depth of the tree</text>
<text x="18" y="150.0" text-anchor="middle" transform="rotate(-90 18 150.0)">AUC</text>
<polyline points="70.0,194.1 182.0,182.3 294.0,176.2 406.0,170.6 518.0,152.1 630.0,50.0" fill="none" stroke="#dc2626" stroke-width="2.5"/>
<circle cx="70.0" cy="194.1" r="3.5" fill="#dc2626"/>
<circle cx="182.0" cy="182.3" r="3.5" fill="#dc2626"/>
<circle cx="294.0" cy="176.2" r="3.5" fill="#dc2626"/>
<circle cx="406.0" cy="170.6" r="3.5" fill="#dc2626"/>
<circle cx="518.0" cy="152.1" r="3.5" fill="#dc2626"/>
<circle cx="630.0" cy="50.0" r="3.5" fill="#dc2626"/>
<polyline points="70.0,195.8 182.0,185.9 294.0,182.7 406.0,183.2 518.0,189.7 630.0,245.2" fill="none" stroke="#1d4ed8" stroke-width="2.5"/>
<circle cx="70.0" cy="195.8" r="3.5" fill="#1d4ed8"/>
<circle cx="182.0" cy="185.9" r="3.5" fill="#1d4ed8"/>
<circle cx="294.0" cy="182.7" r="3.5" fill="#1d4ed8"/>
<circle cx="406.0" cy="183.2" r="3.5" fill="#1d4ed8"/>
<circle cx="518.0" cy="189.7" r="3.5" fill="#1d4ed8"/>
<circle cx="630.0" cy="245.2" r="3.5" fill="#1d4ed8"/>
<text x="524.0" y="144.1" fill="#dc2626" font-size="12" font-weight="600">Train</text>
<text x="294.0" y="202.7" fill="#1d4ed8" font-size="12" font-weight="600" text-anchor="middle">Test</text>
<text x="350.0" y="22" text-anchor="middle" font-size="11">Unlimited depth: train 1.000 — the tree memorised the training loans; test 0.512 — a coin toss</text>
</g>
</svg>

| Model | Train AUC | Test AUC | OOT AUC |
|---|---:|---:|---:|
| Tree, depth 2 | 0.6397 | 0.6354 | 0.6691 |
| Tree, depth 4 | 0.6693 | 0.6602 | 0.6822 |
| Tree, depth 6 | 0.6846 | 0.6683 | 0.6850 |
| Tree, depth 8 | 0.6985 | 0.6671 | 0.6766 |
| Tree, depth 12 | 0.7448 | 0.6507 | 0.6525 |
| Tree, no depth limit | **1.0000** | **0.5119** | 0.5166 |

Past depth 6 the tree learns the training loans rather than the pattern. With no limit it scores perfectly on the loans it has seen and no better than a coin on new ones — overfitting in its purest form. Now the ensembles:

```python
import lightgbm as lgb

def as_categories(X):
    X = X.copy()
    for c in CAT:
        X[c] = pd.Categorical(X[c], categories=pd.Categorical(X_train[c]).categories)
    return X

L_train, L_test, L_oot = as_categories(X_train), as_categories(X_test), as_categories(X_oot)
gbm = lgb.LGBMClassifier(n_estimators=300, learning_rate=0.05, num_leaves=31,
                         min_child_samples=200, subsample=0.8, subsample_freq=1,
                         colsample_bytree=0.8, random_state=42, verbose=-1)
gbm.fit(L_train, y_train)                    # missing values and categories handled natively
roc_auc_score(y_oot, gbm.predict_proba(L_oot)[:, 1])     # 0.6956
```

| Model | Train AUC | Test AUC | OOT AUC |
|---|---:|---:|---:|
| **Project Model B — scorecard** | 0.6839 | 0.6817 | 0.6923 |
| Random forest, 300 trees | 0.8380 | 0.6925 | **0.7035** |
| LightGBM, 300 trees | 0.8357 | 0.6935 | 0.6956 |
| LightGBM, early-stopped at 155 trees | 0.7832 | 0.6939 | 0.6966 |
| XGBoost, 400 trees of depth 4 | 0.7516 | **0.6994** | 0.7025 |
| LightGBM on **Model B's 10 variables only** | 0.7892 | 0.6791 | 0.6872 |
| Average of Model B and LightGBM | — | 0.6960 | 0.7013 |

Four lessons, all worth more than any single number:

- **Ensembles beat a single tree** by about 0.02–0.03 of AUC, because averaging many trees cancels their individual noise.
- **Against the scorecard, the gain is about 0.01** out of time: real, but small.
- **Given only the scorecard's ten variables, boosting loses** — 0.6872 against 0.6923. The gain above comes from the extra inputs, not from the algorithm. Better data beat a better learner.
- **A big train–test gap is normal for ensembles** — 0.84 against 0.69 — and not by itself a problem: judge them on test and out-of-time only.

**Decision:** for this book, a tuned boosted model is a credible challenger worth about 0.01 of AUC; the scorecard remains the champion unless that gain pays for its opacity (Part 10).

### Check yourself

1. A node holds 1,000 loans of which 100 defaulted. What is its Gini impurity?
2. Why does early stopping at 155 trees give almost the same test AUC as 300 trees, but a much lower train AUC?

<details>
<summary>Answers</summary>

1. 1 − (0.1² + 0.9²) = 1 − (0.01 + 0.81) = **0.18**.
2. The trees after about 155 were fitting noise in the training data: they raised the training score without improving predictions on unseen loans. Early stopping watches a validation set and stops when it stops improving.

</details>

---

## Part 10 — The other algorithms, and how to choose

### The cheatsheet

| Algorithm | Idea in one line | Strength | Weakness |
|---|---|---|---|
| **k-nearest neighbours** | Predict from the *k* most similar past rows | No training; captures odd shapes | Slow to predict; needs scaling; weak in many dimensions |
| **Naive Bayes** | Combine each feature's evidence as if independent | Very fast; good for text | The independence assumption is rarely true |
| **Support vector machine** | Find the boundary with the widest margin between classes | Strong on small, clean data; kernels for curves | Needs scaling; no probabilities without calibration; slow on large data |
| Logistic regression | A linear score squeezed into a probability | Readable, stable, calibrated | Misses interactions unless you build them |
| Decision tree | A flowchart of questions | Readable; no scaling | Unstable; overfits |
| Random forest | Many deep trees, averaged | Strong with little tuning | Large; slower to score |
| Gradient boosting | Shallow trees, each fixing the last | Usually the best on tables | Needs tuning; opaque |
| Neural network | Layers of weighted sums and bends | Best on images, text, sequences | Needs lots of data and tuning; opaque |

### Side-line: the whole field on one book

| Model | Test AUC | OOT AUC |
|---|---:|---:|
| kNN, k = 15 (40,000-loan sample) | 0.5597 | 0.5724 |
| kNN, k = 200 (40,000-loan sample) | 0.6460 | 0.6652 |
| Gaussian naive Bayes | 0.6569 | 0.6743 |
| Project Model B — WoE scorecard | 0.6817 | 0.6923 |
| Linear SVM, calibrated | 0.6856 | 0.6955 |
| Logistic regression, one-hot | 0.6872 | 0.6960 |
| Neural network, one small layer (Part 12) | 0.6937 | 0.6969 |
| XGBoost | 0.6994 | 0.7025 |
| LightGBM, tuned (Part 13) | 0.6985 | 0.7033 |
| Random forest | 0.6925 | 0.7035 |

kNN with 15 neighbours is nearly useless: when only one loan in thirty defaults, 15 neighbours hold about half a defaulter, so the vote is mostly noise. With 200 neighbours it recovers — and it still took a minute to score what logistic regression scores in a second. Naive Bayes pays for pretending the grade, the rate and the sub-grade are independent. Everything else lands within 0.01 of AUC.

### Choosing

| If the problem has… | Start with | Then try |
|---|---|---|
| A table of numbers and categories | Logistic regression | Gradient boosting |
| A regulator, a customer or a court asking "why?" | Scorecard or logistic regression | Boosting with monotone constraints and SHAP (Part 15) |
| Images, text, audio, long sequences | A neural network | — |
| Very few rows | Regularised linear model | Random forest |
| Millions of rows and a latency budget | LightGBM | A linear model if latency is tight |
| No labels | Clustering or anomaly detection (Part 19) | — |

Why banks still run scorecards when boosting wins by 0.01:

| Reason | What it means in practice |
|---|---|
| Explainability | A declined applicant must be told the main reasons; points give them directly |
| Model risk management | Validators and regulators must understand and challenge the model |
| Stability | Fewer, binned inputs move less when the population drifts |
| Implementation | A points table runs in any decision engine, with no library to install |
| Monitoring | Bin-level stability checks are simple and cheap |

Where the gain is bigger and the explanation burden lighter — fraud, collections, marketing — boosting usually wins the argument.

**Decision:** on a table like this one, choose between a logistic scorecard and gradient boosting; the others are reference points, not candidates.

### Check yourself

1. Why does kNN improve so much going from 15 neighbours to 200 on this book?
2. A random forest and a tuned LightGBM tie at about 0.703 out of time. Name two reasons to prefer LightGBM in production anyway.

<details>
<summary>Answers</summary>

1. With a 3.4% default rate, 15 neighbours contain about 0.5 defaulters on average, so most votes are zero and the estimate is almost random. With 200 neighbours each estimate rests on about seven defaulters — enough to separate risky neighbourhoods from safe ones.
2. It is far smaller and faster to score (hundreds of shallow trees against hundreds of deep ones), and it handles missing values and categories natively, so production code has fewer preprocessing steps that could differ from training.

</details>

---

## Part 11 — Class imbalance

### The cheatsheet

Imbalance is a problem for **thresholds and metrics**, much more than for learning. With 6,329 defaults in training, the model has plenty of examples to learn a ranking from; what goes wrong is reading 96.57% accuracy as success, or a 50% threshold as sensible.

| Remedy | How | Effect on ranking (AUC) | Effect on probabilities | Use when |
|---|---|---|---|---|
| Right metrics | AUC, PR-AUC, recall, precision, cost | — | — | Always, first |
| **Threshold moving** | Flag above a lower cut-off, chosen on cost | None | None — stay calibrated | Almost always the first fix |
| Class weights | Count each positive as several rows | Little | Inflated | The algorithm needs it to learn at all |
| Random undersampling | Drop negatives until balanced | Little; loses data | Inflated | Huge data, slow training |
| Random oversampling | Repeat positives | Little | Inflated; overfitting risk | Small data |
| **SMOTE** | Invent positives between existing ones | Little; can hurt | Inflated | Small data where the minority is badly under-learned |
| Cost-sensitive learning | Put the real cost of each error into the loss | Little | Shifted | Costs are known |
| Balanced ensembles | Each tree on a balanced sample | Sometimes helps | Inflated | Extreme imbalance |
| Anomaly detection | Model normality; flag departures | — | — | Positives too rare to learn from |

Two rules: **resample only the training data**, never validation or test; and **if you resample, recalibrate** before any probability is used as a probability.

$$
\text{odds}_{\text{true}} = \text{odds}_{\text{model}} \times \frac{\pi \,/\, (1 - \pi)}{\pi_s \,/\, (1 - \pi_s)}
$$

where

- **π** is the real event rate, 3.43% here
- **π<sub>s</sub>** is the event rate in the resampled training data, 50% after balancing
- **odds** means p ÷ (1 − p); convert back with p = odds ÷ (1 + odds)

### In the project

No resampling at all — deliberately. The 3.44% default rate is handled by a stratified split (Part 4), threshold-free metrics (Part 6) and calibration tests (Part 14). The reason is the rest of the pipeline: PDs feed expected credit loss and Basel capital as **probabilities**, so a PD of 2% must mean two defaults in a hundred.

### Side-line: every remedy on the same model

The one-hot logistic regression of Part 5, trained five ways, judged on the untouched test sample:

| Training | Test AUC | Mean PD | Flagged at 50% | Recall | Precision |
|---|---:|---:|---:|---:|---:|
| As it is | 0.6872 | 0.0341 | 0.0% | 0.000 | — |
| `class_weight="balanced"` | 0.6873 | **0.4459** | 37.3% | 0.640 | 0.059 |
| Random undersampling to 1:1 | 0.6870 | 0.4473 | 38.0% | 0.649 | 0.059 |
| SMOTE to 1:1 | 0.6828 | 0.4404 | 38.2% | 0.647 | 0.058 |
| **As it is, threshold 3.42%** | **0.6872** | **0.0341** | 38.2% | **0.652** | 0.058 |
| SMOTE, then prior-corrected | 0.6828 | 0.0345 | 0.0% | 0.000 | — |

Read it slowly, because it is the whole lesson:

- **No remedy improved the ranking.** AUC stayed at 0.687 — SMOTE even lowered it slightly.
- **Every remedy wrecked the probabilities.** The actual default rate is 3.43%; the balanced models predict an average of about 44%.
- **Moving the threshold did the same job for free.** Flag the riskiest 38.2% of the unmodified model's scores and recall is 0.652 — as good as any resampling — with probabilities still true.
- **Prior correction brings SMOTE's average back to 3.45%**, but by then the resampling has bought nothing.

```python
from imblearn.pipeline import Pipeline as ImbPipeline
from imblearn.over_sampling import SMOTE

smote_logit = ImbPipeline([("prep", prep), ("smote", SMOTE(random_state=42)),
                           ("model", LogisticRegression(max_iter=2000))]).fit(X_train, y_train)
p = smote_logit.predict_proba(X_test)[:, 1]            # mean 0.44 — not a PD any more

pi, pi_s = y_train.mean(), 0.5
odds = p / (1 - p) * (pi / (1 - pi)) / (pi_s / (1 - pi_s))
p_corrected = odds / (1 + odds)                        # mean 0.0345
```

What that would cost in the project: Stage 1 ECL is PD × LGD × EAD (Part 18). Feed it probabilities that average 0.45 instead of 0.034 and the $30.27 million Stage 1 provision becomes roughly **thirteen times larger** — an accounting error created by a modelling habit.

### In the churn project

The notebook's final model is the SMOTE network, and the resume's recall improvement comes from it:

| Network | Recall for churners | Precision | Accuracy | AUC |
|---|---:|---:|---:|---:|
| First model, SGD | 0.48 | 0.79 | 0.87 | 0.8533 |
| Tuned, no resampling | 0.54 | 0.71 | 0.86 | 0.8547 |
| **SMOTE-balanced** | **0.75** | 0.51 | 0.80 | 0.8515 |

Recall rose from 0.48 to 0.75, as reported. The AUC column tells the rest: the ranking barely moved. SMOTE shifted where the network draws its line, trading precision for recall — which lowering the threshold on the tuned model would also have done — and it left the network's probabilities overstating churn. For ranking a retention list that is harmless; for forecasting how many customers will leave, it is not.

**Decision:** keep the data as it is; choose the threshold on cost; resample only when a model cannot learn otherwise — and then recalibrate.

### Check yourself

1. A SMOTE model gives a loan a probability of 0.40. Train default rate 3.43%, resampled rate 50%. What is the corrected PD?
2. Why did the project's pipeline make resampling a bad idea even though the scorecard's ranking would hardly change?

<details>
<summary>Answers</summary>

1. Model odds = 0.40 ÷ 0.60 = 0.667. Multiply by (0.0343 ÷ 0.9657) ÷ (0.5 ÷ 0.5) = 0.0355: corrected odds = 0.0237, so PD = 0.0237 ÷ 1.0237 = **2.3%**.
2. Because the PDs are used as probabilities downstream: in ECL, in capital, in pricing. Resampling leaves the ranking alone but inflates every PD, and every provision and capital number built on them.

</details>

---

## Part 12 — Neural networks, the right amount

### The cheatsheet

A **neuron** is a weighted sum passed through a bend:

$$
a = f\left(w_1 x_1 + w_2 x_2 + \dots + w_k x_k + b\right)
$$

where

- **x** are the inputs and **w** their weights; **b** is the bias (an intercept)
- **f** is the activation — the bend that lets the network draw curves

With f the sigmoid, one neuron *is* logistic regression. A **network** stacks layers of neurons, each feeding the next, so it can learn curves and interactions no single line can.

| Activation | Shape | Used in |
|---|---|---|
| ReLU | 0 for negatives, the input itself for positives | Hidden layers — the default |
| Sigmoid | Squeezes into 0 to 1 | Output of a yes/no model |
| Softmax | Several outputs that sum to 1 | Output of a many-class model |
| Tanh | Squeezes into −1 to 1 | Older hidden layers, some sequence models |
| Linear | No bend | Output of a regression |

**How it learns, in four steps, repeated:**

1. **Forward pass** — push a batch of rows through the layers to get predictions.
2. **Loss** — measure how wrong they are; for yes/no this is log loss, called binary cross-entropy.
3. **Backpropagation** — work backwards from the output, layer by layer, to find how much each weight contributed to the error.
4. **Update** — the optimiser nudges every weight a small step to reduce the error: gradient descent from Part 7, applied to thousands of weights at once.

One pass over the whole training set is an **epoch**; a network trains for many.

| Setting | What it does | Starting point |
|---|---|---|
| Layers and units | Capacity to learn complex shapes | 1–2 hidden layers of 32–128 units for tables |
| Optimiser | How weights move | Adam |
| Learning rate | Step size | 0.001 for Adam |
| Batch size | Rows per update | 32–256 |
| Epochs | Passes over the data | Until validation loss stops improving |
| Dropout | Randomly silences units while training — fights overfitting | 0.2–0.5 |
| L2 penalty | Shrinks weights | Small, tuned |
| Early stopping | Stops when the **validation loss** stops improving | Always — on loss or AUC, never accuracy |
| Input scaling | Standardised inputs | Required |

| Neural networks win | Gradient boosting wins |
|---|---|
| Images, text, audio | Tables of mixed numbers and categories |
| Sequences — transactions, clickstreams | Tens or hundreds of thousands of rows |
| Very large data, learned embeddings | When the features already carry the signal |

### In the churn project

<svg viewBox="0 0 720 310" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The churn project's neural network: 11 inputs, two hidden layers of 64 and 32 ReLU units, and one sigmoid output giving the probability of churn" style="width:100%;max-width:720px;height:auto;display:block;margin:1rem auto">
<g font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="12" fill="#1f2937">
<line x1="90" y1="60.0" x2="270" y2="60.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="90" y1="60.0" x2="270" y2="96.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="90" y1="60.0" x2="270" y2="132.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="90" y1="60.0" x2="270" y2="168.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="90" y1="60.0" x2="270" y2="204.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="90" y1="60.0" x2="270" y2="240.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="90" y1="105.0" x2="270" y2="60.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="90" y1="105.0" x2="270" y2="96.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="90" y1="105.0" x2="270" y2="132.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="90" y1="105.0" x2="270" y2="168.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="90" y1="105.0" x2="270" y2="204.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="90" y1="105.0" x2="270" y2="240.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="90" y1="150.0" x2="270" y2="60.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="90" y1="150.0" x2="270" y2="96.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="90" y1="150.0" x2="270" y2="132.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="90" y1="150.0" x2="270" y2="168.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="90" y1="150.0" x2="270" y2="204.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="90" y1="150.0" x2="270" y2="240.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="90" y1="195.0" x2="270" y2="60.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="90" y1="195.0" x2="270" y2="96.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="90" y1="195.0" x2="270" y2="132.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="90" y1="195.0" x2="270" y2="168.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="90" y1="195.0" x2="270" y2="204.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="90" y1="195.0" x2="270" y2="240.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="90" y1="240.0" x2="270" y2="60.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="90" y1="240.0" x2="270" y2="96.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="90" y1="240.0" x2="270" y2="132.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="90" y1="240.0" x2="270" y2="168.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="90" y1="240.0" x2="270" y2="204.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="90" y1="240.0" x2="270" y2="240.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="270" y1="60.0" x2="450" y2="60.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="270" y1="60.0" x2="450" y2="105.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="270" y1="60.0" x2="450" y2="150.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="270" y1="60.0" x2="450" y2="195.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="270" y1="60.0" x2="450" y2="240.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="270" y1="96.0" x2="450" y2="60.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="270" y1="96.0" x2="450" y2="105.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="270" y1="96.0" x2="450" y2="150.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="270" y1="96.0" x2="450" y2="195.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="270" y1="96.0" x2="450" y2="240.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="270" y1="132.0" x2="450" y2="60.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="270" y1="132.0" x2="450" y2="105.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="270" y1="132.0" x2="450" y2="150.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="270" y1="132.0" x2="450" y2="195.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="270" y1="132.0" x2="450" y2="240.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="270" y1="168.0" x2="450" y2="60.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="270" y1="168.0" x2="450" y2="105.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="270" y1="168.0" x2="450" y2="150.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="270" y1="168.0" x2="450" y2="195.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="270" y1="168.0" x2="450" y2="240.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="270" y1="204.0" x2="450" y2="60.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="270" y1="204.0" x2="450" y2="105.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="270" y1="204.0" x2="450" y2="150.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="270" y1="204.0" x2="450" y2="195.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="270" y1="204.0" x2="450" y2="240.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="270" y1="240.0" x2="450" y2="60.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="270" y1="240.0" x2="450" y2="105.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="270" y1="240.0" x2="450" y2="150.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="270" y1="240.0" x2="450" y2="195.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="270" y1="240.0" x2="450" y2="240.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="450" y1="60.0" x2="620" y2="150.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="450" y1="105.0" x2="620" y2="150.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="450" y1="150.0" x2="620" y2="150.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="450" y1="195.0" x2="620" y2="150.0" stroke="#cbd5e1" stroke-width="0.8"/>
<line x1="450" y1="240.0" x2="620" y2="150.0" stroke="#cbd5e1" stroke-width="0.8"/>
<circle cx="90" cy="60.0" r="13" fill="#eff6ff" stroke="#1d4ed8" stroke-width="1.5"/>
<circle cx="90" cy="105.0" r="13" fill="#eff6ff" stroke="#1d4ed8" stroke-width="1.5"/>
<circle cx="90" cy="150.0" r="13" fill="#eff6ff" stroke="#1d4ed8" stroke-width="1.5"/>
<text x="90" y="200.0" text-anchor="middle" font-size="16">⋮</text>
<circle cx="90" cy="240.0" r="13" fill="#eff6ff" stroke="#1d4ed8" stroke-width="1.5"/>
<text x="90" y="275" text-anchor="middle" font-weight="600">11 inputs</text>
<circle cx="270" cy="60.0" r="13" fill="#ecfdf5" stroke="#059669" stroke-width="1.5"/>
<circle cx="270" cy="96.0" r="13" fill="#ecfdf5" stroke="#059669" stroke-width="1.5"/>
<circle cx="270" cy="132.0" r="13" fill="#ecfdf5" stroke="#059669" stroke-width="1.5"/>
<circle cx="270" cy="168.0" r="13" fill="#ecfdf5" stroke="#059669" stroke-width="1.5"/>
<text x="270" y="209.0" text-anchor="middle" font-size="16">⋮</text>
<circle cx="270" cy="240.0" r="13" fill="#ecfdf5" stroke="#059669" stroke-width="1.5"/>
<text x="270" y="275" text-anchor="middle" font-weight="600">64 ReLU</text>
<circle cx="450" cy="60.0" r="13" fill="#ecfdf5" stroke="#059669" stroke-width="1.5"/>
<circle cx="450" cy="105.0" r="13" fill="#ecfdf5" stroke="#059669" stroke-width="1.5"/>
<circle cx="450" cy="150.0" r="13" fill="#ecfdf5" stroke="#059669" stroke-width="1.5"/>
<text x="450" y="200.0" text-anchor="middle" font-size="16">⋮</text>
<circle cx="450" cy="240.0" r="13" fill="#ecfdf5" stroke="#059669" stroke-width="1.5"/>
<text x="450" y="275" text-anchor="middle" font-weight="600">32 ReLU</text>
<circle cx="620" cy="150.0" r="13" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
<text x="620" y="275" text-anchor="middle" font-weight="600">1 sigmoid</text>
<text x="90" y="296" text-anchor="middle" font-size="11">credit score, age, balance…</text>
<text x="360" y="296" text-anchor="middle" font-size="11">each unit: weighted sum, then ReLU</text>
<text x="620" y="296" text-anchor="middle" font-size="11">P(churn)</text>
<text x="360" y="30" text-anchor="middle" font-size="11">11×64 + 64 + 64×32 + 32 + 32×1 + 1 = 2,881 weights, learned by backpropagation</text>
</g>
</svg>

The first network, as built in Keras:

```python
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Dropout
from tensorflow.keras.optimizers import Adam

model = Sequential([
    Dense(64, activation="relu", input_shape=(X_train.shape[1],)),
    Dense(32, activation="relu"),
    Dense(1, activation="sigmoid"),
])
model.compile(optimizer=Adam(learning_rate=0.001), loss="binary_crossentropy", metrics=["accuracy"])
model.fit(X_train, y_train, validation_data=(X_val, y_val), epochs=50, batch_size=32)
```

`X_val` is written where the notebook passed the test set — the one change Part 4 asks for. The notebook then tried five versions:

| Network | What changed | Recall | Precision | AUC |
|---|---|---:|---:|---:|
| 64-32, SGD | Starting point | 0.48 | 0.79 | 0.8533 |
| 64-32, Adam | Faster optimiser | 0.54 | 0.66 | 0.8503 |
| + Dropout 0.3 | Regularisation | 0.43 | 0.80 | 0.8544 |
| Grid-searched | 48 settings × 3 folds; best 128-32, batch 64, 20 epochs | 0.54 | 0.71 | 0.8547 |
| SMOTE-balanced | Resampled training data | 0.75 | 0.51 | 0.8515 |

Every network ranks customers almost identically — AUC 0.850 to 0.855. The optimiser, dropout and grid search moved the **operating point**, not the model's understanding. And the training log shows overfitting the notebook did not act on: by epoch 50 the Adam model's training accuracy was 0.884 while validation accuracy slid to 0.849 and validation loss rose — early stopping would have halted it near its best epoch.

### Side-line: a network on the loan book

The same 24 inputs, one-hot and scaled, into scikit-learn's network:

```python
from sklearn.neural_network import MLPClassifier

net = Pipeline([("prep", prep), ("model", MLPClassifier(hidden_layer_sizes=(32,), alpha=0.01,
                batch_size=256, learning_rate_init=0.001, max_iter=10, random_state=42))])
net.fit(X_train, y_train)
```

| Network | Train AUC | Test AUC | OOT AUC |
|---|---:|---:|---:|
| 64-32, early stopping on its default score | — | 0.6774 | 0.6802 |
| 64-32, 10 epochs | 0.7345 | 0.6919 | 0.6854 |
| 32, 10 epochs, stronger L2 | 0.7151 | **0.6937** | **0.6969** |
| 64-32, 30 epochs, stronger L2 | 0.7595 | 0.6779 | 0.6749 |

Two traps, both real. scikit-learn's early stopping watches **accuracy**, which sits at 96.57% whatever the network does, so it quit after 7 epochs with a weaker model. And more epochs made things worse: 30 epochs lifted training AUC to 0.76 while test AUC fell. The best network — one small layer, ten epochs — matches logistic regression (0.6969 against 0.6960) and does not beat boosting. On a table of this kind, that is the normal result.

**Decision:** a neural network is the right tool for unstructured data and the churn exercise taught the craft; for the loan book, it earns no place over logistic regression or boosting.

### Check yourself

1. How many weights and biases does the churn network have, with 11 inputs, layers of 64 and 32, and one output?
2. Why is early stopping on accuracy useless for the loan book, and what should it watch instead?

<details>
<summary>Answers</summary>

1. 11 × 64 + 64 = 768 into the first layer; 64 × 32 + 32 = 2,080 into the second; 32 × 1 + 1 = 33 into the output. Total **2,881**.
2. Accuracy stays at 96.57% — the share of non-defaulters — whether the network ranks well or badly, so it cannot tell a better epoch from a worse one. Early stopping should watch validation log loss or AUC.

</details>

---

## Part 13 — Overfitting, cross-validation and tuning

### The cheatsheet

| | Underfitting — high bias | Overfitting — high variance |
|---|---|---|
| Symptom | Train and test both poor, and close | Train much better than test |
| Cause | Model too simple, features too weak | Model too flexible, too little data or noise |
| Fix | Richer features; a more flexible model; less regularisation | More data; regularisation; simpler model; early stopping; bagging |
| In this note | A depth-2 tree: 0.640 train, 0.635 test | An unlimited tree: 1.000 train, 0.512 test |

**Regularisation** is anything that stops a model fitting noise: L1 and L2 penalties, depth and leaf limits, dropout, early stopping, subsampling rows and columns.

**Cross-validation** estimates performance without touching the test set: split the training data into *k* folds, train on *k* − 1, score the one left out, rotate, and average.

| Cross-validation | Use when |
|---|---|
| k-fold | Rows independent, classes balanced |
| **Stratified k-fold** | Rare target — keeps the default rate in every fold |
| Group k-fold | Several rows per customer |
| Time-series split | Folds must respect time order |
| Nested | Reporting the score of a tuned model honestly: tune inside, score outside |

**Tuning** means choosing hyperparameters — the settings fixed before training, such as depth or learning rate — by trying candidates and scoring each on data the model did not train on.

| Tuning method | How | When |
|---|---|---|
| Grid search | Every combination of a few values | Two or three settings |
| **Random search** | Random combinations from ranges | The sensible default |
| Bayesian (Optuna, hyperopt) | Learns which regions of the settings look promising | Expensive models, many settings |
| Successive halving | Many candidates on little data, the survivors on more | Large searches |
| Early stopping | Stops boosting or training when validation stops improving | Always, for boosting and networks |

Tuning is itself a way to overfit: try enough settings and one will look good by luck on a single validation split. Cross-validation, a clean test set, and a sense of proportion guard against it.

### In the project

Simple, binned models barely overfit — and the three samples show it:

| Gini | Train | Test | OOT 2014 |
|---|---:|---:|---:|
| Model A | 0.301 | 0.297 | 0.271 |
| Model B | 0.368 | 0.363 | 0.385 |

Train and test agree to within 0.005 for both. Model A's fall to 0.271 out of time is **drift**, not overfitting — the test sample from the same years holds up — while Model B, which includes LendingClub's own grade, keeps pace with the platform as it changes and even improves.

### Side-line: tuning LightGBM properly

A randomised search over seven settings, 15 candidates, each scored by 3-fold stratified cross-validation on the training sample only:

```python
from sklearn.model_selection import RandomizedSearchCV, StratifiedKFold
from scipy.stats import randint, uniform, loguniform

space = {"num_leaves": randint(8, 64), "min_child_samples": randint(50, 1000),
         "learning_rate": loguniform(0.01, 0.1), "n_estimators": randint(100, 600),
         "subsample": uniform(0.6, 0.4), "colsample_bytree": uniform(0.5, 0.5),
         "reg_lambda": loguniform(0.01, 10)}
search = RandomizedSearchCV(lgb.LGBMClassifier(subsample_freq=1, random_state=42, verbose=-1),
                            space, n_iter=15, scoring="roc_auc", random_state=42,
                            cv=StratifiedKFold(n_splits=3, shuffle=True, random_state=42))
search.fit(L_train, y_train)
search.best_score_, search.best_params_
```

| | Cross-validated AUC |
|---|---:|
| LightGBM, 300 trees, mostly default settings | 0.6898 |
| Worst of the 15 candidates | 0.6699 |
| Median candidate | 0.6917 |
| **Best candidate** | **0.6982** |

The winner: 463 trees at a learning rate of 0.012, up to 62 leaves but at least **612 loans in every leaf**, a strong L2 penalty of 8.9, and 79% of rows and 62% of columns sampled per tree. Heavy regularisation won — sensible on a noisy 3% target. On data it never saw during tuning:

| Tuned LightGBM | Train | Test | OOT |
|---|---:|---:|---:|
| AUC | 0.7951 | 0.6985 | **0.7033** |

The search found +0.008 of AUC over sensible defaults, and the test and out-of-time scores confirm it was real rather than lucky. Compare that with Part 9, where adding fourteen variables mattered more than the choice of algorithm: **tuning is the last few percent, not the first.**

**Decision:** stratified 3-fold cross-validation for choosing, the test sample for confirming, 2014 for the final word; tune after the features are right.

### Check yourself

1. Model B's Gini is 0.363 on test and 0.385 out of time. Is Model B overfitting?
2. Why does the winning configuration's 612-loan minimum leaf matter more here than it would on a balanced target?

<details>
<summary>Answers</summary>

1. No. Overfitting shows as train well above test, and here train (0.368) and test (0.363) are almost equal. The out-of-time rise reflects the 2014 population, not memorisation.
2. With a 3.4% default rate, a leaf of 612 loans holds about 21 defaults — enough to estimate a rate. A leaf of 20 loans, the default minimum, would hold 0.7 of a default on average, so its predictions would be noise.

</details>

---

## Part 14 — Calibration, and turning a PD into a decision

### The cheatsheet

| Property | Question | Measured by |
|---|---|---|
| **Discrimination** | Does the model put riskier loans above safer ones? | AUC, Gini, KS |
| **Calibration** | Of loans given a 5% PD, do 5% default? | Decile table, Brier, Hosmer–Lemeshow, mean PD against actual rate |

A model can rank perfectly and be badly calibrated — multiply every PD by ten and the AUC does not move — so both must be checked. Ranking decides who is approved; calibration decides provisions, capital and prices.

| Fix | How | Use when |
|---|---|---|
| Intercept shift | Move every log-odds by one constant | Overall level wrong, shape right — the usual drift case |
| Platt scaling | A logistic regression on the model's score | Level and slope both off |
| Isotonic regression | A free-form but always-increasing mapping | Plenty of data, odd shapes |

Fit a calibrator on data the model was not trained on, and judge it on data neither saw.

Turning a PD into approve or decline is economics:

$$
\text{Approve if } (1 - PD) \times \text{Margin} > PD \times LGD
\qquad
PD^{*} = \frac{\text{Margin}}{\text{Margin} + LGD}
$$

where

- **Margin** is the lifetime profit on a repaid loan, as a share of the amount lent
- **LGD** is the share lost if the loan defaults
- **PD\*** is the break-even PD: approve below it, decline above it

With a margin of 8% and this book's LGD of 93%, PD\* = 0.08 ÷ 1.01 = **7.9%** — an illustration with an assumed margin, not a LendingClub figure.

### In the project

Hosmer–Lemeshow compares predicted and actual defaults in ten bands and gives a p-value; below 0.05 means "detectably miscalibrated".

| Hosmer–Lemeshow p | Test | OOT 2014 |
|---|---:|---:|
| Model A | 0.236 — passes | 0.0000003 — fails |
| Model A, intercept recalibrated | 0.239 | 0.0000009 — fails |
| Model A, Platt scaled | 0.217 | 0.000018 — fails |
| Model B | 0.494 — passes | 0.001 — fails |

On the test sample both models pass; on 2014 both fail, and recalibration does not rescue Model A. But with 235,628 loans the test can detect gaps too small to matter. The decile table is the fairer judge:

| Model B, OOT — PD decile | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Mean predicted PD | 0.87% | 1.31% | 1.73% | 2.17% | 2.65% | 3.19% | 3.82% | 4.59% | 5.69% | 8.45% |
| Actual default rate | 0.70% | 1.13% | 1.53% | 2.16% | 2.55% | 3.17% | 4.03% | 4.77% | 5.72% | 8.65% |

Every decile within about 0.2 points, in the right order. Statistically "failed"; practically close — which is why validators read the table, not only the p-value.

### Side-line: calibrating the challenger, and choosing a cut-off

Boosted models trained on log loss usually come out reasonably calibrated. Fitting Platt and isotonic calibrators on the test sample and judging on 2014:

| LightGBM, OOT | AUC | Brier | Mean PD (actual 3.44%) |
|---|---:|---:|---:|
| As trained | 0.6956 | 0.03270 | 3.31% |
| Platt scaled | 0.6956 | 0.03266 | 3.35% |
| Isotonic | 0.6940 | 0.03267 | 3.34% |

Barely a change — this model did not need calibrating. Its decile table shows the typical boosted pattern instead: slightly **over-confident at the extremes**, 0.54% predicted against 0.73% actual in the safest decile and 9.67% against 8.59% in the riskiest.

The cut-off itself is a business choice. Ranking 2014's loans by Model B and approving the safest share:

| Approve the best | Bad rate of approved loans | Share of all defaulters declined |
|---:|---:|---:|
| 50% | 1.61% | 76.6% |
| 70% | 2.18% | 55.6% |
| 80% | 2.51% | 41.8% |
| 90% | 2.86% | 25.1% |
| 100% | 3.44% | 0% |

Declining the riskiest 20% removes 42% of the defaults. Where to stop depends on margin, LGD and the lender's appetite — the formula above, applied band by band.

**Decision:** read calibration from the decile table; recalibrate the intercept when a new period's level drifts; choose the cut-off from the economics, not from 50%.

### Check yourself

1. Multiplying every PD by 2 changes which of these: AUC, Brier score, Hosmer–Lemeshow result?
2. With a margin of 5% and an LGD of 93%, what is the break-even PD?

<details>
<summary>Answers</summary>

1. AUC is unchanged, because the order of loans is the same. The Brier score and Hosmer–Lemeshow both get worse, because every predicted probability is now twice the observed rate.
2. PD\* = 0.05 ÷ (0.05 + 0.93) = **5.1%**. A thinner margin means a stricter cut-off.

</details>

---

## Part 15 — Explaining a model

### The cheatsheet

| Question | Method | Scope |
|---|---|---|
| Which inputs matter overall? | Coefficients or points (built in); permutation importance; mean absolute SHAP | Global |
| Why this prediction? | Scorecard points; SHAP values | Local — one row |
| How does an input move the prediction? | Partial dependence (PDP), and individual conditional expectation (ICE) curves for single rows | Global shape |
| Can a simple model mimic the complex one? | A surrogate tree fitted to the model's predictions | Global approximation |

| Method | How it works | Watch |
|---|---|---|
| **Permutation importance** | Shuffle one input and measure how much the score drops | Correlated inputs share credit, so each looks less important |
| **SHAP** | Splits each prediction into additive contributions, one per input, that sum from the average to the prediction | Explains the model, not the world |
| PDP / ICE | Vary one input, hold the rest, plot the prediction | Misleading when inputs are strongly correlated |
| Monotone constraints | Force boosting to keep a direction — more inquiries never lowers risk | Costs a little accuracy, buys trust |

Lenders must tell declined applicants the main reasons. Scorecards give them directly: the attributes where the applicant scored furthest below the best available points.

### In the project

The explanation *is* the model. Applicant 2 of Part 8 scored 515, and each attribute's shortfall from its best bin is the reason list: **24 points lost on inquiries, 21 on income, 20 on the loan purpose, 15 on revolving utilisation** — in that order, and exactly reproducible. (The best bins exclude the *missing* bins, which the smoothing of Part 5 can push to odd values: missing inquiries earn 99 points, more than any real answer.)

### Side-line: opening up the boosted challenger

Permutation importance on 20,000 test loans, and SHAP on the same loans:

| Rank | Permutation — drop in AUC | | SHAP — mean absolute contribution | |
|---:|---|---:|---|---:|
| 1 | Sub-grade | 0.054 | Sub-grade | 0.337 |
| 2 | Annual income | 0.039 | Annual income | 0.256 |
| 3 | Inquiries, last 6 months | 0.016 | Inquiries, last 6 months | 0.164 |
| 4 | Purpose | 0.016 | Interest rate | 0.113 |
| 5 | Revolving balance | 0.014 | Purpose | 0.108 |
| 6 | Instalment | 0.007 | Months since last delinquency | 0.091 |

The same top three as the scorecard's information values — the models agree on what matters. Interest rate ranks high in SHAP but low in permutation: shuffle it, and the sub-grade still carries the same information, so the score hardly drops. Correlated inputs hide behind each other under permutation.

One applicant, the riskiest of the 20,000 — predicted PD **53.4%**, explained in log-odds from the book's average of −3.64:

| Input | Value | SHAP contribution |
|---|---|---:|
| Purpose | Small business | +0.747 |
| Sub-grade | F4 | +0.741 |
| Months since last public record | 94 | +0.410 |
| Total accounts | 43 | +0.387 |
| Interest rate | 23.76% | +0.317 |
| Annual income | $60,000 | +0.282 |

The contributions of all 24 inputs sum to +3.78, taking the log-odds from −3.64 to +0.14 — a PD of 1 ÷ (1 + e^−0.14) = 53.4%.

```python
import shap

sample = L_test.sample(20_000, random_state=42)
explainer = shap.TreeExplainer(gbm)
values = explainer.shap_values(sample)           # one contribution per input per loan
```

**Decision:** keep the scorecard's built-in reasons; for any boosted challenger, add SHAP reason codes and monotone constraints before it goes near a decision.

### Check yourself

1. Applicant 1 of Part 8 scored 617. Which attribute costs them the most points relative to its best bin?
2. Why can permutation importance rank interest rate low while SHAP ranks it fourth?

<details>
<summary>Answers</summary>

1. Revolving utilisation of 35% gives 87 points against 89 for the best bin; DTI of 12 gives 85 against 87; income of $80,000 gives 90 against 95 — **income, 5 points short**, is the biggest shortfall.
2. Sub-grade and interest rate carry nearly the same information. Shuffling the rate leaves the sub-grade intact, so the model barely loses accuracy; SHAP instead shares each prediction between the inputs the model actually used, and the rate gets its share.

</details>

---

## Part 16 — Stability and monitoring

### The cheatsheet

| Drift | What moves | Detected by | Example |
|---|---|---|---|
| **Data drift** | The inputs' distribution | PSI on the score, CSI on each input | Applicants' incomes rise |
| **Label drift** | The event rate | Actual rate against predicted | A recession lifts defaults everywhere |
| **Concept drift** | The link between inputs and outcome | Falling AUC or Gini; worsening calibration | The same DTI becomes riskier |

$$
PSI = \sum_{i} \left(A_i - E_i\right) \times \ln\frac{A_i}{E_i}
$$

where

- **E<sub>i</sub>** is the share of the development sample in band *i*
- **A<sub>i</sub>** is the share of the recent sample in the same band
- the bands are fixed on the development sample — usually ten equal-count bands of the score

| PSI | Reading |
|---|---|
| Below 0.10 | Stable |
| 0.10 to 0.25 | Investigate |
| Above 0.25 | Act: recalibrate or rebuild |

**CSI** applies the same formula to one input's bins. Outcomes arrive slowly — a 12-month target is known a year after the loan — so monitoring leans on PSI and CSI while the outcomes are still coming in.

```python
def psi(expected, actual, bins=10):
    edges = np.unique(np.quantile(expected, np.linspace(0, 1, bins + 1)))
    edges[0], edges[-1] = -np.inf, np.inf
    e = np.histogram(expected, edges)[0] / len(expected)
    a = np.histogram(actual, edges)[0] / len(actual)
    e, a = np.clip(e, 1e-6, None), np.clip(a, 1e-6, None)
    return float(np.sum((a - e) * np.log(a / e)))
```

### In the project

| Stability, train against OOT 2014 | Value | Reading |
|---|---:|---|
| Score PSI, Model A | 0.0046 | Stable |
| Score PSI, Model B | 0.0071 | Stable |
| CSI, `dti` — the largest | 0.0416 | Stable |
| CSI, `purpose` | 0.0362 | Stable |
| CSI, `int_rate` | 0.0315 | Stable |
| CSI, `annual_inc` — the smallest | 0.0057 | Stable |
| CSI, `tot_cur_bal` — before modelling | about 3.96 | Unstable: dropped in Part 2 |

Run on Model B's PDs with the function above, PSI comes out at 0.0080 rather than 0.0071 — the project bins its scores slightly differently. **PSI depends on the bands**, so fix them once and keep them.

The project also tracks each vintage's cumulative default rate by **months on book** (MOB):

| Vintage | MOB 6 | MOB 12 | MOB 18 | MOB 24 |
|---:|---:|---:|---:|---:|
| 2010 | 0.89% | 3.45% | 6.17% | 8.32% |
| 2011 | 0.90% | 3.55% | 6.51% | 8.97% |
| 2012 | 0.82% | 3.73% | 7.17% | 10.19% |
| 2013 | 0.66% | 3.18% | 6.34% | 9.29% |
| 2014 | 0.64% | 3.44% | 6.77% | 8.14% |

Read down a column to compare vintages at the same age: 2012 was the weakest year at every age. The 2014 curve flattens by 24 months only because the data stops in January 2016 — at the snapshot, **67.3% of 2014 loans were still current**, their story unfinished. A dashboard that ignores this truncation would call 2014 the best vintage.

What the snapshot cannot give is a **roll-rate matrix** — how many 30-day-late loans become 60-day-late next month — because the data holds each loan once, not month by month. The project builds a cross-sectional proxy and labels it as one.

**Decision:** PSI and CSI every period, with fixed bands; vintage curves compared at equal age; AUC and calibration re-checked as each cohort's 12 months complete.

### Check yourself

1. A band holds 10% of the development sample and 15% of this month's applicants. What does it add to PSI?
2. Why can the 2014 vintage look better than 2012 at MOB 24 without being better?

<details>
<summary>Answers</summary>

1. (0.15 − 0.10) × ln(0.15 ÷ 0.10) = 0.05 × 0.405 = **0.020**.
2. Many 2014 loans had not reached 24 months on book when the data was taken, so their later defaults are not yet recorded. The curve is truncated, not better.

</details>

---

## Part 17 — Beyond PD: LGD, EAD and expected loss

### The cheatsheet

A PD says how likely a default is. Two more numbers say what it costs:

$$
EL = PD \times LGD \times EAD
$$

where

- **EL**, expected loss, is the loss to expect over the next year
- **LGD**, loss given default, is the share of the balance lost if default happens
- **EAD**, exposure at default, is the balance owed at the moment of default

| Target shape | Model | Example |
|---|---|---|
| A number with a roughly straight-line link | Linear regression | CCF against utilisation |
| A share between 0 and 1 | Fractional logit, beta regression | Recovery rate |
| A lump at one value plus a spread | **Two-stage (hurdle) model**: will it happen? then how much? | LGD with half the defaults at 100% |
| Complex interactions | Boosted trees for the amount | Stage 2 of the project's LGD |

For revolving lines, EAD must predict drawing before default:

$$
EAD = \text{Drawn} + CCF \times \text{Undrawn}
$$

where **CCF**, the credit conversion factor, is the share of today's unused limit expected to be drawn by the time of default.

### In the project: LGD

<svg viewBox="0 0 720 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Distribution of loss given default across 50,968 defaulted loans: 26,594 at exactly 100% loss, 14,805 between 80% and 90%, and few below 80%" style="width:100%;max-width:720px;height:auto;display:block;margin:1rem auto">
<g font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="12" fill="#1f2937">
<line x1="70" y1="240.0" x2="682" y2="240.0" stroke="#e5e7eb"/>
<text x="62" y="244.0" text-anchor="end" font-size="11">0</text>
<line x1="70" y1="176.7" x2="682" y2="176.7" stroke="#e5e7eb"/>
<text x="62" y="180.7" text-anchor="end" font-size="11">10,000</text>
<line x1="70" y1="113.3" x2="682" y2="113.3" stroke="#e5e7eb"/>
<text x="62" y="117.3" text-anchor="end" font-size="11">20,000</text>
<line x1="70" y1="50.0" x2="682" y2="50.0" stroke="#e5e7eb"/>
<text x="62" y="54.0" text-anchor="end" font-size="11">30,000</text>
<rect x="78" y="237.0" width="85" height="3.0" fill="#93c5fd"/>
<text x="120.5" y="231.0" text-anchor="middle" font-size="11">473</text>
<text x="120.5" y="258" text-anchor="middle" font-size="11">0–0.5</text>
<rect x="180" y="224.8" width="85" height="15.2" fill="#93c5fd"/>
<text x="222.5" y="218.8" text-anchor="middle" font-size="11">2,404</text>
<text x="222.5" y="258" text-anchor="middle" font-size="11">0.5–0.8</text>
<rect x="282" y="146.2" width="85" height="93.8" fill="#93c5fd"/>
<text x="324.5" y="140.2" text-anchor="middle" font-size="11">14,805</text>
<text x="324.5" y="258" text-anchor="middle" font-size="11">0.8–0.9</text>
<rect x="384" y="216.8" width="85" height="23.2" fill="#93c5fd"/>
<text x="426.5" y="210.8" text-anchor="middle" font-size="11">3,668</text>
<text x="426.5" y="258" text-anchor="middle" font-size="11">0.9–0.95</text>
<rect x="486" y="220.8" width="85" height="19.2" fill="#93c5fd"/>
<text x="528.5" y="214.8" text-anchor="middle" font-size="11">3,024</text>
<text x="528.5" y="258" text-anchor="middle" font-size="11">0.95–0.99…</text>
<rect x="588" y="71.6" width="85" height="168.4" fill="#dc2626"/>
<text x="630.5" y="65.6" text-anchor="middle" font-size="11">26,594</text>
<text x="630.5" y="258" text-anchor="middle" font-size="11">exactly 1</text>
<text x="376" y="280" text-anchor="middle">LGD of each defaulted loan</text>
<text x="380" y="24" text-anchor="middle" font-size="12">50,968 defaulted loans: 52% recovered nothing; most of the rest recovered 10–20%</text>
</g>
</svg>

LGD is measured on all 50,968 defaulted loans: the balance at default, less post-default recoveries, divided by the balance. Mean LGD is **0.930**; the median is exactly 1. More than half the defaults — 52.2% — recovered nothing at all, and most of the rest recovered between 10% and 20%. Part 7 showed a straight line predicting almost the average for everyone. The project splits the question in two:

| Stage | Question | Model | Test result |
|---|---|---|---|
| 1 | Will anything be recovered? | Logistic regression | AUC 0.605 |
| 2 | If so, what share? | Gradient boosting, 100 trees of depth 3 | Mean absolute error 0.061 |

$$
\widehat{LGD} = 1 - P(\text{recovery}) \times \widehat{RR}_{\,\text{if recovery}}
$$

where

- **P(recovery)** is stage 1's probability that anything is recovered
- **RR** is stage 2's predicted recovery rate for a loan that recovers something

A loan with a 48% chance of recovering 15% gets LGD = 1 − 0.48 × 0.15 = **0.928**.

On 10,194 held-out defaulted loans the model predicts a mean LGD of 0.9302 against an actual 0.9304, and every decile of predicted LGD lands within 0.009 of its actual. The mean absolute error per loan is 0.079 — about the same as the straight line's 0.080, measured on a different split. That is the honest reading: **loan-level LGD is hard to predict from application data**, and the two-stage model's value is that it respects the shape of the target and is calibrated in every band, not that it predicts each loan much better.

### In the project: EAD

LendingClub loans are fully drawn on day one, so there is no undrawn limit to convert:

| Exposure at default, 50,968 defaulted loans | Value |
|---|---:|
| EAD = funded amount − principal repaid, floored at zero | — |
| Mean | $10,781.56 |
| Median | $9,141.37 |
| Mean share of the original loan still owed | 71.9% |
| — for 36-month loans | 66.2% |
| — for 60-month loans | 82.3% |

Longer loans have repaid less of their principal when they default, so more is exposed. The CCF, which only revolving lines need, is shown on simulated data (Part 7).

### In the project: expected loss

Twelve-month expected loss on the 2014 book, using each loan's PD, LGD and EAD:

| Grade | Loans | Mean PD | Expected loss ÷ EAD |
|---|---:|---:|---:|
| A | 36,108 | 1.10% | 0.97% |
| B | 61,935 | 2.05% | 1.74% |
| C | 66,565 | 3.54% | 2.97% |
| D | 42,991 | 5.05% | 4.23% |
| E | 20,121 | 6.31% | 5.30% |
| F | 6,223 | 8.35% | 6.91% |
| G | 1,685 | 8.23% | 7.10% |
| **All** | **235,628** | **3.45%** | **3.21%** — $58.67 million on $1.827 billion |

With LGD near 93% everywhere, expected loss tracks the PD almost one for one: in unsecured lending, knowing who will default is most of the problem.

**Decision:** model LGD in two stages because of its shape; take EAD as the outstanding balance for term loans; combine all three into expected loss per loan.

### Check yourself

1. A defaulted loan was funded at $12,000 and had repaid $4,000 of principal; $600 was recovered after default. What are its EAD and LGD?
2. Why does expected loss by grade follow the mean PD so closely here?

<details>
<summary>Answers</summary>

1. EAD = 12,000 − 4,000 = **$8,000**. Loss = 8,000 − 600 = $7,400, so LGD = 7,400 ÷ 8,000 = **92.5%**.
2. Because LGD barely varies — about 0.92 to 0.94 in every grade — so expected loss ≈ PD × 0.93 × EAD, and the PD does nearly all the sorting.

</details>

---

## Part 18 — Lifetime PD, IFRS 9, CECL and Basel capital

### The cheatsheet

**Lifetime PD** comes from **survival analysis**, the family of models for "how long until an event?":

$$
h_t = \frac{\text{defaults in month } t}{\text{loans still at risk at the start of month } t}
\qquad
\text{Cumulative PD}_T = 1 - \prod_{t=1}^{T}\left(1 - h_t\right)
$$

where **h<sub>t</sub>** is the monthly **hazard** — the chance of defaulting in month *t* for a loan that has survived to it — and the product multiplies the chances of surviving each month.

Two different questions sit behind this part. **Provisions** answer "how much should the accounts already count as lost?" — the expected loss, set aside now. **Capital** answers "how much of the bank's own money must stand behind these loans in case losses are far worse than expected?" — the unexpected loss. Accounting rules (IFRS 9, CECL) govern the first; banking rules (Basel) govern the second.

| Framework | Horizon | Rule |
|---|---|---|
| **IFRS 9, Stage 1** | 12 months of expected loss | Performing, no significant increase in credit risk |
| **IFRS 9, Stage 2** | Lifetime expected loss | Significant increase in credit risk (SICR) since origination |
| **IFRS 9, Stage 3** | Lifetime, credit-impaired | In default |
| **US CECL** | Lifetime, for every loan from day one | No stages |
| **Basel III IRB** — the internal ratings-based approach | 12-month expected loss; capital for the unexpected | The bank's own PD and LGD go into a regulatory formula |

$$
K = LGD \times \Phi\!\left(\frac{\Phi^{-1}(PD) + \sqrt{R}\,\Phi^{-1}(0.999)}{\sqrt{1 - R}}\right) - PD \times LGD
\qquad
RWA = 12.5 \times K \times EAD
$$

where

- **K** is the capital required per unit of exposure
- **Φ** is the standard normal distribution and **Φ<sup>−1</sup>** its inverse
- **R** is the correlation of the borrower with the economy — for "other retail" loans it falls from 0.16 to 0.03 as PD rises
- **RWA**, risk-weighted assets, is what the minimum capital ratios apply to

For a loan with a PD of 2% and an LGD of 93%: R = 0.095, K = 0.096, a risk weight of **120%**.

### In the project: the lifetime curve

<svg viewBox="0 0 700 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cumulative probability of default by month since issue: 3.44% at 12 months, 8.82% at 24, 10.64% at 36 and 10.93% at 60, flattening after month 30" style="width:100%;max-width:700px;height:auto;display:block;margin:1rem auto">
<g font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="12" fill="#1f2937">
<line x1="70" y1="240.0" x2="650" y2="240.0" stroke="#e5e7eb"/>
<text x="62" y="244.0" text-anchor="end" font-size="11">0%</text>
<line x1="70" y1="190.0" x2="650" y2="190.0" stroke="#e5e7eb"/>
<text x="62" y="194.0" text-anchor="end" font-size="11">3%</text>
<line x1="70" y1="140.0" x2="650" y2="140.0" stroke="#e5e7eb"/>
<text x="62" y="144.0" text-anchor="end" font-size="11">6%</text>
<line x1="70" y1="90.0" x2="650" y2="90.0" stroke="#e5e7eb"/>
<text x="62" y="94.0" text-anchor="end" font-size="11">9%</text>
<line x1="70" y1="40.0" x2="650" y2="40.0" stroke="#e5e7eb"/>
<text x="62" y="44.0" text-anchor="end" font-size="11">12%</text>
<text x="70.0" y="258" text-anchor="middle" font-size="11">1</text>
<text x="178.1" y="258" text-anchor="middle" font-size="11">12</text>
<text x="296.1" y="258" text-anchor="middle" font-size="11">24</text>
<text x="414.1" y="258" text-anchor="middle" font-size="11">36</text>
<text x="532.0" y="258" text-anchor="middle" font-size="11">48</text>
<text x="650.0" y="258" text-anchor="middle" font-size="11">60</text>
<text x="360.0" y="278" text-anchor="middle">Months since the loan was issued</text>
<polyline points="70.0,238.7 79.8,238.7 89.7,238.7 99.5,236.6 109.3,233.0 119.2,228.3 129.0,222.5 138.8,215.9 148.6,208.4 158.5,200.4 168.3,191.8 178.1,182.7 188.0,173.4 197.8,163.2 207.6,153.5 217.5,144.3 227.3,136.1 237.1,128.3 246.9,121.3 256.8,114.6 266.6,108.3 276.4,102.9 286.3,97.6 296.1,93.0 305.9,88.5 315.8,84.7 325.6,81.0 335.4,77.7 345.3,74.9 355.1,72.3 364.9,70.2 374.7,68.2 384.6,66.4 394.4,65.0 404.2,63.8 414.1,62.7 423.9,61.7 433.7,61.0 443.6,60.5 453.4,60.1 463.2,59.8 473.1,59.6 482.9,59.4 492.7,59.2 502.5,59.0 512.4,58.9 522.2,58.7 532.0,58.6 541.9,58.5 551.7,58.4 561.5,58.3 571.4,58.3 581.2,58.2 591.0,58.1 600.8,58.0 610.7,58.0 620.5,57.9 630.3,57.9 640.2,57.9 650.0,57.9" fill="none" stroke="#1d4ed8" stroke-width="2.5"/>
<circle cx="178.1" cy="182.7" r="4" fill="#1d4ed8"/>
<text x="186.1" y="200.7" text-anchor="start" font-size="11" font-weight="600">12 months: 3.44%</text>
<circle cx="296.1" cy="93.0" r="4" fill="#1d4ed8"/>
<text x="296.1" y="83.0" text-anchor="middle" font-size="11" font-weight="600">24: 8.82%</text>
<circle cx="414.1" cy="62.7" r="4" fill="#1d4ed8"/>
<text x="414.1" y="52.7" text-anchor="middle" font-size="11" font-weight="600">36: 10.64%</text>
<circle cx="650.0" cy="57.9" r="4" fill="#1d4ed8"/>
<text x="650.0" y="47.9" text-anchor="end" font-size="11" font-weight="600">60: 10.93%</text>
<text x="360" y="22" text-anchor="middle" font-size="12">Cumulative probability of default, whole portfolio</text>
</g>
</svg>

| Months since issue | 1 | 6 | 12 | 18 | 24 | 36 | 48 | 60 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Cumulative PD | 0.08% | 0.70% | 3.44% | 6.70% | 8.82% | 10.64% | 10.88% | 10.93% |

The monthly hazard peaks around month 15 at 0.61% and fades after month 30, when most loans have repaid or defaulted. Each loan's lifetime PD scales this portfolio curve by the ratio of its own 12-month PD to the portfolio's, read at the loan's remaining term.

### In the project: IFRS 9 staging and ECL on the 2014 book

| Stage | Rule in the code |
|---|---|
| 3 | Status *Charged Off*, *Default* or *Late (31–120 days)* |
| 2 | Current 12-month PD at least **2×** the PD at origination; or current PD above **6%**; or **30+ days** past due |
| 1 | Everything else |

The PD at origination is approximated by the average PD of the loan's grade, because the scores at issue were not kept — a documented proxy.

| Stage | Loans | Share | EAD | Mean 12-month PD | ECL | Coverage |
|---|---:|---:|---:|---:|---:|---:|
| 1 | 189,633 | 80.5% | $1,417.2M | 2.73% | $30.27M | 2.14% |
| 2 | 26,554 | 11.3% | $169.4M | 7.64% | $24.40M | 14.41% |
| 3 | 19,441 | 8.3% | $240.0M | 100% | $223.80M | 93.25% |
| **Total** | **235,628** | | **$1,826.6M** | | **$278.48M** | **15.25%** |

Stage 1 uses 12 months of loss, Stage 2 the lifetime PD, Stage 3 the LGD on a certain default; each is discounted at the loan's own interest rate — a simplified effective interest rate.

| Comparison | Provision | Coverage |
|---|---:|---:|
| IFRS 9, staged | $278.48M | 15.25% |
| **US CECL** — lifetime for every loan | **$327.47M** | 17.93% |
| Difference | +$48.99M | +2.68 points |
| Performing loans: IFRS 9 ECL against Basel 12-month EL | $54.68M against $48.47M | +$6.21M |

CECL books lifetime losses on the 189,633 Stage 1 loans that IFRS 9 covers for only a year — hence $49 million more.

**Scenarios.** IFRS 9 must be forward-looking, so the code re-runs ECL with PDs scaled for three economies and weights them:

| Scenario | PD multiplier | Weight | ECL |
|---|---:|---:|---:|
| Upside | 0.85 | 20% | $270.28M |
| Baseline | 1.00 | 50% | $278.48M |
| Downside | 1.50 | 30% | $305.82M |
| **Probability-weighted** | | | **$285.04M** |

The downside adds $27 million; weighted, the scenarios add $6.6 million to the baseline. Stage 3 dominates every scenario, and its loans are already in default, which is why a 50% rise in PDs moves the total by under 10%.

### In the project: Basel capital

| Basel III, 2014 book | Value |
|---|---:|
| IRB risk-weighted assets | $2,294.7M — 125.6% of EAD |
| Standardised risk-weighted assets | $1,369.9M — 75% of EAD |
| Minimum total capital, 8% | $183.57M |
| Minimum Tier 1, 6% | $137.68M |
| Minimum CET1, 4.5% | $103.26M |
| IRB risk weight, grade A → grade G | 94.2% → 145.7% |
| Downturn LGD, +8 points | RWA $2,453.9M, 134.3%; capital **+$12.74M (+6.9%)** |

Capital comes in tiers, each with its own minimum as a share of RWA: **CET1**, common equity tier 1 — shares and retained profits, the highest quality; **Tier 1**, which adds certain bonds that can absorb losses; and **total capital**, which adds more.

The internal-model capital is **higher** than the standardised approach here — the opposite of the usual story — because unsecured loans with a 93% LGD are expensive under the IRB formula, while the standardised approach applies a flat 75% to retail exposures.

**Decision:** one PD model feeds four numbers — 12-month loss, lifetime loss, staged provisions and capital — so its calibration (Part 14) matters as much as its ranking.

### Check yourself

1. The hazard is 0.56% in month 12 for loans that have survived. Why is the cumulative PD at 12 months (3.44%) not simply 12 × 0.56%?
2. Why is CECL's provision higher than IFRS 9's on the same loans and the same models?

<details>
<summary>Answers</summary>

1. Because the hazard changes month by month — near zero in the first months, rising towards month 15 — and the cumulative PD compounds each month's survival: 1 − (1 − h₁)(1 − h₂)…(1 − h₁₂). It is not a constant rate times twelve.
2. CECL requires lifetime expected loss on every loan from day one; IFRS 9 books only 12 months of loss for Stage 1 loans, which are 80% of this book. The difference, $49 million, is those loans' losses beyond their first year.

</details>

---

## Part 19 — Unsupervised learning, briefly

### The cheatsheet

| Task | Methods | Use in credit |
|---|---|---|
| **Clustering** — group similar rows | k-means, hierarchical, DBSCAN, Gaussian mixtures | Segments for strategy, or for separate models |
| **Dimensionality reduction** — fewer columns, most of the information | PCA; t-SNE and UMAP for pictures only | Compressing correlated bureau variables |
| **Anomaly detection** — rows unlike the rest | Isolation forest, local outlier factor | Fraud screens, data errors |

| Choice | Rule of thumb |
|---|---|
| Scaling | Always, for distance-based methods |
| Number of clusters | Elbow of the within-cluster error, silhouette score — and whether the segments are useful |
| Judging | No labels to score against: judge by stability and by what the segments do |

### Side-line: segments, components and oddities

k-means with four clusters on seven standardised borrower variables — log loan amount, log income, DTI, utilisation, interest rate, open accounts, credit history:

| Segment | Loans | Default rate | Median income | Median loan | DTI | Utilisation | Rate |
|---|---:|---:|---:|---:|---:|---:|---:|
| Prime, low utilisation | 43,944 | **1.9%** | $70,000 | $11,200 | 10.0 | 32% | 9.7% |
| Stretched, high DTI | 40,708 | 3.0% | $69,000 | $15,000 | 22.6 | 56% | 13.7% |
| Large loans, cards near the limit | 50,035 | 4.0% | $78,000 | $18,200 | 15.4 | 77% | 16.8% |
| Lower income, small loans | 49,838 | **4.5%** | $39,500 | $6,625 | 17.6 | 63% | 14.1% |

The clusters never saw the target, yet they separate default rates from 1.9% to 4.5% — segments a strategy team could name and act on. The elbow was soft (average within-cluster error 5.83, 5.14, 4.71, 4.40 and 4.15 for two to six clusters), so four was chosen for usefulness, not by formula.

**PCA** on 16 numeric inputs: the first component explains 18.9% of the variance, five explain 56%, and 12 are needed for 90%. Little redundancy — these inputs are mostly different information, so compressing them would throw signal away.

**Isolation forest**, flagging the most unusual 1% of borrowers: 1,846 loans defaulting at **5.63%**, against 3.41% for everyone else. Unusual is riskier — a cheap screen worth feeding into a review queue, or into a model as a flag.

```python
from sklearn.cluster import KMeans
from sklearn.ensemble import IsolationForest
from sklearn.preprocessing import StandardScaler

borrowers = X_train[["loan_amnt", "annual_inc", "dti", "revol_util", "int_rate",
                     "open_acc", "credit_history_yrs"]].copy()
borrowers[["loan_amnt", "annual_inc"]] = np.log1p(borrowers[["loan_amnt", "annual_inc"]])
borrowers = borrowers.fillna(borrowers.median())
scaled = StandardScaler().fit_transform(borrowers)
segments = KMeans(n_clusters=4, n_init=10, random_state=42).fit_predict(scaled)
odd = IsolationForest(contamination=0.01, random_state=42).fit_predict(scaled) == -1
```

**Decision:** clustering for strategy segments, not for the PD itself; PCA not worth it here; anomaly flags as a cheap extra input.

### Check yourself

1. Why must the variables be scaled before k-means, when a tree model needs no scaling?
2. The segments separate default rates without seeing the target. Does that make clustering a substitute for the PD model?

<details>
<summary>Answers</summary>

1. k-means groups rows by distance, and unscaled, a difference of $10,000 in income would swamp a difference of 20 points in utilisation. Trees split one variable at a time, so units never meet.
2. No. Four segments give four default rates; the PD model gives every loan its own, ranked with an out-of-time AUC of 0.69. Segments are a lens for strategy, not a replacement for a supervised model.

</details>

---

## Part 20 — From notebook to production

### The cheatsheet

| Concern | What good looks like |
|---|---|
| **Reproducibility** | The same code, data snapshot, seeds, library versions and configuration give the same numbers |
| **One pipeline object** | Preprocessing and model saved together, so serving cannot drift from training |
| **Configuration, not code** | Thresholds, variable lists and dates in files, reviewed like code |
| **Tests** | Unit tests for each transformation; data tests for schema, ranges and missingness |
| **Packaging** | Model plus pipeline saved (`joblib`), versioned, with its training data's fingerprint |
| **Serving** | Batch scoring for portfolios; a real-time API for applications |
| **Training–serving skew** | The same features computed the same way in both places — the most common production bug |
| **Monitoring** | PSI and CSI each period; performance as outcomes mature; alerts with owners |
| **Retraining** | Triggered by thresholds, not by calendar habit; champion–challenger before replacing |
| **Model risk management** | Documentation, independent validation, approval, periodic review |

### In the project

The repository is built like a small production system rather than a notebook:

| Layer | Contents |
|---|---|
| `config/` | Seven YAML files: target definition, variables, sampling, PD model, IFRS 9, macro scenarios, AI |
| `src/creditrisk/data` | Loading, the target, samples |
| `src/creditrisk/features` | WoE binning |
| `src/creditrisk/models` | PD, scorecard, calibration, LGD, EAD, CCF |
| `src/creditrisk/validation` | Metrics, stability, plots |
| `src/creditrisk/regulatory` | Lifetime PD, staging, ECL, CECL, scenarios, Basel |
| `src/creditrisk/monitoring` | Vintages, roll-rate proxy, transitions |
| `src/creditrisk/reporting`, `ai` | The HTML dashboard; the RAG assistant |
| `tests/` | 25 test files run with `pytest` |

Samples are saved as **Parquet** files (a compact, typed file format for tables), fitted models as **pickles** (Python's way of saving an object to disk), settings as **YAML** (plain-text configuration files), and tests run with **pytest**. Every random step uses seed 42, and every script finds its paths from the project root. Re-run end to end on the raw file, it reproduced its headline numbers — AUCs, provisions, capital — exactly.

Its known limits are written down, which is a production habit in itself: US data from 2007–2014, not Indian; one snapshot rather than monthly histories, so no true roll rates; the 2014 sample truncated at 67% still current; origination PD approximated by grade; a static hazard curve with no macroeconomic link; and a synthetic CCF.

### In the churn project

The notebook would need five changes to become a service: a validation set separate from the test set; the scaler and network saved together as one object; the outlier deletion removed so every customer can be scored; the threshold chosen on the cost of a retention offer rather than left at 0.5; and PSI monitoring on its inputs.

**Decision:** configuration-driven, tested, reproducible, monitored — the project already is most of that; the remaining step is a scoring service and a retraining policy.

### Check yourself

1. The scaler is fitted in the notebook and the network saved separately. What goes wrong in production?
2. Why keep variable lists and thresholds in configuration files rather than in code?

<details>
<summary>Answers</summary>

1. Whoever serves the model must refit or rebuild the scaler, and any difference — a new mean, a column in a different order — silently changes every input. Saving scaler and model as one pipeline makes serving identical to training.
2. Because they are decisions, not logic: they change with policy and must be reviewed, versioned and audited. In configuration, a change is visible and needs no code release.

</details>

---

## The whole project on one page

| Step | The ML idea | In the retail credit risk project | The number |
|---|---|---|---|
| Frame | Binary target, fixed window, prediction at application | Default within 12 months of issue | 16,018 of 466,285 loans — 3.44% |
| Clean | Types first; missing values with meaning; structural gaps | Century fix; missing bins; unstable fields dropped | `tot_cur_bal` 30.5% missing — dropped |
| Explore | Target rate by band | Default by grade and vintage | Grade A 1.22% → G 9.22% |
| Split | Out-of-time and stratified | 2007–2013 development, 2014 held out | 184,525 · 46,132 · 235,628 loans |
| Features | WoE, IV, selection by strength and stability | 49 candidates → 7 in Model A, 10 in Model B | Grade IV 0.294 |
| Model | Logistic regression | Models A and B, `statsmodels` | All Model A signs as expected |
| Score | Points scaling | 600 at odds of 50:1, 20 points to double | Factor 28.85, offset 487.1 |
| Evaluate | AUC, Gini, KS on three samples | Validation battery | Model B out-of-time AUC 0.6923, Gini 0.385 |
| Calibrate | Deciles, Hosmer–Lemeshow, recalibration | Intercept shift and Platt scaling | Deciles within about 0.2 points |
| Monitor | PSI, CSI, vintages | Train against 2014 | Score PSI 0.0071 |
| LGD | Two-stage hurdle model | Logistic, then gradient boosting | Mean LGD 0.930; 52% total loss |
| EAD | Balance rule; CCF regression | Outstanding principal; synthetic CCF | Mean $10,782 at default |
| Lifetime PD | Survival analysis | Monthly hazard over 60 months | 10.93% cumulative |
| Provisions | Staging rules, scenario weighting | IFRS 9, CECL comparison | ECL $278.48M; CECL $327.47M |
| Capital | Basel IRB formula | Other retail, downturn LGD | RWA $2.295B; +$12.74M in a downturn |

---

## The checklist for any project

| Stage | Before moving on, confirm |
|---|---|
| Frame | The event, window, unit and prediction point are written down; the base rate is known |
| Data | Types parsed and checked; duplicates removed; every missing pattern understood |
| Explore | Every strong variable's direction is known; surprises are noted, not explained away |
| Leakage | Every feature exists at the prediction point; outcome fields are banned in configuration |
| Split | Out-of-time sample held back; stratified where the target is rare; nothing learned from test |
| Features | Every transformation lives inside a pipeline fitted on train; unstable features dropped |
| Baselines | A dummy, a rule and a simple model scored before anything clever |
| Metrics | Chosen for the decision: ranking, probabilities, or a cost at a threshold — never plain accuracy on a rare event |
| Models | Challengers compared on the same splits and the same features, then on more features |
| Imbalance | Threshold chosen on cost; resampling only if needed, and recalibrated after |
| Tuning | Cross-validated on train; confirmed once on test; judged finally out of time |
| Calibration | Decile table checked; recalibrated if the level has moved |
| Explanation | Reasons available for any single decision |
| Monitoring | PSI and CSI with fixed bands; performance re-checked as outcomes arrive |
| Production | One saved pipeline; seeds, versions and data snapshot pinned; tests pass; limits documented |

---

## Built, demonstrated, explored

| Where it lives | What |
|---|---|
| **The repository — run on the full data** | 12-month target; development and out-of-time samples; WoE binning and IV; PD Models A and B; scorecard and rating grades; validation (AUC, Gini, KS, Brier, Hosmer–Lemeshow); intercept and Platt recalibration; PSI and CSI; two-stage LGD; EAD; lifetime PD; IFRS 9 staging and ECL; CECL comparison; macroeconomic scenarios; Basel IRB capital with downturn LGD; vintage curves; dashboard |
| **The repository — demonstration or proxy** | Synthetic CCF; cross-sectional roll-rate and transition proxies; grade-level origination PD |
| **The churn notebook** | Keras networks with SGD, Adam, dropout and a grid search; SMOTE-balanced final model |
| **Explored in this note only** | The one-hot pipeline; the leakage demonstration; the interest-rate regression; single trees, random forest, LightGBM, XGBoost and the blend; cross-validated tuning; kNN, naive Bayes, SVM; the network on the loan book; the imbalance comparison; calibrating the boosted model; the approval-rate table; permutation importance and SHAP; clustering, PCA and isolation forest |

---

## Reference numbers

| Figure | Value | Part |
|---|---:|---:|
| Loans; columns | 466,285; 75 | 0 |
| Ever defaulted | 50,968 — 10.93% | 1 |
| Defaulted within 12 months | 16,018 — 3.44% | 1 |
| Train · test · out-of-time loans | 184,525 · 46,132 · 235,628 | 4 |
| Default rate, train · test · out-of-time | 3.4299% · 3.4293% · 3.4406% | 4 |
| Leaky model's test AUC | 0.9993 | 4 |
| Information value: grade · income · DTI | 0.294 · 0.060 · 0.023 | 5 |
| One-hot logistic regression, test · OOT AUC | 0.6872 · 0.6960 | 5 |
| Dummy accuracy | 96.57% | 6 |
| LendingClub sub-grade alone, OOT AUC | 0.6886 | 6 |
| Model B at a 5% threshold: flagged · recall · precision | 20.0% · 41.7% · 7.1% | 6 |
| Model A AUC, train · test · OOT | 0.6507 · 0.6484 · 0.6357 | 6 |
| Model B AUC, train · test · OOT | 0.6839 · 0.6817 · 0.6923 | 6 |
| Interest rate line | 6.34% + 0.646% per sub-grade step; R² 0.926 | 7 |
| Repricing per year, same sub-grade | +0.65 points | 7 |
| Scorecard factor · offset | 28.85 · 487.1 | 8 |
| Unlimited tree, train · test AUC | 1.000 · 0.512 | 9 |
| Random forest · XGBoost · tuned LightGBM, OOT AUC | 0.7035 · 0.7025 · 0.7033 | 9, 13 |
| LightGBM on Model B's 10 variables, OOT AUC | 0.6872 | 9 |
| Mean PD after class weights · SMOTE (actual 3.43%) | 44.6% · 44.0% | 11 |
| Churn recall: first model · SMOTE model | 0.48 · 0.75 (AUC 0.8533 · 0.8515) | 11 |
| Best network on the loan book, OOT AUC | 0.6969 | 12 |
| Tuning gain in cross-validated AUC | 0.6898 → 0.6982 | 13 |
| Approve the best 80%: bad rate · defaulters declined | 2.51% · 41.8% | 14 |
| Score PSI, Model A · Model B | 0.0046 · 0.0071 | 16 |
| 2014 loans still current at the snapshot | 67.3% | 16 |
| Mean LGD · share with total loss | 0.930 · 52.2% | 17 |
| Mean EAD at default · share of loan still owed | $10,781.56 · 71.9% | 17 |
| 12-month expected loss, 2014 book | $58.67M — 3.21% of EAD | 17 |
| Cumulative PD at 12 · 24 · 36 · 60 months | 3.44% · 8.82% · 10.64% · 10.93% | 18 |
| Stages 1 · 2 · 3, share of loans | 80.5% · 11.3% · 8.3% | 18 |
| IFRS 9 ECL · CECL | $278.48M · $327.47M | 18 |
| Probability-weighted ECL | $285.04M | 18 |
| IRB RWA · standardised RWA | $2,294.7M · $1,369.9M | 18 |
| Downturn LGD capital add-on | +$12.74M — 6.9% | 18 |
| Segment default rates, k-means | 1.9% to 4.5% | 19 |

---

## Glossary

| Term | Meaning |
|---|---|
| API | A way for one program to call another — how a model is served in real time |
| AUC | Area under the ROC curve: the chance a random positive scores above a random negative |
| Bagging | Averaging many models trained on resampled data — random forests |
| Boosting | Adding models in sequence, each correcting the last — XGBoost, LightGBM |
| Bootstrap sample | Rows drawn at random with replacement, the same size as the original |
| Brier score | Mean squared gap between predicted probability and outcome |
| Calibration | Whether predicted probabilities match observed frequencies |
| Capital | The bank's own money held against losses larger than expected |
| CCF | Credit conversion factor: the share of an unused limit drawn before default |
| CECL | Current expected credit loss: US provisioning, lifetime from day one |
| Cross-validation | Rotating held-out folds to estimate performance without the test set |
| CSI | Characteristic stability index: PSI for one input |
| DTI | Debt-to-income ratio |
| EAD | Exposure at default |
| Early stopping | Halting training when a validation score stops improving |
| ECL | Expected credit loss under IFRS 9 |
| EL | Expected loss: PD × LGD × EAD |
| Epoch | One pass of a network over the training data |
| Gini | 2 × AUC − 1 |
| Hazard | The chance of the event in a period, given survival to it |
| Hosmer–Lemeshow | A test of calibration across probability bands |
| Hyperparameter | A setting chosen before training, such as tree depth or learning rate |
| IFRS 9 | International accounting standard for financial instruments, with staged provisions |
| IQR | Interquartile range: the gap between the 25th and 75th percentiles |
| IRB | Internal ratings-based approach to Basel capital |
| IV | Information value: a variable's power to separate defaulters |
| KS | Kolmogorov–Smirnov statistic: the largest gap between two score distributions |
| Leakage | Information in training that will not exist at prediction time |
| LGD | Loss given default |
| Log loss | Average penalty for confident wrong probabilities; binary cross-entropy |
| Log-odds | The natural logarithm of the odds; what logistic regression models as a straight line |
| Median | The middle value of sorted data |
| MOB | Months on book |
| Odds | p ÷ (1 − p): a probability restated as "for" against "against" |
| OOT | Out-of-time sample: later data held back for the final test |
| p-value | The chance of seeing an effect this large if there were no real effect |
| Parquet | A compact file format for tables |
| PD | Probability of default |
| PDO | Points to double the odds, in scorecard scaling |
| Percentile | The value below which a given share of the data falls |
| Pickle | Python's format for saving an object, such as a fitted model, to disk |
| Precision | Of those flagged, the share that were positive |
| Provision | Money set aside in the accounts now for losses expected later |
| PSI | Population stability index: how far a distribution has moved |
| RAG | Retrieval-augmented generation: a language model answering from retrieved documents |
| Recall | Of the positives, the share that were flagged |
| RWA | Risk-weighted assets |
| SHAP | Additive contributions of each input to one prediction |
| SICR | Significant increase in credit risk: the move to IFRS 9 Stage 2 |
| SMOTE | Synthetic minority oversampling: invents minority rows between real ones |
| Standard deviation | The typical distance of values from their mean |
| Stratified split | A split that keeps the event rate equal on every side |
| Vintage | Loans grouped by the period they were issued |
| WoE | Weight of evidence: ln(share of goods ÷ share of bads) in a bin |
| YAML | A plain-text format for configuration files |

---

## Library versions

All code in this note is ordinary Python; versions change, the ideas do not.

| Where | Versions |
|---|---|
| The project's recorded runtime | Python 3.11+, pandas 3.0.5, NumPy 2.5.1, scikit-learn 1.9.0, statsmodels 0.14.6, SciPy 1.18.0 [verify] |
| This note's re-run and side-lines | pandas 3.0.2, NumPy 2.4.4, scikit-learn 1.8.0, statsmodels 0.15.0, LightGBM 4.7.0, XGBoost 3.4.1, imbalanced-learn 0.14.2, SHAP 0.52.0 [verify] |
| The churn notebook | TensorFlow 2.17.1, Keras 3.5.0, SciKeras 0.13.0 [verify] |

---

## The compression

A machine learning project is a chain of honest decisions, and this one shows every link. Define the event so that old and young loans are comparable, and keep everything after the loan's first day out of the model. Let the data's own shapes choose the features — monotonic bins where risk rises steadily, flags where missing means something. Beat the baseline that matters, which here was LendingClub's own grade, not a coin. Remember that ranking and calibration are different jobs: the first decides who is approved, the second decides every provision and capital number downstream. Solve imbalance with the threshold, not by rewriting the data. Expect better features to beat better algorithms, and tuning to be the last few percent. Explain every decision in terms a borrower could follow. Watch the inputs drift while the outcomes are still on their way.

The scorecard at 0.69 and the boosted challenger at 0.70 are not the lesson. The lesson is that every number from the first default flag to the last dollar of capital can be traced, tested and defended — and that is what machine learning looks like when it is done for a bank.
