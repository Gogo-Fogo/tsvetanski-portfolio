import Breadcrumbs from '@/components/breadcrumbs';
import LightboxImage from '@/components/lightbox-image';
import LightboxVideo from '@/components/lightbox-video';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Shogun: Flowers Fall in Blood | Georgi Tsvetanski",
  description: "Solo mobile tactical RPG prototype in Unity — grid-based combat, gesture-driven skills, gacha progression systems, and enemy AI.",
};


export default function ShogunFlowersFallInBloodPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-8 md:p-24 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Projects', href: '/career' },
              { label: 'Shogun: Flowers Fall in Blood' },
            ]}
            className="mb-4"
          />
          <h1 className="text-4xl font-bold tracking-tight mt-4">Shogun: Flowers Fall in Blood</h1>
          <p className="text-[var(--muted)] mt-3 max-w-3xl">
            A mobile tactical RPG prototype built in Unity — grid-based combat inspired by Naruto Blazing and Ronin: The Last Samurai. Backed by a full studio-style GDD, systems audit, and playable prototype.
          </p>
        </header>

        <section className="flex flex-col gap-12 md:gap-16">
          <div className="group mx-auto w-full max-w-xl overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
            <div className="aspect-video w-full">
              <LightboxImage
                src="/images/ShogunFlowersFallinBlood_banner.png"
                alt="Shogun Flowers Fall in Blood banner"
                width={1600}
                height={900}
                className="h-full w-full object-cover"
                roundedClassName="rounded-none"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--accent-cyan)]/40 bg-[linear-gradient(145deg,var(--surface),color-mix(in_oklab,var(--surface)_90%,var(--accent-cyan)_10%))] p-8 shadow-[var(--shadow-strong)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
            <div className="grid gap-8 md:grid-cols-2 md:items-start">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-cyan)]/50 bg-[var(--surface)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--foreground)]">
                  <span className="inline-flex h-2 w-2 rounded-full bg-[var(--accent-cyan)]"></span>
                  Featured Case Study
                </span>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight">Shogun: Tactical RPG Prototype in Active Development</h2>
                <p className="mt-3 text-sm text-[var(--muted)] leading-relaxed">
                  A focused solo case study combining playable combat systems, comparative design research, and studio-style planning documents.
                </p>
                <ul className="mt-5 space-y-2 text-sm text-[var(--muted)]">
                  <li>- Playable prototype validating turn order and position-based combat loops.</li>
                  <li>- Systems audit grounded in Naruto Blazing combat analysis.</li>
                  <li>- Full GDD covering mechanics, scope, and implementation direction.</li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="https://youtu.be/mTIhaiYbRDk"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full border border-[var(--foreground)] bg-[var(--foreground)] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--background)] shadow-[var(--shadow)] transition-all duration-300 hover:bg-transparent hover:text-[var(--foreground)] hover:[box-shadow:var(--shadow-strong),0_0_22px_var(--accent-cyan)]"
                  >
                    Watch Prototype Video
                  </a>
                  <a
                    href="https://docs.google.com/document/d/1H1RVHiRcTWC9bKdPeEIab16GYU6gXJxJ2aQxmZIGaZg/edit?tab=t.0#heading=h.p4vrpp5ibll6"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full border border-[var(--border)] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--foreground)] transition-all duration-300 hover:border-[var(--foreground)]"
                  >
                    Open Technical GDD
                  </a>
                </div>
              </div>
              <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)]">
                <div className="aspect-video w-full">
                  <LightboxImage
                    src="/images/ShogunFlowersFallinBlood_WhereIAmAtRightNow_Gameplay.png"
                    alt="Shogun current gameplay prototype progress"
                    width={1400}
                    height={900}
                    className="h-full w-full object-cover"
                    roundedClassName="rounded-none"
                    popupCaption="Featured Shogun gameplay still showing current prototype progression."
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Project Snapshot</h2>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                Shogun: Flowers Fall in Blood is a mobile tactical RPG prototype focused on turn order control, positional combat, and readable grid-based decision making.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-[var(--muted)]">
                <li>- Built as an independent Unity prototype with mobile-first combat pacing.</li>
                <li>- Core influence blend: Naruto Blazing tactical loops + Ronin combat tension.</li>
                <li>- Documented with a studio-style GDD and a dedicated systems analysis pass.</li>
              </ul>
            </div>
            <div className="group mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)] md:mx-0 md:ml-auto">
              <div className="aspect-video w-full">
                <LightboxImage
                  src="/images/ShogunFlowersFallinBlood_WhereIAmAtRightNow_Gameplay.png"
                  alt="Shogun current gameplay prototype progress"
                  width={1400}
                  height={900}
                  className="h-full w-full object-cover"
                  roundedClassName="rounded-none"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Prototype Gameplay</h2>
              <p className="text-sm text-[var(--muted)] leading-relaxed mb-6">
                Main gameplay capture showing current combat readability, turn pacing, and in-progress tactical loop implementation.
              </p>
              <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-black">
                <div className="aspect-video w-full">
                  <LightboxVideo
                    embedUrl="https://www.youtube.com/embed/mTIhaiYbRDk"
                    thumbnailUrl="https://img.youtube.com/vi/mTIhaiYbRDk/maxresdefault.jpg"
                    title="Shogun: Flowers Fall in Blood Prototype Gameplay"
                    popupCaption="Prototype gameplay capture — current state of movement, timing, and tactical combat feedback."
                    className="h-full w-full object-cover"
                    roundedClassName="rounded-none"
                  />
                </div>
              </div>
            </div>
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Current Focus</h2>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                I&apos;m currently building the initiative/turn-order timeline system inspired by Blazing and classic tactics RPGs.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-[var(--muted)]">
                <li>- Floating timeline of upcoming unit turns.</li>
                <li>- Dynamic character head-crop sequencing.</li>
                <li>- Real-time order updates based on action outcomes.</li>
              </ul>
              <p className="mt-5 text-sm text-[var(--muted)] leading-relaxed">
                Current task: basic enemy AI logic so enemies can autonomously move and attack on turn, closing the early combat loop.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Systems Research & Documentation</h2>
              <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
                I analyzed Naruto Blazing at a systems level to break down movement circles, team attack triggers, and shared-risk combat decisions before building the prototype.
              </p>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                <li>- Squad synergy and team-attack trigger patterns.</li>
                <li>- Shared HP management risk loops.</li>
                <li>- Range-based movement and attack geometry.</li>
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
                  Read Full GDD
                </a>
              </div>
            </div>
            <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
              <div className="aspect-video w-full bg-black">
                <LightboxImage
                  src="/images/ShogunFlowersFallinBlood_HW_NarutoBlazing_Showcase_Example.png"
                  alt="Shogun homework research showcase inspired by Naruto Blazing"
                  width={1400}
                  height={900}
                  className="h-full w-full object-contain"
                  roundedClassName="rounded-none"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Historical Inspiration</h2>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                Researching <i>Taikou Risshiden V</i> helped refine circle-based movement, positional triggers, and prediction-oriented turn planning for this prototype&apos;s combat direction.
              </p>
              <div className="flex flex-wrap gap-3 mt-5">
                <a
                  href="https://www.reddit.com/r/dynastywarriors/comments/rokiog/taiko_risshiden_v_is_one_of_koei_tecmo_greatest/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-[var(--border)] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--foreground)] hover:border-[var(--foreground)]"
                >
                  View TRV Notes
                </a>
                <a
                  href="https://youtu.be/3DBdaVHeVnY"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-[var(--border)] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--foreground)] hover:border-[var(--foreground)]"
                >
                  TRV Video
                </a>
              </div>
            </div>
            <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
              <div className="aspect-video w-full bg-black">
                <LightboxVideo
                  embedUrl="https://www.youtube.com/embed/3DBdaVHeVnY"
                  thumbnailUrl="https://img.youtube.com/vi/3DBdaVHeVnY/maxresdefault.jpg"
                  title="Taikou Risshiden V Reference Video"
                  className="h-full w-full object-cover"
                  roundedClassName="rounded-none"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Current Prototype Systems</h2>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                <li>- Player movement within a defined movement radius.</li>
                <li>- Dynamic visual attack range circles.</li>
                <li>- Smooth mobile-friendly positioning on a tactical grid.</li>
                <li>- Unity Editor debug testing with dynamic range calculations.</li>
              </ul>
            </div>
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Original Games Credits & Acknowledgments</h2>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                <li>- Naruto Shippuden: Ultimate Ninja Blazing (GREE / Bandai Namco) for tactical combat and squad systems inspiration.</li>
                <li>- Ronin: The Last Samurai (Dreamotion) for gesture-driven combat philosophy inspiration.</li>
                <li>- Taikou Risshiden V (Koei) for pioneering circle-based movement mechanics.</li>
                <li>- Broader Japanese tactical RPG and doujin scene influence.</li>
              </ul>
              <p className="mt-4 text-sm text-[var(--muted)] leading-relaxed">
                All design and development of Shogun: Flowers Fall in Blood remains an independent personal project.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
