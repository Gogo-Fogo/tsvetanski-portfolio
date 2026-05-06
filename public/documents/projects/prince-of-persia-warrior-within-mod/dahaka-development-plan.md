# Dahaka Development Plan Snapshot

Updated for the portfolio page on 2026-05-05.

## Purpose

The Dahaka is the pressure system that makes rewind costly. The goal is not only to spawn a boss. The goal is to make the player feel that every stolen second has consequences.

## Current Loop

1. The Prince earns Sand through combat and Sand-focused cards.
2. Wind Back spends Sand to rewind 1, 2, or 3 turns.
3. Rewind advances the persistent Dahaka chase.
4. When the chase fills, the current fight can shift into a Dahaka escape encounter.
5. Escape cards increase distance; Dahaka pressure reduces it.
6. Rewind remains clamped inside the Dahaka phase once the chase has begun.

## Implemented Direction

- Dahaka has custom monster model logic and presentation hooks.
- Custom monster visuals need a Harmony fallback because BaseLib handles custom character visuals more directly than custom monster visuals.
- The escape encounter tracks distance, widgets, generated escape cards, Sandpit-style movement, and encounter-specific presentation.
- The chase state persists between combats instead of resetting after every fight.
- Dahaka presentation includes voice, reversed voice variants, spawn sounds, chase staging, and visual/audio pressure.

## Current Technical Risks

- Custom STS2 monster placement and room-node reconciliation can drift from the combat model if engine layout assumptions change.
- Sandpit-style movement is sensitive to timing because creature visuals must exist before position tweens can read nodes.
- Rewind inside active Dahaka must restore chase-local state without letting the player travel back out of the encounter.
- Successful escape must end the room cleanly and preserve normal reward flow.

## Next Iteration Priorities

- Verify Dahaka spawn, side staging, and distance movement in the current STS2 build.
- Tighten "closing in" and "gaining distance" feedback through VFX, camera, animation, or audio.
- Keep balance tuning narrow until the presentation loop is stable.
- Avoid mixing confrontation-route content, new card waves, or route rewards into this escape-polish pass.

## Portfolio Note

For portfolio readers, the Dahaka matters because it turns a mechanical undo button into a systemic risk loop. It shows encounter design, state management, UI, audio, animation, and engine integration working together.
