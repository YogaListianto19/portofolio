# Yoga Listianto — Portfolio

Personal site of a Full Stack & AI Engineer who designs, builds, and ships products end to end: LLM agents, SaaS web apps, WhatsApp automation, and ERP (Odoo) integrations.

**Live:** https://yogalistianto19.github.io/portofolio/

## What's inside

- **Services**: what I build for clients (AI agents & automation, SaaS & web apps, product design, ERP & integrations)
- **Case studies**: 12 projects, filterable. Each one covers the problem, my role, what I built, the AI inside, product decisions, and outcome.
- **About, Skills, Experience, Process**, and a contact section

Client and employer systems are described without names or data. Project thumbnails are drawn in CSS, not taken from screenshots, so no confidential screens are exposed.

## Stack

React 19 · Vite 7 · Tailwind CSS 3 · Framer Motion · Lucide icons. Deployed to GitHub Pages.

Design notes:
- Monochrome zinc base with a single blue accent
- Fonts: Archivo (headings), Space Grotesk (body), JetBrains Mono (labels)
- Light and dark themes: the site follows the system setting, and you can switch manually
- Honours `prefers-reduced-motion`
- Keyboard-accessible case-study dialog (Esc closes it, focus is restored)

## Editing content

All copy lives in [`src/data/portfolio.js`](src/data/portfolio.js). That includes the profile, stats, services, projects, skills, experience, process, and contact details. Sections only render what that file contains.

To add a case study, append an object to `projects`. The illustrative thumbnail is set with `visual.kind`, which is one of `chat`, `dashboard`, `flow`, `invite`, `ledger`, `mobile`.

## Run & deploy

```bash
npm install
npm run dev      # http://localhost:5173/portofolio/
npm run lint
npm run deploy   # builds and publishes dist/ to the gh-pages branch
```
