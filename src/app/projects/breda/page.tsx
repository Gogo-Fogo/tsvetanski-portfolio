import Breadcrumbs from '@/components/breadcrumbs';
import LightboxImage from '@/components/lightbox-image';

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

const getEmbedUrl = (embedUrl: string) =>
  `${embedUrl}${embedUrl.includes('?') ? '&' : '?'}rel=0&modestbranding=1&playsinline=1&vq=hd1080`;

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
          <ul className="list-disc pl-5 text-[var(--muted)] mt-3 max-w-2xl text-base space-y-2">
            <li>One-week sprint project built from scratch.</li>
            <li>Clear scope, rapid testing, iterative polish.</li>
          </ul>
        </header>

        <section className="grid gap-10">
          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Project Summary</h2>
            <ul className="list-disc pl-5 text-[var(--muted)] text-base space-y-2">
              <li>Sprint through a polluted city collecting trash.</li>
              <li>Restore color and unlock speed upgrades.</li>
              <li>Dodge enemy “globs” while cleaning the city.</li>
            </ul>
          </div>

          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">View Live Project</h2>
            <a
              href="https://gogo81.itch.io/trash-been"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[var(--foreground)] bg-[var(--foreground)] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--background)] transition-colors hover:bg-transparent hover:text-[var(--foreground)]"
            >
              Open Itch.io Page →
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-shadow duration-300 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
              <LightboxImage
                src="/images/TB_MindMap.png"
                alt="Trash Been mind map"
                width={1400}
                height={1000}
                className="h-auto w-full object-cover"
              />
              <div className="border-t border-[var(--border)] px-6 py-4 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">
                Visualizing the gameplay, city transformation, and platforming mechanics.
              </div>
            </div>
            <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-shadow duration-300 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
              <LightboxImage
                src="/images/TB_QA.png"
                alt="Trash Been QA and testing"
                width={1400}
                height={1000}
                className="h-auto w-full object-cover"
              />
              <div className="border-t border-[var(--border)] px-6 py-4 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">
                QA and testing notes captured during rapid iteration.
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            {trashBeenVideos.map((video) => (
              <div key={video.url} className="space-y-3">
                <div className="aspect-video w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-shadow duration-300 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
                  <iframe
                    className="h-full w-full"
                    src={getEmbedUrl(video.embedUrl)}
                    title={getTitle(video.embedUrl, video.fallbackTitle)}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <p className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">
                  {getTitle(video.embedUrl, video.fallbackTitle)}
                </p>
                <p className="text-xs text-[var(--muted)]">{video.caption}</p>
              </div>
            ))}
          </div>

          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">QA and Testing</h2>
            <ul className="list-disc pl-5 space-y-3 text-[var(--muted)] text-base">
              <li>Tight timeline required rapid scripting and system debugging.</li>
              <li>Leveraged visual scripting, template reverse engineering, and Unity community support.</li>
              <li>Best part was observing playtests and player engagement.</li>
              <li>Next steps: leaderboards, procedural variation, and animated cinematics.</li>
            </ul>
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mt-6">SimplyCodes</p>
          </div>
        </section>
      </div>
    </main>
  );
}