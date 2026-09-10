---
title: "Treasury and Liquidity Regulatory Reporting — The Workstream"
description: "How a liquidity reporting change programme actually runs. Who owns which number, the documents and who signs them, new data sourcing and ETL design, data quality triage, downstream extract validation, interface and release coordination, test packs and defect management, and prioritisation."
series: masterclass
status: live
updated: 2026-09-10
verified: false
tags:
  - liquidity reporting
  - treasury
  - regulatory reporting
  - business analysis
  - etl
  - uat
---

## Part 0 — What this workstream is

Volume 2 built the liquidity numbers: an LCR of 159%, an NSFR of 125%, a structural liquidity statement with a −29% cumulative gap against a −20% limit. That is the **content**.

This note is the **workstream** — the programme that produces those numbers every cycle, and the change programme that replaces how they are produced. It assumes the mechanics from Volume 2 and adds nothing to them. Everything here is about the machine, the people and the documents.

The running scenario throughout:

> The bank produces its liquidity returns semi-manually. Treasury pulls balances into a spreadsheet, applies run-off rates by hand, and reconciles to finance by email. A programme is under way to source the data properly, compute in a vendor engine, and submit from a controlled platform. You are the business analyst.

| Part | The question | Maps to |
|---|---|---|
| **1** | What actually gets produced, and when? | The reporting estate and calendar |
| **2** | Who owns which number? | Stakeholders and the disputes between them |
| **3** | What do I write, and who signs it? | Concept paper, methodology paper, BRD, mapping spec |
| **4** | Where does the data come from? | New data sourcing and ETL design |
| **5** | The data is wrong. Now what? | Data quality triage |
| **6** | How do I know the extract is right? | Downstream extract validation |
| **7** | Who else does my change break? | Interfaces, dependencies, release coordination |
| **8** | How do I prove it works? | Test packs, UAT coverage, defect management |
| **9** | What do I do first? | Prioritisation, architecture fit, the first thirty days |

---

## Part 1 — The reporting estate

### What gets produced

| Return | Content | Frequency | Recall |
|---|---|---|---|
| **LCR** | HQLA over stressed 30-day net outflows | Monthly, often daily internally | ₹497 crore over ₹312.4 crore = 159% |
| **NSFR** | Available over required stable funding | Quarterly | ₹1,255 crore over ₹1,003 crore = 125% |
| **Structural liquidity statement** | The eleven-bucket maturity ladder | Fortnightly | The −29% cumulative gap in the 15–30 day bucket |
| **Interest rate sensitivity** | The repricing gap | Monthly | −₹300 crore one-year gap; −₹3.0 crore of NII per 100 bp |
| **Form A** | NDTL, CRR and SLR maintenance | Fortnightly | ₹58 crore of CRR; the ₹400 crore G-sec book |
| **Intraday liquidity** | Peak intraday usage, throughput, timing of payments | Monthly or on request | Not in the volumes — below |
| **Internal liquidity pack** | Buffers, concentration, early warning indicators, limit usage | Daily to ALCO | The management view, not a return |

Names, thresholds and frequencies subject to change. [verify]

**Intraday liquidity** is the one gap. The LCR asks whether the bank survives thirty days; intraday asks whether it can meet payments at 11am. A bank can be perfectly liquid on a daily basis and still fail to settle because its inflows arrive after its outflows are due. Reported measures are peak usage, available intraday liquidity, and the timing of time-critical obligations. It is sourced from payment systems, not from the balance sheet, which is why it is usually a separate feed and a separate headache.

### The internal pack matters more than the return

A supervisor sees the LCR monthly. **Treasury manages the position daily**, off the internal pack: the rupee stock of HQLA, the daily net funding position, limit usage, and early warning indicators. Volume 2 made the point with arithmetic — the bank paid out ₹270 crore and its LCR *rose* from 159% to 187%, because the runnable funding had run.

For the workstream this has a direct consequence. **The daily internal pack has a harder deadline than the regulatory return** and usually less tolerance for error, because someone makes a funding decision on it that morning. A change programme that treats the regulatory return as the deliverable and the internal pack as a by-product has the priority backwards.

### If the estate is not Indian

Set aside the mechanics; the names still matter in a conversation.

| India | UK / EU equivalent |
|---|---|
| LCR, NSFR | LCR, NSFR — same Basel origin |
| Structural liquidity statement | ALMM maturity ladder |
| Internal liquidity pack | PRA110 cash flow mismatch, weekly or monthly |
| ICAAP liquidity chapter | ILAAP, a separate document |
| Form A — CRR, SLR | No direct equivalent; reserve requirements differ |
| Capital adequacy, asset classification returns | COREP; FINREP for financial reporting |

Subject to change. [verify] The calculations, the data problems and everything in Parts 2 to 9 transfer intact.

---

## Part 2 — Who owns which number

Most delivery failures on this workstream are a dispute about ownership that nobody wrote down.

| Party | Owns | Does not own | You need them for |
|---|---|---|---|
| **Treasury** | The funding position, HQLA composition, behavioural assumptions, the internal pack | The general ledger, the source systems | Assumption sign-off, curve and haircut inputs, sanity-checking output |
| **Country Finance** | The general ledger, statutory reporting, the reconciliation baseline | Risk methodology | The ledger balances every liquidity number must tie to |
| **Group Liquidity Regulatory Reporting** | The return itself, the interpretation of the rule, the submission | The data, the systems | Requirements sign-off, template mapping, the attestation |
| **Risk** | Limits, stress scenarios, the liquidity risk framework | Production of the number | Limit definitions and the scenarios the engine must run |
| **BAU / run team** | Producing the numbers each cycle today | The change | Current-state knowledge, workarounds, and their calendar |
| **Technology** | The pipeline, the platform, the release | What the number should be | Build, feasibility, release slots |
| **Vendor** | The engine, its regulatory content updates | The bank's data or its configuration | Product capability, update roadmap, defect fixes |

### The disputes, and how they are settled

| Dispute | Sounds like | Settled by |
|---|---|---|
| **Whose number is right?** | Treasury's spreadsheet says ₹497 crore of HQLA, the engine says ₹491 crore | Neither. Reconcile line by line and name the difference — a haircut, a security excluded, a valuation date |
| **Who owns the behavioural assumption?** | Both ALM and Treasury quote a core deposit figure | One model, one owner, named in the specification as a dependency — never restated |
| **Is this a defect or a change?** | "The engine gives a different answer than the old spreadsheet" | Compare both against the **written interpretation**. If there is none, that is the actual defect |
| **Who signs off the return?** | Everyone assumes someone senior | The attesting officer, named in advance, whose refusal to sign is the control working |

**The pattern:** almost every dispute dissolves into "what does the rule actually require, and where is that written down." Which is why Part 3 exists.

---

## Part 3 — The documents

Four artefacts, in order. Each is narrower than the last, and each is signed by someone different.

| Document | Answers | Length | Signed by |
|---|---|---|---|
| **Concept paper** | What problem are we solving and what is the target state? | 5–15 pages | Programme sponsor, Treasury, Reg Reporting |
| **Methodology paper** | How is this number to be calculated, and on what regulatory basis? | 10–30 pages | Risk or Treasury methodology owner, Reg Reporting |
| **Business requirements document (BRD)** | What must the system do? | 30–100 pages | All impacted business stakeholders, then Technology accepts |
| **Mapping specification** | Which field, from where, transformed how? | A spreadsheet, hundreds of rows | Named business owner per rule |

### What goes in each

**Concept paper.** Current state and its pain, the target state, scope and explicit non-scope, the impacted returns and entities, options considered and the recommendation, benefits, high-level plan, key risks. Its job is to get agreement on *what is being built* before anyone argues about fields.

**Methodology paper.** The regulatory reference, the calculation stated unambiguously, the assumptions and where they come from, worked examples with numbers, treatment of edge cases, and known limitations. This is where the bank's own **interpretation** of an ambiguous rule is recorded — and the absence of this document is the single most common root cause of "the number changed and nobody can say why."

**BRD.** Scope, process flows current and target, functional requirements each with a unique ID, data requirements, non-functional requirements (volume, timing, retention, audit), reporting outputs, controls, assumptions, dependencies, and a traceability matrix.

**Mapping specification.** The seven columns from Volume 2 — source system, source field, target field, transformation, null and default handling, owner, regulatory reference.

### A requirement, written properly

Bad, and typical:

> The system should correctly classify deposits for LCR purposes.

Untestable. "Correctly" according to what? Here is the same requirement written so a developer can build it and a tester can prove it.

| Field | Content |
|---|---|
| **ID** | LCR-DEP-014 |
| **Requirement** | The system shall assign an LCR counterparty category to every deposit balance, from the values: retail stable, retail less stable, non-financial corporate, financial institution, operational |
| **Rule** | Category is derived from customer type, deposit insurance eligibility and balance size, per the methodology paper section 4.2 |
| **Run-off applied** | Retail stable 5%, retail less stable 10%, non-financial corporate 40%, financial institution 100% [verify] |
| **Exception** | Where category cannot be derived, the record is **rejected to the exception queue**. It must not default to the lowest run-off rate |
| **Acceptance criteria** | Every deposit balance in the reporting population carries exactly one category; the sum of categorised balances equals the ledger deposit balance; no record defaults silently |
| **Source of truth** | Customer master, deposit master |
| **Owner** | Head of Group Liquidity Regulatory Reporting |
| **Regulatory reference** | LCR — outflow categories [verify] |

Note the exception row. **Defaulting an underivable deposit to retail stable would understate outflows** — and Part 5 puts a number on exactly how much.

---

## Part 4 — New data sourcing and ETL design

### What "new data sourcing" analysis actually means

The engine needs a field the bank does not currently supply. That sentence starts a sequence, and doing it in order is most of the job.

| # | Step | What you produce |
|---:|---|---|
| 1 | **Confirm the requirement** | Which return, which cell, which calculation needs this field, and what happens if it is absent |
| 2 | **Find candidate sources** | Which systems hold something like it — usually more than one, usually disagreeing |
| 3 | **Assess each candidate** | The checklist below |
| 4 | **Nominate the golden source** | One system, with a reason, agreed with the data owner |
| 5 | **Profile the actual data** | Run it. Counts, nulls, distinct values, outliers, history depth |
| 6 | **Gap analysis** | What is missing, and the remediation route for each gap |
| 7 | **Specify the feed** | Frequency, timing, volume, format, full or incremental, reconciliation totals |
| 8 | **Write the mapping rule** | Source to target, with null handling |

### The source assessment checklist

| Question | Why it decides |
|---|---|
| Is the field populated, and how often is it null? | A field that exists and is 40% null is not a source |
| Who maintains it, and why? | A field nobody uses operationally is never accurate |
| What is its update frequency and lag? | A monthly-refreshed field cannot feed a daily return |
| Is there history, and how far back? | Parallel run and back-testing need history |
| What is the extract window, and does it close before our cut-off? | The seventy-minute problem from Volume 2 |
| Is it authoritative, or a copy? | The loan system's stale collateral value looked authoritative and was not |
| What happens when it changes — is history retained? | Overwriting kills restatement and variance analysis |

That fifth row deserves emphasis because it is the failure that recurs. In Volume 2 a collateral revaluation was keyed at 23:10 while the extract ran at 22:00, and a ₹2.41 crore difference took a lineage walk across six layers to explain. **Extract timing is a requirement, not an operational detail**, and it belongs in the feed specification with the cut-off written down.

### ETL, plainly

**Extract, transform, load** — the three things that happen between a source system and a usable table.

| Stage | What happens | The decisions |
|---|---|---|
| **Extract** | Data is pulled out of the source, unchanged | Full or incremental; timing; what triggers it; what proves it completed |
| **Transform** | Cleansed, standardised, joined, enriched, business rules applied | Every mapping rule lives here; this is where the specification becomes code |
| **Load** | Written into the target, partitioned by reporting date | Insert-only or overwrite; how restatements are handled |

| Choice | Full extract | Incremental extract |
|---|---|---|
| What is sent | Every record, every run | Only what changed |
| Volume | Large | Small |
| Risk | Slow; may not fit the batch window | Missed changes are invisible; deletes are easily lost |
| Reconciliation | Trivial — compare totals | Harder — needs a periodic full refresh to prove |
| Use when | Volumes allow it, for a liquidity population that must be complete | Volumes are large and change is genuinely tracked |

For liquidity reporting, **full extracts are usually worth the cost**, because completeness is the thing being asserted and an incremental feed that silently drops a deposit closure understates outflows forever.

### Four things to specify that are always forgotten

**The batch window.** When does the feed start, how long does it run, and what is the latest it can finish before the engine must start? Write the chain down as clock times, not as a sequence.

**Late-arriving data.** A trade booked after cut-off but dated before it. Is it in this cycle or next? Whichever it is, the rule must be written, because the two produce different numbers and both are defensible.

**Backdating and restatement.** A correction to a prior period. Does the platform recompute history or carry the correction forward? This decides whether reporting-date partitioning is required, and it is far cheaper to answer before the build.

**Reconciliation totals on the feed itself.** Every extract should carry a record count and a control sum for the key amount, generated by the source. Without them, Part 6 has nothing to check against.

---

## Part 5 — Data quality

### The three kinds of wrong

Before fixing anything, establish which of three things happened. They have different owners and different fixes.

| Type | Symptom | Owner | Fix |
|---|---|---|---|
| **Source data defect** | The value in the source system is wrong or missing | Business operations | Correct at source, then a control to stop recurrence |
| **Transformation defect** | The source is right, the target is wrong | Technology | Fix the code against the specification |
| **Definition defect** | Both are "right" and they disagree | Business | The specification is ambiguous. Rewrite it, then re-test |

**The third is the one that eats programmes**, because it presents as a technical bug and is escalated to Technology, who correctly demonstrate the code matches the spec, and the ticket bounces for a month. The tell is that two people can each defend their number.

### The rule types

| Rule | Checks | Liquidity example |
|---|---|---|
| **Completeness** | Nothing missing | Every deposit account in the ledger appears in the liquidity population |
| **Validity** | Values are from the allowed set | Counterparty category is one of the five permitted values |
| **Consistency** | Related fields agree | A deposit flagged operational has an operational relationship record |
| **Accuracy** | Ties to an independent source | Deposit balances tie to the general ledger |
| **Timeliness** | Data is current | Every feed's business date equals the reporting date |
| **Uniqueness** | No duplication | One row per account per reporting date |

### One field, twenty-one points of LCR

Here is why counterparty classification is the highest-risk field on this workstream.

Suppose ₹50 crore of deposits from a financial institution have been classified as retail stable — a plausible defect, because the counterparty type was null and something defaulted it.

| | Run-off | Outflow on ₹50 crore |
|---|---:|---:|
| As classified — retail stable | 5% | ₹2.5 crore |
| As it should be — financial institution | 100% | ₹50.0 crore |
| **Understatement** | | **₹47.5 crore** |

| | Working | Value |
|---|---|---:|
| Reported net cash outflows | As filed | ₹312.4 crore |
| Corrected | 312.4 + 47.5 | ₹359.9 crore |
| Reported LCR | 497 ÷ 312.4 | **159%** |
| Corrected LCR | 497 ÷ 359.9 | **138%** |

**Twenty-one points of LCR from one attribute on ₹50 crore — under 4% of the deposit book.** Nothing else in the calculation is wrong. This is the number to keep in your head when someone proposes that an underivable counterparty type should default to a sensible value rather than reject.

### The exception queue

Records that fail a rule go to an exception queue rather than into the calculation with a guessed value.

| Stage | What happens |
|---|---|
| **Raised** | The rule fires; the record is held with the rule ID and the reason |
| **Triaged** | Classified as source, transform or definition defect |
| **Assigned** | To a named owner with a due date |
| **Resolved** | Fixed at source, code changed, or spec clarified |
| **Overridden** | Manually classified for this cycle, logged with who, when and why |
| **Aged** | Anything open beyond a threshold escalates |

**Track the ageing profile, not the count.** A stable count of fresh exceptions is a control working. A growing population of old ones is the system quietly failing while the team compensates by hand — the same signal as recurring manual adjustments in Volume 2, and supervisors read it the same way.

---

## Part 6 — Validating downstream extracts

### What is being validated

A **downstream extract** is any file leaving your platform for something else — the engine, the reporting layer, the submission tool, a data warehouse, another region's system. Each is a boundary where records can vanish silently.

Validate every one on four layers, in this order. Stop at the first failure.

| Layer | Question | How |
|---|---|---|
| **1 — Completeness** | Did everything arrive? | Record count and control sum, source versus target |
| **2 — Reconciliation** | Does it agree with an independent source? | Tie to the general ledger and explain differences |
| **3 — Rule** | Did the transformations apply correctly? | Recompute a sample by hand from the specification |
| **4 — Regression** | Did anything that worked stop working? | Compare against the prior cycle and explain every movement |

### Worked: a completeness break

| Layer | Accounts | Balance ₹ crore |
|---|---:|---:|
| Source loan master, control totals from the feed | 40,000 | 1,000.00 |
| Staging, as loaded | 40,000 | 1,000.00 |
| Risk data warehouse | 39,988 | 998.40 |
| Engine input extract | 39,988 | 998.40 |
| **Break** | **12** | **1.60** |

Staging matches source, so the extract was complete. The break is between staging and the warehouse — a transformation, not a feed.

Investigating: twelve accounts carry a null counterparty type and were rejected by the validity rule. **The rule worked.** The defect is upstream, in a source field left unpopulated at onboarding.

Three separate outcomes follow, and a good BA produces all three:

| Horizon | Action |
|---|---|
| **This cycle** | Classify the twelve manually, log the override, and confirm the ₹1.60 crore is immaterial to the ratio |
| **Next cycle** | Raise the source defect with operations, with the account list |
| **Permanently** | A mandatory-field control at onboarding, so the field cannot be left null |

Fixing only the first is how the same twelve accounts appear every month forever.

### Control totals are the cheapest control you will ever build

Every feed carries a count and a sum generated at source. Every hop compares them. When a number is wrong, this immediately tells you **which hop** to look at — which is the difference between a ten-minute investigation and the six-layer lineage walk from Volume 2.

Specify it once, in the feed specification, for every feed. It is the single highest-return line a BA writes on this workstream.

---

## Part 7 — Interfaces, dependencies and releases

### The dependency map

Liquidity reporting sits downstream of nearly everything, so almost any change anywhere reaches it.

| Upstream change | Reaches liquidity how |
|---|---|
| A new deposit product | Needs a counterparty category and a run-off treatment before it can be sold |
| A core banking upgrade | Field names, formats or extract timings change |
| A new booking entity or branch | Population completeness; possibly a new feed |
| An ALM model recalibration | Behavioural life changes, so buckets, EVE and FTP all move together |
| A vendor engine release | Regulatory logic changes; requires parallel run |
| A ledger chart-of-accounts change | Every reconciliation mapping breaks at once |

**Maintain this as a live document.** Its practical use is defensive: when a project you have never heard of announces a go-live, you can say in one minute whether it touches you.

### Two calendars that collide

| | Release calendar | Reporting calendar |
|---|---|---|
| Driven by | Project milestones | Regulatory deadlines |
| Flexible? | Somewhat | Not at all |
| Typical rhythm | Monthly or fortnightly releases | Daily internal, fortnightly SLS and Form A, monthly LCR, quarterly NSFR |

The collisions are predictable, so they are scheduled around rather than discovered:

| Period | Rule |
|---|---|
| Quarter-end and the following ten working days | **Blackout.** No production changes |
| Fortnightly reporting dates and the two days after | No changes to feeds or mappings |
| Daily internal pack window each morning | No deployment during the batch |

And the resourcing rule from Volume 2 applies without modification: **run always wins in the short term**, because its deadline is real and immediate. A change programme staffed with people who also carry the close will slip every close. Do not schedule a design workshop for the first week after quarter-end, and do not ask the person doing day-4 reconciliation to review a specification that week.

### Coordinating across centres

Where the workstream spans locations — a group function in one country, country finance in another, technology in a third — three things carry most of the risk.

| Risk | Control |
|---|---|
| **Local interpretation drift** | One methodology paper, group-owned. Local variations documented as explicit exceptions, not absorbed silently |
| **Sequencing across time zones** | The batch chain written as clock times **in a stated zone**, with each centre's cut-off marked |
| **Divergent reference data** | One golden source per element, group-wide, however inconvenient locally |

The first is the expensive one. Two centres implementing the same rule slightly differently produces a group number that cannot be reconciled to the sum of its parts, and the discovery usually happens under deadline.

### The RAID log

| Item | Definition | Discipline |
|---|---|---|
| **Risk** | Might happen | Owner, likelihood, impact, mitigation, review date |
| **Assumption** | Taken as true without proof | Must be validated or converted to a risk with a date |
| **Issue** | Has happened | Owner, action, target date |
| **Dependency** | Needs something from someone else | Named person both sides, and a date |

The **assumptions** row is the one that bites. "We assume the customer master holds a reliable counterparty type" is exactly the assumption that, unvalidated, becomes the twenty-one-point LCR error in Part 5. Every assumption needs a date by which it is proven or escalated.

---

## Part 8 — Testing, and proving it works

### The test pack with predefined results

The core artefact, and the JD's phrase for it is exact: a pack of scenarios where **the expected answer is written down before the system is run.**

Why it must be that way round: if you run the system first and then decide whether the output looks right, you are not testing, you are rationalising. Predefined results are the only way to catch a plausible wrong answer.

| Element | Content |
|---|---|
| **Scenario ID** | Traceable to a requirement ID |
| **Test data** | The specific accounts, balances and attributes |
| **Expected result** | Computed by hand from the methodology paper, with the working shown |
| **Actual result** | Filled after the run |
| **Pass / fail** | Plus a defect reference where failed |

A worked scenario:

| Field | Content |
|---|---|
| **ID** | LCR-DEP-014-T03 |
| **Requirement** | LCR-DEP-014 — deposit counterparty categorisation |
| **Scenario** | A ₹50 crore deposit from a financial institution counterparty |
| **Test data** | Account TD-88214, balance ₹50.00 crore, customer type FI, no operational relationship |
| **Expected — category** | Financial institution |
| **Expected — run-off** | 100% |
| **Expected — outflow** | ₹50.00 crore |
| **Expected — LCR impact** | Net outflows rise from ₹312.4 crore to ₹359.9 crore; LCR falls from 159% to 138% |
| **Basis** | Methodology paper section 4.2; worked in Part 5 above |

**The expected LCR impact is the row that makes the pack valuable.** A test proving one field got one value proves the field. A test proving the ratio moved to the right number proves the chain.

### Building coverage

| Coverage type | Question | For our return |
|---|---|---|
| **Requirement** | Does every requirement ID have at least one test? | Traceability matrix, no blanks |
| **Rule** | Is every branch of every rule exercised? | All five counterparty categories, not just the common two |
| **Boundary** | Are thresholds tested either side? | Day 30 versus day 31; the Level 2 cap at 40% exactly |
| **Negative** | Does bad input fail correctly? | Null counterparty type must reject, not default |
| **Volume** | Does it complete in the batch window at production scale? | Full book, not a sample |
| **End to end** | Does a single record survive the whole chain? | One deposit from source to return cell |

**Reviewing UAT coverage means checking these six, not counting test cases.** A pack of 400 cases that never exercises the reject path has not tested the control that matters most.

### Defects

| Severity | Meaning | Response |
|---|---|---|
| **Critical** | The return cannot be produced, or is materially wrong | Fix before cutover, no exceptions |
| **High** | Wrong in a specific scenario | Fix before cutover or accept with a documented workaround |
| **Medium** | Wrong in an edge case, immaterial | Fix in a later release, logged |
| **Low** | Cosmetic | Backlog |

The lifecycle is raise → triage → assign → fix → retest → close, and two disciplines make it work.

**Triage classifies before it assigns**, using the three-kinds-of-wrong table from Part 5. A definition defect sent to Technology bounces for a month.

**Retest is done by the raiser**, not the fixer, against the original predefined expected result. A defect closed on the developer's word that it is fixed is not closed.

### Parallel run and cutover

The final gate, unchanged from Volume 2 and worth restating because on a liquidity return it is the whole assurance.

Old and new produce the same return for the same period. Every difference is explained line by line and signed off **before** cutover. **An unexplained difference is a defect until proven otherwise** — because on the day of cutover the bank files the new system's number and will be asked why it changed.

The difference log is the deliverable, not a by-product. "New shows 156% where old showed 159%, because the old spreadsheet applied a 5% run-off to ₹50 crore of FI deposits that are now correctly categorised" is a **good** parallel run result: the number changed, deliberately, for a stated and approved reason.

Then cutover needs a go/no-go decision, a rollback plan that has been **tested** rather than written, heightened review of the first production cycle, and a documented handover to the run team. Projects that end at go-live rather than at the first successful production cycle leave the run team debugging someone else's build against a regulatory deadline.

---

## Part 9 — Prioritisation, architecture and where to start

### Prioritising

Everything cannot be first. Score against five factors, in this order.

| Factor | Question |
|---|---|
| **1 — Regulatory deadline** | Is there a date the regulator has set? These outrank everything |
| **2 — Risk of being wrong today** | Which number is currently produced by hand, unreconciled, or on an assumption nobody has validated? |
| **3 — Dependency** | Does something else wait on this? Golden-source and reference-data work usually unblocks several streams |
| **4 — Benefit** | Manual effort removed, control strengthened, questions answerable that are not today |
| **5 — Effort and feasibility** | Only after the first four. Cheap and useless is still useless |

The common failure is starting at factor 5 — picking the easy items to show early progress, and arriving at the deadline with the hard dependency untouched.

### Validating that the architecture fits

The JD asks you to confirm the proposed technical design is fit for business purpose. You are not reviewing the technology. You are asking seven business questions of it.

| Question | Why it is a business question |
|---|---|
| Does it hold **granular** data or pre-aggregated totals? | Granular means a new question is a query; aggregated means it is a project |
| Is it partitioned by **reporting date**? | Determines whether a prior period can be re-run or restated |
| Is staging **immutable**? | Determines whether variance analysis is possible at all |
| Can it complete inside the **batch window** at full volume? | A correct number that arrives after the deadline is not a number |
| Is **lineage** captured, or reconstructed by hand? | Determines how a challenge gets answered |
| Where do **manual adjustments** live, and are they logged? | They will exist. Undesigned, they live in spreadsheets outside the platform |
| Can it produce **history** for parallel run and back-testing? | Without it, the assurance in Part 8 cannot be performed |

Each of these has a business consequence that a design review focused on performance and cost will not surface.

### The first thirty days

| Week | Do |
|---|---|
| **1** | Read the last four submitted returns and the internal pack. Find every manual adjustment and every spreadsheet in the current process. List them |
| **2** | Meet the run team before anyone else. They know where the workarounds are and why. Map the current-state chain as clock times |
| **3** | Ask for the methodology papers. Where none exists for a material number, that is your first finding and probably your first deliverable |
| **4** | Build the dependency map and the assumption log. Put a validation date against every assumption |

**The single highest-value thing you can produce early** is a written interpretation of a rule that is currently applied by convention and documented nowhere. It costs a week, it settles arguments for years, and it is the artefact that turns "the vendor's release did that" into an answer.

---

## Artefacts and who signs them

| Artefact | Produced by | Signed by | When |
|---|---|---|---|
| Concept paper | BA with Treasury and Reg Reporting | Sponsor, Treasury, Reg Reporting | Before design |
| Methodology paper | Methodology owner with BA | Risk or Treasury, Reg Reporting | Before requirements |
| BRD | BA | All impacted business stakeholders | Before build |
| Mapping specification | BA with data owners | Named owner per rule | Before build |
| Feed specification | BA with Technology | Source system owner, Technology | Before build |
| Test strategy and plan | BA or test lead | Business and Technology | Before test |
| Test pack with predefined results | BA with the business | Business owner | Before execution |
| UAT sign-off | Business users | Business owner | Before cutover |
| Parallel run difference log | BA with run team | Reg Reporting, attesting officer | Before cutover |
| Go / no-go | Programme | Sponsor and Reg Reporting | At cutover |
| Handover to run | Programme to BAU | BAU lead | After the first clean cycle |

---

## Acronyms

| Term | Expansion |
|---|---|
| ALCO | Asset and liability committee |
| ALMM | Additional liquidity monitoring metrics |
| BAU | Business as usual |
| BRD | Business requirements document |
| COREP / FINREP | Common / financial reporting frameworks |
| ETL | Extract, transform, load |
| HQLA | High quality liquid assets |
| ILAAP | Internal liquidity adequacy assessment process |
| LCR | Liquidity coverage ratio |
| NDTL | Net demand and time liabilities |
| NSFR | Net stable funding ratio |
| RAID | Risks, assumptions, issues, dependencies |
| SLS | Structural liquidity statement |
| UAT | User acceptance testing |

---

## Recall check

1. Which has the harder deadline — the monthly LCR return or the daily internal pack? Why?
2. Treasury's spreadsheet says ₹497 crore of HQLA and the engine says ₹491 crore. What do you do first?
3. What is in a methodology paper that is in no other document, and what goes wrong when it does not exist?
4. Rewrite "the system should correctly classify deposits" as a testable requirement.
5. A field exists in two systems and they disagree. Name four questions from the assessment checklist that settle which is the source.
6. Why do liquidity feeds usually justify full extracts rather than incremental ones?
7. ₹50 crore of FI deposits are classified retail stable. Work the LCR impact, and say why "default to a sensible value" is the wrong answer.
8. Source, transform, definition. Which type of defect bounces between teams for a month, and what is the tell?
9. Staging matches source, the warehouse is 12 accounts short. Which hop is broken, and what are the three actions?
10. Name the cheapest control on the whole workstream and say what it saves you.
11. An ALM recalibration changes behavioural life. Name three numbers that move together.
12. Why must expected results be written before the system is run?
13. A UAT pack has 400 cases and no reject-path test. What has not been tested?
14. Old system 159%, new system 156%, difference explained by a corrected counterparty categorisation. Defect or not?
15. You have thirty days and no methodology paper for a material number. What is your first deliverable?

---

## The compression

Liquidity reporting sits downstream of almost everything, which means the numbers are easy and the machine is hard. The LCR, the NSFR and the maturity ladder are arithmetic that Volume 2 finished in a few pages. Producing them every cycle, from data the bank does not control, through systems nobody owns end to end, on a calendar that never moves, is the work.

Most of the difficulty is ownership rather than technology. Treasury owns the position, Finance owns the ledger, Regulatory Reporting owns the return, Risk owns the limits, Technology owns the pipeline and the vendor owns the engine — and nearly every dispute between them dissolves into "what does the rule require, and where is that written down." The document that answers it is the methodology paper, and its absence is the most common root cause of a number nobody can defend.

The data work is a sequence, not an event: confirm what the field is for, find the candidates, assess them against a checklist, nominate one golden source, profile what is actually there, size the gaps, then specify the feed with its timing and its control totals. Extract timing is a requirement — the seventy-minute gap between a valuation and an extract is not an operational detail, it is a defect waiting for a quarter-end.

When something is wrong, establish first whether the source, the code or the definition is at fault, because they have different owners and only one of them is a bug. Then validate every extract on four layers, and put a record count and a control sum on every feed, because that one line tells you which hop to look at instead of sending you on a six-layer walk.

Prove it with expected results written before the system runs, cover the reject paths rather than counting test cases, and let nothing cut over until every parallel run difference has a name and a signature.

And keep one number in your head as the argument against every convenient default: ₹50 crore of deposits in the wrong counterparty category — under 4% of the book, one attribute — moves the LCR twenty-one points. That is the whole case for rejecting a record instead of guessing at it.
