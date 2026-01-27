# Implementation Plan: Tsvetanski Portfolio Content Update

## Phase 1: Update `/career` page (The Simulation Lab)

### Goal: Expand the project grid and add refined placeholders for all 6 projects.

### Projects to Integrate:
1.  **"Guilty As Arrr" (Multiplayer VR Pirate Game):**
    *   **Focus:** Networked Multiplayer, Spatial Audio, Photon Fusion.
    *   **Tagline:** Real-time spatial audio attenuation for multi-user social deduction.
2.  **VR Dirt Bike Game:**
    *   **Focus:** VR Safety Simulation, Educational VR.
    *   **Tagline:** Immersive training for smart and safe driving practices.
3.  **VR Car Drift/Driving Simulator:**
    *   **Focus:** VR Driving Simulation, Vehicle Physics.
    *   **Tagline:** High-fidelity spatial interaction and vehicle dynamics in a night city environment.
4.  **Fallout Mod (Level Design):**
    *   **Focus:** Level Design, Environmental Storytelling, Team Collaboration.
    *   **Tagline:** Overhauled game level demonstrating world-building and existing IP adaptation.
5.  **Shonen TCG Game (Personal Prototype):**
    *   **Focus:** 3D Multiplayer TCG, Game Systems Design.
    *   **Tagline:** Developing a robust 3D multiplayer trading card game prototype.
6.  **VR Patapon Game (GDD Placeholder):**
    *   **Focus:** VR Game Design Document, Rhythm-based Interaction, Strategy.
    *   **Tagline:** Conceptualizing an innovative VR rhythm-strategy game.

### Execution Steps:
- [ ] Modify `src/app/career/page.tsx` to display 6 project cards.
- [ ] For each card, use the project details above (Title, Tagline, Focus).
- [ ] Implement a clean, responsive grid layout for these cards.

## Phase 2: Update `/about` page (Biometrics & Background)

### Goal: Integrate accelerated M.S. IDIA details with US Military client project, and reinforce "T-Shaped" narrative.

### Content Updates:
- **Education:**
    *   M.S. Interaction Design & Information Architecture (University of Baltimore, Incoming Spring 2026, Accelerated Program).
    *   Highlight: **US Military client project** for a master's course.
    *   Focus: Human-Computer Interaction (HCI), User Research, Human-Systems Integration, Designing Complex Systems (STEM Designated).
- **Profile Narrative:**
    *   Reinforce "T-Shaped Developer" bridging Technical Engineering and Human Factors.
    *   Emphasize "AI-Assisted Prototyping" for rapid results.

### Execution Steps:
- [ ] Modify `src/app/about/page.tsx` to include the updated education details.
- [ ] Add a section highlighting the US Military client project.
- [ ] Ensure the overall narrative on the page aligns with the "T-Shaped Developer" and "Human-Systems Integration" pitch.

## Phase 3: Global Metadata & Branding Refinement

### Goal: Ensure consistent branding and SEO optimization.

### Content Updates:
- **`src/app/layout.tsx`:**
    *   Update `metadata.title` and `metadata.description` to accurately reflect "Spatial Interaction Prototyper & Simulation Engineer" and your specific focus areas.

### Execution Steps:
- [ ] Review and update `metadata` in `src/app/layout.tsx`.

## Phase 4: Final Review and Commit

### Goal: Save all changes and prepare for local testing/deployment.

### Execution Steps:
- [ ] Run `npm run dev` and visually inspect all pages (`/`, `/career`, `/about`).
- [ ] Commit changes to Git with a descriptive message via GitHub Desktop.