import Link from 'next/link';

export default function About() {
  return (
    <main className="min-h-screen bg-white text-black p-8 md:p-24 font-sans">
      <div className="max-w-3xl mx-auto">
        <header className="mb-16">
          <Link href="/" className="text-sm font-mono mb-4 inline-block hover:underline decoration-1 underline-offset-4">
            ← BACK TO HOME
          </Link>
          <h1 className="text-4xl font-bold tracking-tighter mt-4">BIOMETRICS & BACKGROUND</h1>
        </header>

        <section className="mb-16">
          <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-gray-400 mb-6">Commercial Success</h2>
          <div className="border-l-4 border-black pl-8 py-2">
            <h3 className="text-3xl font-bold italic">Shinobi Story</h3>
            <p className="text-5xl font-black mt-2 tracking-tighter">$110,000.00 REVENUE</p>
            <p className="mt-4 text-gray-600 max-w-md">
              Lead development and systems design. Successfully shipped and monetized a high-engagement interactive experience.
            </p>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <section>
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-gray-400 mb-6">Education</h2>
            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-xl">STEM M.S.</h3>
                <p className="text-gray-500 font-mono text-sm uppercase">Simulation & Interactive Media</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-gray-400 mb-6">Core Competencies</h2>
            <ul className="space-y-2 font-mono text-sm">
              <li>- Spatial Prototyping</li>
              <li>- Simulation Engineering</li>
              <li>- XR Interaction Design</li>
              <li>- Performance Optimization</li>
            </ul>
          </section>
        </div>

        <section className="mt-24 border-t border-gray-100 pt-16">
          <Link href="/resume.pdf" target="_blank" className="inline-block bg-black text-white px-8 py-4 font-bold hover:bg-gray-800 transition-colors">
            DOWNLOAD FULL RESUME [PDF]
          </Link>
        </section>
      </div>
    </main>
  );
}