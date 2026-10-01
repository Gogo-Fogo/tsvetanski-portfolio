import Breadcrumbs from '@/components/breadcrumbs';
import DocViewer from '@/components/doc-viewer';
import type { DocPage } from '@/components/doc-viewer';
import LightboxImage from '@/components/lightbox-image';
import ProjectAtAGlance from '@/components/project-at-a-glance';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MUMOSA Situation Awareness Dashboard',
  description:
    'Graduate client project for Army Research Laboratory: a dashboard and Unreal prototype connecting reports, images, timelines, and spatial evidence.',
};

const snapshotItems = [
  {
    label: 'Role',
    value: 'Led research and spatial prototyping; contributed to the dashboard information architecture',
  },
  {
    label: 'Team',
    value: 'Three-person graduate team: Georgi Tsvetanski, Kelly Ehrlich, and Kamilah S.',
  },
  {
    label: 'Client Need',
    value: 'Help analysts reconstruct incidents, compare evidence, and train responders',
  },
  {
    label: 'Artifacts',
    value: 'Client report, paper prototype, Axure dashboard package, and Unreal VR proof of concept.',
  },
];

const clientNeedItems = [
  {
    title: 'Short-Term Use',
    body: 'Help investigators and instructors compare reports, images, events, and timelines after a crisis.',
  },
  {
    title: 'Long-Term Direction',
    body: 'Extend the same structure to incoming evidence, changing timelines, hazard alerts, and role-specific views.',
  },
  {
    title: 'Design Response',
    body: 'Organize questions, sources, conflicts, timelines, and spatial context in one evidence workspace.',
  },
];

const researchItems = [
  {
    title: 'Cognitive Load Comes First',
    body: 'Responders and investigators already manage too many information streams. The interface should reduce fragmentation and visual noise.',
  },
  {
    title: 'AI Claims Need Sources',
    body: 'Every AI summary should link directly to the report, image, event, or scene evidence that supports it.',
  },
  {
    title: 'Post-Crisis Review Comes First',
    body: 'Post-crisis reconstruction and training provide the clearest near-term use for documents, event relationships, and 3D scene review.',
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
    body: 'Keyboard-and-mouse walkthrough first; OpenXR follows after the core interaction is proven.',
  },
  {
    title: 'Evidence Marker System',
    body: 'Reusable C++ markers store the claim, confidence, timeline state, discrepancies, and linked sources.',
  },
  {
    title: 'Source-Grounded Panel',
    body: 'Selecting a marker opens its interpretation, confidence, timeline context, and direct source links.',
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
    label: 'Completed Proof Of Concept',
    title: 'Unreal Spatial Simulation (My Lane)',
    body: 'Built an early Unreal spatial review proof of concept with evidence markers, source-grounded UI behavior, hazard-oriented scene context, and a mock dashboard handoff model.',
  },
  {
    label: 'Completed',
    title: 'Client Report + Final Presentation',
    body: 'Documented the research, paper prototype, electronic prototype, testing approach, lessons learned, and recommendations in a client-facing final report.',
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
    href: 'https://youtu.be/88Qk5ThLEmc',
    label: 'Watch VR Proof Of Concept',
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
              { label: 'Projects', href: '/projects' },
              { label: 'MUMOSA Situation Awareness Dashboard' },
            ]}
            className="mb-4"
          />
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">
            Graduate Client Project · Army Research Laboratory · Multimodal Situation Awareness
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight">MUMOSA Situation Awareness Dashboard</h1>
          <p className="mt-3 max-w-4xl text-[var(--muted)]">
            A graduate client project for Army Research Laboratory that helps analysts compare reports, images, timelines, and reconstructed scenes after
            a crisis.
          </p>
        </header>

        <section className="flex flex-col gap-12 md:gap-16">
          <ProjectAtAGlance items={snapshotItems} />

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow-strong)]">
            <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-start">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--foreground)]">
                  <span className="inline-flex h-2 w-2 rounded-full bg-[var(--accent-cyan)]"></span>
                  ARL Client Context
                </span>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight">From scattered evidence to a traceable incident timeline</h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  Analysts ask a question, inspect the supporting evidence, place events on a timeline, and open a reconstructed scene when location and
                  physical context are important. The same flow can later accept new evidence as an incident develops.
                </p>
                <ul className="mt-5 space-y-2 text-sm text-[var(--muted)]">
                  <li>- Short term: post-crisis investigation, lessons-learned review, and responder training.</li>
                  <li>- Long term: real-time situational awareness with dynamic timelines, hazard cues, and guided next actions.</li>
                  <li>- My lane: research, spatial interaction design, and the Unreal scene-review prototype.</li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="#unreal-simulation"
                    className="inline-flex items-center rounded-full border border-[var(--foreground)] bg-[var(--foreground)] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--background)] shadow-[var(--shadow)] transition-all duration-300 hover:bg-transparent hover:text-[var(--foreground)] hover:[box-shadow:var(--shadow-strong),0_0_22px_var(--accent-cyan)]"
                  >
                    View Unreal Proof
                  </a>
                  <a
                    href="#client-framing"
                    className="inline-flex items-center rounded-full border border-[var(--border)] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--foreground)] transition-all duration-300 hover:border-[var(--foreground)]"
                  >
                    Project Summary
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
                  popupCaption="Dashboard concept combining questions, reports, images, event relationships, and reconstructed scene evidence."
                />
              </div>
            </div>
          </div>

          <div id="unreal-simulation" className="scroll-mt-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-strong)] md:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--accent-cyan)]">Featured implementation</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight">Unreal spatial evidence prototype</h2>
                <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                  I turned the paper interaction model into a PC-first Unreal proof of concept where analysts can select evidence in the scene, inspect its
                  confidence and timeline context, and follow it back to source material.
                </p>
                <div className="mt-6 grid gap-3">
                  {unrealPlanItems.slice(0, 3).map((item) => (
                    <div key={item.title} className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4">
                      <p className="text-sm font-semibold text-[var(--foreground)]">{item.title}</p>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="https://youtu.be/88Qk5ThLEmc"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full border border-[var(--foreground)] bg-[var(--foreground)] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--background)] transition hover:bg-transparent hover:text-[var(--foreground)]"
                  >
                    Watch prototype
                  </a>
                </div>
              </div>

              <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--background)] shadow-[var(--shadow)]">
                <LightboxImage
                  src="/images/projects/mumosa-crisis-response-vr/mumosa-vr-spatial-marker.png"
                  alt="Unreal proof of concept showing a spatial evidence marker in the MUMOSA scene"
                  width={1920}
                  height={1080}
                  className="h-auto w-full object-cover"
                  roundedClassName="rounded-none"
                  popupCaption="Unreal proof of concept: a source-grounded spatial marker anchors evidence to a reconstructed scene."
                />
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--background)]">
                <LightboxImage
                  src="/images/projects/mumosa-crisis-response-vr/mumosa-vr-analysis-popup.png"
                  alt="Unreal MUMOSA proof of concept showing an analysis popup attached to a scene marker"
                  width={1920}
                  height={1080}
                  className="h-auto w-full object-cover"
                  roundedClassName="rounded-none"
                  popupCaption="Selecting a marker opens its interpretation while keeping the physical context visible."
                />
              </div>
              <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--background)]">
                <LightboxImage
                  src="/images/projects/mumosa-crisis-response-vr/mumosa-vr-evidence-selection.png"
                  alt="Unreal MUMOSA proof of concept showing selected spatial evidence"
                  width={1920}
                  height={1080}
                  className="h-auto w-full object-cover"
                  roundedClassName="rounded-none"
                  popupCaption="Evidence selection connects a spatial marker to the supporting source trail."
                />
              </div>
              <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--background)]">
                <LightboxImage
                  src="/images/projects/mumosa-crisis-response-vr/mumosa-simulation-evidence.png"
                  alt="Simulation evidence concept showing 3D reconstruction with annotated evidence markers"
                  width={450}
                  height={230}
                  className="h-auto w-full object-cover"
                  roundedClassName="rounded-none"
                  popupCaption="Original simulation-evidence concept with linked source panels and confidence indicators."
                />
              </div>
            </div>
          </div>

          <div id="client-framing" className="scroll-mt-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-4 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Project In Short</h2>
            <p className="mb-6 max-w-4xl text-sm leading-relaxed text-[var(--muted)]">
              The team designed one evidence workflow spanning questions, sources, timelines, and reconstructed scenes. I led the research and spatial
              prototype, contributed to the dashboard structure, and built the Unreal proof of concept.
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {clientNeedItems.map((item) => (
                <div key={item.title} className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
                  <p className="text-sm font-semibold text-[var(--foreground)]">{item.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <details className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)]">
            <summary className="cursor-pointer list-none p-6 marker:content-none md:p-8">
              <div className="flex items-center justify-between gap-6">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--accent-cyan)]">Closer look</p>
                  <h2 className="mt-2 text-xl font-semibold tracking-tight">Research, paper prototypes, dashboard work, and deliverables</h2>
                  <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[var(--muted)]">
                    Open the full process only if you want the detailed rationale, supporting artifacts, testing plan, and authored research.
                  </p>
                </div>
                <span className="shrink-0 rounded-full border border-[var(--accent-cyan)] bg-[var(--accent-cyan)] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--background)] shadow-[0_0_18px_rgba(34,211,238,0.22)] transition-colors group-hover:bg-[var(--foreground)]">
                  <span className="group-open:hidden">Open +</span>
                  <span className="hidden group-open:inline">Close −</span>
                </span>
              </div>
            </summary>

            <div className="space-y-12 border-t border-[var(--border)] p-6 md:p-8">
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

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow)] md:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--background)]">
                <LightboxImage
                  src="/images/projects/mumosa-crisis-response-vr/mumosa-figjam-board-overview.png"
                  alt="Planning board overview showing dashboard wireframes, dashboard inspiration, and the VR paper prototype section"
                  width={1041}
                  height={994}
                  className="h-auto w-full object-contain"
                  roundedClassName="rounded-none"
                  popupCaption="Shared planning board for the low-fidelity phase: dashboard overhaul ideas, dashboard inspiration, and the VR paper-prototype strip developed in parallel."
                />
              </div>

              <div>
                <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Team Dashboard Direction</h2>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  Even though my emphasis is the VR and spatial simulation lane, the full project was broader than that. The shared planning board tracked flatscreen
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
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow)] md:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--background)]">
                <LightboxImage
                  src="/images/projects/mumosa-crisis-response-vr/mumosa-planning-board-vr-cluster.png"
                  alt="Planning board showing the VR cluster with cognitive goals, risks, and mitigation strategies"
                  width={1215}
                  height={1022}
                  className="h-auto w-full object-contain"
                  roundedClassName="rounded-none"
                  popupCaption="Planning board VR cluster: cognitive goals, practical risks (hardware cost, motion sickness, data streaming), and mitigations documented during the low-fidelity phase."
                />
              </div>

              <div>
                <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Design Brief Translation</h2>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  Reviewing the design brief helped tighten the page narrative. The board makes it clear that the project is not only about adding VR, but about
                  restructuring the whole experience around cognition, role, and investigation flow.
                </p>
                <div className="mt-6 grid gap-4">
                  {[
                    {
                      title: 'Role-Adaptive Information',
                      body: 'The design brief reframed the dashboard around dynamic filtering and role-based views so investigators, responders, and coordinators can enter the same incident from different cognitive starting points.',
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
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Evidence Capture Pipeline</h2>
            <p className="mb-6 text-sm leading-relaxed text-[var(--muted)]">
              The spatial review prototype is backed by a realistic data pipeline. Drones, robots, and body cameras capture the scene; AI processes it into
              grounded evidence; and Nanite renders raw photogrammetry without costly retopology. The result is an end-to-end workflow from crisis site to
              clickable spatial evidence.
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
                <p className="text-sm font-semibold text-[var(--foreground)]">Fidelity Tiers</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  Active response needs answers in minutes — low-fidelity Gaussian splatting (~5-15 min) shows danger zones and blocked routes immediately.
                  Post-crisis investigation uses full photogrammetry (~30 min - 2+ hrs) for forensic-grade detail. The prototype proves the review layer; the
                  processing speed is an engineering curve, not a research question.
                </p>
              </div>
              <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
                <p className="text-sm font-semibold text-[var(--foreground)]">Nanite &amp; Raw Scans</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  Photogrammetry produces messy scans with holes and artifacts. Nanite renders the raw mesh at full detail — no retopology needed for static
                  evidence review. Key objects (railcar, ignition zone) can get AI-assisted cleanup; everything else renders directly. The prototype uses
                  photoscanned Megascans debris to demonstrate the visual quality the pipeline would produce.
                </p>
              </div>
              <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
                <p className="text-sm font-semibold text-[var(--foreground)]">Query &amp; AI Integration</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  The user asks a natural-language question through the dashboard. The AI (local or API) queries the evidence store, determines relevant
                  markers, highlights them in the Unreal scene via the MCP bridge, and populates the source panel. The prototype mocks this with structured
                  JSON data — the same shape a real AI query would return — so the interaction model is proven regardless of backend.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Planned Usability Test</h2>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                The paper-prototype package included a usability script with a concrete evaluation plan for orientation, timeline understanding, and
                deeper evidence review.
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
              My individual literature review and the recorded VR proof of concept. Team deliverables stay with the team and client.
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
              What started as a literature review and a paper VR sketch became a complete client-facing project package: a revised Q/A dashboard direction,
              an Axure electronic prototype, a final report, and an Unreal proof of concept for spatial evidence review. The strongest through-line is source
              grounding. Whether the user is reading an AI answer, comparing visual evidence, reconstructing a timeline, or stepping into a 3D scene, the system
              should make it clear what evidence supports the claim and where uncertainty still exists.
            </p>
          </div>
            </div>
          </details>
        </section>
      </div>
    </main>
  );
}
