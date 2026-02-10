import Breadcrumbs from '@/components/breadcrumbs';
import LightboxImage from '@/components/lightbox-image';

export default function TrashBeenCaseStudy() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-8 md:p-24 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Projects', href: '/career' },
              { label: 'Trash Been' },
            ]}
            className="mb-4"
          />
          <h1 className="text-4xl font-bold tracking-tight mt-4">Trash Been: Urban Logistics</h1>
          <p className="text-[var(--muted)] mt-3 max-w-2xl">
            Successful Breda application project built in one week: a platformer where cleaning a polluted city restores color,
            pace, and player momentum.
          </p>
        </header>

        <section className="grid gap-8">
          <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-shadow duration-300 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
            <LightboxImage
              src="/images/Breda_Banner.png"
              alt="Trash Been playable character banner"
              width={1600}
              height={900}
              className="h-full w-full object-cover"
              roundedClassName="rounded-2xl"
            />
          </div>

          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Project Overview</h2>
            <p className="text-sm text-[var(--muted)]">
              Trash Been was developed under an extreme timeline in <span className="text-[var(--foreground)] font-medium">May 2022</span>: one week to design and build a complete game from scratch for
              my Breda application. To succeed, I defined a strict scope early, focused on one strong core loop, and iterated fast
              through playtests and fixes.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-shadow duration-300 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
              <LightboxImage
                src="/images/TB_MindMap.png"
                alt="Trash Been gameplay and systems mind map"
                width={1400}
                height={900}
                className="h-full w-full object-cover"
                roundedClassName="rounded-2xl"
              />
            </div>
            <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-shadow duration-300 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
              <LightboxImage
                src="/images/TB_QA.png"
                alt="Trash Been QA and testing notes"
                width={1400}
                height={900}
                className="h-full w-full object-cover"
                roundedClassName="rounded-2xl"
              />
            </div>
          </div>

          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Gameplay Loop</h2>
            <p className="text-[var(--muted)] text-sm">
              Players run and jump through a polluted city, collecting trash bags to clean each zone. As more trash is collected,
              the world transitions from grim to vibrant and the player gains movement upgrades (speed and jump).
              Enemy “globs” apply pressure by slowing momentum and forcing cleaner route execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Key Contributions</h2>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                <li>- Scoped and shipped a complete playable build in one week.</li>
                <li>- Built core systems with Unity visual scripting and template reverse engineering.</li>
                <li>- Designed city transformation feedback tied directly to player progress.</li>
                <li>- Balanced obstacle pressure using AI enemy behavior and traversal pacing.</li>
              </ul>
            </div>
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">QA & Testing</h2>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                The hardest part was programming under time pressure in a pre-AI workflow era. I solved this by combining rapid implementation,
                community support from Unity forums, and lightweight iterative testing with external players online.
                Watching real players interact with the prototype was the most valuable validation step.
              </p>
            </div>
          </div>

          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Live Build & Gameplay Videos</h2>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://gogo81.itch.io/trash-been"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[var(--foreground)] bg-[var(--foreground)] px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--background)] transition-colors hover:bg-transparent hover:text-[var(--foreground)]"
              >
                View Live Project
              </a>
              <a
                href="https://youtu.be/zCdPRazVHYM"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[var(--border)] px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--foreground)] transition-colors hover:border-[var(--foreground)]"
              >
                Gameplay Video 1
              </a>
              <a
                href="https://youtu.be/BzVovBaY99o"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[var(--border)] px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--foreground)] transition-colors hover:border-[var(--foreground)]"
              >
                Gameplay Video 2
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Tools & Methods</h2>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                <li>- Unity</li>
                <li>- Visual scripting + template reverse engineering</li>
                <li>- Rapid iteration + remote playtest loop</li>
                <li>- Gameplay prototyping + bug-fix cycles</li>
              </ul>
            </div>
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Future Improvements</h2>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                <li>- Add leaderboard systems to increase replayability.</li>
                <li>- Introduce procedural variation for route and obstacle generation.</li>
                <li>- Expand narrative with animated cinematic transitions.</li>
              </ul>
            </div>
          </div>

          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Outcome</h2>
            <p className="text-[var(--muted)] text-sm">
              Trash Been helped secure acceptance into Breda by demonstrating strong scope control, systems thinking, and execution
              under constraint. The project proved that I can move from concept to playable prototype quickly while keeping design,
              QA, and player feedback tightly integrated.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}





