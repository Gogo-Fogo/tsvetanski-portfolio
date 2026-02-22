# Project Snapshot Coverage Map (2026-02-22)

## Purpose
Track which live `/projects/*` routes already have context snapshot docs, and which still need conversion/documentation.

## Coverage Status

### Documented (has snapshot markdown)
- `shinobi-story` → `shinobi-story-project-page.md`
- `trash-been` → `trash-been-project-page.md`

### Missing Snapshot Docs (live route exists, context doc missing)
- `breda`
- `cranky-game-jam`
- `cranky-squirrel-annihilator`
- `fallout-level-design`
- `repo-x`
- `shogun-flowers-fall-in-blood`
- `the-last-paycheck`
- `the-signal`
- `totally-bugged-out`
- `vr-interaction-lab`
- `vr-microgames`

### Orphaned Snapshot Docs (doc exists, no matching live route slug)
- `unity-creations-project-page.md` (no `src/app/projects/unity-creations/page.tsx` route currently)

## Recommended Backlog Order
1. `repo-x` (core simulation/networking narrative)
2. `vr-interaction-lab`
3. `vr-microgames`
4. `fallout-level-design`
5. Remaining gameplay/creative case studies

## Notes
- Keep this file updated whenever new `/projects/*` routes are added or removed.
- Prefer one canonical snapshot per route slug.
