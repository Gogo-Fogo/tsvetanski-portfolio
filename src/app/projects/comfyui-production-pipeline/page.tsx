import { CardGrid, CaseStudyHeader, CaseStudyShell, DeepDive, Figure, MediaGrid, Prose, Section } from '@/components/case-study/case-study';
import { CaseStudyBody, CaseStudyFooter } from '@/components/case-study/case-study-layout';
import LightboxImage from '@/components/lightbox-image';
import { projectMetadata } from '@/content/project-helpers';

const slug = 'comfyui-production-pipeline' as const;

export const metadata = projectMetadata(
  slug,
  'A repeatable local ComfyUI process for generating, reviewing, cleaning and exporting media for game prototypes, mods and tabletop tools.'
);

const glance = [
  { label: 'My role', value: 'Workflow designer, prompt author and asset-cleanup owner' },
  { label: 'Used in', value: 'Character concepts, material tests, mod assets and presentation media' },
  { label: 'Focus', value: 'Repeatable workflows, queued jobs, review points, metadata and export steps' },
  { label: 'House rule', value: 'Large models, private prompts and generated output stay out of public Git repositories' },
] as const;

const pipelineItems = [
  {
    title: 'Prompt + Workflow Registry',
    body: 'Each job records its workflow, prompt template, output category, and visibility before it enters the generation queue.',
  },
  {
    title: 'Local Job Routing',
    body: 'A router prepares each request, validates its workflow metadata, and stores outputs outside the public repository.',
  },
  {
    title: 'Asset Preparation',
    body: 'Game and mod assets move through mask extraction, layer cleanup, contact sheets, scale checks, UI bakes, and source labeling.',
  },
];

const workflowFamilies = [
  {
    title: 'Ronin Identity Workflow',
    src: '/images/projects/comfyui-production-pipeline/workflow-ronin-identity-graph.png',
    alt: 'ComfyUI workflow screenshot for Ronin identity-lock character iteration',
    caption:
      'A larger character workflow for keeping identity, pose, and style constraints organized across base, advanced, and upscale passes.',
    width: 1920,
    height: 1080,
  },
  {
    title: 'Dahaka Cleanup Graph',
    src: '/images/projects/comfyui-production-pipeline/workflow-dahaka-cleanup-graph.png',
    alt: 'ComfyUI workflow screenshot for Dahaka asset cleanup and mask extraction',
    caption:
      'A compact cleanup graph for background extraction, mask combination, eraser-style repair, alpha joining, and final sheet export.',
    width: 1920,
    height: 1080,
  },
  {
    title: 'Flux/Klein Enhancer',
    src: '/images/projects/comfyui-production-pipeline/workflow-flux-klein-enhancer-graph.png',
    alt: 'ComfyUI workflow screenshot for Flux/Klein enhancement and upscale pipeline',
    caption:
      'Enhancement, denoising, and export are separated into visible stages that can be adjusted independently.',
    width: 1920,
    height: 1080,
  },
];

const workflowCards = [
  {
    title: 'Scene Reveal',
    body: 'Player-visible fantasy scene illustration for campaign moments, routed as a background image job.',
  },
  {
    title: 'Portrait Variant',
    body: 'GM-only character portrait exploration for NPCs, player-facing reveals, and visual canon review.',
  },
  {
    title: 'Location Study',
    body: 'Environment stills focused on layout, landmarks, atmosphere, and table handouts.',
  },
  {
    title: 'Item Or Clue',
    body: 'Close-up prop and clue imagery used when an object needs more attention than a text description can carry.',
  },
];

const lessons = [
  {
    title: 'Make AI output auditable',
    body: 'Each generated asset should record its workflow, storage location, visibility, and publication status.',
  },
  {
    title: 'Do not block live play on rendering',
    body: 'ComfyUI belongs behind queues, approvals, and fallback states. A stalled image job should not freeze a game session or derail a prototype demo.',
  },
  {
    title: 'Separate lookdev from implementation',
    body: 'Generated source material still needs clean layers, readable UI treatment, usable sprites, or a consistent visual direction.',
  },
];

const cleanupStages = [
  {
    title: 'Raw Source Sheet',
    src: '/images/projects/comfyui-production-pipeline/prince-source-sheet.png',
    alt: 'Generated Prince-style asset sheet used as source material for cleanup',
    caption: 'Source sheet: generated/source material is treated as raw production input, not a finished game asset.',
  },
  {
    title: 'Mask Extraction',
    src: '/images/projects/comfyui-production-pipeline/prince-birefnet-cutout.png',
    alt: 'BiRefNet cutout pass for Prince-style asset sheet',
    caption: 'BiRefNet pass: background removal isolates the character and component pieces for downstream cleanup.',
  },
  {
    title: 'Final Clean Sheet',
    src: '/images/projects/comfyui-production-pipeline/prince-final-clean-sheet.png',
    alt: 'Final cleaned Prince-style asset sheet',
    caption: 'Final clean sheet: the output is organized enough to become reference, matte source, or presentation material.',
  },
];

const supportingExamples = [
  {
    title: 'Shogun Character Reference',
    src: '/images/projects/comfyui-production-pipeline/shogun-ronin-footman-portrait.png',
    alt: 'Ronin Footman character portrait from the Shogun production folder',
    caption:
      'A cleaner Shogun production asset used as the kind of source/reference material that can move through local ComfyUI cleanup and variant workflows.',
    width: 832,
    height: 1248,
  },
  {
    title: 'Shogun Environment Source',
    src: '/images/projects/comfyui-production-pipeline/shogun-courtyard-bamboo.png',
    alt: 'Bamboo courtyard background from the Shogun production folder',
    caption:
      'Environment art from the Shogun folder shows how the workflow extends beyond character-only examples.',
    width: 1024,
    height: 1792,
  },
  {
    title: 'Shogun Sprite Cleanup Target',
    src: '/images/projects/comfyui-production-pipeline/shogun-ronin-footman-attack.png',
    alt: 'Ronin Footman attack sprite from the Shogun production folder',
    caption:
      'Sprite/action material is where the pipeline becomes practical: alpha, consistency, scale, and downstream implementation matter more than one flashy render.',
    width: 2048,
    height: 3072,
  },
];

export default function ComfyUiProductionPipelinePage() {
  return (
    <CaseStudyShell>
      <CaseStudyHeader
        slug={slug}
        lede={
          <>
            <p>
              A repeatable ComfyUI process for creating, reviewing, cleaning and exporting media used across my game prototypes, mods and
              tabletop tools.
            </p>
            <p>
              AI-assisted images are labelled as such. My claim is the engineering around generation: workflow metadata, job routing, review
              points, cleanup and getting assets into a project.
            </p>
          </>
        }
        hero={
          <LightboxImage
            src="/images/projects/comfyui-production-pipeline/workflow-ronin-identity-graph.png"
            alt="ComfyUI workflow graph for keeping a character's identity consistent across passes"
            width={1920}
            height={1080}
            priority
            className="h-auto w-full"
            roundedClassName="rounded-none"
          />
        }
        heroCaption="The Ronin identity workflow: reference inputs, prompt conditioning, sampling, cleanup and export as separate stages."
        glance={glance}
      />

      <CaseStudyBody>
        <Section id="pipeline" title="Pipeline shape">
          <CardGrid items={pipelineItems} />
        </Section>

        <Section
          id="cleanup"
          title="One cleanup, start to finish"
          intro={<p>A Prince source sheet goes through mask extraction and cleanup before it&apos;s used in the mod and its presentation.</p>}
        >
          <MediaGrid columns={3}>
            {cleanupStages.map((stage) => (
              <Figure key={stage.src} caption={<><strong>{stage.title}.</strong> {stage.caption}</>}>
                <LightboxImage src={stage.src} alt={stage.alt} width={1532} height={1026} className="h-auto w-full" roundedClassName="rounded-none" />
              </Figure>
            ))}
          </MediaGrid>
        </Section>

        <Section
          id="router"
          title="Local workflow router"
          intro={
            <p>
              Projects submit media requests through a small router. It picks a saved workflow, validates the prompt metadata, sends the job to
              ComfyUI and stores the result outside the public repository. In Black Dice Engine it works like this:
            </p>
          }
        >
          <pre className="overflow-x-auto rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--surface)] p-4 font-mono text-sm leading-relaxed">
            {'GM or AI proposes media\n→ workflow and prompt template selected\n→ GM approves or edits\n→ router prepares the job\n→ ComfyUI renders locally\n→ output stored outside Git'}
          </pre>
          <CardGrid items={workflowCards} columns={2} />
          <DeepDive summary="More workflow graphs and Shogun examples">
            <MediaGrid>
              {workflowFamilies.slice(1).map((family) => (
                <Figure key={family.src} caption={<><strong>{family.title}.</strong> {family.caption}</>}>
                  <LightboxImage src={family.src} alt={family.alt} width={family.width} height={family.height} className="h-auto w-full" roundedClassName="rounded-none" />
                </Figure>
              ))}
            </MediaGrid>
            <MediaGrid columns={3}>
              {supportingExamples.map((example) => (
                <Figure key={example.src} caption={<><strong>{example.title}.</strong> {example.caption}</>}>
                  <LightboxImage src={example.src} alt={example.alt} width={example.width} height={example.height} className="h-auto w-full" roundedClassName="rounded-none" />
                </Figure>
              ))}
            </MediaGrid>
          </DeepDive>
        </Section>

        <Section id="lessons" title="What I learned">
          <CardGrid items={lessons} />
          <Prose>
            <p>
              The pipeline&apos;s output feeds the <a href="/projects/prince-of-persia-warrior-within-mod">Prince of Persia mod</a>,{' '}
              <a href="/projects/shogun-flowers-fall-in-blood">Shogun</a> and <a href="/projects/black-dice-engine">Black Dice Engine</a>.
            </p>
          </Prose>
        </Section>
      </CaseStudyBody>

      <CaseStudyFooter slug={slug} />
    </CaseStudyShell>
  );
}
