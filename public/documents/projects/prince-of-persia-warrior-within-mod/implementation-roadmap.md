# Prince Mod TODO

## Current State

- [x] Godot project created
- [x] GitHub Desktop repo initialized
- [x] Basic STS2 mod entrypoint compiles
- [x] `sts2.dll` and `0Harmony.dll` wired into the project
- [x] Project name sorts alphabetically after `BaseLib` for the current temporary load-order requirement
- [x] BaseLib installed into the game and referenced by this project
- [x] Current local baseline is now STS2 `v0.99.1` + `BaseLib v0.1.9`
  - the project references `BaseLib.dll` directly from the installed game's `mods/BaseLib` folder
  - the recent Dahaka boss / Sandpit work was built, deployed, and pushed against this combo
  - older `v0.98.3` notes below are still useful as history, but they are no longer the active baseline
- [x] Replace provisional flat-file deploy with version-aware staging and per-mod-folder publish flow
- [x] Historical: resolve installed STS2 `v0.98.3` vs BaseLib compatibility mismatch
  - `BaseLib v0.1.0` targets the newer beta mod structure and did not load on local `v0.98.3`
  - `BaseLib v0.0.5` loaded correctly on local `v0.98.3` and was the active dependency on that older baseline
- [x] Leave a temporary debug-travel map hack enabled locally so any node can be clicked during room-hook testing
- [x] Valid in-game load test from Steam launch
- [x] Runtime character localization now merges in code to avoid older STS2 builds replacing the whole `characters` table when a mod ships `localization/eng/characters.json`
- [x] Prince full spoken combat-start lines now use the built-in STS2 speech-bubble path (`TalkCmd` / `NSpeechBubbleVfx`) instead of a custom UI overlay
  - bubbles intentionally do not fire for hit grunts or attack barks
- [x] Neow now has Prince-specific run-start dialogue through the built-in Ancient dialogue system
  - `Neow.DefineDialogues()` is patched to register a Prince bucket instead of replacing agnostic Neow text
  - current pass adds 25 Prince-facing Neow lines across first-Prince-run, second-Prince-run, and repeating later visits
  - multiple lines now explicitly frame Neow as relating to the Prince's burden of return / denied rest
  - later-visit lines now also hint that the Prince and his hunter crossed into the Spire together, without hard-explaining the crossover
  - Prince's Neow event also gets a small dialogue-stack lift so the Ancient speech bubble sits a bit higher on the composition instead of crowding Neow's face
- [x] Historical: BaseLib `v0.0.5` compatibility patched for local `v0.98.3` startup
  - duplicate Prince registration is culled back to one slot at startup
  - the outdated `RoomSet.Ancient` force-spawn hook is disabled on this build
  - the outdated custom-ancients pool injection is also disabled on this build
  - continue-run UI errors from saved Prince runs are suppressed so the main menu can still open cleanly


## Locked Decisions

- [x] Character direction: Prince of Persia, Warrior Within version
- [x] Art direction for now: MS Paint beta art
- [x] Core fantasy: Dagger of Time rewinds combat state
- [x] Rewind economy direction: Sand-based Dagger + `Wind Back` tiers
- [x] Main penalty direction: Dahaka chase / doom clock
- [ ] Final rewind rules and exact Dahaka numbers
- [ ] Final naming for relics, cards, and keywords
- [x] Combat language direction: `Movement`, `Main-hand`, `Off-hand`, `Dual`
- [x] Defensive identity direction: dodge / deflect / counter over heavy tank blocking
- [x] Water Sword-era Dahaka direction: Escape or Confront, not mandatory confrontation
- [x] Long-term Prince pool target: `88` real cards built in waves `32 -> 56 -> 88`
- [x] Card-family direction: `Dual-Blade Flow`, `Deflect / Counter`, `Time Predator`
- [x] Hybrid goal: the 3 Prince families should intertwine naturally instead of drafting as hard silos
- [x] Off-hand improvisation is a `Flow` subtheme, not a separate fourth build
- [x] `Hunted` is a light support mechanic, not a full standalone archetype
- [x] Baseline rewind stays honest; broader persistence-breaking time effects belong to later high-rarity content

## Immediate Setup

- [x] Install BaseLib release assets (`.dll` + `.pck`) into:
  `C:\Program Files (x86)\Steam\steamapps\common\Slay the Spire 2\mods\`
- [x] Decide whether to consume BaseLib through the template/NuGet route or by local assembly reference
- [x] Add BaseLib back to `POP-WarriorWithin-Mod-SlayTheSpire2.csproj`
- [x] Update installed BaseLib from `v0.1.0` to `v0.1.8` after reviewing the release notes
  - the Dahaka monster-visual fallback work was rebuilt cleanly against `v0.1.8`
  - the missing-localization crash fix and mod-config improvements are now available locally
- [x] Update installed BaseLib from `v0.1.8` to `v0.1.9` (2026-03-24)
- [ ] If BaseLib features seem missing later, check/update the installed BaseLib release or retarget the local assembly reference
- [x] Confirm the game detects BaseLib cleanly in the modding screen/logs after Steam-launched mod confirmation and version-compatible packaging
- [x] Set up Build for the fast loop:
  - build `.dll`
  - stage into the layout expected by the installed STS2 version
- [x] Set up Publish for resource changes:
  - build `.dll`
  - export Godot `.pck` if required by the installed STS2 version
  - place files in the layout expected by that version
  - deploy now forces `dotnet build -t:Rebuild` because incremental builds were leaving a stale DLL beside fresh PCK exports
- [x] Document the pinned `sts2-modding` Discord manifest / FAQ guidance in `STS2_DISCORD_PINS_NOTES.md`
  - current `v0.99.1` baseline should use an external `<ModId>.json` beside the binaries
  - the legacy `mod_manifest.json` inside the `.pck` is now only a compatibility / reference artifact
- [x] Add a VS Code launch/debug task for STS2 via Steam or remote debug support files
- [x] Install the Discord-recommended GDRE Tools `v2.5.0-beta.3` locally under `tools/gdre/v2.5.0-beta.3`
  - use this repo-local copy for scene/resource recovery work instead of the older temp `2.4.0.0` copy under `AppData\Local\Temp`
- [ ] Keep manifest fields, folder name, and packaged file names aligned with the installed STS2 version

## VS Code <-> Godot MCP Track

- [ ] Pick and test a Godot MCP bridge for VS Code/Codex
- [ ] Preferred first candidate: `Coding-Solo/godot-mcp`
- [ ] Backup candidate: `ee0pdt/Godot-MCP`
- [ ] Verify the bridge can do the things we actually need:
  - open the Godot project
  - inspect scene tree/resources
  - run the project
  - capture debug output/errors
  - edit scenes/resources safely
- [ ] If Codex in your VS Code setup cannot consume MCP directly, use this fallback workflow:
  - keep Codex for code edits
  - use Godot editor + CLI/debug tasks for runtime feedback
  - keep MCP as optional rather than blocking

## Character Foundation

- [x] Create the Prince character model/registration using BaseLib
- [x] Add a placeholder character select entry
- [x] Add placeholder visuals/paths so the slot loads without crashing
- [x] Stabilize Prince character selection on local `v0.98.3`
  - the Prince slot now selects and starts a run cleanly
  - `Dagger of Time` has been restored as the Prince's active starter relic after stabilizing the local BaseLib pool fallback
- [ ] Reintroduce full Prince select/combat art after the slot is stable on `v0.98.3`
  - safe portrait/icon hooks are being restored first
  - character-select background is now being retried through a scene wrapper instead of a raw PNG
  - combat visuals are being retried through a scriptless `NCreatureVisuals` scene wrapper to avoid the local `PrinceCombatVisuals.cs` class-lookup failure on `v0.98.3`
  - the banner art now loads, but its ratio/crop likely needs a Prince-specific final export
  - rest and shop visuals now inject Prince PNG overlays at runtime during room `_Ready()` instead of swapping room scenes outright
  - local `v0.98.3` camp/shop safety explicitly forces Prince rest and merchant scene paths back to Silent's vanilla paths before preload; reintroducing custom rest/shop scene paths crashed or hung room entry on this build
- [x] Define starting HP, gold, energy, deck, and starting relic
  - all values are still placeholder tuning
  - `Dagger of Time` is now the active Prince starter relic again and currently grants 1 Sand Charge at the start of each combat
  - built-in character select SFX overrides are cleared so only the Prince-specific select sound plays
- [x] Add a temporary Prince starter deck with real custom card models
  - current first-pass deck is a real Prince-specific 10-card starter deck built from custom card models
  - card art is placeholder-only for now, but the text/effects are now owned by the Prince mod instead of borrowed vanilla card classes
  - live Prince runs now force-replace placeholder starter cards with the Prince starter deck at run start
- [x] Add a temporary Prince reward/shop card pool once the starter deck feels stable
  - first pass now includes common, uncommon, and rare Prince reward cards using shared placeholder art
- [ ] Create a shared base card class for Prince cards if we go with a dedicated character pool
- [ ] Decide folder structure early:
  - `Cards/`
  - `Relics/`
  - `Prince of Persia.../localization/eng/`

## Rewind System

- [x] First Prince Sand spenders now exist through Sand-cost cards
  - `Sand Feint` costs 1 Sand
  - `Ravages of Time` costs 2 Sand
  - `Cyclone of Fate` costs 2 Sand
  - current spend validation is enforced through `CardModel.CanPlay` and Sand is consumed in `CardModel.OnPlayWrapper`
- [x] First manual Dagger rewind path now exists
  - combat snapshots now use custom per-turn Prince snapshot data captured at `combat start` and each Prince turn start
  - manual rewind UX is moving away from relic/button clicks and into a generated retained `Wind Back` card
  - `Wind Back` is designed to offer 1/2/3-turn rewind choices for 2/4/6 Sand
  - once combat crosses the 2-Sand threshold, `Wind Back` should be queued immediately, but the actual hand injection has to wait for a safe combat-ui tick where `RunManager.ActionExecutor.CurrentlyRunningAction` is idle; granting it directly from turn-start/card-resolution hooks or by poking unstable creature lists can still jam combat-end flow if a relic or pending action kills the last enemy in the same window
  - if combat is too early for the requested depth, rewind falls back to the earliest stored snapshot instead of failing outright
  - lethal damage now routes through the Dagger's native death-prevention hooks and should auto-pick the deepest affordable rewind tier
  - current rewind preserves spent Sand and Dahaka chase instead of refunding them, but rewinds the combat snapshot itself
  - if rewind is used after the Dahaka chase has already begun, it is now clamped to the earliest Dahaka-phase snapshot instead of crossing back to a pre-chase timeline
  - rewinding inside the Dahaka chase now restores Dahaka-local state (catch flags, escape state, distance, presentation/Sandpit) while still keeping the rewind's Sand spend permanent
  - important engine lesson: `RunManager.StateDiverged(...)` leaves combat replay recording in a bad state for our use case unless we reinitialize or disable the replay writer immediately after restore
  - important BaseLib lesson: generated rewind utility cards must be registered once as hidden canonical models with a valid pool attribute, then cloned from `ModelDb`; direct runtime construction causes duplicate-model failures, while normal reward/library registration would leak them into the public card pools
  - important model-mutability lesson: hidden canonical rewind cards cannot use `CreateClone()` on local `v0.98.3`; they have to use `MutableClone()` before being handed to combat commands or the engine throws `CanonicalModelException`
  - important combat-card lesson: even a mutable generated rewind card still has to be attached through `CombatState.CreateCard(...)` before `CardPileCmd.AddGeneratedCardToCombat(...)`; otherwise STS2 rejects it with `must be added to a CombatState before adding it to this pile`
  - important combat-UI lesson: restoring the run/combat snapshot alone leaves the live `NCombatUi` and targeting layer subscribed to stale creature/card nodes; after rewind we need to rebuild the current combat room UI instead of only rebinding our own mod state
  - important combat-UI lesson: `RunManager.EnterRoomWithoutExitingCurrentRoom(...)` is the wrong refresh hook for a rewind on local `v0.98.3`; the live `NCombatUi` needs to be deactivated and reactivated against the restored `CombatState` instead
  - important hand-UI lesson: even after the combat UI is rebound, `NPlayerHand` can keep stale drag/focus/holder state from the pre-rewind timeline; the rewind path has to clear those interaction fields and rebuild the holders in restored hand order or cards overlap, disappear, or stop dragging correctly
  - important hand-holder lesson: on local `v0.99.1`, the "keep existing holders and only clear stale `NCard` visuals" approach can still strand `NPlayerHand` with too few holders after `Wind Back`; the current stopgap is to fully clear the stale holder/container state and then rebuild the restored hand through the game's `Add(NCard, index)` path until we find a safer engine-native holder-regrow hook
  - important disposed-card lesson: before freeing a stale `NCard` from a live hand holder, rewind must clear the holder's own `CardNode`/binding (`Clear()` on `NHandCardHolder` plus nulling the writable `CardNode` property); otherwise the game's deferred `NPlayerHand.OnCombatStateChanged(...)` still calls `UpdateCard()` on a disposed card node and the whole hand redraw dies
  - important holder-rebuild lesson: when rewind restores a larger hand than the live future timeline currently shows, `RefreshLayout()` alone may leave `NPlayerHand` with too few holders (for example `1` active/total holder for a restored 7-card hand); after clearing stale visuals we need to trigger the game's own `NPlayerHand.OnCombatStateChanged(...)` so it can recreate the missing holder nodes before our card rebind pass runs
  - important hover-tip lesson: Prince combat widgets should use STS2 `NHoverTipSet`/`HoverTip` instead of Godot `TooltipText`; the built-in Godot tooltip uses the wrong style/timing and does not layer correctly with the game's relic hover tips
  - important restart-state lesson: `SandCharges` should only sync back to the Dagger relic at `EndCombat`; mid-combat sync makes a game restart load the spent sand instead of the original turn-1 combat state
  - important persistence lesson: local `v0.99.1` can tear the combat UI down after the live combat-state relic list has already been cleared, so end-of-combat Sand carryover now writes through the Dagger reference cached at `BeginCombat`
  - important save-order lesson: room-transition autosaves can happen before combat-ui teardown writes the carried sand back to the Dagger, so the mod now forces a `current_run.save` after sand is established at combat start (and best-effort at combat end) to make restart persistence match the live carryover
  - important refresh lesson: `NCombatUi.Activate(...)` re-fires turn-start logic and mutates the restored timeline, so rewind refresh now prefers an in-place live UI sync (hand/end-turn widgets) over a full combat-ui deactivate/reactivate cycle
  - important relic-state lesson: rewind has to snapshot and restore mutable runtime fields for the player's live relic instances; otherwise relic counters/flags like `Happy Flower` drift onto the future timeline even when HP, powers, and card piles rewind correctly
  - important enemy-roster lesson: split/summon rewinds must recreate missing snapshot enemies before removing post-snapshot enemies, and recreated monsters must use mutable models plus `CombatState.AddCreature(...)` on the new live instance; otherwise a failed boss recreation can leave combat with zero enemies or simply strand the fight on the future enemy roster
  - important monster-state lesson: rewind has to restore the monster model's actual `NextMove` / move-machine runtime, not just the creature shell; round-1 boss rewinds can otherwise recreate a monster on `UNSET_MOVE` and hard-freeze the enemy turn when you click End Turn
  - important room-node lesson: once rewind changes the enemy roster, the live `NCombatRoom` creature nodes must be reconciled against `CombatState.Creatures`; otherwise stale wriggler visuals can stay on screen even though the combat model already recreated the boss
  - important transient-card lesson: rewind should drop future-only leftover cards and clear the live play/preview queue visuals; otherwise generated `Wind Back` leftovers and played-card nodes can survive into the restored timeline and leave cards floating in the air
  - important reflection-overload lesson: STS2 UI helpers like `RemoveCardFromQueueForCancellation` are overloaded, so rewind cleanup has to bind the exact `NCard, bool` signature; a name-only reflection lookup can silently skip the whole queue cleanup and leave floating cards behind
  - important model lesson: generated combat cards still need a canonical hidden model entry; constructing `CustomCardModel` subclasses directly during combat triggers duplicate-model failures, so generated rewind cards should be registered once as hidden models and cloned from `ModelDb`
  - important death-hook lesson: trying to restore the snapshot directly inside `ShouldDie` / `ShouldDieLate` causes the current enemy damage action to keep running against divergent state and can recurse into `Combat is ending, but something is continually preventing the last creature from being killed!`; the Dagger should only arm the rewind in the death check and do the actual restore from `AfterPreventingDeath`
  - important power-state lesson: rewind cannot call `RemoveAllPowersInternalExcept([])` unless it also rebuilds the snapshot powers immediately afterward; otherwise buffs/debuffs silently vanish and the combat visuals drift away from the restored numbers
  - important power-restore lesson: rewind power restore needs cloned runtime `PowerModel` state with owner rebinding, not bare canonical re-application; special powers like `Infested` were still nullrefing on recreated enemies when rebuilt from scratch
  - important snapshot-card lesson: generated combat cards like `Wind Back` may not exist in the live piles anymore by the time rewind happens, so card-pile restoration has to recreate missing snapshot cards through `CombatState.CreateCard(...)` instead of only redistributing whatever is still alive in hand/draw/discard/exhaust
  - important combat-card-id lesson: when rewind restores mutable cards with silent `CardPile.AddInternal(...)`, those cards must also be re-registered with `NetCombatCardDb` or generated cards like `Dahaka Escape` / `Wind Back` can crash on the next drag/play cleanup because STS2 cannot map them back to combat card IDs
  - important enemy-roster lesson: rewinding only HP/block is not enough once encounters spawn or remove enemies mid-fight; later-timeline enemies must be removed and snapshot enemies may need to be recreated before the combat UI is rebound
  - important hand-refresh lesson: after `NCombatUi.Activate(...)`, the rebuilt `NPlayerHand` may not have all of its active holders on the very next frame; rewind hand resync has to wait and retry across a few frames, then non-destructively rebind/return the live holders instead of tearing the holder list apart
  - important hand-pool lesson: manual `NCard` instantiation is still risky for pool ownership, but the empty-hand `Wind Back` regression is worse; for now rewind uses the older `Add(NCard, index)` repair fallback and this should be revisited only after the post-rewind hand is stable again
  - important perf lesson: recovered STS2 source confirms monster `StateLog` is part of real AI/power behavior, so snapshot perf work should keep move-history capture intact and instead target hot-path reflection, stateless relic cloning, and noisy per-turn logging
- current snapshot perf pass now caches hot reflection lookups (move-state machine access, card upgrade metadata, instance-field enumeration), skips cloning relics that have no restorable runtime fields, and only logs snapshot captures when combat starts or a turn capture is actually slow
- `Eye of the Storm` now uses a dedicated concrete temporary-Dexterity power model; applying the abstract `TemporaryDexterityPower` directly was throwing a missing-power-key exception on `v0.99.1`
- rewind now keeps the latest pre-encounter Dahaka chase value instead of rolling the doom clock backward with the snapshot; only the actual Dahaka phase restores chase-local state from the locked chase window
- same-round snapshot capture now replaces the older same-round entry instead of discarding the newer state, so the first true Dahaka-escape turn-start snapshot is not lost behind an earlier checkpoint with the same round number
- important hand-pool lesson: rewind's emergency `Add(NCard, index)` fallback should build cards through pooled `NCard.Create(...)`, not raw `PackedScene.Instantiate()`, or later hand cleanup can throw `not part of the pool` errors when STS2 frees those nodes
- hand cleanup now also avoids force-freeing holders a second time after `NPlayerHand.RemoveCardHolder(...)`, because the engine already clears and frees those holders itself
- [x] Local `v0.98.3` progress-save compatibility now suppresses base-game elite/boss epoch checks for Prince runs
  - the base game's epoch helper assumes only vanilla characters and was throwing during post-combat save/update for Prince elite wins
- [ ] Decide exact long-term rewind menu/options:
  - restart current turn
  - rewind 1 turn
  - rewind 2 turns
  - rewind 3 turns / beginning of combat
- [x] Create a combat snapshot model
- [x] Capture snapshots at turn start
- [x] Restore player state from snapshot
- [x] Restore enemy state from snapshot
- [x] Restore hand/draw/discard/exhaust state
- [x] Restore energy/block as needed
- [ ] Audit remaining non-restored combat state for balance (statuses/flags/etc.)
- [ ] Define what is intentionally not restored if needed for balance
  - planned next milestone: auto-spend 3 Sand on death to rewind two turns without refunding Sand
- [ ] Verify in-game whether the snapshot perf pass materially reduces turn-start hitching before attempting deeper snapshot payload trims

## Dahaka System

- [ ] Create a Dahaka tracker/manager
- [ ] Define how many steps each rewind adds
- [ ] Define whether the Dahaka advances each turn, on rewind only, or both
- [x] First playable Dahaka escape fight now exists as a real mid-combat enemy swap with chase + distance widgets
  - Dahaka now uses a dedicated `MonsterModel.CreateVisuals()` Harmony fallback because BaseLib only patches `CharacterModel.CreateVisuals()` by default
  - `art/combat/dahaka_combat_visuals.tscn` now loads through a plain `Node2D` root and BaseLib's `GodotUtils.CreatureVisualsFromScene()` wrapper path
  - the mid-combat swap now explicitly sets `ShowsInfiniteHp` and forces the first move because `AfterAddedToRoom()` does not run in this spawn path
  - Dahaka currently uses an Insatiable-style 4-move loop: Shadow Thrash -> Temporal Lunge -> Dark Surge -> Shadow Thrash
  - chase now persists between combats instead of resetting after every fight
  - Dahaka art comes from `art/dahaka_character.png`
  - chase cap is back to the intended `10` so the meter fills at a normal pace again
  - rewind chase now follows the intended `2 / 4 / 6` gain for `1 / 2 / 3` turn rewinds instead of overfilling on the first rewind
  - passive pursuit is temporarily disabled again until the real Dahaka phase system lands
  - generated escape / Wind Back cards now fall back to the draw pile when the hand is near the engine limit, and the chase overlay hides during escape so it stops covering a normal battlefield with Dahaka art
- [ ] Fix the current Dahaka encounter presentation / feel issues before broader content work
  - the live swap path now uses the unslotted boss pattern (`null` slot) and manually repositions the spawned Dahaka node after `RefreshCreatureVisuals`, but this still needs in-game verification
  - Sandpit now follows the real Insatiable ownership model (power lives on Dahaka, targets the player) and is applied after a short spawn-settle step, but this still needs in-game verification
- successful Dahaka escape now removes Dahaka from combat and immediately requests the engine's normal win check so the original room can award its normal rewards
- current balance baseline is now `StartDistance = 4`, `EscapeThreshold = 8`, `DahakaEscapeCard = +2`; this keeps the chase from collapsing into a near-automatic 2-card escape while the presentation is still being tuned
- the presentation pass now stages Dahaka onto the left lane and the Prince onto the right lane before Sandpit captures its initial positions
- Prince now defaults to facing Dahaka at the start of each escape turn and turns away when retreat cards resolve, but this still needs in-game verification for feel
- Dahaka spawn drama now includes a short entrance lunge, Prince recoil, and a sepia room pulse before the persistent escape overlay settles in
- `Dark Surge` now uses canonical `PowerCmd.Apply<StrengthPower>(...)` instead of constructing a fresh `StrengthPower`, which fixes the duplicate-canonical-model error from the Dahaka buff turn
- Dahaka Sandpit movement now suppresses The Insatiable-specific `insatiable_progress` music parameter updates during the chase, so the base-game FMOD errors stop spamming while keeping the position tween behavior
- escape-card reinjection now removes an existing `Dahaka Escape` from its actual current combat pile only, instead of blindly removing it from draw/discard/exhaust and tripping `Card pile does not contain ...` warnings
- stronger "closing in" / "gaining distance" feedback is still the next presentation gap after this side-swap pass
- reward-flow verification is now important across normal fights and elite rooms, because successful escape should end the room cleanly instead of leaving Dahaka on screen
- rewind is now intended to stay usable during Dahaka, but only within the Dahaka chase window; it should no longer let the Prince time-travel completely out of the encounter once the chase has begun
- active Dahaka rewinds should now clamp specifically to an `IsEscapeActive` snapshot instead of any generic Dahaka-locked snapshot, which prevents `Wind Back` from dropping the fight into a bad "Dahaka still present but escape mode exited" hybrid state
- important chase-checkpoint lesson: the first Dahaka escape turn cannot rely on the ordinary `Hook.AfterPlayerTurnStart` snapshot alone, because STS2 captures that before the relic finishes the Dahaka swap / escape-card injection and before the delayed `Wind Back` grant settles; the live fix is to replace the same-round snapshot again after takeover setup and after chase-card generation so active-chase rewinds always have a real `IsEscapeActive` checkpoint to land on
- important chase-staging lesson: after a chase rewind, Prince and Dahaka have to be hard-reset to the saved left/right lane positions before SandpitPower is rebuilt; otherwise the restored Prince node can keep its future off-screen X offset and the next Sandpit application stacks on top of that drift
- [ ] Execute the next Dahaka iteration in this order
  - Phase 1: use the repo-local GDRE `v2.5.0-beta.3` install to inspect the recovered STS2 combat scenes for boss anchoring, enemy slot/layout conventions, and The Insatiable / Waterfall Giant visual setup
    - complete
  - Phase 2: land one small code pass that fixes spawn positioning, Sandpit ownership/timing, and the first escape-balance nudge
    - complete in code, pending in-game verification
  - Phase 3: build, deploy, and test only those changes before attempting presentation polish
  - Phase 4: if the encounter now feels stable, extend the presentation pass with clearer distance-feedback VFX / camera / audio polish
- [ ] Gather the specific scene/layout answers we want from GDRE before touching code again
  - where big enemies and bosses are actually anchored in the combat room
  - whether the base game relies on slot ids, scene offsets, or both for large-monster placement
  - how The Insatiable's scene and combat positioning differ from a standard enemy
  - whether Waterfall Giant is a better visual-positioning reference for Dahaka than a normal monster
- [ ] Keep the next Dahaka fix pass intentionally narrow
  - do not mix in confrontation-route content, new cards, or wider rewrites
  - prefer one verified movement/positioning pass before trying the left-side Dahaka / right-side Prince presentation idea
- [ ] Decide what happens before instant death:
  - warning threshold
  - status cards
  - screen effects
  - audio/UI pressure
- [ ] Hook the final catch condition into combat loss/run failure

## UI / UX

- [ ] Design a Sand Charge UI
  - first-pass Prince sand medallion HUD is now a separate combat widget under the relics in the top-left HUD
  - normal enemies grant 1 Sand; weak enemies grant half a charge (2 weak kills = 1 Sand), and Sand carries between combats
  - Prince detection for the widget now keys off the live starter relic as well as the Prince model, because placeholder-character runs can fail a strict model-type check
  - current pass uses procedural filled pips over the medallion art, so we do not need separate filled-hole PNGs unless final alignment proves too finicky
  - the six sand pips are now aligned to the medallion holes and use a shared feathered breathing glow
  - sand gain is now patched directly to the creature death path instead of polling the enemy list each frame
  - manual Dagger-of-Time combat activation is still pending the actual rewind/snapshot implementation; card Sand costs are the first live spend path
- [ ] Add configurable Prince audio options in the mod config screen
  - first pass should support category switches for music, sound effects, Prince voice lines, and Dahaka voice lines
  - PoP audio assets now live under `audio/` and are packed into the legacy PCK export
  - initial runtime hooks target character select, Prince combat music, attack-card SFX/voice, and sand-gain feedback
  - room-aware PoP music routing now targets act ambient, rest sites, shops, events, treasure rooms, combat, chase, and Dahaka battle
  - local `v0.98.3` is routed to `.mp3` music assets because the current Godot loader did not reliably load the earlier `.flac` tracks
  - Prince menu music now silences vanilla BGM by muting/unmuting the `BGM` bus; calling `NRunMusicController.StopMusic()` caused native rest-site transition crashes
- [ ] Design a Dahaka doom bar UI
  - current bar has a hover tooltip explaining that enemy kills fill Sand while time travel advances the chase
- [ ] Decide where the rewind interaction lives:
  - starting relic click
  - button near energy
  - special screen/overlay
  - current direction is a retained generated `Wind Back` card that opens a choose-a-card rewind menu instead of clicking the relic UI
- [ ] Create placeholder UI scenes/assets in Godot
- [ ] Hook UI to live combat state

## First Gameplay Slice

- [x] Starting relic placeholder: Dagger of Time
- [x] Patch Prince selection so `Dagger of Time` resolves to a valid relic pool on local `v0.98.3`
- [x] Stabilize the Prince custom combat scene enough that enemy turns no longer hang on missing VFX/orb anchors
- [x] 2+ basic attacks
- [x] 2+ basic skills
- [x] 1 sand/rewind support card
- [x] 1 card that interacts with the Dahaka clock
- [x] First playable fight with placeholder art

## Long-Term Route

- [ ] Define Dahaka confrontation reward structure
- [ ] Design `The Sands' Paradox` as an extra act or special post-Act-3 route
- [ ] Decide how Dark Prince corruption happens inside `The Sands' Paradox`
- [ ] Research whether Golden Compass-style special-path logic can be adapted for the Prince route

## Cards / Localization Workflow

- [x] Create a `Cards` folder
- [x] Add the first custom Prince cards for the starter deck
- [x] Add the `[Pool]` attribute to cards or the Prince base card class so they enter the right pool
- [x] Add placeholder card localization in code while the current `v0.98.3` table-merge workaround remains in place
- [ ] Create localization folder structure:
  - `<ModFolder>/localization/eng/cards.json`
- [ ] Keep card file/class names clean and stable before broader content creation

## Wave 1 Card Roadmap

- [x] Lock the Prince card identity and full-pool roadmap in `context/GDD.md`
- [x] Add the first post-roadmap Wave 1 batch (`Rebound Slash`, `Turn Aside`, `Fate Recut`, `Face the Hunter`, `No Escape`)
  - adds the first turn-history scaffolding for `Movement` / `Main-hand` / `Off-hand` / `Dual` and the first explicit rewind/hunted payoff cards
- [x] Add the first uncommon engine trio (`Slipstream`, `Cross Counter`, `Second Attempt`)
  - Wave 1 real-card count is now `23/32`; each family now has one uncommon identity card in the pool
- [x] Add the first payoff trio (`Cascade of Steel`, `Turn the Blade`, `Stolen Hours`)
  - Wave 1 real-card count is now `26/32`; each family now has a midgame payoff card in the pool
- [ ] Expand the Prince pool toward the Wave 1 target of `32` total real cards
- [ ] Add at least 2 early-take commons for `Dual-Blade Flow`
- [ ] Add at least 2 early-take commons for `Deflect / Counter`
- [ ] Add at least 2 early-take commons for `Time Predator`
- [x] Add 1 uncommon engine or identity card for each family
- [x] Add 1 payoff card for each family that makes the lane feel real by midgame
- [ ] Add bridge cards for `Flow + Counter`, `Flow + Time`, and `Counter + Time`
- [ ] Keep Wave 1 time support honest; no broad carry-state-through-rewind effects yet
- [ ] Judge each new card by both fantasy payoff and play-feel payoff
- [ ] Keep placeholder art acceptable until the Wave 1 mechanics feel right

## Project Hygiene

- [x] Current starter files committed and pushed (`33d8c99`)
- [x] Dahaka boss milestone committed and pushed (`ad43562`)
- [x] Dahaka next-phase handoff doc committed and pushed (`20c2fd6`)
- [ ] Keep a visible credits / inspirations trail for external mods, templates, tools, and study references we materially learn from
  - if we reuse code, assets, or a template directly, credit it explicitly
  - if we study another mod closely enough that it shapes an implementation, note that source in project docs as a reference / inspiration
  - keep version / branch context when referencing outside mods so future us know what build those lessons came from
- [ ] Add a short README once the game loads the mod
- [x] Create an initial GDD draft in `context/GDD.md`
- [ ] Add a small design doc for rules/balance once the first slice works
- [ ] Keep all temporary research and guesses out of source once verified

## Research Links

- ModTemplate and BaseLib Notes: context/ModTemplate and BaseLib Notes.md`r
- STS2 Discord pins notes: `STS2_DISCORD_PINS_NOTES.md`
- Spire Codex notes: `SPIRE_CODEX_NOTES.md`
- Community mod releases notes: `COMMUNITY_MOD_RELEASES_NOTES.md`
- GDRE tools notes: `GDRE_TOOLS_NOTES.md`
- STS2 Mod Loading Notes: `context/STS2 Mod Loading Notes.md`
- Custom relic thread: https://www.reddit.com/r/slaythespire/comments/1rm8g36/i_managed_to_mod_a_custom_relic_to_slay_the_spire/
- Osty rename thread: https://www.reddit.com/r/slaythespire/comments/1ron4fv/created_a_mod_to_change_ostys_name_to_my_cats_geji/
- STS2 Early Access Mod Guide: https://www.reddit.com/r/slaythespire/comments/1rm5gvg/sts2_early_access_mod_guide/
- BaseLib-StS2: https://github.com/Alchyr/BaseLib-StS2
- BaseLib README: https://raw.githubusercontent.com/Alchyr/BaseLib-StS2/master/README.md
- ModTemplate-StS2 wiki: https://github.com/Alchyr/ModTemplate-StS2/wiki
- ModTemplate setup: https://raw.githubusercontent.com/wiki/Alchyr/ModTemplate-StS2/Setup.md
- ModTemplate adding cards: https://raw.githubusercontent.com/wiki/Alchyr/ModTemplate-StS2/Adding-Cards.md
- ModTemplate README: https://github.com/Alchyr/ModTemplate-StS2/blob/master/README.md
- Godot MCP candidate 1: https://github.com/Coding-Solo/godot-mcp
- Godot MCP candidate 2: https://github.com/ee0pdt/Godot-MCP
