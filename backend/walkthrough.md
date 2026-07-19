# ECE Roadmap – Landing Page & Routing Setup

## What Was Built

A modern, dark-themed landing page for the B.Tech Electronics Engineering Curriculum Roadmap, with client-side routing connecting it to the existing roadmap component.

### Screenshots

````carousel
![Landing Page — Hero, features grid, and footer](C:\Users\Hemil\.gemini\antigravity\brain\386a3847-dac3-48a2-bef6-adfb22ee4f1b\landing_page_verification_1775210145039.png)
<!-- slide -->
![Roadmap Page — Placeholder (replace with your React Flow component)](C:\Users\Hemil\.gemini\antigravity\brain\386a3847-dac3-48a2-bef6-adfb22ee4f1b\roadmap_page_verification_1775210174503.png)
````

---

## Files Created / Modified

| File | Action | Purpose |
|------|--------|---------|
| [vite.config.js](file:///d:/antigravity/frontend/vite.config.js) | Modified | Added `@tailwindcss/vite` plugin |
| [index.html](file:///d:/antigravity/frontend/index.html) | Modified | SEO meta tags, Inter font, dark body |
| [index.css](file:///d:/antigravity/frontend/src/index.css) | Rewritten | Tailwind v4 import + custom theme (colors, animations, glass utilities) |
| [main.jsx](file:///d:/antigravity/frontend/src/main.jsx) | Modified | Wrapped app in `BrowserRouter` |
| [App.jsx](file:///d:/antigravity/frontend/src/App.jsx) | Rewritten | Routes: `/` → LandingPage, `/roadmap` → CurriculumRoadmap |
| [Navbar.jsx](file:///d:/antigravity/frontend/src/components/Navbar.jsx) | **New** | Fixed glassmorphic navbar with active-route highlighting |
| [LandingPage.jsx](file:///d:/antigravity/frontend/src/pages/LandingPage.jsx) | **New** | Hero section, feature cards, stats, footer |
| [Roadmap.jsx](file:///d:/antigravity/frontend/src/Roadmap.jsx) | **New** | Placeholder — replace with your React Flow component |

## Design Highlights

- **Dark mode** with slate-950 background and electric blue / neon green accents
- **Glassmorphism** navbar and feature cards (`backdrop-filter: blur`)
- **Animated gradient** headline text
- **Floating background orbs** for depth
- **Glow effects** on the CTA button
- **Responsive** — works on mobile through desktop

## How to Integrate Your Roadmap

Replace the contents of `src/Roadmap.jsx` with your actual `CurriculumRoadmap` component. The routing is already wired — just make sure it exports as `default`.

## Dev Server

Running at **http://localhost:5173/** via `npm run dev` in `d:\antigravity\frontend`.
