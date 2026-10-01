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
import DocViewer from '@/components/doc-viewer';
import type { DocOutlineItem, DocPage } from '@/components/doc-viewer';
import LightboxImage from '@/components/lightbox-image';
import LightboxLocalVideo from '@/components/lightbox-local-video';
import { projectMetadata } from '@/content/project-helpers';

const slug = 'birdwatching' as const;

export const metadata = projectMetadata(
  slug,
  'Unity 6 VR prototype about photographing birds: camera capture, species detection, star-rated field-guide progress, backpack tools, a feeding stick and comfort settings.'
);

const IMG = '/images/projects/birdwatching';
const DOCS = '/documents/projects/birdwatching/dev-logs';

const glance = [
  { label: 'My role', value: 'Camera capture, bird detection and scoring, field-guide progress, backpack tools, comfort settings and builds' },
  { label: 'Team', value: 'Three-person student team with Felix Chughtai and Talulla Allen' },
  { label: 'Built with', value: 'Unity 6, C#, URP, XR Interaction Toolkit, OpenXR, XR Hands' },
  { label: 'Status', value: 'Playable prototype with PCVR support and Quest standalone build work; shown at an IGDA Baltimore showcase' },
] as const;

const toc = [
  { id: 'loop', label: 'Camera to field guide' },
  { id: 'systems', label: 'What I built' },
  { id: 'playtests', label: 'Playtests and showcase' },
  { id: 'logs', label: 'Dev logs and documents' },
];

const cameraPipeline = [
  'Hold the camera; it renders a live preview.',
  'Pull the trigger to save the view as a PNG.',
  'Rays find the most visible bird in frame.',
  'Framing, visibility, distance and fill become a 1–4 star score.',
  'Species progress is saved to disk.',
  'The field guide in your hand updates with the photo, name and stars.',
];

const systems = [
  {
    title: 'VR camera capture',
    body: 'Held camera with live preview, trigger capture, zoom, shutter feedback, saved PNGs and preview repair.',
  },
  {
    title: 'Bird detection and scoring',
    body: 'Camera rays identify the bird, then score framing, visibility, distance and fill into a 1–4 star rating.',
  },
  {
    title: 'Bingo field guide',
    body: 'In-hand book with page turning, saved photos, species names, lock states, and best and latest stars.',
  },
  {
    title: 'Backpack tools',
    body: 'Camera, book and feeding stick stowed on the body: shoulder retrieval, stow anchors, haptics, outlines and a right-shoulder camera summon.',
  },
  {
    title: 'Feeding stick',
    body: 'A held perch that attracts one bird, holds it briefly, then releases it before a cooldown.',
  },
  {
    title: 'Comfort settings',
    body: 'In-headset menu for movement, turning, vignette, credits and FPS, applied live. Controllers first, with a hand-tracking fallback.',
  },
];

const implementedSlice = [
  'Seven species: Robin, Blue Jay, Cardinal, Chickadee, Sparrow, Gold Finch and Crow.',
  'Nine bingo-book slots, including variants where the source art supports them.',
  'Saved photo and progress data, with migration for older saves.',
  'Low-poly forest with baked lighting, wind shaders, outlines and in-game credits.',
  'Still rough: bird materials and shaders, and some backpack and camera alignment.',
];

const stack = [
  'Unity 6000.3.10f1, C#, Universal Render Pipeline 17.3.0.',
  'XR Interaction Toolkit 3.3.1, OpenXR 1.16.1, XR Hands 1.7.3, Oculus XR 4.5.2.',
  'Dynamic Photo Camera Mini, adapted into a VR-held camera with live preview and PNG capture.',
  'PCVR/OpenXR, with Android/Quest output through IL2CPP and OpenGL ES 3.2.',
];

const devLogs = [
  { href: `${DOCS}/georgi-devlog-04-photo-camera-and-bingo-book.pdf`, label: 'Dev log 04: camera and field guide (PDF)' },
  { href: `${DOCS}/georgi-devlog-05-controller-hands-and-comfort.pdf`, label: 'Dev log 05: controllers, hands, comfort (PDF)' },
  { href: `${DOCS}/georgi-devlog-06-backpack-inventory-prototype.pdf`, label: 'Dev log 06: backpack prototype (PDF)' },
  { href: `${DOCS}/georgi-devlog-08-camera-summon-outlines-and-backpack-polish.pdf`, label: 'Dev log 08: summon and polish (PDF)' },
];

const buildNotePages: DocPage[] = [
  {
    src: `${IMG}/birdwatching-current-build-note-01.svg`,
    alt: 'Birdwatching VR build note summarising the playable prototype',
    width: 1400,
    height: 1000,
    caption: 'Build snapshot, based on the Unity project, the exhibit Q&A and my dev logs.',
  },
  {
    src: `${IMG}/birdwatching-current-build-note-02.svg`,
    alt: 'Birdwatching VR camera and bingo system note',
    width: 1400,
    height: 1000,
    caption: 'Camera capture, bird detection, scoring, saving and the bingo-book loop.',
  },
  {
    src: `${IMG}/birdwatching-current-build-note-03.svg`,
    alt: 'Birdwatching VR interaction and platform note',
    width: 1400,
    height: 1000,
    caption: 'Backpack tools, feeding stick, comfort menu, hand fallback and Quest/PCVR support.',
  },
];

const buildNoteOutline: DocOutlineItem[] = [
  { heading: 'Build snapshot', pageIndex: 0 },
  { heading: 'Camera and bingo', pageIndex: 1 },
  { heading: 'Interaction layer', pageIndex: 2 },
];

const deckPages: DocPage[] = [
  { file: 'birdwatching-slide-01-cover.png', alt: 'Cover slide naming the game and the three-person team', caption: 'Cover slide.' },
  { file: 'birdwatching-slide-02-description.png', alt: 'Description slide: a field biologist with a camera and feeding stick', caption: 'The pitch: a field biologist studying birds with a camera and feeding stick.' },
  { file: 'birdwatching-slide-04-art-style.png', alt: 'Art-style slide with low-poly references and a mood board', caption: 'Low-poly art references, chosen for readable VR silhouettes and a student scope.' },
  { file: 'birdwatching-slide-06-mechanics.png', alt: 'Mechanics slide: camera, feeding, currency and bingo book', caption: 'Original mechanics. Several are now in the Unity prototype.' },
  { file: 'birdwatching-slide-09-research.png', alt: 'Research slide on render textures and in-world cameras', caption: 'The render-texture camera question became the technical spine of the prototype.' },
].map((page) => ({ src: `${IMG}/${page.file}`, alt: page.alt, width: 2880, height: 1620, caption: page.caption }));

export default function BirdwatchingPage() {
  return (
    <CaseStudyShell>
      <CaseStudyHeader
        slug={slug}
        lede={
          <p>
            A Unity VR prototype: explore a low-poly forest, photograph birds and fill a star-rated field guide. On our three-person student
            team I built the main systems: camera capture, bird detection, photo scoring, field-guide progress, backpack tools, comfort
            settings and the builds.
          </p>
        }
        hero={
          <LightboxImage
            src={`${IMG}/birdwatching-bird-closeup-qa-20260505.png`}
            alt="Close-up bird model in the Birdwatching VR Unity prototype"
            width={1009}
            height={706}
            priority
            className="h-auto w-full"
            roundedClassName="rounded-none"
          />
        }
        heroCaption="A bird in the playable Unity prototype."
        glance={glance}
      />

      <CaseStudyBody toc={toc}>
        <Section
          id="loop"
          title="Camera to field guide"
          intro={<p>The core loop: take a photo, the game identifies and scores the bird, and the physical book in your hand updates.</p>}
        >
          <Split
            media={
              <Figure caption="Unity dev footage of the in-hand field guide: open and closed states, anchored pages and page turning.">
                <LightboxLocalVideo
                  src="/videos/projects/birdwatching/birdwatching-bingo-book-footage-2026-04-15.mp4"
                  poster={`${IMG}/birdwatching-bingo-book-footage-20260415-poster.png`}
                  title="Bingo book prototype footage, April 15 2026"
                  triggerLabel="Play field-guide footage"
                  className="aspect-video h-auto w-full object-contain"
                  roundedClassName="rounded-none"
                />
              </Figure>
            }
          >
            <ol className="grid gap-2 pl-5" style={{ listStyle: 'decimal' }}>
              {cameraPipeline.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </Split>
        </Section>

        <Section id="systems" title="What I built">
          <CardGrid items={systems} />
          <DeepDive summary="What's in the current build, and the stack">
            <Prose>
              <h3>Implemented slice</h3>
            </Prose>
            <BulletList items={implementedSlice} />
            <Prose>
              <h3>Stack</h3>
            </Prose>
            <BulletList items={stack} />
          </DeepDive>
        </Section>

        <Section
          id="playtests"
          title="Playtests and showcase"
          intro={
            <>
              <p>
                We demoed Birdwatching VR at the IGDA® Baltimore showcase at the University of Baltimore, alongside other student projects. It
                tested onboarding, controls and comfort: did people know what to do without us hovering?
              </p>
              <p>
                Earlier tests were less graceful. If birds looked grabbable, people tried to grab them, or bonk them with the book. We tightened
                the grab flags so the game reads as observation, not bird harassment.
              </p>
            </>
          }
        >
          <MediaGrid>
            <Figure caption="Live headset demo at the IGDA® Baltimore showcase.">
              <LightboxImage
                src={`${IMG}/birdwatching-igda-showcase-demo-01.jpeg`}
                alt="Birdwatching VR headset demo at the IGDA Baltimore showcase"
                width={1024}
                height={768}
                className="h-auto w-full"
                roundedClassName="rounded-none"
              />
            </Figure>
            <Figure caption="Our demo area, with attendees watching and playing.">
              <LightboxImage
                src={`${IMG}/birdwatching-igda-showcase-demo-02.jpeg`}
                alt="Birdwatching VR demo area at the IGDA Baltimore showcase"
                width={1024}
                height={768}
                className="h-auto w-full"
                roundedClassName="rounded-none"
              />
            </Figure>
          </MediaGrid>
        </Section>

        <Section
          id="logs"
          title="Dev logs and documents"
          intro={<p>Short PDFs I wrote during the semester as the camera, field guide, backpack and comfort work came together.</p>}
        >
          <ActionLinks links={devLogs} />
          <DeepDive summary="Build notes and the original planning deck">
            <MediaGrid>
              <DocViewer
                title="Current build notes"
                description="Playable slice, camera and bingo loop, interaction layer, platform work and rough edges."
                pages={buildNotePages}
                outline={buildNoteOutline}
              />
              <DocViewer
                title="Original planning deck"
                description="The team's early concept, art direction, mechanics and render-texture research."
                pages={deckPages}
              />
            </MediaGrid>
          </DeepDive>
        </Section>
      </CaseStudyBody>

      <CaseStudyFooter slug={slug} />
    </CaseStudyShell>
  );
}
