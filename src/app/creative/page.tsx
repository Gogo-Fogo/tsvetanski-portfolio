import Link from 'next/link';
import Breadcrumbs from '@/components/breadcrumbs';
import LightboxImage from '@/components/lightbox-image';
import LightboxVideo from '@/components/lightbox-video';
import VideoCarousel, { type VideoCard } from './video-carousel';

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

export default async function Creative() {
  const videographyLinks = [
    {
      title: "Blood Moon Festival - Shinobi Story Halloween Update",
      url: "https://youtu.be/mkfwWyJT5OU",
      embedUrl: "https://www.youtube.com/embed/mkfwWyJT5OU",
      thumbnailUrl: "https://img.youtube.com/vi/mkfwWyJT5OU/maxresdefault.jpg",
      note: "Shinobi Story video"
    },
    {
      title: "Shinobi Story | Gameplay Prototype",
      url: "https://youtu.be/X1hkWDu-i9E",
      embedUrl: "https://www.youtube.com/embed/X1hkWDu-i9E",
      thumbnailUrl: "https://img.youtube.com/vi/X1hkWDu-i9E/maxresdefault.jpg",
      note: "Shinobi Story video"
    },
    {
      title: "Shinobi Story | Combat Mechanics",
      url: "https://youtu.be/3NiuTEdX1IU",
      embedUrl: "https://www.youtube.com/embed/3NiuTEdX1IU",
      note: "Shinobi Story video"
    },
    {
      title: "Shinobi Story | Environment Showcase",
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
    },
    {
      title: "Animation Process Video (Media)",
      url: "https://youtu.be/v9rzaW82IU4",
      embedUrl: "https://www.youtube.com/embed/v9rzaW82IU4",
      note: "Animation / media showcase"
    },
    {
      title: "Animation Process Video 2 (Media)",
      url: "https://youtu.be/lMrWcN3ko-I",
      embedUrl: "https://www.youtube.com/embed/lMrWcN3ko-I",
      note: "Animation / media showcase"
    }
  ];

  const animationGallery = [
    { src: '/images/Art_Storyboards.jpg', alt: 'Storyboard work' },
    { src: '/images/Art_3D.jpg', alt: '3D work sample 1' },
    { src: '/images/Art_3D_2.jpg', alt: '3D work sample 2' },
    { src: '/images/Art_Digital.jpg', alt: 'Digital art sample 1' },
    { src: '/images/Art_Digital_2.jpg', alt: 'Digital art sample 2' },
    { src: '/images/Art_Traditional_Charcoal_Pencil_etc.jpg', alt: 'Traditional art sample 1' },
    { src: '/images/Art_Traditional_Charcoal_Pencil_etc_2.jpg', alt: 'Traditional art sample 2' },
  ];

  const cpseHighlightVideo = {
    title: 'UMD CPSE | Summer Program 2024',
    url: 'https://youtu.be/YP9sqDBSWdo',
    embedUrl: 'https://www.youtube.com/embed/YP9sqDBSWdo',
    note: 'Immersive program highlight',
  };

  const cpseImageAssets = [
    { src: '/images/CPSE_FLYER_SummerProgram.jpg', alt: 'CPSE Summer Program flyer design' },
    { src: '/images/CPSE_MoCoShowArticleHeader.jpg', alt: 'CPSE MoCoShow article header visual' },
    { src: '/images/CPSE_FactSheet.jpg', alt: 'CPSE fact sheet visual' },
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

  const videographyCards: VideoCard[] = videographyLinks.map((video) => ({
    title: getTitle(video.embedUrl, video.title),
    url: video.url,
    embedUrl: video.embedUrl,
    thumbnailUrl: getThumbnailUrl(video.embedUrl, video.thumbnailUrl),
    note: video.note,
    statsText: getStatsText(video.embedUrl),
    hoverClassName: 'hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-orange)]',
  }));

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-8 md:p-24 font-sans">
      <div className="max-w-5xl mx-auto">
        <header className="mb-16">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Videography & Storytelling' },
            ]}
            className="mb-4"
          />
          <h1 className="text-4xl font-bold tracking-tighter mt-4 text-[var(--foreground)]">Videography & Communication Work</h1>
          <p className="text-[var(--muted)] mt-3 max-w-xl text-base">
            Video editing, interviews, and narrative communication projects aligned with technical and educational outcomes.
          </p>
        </header>

        <section className="space-y-10">
          <div className="rounded-2xl border border-[var(--accent-cyan)]/40 bg-[linear-gradient(145deg,var(--surface),color-mix(in_oklab,var(--surface)_88%,var(--accent-cyan)_12%))] p-8 shadow-[var(--shadow-strong)] space-y-6">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_minmax(0,1fr)]">
              <div className="flex flex-col gap-3">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-cyan)]/50 bg-[var(--surface)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--foreground)]">
                    <span className="inline-flex h-2 w-2 rounded-full bg-[var(--accent-cyan)]"></span>
                    Featured Case Study
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--muted)]">Primary proof of professional impact</span>
                </div>
                <h2 className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">CPSE Communication & Media</h2>
                <p className="text-[var(--muted)] text-base max-w-3xl">
                  Paid role delivering field capture, interviews, and storytelling for the UMD Cyber-Physical Systems Engineering program.
                  Includes campaign execution, event media operations, and measurable outreach outcomes.
                </p>
                <Link
                  href="/cpse"
                  className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--foreground)] bg-[var(--foreground)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--background)] shadow-sm transition-all hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]"
                >
                  View CPSE Experience
                  <span aria-hidden="true">→</span>
                </Link>
              </div>

              <div className="space-y-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[var(--shadow)]">
                <div className="block aspect-video w-full overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] transition-shadow duration-300 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
                  <LightboxVideo
                    embedUrl={cpseHighlightVideo.embedUrl}
                    thumbnailUrl={getThumbnailUrl(cpseHighlightVideo.embedUrl)}
                    title={cpseHighlightVideo.title}
                    className="h-full w-full object-cover"
                    roundedClassName="rounded-xl"
                  />
                </div>
                <a className="text-sm font-semibold text-[var(--foreground)] hover:underline" href={cpseHighlightVideo.url} target="_blank" rel="noreferrer">
                  {cpseHighlightVideo.title}
                </a>
                <p className="text-xs text-[var(--muted)]">{cpseHighlightVideo.note}</p>
                <p className="text-xs text-[var(--muted)]">{getStatsText(cpseHighlightVideo.embedUrl)}</p>
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[var(--shadow)]">
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--muted)] mb-3">CPSE Campaign Visual Assets</p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {cpseImageAssets.map((asset) => (
                  <div key={asset.src} className="overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)]">
                    <div className="aspect-[4/3] w-full">
                      <LightboxImage
                        src={asset.src}
                        alt={asset.alt}
                        fill
                        sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 90vw"
                        className="h-full w-full object-cover"
                        roundedClassName="rounded-none"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border border-[var(--border)] rounded-2xl p-8 shadow-[var(--shadow)] space-y-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-xl font-semibold tracking-tight text-[var(--foreground)]">Videography & Motion</h2>
                <ul className="list-disc pl-5 text-[var(--muted)] mt-2 text-base space-y-2">
                  <li>Short-form reels and trailers.</li>
                  <li>Motion pieces for visual storytelling.</li>
                </ul>
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

          <div className="rounded-2xl border border-[var(--accent-cyan)]/40 bg-[linear-gradient(145deg,var(--surface),color-mix(in_oklab,var(--surface)_90%,var(--accent-cyan)_10%))] p-8 shadow-[var(--shadow-strong)] space-y-6">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_minmax(0,1fr)]">
              <div className="space-y-3">
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--muted)]">Featured Communication Case Study</p>
                <h2 className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">Find Your Pathway (UMD Communication)</h2>
                <p className="text-[var(--muted)] text-base max-w-3xl">
                  Interview-led institutional story translating communication as a broad major into concrete career outcomes through
                  alumni and faculty voices.
                </p>
                <p className="text-[var(--muted)] text-sm max-w-3xl">
                  Produced for UMD&apos;s Communication program. I led video editing, technical direction, and camera operation, and carried most of the
                  production direction/storytelling process while collaborating with student contributors across early and later drafts.
                </p>

                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--foreground)]">Why this is substantial</p>
                    <ul className="mt-3 list-disc pl-5 text-[var(--muted)] text-base space-y-2">
                      <li>Strategic storytelling across multiple stakeholders and goals.</li>
                      <li>Producer-level ownership of structure, pacing, and narrative clarity.</li>
                      <li>Clear bridge to IA/UX: turning complex information into a guided audience journey.</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--foreground)]">How I pitch it</p>
                    <ul className="mt-3 list-disc pl-5 text-[var(--muted)] text-base space-y-2">
                      <li><span className="text-[var(--foreground)] font-medium">Role:</span> Lead Editor · Technical Direction · Camera Operation · Production Direction</li>
                      <li><span className="text-[var(--foreground)] font-medium">Challenge:</span> Align diverse voices into one credible institutional narrative</li>
                      <li><span className="text-[var(--foreground)] font-medium">Outcome:</span> Recruitment-focused media asset with clear problem → examples → pathway flow</li>
                    </ul>
                  </div>
                </div>

                <a
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--foreground)] bg-[var(--foreground)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--background)] shadow-sm transition-all hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]"
                  href="https://youtu.be/dX-CHGxzUyA"
                  target="_blank"
                  rel="noreferrer"
                >
                  Watch Case Study Video
                  <span aria-hidden="true">→</span>
                </a>
              </div>

              <div className="space-y-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[var(--shadow)]">
                <div className="block aspect-video w-full overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] transition-shadow duration-300 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
                  <LightboxVideo
                    embedUrl={communicationLinks[0].embedUrl}
                    thumbnailUrl={getThumbnailUrl(communicationLinks[0].embedUrl)}
                    title={getTitle(communicationLinks[0].embedUrl, communicationLinks[0].title)}
                    className="h-full w-full object-cover"
                    roundedClassName="rounded-xl"
                  />
                </div>
                <a className="text-sm font-semibold text-[var(--foreground)] hover:underline" href={communicationLinks[0].url} target="_blank" rel="noreferrer">
                  {getTitle(communicationLinks[0].embedUrl, communicationLinks[0].title)}
                </a>
                <p className="text-xs text-[var(--muted)]">{communicationLinks[0].note}</p>
                <p className="text-xs text-[var(--muted)]">{getStatsText(communicationLinks[0].embedUrl)}</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--accent-orange)]/40 bg-[linear-gradient(145deg,var(--surface),color-mix(in_oklab,var(--surface)_88%,var(--accent-orange)_12%))] p-8 shadow-[var(--shadow-strong)]">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--muted)]">Featured Editorial Track</p>
                <h2 className="text-xl font-semibold tracking-tight text-[var(--foreground)]">Writing & Storytelling</h2>
                <ul className="list-disc pl-5 text-[var(--muted)] mt-2 text-base space-y-2">
                  <li>Science + student life storytelling.</li>
                  <li>Published at USG.</li>
                </ul>
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

          <div className="rounded-2xl border border-[var(--accent-orange)]/40 bg-[var(--surface)] p-8 shadow-[var(--shadow)] space-y-6">
            <div className="flex flex-col gap-3">
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--muted)]">Digital Animation Portfolio</p>
              <h2 className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">Storyboards, 3D, Digital, Traditional</h2>
              <p className="text-[var(--muted)] max-w-3xl">
                Work samples from my Digital Animation AAS background. These pieces cover storyboard planning, 3D pipeline practice,
                digital illustration, and traditional charcoal/pencil fundamentals.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {animationGallery.map((image) => (
                <div key={image.src} className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)]">
                  <div className="aspect-[4/3] w-full">
                    <LightboxImage
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 90vw"
                      className="h-full w-full object-cover"
                      roundedClassName="rounded-none"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {communicationLinks.slice(3).map((video) => (
                <div key={video.url} className="space-y-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[var(--shadow)]">
                  <div className="block aspect-video w-full overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)] transition-shadow duration-300 hover:[box-shadow:var(--shadow-strong),0_0_20px_var(--accent-orange)]">
                    <LightboxVideo
                      embedUrl={video.embedUrl}
                      thumbnailUrl={getThumbnailUrl(video.embedUrl)}
                      title={getTitle(video.embedUrl, video.title)}
                      className="h-full w-full object-cover"
                      roundedClassName="rounded-lg"
                    />
                  </div>
                  <a className="text-sm font-semibold text-[var(--foreground)] hover:underline" href={video.url} target="_blank" rel="noreferrer">
                    {getTitle(video.embedUrl, video.title)}
                  </a>
                  <p className="text-xs text-[var(--muted)]">{video.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}




























