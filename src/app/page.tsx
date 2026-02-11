import Image from 'next/image';
import CopyEmailButton from '@/components/copy-email-button';
import Link from 'next/link';
import { Instagram, Linkedin } from 'lucide-react';
import { MotionPage } from '@/components/motion-safe';

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-6 py-12 sm:py-14 md:px-16 md:py-16 lg:py-20 bg-[var(--background)] text-[var(--foreground)] font-sans" style={{ backgroundImage: "linear-gradient(to bottom, var(--hero-start), var(--hero-mid), var(--hero-end))" }}>
      <div className="pointer-events-none absolute inset-0 opacity-60" aria-hidden="true">
        <div className="absolute left-1/2 top-20 h-64 w-64 -translate-x-1/2 rounded-full bg-[var(--surface)] blur-[120px]"></div>
      </div>
      <MotionPage className="relative z-10 max-w-5xl w-full items-center justify-center font-sans text-sm flex flex-col space-y-6 sm:space-y-7 lg:space-y-9">
        <div className="flex flex-col items-center space-y-4 sm:space-y-5 lg:space-y-6 lg:flex-row lg:items-center lg:space-y-0 lg:space-x-10">
          <div className="relative h-32 w-32 sm:h-36 sm:w-36 lg:h-44 lg:w-44">
            <Image
              src="/images/Tsvetanski_Georgi_Headshot.jpeg"
              alt="Georgi Tsvetanski headshot"
              fill
              sizes="(min-width: 768px) 176px, 144px"
              className="rounded-full object-cover"
              priority
            />
          </div>
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[var(--foreground)]">
              Georgi Tsvetanski
            </h1>
            <div className="text-base sm:text-lg text-[var(--muted)] max-w-2xl space-y-2">
              <p>Spatial interaction prototyper for XR + simulation.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-5 sm:mt-6 lg:mt-8 grid w-full max-w-4xl gap-5 sm:gap-6 md:grid-cols-2">
          <Link
            href="/career"
            className="group rounded-3xl border border-transparent bg-[var(--surface)] p-8 text-left shadow-[var(--shadow)] transition-all duration-300 hover:bg-[var(--surface)] hover:shadow-[var(--shadow-strong)] hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]"
          >
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Primary Focus</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-[var(--foreground)]">XR Simulation Engineering</h2>
            <ul className="mt-3 list-disc pl-5 text-base text-[var(--muted)] space-y-2">
              <li>Spatial interaction systems</li>
              <li>Simulation and gameplay engineering</li>
              <li>Technical project case studies</li>
            </ul>
            <div className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors">
              View Projects →
            </div>
            <span className="mt-6 block h-px w-14 bg-[var(--accent-cyan)] opacity-40 transition group-hover:opacity-90"></span>
          </Link>

          <Link
            href="/creative"
            className="group rounded-3xl border border-transparent bg-[var(--surface)] p-8 text-left shadow-[var(--shadow)] transition-all duration-300 hover:bg-[var(--surface)] hover:shadow-[var(--shadow-strong)] hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-orange)]"
          >
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Secondary Focus</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-[var(--foreground)]">Videography & Storytelling</h2>
            <ul className="mt-3 list-disc pl-5 text-base text-[var(--muted)] space-y-2">
              <li>Cinematic edits and trailers</li>
              <li>Interview and outreach media</li>
              <li>Narrative communication work</li>
            </ul>
            <div className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors">
              Explore Videography & Storytelling →
            </div>
            <span className="mt-6 block h-px w-14 bg-[var(--accent-orange)] opacity-40 transition group-hover:opacity-90"></span>
          </Link>
        </div>

        <nav className="flex flex-wrap justify-center gap-6 sm:gap-7 pt-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">
          <Link href="/about" className="group flex flex-col items-center">
            <span className="transition-colors group-hover:text-[var(--foreground)]">About</span>
            <span className="mt-2 h-px w-4 bg-[var(--foreground)]/40 transition-all duration-300 group-hover:w-full group-hover:bg-[var(--foreground)]"></span>
          </Link>
          <Link href="/resume" className="group flex flex-col items-center">
            <span className="transition-colors group-hover:text-[var(--foreground)]">Resume</span>
            <span className="mt-2 h-px w-4 bg-[var(--foreground)]/40 transition-all duration-300 group-hover:w-full group-hover:bg-[var(--foreground)]"></span>
          </Link>
        </nav>

        <section className="mt-5 sm:mt-6 lg:mt-8 w-full max-w-3xl border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-5 sm:p-6 lg:p-7 shadow-[var(--shadow)]">
          <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-4 text-center">Connect</h2>
          <div className="mt-4 sm:mt-6 flex flex-wrap justify-center gap-3 sm:gap-4">
            <CopyEmailButton email="georgi@tsvetanski.com" />
            <a
              href="https://www.linkedin.com/in/georgi-tsvetanski-526373234"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[var(--foreground)] text-[var(--foreground)] p-4 text-[11px] font-semibold uppercase tracking-[0.3em] hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/v4n_gogo/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[var(--foreground)] text-[var(--foreground)] p-4 text-[11px] font-semibold uppercase tracking-[0.3em] hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors"
              aria-label="Instagram"
              title="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </section>
      </MotionPage>
      
      <div className="absolute bottom-10 text-[10px] font-mono tracking-[0.4em] text-[var(--muted)] uppercase">
        EST. 2026 // SYSTEM STABLE
      </div>
    </main>
  );
}


