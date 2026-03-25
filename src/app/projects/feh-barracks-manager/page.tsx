import Breadcrumbs from '@/components/breadcrumbs';
import DocViewer from '@/components/doc-viewer';
import type { DocOutlineItem, DocPage } from '@/components/doc-viewer';
import LightboxImage from '@/components/lightbox-image';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FEH Barracks Manager | Georgi Tsvetanski',
  description:
    'Solo-built Fire Emblem Heroes companion app spanning synced user data, a custom scraping pipeline, AI export, and portable Windows launcher distribution.',
};

const snapshotItems = [
  {
    label: 'Role',
    value: 'Solo developer across product design, frontend, data ingestion, release flow, and launcher packaging',
  },
  {
    label: 'Surfaces',
    value: 'Browser, mobile browser, and portable Windows launcher',
  },
  {
    label: 'Core Stack',
    value: 'Next.js 16, React 19, Supabase, custom Game8/Fandom pipeline, GitHub Releases',
  },
  {
    label: 'Current Local Scale',
    value: '1270 indexed heroes, 1271 headshots, 5081 full-body images, and 1267 quote files',
  },
];

const productItems = [
  'Account-based barracks with synced favorites, notes, team comps, and profile preferences.',
  'Hero browser, owned-library management, and direct entry editing for merges, dupes, blessings, and tracked build inventory.',
  'AI export endpoints that package owned-state context for planning and build-assistance workflows.',
  'Aether Resort and Tavern side surfaces that push the project past a plain database shell.',
  'Launcher-driven local install path for heavier asset bundles and desktop-first usage.',
];

const systemItems = [
  {
    title: 'App Product',
    body: 'The app layer handles auth, account-bound user state, hero browsing, barracks CRUD, My Heroes editing, Aether Resort, Tavern, and the AI export surface.',
  },
  {
    title: 'Data Pipeline',
    body: 'Behind the UI is a custom FEH dataset built from Game8 and Fandom. Game8 stays the canonical identity source, while Fandom fills in art, quotes, and shared assets.',
  },
  {
    title: 'Distribution',
    body: 'The project also ships as a portable Windows launcher that installs update bundles from GitHub Releases and keeps the heavier local asset path viable.',
  },
];

const hardProblemItems = [
  {
    title: 'Upstream Data Was Not Stable',
    body: 'This was never a clean API integration. The project had to survive roster drift, naming mismatches, lazy-loaded discovery gaps, and repeated importer hardening work.',
  },
  {
    title: 'Cloud Sync And Heavy Art Needed Different Homes',
    body: 'I kept user metadata in Supabase, but treated the full FEH art archive as local release-bundle material. That kept the app useful without pushing storage costs in the wrong direction.',
  },
  {
    title: 'Release Quality Mattered',
    body: 'This project needed real maintenance habits: scheduled imports, reconcile checks, launcher updates, asset bundles, release notes, and safer fallbacks when source data drifted.',
  },
];

const evidencePages: DocPage[] = [
  {
    src: '/images/projects/feh-barracks/feh-doc-01.png',
    alt: 'FEH Barracks Manager project summary page',
    width: 1224,
    height: 1584,
    caption: 'Project summary framing the app, pipeline, launcher, and cross-platform usage model.',
  },
  {
    src: '/images/projects/feh-barracks/feh-doc-02.png',
    alt: 'FEH Barracks Manager architecture and scale page',
    width: 1224,
    height: 1584,
    caption: 'Architecture and scale snapshot pulled from the current local project state and supporting notes.',
  },
  {
    src: '/images/projects/feh-barracks/feh-doc-03.png',
    alt: 'FEH Barracks Manager release and maintenance evidence page',
    width: 1224,
    height: 1584,
    caption: 'Release-direction and maintenance evidence based on recent release notes and active roadmap docs.',
  },
];

const evidenceOutline: DocOutlineItem[] = [
  { heading: 'Project Summary', pageIndex: 0 },
  { heading: 'Architecture & Scale', pageIndex: 1 },
  { heading: 'Release Notes', pageIndex: 2 },
];

const documentLinks = [
  {
    href: '/documents/projects/FEH_Barracks/portfolio-case-study/07-portfolio-case-study-draft.md',
    label: 'Case Study Draft',
  },
  {
    href: '/documents/projects/FEH_Barracks/portfolio-case-study/01-project-summary.md',
    label: 'Project Summary Notes',
  },
  {
    href: '/documents/projects/FEH_Barracks/release-notes-v0.4.0.md',
    label: 'Release Notes v0.4.0',
  },
];

export default function FehBarracksManagerCaseStudy() {
  return (
    <main className="min-h-screen bg-[var(--background)] p-8 font-sans text-[var(--foreground)] md:p-24">
      <div className="mx-auto max-w-5xl">
        <header className="mb-16">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Projects', href: '/career' },
              { label: 'FEH Barracks Manager' },
            ]}
            className="mb-4"
          />
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">
            Solo Project · Live-Service Companion App
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight">FEH Barracks Manager</h1>
          <p className="mt-3 max-w-4xl text-[var(--muted)]">
            FEH Barracks Manager started as a personal tool for Fire Emblem Heroes, then grew into a full product: synced barracks management, custom hero
            data ingestion, release-bundle distribution, and a portable launcher path for a game community that does not give you a stable API to work with.
          </p>
        </header>

        <section className="flex flex-col gap-12 md:gap-16">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
            <LightboxImage
              src="/images/projects/feh-barracks/feh-login-screen.png"
              alt="FEH Barracks Manager login screen with FEH character art and account entry flow"
              width={1024}
              height={768}
              className="h-auto w-full object-cover"
              popupCaption="Current FEH Barracks login surface: account entry on the left, FEH presentation art on the right, and the project already framed as a synced multi-device product."
              roundedClassName="rounded-none"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {snapshotItems.map((item) => (
              <div key={item.label} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow)]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">{item.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--foreground)]">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-start">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Why I Built It</h2>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                Fire Emblem Heroes creates a very specific product problem. Players are not only tracking owned units. They are tracking merge projects,
                dupes, skill plans, favorites, team ideas, and a roster that keeps changing under them. I wanted one place to keep that state usable across
                devices without pretending the data side would stay simple.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                That pushed the project into real systems work very quickly. The app had to feel like a real collection manager, but it also had to survive
                unstable source coverage, naming mismatches, release maintenance, and the cost tradeoffs of shipping a lot of FEH art.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">What The Product Covers</h2>
              <ul className="space-y-3 text-sm text-[var(--muted)]">
                {productItems.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">System Split</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {systemItems.map((item) => (
                <div key={item.title} className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
                  <p className="text-sm font-semibold text-[var(--foreground)]">{item.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-start">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Hard Problems I Had To Solve</h2>
              <div className="space-y-5">
                {hardProblemItems.map((item) => (
                  <div key={item.title}>
                    <p className="text-sm font-semibold text-[var(--foreground)]">{item.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)]">
              <LightboxImage
                src="/images/projects/feh-barracks/feh-release-art.webp"
                alt="FEH Barracks release art portrait used in the project's presentation layer"
                width={640}
                height={960}
                className="h-auto w-full object-cover"
                popupCaption="Release-presentation art pulled from the FEH Barracks asset pipeline and launcher-facing presentation work."
                roundedClassName="rounded-none"
              />
            </div>
          </div>

          <div>
            <h2 className="mb-3 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Project Evidence</h2>
            <p className="mb-5 max-w-3xl text-sm text-[var(--muted)]">
              I already had a local FEH case-study pack and release notes in progress, so I turned that material into a cleaner evidence viewer here. It
              shows the project summary, the current architecture/scale snapshot, and the release-hardening direction instead of asking the page to stand on
              portfolio copy alone.
            </p>
            <DocViewer
              title="FEH Barracks Manager Evidence Pack"
              description="Project summary, architecture/scale snapshot, and release-hardening notes distilled from the working FEH docs."
              pages={evidencePages}
              outline={evidenceOutline}
            />
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Notes & Documents</h2>
            <div className="flex flex-wrap gap-3">
              {documentLinks.map((document) => (
                <a
                  key={document.href}
                  href={document.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-[var(--border)] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--foreground)] transition-all duration-300 hover:border-[var(--foreground)]"
                >
                  {document.label}
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Outcome</h2>
            <p className="text-sm leading-relaxed text-[var(--muted)]">
              FEH Barracks Manager is one of the clearest examples of how I work when a project gets real. It is not just interface work and it is not just
              backend plumbing. It is product definition, data reliability, cost-aware architecture, release discipline, and enough user empathy to keep the
              tool practical even when the source data underneath it keeps moving.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
