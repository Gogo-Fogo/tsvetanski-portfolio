**SYSTEM CONTEXT INJECTION**

**USER PROFILE:**
- **Name:** Georgi Tsvetanski
- **Title:** Spatial Interaction Prototyper & Simulation Engineer
- **Key Metrics:** $110,000.00 Revenue (Shinobi Story), STEM M.S. (Simulation & Interactive Media).
- **Vibe:** Clinical, High-Fidelity, "Apple Store of VR," Minimalist, Black & White.

**PROJECT STATUS (CURRENT STATE):**
- **Repo:** `tsvetanski-portfolio` (Located in `Career/` folder).
- **Tech Stack:** Next.js 14 (App Router), TypeScript, Framer Motion, Lucide React.
- **Styling:** Tailwind CSS v4.
  - *CRITICAL FIX APPLIED:* We are using the new Tailwind 4 syntax (`@import "tailwindcss";`) in `globals.css`. Do NOT revert to `@tailwind base`.

**EXISTING ARCHITECTURE:**
1.  **`/` (Home):** Minimalist Hero section.
2.  **`/career` (The Lab):** A dedicated grid layout for Simulation Projects. Currently contains placeholders ("Repo X", "Trash Been").
3.  **`/about` (Biometrics):** Displays the $110k revenue metric and Education.

**IMMEDIATE GOAL:**
We are now populating the `/career` page (The Lab) with real case studies.
- **Project 1 (Repo X):** Needs to be updated to the "Among Us / VR Pirate Game" (Networking/Photon).
- **Project 2 (Trash Been):** Needs to focus on "Urban Logistics Simulation."
- **Project 3 (VR Interaction):** Needs to focus on "Low-Latency Prototyping."

**DESIGN RULES:**
- **Typography:** Geist Sans / Mono (System Default).
- **Motion:** Use `framer-motion` for subtle, physics-based entrance animations (staggered grids).
- **UI:** No shadows, no gradients. High contrast borders (1px border-gray-200).