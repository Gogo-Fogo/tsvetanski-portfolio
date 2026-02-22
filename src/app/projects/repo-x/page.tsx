import Breadcrumbs from '@/components/breadcrumbs';

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
          {/* Overview & Core Mechanic */}
          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Project Overview</h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              Guilty As Arrr is a multiplayer VR pirate social deduction prototype. The core gameplay revolves around
              <span className="text-[var(--foreground)] font-medium"> spatial audio attenuation</span>, where physical distance
              and orientation directly impact the social deduction loop, forcing players to manage their proximity for critical conversations.
            </p>
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
                  <span className="text-[var(--foreground)] font-medium block mb-1">Multiplayer Session Flow:</span>
                  Implemented lightweight session management and round rules to enable quick, iterative playtesting.
                </li>
                <li>
                  <span className="text-[var(--foreground)] font-medium block mb-1">Spatial UX Cues:</span>
                  Balanced visual and audio feedback to support player reads in chaotic, fast-paced VR environments.
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
                Delivered a testable multiplayer slice that validated the social loop and provided a robust foundation for continued expansion of the VR experience.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}




