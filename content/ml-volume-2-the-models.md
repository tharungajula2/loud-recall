---
title: "Machine Learning — Volume 2: The Models"
description: "The same Indian lender's loan book, now with bureau-tradeline and bank-statement data. Decision trees from nothing, pruning, bagging and random forests, gradient boosting built by hand then with XGBoost and LightGBM, k-NN and SVMs, class imbalance, tuning with cross-validation, calibration, explaining models with permutation importance and SHAP, fairness, clustering and PCA — ending in a champion–challenger decision judged on profit, with every number produced by the code shown."
series: masterclass
track: guest
subject: "Machine Learning"
order: 2
status: live
updated: 2026-09-19
verified: false
tags:
  - machine learning
  - decision trees
  - random forest
  - gradient boosting
  - xgboost
  - lightgbm
  - class imbalance
  - hyperparameter tuning
  - calibration
  - shap
  - fairness
  - clustering
  - credit risk
---

## Part 0 — Where Volume 1 left the lender

Volume 1 built a probability-of-default model for one lender's 50,000 personal loans and turned it into an approve-or-decline rule. This volume asks whether more flexible models do better, what "better" costs, and how to decide.

### What Volume 1 handed on

| Figure | Value | Recall hint |
|---|---:|---|
| Loans, defaults, default rate | 50,000; 2,526; 5.05% | *"95 in 100 repay, Volume 1, Part 0"* |
| Split, out of time | Train Jan 2023 – Jun 2024 (37,516); validation Jul – Sep 2024 (6,330); test Oct – Dec 2024 (6,154) | *"the book drifts 4.96% → 5.44%, Volume 1, Part 3"* |
| Champion | Logistic regression on eight application features | *"odds × 0.29 per 100 bureau points, Volume 1, Part 6"* |
| Test AUC | 0.730 | *"Gini 0.461, Volume 1, Part 9"* |
| Economics | Margin 10% on a good loan; loss 55.25% on a bad one | *"break-even PD 15.33%, Volume 1, Part 10"* |
| Approve everyone, test quarter | ₹1,154.3 lakh | *"the lowest bad rate is not the most profit, Volume 1, Part 10"* |

### A correction first

Volume 1, Part 10 reported that the best cut-off, PD 12.8%, earned ₹1,193.1 lakh on the test quarter — and noted that the cut-off must really be chosen on validation data. Doing that properly, with the probabilities recalibrated on validation (Part 8 of this volume) and the profit-maximising cut-off picked on validation before the test set is touched, the Volume 1 champion earns **₹1,167.6 lakh** on test. **A choice made while looking at the test set always flatters.** From here on, every cut-off is chosen on validation and reported once on test.

### Why a cleverer algorithm alone would not help

The loan book is synthetic, so the true probability of default for every loan is known. That allows a measurement impossible with real data: the best AUC *any* model could reach with Volume 1's features.

| Model on Volume 1's eight features | Validation AUC | Test AUC |
|---|---:|---:|
| The true probabilities — an unbeatable oracle | 0.713 | 0.734 |
| Volume 1's logistic regression | 0.711 | 0.730 |
| Gradient boosting, Part 4 of this volume | 0.696 | 0.718 |

**The champion is within 0.004 of perfect on the data it has.** What remains is **irreducible error** — randomness in who defaults that no feature available at application can explain. A more flexible model only adds variance: boosting scores *below* logistic regression here. The lesson generalises: **when a simple model is near the ceiling of its data, the next gain comes from new information, not a new algorithm.**

### New information

So the lender buys two new data sources, available at application for every loan in the book:

| Feature | Meaning | Source |
|---|---|---|
| `card_utilisation` | Credit-card balances as a share of limits, 0 to 1 | Bureau tradeline data |
| `nach_bounces_12m` | Automatic EMI debits — **NACH** mandates — that bounced in the last 12 months | Bank-statement analysis |

They carry signal of a kind Volume 1's model cannot use. Read the default rate across them:

| FOIR | Card utilisation | Loans | Default rate |
|---|---|---:|---:|
| up to 0.45 | up to 0.5 | 31,973 | 4.08% |
| up to 0.45 | 0.5–0.8 | 3,937 | 6.27% |
| above 0.45 | up to 0.5 | 12,059 | 3.89% |
| above 0.45 | 0.5–0.8 | 1,890 | **23.86%** |
| above 0.45 | 0.8–1.0 | 74 | **67.57%** |

| Employment | NACH bounces in 12 months | Loans | Default rate |
|---|---:|---:|---:|
| Salaried | 0 | 30,594 | 3.46% |
| Salaried | 1 | 4,891 | 9.08% |
| Salaried | 2 or more | 471 | **25.27%** |
| Self-employed | 0 | 10,496 | 6.36% |
| Self-employed | 1 | 3,039 | 6.55% |
| Self-employed | 2 or more | 509 | 7.47% |

Two **interactions**: high utilisation is alarming only when FOIR is also high, and a bounced EMI is a red flag for a salaried borrower — whose salary arrives on a fixed date — but noise for a self-employed one whose income is lumpy. And one **threshold**: utilisation matters little until about 0.5. These are exactly the shapes Volume 1, Part 7 said a linear model cannot find unless someone writes them. This volume is about models that find them.

Optional reading — the extension to Volume 1's generator. The new features are drawn given each loan's realised outcome, which is how a simulation can add information that the original features lacked.

```python
import numpy as np

def add_statement_features(book, seed=7):
    """Bureau-tradeline and bank-statement features bought in Volume 2.
    Drawn given the realised outcome, so they carry signal beyond Volume 1's features,
    with a threshold, an interaction with FOIR and an interaction with employment type."""
    rng = np.random.default_rng(seed)
    n = len(book)
    bad = book.default_12m.values == 1
    high_foir = ((book.existing_emi + book.emi) / book.monthly_income).values > 0.45
    salaried = (book.employment_type == "salaried").values
    util = np.where(bad & high_foir, rng.beta(3.2, 3.2, n),            # stressed and over-borrowed
           np.where(bad, rng.beta(2.3, 4.7, n), rng.beta(2, 5, n)))  # otherwise barely different
    bounces = np.where(bad & salaried, rng.poisson(0.45, n),         # a salaried bounce is a red flag
              np.where(bad, rng.poisson(0.33, n),                  # self-employed bounce more anyway
              np.where(salaried, rng.poisson(0.15, n), rng.poisson(0.30, n))))
    out = book.copy()
    out["card_utilisation"] = util.round(3)
    out["nach_bounces_12m"] = bounces
    return out
```

Optional reading — the setup every snippet in this volume assumes:

```python
import numpy as np, pandas as pd, warnings; warnings.filterwarnings("ignore")
from loanbook import make_loan_book
book = make_loan_book(seed=42)
book["foir"] = (book.existing_emi + book.emi) / book.monthly_income
d = book.application_date
train = book[d < "2024-07-01"]; val = book[(d >= "2024-07-01") & (d < "2024-10-01")]; test = book[d >= "2024-10-01"]
FEATS = ["bureau_score", "foir", "enquiries_6m", "self_employed", "city_tier", "months_at_employer", "age"]
def X(frame):
    f = frame.assign(self_employed=(frame.employment_type == "self_employed").astype(int))[FEATS].copy()
    return f
Xtr, Xva, Xte = X(train), X(val), X(test)
ytr, yva, yte = train.default_12m.values, val.default_12m.values, test.default_12m.values
from statements import add_statement_features
book2 = add_statement_features(book)
train2, val2, test2 = book2.loc[train.index], book2.loc[val.index], book2.loc[test.index]
FEATS2 = FEATS + ["card_utilisation", "nach_bounces_12m"]
def X2(frame):
    return frame.assign(self_employed=(frame.employment_type == "self_employed").astype(int))[FEATS2].copy()
X2tr, X2va, X2te = X2(train2), X2(val2), X2(test2)
```

### How this volume is built

| Part | Question | Produces |
|---|---|---|
| **1** | How does a tree choose a split? | Gini impurity by hand; the first split on the book |
| **2** | How deep should it grow? | Depth and leaf-size sweeps; a readable depth-3 tree |
| **3** | Why do many trees beat one? | The bootstrap, variance reduction, random forests |
| **4** | How does boosting correct its own errors? | Boosting from scratch; XGBoost, LightGBM, early stopping |
| **5** | What about k-NN and SVMs? | Distance and margin methods, and why they are not the choice here |
| **6** | What about the 95-to-5 imbalance? | Class weights, SMOTE, and why the threshold is the real lever |
| **7** | How are settings chosen honestly? | Randomised search, cross-validation spread, nested CV |
| **8** | Do its probabilities mean what they say? | Platt scaling and isotonic regression |
| **9** | Why did it decide that? | Permutation importance, SHAP, partial dependence, monotone constraints |
| **10** | Is it fair? | Approval and error rates by group |
| **11** | What can be learned without a target? | k-means segments and PCA |
| **12** | Which model goes live? | Champion against challengers on profit, with its uncertainty |
| **13** | What is true today, and will change? | Library versions, refreshed |

---

## Part 1 — Decision trees, from nothing

### A tree is a set of questions

A **decision tree** predicts by asking yes-or-no questions about features — *is card utilisation above 0.51?* — and following the answers down to a **leaf**, where the prediction is the default rate of the training loans that ended there. Each question is a **split**; the first is the **root**.

Nothing about a tree is linear. A split can isolate high utilisation among high-FOIR borrowers without anyone writing an interaction, because the second question is asked only of loans that answered the first one a certain way.

### Measuring how mixed a node is

A split is good if its two children are purer than their parent — each more nearly all-good or all-bad. The usual measure of mixing is **Gini impurity**:

$$
G = 1 - \sum_{k} p_k^2 = 2p(1 - p) \quad \text{for two classes}
$$

where:

- **p_k** — the share of the node's loans in class k
- **p** — the node's default rate

A node of all good loans has G = 0; a 50–50 node has G = 0.5, the maximum for two classes. An alternative, **entropy**, H = −Σ p_k log₂ p_k, ranks splits almost identically.

### The first split, by hand

The training set: 37,516 loans, 1,859 defaults, p = 0.0496.

$$
G_{\text{root}} = 2 \times 0.0496 \times 0.9504 = 0.09419
$$

where:

- **0.0496** — the training default rate

A candidate split sends each loan left or right. Its quality is the children's impurity, weighted by their size:

$$
G_{\text{split}} = \frac{n_L}{n} G_L + \frac{n_R}{n} G_R
$$

where:

- **n_L, n_R** — loans sent left and right; **n** their total
- **G_L, G_R** — each child's Gini impurity

Try card utilisation above 0.5:

| Child | Loans | Defaults | Default rate | Gini |
|---|---:|---:|---:|---:|
| Utilisation > 0.5 | 4,471 | 549 | 12.28% | 0.21543 |
| Utilisation ≤ 0.5 | 33,045 | 1,310 | 3.96% | 0.07614 |
| **Weighted** | | | | 4,471/37,516 × 0.21543 + 33,045/37,516 × 0.07614 = **0.09274** |

Impurity falls by 0.09419 − 0.09274 = **0.00145**. Compare the other candidates:

| Candidate split | Weighted Gini | Decrease |
|---|---:|---:|
| **Card utilisation > 0.5** | **0.09274** | **0.00145** |
| Bureau score < 700, or no score | 0.09288 | 0.00131 |
| NACH bounces ≥ 1 | 0.09359 | 0.00060 |
| FOIR > 0.5 | 0.09393 | 0.00026 |

The algorithm does exactly this for every feature and every threshold between adjacent values, and keeps the largest decrease. The library's search lands on utilisation at 0.51 — the same answer, with a slightly better threshold than our round number. Then it repeats the search inside each child, and so on down. That repetition is called **recursive partitioning**, and it is greedy: each split is the best available now, with no look-ahead.

```python
def gini(y):
    p = y.mean()
    return 2 * p * (1 - p)

def split_gini(x, y, threshold):
    left = x > threshold
    n = len(y)
    return left.sum() / n * gini(y[left]) + (~left).sum() / n * gini(y[~left])

print(gini(ytr), split_gini(X2tr.card_utilisation.values, ytr, 0.5))   # 0.09419  0.09274
```

**Decision, Part 1:** trees are a candidate because they find thresholds and interactions unaided. Gini impurity is the splitting criterion; the choice against entropy rarely matters.

---

## Part 2 — Growing and pruning a tree

### A tree left alone memorises

Grow a tree until every leaf is pure and it reproduces the training set perfectly. Sweep the maximum depth — the number of questions from root to leaf:

| Max depth | Leaves | Train AUC | Validation AUC |
|---:|---:|---:|---:|
| 1 | 2 | 0.593 | 0.592 |
| 2 | 4 | 0.686 | 0.699 |
| 3 | 8 | 0.723 | 0.721 |
| 4 | 16 | 0.740 | 0.737 |
| 5 | 32 | 0.758 | 0.744 |
| **6** | **60** | **0.771** | **0.758** |
| 8 | 191 | 0.805 | 0.748 |
| 10 | 452 | 0.853 | 0.710 |
| 15 | 1,564 | 0.970 | 0.591 |
| Unlimited | 2,691 | **1.000** | **0.571** |

Volume 1, Part 8's bias–variance picture, in one column: too shallow underfits, too deep memorises. An unlimited tree has 2,691 leaves, many holding one or two loans; its "probabilities" are mostly 0 or 1, and on new loans it is barely better than guessing.

### Constraints that stop it

| Constraint | Meaning | Effect |
|---|---|---|
| `max_depth` | At most this many questions | Caps complexity bluntly |
| `min_samples_leaf` | Every leaf must hold at least this many loans | Guarantees each leaf's default rate rests on enough data |
| `min_impurity_decrease` | A split must reduce impurity by at least this much | Stops weak splits |
| `ccp_alpha` — **cost-complexity pruning** | Grow fully, then cut back branches whose impurity reduction does not justify their size | The classical pruning method |

For probability estimates, the leaf size is the natural constraint: a leaf's default rate from 20 loans has one default or none; from 300 it means something.

| Min loans per leaf | Leaves | Train AUC | Validation AUC |
|---:|---:|---:|---:|
| 1 | 2,691 | 1.000 | 0.571 |
| 20 | 746 | 0.923 | 0.693 |
| 100 | 240 | 0.842 | 0.733 |
| **300** | **94** | **0.797** | **0.764** |
| 1,000 | 27 | 0.762 | 0.752 |

The best single tree reaches 0.764 on validation, above a logistic regression given the same nine features (0.762, Part 12) — with no feature engineering at all.

### A tree you can read

A depth-3 tree is weaker, but it is a policy anyone can audit. Unscored applicants were given a score of −1 before fitting, so they follow the low-score branch.

| Path | Loans | Defaults | Default rate |
|---|---:|---:|---:|
| Utilisation ≤ 0.51, score ≤ 711, utilisation ≤ 0.26 | 7,184 | 318 | 4.4% |
| Utilisation ≤ 0.51, score ≤ 711, utilisation > 0.26 | 6,260 | 564 | 9.0% |
| Utilisation ≤ 0.51, score > 711, no bounce | 16,416 | 300 | **1.8%** |
| Utilisation ≤ 0.51, score > 711, a bounce | 3,479 | 143 | 4.1% |
| Utilisation > 0.51, FOIR ≤ 0.45, score ≤ 675 | 625 | 87 | 13.9% |
| Utilisation > 0.51, FOIR ≤ 0.45, score > 675 | 2,200 | 95 | 4.3% |
| **Utilisation > 0.51, FOIR > 0.45, score ≤ 743** | **906** | **307** | **33.9%** |
| Utilisation > 0.51, FOIR > 0.45, score > 743 | 446 | 45 | 10.1% |

The tree found the utilisation-by-FOIR interaction on its own: the riskiest leaf is high utilisation **and** high FOIR, at seven times the book's rate.

### Why trees alone are not enough

| Strength | Weakness |
|---|---|
| Finds thresholds and interactions unaided | **High variance**: a slightly different sample gives a different tree |
| No scaling needed; one comparison per question | Predictions are step functions — a few distinct probabilities |
| Missing values and categories handled simply | Greedy: an early poor split cannot be undone |
| Readable at small depth | Weak at large depth, unreadable at the depth where it is strongest |

The instability is the key. Parts 3 and 4 are two ways of turning many unstable trees into one stable model.

```python
from sklearn.tree import DecisionTreeClassifier, export_text
tree = DecisionTreeClassifier(min_samples_leaf=300, random_state=0).fit(X2tr.fillna(-1), ytr)
small = DecisionTreeClassifier(max_depth=3, random_state=0).fit(X2tr.fillna(-1), ytr)
print(export_text(small, feature_names=list(X2tr.columns), show_weights=True))
```

**Decision, Part 2:** a single tree is not the model — too unstable — but a shallow one is a useful audit of what interactions exist. Leaf size is the constraint that matters for probabilities.

---

## Part 3 — Bagging and random forests

### Averaging away variance

If one tree is noisy, average many. But they must be trained on different data, or they will all be the same tree. **Bagging** — bootstrap aggregating — trains each tree on a **bootstrap sample**: n loans drawn from the n training loans **with replacement**, so some appear twice and others not at all.

$$
P(\text{a loan appears in a bootstrap sample}) = 1 - \left(1 - \frac{1}{n}\right)^{n} \approx 1 - \frac{1}{e} = 0.632
$$

where:

- **n** — the number of training loans, 37,516
- **e** — the base of natural logarithms

Each tree sees about 63.2% of the distinct loans. The other 36.8% — its **out-of-bag** loans — are a free validation set for that tree.

How much does averaging help? For B predictions each with variance σ² and pairwise correlation ρ:

$$
\text{Var}(\text{average}) = \rho\,\sigma^2 + \frac{1 - \rho}{B}\,\sigma^2
$$

where:

- **σ²** — the variance of one tree's prediction
- **ρ** — the correlation between two trees' predictions
- **B** — the number of trees

With illustrative σ² = 1 and ρ = 0.3: one tree has variance 1.00; a hundred have 0.3 + 0.7 ÷ 100 = **0.307**. The second term vanishes as B grows; **the first term is a floor that only lower correlation can lower.** Averaging cannot fix trees that all make the same mistake.

| Fully grown trees on bootstrap samples | Validation AUC |
|---:|---:|
| 1 | 0.555 |
| 100, averaged | **0.741** |

### Random forests: decorrelate the trees

Bagged trees are correlated because the same strong feature — utilisation or bureau score — wins the first split in almost every tree. A **random forest** adds one twist: at each split, only a random subset of features may be considered. Sometimes the strongest is not on offer, so trees differ more, ρ falls, and the average improves.

| Features considered per split, `max_features` | Validation AUC |
|---|---:|
| 1 | 0.782 |
| 3 — about √9 | **0.787** |
| All 9 — plain bagging | 0.779 |

| Trees in the forest, leaves of at least 50 loans | Validation AUC |
|---:|---:|
| 1 | 0.675 |
| 10 | 0.766 |
| 100 | 0.786 |
| 500 | 0.787 |

More trees never overfit a forest; they only stop helping. Past a few hundred, the extra trees cost time and add nothing.

| Forest of 500 trees | AUC |
|---|---:|
| Out-of-bag, on training loans | 0.774 |
| Validation | 0.787 |
| Test | 0.798 |

The out-of-bag estimate sits close to validation — useful when data is too scarce to hold out a validation set.

```python
from sklearn.ensemble import RandomForestClassifier
forest = RandomForestClassifier(n_estimators=500, min_samples_leaf=50, max_features="sqrt",
                                oob_score=True, n_jobs=-1, random_state=0)
forest.fit(X2tr.fillna(-1), ytr)
oob_auc = roc_auc_score(ytr, forest.oob_decision_function_[:, 1])
```

**Decision, Part 3:** the random forest, at 0.787 on validation with almost no tuning, is the first serious challenger. Its limitation is structural: every tree is fitted independently, so no tree learns from another's mistakes.

---

## Part 4 — Boosting

### Correcting mistakes in sequence

A forest grows trees independently and averages them. **Boosting** grows them one after another, each fitted to the mistakes of all the trees before it. Many **weak learners** — small trees, individually barely better than guessing — add up to a strong one.

The version that dominates tabular data is **gradient boosting**. It works in log-odds, like Volume 1's logistic regression:

$$
F_m(x) = F_{m-1}(x) + \eta\, h_m(x)
$$

where:

- **F_m(x)** — the model's log-odds for a loan after m trees
- **h_m** — the m-th tree, fitted to the current errors
- **η** — the learning rate, which shrinks each tree's contribution

And "the current errors" has a precise meaning. For log loss, the gradient with respect to the log-odds is prediction minus outcome — Volume 1, Part 6's formula — so the direction that reduces the loss is the **pseudo-residual**:

$$
r_i = y_i - p_i
$$

where:

- **yᵢ** — 1 if loan i defaulted
- **pᵢ** — the current predicted probability, σ(F_{m−1}(xᵢ))

### Boosting from scratch

Start every loan at the training log-odds, ln(0.0496 ÷ 0.9504) = −2.954. Every defaulter has residual 1 − 0.0496 = 0.9504; every good loan −0.0496. The first tree is a regression tree fitted to those residuals: it learns which regions hold more defaults than the current model predicts. Add a tenth of its prediction, recompute residuals, fit the next.

```python
from sklearn.tree import DecisionTreeRegressor

def fit_boosting(X, y, X_val, rounds=300, lr=0.1, depth=3):
    f0 = np.log(y.mean() / (1 - y.mean()))            # start at the base log-odds
    F, F_val, trees = np.full(len(y), f0), np.full(len(X_val), f0), []
    for _ in range(rounds):
        p = 1 / (1 + np.exp(-F))
        tree = DecisionTreeRegressor(max_depth=depth, min_samples_leaf=100).fit(X, y - p)
        F += lr * tree.predict(X)
        F_val += lr * tree.predict(X_val)
        trees.append(tree)
    return f0, trees, F_val

f0, trees, F_val = fit_boosting(X2tr.fillna(-1).values, ytr, X2va.fillna(-1).values)
```

| Round | Training log loss | Validation AUC |
|---:|---:|---:|
| 0 — every loan at 4.96% | 0.19719 | — |
| 1 | 0.19690 | 0.721 |
| 10 | 0.19442 | 0.722 |
| 50 | 0.18602 | 0.745 |
| 100 | 0.18025 | 0.748 |
| 300 | 0.17142 | **0.770** |

Thirty lines, and it is climbing past the single tree. It climbs slowly because each tree fits raw residuals, which for a 5% target are small. Production libraries take a **second-order**, Newton step: each leaf's value is Σr ÷ Σp(1 − p), using the curvature of the loss as well as its slope, which reaches the same place in far fewer trees.

### Learning rate against number of trees

A smaller learning rate needs more trees and usually generalises better, because no single tree can dominate. Using scikit-learn's histogram-based gradient boosting — which buckets each feature into at most 255 bins, so split searches are fast:

| Learning rate | Trees | Validation AUC |
|---:|---:|---:|
| 0.30 | 100 | 0.756 |
| 0.10 | 300 | 0.766 |
| 0.05 | 600 | 0.771 |
| 0.02 | 1,500 | 0.769 |

And boosting, unlike a forest, **does overfit** as trees are added — each new tree fits the training set's remaining noise. Big trees, tiny leaves, a high learning rate and 1,000 rounds: training AUC **1.000**, validation **0.704**.

### Early stopping

The cure is to stop adding trees when a held-out slice of the training data stops improving. **Early stopping** keeps 15% of training aside, and ends when 50 consecutive trees fail to improve its loss.

| Setting | Trees used | Validation AUC |
|---|---:|---:|
| Learning rate 0.05, up to 2,000 trees, early stopping | **139** | **0.778** |

It chose 139 trees by itself and beat every fixed choice above. **Early stopping makes the number of trees a result, not a guess.**

```python
from sklearn.ensemble import HistGradientBoostingClassifier
gbm = HistGradientBoostingClassifier(learning_rate=0.05, max_iter=2000, max_leaf_nodes=15,
                                     min_samples_leaf=200, early_stopping=True,
                                     validation_fraction=0.15, n_iter_no_change=50, random_state=0)
gbm.fit(X2tr, ytr)                     # missing bureau scores handled natively
print(gbm.n_iter_)                     # 139
```

### The libraries

| Library | Distinctive ideas | Validation AUC | Test AUC |
|---|---|---:|---:|
| **scikit-learn** `HistGradientBoostingClassifier`, 400 fixed trees | Histogram splits; native missing values; early stopping built in | 0.777 | 0.796 |
| **XGBoost** | Regularised objective with penalties on leaves and leaf values; row and column subsampling; second-order steps | **0.784** | **0.803** |
| **LightGBM** | Grows the leaf with the largest gain first rather than level by level; very fast on large data | 0.783 | 0.795 |
| **CatBoost** | Symmetric trees; built-in, leakage-safe encoding of categorical features | Not run here | — |

Each trained in about a second on 37,516 loans. The differences between them here are smaller than the fold-to-fold spread Part 7 measures; **the library matters less than the settings and the data.**

```python
import xgboost as xgb
xgbm = xgb.XGBClassifier(n_estimators=400, learning_rate=0.05, max_depth=4, subsample=0.8,
                         colsample_bytree=0.8, min_child_weight=20, random_state=0).fit(X2tr, ytr)
```

### When boosting does not help

Back to Part 0: on Volume 1's eight features, where the true relationship is almost linear and a logistic model sits within 0.004 of the ceiling, boosting with early stopping scores **0.718** on test against logistic regression's **0.730**. It has more capacity to fit noise and no extra signal to find. **Flexibility is worth having only where the data has shape.**

**Decision, Part 4:** gradient boosting with early stopping is the main challenger. Library choice is secondary; settings are chosen in Part 7.

---

## Part 5 — Two other classics: k-NN and SVMs

Two older families are standard in any machine-learning syllabus. Both are worth understanding, and both show why they are rarely the choice for a loan book.

### k-nearest neighbours

**k-NN** stores the training set and predicts for a new applicant the default rate among the k most similar past loans, similarity measured by distance:

$$
d(a, b) = \sqrt{\sum_{j} (a_j - b_j)^2}
$$

where:

- **a, b** — two loans' feature vectors, **standardised** so no feature dominates by its units

| k neighbours, standardised features | Validation AUC | Time to score validation |
|---:|---:|---:|
| 5 | 0.639 | 0.5 s |
| 50 | 0.747 | 1.2 s |
| 200 | 0.778 | 2.1 s |
| 500 | 0.782 | 3.2 s |
| 200, **unstandardised** | **0.640** | |

Surprisingly competitive at large k — averaging 500 neighbours is a smooth local default rate. But unstandardised, the distance is almost entirely bureau score, which runs to hundreds, and the model collapses to 0.640. Three structural problems rule it out here: scoring means searching the whole training set for every applicant; it cannot explain a decision beyond "people like you defaulted"; and in many dimensions all points become nearly equidistant — the **curse of dimensionality** — so "nearest" loses meaning.

### Support vector machines

A **support vector machine (SVM)** finds the boundary that separates the classes with the widest possible **margin**, allowing some points on the wrong side at a cost C:

$$
\min_{w, b} \ \frac{1}{2}\lVert w \rVert^2 + C \sum_i \xi_i
$$

where:

- **w, b** — the boundary's orientation and offset
- **ξᵢ** — how far loan i sits on the wrong side of its margin
- **C** — the penalty on those violations; larger C fits the training data harder

A **kernel** — here the radial basis function — lets the boundary curve by comparing points through a similarity function rather than their raw coordinates. Training time grows roughly with the square of the number of rows or worse, so these ran on an 8,000-loan subsample:

| SVM on 8,000 loans | Validation AUC |
|---|---:|
| RBF kernel, default settings | 0.556 |
| RBF, classes weighted equally | 0.711 |
| RBF, weighted, C = 0.1 | **0.762** |
| Linear kernel, default settings | 0.560 |

Untuned on a 5% target, the SVM barely beats guessing: the widest margin is achieved by ignoring the rare class. Weighting the classes and softening C brings it to 0.762. It also produces a **distance from the boundary, not a probability**, so it needs Part 8's calibration before any profit calculation.

| Family | Idea | Why not the choice here |
|---|---|---|
| k-NN | Predict from similar past cases | Slow to score; no explanation; sensitive to scaling and dimensions |
| SVM | Widest-margin boundary, curved by kernels | Slow on large data; no native probabilities; fragile on imbalance |
| Gradient-boosted trees | Sequential correction of errors | — the challenger |

**Decision, Part 5:** neither goes forward. k-NN is kept as a sanity check that a smooth local average reaches about 0.78, which says the boosted model's 0.78 is not an accident.

---

## Part 6 — The 95-to-5 problem: class imbalance

Only one loan in twenty defaults. Volume 1, Part 4 showed that this breaks accuracy. It is widely believed also to break model training, and a toolkit exists to "fix" it.

| Method | What it does |
|---|---|
| **Class weights** | Count each defaulter as ~19 loans in the loss, so the classes weigh the same |
| **Random undersampling** | Discard good loans until the classes are equal |
| **Random oversampling** | Duplicate defaulters |
| **SMOTE** — synthetic minority oversampling | Invent new defaulters by interpolating between a defaulter and its nearest defaulter neighbours |

Test them on the questions that matter here — ranking and probabilities:

| Model | Validation AUC | Mean predicted PD | Brier score |
|---|---:|---:|---:|
| Boosting, no rebalancing | 0.778 | 5.02% | **0.0449** |
| Boosting, balanced class weights | 0.781 | **37.46%** | 0.1759 |
| Logistic, no rebalancing | 0.762 | 5.00% | **0.0457** |
| Logistic, balanced class weights | 0.766 | **40.02%** | 0.1940 |
| Logistic after SMOTE | 0.765 | 39.50% | — |
| Logistic after undersampling | 0.766 | 39.94% | — |

The actual default rate is 5.24%.

**Rebalancing barely changes ranking and destroys the probabilities.** Every rebalanced model thinks the average borrower has a 38–40% chance of default, because it was trained on a world where half the loans default. For a lender who multiplies PD by money, that is useless until corrected. The correction is exact for weighting and resampling — shift the log-odds back by the ratio the training was distorted:

$$
\text{logit}(p_{\text{true}}) = \text{logit}(p_{\text{balanced}}) - \ln\!\left(\frac{1 - \pi}{\pi}\right)
$$

where:

- **π** — the true training default rate, 0.0496
- **ln((1 − π) ÷ π)** — ln 19.18 = 2.954, the log of the up-weighting applied to defaulters

Applied to the balanced boosting model on test, the mean PD returns from 38.3% to 4.5%, with the AUC unchanged — so the rebalancing bought nothing that the unweighted model did not already have.

Why was it believed necessary? Because a model judged by **accuracy at a 0.5 threshold** does ignore a 5% class, and rebalancing moves predictions above 0.5. The real fix is Volume 1, Part 10's: **choose the threshold from the economics.** A calibrated probability and a profit-based cut-off handle imbalance completely.

When is rebalancing genuinely useful? When the minority is so rare — below about 1 in 1,000 — that a model sees too few positives to learn from, or when a learner such as the untuned SVM of Part 5 collapses onto the majority. Then weight, and correct the probabilities afterwards.

**Trap — resampling before splitting.** SMOTE applied to the whole training set before cross-validation puts synthetic twins of a validation-fold defaulter into the training folds: leakage from Volume 1, Part 3. Resampling belongs **inside** the pipeline, applied to each training fold only.

```python
from imblearn.pipeline import Pipeline as ImbPipeline
from imblearn.over_sampling import SMOTE
smote_lr = ImbPipeline([("scale", StandardScaler()),
                        ("smote", SMOTE(random_state=0)),          # runs on training folds only
                        ("clf", LogisticRegression(max_iter=5000))])
```

**Decision, Part 6:** no rebalancing. Imbalance is handled by calibrated probabilities and a profit-based cut-off. Rebalancing is reserved for learners that collapse without it, always followed by the prior correction.

---

## Part 7 — Tuning without fooling yourself

### Parameters and hyperparameters

A model's **parameters** are learned from data — coefficients, split thresholds, leaf values. Its **hyperparameters** are set before training — learning rate, leaf size, number of leaves. Choosing hyperparameters is itself a kind of fitting, and every way it can overfit has a name.

| Search method | How | When |
|---|---|---|
| Grid search | Every combination of listed values | Two or three hyperparameters, few values |
| **Random search** | Random combinations from ranges | The default: finds good regions far faster than a grid when only a few hyperparameters really matter |
| Bayesian optimisation | Each trial chosen using the results so far | Expensive models; libraries such as Optuna |
| Successive halving | Many candidates on little data, the best promoted to more | Large searches on large data |

### A randomised search, cross-validated

Thirty random settings of five hyperparameters, each scored by 5-fold stratified cross-validation on the training set — 150 fits, 93 seconds — with early stopping deciding the number of trees inside each.

```python
from scipy.stats import loguniform, randint
from sklearn.model_selection import RandomizedSearchCV, StratifiedKFold

space = {"learning_rate": loguniform(0.01, 0.3), "max_leaf_nodes": randint(4, 64),
         "min_samples_leaf": randint(20, 1000), "l2_regularization": loguniform(1e-3, 10),
         "max_features": [0.5, 0.8, 1.0]}
search = RandomizedSearchCV(
    HistGradientBoostingClassifier(max_iter=2000, early_stopping=True, validation_fraction=0.15,
                                   n_iter_no_change=50, random_state=0),
    space, n_iter=30, scoring="roc_auc", random_state=0, n_jobs=-1,
    cv=StratifiedKFold(5, shuffle=True, random_state=0)).fit(X2tr, ytr)
```

| Result | Value |
|---|---:|
| Default settings, 5-fold CV AUC | 0.759 ± 0.018 |
| **Best of 30, 5-fold CV AUC** | **0.776 ± 0.017** |
| Five best candidates | 0.772 to 0.776 |
| Worst candidate | 0.746 |
| Best settings | Learning rate 0.011; 9 leaves; at least 570 loans per leaf; L2 penalty 0.19; 80% of features per tree; 641 trees |
| Validation AUC / test AUC | 0.781 / 0.808 |

Three readings.

**Tuning was worth about 0.017 of AUC here** — real, and smaller than the gain from the new data sources in Part 0.

**The top five are indistinguishable.** They differ by less than one fold's standard deviation. Picking "the" best is picking among equals; any of them would do, and the simplest is often the wisest choice.

**The winner is conservative**: a slow learning rate, small trees, large leaves. On a noisy 5% target, the search rewards settings that refuse to fit small groups — the same lesson as Part 2's leaf size.

### The overfitting that tuning causes

Every candidate tried is a chance to fit the validation data by luck. With 30 candidates, the best CV score is biased upward; with 3,000, badly. Three defences:

| Defence | How |
|---|---|
| **Keep the test set out of it** | Tuning uses training folds only; the test set is used once, at the end |
| **Nested cross-validation** | An inner loop tunes; an outer loop scores the *whole tuning procedure* on folds it never saw. The honest estimate of "tuned model" performance, at k × k times the cost |
| **Prefer the flat region** | Choose settings whose neighbours also score well, not an isolated peak |

**Decision, Part 7:** the tuned boosting model — 0.776 ± 0.017 in cross-validation — is the challenger. Its hyperparameters are recorded with their search space and seed so the search can be re-run.

---

## Part 8 — Calibration: do the probabilities mean what they say?

Volume 1, Part 9 found the logistic model under-predicting a riskier cohort. Tree ensembles add a second reason to check: nothing in how a forest averages votes, or how boosting stops early, guarantees that its outputs are well-scaled probabilities.

### The tuned model, as it comes

Sort the test loans into five equal groups by predicted PD and compare prediction with outcome:

| Quintile, riskiest first | Mean predicted PD | Actual default rate |
|---:|---:|---:|
| 1 | 14.23% | 16.49% |
| 2 | 4.95% | 5.69% |
| 3 | 2.90% | 3.01% |
| 4 | 1.82% | 1.30% |
| 5 | 0.93% | 0.73% |
| **All** | **4.96%** | **5.44%** |

Good in the middle; too low at the top, where the money is decided; a little high at the bottom. Part of that is Volume 1's drift, part is the model.

### Two ways to recalibrate

Both fit a mapping from raw score to probability on the **validation** set, then apply it unchanged to test.

**Platt scaling** fits a logistic regression on the model's own log-odds:

$$
p_{\text{calibrated}} = \sigma\big(a \cdot \text{logit}(\hat{p}) + b\big)
$$

where:

- **p̂** — the model's raw probability
- **a, b** — two numbers fitted on validation; here a = 1.036, b = 0.141

**Isotonic regression** fits any non-decreasing step function from score to probability — far more flexible, and correspondingly hungrier for data.

| Test set | Mean PD | Top quintile predicted vs actual | Brier score | Log loss | AUC |
|---|---:|---|---:|---:|---:|
| Raw | 4.96% | 14.23% vs 16.49% | 0.04526 | 0.1737 | 0.808 |
| **Platt** | **5.19%** | **15.16% vs 16.49%** | **0.04512** | **0.1733** | **0.808** |
| Isotonic | 5.24% | step function, 44 distinct values | 0.04541 | 0.1897 | 0.806 |

Platt's b = 0.141 is Volume 1's intercept shift in another guise — the validation cohort is riskier than training — and a slope near 1 says the model's *spread* was already right. **Platt improved every measure without touching the ranking.** Isotonic, fitted on 6,330 loans with 332 defaults, produced only 44 distinct probabilities, over-fitted the validation set and made log loss worse. With tens of thousands of validation defaults, isotonic can be the better choice; with a few hundred, the two-parameter fit wins.

```python
from sklearn.linear_model import LogisticRegression
logit = lambda p: np.log(p / (1 - p))
platt = LogisticRegression(C=np.inf).fit(logit(p_val).reshape(-1, 1), yva)       # fit on validation
p_test_cal = platt.predict_proba(logit(p_test).reshape(-1, 1))[:, 1]             # apply to test
```

scikit-learn's `CalibratedClassifierCV` wraps both methods; the explicit version above makes clear which data each step touches.

**Decision, Part 8:** every model going into the profit comparison is Platt-calibrated on validation. Calibration is re-checked each quarter on the latest matured cohort.

---

## Part 9 — Explaining the model

A lender must be able to say why an applicant was declined — to the applicant, to auditors, and to itself when the model misbehaves. Logistic regression explains itself: each coefficient is an odds ratio. A boosted ensemble of 641 trees does not, so a set of tools has grown up around it.

### Which features matter: permutation importance

Shuffle one feature's values across the validation set — breaking its link to the outcome while keeping its distribution — and measure how far AUC falls.

| Feature | Drop in validation AUC when shuffled |
|---|---:|
| Card utilisation | 0.084 |
| Bureau score | 0.083 |
| NACH bounces, 12 months | 0.042 |
| FOIR | 0.026 |
| Enquiries, 6 months | 0.026 |
| Self-employed | 0.016 |
| Months at employer | 0.007 |
| Age | 0.001 |
| City tier | −0.001 |

The two new data sources are first and third. City tier contributes nothing — its drop is inside the noise. Permutation importance is honest in one way that the trees' built-in "split count" importances are not: it measures the effect on a real metric, on data the model did not train on. Its weakness is correlated features: shuffle one of two near-copies and the other covers for it, so both look unimportant.

### Why this applicant: SHAP

For a single decision, **SHAP** values — from Shapley values in game theory — split the model's output for one loan into a contribution from each feature, such that they add up exactly:

$$
f(x) = \phi_0 + \sum_{j} \phi_j
$$

where:

- **f(x)** — the model's log-odds for this applicant
- **φ₀** — the average log-odds over the training data
- **φⱼ** — feature j's contribution, averaged fairly over every order in which features could be added

Volume 1, Part 6's applicant — 29, self-employed, tier-3 town, bureau 690, FOIR 0.55, three enquiries, eighteen months in the job — now with card utilisation 0.72 and one bounced EMI:

| | Log-odds |
|---|---:|
| Base value, φ₀ — about 3.1% | −3.443 |
| Card utilisation 0.72 | +1.672 |
| FOIR 0.55 | +0.541 |
| Bureau score 690 | +0.432 |
| Three enquiries | +0.372 |
| Eighteen months at employer | +0.267 |
| One NACH bounce | +0.243 |
| City tier 3 | +0.092 |
| Self-employed | +0.085 |
| Age 29 | +0.084 |
| **Total, f(x)** | **+0.345** |
| **PD** | **58.5%** |

Volume 1's model put this applicant at 23.9%. The new model sees utilisation of 0.72 *at a FOIR of 0.55* — the combination Part 0's table shows defaulting at around a quarter — and the SHAP row for utilisation carries most of that. The top contributions become the **reason codes** a declined applicant is given: *high credit-card utilisation relative to income commitments; bureau score; recent credit enquiries.*

```python
import shap
explainer = shap.TreeExplainer(best)
phi = explainer.shap_values(applicant)                 # one row per applicant
base = explainer.expected_value                        # φ₀, in log-odds
```

### How a feature acts: partial dependence

Set every validation loan's utilisation to a fixed value, and FOIR to a fixed value, and average the model's predictions — a **partial dependence** reading of the interaction:

| Utilisation | 0.1 | 0.3 | 0.5 | 0.7 | 0.9 |
|---|---:|---:|---:|---:|---:|
| Mean PD at FOIR 0.30 | 2.6% | 5.0% | 5.3% | 9.1% | 9.1% |
| Mean PD at FOIR 0.60 | 1.2% | 5.1% | 11.2% | 27.7% | 27.7% |

At low FOIR, utilisation matters modestly. At high FOIR, it is the whole story, tripling risk between 0.5 and 0.7. Low utilisation at high FOIR is even *reassuring* — in this book the stressed high-FOIR borrowers show it on their cards, so one who does not is probably coping. The flat top — 0.7 and 0.9 give the same value — is the trees running out of data: few loans have utilisation above 0.8.

### Making the model behave: monotone constraints

A free model can produce shapes a credit officer cannot defend. Sweep the applicant's bureau score with everything else fixed:

| Bureau score | 640 | 660 | 680 | 700 | 720 | 740 | 760 | 780 | 800 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| PD, free model | 67.6% | 67.4% | **67.6%** | 59.3% | 47.6% | **48.0%** | 33.1% | 33.1% | 24.5% |
| PD, monotone model | 74.4% | 73.8% | 71.7% | 57.3% | 39.9% | 39.7% | 29.9% | 29.3% | 21.9% |

The free model says moving from 660 to 680, or from 720 to 740, very slightly *raises* risk — noise from sparse regions, but indefensible to an applicant told to improve their score. A **monotone constraint** forces the model's output to move in one direction with a feature: never up with bureau score; never down with FOIR, enquiries, utilisation or bounces.

| Model | Validation AUC | Test AUC |
|---|---:|---:|
| Tuned boosting, free | 0.781 | 0.808 |
| Tuned boosting, monotone on five features | 0.774 | 0.802 |

**Six-thousandths of AUC buys a model that always agrees with credit common sense.** In regulated lending that trade is usually taken.

```python
monotone = HistGradientBoostingClassifier(**best.get_params() | {"monotonic_cst": {
    "bureau_score": -1, "foir": 1, "enquiries_6m": 1, "card_utilisation": 1, "nach_bounces_12m": 1}})
```

### The simplest explanation: put the interactions in a scorecard

The tree of Part 2 and the partial dependence above both point at two interactions. Write them into Volume 1's logistic regression as features:

| Added feature | Definition |
|---|---|
| `util_x_high_foir` | Card utilisation if FOIR > 0.45, else 0 |
| `bounces_x_salaried` | NACH bounces if salaried, else 0 |

| Model | Validation AUC | Test AUC |
|---|---:|---:|
| Logistic, nine features, no interactions | 0.762 | 0.789 |
| **Logistic, plus the two interactions** | **0.784** | **0.808** |
| Tuned boosting | 0.781 | 0.808 |

**The two hand-written interactions close the whole gap.** The trees did the discovering; the scorecard does the deciding, with every coefficient readable. One trap in reading it: with the interaction present, FOIR's own coefficient turns *negative* — high FOIR with low utilisation is reassuring, and the risk of high FOIR now lives in the interaction term. Coefficients of interacting features must be read together, never alone.

**Decision, Part 9:** use trees to find structure, SHAP to explain individual decisions, and monotone constraints on any ensemble that goes live. Take the logistic model with discovered interactions forward as a challenger in its own right.

---

## Part 10 — Fairness

A credit model decides who gets money. Even with no protected attribute among its inputs, it can treat groups differently through features correlated with them. The book has no gender or religion, and should not; it has age, employment type and city tier, which are enough to show the method. Here is the tuned boosting model at its profit cut-off from Part 12, on test:

| Group | Loans | Approval rate | Good borrowers approved | Defaulters declined | Mean predicted PD | Actual default rate |
|---|---:|---:|---:|---:|---:|---:|
| Age under 30 | 1,366 | 91.0% | 92.8% | 35.7% | 5.56% | 6.15% |
| Age 30 and over | 4,788 | 92.4% | 94.2% | 40.2% | 5.08% | 5.24% |
| Salaried | 4,452 | 93.5% | 95.1% | 37.4% | 4.61% | 4.92% |
| Self-employed | 1,702 | 88.4% | 90.7% | 42.2% | 6.71% | 6.82% |
| City tier 1 | 2,842 | 93.2% | 95.3% | 45.2% | 4.99% | 5.14% |
| City tier 3 | 1,239 | 89.8% | 91.4% | 36.1% | 5.74% | 5.81% |

Three definitions of fairness, and each reads the table differently.

| Definition | Asks | Here |
|---|---|---|
| **Demographic parity** | Are approval rates equal? | No: self-employed 88.4% against salaried 93.5%; ratio 0.95 |
| **Equal opportunity** | Are *good* borrowers approved at equal rates? | Close: under-30s 92.8% against 94.2% |
| **Calibration within groups** | Does a given PD mean the same risk in every group? | Mostly: under-30s are *under*-predicted, 5.56% against 6.15% |

They cannot all hold at once when groups have different default rates — a known impossibility result — so the lender must choose which to monitor, and write the choice down. For credit, the common position is calibration within groups plus a check that approval ratios do not fall below a threshold; one widely cited convention flags a ratio below 0.8, the **four-fifths rule**. Every ratio here is above 0.94.

The under-30 line is worth a second look. The model predicts younger borrowers as *safer* than they turn out to be, so it slightly over-approves them — a calibration failure that happens to favour the group. A single calibration across the whole book hides errors like this; checking by group finds them.

**Decision, Part 10:** fairness is measured, not assumed — approval ratio, good-borrower approval rate and calibration, by group, every quarter. Features that proxy for protected characteristics are reviewed before use. No group here fails the four-fifths convention.

---

## Part 11 — Learning without a target

Everything so far is supervised: each loan came with its outcome. **Unsupervised learning** looks for structure in the features alone — useful for segmentation, for spotting unusual applications, and for compressing many features into few.

### k-means: segments

**k-means** places k centres and assigns each loan to the nearest, then moves each centre to the mean of its loans, and repeats. It minimises the total squared distance from loans to their centres, the **inertia**:

$$
\text{Inertia} = \sum_{i=1}^{n} \lVert x_i - \mu_{c(i)} \rVert^2
$$

where:

- **xᵢ** — loan i's standardised features
- **μ_{c(i)}** — the centre of the cluster loan i is assigned to

| Clusters, k | 2 | 3 | 4 | 5 | 6 | 8 |
|---|---:|---:|---:|---:|---:|---:|
| Inertia | 229,228 | 206,055 | 190,910 | 178,320 | 168,474 | 153,082 |

Inertia always falls as k rises; the **elbow** — where it stops falling steeply — is where extra clusters stop earning their keep. Here there is no sharp elbow: the features are nearly independent, so the data has no natural clumps. That is a finding, not a failure. Taking k = 4 for a readable segmentation, fitted on seven standardised application features and with no knowledge of outcomes:

| Segment | Loans | Distinguishing trait | Default rate |
|---:|---:|---|---:|
| A | 6,507 | Every loan has at least one NACH bounce | 8.5% |
| B | 11,855 | No bounces; long tenure with employer, 138 months on average | **2.8%** |
| C | 11,705 | No bounces; short tenure, 42 months | 4.0% |
| D | 7,449 | Many recent enquiries, 2.7 on average | 6.8% |

The segments were found without the target, yet their default rates range threefold — bounces and credit-hungry behaviour mark risk. Uses: separate models or cut-offs per segment, marketing, and **anomaly detection** — an application far from every centre deserves a second look.

### PCA: compressing features

**Principal component analysis (PCA)** finds new axes — combinations of the original features — ordered by how much of the data's variance each captures. Where features are correlated, a few components hold most of the information.

| Component | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|---|---:|---:|---:|---:|---:|---:|---:|
| Share of variance | 15.4% | 14.5% | 14.4% | 14.2% | 14.1% | 13.8% | 13.6% |
| Cumulative | 15.4% | 29.9% | 44.3% | 58.5% | 72.6% | 86.4% | 100% |

Almost flat: every component carries about a seventh. Seven nearly independent features cannot be compressed. The first component — bureau score negatively, FOIR and utilisation positively — reads as a "credit stress" axis, but it holds only 15% of the variance. PCA pays off on wide, correlated data — hundreds of bank-statement ratios, bureau tradeline counts — not on seven hand-chosen features.

```python
from sklearn.cluster import KMeans
from sklearn.decomposition import PCA
Z = StandardScaler().fit_transform(features)
segments = KMeans(n_clusters=4, n_init=10, random_state=0).fit_predict(Z)
pca = PCA().fit(Z); print(pca.explained_variance_ratio_)
```

**Decision, Part 11:** no segmentation into separate models — the supervised models already capture what the segments show. k-means distance is added to monitoring as an anomaly flag; PCA is shelved until the lender has wide statement data.

---

## Part 12 — Champion and challenger

Five candidates, one decision. Every model is Platt-calibrated on validation; its profit-maximising cut-off is chosen on validation; and it is scored once on the test quarter, with the same economics as Volume 1 — 10% margin on a good loan, 55.25% loss on a bad one.

| Model | Validation AUC | Test AUC | Test Brier | Cut-off PD | Approved | Bad rate approved | Defaulters declined | Goods declined | **Test profit, ₹ lakh** |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Approve everyone | — | — | — | — | 100% | 5.44% | 0 | 0 | 1,154.3 |
| Volume 1 champion, old features | 0.711 | 0.730 | 0.0493 | 21.2% | 99.2% | 5.29% | 12 | 35 | 1,167.6 |
| Logistic, new features | 0.762 | 0.789 | 0.0462 | 13.6% | 92.7% | 3.73% | 122 | 327 | 1,298.2 |
| **Logistic + two interactions** | **0.784** | **0.808** | **0.0451** | **12.0%** | **91.2%** | **3.40%** | **144** | **400** | **1,316.5** |
| Tuned boosting | 0.781 | 0.808 | 0.0451 | 13.0% | 92.1% | 3.60% | 131 | 355 | 1,286.4 |
| Monotone boosting | 0.774 | 0.802 | 0.0452 | 13.6% | 92.6% | 3.63% | 128 | 328 | 1,292.9 |

### Is the difference real?

A single test quarter is a sample. Resample its 6,154 loans with replacement a thousand times — a **bootstrap** of the test set — and recompute each model's profit with its cut-off fixed:

| Comparison | Mean difference | Standard deviation | 95% interval | Share of resamples favouring the first |
|---|---:|---:|---|---:|
| Logistic + interactions vs tuned boosting | +₹30.3 lakh | 13.8 | +4.6 to +57.9 | 98.7% |
| Logistic + interactions vs Volume 1 champion | +₹149.9 lakh | 26.2 | +98.4 to +200.7 | 100% |

Four readings.

**New data was worth ₹150 lakh a quarter; algorithms were worth ₹30 lakh at most.** The jump from Volume 1's champion to any model with utilisation and bounces dwarfs every difference between models.

**Equal AUC is not equal profit.** The interaction scorecard and tuned boosting tie at 0.808 on test, yet the scorecard earns ₹30 lakh more — its cut-off, chosen on validation, happens to sit better. Profit depends on the ranking *around the cut-off*, which AUC averages away. And the interval, although it excludes zero, rests on one quarter; a second quarter's evidence is needed before calling the difference permanent.

**Boosting did its job without being chosen.** Its trees found the two interactions that make the scorecard competitive, and it stands as the challenger that tells the team when the scorecard is missing something new.

**Monotone constraints cost nothing measurable in profit** — within the noise of the free model.

### The decision

| Choice | Decision | Reason |
|---|---|---|
| Champion | **Logistic regression with two interactions**, Platt-calibrated, cut-off PD 12.0% | Best on profit; ties on AUC; every coefficient explainable; simple to monitor |
| Challenger | Monotone tuned boosting, scored in parallel on every application | Catches structure the scorecard lacks; ready if it pulls ahead for two consecutive quarters |
| Retired | Volume 1's champion | ₹150 lakh a quarter behind |
| Evidence to gather | A second matured quarter | One test quarter cannot separate the top models with certainty |

That arrangement — a simple champion in production, a flexible challenger scored in the shadows, and a rule for when they swap — is standard practice in credit risk, and it is where Volume 3 begins: what happens to both models as next year's borrowers arrive.

**Decision, Part 12:** promote the interaction scorecard; run monotone boosting as challenger; re-decide on two quarters of evidence.

---

## Reference numbers

| Figure | Value | What it tells you | Part |
|---|---:|---|---|
| Volume 1 champion, cut-off chosen on test / on validation | ₹1,193.1 / 1,167.6 lakh | Choosing while looking at the test set flatters | 0 |
| Oracle vs logistic vs boosting, Volume 1 features, test AUC | 0.734 / 0.730 / 0.718 | Near the ceiling, flexibility only adds noise | 0 |
| Default rate, high FOIR and utilisation 0.5–0.8 | 23.9%, against 3.9% at low utilisation | An interaction | 0 |
| Default rate, salaried with 2+ bounces / self-employed with 2+ | 25.3% / 7.5% | An interaction | 0 |
| Root Gini, training set | 0.09419 | 2 × 0.0496 × 0.9504 | 1 |
| Best first split | Utilisation > 0.5; weighted Gini 0.09274; decrease 0.00145 | Chosen over bureau score's 0.00131 | 1 |
| Unlimited tree / best depth 6 / leaf ≥ 300 | Validation AUC 0.571 / 0.758 / 0.764 | Constrain the leaves | 2 |
| Riskiest depth-3 leaf | High utilisation, FOIR > 0.45, score ≤ 743: 33.9% | The tree finds the interaction | 2 |
| Bootstrap coverage | 63.2% of loans per tree | 1 − 1/e | 3 |
| Averaged variance, ρ 0.3, 100 trees | 0.307 of one tree's | Correlation is the floor | 3 |
| Random forest, 500 trees | OOB 0.774; validation 0.787; test 0.798 | The first challenger | 3 |
| Boosting from scratch, 300 rounds | Validation AUC 0.770 | Thirty lines of code | 4 |
| Early stopping | 139 trees; validation 0.778 | The number of trees is a result | 4 |
| Overfitted boosting | Train 1.000; validation 0.704 | Boosting does overfit | 4 |
| XGBoost / LightGBM / scikit-learn, validation AUC | 0.784 / 0.783 / 0.777 | Library matters less than settings | 4 |
| k-NN at k = 500, scaled / k = 200 unscaled | 0.782 / 0.640 | Scale or fail | 5 |
| SVM, default / weighted with C = 0.1 | 0.556 / 0.762 | Fragile on imbalance | 5 |
| Balanced class weights, boosting | AUC 0.778 → 0.781; mean PD 5.0% → 37.5% | Rebalancing breaks probabilities | 6 |
| Prior correction | ln 19.18 = 2.954 subtracted from the log-odds | Restores the base rate | 6 |
| Tuning | CV 0.759 → 0.776 ± 0.017; top five within 0.004 | Real gain, and a flat top | 7 |
| Platt parameters | a = 1.036, b = 0.141 | Level shift, spread already right | 8 |
| Test Brier, raw / Platt / isotonic | 0.04526 / 0.04512 / 0.04541 | Two parameters beat a step function on 332 defaults | 8 |
| Permutation importance, utilisation / bureau / city tier | 0.084 / 0.083 / −0.001 | New data leads | 9 |
| Worked applicant | SHAP total +0.345; PD 58.5% | Contributions add up exactly | 9 |
| Monotone constraints | Test AUC 0.808 → 0.802 | The price of defensibility | 9 |
| Logistic with two interactions | Test AUC 0.808 | Matches boosting | 9 |
| Approval ratio, self-employed to salaried | 0.95 | Above the four-fifths convention | 10 |
| k-means, k = 4 | Segment default rates 2.8% to 8.5% | Structure without a target | 11 |
| PCA, first component | 15.4% of variance | Nearly independent features do not compress | 11 |
| Champion profit, test quarter | ₹1,316.5 lakh | Logistic + interactions | 12 |
| Champion over boosting / over Volume 1 | +₹30.3 lakh ± 13.8 / +₹149.9 lakh ± 26.2 | Data beats algorithms | 12 |

All figures come from the synthetic book of Volume 1, Part 2 extended by the code in Part 0, with the library versions in Part 13. The economics are Volume 1's illustrative assumptions.

---

## Glossary

| Term | Plain meaning | In this volume | Part |
|---|---|---|---|
| **Bagging** | Training many models on bootstrap samples and averaging them | 100 full trees: 0.555 → 0.741 | 3 |
| **Bootstrap sample** | n rows drawn with replacement from n | 63.2% of loans each | 3 |
| **Calibration** | Mapping scores so predicted probabilities match observed rates | Platt on validation | 8 |
| **Decision tree** | A model that predicts by a sequence of yes-or-no questions | Depth 3, eight leaves | 1 |
| **Demographic parity** | Equal approval rates across groups | 88.4% vs 93.5% | 10 |
| **Early stopping** | Stopping boosting when held-out loss stops improving | 139 trees | 4 |
| **Equal opportunity** | Equal approval rates for good borrowers across groups | 92.8% vs 94.2% | 10 |
| **Gini impurity** | 1 − Σ p², how mixed a node is | 0.09419 at the root | 1 |
| **Gradient boosting** | Adding trees in sequence, each fitted to the current errors | The challenger | 4 |
| **Hyperparameter** | A setting chosen before training | Learning rate, leaf size | 7 |
| **Interaction** | A feature whose effect depends on another feature's value | Utilisation × high FOIR | 0 |
| **Irreducible error** | Randomness no available feature can explain | Oracle AUC 0.734 | 0 |
| **Isotonic regression** | A non-decreasing step-function calibration | 44 steps, over-fitted | 8 |
| **k-means** | Clustering by nearest centre | Four segments | 11 |
| **k-NN** | Predicting from the k most similar past cases | 0.782 at k = 500 | 5 |
| **Monotone constraint** | Forcing the output to move one way with a feature | Never up with bureau score | 9 |
| **NACH bounce** | A failed automatic EMI debit | Salaried red flag | 0 |
| **Nested cross-validation** | An outer loop scoring the whole tuning procedure | For honest tuned estimates | 7 |
| **Out-of-bag** | Loans a bootstrap tree never saw, used to score it | OOB AUC 0.774 | 3 |
| **Partial dependence** | Average prediction as one feature is varied | Utilisation at two FOIR levels | 9 |
| **PCA** | New axes ordered by variance captured | 15.4% on the first | 11 |
| **Permutation importance** | Drop in a metric when a feature is shuffled | Utilisation 0.084 | 9 |
| **Platt scaling** | Logistic calibration of a model's log-odds | a = 1.036, b = 0.141 | 8 |
| **Pseudo-residual** | y − p: the error boosting fits next | 0.9504 for a defaulter at round 0 | 4 |
| **Random forest** | Bagged trees with random feature subsets at each split | 500 trees, 0.787 | 3 |
| **Reason codes** | The top adverse contributions given to a declined applicant | From SHAP or coefficients | 9 |
| **SHAP value** | A feature's fair share of one prediction, summing exactly | +1.672 for utilisation | 9 |
| **SMOTE** | Synthesising minority examples by interpolation | Changed nothing useful | 6 |
| **SVM** | Widest-margin boundary, curved by a kernel | 0.762 after weighting | 5 |

---

## Recall check

1. Volume 1's cut-off earned ₹1,193.1 lakh chosen on test and ₹1,167.6 lakh chosen on validation. Which is honest, and why does the other flatter?
2. Why did boosting score below logistic regression on Volume 1's features, and what does the oracle AUC of 0.734 tell you to do next?
3. Read Part 0's two tables. Name the two interactions and the threshold, and why a linear model misses them.
4. Compute the root Gini, and the weighted Gini of the utilisation > 0.5 split. Why did it beat the bureau-score split?
5. Why does an unlimited tree score 1.000 on training and 0.571 on validation? Which constraint matters most for probabilities, and why?
6. Read the riskiest depth-3 leaf. What did the tree find that nobody told it?
7. Derive the 63.2% bootstrap coverage. What is out-of-bag scoring for?
8. From ρσ² + (1 − ρ)σ²/B, explain why more trees stop helping and what random forests change to go further.
9. Write the boosting update and the pseudo-residual. What is every defaulter's residual at round 0?
10. Why does a forest not overfit as trees are added while boosting does? What does early stopping decide?
11. Unscaled k-NN scored 0.640. Why? Give three reasons k-NN is not the choice for scoring loan applications.
12. Why did the default SVM barely beat guessing, and what brought it to 0.762?
13. Balanced class weights left AUC flat and raised the mean PD to 37.5%. Explain both, and apply the prior correction.
14. Why was rebalancing believed necessary, and what handles imbalance instead? When is rebalancing genuinely useful?
15. Why must SMOTE sit inside the cross-validation pipeline?
16. Tuning moved CV AUC from 0.759 to 0.776 ± 0.017, and the top five were within 0.004. What should you conclude about "the best" settings?
17. How does tuning overfit, and what does nested cross-validation estimate?
18. Platt gave a = 1.036, b = 0.141. What does each say about the model? Why did isotonic do worse here?
19. What does permutation importance measure, and when does it mislead?
20. State SHAP's additivity property. Rebuild the applicant's PD from the base value and contributions.
21. Read the partial-dependence table. Why is low utilisation at high FOIR reassuring, and why is the top flat?
22. What does a monotone constraint fix, and what did it cost here?
23. The logistic model with two interactions matched boosting. Where did the interactions come from, and why does FOIR's own coefficient turn negative?
24. Name three definitions of fairness, and read the self-employed and under-30 rows against each. Why can they not all hold?
25. Why did k-means show no elbow, and what did its segments reveal? Why did PCA not compress these features?
26. The top two models tie on AUC but differ by ₹30.3 lakh. How can that be, and what does the bootstrap say?
27. State the champion–challenger arrangement chosen, and the rule for swapping.

---

## The compression

A model can only be as good as its information. On Volume 1's features the logistic model sat within 0.004 of the best AUC any model could reach, and boosting did worse by fitting noise; the first lesson of this volume is that near the ceiling of the data, the next gain comes from new data. The lender bought card utilisation and NACH bounces, which carried an interaction with FOIR, an interaction with employment and a threshold — shapes a linear model cannot find unless someone writes them.

A decision tree finds them by asking questions, each chosen greedily to reduce Gini impurity most. Unconstrained it memorises; with enough loans per leaf it reaches 0.764 and, read at depth three, points straight at high utilisation among high-FOIR borrowers. Single trees are unstable, so they are combined. Bagging averages trees grown on bootstrap samples; averaging removes variance down to a floor set by how correlated the trees are, and random forests lower that floor by hiding features at random. Boosting instead grows trees in sequence, each fitted to the residuals of the last in log-odds; it overfits if run too long, so early stopping chooses how many trees, and a slow learning rate with small trees and large leaves wins the search. The libraries differ less than their settings.

k-NN and SVMs belong in the syllabus and not in this pipeline: one must scale and search the whole book to score an applicant, the other needs weighting and calibration before it even competes.

Imbalance is not a training problem here. Rebalancing barely moved ranking and turned a 5% book into a 38% one; calibrated probabilities and a profit-based cut-off handle imbalance completely. Tuning is itself fitting: it is done by cross-validation on training folds, reported with its spread, and its winner is one of a flat plateau of equals. Probabilities are recalibrated on validation with two parameters, because a step function over a few hundred defaults over-fits.

Explanation turns an ensemble into a decision a lender can defend: permutation importance for what matters, SHAP for why this applicant, partial dependence for how, and monotone constraints so the model never contradicts credit sense. Then the trees' discoveries were written into the scorecard as two interaction features, and the scorecard matched the ensemble. Fairness is measured by group — approval, good-borrower approval, calibration — knowing that the definitions conflict. Unsupervised methods found risk segments without a target and showed that seven independent features cannot be compressed.

Judged on profit, with cut-offs chosen on validation and uncertainty from a bootstrap, new data was worth ₹150 lakh a quarter and the choice of algorithm at most ₹30 lakh. The scorecard with discovered interactions goes live; monotone boosting runs beside it as challenger. Volume 3 follows both into production, where next year's borrowers are not this year's.

---

## Part 13 — State of play, as at 19 September 2026

Everything in this Part changes on the scale of months. Parts 1 to 12 do not depend on any row here being current. Every row is **[verify]**, as at 19 September 2026, against the linked source before it is relied on.

### Libraries

| Fact | Practical consequence | Source |
|---|---|---|
| The numbers in this volume were produced with scikit-learn 1.8.0, NumPy 2.4.4, pandas 3.0.2, XGBoost 3.4.1, LightGBM 4.7.0, SHAP 0.52.0 and imbalanced-learn 0.14.2, on Python 3.12. [verify] | Pin these to reproduce every figure | Local environment |
| scikit-learn 1.9 is the latest release. [verify] | Nothing here depends on 1.9 features | scikit-learn.org — release highlights 1.9 |
| scikit-learn's histogram gradient boosting handles missing values natively and accepts monotone constraints keyed by feature name. [verify] | Part 4 passes missing bureau scores straight in; Part 9's constraints | scikit-learn documentation |
| XGBoost and LightGBM results can shift slightly between versions through changed defaults and threading; set seeds and pin versions. [verify] | Part 4's table may move in the third decimal | Library release notes |

### Methods and conventions

| Fact | Practical consequence | Source |
|---|---|---|
| Random forests (Breiman, 2001); gradient boosting machines (Friedman, 2001); XGBoost (Chen and Guestrin, 2016); LightGBM (Ke et al., 2017); SMOTE (Chawla et al., 2002); SHAP (Lundberg and Lee, 2017). [verify] | The original descriptions of Parts 3, 4, 6 and 9 | Original papers |
| Common fairness definitions cannot all hold at once when groups' base rates differ (Kleinberg, Mullainathan and Raghavan, 2016; Chouldechova, 2017). [verify] | Part 10's choice must be made and documented | Original papers |
| The four-fifths rule originates in US employment-selection guidance, and is used in credit as a screening convention rather than an Indian legal test. [verify] | Part 10's 0.8 threshold is a convention | US Uniform Guidelines on Employee Selection Procedures |
| The margin, LGD and EAD figures are Volume 1's illustrative assumptions. | Replace with the lender's own before choosing a cut-off | — |

### Refreshing this Part

| Each quarter | How | Practical note |
|---|---|---|
| Re-run every snippet on pinned and on current versions | Compare with the reference numbers | Third-decimal differences in boosting are expected |
| Re-run the champion–challenger table on the newest matured quarter | Part 12's rule needs two quarters | The decision can change on evidence |
| Update the as-at date in this heading | | Keep `verified: false` until an independent check |

### Sources consulted for this Part

| Source | Link | Backs |
|---|---|---|
| scikit-learn — release highlights 1.9 | https://scikit-learn.org/stable/auto_examples/release_highlights/plot_release_highlights_1_9_0.html | Latest release |
| scikit-learn — release highlights index | https://scikit-learn.org/stable/auto_examples/release_highlights/ | Release list |
