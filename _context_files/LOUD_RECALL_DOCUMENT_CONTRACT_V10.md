# LOUD RECALL — DOCUMENT CONTRACT V10

Final. Replaces V1 to V9 in full. Written 26 September 2026.

This file is self-sufficient: a new session with no other context should be able to read it and produce a note that belongs in the corpus. It fixes what must be true of every note. It deliberately does not fix a note's shape — that is designed fresh each time (section 2).

**What changed from V9.** The positioning is now four subjects — Finance, Health, AI and, now and then, Life — carried identically by the site and the YouTube channel (section 1). The home page is organised by subject; tracks and guest lectures are retired, and machine learning sits under AI. Frontmatter replaces `series` and `track` with `format` and a fixed `subject` id (section 15). Brand surfaces — icons, link previews, metadata — have rules of their own (section 1). Agent prompts carry a scope block and an inventory stop (section 17).

---

## 0. The rules above all other rules

1. **Never encode a tool limitation as a content rule. Fix the tool.** LaTeX was once banned because a plugin was missing; diagrams were once drawn in monospace because markdown could not draw. Each was a short fix treated as permanent doctrine.
2. **No two notes need the same shape.** This contract fixes the invariants — identity, frontmatter, rendering, figures, maths, verification, publishing. Everything else — structure, examples, depth, questions, length — is designed for each note from its reader and its purpose. A new note copies the invariants, never another note's shape.
3. **Every prohibition states its reason and its expiry condition.** A prohibition whose reason has lapsed is deleted, not grandfathered.
4. **When a learning is found, it goes into this file in the same turn** — not remembered, not left in chat. A standing rule goes in only if it holds for every note; a lesson about one kind of note goes into section 3.

---

## 1. Identity

The project is **Loud Recall**. Not Primer — that name is dead and must not reappear in any note, filename, class or piece of copy.

| | |
|---|---|
| Name | Loud Recall |
| Tagline | learning out loud |
| Page title | Loud Recall — Learning out loud |
| Site description | Learning out loud. Finance, health and AI — and now and then, life. One subject at a time, explained badly until it isn't. |
| Author | Tharun Gajula |
| Site | loud-recall.vercel.app |
| Repository | github.com/tharungajula2/loud-recall |
| YouTube | youtube.com/@loudrecall — channel name Loud Recall |

**What it is.** A personal learning library and a YouTube channel under one name, both built on learning out loud: one subject at a time, imperfect by design, consistency over polish. Since 26 September 2026 it covers four subjects — **Finance, Health and AI, and now and then, Life**. Life is the umbrella for anything outside the other three and appears occasionally.

### One vision, two surfaces

The site and the channel say the same thing in the same order. A change to the positioning is made on both in the same sitting — site copy, metadata, manifest and the channel description together. The channel is faceless and deliberately low-production; the library is its source material. The app does not embed or promote the channel beyond what already exists.

| Surface | Copy |
|---|---|
| Site hero | Learning out loud. One subject at a time, explained badly until it isn't. |
| Site hero, second line | Finance, health and AI — and now and then, life. Rough by design. Consistency over polish. |
| Byline | By Tharun Gajula · Learning out loud · Imperfect by design, learning as I go |
| Meta, Open Graph, Twitter, manifest | The site description above, word for word |
| YouTube description | The block below |

```
Learning out loud. One subject at a time, explained badly until it isn't.

Finance, health and AI — and now and then, life.

Imperfect by design. Learning as I go. Consistency over polish.

📚 Personal learning library & full notes:
https://loud-recall.vercel.app
```

The emoji and the URL belong to the channel description only; the no-emoji and no-URL rules (section 21) govern notes.

### Subjects and the home page

The home page is organised by **subject**, and **format** is a label inside each subject. Subjects are defined in one config file in the app — id, label, one-line description, order — which is the single source of truth.

| Order | Id | Label | Line under the heading |
|---|---|---|---|
| 1 | `finance` | Finance | Banking, credit risk and how money actually moves. |
| 2 | `health` | Health | Health, understood from the ground up. |
| 3 | `ai` | AI | Building with AI, and the machine learning underneath it. |
| 4 | `life` | Life | Now and then, the rest of it. |

- **Section order follows the tagline** — Finance, Health, AI, Life — so the site and the channel read in the same order.
- **Empty subjects are hidden.** No section, no filter chip, no "coming soon". Publishing the first note with a subject's id makes its section and chip appear on their own.
- **Machine learning is AI.** It never gets a subject of its own.
- **Inside a subject:** masterclasses on the numbered learning path in `order`, then articles as article cards. Card labels are the format in caps — MASTERCLASS, ARTICLE. "Volume N" appears only if a multi-volume series returns.
- **The Start here card** sits above the subjects and features the beginner article.
- **Filter chips:** All, then one chip per subject that has notes. A chip sets `?subject=<id>` in the URL, so `loud-recall.vercel.app/?subject=finance` is a shareable link — use these in video descriptions. Search runs across all subjects.
- **Stats line:** counts by format plus the updated date.
- **Note URLs never change** when notes move between subjects or the home page is reorganised.
- Adding a fifth subject means one edit to the config and one to this table.

### Corpus as of 26 September 2026

| Slug | Subject | Format | Order |
|---|---|---|---|
| credit-risk-end-to-end-cheatsheet | finance | masterclass | 1 |
| building-with-ai-practical-masterclass | ai | masterclass | 1 |
| machine-learning-end-to-end-credit-risk | ai | masterclass | 2 |
| ai-in-2026-what-everyone-should-know | ai | article | — |

Health and Life have no notes yet. Parents Health OS, the author's live app for his parents, is the natural source for the first health note.

**Design.** Pure white background, black text and icons, hairline rules, a geometric sans wordmark with letterspacing, serif body type. No gradients, no shadows. Light mode only — dark mode was deleted, not deprecated. Reading is assumed to happen on a phone.

**One exception to black and white: figures inside notes use a pastel palette (section 7).** Adopted 26 September 2026, because colour-coded infographics — one hue per phase — read far better than monochrome ones. The site chrome stays black and white.

**The mark** is a square spiral: a line that enters from outside the frame, turns inward twice, and stops one step short of a solid dot at the centre. It lives at `public/mark.svg` and is never redrawn, re-optimised or substituted. The icon, wordmark and banner files all live in the repository; nothing is designed anew.

### Icons, link previews and metadata

- **Icons are opaque.** A solid white square with the black mark centred at about 70% of the square, like the icons of large sites — a transparent icon vanishes in dark browser tabs and Google's circular crop, and iOS fills transparency with black. The set: `favicon.ico` (16, 32, 48), a 512 icon, a 180 Apple touch icon, 192 and 512 manifest icons, and a 512 maskable icon with the mark inside the central 60%. Icon URLs stay stable.
- **Manifest:** name and short name Loud Recall; background and theme colour #FFFFFF; the site description.
- **Link preview** (WhatsApp, LinkedIn, X, Slack): `metadataBase` is `https://loud-recall.vercel.app`, so image URLs are absolute. The Open Graph image is 1200×630, opaque white, built from the existing logo and banner files with all content inside the central 630×630 so a square crop still shows the whole mark, under 300 KB. Tags: og:title, og:description, og:url, og:site_name, og:type website, og:locale en_IN, og:image with width, height and alt, and twitter:card summary_large_image.
- **The wordmark is never re-typeset.** Existing wordmark and banner files are placed as they are.
- **Note pages** take their title and description from frontmatter and inherit the site name and the Open Graph image unless a note has its own.
- WhatsApp caches previews; test a change with a query string such as `?v=2`. Google's search favicon changes only on its next crawl.

---

## 2. Fixed for every note, chosen for each note

| Fixed by this contract | Chosen per note, in conversation |
|---|---|
| Identity and voice basics (section 11) | Who the note is for, and what they'll be able to do |
| Frontmatter and files (15) | The note type (section 3) |
| Renderer rules and markdown traps (19, 20) | The flow: which parts, in what order |
| Figure rules and palette (7) | The example strategy: one running example, or examples fitted to each topic |
| Maths rules (6) | The depth tier of each part (4) |
| Currency of facts and `[verify]` (13) | Which infographics, charts and tables |
| Building and verification (16, 18) | Questions: none, per-part checks, a rapid-fire bank (9) |
| Publishing and retiring (17) | Jurisdiction scope, length, the closing |

### The brief

Before writing, agree a short brief. Propose it and take the lead; ask only the shaping questions the purpose leaves open. Do not draft Part 1 before the nod.

1. **Reader and outcome** — who the note is for and what they will be able to do. This becomes the context section.
2. **Subject, format and type** — the subject id and format (section 15), and the note type (section 3).
3. **Flow** — the parts in order, one line each on what the part settles. Each part may use only what came before it.
4. **Example strategy** — one spine, or topic-fitted examples, with the reason.
5. **Depth** — a tier for each part (section 4).
6. **Figures** — each infographic and chart, with its home part.
7. **Questions** — which style, if any (section 9).
8. **Jurisdictions** — which ones, and where they differ.
9. **What it replaces** — notes to retire when it publishes (section 17).

When a note is built from a job specification, the spec shapes the brief, but the note never names the company or quotes the spec. The context section describes the kind of role instead.

---

## 3. Note types

Four types are live. They differ on purpose. Type is how a note is built; subject is where it sits (section 1); format is its label on the home page — the three article-type notes are `article`, everything else is `masterclass`.

| Type | Built for | Example strategy | Live example |
|---|---|---|---|
| Practical masterclass | Doing the work, hands-on | One running example: the author's own app | building-with-ai-practical-masterclass — Parents Health OS |
| Project masterclass | One real project, end to end, with code | One running example: the project itself, plus side-lines for techniques it did not use | machine-learning-end-to-end-credit-risk — the author's retail credit risk project |
| Context cheatsheet | A whole field for one kind of role, from zero | Examples fitted to each topic — retail, SME, corporate — with no single spine; per-part checks and a rapid-fire interview bank | credit-risk-end-to-end-cheatsheet |
| Article | A beginner's way in, drawn from the masterclasses | Whatever carries the idea | ai-in-2026-what-everyone-should-know |

Lessons that shaped the types:

- **A single running example** is powerful when the note teaches one system end to end, and alienating when the reader needs a whole field across segments. The three-volume *Credit Risk for the Business Analyst* series ran on one manufacturer; the reader did not relate to it, and it was replaced by one cheatsheet with examples fitted to each topic (26 September 2026).
- **One note per subject is the default.** Multi-volume series were consolidated: AI Stack, four volumes into one practical note; ML, three into one; credit risk, three into one. Split only when one note genuinely cannot hold the subject.
- **Maths at the depth it is used.** The old ML volumes' deep neural-network maths was a mistake. A topic's maths goes only as deep as the reader will operate it.
- **Self-sufficient.** The reader never needs to leave the note to follow it.
- **Cheatsheet density, continuous flow.** Dense tables and figures, joined by short bridges so the note reads as one argument, not bits and pieces.

**Portfolio notes** — one built project each — are dormant. If revived: every fact about the author's work traces to a source or to an answer he gave; the note is organised around decisions, not features; limitations and failures are included; nothing is inferred from what projects of that kind usually do.

---

## 4. Depth calibration

Depth follows how deeply the knowledge is actually used, not one uniform standard. Uniform depth produces a corpus that is bloated and shallow at once.

| Tier | Meaning | Written to |
|---|---|---|
| **Defensible** | Will be questioned directly, in detail, by someone who knows it | Full mechanism, notation, worked numbers, edge cases, failure modes, governance |
| **Working** | Will be used and discussed, not interrogated line by line | Mechanism and vocabulary, the numbers that matter, the process as actually run, named traps |
| **Reference** | Must be recognised and spoken about accurately, not operated | Definitions, the shape of the thing, the facts that carry, how it connects to the rest |

Tiers are set per part in the brief, and one note usually mixes them. In the credit risk cheatsheet, IFRS 9, Basel capital and model validation are defensible; data, reporting and delivery are working; SQL and Excel patterns are reference.

---

## 5. The device rule

Ask what shape the content has. The shape picks the device.

| Content shape | Device |
|---|---|
| Things compared on shared dimensions | Table |
| A finite population to be listed completely | Census table |
| A system, process, lifecycle or hierarchy to be seen whole | Colour infographic (section 7) |
| Data, a curve, a distribution, values compared | Chart (section 7) |
| A branching choice or a business rule | Decision table |
| An exact relationship | KaTeX block |
| A worked calculation | A short table, or one line of arithmetic in the text |
| A technique performed in a language | Code block, highlighted |
| Terms routinely confused | Side-by-side table |
| A question the reader should answer | Folded answer (section 9) |
| Reasoning, judgement, a limitation, a why | Prose |

**The single test, both directions.** Would this table read better as a sentence? Would this paragraph read better as a table, figure or formula? Either answer means the device is wrong.

Signals of forcing: a two-row table; a column repeating one value in every row; four consecutive parts in the same shape.

---

## 6. Mathematics

- **KaTeX in display mode** for real notation. `$$` on its own line, a blank line before and after, and the terms defined underneath in a sentence or list after a blank line — the renderer breaks when definitions touch the block.
- `EL = PD × LGD × EAD` may sit in a display block when it is a headline relationship. Legibility decides, never consistency.
- Inside maths, write `%` as `\%`. A bare `%` starts a comment and silently deletes the rest of the line.
- Never use `$` anywhere outside maths — not even as currency. remark-math reads `$…$` as inline maths. Currency is written ₹, USD, £ or €.
- Vertical bars in maths: `\lvert … \rvert`, not `|`.
- Several related formulas share one block, stacked with `\begin{gathered} … \\[6pt] … \end{gathered}` — never side by side, which overflows a phone.
- No subscripts in prose: write "for each period t", not `PD_t`.
- Compute every worked number in a script before writing. **No number appears before the row that produces it.**
- Derivations only at defensible tier, and only where the derivation is itself the thing being learned.
- Every block is rendered through KaTeX in strict mode before delivery. One error blocks delivery.

---

## 7. Figures: colour infographics and charts

Figures are inline SVG generated by a small Python kit rather than typed by hand, and looked at as images before delivery. The kit replaces Mermaid as the default: Mermaid blew up on phones and cannot carry the palette. Mermaid stays available for a quick structural diagram that holds on a phone.

**Phone-first geometry.**

- `viewBox="0 0 400 H"`, `width="400"`, and `style="width:100%;max-width:400px;height:auto;display:block;margin:1rem auto"`.
- **No text below 15px.** A 400-wide figure in a phone column of about 300px renders 15px text at about 11px — the renderer's readable floor — so it fits with no sideways scrolling.
- Tall and narrow beats wide: stack phases vertically, two columns at most.
- Font stack: `system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif`.

**Palette.** One hue per phase or category, and a hue means the same thing throughout a note.

| Hue | Fill | Stroke | Title text |
|---|---|---|---|
| Blue | #eff6ff | #3b82f6 | #1d4ed8 |
| Green | #ecfdf5 | #10b981 | #047857 |
| Amber | #fffbeb | #f59e0b | #b45309 |
| Rose | #fff1f2 | #f43f5e | #be123c |
| Purple | #f5f3ff | #8b5cf6 | #6d28d9 |
| Teal | #f0fdfa | #14b8a6 | #0f766e |
| Grey | #f3f4f6 | #6b7280 | #374151 |

Body text #1f2937; muted text #4b5563; axes #9ca3af; gridlines #e5e7eb; arrows #6b7280. Status colours hold across notes: green is fine or performing, amber is watch, rose is bad or default.

**Boxes and arrows.** Rounded rectangles — radius 8, 1.5px stroke, pale fill — with the first line bold in the hue's title colour. Arrowheads are polygons, never `<marker>` or any `id`: every SVG on a page shares one id namespace.

**Charts.** Axes labelled; at most six ticks; the legend above the plot; key values labelled on the chart; one message per chart, stated in its title.

**Markup.** The opening `<svg …>` tag complete on one line; no blank line anywhere inside; `&` and `<` escaped; `role="img"` and an `aria-label` saying what the figure shows. Section 20 gives the reasons.

**Process.** Write `{{FIG:name}}` placeholders in the text. Generate the figures with the kit, render each to PNG with cairosvg, look at it, and fix every overflow before assembly.

No emoji, no icon fonts, no decorative illustration, no raster images. A figure earns its place by carrying something no sentence carries as well.

---

## 8. Structure

- **Headings.** `## Part N — Title` for parts, starting at Part 0; `###` for sub-points; never `#` (the title comes from frontmatter) or `####`. Closing sections are `##`, unnumbered. The table of contents is built from `##`.
- **Titles state what the part settles.** "Charge creation versus perfection", not "Overview".
- **Part 0 is the context section:** who the note is for; what you will be able to do; what it assumes; how to read it; conventions — units, the `[verify]` marker, jurisdictions. Then, where the subject has one, a colour map of the whole subject on one page, whose order the parts follow.
- **Flow.** Each part opens with a one- or two-line bridge from the last and uses only what came before it.
- Parts vary in weight because content varies in weight. If parts are interchangeable in structure, the note is an anthology.
- **The closing is a compression:** the whole subject on one screen. Add an acronyms table when the note uses many, and a numbers table when the subject turns on numbers.

---

## 9. Questions and folded answers

Collapsible blocks are raw `<details>` and `<summary>`. The blank lines are required — without them the markdown inside shows raw.

A per-part check:

```
### Check yourself

1. Question
2. Question

<details>
<summary>Answers</summary>

1. Answer
2. Answer

</details>
```

A rapid-fire bank — one block per question, the question as the summary:

```
<details>
<summary>What is the output floor?</summary>

Answer.

</details>
```

Questions make the reader derive, apply or explain — not recite. Answers are short enough to say out loud. Whether a note has questions, and which kind, is settled in the brief. Flashcards stay retired.

---

## 10. Callouts

Directive callouts — `:::rule`, `:::confuse`, `:::trap`, `:::model`, `:::insight` — remain available through the Callout component; check its syntax before using one. They are optional: current notes carry warnings in tables and prose. If removing the wrapper leaves a sentence that reads fine in the body, it belonged in the body.

---

## 11. Voice

- Plain, simple, elegant language — explained the way Feynman would. Dense, never clipped to the point of losing the reasoning.
- "You" is allowed where it reads naturally.
- British-Indian spelling. Lakh, crore, ₹.
- No enthusiasm — *crucial*, *powerful*, *robust*. No hedging filler — *it is important to note*, *generally speaking*.
- **No examples with named characters.** A borrower, a lender, a counterparty — the example carries the mechanism, not a story.
- **The teaching states the subject.** Part 0 is the only place that talks about the reader, their role or how to use the note, and question blocks may be framed as interview practice. Inside the teaching there is no *this gets asked*, no *this separates practitioners from readers* — the fact, stated clearly, carries its own weight.
- State positions. Uncertainty is stated as a fact about the uncertainty, with its date.

---

## 12. Jurisdiction

India first for amounts and examples. Regulation takes the global standard as the base — Basel, IFRS — and shows the UK, EU, US and India side by side, in one table, only where they genuinely differ. Where a global standard and India's adoption diverge, both are given and the divergence is named.

---

## 13. Currency of facts

- Anything time-sensitive — regulatory dates and status, products, model versions — is researched on the day of writing.
- It is then marked `[verify]` at the point of use. The marker records confidence; the figure is still stated in full. Part 0's conventions explain the marker.
- No invented figures, dates or reference numbers — ever.

---

## 14. Boundaries between notes

Overlap across notes is expected; repetition within a note is the defect. Self-sufficiency means comprehension without leaving the page. A note that supersedes others retires them in the same publish (section 17) — never two live versions of one subject.

---

## 15. Frontmatter and files

```yaml
---
title: "Credit Risk, End to End — The Complete Cheatsheet"
description: "One or two sentences on what the note covers. Always quoted."
subject: finance
format: masterclass
order: 1
status: draft
updated: 2026-09-26
verified: false
tags:
  - credit risk
  - ifrs 9
---
```

| Field | Rule |
|---|---|
| `title` | Full and unabbreviated |
| `description` | Mandatory; drives the shelf excerpt, page metadata and search; always quoted |
| `subject` | `finance`, `health`, `ai` or `life` — an id from the subject config; an unknown id fails the type check rather than hiding the note |
| `format` | `masterclass` or `article`; the card label and where the note sits inside its subject |
| `order` | Position on the subject's learning path; articles may omit it |
| `status` | `draft` on delivery; the publish step sets the value the live notes carry |
| `updated` | `YYYY-MM-DD`; drives sort order and the visible date |
| `verified` | `false` until the independent pass (section 18) |
| `tags` | Mandatory; a YAML list |

`series` and `track` were retired on 26 September 2026 with guest lectures. V8's `created`, `collection` and `related` fields are not carried by current notes.

Files live flat in `content/`; the loader does not scan subfolders. The filename is the URL — lowercase, hyphenated, no dates, no version numbers — and is chosen once.

---

## 16. Building a note (Claude's side)

1. **Read what exists first** — any note being replaced, and the author's feedback on it. Reading is the main quality loop.
2. Agree the brief (section 2).
3. Research time-sensitive facts; compute every worked number in a script.
4. Build the figures with the kit; render to PNG; look; fix.
5. Write the note in part files, with `{{FIG:name}}` placeholders.
6. Assemble, then run one verification script:
   - every frontmatter field present;
   - no setext trap — `[^\n]\n---\n` after the frontmatter;
   - every SVG parses as XML, has its opening tag on one line, has no blank line inside, no text below 15px, and a width of at most 400;
   - `$$` blocks balanced, with blank lines around them; no unescaped `%` inside; no `$` outside;
   - `<details>` blocks balanced and correctly spaced;
   - every table row with the same column count, and no `|` inside a cell;
   - code fences balanced;
   - the heading list, word count and `[verify]` count.
7. Render every formula with KaTeX in strict mode.
8. Deliver one complete file with `present_files`. No placeholders, no batching, no "part 1 of 3".

**Editing a delivered note:** locate anchor strings and replace between them — never line numbers, never sed. **If a note is poor, rebuild it.** Patching degrades; rebuilding restores.

---

## 17. Publishing and retiring (the IDE agent)

The IDE is Antigravity. The agent gets one ready-to-paste prompt per job, with explicit steps.

- Work on `main`. No new branch for these tasks.
- **A scope block opens every prompt:** what may change, and what must not — no new sections, links, buttons, embeds or features beyond the task. The author's standing rule is that the app changes only where the task says.
- **App changes start with an inventory stop:** the agent lists the files and code involved, changes nothing, and waits for "go". Publishing a note needs no inventory.
- **Never start the dev server. Never open a browser or take screenshots** — both waste time. Checks run through code and git, plus `npx tsc --noEmit` for code changes; the author checks the live site himself.
- Windows terminal: one command at a time, never chained with `&&`.
- Never run a formatter or linter over `content/`.
- Publishing: set `status` to the live value and change nothing else. Never copy frontmatter values — above all the description — into the body; the agent does this unless told not to.
- Retiring: `git rm` the old note; search the repo, excluding `node_modules`, `.next` and `.git`, for its slug and subject name; repoint links in notes and code, changing only the name and the link; list every edit.
- Stage only the task's files; report unrelated changes without staging them.
- Stop before the push and wait for "go".

---

## 18. Verification

Content is model-written, and some of it is wrong. `verified: false` stays until a separate pass, in a separate chat, checks a claims list with the draft not attached — a model checking its own output agrees with itself. Numbers tables and census tables are checked first; code is checked by running it.

Rendering is verified before delivery (section 16), not by the IDE agent.

---

## 19. What the renderer supports

Authoritative. Any rule contradicting this list is void.

| Capability | How |
|---|---|
| Maths | KaTeX via remark-math and rehype-katex |
| Raw inline SVG | rehype-raw, with no sanitiser — the corpus is self-authored, so markup must be correct |
| Diagram frame | Every top-level SVG and Mermaid diagram: natural size, never enlarged; shrinks to fit until text would fall below 11px, then scrolls sideways inside its frame from the left edge; controls sit below the figure, never over it; expands to full screen with pinch, wheel and drag zoom (behaviour as specified 26 September 2026) |
| Mermaid | Available; the SVG kit is preferred (section 7) |
| Collapsible blocks | Raw `<details>` and `<summary>` |
| Code | Shiki via rehype-pretty-code |
| Tables | ScrollTable — sticky first column, scroll, mobile collapse |
| Callouts | remark-directive and the Callout component |
| Navigation | Anchored headings, progress, section observer; contents built from `##` |

---

## 20. Markdown traps

| Trap | What breaks | Rule |
|---|---|---|
| Text directly above `---` | It renders as a heading (setext) | A blank line before every `---` |
| Definitions touching a `$$` block | The equation fails to render | A blank line before and after `$$` |
| `%` inside maths | The rest of the line silently vanishes | Write `\%` |
| `$` used as currency | Parsed as inline maths | Never use `$`; write USD |
| A blank line inside an SVG | Ends the HTML block; the rest prints as text | No blank lines inside |
| An SVG opening tag split across lines | Not recognised as an HTML block | The complete opening tag on one line |
| `<marker>` or `id` in an SVG | Collisions between figures on one page | Polygons, no ids |
| A `\|` inside a table cell | Splits the cell | Rephrase |
| `<details>` without blank lines | The markdown inside shows raw | A blank line after `<summary>` and before `</details>` |
| The agent re-emitting the description | A duplicate first paragraph | Forbid it in the publish prompt |
| A formatter run over content | Reflows SVGs and tables | Never format `content/` |

---

## 21. Prohibitions, each with its reason

| Prohibition | Reason | Expires when |
|---|---|---|
| No inline URLs in the body | Fabricated links; they break the read | Never |
| No emoji | Tone | Never |
| No invented figures, dates or reference numbers | The worst failure available | Never |
| No fact about the author's own work without a source or his answer | Undetectable by the reader, indefensible under questioning | Never |
| No named characters in examples | The story displaces the mechanism | Never |
| No company names or job-spec text in role-driven notes | The note teaches a field, not an application | Never |
| No meta-commentary inside the teaching | Section 11 | Never |
| No prose restating an adjacent table | Redundancy | Never |
| No device where the content lacks that shape | Forcing | Never |
| No `#` or `####` in the body | The contents are built from `##` | The contents builder changes |
| No pseudocode, placeholders or truncated examples | Unrunnable code teaches nothing | Never |
| No raster images in notes | A poor reading experience; SVG does the job | Never |
| No content in `content/` subfolders | The loader does not scan them | The loader changes |
| No "Primer" anywhere | Dead name | Never |
| No flashcards; no atom series | Retired as unnecessary complexity | Never |
| No dev server, browser or screenshots in agent prompts | Slow and costly; checks run in code and git | Never |
| No app changes outside a prompt's stated scope | Unrequested features drift the app from its design | Never |
| No empty subject sections, "coming soon" or placeholder copy | A shelf with nothing on it; subjects appear when their first note publishes | Never |
| No transparent icons | They vanish in dark tabs, in Google's circle crop and on iOS | Never |
| No new logo artwork and no re-typeset wordmark | The brand files exist; a near-match looks amateur | Never |
| No positioning change on one surface only | The site and the channel carry one vision | Never |
| No changing a note's URL | Shared links break | Never |
| ~~AI-first: an AI track plus guest lectures~~ | *22 September 2026 home page* | **Replaced 26 September 2026 — four subjects, machine learning under AI (section 1)** |
| ~~`series` and `track` frontmatter~~ | *Track-based home page* | **Replaced — `subject` and `format` (section 15)** |
| ~~Finance, risk and AI — whatever I'm studying that week~~ | *V9 positioning* | **Replaced — Finance, health and AI, and now and then, life** |
| ~~No colour~~ | *Monochrome identity* | **Expired 26 September 2026 — pastel palette for figures (section 7); the site chrome stays black and white** |
| ~~No second person~~ | *Voice* | **Expired — "you" where it reads naturally** |
| ~~No questions and answers~~ | *Role notes were continuous narrative* | **Expired — questions chosen per note (section 9)** |
| ~~One running example in every note~~ | *The spine rule* | **Replaced — the example strategy is chosen per note (section 3)** |
| ~~Mermaid for all structure~~ | *Renderer* | **Superseded — the SVG kit is the default (section 7)** |
| ~~Verify by loading the page at 360px~~ | *No checks before delivery* | **Replaced — render checks before delivery (section 16); the author checks the live site** |
| ~~Numbered `## 16.` sections; bold `[verify]` plus a caution block~~ | *Old conventions* | **Replaced — `## Part N — Title`; plain `[verify]`, explained in Part 0** |
| ~~No LaTeX; no inline SVG; no cross-references; table cells limited to phrases~~ | *Renderer gaps* | **Expired long ago** |

---

## 22. Tests

Run these before delivery.

- **Brief.** Was a brief agreed, and does the note deliver it — reader, outcome, flow?
- **Fit.** Do the examples fit the topic in front of the reader?
- **Flow.** Does each part use only what came before it, and does the note read as one argument?
- **Tier.** Does each part sit at its tier — neither padded past it nor thinned below it?
- **Forcing.** Would any table read better as a sentence, or any paragraph as a table, figure or formula?
- **Numbers.** Is every number computed by script and derived before it is used?
- **Figures.** Are they phone-first, on the palette, and looked at as images?
- **Meta.** Does anything outside Part 0 and the question blocks talk about the reader or the note itself?
- **Repetition.** Does any paragraph repeat what was already established?
- **Subtraction.** Remove any paragraph. Is the note worse?
- **Marker.** Was every time-sensitive fact researched today and marked `[verify]`?
- **Frontmatter.** All fields present, description quoted, subject a valid id, format set, status draft, file flat in `content/`?
- **Sync.** If the positioning moved, did the site copy, metadata, manifest and channel description move together?
- **Render.** Did the verification script and the strict KaTeX pass both come back clean?
- **Expiry.** Does any rule followed here have a reason that no longer holds? If so, edit this file now.
