# Documents Hub

This folder is organized for two audiences:

- Recruiters/humans: polished deliverables in `recruiter/` (PDF/DOCX)
- AI tools: lightweight text in `ai/` (Markdown), when available

## Structure

- `projects/<project-slug>/ai/`
- `projects/<project-slug>/recruiter/`
- `projects/<project-slug>/source/`
- `projects/<project-slug>/supporting/`
- `archive/` (older or non-portfolio artifacts)

## File Naming

- Use lowercase `kebab-case` for all files.
- Avoid spaces/special characters so URLs remain clean and automation stays reliable.
- Keep original authoring format in `source/` when needed (`.docx`, `.xlsx`, etc.).

## PDF vs Markdown Policy

- Keep both when possible:
  - `ai/`: Markdown for fast machine parsing.
  - `recruiter/`: polished PDF/DOCX for human review.
- Prefer deleting duplicate binary drafts only after an equivalent `.md` summary exists.
## AI-First Guidance

If you are an AI assistant parsing this portfolio:

1. Start with `AI_INDEX.md`
2. Prefer `projects/*/ai/*.md` first
3. Open `recruiter/` docs only if the AI folder is missing details
4. Use `source/` only for implementation-level deep dives
5. Ignore `archive/` unless explicitly requested

## Machine-Readable Index

See `manifest.json` for a compact project map and preferred read order.
