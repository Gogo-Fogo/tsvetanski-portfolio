import Link from 'next/link';

export default function VirtualLab() {
  return (
    <main className="min-h-screen bg-[#f7f6f3] text-black p-8 md:p-24 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16">
          <Link href="/" className="text-sm font-mono mb-4 inline-block hover:underline decoration-1 underline-offset-4">
            ← BACK TO HOME
          </Link>
          <h1 className="text-4xl font-bold tracking-tight mt-4">VIRTUAL LAB</h1>
          <p className="text-gray-600 mt-3 max-w-2xl">
            A dedicated space for experimental XR interactions, playable demos, and prototypes. This will point to an external
            hub (Itch.io or a standalone sandbox) once it’s ready.
          </p>
        </header>

        <section className="border border-gray-100 bg-white/70 rounded-2xl p-8 shadow-[0_20px_50px_rgba(15,15,15,0.06)]">
          <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-gray-500 mb-6">Coming Soon</h2>
          <p className="text-sm text-gray-600">
            Drop in your external lab URL here when it’s live. This page keeps the main portfolio ATS-friendly while still
            allowing deeper interactive experimentation off-site.
          </p>
          <div className="mt-6 inline-block rounded-full border border-black text-black px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.3em]">
            Link Placeholder
          </div>
        </section>
      </div>
    </main>
  );
}