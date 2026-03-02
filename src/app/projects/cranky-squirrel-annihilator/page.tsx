import Breadcrumbs from '@/components/breadcrumbs';
import LightboxImage from '@/components/lightbox-image';
import LightboxVideo from '@/components/lightbox-video';
import CrankyPugViewer from '@/components/cranky-pug-viewer';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cranky: The Squirrel Annihilator | Georgi Tsvetanski",
  description: "Solo expansion of the Cranky game jam prototype — first-person pug movement, reactive squirrel and rooster AI, full UI, and WebGL-ready deployment.",
};


export default function CrankySquirrelAnnihilatorPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-8 md:p-24 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Projects', href: '/career' },
              { label: 'Cranky: The Squirrel Annihilator' },
            ]}
            className="mb-4"
          />
          <h1 className="text-4xl font-bold tracking-tight mt-4">Cranky: The Squirrel Annihilator</h1>
          <p className="text-[var(--muted)] mt-3 max-w-3xl">
            A solo Unity prototype — play as a pug chasing squirrels with analog paw controls and physics-driven humor. Rebuilt from the ground up after the 2024 game jam version.
          </p>
        </header>

        <section className="flex flex-col gap-12 md:gap-16">
          {/* Hero Banner */}
          <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
            <div className="h-56 md:h-64 w-full overflow-hidden">
              <LightboxImage
                src="/images/CrankyTheSquirrelAnnihilator_banner.png"
                alt="Cranky: The Squirrel Annihilator banner"
                width={1600}
                height={900}
                className="h-full w-full object-cover"
                roundedClassName="rounded-none"
              />
            </div>
          </div>

          {/* Overview & Character Focus */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">The Solo Evolution</h2>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                Cranky began as a quirky game jam prototype and evolved into a full solo project where I reimagined the concept
                from the ground up.
              </p>
              <p className="text-sm text-[var(--muted)] leading-relaxed mt-4">
                You play as a determined pug chasing squirrels across chaotic backyard and forest environments. The movement system
                was designed to capture the clumsy, eager energy of a real dog, blending humor, exaggerated physics, and focused gameplay.
              </p>
              <a
                href="https://gogo81.itch.io/cranky-v1"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center rounded-full border border-[var(--foreground)] bg-[var(--foreground)] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--background)] shadow-[var(--shadow)] transition-all duration-300 hover:bg-transparent hover:text-[var(--foreground)] hover:[box-shadow:var(--shadow-strong),0_0_22px_var(--accent-cyan)]"
              >
                Play WebGL Build
              </a>
            </div>

            <CrankyPugViewer />
          </div>

          {/* Gameplay Mechanics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)] md:order-2">
              <div className="aspect-video w-full">
                <LightboxVideo
                  embedUrl="https://www.youtube.com/embed/uOrj1FdbcEM"
                  thumbnailUrl="https://img.youtube.com/vi/uOrj1FdbcEM/maxresdefault.jpg"
                  title="Cranky: The Squirrel Annihilator Gameplay"
                  className="h-full w-full object-cover"
                  roundedClassName="rounded-none"
                />
              </div>
            </div>

            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)] md:order-1">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Core Mechanics</h2>
              <ul className="space-y-4 text-sm text-[var(--muted)]">
                <li>
                  <span className="text-[var(--foreground)] font-medium block mb-1">Analog Paw Running:</span>
                  Players alternate L1 + R1 (or keyboard keys) to simulate physical front paw motion, adding a rhythmic, tactile feel to the dog&apos;s movement.
                </li>
                <li>
                  <span className="text-[var(--foreground)] font-medium block mb-1">Reactive Squirrel AI:</span>
                  I programmed squirrels to run, dodge, and react dynamically to the player’s approach using a custom proximity-based behavior system.
                </li>
                <li>
                  <span className="text-[var(--foreground)] font-medium block mb-1">Physics-Driven Humor:</span>
                  The game leans into &quot;clunky&quot; physics to emphasize the comedic nature of a pug&apos;s movement, inspired by Fall Guys.
                </li>
              </ul>
            </div>
          </div>

          {/* Development Focus */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
              <div className="grid grid-cols-2 gap-0">
                <LightboxImage
                  src="/images/Cranky_squirrel.png"
                  alt="Cranky squirrel target art"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover"
                  roundedClassName="rounded-none"
                />
                <LightboxImage
                  src="/images/Cranky_Face.png"
                  alt="Cranky gameplay character expression"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover"
                  roundedClassName="rounded-none"
                />
              </div>
            </div>

            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Development Journey</h2>
              <p className="text-sm text-[var(--muted)] leading-relaxed mb-6">
                As a solo developer, I handled the full production cycle—from original character modeling in Blender to AI systems and optimization in Unity.
              </p>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                A major milestone was rebuilding the movement system mid-development to reduce hand fatigue while keeping the playful “dog-like” immersion. This taught me the importance of player-centric iterative design.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Tools & Technologies</h2>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                <li>- Unity (Gameplay Systems, WebGL Build)</li>
                <li>- Blender (Modeling, Rigging, Animations)</li>
                <li>- C# (Programming & AI Scripting)</li>
                <li>- Substance Painter (Textures, UI Assets)</li>
              </ul>
            </div>

            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Overcoming Challenges</h2>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                Balancing awkward physics with responsive controls and making all systems work smoothly in WebGL required constant
                iteration and testing. This project pushed me to experiment, fail fast, and adapt as I improved each build.
              </p>
            </div>
          </div>

          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Downloadable Documents</h2>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://docs.google.com/document/d/1WVyQefiP6Nu1LgEGjCt0d2I3NQGgfSBVXPCX0QmJa7U/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-[var(--foreground)] bg-[var(--foreground)] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--background)] shadow-[var(--shadow)] transition-all duration-300 hover:bg-transparent hover:text-[var(--foreground)] hover:[box-shadow:var(--shadow-strong),0_0_22px_var(--accent-cyan)]"
              >
                Game Design Document
              </a>
              <a
                href="https://docs.google.com/document/d/1TpCbjZVbZbUJ0aAq4xGkjsWb1CNSq08nq2ufRL13_qQ/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-[var(--border)] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--foreground)] transition-all duration-300 hover:border-[var(--foreground)]"
              >
                Dev Notes
              </a>
              <a
                href="https://docs.google.com/document/d/1zTa27UjdRvVP12vMo39GdtkHW6AA8O432UanxHt1n1w/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-[var(--border)] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--foreground)] transition-all duration-300 hover:border-[var(--foreground)]"
              >
                Level Design (Before/After)
              </a>
            </div>
          </div>

          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Asset Credits & Acknowledgments</h2>
            <ul className="space-y-2 text-sm text-[var(--muted)]">
              <li>- Unity and Reddit dev communities for guidance and troubleshooting.</li>
              <li>- Professors and classmates at Montgomery College for feedback and support.</li>
              <li>- Free asset creators on Unity Asset Store and Pixabay for audio/visual resources.</li>
              <li>- Early playtesters who gave brutally honest feedback that improved the game.</li>
            </ul>
          </div>

          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Project Note</h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              This page documents the solo prototype evolution. The original one-week team jam version is documented separately as
              {' '}<a className="text-[var(--foreground)] underline underline-offset-4" href="/projects/cranky-game-jam">Cranky (Game Jam 2024)</a>.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
