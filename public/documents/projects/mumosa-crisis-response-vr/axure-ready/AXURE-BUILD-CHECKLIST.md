# MUMOSA Axure RP 11 Build Checklist

This checklist turns the current high-fidelity concept into a practical Axure RP 11 build.

Use it when the team wants to recreate the prototype quickly without reopening the whole scope debate.

## Prototype Goal

Build a desktop-first digital prototype that proves this workflow:

`enter incident -> understand event -> verify evidence -> inspect chronology -> optionally open VR review`

The prototype should stay focused on:

- post-crisis investigation first
- source-grounded AI support
- timeline plus schema relationships
- VR as a secondary spatial review mode

The prototype should not try to prove:

- full live real-time crisis response
- separate products for every investigator type
- VR as the main place for broad evidence foraging

## Before You Build

1. Open the visual reference package:
   - [index.html](G:/Workspace/Career/tsvetanski-portfolio/public/documents/projects/mumosa-crisis-response-vr/axure-ready/index.html)
   - [search.png](G:/Workspace/Career/tsvetanski-portfolio/public/documents/projects/mumosa-crisis-response-vr/axure-ready/screens/search.png)
   - [overview.png](G:/Workspace/Career/tsvetanski-portfolio/public/documents/projects/mumosa-crisis-response-vr/axure-ready/screens/overview.png)
   - [evidence.png](G:/Workspace/Career/tsvetanski-portfolio/public/documents/projects/mumosa-crisis-response-vr/axure-ready/screens/evidence.png)
   - [timeline.png](G:/Workspace/Career/tsvetanski-portfolio/public/documents/projects/mumosa-crisis-response-vr/axure-ready/screens/timeline.png)
   - [vr.png](G:/Workspace/Career/tsvetanski-portfolio/public/documents/projects/mumosa-crisis-response-vr/axure-ready/screens/vr.png)
2. Create a new Axure RP 11 file.
3. Create 5 top-level pages in this order:
   - `01 Incident Entry`
   - `02 Event Overview`
   - `03 Evidence Review`
   - `04 Timeline + Schema`
   - `05 VR Scene Review`
4. Set one desktop frame size and stay consistent.
   - Recommended working width: `1600 px`
   - Recommended page height: `1300-1450 px`

## Shared Axure Setup

Create these as reusable masters or at least reusable groups:

- `Global Header`
  - project title
  - subtitle
  - three status badges
- `Top Navigation Pills`
  - Incident Entry
  - Event Overview
  - Evidence Review
  - Timeline + Schema
  - VR Scene Review
- `Rounded Panel Card`
  - large white / cream panel
  - soft shadow
  - rounded corners
- `Tag / Badge`
  - green success
  - amber warning
  - blue neutral
- `Action Card`
  - title
  - short supporting sentence

Keep these consistent across all 5 pages so the prototype feels like one system.

## Page 1: Incident Entry

### Purpose

Show that the system starts with the incident, not with a hard profession gate.

### Build

1. Place the `Global Header` master at the top.
2. Add the navigation pills with `Incident Entry` set as active.
3. Add the page title:
   - `Start with the incident, not the profession`
4. Create a large search card containing:
   - heading: `Search crisis incidents`
   - one large search field
   - three suggested prompts underneath
5. Create a second card for `Recent investigations`.
6. Create a bottom card for `Available refinement filters`.

### Interactions

- Clicking the main search field or the first suggested prompt goes to `02 Event Overview`.
- Clicking the active recent investigation card goes to `02 Event Overview`.
- Do not add a required role-selection modal here.

### What this page must communicate

- open search comes first
- filters exist, but they refine after entry
- the system is not split into separate products before the user even starts

## Page 2: Event Overview

### Purpose

Show that the core dashboard helps the user understand the event quickly and see what evidence supports the AI summary.

### Build

1. Reuse the `Global Header`.
2. Set `Event Overview` as the active nav pill.
3. Add the page title:
   - `Event overview centers understanding and verification`
4. Create a left card for `AI synthesis`.
5. Create a right card for `Supporting sources`.
6. Create a wide bottom card for `Suggested next actions`.

### Interactions

- Clicking a supporting source card goes to `03 Evidence Review`.
- Clicking `Compare conflicting source times` goes to `04 Timeline + Schema`.
- Clicking `Inspect hazard spread` goes to `05 VR Scene Review`.

### What this page must communicate

- AI is useful, but it is source-grounded
- the dashboard is the main investigation workspace
- the next steps are evidence review, chronology, and spatial review

## Page 3: Evidence Review

### Purpose

Show how an AI claim can be traced back to source material.

### Build

1. Reuse the `Global Header`.
2. Set `Evidence Review` as the active nav pill.
3. Add the page title:
   - `Trace AI claims back to source material`
4. Create a large left panel for `Visual evidence`.
   - use the rendered PNG or recreate the scene card in Axure
   - include two labeled hotspots on the image
5. Create a right panel for `AI explanation`.
6. Create a bottom panel for post-entry filters.

### Interactions

- Clicking the image hotspot `Ignition candidate` can show a local state or tooltip.
- Clicking `Source chain` can open a dynamic panel or simply highlight the source list.
- Clicking a timeline-related clue goes to `04 Timeline + Schema`.

### What this page must communicate

- verification matters
- filters belong here more than at entry
- source tracing is a core value of MUMOSA

## Page 4: Timeline + Schema

### Purpose

Show how sub-events connect over time and how multiple sources support the event narrative.

### Build

1. Reuse the `Global Header`.
2. Set `Timeline + Schema` as the active nav pill.
3. Add the page title:
   - `Follow how sub-events connect over time`
4. Create a wide top timeline panel with 4 event nodes.
5. Create a lower left schema panel.
6. Create a lower right explanation panel called:
   - `What this view is for`

### Interactions

- Clicking a timeline node can show a tooltip or small evidence overlay.
- Clicking a schema node can highlight a related sub-event.
- Add one button or link to `05 VR Scene Review`.

### What this page must communicate

- chronology reduces fragmentation
- schema is not abstract decoration; it connects evidence and sub-events
- VR becomes useful after the user understands the event sequence

## Page 5: VR Scene Review

### Purpose

Show VR as a secondary spatial evidence-review mode, not the entire product.

### Build

1. Reuse the `Global Header`.
2. Set `VR Scene Review` as the active nav pill.
3. Add the page title:
   - `VR supports scene reconstruction and hazard review`
4. Create a large left panel for the reconstructed scene.
5. Create a right panel for the selected object details.
6. Create a bottom panel for `Why VR is included`.

### Interactions

- Clicking a scene object changes the selected detail card.
- Add subtle focus states for:
   - smoke drift
   - ignition zone
   - railcar cluster
   - response vehicle
- Add a return link back to `02 Event Overview` or `04 Timeline + Schema`.

### What this page must communicate

- VR adds spatial context
- VR helps with hazard understanding and scene review
- VR supports training value
- VR does not replace the dashboard

## Fastest Team Workflow

If the team is short on time, do this:

1. Import the rendered PNGs as the visual basis for each page.
2. Add Axure hotspots on top of the images.
3. Link pages together.
4. Add only a few small interactions:
   - source click
   - timeline click
   - scene-object click

This is much faster than rebuilding every visual element from scratch.

## Better Axure Workflow If You Have More Time

1. Rebuild the header, nav pills, panel cards, and badges natively in Axure.
2. Use the PNGs only as visual references.
3. Make the visual evidence and VR panels interactive with dynamic panels or states.
4. Keep the rest of the prototype lightweight.

## Recommended Team Split

If three people are working:

1. Person 1: shared styles, header, navigation, page setup
2. Person 2: Incident Entry + Event Overview + Evidence Review
3. Person 3: Timeline + Schema + VR Scene Review

One person should still act as final integrator before critique or submission.

## Final Sanity Check Before Presentation

Make sure the prototype still says:

- this is an investigation-first system
- the dashboard is the main workflow
- AI is grounded in evidence
- timeline helps reconstruct events
- VR is a supporting spatial mode

If the prototype starts feeling like:

- a generic responder app
- a profession chooser
- a mobile field tool
- or a VR-first system

then the scope has drifted.
