import Breadcrumbs from '@/components/breadcrumbs';
import LightboxImage from '@/components/lightbox-image';
import LightboxVideo from '@/components/lightbox-video'; // Import LightboxVideo

type VideoStats = {
  title?: string;
};

const trashBeenVideos = [
  {
    url: 'https://youtu.be/zCdPRazVHYM',
    embedUrl: 'https://www.youtube.com/embed/zCdPRazVHYM',
    fallbackTitle: 'Trash Been live demo',
    caption: 'Live demo walkthrough'
  },
  {
    url: 'https://youtu.be/BzVovBaY99o',
    embedUrl: 'https://www.youtube.com/embed/BzVovBaY99o',
    fallbackTitle: 'Trash Been young tester',
    caption: 'Young tester playthrough'
  }
];

const getVideoId = (embedUrl: string) => embedUrl.split('/embed/')[1]?.split('?')[0] ?? '';

// No longer needed if using LightboxVideo directly.
// const getEmbedUrl = (embedUrl: string) =>
//   `${embedUrl}${embedUrl.includes('?') ? '&' : '?'}rel=0&modestbranding=1&playsinline=1&vq=hd1080`;

export default async function BredaProjectPage() {
  const videoIds = trashBeenVideos.map((video) => getVideoId(video.embedUrl)).filter(Boolean);
  const uniqueVideoIds = Array.from(new Set(videoIds));
  const statsById = new Map<string, VideoStats>();

  const apiKey = process.env.YOUTUBE_API_KEY;
  if (apiKey && uniqueVideoIds.length > 0) {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${uniqueVideoIds.join(',')}&key=${apiKey}`,
        { next: { revalidate: 604800 } }
      );

      if (response.ok) {
        const data = await response.json();
        data.items?.forEach((item: { id: string; snippet?: { title?: string } }) => {
          if (item?.id) {
            statsById.set(item.id, { title: item.snippet?.title });
          }
        });
      }
    } catch (error) {
      console.warn('YouTube title fetch failed', error);
    }
  }

  const getTitle = (embedUrl: string, fallbackTitle: string) => {
    const videoId = getVideoId(embedUrl);
    return statsById.get(videoId)?.title ?? fallbackTitle;
  };

  const getThumbnailUrl = (embedUrl: string) => {
    const videoId = getVideoId(embedUrl);
    return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : '';
  };

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-8 md:p-24 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Projects', href: '/career' },
              { label: 'Trash Been (Breda Case)' },
            ]}
            className="mb-4"
          />
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Successful Breda Application</p>
          <h1 className="text-4xl font-bold tracking-tight mt-4">Trash Been</h1>
          <p className="text-[var(--muted)] mt-3 max-w-2xl text-base">
            One-week sprint project built from scratch with clear scope, rapid testing, and iterative polish.
          </p>
        </header>

        <section className="flex flex-col gap-12 md:gap-16">
          {/* Project Summary & Live Project */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Project Summary</h2>
              <ul className="space-y-3 text-sm text-[var(--muted)]">
                <li>
                  <span className="text-[var(--foreground)] font-medium block mb-1">Gameplay Loop:</span>
                  Sprint through a polluted city collecting trash, restoring color, and unlocking speed upgrades.
                </li>
                <li>
                  <span className="text-[var(--foreground)] font-medium block mb-1">Core Challenge:</span>
                  Dodge enemy “globs” while strategically cleaning the city under time pressure.
                </li>
              </ul>
              <a
                href="https://gogo81.itch.io/trash-been"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center rounded-full border border-[var(--foreground)] bg-[var(--foreground)] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--background)] shadow-[var(--shadow)] transition-all duration-300 hover:bg-transparent hover:text-[var(--foreground)] hover:[box-shadow:var(--shadow-strong),0_0_22px_var(--accent-cyan)]"
              >
                Play WebGL Build
              </a>
            </div>

            <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
              <div className="aspect-video w-full">
                <LightboxImage
                  src="/images/Breda_Banner.png"
                  alt="Trash Been game banner"
                  width={1600}
                  height={900}
                  className="h-full w-full object-cover"
                  roundedClassName="rounded-none"
                />
              </div>
            </div>
          </div>

          {/* Design Process & Iteration */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)] md:order-2">
              <div className="grid grid-cols-1 gap-4 p-4">
                <div className="overflow-hidden rounded-xl border border-[var(--border)]">
                  <LightboxImage
                    src="/images/TB_MindMap.png"
                    alt="Trash Been mind map"
                    width={1400}
                    height={1000}
                    className="h-auto w-full object-cover"
                    roundedClassName="rounded-none"
                  />
                </div>
                <div className="overflow-hidden rounded-xl border border-[var(--border)]">
                  <LightboxImage
                    src="/images/TB_QA.png"
                    alt="Trash Been QA and testing"
                    width={1400}
                    height={1000}
                    className="h-auto w-full object-cover"
                    roundedClassName="rounded-none"
                  />
                </div>
              </div>
            </div>

            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)] md:order-1">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Development Insights</h2>
              <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
                The tight one-week timeline necessitated rapid scripting, debugging, and iterative playtesting. Observing player engagement during tests was key to shaping the final experience.
              </p>
              <ul className="space-y-3 text-sm text-[var(--muted)]">
                <li>- Used visual scripting and template reverse engineering to ship faster.</li>
                <li>- Focused on clear visual communication of gameplay mechanics.</li>
                <li>- Next steps included leaderboards, procedural variation, and animated cinematics.</li>
              </ul>
            </div>
          </div>

          {/* Gameplay Videos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trashBeenVideos.map((video) => (
              <div key={video.url} className="space-y-3">
                <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
                  <div className="aspect-video w-full">
                    <LightboxVideo
                      embedUrl={video.embedUrl}
                      thumbnailUrl={getThumbnailUrl(video.embedUrl)}
                      title={getTitle(video.embedUrl, video.fallbackTitle)}
                      className="h-full w-full object-cover"
                      roundedClassName="rounded-none"
                    />
                  </div>
                </div>
                <p className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">
                  {getTitle(video.embedUrl, video.fallbackTitle)}
                </p>
                <p className="text-xs text-[var(--muted)]">{video.caption}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
