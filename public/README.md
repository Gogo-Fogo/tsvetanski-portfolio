# Public Assets Guide

This folder is organized for two goals:

- clean recruiter-facing assets on the site
- fast, low-token parsing for AI tools

## Key folders

- `documents/`
  - canonical project documents
  - dual-track format:
    - `ai/` for Markdown summaries/transcripts
    - `recruiter/` for polished PDF/DOCX deliverables
- `images/`
  - site visuals and project media
  - project-specific assets should live in `images/projects/<project-slug>/`
  - archived raw web captures live in `images/archive/`

## AI navigation

Start here when parsing docs:

1. `documents/AI_INDEX.md`
2. `documents/manifest.json`
3. `documents/projects/<slug>/ai/*`
4. then recruiter/source/supporting docs only as needed

## File naming conventions

- Use lowercase `kebab-case`.
- Avoid spaces and special characters.
- Keep source-authoring files (`.docx`, `.xlsx`) in `source/` when needed.

## PDF + Markdown policy

- Keep both for important project docs:
  - Markdown (`ai/`) for fast AI analysis.
  - PDF/DOCX (`recruiter/`) for portfolio/recruiter presentation.
- Remove duplicate binaries only when equivalent Markdown coverage exists.
