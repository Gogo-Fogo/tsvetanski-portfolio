# tsvetanski.com

Portfolio of Georgi Tsvetanski: simulation, XR and gameplay systems. Built with Next.js (App
Router), React, TypeScript and Tailwind CSS, deployed on Vercel.

## Getting started

```bash
npm install
cp .env.example .env.local   # optional: YOUTUBE_API_KEY for live video view counts
npm run dev                  # http://localhost:3000
```

Before pushing, `npm run lint` and `npm run build` must both pass.

## Project layout

| Path | What's there |
|---|---|
| `src/content/` | The project registry and category labels that every page reads from |
| `src/app/` | Routes: homepage, `projects` (the full list) and `projects/<slug>` case studies, `about`, `creative`, `cpse`, sitemap, share image |
| `src/components/` | Site shell (`site/`), case-study kit (`case-study/`), shared UI (`ui/`), lightboxes, command palette, degree graph |
| `public/images/` | Site images; case-study media lives in `public/images/projects/<slug>/` |
| `art-source/` | Full-resolution artwork; `scripts/build-creative-art.py` builds the `/creative` gallery from it |
| `scripts/` | Art and card-image pipelines, portrait cutout, agent-skill installer, UI snapshot and sweep scripts |
| `CONTEXT/` | IA guidelines, page blueprint, UX audits, background docs |
| `.agents/skills/` | Pinned agent skills for UX, interaction design and IA work |

## Working with AI coding agents

This repo is set up for Codex and Claude Code. **[AGENTS.md](AGENTS.md) holds the rules**:
design and content rules, which skill to use for which task, how to add a case study, and the
screenshot verification step. `CLAUDE.md` imports it.

After cloning, install the skills once:

```bash
bash scripts/install-agent-skills.sh
```

This puts the pinned skills in `.agents/skills/` (read by Codex) and mirrors them into
`.claude/skills/` (read by Claude Code; git-ignored). Start a new agent session afterwards. The
set focuses on UX, interaction design and information architecture for desktop and mobile
browsers, plus `web-interaction-review`, written for this site. See
[.agents/skills/README.md](.agents/skills/README.md) for what each skill does and why others
were left out.

## Verifying UI changes

```bash
npm run build
npx next start -p 3000 -H 127.0.0.1
node scripts/ui-snapshots/capture.mjs   # key pages at 1440/768/375 px, light and dark
node scripts/ui-snapshots/verify.mjs
node scripts/ui-snapshots/sweep.mjs     # every route: no sideways scroll, one main, one h1
```

Screenshots land in `tmp/graph-shots/` (git-ignored). The capture script drives a local
Brave, Chrome or Edge install; set `GRAPH_BROWSER_PATH` to use a different Chromium browser.
