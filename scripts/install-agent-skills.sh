#!/usr/bin/env bash
# Installs the curated, pinned agent skills for this repository.
#
#   bash scripts/install-agent-skills.sh
#
# Third-party skills are copied into .agents/skills (committed, read by Codex) at
# reviewed upstream commits, so an upstream change cannot silently alter what the
# agents are told. Project-authored skills already live there and are left alone.
# Everything is then mirrored into .claude/skills (git-ignored, read by Claude
# Code). Symlinks are not used because this repository is checked out on Windows
# with core.symlinks=false.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DEST="$ROOT/.agents/skills"
CLAUDE_DEST="$ROOT/.claude/skills"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

mkdir -p "$DEST"

# fetch_commit <repo-url> <commit>: shallow-fetches exactly one commit into a
# throwaway repository and prints its path. Reused within one run.
fetch_commit() {
  local repo_url="$1"
  local commit="$2"
  local work="$TMP/${commit:0:12}"
  if [ ! -d "$work/.git" ]; then
    git init --quiet "$work"
    git -C "$work" fetch --quiet --depth 1 "$repo_url" "$commit"
  fi
  echo "$work"
}

# install_skill <repo-url> <commit> <path-in-repo> <target-name> [license-path]
install_skill() {
  local repo_url="$1"
  local commit="$2"
  local source_path="$3"
  local target_name="$4"
  local license_path="${5:-LICENSE}"

  local work
  work="$(fetch_commit "$repo_url" "$commit")"
  git -C "$work" checkout --quiet "$commit" -- "$source_path" "$license_path"

  rm -rf "${DEST:?}/$target_name"
  mkdir -p "$DEST/$target_name"
  cp -R "$work/$source_path/." "$DEST/$target_name/"
  cp "$work/$license_path" "$DEST/$target_name/LICENSE"
}

# --- UX, interaction design and information architecture (priority) ---------

HUEYEXE="https://github.com/hueyexe/frontend-agent-skills.git"
HUEYEXE_REV="2841c079dd8a9c634882227194dc42e25227710d"
for skill in \
  information-architecture-navigation \
  interaction-patterns-components \
  ux-usability-foundations \
  ux-writing-content-design \
  accessibility-inclusive-design \
  ui-visual-composition; do
  install_skill "$HUEYEXE" "$HUEYEXE_REV" "$skill" "$skill"
done

# Task flows, screen states and recovery. Its links to sibling skills in the
# upstream pack are optional; see .agents/skills/README.md for local routing.
install_skill \
  "https://github.com/magnus919/agent-skills.git" \
  "9e45d5eef30ef975db75bcfe737094ca72473e77" \
  "product-design-and-ux" \
  "product-design-and-ux" \
  "LICENSE.md"

# --- Decisions and debugging -------------------------------------------------

MATT="https://github.com/mattpocock/skills.git"
MATT_REV="d81f3a183412e71a5b1e84ca21bc1a35eea03a60"
install_skill "$MATT" "$MATT_REV" "skills/productivity/grilling" "grilling"
install_skill "$MATT" "$MATT_REV" "skills/engineering/diagnosing-bugs" "diagnosing-bugs"

# --- Vercel Web Interface Guidelines ------------------------------------------
# Upstream's skill fetches the rules from an unpinned URL on every run. Here the
# rules file is vendored at a reviewed commit and wrapped by a local SKILL.md.
WIG_REV="e3d624baaf29dc1fc645aff3e38f03e564d2d6b1"
WIG="$DEST/web-interface-guidelines"
WIG_WORK="$(fetch_commit "https://github.com/vercel-labs/web-interface-guidelines.git" "$WIG_REV")"
git -C "$WIG_WORK" checkout --quiet "$WIG_REV" -- command.md LICENSE
rm -rf "$WIG"
mkdir -p "$WIG"
cp "$WIG_WORK/command.md" "$WIG/guidelines.md"
cp "$WIG_WORK/LICENSE" "$WIG/LICENSE"
cat > "$WIG/SKILL.md" <<'EOF'
---
name: web-interface-guidelines
description: Review UI code against Vercel's Web Interface Guidelines (accessibility, focus, forms, animation, typography, images, performance, navigation state, touch, dark mode). Use when asked to "review my UI", "check accessibility", "audit design", or check a page or component against web best practices.
metadata:
  author: vercel (rules), tsvetanski.com (wrapper)
---

# Web Interface Guidelines

Review the given files against the rules in [guidelines.md](guidelines.md), a pinned copy of
`vercel-labs/web-interface-guidelines` `command.md`. Do not fetch the rules from the network;
the pinned copy is the reviewed version.

1. Read `guidelines.md` in full. It contains the rules and the required output format.
2. Read the files the user named. If none were named, ask which page or component to review.
3. Report findings in the `file:line` format the guidelines specify. Group by file.
4. For this site, also run `web-interaction-review` when the change affects layout, navigation
   or mobile behavior; it covers what code review alone cannot see.
EOF

cat > "$DEST/THIRD_PARTY_NOTICES.md" <<'EOF'
# Third-party agent skills

These skills are development-time guidance for coding agents. They are not part of the
deployed website and do not change the licensing of the site's code or content.

## hueyexe/frontend-agent-skills
Pinned revision: 2841c079dd8a9c634882227194dc42e25227710d
License: MIT
- information-architecture-navigation
- interaction-patterns-components
- ux-usability-foundations
- ux-writing-content-design
- accessibility-inclusive-design
- ui-visual-composition

## magnus919/agent-skills
Pinned revision: 9e45d5eef30ef975db75bcfe737094ca72473e77
License: MIT (upstream LICENSE.md is copied as LICENSE)
- product-design-and-ux

## mattpocock/skills
Pinned revision: d81f3a183412e71a5b1e84ca21bc1a35eea03a60
License: MIT
- grilling
- diagnosing-bugs

## vercel-labs/web-interface-guidelines
Pinned revision: e3d624baaf29dc1fc645aff3e38f03e564d2d6b1
License: MIT
- web-interface-guidelines (command.md vendored as guidelines.md; SKILL.md is a local wrapper)

Each installed skill contains its upstream LICENSE file. Keep those LICENSE files if the
vendored skill content is retained or redistributed.
EOF

# Mirror everything, including project-authored skills, for Claude Code.
rm -rf "$CLAUDE_DEST"
mkdir -p "$CLAUDE_DEST"
for dir in "$DEST"/*/; do
  cp -R "$dir" "$CLAUDE_DEST/"
done

echo "Installed agent skills into $DEST and mirrored them into $CLAUDE_DEST"
