# Site Architecture & Context Audit (2026-02-22)

## Purpose
This audit documents the current portfolio implementation so future work aligns with the live codebase, narrative direction, and IA decisions.

## Current Technical Baseline
- Framework: Next.js App Router (project currently on Next 16.1.5)
- Language: TypeScript (`.tsx`)
- Styling: Tailwind CSS v4 + custom design tokens in `src/app/globals.css`
- Motion/UX libs: Framer Motion, Lenis, Radix Dialog, cmdk, Floating UI, Sonner, nuqs
- 3D module: React Three Fiber + Drei (used selectively)

## Route Inventory (Current Site)
### Core pages
- `/` Home gateway (Career + Creative split)
- `/career` project portfolio hub (filters, search, side projects)
- `/about`
- `/resume`
- `/creative`
- `/cpse`
- `/virtual-lab`

### Project case-study routes under `/projects/*`
- `breda`
- `cranky-game-jam`
- `cranky-squirrel-annihilator`
- `fallout-level-design`
- `repo-x`
- `shinobi-story`
- `shogun-flowers-fall-in-blood`
- `the-last-paycheck`
- `the-signal`
- `totally-bugged-out`
- `trash-been`
- `vr-interaction-lab`
- `vr-microgames`

## Site-Wide UX Systems (important context)
- Theme system with runtime light/dark detection and manual toggle (`theme-toggle.tsx`)
- Command palette (`Ctrl/Cmd + K`) for route/action shortcuts
- Floating contact bubble with structured contact form preview
- Lightbox image/video system (Radix Dialog)
- Smooth scrolling provider (Lenis)
- Animated motion wrappers with reduced-motion fallback
- Optional interactive 3D lab module embedded in Creative

## Narrative Structure (Current)
- Home intentionally splits into two tracks:
  1) XR Simulation Engineering (primary)
  2) Videography & Storytelling (secondary)
- About/Resume reinforce trust signals (education, outcomes, commercial metrics)
- Career route serves as canonical project browsing hub

## Context Coverage Gaps Found
1. **Project snapshot coverage is incomplete** in `CONTEXT/docs/project-snapshots/` compared to current `/projects/*` routes.
2. **Sitemap coverage appears partial** versus all existing project routes.
3. **No single operational source file** currently tracks which live routes are fully documented in CONTEXT docs.

## Additions Made from This Audit
- Added this architecture audit file.
- Added `CONTEXT/docs/project-snapshots/project-snapshot-coverage-map.md` to track documentation coverage + backlog.

## Recommended Next Context Additions (Priority Order)
1. Add snapshot docs for uncovered `/projects/*` routes (see coverage map).
2. Add a canonical content source-of-truth doc for role/title/metrics consistency across Home/About/Resume.
3. Add a lightweight SEO checklist doc to keep sitemap + metadata aligned after route additions.
