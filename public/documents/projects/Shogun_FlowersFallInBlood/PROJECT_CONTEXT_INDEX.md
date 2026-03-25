# Project Context Index

> Purpose: this is the AI routing layer for the `Shogun_FlowersFallInBlood` project documents. Read this file first, then open the smallest relevant subset of docs.

## Folder layout

```text
Shogun_FlowersFallInBlood/
  PROJECT_CONTEXT_INDEX.md
  README.md
  ai/
    doc-data-001-unity-mobile-gacha-rpg-data-collection-and-compliance.md
    doc-eng-001-solo-unity-mobile-gacha-rpg-engineering-research.md
    doc-gdd-001-shogun-flowers-fall-in-blood-game-design-document.md
    doc-legal-001-ai-generated-assets-legal-considerations.md
    doc-legal-002-ai-assets-legal-and-compliance-roadmap.md
    doc-legal-003-tos-eula-and-user-facing-legal-documents.md
    doc-ops-001-project-document-and-telemetry-index.md
    doc-ref-001-naruto-ultimate-ninja-blazing-conceptual-synthesis.md
    doc-ref-002-naruto-ninja-blazing-success-failure-and-shutdown-analysis.md
    doc-ref-003-one-piece-treasure-cruise-analysis.md
    doc-ref-004-fire-emblem-heroes-success-and-drawbacks.md
    doc-ref-004-fire-emblem-heroes-success-and-drawbacks.docx
  recruiter/
    doc-data-001-unity-mobile-gacha-rpg-data-collection-and-compliance.pdf
    doc-eng-001-solo-unity-mobile-gacha-rpg-engineering-research.pdf
    doc-gdd-001-shogun-flowers-fall-in-blood-game-design-document.pdf
    doc-legal-001-ai-generated-assets-legal-considerations.pdf
    doc-legal-002-ai-assets-legal-and-compliance-roadmap.pdf
    doc-legal-003-tos-eula-and-user-facing-legal-documents.pdf
    doc-ops-001-project-document-and-telemetry-index.pdf
    doc-ref-001-naruto-ultimate-ninja-blazing-conceptual-synthesis.pdf
    doc-ref-002-naruto-ninja-blazing-success-failure-and-shutdown-analysis.pdf
    doc-ref-003-one-piece-treasure-cruise-analysis.pdf
```

## Default operating rule

Do not scan the whole folder by default.

For most tasks:

1. Start with this index.
2. Prefer `ai/` documents first.
3. Open the matching PDF in `recruiter/` only if formatting, page fidelity, or missing detail matters.

## Canonical document catalog

| ID | Topic | Primary AI path | Recruiter PDF path | Authority | Notes |
| --- | --- | --- | --- | --- | --- |
| `DOC-GDD-001` | Shogun product design | `ai/doc-gdd-001-shogun-flowers-fall-in-blood-game-design-document.md` | `recruiter/doc-gdd-001-shogun-flowers-fall-in-blood-game-design-document.pdf` | Primary design truth | Use first for gameplay, UX, progression, monetization, and product scope. |
| `DOC-ENG-001` | Unity engineering and production architecture | `ai/doc-eng-001-solo-unity-mobile-gacha-rpg-engineering-research.md` | `recruiter/doc-eng-001-solo-unity-mobile-gacha-rpg-engineering-research.pdf` | Primary engineering truth | Use first for backend, Unity structure, build pipeline, delivery, and scale-path decisions. |
| `DOC-DATA-001` | Telemetry, analytics, and compliance-aware data collection | `ai/doc-data-001-unity-mobile-gacha-rpg-data-collection-and-compliance.md` | `recruiter/doc-data-001-unity-mobile-gacha-rpg-data-collection-and-compliance.pdf` | Primary telemetry truth | Use first for events, schemas, batching, retention, consent, audit logging. |
| `DOC-OPS-001` | Implementation artifact inventory | `ai/doc-ops-001-project-document-and-telemetry-index.md` | `recruiter/doc-ops-001-project-document-and-telemetry-index.pdf` | Operational manifest | Use for file outputs, naming, CI artifacts, telemetry deliverables, and legal-document inventory. |
| `DOC-LEGAL-001` | Legal and platform-policy risk overview | `ai/doc-legal-001-ai-generated-assets-legal-considerations.md` | `recruiter/doc-legal-001-ai-generated-assets-legal-considerations.pdf` | Primary legal risk briefing | Use for AI asset usage, privacy, loot box compliance, store-policy risk, and IP questions. |
| `DOC-LEGAL-002` | Legal backlog and next-step roadmap | `ai/doc-legal-002-ai-assets-legal-and-compliance-roadmap.md` | `recruiter/doc-legal-002-ai-assets-legal-and-compliance-roadmap.pdf` | Legal roadmap | Use when prioritizing follow-up research, counsel review, and unresolved compliance work. |
| `DOC-LEGAL-003` | ToS, EULA, and user-facing legal drafting | `ai/doc-legal-003-tos-eula-and-user-facing-legal-documents.md` | `recruiter/doc-legal-003-tos-eula-and-user-facing-legal-documents.pdf` | Primary legal drafting guide | Use first when drafting or revising terms, EULA structure, clickwrap, and acceptance logging. |
| `DOC-REF-001` | Naruto Blazing mechanics inspiration study | `ai/doc-ref-001-naruto-ultimate-ninja-blazing-conceptual-synthesis.md` | `recruiter/doc-ref-001-naruto-ultimate-ninja-blazing-conceptual-synthesis.pdf` | Inspiration only | Use for combat and pacing patterns. Do not copy expressive IP. |
| `DOC-REF-002` | Naruto Blazing success, failure, and shutdown analysis | `ai/doc-ref-002-naruto-ninja-blazing-success-failure-and-shutdown-analysis.md` | `recruiter/doc-ref-002-naruto-ninja-blazing-success-failure-and-shutdown-analysis.pdf` | Strategic caution reference | Use for live-ops, retention, monetization, and shutdown-risk lessons. |
| `DOC-REF-003` | One Piece Treasure Cruise longevity analysis | `ai/doc-ref-003-one-piece-treasure-cruise-analysis.md` | `recruiter/doc-ref-003-one-piece-treasure-cruise-analysis.pdf` | Strategic caution reference | Use for long-term sustainability, onboarding, technical debt, and content burden. |
| `DOC-REF-004` | Fire Emblem Heroes comparison source | `ai/doc-ref-004-fire-emblem-heroes-success-and-drawbacks.md` | No recruiter PDF in this folder | Secondary source | Open the retained `.docx` only if the original Word source is needed. |

## Source-of-truth hierarchy

### Product and feature intent
1. `DOC-GDD-001`
2. `DOC-ENG-001` and `DOC-DATA-001` for implementation detail
3. `DOC-REF-001` to `DOC-REF-004` for inspiration and caution only

### Unity engineering, backend, build pipeline
1. `DOC-ENG-001`
2. `DOC-DATA-001`
3. `DOC-GDD-001` for feature intent only

### Telemetry, analytics, and data collection
1. `DOC-DATA-001`
2. `DOC-OPS-001`
3. `DOC-LEGAL-001`
4. `DOC-GDD-001`

### Legal, compliance, and AI-asset risk
1. `DOC-LEGAL-001`
2. `DOC-LEGAL-003`
3. `DOC-LEGAL-002`

### ToS, EULA, and acceptance flows
1. `DOC-LEGAL-003`
2. `DOC-OPS-001`
3. `DOC-LEGAL-001`

### Comparative lessons and market framing
1. `DOC-REF-001`
2. `DOC-REF-002`
3. `DOC-REF-003`
4. `DOC-REF-004`

## Conflict rules

1. Legal constraints override design wishes.
2. `DOC-GDD-001` defines what the game is.
3. Engineering and data docs define how to build and observe it.
4. Reference docs are for patterns and warnings, not copying.
5. `DOC-OPS-001` is the file-output manifest when the question is “what artifact should exist?”

## Fast router

### Combat, movement, encounter, and progression design
Open:
1. `DOC-GDD-001`
2. `DOC-REF-001`
3. optionally `DOC-REF-002`

### Unity structure, backend, live-service architecture
Open:
1. `DOC-ENG-001`
2. `DOC-GDD-001`

### Telemetry, event schemas, consent, and retention
Open:
1. `DOC-DATA-001`
2. `DOC-OPS-001`
3. `DOC-LEGAL-001` if privacy or minors are involved

### Legal text, ToS, EULA, and clickwrap
Open:
1. `DOC-LEGAL-003`
2. `DOC-LEGAL-001`
3. `DOC-OPS-001`

### Monetization, gacha fairness, and live-ops risk
Open:
1. `DOC-GDD-001`
2. `DOC-LEGAL-001`
3. `DOC-REF-002`
4. optionally `DOC-REF-003`

## AI behavior rules

- Prefer `ai/` documents for retrieval speed.
- Use PDFs in `recruiter/` when layout fidelity or exact document presentation matters.
- Treat Shogun’s own docs as authoritative; treat comparative docs as inspiration and warnings only.
- Do not copy franchise names, characters, or protected expression from reference docs.
- When documents conflict, follow the hierarchy above and report the conflict explicitly.

## Change rules

Update this file whenever:

- filenames change
- a new canonical document is added
- a Markdown companion is added or removed
- a document becomes superseded
- folder structure changes

## Short prompt for future AI agents

```text
Read PROJECT_CONTEXT_INDEX.md first.
Do not scan the entire folder by default.
Prefer ai/ Markdown companions first, then open recruiter/ PDFs only when needed.
Use DOC-GDD-001 as primary design truth, DOC-ENG-001 and DOC-DATA-001 as implementation truth, DOC-LEGAL-* docs as compliance constraints, and DOC-REF-* docs as inspiration/caution only.
If documents conflict, follow the hierarchy in PROJECT_CONTEXT_INDEX.md and report the conflict explicitly.
```
