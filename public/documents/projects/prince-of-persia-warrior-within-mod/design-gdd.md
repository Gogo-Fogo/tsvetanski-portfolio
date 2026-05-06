# Prince of Persia: Warrior Within Mod - Working GDD Snapshot

Updated for the portfolio page on 2026-05-05.

## High Concept

Create a Slay the Spire 2 character mod where the Warrior Within Prince survives by stealing time back.

The class fantasy is:

- fight aggressively through motion, timing, and dual-blade pressure
- earn and spend Sand through the Medallion of Time
- use Wind Back to rewind bad futures
- pay for those second chances by bringing the Dahaka closer

## Current Baseline

- Game baseline: Slay the Spire 2 `v0.103.2`
- Mod dependency: BaseLib `v3.1.0`
- Engine/tooling: Godot `4.5.1`, C#/.NET `9`, Harmony patches
- Starter relic direction: `Medallion of Time`
- Core rewind delivery: generated `Wind Back` combat card
- Current portfolio capture: May 5, 2026 gameplay video showing the active Sand/rewind/Dahaka presentation pass
- Current first public release target: roughly `32` real Prince cards, then expand toward `56` and `88`

## Core Pillars

### Aggressive Survival

The Prince should not feel like a shield tank. Defense should read as deflecting, slipping, moving, or turning an enemy's commitment against them.

### Stolen Time

Rewind should feel powerful and tempting, but not free. The baseline rule is honest snapshot restore: broader "carry something through time" effects belong to special cards, relics, or later content.

### Relentless Pursuit

The Dahaka is not background lore. Rewind and Sand use should push a persistent chase state that can interrupt normal combat with an escape sequence.

## Card Families

- `Dual-Blade Flow`: movement, follow-through, main-hand/off-hand sequencing, and tempo.
- `Deflect / Counter`: clutch reversals, Weak/Vulnerable exploitation, and technique-based defense.
- `Time Predator`: Sand generation, proactive rewind value, second-pass advantages, and Hunted pressure.

The families should overlap naturally. The Prince should draft hybrid decks, not isolated tribes.

## Guardrails

The base pool should not drift into:

- stealth-assassin identity
- heavy shield-tank identity
- serene time-mage identity
- passive counter-lock or stall-scum gameplay
- Dark Prince/corruption-first identity in the initial public slice

## Asset And Presentation Direction

The current page is honest that some visuals are beta and ComfyUI-assisted. The portfolio value is the full integration work: card/relic/UI bakes, actual combat sprites from the live mod folder, current v15_fullcanvas Prince puppet layer cuts, runtime puppet animation, current character-select integration, Sand HUD, Dahaka Silhouette matte work, Dahaka presentation, audio routing, combat-start voice, and video overlays.
