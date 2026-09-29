# LOUD RECALL — DOCUMENT CONTRACT V11

Final. Replaces V1 to V10 in full. Written 28 September 2026.

This file is self-sufficient: a new session with no other context should be able to read it and produce a note that belongs in the corpus. It fixes what must be true of every note. It deliberately does not fix a note's shape — that is designed fresh each time (section 2).

**What changed from V10.** The default note is now the **Pareto cheatsheet** — about 20 minutes, holding only the 20% that handles 80% of the work; full-coverage notes are written only when asked for (section 3). Notes carry no questions, no interview bank and no mention of interviews (section 9), and explain every term from a beginner's standpoint (section 11). All four subjects always show, with a Coming soon card when empty, and the Start here card is hidden (section 1). Notes leave the app by shelving, not deletion (section 17). Agent prompts no longer stop for approval: checks are built in and the agent pushes straight to main (section 17). Table columns are left-aligned (sections 19 and 20).

---

## 0. The rules above all other rules

1. **Never encode a tool limitation as a content rule. Fix the tool.** LaTeX was once banned because a plugin was missing; diagrams were once drawn in monospace because markdown could not draw. Each was a short fix treated as permanent doctrine.
2. **No two notes need the same shape.** This contract fixes the invariants — identity, frontmatter, rendering, figures, maths, verification, publishing. Everything else — structure, examples, depth, length — is designed for each note from its reader and its purpose. A new note copies the invariants, never another note's shape.
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

**Videos.** The author reads a continuous lecture script aloud while screen-sharing the matching note in the app, scrolling section by section. A script follows its note's sections in order, at the note's full depth, and is split into parts when long.

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
| 2 | `health` | Health | Everyday health, explained simply: body, food, sleep and caring for family. |
| 3 | `ai` | AI | Building with AI, and the machine learning underneath it. |
| 4 | `life` | Life | Now and then, the rest of it. |

- **Section order follows the tagline** — Finance, Health, AI, Life — so the site and the channel read in the same order.
- **All four subjects always show**, each under its heading with its line. A subject with no notes shows one **Coming soon card** in place of the note list: built from the existing card component and tokens, a dashed border in the existing border colour, a small uppercase "Coming soon" label in the muted text colour, and the fixed line "First notes are on the way." The card never repeats the subject line, which already sits under the heading. It is not clickable and does not count as a note. Publishing a subject's first note replaces the card on its own.
- **Health is broader than Parents Health OS** and is never framed around that one app.
- **Machine learning is AI.** It never gets a subject of its own.
- **Inside a subject:** masterclasses on the numbered learning path in `order`, then articles as article cards. Card labels are the format in caps — MASTERCLASS, ARTICLE. "Volume N" appears only if a multi-volume series returns.
- **The Start here card is hidden** since 27 September 2026, when the article it featured was shelved. It returns only when the author asks, pointing at a note he names.
- **Filter chips:** All, then one chip for each of the four subjects; an empty subject's chip shows its Coming soon card. A chip sets `?subject=<id>` in the URL, so `loud-recall.vercel.app/?subject=finance` is a shareable link — use these in video descriptions. Search runs across all subjects.
- **Stats line:** counts real notes only, by format, plus the updated date.
- **Note URLs never change** when notes move between subjects or the home page is reorganised.
- Adding a fifth subject means one edit to the config and one to this table.

### Corpus as of 28 September 2026

| Slug | Subject | Format | Order | State |
|---|---|---|---|---|
| credit-risk-cheatsheet | finance | masterclass | 1 | Live |
| my-work-20-minute-cheatsheet | life | masterclass | 1 | Live |
| credit-risk-end-to-end-cheatsheet | finance | masterclass | — | Shelved, 28 September 2026 |
| building-with-ai-practical-masterclass | ai | masterclass | — | Shelved, 27 September 2026 |
| machine-learning-end-to-end-credit-risk | ai | masterclass | — | Shelved, 27 September 2026 |
| ai-in-2026-what-everyone-should-know | ai | article | — | Shelved, 27 September 2026 |

Health and AI show the Coming soon card. My Work in 20 Minutes is the author's roles, projects and skills, built from his resume alone. A rebuilt ML note (Part 0 path table, unsupervised learning moved to Part 11, questions removed) was delivered on 27 September 2026 and is kept for when the note is revived.

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
| Building and verification (16, 18) | Length: a 20-minute Pareto cheatsheet by default, a full note only when asked (3) |
| Publishing and shelving (17) | Jurisdiction scope, the closing |

### The brief

Before writing, agree a short brief. Propose it and take the lead; ask only the shaping questions the purpose leaves open. Do not draft before the nod.

1. **Reader and outcome** — who the note is for and what they will be able to do. This becomes the context section.
2. **Subject, format and type** — the subject id and format (section 15), and the note type (section 3).
3. **Flow** — the parts in order, one line each on what the part settles. Each part may use only what came before it.
4. **Example strategy** — one spine, or topic-fitted examples, with the reason.
5. **Depth** — a tier for each part (section 4).
6. **Figures** — each infographic and chart, with its home part.
7. **Length** — a Pareto cheatsheet unless the author asks for full coverage (section 3).
8. **Jurisdictions** — which ones, and where they differ.
9. **What it replaces** — notes to shelve when it publishes (section 17).

When a note is built from a job specification, the spec shapes the brief, but the note never names the company or quotes the spec. The context section describes the kind of role instead.

---

## 3. Note types

Two types are live; four more are shelved and available when a note is revived. They differ on purpose. Type is how a note is built; subject is where it sits (section 1); format is its label on the home page — articles are `article`, everything else is `masterclass`.

**The default is the Pareto cheatsheet** (28 September 2026). Long full-coverage notes proved too much to read; the 20-minute version, holding only what comes up again and again, was the one the author read and kept. A full note is written only when he asks for one, and a shelved full note stays the reference behind its cheatsheet.

| Type | Built for | Shape | Example |
|---|---|---|---|
| Pareto cheatsheet — live | A whole subject in about 20 minutes | About 2,000 to 3,000 words; a dozen or so short sections numbered `## 1 — Title`; only the ideas used most; two or three figures; every formula followed by a plain "read it as" line | credit-risk-cheatsheet |
| Profile cheatsheet — live | The author's own work in 20 minutes | Built only from his resume and the documents he supplies, in the order he asks; each project as problem, flow, key decisions, real numbers and what it shows; roles and skills after | my-work-20-minute-cheatsheet |
| Context cheatsheet — shelved | A whole field from zero, full coverage | Examples fitted to each topic — retail, SME, corporate — with no single spine | credit-risk-end-to-end-cheatsheet |
| Practical masterclass — shelved | Doing the work, hands-on | One running example: the author's own app | building-with-ai-practical-masterclass |
| Project masterclass — shelved | One real project, end to end, with code | The project itself, plus side-lines for techniques it did not use; each part ends with a Decision line carrying its result forward | machine-learning-end-to-end-credit-risk |
| Article — shelved | A beginner's way in | Whatever carries the idea | ai-in-2026-what-everyone-should-know |

Lessons that shaped the types:

- **A single running example** is powerful when the note teaches one system end to end, and alienating when the reader needs a whole field across segments. The three-volume *Credit Risk for the Business Analyst* series ran on one manufacturer; the reader did not relate to it, and it was replaced by one cheatsheet with examples fitted to each topic (26 September 2026).
- **One note per subject is the default.** Multi-volume series were consolidated: AI Stack, four volumes into one practical note; ML, three into one; credit risk, three into one. Split only when one note genuinely cannot hold the subject.
- **Maths at the depth it is used.** The old ML volumes' deep neural-network maths was a mistake. A topic's maths goes only as deep as the reader will operate it.
- **Self-sufficient.** The reader never needs to leave the note to follow it.
- **Cheatsheet density, continuous flow.** Dense tables and figures, joined by short bridges so the note reads as one argument, not bits and pieces.
- **Real-world order.** Sections follow the order things happen — a loan is originated before it is provisioned — and connect without gaps.
- **Only what was asked.** The first profile cheatsheet added side projects and a skills framework the author had not asked for, and its formatting drifted; it was rebuilt from his resume alone (28 September 2026). A note holds what the brief names and nothing more.
- **Fix what is broken, not what works.** The ML note's explanations were already built on real code and numbers, so its rebuild fixed order, connection and clutter only (27 September 2026).

**Portfolio notes** — one built project each — are dormant. If revived: every fact about the author's work traces to a source or to an answer he gave; the note is organised around decisions, not features; limitations and failures are included; nothing is inferred from what projects of that kind usually do.

---

## 4. Depth calibration

Depth follows how deeply the knowledge is actually used, not one uniform standard. Uniform depth produces a corpus that is bloated and shallow at once.

| Tier | Meaning | Written to |
|---|---|---|
| **Defensible** | Must hold up under detailed scrutiny from someone who knows it | Full mechanism, notation, worked numbers, edge cases, failure modes, governance |
| **Working** | Will be used and discussed, not interrogated line by line | Mechanism and vocabulary, the numbers that matter, the process as actually run, named traps |
| **Reference** | Must be recognised and spoken about accurately, not operated | Definitions, the shape of the thing, the facts that carry, how it connects to the rest |

Tiers are set per part in the brief, and one note usually mixes them. In the full credit risk cheatsheet, IFRS 9, Basel capital and model validation are defensible; data, reporting and delivery are working; SQL and Excel patterns are reference. A Pareto cheatsheet sits at working tier throughout, stating its core ideas precisely but briefly.

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

- **Headings.** Full notes: `## Part N — Title`, starting at Part 0. Cheatsheets: `## N — Title` starting at 1, or plain `##` titles where numbering adds nothing (the profile note opens with `## At a glance`). `###` for sub-points; never `#` (the title comes from frontmatter) or `####`. Closing sections are `##`, unnumbered. The table of contents is built from `##`.
- **Titles state what the part settles.** "Charge creation versus perfection", not "Overview".
- **In full notes, Part 0 is the context section:** who the note is for; what you will be able to do; what it assumes; how to read it; conventions — units, the `[verify]` marker, jurisdictions. Then, where the subject has one, a colour map of the whole subject on one page, whose order the parts follow. Cheatsheets have no Part 0: the description and the first section carry the context.
- **Flow.** Each part opens with a one- or two-line bridge from the last, uses only what came before it, and follows the real-world order of the subject.
- Parts vary in weight because content varies in weight. If parts are interchangeable in structure, the note is an anthology.
- **The closing is a compression:** the whole subject on one screen. Add an acronyms table when the note uses many, and a numbers table when the subject turns on numbers.

---

## 9. No questions

Notes carry no questions: no "Check yourself" blocks, no rapid-fire bank, no flashcards (27 September 2026 — they cluttered the read). Notes never mention interviews or interview preparation. Raw `<details>` and `<summary>` remain available for folding a long reference table, with a blank line after `<summary>` and before `</details>` — without them the markdown inside shows raw.

---

## 10. Callouts

Directive callouts — `:::rule`, `:::confuse`, `:::trap`, `:::model`, `:::insight` — remain available through the Callout component; check its syntax before using one. They are optional: current notes carry warnings in tables and prose. If removing the wrapper leaves a sentence that reads fine in the body, it belonged in the body.

---

## 11. Voice

- Plain, simple, elegant language — explained the way Feynman would. Dense, never clipped to the point of losing the reasoning.
- "You" is allowed where it reads naturally.
- **Beginner first.** Every term — acronym, statistic, code construct — is explained simply at its first appearance, the way the credit risk ratios table does it. Pointers and tables over dense paragraphs, and every table explains its values rather than listing them bare.
- British-Indian spelling. Lakh, crore, ₹.
- No enthusiasm — *crucial*, *powerful*, *robust*. No hedging filler — *it is important to note*, *generally speaking*.
- **No examples with named characters.** A borrower, a lender, a counterparty — the example carries the mechanism, not a story.
- **The teaching states the subject.** Only the context section talks about the reader or how to use the note, and nothing anywhere mentions interviews. Inside the teaching there is no *this gets asked*, no *this separates practitioners from readers* — the fact, stated clearly, carries its own weight.
- State positions. Uncertainty is stated as a fact about the uncertainty, with its date.

---

## 12. Jurisdiction

India first for amounts and examples. Regulation takes the global standard as the base — Basel, IFRS — and shows the UK, EU, US and India side by side, in one table, only where they genuinely differ. Where a global standard and India's adoption diverge, both are given and the divergence is named.

---

## 13. Currency of facts

- Anything time-sensitive — regulatory dates and status, products, model versions — is researched on the day of writing.
- It is then marked `[verify]` at the point of use. The marker records confidence; the figure is still stated in full. The context section, or a cheatsheet's first section, explains the marker.
- Rules move. SR 11-7, the US model risk guidance, was replaced by SR 26-2 on 17 April 2026 — caught in a first-pass check on 27 September 2026 [verify].
- No invented figures, dates or reference numbers — ever.

---

## 14. Boundaries between notes

Overlap across notes is expected; repetition within a note is the defect. Self-sufficiency means comprehension without leaving the page. A note that supersedes others shelves them in the same publish (section 17) — never two live versions of one subject.

---

## 15. Frontmatter and files

```yaml
---
title: "Credit Risk — The Cheatsheet"
description: "One or two sentences on what the note covers. Always quoted."
subject: finance
format: masterclass
order: 1
status: live
updated: 2026-09-28
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
| `status` | `draft` until the author says publish; the file handed to the agent carries `live`, the value the loader treats as published |
| `updated` | `YYYY-MM-DD`; drives sort order and the visible date |
| `verified` | `false` until the independent pass (section 18) |
| `tags` | Mandatory; a YAML list |

`series` and `track` were retired on 26 September 2026 with guest lectures. V8's `created`, `collection` and `related` fields are not carried by current notes.

Files live flat in `content/`; the loader does not scan subfolders. Shelved notes live in `shelved/` at the repo root, which the loader cannot read. The filename is the URL — lowercase, hyphenated, no dates, no version numbers — and is chosen once.

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
   - no table alignment markers, and no "Check yourself" or mention of interviews;
   - every table row with the same column count, and no `|` inside a cell;
   - code fences balanced;
   - the heading list, word count and `[verify]` count.
7. Render every formula with KaTeX in strict mode, then run a beginner pass: every term explained at first appearance, every table explained, nothing the brief did not ask for.
8. Deliver one complete file with `present_files`. No placeholders, no batching, no "part 1 of 3".

**Editing a delivered note:** locate anchor strings and replace between them — never line numbers, never sed. **If a note is poor, rebuild it.** Patching degrades; rebuilding restores.

---

## 17. Publishing and shelving (the IDE agent)

The IDE is Antigravity, on Windows PowerShell. It gets one ready-to-paste prompt per job.

**Every prompt:**

- Opens with the task and its scope: what may change and what must not. No new sections, links, buttons, embeds or features beyond the task.
- Names exact files and slugs. Never select notes by a field value — "move everything with `subject: ai`" would have swept the ML note away with the two notes meant.
- Works on `main`, with no new branch. One git command at a time, never chained with `&&`.
- Never starts the dev server, opens a browser or takes screenshots. Checks run through code, git and `npx tsc --noEmit`; the author checks the live site himself.
- **Never stops for approval** (27 September 2026 — small changes should not cost the author's time). Careful checks are built into the prompt; if one fails, the agent fixes it and re-runs every check, then pushes directly to `main`.
- Reads its full diff and reverts anything outside the scope. Stages only the task's files and reports unrelated changes without staging them.
- Ends with a final summary of the commit hash and the files changed, nothing else.

**Publishing a note.** Save the attached file into `content/` byte for byte — no formatter or linter, no re-wrapping, and never copy the description or any frontmatter value into the body. Fingerprint checks: the exact first heading after the frontmatter; the number of `<svg` occurrences and of lines that are exactly `$$`; subject, format and status values the loader accepts (change only those fields if not); what each subject section shows, read from the loader logic; and `git status` showing only the expected files.

**Shelving** is the default way off the app; nothing is deleted. `git mv` the note into `shelved/` at the repo root, with any assets only it uses; if the name is taken, add the date, as in `credit-risk-end-to-end-cheatsheet-2026-09-28.md`. `shelved/README.md` says to move a file back into `content/` to republish it. Then search the codebase for the slug and title and remove every reference outside `shelved/` — featured lists, sitemap, search index, redirects, stats and links in other notes. Republishing is the reverse move.

**Retiring** with `git rm` is only for a note the author wants gone for good.

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
| Tables | ScrollTable — sticky first column, scroll, mobile collapse; every column left-aligned by the app's CSS inside note content |
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
| Alignment markers in a divider row (`:--`, `--:`, `:-:`) | Columns sit left, right and centre at random | Plain `---` dividers; the app left-aligns |
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
| No transparent icons | They vanish in dark tabs, in Google's circle crop and on iOS | Never |
| No new logo artwork and no re-typeset wordmark | The brand files exist; a near-match looks amateur | Never |
| No positioning change on one surface only | The site and the channel carry one vision | Never |
| No questions, answer blocks or interview banks in notes | They cluttered the read | The author asks for them |
| No mention of interviews or interview preparation in notes | The notes teach a subject | Never |
| No topics the author did not ask for | The first profile note drifted and was rebuilt | Never |
| No approval stops in agent prompts | The author's time; checks are built in | Never |
| No selecting notes by a field value in agent prompts | It sweeps in notes meant to stay | Never |
| No table alignment markers | Inconsistent columns | Never |
| No framing Health around one app | Health is broader than Parents Health OS | Never |
| No changing a note's URL | Shared links break | Never |
| ~~AI-first: an AI track plus guest lectures~~ | *22 September 2026 home page* | **Replaced 26 September 2026 — four subjects, machine learning under AI (section 1)** |
| ~~`series` and `track` frontmatter~~ | *Track-based home page* | **Replaced — `subject` and `format` (section 15)** |
| ~~Finance, risk and AI — whatever I'm studying that week~~ | *V9 positioning* | **Replaced — Finance, health and AI, and now and then, life** |
| ~~No colour~~ | *Monochrome identity* | **Expired 26 September 2026 — pastel palette for figures (section 7); the site chrome stays black and white** |
| ~~No second person~~ | *Voice* | **Expired — "you" where it reads naturally** |
| ~~Questions chosen per note; rapid-fire banks~~ | *V9 and V10* | **Retired 27 September 2026 — no questions in notes (section 9)** |
| ~~Empty subjects hidden~~ | *V10* | **Replaced 27 September 2026 — the Coming soon card (section 1)** |
| ~~Start here card featuring the beginner article~~ | *V10* | **Hidden 27 September 2026 when the article was shelved** |
| ~~Inventory stop; stop before the push and wait for "go"~~ | *V9 and V10 agent prompts* | **Replaced 27 September 2026 — built-in checks and a direct push (section 17)** |
| ~~Retire with `git rm`~~ | *V9 and V10* | **Replaced — shelve by default (section 17)** |
| ~~Full-coverage notes by default~~ | *V9 and V10* | **Replaced 28 September 2026 — the Pareto cheatsheet (section 3)** |
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
- **Pareto.** Does the note fit about 20 minutes, and is every section in the 20% that handles 80%?
- **Beginner.** Is every term explained at its first appearance, and every table explained?
- **Asked.** Does the note contain anything the brief did not ask for?
- **Forcing.** Would any table read better as a sentence, or any paragraph as a table, figure or formula?
- **Numbers.** Is every number computed by script and derived before it is used?
- **Figures.** Are they phone-first, on the palette, and looked at as images?
- **Meta.** Does anything outside the context section talk about the reader or the note itself, or mention interviews?
- **Repetition.** Does any paragraph repeat what was already established?
- **Subtraction.** Remove any paragraph. Is the note worse?
- **Marker.** Was every time-sensitive fact researched today and marked `[verify]`?
- **Frontmatter.** All fields present, description quoted, subject a valid id, format set, status right for its stage, file flat in `content/`?
- **Sync.** If the positioning moved, did the site copy, metadata, manifest and channel description move together?
- **Render.** Did the verification script and the strict KaTeX pass both come back clean?
- **Expiry.** Does any rule followed here have a reason that no longer holds? If so, edit this file now.
