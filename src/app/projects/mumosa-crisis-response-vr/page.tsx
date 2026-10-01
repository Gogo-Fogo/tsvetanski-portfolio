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
import type { DocPage } from '@/components/doc-viewer';
import LightboxImage from '@/components/lightbox-image';
import { projectMetadata } from '@/content/project-helpers';

const slug = 'mumosa-crisis-response-vr' as const;

export const metadata = projectMetadata(
  slug,
  'Graduate client project for the Army Research Laboratory: a redesigned evidence dashboard and an Unreal prototype that ties reports, images, timelines and spatial evidence together.'
);

const IMG = '/images/projects/mumosa-crisis-response-vr';

const glance = [
  { label: 'My role', value: 'Led research and spatial prototyping; contributed to the dashboard information architecture' },
  { label: 'Team', value: 'Three-person graduate team: Georgi Tsvetanski, Kelly Ehrlich and Kamilah S.' },
  { label: 'Client', value: 'DEVCOM Army Research Laboratory (ARL), via a University of Baltimore interaction design course' },
  { label: 'Delivered', value: 'Literature review, paper prototype, Axure dashboard, Unreal proof of concept, client report' },
] as const;

const toc = [
  { id: 'brief', label: 'The brief' },
  { id: 'unreal', label: 'What I built in Unreal' },
  { id: 'paper-prototype', label: 'Paper prototype' },
  { id: 'dashboard', label: "The team's dashboard redesign" },
  { id: 'research', label: 'Research' },
  { id: 'outcome', label: 'Outcome' },
];

const clientNeedItems = [
  {
    title: 'Short term',
    body: 'Help investigators and instructors compare reports, images, events and timelines after a crisis.',
  },
  {
    title: 'Long term',
    body: 'Extend the same structure to incoming evidence, changing timelines, hazard alerts and role-specific views.',
  },
  {
    title: 'Our response',
    body: 'Put questions, sources, conflicts, timelines and spatial context in one evidence workspace.',
  },
];

const unrealItems = [
  {
    title: 'PC first, VR ready',
    body: 'Keyboard-and-mouse walkthrough first; OpenXR follows once the core interaction is proven.',
  },
  {
    title: 'Evidence markers',
    body: 'Reusable C++ markers store the claim, confidence, timeline state, discrepancies and linked sources.',
  },
  {
    title: 'Source-grounded panel',
    body: 'Selecting a marker opens its interpretation, confidence, timeline context and direct source links.',
  },
  {
    title: 'Hazards and timeline states',
    body: 'Toggleable danger, smoke and uncertainty volumes. A four-state timeline (Before → Derailment → Smoke Spread → Response) changes which markers and hazards show.',
  },
  {
    title: 'Dashboard handoff',
    body: 'The scene opens with a banner naming the dashboard question and focus object it was launched from. "Return to Dashboard" logs a mock payload of findings.',
  },
];

const paperPrototypeItems = [
  {
    title: 'Scene first',
    body: 'A panoramic sketch of the site so investigators understand place and hazards before any interface.',
  },
  {
    title: 'Evidence in context',
    body: 'Sticky-note overlays stand in for AI summaries, timestamps and next actions, anchored to the spot being inspected.',
  },
  {
    title: 'Testable controls',
    body: 'Annotated paper controllers to test teleporting, source reveal, LiDAR measurement and zoom/select before writing software.',
  },
];

const interactionModel = [
  'Teleport between scene zones instead of navigating menus.',
  'A visible "show source" action, so every AI summary leads back to its evidence.',
  'LiDAR measurement, zoom and alternate views only for deeper inspection.',
  'VR is a review mode paired with the web dashboard, not a replacement for it.',
];

const dashboardItems = [
  {
    title: 'Incident + question entry',
    body: 'Replaced the role picker with natural-language questions: pick an incident and timeframe, then ask from suggested prompts.',
  },
  {
    title: 'Answer workspace',
    body: 'The AI answer with ranked confidence, text evidence, visual evidence and source metadata, all on one screen.',
  },
  {
    title: 'Evidence comparison',
    body: 'Side-by-side text and image sources with discrepancy callouts, source chains and investigator notes.',
  },
  {
    title: 'Timeline + event map',
    body: 'The most revised screen: a timeline with event nodes, a schema-backed relationship map with a legend, and a detail panel for participants, sources and conflicts.',
  },
  {
    title: 'Simulation evidence',
    body: 'The spatial review screen, renamed from "VR Scene Review" to match ARL\'s paper: 3D reconstruction with question-driven annotations and linked sources.',
  },
];

const teamDecisions = [
  {
    title: 'Information architecture reset',
    body: 'From a generic event overview to a task flow: Ask → Answer → Compare evidence → Timeline + event map → Simulation evidence.',
  },
  {
    title: 'Source-grounded AI',
    body: 'No AI answer without source cues: confidence badges, ranked evidence scores and discrepancy warnings on every answer card.',
  },
  {
    title: 'Timeline critique',
    body: 'The first timeline had no legend and unclear nodes. The revision added a legend, source-linked nodes, participant roles and a detail panel.',
  },
  {
    title: 'Investigator notes',
    body: 'My teammates carried forward note-taking and saved annotations so findings survive deeper review.',
  },
];

const researchItems = [
  {
    title: 'Cognitive load first',
    body: 'Responders and investigators already juggle too many information streams. The interface should reduce fragmentation and noise.',
  },
  {
    title: 'AI claims need sources',
    body: 'Every AI summary should link to the report, image, event or scene evidence behind it.',
  },
  {
    title: 'Post-crisis review first',
    body: 'Reconstruction and training are the clearest near-term uses for documents, event relationships and 3D scene review.',
  },
];

const deliverables = [
  'Literature review (mine): situational awareness, cognitive load and multimodal crisis-response heuristics.',
  'Low-fidelity team prototype: dashboard wireframes, my VR paper prototype, and a usability-test script.',
  'Revised five-screen dashboard and Axure prototype: I contributed the Axure build spec, design system and evidence-review interaction model.',
  'Unreal spatial review proof of concept (my lane): evidence markers, source-grounded UI, hazard context and a mock dashboard handoff.',
  'Client report and final presentation: research, prototypes, testing approach, lessons and recommendations.',
];

const usabilityTasks = [
  {
    title: 'Task 1: Orientation',
    body: 'Explore the dashboard freely, then explain what you would do first to understand the event.',
  },
  {
    title: 'Task 2: Timeline',
    body: 'Find when the event happened and reconstruct the sequence leading up to it.',
  },
  {
    title: 'Task 3: Evidence',
    body: 'Locate supporting evidence and describe how you would inspect the scene more closely.',
  },
];

const pipelineItems = [
  {
    title: 'Fidelity tiers',
    body: 'Active response needs answers in minutes, so low-fidelity Gaussian splats (about 5–15 min) show danger zones fast. Investigation uses full photogrammetry (about 30 min to 2+ hours).',
  },
  {
    title: 'Raw scans in Nanite',
    body: 'Nanite renders messy photogrammetry at full detail without retopology. The prototype uses photoscanned Megascans debris to show the quality such a pipeline would give.',
  },
  {
    title: 'Query to scene',
    body: 'A dashboard question goes to the AI, which picks relevant markers and highlights them in Unreal. The prototype mocks this with structured JSON in the shape a real query would return.',
  },
];

const litReviewPages: DocPage[] = Array.from({ length: 10 }, (_, index) => ({
  src: `${IMG}/mumosa-lit-review-p${String(index + 1).padStart(2, '0')}.png`,
  alt: `Page ${index + 1} of Georgi Tsvetanski's MUMOSA literature review`,
  width: 1041,
  height: 1347,
  caption:
    index === 0
      ? 'Opening page of my literature review.'
      : index === 9
        ? 'Closing page with references.'
        : undefined,
}));

export default function MumosaCrisisResponsePage() {
  return (
    <CaseStudyShell>
      <CaseStudyHeader
        slug={slug}
        lede={
          <p>
            A graduate client project for the Army Research Laboratory. Our team redesigned ARL&apos;s MUMOSA dashboard so analysts can check
            AI answers against reports, images, timelines and reconstructed scenes after a crisis. I led the research and the spatial
            prototype, and built the Unreal proof of concept.
          </p>
        }
        actions={
          <ActionLinks
            links={[
              { href: 'https://youtu.be/88Qk5ThLEmc', label: 'Watch the Unreal prototype', primary: true },
              { href: '/documents/projects/mumosa-crisis-response-vr/georgi-tsvetanski-mumosa-literature-review.pdf', label: 'My literature review (PDF)' },
            ]}
          />
        }
        hero={
          <LightboxImage
            src={`${IMG}/mumosa-hero-scene.jpg`}
            alt="Unreal proof of concept: an evidence marker anchored in the reconstructed MUMOSA scene"
            width={1920}
            height={896}
            priority
            className="h-auto w-full"
            roundedClassName="rounded-none"
            popupCaption="My Unreal proof of concept: a source-grounded evidence marker anchored in the reconstructed scene."
          />
        }
        heroCaption="My Unreal proof of concept: an evidence marker anchored in the reconstructed scene."
        glance={glance}
      />

      <CaseStudyBody toc={toc}>
        <Section
          id="brief"
          title="The brief"
          intro={
            <>
              <p>
                MUMOSA (MUlti-MOdal Situation Awareness) is ARL&apos;s research dashboard for making sense of a crisis from text reports,
                images, event structure and 3D reconstructions. Our course team was asked to recommend how its interaction design should
                evolve.
              </p>
              <p>
                Analysts ask a question, check the supporting evidence, place events on a timeline, and open a reconstructed scene when
                location matters. The same flow should later accept new evidence while an incident is still unfolding.
              </p>
            </>
          }
        >
          <CardGrid items={clientNeedItems} />
          <Figure caption="ARL's published MUMOSA dashboard, our starting point. Figure from Lukin et al., “MUMOSA, Interactive Dashboard for MUlti-MOdal Situation Awareness” (FuturED workshop, 2024).">
            <LightboxImage
              src={`${IMG}/mumosa-banner.png`}
              alt="ARL's original MUMOSA dashboard: multimodal Q/A, textual and visual evidence, schema and simulation evidence"
              width={995}
              height={645}
              className="h-auto w-full bg-white"
              roundedClassName="rounded-none"
              popupCaption="ARL's published MUMOSA dashboard (Lukin et al., FuturED 2024). Not our work; shown as the starting point."
            />
          </Figure>
        </Section>

        <Section
          id="unreal"
          title="What I built in Unreal"
          intro={
            <p>
              I turned the paper interaction model into a PC-first Unreal proof of concept. Analysts select evidence in the scene, see its
              confidence and timeline context, and follow it back to the source.
            </p>
          }
        >
          <CardGrid items={unrealItems} />
          <MediaGrid>
            <Figure caption="Selecting a marker opens its interpretation while the scene stays visible.">
              <LightboxImage
                src={`${IMG}/mumosa-vr-analysis-popup.png`}
                alt="Analysis popup attached to a scene marker in the Unreal prototype"
                width={1920}
                height={1080}
                className="h-auto w-full"
                roundedClassName="rounded-none"
              />
            </Figure>
            <Figure caption="Evidence selection links a spatial marker to its source trail.">
              <LightboxImage
                src={`${IMG}/mumosa-vr-evidence-selection.png`}
                alt="Selected spatial evidence in the Unreal prototype"
                width={1920}
                height={1080}
                className="h-auto w-full"
                roundedClassName="rounded-none"
              />
            </Figure>
          </MediaGrid>
          <DeepDive summary="How the full pipeline would work (planned, not built)">
            <Prose>
              <p>
                The proof of concept covers the review layer. This is how a real deployment would get evidence into it: drones, robots and
                body cameras capture the scene, AI turns it into grounded evidence, and Unreal shows it.
              </p>
            </Prose>
            <CardGrid items={pipelineItems} />
          </DeepDive>
        </Section>

        <Section
          id="paper-prototype"
          title="Paper prototype"
          intro={
            <p>
              Before any software, I made a low-fidelity VR prototype: a paper headset window, annotated controllers, a sketched crisis site,
              and evidence notes that appear when the investigator asks to verify a claim. It tested the questions that mattered first. Can
              people orient themselves? Can they check an AI summary against evidence? Does it stay simple?
            </p>
          }
        >
          <Split
            media={
              <Figure caption="A paper visor frames the crisis scene; hand-drawn controllers map teleporting, evidence reveal and inspection.">
                <LightboxImage
                  src={`${IMG}/mumosa-prototype-headset-view.jpg`}
                  alt="Paper VR prototype with controller labels and a headset window onto the crisis scene"
                  width={3806}
                  height={2160}
                  className="h-auto w-full"
                  roundedClassName="rounded-none"
                />
              </Figure>
            }
          >
            <p>
              <strong>The interaction model stayed modest on purpose:</strong>
            </p>
            <BulletList items={interactionModel} />
          </Split>
          <CardGrid items={paperPrototypeItems} />
          <MediaGrid>
            <Figure caption="Three evidence notes anchored to the scene, each a grounded finding with a path back to its source.">
              <LightboxImage
                src={`${IMG}/mumosa-prototype-evidence-sticky-notes.jpg`}
                alt="Paper prototype scene with three sticky notes showing grounded evidence findings"
                width={2991}
                height={2160}
                className="h-auto w-full"
                roundedClassName="rounded-none"
              />
            </Figure>
            <Figure caption="The active-fire note sits beside the burning structure instead of in a separate panel.">
              <LightboxImage
                src={`${IMG}/mumosa-prototype-fire-evidence.jpg`}
                alt="Paper VR prototype showing the active fire evidence card next to the burning structure"
                width={2880}
                height={2160}
                className="h-auto w-full"
                roundedClassName="rounded-none"
              />
            </Figure>
          </MediaGrid>
          <DeepDive summary="Scene sketches">
            <MediaGrid>
              <Figure caption="Base panorama: street, damaged area, vehicle, civilian, vegetation and active fire.">
                <LightboxImage
                  src={`${IMG}/mumosa-prototype-scene-sketch.jpg`}
                  alt="Panoramic scene sketch for the VR paper prototype"
                  width={2772}
                  height={2160}
                  className="h-auto w-full"
                  roundedClassName="rounded-none"
                />
              </Figure>
              <Figure caption="Low-visibility variant to test orientation when the scene is harder to read.">
                <LightboxImage
                  src={`${IMG}/mumosa-prototype-smoke-scene.png`}
                  alt="Smoke-heavy crisis scene sketch for the VR paper prototype"
                  width={602}
                  height={402}
                  className="h-auto w-full"
                  roundedClassName="rounded-none"
                />
              </Figure>
            </MediaGrid>
          </DeepDive>
        </Section>

        <Section
          id="dashboard"
          title="The team's dashboard redesign"
          intro={
            <p>
              Spatial review only works as one mode of a larger investigation, so the team also reworked the flat-screen dashboard into a
              five-screen question-and-answer workspace. My part was the information architecture, the Axure build spec, the design system and
              the evidence-review interaction model.
            </p>
          }
        >
          <CardGrid items={dashboardItems} />
          <DeepDive summary="Key team decisions and the planning board">
            <CardGrid items={teamDecisions} columns={2} />
            <MediaGrid>
              <Figure caption="Team planning board from the low-fidelity phase: dashboard ideas and the VR paper-prototype strip, developed in parallel.">
                <LightboxImage
                  src={`${IMG}/mumosa-figjam-board-overview.png`}
                  alt="Team planning board with dashboard wireframes, inspiration and the VR paper prototype section"
                  width={1041}
                  height={994}
                  className="h-auto w-full"
                  roundedClassName="rounded-none"
                />
              </Figure>
              <Figure caption="The VR cluster of the board: cognitive goals, risks (hardware cost, motion sickness, data streaming) and mitigations.">
                <LightboxImage
                  src={`${IMG}/mumosa-planning-board-vr-cluster.png`}
                  alt="Planning board VR cluster with cognitive goals, risks and mitigations"
                  width={1215}
                  height={1022}
                  className="h-auto w-full"
                  roundedClassName="rounded-none"
                />
              </Figure>
            </MediaGrid>
          </DeepDive>
        </Section>

        <Section
          id="research"
          title="Research"
          intro={
            <p>
              My literature review grounded the redesign. It covers who uses the system, situational-awareness and cognitive-load
              heuristics, and multimodal crisis-response design. Three findings shaped the direction:
            </p>
          }
        >
          <CardGrid items={researchItems} />
          <DocViewer
            title="My MUMOSA literature review"
            description="Ten pages: user groups, heuristics, multimodal crisis-response design, and what it meant for our prototype."
            pages={litReviewPages}
          />
        </Section>

        <Section
          id="outcome"
          title="Outcome"
          intro={
            <p>
              A literature review and a paper sketch became a complete client package. The through-line is source grounding: whether someone
              reads an AI answer, compares images, rebuilds a timeline or steps into a 3D scene, the system shows what evidence supports the
              claim and where uncertainty remains.
            </p>
          }
        >
          <BulletList items={deliverables} />
          <DeepDive summary="The usability test we planned">
            <Prose>
              <p>The low-fidelity package included a usability script for an incident-analysis scenario:</p>
            </Prose>
            <CardGrid items={usabilityTasks} />
          </DeepDive>
        </Section>
      </CaseStudyBody>

      <CaseStudyFooter slug={slug} />
    </CaseStudyShell>
  );
}
