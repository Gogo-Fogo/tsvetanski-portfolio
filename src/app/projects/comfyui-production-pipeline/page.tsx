import Breadcrumbs from '@/components/breadcrumbs';
import LightboxImage from '@/components/lightbox-image';
import ProjectAtAGlance from '@/components/project-at-a-glance';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ComfyUI Production Pipeline',
  description:
    'A repeatable ComfyUI workflow for generating, reviewing, cleaning, and exporting media for games and prototypes.',
};

const snapshotItems = [
  {
    label: 'Role',
    value: 'Workflow designer, prompt author, and asset-cleanup owner',
  },
  {
    label: 'Used In',
    value: 'Character concepts, material tests, mod assets, and presentation media',
  },
  {
    label: 'Technical Focus',
    value: 'Repeatable workflows, queued jobs, review points, metadata, and export steps',
  },
  {
    label: 'Repository Rule',
    value: 'Large models, private prompts, and generated output stay outside public Git repositories',
  },
];

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
    <main className="min-h-screen bg-[var(--background)] p-8 font-sans text-[var(--foreground)] md:p-24">
      <div className="mx-auto max-w-5xl">
        <header className="mb-16">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Projects', href: '/career' },
              { label: 'ComfyUI Production Pipeline' },
            ]}
            className="mb-4"
          />
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">
            AI Media Pipeline · Local Workflow Routing · Game Asset Lookdev
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight">ComfyUI Production Pipeline</h1>
          <p className="mt-3 max-w-3xl text-[var(--muted)]">
            I designed a repeatable ComfyUI process for creating, reviewing, cleaning, and exporting media used across game prototypes, mods, and
            tabletop tools.
          </p>
        </header>

        <section className="flex flex-col gap-12 md:gap-16">
          <ProjectAtAGlance items={snapshotItems} />

          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-strong)]">
              <LightboxImage
                src="/images/projects/comfyui-production-pipeline/workflow-ronin-identity-graph.png"
                alt="ComfyUI Ronin identity workflow screenshot"
                width={1920}
                height={1080}
                className="h-auto w-full object-contain"
                roundedClassName="rounded-none"
                popupCaption="Ronin workflow with reference inputs, prompt conditioning, sampling, cleanup, and export stages."
              />
            </div>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Technical Focus</h2>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                The engineering work sits around image generation: recording workflow metadata, keeping private and public files separate, routing jobs,
                adding review points, and preparing selected output for use in a project.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Pipeline Shape</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {pipelineItems.map((item) => (
                <div key={item.title} className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
                  <p className="text-sm font-semibold text-[var(--foreground)]">{item.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Workflow Screenshots</h2>
            <p className="mb-6 max-w-3xl text-sm leading-relaxed text-[var(--muted)]">
              Saved ComfyUI graphs show the reusable stages behind each output: references, prompts, masks, samplers, cleanup, upscaling, and export.
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {workflowFamilies.map((family) => (
                <div key={family.title} className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--background)] shadow-[var(--shadow)]">
                  <LightboxImage
                    src={family.src}
                    alt={family.alt}
                    width={family.width}
                    height={family.height}
                    className="h-80 w-full bg-[#050608] object-contain"
                    roundedClassName="rounded-none"
                    popupCaption={family.caption}
                  />
                  <div className="border-t border-[var(--border)] p-4">
                    <p className="text-sm font-semibold text-[var(--foreground)]">{family.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{family.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">One Cleanup Example</h2>
            <p className="mb-6 max-w-3xl text-sm leading-relaxed text-[var(--muted)]">
              A Prince source image moves through mask extraction and cleanup before it is organized for use in the mod and its presentation materials.
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {cleanupStages.map((stage) => (
                <div key={stage.title} className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--background)] shadow-[var(--shadow)]">
                  <LightboxImage
                    src={stage.src}
                    alt={stage.alt}
                    width={1532}
                    height={1026}
                    className="h-64 w-full object-cover"
                    roundedClassName="rounded-none"
                    popupCaption={stage.caption}
                  />
                  <div className="border-t border-[var(--border)] p-4">
                    <p className="text-sm font-semibold text-[var(--foreground)]">{stage.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{stage.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
            {supportingExamples.map((example) => (
              <div key={example.title} className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)]">
                <LightboxImage
                  src={example.src}
                  alt={example.alt}
                  width={example.width}
                  height={example.height}
                  className="h-[34rem] w-full bg-[#050608] object-contain"
                  roundedClassName="rounded-none"
                  popupCaption={example.caption}
                />
                <div className="border-t border-[var(--border)] p-5">
                  <p className="text-sm font-semibold text-[var(--foreground)]">{example.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{example.caption}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Local Workflow Router</h2>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                Projects submit media requests through a small routing layer. The router selects a saved workflow, validates prompt metadata, sends the
                job to ComfyUI, and stores the result outside the public repository.
              </p>
              <div className="mt-6 rounded-xl border border-[var(--border)] bg-[var(--background)] p-5 font-mono text-xs leading-relaxed text-[var(--muted)]">
                GM / AI proposes media<br />
                -&gt; workflow + prompt template selected<br />
                -&gt; GM approves or edits<br />
                -&gt; Comfy router prepares job<br />
                -&gt; ComfyUI renders locally<br />
                -&gt; output stored outside Git
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {workflowCards.map((item) => (
                <div key={item.title} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow)]">
                  <p className="text-sm font-semibold text-[var(--foreground)]">{item.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">AI Use And Ownership</h2>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                I label ComfyUI-assisted visuals and distinguish them from the systems, interfaces, routing, cleanup, integration, and testing I completed.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                Generated images support visual direction. My portfolio claims focus on the production decisions and implementation required to make those
                images usable.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)]">
              <LightboxImage
                src="/images/projects/prince-of-persia-warrior-within-mod/dahaka-puppet-contact-sheet-current.png"
                alt="Dahaka puppet contact sheet showing downstream asset preparation"
                width={1140}
                height={1028}
                className="h-auto w-full object-cover"
                roundedClassName="rounded-none"
                popupCaption="Downstream production contact sheet: generated/source imagery becomes staged layers and puppet-ready assets."
              />
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">What I Learned</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {lessons.map((item) => (
                <div key={item.title} className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
                  <p className="text-sm font-semibold text-[var(--foreground)]">{item.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
