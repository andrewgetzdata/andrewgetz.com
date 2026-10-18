---
name: new-blog-post
description: Create a new blog post with proper frontmatter, schema validation, and site integration. Use when adding writing or blog content to the site.
argument-hint: [title]
---

Create a new blog post titled "$ARGUMENTS".

## Steps

1. **Generate the slug** from the title (lowercase, hyphens, no special characters).

2. **Create the file** at `src/content/posts/<slug>.md` with this frontmatter (all fields, this order; use `""` when unused):

```yaml
---
title: "$ARGUMENTS"
description: "1–2 sentences for SEO and previews — what the reader gets."
pubDate: YYYY-MM-DD
tags: ["ai"]
featured: false
type: "writing"
category: "blog"
view_source: ""
draft: true
---
```

3. **Frontmatter schema** (from `src/content/config.ts` — live source of truth):
   - `title` (string, required)
   - `description` (string, required)
   - `pubDate` (Date, required)
   - `tags` (string[], default `[]`)
   - `featured` (boolean, default `false`) — homepage featured strip; keep selective
   - `type` (string) — `"writing"` for articles; `"code"` / `"work"` for build writeups (prefer `new-project` skill for those)
   - `category` (string) — e.g. `"blog"`, `"web development"`
   - `view_source` (string) — GitHub URL if relevant; else `""`
   - `draft` (boolean, default `false`) — use `true` while iterating

   Do **not** add `author`, `image`, or `updatedDate` — they are not in the schema.

4. **Write the post body** in Markdown:
   - Target ~800–2000 words for substantial posts (shorter is fine for notes)
   - Use H2 (`##`) for main sections, H3 (`###`) for subsections
   - Include code examples with proper syntax highlighting when relevant
   - Voice: conversational but professional, avoid jargon
   - End with a conclusion or takeaway

5. **Check tag consistency** — read existing posts in `src/content/posts/` and reuse tags where appropriate. Prefer a small set (e.g. `ai`, `craft`, plus one concrete tag when useful).

6. **Places that may need updating**:
   - If `featured: true`, verify it appears on the homepage (`src/pages/index.astro`)
   - New `type` / `tags` values auto-appear as filters on `src/pages/work.astro`
   - Live URL after publish: `https://andrewgetz.com/content/<slug>/`

7. **Validate** with `npm run build` (catches schema errors). Set `draft: false` when ready to ship, then commit and push to `main`.

8. **Optional** — run the `edit-copy` skill on the file before publishing.

## Writing Style Guide

- Write in first person
- Focus on practical insights over theory
- Use short paragraphs and clear headings
- Include "what I learned" or actionable takeaways
- Keep sentences concise — favor clarity over cleverness
