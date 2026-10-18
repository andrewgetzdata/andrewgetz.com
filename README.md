# Andrew Getz - Portfolio & Blog

A modern, performant personal portfolio and blog built with [Astro](https://astro.build) and following [Vercel's Geist design principles](https://vercel.com/geist/introduction).

## 🚀 Features

- **Modern Stack**: Built with Astro v5, TypeScript, and modern CSS
- **Design System**: Clean, minimalist design following Swiss design principles
- **Performance**: Static site generation with excellent Core Web Vitals
- **Content Management**: Markdown-based blog and project showcases
- **SEO Optimized**: Comprehensive meta tags, structured data, and sitemap
- **Accessibility**: WCAG AA compliant with semantic HTML and ARIA support
- **Responsive**: Mobile-first design that works beautifully on all devices
- **Dark/Light Themes**: Theme toggle with system preference detection

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build) - Static site generation
- **Styling**: CSS with custom properties, Geist design system
- **Typography**: Geist Sans & Geist Mono fonts
- **Content**: Markdown with frontmatter, Astro Content Collections
- **Deployment**: Vercel (primary), Netlify (configured)
- **Forms**: Netlify Forms for contact functionality
- **Analytics**: Privacy-focused analytics (Vercel/Plausible/Google)

## 📁 Project Structure

```
src/
├── components/      # Reusable UI components
├── content/         # Markdown content (blog posts & projects)
├── layouts/         # Page layout templates
├── pages/           # File-based routing
└── styles/          # Design system CSS

public/
├── design-system.css  # Complete design system
├── fonts.css         # Typography definitions
└── robots.txt        # SEO configuration
```

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Content Management

### Adding Blog Posts
Create a new Markdown file in `src/content/blog/`:

```markdown
---
title: "Your Post Title"
description: "Brief description for SEO"
pubDate: 2024-01-01
tags: ["development", "astro"]
featured: false
---

Your content here...
```

### Adding Projects
Create a new Markdown file in `src/content/projects/`:

```markdown
---
title: "Project Name"
description: "Project description"
startDate: 2024-01-01
status: "completed"
category: "web-development"
technologies: ["Astro", "TypeScript"]
featured: true
---

Detailed project case study...
```

## 🎨 Design Philosophy

This site follows Geist design principles:

- **Simplicity**: Remove unnecessary elements
- **Minimalism**: Clean layouts with generous whitespace
- **Speed**: Optimized performance
- **Precision**: Consistent spacing and typography
- **Clarity**: Clear navigation and content hierarchy

## 🔧 Customization

The design system is built with CSS custom properties for easy customization:

```css
:root {
  --bg-primary: #000000;
  --text-primary: #ffffff;
  --accent-secondary: #0070f3;
  /* ... more variables */
}
```

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **Bundle Size**: Minimal JavaScript, efficient CSS
- **SEO**: Comprehensive meta tags and structured data

## 🚢 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Deploy automatically on push to main
3. Configure environment variables if using analytics

### Netlify
1. Configure build settings: `npm run build` → `dist`
2. Enable form handling for contact form
3. Deploy with included `netlify.toml` configuration

## 📄 Documentation

For comprehensive documentation on maintaining and extending this site, see [CLAUDE.md](./CLAUDE.md).

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Connect

- **Website**: [andrewgetz.com](https://andrewgetz.com)
- **Email**: [Contact form](https://andrewgetz.com/contact)
- **GitHub**: [@andrewgetz](https://github.com/andrewgetz)
- **LinkedIn**: [Andrew Getz](https://linkedin.com/in/andrewgetz)

---

Built with ❤️ using Astro and deployed on Vercel.
