import {
  ActionLinks,
  BulletList,
  CardGrid,
  CaseStudyHeader,
  CaseStudyShell,
  DeepDive,
  Figure,
  MediaGrid,
  Prose,
  Section,
  Split,
} from '@/components/case-study/case-study';
import { CaseStudyBody, CaseStudyFooter } from '@/components/case-study/case-study-layout';
import LightboxImage from '@/components/lightbox-image';
import LightboxVideo from '@/components/lightbox-video';
import { projectMetadata } from '@/content/project-helpers';

const slug = 'shonen-showdown' as const;

export const metadata = projectMetadata(
  slug,
  'Lead developer on a networked first-person trading card game in Unity 6: the rules engine, Photon Fusion 2 networking and a ScriptableObject card-data system.'
);

const IMG = '/images/projects/shonen-showdown';
const DOCS = '/documents/projects/shonen-showdown/recruiter';

const glance = [
  { label: 'My role', value: 'Lead developer: battle rules, turn flow, networking and card-data architecture' },
  { label: 'Team', value: 'Three-person student team: Georgi (lead developer), Ricardo (art), Sam (data and audio)' },
  { label: 'Built with', value: 'Unity 6 (URP), C#, Photon Fusion 2 shared mode, Photon Voice, ScriptableObjects' },
  { label: 'Challenge', value: 'Keep turn phases, card effects, summons, attacks and visible state in sync across the network' },
] as const;

const rules = [
  {
    title: 'Six-phase turns',
    body: 'A TurnManager state machine enforces Draw → Standby → Main 1 → Battle → Main 2 → End, with UI feedback at each step.',
  },
  {
    title: 'Summoning rules',
    body: 'Level 1–4 summon free, 5–6 need one tribute, 7+ need two. A successful summon spawns the 3D monster above the flat card.',
  },
  {
    title: 'The chain stack',
    body: 'Last-in, first-out resolution: Attack → Trap → Quick-Spell resolve in reverse. At most three conditional effects per card, enforced in the data.',
  },
];

const modes = [
  { title: 'Standard Duel (1v1)', body: 'Classic rules, 8,000 life points, players across the table.' },
  { title: 'Tag Team (2v2)', body: '16,000 shared life points, alternating turns, voice chat for everyone.' },
  { title: 'Raid Boss (2v1)', body: 'One boss player with double life points and bonus cards against two challengers.' },
  { title: 'Battle Royale (FFA)', body: 'Four players; the last with life points wins.' },
];

const team = [
  {
    title: 'Georgi: lead developer',
    body: 'Core battle scene and logic, lobby and menus, Photon Fusion 2 networking, the turn state machine, the card-data schema and keyword architecture, VR interaction handling.',
  },
  {
    title: 'Ricardo: art (in production)',
    body: 'Custom 3D monster models and animation, the environment, card illustration import, UI polish.',
  },
  {
    title: 'Sam: data and audio',
    body: 'Card data entry, keyword assets, balance and stats, sound effects and music.',
  },
];

const systemsBuilt = [
  'Full six-phase turn state machine.',
  'Last-in, first-out chain resolution.',
  'Level-based tribute summoning.',
  'Attack and defence damage with life-point tracking.',
  'Drag-to-target attack declaration.',
  'A cinematic "Showdown Phase" for boss monster clashes.',
  'ScriptableObject card registry with keyword references.',
];

export default function ShonenShowdownPage() {
  return (
    <CaseStudyShell>
      <CaseStudyHeader
        slug={slug}
        lede={
          <p>
            A networked trading card game played in first person: you hold your cards, declare attacks, and summoned monsters appear as 3D
            holograms on the board. I was the lead developer on our three-person team, building the rules engine, the networking and the card
            data everyone else builds on.
          </p>
        }
        hero={
          <div className="aspect-video">
            <LightboxVideo
              embedUrl="https://www.youtube.com/embed/CIesifEUpTg"
              thumbnailUrl="https://img.youtube.com/vi/CIesifEUpTg/maxresdefault.jpg"
              title="Shonen Showdown gameplay prototype"
              className="h-full w-full object-cover"
              roundedClassName="rounded-none"
            />
          </div>
        }
        heroCaption="Gameplay prototype."
        glance={glance}
      />

      <CaseStudyBody>
        <Section
          id="rules"
          title="The rules engine"
          intro={<p>I own the core battle logic: turn management, the chain stack, summoning, damage, and keeping it all in sync over Photon Fusion 2.</p>}
        >
          <CardGrid items={rules} />
          <MediaGrid>
            <Figure caption="Turn 11: both fields full, the turn manager running the whole phase flow.">
              <LightboxImage
                src={`${IMG}/field-full.png`}
                alt="Full board with monsters on both sides during the battle phase"
                width={1674}
                height={666}
                className="h-auto w-full"
                roundedClassName="rounded-none"
              />
            </Figure>
            <Figure caption="Drag-to-target attack declaration; the dashed line runs from attacker to target.">
              <LightboxImage
                src={`${IMG}/attack-declare.png`}
                alt="Attack declaration with a red dashed arrow targeting the opponent's monster"
                width={1481}
                height={599}
                className="h-auto w-full"
                roundedClassName="rounded-none"
              />
            </Figure>
          </MediaGrid>
        </Section>

        <Section id="data" title="Card data the team can extend">
          <Split
            media={
              <Figure caption="The CardData template in the Unity inspector. I designed it; teammates add cards by filling it in.">
                <LightboxImage
                  src={`${IMG}/unity-editor.png`}
                  alt="Unity editor with the CardData ScriptableObject inspector"
                  width={1711}
                  height={1388}
                  className="h-auto w-full"
                  roundedClassName="rounded-none"
                />
              </Figure>
            }
          >
            <p>
              I designed the <code>CardData</code> ScriptableObject schema: ID, name, frame, rarity, attribute, level, attack and defence,
              keyword references and effect text. The battle engine reads it directly.
            </p>
            <p>
              Keywords such as <em>Piercing</em> and <em>SpecialSummon</em> are separate assets, so a balance change reaches every card that
              uses them, with no script edits or merge conflicts.
            </p>
            <p>
              The roster lives in a shared spreadsheet kept by our data lead. A custom &quot;anime race&quot; column sits beside the standard
              one, so a card can be a Spellcaster by the rules and an Arrancar by lore.
            </p>
          </Split>
          <ActionLinks
            links={[
              { href: 'https://docs.google.com/spreadsheets/d/1j0_lvJtXyrgeOpKc3R4PLXgIjcxCwakaPbCksPANC-M/edit?usp=sharing', label: 'Card database (Google Sheet)' },
            ]}
          />
        </Section>

        <Section id="team" title="Who did what" intro={<p>We worked with strict scene ownership and Git discipline: each person owned their own scenes.</p>}>
          <CardGrid items={team} />
          <DeepDive summary="Game modes and the full systems list">
            <CardGrid items={modes} columns={2} />
            <Prose>
              <h3>Systems I built</h3>
            </Prose>
            <BulletList items={systemsBuilt} />
          </DeepDive>
        </Section>

        <Section id="documents" title="Design documents">
          <ActionLinks
            links={[
              { href: `${DOCS}/shonen-showdown-gdd-v0-2.pdf`, label: 'Game design document v0.2 (PDF)' },
              { href: `${DOCS}/shonen-showdown-technical-bible-v03.pdf`, label: 'Technical bible v0.3 (PDF)' },
            ]}
          />
        </Section>
      </CaseStudyBody>

      <CaseStudyFooter slug={slug} />
    </CaseStudyShell>
  );
}
