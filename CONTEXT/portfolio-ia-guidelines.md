# Portfolio IA Guidelines (tsvetanski.com)

## Purpose
This file defines information architecture (IA) rules for labels, navigation, and cross-category project placement so updates remain consistent across the portfolio.

---

## 1) Labeling Rules (Clarity over Ambiguity)

### Principles
- Prefer **specific, expectation-setting labels** over broad umbrella labels.
- Avoid labels that can mean different things across disciplines (e.g., "Design").
- Use terms that align with recruiter/visitor intent and search language.

### Preferred Pattern
- Use explicit skill/medium labels such as:
  - `3D Modeling`
  - `Level Design`
  - `C# Programming`
  - `Game UI/UX`
  - `Video Editing`

### Label Quality Check
Before shipping a label, verify:
1. A first-time visitor can predict what they will see after clicking.
2. The label distinguishes itself from nearby options.
3. The label is consistent in casing, syntax, and terminology site-wide.

---

## 2) Wayfinding Rules ("Where am I?")

### Global Navigation
- Keep primary sections persistent and visible.
- Ensure section names reflect the portfolio's multidisciplinary identity.

### Local Context
- Every project page should clearly indicate:
  - Current section
  - Relationship to broader portfolio (e.g., Projects -> VR -> Project Name)

### Breadcrumb Guidance
- Add breadcrumbs on project/detail pages where possible.
- Breadcrumbs should represent the user's current path and allow quick backtracking.

### Entry-Point Resilience
- Assume users land directly on deep pages from external links/search.
- Include obvious paths back to broader categories and main portfolio areas.

---

## 3) Polyhierarchy Strategy (One Project, Multiple Paths)

### Problem
Many projects span multiple disciplines (e.g., Art + Engineering).

### Rule
- A project should exist as a **single canonical source** (no duplicated files/pages).
- It should appear in multiple category views via shared metadata/tags.

### Metadata Model (minimum)
Each project should have:
- `title`
- `slug`
- `summary`
- `disciplines` (array; e.g., `["Art", "Engineering"]`)
- `skills` (array; e.g., `["3D Modeling", "C# Programming"]`)
- `tools` (array)
- `mediaType` (e.g., `video`, `image`, `interactive`)

### Display Behavior
- Category pages should filter from one shared project dataset.
- A project tagged for multiple categories should surface in each relevant view automatically.

---

## 4) Implementation Notes for Current Repo

### Recommended Integration Direction
- Introduce/expand a central project metadata source.
- Refactor project listing pages/components to filter by tags instead of hardcoded duplication.
- Keep project detail pages as canonical endpoints.

### Candidate Areas to Align
- `src/app/projects/*`
- `src/app/creative/page.tsx`
- Any project card/listing components used across sections

---

## 5) Validation Plan

### Lightweight Testing
1. **First-click test**: Can users correctly choose between labels like `Level Design` vs `Graphic Design`?
2. **Tree test**: Can users find the same multidisciplinary project through both `Art` and `Engineering` paths?
3. **Search/log review** (if available): Identify terms users actually use and update labels/tags accordingly.

### Success Signals
- Fewer wrong-path clicks from category pages.
- Faster discovery of relevant projects.
- Consistent understanding of portfolio scope (multi-disciplinary, not single-specialty).

---

## 6) Sources Referenced in Rationale
- Morville, P., & Rosenfeld, L. (2006). *Information Architecture for the World Wide Web*.
- Wodtke, C., & Govella, A. (2009). *Information Architecture: Blueprints for the Web*.
- Nielsen Norman Group (2022). *Polyhierarchy in Information Architecture* (video).

---

## 7) Current structure (October 2026 overhaul)

- **Global navigation** on every page: logo (home) · Projects · About · Contact (jumps to the
  footer), plus search (Ctrl/⌘K command palette) and the theme button. Creative is reached
  through the Creative category and the homepage tab, not the top nav.
- **One label per place:** "Projects" is the page, its h1, its breadcrumb and its URL
  (`/projects`). Category labels come only from `src/content/categories.ts`.
- **Polyhierarchy is implemented:** each project in `src/content/projects.ts` has
  `categories` (any number) and one `primaryCategory` (used for "Next in …" and ordering).
- **Breadcrumbs = hierarchy:** `Home / Projects / {Project}` on every case study, including
  `/cpse`. Category chips under the title link to `/projects?category=…`.
- **Deep-entry recovery:** every case study ends with "Next in {category}", two related projects
  and "All {category} projects", followed by the site-wide contact footer.
- **Redirects** keep old links working: `/career` (and `?filter=games|xr|tools`), `repo-x`,
  `vr-microgames`, `vr-interaction-lab`, `breda`, `v4n-gogo-figurine-lab`.
