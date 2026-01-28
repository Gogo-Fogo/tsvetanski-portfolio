import Link from 'next/link';

const shinobiStoryVideos = [
  {
    title: 'Shinobi Story | Video 1',
    url: 'https://youtu.be/mkfwWyJT5OU',
    embedUrl: 'https://www.youtube.com/embed/mkfwWyJT5OU',
    note: 'Shinobi Story video'
  },
  {
    title: 'Shinobi Story | Video 2',
    url: 'https://youtu.be/X1hkWDu-i9E',
    embedUrl: 'https://www.youtube.com/embed/X1hkWDu-i9E',
    note: 'Shinobi Story video'
  },
  {
    title: 'Shinobi Story | Video 3',
    url: 'https://youtu.be/3NiuTEdX1IU',
    embedUrl: 'https://www.youtube.com/embed/3NiuTEdX1IU',
    note: 'Shinobi Story video'
  },
  {
    title: 'Shinobi Story | Video 4',
    url: 'https://youtu.be/bPsGUDkz6-0',
    embedUrl: 'https://www.youtube.com/embed/bPsGUDkz6-0',
    note: 'Shinobi Story video'
  }
];

const shinobiStoryImages = [
  {
    src: '/images/SS_MarketingCampaign.png',
    alt: 'Shinobi Story marketing campaign'
  },
  {
    src: '/images/SS_NewContentStrategy.png',
    alt: 'Shinobi Story new content strategy'
  },
  {
    src: '/images/SS_BeforeAndAfter.png',
    alt: 'Shinobi Story before and after'
  }
];

export default function ShinobiStoryPage() {
  return (
    <main className="min-h-screen bg-[#f7f6f3] text-black p-8 md:p-24 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16">
          <Link href="/career" className="text-sm font-mono mb-4 inline-block hover:underline decoration-1 underline-offset-4">
            ← BACK TO THE LAB
          </Link>
          <h1 className="text-4xl font-bold tracking-tight mt-4">Shinobi Story</h1>
          <p className="text-gray-600 mt-3 max-w-2xl">
            A ninja-focused action game experience with a content strategy and marketing rollout that supported growth,
            community engagement, and cinematic storytelling.
          </p>
        </header>

        <section className="grid gap-10">
          <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_20px_50px_rgba(15,15,15,0.06)]">
            <img
              src="/images/ShinobiStoryBanner.jpg"
              alt="Shinobi Story banner"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="border border-gray-100 bg-white/70 rounded-2xl p-8 shadow-[0_20px_50px_rgba(15,15,15,0.06)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-gray-500 mb-6">Project Focus</h2>
            <p className="text-gray-600 text-sm">
              Shinobi Story blends action combat, platforming, and narrative design with a cohesive content strategy. The
              work highlights marketing beats, before-and-after improvements, and new content planning aligned with the
              player journey.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="border border-gray-100 bg-white/70 rounded-2xl p-8 shadow-[0_20px_50px_rgba(15,15,15,0.06)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-gray-500 mb-6">Performance Metrics</h2>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>- 68,000+ registered users</li>
                <li>- 16,500+ Discord community members</li>
                <li>- $110k total revenue with ~85% margin</li>
                <li>- Low COGS, sustained live-ops engagement</li>
                <li>- Project run: Jan 2019 – Sep 2024</li>
              </ul>
            </div>
            <div className="border border-gray-100 bg-white/70 rounded-2xl p-8 shadow-[0_20px_50px_rgba(15,15,15,0.06)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-gray-500 mb-6">Growth Narrative</h2>
              <p className="text-sm text-gray-600">
                Started in customer support to learn the live community pulse, then transitioned into development and mentorship.
                Within a year, I was guiding new developers in scripting, level design, and debugging while shaping content rollouts
                and training resources.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {shinobiStoryImages.map((image) => (
              <div
                key={image.src}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_18px_45px_rgba(15,15,15,0.08)]"
              >
                <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>

          <div className="grid gap-6">
            {shinobiStoryVideos.map((video) => (
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
        </section>
      </div>
    </main>
  );
}