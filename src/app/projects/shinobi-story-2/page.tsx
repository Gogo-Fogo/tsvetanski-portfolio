import { CardGrid, CaseStudyHeader, CaseStudyShell, Figure, MediaGrid, Prose, Section, Split } from '@/components/case-study/case-study';
import { CaseStudyBody, CaseStudyFooter } from '@/components/case-study/case-study-layout';
import LightboxImage from '@/components/lightbox-image';
import LightboxLocalVideo from '@/components/lightbox-local-video';
import { projectMetadata } from '@/content/project-helpers';

const slug = 'shinobi-story-2' as const;

export const metadata = projectMetadata(
  slug,
  'Unreal Engine 5 follow-up to Shinobi Story. I designed and built the character creator UI and wrote the C++ traversal layer: target leaps, tree dashes and wall runs.'
);

const IMG = '/images/projects/shinobi-story-2';

const glance = [
  { label: 'My role', value: 'Co-owner. Sole UI designer and implementer; traversal programmer alongside the team' },
  { label: 'Ownership', value: 'Character creator UI: all mine. Traversal: my C++ layer on top of third-party movement plugins' },
  { label: 'Built with', value: 'Unreal Engine 5, C++ and Blueprints, Mutable character customisation' },
  { label: 'Status', value: 'Early prototype, in development' },
] as const;

const toc = [
  { id: 'creator', label: 'Character creator UI' },
  { id: 'verification', label: 'How I verified each pass' },
  { id: 'traversal', label: 'Traversal system' },
  { id: 'combat', label: 'Combat prototypes' },
];

const uiDecisions = [
  {
    title: 'Hand-drawn, not 3D cards',
    body: 'An earlier version used 3D card meshes. I moved to layered 2D parchment, brush lettering and ink icons, because matching the art target mattered more than keeping the 3D route.',
  },
  {
    title: 'Clean cutouts',
    body: 'Frame, rope, cards and the confirm stamp were cut out with a Segment Anything workflow in my local ComfyUI. My export step strips the old white matte from soft edges and keeps thin rope gaps open.',
  },
  {
    title: 'Native UI materials',
    body: 'Shadows, a gold selection rim, warm grading, worn paper edges and the ground seal are UI materials with small HLSL expressions, not baked images, so they move with the cards.',
  },
  {
    title: 'Motion that reads',
    body: "Each talisman sways ±0.6° on its own phase. The motion stepped at first; turning off pixel snapping on the moving panels fixed it. A 565-frame profiling capture showed the widget ticking in 0.07 ms on average, so the UI wasn't the bottleneck.",
  },
];

const traversalLayers = [
  {
    title: 'Third-party base: gravity and surface movement',
    body: "Dynamic-gravity movement from a tutorial-derived plugin, OmniWalk for surface walking, and a marketplace targeting system. I kept these as reference and didn't edit the originals.",
  },
  {
    title: 'My C++: traversal query',
    body: 'USS2TraversalQueryComponent picks the best target from camera aim, WASD intent, distance and actor tags. Scoring lives here, not in the character class, so new surface types plug into one contract.',
  },
  {
    title: 'My C++: leap, tree dash, wall run',
    body: 'Separate components for leaping to a validated landing point, chaining tree-to-tree dashes and running along walls. Capsule movement stays code-driven; animation sells the pose but never owns the position.',
  },
  {
    title: 'My C++ and Blueprint: feedback',
    body: 'Events like TargetLeapStarted and WallRunEnded let designers attach VFX, camera shake and audio in Blueprint without touching the movement maths.',
  },
];

export default function ShinobiStory2Page() {
  return (
    <CaseStudyShell>
      <CaseStudyHeader
        slug={slug}
        lede={
          <p>
            The Unreal Engine 5 follow-up to <a href="/projects/shinobi-story">Shinobi Story</a>. This page covers my two areas: the character
            creator UI, which I designed and built end to end, and the C++ traversal layer I wrote on top of third-party movement plugins.
          </p>
        }
        hero={
          <LightboxLocalVideo
            src="/videos/projects/shinobi-story-2/character-creator-walkthrough.mp4"
            poster={`${IMG}/character-creator-walkthrough-poster.jpg`}
            title="Shinobi Story 2 character creator walkthrough"
            triggerLabel="Play the character creator walkthrough"
            className="aspect-[1600/784] h-auto w-full object-cover"
            roundedClassName="rounded-none"
          />
        }
        heroCaption="Walkthrough of the character creator running in Unreal: switching talismans, sliders and options, and rotating the character (53 s, no sound)."
        glance={glance}
      />

      <CaseStudyBody toc={toc}>
        <Section
          id="creator"
          title="Character creator UI"
          intro={
            <p>
              I explored eight art directions in two rounds, among them a clan-archive scroll, a field dossier, orbiting clan seals and a
              hanging scroll. The talisman fan won: categories hang as paper tags from a rope, the selected tag swings forward, and a banner
              below holds its slider or options. Then I rebuilt it in Unreal, comparing each version against the target.
            </p>
          }
        >
          <Figure caption="The creator in engine (play-in-editor capture, version 17).">
            <LightboxImage
              src={`${IMG}/character-creator-in-engine.jpg`}
              alt="Shinobi Story 2 character creator in Unreal: hanging parchment talismans, a slider banner and a Confirm Ninja stamp"
              width={863}
              height={487}
              className="h-auto w-full"
              roundedClassName="rounded-none"
            />
          </Figure>
          <MediaGrid>
            <Figure caption="The approved art target (concept round 2, option 4).">
              <LightboxImage
                src={`${IMG}/character-creator-target.jpg`}
                alt="Talisman fan concept used as the art target"
                width={1561}
                height={1008}
                className="h-auto w-full"
                roundedClassName="rounded-none"
              />
            </Figure>
            <Figure caption="In engine: the Face page, with previous/next arrows on the shape talismans.">
              <LightboxImage
                src={`${IMG}/character-creator-face.jpg`}
                alt="In-engine character creator on the Face page"
                width={863}
                height={487}
                className="h-auto w-full"
                roundedClassName="rounded-none"
              />
            </Figure>
          </MediaGrid>
          <CardGrid items={uiDecisions} columns={2} />
        </Section>

        <Section id="verification" title="How I verified each pass">
          <Split
            media={
              <Figure caption="The landing menu (version 19) shares the creator's paper grain and seal.">
                <LightboxImage
                  src={`${IMG}/landing-menu.jpg`}
                  alt="Landing menu with two parchment buttons, Create Your Ninja and Exit"
                  width={863}
                  height={487}
                  className="h-auto w-full"
                  roundedClassName="rounded-none"
                />
              </Figure>
            }
          >
            <p>
              The creator went through 19 numbered versions. For each one I compiled with warnings as errors, captured every creator page in
              play mode, checked the log for Blueprint errors, and confirmed the sway graph was unchanged unless the pass meant to change it.
            </p>
            <p>The notes also say plainly what wasn&apos;t tested yet, such as controller input and other aspect ratios.</p>
          </Split>
        </Section>

        <Section
          id="traversal"
          title="Traversal system"
          intro={
            <p>
              The goal is fast surface-to-surface movement: leap to a branch, dash between trees, run along a wall, chain them together.
              Traversal is a shared effort, so here is exactly which layer is mine.
            </p>
          }
        >
          <CardGrid items={traversalLayers} columns={2} />
          <pre className="overflow-x-auto rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--surface)] p-4 font-mono text-sm leading-relaxed">
            {'camera aim + WASD intent\n→ traversal query (score tagged targets)\n→ leap / dash / wall-run component (validate landing, move capsule)\n→ feedback events → Blueprint VFX, camera, audio'}
          </pre>
          <Prose>
            <p>
              Early on, most of this lived in one movement bridge component. In a second audit I split it up: input binding, traversal focus,
              traversal execution, sprint presentation and cosmetic cues each got their own owner, so teammates can extend movement without
              breaking each other&apos;s work.
            </p>
          </Prose>
        </Section>

        <Section id="combat" title="Combat prototypes">
          <Split
            media={
              <Figure caption="Shadow-clone prototype in an Unreal test level.">
                <LightboxImage
                  src={`${IMG}/shadow-clone-prototype.jpg`}
                  alt="Unreal prototype with the player character and two shadow clones"
                  width={1600}
                  height={900}
                  className="h-auto w-full"
                  roundedClassName="rounded-none"
                />
              </Figure>
            }
          >
            <p>
              Alongside traversal I prototype combat ideas in a separate test project, such as a shadow-clone ability that spawns AI-driven
              copies of the player. They stay outside the main project until they prove themselves.
            </p>
          </Split>
        </Section>
      </CaseStudyBody>

      <CaseStudyFooter slug={slug} />
    </CaseStudyShell>
  );
}
