# Loud Recall

**A personal learning library built for explaining ideas in public.** Loud Recall turns long-form notes into a browsable reading experience, with subject shelves, search, structured masterclasses, a responsive reader, and diagrams that can be explored at full size.

> **Project status:** a content-led web prototype with a working reader and three published notes. The content metadata currently marks each note as unverified. No accounts, database, or editorial workflow are implemented.

## What is here

- A four-subject shelf for Finance, Health, AI, and Life, with live notes grouped by subject and format.
- Search across note titles, descriptions, tags, and subject names; subject filters are shareable through the `?subject=` URL parameter.
- A reading view with estimated reading time, a scroll progress indicator, desktop/mobile table of contents, and responsive Markdown features including math, code, callouts, tables, SVG, and Mermaid diagrams.
- File-based publishing: live `.md` and `.html` notes under `content/` become slug routes and sitemap entries.

## Built with

Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, and a Unified/Remark/Rehype Markdown pipeline. Content metadata is parsed from frontmatter with `gray-matter`; note files are the source of truth. There is no application database or browser-backed persistence in the inspected source.

## Explore and run locally

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`. Use a Node.js version supported by the Next.js version in `package.json`.

To add a note, create a uniquely named `.md` or `.html` file below `content/<subject>/`, give it valid frontmatter, and set `status: live` when it should appear. See [PROJECT_BLUEPRINT.md](PROJECT_BLUEPRINT.md) for the content contract, rendering flow, architecture, algorithms, troubleshooting, and limitations.

## Project guide

- [Technical blueprint](PROJECT_BLUEPRINT.md)
- [Application route](app/page.tsx)
- [Document route and metadata](app/%5Bslug%5D/page.tsx)
- [Content loading and frontmatter](lib/markdown.ts)
- [Markdown renderer](lib/render.tsx)
- [Subject catalogue](lib/subjects.ts)

## Maturity and boundaries

The repository contains a functioning implementation of its reading and browsing surfaces, but its content catalogue is small and its metadata defaults missing verification values to “unverified.” The project has no tests or deployment checks documented here; this documentation task inspected source only and did not install dependencies, build the app, or verify a hosted instance. Read the blueprint for details on HTML trust boundaries and other implementation limits.
