import { ActionLinks, CardGrid, CaseStudyHeader, CaseStudyShell, Figure, Prose, Section, Split } from '@/components/case-study/case-study';
import { CaseStudyBody, CaseStudyFooter } from '@/components/case-study/case-study-layout';
import LightboxImage from '@/components/lightbox-image';
import { projectMetadata } from '@/content/project-helpers';

const slug = 'lizard-wizard' as const;

export const metadata = projectMetadata(
  slug,
  'A five-person Unity capstone: a momentum-based desert puzzle-platformer. I set up the shared production structure and built the predator sensing AI.'
);

const glance = [
  { label: 'My role', value: 'Production setup lead and predator AI programmer on a five-person team' },
  { label: 'Team', value: 'Ibrahim Shaheed, Vivian, Xavier McIntosh, Diego Santiago-Rodriguez and me' },
  { label: 'Built with', value: 'Unity 6 (URP), new Input System, GitHub feature-branch workflow' },
  { label: 'Status', value: 'In development as our senior capstone (fall 2026)' },
] as const;

const contributions = [
  {
    title: 'Five-person project structure',
    body: 'I laid out the shared Unity hierarchy for art, audio, data, scripts, scenes and docs, and gave each teammate a personal sandbox scene. Features get built and tested there before anything touches a production scene, which keeps merge conflicts down.',
  },
  {
    title: 'Team rules and reference',
    body: 'I wrote a folder cheat sheet and working rules: coordinate before editing production scenes, branch per feature, keep files where they belong. I also set up the Trello board and a shared PureRef reference board.',
  },
  {
    title: 'Repository recovery',
    body: 'When a terrain asset was corrupted by line-ending conversion, I restored the working version and updated the Git attributes so Unity binary assets are never treated as text again.',
  },
];

const sensingSteps = [
  { title: 'Vision', body: 'Checks distance and view angle first. Only if both pass does it spend a raycast on line of sight. It runs a few times per second, not every frame.' },
  { title: 'Hearing', body: 'A radius around the spider receives noise events from the player. If the noise lands inside the radius, the spider has heard the player.' },
  { title: 'One shared reaction', body: 'Both senses call the same ChooseReaction method. The spider rolls once: 75% pounce, 25% retreat. It never re-rolls every frame, so it can’t flicker between states.' },
  { title: 'Readable in the editor', body: 'Gizmos draw the vision cone and hearing sphere, and every state change is logged, so designers can tune ranges without reading the code.' },
];

export default function LizardWizardPage() {
  return (
    <CaseStudyShell>
      <CaseStudyHeader
        slug={slug}
        lede={
          <p>
            A whimsical 3D puzzle-platformer: build speed across the dunes, carry it through jumps, and deliver water to thirsty critters
            before you run out. I set up the production structure the five of us work in, and I&apos;m building the predators&apos; sensing AI.
          </p>
        }
        hero={
          <LightboxImage
            src="/images/projects/lizard-wizard/spider-sensing-sandbox.jpg"
            alt="Unity editor showing the spider prototype's vision and hearing gizmos in a desert sandbox, with the console reporting Player detected by Vision"
            width={2000}
            height={697}
            priority
            className="h-auto w-full"
            roundedClassName="rounded-none"
          />
        }
        heroCaption="My sandbox scene: the spider's vision cone and hearing radius as gizmos, and the console confirming a vision detection."
        glance={glance}
      />

      <CaseStudyBody>
        <Section
          id="game"
          title="The game"
          intro={
            <>
              <p>
                You play a lizard wizard whose hat is also a water reservoir. Water drains over time, spills when you fall or get hit, and is
                the only thing keeping desert critters alive. Movement is the core: sliding down dunes and carrying momentum, with references
                like HASTE, Alto&apos;s Odyssey, Titanfall 2 and Sonic Frontiers. Predators and weather add pressure to your route.
              </p>
              <p>
                Terrain generation, player physics and the water UI belong to teammates. The sections below cover only my part.
              </p>
            </>
          }
        />

        <Section id="production" title="Production foundation">
          <CardGrid items={contributions} />
        </Section>

        <Section
          id="predator-ai"
          title="Predator sensing AI"
          intro={
            <p>
              The first predator is a desert spider. I kept its state machine to three states (Idle, Pounce, Retreat) and put the effort into
              how it notices you, plus a little randomness so it doesn&apos;t feel scripted.
            </p>
          }
        >
          <Split
            media={
              <Figure caption="The spider state machine from my technical design doc, written before the code.">
                <LightboxImage
                  src="/images/projects/lizard-wizard/spider-ai-state-machine.jpg"
                  alt="Spider AI state machine: Idle, check for player by vision or hearing, random choice, Pounce 75% or Retreat 25%, back to Idle"
                  width={1122}
                  height={1402}
                  className="h-auto w-full"
                  roundedClassName="rounded-none"
                />
              </Figure>
            }
          >
            <CardGrid items={sensingSteps} columns={1} />
          </Split>
        </Section>

        <Section id="blog" title="Production blog">
          <Prose>
            <p>
              The team posts weekly progress on a public production blog. My first post covers the movement research and the project structure
              above.
            </p>
          </Prose>
          <ActionLinks links={[{ href: 'https://primenuggets.github.io/Production-Blog/', label: 'Read the production blog', primary: true }]} />
        </Section>
      </CaseStudyBody>

      <CaseStudyFooter slug={slug} />
    </CaseStudyShell>
  );
}
