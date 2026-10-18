# Andrew Getz - Portfolio & Blog

Personal portfolio and writing site at [andrewgetz.com](https://andrewgetz.com), built with [Astro](https://astro.build) and [Vercel Geist design principles](https://vercel.com/geist/introduction).

## Features

- **Modern stack**: Astro v5, TypeScript, modern CSS
- **Design system**: Clean, minimalist Geist-inspired UI (dark default + light theme)
- **Performance**: Static site generation
- **Content**: Markdown via Astro Content Collections (`src/content/posts/`)
- **SEO**: Meta tags, structured data, sitemap
- **Accessibility**: Semantic HTML and ARIA support
- **Responsive**: Mobile-first layout
- **Themes**: Dark/light toggle with system preference detection

## Tech Stack

- **Framework**: [Astro](https://astro.build) — static site generation
- **Styling**: CSS custom properties, Geist design system
- **Typography**: Geist Sans, Geist Mono, Geist Pixel
- **Content**: Markdown + frontmatter, Astro Content Collections
- **Deployment**: GitHub Pages via GitHub Actions
- **Analytics**: Privacy-focused (Plausible)

## Project Structure

```
src/
├── components/      # Reusable UI components
├── content/
│   ├── posts/       # All writing and work (Markdown)
│   └── config.ts    # Content collection schema
├── layouts/         # Page layout templates
└── pages/           # File-based routing

public/
├── CNAME              # Custom domain (andrewgetz.com)
├── design-system.css  # Design system
├── fonts.css          # Typography definitions
└── robots.txt         # SEO configuration
```

## Quick Start

```bash
# Install dependencies
npm install

# Start development server (localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Content Management

All content lives in `src/content/posts/` with a unified schema. Create a new Markdown file:

```markdown
---
title: "Your Post Title"
description: "Brief description for SEO and previews"
pubDate: 2026-01-01
tags: ["craft"]
featured: false
type: "writing"
category: "blog"
view_source: ""
draft: false
---

Your content here...
```

| Field | Notes |
|-------|--------|
| `type` | `"writing"` for articles; `"code"` / `"work"` for project writeups |
| `category` | e.g. `"blog"`, `"web development"` |
| `view_source` | GitHub URL if relevant; else `""` |
| `featured` | `true` shows on the homepage featured strip |
| `draft` | `true` hides from listing pages while drafting |

Live URLs: `https://andrewgetz.com/content/<slug>/`. Listing page: `/work`.

AI helpers: `.claude/skills/new-blog-post` and `.claude/skills/new-project` (both write to `posts/`).

## Design Philosophy

- **Simplicity**: Remove unnecessary elements
- **Minimalism**: Clean layouts with generous whitespace
- **Speed**: Optimized performance
- **Precision**: Consistent spacing and typography
- **Clarity**: Clear navigation and content hierarchy

## Customization

Design tokens live in `public/design-system.css`:

```css
:root {
  --bg-primary: #000000;
  --text-primary: #ffffff;
  --accent-secondary: #0070f3;
  /* ... more variables */
}
```

## Deployment

Push to `main` → GitHub Actions (`.github/workflows/deploy.yml`) builds with `npm ci` + `astro build` and deploys to GitHub Pages. Custom domain: `andrewgetz.com` (`public/CNAME`).

## Documentation

For maintaining and extending this site, see [CLAUDE.md](./CLAUDE.md).

## License

This project is open source and available under the [MIT License](LICENSE).

## Connect

- **Website**: [andrewgetz.com](https://andrewgetz.com)
- **GitHub**: [@andrewgetz](https://github.com/andrewgetz)
- **LinkedIn**: [Andrew Getz](https://linkedin.com/in/andrewgetz)

---

Built with Astro and deployed on GitHub Pages.
