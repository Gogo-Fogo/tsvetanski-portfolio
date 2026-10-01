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
node scripts/ui-snapshots/capture.mjs         # screenshots into tmp/graph-shots/
node scripts/ui-snapshots/verify.mjs          # checks they exist, are fresh, right size
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
  fixed controls (Command pill, theme toggle, contact bubble) never cover content or CTAs.
- **Motion:** subtle and meaningful; always respect `prefers-reduced-motion`.
- **Themes:** check light and dark; the brand orange needs a darker text variant on light.

## Content rules

- **Ownership:** say exactly what Georgi did versus the team or a third-party base ("all mine",
  "my C++ layer on top of …"). Credit collaborators by name.
- **Verify facts** (engines, dates, numbers, roles) against the source project before writing.
  Never invent metrics, partners, quotes or research results.
- **Confidentiality:** don't publish recruitment tests, private team material or unannounced
  work without the owner's explicit approval. Personal documents stay out of git (`output/`).
- **Art:** full-resolution originals go in `art-source/`; run
  `python scripts/build-creative-art.py` to regenerate `/creative` images and the manifest.

## Adding a case study

1. `src/app/projects/<slug>/page.tsx`, following an existing page (Breadcrumbs,
   `ProjectAtAGlance`, `LightboxImage`). Images in `public/images/projects/<slug>/`.
2. Add it to the `projects` list and `categoryProjectOrder` in `src/app/career/page.tsx`
   (banner at 2.55:1 or wider reads best).
3. Add the route to `src/app/sitemap.ts`.
4. Optionally feature it in a homepage category.
5. Lint, build, and run the snapshot rule below.

## UI snapshot rule

- For any visual layout change (homepage, about/graph UI, career, or a case study), build and
  start the site, then run `node scripts/ui-snapshots/capture.mjs` and
  `node scripts/ui-snapshots/verify.mjs`.
- Inspect the relevant screenshots in `tmp/graph-shots/` before finishing. For pages the script
  does not capture, check them in a browser at 375, 768 and 1440 px and confirm
  `document.documentElement.scrollWidth` equals the viewport width.
- If overlap, clipping, or collisions remain, iterate and rerun snapshots until clean.
- In status/final notes, explicitly state that snapshot verification was performed.

## Reference docs

- `CONTEXT/portfolio-ia-guidelines.md`: labelling, wayfinding and cross-category rules.
- `CONTEXT/project-page-style-blueprint.md`: case-study layout and recruiter-first writing.
- `CONTEXT/ux-ui-audit-2026-08-24.md`: last full UX audit and its findings.
