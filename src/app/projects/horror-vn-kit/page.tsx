import { CardGrid, CaseStudyHeader, CaseStudyShell, Figure, MediaGrid, Prose, Section } from '@/components/case-study/case-study';
import { CaseStudyBody, CaseStudyFooter } from '@/components/case-study/case-study-layout';
import LightboxImage from '@/components/lightbox-image';
import { projectMetadata } from '@/content/project-helpers';

const slug = 'horror-vn-kit' as const;

export const metadata = projectMetadata(
  slug,
  'A no-code Unity toolkit for branching psychological-horror visual novels, built so a writer could author every scene in the Inspector.'
);

const IMG = '/images/projects/horror-vn-kit';

const glance = [
  { label: 'My role', value: 'Toolkit programmer and tools designer' },
  { label: 'Team', value: 'Eden: writer and artist. Me: toolkit programming and tools design' },
  { label: 'Built with', value: 'Unity 6, C#, TextMeshPro, ScriptableObjects, custom editor drawers' },
  { label: 'Status', value: 'Delivered as a university major project (spring 2026), packaged as a .unitypackage' },
] as const;

const systems = [
  {
    title: 'Data, not scenes',
    body: 'Characters and conversations are ScriptableObject assets. A character profile holds a list of named emotion portraits, so a writer can add a “Smirk” or a “NoFace” without anyone changing code.',
  },
  {
    title: 'Branching with memory',
    body: 'Choices link to the next conversation asset. The dialogue manager remembers which branches the player has seen and hides choices that lead back to them, so a hub investigation can’t loop forever.',
  },
  {
    title: 'Typewriter and audio',
    body: 'A standalone typewriter reveals text without re-wrapping lines mid-reveal, plays randomized voice blips every few letters, and lets the player click to finish a line early.',
  },
  {
    title: 'Horror text effects',
    body: 'Per-character mesh effects like jitter, wobble and a blackout focus that darkens everything but one phrase. The writer picks an effect and types the target word into a box; no tags.',
  },
];

const guardrails = [
  {
    title: 'Character counter',
    body: 'Every line shows a live count in the Inspector and turns red past 110 characters, the point where text would overflow the dialogue box.',
  },
  {
    title: 'Emotion dropdowns that can’t lie',
    body: 'The emotion menu only lists portraits that character actually has. If an invalid one slips in, it snaps back to Neutral and logs a warning instead of showing an invisible character.',
  },
  {
    title: 'Manual overrides for glitches',
    body: 'A line can override the speaker’s name or portrait for one moment, to create a distorted or “imposter” beat without making a new character.',
  },
];

export default function HorrorVnKitPage() {
  return (
    <CaseStudyShell>
      <CaseStudyHeader
        slug={slug}
        lede={
          <p>
            A Unity toolkit for branching psychological-horror visual novels. I built the systems so Eden, our writer and artist, could author
            every scene, choice and scare in the Inspector, without code or a scripting language.
          </p>
        }
        hero={
          <LightboxImage
            src={`${IMG}/branching-choices.png`}
            alt="Visual novel scene: Ares asks where to start, with the choices Investigate the workbench and Check the padlocked freezer"
            width={1080}
            height={592}
            priority
            className="h-auto w-full"
            roundedClassName="rounded-none"
          />
        }
        heroCaption="A branching choice. Once a path has been explored, its button hides automatically. Art by Eden."
        glance={glance}
      />

      <CaseStudyBody>
        <Section
          id="goal"
          title="The design goal"
          intro={
            <p>
              The kit handles the tedious parts of a visual novel (memory, text formatting, portraits) so the writer can focus on writing and
              atmosphere. Partway through, Eden found Ink, a narrative scripting language. I looked into it and decided against it: it&apos;s
              powerful for huge branching games, but means learning markup and writing outside Unity, which broke our no-code goal. We spent
              that time on horror effects instead.
            </p>
          }
        />

        <Section id="systems" title="Systems">
          <CardGrid items={systems} columns={2} />
          <MediaGrid>
            <Figure caption="A targeted jitter effect on one word, set up entirely in the Inspector.">
              <LightboxImage src={`${IMG}/jitter-text-effect.png`} alt="Dialogue line with the word jitter shaking in red" width={1190} height={703} className="h-auto w-full" roundedClassName="rounded-none" />
            </Figure>
            <Figure caption="The styled dialogue box, with a handwritten font baked for TextMeshPro.">
              <LightboxImage src={`${IMG}/dialogue-scene.png`} alt="Dialogue scene with Ares and the horror dialogue box" width={941} height={427} className="h-auto w-full" roundedClassName="rounded-none" />
            </Figure>
          </MediaGrid>
        </Section>

        <Section
          id="guardrails"
          title="Guardrails for the writer"
          intro={
            <p>
              Most bugs in a writer-driven tool come from the data, not the code, so I put the checks where the writer works: a custom Inspector
              drawer that lays itself out without overlapping labels.
            </p>
          }
        >
          <CardGrid items={guardrails} />
          <Figure caption="The emotion guardrail catching a portrait the character doesn't have.">
            <LightboxImage src={`${IMG}/emotion-guardrail-warning.png`} alt="Unity console warning: Ares does not have the SlightSmile expression, snapping back to Neutral" width={884} height={113} className="h-auto w-full" roundedClassName="rounded-none" />
          </Figure>
        </Section>

        <Section id="process" title="Process">
          <Prose>
            <p>
              I documented the build in six dev diaries, from a Git ignore rule that tried to upload 33,000 Unity files to a typewriter flicker
              caused by update order. I also wrote a designer&apos;s manual covering setup, branching and troubleshooting. The kit shipped as one
              Unity package with the manual inside.
            </p>
          </Prose>
        </Section>
      </CaseStudyBody>

      <CaseStudyFooter slug={slug} />
    </CaseStudyShell>
  );
}
