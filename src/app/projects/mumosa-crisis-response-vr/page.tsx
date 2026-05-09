import Breadcrumbs from '@/components/breadcrumbs';
import DocViewer from '@/components/doc-viewer';
import type { DocPage } from '@/components/doc-viewer';
import LightboxImage from '@/components/lightbox-image';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MUMOSA Crisis Response VR Study | Georgi Tsvetanski',
  description:
    'Graduate client project tied to DEVCOM Army Research Laboratory and MUMOSA: low-fidelity VR paper prototype, revised multimodal Q/A workspace dashboard, Axure digital prototype, and Unreal Engine spatial simulation implementation.',
};

const snapshotItems = [
  {
    label: 'Role',
    value: 'Literature-review author, VR paper-prototype owner, and Unreal spatial simulation lead for the team\'s MUMOSA redesign',
  },
  {
    label: 'Team',
    value: 'Three-person graduate team: Georgi Tsvetanski, Kelly Ehrlich, and Kamilah S.',
  },
  {
    label: 'Prototype Stage',
    value: 'Low-fidelity complete. Digital prototype split: Axure flatscreen dashboard (team) + Unreal Engine spatial review (my lane)',
  },
  {
    label: 'Focus',
    value: 'This case study centers my lanes — VR paper prototyping and Unreal spatial simulation — while still crediting the flatscreen dashboard work developed with my teammates',
  },
];

const researchItems = [
  {
    title: 'Cognitive Load Comes First',
    body: 'My lit review kept returning to the same problem: responders and investigators are already overloaded. The interface has to reduce fragmentation, not add another noisy control room.',
  },
  {
    title: 'Trust Needs Grounding',
    body: 'The strongest heuristic in the MUMOSA paper is still the right one for our coursework too: every AI summary needs a visible path back to the source evidence.',
  },
  {
    title: 'Resolve Phase Is The Best Fit',
    body: 'The most believable use case stayed the same through prototyping: post-crisis reconstruction and training, where schema graphs, documents, and 3D review become genuinely useful.',
  },
];

const prototypeHighlightItems = [
  {
    title: 'Scene-First Orientation',
    body: 'I started with a panoramic sketch of the site so investigators can understand place and hazard layout before chasing UI chrome.',
  },
  {
    title: 'Evidence In Context',
    body: 'The sticky-note overlays simulate AI summaries, timestamps, and next actions anchored directly to the place being inspected.',
  },
  {
    title: 'Low-Tech, Testable Controls',
    body: 'Annotated paper controllers let us test teleportation, source reveal, LiDAR measurement, and zoom/select behavior before building software.',
  },
];

const interactionModelItems = [
  'Teleport between scene zones instead of forcing the user through menu-heavy navigation.',
  'Use a visible "show source" action so AI summaries can always lead back to evidence.',
  'Reserve LiDAR measurement, zoom, and alternate view controls for deeper inspection moments.',
  'Keep VR as a review surface paired with the web dashboard, not a replacement for the broader system.',
];

const revisedDashboardItems = [
  {
    title: 'Incident + Question Entry',
    body: 'Replaced the old role-picker-first flow with a natural-language Q/A entry. Users select an incident and timeframe, then ask a grounded question from suggested prompts.',
  },
  {
    title: 'Q/A Results Workspace',
    body: 'The central screen shows the AI answer with ranked confidence, textual evidence panel, visual evidence panel, and source metadata — all visible without clicking away.',
  },
  {
    title: 'Evidence Comparison',
    body: 'Side-by-side textual and visual source review with discrepancy callouts, source chains, and investigator notes. Every AI claim is traceable back to source material.',
  },
  {
    title: 'Timeline + Event Map',
    body: 'The most heavily revised screen. A horizontal timeline with event nodes, a schema-backed event relationship map with legend, and a selected-node detail panel showing participants, sources, and conflicts.',
  },
  {
    title: 'Simulation Evidence',
    body: 'The spatial review page, relabeled from "VR Scene Review" to match the MUMOSA paper. Shows 3D reconstruction with question-driven annotation overlays and linked source panels.',
  },
];

const teamDashboardItems = [
  {
    title: 'Information Architecture Reset',
    body: 'The flatscreen direction moved from a generic event overview dashboard to a structured Q/A workspace: Ask → Q/A Results → Compare Evidence → Timeline + Event Map → Simulation Evidence. Each screen has a clear investigative purpose.',
  },
  {
    title: 'Source-Grounded AI',
    body: 'The revised dashboard never shows an AI answer without attached source cues. Confidence badges, ranked evidence scores, and discrepancy warnings are built into every answer card.',
  },
  {
    title: 'Timeline/Schema Critique Response',
    body: 'The original timeline view had no legend, unclear node meaning, and hard-to-follow side panels. The revision adds a full legend, source-linked event nodes, participant roles (agent/causer, affected entity, location), and a selected-node detail panel.',
  },
  {
    title: 'Investigator Notes',
    body: 'My teammates also carried forward the note-taking and saved annotations concept so investigators can preserve findings during deeper review.',
  },
];

const unrealPlanItems = [
  {
    title: 'PC-First, VR-Ready',
    body: 'The spatial module starts as a keyboard-and-mouse walkthrough using Unreal\'s First Person C++ template. VR/OpenXR support comes after the core interaction model is proven.',
  },
  {
    title: 'Evidence Marker System',
    body: 'A reusable C++ actor class stores marker ID, label, AI interpretation, confidence level, status, timeline event, discrepancy note, and linked source records. Clicking a marker selects it and opens the evidence panel.',
  },
  {
    title: 'Source-Grounded Panel',
    body: 'Every marker opens a UI panel showing the AI interpretation, linked sources, confidence badge, timeline context, and any discrepancy warnings. The "show source" action is the primary interaction, not an afterthought.',
  },
  {
    title: 'Hazard Overlay + Timeline States',
    body: 'Translucent danger/smoke/uncertainty volumes can be toggled on and off. A 4-state timeline controller (Before → Derailment → Smoke Spread → Response) changes which markers and hazards are visible.',
  },
  {
    title: 'Dashboard Handoff Mock',
    body: 'The simulation starts with a banner showing it was launched from the dashboard with a specific focus object and question. A "Return to Dashboard" button logs a mock payload of findings.',
  },
];

const usabilityTestItems = [
  {
    title: 'Task 1: Initial Orientation',
    body: 'Participants first explore the dashboard freely, then explain what they would do first to understand the event. This tests whether overview information and entry points are discoverable.',
  },
  {
    title: 'Task 2: Timeline Reconstruction',
    body: 'The script asks users to find when the event happened and reconstruct the sequence leading up to it, focusing on timeline discoverability and information hierarchy.',
  },
  {
    title: 'Task 3: Evidence And Deeper Investigation',
    body: 'Participants are asked to locate supporting evidence and describe how they would inspect the scene more closely, which directly probes whether VR mode and deeper analysis tools feel legible.',
  },
];

const deliverableItems = [
  {
    label: 'Completed',
    title: 'Literature Review',
    body: 'Authored research document grounding the redesign in situational awareness, cognitive load, and multimodal crisis-response heuristics.',
  },
  {
    label: 'Completed',
    title: 'Low-Fidelity Team Prototype',
    body: 'The low-fi package included dashboard wireframes, the VR paper prototype, and a usability-testing script for an incident-analysis scenario.',
  },
  {
    label: 'Completed',
    title: 'Revised Dashboard Spec + Axure Prototype',
    body: 'The team finalized the revised 5-screen Q/A workspace flow. I contributed the Axure build spec, design system, and evidence-review interaction model for the digital prototype.',
  },
  {
    label: 'In Progress',
    title: 'Unreal Spatial Simulation (My Lane)',
    body: 'Building a PC-first Unreal Engine 5.7 spatial review prototype with evidence markers, source-grounded UI, hazard overlays, timeline states, and a mock dashboard handoff flow.',
  },
  {
    label: 'Next',
    title: 'Testing + Presentation',
    body: 'Run short usability tests, refine the timeline/event map view, polish the Unreal scene, and prepare the final class presentation.',
  },
];

const litReviewPages: DocPage[] = Array.from({ length: 10 }, (_, index) => ({
  src: `/images/projects/mumosa-crisis-response-vr/mumosa-lit-review-p${String(index + 1).padStart(2, '0')}.png`,
  alt: `Page ${index + 1} of Georgi Tsvetanski's MUMOSA literature review`,
  width: 1041,
  height: 1347,
  caption:
    index === 0
      ? 'Opening page of my literature review for the MUMOSA coursework project.'
      : index === 9
        ? 'Closing page of the literature review with references and supporting sources.'
        : undefined,
}));

const referenceLinks = [
  {
    href: 'https://github.com/Gogo-Fogo/MUMOSA',
    label: 'GitHub Repository',
  },
  {
    href: '/documents/projects/mumosa-crisis-response-vr/mumosa-client-paper.pdf',
    label: 'Open Client Paper',
  },
  {
    href: '/documents/projects/mumosa-crisis-response-vr/brief-and-assignment-scope.md',
    label: 'Open Assignment Brief',
  },
  {
    href: '/documents/projects/mumosa-crisis-response-vr/georgi-tsvetanski-mumosa-literature-review.pdf',
    label: 'Download Lit Review PDF',
  },
];

export default function MumosaCrisisResponseVrCaseStudy() {
  return (
    <main className="min-h-screen bg-[var(--background)] p-8 font-sans text-[var(--foreground)] md:p-24">
      <div className="mx-auto max-w-5xl">
        <header className="mb-16">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Projects', href: '/career' },
              { label: 'MUMOSA Crisis Response VR Study' },
            ]}
            className="mb-4"
          />
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">
            Graduate Client Project · Army Research Laboratory Context · Low-Fi Complete · Digital Prototype In Progress
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight">MUMOSA Crisis Response VR Study</h1>
          <p className="mt-3 max-w-4xl text-[var(--muted)]">
            This case study documents the full arc of our graduate project built around the Army Research Laboratory&apos;s MUMOSA dashboard.
            From research and low-fidelity paper prototypes through to a revised Q/A workspace dashboard spec and an in-progress Unreal Engine spatial simulation —
            my contribution spans the immersive review lane across every phase of the project.
          </p>
        </header>

        <section className="flex flex-col gap-12 md:gap-16">
          <div className="rounded-2xl border border-[var(--accent-cyan)]/40 bg-[linear-gradient(145deg,var(--surface),color-mix(in_oklab,var(--surface)_90%,var(--accent-cyan)_10%))] p-8 shadow-[var(--shadow-strong)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
            <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-start">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-cyan)]/50 bg-[var(--surface)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--foreground)]">
                  <span className="inline-flex h-2 w-2 rounded-full bg-[var(--accent-cyan)]"></span>
                  MUMOSA / DEVCOM ARL
                </span>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight">From Paper To Unreal: A Source-Grounded Spatial Review Layer</h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  The published MUMOSA work combines question answering, textual evidence, visual evidence, schema graphs, and simulation views into one
                  crisis-analysis interface. Our coursework prototype extends that idea into a testable digital product, and my lane evolved from a VR paper
                  prototype into a PC-first Unreal Engine spatial review module that lets investigators walk through a reconstructed incident scene, click
                  evidence markers, and trace every AI claim back to source material.
                </p>
                <ul className="mt-5 space-y-2 text-sm text-[var(--muted)]">
                  <li>- Low-fidelity VR paper prototype complete and tested.</li>
                  <li>- Revised Q/A workspace dashboard spec finalized (Ask &rarr; Q/A Results &rarr; Compare Evidence &rarr; Timeline + Event Map &rarr; Simulation Evidence).</li>
                  <li>- My lane: building the Unreal Engine spatial simulation with evidence markers, source panel, hazard overlays, and dashboard handoff.</li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="#paper-prototype"
                    className="inline-flex items-center rounded-full border border-[var(--foreground)] bg-[var(--foreground)] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--background)] shadow-[var(--shadow)] transition-all duration-300 hover:bg-transparent hover:text-[var(--foreground)] hover:[box-shadow:var(--shadow-strong),0_0_22px_var(--accent-cyan)]"
                  >
                    View Paper Prototype
                  </a>
                  <a
                    href="#unreal-simulation"
                    className="inline-flex items-center rounded-full border border-[var(--foreground)] bg-[var(--foreground)] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--background)] shadow-[var(--shadow)] transition-all duration-300 hover:bg-transparent hover:text-[var(--foreground)] hover:[box-shadow:var(--shadow-strong),0_0_22px_var(--accent-cyan)]"
                  >
                    View Unreal Plans
                  </a>
                  <a
                    href="#lit-review"
                    className="inline-flex items-center rounded-full border border-[var(--border)] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--foreground)] transition-all duration-300 hover:border-[var(--foreground)]"
                  >
                    View Lit Review
                  </a>
                </div>
              </div>
              <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)]">
                <LightboxImage
                  src="/images/projects/mumosa-crisis-response-vr/mumosa-banner.png"
                  alt="MUMOSA dashboard figure showing question answering, evidence panels, schema graphs, and simulation evidence"
                  width={995}
                  height={645}
                  className="h-auto w-full object-cover"
                  roundedClassName="rounded-none"
                  popupCaption="Client-paper dashboard figure: MUMOSA brings interactive Q/A together with textual evidence, visual evidence, schema graphs, and simulation evidence inside one crisis-analysis surface."
                />
              </div>
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

          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.08fr_0.92fr] md:items-start">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">What MUMOSA Is</h2>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                MUMOSA is a multimodal situational-awareness dashboard. The core idea is to stop treating crisis evidence as separate silos and instead connect
                reports, images, extracted events, schema graphs, and 3D or simulation views inside one interface that can support investigation, training, and,
                later, potentially real-time response.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                What makes it interesting to me is that it sits directly in the space I care about most: human factors, high-stakes information flow, and
                spatial interfaces that help users understand a scene rather than only read about it.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">What I Owned</h2>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                I am not presenting this as if I built the entire MUMOSA platform myself. My contribution spanned the immersive review lane across every phase:
                the literature review that shaped the VR framing, the paper prototype that tested the spatial interaction model, contributions to the revised
                dashboard information architecture, and now the Unreal Engine implementation that turns those concepts into a working spatial review module.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                The dashboard redesign work shown later came from the shared team process and is included here as context. The digital phase keeps that split
                clear: the flatscreen prototype lives in Axure with my colleagues, while I carry the spatial simulation lane forward in Unreal Engine.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Research Findings That Shaped The Direction</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {researchItems.map((item) => (
                <div key={item.title} className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
                  <p className="text-sm font-semibold text-[var(--foreground)]">{item.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="paper-prototype" className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <div>
                <h2 className="mb-4 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Finished Low-Fidelity VR Paper Prototype</h2>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  The finished low-fidelity prototype translates the research into something concrete: a paper headset window, controller annotations, a sketched
                  reconstruction of the crisis site, and evidence notes that appear in-scene when the investigator asks to verify a claim.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                  Instead of claiming a full VR build, I focused on the interaction questions that actually matter first. Can users orient themselves in the
                  scene? Can AI summaries be checked against evidence? Does the interface support a resolve-phase workflow without burying the person in more
                  complexity?
                </p>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  {prototypeHighlightItems.map((item) => (
                    <div key={item.title} className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4">
                      <p className="text-sm font-semibold text-[var(--foreground)]">{item.title}</p>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--background)] shadow-[var(--shadow)]">
                <LightboxImage
                  src="/images/projects/mumosa-crisis-response-vr/mumosa-prototype-headset-view.jpg"
                  alt="Paper VR prototype with controller labels and a headset window looking onto the crisis scene"
                  width={3806}
                  height={2160}
                  className="h-auto w-full object-cover"
                  roundedClassName="rounded-none"
                  popupCaption="Main VR paper-prototype view: a paper visor frames the reconstructed crisis scene while hand-drawn controllers map teleportation, evidence reveal, and inspection actions."
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
            <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)]">
              <LightboxImage
                src="/images/projects/mumosa-crisis-response-vr/mumosa-prototype-scene-sketch.jpg"
                alt="Long panoramic scene sketch for the MUMOSA VR paper prototype"
                width={2772}
                height={2160}
                className="h-auto w-full object-cover"
                roundedClassName="rounded-none"
                popupCaption="Base scene sketch for the VR prototype: street, damaged area, vehicle, civilian, vegetation, and active fire zone laid out as one continuous panorama."
              />
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Interaction Model</h2>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                The controls are intentionally modest. I wanted the paper prototype to prove the interaction logic before promising any technical implementation.
                The model stays focused on navigation, evidence verification, and selective deep inspection.
              </p>
              <ul className="mt-5 space-y-3 text-sm text-[var(--muted)]">
                {interactionModelItems.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow)]">
              <h2 className="mb-4 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Evidence Grounding In The Scene</h2>
              <p className="mb-5 text-sm leading-relaxed text-[var(--muted)]">
                These notes are the core of the concept. They show how the interface could present AI-generated findings without asking users to trust floating
                summaries blindly. Each card has a timestamped claim, a quick interpretation, and an action prompt that leads back to source evidence.
              </p>
              <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--background)]">
                <LightboxImage
                  src="/images/projects/mumosa-crisis-response-vr/mumosa-prototype-evidence-sticky-notes.jpg"
                  alt="Paper prototype scene with three sticky notes showing grounded evidence findings"
                  width={2991}
                  height={2160}
                  className="h-auto w-full object-cover"
                  roundedClassName="rounded-none"
                  popupCaption="Three evidence notes anchored to the scene: civilian casualty, collision and scene evidence, and active fire. Each one acts like a grounded AI finding with an action path back to source material."
                />
              </div>
            </div>

            <div className="grid gap-8">
              <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)]">
                <LightboxImage
                  src="/images/projects/mumosa-crisis-response-vr/mumosa-prototype-fire-evidence.jpg"
                  alt="Paper VR prototype showing the active fire evidence card next to the burning structure"
                  width={2880}
                  height={2160}
                  className="h-auto w-full object-cover"
                  roundedClassName="rounded-none"
                  popupCaption="Active-fire callout in context: the paper prototype shows a summary card beside the burning structure rather than isolating the evidence in a separate panel."
                />
              </div>

              <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)]">
                <LightboxImage
                  src="/images/projects/mumosa-crisis-response-vr/mumosa-prototype-smoke-scene.png"
                  alt="Alternative smoke-heavy crisis scene sketch for the VR paper prototype"
                  width={602}
                  height={402}
                  className="h-auto w-full object-cover"
                  roundedClassName="rounded-none"
                  popupCaption="Low-visibility scene variant used to test whether the workflow still supports orientation and evidence lookup when the environment is harder to read."
                />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Revised Dashboard: From Role Picker To Q/A Workspace</h2>
            <p className="mb-6 text-sm leading-relaxed text-[var(--muted)]">
              The original dashboard prototype started with a role-picker and presented a generic event overview. After aligning more tightly with the MUMOSA
              source paper, the team redesigned the flow around a structured investigative workflow. The result is a 5-screen Q/A workspace where every interaction
              has a clear purpose.
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {revisedDashboardItems.slice(0, 3).map((item) => (
                <div key={item.title} className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
                  <p className="text-sm font-semibold text-[var(--foreground)]">{item.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              {revisedDashboardItems.slice(3).map((item) => (
                <div key={item.title} className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
                  <p className="text-sm font-semibold text-[var(--foreground)]">{item.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-start">
            <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)]">
              <LightboxImage
                src="/images/projects/mumosa-crisis-response-vr/mumosa-figjam-board-overview.png"
                alt="FigJam board overview showing dashboard wireframes, dashboard inspiration, and the VR paper prototype section"
                width={1041}
                height={994}
                className="h-auto w-full object-cover"
                roundedClassName="rounded-none"
                popupCaption="Shared FigJam board for the low-fidelity phase: dashboard overhaul ideas, dashboard inspiration, and the VR paper-prototype strip developed in parallel."
              />
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Team Dashboard Direction</h2>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                Even though my emphasis is the VR and spatial simulation lane, the full project was broader than that. The shared FigJam board tracked flatscreen
                improvements alongside my lane, and those dashboard ideas matter because spatial review only makes sense as one mode in a larger investigative
                workflow.
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {teamDashboardItems.map((item) => (
                  <div key={item.title} className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4">
                    <p className="text-sm font-semibold text-[var(--foreground)]">{item.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <div className="mb-6 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--background)]">
                <LightboxImage
                  src="/images/projects/mumosa-crisis-response-vr/mumosa-planning-board-vr-cluster.png"
                  alt="Planning board showing the VR cluster with cognitive goals, risks, and mitigation strategies"
                  width={1215}
                  height={1022}
                  className="h-auto w-full object-cover"
                  roundedClassName="rounded-none"
                  popupCaption="Planning board VR cluster: cognitive goals, practical risks (hardware cost, motion sickness, data streaming), and mitigations documented during the low-fidelity phase."
                />
              </div>
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Design Brief Translation</h2>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                Reviewing the FigJam design brief helped tighten the page narrative. The board makes it clear that the project is not only about adding VR, but about
                restructuring the whole experience around cognition, role, and investigation flow.
              </p>
              <div className="mt-6 grid gap-4">
                {[
                  {
                    title: 'Role-Adaptive Information',
                    body: 'The FigJam design brief reframed the dashboard around dynamic filtering and role-based views so investigators, responders, and coordinators can enter the same incident from different cognitive starting points.',
                  },
                  {
                    title: 'Overview To Detail To Overview',
                    body: 'One of the clearest patterns in the brief is hierarchical exploration: start broad, drill into specific evidence, then move back out to re-establish context.',
                  },
                  {
                    title: 'Training Is Not Secondary',
                    body: 'The board treats simulation-based learning, pattern recognition, and decision rehearsal as core outcomes, not side benefits layered on after the fact.',
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4">
                    <p className="text-sm font-semibold text-[var(--foreground)]">{item.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Planned Usability Test</h2>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                The FigJam board also already includes a paper-prototype usability script. That matters because the low-fidelity phase is not just a sketch dump; it
                has a concrete evaluation plan for orientation, timeline understanding, and deeper evidence review.
              </p>
              <div className="mt-6 grid gap-4">
                {usabilityTestItems.map((item) => (
                  <div key={item.title} className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4">
                    <p className="text-sm font-semibold text-[var(--foreground)]">{item.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div id="unreal-simulation" className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div>
                <h2 className="mb-4 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">My Lane Now: Unreal Engine Spatial Simulation</h2>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  The VR paper prototype proved the interaction model. Now I am building the real thing in Unreal Engine 5.7. The spatial review module is
                  PC-first and designed around the same principles the paper prototype validated: source-grounded evidence, physical context for hazards and events,
                  and a clear relationship to the dashboard.
                </p>
              </div>
              <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--background)] shadow-[var(--shadow)]">
                <LightboxImage
                  src="/images/projects/mumosa-crisis-response-vr/mumosa-simulation-evidence.png"
                  alt="Simulation evidence concept showing 3D reconstruction with annotated evidence markers"
                  width={450}
                  height={230}
                  className="h-auto w-full object-cover"
                  roundedClassName="rounded-none"
                  popupCaption="Simulation evidence concept: AI-labeled evidence markers in a reconstructed 3D scene, with linked source panels and confidence indicators."
                />
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {unrealPlanItems.slice(0, 3).map((item) => (
                <div key={item.title} className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
                  <p className="text-sm font-semibold text-[var(--foreground)]">{item.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              {unrealPlanItems.slice(3).map((item) => (
                <div key={item.title} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
                  <p className="text-sm font-semibold text-[var(--foreground)]">{item.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
              <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--background)] shadow-[var(--shadow)]">
                <LightboxImage
                  src="/images/projects/mumosa-crisis-response-vr/mumosa-3d-gaussian-splatting-reference.gif"
                  alt="Animated reference showing Gaussian splatting 3D reconstruction from overlapping photos"
                  width={768}
                  height={432}
                  className="h-auto w-full object-cover"
                  roundedClassName="rounded-none"
                  popupCaption="Gaussian splatting reference: overlapping photos or quick video walkthroughs can be turned into realistic 3D scenes for forensic review — a key technology behind the spatial reconstruction pipeline MUMOSA would use."
                />
              </div>
              <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Reconstruction Pipeline Concept</p>
                <p className="mt-2 text-sm font-semibold text-[var(--foreground)]">From Photos To Spatial Evidence</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  The long-term pipeline uses drones, robots, and body cameras to collect overlapping visual data. Photogrammetry or Gaussian splatting
                  reconstructs the physical scene. Vision-language models extract key events, hazards, and objects, which MUMOSA turns into clickable spatial
                  markers with links back to source evidence. The Unreal prototype simulates this pipeline with realistic sample data.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Course Deliverables And Project Status</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {deliverableItems.slice(0, 3).map((item) => (
                <div key={item.title} className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">{item.label}</p>
                  <p className="mt-2 text-sm font-semibold text-[var(--foreground)]">{item.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              {deliverableItems.slice(3).map((item) => (
                <div key={item.title} className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">{item.label}</p>
                  <p className="mt-2 text-sm font-semibold text-[var(--foreground)]">{item.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="lit-review" className="grid grid-cols-1 gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <h2 className="mb-4 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Research Grounding</h2>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                This is the authored research document behind my part of the project. It covers user groups, heuristics, multimodal crisis-response design, and
                the reasoning that eventually shaped the resolve-phase and VR framing.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                The client paper still matters as context, but it is not my portfolio artifact. What belongs in this case study is the bridge from research into
                the finished low-fidelity prototype and the digital implementation that followed.
              </p>
              <div className="mt-6 rounded-xl border border-[var(--border)] bg-[var(--background)] p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Earlier VR Direction Note</p>
                <div className="mt-3 overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)]">
                  <LightboxImage
                    src="/images/projects/mumosa-crisis-response-vr/mumosa-doc-05-vr-direction.png"
                    alt="Current MUMOSA VR direction note page used by the team"
                    width={1224}
                    height={1584}
                    className="h-auto w-full object-cover object-top"
                    roundedClassName="rounded-none"
                    popupCaption="Earlier VR-direction note page used while the team was moving from research into the prototype stage."
                  />
                </div>
              </div>
            </div>

            <div>
              <DocViewer
                title="My MUMOSA Literature Review"
                description="10-page authored literature review covering user groups, heuristics, multimodal crisis-response design, and implications for the team prototype direction."
                pages={litReviewPages}
              />
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Reference Documents</h2>
            <p className="mb-5 max-w-3xl text-sm text-[var(--muted)]">
              These links are here for context and coursework documentation. The client paper is supporting reference, not presented as my authored portfolio work.
              The GitHub repository contains the full project working materials.
            </p>
            <div className="flex flex-wrap gap-3">
              {referenceLinks.map((document) => (
                <a
                  key={document.href}
                  href={document.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-[var(--border)] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--foreground)] transition-all duration-300 hover:border-[var(--foreground)]"
                >
                  {document.label}
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Outcome So Far</h2>
            <p className="text-sm leading-relaxed text-[var(--muted)]">
              What started as a literature review and a paper VR sketch has grown into a full digital prototype pipeline. The team has a finalized Q/A workspace
              dashboard spec, an Axure digital prototype, and a detailed Unreal Engine implementation plan. My lane — the spatial simulation module — is under
              active development, and the same source-grounded evidence principles that guided the paper prototype are being carried into Unreal. The next milestone
              is a working PC walkthrough with evidence markers, source panel, hazard overlays, timeline states, and a clear dashboard handoff — proving that
              spatial review can complement the flatscreen investigation workflow without replacing it.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
