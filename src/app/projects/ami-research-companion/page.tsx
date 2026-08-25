import Breadcrumbs from '@/components/breadcrumbs';
import LightboxImage from '@/components/lightbox-image';
import ProjectAtAGlance from '@/components/project-at-a-glance';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ami | Georgi Tsvetanski',
  description:
    'A private research app that helps my mother search local documents, review original pages, and organize evidence on her MacBook.',
};

const snapshotItems = [
  {
    label: 'Role',
    value: 'Solo product designer and developer',
  },
  {
    label: 'Platform',
    value: 'Browser-based app packaged for macOS',
  },
  {
    label: 'Core Stack',
    value: 'Python, FAISS, local storage, Codex SDK bridge, HTML/CSS/JS',
  },
  {
    label: 'Purpose',
    value: 'Help my mother organize and search health-research materials',
  },
];

const constraintItems = [
  'The interface had to be comfortable for a non-technical user.',
  'Documents and the search index needed to remain on the device for privacy and offline access.',
  'Answers needed visible links to source pages and careful wording when evidence was incomplete.',
  'Installation, startup, and shutdown had to work without developer support.',
];

const shippedItems = [
  'Imports PDF, EPUB, TXT, Markdown, and short notes into a searchable local library.',
  'Finds relevant passages, shows page previews, and sends only the selected evidence to the AI.',
  'Stores personal notes and medical files separately while allowing them to be referenced when needed.',
  'Provides saved chats, document previews, suggested next steps, and optional reference images.',
  'Packages the app and its data folder together for portable macOS use.',
];

const latestBuildItems = [
  'A second launch detects the running server and reopens the interface instead of causing a port conflict.',
  'Browser heartbeat and shutdown signals close the background service after the Ami tab is closed.',
  'Ami.app contains the application; AmiData contains the library, search index, and personal records.',
  'Testing on my mother\'s MacBook exposed startup and shutdown problems that did not appear during development.',
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
            I built Ami for my mother. It organizes her PDFs, books, notes, and personal records; searches them on her computer; and shows the original
            evidence behind each AI-assisted answer.
          </p>
        </header>

        <section className="flex flex-col gap-12 md:gap-16">
          <ProjectAtAGlance items={snapshotItems} />

          <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
            <LightboxImage
              src="/images/projects/ami/ami-banner.png"
              alt="Ami interface with saved chats, grounded answer text, and an evidence preview card"
              width={2048}
              height={1280}
              className="h-auto w-full object-cover"
              popupCaption="Current Ami build with saved chats, answer text, and document page previews."
              roundedClassName="rounded-none"
            />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-start">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Problem And Approach</h2>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                My mother had articles, books, photos, lab documents, and personal notes spread across different places. The first problem was organizing
                that material so she could find useful evidence without managing several tools.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                I kept the library and search index on her device. Ami uses AI to summarize selected passages and suggest follow-up questions, while the
                interface keeps the source pages visible for verification.
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
            <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-start">
              <div>
                <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Current Build</h2>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  Ami manages a private document library, classifies imports, renders PDF page previews, saves settings and answer history, and sends
                  selected evidence to Codex through a local bridge.
                </p>
                <ul className="mt-5 space-y-3 text-sm text-[var(--muted)]">
                  {shippedItems.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </div>
              <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--background)] shadow-[var(--shadow)]">
                <LightboxImage
                  src="/images/projects/ami/ami-chat-followup.png"
                  alt="Ami follow-up answer showing practical next steps and a helpful tick image reference"
                  width={1800}
                  height={1200}
                  className="h-auto w-full object-cover"
                  popupCaption="Ami follow-up answer with practical next steps, careful wording when the library has no direct match, and a helpful reference image on the side rail."
                  roundedClassName="rounded-none"
                />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-3 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Product Screens</h2>
            <p className="mb-6 max-w-3xl text-sm text-[var(--muted)]">
              Current build captures showing saved chats, answers with cited evidence, document previews, optional reference images, and saved preferences.
            </p>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
              <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--background)] shadow-[var(--shadow)]">
                <LightboxImage
                  src="/images/projects/ami/ami-chat-evidence.png"
                  alt="Ami answer view with saved folders, grounded response text, and document evidence preview cards"
                  width={1800}
                  height={1200}
                  className="h-auto w-full object-cover"
                  popupCaption="Evidence-heavy Ami answer state: saved folders on the left, grounded answer copy in the center, and document preview cards on the right."
                  roundedClassName="rounded-none"
                />
              </div>
              <div className="grid grid-cols-1 gap-6">
                <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--background)] shadow-[var(--shadow)]">
                  <LightboxImage
                    src="/images/projects/ami/ami-chat-followup.png"
                    alt="Ami follow-up answer with helpful image rail"
                    width={1800}
                    height={1200}
                    className="h-auto w-full object-cover"
                    popupCaption="Follow-up answer state: Ami can stay calm and useful even when the library has no direct match, then offer practical next steps and a helpful visual instead of bluffing certainty."
                    roundedClassName="rounded-none"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--background)] shadow-[var(--shadow)]">
                  <LightboxImage
                    src="/images/projects/ami/ami-settings-panel.png"
                    alt="Ami options panel showing current account, model, reasoning, storage root, and saved defaults"
                    width={1600}
                    height={1500}
                    className="h-auto w-full object-cover"
                    popupCaption="Options and defaults panel: connected account, model/reasoning, storage root, library paths, and chat-image preferences all visible in the product itself."
                    roundedClassName="rounded-none"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">MacBook Testing</h2>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                Testing the installed app on my mother&apos;s MacBook exposed lifecycle problems that did not appear on my development machine. I used that
                feedback to simplify relaunching the app and shutting down its background service.
              </p>
              <ul className="mt-5 space-y-3 text-sm text-[var(--muted)]">
                {latestBuildItems.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Engineering Scope</h2>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                I handled product design, document retrieval, local storage, interface implementation, packaging, debugging, and deployment. The project
                required both system-level decisions and patient iteration with a non-technical user.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                It demonstrates experience with private on-device data, evidence-based AI features, cross-platform packaging, and interface design for a
                stressful research context.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Outcome</h2>
            <p className="text-sm leading-relaxed text-[var(--muted)]">
              I deployed Ami on my mother&apos;s MacBook as a portable app with local document search, page-level evidence, saved conversations, and a data
              folder she can move or back up independently.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
