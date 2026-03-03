import Breadcrumbs from '@/components/breadcrumbs';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "V4N GOGO Figurine Lab | Georgi Tsvetanski",
  description: "Statuette creation practice — 3D printing, hand painting, LED integration, and custom button systems. Documented at @v4n_gogo on Instagram and YouTube.",
};


const profileLinks = {
  instagram: 'https://www.instagram.com/v4n_gogo/',
  youtube: 'https://www.youtube.com/@v4n_gogo',
  conceptTrackFaq: 'https://shadygrove.usmd.edu/academics/faq',
};


export default function V4NGogoFigurineLabPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] p-8 font-sans text-[var(--foreground)] md:p-24">
      <div className="mx-auto max-w-5xl">
        <header className="mb-16">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Projects', href: '/career' },
              { label: 'V4N GOGO Figurine Lab' },
            ]}
            className="mb-4"
          />
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">
            Independent Art Practice — Statuette Creation
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight">V4N GOGO Figurine Lab</h1>
          <p className="mt-3 max-w-3xl text-[var(--muted)]">
            Statuette creation practice under <span className="text-[var(--foreground)] font-medium">@v4n_gogo</span> — 3D printing,
            hand painting, LED integration, and custom button/electronics systems.
            Work documented through Instagram and YouTube.
          </p>
        </header>

        <section className="flex flex-col gap-12 md:gap-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">How It Started</h2>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                I initially started this path after pitching into the concept track at Shady Grove.
                After passing, I received a small grant in <span className="font-medium text-[var(--foreground)]">2024</span> that helped me form
                an LLC for figurine making.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                The LLC is no longer active because of school time constraints, but I continue the work as a hobby and side hustle while
                documenting progress publicly.
              </p>
              <a
                href={profileLinks.conceptTrackFaq}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center rounded-full border border-[var(--border)] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--foreground)] transition-colors hover:border-[var(--foreground)]"
              >
                Shady Grove FAQ
              </a>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Where To Follow</h2>
              <div className="space-y-4">
                <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Photos</p>
                  <p className="mt-2 text-sm text-[var(--muted)]">Instagram archive for stills, WIP captures, and finished figure shots.</p>
                  <a
                    href={profileLinks.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center rounded-full border border-[var(--foreground)] bg-[var(--foreground)] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--background)] transition-colors hover:bg-transparent hover:text-[var(--foreground)]"
                  >
                    Open Instagram
                  </a>
                </div>
                <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Videos</p>
                  <p className="mt-2 text-sm text-[var(--muted)]">
                    YouTube uploads for process clips and motion demos with better bitrate than social reposts.
                  </p>
                  <a
                    href={profileLinks.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center rounded-full border border-[var(--foreground)] bg-[var(--foreground)] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--background)] transition-colors hover:bg-transparent hover:text-[var(--foreground)]"
                  >
                    Open YouTube
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">What I Make</h2>
            <ul className="space-y-2 text-sm text-[var(--muted)]">
              <li>— Statuette design and 3D printing (FDM & resin)</li>
              <li>— Hand painting and finishing (priming, layering, weathering)</li>
              <li>— LED integration — lighting rigs embedded directly in figures</li>
              <li>— Custom button and electronics systems for interactive pieces</li>
              <li>— Ongoing publishing cadence through Instagram + YouTube</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}

