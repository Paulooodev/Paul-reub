# Paulreub | Heavy Civil Engineering

The official website for Paulreub, a heavy civil engineering and construction company. A single-page marketing site with scroll-driven animations, a draggable project gallery, and a bold industrial design.

## 🏗️ Tech Stack

| Tool | Role |
| :--- | :--- |
| **Next.js (App Router)** | Framework — routing, SSR, image optimization |
| **TypeScript** | Type-safe components and data |
| **Tailwind CSS v4** | Styling — CSS-first theme with custom brand palette |
| **Framer Motion** | Animations — reveals, count-ups, carousel drag physics |

## 🎨 Brand

* **Fonts:** Sen (display/body) · Space Mono (labels & small caps)
* **Palette:** `#B4B804` (brand yellow-green) · `#1A1A1A` (night) · `#F6F6F2` (paper)
* **Architecture:** All colors and fonts are defined once in `src/app/globals.css` (`@theme`) to maintain a strict design system.

## 📁 Project Structure

```text
paul-reub/
├── public/
│   └── logo.png             # company logo
├── src/
│   ├── app/
│   │   ├── layout.tsx       # root layout — fonts, metadata
│   │   ├── page.tsx         # homepage — assembles all sections
│   │   └── globals.css      # Tailwind theme (brand colors, fonts)
│   └── components/
│       ├── Navbar.tsx       # sticky dark nav + mobile menu
│       ├── Hero.tsx         # full-height hero, staggered entrance
│       ├── StatsBar.tsx     # animated count-up stats
│       ├── Reveal.tsx       # reusable scroll-reveal wrapper
│       └── ...              # (in progress)
└── ...