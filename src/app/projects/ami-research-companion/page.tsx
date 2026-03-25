import Breadcrumbs from '@/components/breadcrumbs';
import LightboxImage from '@/components/lightbox-image';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ami | Georgi Tsvetanski',
  description:
    'Local-first research companion built for my mother: grounded source retrieval, careful personal-record cross-reference, Codex-backed synthesis, and a portable macOS app.',
};

const snapshotItems = [
  {
    label: 'Role',
    value: 'Solo developer, product designer, and family-side deployer',
  },
  {
    label: 'Platform',
    value: 'Local browser app plus portable macOS .app delivery',
  },
  {
    label: 'Core Stack',
    value: 'Python, FAISS, local storage, Codex SDK bridge, HTML/CSS/JS',
  },
  {
    label: 'Use Case',
    value: 'Evidence-heavy Lyme and health-research support for my mother',
  },
];

const constraintItems = [
  'It had to feel calm and usable for a real family member, not like a developer demo.',
  'The library and vector index needed to stay local so the tool could work with private records and offline materials.',
  'Health questions are high-stakes, so Ami needed source grounding, careful wording, and room for recency-aware follow-up instead of fake certainty.',
  'Deployment friction mattered as much as features. If the Mac version felt fragile or confusing, the project failed its real purpose.',
];

const shippedItems = [
  'A local evidence vault that can ingest PDF, EPUB, TXT, Markdown, and quick note-style status updates.',
  'A retrieval pipeline that packages grounded evidence, page previews, and Codex-ready prompt bundles instead of raw chunk dumps.',
  'A personal-record path that keeps mom-specific notes and medical files separate while still allowing careful cross-reference in answers.',
  'A chat-style UI with collapsed source cards, saved history, settings persistence, file import, and page preview support.',
  'A portable macOS delivery model built around Ami.app plus an adjacent AmiData folder so the tool can travel as one bundle.',
];

const latestBuildItems = [
  'Launching Ami.app again now detects an already-running local server and simply reopens the UI instead of colliding on port 8765.',
  'The browser client now sends heartbeat and shutdown signals so the background service can close itself after the Ami tab is gone.',
  'The real shipped shape is clearer now: Ami.app for the experience, AmiData for the library, vector DB, and personal records.',
  'Those changes came from real use on my mom\'s MacBook, not from theory alone, which makes them much more valuable than a lab-only polish pass.',
];

export default function AmiResearchCompanionCaseStudy() {
  return (
    <main className="min-h-screen bg-[var(--background)] p-8 font-sans text-[var(--foreground)] md:p-24">
      <div className="mx-auto max-w-5xl">
        <header className="mb-16">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Projects', href: '/career' },
              { label: 'Ami' },
            ]}
            className="mb-4"
          />
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">
            Personal Project · Local-First Research Companion
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight">Ami</h1>
          <p className="mt-3 max-w-4xl text-[var(--muted)]">
            I built Ami out of care for my mother. The goal was not to make an "AI doctor." It was to build a calmer research companion that could
            organize her PDFs and books, search local evidence, cross-reference personal records carefully, and package grounded questions and answers in
            a way that felt usable on her own MacBook.
          </p>
        </header>

        <section className="flex flex-col gap-12 md:gap-16">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
            <LightboxImage
              src="/images/projects/ami/ami-banner.png"
              alt="Ami research companion banner with app icon and in-app screenshot"
              width={1600}
              height={900}
              className="h-auto w-full object-cover"
              popupCaption="Ami: local-first research companion built for my mother, combining portable Mac delivery with grounded evidence retrieval and a calm chat interface."
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
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Why I Built It This Way</h2>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                Health research gets messy fast. My mother had articles, books, photos, lab documents, and personal notes spread across different places,
                and the hardest part was not "finding AI." It was keeping the evidence organized, local, and understandable enough to turn anxiety into a
                better next question.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                That is why Ami became a local-first tool instead of a typical cloud chatbot. The library stays on-device, the retrieval layer is grounded
                in her own materials, and the AI layer is there to synthesize and orient, not to pretend it replaces judgment or care.
              </p>
            </div>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Constraints That Mattered</h2>
              <ul className="space-y-3 text-sm text-[var(--muted)]">
                {constraintItems.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-start">
              <div>
                <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Current Build</h2>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  Ami now behaves like a real local product rather than a rough research console. It can manage a private evidence library, classify new
                  imports, render PDF page previews, persist settings and answer history, and hand grounded prompt bundles to Codex through a local bridge.
                </p>
                <ul className="mt-5 space-y-3 text-sm text-[var(--muted)]">
                  {shippedItems.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </div>
              <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--background)] shadow-[var(--shadow)]">
                <LightboxImage
                  src="/images/projects/ami/ami-ui-home.png"
                  alt="Ami chat interface with local conversation history and grounded answer layout"
                  width={1024}
                  height={768}
                  className="h-auto w-full object-cover"
                  popupCaption="Live Ami interface showing the local chat surface, saved chats, answer block, and low-friction composer built for real everyday use."
                  roundedClassName="rounded-none"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Latest Mac Build</h2>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                The latest build I brought back from my mom\'s MacBook mattered because it reflected real usage, not just local development. Studying that
                build exposed the final mile problems that only show up when a non-developer is actually living with the app.
              </p>
              <ul className="mt-5 space-y-3 text-sm text-[var(--muted)]">
                {latestBuildItems.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">What This Project Says About Me</h2>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                Ami is one of the clearest examples of how I work when something matters personally: I move between product thinking, systems design,
                packaging, UX cleanup, debugging, and deployment until the tool is actually usable by the person it was built for.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                It also shows a side of my engineering work that is easy to miss in game projects alone: local-first app design, grounded AI workflows,
                privacy-conscious storage, cross-platform packaging, and calm interaction design for stressful contexts.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Outcome</h2>
            <p className="text-sm leading-relaxed text-[var(--muted)]">
              The result is not a speculative AI concept page. It is a real tool I deployed for my mother: portable, source-grounded, and shaped by the
              kind of practical details that only show up when software has to help someone you care about.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
