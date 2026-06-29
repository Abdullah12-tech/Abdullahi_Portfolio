# Codewithhayee — Portfolio

The personal portfolio of **Abdullah Akinkunmi Sheriff** (Codewithhayee) — Frontend Developer & Full Stack Software Engineer based in Ibadan, Nigeria.

Built with React, TypeScript, Tailwind CSS, and Framer Motion. SEO-optimized, accessible, and designed to look and feel like a senior engineer's portfolio.

## ✨ Highlights

- **Signature design language**: every section is framed through a developer's own tools — terminal prompts, `git log`, `ls`, and build-log output — so the structure of the site itself reflects who Abdullah is.
- **⌘K Command Palette**: press `Cmd/Ctrl + K` anywhere to jump to any section, toggle theme, download the résumé, or open social links — like a real CLI tool.
- **Animated build-log hero**: the hero's terminal panel animates through Abdullah's real performance metrics as if running a build pipeline.
- **Filterable, case-study project grid**: click any project to open a full case study modal — features, challenges & solutions, business impact, tech stack, and links.
- **Dark/light mode**, scroll progress bar, back-to-top button, and full keyboard accessibility.
- **SEO-first architecture**: per-page meta tags, Open Graph & Twitter cards, canonical URLs, JSON-LD structured data (Person, WebSite, BlogPosting), `robots.txt`, and `sitemap.xml`.
- **Blog**: three real, original posts already written and ready to publish, with category filtering and individual SEO-tagged post pages.

## 🛠 Tech Stack

React · TypeScript · Vite · Tailwind CSS · Framer Motion · React Router · React Helmet Async · Lucide Icons

## 🚀 Getting Started

```bash
npm install
npm run dev       # starts local dev server
npm run build      # type-checks and builds for production
npm run preview    # preview the production build locally
```

## 📁 Project Structure

```
src/
  components/
    layout/       Navbar, Footer, Layout, CommandPalette
    seo/           SEO component (react-helmet-async wrapper)
    ui/            Reusable UI primitives (buttons, cards, badges, terminal window…)
  sections/        Hero, About, Experience, Skills, Projects, Achievements,
                    Testimonials, BlogPreview, Contact
  pages/           Home, BlogIndex, BlogPost, NotFound
  data/            All content lives here — projects.ts, profile.ts, blog.ts
  context/         ThemeContext (dark/light mode)
  hooks/           useScrollProgress, useActiveSection, useMagnetic, useLockBodyScroll
  types/           Shared TypeScript interfaces
public/
  resume.pdf       Powers the "Download résumé" button
  og-image.png     Social share image
  robots.txt, sitemap.xml
```

## ✍️ Editing Content

Everything you'll want to update regularly lives in `src/data/`:

- **`projects.ts`** — add, edit, or reorder projects. Each project needs `liveUrl` and `githubUrl` filled in where available — several entries are currently missing live URLs since I didn't have them; add them as soon as those projects are deployed.
- **`profile.ts`** — experience history, skills, achievements, performance metrics.
- **`blog.ts`** — blog posts. Three original posts are included; add more by following the same shape.

> **Note on project covers**: project cards use a generated abstract gradient cover (no fake screenshots), since real screenshots weren't available at build time. Swap in real product screenshots in `src/components/ui/ProjectCover.tsx` once you have them — recruiters respond very well to real UI.

> **Note on testimonials**: the testimonials section is intentionally left as an honest "coming soon" empty state rather than fabricated quotes. Replace the placeholder cards in `src/sections/Testimonials.tsx` with real testimonials as you collect them — this matters more for credibility than it might seem.

## 🌐 Deployment

This is a static Vite app — it deploys cleanly to **Vercel** (recommended, matches your existing stack) or Netlify:

```bash
npm run build
# deploy the `dist/` folder
```

On Vercel: import the repo, framework preset "Vite", build command `npm run build`, output directory `dist`.

### Before going live, update:

1. Replace `https://codewithhayee.dev` across `index.html`, `src/components/seo/SEO.tsx`, `public/sitemap.xml`, and `public/robots.txt` with your real domain.
2. Add real `liveUrl`s for deployed projects in `src/data/projects.ts`.
3. Drop in real project screenshots if/when available.
4. Consider wiring the contact form to a real backend (e.g. Formspree, Resend) instead of the current `mailto:` fallback, if you want submissions to land somewhere other than the visitor's own email client.

## ♿ Accessibility

- Visible focus states on all interactive elements
- `prefers-reduced-motion` respected globally
- Semantic landmarks and `aria-label`s on icon-only buttons
- Full keyboard support in the command palette and project modal (`Esc` to close, arrow keys to navigate)

---

Built for Abdullah Akinkunmi Sheriff — Codewithhayee.

# Personal Portfolio Website

A modern, responsive portfolio website showcasing my professional experience, technical skills, projects, achievements, and software development journey.

## 🌟 Overview

This portfolio was designed and developed to serve as a central hub for my professional presence online. It highlights my experience as a Full Stack Developer, showcases selected projects, and provides an easy way for recruiters, clients, and collaborators to learn more about my work.

The website focuses on performance, accessibility, responsiveness, and user experience while demonstrating modern web development practices.

## 🚀 Features

* Responsive design for all devices
* Modern and intuitive user interface
* Project showcase section
* Professional experience timeline
* Technical skills overview
* Contact functionality
* Optimized performance and loading speed
* SEO-friendly structure
* Clean and maintainable codebase

## 🛠️ Technologies Used

### Frontend

* React.js
* Next.js
* TypeScript
* JavaScript (ES6+)
* HTML5
* CSS3
* Tailwind CSS

### Tools & Deployment

* Git & GitHub
* Vercel
* Figma

## 📂 Project Structure

```bash
src/
├── components/
├── pages/
├── assets/
├── styles/
├── hooks/
├── utils/
└── data/
```

## 🎯 Goals

This project was built to:

* Present my professional background effectively
* Showcase real-world projects and achievements
* Demonstrate frontend and full stack development skills
* Create a professional online presence for recruiters and clients

## 💡 Key Highlights

* Clean and scalable architecture
* Mobile-first development approach
* Performance-focused implementation
* User-centered design principles
* Modern development best practices

## 📸 Live Demo

[View Portfolio](https://abdullahisheriff.name.ng)

## 🔧 Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/portfolio.git
```

Navigate to the project directory:

```bash
cd portfolio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

