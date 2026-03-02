import Breadcrumbs from '@/components/breadcrumbs';
import LightboxImage from '@/components/lightbox-image';
import VideoCarousel, { type VideoCard } from '../../creative/video-carousel';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Shinobi Story | Georgi Tsvetanski",
  description: "Led content strategy and live operations for a fully custom Naruto MMORPG — complete WoW 3.3.5 client overhaul, original animations, $110K in revenue, 1M+ downloads, 56K players.",
};


type VideoStats = {
  viewCount?: string;
  likeCount?: string;
  title?: string;
};

type ShinobiVideo = {
  title: string;
  url: string;
  embedUrl: string;
  note: string;
  thumbnailUrl?: string;
  zoomClassName?: string;
};

const shinobiStoryVideos: ShinobiVideo[] = [
  {
    title: 'Shinobi Story | Featured Highlight',
    url: 'https://youtu.be/bPsGUDkz6-0',
    embedUrl: 'https://www.youtube.com/embed/bPsGUDkz6-0',
    note: 'Featured video - personal milestone'
  },
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
    note: 'Shinobi Story video',
    thumbnailUrl: 'https://img.youtube.com/vi/X1hkWDu-i9E/hqdefault.jpg',
    zoomClassName: 'scale-[1.3] object-[center_65%]'
  },
  {
    title: 'Shinobi Story | Video 3',
    url: 'https://youtu.be/3NiuTEdX1IU',
    embedUrl: 'https://www.youtube.com/embed/3NiuTEdX1IU',
    note: 'Shinobi Story video'
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

    return viewCount && likeCount ? `${viewCount} views · ${likeCount} likes` : null;
  };

  const getTitle = (embedUrl: string, fallbackTitle: string) => {
    const videoId = getVideoId(embedUrl);
    return statsById.get(videoId)?.title ?? fallbackTitle;
  };

  const videoCards: VideoCard[] = shinobiStoryVideos.map((video) => ({
    title: getTitle(video.embedUrl, video.title),
    url: video.url,
    embedUrl: video.embedUrl,
    thumbnailUrl: video.thumbnailUrl ?? getThumbnailUrl(video.embedUrl),
    note: video.note,
    statsText: getStatsText(video.embedUrl),
    className: video.zoomClassName,
  }));

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-8 md:p-24 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Projects', href: '/career' },
              { label: 'Shinobi Story' },
            ]}
            className="mb-4"
          />
          <h1 className="text-4xl font-bold tracking-tight mt-4">Shinobi Story</h1>
          <p className="text-[var(--muted)] mt-3 max-w-2xl">
            A fully custom Naruto MMORPG — the WoW 3.3.5 client was completely overhauled with original character and ability animations, rebuilt systems, and custom gameplay. $110K in revenue, 1M+ downloads, 56K players, 16.5K Discord members. I joined as customer support, contributed animations, shipped content weekly, and ended up mentoring the dev team.
          </p>
        </header>

        <section className="flex flex-col gap-12 md:gap-16">
          {/* Hero Banner */}
          <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)] max-w-2xl mx-auto">
            <div className="aspect-video w-full">
              <LightboxImage
                src="/images/ShinobiStoryBanner.jpg"
                alt="Shinobi Story banner"
                width={1600}
                height={900}
                className="h-full w-full object-cover"
                roundedClassName="rounded-none"
              />
            </div>
          </div>

          {/* Featured Video Highlight */}
          <div className="space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">
                Featured Video Highlight
              </h2>
              <p className="text-sm text-[var(--muted)]">
                The main showcase video — start here.
              </p>
            </div>
            <div className="relative z-10">
              <VideoCarousel items={videoCards} />
            </div>
          </div>

          {/* Business Impact & Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
                <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Live-Ops Performance</h2>
                <ul className="space-y-4 text-sm text-[var(--muted)]">
                  <li>
                    <span className="text-[var(--foreground)] font-medium block">Scale & Community:</span>
                    1M+ downloads, 56,000 players, and a 16,500+ member Discord community.
                  </li>
                  <li>
                    <span className="text-[var(--foreground)] font-medium block">Commercial Success:</span>
                    $110k total revenue with an ~85% margin and low COGS.
                  </li>
                  <li>
                    <span className="text-[var(--foreground)] font-medium block">Longevity:</span>
                    Sustained engagement across a 5-year project lifecycle (2019–2024).
                  </li>
                </ul>
              </div>
            </div>

            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Project Narrative</h2>
              <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
                Not a mod — the WoW 3.3.5 client was completely overhauled. Original character and ability animations, custom combat systems, and rebuilt gameplay infrastructure made it a fully original product.
              </p>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                I started in customer support to learn the live community pulse, then transitioned into development. I contributed character and ability animations, guided new developers in scripting, level design, and debugging, and shaped content rollouts and training resources.
              </p>
            </div>
          </div>

          {/* Marketing & Content Strategy */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
              <div className="aspect-video w-full">
                <LightboxImage
                  src="/images/SS_MarketingCampaign.png"
                  alt="Shinobi Story marketing campaign"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover"
                  roundedClassName="rounded-none"
                />
              </div>
            </div>
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Marketing Rollouts</h2>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                I built promo materials timed to major content drops — update trailers, event graphics, and community announcements designed around peak player activity windows.
              </p>
            </div>
          </div>

          {/* Content Strategy Alternating */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)] md:order-2">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Content Planning</h2>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                I mapped content drops to player progression milestones — quests, story beats, and seasonal events timed to keep both new players and 5-year veterans coming back.
              </p>
            </div>
            <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)] md:order-1">
              <div className="aspect-video w-full">
                <LightboxImage
                  src="/images/SS_NewContentStrategy.png"
                  alt="Shinobi Story new content strategy"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover"
                  roundedClassName="rounded-none"
                />
              </div>
            </div>
          </div>

          {/* Technical Optimization / Quality */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
              <div className="aspect-video w-full">
                <LightboxImage
                  src="/images/SS_BeforeAndAfter.png"
                  alt="Shinobi Story before and after visual optimization"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover"
                  roundedClassName="rounded-none"
                />
              </div>
            </div>
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Visual & Technical Polish</h2>
              <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
                I built a before/after audit workflow to standardize level quality — reviewing community-created areas against official content benchmarks.
              </p>
              <p className="text-sm text-[var(--muted)] leading-relaxed font-medium text-[var(--foreground)]">
                Focus: Environmental lighting, asset density, and player pathfinding clarity.
              </p>
            </div>
          </div>

        </section>
      </div>
    </main>
  );
}

































