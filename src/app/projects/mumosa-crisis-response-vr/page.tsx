import Breadcrumbs from '@/components/breadcrumbs';
import DocViewer from '@/components/doc-viewer';
import type { DocPage } from '@/components/doc-viewer';
import LightboxImage from '@/components/lightbox-image';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MUMOSA Crisis Response VR Study | Georgi Tsvetanski',
  description:
    'Graduate client project tied to DEVCOM Army Research Laboratory and MUMOSA, featuring a finished low-fidelity VR paper prototype for grounded crisis-scene review plus the team dashboard direction that supported it.',
};

const snapshotItems = [
  {
    label: 'Role',
    value: "Literature-review author and VR paper-prototype owner for the team's MUMOSA redesign",
  },
  {
    label: 'Team',
    value: 'Three-person graduate team: Georgi Tsvetanski, Kelly Ehrlich, and Kamilah S.',
  },
  {
    label: 'Prototype Stage',
    value: 'Finished low-fidelity prototype covering both the VR lane and the flatscreen dashboard direction',
  },
  {
    label: 'Focus',
    value: 'This case study centers my VR lane while still crediting the flatscreen dashboard work developed with my teammates',
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

const teamDashboardItems = [
  {
    title: 'Role-Based Views',
    body: 'The flatscreen direction explored filtered entry points for responders, investigators, and shared cross-role analysis so people see the right level of detail first.',
  },
  {
    title: 'Timeline And Calendar Wayfinding',
    body: 'The team pushed incident/date selection toward clearer timeline and calendar structures so users can reconstruct event sequence faster.',
  },
  {
    title: 'Clearer Schema Evidence',
    body: 'Dashboard revisions focused on a better legend, stronger source linkage, and easier-to-read node details instead of the original dense graph.',
  },
  {
    title: 'Saved Notes For Investigators',
    body: 'My teammates also explored note-taking and saved annotations so investigators can preserve findings during deeper review.',
  },
];

const designBriefItems = [
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
    body: 'I finished the research document grounding the redesign in situational awareness, cognitive load, and multimodal crisis-response heuristics.',
  },
  {
    label: 'Completed',
    title: 'Low-Fidelity Team Prototype',
    body: 'The current prototype package includes dashboard wireframes, the VR paper prototype, and a usability-testing script for an incident-analysis scenario.',
  },
  {
    label: 'Next',
    title: 'Testing And Electronic Prototype',
    body: 'The next milestone is a digital prototype split across two lanes: an Axure flatscreen prototype built with my teammates and a separate Unity VR prototype that I will develop for the immersive side.',
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
            Graduate Client Project · Army Research Laboratory Context · Low-Fidelity Prototype Complete
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight">MUMOSA Crisis Response VR Study</h1>
          <p className="mt-3 max-w-4xl text-[var(--muted)]">
            This case study documents the finished low-fidelity stage of our graduate project built around the Army Research Laboratory&apos;s MUMOSA dashboard.
            My contribution centered on the VR paper prototype: a headset-view concept for revisiting hazardous scenes, surfacing AI summaries in place, and
            letting investigators jump back to source evidence. My teammates focused more on the flatscreen dashboard redesign, and the next digital step is split the same way: Axure for the flatscreen prototype together, Unity for the VR prototype on my side.
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
                <h2 className="mt-4 text-2xl font-semibold tracking-tight">Research-Grounded VR Review Layer For Crisis Reconstruction</h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  The published MUMOSA work combines question answering, textual evidence, visual evidence, schema graphs, and simulation views into one
                  crisis-analysis interface. Our coursework prototype extends that idea into a more usable learning and investigation flow, and my lane was the
                  VR review layer for revisiting dangerous scenes after the event.
                </p>
                <ul className="mt-5 space-y-2 text-sm text-[var(--muted)]">
                  <li>- Finished low-fidelity prototype, not just early concept notes.</li>
                  <li>- My contribution centers on the VR paper prototype and evidence-grounding interactions.</li>
                  <li>- The team also developed flatscreen dashboard directions for filters, schema, and note-taking.</li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="#paper-prototype"
                    className="inline-flex items-center rounded-full border border-[var(--foreground)] bg-[var(--foreground)] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--background)] shadow-[var(--shadow)] transition-all duration-300 hover:bg-transparent hover:text-[var(--foreground)] hover:[box-shadow:var(--shadow-strong),0_0_22px_var(--accent-cyan)]"
                  >
                    View Paper Prototype
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
                I am not presenting this as if I built the entire MUMOSA platform myself. My contribution was the literature review and the VR side of the
                prototype: framing when immersive review is valuable, sketching the reconstructed scene, mapping interactions to controllers, and showing how
                evidence would stay grounded instead of turning into a disconnected tech demo.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                The dashboard redesign work shown later came from the shared team process and is included here as context. Going into the digital phase, we are keeping that split clear: the flatscreen prototype moves into Axure with my colleagues, while I carry the VR lane forward in Unity.
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
                Even though my emphasis is the VR prototype, the finished low-fidelity work was broader than that. The shared FigJam board tracked flatscreen
                improvements alongside the VR lane, and those dashboard ideas matter because VR only makes sense as one mode in a larger system.
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
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Design Brief Translation</h2>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                Reviewing the FigJam design brief helped tighten the page narrative. The board makes it clear that the project is not only about adding VR, but about
                restructuring the whole experience around cognition, role, and investigation flow.
              </p>
              <div className="mt-6 grid gap-4">
                {designBriefItems.map((item) => (
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

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Course Deliverables And Project Status</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {deliverableItems.map((item) => (
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
                the finished low-fidelity prototype.
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
              What is real here now is not only the research but the finished low-fidelity prototype itself. The project already communicates a credible division
              of labor: my VR paper prototype explores spatial evidence review, while the rest of the team pushes the dashboard toward clearer filtering, schema,
              and note-taking. The next step is to preserve that split in the digital prototype phase: Axure for the shared flatscreen workflow, Unity for the VR
              experience I am building separately.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}





