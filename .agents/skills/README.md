# Project-local agent skills

Install or refresh with:

```bash
bash scripts/install-agent-skills.sh
```

The installer copies third-party skills into `.agents/skills/` (committed; read by Codex) at
reviewed, pinned upstream commits, then mirrors the whole folder into `.claude/skills/`
(git-ignored; read by Claude Code). Run it after cloning and after changing any skill here.
Copies are used instead of symlinks because this repository is checked out on Windows with
`core.symlinks=false`.

## Selected set

The priority for this site is UX, interaction design and information architecture, on
desktop and mobile browsers.

### Site-specific (written for this repository)
1. **web-interaction-review**: recruiter tasks, settled design decisions, mobile and keyboard
   rules, and the screenshot verification procedure. Use it for every layout or visual change.

### UX, interaction design and information architecture
2. **information-architecture-navigation** (hueyexe): labels, grouping, navigation,
   wayfinding, filters and findability.
3. **interaction-patterns-components** (hueyexe): choosing and critiquing tabs, cards,
   disclosure, menus and other components.
4. **ux-usability-foundations** (hueyexe): affordances, feedback, constraints, error
   prevention and task clarity.
5. **ux-writing-content-design** (hueyexe): labels, CTAs, card copy, empty and error states.
6. **accessibility-inclusive-design** (hueyexe): inclusive design and accessibility in UI work.
7. **ui-visual-composition** (hueyexe): hierarchy, spacing, typography, colour and imagery.
8. **product-design-and-ux** (Magnus Hedemark): task flows, screen states, recovery and
   acceptance criteria, for changes that need a flow or state model.
9. **web-interface-guidelines** (Vercel rules, local wrapper): code-level review against the
   Web Interface Guidelines, using a pinned copy instead of a live fetch.

### Decisions and debugging
10. **grilling** (Matt Pocock): stress-test a design or IA decision in rounds of questions,
    each with a recommended answer.
11. **diagnosing-bugs** (Matt Pocock): disciplined loop for hard bugs and regressions.

## Routing

- Navigation, categories, labels or findability: `information-architecture-navigation`.
- Which component or interaction to use: `interaction-patterns-components`.
- Copy on cards, buttons and states: `ux-writing-content-design`.
- Accessibility: `accessibility-inclusive-design`; for a code audit add
  `web-interface-guidelines`. `product-design-and-ux` links to an upstream `web-accessibility`
  skill that is not installed; use `accessibility-inclusive-design` instead.
- Always finish a visual change with `web-interaction-review` and its snapshot procedure.
- `product-design-and-ux` also links to other upstream skills (product discovery, analytics,
  specs). They are not installed and not needed; use this set and `AGENTS.md`.

## Considered and not installed

- **UI UX Pro Max** (MIT): a large searchable style, palette and font catalogue plus 119 UX
  rules. It overlaps the hueyexe set and `web-interface-guidelines`, and its strength is visual
  style selection rather than IA. Revisit if a full visual re-theme is planned.
- **Taste Skill** (MIT): anti-generic visual design for landing pages. Useful for flair, but it
  pushes motion and variance; this site favours calm, readable density.
- **Addy Osmani agent-skills** (MIT): solid engineering workflow pack; its
  `frontend-ui-engineering` overlaps the UX set above.
- **Ponytail, Graphify, Understand Anything, Caveman, Archify, Awesome Claude Skills**: code
  minimalism, codebase graphs, token compression, diagrams and a link list; not UX work.

Licences and pinned revisions are in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
