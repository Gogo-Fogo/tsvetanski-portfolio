import Breadcrumbs from '@/components/breadcrumbs';
import DocViewer from '@/components/doc-viewer';
import type { DocPage } from '@/components/doc-viewer';
import LightboxImage from '@/components/lightbox-image';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MUMOSA Crisis Response VR Study | Georgi Tsvetanski',
  description:
    'Graduate client project tied to DEVCOM Army Research Laboratory and MUMOSA, focused on multimodal situational awareness, crisis-response heuristics, and an in-progress VR evidence-review direction.',
};

const snapshotItems = [
  {
    label: 'Role',
    value: "Individual lit-review author and current owner of the team's VR direction and early prototype framing",
  },
  {
    label: 'Team',
    value: 'Three-person graduate team: Georgi Tsvetanski, Kelly Ehrlich, and Kamilah S.',
  },
  {
    label: 'Client Context',
    value: 'DEVCOM Army Research Laboratory / MUMOSA, a multimodal situational-awareness dashboard for crisis analysis and training',
  },
  {
    label: 'Current Stage',
    value: 'Lit review complete; heuristics presentation, paper prototype, testing, and a basic VR proof-of-concept in progress',
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
    body: 'Right now the most believable use case is post-crisis reconstruction and training. That is where schema graphs, grounded documents, and 3D evidence review become most useful.',
  },
];

const deliverableItems = [
  {
    label: 'Completed',
    title: 'Individual Literature Review',
    body: 'I wrote the research pass grounding the project in user groups, crisis-response heuristics, multimodal interface design, and the resolve-phase framing.',
  },
  {
    label: 'In Progress',
    title: 'Group Heuristics Presentation',
    body: 'The current team work is translating research into concrete interaction decisions for the final prototype direction.',
  },
  {
    label: 'Next',
    title: 'Paper + Electronic Prototype',
    body: 'The immediate target is a paper prototype, testing notes, a clickable prototype, and a small VR proof that communicates the spatial-review concept clearly.',
  },
];

const currentScopeItems = [
  'Use VR as a second-pass evidence surface so investigators can re-walk a hazardous scene without physical risk.',
  'Tie spatial review back to source reports, imagery, and event structure instead of treating 3D space as a disconnected demo.',
  'Keep the scope honest: basic prototype first, not a claim of a finished LiDAR or field-ready defense product.',
  'Frame the concept around forensic review and training now, with real-time response only as a future possibility.',
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
            Graduate Client Project · Army Research Laboratory Context · In Progress
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight">MUMOSA Crisis Response VR Study</h1>
          <p className="mt-3 max-w-4xl text-[var(--muted)]">
            This is an in-progress graduate project built around the Army Research Laboratory's MUMOSA dashboard. The immediate job is not to pretend I have
            already shipped a defense product. It is to turn real client research, interaction-design heuristics, and a still-evolving team concept into a
            believable prototype direction, with my current focus on the VR section.
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
                <h2 className="mt-4 text-2xl font-semibold tracking-tight">Research-Grounded VR Direction for Multimodal Crisis Review</h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  The published MUMOSA work combines question answering, textual evidence, visual evidence, schema graphs, and simulation views into one
                  crisis-analysis interface. My contribution so far is grounding the project in research and pushing a VR direction that could help users review
                  complex scenes spatially during post-crisis investigation and training.
                </p>
                <ul className="mt-5 space-y-2 text-sm text-[var(--muted)]">
                  <li>- Real client context from the ARL / MUMOSA paper.</li>
                  <li>- Individual literature review already completed.</li>
                  <li>- Team concepting now focused on heuristics, paper prototyping, and a small VR proof.</li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="/documents/projects/mumosa-crisis-response-vr/mumosa-client-paper.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full border border-[var(--foreground)] bg-[var(--foreground)] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--background)] shadow-[var(--shadow)] transition-all duration-300 hover:bg-transparent hover:text-[var(--foreground)] hover:[box-shadow:var(--shadow-strong),0_0_22px_var(--accent-cyan)]"
                  >
                    Open Client Paper
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
                reports, images, extracted events, schema graphs, and 3D scene views inside one interface that can support investigation, training, and, later,
                potentially real-time response.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                What makes it interesting to me is that it sits directly in the space I care about most: human factors, high-stakes information flow, and
                spatial interfaces that help users understand a scene rather than only read about it.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">My Role On The Team</h2>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                I am not presenting this as if I already built the full MUMOSA system myself. My actual work so far is narrower and more honest: I completed the
                individual literature review, I am helping shape the interaction-design direction with my teammates, and my current lane is the VR side of the
                concept together with the framing for a basic prototype.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                That means I am thinking about how a reconstructed scene could help investigators revisit a hazardous site, inspect context spatially, and connect
                what they see back to grounded evidence rather than making a disconnected 3D tech demo.
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

          <div className="grid grid-cols-1 gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-start">
            <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)]">
              <LightboxImage
                src="/images/projects/mumosa-crisis-response-vr/mumosa-simulation-evidence.png"
                alt="MUMOSA simulation evidence example with annotated hazard regions in a reconstructed crisis scene"
                width={450}
                height={230}
                className="h-auto w-full object-cover"
                roundedClassName="rounded-none"
                popupCaption="Simulation evidence from the client paper: a reconstructed scene with semantic annotations showing how spatial review can support post-crisis understanding."
              />
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Current VR Direction</h2>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                The strongest VR use case right now is not replacing the whole dashboard. It is acting as a spatial review layer for the resolve phase: after the
                immediate danger, when investigators or trainees need to understand what happened, where it happened, and how separate pieces of evidence fit the
                physical scene.
              </p>
              <ul className="mt-5 space-y-3 text-sm text-[var(--muted)]">
                {currentScopeItems.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Course Deliverables And Project Plan</h2>
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
              <h2 className="mb-4 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">My Literature Review</h2>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                This is the authored research document that grounds my part of the project. It covers user groups, heuristics, multimodal crisis-response design,
                and the reasoning behind the current resolve-phase and VR framing.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                The ARL / MUMOSA paper still matters as client context, but it is not my work and it should not be the main portfolio evidence block here. The
                focus below is my literature review, plus one current note page showing where the team's VR lane is headed.
              </p>
              <div className="mt-6 rounded-xl border border-[var(--border)] bg-[var(--background)] p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Current VR Direction Note</p>
                <div className="mt-3 overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)]">
                  <LightboxImage
                    src="/images/projects/mumosa-crisis-response-vr/mumosa-doc-05-vr-direction.png"
                    alt="Current MUMOSA VR direction note page used by the team"
                    width={1224}
                    height={1584}
                    className="h-auto w-full object-cover object-top"
                    roundedClassName="rounded-none"
                    popupCaption="Current team note page for the VR lane: safe scene re-walk, evidence linkage, and a deliberately modest prototype scope."
                  />
                </div>
              </div>
            </div>

            <div>
              <DocViewer
                title="My MUMOSA Literature Review"
                description="10-page authored literature review covering user groups, heuristics, multimodal crisis-response design, and implications for the team's prototype direction."
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
              What is already real here is the design research, the client context, and the prototype direction. The next milestone is not a huge technical claim.
              It is to finish the assignment well: clear heuristics, tested paper and electronic prototypes, and a basic VR slice strong enough to communicate why
              spatial review could matter in MUMOSA's post-crisis workflow.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
