import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-8 py-20 md:px-24 bg-gradient-to-b from-[#f7f6f3] via-[#f8f7f4] to-[#f1f0ec] text-black font-sans">
      <div className="pointer-events-none absolute inset-0 opacity-60" aria-hidden="true">
        <div className="absolute left-1/2 top-20 h-64 w-64 -translate-x-1/2 rounded-full bg-white blur-[120px]"></div>
      </div>
      <div className="relative z-10 max-w-5xl w-full items-center justify-center font-sans text-sm flex flex-col space-y-10 animate-in fade-in duration-1000 slide-in-from-bottom-4">
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-center text-black">
          Georgi Tsvetanski
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 text-center tracking-tight font-normal max-w-2xl">
          Spatial Interaction Prototyper. <span className="text-gray-500">Designing XR systems, training simulations, and immersive interactions.</span>
        </p>
        
        <div className="mt-10 grid w-full max-w-4xl gap-6 md:grid-cols-2">
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
            <div className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-gray-400 group-hover:text-black transition-colors">
              View Creative →
            </div>
          </Link>
        </div>

        <Link
          href="/virtual-lab"
          className="inline-flex items-center justify-center rounded-full border border-black text-black px-8 py-3 text-[11px] font-semibold uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-colors"
        >
          Visit the Virtual Lab
        </Link>

        <nav className="flex flex-wrap justify-center gap-x-12 gap-y-4 pt-8 font-medium">
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

        <section className="mt-12 w-full max-w-3xl border border-gray-100 bg-white/70 rounded-2xl p-8 shadow-[0_20px_50px_rgba(15,15,15,0.06)]">
          <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-gray-500 mb-4 text-center">Let’s Connect</h2>
          <p className="text-center text-gray-600 text-sm">
            Open to XR, simulation, and spatial computing collaborations. Reach out to discuss partnerships or project work.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:georgi.tsvetanski@gmail.com"
              className="inline-block rounded-full border border-black bg-black text-white px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.3em] hover:bg-transparent hover:text-black transition-colors"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/georgi-tsvetanski-526373234"
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-full border border-black text-black px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-colors"
            >
              LinkedIn
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