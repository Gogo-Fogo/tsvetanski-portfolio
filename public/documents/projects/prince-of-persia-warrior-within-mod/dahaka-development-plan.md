# Dahaka Boss Development Plan

This document is a structured plan for the next phase of Dahaka boss development in the Prince of Persia: Warrior Within mod for Slay the Spire 2. It addresses 4 known issues and improvements, with implementation details for each.

## Architecture Context

- **Mod framework:** C#/Godot 4, Harmony patches, BaseLib for STS2 modding
- **Game engine:** Godot 4.5.1 (C# .NET 9), STS2 v0.99.1
- **Key files:**
  - `DahakaMonsterModel.cs` — Boss creature with 4-move attack cycle
  - `DahakaPresenceState.cs` — Chase meter + ExecutePendingDahakaSwap()
  - `DahakaEscapeState.cs` — Distance tracking + SandpitPower integration
  - `DahakaEscapeCards.cs` — Escape cards (DahakaEscapeCard, OutrunFateCard)
  - `DahakaPresencePatches.cs` — Harmony patches (end-turn, CreateVisuals)
  - `art/combat/dahaka_combat_visuals.tscn` — Dahaka visual scene
  - `art/combat/prince_combat_visuals.tscn` — Prince visual scene
  - `DahakaPresenceWidget.cs` — Chase bar UI
  - `DahakaEscapeWidget.cs` — Distance bar UI

## Current Handoff Snapshot

This plan is meant to follow the already-pushed Dahaka milestone work, not replace it. The
core fight shell is live; the remaining work is mostly about making it feel and look correct.

- **Already landed in `ad43562`:**
  - Dahaka visuals now spawn through a Harmony prefix on `MonsterModel.CreateVisuals()` that
    uses `BaseLib.Utils.GodotUtils.CreatureVisualsFromScene()`
  - `art/combat/dahaka_combat_visuals.tscn` now uses a plain `Node2D` scene root
  - `ExecutePendingDahakaSwap()` explicitly sets `ShowsInfiniteHp = true` and calls
    `ForceInitialMove()` because the mid-combat spawn path does not trigger `AfterAddedToRoom()`
  - Dahaka already has the current 4-move Insatiable-inspired loop, the escape widget, the
    sepia overlay, and Sandpit-based distance bookkeeping
- **Critical engine constraints confirmed during the session:**
  - BaseLib already patches `CharacterModel.CreateVisuals()` for custom player characters,
    but it does **not** patch `MonsterModel.CreateVisuals()` for custom monsters
  - `[GlobalClass]` / custom Godot root types from a mod DLL do **not** reliably register in
    Godot ClassDB at runtime, so a plain scene root plus BaseLib node-transfer fallback is the
    proven working pattern for Dahaka visuals
  - Mid-combat creature injection bypasses normal room setup, so `AfterAddedToRoom()` cannot be
    relied on for Dahaka initialization in the swap path
  - BaseLib was updated from `v0.1.0` to `v0.1.8` during this work, and the mod rebuilt
    successfully against the installed `BaseLib.dll`
- **Still broken in live code right now:**
  - Dahaka still spawns with the fake slot id `"dahaka_slot_0"`, so the boss appears too high
    and too far from the normal enemy/boss position
  - Sandpit visual movement is still unreliable because `ApplySandpitPower(...)` is currently
    fire-and-forget from the swap method, before the creature visuals are guaranteed to be ready
  - Escape balance is still on the first prototype numbers:
    `StartDistance = 5`, `EscapeThreshold = 8`, `DahakaEscapeCard = +2`, `OutrunFate = +1`
  - The left-side Dahaka / right-side Prince presentation and dynamic Prince facing are still
    only design goals; they have not been implemented yet
- **Current testing knobs worth remembering while debugging:**
  - `DahakaPresenceState.MaxChase` is currently `3`
  - `SandResourceState.RegisterEnemyKill()` is still using temporary boosted sand rewards for
    faster Dahaka testing

## How The Insatiable Boss Works (Reference)

The Insatiable is the base game boss that our Dahaka is modeled on. Key mechanics:

- **SandpitPower** (`MegaCrit.Sts2.Core.Models.Powers.SandpitPower`) is applied TO a player creature BY the boss
  - The power tracks distance as its `Amount` value
  - `UpdateCreaturePositions()` calculates X positions for affected creatures:
    - `leftBound = monsterNode.GlobalPosition.X - 450` (padding from monster)
    - `rightBound = initialTargetPosition + 50` (padding from original position)
    - `step = (rightBound - leftBound) / initialAmount`
    - Position interpolated based on current amount vs initial amount
    - Uses Godot **Tween** for smooth animation (0.25s duration)
  - `AfterSideTurnStart(enemy)` → `PowerCmd.Decrement(this)` (auto-decrements each enemy turn)
  - `AfterPowerAmountChanged()` → calls `UpdateCreaturePositions()` (re-tweens on any change)
  - `AfterRemoved()` → tweens creatures back to original positions
- **FranticEscape card** increases SandpitPower amount by 1 via `PowerCmd.ModifyAmount(sandpit, 1, enemy, card, false)`, each play costs +1 more energy
- **The Insatiable's moves:**
  1. LIQUIFY_GROUND — Applies SandpitPower(4) + adds 6 status cards (3 draw, 3 discard)
  2. THRASH_1 — MultiAttack(ThrashDamage, 2)
  3. LUNGING_BITE — SingleAttack(BiteDamage)
  4. SALIVATE — Gains Strength
  5. THRASH_2 — MultiAttack(ThrashDamage, 2)
  - Cycle: 1→2→3→4→5→2→3→4→5→... (loop from THRASH_1)
- **DamageCmd.Attack(damage).FromMonster(model).Execute(null)** — proper attack API

## Current Dahaka Implementation

- **Spawns mid-combat** when chase meter fills (ExecutePendingDahakaSwap at player turn start)
- **SandpitPower(5)** applied at spawn via `DahakaEscapeState.ApplySandpitPower()`
- **4-move cycle:** Shadow Thrash (6×2) → Temporal Lunge (14) → Dark Surge (+2 Str) → Shadow Thrash (6×2) → loop
- **ForceInitialMove()** sets `dahaka_shadow_thrash_1` via reflection (SetMoveImmediate or NextMove backing field)
- **Escape cards:** DahakaEscapeCard (+2 distance, 1 energy), OutrunFateCard (+1 distance + draw, 0 energy)
- **DahakaEscapeState.Distance** synced with SandpitPower: each Dahaka move calls ReduceDistance(1), escape cards call AddDistance AND PowerCmd.ModifyAmount
- **Win:** Distance ≥ 8 → combat victory, chase reset
- **Loss:** Distance ≤ 0 → Dahaka devours Prince

---

## Issue 1: Dahaka Spawn Position

### Problem
The Dahaka spawns too high/far on screen instead of where bosses normally spawn. The creature slot `"dahaka_slot_0"` is not a real game slot — it defaults to an arbitrary position.

### Root Cause (CONFIRMED via decompilation)
In `DahakaPresenceState.ExecutePendingDahakaSwap()`:
```csharp
dahakaCreature = combatState.CreateCreature(mutableDahaka, CombatSide.Enemy, "dahaka_slot_0");
```
The slot ID `"dahaka_slot_0"` is an invented string. When `Creature.SlotName` is non-null, `NCombatRoom.AddCreature` tries to find a child node in `EncounterSlots` matching that name. Since no such node exists, it either throws or falls back to a bad position.

**All single-boss encounters (TheInsatiableBoss, WaterfallGiantBoss, etc.) use `null` for the slot string.** When SlotName is null, `NCombatRoom.AddCreature` skips slot positioning entirely and the game auto-positions via `NCombatRoom.PositionEnemies()`.

### Implementation (1-line fix)
Change the slot parameter from `"dahaka_slot_0"` to `null`:
```csharp
// In DahakaPresenceState.ExecutePendingDahakaSwap():
// BEFORE:
dahakaCreature = combatState.CreateCreature(mutableDahaka, CombatSide.Enemy, "dahaka_slot_0");
// AFTER:
dahakaCreature = combatState.CreateCreature(mutableDahaka, CombatSide.Enemy, null);
```

Also check `DahakaEncounterModel.cs` line 30 which uses `"slot_0"` — change to `null` as well.

4. **Also check the scene** — `dahaka_combat_visuals.tscn` has the sprite at `position = Vector2(0, -220)`. This vertical offset may compound with the auto-positioned slot. Compare with other boss visual scenes to see if -220 is standard or too high.

### Files to Modify
- `DahakaPresenceState.cs` — Change slot ID in `ExecutePendingDahakaSwap()`
- Possibly `art/combat/dahaka_combat_visuals.tscn` — Adjust sprite position if needed

### Validation
- Dahaka should appear at the same screen position as a normal boss (right side, vertically centered in the combat area)
- Compare visually with The Insatiable's position in a normal game encounter

---

## Issue 2: Escape Balance — Distance Closing Too Fast

### Problem
The Dahaka closes in too quickly, making escape feel impossible. SandpitPower auto-decrements by 1 EVERY enemy turn, plus the Dahaka attacks. The player gets only 1 escape card per turn with +2 distance, but the Dahaka closes by 1 per turn, so the net gain is only +1 per turn — requiring 3 turns of perfect play to escape (from Distance 5 to 8).

### Current Values
| Parameter | Value |
|---|---|
| Start Distance | 5 |
| Escape Threshold | 8 |
| SandpitPower auto-decrement | 1/turn |
| DahakaEscapeCard distance | +2 |
| DahakaEscapeCard cost | 1 energy |
| OutrunFateCard distance | +1 |
| OutrunFateCard cost | 0 energy |
| Cards injected per turn | 1 |

### Balance Analysis
- Net gain per turn (if escape card played): +2 (card) - 1 (auto-decrement) = +1
- Turns to escape: (8 - 5) / 1 = 3 turns minimum
- But player also needs energy for blocks/attacks vs Dahaka's attacks (6×2 or 14 damage)
- If player skips escape card one turn: distance goes from 5→4, now needs 4 turns

### Proposed Balance Changes (pick a combination)

**Option A: Increase escape card distance**
- DahakaEscapeCard: +2 → +3 distance
- Net per turn: +3 - 1 = +2, escape in 2 turns (still tight with energy management)

**Option B: Reduce closing frequency**
- SandpitPower decrements every OTHER enemy turn instead of every turn
- This requires a Harmony patch on `SandpitPower.AfterSideTurnStart` to skip every other decrement when Dahaka is active
- Net per turn: +2 - 0.5 = +1.5 average

**Option C: Increase starting distance**
- StartDistance: 5 → 6
- More buffer, same escape threshold
- Player needs only +2 net distance instead of +3

**Option D: Lower escape threshold**
- EscapeThreshold: 8 → 7
- Escape in 2 turns instead of 3 with current values

**Option E (Recommended): Combination**
- DahakaEscapeCard: +2 → +3 distance (in `DahakaEscapeCards.cs`)
- StartDistance: 5 → 6 (in `DahakaEscapeState.cs`)
- SandpitPower amount at spawn matches: 5 → 6 (in `DahakaPresenceState.cs`)
- This gives: 6 start, need to reach 8, net +2/turn = 1 turn if perfect, but Dahaka attacks force defensive plays

### Files to Modify
- `DahakaEscapeCards.cs` — Change `DistanceGain` constant
- `DahakaEscapeState.cs` — Change `StartDistance` constant
- `DahakaPresenceState.cs` — Update SandpitPower amount in `ExecutePendingDahakaSwap()` to match StartDistance

### Validation
- Playtest: player should be able to escape in 2-3 turns with good card play
- Player should feel tension (not guaranteed escape) but not hopelessness
- The Dahaka's attacks should force meaningful choices between escape and defense

---

## Issue 3: Visual Distance Movement Not Showing

### Problem
SandpitPower is applied at spawn for visual creature movement, but the player doesn't visually move when distance changes. The tweening animation may not be firing.

### Root Cause Investigation
The most likely causes:

1. **SandpitPower not actually being applied** — Check logs for "Applied SandpitPower" message from `DahakaEscapeState.ApplySandpitPower()`. If missing, the `PowerCmd.Apply` call may be failing silently.

2. **ApplySandpitPower runs too early** — It's called via fire-and-forget (`_ = DahakaEscapeState.ApplySandpitPower(...)`) in `ExecutePendingDahakaSwap()`. The creature visuals may not be ready yet. The NCreature node needs to exist before SandpitPower can read its GlobalPosition for the tween.

3. **SandpitPower.UpdateCreaturePositions() can't find NCreature nodes** — SandpitPower internally accesses `NCombatRoom.Instance.GetCreatureNode(creature)`. If the creature node hasn't been fully initialized when the power is applied, it gets null and skips the tween.

4. **PowerCmd.ModifyAmount in escape cards** — The escape cards call `PowerCmd.ModifyAmount(sandpit, amount, enemy, card, false)`. Check if the parameters are correct. The Insatiable's FranticEscape uses `PowerCmd.ModifyAmount(sandpitPower, Decimal.One, enemy, this, false)` — note it passes `Decimal.One` (decimal), not `1` (int). The amount parameter type may be `decimal`.

### Implementation Plan

1. **Fix timing of SandpitPower application** — Change from fire-and-forget to properly awaited. In `ExecutePendingDahakaSwap()`, change `_ = DahakaEscapeState.ApplySandpitPower(...)` to a synchronous call or use `.GetAwaiter().GetResult()`. Better: make `ExecutePendingDahakaSwap` async, or defer the SandpitPower application to `DaggerOfTimeRelic.AfterPlayerTurnStart` (which is already async and properly awaited by the game).

   **Recommended approach:** Move SandpitPower application to `DaggerOfTimeRelic.AfterPlayerTurnStart()`:
   ```csharp
   public override async Task AfterPlayerTurnStart(PlayerChoiceContext choiceContext, Player player)
   {
       await base.AfterPlayerTurnStart(choiceContext, player);

       if (DahakaPresenceState.IsDahakaSwapPending)
       {
           DahakaPresenceState.ExecutePendingDahakaSwap();
           // Apply SandpitPower AFTER visuals are created (async-safe timing)
           var dahaka = combatState.Enemies.FirstOrDefault(e => e.Monster is DahakaMonsterModel);
           if (dahaka != null)
               await DahakaEscapeState.ApplySandpitPower(dahaka, DahakaEscapeState.StartDistance);
       }
       // ... escape card injection
   }
   ```

2. **Verify PowerCmd.ModifyAmount parameter types** — The amount parameter in `PowerCmd.ModifyAmount` may need to be `decimal` (e.g., `2m`) not `int` (e.g., `2`). Check the game's `PowerCmd` method signature. In the escape cards, change:
   ```csharp
   // From:
   await PowerCmd.ModifyAmount(sandpit, amount, sandpitEnemy, this, false);
   // To (if decimal needed):
   await PowerCmd.ModifyAmount(sandpit, (decimal)amount, sandpitEnemy, this, false);
   ```

3. **Add logging** — Add detailed logging around SandpitPower application and modification to track what's happening:
   - Log the creature node existence before/after SandpitPower apply
   - Log the SandpitPower amount after modification
   - Log if UpdateCreaturePositions fires

4. **Test with delay** — If timing is the issue, add a small delay before applying SandpitPower:
   ```csharp
   await Cmd.Wait(0.5f); // Let visuals settle
   await DahakaEscapeState.ApplySandpitPower(dahakaCreature, StartDistance);
   ```

### Files to Modify
- `DaggerOfTimeRelic.cs` — Move SandpitPower application to AfterPlayerTurnStart (async-safe)
- `DahakaPresenceState.cs` — Remove fire-and-forget SandpitPower call from ExecutePendingDahakaSwap
- `DahakaEscapeCards.cs` — Verify/fix PowerCmd.ModifyAmount parameter types
- `DahakaEscapeState.cs` — Add logging, verify ApplySandpitPower implementation

### Validation
- When Dahaka spawns, the Prince should visually slide LEFT (toward original position being "far")
- When escape card is played, Prince should visually slide further from Dahaka
- Each enemy turn, Prince should visually slide closer to Dahaka
- Movement should be smooth (0.25s tween, per SandpitPower.UpdateCreaturePositions)

---

## Issue 4: Dahaka on Left, Prince on Right (Side Swap + Facing)

### Problem
Currently, the Prince stays on the left (player side) and the Dahaka spawns on the right (enemy side). For thematic accuracy, when the Dahaka spawns, the Prince should be on the RIGHT side (running away) and the Dahaka should be on the LEFT (chasing). The Prince should face LEFT (toward Dahaka) when blocking/attacking and face RIGHT (away) when using escape cards.

### Analysis
This is a significant visual overhaul. The game's combat layout has players on the left, enemies on the right. Swapping requires:

1. **Creature position swap** — Move the Dahaka's NCreature node to the player side, and the Prince's NCreature node to the enemy side
2. **Sprite flipping** — Flip both sprites horizontally so they face the correct direction
3. **Intent/UI positioning** — The Dahaka's intent icon, HP bar, and other UI elements need to appear correctly at the new position
4. **Dynamic facing** — Prince faces away when playing escape cards, faces toward Dahaka otherwise

### Implementation Plan

**Phase 1: Position Swap**
1. After `RefreshCreatureVisuals()` in `ExecutePendingDahakaSwap()`, get both NCreature nodes:
   ```csharp
   var combatRoom = NCombatRoom.Instance;
   var princeNode = combatRoom?.GetCreatureNode(princeCreature);
   var dahakaNode = combatRoom?.GetCreatureNode(dahakaCreature);
   ```
2. Swap their GlobalPosition.X values (or set specific X coordinates)
3. Flip both sprites via `Scale.X = -1` on the Visuals/Sprite node

**Phase 2: Sprite Facing on Card Play**
1. Add a Harmony postfix on card play (e.g., `CardModel.OnPlay` or the card play pipeline)
2. When a `DahakaEscapeCard` or `OutrunFateCard` is played:
   - Flip Prince sprite to face RIGHT (away from Dahaka) temporarily
   - After a delay (0.5s), flip back to face LEFT (toward Dahaka)
3. When any attack card is played against Dahaka:
   - Ensure Prince faces LEFT (toward Dahaka)

**Phase 3: SandpitPower Direction**
- SandpitPower.UpdateCreaturePositions() moves creatures along the X axis
- With the side swap, the direction of movement needs to be inverted:
  - Increasing SandpitPower should move Prince to the RIGHT (further from left-side Dahaka)
  - Decreasing should move Prince to the LEFT (closer to Dahaka)
- This may require a Harmony patch on `SandpitPower.UpdateCreaturePositions()` to invert the direction when Dahaka escape is active

**Alternative Simpler Approach:**
Instead of swapping creature positions (which fights the game's layout system), consider:
- Keep standard layout (player left, enemy right)
- Just flip the Dahaka sprite in the .tscn scene so it faces left (toward the player) — this is already correct for a standard enemy
- The SandpitPower movement already moves the player TOWARD the enemy (left→right) as distance decreases, and AWAY (right→left) as distance increases
- For the Prince facing: just flip the Prince sprite when escape cards are played

This simpler approach avoids fighting the game's combat positioning system and SandpitPower's hardcoded direction logic.

### Files to Modify
- `DahakaPresenceState.cs` — Add position/sprite manipulation after spawn
- `DahakaPresencePatches.cs` — Add card play postfix for Prince facing
- `art/combat/dahaka_combat_visuals.tscn` — Verify sprite orientation
- `art/combat/prince_combat_visuals.tscn` — May need facing adjustment

### Validation
- Dahaka appears on expected side
- Prince faces Dahaka when attacking/blocking
- Prince turns away when playing escape cards (running animation)
- SandpitPower distance movement goes in the correct direction
- All UI elements (intents, HP bars, power icons) display correctly

---

## Development Order

**Recommended sequence:**
1. **Issue 1 (position)** — Quick fix, most impactful for visual quality
2. **Issue 3 (distance movement)** — Critical for the core escape mechanic feel
3. **Issue 2 (balance)** — Tuning numbers, easy to iterate
4. **Issue 4 (side swap + facing)** — Most complex, do last

## Testing Checklist

- [ ] Dahaka spawns at correct screen position (same as normal bosses)
- [ ] "Dahaka" name displays (not raw key)
- [ ] Infinite HP (∞) symbol shows
- [ ] Dahaka attacks with intent display (6×2, 14, buff icon)
- [ ] Game does NOT freeze after Dahaka's turn
- [ ] SandpitPower applied — Prince visually moves away from Dahaka
- [ ] Escape card increases distance AND visually moves Prince
- [ ] Each enemy turn, Prince visually moves closer to Dahaka
- [ ] Escape at Distance 8 triggers victory
- [ ] Distance 0 triggers loss
- [ ] Wind Back rewind restores pre-Dahaka state correctly
- [ ] Chase bar shows correct values
- [ ] Distance bar shows correct values
- [ ] Sepia overlay active during escape
- [ ] Balance feels fair — escapable in 2-3 turns with good play

---

## Appendix A: Decompiled Game API Reference

These are the exact API signatures and behaviors decompiled from `sts2.dll` via reflection and IL analysis. Codex cannot access the game DLL directly — this appendix provides everything needed.

### MonsterModel (base class for DahakaMonsterModel)

```
Namespace: MegaCrit.Sts2.Core.Models
Base: AbstractModel

Key Properties:
  Creature Creature { get; }                    — The Creature entity this model belongs to
  MonsterMoveStateMachine MoveStateMachine { get; }  — State machine managing moves
  MoveState NextMove { get; }                   — Currently queued move
  string VisualsPath { get; }                   — virtual, path to .tscn scene

Key Methods:
  Task PerformMove()                            — Executes NextMove.PerformMove(targets)
  void SetMoveImmediate(MoveState state, bool forceTransition)
    — Sets NextMove directly, calls MoveStateMachine.ForceCurrentState(state)
    — Also refreshes intents on the NCreature visual node
    — If !NextMove.CanTransitionAway && !forceTransition → no-op
  void RollMove(IEnumerable<Creature> targets)  — Rolls next move via state machine
  MonsterModel ToMutable()                      — Creates a mutable clone for spawning
  virtual Task AfterAddedToRoom()               — Called by game during normal room setup
  NCreatureVisuals CreateVisuals()              — Loads VisualsPath scene, instantiates as NCreatureVisuals
  abstract MonsterMoveStateMachine GenerateMoveStateMachine()
```

### MoveState (used for Dahaka moves)

```
Namespace: MegaCrit.Sts2.Core.MonsterMoves.MonsterMoveStateMachine
Base: MonsterState

Constructor:
  MoveState(string stateId, Func<IReadOnlyList<Creature>, Task> onPerform, AbstractIntent[] intents)

Properties:
  string Id { get; }                           — State identifier string (e.g., "dahaka_shadow_thrash_1")
  MonsterState FollowUpState { get; set; }     — Next state to transition to (set this for chaining)
  string FollowUpStateId { get; set; }         — Alternative: set follow-up by string ID
  IReadOnlyList<AbstractIntent> Intents        — Intent icons displayed above monster
  bool CanTransitionAway { get; }              — True if move has been performed at least once

Methods:
  virtual string GetNextState(Creature owner, Rng rng)
    — Default: returns FollowUpState?.Id ?? FollowUpStateId
    — Override for conditional transitions
  Task PerformMove(IEnumerable<Creature> targets)  — Invokes the onPerform delegate
  void RegisterStates(Dictionary<string, MonsterState> states)
    — Must add self to states dict: states[Id] = this
```

### MonsterMoveStateMachine

```
Constructor:
  MonsterMoveStateMachine(IEnumerable<MonsterState> states, MonsterState initialState)

Properties:
  Dictionary<string, MonsterState> States { get; }  — All registered states
  List<MonsterState> StateLog { get; }               — History of visited states

Methods:
  void ForceCurrentState(MonsterState state)         — Used by SetMoveImmediate
  MoveState RollMove(IEnumerable<Creature> targets, Creature owner, Rng rng)
```

### Intent Classes

```
Namespace: MegaCrit.Sts2.Core.MonsterMoves.Intents

All extend AbstractIntent:
  EscapeIntent()                               — Escape icon, no parameters
  BuffIntent()                                 — Buff icon, no parameters
  SingleAttackIntent(int damage)               — Shows single attack with damage number
  MultiAttackIntent(int damage, int hitCount)  — Shows multi-attack with damage × count
  StatusIntent(int count)                      — Shows status card count
  DebuffIntent()                               — Debuff icon
  HiddenIntent()                               — Hidden/unknown
  SummonIntent()                               — Summon icon
```

### DamageCmd (Attack API)

```
Namespace: MegaCrit.Sts2.Core.Commands

Usage (from The Insatiable's decompiled IL):
  await DamageCmd.Attack(int damage)
      .FromMonster(MonsterModel model)
      .WithAttackerAnim(string trigger, float delay, string? sfx)  // optional
      .OnlyPlayAnimOnce()                                          // optional
      .WithHitFx(string vfxPath, string? sfxPath, string? sfx2)    // optional
      .WithAttackerFx(string? vfx, string sfxEvent, string? sfx2)  // optional
      .Execute(IEnumerable<Creature>? targets);
      // targets=null means "all valid targets" (player creatures)

Minimum viable call:
  await DamageCmd.Attack(damage).FromMonster(this).Execute(null);

Return type of Execute: Task
```

### PowerCmd (Buff/Debuff API)

```
Namespace: MegaCrit.Sts2.Core.Commands

Apply a power:
  await PowerCmd.Apply(
      PowerModel power,        // e.g., new SandpitPower(), new StrengthPower()
      Creature target,         // creature to apply power to
      decimal amount,          // NOTE: decimal, not int! Use 5m, 2m, etc.
      Creature source,         // creature applying the power
      CardModel? card,         // card that caused this (null if from monster)
      bool silent              // false = show VFX, true = silent
  );

Modify power amount:
  await PowerCmd.ModifyAmount(
      PowerModel power,        // existing power instance on creature
      decimal amount,          // amount to add (use Decimal.One for +1, or (decimal)2 for +2)
      Creature source,         // source creature
      object? sourceCard,      // CardModel or similar, can be null
      bool silent              // false = show VFX
  );

Decrement power by 1:
  await PowerCmd.Decrement(PowerModel power);

CRITICAL: amount parameter is decimal, NOT int.
  PowerCmd.Apply(new SandpitPower(), target, 5m, source, null, false);  // ← 5m (decimal)
  PowerCmd.ModifyAmount(sandpit, 2m, enemy, this, false);               // ← 2m (decimal)
```

### SandpitPower (The Distance Mechanic)

```
Namespace: MegaCrit.Sts2.Core.Models.Powers
Base: PowerModel

Fields:
  int _initialAmount                           — Set when first applied (original distance)
  float _initialTargetPosition                 — Starting X position of target creature node
  static float _paddingDistanceFromMonster = 450f   — Pixel gap from monster
  static float _paddingDistanceFromOriginal = 50f   — Pixel gap from original position
  static float _tweenTime = 0.25f             — Tween animation duration

Properties:
  bool IsInstanced { get; } = true            — Each application creates separate instance
  IReadOnlyList<Creature> AllAffectedCreatures { get; }

Key Methods:
  AfterSideTurnStart(CombatSide side)
    — If side == enemy: PowerCmd.Decrement(this) → reduces amount by 1
    — This is the auto-approach mechanic

  UpdateCreaturePositions()
    — Gets NCreature nodes for owner (monster) and target (player) via NCombatRoom
    — Calculates position:
        leftBound = ownerNode.GlobalPosition.X - 450
        rightBound = _initialTargetPosition + 50
        step = (rightBound - leftBound) / _initialAmount
        clampedAmount = Math.Min(currentAmount, _initialAmount)
        extraAmount = Math.Max(currentAmount - _initialAmount, 0)
        targetX = leftBound + step * clampedAmount + step * extraAmount * (extraAmount / (extraAmount + 2))
    — Creates Godot Tween on NCreature node, tweens GlobalPosition.X over 0.25s
    — Also handles Osty (pet) offset

  AfterPowerAmountChanged(PowerModel power, ...)
    — If the changed power IS this sandpit: calls UpdateCreaturePositions()

  AfterRemoved(Creature oldOwner)
    — Tweens all affected creatures back to original positions
    — Iterates AllAffectedCreatures, creates Tween for each

  AfterCreatureAddedToCombat(Creature)  → UpdateCreaturePositions()
  BeforeTurnEnd(context, CombatSide)    → UpdateCreaturePositions()
```

### CombatState (Creature Management)

```
Namespace: MegaCrit.Sts2.Core.Combat

Key Methods:
  Creature CreateCreature(MonsterModel model, CombatSide side, string? slot)
    — Creates creature entity. slot=null for auto-positioning.
  void AddCreature(Creature creature)
    — Adds to combat state roster
  void RemoveCreature(Creature creature, bool unattach)
    — Removes from roster
  void CreatureEscaped(Creature creature)
    — Adds to EscapedCreatures list, then calls RemoveCreature(creature, true)
    — Use for "monster fled" scenario
  CardModel? CreateCard(CardModel template, Player player)
    — Creates a card instance for combat

Properties:
  IReadOnlyList<Creature> Enemies { get; }
  IReadOnlyList<Player> Players { get; }
  IReadOnlyList<Creature> Creatures { get; }  — All creatures (players + enemies)
```

### NCombatRoom (Visual Management)

```
Namespace: MegaCrit.Sts2.Core.Nodes.Combat

Key for slot positioning:
  AddCreature(Creature creature) method:
    — If creature.SlotName != null:
        — Gets EncounterSlots control
        — Finds child node by SlotName as NodePath
        — Positions NCreature at that node's GlobalPosition
        — THROWS if EncounterSlots is null
    — If creature.SlotName == null:
        — Skips slot positioning entirely
        — PositionEnemies() handles auto-layout later

Static:
  NCombatRoom? Instance { get; }
  NCreature? GetCreatureNode(Creature creature)

Properties:
  IReadOnlyList<NCreature> CreatureNodes { get; }
  IReadOnlyList<NCreature> RemovingCreatureNodes { get; }
```

### BaseLib GodotUtils (Creature Visual Creation)

```
Namespace: BaseLib.Utils

// How mod creature visuals bypass Godot ClassDB registration:
static NCreatureVisuals CreatureVisualsFromScene(string scenePath)
  — Creates new empty NCreatureVisuals()
  — Loads the scene from scenePath via PreloadManager.Cache.GetScene(path).Instantiate()
  — Transfers child nodes from scene instance into the NCreatureVisuals wrapper:
      Required children: "Visuals", "Bounds", "IntentPos", "CenterPos", "OrbPos", "TalkPos"
  — Sets UniqueNameInOwner=true on each transferred child
  — QueueFree()s the original scene node
  — Returns the populated NCreatureVisuals

// The Harmony patch pattern (in DahakaPresencePatches.cs):
[HarmonyPatch(typeof(MonsterModel), "CreateVisuals")]
static bool Prefix(MonsterModel __instance, ref NCreatureVisuals? __result)
{
    if (__instance is not DahakaMonsterModel) return true;
    __result = GodotUtils.CreatureVisualsFromScene(scenePath);
    return false; // skip original
}
```

### TheInsatiable (Reference Boss Implementation)

```
Namespace: MegaCrit.Sts2.Core.Models.Monsters

Fields (from reflection):
  _liquifyStatusDrawCount = 3
  _liquifyStatusDiscardCount = 3
  _thrashRepeat = 2
  Animation triggers: "Bite", "Salivate", "Thrash", "LiquifySand", "EatPlayerTrigger"

Move cycle (deterministic, no RNG):
  LIQUIFY_GROUND_MOVE → THRASH_MOVE_1 → LUNGING_BITE_MOVE → SALIVATE_MOVE → THRASH_MOVE_2 → THRASH_MOVE_1 (loops)
  All chained via FollowUpState property.

LIQUIFY_GROUND implementation (from IL):
  1. Play SFX + trigger "LiquifySand" animation
  2. Wait 0.5s
  3. Play "vfx_scream" VFX, wait 0.75s
  4. For each player creature: PowerCmd.Apply(new SandpitPower(), creature, 4m, insatiableCreature, null, false)
  5. Create 6 status cards: 3 to DrawPile (PileType=1), 3 to DiscardPile (PileType=3)
  6. HasLiquified = true

BITE implementation:
  await DamageCmd.Attack(BiteDamage).FromMonster(this)
      .WithAttackerAnim("Bite", 0.25f, null)
      .OnlyPlayAnimOnce()
      .WithHitFx("vfx/vfx_bite", null, null)
      .Execute(null);

SALIVATE implementation:
  await PowerCmd.Apply(new StrengthPower(), Creature, SalivateStrength, Creature, null, false);

FranticEscape card OnPlay (from IL):
  1. GetSandpitEnemy() — finds enemy with SandpitPower affecting player
  2. Gets SandpitPower instance from enemy's powers
  3. PowerCmd.ModifyAmount(sandpitPower, Decimal.One, enemy, this, false)  // +1 distance
  4. EnergyCost.AddThisCombat(1, false)  // +1 cost for next play

NOTE: FranticEscape finds the sandpit power on the ENEMY, not the player.
Actually, SandpitPower is applied TO the player BY the enemy, but FranticEscape
modifies it via the enemy creature as the source parameter.
```

### Creature Slot Positioning Rules (from decompiled NCombatRoom)

```
Single-boss encounters (TheInsatiable, WaterfallGiant, etc.):
  — Use null for slot string
  — NCombatRoom.PositionEnemies() handles auto-layout
  — Position is center-right of combat area

Multi-enemy encounters with named slots:
  — TheKinBoss: "slot1", "slot2", "leaderSlot"
  — DoormakerBoss: "doormaker", "door"
  — KaiserCrabBoss: "crusher", "rocket"
  — Slots map to child nodes in EncounterSlots control in the room scene

For Dahaka (single boss, mid-combat spawn):
  — Use null: combatState.CreateCreature(mutableDahaka, CombatSide.Enemy, null)
  — PositionEnemies will place it at the standard boss position
```

---

## Appendix B: Known Working Patterns

### How the Prince visual scene works despite ClassDB issues
The Prince scene (`prince_combat_visuals.tscn`) uses `type="PrinceCombatVisuals"` which fails in ClassDB, but BaseLib's Harmony patch on `CharacterModel.CreateVisuals()` intercepts it and uses `GodotUtils.CreatureVisualsFromScene()` to transfer nodes into a real `NCreatureVisuals`. The Dahaka uses the same pattern but patches `MonsterModel.CreateVisuals()` instead.

### How to apply SandpitPower correctly
The Insatiable applies it in its first MOVE (LIQUIFY_GROUND), not at spawn. This matters because by the time the move fires, the creature's NCreature node is fully initialized with a GlobalPosition. The Dahaka currently applies it at spawn time via fire-and-forget, which may be too early.

**Recommended fix:** Move SandpitPower application to `DaggerOfTimeRelic.AfterPlayerTurnStart()` (async context) with a small delay:
```csharp
await Cmd.Wait(0.3f); // Let creature node settle
await DahakaEscapeState.ApplySandpitPower(dahakaCreature, StartDistance);
```

### How FranticEscape finds SandpitPower
FranticEscape calls `CombatState.Enemies.FirstOrDefault(c => ...)` to find an enemy, then accesses that enemy's power list. But SandpitPower is actually on the PLAYER creature's power list (applied TO player BY enemy). The `source` parameter in `PowerCmd.ModifyAmount` is the enemy creature.

Our escape cards should do:
```csharp
// Find SandpitPower on the PLAYER creature (not the enemy)
var sandpit = playerCreature.Powers.OfType<SandpitPower>().FirstOrDefault();
// Modify it with the enemy (Dahaka) as the source
await PowerCmd.ModifyAmount(sandpit, 2m, dahakaCreature, this, false);
```
