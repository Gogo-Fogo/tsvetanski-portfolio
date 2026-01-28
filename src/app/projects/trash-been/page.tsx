import Link from 'next/link';

export default function TrashBeenCaseStudy() {
  return (
    <main className="min-h-screen bg-[#f7f6f3] text-black p-8 md:p-24 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16">
          <Link href="/career" className="text-sm font-mono mb-4 inline-block hover:underline decoration-1 underline-offset-4">
            ← BACK TO THE LAB
          </Link>
          <h1 className="text-4xl font-bold tracking-tight mt-4">Trash Been</h1>
          <p className="text-gray-600 mt-3 max-w-2xl">
            A rapid prototype built in one week with tight scope control, focused on environmental transformation and
            momentum-driven platforming.
          </p>
        </header>

        <section className="grid gap-8">
          <div className="border border-dashed border-gray-200 bg-white/40 rounded-2xl p-8">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-gray-400 mb-4">Media & Metrics</h2>
            <p className="text-sm text-gray-500">
              Placeholder for gameplay screenshots, playtest notes, and outcome stats.
            </p>
          </div>
          <div className="border border-gray-100 bg-white/70 rounded-2xl p-8 shadow-[0_20px_50px_rgba(15,15,15,0.06)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-gray-500 mb-6">Project Goal</h2>
            <p className="text-gray-600 text-sm">
              Build a complete vertical slice in one week, shipping a clear loop where players restore a polluted city by
              collecting trash and unlocking movement upgrades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-100 bg-white/70 rounded-2xl p-8 shadow-[0_20px_50px_rgba(15,15,15,0.06)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-gray-500 mb-6">Key Contributions</h2>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>- Scoped mechanics and level flow to fit a one-week sprint.</li>
                <li>- Built movement, collection, and transformation systems.</li>
                <li>- Implemented enemy behaviors and tuning for pacing.</li>
                <li>- QA tested and iterated using community feedback.</li>
              </ul>
            </div>
            <div className="border border-gray-100 bg-white/70 rounded-2xl p-8 shadow-[0_20px_50px_rgba(15,15,15,0.06)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-gray-500 mb-6">Tools & Tech</h2>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>- Unity</li>
                <li>- Visual scripting</li>
                <li>- Rapid iteration + playtest loop</li>
                <li>- Gameplay/UI prototyping</li>
              </ul>
            </div>
          </div>

          <div className="border border-gray-100 bg-white/70 rounded-2xl p-8 shadow-[0_20px_50px_rgba(15,15,15,0.06)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-gray-500 mb-6">Outcome</h2>
            <p className="text-gray-600 text-sm">
              Delivered a complete, playable prototype with tested mechanics and a clear roadmap for replayability (leaderboards,
              procedural variation, and narrative beats).
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}