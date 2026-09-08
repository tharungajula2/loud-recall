# PRIMER — DOCUMENT CONTRACT V7

Final. Replaces V1 to V6 in full.

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
3. **Before accepting any constraint on form, check section 1.** If the renderer
   can do it, the contract may not forbid it for convenience.

---

## 1. What the renderer supports

Authoritative. Any rule contradicting this list is void.

| Capability | Package | Use |
|---|---|---|
| Math notation | KaTeX, remark-math, rehype-katex | Display and inline notation |
| Diagrams | Mermaid | Flowcharts, sequence, state, ER, timeline |
| Components in markdown | MDX | Callouts, cards, tabs, quizzes |
| Syntax highlighting | Shiki, rehype-pretty-code | Code, with line highlighting |
| Responsive tables | Custom component | Sticky first column, scroll, mobile collapse |
| Images and charts | next/image, chart component | Figures, plots, photographs |
| Raw HTML documents | Shared stylesheet and component kit | Atom series |
| Anchored headings, copy buttons, progress | App | Navigation |

Column count, cell length and diagram complexity are therefore not constrained by
the format. They are constrained only by whether the reader can follow them.

---

## 2. What a document is

A cheatsheet on one subject. Dense enough to be the only thing read before an
interview, complete enough to be the only thing read to learn the subject.

Reference density is the target. The reader looks things up as often as reading
through, so findability outranks narrative flow.

No word limit, no word target, no section count target. The document ends when
the subject is finished.

Progression runs easy to hard: objects and vocabulary, then mechanisms and
numbers, then edge cases and failure modes.

## 3. The device rule

Ask what shape the content has. The shape picks the device.

| Content shape | Device |
|---|---|
| Things compared on shared dimensions | Table |
| A finite population to be listed completely | Census table |
| A sequence, ladder, lifecycle or causal path | Mermaid diagram |
| A short linear chain, three or four nodes | Fenced arrow chain |
| A branching choice | Decision table or Mermaid flowchart |
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

## 4. Mathematics

**KaTeX** for real notation — summations, subscripts, integrals, inverse normal,
conditional expectations, matrix forms. Display mode. Symbols defined immediately
beneath, one per line.

**Fenced block** for worked arithmetic. Inputs aligned, computation on one line.
Indian conventions: lakh, crore, `₹`. Use `x` for multiplication throughout.

`EL = PD x LGD x EAD` gains nothing from KaTeX. A Basel IRB capital function is
unreadable without it. The choice is legibility, never consistency.

Every exact relationship gets its own block, never a table row.

## 5. Diagrams

Mermaid for anything with structure — lifecycles, escalation ladders, decision
paths, state machines, sequences between parties, entity relationships.

Fenced monospace arrow chains survive only for short linear progressions where a
diagram would be heavier than the content. They do not wrap on a phone, so they
stay short.

## 6. Sections

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

## 7. Callouts

MDX components, not headings. Five, where earned, roughly one per three or four
sections.

`<PermanentRule>` — a principle surviving jurisdiction and revision.
`<NeverConfuse>` — two things routinely conflated.
`<Trap>` — a specific named error practitioners make.
`<MentalModel>` — a compressed way to hold something heavy.
`<KeyInsight>` — the non-obvious consequence.

Components are styled once and extractable, so a document's traps can be listed
across the library without re-reading it.

## 8. Recall and flashcards

Each section may carry a flashcard block. It is parsed at build and **not
rendered inline**, so it costs the reader nothing while reading.

````
```flashcard
Q: What resets the DPD clock?
A: Clearance of the entire arrears. Part payment does not.
```
````

Two to four per substantial section. Written as the question a person would
actually be asked, not as a definition prompt. These feed the review queue.

## 9. Consolidations

Every document carries, as sections or in the closing block:

- Every number the subject turns on, in one table, each with its section number.
- Every choice a practitioner makes, as a decision table, deciding condition
  first.
- Every finite population, listed completely — no samples, no "and others".
- Terms routinely confused, defined against each other.

Consolidated material carries the highest error risk and is verified first.

## 10. Voice

Declarative, unhedged, third person. British-Indian spelling.

State the position: `Notional is not exposure.` Not *may sometimes differ*.
No second person. No enthusiasm — no *crucial*, *vital*, *powerful*, *robust*.
No hedging filler — no *it is important to note*, *generally speaking*.
Uncertainty stated as a fact about the uncertainty, with its date.
Short sentences, not clipped to the point of losing the reasoning.

## 11. Jurisdiction

India first, always. RBI, SEBI, IRDAI, Ind AS, Basel as adopted in India.

Another jurisdiction appears only where the difference is material, and then
inline. Never a standing section.

## 12. Series and format

| Series | Format | Subject shape |
|---|---|---|
| Masterclass | `mdx` | Long-form subjects — credit risk, ECL, capital, SQL, statistics |
| Atom | `html` | Subjects where the picture is the teaching — architectures, stacks, hardware, protocols, cheatsheets |

Atom documents use the shared stylesheet and component kit. White background,
colour applied semantically by layer or category. A note needing a new component
adds it to the kit; the kit is never bypassed. This is the only defence against
every HTML note becoming a bespoke design project.

## 13. Boundaries between documents

Overlap across documents is correct and expected. Repetition *within* a document
is the defect.

Depth varies by owner. One document teaches a subject — mechanism, notation, edge
cases, traps. Others state it in a line or a row. A document that states does not
summarise the teaching document.

Self-sufficiency means **comprehension without leaving the page**, not the
absence of navigation. A `related` field in frontmatter is permitted; the reader
must never need it to understand what is in front of them.

## 14. Opening and closing

**Opening**, before section 1: lens line naming the framework; a master diagram
showing the whole subject as one progression, which the section order follows;
one bolded permanent rule the document exists to establish.

**Closing**, unnumbered: every number in one table; the never-confuse board; what
must survive, as assertions; sources; verification log.

## 15. Frontmatter

```
---
title: Credit Risk
description: One line on what this document settles.
order: 20
collection: finance
format: mdx
series: masterclass
tags: [credit-risk, rbi, basel, npa]
created: 2026-09-04
updated: 2026-09-04
verified: unverified
verified_on:
related: [expected-credit-loss, regulatory-capital]
---
```

`order` spaced by tens. `tags` drive search and library browse and are mandatory.
Reading time is computed by the app, never written by hand. Filename is permanent
identity and becomes the URL.

## 16. Verification

Content is model-written. Some is wrong.

Verification runs as a separate operation in a separate chat, against a claims
list, without the draft in front of it. A model checking its own output agrees
with itself.

States: `unverified`, `partial`, `verified`. Numbers tables and census tables are
verified first. Code is verified by running it.

Where a claim is in transition or has a future effective date, state the position
and the date it is stated as at, inline.

## 17. Prohibitions, each with its reason

| Prohibition | Reason | Expires when |
|---|---|---|
| No inline URLs in the body | Fabricated links, and they break reading flow | Never |
| URLs in the sources block only once verified | Same, but a verified citation has real value | Already conditional |
| No emoji | Tone | Never |
| No invented figures, dates or reference numbers | Silent invention is the worst failure available | Never |
| No prose restating an adjacent table | Redundancy | Never |
| No device where the content lacks that shape | The forcing failure that produced V4 to V6 | Never |
| No `#` or `####` in the body | Table of contents is built from `##` | The TOC builder changes |
| No pseudocode, placeholders, truncated examples | Unrunnable code teaches nothing | Never |
| No per-section scaffolding or repeated heading cycle | Produced the anthology failure | Never |
| ~~No LaTeX~~ | *Math plugin missing* | **Expired — KaTeX installed** |
| ~~No cross-references~~ | *Conflated navigation with comprehension* | **Expired — `related` permitted** |
| ~~No recall inside sections~~ | *No extraction layer* | **Expired — flashcard blocks, build-extracted** |
| ~~Cells limited to phrases~~ | *Wide tables broke on mobile* | **Expired — responsive table component** |

## 18. Before writing

State the architecture and get it agreed. Do not draft section 1 first.

1. Subject in one sentence.
2. Series and format.
3. Master diagram.
4. Section list, one line each on what it settles.
5. Census tables, each with a home section.
6. Formula blocks, each with a home section, marked KaTeX or fenced.
7. Diagrams, each with a home section.
8. Numbers table, decision tables, never-confuse board.
9. Permanent rule.
10. What is stated rather than taught here, and which document teaches it.

Then write the complete document in one file. No batching, no placeholders, no
summaries, no diffs.

## 19. Tests

**Tool.** Is any choice in this document a workaround for something the renderer
can already do?

**Forcing.** Read every table, diagram and fenced block. Would any be clearer as
a sentence? Would any paragraph be clearer as a table, diagram or formula?

**Notation.** Is every relationship in real notation rendered in KaTeX, and every
piece of arithmetic in a fenced block?

**Repetition.** Does any paragraph repeat what was already established?

**Shape.** Are the sections interchangeable in structure?

**Subtraction.** Remove any paragraph. Is the document worse?

**Consolidation.** Where is every number? Where is every choice? If the answer is
*scattered*, the synthesis was not done.

**Census.** Is there a finite population with no table listing every member?

**Recall.** Does every substantial section carry flashcards worth answering?

**Expiry.** Does any rule followed here have a reason that no longer holds?
