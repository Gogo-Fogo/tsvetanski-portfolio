# AGENTS.md

Rules for coding agents (Codex, Claude Code) working on tsvetanski.com, Georgi Tsvetanski's
portfolio. `CLAUDE.md` imports this file, so both tools follow the same rules.

## Priorities

1. **UX, interaction design and information architecture** come before visual flair, on desktop
   *and* mobile browsers. Most visitors are recruiters or hiring managers scanning on a phone.
2. **Honest work.** Every claim matches the source project; ownership is stated precisely.
3. **Smallest change that solves the problem.** Don't redesign working pages unasked.

## Commands

```bash
npm install
npm run dev                                   # local dev server on :3000
npm run lint                                  # ESLint (must pass)
npm run build                                 # production build (must pass)
npx next start -p 3000 -H 127.0.0.1          # serve the build for snapshots
node scripts/ui-snapshots/capture.mjs         # screenshots into tmp/graph-shots/ (filter: `capture.mjs home mumosa`)
node scripts/ui-snapshots/verify.mjs          # checks they exist, are fresh, right size
node scripts/ui-snapshots/sweep.mjs           # every sitemap route × 375/768/1440 × light/dark
python scripts/build-card-images.py           # rebuild 16:10 project card images
bash scripts/install-agent-skills.sh          # install/mirror the agent skills (see below)
```

`YOUTUBE_API_KEY` (see `.env.example`) enables live view counts; without it pages still build.

## Agent skills: use them

Project skills live in `.agents/skills/` (pinned, licensed; set and rationale in
`.agents/skills/README.md`). Run `bash scripts/install-agent-skills.sh` after cloning so Claude
Code gets its mirror in `.claude/skills/`. Load the matching skill **before** doing the work:

| When the task involves… | Use |
|---|---|
| Any visual, layout, navigation or mobile change (always, at the end) | `web-interaction-review` |
| Navigation, categories, labels, filters, breadcrumbs, findability, sitemap | `information-architecture-navigation` |
| Choosing or critiquing a component: tabs, cards, menus, lightboxes, carousels | `interaction-patterns-components` |
| Feedback, affordances, error prevention, confusing flows | `ux-usability-foundations` |
| Card copy, headings, buttons, CTAs, empty/error states, case-study wording | `ux-writing-content-design` |
| Accessibility in design (contrast, focus, motion, alternatives) | `accessibility-inclusive-design` |
| Code-level UI audit of specific files | `web-interface-guidelines` |
| Visual hierarchy, spacing, typography, colour, image crops | `ui-visual-composition` |
| A new flow or stateful feature (contact form, filters, embeds) | `product-design-and-ux` |
| A design or IA decision with real trade-offs, before building | `grilling` |
| A hard bug or regression | `diagnosing-bugs` |

Don't add or update third-party skills without pinning a reviewed commit in
`scripts/install-agent-skills.sh` and recording the licence in
`.agents/skills/THIRD_PARTY_NOTICES.md`.

## Where things live

- **Project registry:** `src/content/projects.ts` (titles, one-sentence summaries, two tags,
  categories, card images, order) and `src/content/categories.ts` (the four category labels).
  The homepage, `/projects`, case-study headers and footers, sitemap, command palette and page
  metadata all read from it. Never hard-code a project title or card elsewhere.
- **Routes:** `/` home, `/projects` (all projects, `?category=xr|gameplay|tools|creative&q=`),
  `/projects/<slug>` case studies, `/about`, `/creative`, `/cpse`. Old URLs (`/career`,
  `repo-x`, `vr-microgames`, `vr-interaction-lab`, `breda`) redirect in `next.config.ts`.
- **Site shell:** `src/components/site/` (header with logo, theme and search; contact footer;
  palette provider; theme bootstrap). The header and footer are on every page; pages render a
  single `<main>`.
- **Case-study kit:** `src/components/case-study/` (`CaseStudyHeader`, `Section`, `CardGrid`,
  `Figure`, `MediaGrid`, `Split`, `DeepDive`, `ActionLinks`, `VideoGrid`, `CaseStudyBody` with
  optional contents menu, `CaseStudyFooter`). Shared UI: `src/components/ui/` (`ProjectCard`,
  `CategoryTabs`, buttons, page intro).
- **Brand:** `src/components/site/logo-mark.tsx` (GT logo from `art-source/brand/`), tokens in
  `src/app/globals.css` (`--brand-orange`, `--brand-orange-text`, `--ui-strong`, type scale).

## Design rules (settled with the owner)

- **Content budget per project card:** title, one sentence (~10 words), at most two tags. The
  whole card is the link; an arrow is only a cue. No slide counters, dots or carousel arrows.
- **Density:** both extremes failed review. Dense dashboards read as cognitive overload; bare
  image + title rows lose the message. Stay in the middle.
- **Homepage:** compact hero (real portrait, name, `Simulation · XR · Gameplay Systems`, one
  sentence in Georgi's voice, View Resume + Contact Me), category tabs that swap projects in
  place, one featured card plus two smaller ones, then "View all".
- **Categories** use the same names everywhere: `XR + Simulation`, `Gameplay Systems`,
  `Tools & AI`, `Creative`.
- **Imagery:** real captures and Georgi's real photo only. Never present AI-generated faces,
  screenshots or scenery as the work; label design mockups as mockups. Crop editor chrome and
  printed titles out of card images with a dedicated crop.
- **Mobile:** 44 px touch targets, nothing hover-only, no horizontal page scroll at 375 px,
  the contact bubble never covers content or CTAs.
- **Motion:** subtle and meaningful; always respect `prefers-reduced-motion`.
- **Colour:** orange is the only accent (the name, primary buttons, the selected tab). Everything
  else is neutral grey; `--ui-strong` is the neutral for focus rings and hover borders. The dark
  theme is charcoal, not navy. The About skills graph keeps its own category colours.
- **Themes:** check light and dark; the brand orange needs a darker text variant on light
  (`--brand-orange-text`). The saved theme lives in `localStorage['portfolio-theme']`.
- **Fixed controls:** only the contact bubble floats (inner pages, hidden while the footer is in
  view). Theme and search live in the header; don't add new floating buttons.
- **Case studies:** header (breadcrumbs, categories, title, one-sentence lede saying what
  Georgi did, hero proof above the fold, four at-a-glance facts) → sections → footer. Outcomes
  never go inside a collapsed `DeepDive`; long process detail does. No visitor-facing pitch text
  ("portfolio relevance", "recruiter-ready").

## Content rules

- **Ownership:** say exactly what Georgi did versus the team or a third-party base ("all mine",
  "my C++ layer on top of …"). Credit collaborators by name.
- **Verify facts** (engines, dates, numbers, roles) against the source project before writing.
  Never invent metrics, partners, quotes or research results.
- **Confidentiality:** don't publish recruitment tests, private team material, client-provided
  material or unannounced work without the owner's explicit approval. Credit published client
  figures to their source (e.g. ARL's MUMOSA figure). Anything in `public/` is downloadable by
  URL even when unlinked. Personal and private files stay out of git (`output/`).
- **Art:** full-resolution originals go in `art-source/`; run
  `python scripts/build-creative-art.py` to regenerate `/creative` images and the manifest.

## Adding a case study

1. Add the slug to `projectSlugs`, an entry to `projects` and a place in `allOrder` in
   `src/content/projects.ts` (title, ~10-word summary, two tags, categories, primary category,
   status, role). The sitemap, `/projects`, command palette and related-project footers pick it
   up automatically.
2. Add its card source to `scripts/build-card-images.py` and run it (16:10, crop out editor
   chrome and printed titles with the focus point).
3. `src/app/projects/<slug>/page.tsx` on the case-study kit, copying a similar page (for
   example `lizard-wizard` short, `mumosa-crisis-response-vr` long with a contents menu):
   `export const metadata = projectMetadata(slug)`, `CaseStudyShell`, `CaseStudyHeader`,
   `CaseStudyBody`, `CaseStudyFooter`. Images in `public/images/projects/<slug>/`.
4. Optionally feature it in a homepage tab (`src/components/portfolio-home.tsx`).
5. Lint, build, run the sweep and the snapshot rule below.

## UI snapshot rule

- For any visual layout change (homepage, about/graph UI, projects, creative, or a case study), build and
  start the site, then run `node scripts/ui-snapshots/capture.mjs` and
  `node scripts/ui-snapshots/verify.mjs`.
- Inspect the relevant screenshots in `tmp/graph-shots/` before finishing. For pages the script
  does not capture, check them in a browser at 375, 768 and 1440 px and confirm
  `document.documentElement.scrollWidth` equals the viewport width.
- If overlap, clipping, or collisions remain, iterate and rerun snapshots until clean.
- In status/final notes, explicitly state that snapshot verification was performed.

## Reference docs

- `CONTEXT/case-study-rewrite-log.md`: what the October 2026 overhaul changed per page, and the
  open questions for the owner.
- `CONTEXT/portfolio-ia-guidelines.md`: labelling, wayfinding and cross-category rules.
- `CONTEXT/project-page-style-blueprint.md`: case-study layout and recruiter-first writing.
- `CONTEXT/ux-ui-audit-2026-08-24.md`: last full UX audit and its findings.
