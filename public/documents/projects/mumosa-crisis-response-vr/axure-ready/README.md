# MUMOSA Axure-Ready Prototype

This folder gives the team a high-fidelity prototype direction based on:

- the original MUMOSA client paper
- your class brief and assignment structure
- your paper prototype findings
- our discussion that the digital prototype should stay investigator-first, source-grounded, and not let VR replace the dashboard

## What this prototype is trying to prove

The core question is:

`How does an investigator understand what happened and verify evidence across modalities?`

That is why the screens focus on:

- open incident entry instead of a hard profession gate
- an event overview with grounded AI synthesis
- source-backed evidence inspection
- timeline plus schema relationships
- VR as a secondary spatial review mode

## Files

- `index.html`: the interactive high-fidelity prototype
- `styles.css`: visual system and layout
- `app.js`: simple screen switching via query string
- `AXURE-BUILD-CHECKLIST.md`: page-by-page recreation plan for Axure RP 11
- `screens/search.png`
- `screens/overview.png`
- `screens/evidence.png`
- `screens/timeline.png`
- `screens/vr.png`

## Screen URLs

Open `index.html` in a browser and use these query strings:

- `?screen=search`
- `?screen=overview`
- `?screen=evidence`
- `?screen=timeline`
- `?screen=vr`

## Best way to use this with Axure RP

### Option A: fast and polished

Use one Axure page with an inline frame that points to the local `index.html` file.

Why this works:

- you keep the high-fidelity look
- the screen navigation already works
- you can present it immediately
- it keeps Axure as the delivery container if your team needs that

Important note:

Axure's own docs say local files in inline frames work best when the prototype is viewed from generated local HTML, not Axure Cloud preview. So use local HTML output if you go this route.

### Option B: more native Axure workflow

Rebuild these five screens as individual Axure pages:

1. Incident Entry
2. Event Overview
3. Evidence Review
4. Timeline + Schema
5. VR Scene Review

Recommended page order:

1. `Home / Search`
2. `Event Overview`
3. `Evidence Detail`
4. `Timeline + Schema`
5. `VR Review`

The PNGs in `screens/` are already rendered at presentation-ready size and can be dropped into Axure as full-page visual screens if the team wants a faster native Axure build.

## What not to change unless the team intentionally pivots

- Do not make role selection the first blocking step.
- Do not design separate full products for CSI, firefighter, and forensic scientist.
- Do not turn VR into the main place for broad information foraging.
- Do not scope the prototype around full real-time live response this semester.

## If the team wants to keep role awareness

Treat role as a soft preference or view emphasis after incident entry.

Good examples:

- investigator view
- responder training view
- analyst emphasis

Bad example:

- a hard front-door profession gate before the user can even enter the incident

## Best verbal framing for critique or presentation

`This digital prototype focuses on post-crisis investigation first. The dashboard reduces information fragmentation through search, evidence review, and chronology. VR is presented as a secondary scene-review mode for spatial context, hazard understanding, and training value.`
