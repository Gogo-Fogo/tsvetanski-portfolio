import Link from 'next/link';
import LightboxVideo from '@/components/lightbox-video';

type VideoStats = {
  viewCount?: string;
  likeCount?: string;
  title?: string;
};

const formatCount = (value?: string) => {
  if (!value) {
    return null;
  }

  const count = Number(value);
  if (Number.isNaN(count)) {
    return null;
  }

  return count.toLocaleString();
};

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

const getEmbedUrl = (embedUrl: string) =>
  `${embedUrl}${embedUrl.includes('?') ? '&' : '?'}rel=0&modestbranding=1&playsinline=1&vq=hd1080`;

export default async function CpsePage() {
  const allVideoIds = cpseVideos.map((video) => getVideoId(video.embedUrl)).filter(Boolean);
  const uniqueVideoIds = Array.from(new Set(allVideoIds));
  const statsById = new Map<string, VideoStats>();

  const apiKey = process.env.YOUTUBE_API_KEY;
  if (apiKey && uniqueVideoIds.length > 0) {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=statistics,snippet&id=${uniqueVideoIds.join(',')}&key=${apiKey}`,
        { next: { revalidate: 604800 } }
      );

      if (response.ok) {
        const data = await response.json();
        data.items?.forEach((item: { id: string; statistics?: VideoStats; snippet?: { title?: string } }) => {
          if (item?.id) {
            statsById.set(item.id, { ...item.statistics, title: item.snippet?.title });
          }
        });
      }
    } catch (error) {
      console.warn('YouTube stats fetch failed', error);
    }
  }

  const getStatsText = (embedUrl: string) => {
    const videoId = getVideoId(embedUrl);
    const stats = statsById.get(videoId);
    const viewCount = formatCount(stats?.viewCount);
    const likeCount = formatCount(stats?.likeCount);

    return viewCount && likeCount ? `${viewCount} views · ${likeCount} likes` : 'Stats unavailable';
  };

  const getTitle = (embedUrl: string, fallbackTitle: string) => {
    const videoId = getVideoId(embedUrl);
    return statsById.get(videoId)?.title ?? fallbackTitle;
  };

  const featuredVideo = cpseVideos[0];
  const featuredTitle = getTitle(featuredVideo.embedUrl, featuredVideo.title);
  const featuredEmbedUrl = getEmbedUrl(featuredVideo.embedUrl);

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-8 md:p-24 font-sans">
      <div className="max-w-5xl mx-auto">
        <header className="mb-16">
          <Link href="/" className="text-sm font-mono mb-4 inline-block hover:underline decoration-1 underline-offset-4">
            ← BACK TO HOME
          </Link>
          <h1 className="text-4xl font-bold tracking-tight mt-4">UMD CPSE EXPERIENCE</h1>
          <p className="text-[var(--muted)] mt-3 max-w-2xl">
            Highlights from my time supporting the UMD Cyber-Physical Systems Engineering program as a digital and visual media
            specialist, including program storytelling, field capture, and outreach work.
          </p>
        </header>

        <section className="grid gap-10">
          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Role Summary</h2>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-lg font-semibold text-[var(--foreground)]">Digital & Visual Media Specialist</p>
                <p className="text-sm text-[var(--muted)]">UMD Cyber-Physical Systems Engineering</p>
              </div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--muted)]">May 2024 – Oct 2024</span>
            </div>
            <p className="text-sm text-[var(--muted)] mt-4">
              Documented the 5-week immersive summer program and its projects, translating technical work in IoT and
              cyber-physical systems into engaging visuals for prospective students, partners, and the broader community.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Key Impact</h2>
              <ul className="list-disc pl-5 space-y-3 text-sm text-[var(--muted)]">
                {impactHighlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Featured Video</h2>
              <div className="space-y-4">
                <div className="aspect-video w-full overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] transition-shadow duration-300 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
                  <iframe
                    className="h-full w-full"
                    src={featuredEmbedUrl}
                    title={featuredTitle}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <div>
                  <a className="font-semibold text-[var(--foreground)] hover:underline" href={featuredVideo.url} target="_blank" rel="noreferrer">
                    {featuredTitle}
                  </a>
                  <p className="text-sm text-[var(--muted)] mt-1">{featuredVideo.note}</p>
                  <p className="text-xs text-[var(--muted)] mt-2">{getStatsText(featuredVideo.embedUrl)}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-xl font-semibold tracking-tight">CPSE Video Gallery</h2>
                <p className="text-[var(--muted)] mt-2">
                  Additional communication and program highlights produced for the UMD CPSE channel.
                </p>
              </div>
              <a
                className="text-xs font-mono uppercase tracking-widest text-[var(--muted)] hover:text-[var(--foreground)]"
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

                const statsText = getStatsText(video.embedUrl);

                return (
                  <div
                    key={video.url}
                    className="space-y-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[var(--shadow)]"
                  >
                    <div className="block aspect-video w-full overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] transition-shadow duration-300 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
                      <LightboxVideo
                        embedUrl={video.embedUrl}
                        thumbnailUrl={thumbnailUrl}
                        title={getTitle(video.embedUrl, video.title)}
                        className="h-full w-full object-cover"
                        roundedClassName="rounded-xl"
                      />
                    </div>
                    <div className="text-sm text-[var(--muted)]">
                      <a className="font-medium text-[var(--foreground)] hover:underline" href={video.url} target="_blank" rel="noreferrer">
                        {getTitle(video.embedUrl, video.title)}
                      </a>
                      <span className="text-xs text-[var(--muted)] block">{video.note}</span>
                      <span className="text-xs text-[var(--muted)] block mt-1">{statsText}</span>
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













