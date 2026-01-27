import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-white text-black font-sans selection:bg-black selection:text-white">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-sans text-sm flex flex-col space-y-8 animate-in fade-in duration-1000 slide-in-from-bottom-4">
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-center">
          Georgi Tsvetanski
        </h1>
        <p className="text-xl md:text-2xl text-gray-500 text-center tracking-tight font-normal max-w-2xl">
          Spatial Interaction Prototyper. <span className="text-gray-400">Building high-fidelity simulations and immersive experiences.</span>
        </p>
        
        <nav className="flex space-x-12 pt-16 font-medium">
          <Link href="/career" className="group flex flex-col items-center space-y-1">
            <span className="hover:text-gray-400 transition-colors duration-200">THE LAB</span>
            <span className="h-px w-0 bg-black group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/about" className="group flex flex-col items-center space-y-1">
            <span className="hover:text-gray-400 transition-colors duration-200">BIOMETRICS</span>
            <span className="h-px w-0 bg-black group-hover:w-full transition-all duration-300"></span>
          </Link>
        </nav>
      </div>
      
      <div className="absolute bottom-12 text-[10px] font-mono tracking-widest text-gray-300 uppercase">
        EST. 2026 // SYSTEM STABLE
      </div>
    </main>
  );
}