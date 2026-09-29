<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Loud Recall — rules for any agent working in this repo

## Rendering rules (never break)
- Inline SVG size is controlled ONLY by the renderer: width 100%, max-width = viewBox width × 1.5 px, height auto, centred. Never "fix" diagram size inside a note. Never remove this renderer rule.
- Notes should write SVGs with a viewBox and no width/height attributes.
- Every `---` needs a blank line above it (otherwise it renders as a heading).
- Every `$$` display equation sits on its own lines with a blank line after it, before any "where:" list.
- Never copy frontmatter values (title, description) into the note body.
- Mermaid diagrams go in ```mermaid fences, rendered by MermaidDiagram.tsx.

## Workflow rules
- Work directly on main. No new branches.
- Never start the dev server. Never open a browser or take screenshots. Verify from code and git.
- Windows PowerShell: run git commands one at a time, never chained with &&.
- Notes live in content/. The owner adds and pushes notes himself; agents only touch notes when explicitly asked.
- Before committing: git status must show only files in the task's scope.

# Loud Recall Design, Typography & Layout Rules

## 1. Table & Navigation Layout Rules
- **No Zebra / Alternate Shading**: Tables MUST NOT use alternate row background colors (`tr:nth-child(even)`). Keep table rows simple, clean, and uniform with standard borders.
- **Mobile Viewport (< 1024px)**: Mobile tables use `overflow-x: auto` container with touch scroll, `width: max-content`, and `white-space: nowrap`. Sentences stay on a single line on mobile so text is never squished into narrow vertical columns.
- **Desktop Web Layout (>= 1024px)**: Tables use `table-layout: fixed !important`, `width: 100% !important`, and `white-space: normal !important` (`break-words`). All columns fit 100% within the desktop content area without horizontal scrollbar or edge clipping. `th:first-child` / `td:first-child` uses `24%` width allocation.
- **Table of Contents Auto-Scroll Sync**: Desktop TOC sidebar auto-scrolls the active heading (`activeId`) smoothly into view (`scrollIntoView({ block: 'nearest' })`) inside the `aside` sticky container so long TOC lists (e.g. 33 items) are never cut off or scrolled out of view. Item titles use `line-clamp-2` and full title tooltips.

## 2. Typography & Font Weight Rules
- **Body Text Font Weight**: Explicitly loaded Literata Google Font with weights `["400", "500", "600", "700"]`. Body text (`.prose`, `.prose p`, `.prose li`) MUST retain regular `400` font weight (never fake/synthesized bold).
- **Prose Font Size**: Desktop prose font size is balanced at `1.0625rem` (17px) with `line-height: 1.7`.
- **Dark Mode Optical Contrast & Hierarchy**: Headings (`h1`, `h2`, `h3`) and `strong` emphasis in Dark Mode use `#FFFFFF` (100% white) for bold sans-serif impact. Body text (`.prose p`, `.prose li`) in Dark Mode uses `--prose-body: #D4D4D8` (85% white) to eliminate light bloom/halation on dark backgrounds and keep thin serif strokes crisp. Muted TOC links use `#888888` (55% white).
- **Pre & Flow Diagrams**: Mobile uses `white-space: pre` with horizontal touch scroll. Desktop (>= 1024px) uses `white-space: pre-wrap`.

## 3. Workflow Rules
- **Do NOT open dev servers / browser subagents**: Do not start local dev servers or browser previews. Verify via `npm run build` and push directly to GitHub for Vercel deployment.
- **Preserve these design standards**: Any future changes MUST build directly on top of these verified rules without reverting or altering them.

# Craft Rules (Standing — Apply to Every Note in Every Series)
1. **Ground before naming**: Situation first, then the number the situation forces, then the term for it. A section that opens with a definition is a defect. This applies to every concept, not the hard ones only.
2. **One spine per document**: Every note runs on a single concrete instance carried from start to finish. Masterclass: an invented institution or system. Portfolio: the project itself. Article: the source actually read or watched. A document that is a sequence of topics has no spine and fails.
3. **One example extended, never several disconnected**: The same numbers carry forward. If a later section needs a figure, it comes from the running instance, not from a fresh set invented for that section.
4. **Arithmetic belongs in maths blocks**: KaTeX display or an aligned block for anything computed. Code fences are for literal code and literal fixed-width data only. Alignment padded with spaces is banned — it is fake and it collapses on a phone.
5. **Three or more enumerated items is a table**: Thresholds, tiers, weights, buckets, stages, limits. Never a semicolon list inside a sentence.
6. **Diagram node labels: 2 to 4 words**: Explanation goes in prose or a table beneath the diagram. Never draw what a table already says better — if a table under the diagram carries the same content, delete the diagram.
7. **Dependency order is mandatory**: No term, formula or framework is used before it is built. A forward reference is a defect, not a stylistic choice.
8. **Length is never the fix**: A section that is not landing needs grounding, not more words. A rewrite is allowed to be shorter in prose and heavier in worked machinery.
9. **Sweep the class, not the instance**: When one instance of a fault is flagged, every instance of that class in the document is found and fixed in the same pass. Fixing only what was named is how defects survive rewrites.

