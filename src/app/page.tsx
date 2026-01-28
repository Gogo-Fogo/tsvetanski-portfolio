import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Linkedin, Mail } from 'lucide-react';

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-6 py-12 sm:py-14 md:px-16 md:py-16 lg:py-20 bg-gradient-to-b from-[#f7f6f3] via-[#f8f7f4] to-[#f1f0ec] text-black font-sans">
      <div className="pointer-events-none absolute inset-0 opacity-60" aria-hidden="true">
        <div className="absolute left-1/2 top-20 h-64 w-64 -translate-x-1/2 rounded-full bg-white blur-[120px]"></div>
      </div>
      <div className="relative z-10 max-w-5xl w-full items-center justify-center font-sans text-sm flex flex-col space-y-6 sm:space-y-7 lg:space-y-9 animate-in fade-in duration-1000 slide-in-from-bottom-4">
        <div className="flex flex-col items-center space-y-4 sm:space-y-5 lg:space-y-6">
          <div className="relative h-32 w-32 sm:h-36 sm:w-36 lg:h-44 lg:w-44">
            <Image
              src="/images/Tsvetanski_Georgi_Headshot.jpeg"
              alt="Georgi Tsvetanski headshot"
              fill
              sizes="(min-width: 768px) 176px, 144px"
              className="rounded-full object-cover shadow-[0_18px_40px_rgba(15,15,15,0.18)]"
              priority
            />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-center text-black">
            Georgi Tsvetanski
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 text-center tracking-tight font-normal max-w-2xl">
            Spatial Interaction Prototyper. <span className="text-gray-500">Designing XR systems, training simulations, and immersive interactions.</span>
          </p>
          <p className="text-xs sm:text-sm text-gray-500 text-center max-w-2xl">
            T-shaped creator blending deep Unity/XR engineering with communication and media leadership. Based in Rockville, MD —
            open to entry-level roles, internships, or remote collaborations across XR and simulation.
          </p>
        </div>
        
        <div className="mt-5 sm:mt-6 lg:mt-8 grid w-full max-w-4xl gap-5 sm:gap-6 md:grid-cols-2">
          <Link
            href="/career"
            className="group rounded-3xl border border-transparent bg-white/70 p-8 text-left shadow-[0_20px_60px_rgba(15,15,15,0.06)] transition-all duration-300 hover:bg-white hover:shadow-[0_24px_70px_rgba(15,15,15,0.12)]"
          >
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-gray-500">Primary Track</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-black">Spatial Computing + Game Design</h2>
            <p className="mt-3 text-sm text-gray-600">
              Case studies, XR interaction design, simulation engineering, and production-focused prototypes.
            </p>
            <div className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-gray-400 group-hover:text-black transition-colors">
              Enter The Lab →
            </div>
          </Link>

          <Link
            href="/creative"
            className="group rounded-3xl border border-transparent bg-white/70 p-8 text-left shadow-[0_20px_60px_rgba(15,15,15,0.06)] transition-all duration-300 hover:bg-white hover:shadow-[0_24px_70px_rgba(15,15,15,0.12)]"
          >
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-gray-500">Secondary Track</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-black">Media + Videography</h2>
            <p className="mt-3 text-sm text-gray-600">
              Motion pieces, trailers, and communication work supporting interactive storytelling.
            </p>
            <a
              href="https://www.instagram.com/v4n_gogo/"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-gray-400 group-hover:text-black transition-colors"
            >
              <span>Instagram</span>
              <span>→</span>
            </a>
            <div className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-gray-400 group-hover:text-black transition-colors">
              View Creative →
            </div>
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <Link
            href="/virtual-lab"
            className="inline-flex items-center justify-center rounded-full border border-black text-black px-8 py-3 text-[11px] font-semibold uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-colors"
          >
            Visit the Virtual Lab
          </Link>
          <a
            href="/images/Georgi-Tsvetanski-CV-2025.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-black bg-black text-white px-8 py-3 text-[11px] font-semibold uppercase tracking-[0.3em] hover:bg-transparent hover:text-black transition-colors"
          >
            View CV
          </a>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-8 sm:gap-x-10 gap-y-3 pt-4 sm:pt-5 font-medium">
          <Link href="/career" className="group flex flex-col items-center space-y-1">
            <span className="tracking-[0.2em] text-xs uppercase hover:text-gray-500 transition-colors duration-200">The Lab</span>
            <span className="h-px w-0 bg-black/70 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/about" className="group flex flex-col items-center space-y-1">
            <span className="tracking-[0.2em] text-xs uppercase hover:text-gray-500 transition-colors duration-200">Biometrics</span>
            <span className="h-px w-0 bg-black/70 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/creative" className="group flex flex-col items-center space-y-1">
            <span className="tracking-[0.2em] text-xs uppercase hover:text-gray-500 transition-colors duration-200">Creative</span>
            <span className="h-px w-0 bg-black/70 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/resume" className="group flex flex-col items-center space-y-1">
            <span className="tracking-[0.2em] text-xs uppercase hover:text-gray-500 transition-colors duration-200">Resume</span>
            <span className="h-px w-0 bg-black/70 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/virtual-lab" className="group flex flex-col items-center space-y-1">
            <span className="tracking-[0.2em] text-xs uppercase hover:text-gray-500 transition-colors duration-200">Virtual Lab</span>
            <span className="h-px w-0 bg-black/70 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </nav>

        <section className="mt-5 sm:mt-6 lg:mt-8 w-full max-w-3xl border border-gray-100 bg-white/70 rounded-2xl p-5 sm:p-6 lg:p-7 shadow-[0_20px_50px_rgba(15,15,15,0.06)]">
          <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-gray-500 mb-4 text-center">Let’s Connect</h2>
          <p className="text-center text-gray-600 text-sm">
            Open to XR, simulation, and spatial computing collaborations. Reach out to discuss partnerships or project work.
          </p>
          <div className="mt-4 sm:mt-6 flex flex-wrap justify-center gap-3 sm:gap-4">
            <a
              href="mailto:georgi.tsvetanski@gmail.com"
              className="inline-flex items-center justify-center rounded-full border border-black bg-black text-white p-4 text-[11px] font-semibold uppercase tracking-[0.3em] hover:bg-transparent hover:text-black transition-colors"
              aria-label="Email"
              title="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/georgi-tsvetanski-526373234"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-black text-black p-4 text-[11px] font-semibold uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-colors"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/v4n_gogo/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-black text-black p-4 text-[11px] font-semibold uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-colors"
              aria-label="Instagram"
              title="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </section>
      </div>
      
      <div className="absolute bottom-10 text-[10px] font-mono tracking-[0.4em] text-gray-400 uppercase">
        EST. 2026 // SYSTEM STABLE
      </div>
    </main>
  );
}