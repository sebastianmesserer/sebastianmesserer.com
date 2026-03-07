# sebastianmesserer.com — Site Blueprint

**Hand this file to Claude Code along with the prototype.html file as your design reference.**

---

## What I'm building

A minimal personal essay site — like dario.com — to host thought leadership pieces about Content 2.0 and Content OS™. Dark theme, serif typography, sidebar table of contents, nothing else.

## Tech stack

- **Framework:** Astro (static site generator)
- **Hosting:** GitHub Pages (free)
- **Domain:** sebastianmesserer.com (to be registered at Namecheap or Cloudflare)
- **Content format:** Markdown files with frontmatter
- **Styling:** Plain CSS (no Tailwind, no component library)

## Site structure

```
sebastianmesserer.com/
├── src/
│   ├── layouts/
│   │   ├── BaseLayout.astro        # HTML shell, meta tags, fonts
│   │   └── EssayLayout.astro       # Sidebar TOC + essay body
│   ├── pages/
│   │   ├── index.astro             # Homepage: name, intro, essay list
│   │   └── about.astro             # Short bio (optional, can add later)
│   ├── content/
│   │   └── essays/
│   │       └── content-2-0.md      # Each essay = one markdown file
│   └── styles/
│       └── global.css              # All styles in one file
├── public/
│   ├── favicon.ico
│   └── og-image.png                # Open Graph image for social sharing
├── astro.config.mjs
└── package.json
```

## Pages

### Homepage (`/`)
- My name as header: "Sebastian Messerer"
- One short paragraph introducing who I am and what I write about
- List of essays: title + date, each linking to the essay page
- Top nav: "Essays" and "About"
- That's it. No hero image, no grid, no cards.

### Essay pages (`/essays/[slug]`)
- Sidebar on left: table of contents auto-generated from H2 headings in the markdown
- Essay body on right: title, optional subtitle (italic), date, then the essay in prose
- Footer at bottom of essay: short author bio, links to LinkedIn and email
- On mobile: TOC hidden, essay goes full width

## Content model (markdown frontmatter)

```markdown
---
title: "Content 2.0: A Paradigm Shift in How Companies Use Content"
subtitle: "Why content should be infrastructure, not a marketing function"
date: 2026-03-15
description: "Most companies treat content as a marketing function. Content 2.0 reframes it as organisational infrastructure."
---

Essay body in markdown here...
```

## Design specifications

Reference: the attached prototype.html file. Match this aesthetic closely.

### Typography
- **Headings:** Playfair Display (serif), 400 weight for titles, 700 for H3
- **Body text:** Playfair Display for essay prose (serif reading experience)
- **UI elements** (nav, dates, TOC, footer): Source Sans 3, lighter weight
- Load from Google Fonts

### Colors
- Background: `#1a1a18` (warm near-black)
- Text: `#e8e4dc` (warm off-white)
- Muted text: `#9a9590`
- Dim text: `#6b6560`
- Accent: `#c8b8a0` (warm gold, used sparingly for links)

### Layout
- Max content width: 680px for essay body
- Sidebar TOC: ~260px wide, sticky, left of essay
- Comfortable spacing — generous line-height (1.75 for body)
- Breakpoint at ~860px: hide TOC, essay goes full width

### Details
- Blockquotes: left border in accent color, italic, muted text
- Links: accent color, subtle underline that strengthens on hover
- Horizontal rules: very subtle, rgba white at 6% opacity
- Page load: gentle fade-up animation (subtle, not flashy)

## SEO requirements (the basics)

These are standard Astro practices — Claude Code will know how to implement them:

1. **Unique `<title>` and `<meta name="description">` per page** — pulled from frontmatter
2. **Open Graph tags** — `og:title`, `og:description`, `og:image`, `og:url`, `og:type`
3. **Twitter card meta tags** — `twitter:card`, `twitter:title`, `twitter:description`
4. **Canonical URL** on every page
5. **Semantic HTML** — `<article>`, `<header>`, `<nav>`, `<aside>`, `<main>`
6. **Auto-generated `sitemap.xml`** — Astro has a sitemap integration (`@astrojs/sitemap`)
7. **Clean URLs** — `/essays/content-2-0` not `/essays/content-2-0.html`
8. **Fast load times** — Astro ships zero JS by default, which handles this
9. **`robots.txt`** — allow all crawlers
10. **Structured data (JSON-LD)** — Article schema on essay pages with author, datePublished, headline

## GitHub Pages deployment

Use the official Astro GitHub Pages guide. Set up a GitHub Action that builds and deploys on push to `main`. The workflow file goes in `.github/workflows/deploy.yml`.

## How to get started with Claude Code

1. Install Claude Code: `npm install -g @anthropic-ai/claude-code`
2. Create a new directory: `mkdir sebastianmesserer.com && cd sebastianmesserer.com`
3. Start Claude Code: `claude`
4. Give it this prompt:

---

**Prompt for Claude Code:**

> I'm building a personal essay website. I have a blueprint document and an HTML prototype that shows the exact design I want.
>
> Please:
> 1. Scaffold an Astro project
> 2. Implement the design from prototype.html as Astro layouts and CSS
> 3. Set up the content collection for markdown essays
> 4. Auto-generate a sidebar TOC from H2 headings on essay pages
> 5. Add SEO: meta tags from frontmatter, sitemap, robots.txt, JSON-LD for articles
> 6. Set up GitHub Pages deployment with a GitHub Action
> 7. Create one sample essay so I can see it working
>
> Here's my blueprint: [paste this document]
> And here's the design prototype: [paste prototype.html]

---

## Adding a new essay

Once the site is built, publishing a new piece is:

1. Create a new `.md` file in `src/content/essays/`
2. Add the frontmatter (title, subtitle, date, description)
3. Write the essay in markdown (use `## Headings` for TOC entries)
4. `git add . && git commit -m "new essay" && git push`
5. GitHub Action builds and deploys automatically

## Future additions (not now)

- RSS feed (easy in Astro — add when you have 3+ essays)
- Newsletter signup (when audience warrants it)
- About page with fuller bio
- Custom domain email (e.g., hello@sebastianmesserer.com)
