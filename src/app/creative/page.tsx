import Link from 'next/link';
import VideoCarousel, { type VideoCard } from './video-carousel';

type VideoStats = {
  viewCount?: string;
  likeCount?: string;
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

export default async function Creative() {
  const unityCreations = [
    {
      title: "Totally Bugged Out",
      description: "Solo first-person bug survival game with a universal throw system and wall-climbing AI."
    },
    {
      title: "Cranky (Game Jam 2024)",
      description: "Local multiplayer jam prototype with split-screen chaos; led animation and co-designed gameplay."
    },
    {
      title: "Cranky: The Squirrel Annihilator",
      description: "Solo first-person pug chase with rhythm-driven movement, reactive AI, and full UI."
    },
    {
      title: "Shogun: Flowers Fall in Blood",
      description: "Solo tactical RPG prototype blending grid combat, gesture skills, and gacha simulation."
    },
    {
      title: "The Signal",
      description: "Team-designed narrative board game with modular tiles, enemy behaviors, and class systems."
    },
    {
      title: "The Last Paycheck",
      description: "Narrative systems design document exploring survival, inflation, and emotional engagement."
    }
  ];
  const videographyLinks = [
    {
      title: "Shinobi Story | Video 1",
      url: "https://youtu.be/mkfwWyJT5OU",
      embedUrl: "https://www.youtube.com/embed/mkfwWyJT5OU",
      note: "Shinobi Story video"
    },
    {
      title: "Shinobi Story | Video 2",
      url: "https://youtu.be/X1hkWDu-i9E",
      embedUrl: "https://www.youtube.com/embed/X1hkWDu-i9E",
      thumbnailUrl: "https://img.youtube.com/vi/X1hkWDu-i9E/hqdefault.jpg",
      note: "Shinobi Story video"
    },
    {
      title: "Shinobi Story | Video 3",
      url: "https://youtu.be/3NiuTEdX1IU",
      embedUrl: "https://www.youtube.com/embed/3NiuTEdX1IU",
      note: "Shinobi Story video"
    },
    {
      title: "Shinobi Story | Video 4",
      url: "https://youtu.be/bPsGUDkz6-0",
      embedUrl: "https://www.youtube.com/embed/bPsGUDkz6-0",
      note: "Shinobi Story video"
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
    },
    {
      title: "UMD CPSE | Team Video",
      url: "https://youtu.be/ZgFJxupFYzQ",
      embedUrl: "https://www.youtube.com/embed/ZgFJxupFYzQ",
      note: "Videography"
    }
  ];

  const getVideoId = (embedUrl: string) => embedUrl.split('/embed/')[1]?.split('?')[0] ?? '';

  const getThumbnailUrl = (embedUrl: string, thumbnailOverride?: string) => {
    if (thumbnailOverride) {
      return thumbnailOverride;
    }

    const videoId = getVideoId(embedUrl);
    return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : '';
  };

  const allVideoIds = [...videographyLinks, ...communicationLinks]
    .map((video) => getVideoId(video.embedUrl))
    .filter(Boolean);

  const uniqueVideoIds = Array.from(new Set(allVideoIds));
  const statsById = new Map<string, VideoStats>();

  const apiKey = process.env.YOUTUBE_API_KEY;
  if (apiKey && uniqueVideoIds.length > 0) {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${uniqueVideoIds.join(',')}&key=${apiKey}`,
        { next: { revalidate: 604800 } }
      );

      if (response.ok) {
        const data = await response.json();
        data.items?.forEach((item: { id: string; statistics?: VideoStats }) => {
          if (item?.id) {
            statsById.set(item.id, item.statistics ?? {});
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

  const videographyCards: VideoCard[] = videographyLinks.map((video) => ({
    title: video.title,
    url: video.url,
    thumbnailUrl: getThumbnailUrl(video.embedUrl, video.thumbnailUrl),
    note: video.note,
    statsText: getStatsText(video.embedUrl),
  }));

  const communicationCards: VideoCard[] = communicationLinks.map((video) => ({
    title: video.title,
    url: video.url,
    thumbnailUrl: getThumbnailUrl(video.embedUrl),
    note: video.note,
    statsText: getStatsText(video.embedUrl),
  }));

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-8 md:p-24 font-sans">
      <div className="max-w-5xl mx-auto">
        <header className="mb-16">
          <Link href="/" className="text-sm font-mono mb-4 inline-block hover:underline decoration-1 underline-offset-4">
            ← BACK TO HOME
          </Link>
          <h1 className="text-4xl font-bold tracking-tighter mt-4 text-[var(--foreground)]">CREATIVE WORK</h1>
          <p className="text-[var(--muted)] mt-3 max-w-xl">
            A focused space for multimedia and videography projects that support the spatial design narrative.
          </p>
          <Link
            href="/cpse"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--foreground)] shadow-sm transition-all hover:-translate-y-0.5 hover:border-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)]"
          >
            View CPSE Experience
          </Link>
        </header>

        <section className="space-y-10">
          <div className="border border-[var(--border)] rounded-2xl p-8 shadow-[var(--shadow)] space-y-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-xl font-semibold tracking-tight text-[var(--foreground)]">Selected Unity Creations</h2>
                <p className="text-[var(--muted)] mt-2">
                  Prototypes and systems-driven concepts that informed my design and interaction work.
                </p>
              </div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--muted)]">Solo + Team Projects</span>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {unityCreations.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow)]"
                >
                  <h3 className="text-base font-semibold text-[var(--foreground)]">{item.title}</h3>
                  <p className="text-sm text-[var(--muted)] mt-2">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-[var(--border)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-xl font-semibold tracking-tight text-[var(--foreground)]">Writing & Storytelling</h2>
                <p className="text-[var(--muted)] mt-2">
                  Published blog writing focused on science, student life, and storytelling for the Universities at Shady Grove.
                </p>
              </div>
              <a
                className="text-xs font-mono uppercase tracking-widest text-[var(--muted)] hover:text-[var(--foreground)]"
                href="https://uatshadygrove.org/author/georgitsvetanskigogo/"
                target="_blank"
                rel="noreferrer"
              >
                View USG Author Archive
              </a>
            </div>
          </div>

          <div className="border border-[var(--border)] rounded-2xl p-8 shadow-[var(--shadow)] space-y-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-xl font-semibold tracking-tight text-[var(--foreground)]">Videography & Motion</h2>
                <p className="text-[var(--muted)] mt-2">
                  Short-form reels, trailers, and motion pieces that communicate interaction design and visual storytelling.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  className="text-xs font-mono uppercase tracking-widest text-[var(--muted)] hover:text-[var(--foreground)]"
                  href="https://www.youtube.com/@georgitsvetanski4061"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source: Georgi Tsvetanski Channel
                </a>
                <a
                  className="text-xs font-mono uppercase tracking-widest text-[var(--muted)] hover:text-[var(--foreground)]"
                  href="https://www.youtube.com/@WarswornMOBA"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source: WarswornMOBA Channel
                </a>
              </div>
            </div>

            <VideoCarousel items={videographyCards} />
          </div>

          <div className="border border-[var(--border)] rounded-2xl p-8 shadow-[var(--shadow)] space-y-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-xl font-semibold tracking-tight text-[var(--foreground)]">Communication & Media</h2>
                <p className="text-[var(--muted)] mt-2">
                  Selected communication work kept separate to preserve the primary XR/simulation focus of the portfolio.
                </p>
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--muted)] mt-3">
                  Role: Videography / field capture (edited by teammate)
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

            <VideoCarousel items={communicationCards} />
          </div>
        </section>
      </div>
    </main>
  );
}





