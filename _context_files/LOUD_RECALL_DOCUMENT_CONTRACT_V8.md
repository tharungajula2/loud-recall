# LOUD RECALL — DOCUMENT CONTRACT V8

Final. Replaces V1 to V7 in full.

This document is self-sufficient. A new session with no other context should be
able to read this and produce a document indistinguishable from the existing
corpus.

---

## 0. The rule above all other rules

**Never encode a tool limitation as a content rule. Fix the tool.**

V4 to V6 each fixed the previous version's overcorrection and added a new one.
The worst additions were not editorial mistakes — they were temporary renderer
gaps frozen into doctrine. LaTeX was banned because a math plugin was missing for
a fortnight. Diagrams were drawn in monospace because markdown cannot draw.
Callouts were `###` headings because there was no component layer. Every one of
those was a fifteen-minute install treated as a permanent constraint on how the
subject could be taught.

Three standing rules follow:

1. **Every prohibition states its reason and its expiry condition.** A
   prohibition whose reason has lapsed is deleted, not grandfathered.
2. **A rule is added only when the same failure appears in three separate
   documents.** One bad draft is a bad draft, not evidence for a quota.
3. **Before accepting any constraint on form, check section 2.** If the renderer
   can do it, the contract may not forbid it for convenience.

A fourth rule, learned since V7:

4. **When a learning is found, it goes into this file in the same turn.** Not
   remembered, not left in chat, not deferred to when the tooling is free. The
   depth-calibration rule in section 4 sat unwritten across four documents
   because it was deferred once.

---

## 1. Identity

The project is **Loud Recall**. Not Primer — that name is dead and must not
reappear in any document, filename, class, or piece of copy.

| | |
|---|---|
| Name | Loud Recall |
| Tagline | learning out loud |
| Site description | Learning out loud. One subject at a time, explained badly until it isn't. Finance, risk, and AI — whatever I'm studying that week. Rough by design. |
| Site | loud-recall.vercel.app |
| Repository | github.com/tharungajula2/loud-recall |

**What it is.** A personal learning library for finance, risk, and AI. Built on the principle of learning out loud: one subject at a time, explained badly until it isn't. Imperfect by design — learning as I go, consistency over polish.

**Design.** Pure white background, black text and icons, hairline rules,
geometric sans with letterspacing for the wordmark, serif for document body type.
No colour, no gradients, no shadows. Light mode only — dark mode was deleted
outright, not deprecated. Reading is assumed to happen on a phone.

**The mark** is a square spiral: a line that enters from outside the frame,
turns inward twice, and stops one step short of a solid dot at the centre. The
path in, and the thing found. It exists as vector at `public/mark.svg` and must
never be redrawn, re-optimised or substituted.

Every document is written as part of this thing. Tone, jurisdiction and depth
follow from that, not from the subject in isolation.

---

## 2. What the renderer supports

Authoritative. Any rule contradicting this list is void.

| Capability | Package | Use |
|---|---|---|
| Math notation | KaTeX, remark-math, rehype-katex | Display and inline notation |
| Diagrams | Mermaid | Flowcharts, sequence, state, ER, timeline |
| Directive components | remark-directive, Callout component | Callouts |
| Raw inline SVG | rehype-raw | Hand-authored figures inside markdown |
| Syntax highlighting | Shiki, rehype-pretty-code | Code, with line highlighting |
| Responsive tables | ScrollTable component | Sticky first column, scroll, mobile collapse |
| Raw HTML documents | `loud-recall-html.css` and component kit | `format: html` documents |
| Anchored headings, progress, section observer | App | Navigation |

Two notes on the SVG capability, which is new since V7. The sanitiser is
deliberately not installed, because the corpus is self-authored — this means
inline SVG passes through raw and must be written correctly rather than trusted
to be cleaned up. And `scratch/` is not a content source; nothing in it is
loaded or rendered.

Column count, cell length and diagram complexity are therefore not constrained by
the format. They are constrained only by whether the reader can follow them on a
phone.

---

## 3. What a document is

A cheatsheet on one subject. Dense enough to be the only thing read before being
questioned on it, complete enough to be the only thing read to learn it.

Reference density is the target. The reader looks things up as often as reading
through, so findability outranks narrative flow — except in the `role-recall`
series, where continuity is the point (section 14).

No word limit, no word target, no section count target. The document ends when
the subject is finished, at the depth section 4 assigns it.

Progression runs easy to hard: objects and vocabulary, then mechanisms and
numbers, then edge cases and failure modes.

Every document is written on demand, from what is needed at the time. The corpus
is not planned up front. Gaps are filled after they are noticed, not forecast.

---

## 4. Depth calibration

**Document depth follows how deeply the knowledge is actually used, not one
uniform standard across the corpus.**

This is the rule that was agreed during the ML and Basel sessions and never
written down. Uniform depth is the failure it prevents: treating a reference
subject with the same weight as a load-bearing one produces a corpus that is
simultaneously bloated and shallow.

Three tiers. Assign one before writing, in the architecture step.

| Tier | Meaning | Written to |
|---|---|---|
| **Defensible** | The subject will be questioned directly, in detail, by someone who knows it | Full mechanism, notation, derivable relationships, worked numbers, edge cases, failure modes, governance |
| **Working** | The subject will be used and discussed, but not interrogated line by line | Mechanism and vocabulary, the numbers that matter, the process as actually run, named traps |
| **Reference** | The subject must be recognised and spoken about accurately, not operated | Definitions, the shape of the thing, the handful of facts that carry, what connects it to the rest |

Worked examples of the tiering as applied in the existing corpus: expected credit
loss and Basel capital are **defensible**; risk data and regulatory reporting,
and liquidity, are **working**; capital markets products and SQL are
**reference**.

The tier is declared in the architecture and is not revisited mid-draft. A
reference-tier subject that turns out to need defensible depth becomes its own
document rather than swelling inside another.

---

## 5. The device rule

Ask what shape the content has. The shape picks the device.

| Content shape | Device |
|---|---|
| Things compared on shared dimensions | Table |
| A finite population to be listed completely | Census table |
| A sequence, ladder, lifecycle or causal path | Mermaid diagram |
| A short linear chain, three or four nodes | Fenced arrow chain |
| A branching choice | Decision table or Mermaid flowchart |
| A spatial or quantitative relationship best seen | Inline SVG |
| An exact relationship in real notation | KaTeX block |
| Arithmetic with real values | Fenced block |
| Terms routinely confused | Inequality board |
| A technique performed in a language | Code, highlighted |
| Reasoning, judgement, a limitation, a why | Prose |

**The single test, both directions.** Would this table read better as a sentence?
Would this paragraph read better as a table, diagram or formula? Either answer
means the device is wrong.

Signals of forcing: a two-row table; a column repeating the same value in every
row; a fenced block holding one line; a chain with no sequence in it; four
consecutive sections in the same shape.

Prose is a device, not connective tissue, and it is correct wherever the content
is a reason rather than a set.

---

## 6. Mathematics

**KaTeX** for real notation — summations, subscripts, integrals, inverse normal,
conditional expectations, matrix forms. Display mode. Symbols defined immediately
beneath, one per line.

**Fenced block** for worked arithmetic. Inputs aligned, computation on one line.
Indian conventions: lakh, crore, `₹`.

`EL = PD × LGD × EAD` gains nothing from KaTeX. A Basel IRB capital function is
unreadable without it. The choice is legibility, never consistency.

Every exact relationship gets its own block, never a table row. Multi-equation
blocks are split, or set with an aligned KaTeX environment — a single block
holding several unrelated equations breaks layout on a phone.

**Derivations are included only at defensible tier**, and only where the
derivation is itself the thing being learned. At working and reference tier the
relationship is stated and its behaviour explained; the algebra is not walked.

---

## 7. Diagrams and figures

**Mermaid** for anything with structure — lifecycles, escalation ladders,
decision paths, state machines, sequences between parties, entity relationships.

**Inline SVG** for figures Mermaid cannot express: distributions, curves,
annotated shapes, anything spatial or quantitative. Written by hand, passed
through raw. Use `currentColor` for strokes and fills so the figure inherits text
colour rather than hardcoding black.

**Fenced monospace arrow chains** survive only for short linear progressions
where a diagram would be heavier than the content, and for hand-set ASCII figures
where the roughness is the point. They do not wrap on a phone, so they stay
under about sixty characters wide.

No emoji, no icon fonts, no decorative illustration. A figure earns its place by
carrying information no sentence carries as well.

---

## 8. Sections

Titles state what the section settles. `Charge creation versus perfection` earns
its place. `Overview` does not.

Sections vary in weight because content varies in weight. One may be a single
table, another a formula with its worked numbers, another four lines of prose. If
sections are interchangeable in structure, the document is an anthology.

Sections never re-establish context already fixed.

| Level | Use |
|---|---|
| `#` | never in the body — the title comes from frontmatter |
| `##` | numbered section, e.g. `## 16. NPA classification` |
| `###` | sub-point, not numbered |
| `####` and deeper | never — the table of contents is built from `##` |

Section numbering is continuous through the body and dropped in the closing
block, whose headings sit at `##` unnumbered.

---

## 9. Callouts

Directive components, not headings. Five, where earned, roughly one per three or
four sections.

`:::rule` — a principle surviving jurisdiction and revision.
`:::confuse` — two things routinely conflated.
`:::trap` — a specific named error practitioners make.
`:::model` — a compressed way to hold something heavy.
`:::insight` — the non-obvious consequence.

Use the syntax the `Callout` component actually expects; check the component
before writing, not after. Components are styled once and extractable, so a
document's traps can be listed across the library without re-reading it.

A callout is not a heading with a border. If removing the callout wrapper leaves
a sentence that reads fine in the body, it belonged in the body.

---

## 10. Consolidations

Every document carries, as sections or in the closing block:

- Every number the subject turns on, in one table, each with its section number.
- Every choice a practitioner makes, as a decision table, deciding condition
  first.
- Every finite population, listed completely — no samples, no "and others".
- Terms routinely confused, defined against each other.

Consolidated material carries the highest error risk and is verified first.

`role-recall` documents carry two further consolidations: an **acronym table**
covering every abbreviation used, and a **recall check** — a numbered list of
the figures, formulae and structures the reader should be able to reproduce from
memory on a blank page. The recall check is phrased as a memory exercise, never
as a test or an interview drill.

---

## 11. Voice

Declarative, unhedged, third person. British-Indian spelling.

State the position: `Notional is not exposure.` Not *may sometimes differ*.
No second person. No enthusiasm — no *crucial*, *vital*, *powerful*, *robust*.
No hedging filler — no *it is important to note*, *generally speaking*.
Uncertainty stated as a fact about the uncertainty, with its date.
Short sentences, not clipped to the point of losing the reasoning.

**No examples with named characters.** No *Priya applies for a loan*. An exposure,
a borrower, a counterparty. The example carries the mechanism, not a story.

**No meta-commentary.** This is the rule that separates a document from a study
guide. The document teaches the subject and says nothing about the reader's
situation, the document's own purpose, or how the material will be used.

Prohibited, with the failure each represents:

| Written | Why it fails |
|---|---|
| *for a risk role, you are asked which model and why* | Addresses a situation, not the subject |
| *this is the detail that separates people who have implemented ECL from those who have read about it* | Flatters rather than teaches |
| *candidates fumble this* / *this gets asked* | The document is not about being asked |
| *thinner coverage — enough for level 1* | Apologises for itself inside itself |
| *worth memorising* / *a strong answer* | Instruction about the content, not the content |
| *if you can draw this on a whiteboard* | Imports a scenario the document does not own |

The fix is always the same: state the thing itself. Not *the interest recognition
switch is what separates practitioners from readers*, but *once an asset is
credit-impaired, interest stops accruing on money that is not expected to be
collected*. The significance is carried by the fact being clear, not by being
labelled significant.

A document that would read oddly if a stranger found it — because it keeps
referring to a purpose they do not share — has meta-commentary in it.

---

## 12. Jurisdiction

India first, always. RBI, SEBI, IRDAI, Ind AS, Basel as adopted in India.
Amounts in lakh and crore, `₹`.

Another jurisdiction appears only where the difference is material, and then
inline. Never a standing section. Where a global standard and its Indian
adoption diverge, both numbers are given and the divergence is named as such —
that divergence is usually the most useful fact in the section.

---

## 13. Boundaries between documents

Overlap across documents is correct and expected. Repetition *within* a document
is the defect.

Depth varies by owner. One document teaches a subject — mechanism, notation, edge
cases, traps. Others state it in a line or a row. A document that states does not
summarise the teaching document.

Self-sufficiency means **comprehension without leaving the page**, not the
absence of navigation. A `related` field in frontmatter is permitted; the reader
must never need it to understand what is in front of them.

Concepts may repeat across documents at different depths. That is the system
working, not a defect to be normalised away.

---

## 14. Series and format

| Series | Format | Subject shape |
|---|---|---|
| `masterclass` | `markdown` | One subject, taught end to end at its assigned tier |
| `role-recall` | `markdown` | One consolidated document per role, drawing across subjects |
| `portfolio` | `markdown` | One built project, taught end to end — problem, architecture, decisions, mechanics, limits |

`format` is `markdown` or `html`. Format and series are independent: a
masterclass may be `html` where the picture is the teaching. HTML documents use
the shared stylesheet `loud-recall-html.css` and the component kit — a document
needing a new component adds it to the kit; the kit is never bypassed. This is
the only defence against every HTML note becoming a bespoke design project.

The `atom` series is retired. No document uses it and it must not be
reintroduced. The older `atom` corpus format from the predecessor project is
likewise dead.

**The `role-recall` series** has its own shape, and it is deliberately unlike a
masterclass:

- One document per role, consolidating everything that role touches into a
  single continuous read.
- **Continuous narrative, not reference density.** The order is the argument:
  each part earns the next, and the document is written to be read top to bottom
  in one pass rather than looked up in fragments.
- **Formulae, not derivations.** Every relationship a reader must be able to
  write down appears; no algebra is walked. Subjects whose mathematics is not
  operated at that role — machine learning in a risk role, for instance — appear
  conceptually only, with their metrics and their selection logic, and no maths.
- **No questions and no answers.** Not a question bank, not a drill sheet.
- Depth per part follows section 4, and the tiering will differ *within* one
  role-recall document. Parts covering thinner ground say nothing about being
  thinner (section 11).
- Closes with the reference-numbers table, the acronym table, the recall check,
  and a short compression — the whole domain in a handful of sentences.

**The `portfolio` series** covers projects built by the author rather than a
public body of knowledge. Its governing constraint is different from every other
series: the writer has no prior knowledge of the subject and cannot infer it.

- **Every fact traces to an attached source or to an answer the author gave.**
  Nothing is reconstructed from what a project of this kind usually does. Where a
  fact is missing, it is asked for, and until it is answered the section is not
  written.
- No invented metrics, no invented scale, no invented timelines, no plausible
  filler. A project with no measured performance figure says so.
- The document is organised around **decisions**, not features. What was chosen,
  what was rejected, and why — that is the material that survives questioning.
  A feature list is a README, not a document.
- Limitations and things that broke are included. A project document with no
  failures in it reads as marketing and is treated as incomplete.
- Working tier by default, per section 4. Roughly 2,500 to 4,000 words.
- Closes with the reference table (stack, versions, scale), the recall check, and
  the compression.

New series are added to this table before their first document, not after.

---

## 15. Opening and closing

**Opening**, before section 1: a lens line naming the framework; a master
diagram showing the whole subject as one progression, which the section order
then follows; one bolded permanent rule the document exists to establish.

Where a document carries provisional figures, a caution block sits immediately
after the opening, stating what the marker means (section 17).

**Closing**, unnumbered: every number in one table; the never-confuse board; the
three things the reader should be able to draw without notes; what must survive,
as assertions; sources; verification log.

---

## 16. Frontmatter, filenames and files

```
---
title: Credit Risk, Capital and Regulatory Reporting
description: "One line on what this document settles. Quoted if it contains a colon."
format: markdown
series: role-recall
tags: [credit-risk, ecl, basel, liquidity, sql]
created: 2026-09-08
updated: 2026-09-08
verified: false
---
```

| Field | Rule |
|---|---|
| `title` | Full, unabbreviated. It wraps in the shelf list and is never truncated |
| `description` | **Mandatory.** Drives the shelf excerpt, page metadata and search. A document without one falls back to the site description and looks broken. Quote the value if it contains a colon |
| `format` | `markdown` or `html` |
| `series` | Must exist in the section 14 table. Series filters are derived from this field, so a typo creates a phantom filter |
| `tags` | Mandatory. Drives search and library browse |
| `created`, `updated` | `YYYY-MM-DD`. `updated` drives sort order — newest first — and the visible date |
| `verified` | Boolean. `false` renders an UNVERIFIED marker; `true` renders nothing |
| `order`, `collection`, `related` | Optional. `related` is navigation only |

Reading time and word count are computed by the app and never written by hand.

**Files live flat in `content/`.** No subdirectories — the loader does not scan
them, so a document in a subfolder silently fails to appear. The filename is
permanent identity and becomes the URL: lowercase, hyphenated, no dates, no
version numbers. Renaming a file breaks its URL and its history, so it is chosen
once.

---

## 17. Verification

Content is model-written. Some of it is wrong. This is stated plainly rather
than managed around.

Verification runs as a **separate operation in a separate chat, against a claims
list, with the draft not attached**. A model checking its own output agrees with
itself.

`verified: false` until that pass has run. Numbers tables and census tables are
verified first. Code is verified by running it.

**The `[verify]` marker.** Where a claim is time-sensitive, in transition, or
carries a future effective date, mark it inline as `**[verify]**` at the point
of use, and carry a caution block after the opening stating that marked figures
are provisional. Marked figures are still stated in full — the marker records
confidence, it does not license vagueness. Everything in a numbers table that is
marked inline is marked in the table too.

Sources are cited in the closing block only, and only once verified. Never
inline in the body.

---

## 18. Prohibitions, each with its reason

| Prohibition | Reason | Expires when |
|---|---|---|
| No inline URLs in the body | Fabricated links, and they break reading flow | Never |
| URLs in the sources block only once verified | A verified citation has real value | Already conditional |
| No emoji | Tone | Never |
| No invented figures, dates or reference numbers | Silent invention is the worst failure available | Never |
| No fact about the author's own work that did not come from a source or an answer | Invention here is undetectable by the reader and indefensible under questioning | Never |
| No examples with named characters | The story displaces the mechanism | Never |
| No meta-commentary about purpose, reader or difficulty | Section 11 | Never |
| No prose restating an adjacent table | Redundancy | Never |
| No device where the content lacks that shape | The forcing failure that produced V4 to V6 | Never |
| No `#` or `####` in the body | Table of contents is built from `##` | The TOC builder changes |
| No pseudocode, placeholders, truncated examples | Unrunnable code teaches nothing | Never |
| No per-section scaffolding or repeated heading cycle | Produced the anthology failure | Never |
| No uniform depth across unlike subjects | Section 4 | Never |
| No content in `content/` subdirectories | The loader does not scan them | The loader changes |
| No "Primer" in any document, filename, class or copy | Dead name | Never |
| ~~No LaTeX~~ | *Math plugin missing* | **Expired — KaTeX installed** |
| ~~No cross-references~~ | *Conflated navigation with comprehension* | **Expired — `related` permitted** |
| ~~Cells limited to phrases~~ | *Wide tables broke on mobile* | **Expired — responsive table component** |
| ~~No inline SVG~~ | *Markdown could not pass raw HTML* | **Expired — rehype-raw installed** |
| ~~No recall inside sections~~ | *No extraction layer* | **Expired, then obsolete — flashcards were built and removed entirely as unnecessary complexity. Do not reintroduce flashcard blocks** |
| ~~Atom series~~ | *Series retired* | **Retired — see section 14** |

---

## 19. Before writing

State the architecture and get it agreed. Do not draft section 1 first.

1. Subject in one sentence.
2. **Depth tier** — defensible, working or reference, with the reason.
3. Series and format.
4. Master diagram.
5. Section list, one line each on what it settles.
6. Census tables, each with a home section.
7. Formula blocks, each with a home section, marked KaTeX or fenced.
8. Diagrams and figures, each with a home section, marked Mermaid or SVG.
9. Numbers table, decision tables, never-confuse board, three drawables.
10. Permanent rule.
11. What is stated rather than taught here, and which document teaches it.

Then write the complete document in one file. No batching, no placeholders, no
summaries, no diffs, no "part 1 of 3".

---

## 20. Working environment

The document is not finished when the text is written. It is finished when it
renders.

- **Verify by loading the page, not by building.** A successful build says
  nothing about whether KaTeX rendered, a table overflowed, or a diagram failed.
- **Check at 360px.** Reading is assumed to happen on a phone. Long titles,
  wide tables and monospace figures fail there first.
- The IDE agent runs on **Windows with PowerShell**. Git commands are run
  separately and never chained with `&&`.
- Give an agent scope and stop conditions. Inventory before acting on anything
  repository-wide; never a blind find-and-replace; never delete, move or rename
  a file the task did not name.
- New content is committed as soon as it exists. A document that is not in git
  does not exist.

---

## 21. Tests

Run these before declaring a document finished.

**Tool.** Is any choice in this document a workaround for something the renderer
can already do?

**Tier.** Was a depth tier assigned, and does the document actually sit at it —
neither padded past it nor thinned below it?

**Forcing.** Read every table, diagram and fenced block. Would any be clearer as
a sentence? Would any paragraph be clearer as a table, diagram or formula?

**Notation.** Is every relationship in real notation rendered in KaTeX, and every
piece of arithmetic in a fenced block?

**Meta.** Search the draft for *interview*, *candidate*, *level*, *thinner*,
*worth noting*, *you should*, *this is the part that*. Every hit is
meta-commentary until proven otherwise.

**Repetition.** Does any paragraph repeat what was already established?

**Shape.** Are the sections interchangeable in structure?

**Subtraction.** Remove any paragraph. Is the document worse?

**Consolidation.** Where is every number? Where is every choice? If the answer is
*scattered*, the synthesis was not done.

**Census.** Is there a finite population with no table listing every member?

**Marker.** Is every time-sensitive or transitional figure carrying `[verify]`,
and does the caution block exist?

**Frontmatter.** Is `description` present, is `series` a real series, is
`updated` correct, is the file flat in `content/`?

**Render.** Was the page loaded at 360px, with equations, tables, diagrams and
figures all confirmed by eye?

**Expiry.** Does any rule followed here have a reason that no longer holds? If
so, this file is edited in the same turn.
