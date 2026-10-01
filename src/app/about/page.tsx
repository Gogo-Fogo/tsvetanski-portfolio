import Image from 'next/image';
import Link from 'next/link';
import DegreeGraph from '@/components/degree-graph';
import { MotionPage } from '@/components/motion-safe';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Georgi Tsvetanski',
  description: 'XR and gameplay developer working across spatial interaction, simulation, and game systems.',
};

const experience = [
  {
    role: 'Game Development',
    org: 'Pixel Bulb Studio · Shinobi Story',
    period: 'May 2021 – Apr 2024',
    metric: '$110K project revenue',
    href: '/projects/shinobi-story',
  },
  {
    role: 'Digital & Visual Media',
    org: 'UMD Cyber-Physical Systems Engineering',
    period: 'Sep 2023 – Oct 2024',
    metric: 'Media · outreach · coordination',
    href: '/cpse',
  },
  {
    role: 'Gameplay QA / Analysis',
    org: 'Shokuho Mod Team · Freelance',
    period: 'Mar 2025 – Aug 2025',
    metric: 'Testing · balance · capture',
    href: null,
  },
];

export default function About() {
  return (
    <main className="min-h-screen bg-[var(--background)] px-6 py-8 text-[var(--foreground)] font-sans sm:px-8 md:px-16 md:py-12 lg:px-20">
      <MotionPage className="mx-auto max-w-5xl">
        <header className="border-b border-[var(--border)] pb-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link href="/" className="text-sm font-mono hover:underline decoration-1 underline-offset-4">
              ← BACK TO HOME
            </Link>
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-[var(--foreground)] bg-[var(--foreground)] px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--background)] transition-colors hover:bg-transparent hover:text-[var(--foreground)]"
            >
              View One-Page Resume [PDF] ↗
            </Link>
          </div>

          <div className="mt-12 grid items-center gap-8 sm:grid-cols-[176px_minmax(0,1fr)] sm:gap-10 md:grid-cols-[192px_minmax(0,1fr)] md:gap-12">
            <div className="relative aspect-square w-full max-w-48 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)]">
              <Image
                src="/images/Georgi_PFP.jpg"
                alt="Georgi Tsvetanski"
                fill
                sizes="(min-width: 768px) 192px, 144px"
                className="object-cover"
                priority
                quality={100}
                unoptimized
              />
            </div>
            <div className="max-w-2xl">
              <p className="mb-4 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">About / T-Shaped Developer</p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">XR &amp; Gameplay Developer</h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--muted)]">
                Interactive systems, simulation, and player-facing tools across XR and Unity.
              </p>
            </div>
          </div>
        </header>

        <section className="py-10 md:py-14" aria-labelledby="education-heading">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <h2 id="education-heading" className="text-3xl font-bold tracking-tight">Education</h2>
            <Link href="/projects/mumosa-crisis-response-vr" className="text-xs font-mono uppercase tracking-[0.16em] text-[var(--muted)] hover:text-[var(--foreground)]">
              MUMOSA client project →
            </Link>
          </div>

          <DegreeGraph className="mx-auto h-[620px] w-full max-w-3xl transition-all duration-300 sm:h-[500px] lg:h-[560px]" />

          <p className="mt-4 text-sm text-[var(--muted)]">University of Baltimore · Simulation &amp; Game Design</p>
        </section>

        <section className="pb-10 md:pb-14" aria-labelledby="experience-heading">
          <div className="mb-5 flex items-end justify-between gap-4">
            <h2 id="experience-heading" className="text-3xl font-bold tracking-tight">Experience</h2>
            <Link href="/career" className="text-xs font-mono uppercase tracking-[0.18em] text-[var(--muted)] hover:text-[var(--foreground)]">
              Full archive →
            </Link>
          </div>

          <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {experience.map((item) => (
              <article key={`${item.role}-${item.period}`} className="grid gap-3 py-5 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-8">
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-lg font-semibold tracking-tight">{item.role}</h3>
                    <span className="text-xs font-mono uppercase tracking-[0.14em] text-[var(--muted)]">{item.period}</span>
                  </div>
                  <p className="mt-1 text-xs font-mono uppercase tracking-[0.14em] text-[var(--muted)]">{item.org}</p>
                </div>
                <div className="flex items-center justify-between gap-4 md:min-w-52 md:flex-col md:items-end md:justify-center">
                  <span className="text-xs font-mono uppercase tracking-[0.12em] text-[var(--muted)]">{item.metric}</span>
                  {item.href && (
                    <Link href={item.href} className="text-xs font-mono uppercase tracking-[0.18em] text-[var(--foreground)] hover:underline underline-offset-4">
                      View work →
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border)] pt-8">
          <p className="text-sm text-[var(--muted)]">Open to thoughtful work in XR, gameplay, and interaction design.</p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--foreground)] hover:underline underline-offset-4"
            >
              Resume PDF ↗
            </Link>
            <a href="mailto:georgi@tsvetanski.com" className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--foreground)] hover:underline underline-offset-4">
              Contact →
            </a>
          </div>
        </footer>
      </MotionPage>
    </main>
  );
}
