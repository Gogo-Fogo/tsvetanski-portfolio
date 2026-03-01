import Breadcrumbs from '@/components/breadcrumbs';
import LightboxImage from '@/components/lightbox-image';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "V4N GOGO Figurine Lab | Georgi Tsvetanski",
  description: "Independent figurine-making and concept-art practice — character form, silhouette studies, and iterative craft. Photos on Instagram, process videos on YouTube.",
};


const profileLinks = {
  instagram: 'https://www.instagram.com/v4n_gogo/',
  youtube: 'https://www.youtube.com/@v4n_gogo',
  conceptTrackFaq: 'https://shadygrove.usmd.edu/academics/faq',
};

const galleryImages = [
  {
    src: '/images/Art_3D.jpg',
    alt: 'Figurine and character art collage - 3D work',
    width: 1600,
    height: 900,
    caption: 'Selection of figure-focused 3D and concept work documented in the channel archive.',
  },
  {
    src: '/images/Art_3D_2.jpg',
    alt: 'Additional 3D and figurine concept collage',
    width: 1600,
    height: 900,
    caption: 'Follow-up exploration of stylized forms, material ideas, and production-ready shapes.',
  },
  {
    src: '/images/Art_Traditional_Charcoal_Pencil_etc.jpg',
    alt: 'Traditional study sheet with expressive eye sketches',
    width: 1600,
    height: 900,
    caption: 'Traditional studies that feed into figurine expression, silhouette, and personality.',
  },
  {
    src: '/images/Art_Traditional_Charcoal_Pencil_etc_2.jpg',
    alt: 'Additional traditional art studies',
    width: 1600,
    height: 900,
    caption: 'Analog sketch passes used before digital cleanup or physical iteration.',
  },
];

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
            Independent Art Practice - Figurine Making
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight">V4N GOGO Figurine Lab</h1>
          <p className="mt-3 max-w-3xl text-[var(--muted)]">
            Personal figurine-making and concept-art channel — character form, visual storytelling, iterative craft.
            Photos on Instagram; process videos on YouTube.
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
            <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Current Focus</h2>
            <ul className="space-y-2 text-sm text-[var(--muted)]">
              <li>- Character silhouette exploration and expression studies</li>
              <li>- Figurine concept ideation and small-batch refinement</li>
              <li>- Ongoing publishing cadence through Instagram + YouTube</li>
              <li>- Scaled practice model while balancing academic workload</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Selected Gallery</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {galleryImages.map((image) => (
                <div key={image.src} className="overflow-hidden rounded-xl border border-[var(--border)]">
                  <div className="aspect-video w-full">
                    <LightboxImage
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      className="h-full w-full object-cover"
                      roundedClassName="rounded-none"
                      popupCaption={image.caption}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

