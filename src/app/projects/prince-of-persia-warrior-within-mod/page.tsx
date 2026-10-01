import {
  BulletList,
  CardGrid,
  CaseStudyHeader,
  CaseStudyShell,
  DeepDive,
  Figure,
  MediaGrid,
  Prose,
  Section,
} from '@/components/case-study/case-study';
import { CaseStudyBody, CaseStudyFooter } from '@/components/case-study/case-study-layout';
import DocViewer from '@/components/doc-viewer';
import type { DocPage } from '@/components/doc-viewer';
import LightboxImage from '@/components/lightbox-image';
import LightboxLocalVideo from '@/components/lightbox-local-video';
import { projectMetadata } from '@/content/project-helpers';

const slug = 'prince-of-persia-warrior-within-mod' as const;

export const metadata = projectMetadata(
  slug,
  'Solo Slay the Spire 2 character mod in Godot/C#: Medallion of Time rewinds, a Sand economy, Dahaka escape pressure, custom audio and presentation.'
);

const glance = [
  { label: 'My role', value: 'Solo designer and gameplay engineer; also integration, assets, audio and presentation' },
  { label: 'Built with', value: 'Slay the Spire 2 v0.103.2, BaseLib v3.1.0, Godot 4.5.1, C#/.NET 9, Harmony patches' },
  { label: 'Challenge', value: 'Restore a full combat checkpoint while keeping health, cards, enemies and custom resources consistent' },
  { label: 'Status', value: 'Playable: character, Sand, rewind, Dahaka pursuit, cards, audio, UI and contextual videos' },
] as const;

const toc = [
  { id: 'rewind', label: 'The rewind system' },
  { id: 'dahaka', label: 'The Dahaka loop' },
  { id: 'cards', label: 'Card families' },
  { id: 'art', label: 'Art and presentation' },
  { id: 'scope', label: 'What the build contains' },
];

const imageBase = '/images/projects/prince-of-persia-warrior-within-mod';

const currentGameplayVideo = {
  src: '/videos/projects/prince-of-persia-warrior-within-mod/prince-gameplay-2026-05-05-web.mp4',
  poster: `${imageBase}/prince-gameplay-poster.jpg`,
  title: 'May 5, 2026 current Prince mod gameplay capture',
  popupCaption:
    'Current May 5, 2026 gameplay capture supplied from the active mod build. It is the page evidence for Sand HUD, Wind Back rewind play, Dahaka pressure, and the newer puppet/presentation work.',
};

const currentBuildItems = [
  'A selectable Prince with custom starter deck, Medallion of Time starter relic, reward/shop card hooks, rest/shop/combat visuals, and 25 Prince-facing Neow lines.',
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
  'ComfyUI helps with concept and lookdev only; it is not the claim on its own.',
  'The production work is integration: choosing usable assets, cutting sprites, cleaning mattes, baking card, relic and UI images, and wiring them into the game.',
  'The Prince and the Dahaka are layered puppets cut from their sprites, so they can animate in combat.',
  'The Sand medallion, loading videos, game-over overlays, music, voice and sound effects all react to live game state.',
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

export default function PrinceOfPersiaModPage() {
  return (
    <CaseStudyShell>
      <CaseStudyHeader
        slug={slug}
        lede={
          <>
            <p>
              A playable character mod that turns time travel into a risky deckbuilder resource: earn Sand, use the Medallion of Time to
              rewind bad futures, and accept that every stolen second brings the Dahaka closer.
            </p>
            <p>
              Solo project. I built the character, combat systems, pursuit encounter, audio layer and presentation pipeline inside Slay the
              Spire 2&apos;s early-access mod environment.
            </p>
          </>
        }
        hero={
          <LightboxLocalVideo
            src={currentGameplayVideo.src}
            poster={currentGameplayVideo.poster}
            title={currentGameplayVideo.title}
            triggerLabel="Play gameplay capture"
            className="aspect-video h-auto w-full object-contain"
            roundedClassName="rounded-none"
          />
        }
        heroCaption="Gameplay from the current build (May 5, 2026): the Sand HUD, Wind Back rewinds and Dahaka pressure."
        glance={glance}
      />

      <CaseStudyBody toc={toc}>
        <Section
          id="rewind"
          title="The rewind system"
          intro={
            <p>
              Rewind is the centrepiece because it touches almost every fragile part of combat. A partial undo would be easier, but it
              wouldn&apos;t survive real fights with generated cards, powers, relic counters, changing enemy rosters and a live hand UI. Six
              problems had to be solved:
            </p>
          }
        >
          <CardGrid items={signatureSystemItems} />
        </Section>

        <Section
          id="dahaka"
          title="The Dahaka loop"
          intro={
            <p>
              The Dahaka makes time travel costly. Rewinding helps the Prince survive this fight, but pushes a persistent pursuit toward a
              dedicated escape encounter.
            </p>
          }
        >
          <CardGrid items={dahakaLoopItems.map((item) => ({ title: `${item.step}. ${item.title}`, body: item.body }))} />
          <Figure caption="Character select in the current build, with the Medallion of Time starter relic.">
            <LightboxImage
              src={`${imageBase}/prince-character-select-current-20260505.png`}
              alt="Prince character select screen in the Slay the Spire 2 mod"
              width={2405}
              height={1357}
              className="h-auto w-full"
              roundedClassName="rounded-none"
            />
          </Figure>
        </Section>

        <Section
          id="cards"
          title="Card families"
          intro={
            <p>
              The Prince should survive through motion, timing and dangerous second chances, not drift into a stealth assassin, shield tank or
              passive stall class. These cards are design-family evidence: some are in the registered playable pool, newer ones are authored
              pre-release assets.
            </p>
          }
        >
          {cardFamilyItems.map((family) => (
            <div key={family.family} className="flex flex-col gap-3">
              <Prose>
                <h3>{family.family}</h3>
                <p>{family.body}</p>
              </Prose>
              <MediaGrid columns={3}>
                {family.cards.map((card) => (
                  <Figure
                    key={card.src}
                    caption={
                      <>
                        <strong>{card.title}.</strong> {card.caption}
                      </>
                    }
                  >
                    <LightboxImage src={card.src} alt={card.alt} width={1000} height={760} className="h-auto w-full" roundedClassName="rounded-none" />
                  </Figure>
                ))}
              </MediaGrid>
            </div>
          ))}
        </Section>

        <Section
          id="art"
          title="Art and presentation"
          intro={
            <p>
              The art is still in beta and uses ComfyUI-assisted concept output in places, so my claim is the production pass around it:
              choosing assets, cleaning sprites and mattes, cutting puppet layers, baking UI, and wiring it all to live game state.
            </p>
          }
        >
          <BulletList items={pipelineItems} />
          <DeepDive summary="Sprites, puppet layers and UI art">
            <MediaGrid>
              <Figure caption="The Prince combat sprite from the live mod folder.">
                <LightboxImage src={`${imageBase}/prince-actual-combat-sprite.png`} alt="Prince combat sprite" width={1313} height={1563} className="h-auto w-full" roundedClassName="rounded-none" />
              </Figure>
              <Figure caption="Puppet layer cuts (v15): base body, hair, weapon arms and sash.">
                <LightboxImage src={`${imageBase}/prince-puppet-v15-layer-contact-sheet.png`} alt="Prince puppet layer contact sheet" width={1500} height={1100} className="h-auto w-full" roundedClassName="rounded-none" />
              </Figure>
              <Figure caption="The Dahaka sprite used in the chase and escape.">
                <LightboxImage src={`${imageBase}/dahaka-current-sprite.png`} alt="Dahaka sprite" width={1093} height={1223} className="h-auto w-full" roundedClassName="rounded-none" />
              </Figure>
              <Figure caption="Dahaka puppet parts: separated underpaint and tentacle layers.">
                <LightboxImage src={`${imageBase}/dahaka-puppet-contact-sheet-current.png`} alt="Dahaka puppet contact sheet" width={1140} height={1028} className="h-auto w-full" roundedClassName="rounded-none" />
              </Figure>
              <Figure caption="Matte cleanup in Silhouette (Mask ML / Matte Assist) after ComfyUI-assisted source generation.">
                <LightboxImage src={`${imageBase}/dahaka-silhouette-mask-pipeline-20260505.png`} alt="Silhouette matte setup for Dahaka art" width={1713} height={1374} className="h-auto w-full" roundedClassName="rounded-none" />
              </Figure>
              <Figure caption="Sand medallion HUD art; the filled pips are procedural and follow the live resource.">
                <LightboxImage src={`${imageBase}/sand-medallion.png`} alt="Sand medallion UI art" width={1024} height={1024} className="h-auto w-full" roundedClassName="rounded-none" />
              </Figure>
            </MediaGrid>
          </DeepDive>
        </Section>

        <Section id="scope" title="What the build contains">
          <BulletList items={currentBuildItems} />
          <DeepDive summary="Reviewer documents">
            <MediaGrid columns={3}>
              {reviewerDocuments.map((document) => (
                <DocViewer key={document.title} title={document.title} description={document.description} pages={document.pages} outline={document.outline} />
              ))}
            </MediaGrid>
          </DeepDive>
        </Section>
      </CaseStudyBody>

      <CaseStudyFooter slug={slug} />
    </CaseStudyShell>
  );
}
