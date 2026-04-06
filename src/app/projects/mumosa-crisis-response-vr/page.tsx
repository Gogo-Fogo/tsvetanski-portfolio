import Breadcrumbs from '@/components/breadcrumbs';
import DocViewer from '@/components/doc-viewer';
import type { DocPage } from '@/components/doc-viewer';
import LightboxImage from '@/components/lightbox-image';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MUMOSA Crisis Response VR Study | Georgi Tsvetanski',
  description:
    'Graduate client project tied to DEVCOM Army Research Laboratory and MUMOSA, featuring a finished low-fidelity VR paper prototype built around a single-sheet 360 scene, grounded AI evidence cards, and a dashboard-to-VR handoff.',
};

const snapshotItems = [
  {
    label: 'Role',
    value: "Literature-review author and VR paper-prototype owner for the team's redesign",
  },
  {
    label: 'Team',
    value: 'Three-person graduate team: Georgi Tsvetanski, Kelly Ehrlich, and Kamilah S.',
  },
  {
    label: 'Current Artifact',
    value: 'Finished low-fidelity prototype covering both the VR lane and the flatscreen dashboard direction',
  },
  {
    label: 'Next Digital Split',
    value: 'Axure with the team for flatscreen, Unity on my side for VR',
  },
];

const researchItems = [
  {
    title: 'Reduce Cognitive Load',
    body: 'The interface should help users make sense of a crisis scene, not add another layer of clutter during a high-stakes review task.',
  },
  {
    title: 'Ground AI In Evidence',
    body: 'Every summary needs an obvious path back to a source so investigators can verify claims instead of trusting the model blindly.',
  },
  {
    title: 'Focus On Resolve-Phase Review',
    body: 'The most believable use case is post-crisis reconstruction and training, where users need to inspect context carefully rather than react in real time.',
  },
];

const prototypeOverviewItems = [
  {
    title: 'Web-First Handoff',
    body: 'The planning board framed VR as a power tool inside a web-first ecosystem, reached through a deliberate View in VR/360 action from the dashboard.',
  },
  {
    title: 'Frozen Scene Review',
    body: 'The VR lane is meant for revisiting hazardous sites after the event, preserving a scene in time for later forensic review and training.',
  },
  {
    title: 'Grounded 3D Evidence',
    body: 'The board pushed toward spatially pinned body-cam, drone, and thermal feeds so AI summaries stay anchored to the exact place they came from.',
  },
];

const planningBoardItems = [
  {
    title: 'VR As A Power Tool',
    body: 'The strongest planning-board decision was to keep the main system web-first and use VR only when an investigator needs deeper spatial review.',
  },
  {
    title: 'Believable Capture Pipeline',
    body: 'Photogrammetry, Gaussian splatting, LiDAR, and autonomous scouts gave the concept a credible way to reconstruct dangerous scenes without sending people in first.',
  },
  {
    title: 'Pinned Source Feeds',
    body: 'Instead of floating generic summaries, the board imagined 2D body-cam and drone evidence pinned back into 3D space as verifiable source material.',
  },
];

const paperMethodItems = [
  'The crisis scene lives in one centered 11 x 3 inch strip on the page.',
  'A 2.75 x 3 inch cardboard viewport simulates the headset field of view and slides left or right across the strip.',
  'I only used the middle strip, leaving the top and bottom blank so popup cards could sit outside the scene.',
  'The first street-level scenario includes a basketball-court incident, a central car crash with skid marks, and a burning building.',
];

const controllerItems = [
  'Right trigger selects a point of interest and opens the matching AI card.',
  'A reveals the source evidence, such as body-cam, drone, thermal, or text material.',
  'B stands in for the LiDAR measurement tool, especially around the crash scene.',
  'Left joystick teleports between zones, while X filters noise and Y exits back to the dashboard.',
];

const aiPopupItems = [
  {
    title: 'Critical Event: Civilian Casualty',
    time: '14:02:11 EST',
    summary:
      'VLM extraction from officer body-cam confirms one fallen individual. Bystander audio suggests a loud altercation immediately preceded the event.',
    action: 'Show Source: Body-Cam #4 Video and Transcript',
  },
  {
    title: 'Collision And Scene Evidence',
    time: '14:15:33 EST',
    summary:
      'Drone photogrammetry detected major vehicular impact and prompts investigators to use LiDAR measurement on the skid marks for velocity analysis.',
    action: 'Show Source: Drone Video Feed',
  },
  {
    title: 'Structural Hazard: Active Fire',
    time: '14:45:00 EST',
    summary:
      'Quadruped robot thermal sensors indicate temperatures above 800 C and a high probability of structural collapse on the east wall.',
    action: 'Show Source: Spot Thermal Sensor Log',
  },
];

const teamDashboardItems = [
  {
    title: 'View In VR/360 Entry',
    body: 'VR is treated as a power tool reached from the dashboard, not as a replacement for the main workflow.',
  },
  {
    title: 'Role-Based Views',
    body: 'The flatscreen direction reduces overload by giving responders, investigators, and other users different starting views.',
  },
  {
    title: 'Timeline And Schema Cleanup',
    body: 'The team pushed toward clearer timeline wayfinding, better schema legibility, and stronger source linkage.',
  },
  {
    title: 'Investigator Notes',
    body: 'The dashboard lane also explored saved notes and annotations so findings can persist across deeper review sessions.',
  },
];

const testingItems = [
  {
    title: 'Moderator Setup',
    body: 'Participants are told we are testing the design, not them, and asked to think out loud throughout the session.',
  },
  {
    title: 'Task Flow',
    body: 'The test moves from first orientation, to timeline reconstruction, to deeper evidence review and VR discovery.',
  },
  {
    title: 'What We Watch',
    body: 'We look for confusion around entry points, timeline discovery, and whether the Show Source path builds trust in the AI summaries.',
  },
];

const nextStepItems = [
  {
    title: 'Axure Flatscreen Prototype',
    body: 'The shared digital dashboard prototype will move into Axure with my teammates.',
  },
  {
    title: 'Unity VR Prototype',
    body: 'I will carry the VR lane into Unity, translating the paper controller logic and scene handoff into a real interactive slice.',
  },
  {
    title: 'Keep What Worked',
    body: 'The digital version should preserve the strongest low-fi ideas: orientation, clear points of interest, and one-step access back to source evidence.',
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
          <div className="mt-6 grid gap-8 md:grid-cols-[1.08fr_0.92fr] md:items-start">
            <div>
              <h1 className="text-4xl font-bold tracking-tight">MUMOSA Crisis Response VR Study</h1>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[var(--muted)]">
                This page now focuses on the finished low-fidelity phase of our MUMOSA project. My contribution centered on the VR paper prototype for spatial scene review, while my teammates pushed the flatscreen dashboard direction. The next digital split follows that same structure: Axure for the shared dashboard and Unity for my VR lane.
              </p>
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
            <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)]">
              <LightboxImage
                src="/images/projects/mumosa-crisis-response-vr/mumosa-planning-board-vr-cluster.png"
                alt="Focused VR planning section from the MUMOSA FigJam board showing rationale, reconstruction references, and risk notes"
                width={1215}
                height={1022}
                className="h-auto w-full object-cover"
                roundedClassName="rounded-none"
                popupCaption="Focused VR-planning cluster from our FigJam board: system rationale, reconstruction references, practical risks, and the web-first positioning of VR as a specialized review mode."
              />
            </div>
          </div>
        </header>

        <section className="flex flex-col gap-8 md:gap-12">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {snapshotItems.map((item) => (
              <div key={item.label} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow)]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">{item.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--foreground)]">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-start">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <h2 className="mb-4 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Project Context</h2>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                MUMOSA is a multimodal crisis-analysis concept that pulls together reports, extracted events, visual evidence, schema relationships, and simulation views. What mattered most in my lane was making that ecosystem easier to inspect spatially without losing trust in the underlying evidence.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                The planning board also clarified an important system rule: VR should stay a specialized investigative mode inside a web-first workflow, not become the whole product. That made the paper phase useful for testing orientation, source verification, and the dashboard-to-VR handoff before building anything in Unity.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {researchItems.map((item) => (
                <div key={item.title} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow)]">
                  <p className="text-sm font-semibold text-[var(--foreground)]">{item.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-4 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">From The Planning Board</h2>
            <p className="max-w-3xl text-sm leading-relaxed text-[var(--muted)]">
              Revisiting the FigJam board helped pull forward the most useful system-level ideas behind the prototype, especially the parts that make the VR lane feel believable rather than decorative.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {planningBoardItems.map((item) => (
                <div key={item.title} className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4">
                  <p className="text-sm font-semibold text-[var(--foreground)]">{item.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 mx-auto max-w-[42rem] overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--background)]">
              <img
                src="/images/projects/mumosa-crisis-response-vr/mumosa-3d-gaussian-splatting-reference.gif"
                alt="3D Gaussian splatting reconstruction reference used in the MUMOSA VR planning board"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          <div id="paper-prototype" className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-4 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">VR Paper Prototype</h2>
            <p className="max-w-3xl text-sm leading-relaxed text-[var(--muted)]">
              The prototype treats VR as a deliberate second step. Investigators would first encounter a scene in the dashboard, then choose a focused View in VR/360 mode when they need to inspect spatial evidence more closely.
            </p>
            <div className="mt-6 mx-auto max-w-[36rem] overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--background)]">
              <LightboxImage
                src="/images/projects/mumosa-crisis-response-vr/mumosa-prototype-scene-sketch.png"
                alt="Paper prototype base scene sketch showing a city street, basketball court incident, car crash, and burning building"
                width={598}
                height={403}
                className="h-auto w-full object-cover"
                roundedClassName="rounded-none"
                popupCaption="Base scene sketch for the VR paper prototype: one continuous street-level scene with a basketball-court incident, central crash, and active fire zone."
              />
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {prototypeOverviewItems.map((item) => (
                <div key={item.title} className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4">
                  <p className="text-sm font-semibold text-[var(--foreground)]">{item.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-4 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Prototype Mechanics</h2>
            <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--background)]">
              <LightboxImage
                src="/images/projects/mumosa-crisis-response-vr/mumosa-prototype-headset-view.png"
                alt="Cardboard headset-style frame over the 360 paper scene with controller mappings drawn on each side"
                width={598}
                height={337}
                className="h-auto w-full object-cover"
                roundedClassName="rounded-none"
                popupCaption="Single-sheet VR paper prototype with a sliding viewport and hand-drawn controller mappings."
              />
            </div>
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-6">
                <h3 className="mb-4 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">How The Paper Prototype Worked</h3>
                <ul className="space-y-3 text-sm leading-relaxed text-[var(--muted)]">
                  {paperMethodItems.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-6">
                <h3 className="mb-4 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Interaction Mapping</h3>
                <ul className="space-y-3 text-sm leading-relaxed text-[var(--muted)]">
                  {controllerItems.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
              <div>
                <h2 className="mb-4 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Grounded AI Evidence</h2>
                <p className="max-w-2xl text-sm leading-relaxed text-[var(--muted)]">
                  The strongest part of the low-fi concept is that each AI summary stays tied to a place, a time, and a source action. The planning board pushed this further by imagining body-cam, drone, and thermal feeds pinned back into 3D space instead of floating as detached evidence panels.
                </p>
                <div className="mt-6 mx-auto grid max-w-[28rem] gap-4">
                  <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--background)]">
                    <LightboxImage
                      src="/images/projects/mumosa-crisis-response-vr/mumosa-prototype-fire-evidence.png"
                      alt="Paper VR prototype showing the active fire evidence card near the burning structure"
                      width={599}
                      height={439}
                      className="h-auto w-full object-cover"
                      roundedClassName="rounded-none"
                      popupCaption="Active-fire evidence in context, shown beside the scene rather than detached in a separate dashboard panel."
                    />
                  </div>
                  <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--background)]">
                    <LightboxImage
                      src="/images/projects/mumosa-crisis-response-vr/mumosa-prototype-evidence-sticky-notes.png"
                      alt="Paper prototype scene with sticky-note evidence cards for casualty, crash, and fire"
                      width={819}
                      height={438}
                      className="h-auto w-full object-cover"
                      roundedClassName="rounded-none"
                      popupCaption="Evidence cards used during testing to simulate AI findings tied to the scene."
                    />
                  </div>
                </div>
              </div>
              <div>
                <h2 className="mb-4 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">AI Popup Cards</h2>
                <div className="grid gap-4">
                  {aiPopupItems.map((item) => (
                    <div key={item.title} className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4">
                      <p className="text-sm font-semibold text-[var(--foreground)]">{item.title}</p>
                      <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">{item.time}</p>
                      <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.summary}</p>
                      <p className="mt-3 text-sm font-medium text-[var(--foreground)]">{item.action}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr_0.95fr] xl:items-start">
              <div>
                <h2 className="mb-4 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Flatscreen Dashboard Direction</h2>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  My teammates carried more of the dashboard lane, but it still matters here because the VR mode only works when the web workflow is clear first. The board direction moves toward a calmer entry point, better filtering, and stronger links between summaries and supporting evidence.
                </p>
                <div className="mt-6 grid gap-4">
                  {teamDashboardItems.map((item) => (
                    <div key={item.title} className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4">
                      <p className="text-sm font-semibold text-[var(--foreground)]">{item.title}</p>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="mb-4 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Testing Plan</h2>
                <div className="grid gap-4">
                  {testingItems.map((item) => (
                    <div key={item.title} className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4">
                      <p className="text-sm font-semibold text-[var(--foreground)]">{item.title}</p>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="mb-4 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Next Digital Step</h2>
                <div className="grid gap-4">
                  {nextStepItems.map((item) => (
                    <div key={item.title} className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4">
                      <p className="text-sm font-semibold text-[var(--foreground)]">{item.title}</p>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div id="lit-review" className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <div className="grid gap-8 md:grid-cols-[0.88fr_1.12fr] md:items-start">
              <div>
                <h2 className="mb-4 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Research Grounding</h2>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  I also authored the literature review that grounded the redesign in cognitive load, trust, and multimodal crisis-response design. It is included here as the research layer behind the prototype decisions shown above.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
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

              <div>
                <DocViewer
                  title="My MUMOSA Literature Review"
                  description="10-page authored literature review covering user groups, heuristics, multimodal crisis-response design, and implications for the prototype direction."
                  pages={litReviewPages}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}










