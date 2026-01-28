import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Linkedin, Mail } from 'lucide-react';

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-6 py-12 sm:py-14 md:px-16 md:py-16 lg:py-20 bg-[var(--background)] text-[var(--foreground)] font-sans" style={{ backgroundImage: "linear-gradient(to bottom, var(--hero-start), var(--hero-mid), var(--hero-end))" }}>
      <div className="pointer-events-none absolute inset-0 opacity-60" aria-hidden="true">
        <div className="absolute left-1/2 top-20 h-64 w-64 -translate-x-1/2 rounded-full bg-[var(--surface)] blur-[120px]"></div>
      </div>
      <div className="relative z-10 max-w-5xl w-full items-center justify-center font-sans text-sm flex flex-col space-y-6 sm:space-y-7 lg:space-y-9 animate-in fade-in duration-1000 slide-in-from-bottom-4">
        <div className="flex flex-col items-center space-y-4 sm:space-y-5 lg:space-y-6 lg:flex-row lg:items-center lg:space-y-0 lg:space-x-10">
          <div className="relative h-32 w-32 sm:h-36 sm:w-36 lg:h-44 lg:w-44">
            <Image
              src="/images/Tsvetanski_Georgi_Headshot.jpeg"
              alt="Georgi Tsvetanski headshot"
              fill
              sizes="(min-width: 768px) 176px, 144px"
              className="rounded-full object-cover shadow-[var(--shadow-strong)]"
              priority
            />
          </div>
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[var(--foreground)]">
              Georgi Tsvetanski
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-[var(--muted)] tracking-tight font-normal max-w-2xl">
              Spatial Interaction Prototyper. <span className="text-[var(--muted)]">Designing XR systems, training simulations, and immersive interactions.</span>
            </p>
            <p className="text-xs sm:text-sm text-[var(--muted)] max-w-2xl">
              Based in Rockville, MD — open to XR and simulation collaborations.
            </p>
          </div>
        </div>
        
        <div className="mt-5 sm:mt-6 lg:mt-8 grid w-full max-w-4xl gap-5 sm:gap-6 md:grid-cols-2">
          <Link
            href="/career"
            className="group rounded-3xl border border-transparent bg-[var(--surface)] p-8 text-left shadow-[var(--shadow)] transition-all duration-300 hover:bg-[var(--surface)] hover:shadow-[var(--shadow-strong)] hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]"
          >
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Primary Track</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-[var(--foreground)]">Spatial Computing + Game Design</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Case studies, XR interaction design, simulation engineering, and production-focused prototypes.
            </p>
            <div className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors">
              Enter The Lab →
            </div>
            <span className="mt-6 block h-px w-14 bg-[var(--accent-cyan)] opacity-40 transition group-hover:opacity-90"></span>
          </Link>

          <div className="group rounded-3xl border border-transparent bg-[var(--surface)] p-8 text-left shadow-[var(--shadow)] transition-all duration-300 hover:bg-[var(--surface)] hover:shadow-[var(--shadow-strong)] hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-orange)]">
            <Link href="/creative" className="block">
              <p className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Secondary Track</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-[var(--foreground)]">Media + Videography</h2>
              <p className="mt-3 text-sm text-[var(--muted)]">
                Motion pieces, trailers, and communication work supporting interactive storytelling.
              </p>
              <div className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors">
                View Creative →
              </div>
              <span className="mt-6 block h-px w-14 bg-[var(--accent-orange)] opacity-40 transition group-hover:opacity-90"></span>
            </Link>
            <a
              href="https://www.instagram.com/v4n_gogo/"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors"
            >
              <span>Instagram</span>
              <span>→</span>
            </a>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <Link
            href="/virtual-lab"
            className="inline-flex items-center justify-center rounded-full border border-[var(--foreground)] text-[var(--foreground)] px-8 py-3 text-[11px] font-semibold uppercase tracking-[0.3em] hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors"
          >
            Visit the Virtual Lab
          </Link>
          <a
            href="/images/Georgi-Tsvetanski-CV-2025.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-[var(--foreground)] bg-[var(--foreground)] text-[var(--background)] px-8 py-3 text-[11px] font-semibold uppercase tracking-[0.3em] hover:bg-transparent hover:text-[var(--foreground)] transition-colors"
          >
            View CV
          </a>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-8 sm:gap-x-10 gap-y-3 pt-4 sm:pt-5 font-medium">
          <Link href="/career" className="group flex flex-col items-center space-y-1">
            <span className="tracking-[0.2em] text-xs uppercase hover:text-[var(--muted)] transition-colors duration-200">The Lab</span>
            <span className="h-px w-0 bg-[var(--foreground)]/70 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/about" className="group flex flex-col items-center space-y-1">
            <span className="tracking-[0.2em] text-xs uppercase hover:text-[var(--muted)] transition-colors duration-200">Biometrics</span>
            <span className="h-px w-0 bg-[var(--foreground)]/70 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/creative" className="group flex flex-col items-center space-y-1">
            <span className="tracking-[0.2em] text-xs uppercase hover:text-[var(--muted)] transition-colors duration-200">Creative</span>
            <span className="h-px w-0 bg-[var(--foreground)]/70 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/resume" className="group flex flex-col items-center space-y-1">
            <span className="tracking-[0.2em] text-xs uppercase hover:text-[var(--muted)] transition-colors duration-200">Resume</span>
            <span className="h-px w-0 bg-[var(--foreground)]/70 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/virtual-lab" className="group flex flex-col items-center space-y-1">
            <span className="tracking-[0.2em] text-xs uppercase hover:text-[var(--muted)] transition-colors duration-200">Virtual Lab</span>
            <span className="h-px w-0 bg-[var(--foreground)]/70 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </nav>

        <section className="mt-5 sm:mt-6 lg:mt-8 w-full max-w-3xl border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-5 sm:p-6 lg:p-7 shadow-[var(--shadow)]">
          <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-4 text-center">Let’s Connect</h2>
          <p className="text-center text-[var(--muted)] text-sm">
            Open to XR, simulation, and spatial computing collaborations. Reach out to discuss partnerships or project work.
          </p>
          <div className="mt-4 sm:mt-6 flex flex-wrap justify-center gap-3 sm:gap-4">
            <a
              href="mailto:georgi.tsvetanski@gmail.com"
              className="inline-flex items-center justify-center rounded-full border border-[var(--foreground)] bg-[var(--foreground)] text-[var(--background)] p-4 text-[11px] font-semibold uppercase tracking-[0.3em] hover:bg-transparent hover:text-[var(--foreground)] transition-colors"
              aria-label="Email"
              title="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
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
      </div>
      
      <div className="absolute bottom-10 text-[10px] font-mono tracking-[0.4em] text-[var(--muted)] uppercase">
        EST. 2026 // SYSTEM STABLE
      </div>
    </main>
  );
}


