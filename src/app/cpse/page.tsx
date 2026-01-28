import Link from 'next/link';

const impactHighlights = [
  "Led video production and interviews to expand program visibility and storytelling reach.",
  "Produced the UMD CPSE Summer Program 2024 video, which attracted a Nobel Prize–winning physicist as a special guest.",
  "Managed social media content strategy and campaign reporting for CPSE initiatives.",
  "Mentored interns and coordinated media support at live events and demo days."
];

const cpseVideos = [
  {
    title: "UMD CPSE | Summer Program 2024",
    url: "https://youtu.be/YP9sqDBSWdo",
    embedUrl: "https://www.youtube.com/embed/YP9sqDBSWdo",
    note: "Immersive program highlight"
  },
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
  },
  {
    title: "UMD CPSE | Team Video",
    url: "https://youtu.be/ZgFJxupFYzQ",
    embedUrl: "https://www.youtube.com/embed/ZgFJxupFYzQ",
    note: "Videography"
  }
];

const getVideoId = (embedUrl: string) => embedUrl.split('/embed/')[1]?.split('?')[0] ?? '';

const getThumbnailUrl = (embedUrl: string) => {
  const videoId = getVideoId(embedUrl);
  return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : '';
};

export default function CpsePage() {
  const featuredVideo = cpseVideos[0];

  return (
    <main className="min-h-screen bg-[#f7f6f3] text-black p-8 md:p-24 font-sans">
      <div className="max-w-5xl mx-auto">
        <header className="mb-16">
          <Link href="/" className="text-sm font-mono mb-4 inline-block hover:underline decoration-1 underline-offset-4">
            ← BACK TO HOME
          </Link>
          <h1 className="text-4xl font-bold tracking-tight mt-4">UMD CPSE EXPERIENCE</h1>
          <p className="text-gray-600 mt-3 max-w-2xl">
            Highlights from my time supporting the UMD Cyber-Physical Systems Engineering program as a digital and visual media
            specialist, including program storytelling, field capture, and outreach work.
          </p>
        </header>

        <section className="grid gap-10">
          <div className="border border-gray-100 bg-white/70 rounded-2xl p-8 shadow-[0_20px_50px_rgba(15,15,15,0.06)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-gray-500 mb-6">Role Summary</h2>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-lg font-semibold text-black">Digital & Visual Media Specialist</p>
                <p className="text-sm text-gray-600">UMD Cyber-Physical Systems Engineering</p>
              </div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-gray-500">May 2024 – Oct 2024</span>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Documented the 5-week immersive summer program and its projects, translating technical work in IoT and
              cyber-physical systems into engaging visuals for prospective students, partners, and the broader community.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="border border-gray-100 bg-white/70 rounded-2xl p-8 shadow-[0_20px_50px_rgba(15,15,15,0.06)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-gray-500 mb-6">Key Impact</h2>
              <ul className="space-y-3 text-sm text-gray-600">
                {impactHighlights.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>

            <div className="border border-gray-100 bg-white/70 rounded-2xl p-8 shadow-[0_20px_50px_rgba(15,15,15,0.06)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-gray-500 mb-6">Featured Video</h2>
              <div className="space-y-4">
                <div className="aspect-video w-full overflow-hidden rounded-xl border border-gray-100 bg-white">
                  <iframe
                    className="h-full w-full"
                    src={featuredVideo.embedUrl}
                    title={featuredVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <div>
                  <a className="font-semibold text-black hover:underline" href={featuredVideo.url} target="_blank" rel="noreferrer">
                    {featuredVideo.title}
                  </a>
                  <p className="text-sm text-gray-600 mt-1">{featuredVideo.note}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-gray-100 bg-white/70 rounded-2xl p-8 shadow-[0_20px_50px_rgba(15,15,15,0.06)]">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-xl font-semibold tracking-tight">CPSE Video Gallery</h2>
                <p className="text-gray-600 mt-2">
                  Additional communication and program highlights produced for the UMD CPSE channel.
                </p>
              </div>
              <a
                className="text-xs font-mono uppercase tracking-widest text-gray-500 hover:text-black"
                href="https://www.youtube.com/@UMDCPSE"
                target="_blank"
                rel="noreferrer"
              >
                Source: UMDCPSE Channel
              </a>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 mt-8">
              {cpseVideos.map((video) => {
                const thumbnailUrl = getThumbnailUrl(video.embedUrl);

                return (
                  <div
                    key={video.url}
                    className="space-y-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-[0_18px_45px_rgba(15,15,15,0.08)]"
                  >
                    <a
                      className="block aspect-video w-full overflow-hidden rounded-xl border border-gray-100 bg-white"
                      href={video.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={thumbnailUrl} alt={video.title} className="h-full w-full object-cover" />
                    </a>
                    <div className="text-sm text-gray-600">
                      <a className="font-medium text-black hover:underline" href={video.url} target="_blank" rel="noreferrer">
                        {video.title}
                      </a>
                      <span className="text-xs text-gray-500 block">{video.note}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}