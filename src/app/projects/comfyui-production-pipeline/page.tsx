import Breadcrumbs from '@/components/breadcrumbs';
import LightboxImage from '@/components/lightbox-image';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ComfyUI Production Pipeline | Georgi Tsvetanski',
  description:
    'Portfolio case study for ComfyUI-assisted creative production: local media routing, workflow registries, repo boundaries, visual lookdev, and downstream asset cleanup.',
};

const snapshotItems = [
  {
    label: 'Role',
    value: 'AI media pipeline designer, prompt/workflow author, and downstream asset cleanup owner',
  },
  {
    label: 'Used In',
    value: 'Local media routing experiments, character concept passes, texture/material tests, Prince mod cleanup, and portfolio presentation assets',
  },
  {
    label: 'Principle',
    value: 'ComfyUI is a production aid, not the portfolio claim by itself. The value is the pipeline around it.',
  },
  {
    label: 'Boundary',
    value: 'Generated outputs, models, private prompts, and heavy workflows stay outside Git unless they are demo-safe and intentionally published.',
  },
];

const pipelineItems = [
  {
    title: 'Prompt + Workflow Registry',
    body: 'Jobs are described through workflow IDs, visibility labels, output categories, and prompt-template links before anything is sent to the local media stack.',
  },
  {
    title: 'Local-First Routing',
    body: 'Media generation is treated as an asynchronous local job. A router prepares requests, checks workflow metadata, and keeps output paths outside the public repository.',
  },
  {
    title: 'Downstream Cleanup',
    body: 'For game/mod assets, generated lookdev still needs matte extraction, layer cleanup, contact sheets, scale checks, UI bakes, and honest labeling before it belongs in a project.',
  },
];

const workflowFamilies = [
  {
    title: 'Local Image Edit + RMBG',
    src: '/images/projects/comfyui-production-pipeline/workflow-local-image-edit-rmbg-graph.png',
    alt: 'ComfyUI workflow screenshot for local image editing with RMBG background removal',
    caption:
      'A local image-edit graph combining prompt conditioning, sampling, decode, and RMBG cleanup so outputs can become cutouts instead of loose renders.',
    width: 1920,
    height: 1080,
  },
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
      'A refinement/upscale workflow showing how enhancement, denoise, and export stages are separated instead of jammed into one opaque prompt.',
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
    body: 'Generated media should keep enough metadata to explain what workflow produced it, where it is stored, who can see it, and whether it is safe to publish.',
  },
  {
    title: 'Do not block live play on rendering',
    body: 'ComfyUI belongs behind queues, approvals, and fallback states. A stalled image job should not freeze a game session or derail a prototype demo.',
  },
  {
    title: 'Separate lookdev from implementation',
    body: 'A strong generated image is only the beginning. The actual craft is turning it into clean layers, readable UI, usable sprites, or a consistent visual direction.',
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
    title: 'Character Output Check',
    src: '/images/projects/comfyui-production-pipeline/ronin-action-variant.png',
    alt: 'Ronin action variant generated from a local image-edit workflow',
    caption:
      'Output checks sit beside the graph screenshots to show what a workflow can produce, without making the final render the whole portfolio claim.',
    width: 2048,
    height: 3072,
  },
  {
    title: 'Material Detail Pass',
    src: '/images/projects/comfyui-production-pipeline/darkmetal-scratches-normal.png',
    alt: 'Dark metal scratches normal map used for material experiments',
    caption:
      'Material tests are less flashy than character art, but they matter for game-feel: surface noise, scratches, normals, and bake cleanup.',
    width: 1024,
    height: 1024,
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
            A cross-project case study for how I use ComfyUI in practice: not as a magic image button, but as part of a controlled production
            pipeline for concept exploration, dark fantasy branding, tabletop scene generation, character lookdev, and downstream game-asset cleanup.
          </p>
        </header>

        <section className="flex flex-col gap-12 md:gap-16">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-strong)]">
              <LightboxImage
                src="/images/projects/comfyui-production-pipeline/workflow-local-image-edit-rmbg-graph.png"
                alt="ComfyUI local image edit and RMBG workflow screenshot"
                width={1920}
                height={1080}
                className="h-auto w-full object-contain"
                roundedClassName="rounded-none"
                popupCaption="Local image-edit and RMBG workflow captured from ComfyUI: prompt conditioning, sampling, decode, and background removal."
              />
            </div>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Why This Gets Its Own Page</h2>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                ComfyUI shows up across multiple projects, but the interesting portfolio story is not that I generated images. It is that I built a
                repeatable way to use local generative media responsibly: workflow metadata, safe repository boundaries, visibility labels, approval
                points, and post-processing steps that turn rough output into usable project material across games, prototypes, and visual systems.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {snapshotItems.map((item) => (
              <div key={item.label} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow)]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">{item.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--foreground)]">{item.value}</p>
              </div>
            ))}
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
              These are actual ComfyUI graphs captured from saved workflows. The point is not only the image at the end; it is the repeatable structure:
              loaders, prompts, masks, samplers, cleanup nodes, upscale branches, and export boundaries.
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
              The Prince workflow is one concrete cleanup example, not the whole page. It shows the practical part: a source image moves through extraction
              and final organization before it becomes useful for a mod, pitch page, or staged visual system.
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
                  className="h-96 w-full object-cover"
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
                ComfyUI works best for me when it is treated as a local media service behind a small routing layer. A project prepares media jobs, resolves
                workflow IDs, checks prompt-template metadata, and stores generated files outside the public repository.
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
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Honest Disclosure</h2>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                My portfolio pages separate system ownership from AI-assisted visual support. If ComfyUI helped with lookdev, I label that honestly and
                focus the claim on what I designed, built, routed, cleaned, integrated, or tested.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                That distinction matters. A generated image can communicate direction, but it does not replace engineering, interaction design, data modeling,
                UI implementation, or asset-production judgment.
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
