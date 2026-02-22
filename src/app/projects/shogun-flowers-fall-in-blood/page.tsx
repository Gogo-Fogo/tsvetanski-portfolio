import Breadcrumbs from '@/components/breadcrumbs';
import LightboxImage from '@/components/lightbox-image';
import LightboxVideo from '@/components/lightbox-video';

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
            Solo Project — Mobile Tactical RPG Prototype — Unity
          </p>
        </header>

        <section className="flex flex-col gap-12 md:gap-16">
          {/* Hero Banner */}
          <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
            <div className="aspect-[16/6] w-full">
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

          {/* Overview & Core Philosophy */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Overview</h2>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                Shogun: Flowers Fall in Blood is a mobile tactical RPG prototype that reimagines grid-based, position-focused combat for modern mobile expectations.
              </p>
              <p className="text-sm text-[var(--muted)] leading-relaxed mt-4">
                The design combines the tactical depth of Naruto Blazing with the execution-driven philosophy of Ronin: The Last Samurai, all prototyped in Unity.
              </p>
            </div>
            <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
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

          {/* Research & Design Documents */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Systems Research</h2>
              <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
                I analyzed Naruto Blazing at a systems level to understand its "movement circle" and risk-reward mechanics.
              </p>
              <ul className="space-y-2 text-sm text-[var(--muted)] mb-6">
                <li>- Squad synergy & team attack patterns</li>
                <li>- Shared HP management risk loops</li>
                <li>- Range-based movement tactical grids</li>
              </ul>
              <a
                href="https://docs.google.com/document/d/1tQy-96n6PT-5ejI6dY2StB-Uuhs10RdjcZGwNd-t5xM/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-[var(--foreground)] bg-[var(--foreground)] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--background)] shadow-[var(--shadow)] transition-all duration-300 hover:bg-transparent hover:text-[var(--foreground)]"
              >
                View Systems Audit
              </a>
            </div>

            <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
              <div className="aspect-video w-full">
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

          {/* GDD & Studio Standards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)] md:order-2">
              <div className="aspect-video md:aspect-[32/9] w-full bg-black">
                <LightboxVideo
                  embedUrl="https://www.youtube.com/embed/mTIhaiYbRDk"
                  thumbnailUrl="https://img.youtube.com/vi/mTIhaiYbRDk/maxresdefault.jpg"
                  title="Shogun: Flowers Fall in Blood Prototype Gameplay"
                  className="h-full w-full object-cover"
                  roundedClassName="rounded-none"
                />
              </div>
            </div>
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)] md:order-1">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Technical GDD</h2>
              <p className="text-sm text-[var(--muted)] leading-relaxed mb-6">
                I authored a studio-style Game Design Document that covers everything from LiveOps and monetization to combat loop class archetypes.
              </p>
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

          {/* Historical References */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
                <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Historical Inspiration</h2>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  Researching <i>Taikou Risshiden V</i> helped me refine circle-based movement and positional triggers. Its influence is key to my turn-order timeline and initiative systems.
                </p>
              </div>
            </div>
            <div className="group border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-4 shadow-[var(--shadow)] transition-all duration-300 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
              <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-black">
                <div className="aspect-video w-full">
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
          </div>

          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Current Prototype Systems</h2>
            <ul className="space-y-2 text-sm text-[var(--muted)]">
              <li>- Player movement within a defined movement radius</li>
              <li>- Dynamic visual attack range circles</li>
              <li>- Smooth mobile-friendly positioning on a tactical grid</li>
              <li>- Unity Editor debug testing with dynamic range calculations</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Where I Am Right Now</h2>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                I’m currently building the initiative/turn-order timeline system inspired by Blazing and classic tactics RPGs.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                <li>- Floating timeline of upcoming unit turns</li>
                <li>- Dynamic character head-crop sequencing</li>
                <li>- Real-time order updates based on action outcomes</li>
              </ul>
              <p className="text-sm text-[var(--muted)] leading-relaxed mt-4">
                Current task: basic enemy AI logic so enemies can autonomously move and attack on turn, closing the early combat loop.
              </p>
            </div>

            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Researching Taikou Risshiden V</h2>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                I’m studying Taikou Risshiden V as a niche ancestor of circle-based tactical movement design. Its free-movement arenas,
                positional triggers, and prediction-oriented combat design are already influencing my prototype direction.
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
          </div>

          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Original Games Credits & Acknowledgments</h2>
            <ul className="space-y-2 text-sm text-[var(--muted)]">
              <li>- Naruto Shippuden: Ultimate Ninja Blazing (GREE / Bandai Namco) for tactical combat and squad systems inspiration</li>
              <li>- Ronin: The Last Samurai (Dreamotion) for gesture-driven combat philosophy inspiration</li>
              <li>- Taikou Risshiden V (Koei) for pioneering circle-based movement mechanics</li>
              <li>- Broader Japanese tactical RPG and doujin scene influence</li>
            </ul>
            <p className="mt-4 text-sm text-[var(--muted)] leading-relaxed">
              All design and development of Shogun: Flowers Fall in Blood remains an independent personal project.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
