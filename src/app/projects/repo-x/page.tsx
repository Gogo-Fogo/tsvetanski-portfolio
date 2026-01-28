import Link from 'next/link';

export default function RepoXCaseStudy() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-8 md:p-24 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16">
          <Link href="/career" className="text-sm font-mono mb-4 inline-block hover:underline decoration-1 underline-offset-4">
            ← BACK TO THE LAB
          </Link>
          <h1 className="text-4xl font-bold tracking-tight mt-4">Repo X</h1>
          <p className="text-[var(--muted)] mt-3 max-w-2xl">
            Multiplayer social-deduction prototype focused on spatial voice, proximity tuning, and emergent group play.
          </p>
        </header>

        <section className="grid gap-8">
          <div className="border border-dashed border-[var(--border)] bg-[var(--surface)]/40 rounded-2xl p-8">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-4">Media & Metrics</h2>
            <p className="text-sm text-[var(--muted)]">
              Placeholder for screenshots, playtest clips, or KPIs (e.g., session length, tester count).
            </p>
          </div>
          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Project Goal</h2>
            <p className="text-[var(--muted)] text-sm">
              Prototype a pirate-themed social deduction loop that relies on spatial audio, proximity-based cues, and lightweight
              systemic rules to keep sessions readable and replayable.
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
                <li>- Unity</li>
                <li>- Photon (Multiplayer)</li>
                <li>- Photon Voice / Spatial Audio</li>
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



