import Breadcrumbs from '@/components/breadcrumbs';
import InstagramGrid from '@/components/instagram-grid';
import ProjectAtAGlance from '@/components/project-at-a-glance';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Figuresmith LLC — Figurine Studio",
  description: "I founded Figuresmith LLC as a figurine-making studio after receiving a 2024 Concept Track grant, combining 3D printing, hand painting, LEDs, and custom electronics.",
};


const profileLinks = {
  instagram: 'https://www.instagram.com/v4n_gogo/',
  youtube: 'https://www.youtube.com/@v4n_gogo',
  conceptTrackFaq: 'https://shadygrove.usmd.edu/academics/faq',
};

const youtubeShorts = [
  'rR83laKg7MM',
  'IJKsUegf6xo',
  'CxWfmaZat_g',
  'APO4Cfk-8G0',
  'UAwoRD7nFaY',
  'MEPPntSmgoE',
  '0Agb3PO1sgs',
];

const instagramPosts = [
  'https://www.instagram.com/p/DMbttH9RBed/',
  'https://www.instagram.com/p/DFh7DlAxUNC/',
  'https://www.instagram.com/p/DEdgZLMRETF/',
];

const snapshotItems = [
  { label: 'My role', value: 'Founder, owner, and independent maker' },
  { label: 'Business milestone', value: 'Formed Figuresmith LLC with support from a 2024 Concept Track grant' },
  { label: 'What I make', value: 'Printed, painted, and electronically enhanced statuettes' },
  { label: 'Process', value: 'FDM and resin printing, finishing, LEDs, custom controls' },
  { label: 'Current status', value: 'LLC later closed; the practice continues as a hobby and side business' },
] as const;


export default function FiguresmithPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] p-8 font-sans text-[var(--foreground)] md:p-24">
      <div className="mx-auto max-w-5xl">
        <header className="mb-16">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Projects', href: '/career' },
              { label: 'Figuresmith LLC' },
            ]}
            className="mb-4"
          />
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">
            Founder-Led Figurine Studio — LLC Formed in 2024
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight">Figuresmith LLC</h1>
          <p className="mt-3 max-w-3xl text-[var(--muted)]">
            I founded and formed <span className="font-semibold text-[var(--foreground)]">Figuresmith LLC</span> after receiving a 2024
            Concept Track grant. The studio combined 3D printing, hand painting, LED integration, and custom electronics, with the
            work published publicly under <span className="font-medium text-[var(--foreground)]">@v4n_gogo</span>.
          </p>
          <div className="mt-6 max-w-3xl rounded-2xl border border-[var(--accent-orange)]/50 bg-[color-mix(in_oklab,var(--surface)_88%,var(--accent-orange)_12%)] p-5 shadow-[var(--shadow)]">
            <p className="text-[10px] font-mono font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">Business milestone</p>
            <p className="mt-2 text-lg font-semibold text-[var(--foreground)]">Formed Figuresmith LLC in 2024</p>
            <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">
              I turned the grant-backed figurine concept into a registered small business and operated it alongside school before
              closing the LLC when the time commitment became unsustainable.
            </p>
          </div>
        </header>

        <section className="flex flex-col gap-12 md:gap-16">
          <ProjectAtAGlance items={snapshotItems} />

          {/* Videos — lead with media */}
          <div>
            <div className="mb-6 flex items-end justify-between">
              <div>
                <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Videos</h2>
                <p className="mt-1.5 text-sm text-[var(--muted)]">
                  Process clips and figure demos from{' '}
                  <span className="text-[var(--foreground)]">@v4n_gogo</span> on YouTube.
                </p>
              </div>
              <a
                href={profileLinks.youtube}
                target="_blank"
                rel="noreferrer"
                className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
              >
                Full channel →
              </a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {youtubeShorts.map((id) => (
                <div
                  key={id}
                  className="overflow-hidden rounded-xl bg-black"
                  style={{ aspectRatio: '9/16' }}
                >
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${id}`}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    title="YouTube Short"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Recent Work — Instagram */}
          <div>
            <div className="mb-6 flex items-end justify-between">
              <div>
                <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Recent Work</h2>
                <p className="mt-1.5 text-sm text-[var(--muted)]">
                  Figure stills and WIP captures from{' '}
                  <span className="text-[var(--foreground)]">@v4n_gogo</span> on Instagram.
                </p>
              </div>
              <a
                href={profileLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
              >
                @v4n_gogo →
              </a>
            </div>
            <InstagramGrid permalinks={instagramPosts} />
          </div>

          {/* Context */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">From Grant Pitch to LLC</h2>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                I started this path by pitching the figurine studio through the Shady Grove Concept Track. After being selected, I
                received a small grant in <span className="font-medium text-[var(--foreground)]">2024</span> and used that momentum to legally
                form <span className="font-medium text-[var(--foreground)]">Figuresmith LLC</span> for figurine making.
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
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">What I Make</h2>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                <li>— Statuette design and 3D printing (FDM & resin)</li>
                <li>— Hand painting and finishing (priming, layering, weathering)</li>
                <li>— LED integration — lighting rigs embedded directly in figures</li>
                <li>— Custom button and electronics systems for interactive pieces</li>
                <li>— Ongoing publishing cadence through Instagram + YouTube</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
