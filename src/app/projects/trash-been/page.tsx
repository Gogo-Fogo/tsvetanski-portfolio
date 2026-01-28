import Link from 'next/link';

export default function TrashBeenCaseStudy() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-8 md:p-24 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16">
          <Link href="/career" className="text-sm font-mono mb-4 inline-block hover:underline decoration-1 underline-offset-4">
            ← BACK TO THE LAB
          </Link>
          <h1 className="text-4xl font-bold tracking-tight mt-4">Trash Been</h1>
          <p className="text-[var(--muted)] mt-3 max-w-2xl">
            A rapid prototype built in one week with tight scope control, focused on environmental transformation and
            momentum-driven platforming.
          </p>
        </header>

        <section className="grid gap-8">
          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Project Summary</h2>
            <p className="text-sm text-[var(--muted)]">
              Built from scratch in one week for the Breda application. Players sprint through a polluted city collecting
              trash bags to restore color and vitality. As the environment cleans up, movement speed and jump height increase,
              while enemy “globs” slow the player to keep the pacing tense.
            </p>
          </div>
          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Project Goal</h2>
            <p className="text-[var(--muted)] text-sm">
              Build a complete vertical slice in one week, shipping a clear loop where players restore a polluted city by
              collecting trash and unlocking movement upgrades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Key Contributions</h2>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                <li>- Scoped mechanics and level flow to fit a one-week sprint.</li>
                <li>- Built movement, collection, and transformation systems.</li>
                <li>- Implemented enemy behaviors and tuning for pacing.</li>
                <li>- QA tested and iterated using community feedback.</li>
              </ul>
            </div>
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Tools & Tech</h2>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                <li>- Unity</li>
                <li>- Visual scripting + template reverse engineering</li>
                <li>- Rapid iteration + playtest loop</li>
                <li>- Gameplay/UI prototyping</li>
              </ul>
            </div>
          </div>

          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Outcome</h2>
            <p className="text-[var(--muted)] text-sm">
              Delivered a complete, playable prototype with tested mechanics and a clear roadmap for replayability: leaderboards,
              procedural variation, and animated narrative beats.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}


