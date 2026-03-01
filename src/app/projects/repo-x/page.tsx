import Breadcrumbs from '@/components/breadcrumbs';
import LightboxImage from '@/components/lightbox-image';

const guiltyDocuments = [
  {
    href: '/documents/projects/guilty-as-arrr/recruiter/guilty-as-arrr-gdd-original.docx',
    label: 'Original GDD',
  },
  {
    href: '/documents/projects/guilty-as-arrr/recruiter/guilty-as-arrr-gdd-rescoped.docx',
    label: 'Rescoped GDD',
  },
  {
    href: '/documents/projects/guilty-as-arrr/recruiter/guilty-as-arrr-dgc-community.docx',
    label: 'DGC & Community Notes',
  },
];

const guiltyPlaytestImage = {
  src: '/images/GuiltyAsArr_Playtest.png',
  alt: 'Guilty As Arrr playtester pushing collision boundaries and exploring ship traversal routes',
  width: 1031,
  height: 1029,
};

const guiltyParrotImage = {
  src: '/images/GuiltyAsArr_Parrot.png',
  alt: 'Temporary pirate-themed avatar icon used on the project social profile',
  width: 512,
  height: 512,
};

const guiltyXProfileImage = {
  src: '/images/GuiltyAsArr_XProfile.png',
  alt: 'GuiltyAsArrDev X profile used for community-facing updates',
  width: 2048,
  height: 893,
};

export default function RepoXCaseStudy() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-8 md:p-24 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Projects', href: '/career' },
              { label: 'Guilty As Arrr' },
            ]}
            className="mb-4"
          />
          <h1 className="text-4xl font-bold tracking-tight mt-4">Guilty As Arrr</h1>
          <p className="text-[var(--muted)] mt-3 max-w-2xl">
            Multiplayer VR pirate social deduction prototype focused on real-time spatial audio attenuation and networked systems.
          </p>
        </header>

        <section className="flex flex-col gap-12 md:gap-16">
          {/* Hero Banner */}
          <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
            <div className="aspect-[21/9] w-full">
              <LightboxImage
                src="/images/GuiltyAsArr_XProfile.png"
                alt="Guilty As Arrr project banner — community-facing X profile"
                width={2048}
                height={893}
                className="h-full w-full object-cover"
                roundedClassName="rounded-none"
              />
            </div>
          </div>

          {/* Overview & Core Mechanic */}
          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Project Overview</h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              Guilty As Arrr is a multiplayer VR pirate social deduction prototype. The core gameplay revolves around
              <span className="text-[var(--foreground)] font-medium"> spatial audio attenuation</span>, where physical distance
              and orientation directly impact the social deduction loop, forcing players to manage their proximity for critical conversations.
            </p>
          </div>

          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Rescope & Production Reality</h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              Midway through development, one teammate left the class. That shift required a full scope reset and moved a larger share
              of implementation, testing, and delivery onto my workload. Instead of over-promising, I narrowed the project to a realistic,
              high-quality vertical slice that could be completed and validated within the semester timeline.
            </p>
            <ul className="mt-5 space-y-3 text-sm text-[var(--muted)]">
              <li>- Reframed the target from a broad feature set to a stable multiplayer prototype.</li>
              <li>- Prioritized core systems: session flow, voice proximity logic, and readable social feedback.</li>
              <li>- Focused on testable delivery and documentation to keep the project useful beyond class scope.</li>
            </ul>
          </div>

          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Team Lead Workflow (Trello)</h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              I leaned hard on Trello as the team lead to keep the project moving after the rescope. The board became the source of truth
              for ownership, weekly priorities, and what was realistically shippable with reduced bandwidth.
            </p>
            <ul className="mt-5 space-y-3 text-sm text-[var(--muted)]">
              <li>- Broke work by teammate and system area so accountability stayed clear.</li>
              <li>- Re-ranked cards after each playtest to protect core gameplay over optional polish.</li>
              <li>- Used the board to communicate tradeoffs quickly when capacity changed.</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Community Updates</h2>
              <div className="mb-5 w-24">
                <LightboxImage
                  src={guiltyParrotImage.src}
                  alt={guiltyParrotImage.alt}
                  width={guiltyParrotImage.width}
                  height={guiltyParrotImage.height}
                  className="h-auto w-full rounded-xl bg-[var(--background)] p-2"
                  popupCaption="Temporary avatar icon used for the Guilty As Arrr social profile."
                />
              </div>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                I used a dedicated social profile to share progress and collect playtest feedback.
                The avatar was just a temporary visual marker, while the main goal was keeping updates visible and organized for the team and testers.
              </p>
            </div>
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-4 shadow-[var(--shadow)]">
              <LightboxImage
                src={guiltyXProfileImage.src}
                alt={guiltyXProfileImage.alt}
                width={guiltyXProfileImage.width}
                height={guiltyXProfileImage.height}
                className="h-auto w-full rounded-xl object-cover"
                popupCaption="Community-facing X profile used for the Guilty As Arrr project."
              />
            </div>
          </div>

          {/* Technical Implementation & Contributions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Network Architecture</h2>
              <ul className="space-y-4 text-sm text-[var(--muted)]">
                <li>
                  <span className="text-[var(--foreground)] font-medium block mb-1">Photon Fusion:</span>
                  Built for high-performance networked state synchronization, ensuring sub-50ms latency for critical social cues.
                </li>
                <li>
                  <span className="text-[var(--foreground)] font-medium block mb-1">Photon Voice 2:</span>
                  Integrated for spatial voice proximity, dynamically attenuating audio based on in-game distances.
                </li>
              </ul>
            </div>
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Key Contributions</h2>
              <ul className="space-y-4 text-sm text-[var(--muted)]">
                <li>
                  <span className="text-[var(--foreground)] font-medium block mb-1">Proximity Voice Logic:</span>
                  Designed and tuned baselines for audio clarity and social tension, crucial for effective deception and accusation.
                </li>
                <li>
                  <span className="text-[var(--foreground)] font-medium block mb-1">Multiplayer Session Flow Ownership:</span>
                  Carried implementation of lightweight session management and round rules to keep playtests reliable under the rescoped plan.
                </li>
                <li>
                  <span className="text-[var(--foreground)] font-medium block mb-1">Spatial UX Cues:</span>
                  Balanced visual and audio feedback to support player reads in chaotic, fast-paced VR environments.
                </li>
                <li>
                  <span className="text-[var(--foreground)] font-medium block mb-1">Scope & Delivery Management:</span>
                  Re-prioritized backlog and cut non-essential features so the remaining systems could be polished and documented.
                </li>
              </ul>
            </div>
          </div>

          {/* Tools & Outcome */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Tools & Technologies</h2>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                <li>- Unity (URP)</li>
                <li>- Photon Fusion (Networking)</li>
                <li>- Photon Voice 2 (Spatial Audio)</li>
                <li>- Meta Interaction SDK</li>
              </ul>
            </div>
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Outcome</h2>
              <p className="text-[var(--muted)] text-sm">
                Delivered a testable multiplayer slice that validated the social loop, stayed realistic after the team-size change, and established a documented foundation for future expansion.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Playtest Highlight</h2>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                One of my favorite parts of development is watching people playtest and either experience the intended loop or completely break it in creative ways.
                In this session, a tester pushed the ship traversal limits, used collision seams to climb higher than expected, and then walked along a rope like a true pirate.
              </p>
              <p className="mt-4 text-sm text-[var(--foreground)] font-medium">
                Feature, not a bug.
              </p>
              <p className="mt-2 text-xs text-[var(--muted)]">
                That moment became useful design data for navigation boundaries, movement readability, and player freedom.
              </p>
            </div>
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-4 shadow-[var(--shadow)]">
              <LightboxImage
                src={guiltyPlaytestImage.src}
                alt={guiltyPlaytestImage.alt}
                width={guiltyPlaytestImage.width}
                height={guiltyPlaytestImage.height}
                className="h-auto w-full rounded-xl object-cover"
                popupCaption="Playtest moment where emergent movement and collision edge-cases revealed unexpected but fun ship traversal behavior."
              />
            </div>
          </div>

          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Documents</h2>
            <p className="text-sm text-[var(--muted)] mb-6">
              Supporting documents, including the original plan and the rescoped version used after team capacity changed.
            </p>
            <div className="flex flex-wrap gap-3">
              {guiltyDocuments.map((document) => (
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

          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Reflection</h2>
            <p className="text-[var(--muted)] text-sm leading-relaxed">
              This project became an exercise in realistic production judgment. With less team capacity than planned, I shifted from
              feature breadth to execution quality and pushed as far as possible within constraints while still delivering something
              testable, coherent, and portfolio-ready.
              </p>
            </div>
        </section>
      </div>
    </main>
  );
}




