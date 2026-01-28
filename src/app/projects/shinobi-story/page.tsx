import Link from 'next/link';
import LightboxImage from '@/components/lightbox-image';
import VideoCarousel, { type VideoCard } from '../../creative/video-carousel';

type VideoStats = {
  viewCount?: string;
  likeCount?: string;
  title?: string;
};

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

const getVideoId = (embedUrl: string) => embedUrl.split('/embed/')[1]?.split('?')[0] ?? '';

const getThumbnailUrl = (embedUrl: string) => {
  const videoId = getVideoId(embedUrl);
  return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : '';
};

export default async function ShinobiStoryPage() {
  const videoIds = shinobiStoryVideos
    .map((video) => getVideoId(video.embedUrl))
    .filter(Boolean);
  const uniqueVideoIds = Array.from(new Set(videoIds));
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

  const videoCards: VideoCard[] = shinobiStoryVideos.map((video) => ({
    title: getTitle(video.embedUrl, video.title),
    url: video.url,
    embedUrl: video.embedUrl,
    thumbnailUrl: getThumbnailUrl(video.embedUrl),
    note: video.note,
    statsText: getStatsText(video.embedUrl),
  }));

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-8 md:p-24 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16">
          <Link href="/career" className="text-sm font-mono mb-4 inline-block hover:underline decoration-1 underline-offset-4">
            ← BACK TO THE LAB
          </Link>
          <h1 className="text-4xl font-bold tracking-tight mt-4">Shinobi Story</h1>
          <p className="text-[var(--muted)] mt-3 max-w-2xl">
            A ninja-focused action game experience with a content strategy and marketing rollout that supported growth,
            community engagement, and cinematic storytelling.
          </p>
        </header>

        <section className="grid gap-10">
          <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-shadow duration-300 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
            <LightboxImage
              src="/images/ShinobiStoryBanner.jpg"
              alt="Shinobi Story banner"
              width={1600}
              height={900}
              className="h-full w-full object-cover"
              roundedClassName="rounded-2xl"
            />
          </div>

          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Project Focus</h2>
            <p className="text-[var(--muted)] text-sm">
              Shinobi Story blends action combat, platforming, and narrative design with a cohesive content strategy. The
              work highlights marketing beats, before-and-after improvements, and new content planning aligned with the
              player journey.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Performance Metrics</h2>
              <ul className="list-disc pl-5 space-y-2 text-sm text-[var(--muted)]">
                <li>68,000+ registered users</li>
                <li>16,500+ Discord community members</li>
                <li>$110k total revenue with ~85% margin</li>
                <li>Low COGS, sustained live-ops engagement</li>
                <li>Project run: Jan 2019 – Sep 2024</li>
              </ul>
            </div>
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Growth Narrative</h2>
              <p className="text-sm text-[var(--muted)]">
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
                className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-shadow duration-300 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]"
              >
                <LightboxImage
                  src={image.src}
                  alt={image.alt}
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover"
                  roundedClassName="rounded-2xl"
                />
              </div>
            ))}
          </div>

          <VideoCarousel items={videoCards} />
        </section>
      </div>
    </main>
  );
}










