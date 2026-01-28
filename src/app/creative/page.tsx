import Link from 'next/link';

export default function Creative() {
  const videographyLinks = [
    {
      title: "Embark on a Ninja Journey: Shinobi Story",
      url: "https://www.youtube.com/watch?v=KhbYOpA8gOw",
      embedUrl: "https://www.youtube.com/embed/KhbYOpA8gOw",
      note: "Shinobi Story trailer"
    },
    {
      title: "Shinobi Story 2021 Teaser",
      url: "https://www.youtube.com/watch?v=79zMc0gFBvI",
      embedUrl: "https://www.youtube.com/embed/79zMc0gFBvI",
      note: "Early teaser"
    }
  ];

  const communicationLinks = [
    {
      title: "Find Your Pathway | UMDCP Communication 2025",
      url: "https://www.youtube.com/watch?v=dX-CHGxzUyA",
      embedUrl: "https://www.youtube.com/embed/dX-CHGxzUyA",
      note: "Communication video"
    },
    {
      title: "UMD CPSE | Dr. Romel Gomez | Shaping Future Engineers",
      url: "https://www.youtube.com/watch?v=y6Y0rzSf0Mc",
      embedUrl: "https://www.youtube.com/embed/y6Y0rzSf0Mc",
      note: "Interview / profile"
    }
  ];

  return (
    <main className="min-h-screen bg-[#f7f6f3] text-black p-8 md:p-24 font-sans">
      <div className="max-w-3xl mx-auto">
        <header className="mb-16">
          <Link href="/" className="text-sm font-mono mb-4 inline-block hover:underline decoration-1 underline-offset-4">
            ← BACK TO HOME
          </Link>
          <h1 className="text-4xl font-bold tracking-tighter mt-4">CREATIVE WORK</h1>
          <p className="text-gray-500 mt-3 max-w-xl">
            A focused space for multimedia and videography projects that support the spatial design narrative.
          </p>
        </header>

        <section className="space-y-8">
          <div className="border border-gray-100 rounded-2xl p-8 space-y-4">
            <h2 className="text-xl font-semibold tracking-tight">Writing & Storytelling</h2>
            <p className="text-gray-600">
              Published blog writing focused on science, student life, and storytelling for the Universities at Shady Grove.
            </p>
            <a
              className="text-xs font-mono uppercase tracking-widest text-gray-500 hover:text-black"
              href="https://uatshadygrove.org/author/georgitsvetanskigogo/"
              target="_blank"
              rel="noreferrer"
            >
              View USG Author Archive
            </a>
          </div>
          <div className="border border-gray-100 rounded-2xl p-8 space-y-4">
            <h2 className="text-xl font-semibold tracking-tight">Videography & Motion</h2>
            <p className="text-gray-600">
              Short-form reels, trailers, and motion pieces that communicate interaction design and visual storytelling.
            </p>
            <a
              className="text-xs font-mono uppercase tracking-widest text-gray-500 hover:text-black"
              href="https://www.youtube.com/@georgitsvetanski4061"
              target="_blank"
              rel="noreferrer"
            >
              Source: Georgi Tsvetanski Channel
            </a>
            <a
              className="text-xs font-mono uppercase tracking-widest text-gray-500 hover:text-black"
              href="https://www.youtube.com/@WarswornMOBA"
              target="_blank"
              rel="noreferrer"
            >
              Source: WarswornMOBA Channel
            </a>
            <div className="grid gap-6">
              {videographyLinks.map((video) => (
                <div key={video.url} className="space-y-3">
                  <div className="aspect-video w-full overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_18px_45px_rgba(15,15,15,0.08)]">
                    <iframe
                      className="h-full w-full"
                      src={video.embedUrl}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                  <div className="text-sm text-gray-600">
                    <a
                      className="font-medium text-black hover:underline"
                      href={video.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {video.title}
                    </a>
                    <span className="text-xs text-gray-500 block">{video.note}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="border border-gray-100 rounded-2xl p-8 space-y-4">
            <h2 className="text-xl font-semibold tracking-tight">Communication & Media</h2>
            <p className="text-gray-600">
              Selected communication work kept separate to preserve the primary XR/simulation focus of the portfolio.
            </p>
            <a
              className="text-xs font-mono uppercase tracking-widest text-gray-500 hover:text-black"
              href="https://www.youtube.com/@UMDCPSE"
              target="_blank"
              rel="noreferrer"
            >
              Source: UMDCPSE Channel
            </a>
            <div className="grid gap-6">
              {communicationLinks.map((video) => (
                <div key={video.url} className="space-y-3">
                  <div className="aspect-video w-full overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_18px_45px_rgba(15,15,15,0.08)]">
                    <iframe
                      className="h-full w-full"
                      src={video.embedUrl}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                  <div className="text-sm text-gray-600">
                    <a
                      className="font-medium text-black hover:underline"
                      href={video.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {video.title}
                    </a>
                    <span className="text-xs text-gray-500 block">{video.note}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}