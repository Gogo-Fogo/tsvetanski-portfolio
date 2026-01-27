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
        
        <nav className="flex flex-wrap justify-center gap-x-12 gap-y-4 pt-12 font-medium">
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
        </nav>
      </div>
      
      <div className="absolute bottom-10 text-[10px] font-mono tracking-[0.4em] text-gray-400 uppercase">
        EST. 2026 // SYSTEM STABLE
      </div>
    </main>
  );
}