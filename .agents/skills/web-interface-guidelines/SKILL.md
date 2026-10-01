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
