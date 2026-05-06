# Prince Mod Implementation Roadmap Snapshot

Updated for the portfolio page on 2026-05-05.

## Current Build Story

The mod is no longer just a custom card pack. It now has a selectable Prince character, custom starter/reward flow, Medallion of Time rewind, Sand HUD, generated Wind Back cards, persistent Dahaka chase pressure, a playable escape encounter, Warrior Within audio routing, and active art/presentation pipelines.

## Main Technical Tracks

### 1. Character Foundation

- Keep the Prince selectable on the current STS2 `v0.103.2` / BaseLib `v3.1.0` baseline.
- Maintain the custom starter deck, starter relic, reward/shop card appearance, room presentation hooks, and Neow dialogue.
- Keep compatibility patches narrow and documented when STS2 or BaseLib behavior changes.

### 2. Medallion And Rewind

- Rewind remains the signature engineering system.
- Snapshot restore must continue to cover player state, card piles, generated combat cards, powers, relic runtime fields, enemy roster changes, monster move state, and UI cleanup.
- Wind Back remains the user-facing rewind surface rather than a raw relic click.
- Lethal rewind should remain safe: arm the rewind through death-prevention flow and restore only from a safe follow-up hook.

### 3. Sand Economy

- Sand is the premium Prince resource.
- Sand should be earned through combat and specific cards, displayed through the Medallion HUD, and carried through the relic in a save-aware way.
- Sand spending should create pressure, not just value.

### 4. Dahaka Escape

- The Dahaka chase should carry across combats.
- When the chase fills, the mod can take over the current fight with a distance-based escape encounter.
- Escape cards, distance widgets, Sandpit movement, side staging, Dahaka audio, and active-rewind clamps should all support the same "run from fate" loop.

### 5. Art And Presentation

- Continue the card/relic/UI batch bake pipeline.
- Keep runtime puppet animation focused on readable idle motion using the current v15_fullcanvas Prince layer cuts from the live Godot mod folder before attempting complex action animation.
- Keep video overlays, music routing, and voice/SFX tied to clear gameplay moments.

## Portfolio-Specific Capture

The portfolio page now uses the May 5, 2026 gameplay capture as the current external-facing video. It should remain the primary clip until the mod has a newer build capture with the same or better coverage:

- character select or run start
- Sand HUD and Medallion state
- Wind Back generation and rewind montage
- a Dahaka chase or escape moment
- current Prince/Dahaka sprite and puppet evidence from the live mod folder rather than older Downloads/reference cuts
- current character-select screenshot, ComfyUI-assisted lookdev disclosure, and Dahaka Silhouette Mask ML evidence when discussing presentation pipeline

The older March 21 capture remains useful as archived history, but it is no longer the portfolio page's current gameplay evidence.
