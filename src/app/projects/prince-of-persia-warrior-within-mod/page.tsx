import Breadcrumbs from '@/components/breadcrumbs';
import DocViewer from '@/components/doc-viewer';
import type { DocPage } from '@/components/doc-viewer';
import LightboxImage from '@/components/lightbox-image';
import LightboxLocalVideo from '@/components/lightbox-local-video';
import ProjectAtAGlance from '@/components/project-at-a-glance';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Prince of Persia: Warrior Within Mod',
  description:
    'Solo Slay the Spire 2 character mod in Godot/C# with Medallion of Time rewinds, Sand economy, Dahaka escape pressure, custom audio, and runtime presentation systems.',
};

const imageBase = '/images/projects/prince-of-persia-warrior-within-mod';

const snapshotItems = [
  {
    label: 'Role',
    value: 'Solo designer and gameplay engineer; also handled integration, assets, audio, and presentation',
  },
  {
    label: 'Current Stack',
    value: 'STS2 v0.103.2, BaseLib v3.1.0, Godot 4.5.1, C#/.NET 9, Harmony patches',
  },
  {
    label: 'Technical Challenge',
    value: 'Restore a complete combat checkpoint while keeping health, cards, enemies, and custom resources consistent',
  },
  {
    label: 'Playable Build',
    value: 'Custom character, Sand resource, combat rewind, Dahaka pursuit, cards, audio, UI, and contextual videos',
  },
];

const currentGameplayVideo = {
  src: '/videos/projects/prince-of-persia-warrior-within-mod/prince-current-gameplay-2026-05-05.mp4',
  poster: `${imageBase}/prince-current-gameplay-20260505-poster.png`,
  title: 'May 5, 2026 current Prince mod gameplay capture',
  popupCaption:
    'Current May 5, 2026 gameplay capture supplied from the active mod build. It is the page evidence for Sand HUD, Wind Back rewind play, Dahaka pressure, and the newer puppet/presentation work.',
};

const currentBuildItems = [
  'Selectable Prince character with custom starter deck, Medallion of Time starter relic, reward/shop card hooks, rest/shop/combat visuals, and 25 Prince-facing Neow lines.',
  'Sand resource loop with carryover, enemy-kill gain, Medallion HUD sockets, hover tips, Sand spend validation, and generated Wind Back access.',
  'Snapshot rewind that restores card piles, powers, relic runtime fields, generated combat cards, enemy rosters, monster move state, and live combat UI.',
  'Persistent Dahaka chase that can turn a normal fight into a dedicated escape encounter with distance tracking, escape cards, widgets, and staged presentation.',
  'Room-aware Warrior Within audio across combat, chase, menu, rest, shop, events, treasure, Prince voice, Dahaka voice, sword impacts, rewind SFX, and Sand feedback.',
  'Art/presentation pipeline covering card portrait bakes, relic/UI bakes, Prince and Dahaka puppet rigs, loading overlays, and contextual game-over videos.',
];

const signatureSystemItems = [
  {
    title: 'Combat Snapshots',
    body: 'Rewind stores turn-start and combat-start checkpoints instead of only undoing HP. The restored timeline has to land on a coherent combat model.',
  },
  {
    title: 'Pile Repair',
    body: 'Cards move back into hand, draw, discard, and exhaust while generated utility cards are recreated through valid combat-card registration paths.',
  },
  {
    title: 'Power And Relic State',
    body: 'Mutable runtime fields matter. Powers, relic counters, temporary flags, and owner bindings have to be cloned or restored carefully.',
  },
  {
    title: 'Enemy Roster Repair',
    body: 'Summons, splits, deaths, missing enemies, and monster move machines can all drift away from the snapshot unless they are reconciled.',
  },
  {
    title: 'Hand UI Repair',
    body: 'The live STS2 hand can keep stale card holders and drag state after rewind, so the mod rebuilds holders and bindings without leaving floating cards.',
  },
  {
    title: 'Replay Divergence',
    body: 'STS2 replay/state-divergence hooks can keep recording the wrong future, so rewind has to clean up engine-side action and visual residue.',
  },
];

const dahakaLoopItems = [
  {
    step: '01',
    title: 'Earn Sand',
    body: 'Enemy kills and Sand-focused cards build charges that carry through the Medallion rather than resetting every room.',
  },
  {
    step: '02',
    title: 'Spend Time',
    body: 'Wind Back turns Sand into a 1/2/3-turn rewind choice. The stronger the rewind, the louder the cost.',
  },
  {
    step: '03',
    title: 'Advance Chase',
    body: 'Rewind pressure feeds the persistent Dahaka meter, so survival creates a second strategic threat.',
  },
  {
    step: '04',
    title: 'Escape Takeover',
    body: 'When the meter fills, Dahaka can replace the normal fight flow with a distance-based escape encounter.',
  },
  {
    step: '05',
    title: 'Escape Or Fall',
    body: 'Escape cards push distance up; Dahaka pressure pulls it down. Rewind is clamped inside the chase once the encounter begins.',
  },
];

const cardFamilyItems = [
  {
    family: 'Dual-Blade Flow',
    status: 'Authored/pre-release family evidence',
    body: 'Movement and blade sequencing are meant to make the Prince feel fast and dangerous, not like a planted blocker.',
    cards: [
      {
        src: `${imageBase}/hook-kick.png`,
        alt: 'Hook Kick card art from the Prince of Persia Warrior Within Slay the Spire 2 mod',
        title: 'Hook Kick',
        caption: 'Movement payoff that turns positioning into weak application and extra block.',
      },
    ],
  },
  {
    family: 'Deflect / Counter',
    status: 'Authored/pre-release family evidence',
    body: 'Defense should read as slipping, catching, and punishing commitment rather than walling off the turn.',
    cards: [
      {
        src: `${imageBase}/blade-catch.png`,
        alt: 'Blade Catch card art from the Prince of Persia Warrior Within Slay the Spire 2 mod',
        title: 'Blade Catch',
        caption: 'Reactive defense that rewards attacking first instead of hiding behind passive block.',
      },
      {
        src: `${imageBase}/dead-angle.png`,
        alt: 'Dead Angle card art from the Prince of Persia Warrior Within Slay the Spire 2 mod',
        title: 'Dead Angle',
        caption: 'Rare payoff for exploiting Weak or Vulnerable windows after the enemy overcommits.',
      },
    ],
  },
  {
    family: 'Time Predator',
    status: 'Authored/pre-release family evidence',
    body: 'The time lane makes rewind proactive: Sand generation, second-pass advantages, and pressure that grows more dangerous with use.',
    cards: [
      {
        src: `${imageBase}/borrowed-breath.png`,
        alt: 'Borrowed Breath card art from the Prince of Persia Warrior Within Slay the Spire 2 mod',
        title: 'Borrowed Breath',
        caption: 'Sand economy and post-rewind draw, keeping time manipulation tied to a resource loop.',
      },
      {
        src: `${imageBase}/wind-of-fate.png`,
        alt: 'Wind of Fate card art from the Prince of Persia Warrior Within Slay the Spire 2 mod',
        title: 'Wind of Fate',
        caption: 'All-enemy pressure that feeds Sand while keeping the table under threat.',
      },
    ],
  },
];

const pipelineItems = [
  'ComfyUI is used honestly as a concept/lookdev and image-generation aid, not as the portfolio claim by itself.',
  'Production work is the integration pipeline: selecting usable assets, cutting sprites, cleaning mattes, baking card/relic/UI images, and wiring them into STS2/Godot surfaces.',
  'Prince combat proof now shows the actual full combat sprite plus the v15_fullcanvas layer cuts used for runtime puppet work.',
  'Dahaka proof now uses the current mod-folder sprite and puppet contact sheet, with Silhouette Mask ML / Matte Assist shown as matte-cleanup evidence.',
  'Sand medallion UI, loading videos, game-over overlays, music, voice, and SFX are tied back to live gameplay state instead of sitting as static mockups.',
];

const evidencePages: DocPage[] = [
  {
    src: `${imageBase}/pop-doc-20260505-01.png`,
    alt: 'Prince of Persia Warrior Within mod current project snapshot evidence page',
    width: 1224,
    height: 1584,
    caption: 'Updated project snapshot synced to STS2 v0.103.2, BaseLib v3.1.0, Medallion naming, and the current portfolio framing.',
  },
  {
    src: `${imageBase}/pop-doc-20260505-02.png`,
    alt: 'Prince of Persia Warrior Within mod rewind and Dahaka systems evidence page',
    width: 1224,
    height: 1584,
    caption: 'Updated systems evidence covering rewind repair, Sand economy, and the Dahaka pressure loop.',
  },
  {
    src: `${imageBase}/pop-doc-20260505-03.png`,
    alt: 'Prince of Persia Warrior Within mod art pipeline and presentation evidence page',
    width: 1224,
    height: 1584,
    caption: 'Updated engineering and presentation evidence for the current puppet, UI, audio, and video-overlay pipeline.',
  },
];

const reviewerDocuments = [
  {
    title: 'Build Snapshot',
    description: 'What the playable slice contains, what is current, and what is still pre-release.',
    pages: [evidencePages[0]],
    outline: [{ heading: 'Build Snapshot', pageIndex: 0 }],
  },
  {
    title: 'Rewind And Dahaka Systems',
    description: 'Combat rewind repair, Sand cost, chase pressure, and the escape takeover loop.',
    pages: [evidencePages[1]],
    outline: [{ heading: 'Systems', pageIndex: 0 }],
  },
  {
    title: 'Art And UI Pipeline',
    description: 'Sprite cuts, matte cleanup, ComfyUI disclosure, UI bakes, audio, and video presentation.',
    pages: [evidencePages[2]],
    outline: [{ heading: 'Pipeline', pageIndex: 0 }],
  },
];

export default function PrinceOfPersiaWarriorWithinModCaseStudy() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[var(--background)] px-5 py-8 font-sans text-[var(--foreground)] sm:p-8 md:p-24">
      <div className="mx-auto max-w-5xl">
        <header className="mb-16">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Projects', href: '/projects' },
              { label: 'Prince' },
            ]}
            className="mb-4"
          />
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">
            Solo Project / Slay the Spire 2 Character Mod
          </p>
          <h1 className="mt-4 max-w-full text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Prince of Persia: Warrior Within Mod
          </h1>
          <p className="mt-4 max-w-4xl text-lg leading-relaxed text-[var(--foreground)]">
            A playable character mod that turns time travel into a risky deckbuilder resource: earn Sand, use the Medallion of Time to rewind bad
            futures, and accept that every stolen second brings the Dahaka closer.
          </p>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-[var(--muted)]">
            I built the character, combat systems, pursuit encounter, audio layer, and presentation pipeline inside Slay the Spire 2&apos;s
            early-access mod environment.
          </p>
        </header>

        <section className="flex flex-col gap-10 md:gap-12">
          <ProjectAtAGlance items={snapshotItems} />

          <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)]">
            <LightboxImage
              src={`${imageBase}/prince-character-select-current-20260505.png`}
              alt="Current Prince character select screen from the Warrior Within Slay the Spire 2 mod"
              width={2405}
              height={1357}
              className="h-auto w-full object-cover"
              popupCaption="Current May 5, 2026 character-select screenshot from the active mod build, showing the Prince, Medallion of Time starter relic copy, Sand-gold fantasy framing, and STS2 character-select integration."
              roundedClassName="rounded-none"
              priority
            />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-start">
            <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
              <LightboxLocalVideo
                src={currentGameplayVideo.src}
                poster={currentGameplayVideo.poster}
                title={currentGameplayVideo.title}
                popupCaption={currentGameplayVideo.popupCaption}
                popupCtaHref={currentGameplayVideo.src}
                popupCtaLabel="Open MP4 Directly"
                className="aspect-[43/18] w-full object-cover"
                roundedClassName="rounded-none"
              />
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow)]">
              <p className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Current Gameplay Capture</p>
              <h2 className="mt-3 text-xl font-semibold tracking-tight">Watch the current systems in motion.</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                This May 5 capture is the current gameplay reference for Sand, Wind Back, Dahaka pressure, and the Prince combat presentation.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                <li>- Current STS2 v0.103.2 / BaseLib v3.1.0 build.</li>
                <li>- Poster frame captured from the gameplay video, not character-select art.</li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Project In Short</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
                <p className="text-sm font-semibold text-[var(--foreground)]">Playable character</p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">A selectable Prince with a custom deck, starter relic, rewards, dialogue, visuals, and audio.</p>
              </div>
              <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
                <p className="text-sm font-semibold text-[var(--foreground)]">Core system</p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">Sand powers a rewind that restores combat state instead of only undoing lost health.</p>
              </div>
              <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
                <p className="text-sm font-semibold text-[var(--foreground)]">Risk and pressure</p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">Repeated time travel advances a Dahaka pursuit and can trigger a dedicated escape encounter.</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-3 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Signature System</h2>
            <p className="mb-6 max-w-3xl text-sm leading-relaxed text-[var(--muted)]">
              Rewind is the centerpiece because it touches almost every fragile part of combat. A partial undo would be easier, but it would not survive
              real STS2 fights with generated cards, powers, relic counters, changing enemy rosters, and a live hand UI.
            </p>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              {signatureSystemItems.map((item) => (
                <article key={item.title} className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
                  <p className="text-sm font-semibold text-[var(--foreground)]">{item.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-3 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Dahaka Pressure Loop</h2>
            <p className="mb-6 max-w-3xl text-sm leading-relaxed text-[var(--muted)]">
              The Dahaka makes time travel emotionally expensive. Rewind helps the Prince survive the present fight, but it also pushes a persistent
              pursuit state toward a dedicated escape encounter.
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
              {dahakaLoopItems.map((item) => (
                <article key={item.step} className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">{item.step}</p>
                  <p className="mt-2 text-sm font-semibold text-[var(--foreground)]">{item.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
                </article>
              ))}
            </div>
          </div>

          <details className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)]">
            <summary className="cursor-pointer list-none p-6 marker:content-none md:p-8">
              <div className="flex items-center justify-between gap-6">
                <div>
                  <p className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Closer look</p>
                  <h2 className="mt-3 text-xl font-semibold tracking-tight">Cards, art pipeline, and reviewer documents</h2>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--muted)]">
                    Open the full build scope, card-family evidence, production assets, adaptation choices, and supporting notes.
                  </p>
                </div>
                <span className="shrink-0 rounded-full border border-[var(--accent-cyan)] bg-[var(--accent-cyan)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--background)] shadow-[0_0_18px_rgba(34,211,238,0.22)] transition-colors group-hover:bg-[var(--foreground)]">
                  <span className="group-open:hidden">Open +</span>
                  <span className="hidden group-open:inline">Close -</span>
                </span>
              </div>
            </summary>

            <div className="space-y-12 border-t border-[var(--border)] p-6 md:p-8">
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6">
                <h2 className="mb-5 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Current Build Scope</h2>
                <ul className="space-y-3 text-sm leading-relaxed text-[var(--muted)]">
                  {currentBuildItems.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </div>

              <div>
            <h2 className="mb-3 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Card Family Evidence</h2>
            <p className="mb-5 max-w-3xl text-sm leading-relaxed text-[var(--muted)]">
              The gallery shows design-family evidence from the local project. Some cards are in the registered playable runtime pool, while newer cards
              are authored/pre-release assets and code direction. I am separating those claims so the page does not overstate public runtime coverage.
            </p>
            <div className="grid grid-cols-1 items-start gap-6 xl:grid-cols-3">
              {cardFamilyItems.map((family) => (
                <article key={family.family} className="h-fit rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow)]">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">{family.status}</p>
                  <h3 className="mt-2 text-lg font-semibold tracking-tight">{family.family}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{family.body}</p>
                  <div className="mt-5 grid grid-cols-1 gap-4">
                    {family.cards.map((card) => (
                      <div key={card.src} className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--background)]">
                        <LightboxImage
                          src={card.src}
                          alt={card.alt}
                          width={1000}
                          height={760}
                          className="h-44 w-full object-cover"
                          popupCaption={card.caption}
                          roundedClassName="rounded-none"
                        />
                        <div className="p-4">
                          <p className="text-sm font-semibold text-[var(--foreground)]">{card.title}</p>
                          <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{card.caption}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
              </div>

              <div className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-8">
            <h2 className="mb-3 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Art And Presentation Pipeline</h2>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <p className="max-w-3xl text-sm leading-relaxed text-[var(--muted)]">
                The art direction is still beta and uses ComfyUI-assisted concept output in places, so the honest portfolio value is the production
                pass around it: asset selection, sprite cleanup, matte work, layer cuts, UI bakes, and runtime integration.
              </p>
              <ul className="space-y-3 text-sm text-[var(--muted)]">
                {pipelineItems.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
            <div className="mt-6 grid grid-cols-1 items-start gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[linear-gradient(180deg,rgba(34,22,14,0.92),rgba(9,12,18,0.98))] p-4">
                <LightboxImage
                  src={`${imageBase}/prince-actual-combat-sprite.png`}
                  alt="Actual Prince combat sprite from the Warrior Within mod folder"
                  width={1313}
                  height={1563}
                  className="mx-auto h-64 w-auto object-contain"
                  popupCaption="Actual Prince combat sprite copied from the live Godot mod folder at art/combat/prince_puppet_parts/full_character.png. This replaces the softer verification render in the portfolio evidence."
                  roundedClassName="rounded-none"
                />
              </div>
              <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--background)]">
                <LightboxImage
                  src={`${imageBase}/prince-puppet-v15-layer-contact-sheet.png`}
                  alt="Prince puppet v15 layer contact sheet from the live Godot mod folder"
                  width={1500}
                  height={1100}
                  className="h-64 w-full object-contain"
                  popupCaption="Fresh contact sheet generated from art/combat/prince_puppet_parts_v15_fullcanvas in the live Godot mod folder. It documents the current base body, hair, weapon arms, and sash layers."
                  roundedClassName="rounded-none"
                />
              </div>
              <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[linear-gradient(180deg,rgba(13,16,22,0.96),rgba(2,4,8,0.98))] p-4">
                <LightboxImage
                  src={`${imageBase}/dahaka-current-sprite.png`}
                  alt="Current Dahaka sprite from the Warrior Within mod folder"
                  width={1093}
                  height={1223}
                  className="mx-auto h-64 w-auto object-contain"
                  popupCaption="Current Dahaka sprite copied from the live Godot mod folder at art/dahaka_character.png. This is the sprite used for the chase/escape presentation evidence."
                  roundedClassName="rounded-none"
                />
              </div>
              <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--background)]">
                <LightboxImage
                  src={`${imageBase}/dahaka-puppet-contact-sheet-current.png`}
                  alt="Current Dahaka puppet contact sheet from the Warrior Within mod folder"
                  width={1140}
                  height={1028}
                  className="h-64 w-full object-contain"
                  popupCaption="Current Dahaka puppet contact sheet copied from art/combat/dahaka_puppet_parts in the live Godot mod folder, showing the separated underpaint and tentacle layers."
                  roundedClassName="rounded-none"
                />
              </div>
              <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[linear-gradient(180deg,rgba(34,22,14,0.92),rgba(9,12,18,0.98))] p-4">
                <LightboxImage
                  src={`${imageBase}/sand-medallion.png`}
                  alt="Sand medallion UI art from the Warrior Within mod"
                  width={1024}
                  height={1024}
                  className="mx-auto h-48 w-auto object-contain"
                  popupCaption="Sand medallion UI art used by the combat HUD. Filled pips are procedural so the UI can respond to live resource state."
                />
              </div>
              <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] sm:col-span-2 xl:col-span-3">
                <LightboxImage
                  src={`${imageBase}/dahaka-silhouette-mask-pipeline-20260505.png`}
                  alt="Silhouette Mask ML matte setup for Dahaka art separation"
                  width={1713}
                  height={1374}
                  className="h-auto max-h-[28rem] w-full object-contain"
                  popupCaption="Silhouette production screenshot for Dahaka matte extraction and cleanup. It documents the Mask ML / Matte Assist workflow used after ComfyUI-assisted source generation to turn source creature art into usable staged presentation assets."
                  roundedClassName="rounded-none"
                />
              </div>
            </div>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-start">
            <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)]">
              <LightboxImage
                src={`${imageBase}/ravages-of-time.png`}
                alt="Ravages of Time card art from the Prince of Persia Warrior Within Slay the Spire 2 mod"
                width={1417}
                height={944}
                className="h-auto w-full object-cover"
                popupCaption="A Sand-cost attack card from the Prince mod direction. The card presentation is part of making the Warrior Within tone readable inside STS2."
                roundedClassName="rounded-none"
              />
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Adaptation Choices</h2>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                I am treating this as an adaptation problem, not only a programming task. Warrior Within has a harsh, restless tone, so the cards, audio,
                relics, resource pressure, and encounter staging all need to point toward the same feeling.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                The guardrail is simple: the Prince should survive through motion, timing, and dangerous second chances. He should not drift into a stealth
                assassin, shield tank, serene time mage, or passive stall-counter class.
              </p>
            </div>
              </div>

              <div>
            <h2 className="mb-3 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Reviewer Docs</h2>
            <p className="mb-5 max-w-3xl text-sm leading-relaxed text-[var(--muted)]">
              Three short notes for different reviewers: current build scope, the hard systems work, and how the visual/audio pipeline is being produced.
            </p>
            <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-3">
              {reviewerDocuments.map((document) => (
                <DocViewer
                  key={document.title}
                  title={document.title}
                  description={document.description}
                  pages={document.pages}
                  outline={document.outline}
                />
              ))}
            </div>
              </div>
            </div>
          </details>
        </section>
      </div>
    </main>
  );
}
