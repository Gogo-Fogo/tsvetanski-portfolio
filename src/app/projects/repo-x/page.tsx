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

        <section className="grid gap-8">
          <div className="border border-dashed border-[var(--border)] bg-[var(--surface)]/40 rounded-2xl p-8">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-4">Network Architecture</h2>
            <p className="text-sm text-[var(--muted)]">
              Built on <span className="text-[var(--foreground)] font-medium">Photon Fusion</span> for high-performance networked state synchronization, 
              ensuring sub-50ms latency for critical social cues and spatial voice proximity.
            </p>
          </div>
          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Project Goal</h2>
            <p className="text-[var(--muted)] text-sm">
              Develop a robust multiplayer framework for spatial interaction. The focus was on <span className="text-[var(--foreground)] font-medium">spatial audio attenuation</span> as a core gameplay mechanic, where 
              the physical distance and orientation of players directly impact the social deduction loop.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Key Contributions</h2>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                <li>- Designed proximity voice logic and tuning baselines for clarity and tension.</li>
                <li>- Implemented multiplayer session flow and lightweight round rules.</li>
                <li>- Balanced spatial UX cues to support player reads in chaotic settings.</li>
                <li>- Iterated on pacing through rapid playtests and feedback loops.</li>
              </ul>
            </div>
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Tools & Tech</h2>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                <li>- Unity (URP)</li>
                <li>- Photon Fusion (Networking)</li>
                <li>- Photon Voice 2 (Spatial Audio)</li>
                <li>- Meta Interaction SDK</li>
                <li>- Rapid prototyping workflow</li>
              </ul>
            </div>
          </div>

          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Outcome</h2>
            <p className="text-[var(--muted)] text-sm">
              Delivered a testable multiplayer slice that validated the social loop and provided a foundation for continued expansion.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}




