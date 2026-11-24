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

### Writing: voice, story and plain prose
For case-study narrative, bios and personal stories (UI microcopy stays with
`ux-writing-content-design`).
12. **storytelling** (Artem Novitckii): structure a story so it holds attention: but/therefore
    beats, a clear angle, a memorable last line. Built for scripts; the craft applies to prose.
13. **viral-hooks** (Artem Novitckii): audit and rewrite an opening line so the topic is clear
    and the reader wants to keep going. Built for social posts; use the audit, not the hype.
14. **anti-ai-writing** (Artem Novitckii): specificity ladder, no hollow "not X, it's Y"
    reframes, banned metaphor families (journeys, bridges), varied rhythm.
15. **de-ai** (Surendran B): final pass that removes puffery and AI vocabulary without
    changing facts. Never invents a fact; flags gaps instead.
16. **orwells-rules** (Surendran B): Orwell's six rules: no stale metaphors, short words,
    cut every word that can go, active voice.

## Routing

- Navigation, categories, labels or findability: `information-architecture-navigation`.
- Which component or interaction to use: `interaction-patterns-components`.
- Copy on cards, buttons and states: `ux-writing-content-design`.
- Accessibility: `accessibility-inclusive-design`; for a code audit add
  `web-interface-guidelines`. `product-design-and-ux` links to an upstream `web-accessibility`
  skill that is not installed; use `accessibility-inclusive-design` instead.
- Always finish a visual change with `web-interaction-review` and its snapshot procedure.
- Writing Georgi's own story (bios, case-study narrative): edit his words before replacing
  them; `storytelling` and `viral-hooks` for structure and openers, `anti-ai-writing` while
  revising, `de-ai` or `orwells-rules` as the last pass. Real facts only: these skills say
  the same.
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
- **Brand Voice** (Tribe AI, MIT): learns a voice from company material, but depends on its
  plugin agents and enterprise connectors (Notion, Gong, Slack). The content-skills
  `voice-dna` guide (a README, not a skill) is a lighter way to capture Georgi's voice later.
- **dumbify** (content-skills): rewrites at an 8th-grade level; too blunt for this audience.
- **Ponytail, Graphify, Understand Anything, Caveman, Archify, Awesome Claude Skills**: code
  minimalism, codebase graphs, token compression, diagrams and a link list; not UX work.

Licences and pinned revisions are in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
