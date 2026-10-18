---
name: new-project
description: Create a new project/work entry with proper frontmatter, schema validation, and site integration. Use when adding a project case study or work showcase.
argument-hint: [project-title]
---

Create a new project / work entry titled "$ARGUMENTS".

All content uses the unified `posts` collection — there is no separate `projects` collection. Project writeups are posts with `type: "code"` (or `"work"`).

## Steps

1. **Generate the slug** from the title (lowercase, hyphens, no special characters).

2. **Create the file** at `src/content/posts/<slug>.md` with this frontmatter (all fields, this order; use `""` when unused):

```yaml
---
title: "$ARGUMENTS"
description: "Brief 1–2 sentence description of the project."
pubDate: YYYY-MM-DD
tags: ["portfolio"]
featured: false
type: "code"
category: "web development"
view_source: ""
draft: true
---
```

3. **Frontmatter schema** (from `src/content/config.ts` — live source of truth):
   - `title` (string, required)
   - `description` (string, required)
   - `pubDate` (Date, required) — publication / ship date for the writeup
   - `tags` (string[], default `[]`) — reuse from existing posts where possible
   - `featured` (boolean, default `false`) — homepage featured strip; keep selective
   - `type` (string) — `"code"` for build/case-study writeups; `"work"` is also fine when that fits better
   - `category` (string) — e.g. `"web development"`
   - `view_source` (string) — GitHub / source URL if relevant; else `""`
   - `draft` (boolean, default `false`) — use `true` while iterating

   Do **not** add project-only fields from older docs (`startDate`, `endDate`, `status`, `technologies`, `github`, `url`, `client`, `image`) — they are not in the schema. Put tech stack, links, and outcomes in the Markdown body.

4. **Write the project body** as a case study in Markdown:
   - **Project Overview** — what and why
   - **Technical Implementation** — how it was built, key decisions
   - **Results / Impact** — outcomes, metrics
   - **Lessons Learned** — takeaways
   - Include code snippets and links where relevant

5. **Check tag consistency** — read existing posts in `src/content/posts/` (especially `type: "code"`) and reuse tags.

6. **Places that may need updating**:
   - If `featured: true`, verify it shows on the homepage (`src/pages/index.astro`)
   - Listing/filters on `src/pages/work.astro` auto-discover `type` and `tags`
   - Detail pages are at `/content/<slug>/` via `src/pages/content/[...slug].astro`
   - Live URL: `https://andrewgetz.com/content/<slug>/`

7. **Validate** with `npm run build`. Set `draft: false` when ready to ship, then commit and push to `main`.

8. **Optional** — run the `edit-copy` skill on the file before publishing.
