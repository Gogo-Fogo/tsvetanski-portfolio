import { BulletList, CardGrid, CaseStudyHeader, CaseStudyShell, DeepDive, Prose, Section } from '@/components/case-study/case-study';
import { CaseStudyBody, CaseStudyFooter } from '@/components/case-study/case-study-layout';
import LightboxImage from '@/components/lightbox-image';
import { projectMetadata } from '@/content/project-helpers';

const slug = 'patapon-vr-the-first-beat' as const;

export const metadata = projectMetadata(
  slug,
  'Design concept for a VR rhythm-strategy prequel to Patapon: the player physically drums commands to lead an army. Not yet implemented.'
);

const glance = [
  { label: 'My role', value: 'Solo systems, interaction and narrative designer' },
  { label: 'Target', value: 'Meta Quest 3 and PCVR, Unity OpenXR' },
  { label: 'Design question', value: 'How physical drumming can command an army without tiring the player' },
  { label: 'Status', value: 'Design concept only (GDD 1.0, December 2025); not yet built' },
] as const;

const design = [
  {
    title: 'Drums, not buttons',
    body: 'Four drums sit on the chariot railing at waist height. A hit must exceed 2.0 m/s to count, so resting hands do nothing. Commands are four-beat patterns; perfect sequences trigger Fever Mode.',
  },
  {
    title: 'Comfort by design',
    body: 'The player never walks. The chariot glides behind the army on a smoothed "tow rope" while the army moves on the beat, keeping the player\'s frame of reference steady.',
  },
  {
    title: 'Roguelite runs',
    body: 'Branching expedition maps across three biomes, with combat, resource, mystery and boss nodes, boons after clears, and a hub city that grows between runs.',
  },
  {
    title: 'Seal, don\'t kill',
    body: 'Each act ends with an Archfiend that must be sealed: break its host body, expose the spirit, capture it. In the second phase the audio distorts, so players rely on their internal rhythm.',
  },
];

const commands = [
  'March: Pata – Pata – Pata – Pon',
  'Attack: Pon – Pon – Pata – Pon',
  'Defend: Chaka – Chaka – Pata – Pon',
  'Charge: Don – Don – Chaka – Chaka',
  'Miracle: Don – Don – Don – Don – Don',
];

const roadmap = [
  { title: '1. Greybox', body: 'VR rig and hand tracking, four-drum velocity input, rhythm engine, chariot tow-rope movement.' },
  { title: '2. Core loop', body: 'Flag bearer and vanguard squad, March and Attack, one enemy type, win and loss.' },
  { title: '3. Feel', body: 'Chariot and titan models, sound sync, Fever visuals.' },
  { title: '4. Content', body: 'Weapons and runes, biome generation, encounters, the sealing mechanic.' },
];

export default function PataponVrPage() {
  return (
    <CaseStudyShell>
      <CaseStudyHeader
        slug={slug}
        lede={
          <p>
            A design concept for a VR prequel to Sony&apos;s Patapon series. You ride a chariot and physically drum commands to lead an army
            through a roguelite expedition. It&apos;s a game design document, not a build; this page is the short version.
          </p>
        }
        hero={
          <LightboxImage
            src="/images/projects/patapon-vr/patapon-march.png"
            alt="Patapon warriors marching under a moonlit sky, official Patapon art"
            width={1280}
            height={720}
            priority
            className="h-auto w-full"
            roundedClassName="rounded-none"
          />
        }
        heroCaption="Official Patapon art, used as reference for the concept. Patapon is © Sony Interactive Entertainment."
        glance={glance}
      />

      <CaseStudyBody>
        <Section id="design" title="The design">
          <CardGrid items={design} columns={2} />
          <Prose>
            <p>
              <strong>Command patterns</strong>, kept from the original games:
            </p>
          </Prose>
          <BulletList items={commands} />
          <DeepDive summary="Planned build order">
            <CardGrid items={roadmap} columns={4} />
          </DeepDive>
          <Prose>
            <p>
              <small>
                All images are from the official Patapon series and belong to Sony Interactive Entertainment and Japan Studio. This is a fan
                concept, not affiliated with or endorsed by Sony.
              </small>
            </p>
          </Prose>
        </Section>
      </CaseStudyBody>

      <CaseStudyFooter slug={slug} />
    </CaseStudyShell>
  );
}
