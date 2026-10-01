# AGENTS.md

## UI Snapshot Rule
- For any visual layout change (homepage, about/graph UI, career, or a case study), build and
  start the site, then run `node scripts/ui-snapshots/capture.mjs` and
  `node scripts/ui-snapshots/verify.mjs`.
- Inspect the relevant screenshots in `tmp/graph-shots/` before finishing. For pages the script
  does not capture, check them in a browser at 375, 768 and 1440 px.
- If overlap, clipping, or collisions remain, iterate and rerun snapshots until clean.
- In status/final notes, explicitly state that snapshot verification was performed.

## Agent Skills
- Project skills live in `.agents/skills/` (pinned; see its `README.md` for the set and routing).
  Run `bash scripts/install-agent-skills.sh` after cloning to install them and mirror them into
  `.claude/skills/` for Claude Code.
- Priority for this site is UX, interaction design and information architecture on desktop and
  mobile browsers. Finish every visual change with `web-interaction-review`.
- Do not add or update third-party skills without pinning a reviewed commit in the installer and
  recording the licence in `.agents/skills/THIRD_PARTY_NOTICES.md`.
