import Breadcrumbs from '@/components/breadcrumbs';
import LightboxImage from '@/components/lightbox-image';
import LightboxLocalVideo from '@/components/lightbox-local-video';
import LightboxVideo from '@/components/lightbox-video';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shogun: Flowers Fall in Blood | Georgi Tsvetanski',
  description:
    'Solo mobile tactics RPG in Unity. First combat prototype in May 2025; current March 2026 build is focused on one battle slice, a revised HUD, and cleaned-up support scenes.',
};

type LocalVideoCardProps = {
  src: string;
  title: string;
  caption: string;
};

function LocalVideoCard({ src, title, caption }: LocalVideoCardProps) {
  return (
    <div className="space-y-3">
      <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
        <div className="aspect-video w-full bg-black">
          <LightboxLocalVideo
            src={src}
            title={title}
            popupCaption={caption}
            className="h-full w-full"
            roundedClassName="rounded-none"
          />
        </div>
      </div>
      <div className="space-y-1 text-center">
        <p className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">{title}</p>
        <p className="text-sm text-[var(--muted)]">{caption}</p>
      </div>
    </div>
  );
}

export default function ShogunFlowersFallInBloodPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] p-8 font-sans text-[var(--foreground)] md:p-24">
      <div className="mx-auto max-w-5xl">
        <header className="mb-16">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Projects', href: '/career' },
              { label: 'Shogun: Flowers Fall in Blood' },
            ]}
            className="mb-4"
          />
          <h1 className="mt-4 text-4xl font-bold tracking-tight">Shogun: Flowers Fall in Blood</h1>
          <p className="mt-3 max-w-3xl text-[var(--muted)]">
            Solo mobile tactics RPG in Unity. I built the first combat prototype in May 2025. The current March 2026 build is narrower on purpose and focused on one battle slice, a portrait-first HUD, and cleaner support scenes.
          </p>
        </header>

        <section className="flex flex-col gap-12 md:gap-16">
          <div className="rounded-2xl border border-[var(--accent-cyan)]/40 bg-[linear-gradient(145deg,var(--surface),color-mix(in_oklab,var(--surface)_94%,var(--accent-cyan)_6%))] p-5 shadow-[var(--shadow-strong)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)] md:p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-cyan)]/50 bg-[var(--surface)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--foreground)]">
                  <span className="inline-flex h-2 w-2 rounded-full bg-[var(--accent-cyan)]"></span>
                  Updated March 2026
                </span>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight">What changed since 2025</h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--muted)]">
                  The 2025 version proved the direction. The current pass strips it down to one battle slice that I can actually finish and build from.
                </p>
              </div>
              <a
                href="#current-combat"
                className="inline-flex items-center justify-center rounded-full border border-[var(--foreground)] bg-[var(--foreground)] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--background)] shadow-[var(--shadow)] transition-all duration-300 hover:bg-transparent hover:text-[var(--foreground)] hover:[box-shadow:var(--shadow-strong),0_0_22px_var(--accent-cyan)]"
              >
                View Current Combat
              </a>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-[var(--border)]/80 bg-[var(--surface)]/60 px-4 py-3">
                <p className="text-[11px] font-mono uppercase tracking-[0.28em] text-[var(--muted)]">May 2025</p>
                <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">First combat prototype and gameplay capture.</p>
              </div>
              <div className="rounded-xl border border-[var(--border)]/80 bg-[var(--surface)]/60 px-4 py-3">
                <p className="text-[11px] font-mono uppercase tracking-[0.28em] text-[var(--muted)]">March 2026</p>
                <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">Audit, cleanup, and reset around <code>Dev_Sandbox</code>.</p>
              </div>
              <div className="rounded-xl border border-[var(--border)]/80 bg-[var(--surface)]/60 px-4 py-3">
                <p className="text-[11px] font-mono uppercase tracking-[0.28em] text-[var(--muted)]">March 25, 2026</p>
                <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">New combat and support-scene captures.</p>
              </div>
            </div>
          </div>


          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <div className="max-w-3xl">
              <h2 className="mb-4 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Combat Before And After</h2>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                This comparison says more than the old archive still did. The 2025 video shows where combat started; the 2026 capture shows what changed and what is actually in the build now.
              </p>
            </div>

            <div className="mt-8 grid gap-8 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] xl:items-start">
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--background)]/30 p-6">
                <p className="text-xs font-mono uppercase tracking-[0.28em] text-[var(--muted)]">May 2025 Prototype</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  This is the original prototype video. It is useful as a reference point for pacing, tone, and the first version of combat, but it is not the current build.
                </p>
                <div className="mt-6 overflow-hidden rounded-xl border border-[var(--border)] bg-black">
                  <div className="aspect-video w-full">
                    <LightboxVideo
                      embedUrl="https://www.youtube.com/embed/mTIhaiYbRDk"
                      thumbnailUrl="https://img.youtube.com/vi/mTIhaiYbRDk/maxresdefault.jpg"
                      title="Shogun: Flowers Fall in Blood May 2025 Prototype Gameplay"
                      popupCaption="Archived prototype gameplay from May 2025 showing the original Shogun combat direction."
                      className="h-full w-full object-cover"
                      roundedClassName="rounded-none"
                    />
                  </div>
                </div>
                <ul className="mt-5 space-y-2 text-sm text-[var(--muted)]">
                  <li>- Useful for: early combat direction and pacing.</li>
                  <li>- Missing: a tighter battle loop, cleaner UI, and a reliable build target.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-[var(--border)] bg-[var(--background)]/30 p-6">
                <p id="current-combat" className="text-xs font-mono uppercase tracking-[0.28em] text-[var(--muted)]">March 25, 2026 Battle Slice</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  This capture is a better picture of where the project stands now: portrait-first battle presentation, revised HUD work, clearer drag and release feedback, and stronger range readability.
                </p>
                <div className="mt-6 overflow-hidden rounded-xl border border-[var(--border)] bg-black">
                  <div className="aspect-video w-full">
                    <LightboxLocalVideo
                      src="/videos/projects/shogun-flowers-fall-in-blood/shogun-2026-03-25-battle-prototype.mp4"
                      title="Shogun: Flowers Fall in Blood March 25, 2026 Battle Slice"
                      popupCaption="March 25, 2026 battle slice capture showing the current Shogun combat HUD, range readability, and battle flow."
                      className="h-full w-full"
                      roundedClassName="rounded-none"
                    />
                  </div>
                </div>
                <ul className="mt-5 space-y-2 text-sm text-[var(--muted)]">
                  <li>- Focus: battle clarity over feature count.</li>
                  <li>- Current visible work: HUD, floating damage text, auto-positioning, and combo readability.</li>
                  <li>- Goal: one battle slice that is solid enough to judge, test, and keep building.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Where The Project Stands</h2>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                I am not presenting Shogun as a broad foundation for the full game anymore. Right now the useful parts are the character data setup, the combat scene, the mobile UI work, and a few support scenes that can actually be tested.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-[var(--muted)]">
                <li>- The real work is concentrated in one battle scene instead of spread across half-finished systems.</li>
                <li>- Character data, combat flow, and portrait UI are the parts worth building on.</li>
                <li>- Everything else stays secondary until one battle can run cleanly from start to finish.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Current Slice Scope</h2>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                The current slice is built around Ryoma, Kuro, and Tsukiko fighting Ronin Footman, Oni Brute, and Yurei Caster. The goal is to prove the core tactical loop before expanding scope.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-[var(--muted)]">
                <li>- One authored battle target: <code>Courtyard Ambush</code>.</li>
                <li>- One gameplay-truth scene: <code>Dev_Sandbox</code>.</li>
                <li>- One success condition: a readable battle from setup to result without manual repair.</li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <div className="max-w-3xl">
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">March 25, 2026 Support Scene Prototypes</h2>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                Outside combat, I also rebuilt the summon, barracks, and settings scenes so they behave like real scenes instead of loose placeholders.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-[var(--muted)]">
                <li>- Summon is a banner and featured-unit presentation test.</li>
                <li>- Barracks and Settings were cleaned up so scene view and play mode stop drifting apart.</li>
                <li>- These support scenes matter, but combat in <code>Dev_Sandbox</code> is still the main build target.</li>
              </ul>
            </div>
            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <LocalVideoCard
                src="/videos/projects/shogun-flowers-fall-in-blood/shogun-2026-03-25-summons-prototype.mp4"
                title="Summons Prototype"
                caption="March 25, 2026 capture of the summon screen: banner layout, featured unit framing, and portrait-first mobile presentation."
              />
              <LocalVideoCard
                src="/videos/projects/shogun-flowers-fall-in-blood/shogun-2026-03-25-settings-and-barracks-prototype.mp4"
                title="Settings And Barracks Prototype"
                caption="March 25, 2026 capture of barracks browsing and settings cleanup after earlier scene and runtime drift."
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">2026 Systems Reset & Documentation</h2>
              <p className="mb-4 text-sm leading-relaxed text-[var(--muted)]">
                In March 2026 I went back through the project to separate real systems from placeholder work, cut claims that were ahead of the build, and write down what the current slice actually needs.
              </p>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                <li>- Project audit to separate working systems from placeholder architecture.</li>
                <li>- Slice plan centered on <code>Dev_Sandbox</code> and the <code>Courtyard Ambush</code> encounter.</li>
                <li>- Documentation that tracks the build as it exists now, not as a future wishlist.</li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://docs.google.com/document/d/1tQy-96n6PT-5ejI6dY2StB-Uuhs10RdjcZGwNd-t5xM/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-[var(--foreground)] bg-[var(--foreground)] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--background)] shadow-[var(--shadow)] transition-all duration-300 hover:bg-transparent hover:text-[var(--foreground)]"
                >
                  View Systems Audit
                </a>
                <a
                  href="https://docs.google.com/document/d/1H1RVHiRcTWC9bKdPeEIab16GYU6gXJxJ2aQxmZIGaZg/edit?tab=t.0#heading=h.p4vrpp5ibll6"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-[var(--border)] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--foreground)] transition-all duration-300 hover:border-[var(--foreground)]"
                >
                  Read Working GDD
                </a>
              </div>
            </div>
            <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
              <div className="aspect-video w-full bg-black">
                <LightboxImage
                  src="/images/ShogunFlowersFallinBlood_HW_NarutoBlazing_Showcase_Example.png"
                  alt="Early Shogun systems research board from the 2025 analysis phase"
                  width={1400}
                  height={900}
                  className="h-full w-full object-contain"
                  roundedClassName="rounded-none"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">What Exists In The Current Build</h2>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                <li>- CharacterDefinition, CharacterInstance, and CharacterStats as the runtime data foundation.</li>
                <li>- Battle HUD, drag indicators, range displays, floating combat text, and result-state scaffolding.</li>
                <li>- Authored encounter definitions and battle framing inside <code>Dev_Sandbox</code>.</li>
                <li>- Main Menu, Barracks, Summon, and Settings scenes that can be tested directly.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Current Production Direction</h2>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                The current art and implementation pipeline is simpler and more practical: Gemini for portrait ideation, PixelLab for sprite and animation starting points, Aseprite for cleanup, and Unity for integration.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                <li>- Ronin Footman is the first real test of that character pipeline.</li>
                <li>- Portrait-first presentation is part of the game's look, not just a UI convenience.</li>
                <li>- Right now the job is not to show every possible system. It is to make one battle slice work.</li>
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                All design and development of Shogun: Flowers Fall in Blood remains an independent personal project.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}



