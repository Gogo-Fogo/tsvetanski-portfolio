import Breadcrumbs from '@/components/breadcrumbs';
import LightboxImage from '@/components/lightbox-image';
import LightboxVideo from '@/components/lightbox-video'; // Added import

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Trash Been | Georgi Tsvetanski",
  description: "Cooperative game design project from Breda University of Applied Sciences — waste management mechanics, environmental storytelling, and player co-operation systems.",
};


export default function TrashBeenCaseStudy() {
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
  const getThumbnailUrl = (embedUrl: string) => {
    const videoId = getVideoId(embedUrl);
    return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : '';
  };
  const getTitle = (embedUrl: string, fallbackTitle: string) => {
    // In a real app, this would fetch from YouTube API
    return fallbackTitle; // Using fallback for now
  };

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-8 md:p-24 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Projects', href: '/career' },
              { label: 'Trash Been: Urban Logistics' },
            ]}
            className="mb-4"
          />
          <h1 className="text-4xl font-bold tracking-tight mt-4">Trash Been: Urban Logistics</h1>
          <p className="text-[var(--muted)] mt-3 max-w-2xl">
            Built in one week as a Breda application project — a platformer where cleaning a polluted city restores color, pace, and player momentum.
          </p>
        </header>

        <section className="flex flex-col gap-12 md:gap-16">
          {/* Hero Banner */}
          <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
            <div className="h-52 md:h-64 w-full">
              <LightboxImage
                src="/images/Breda_Banner.png"
                alt="Trash Been playable character banner"
                width={1600}
                height={900}
                className="h-full w-full object-cover"
                roundedClassName="rounded-none"
              />
            </div>
          </div>

          {/* Project Overview & Live Demo */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Project Overview</h2>
              <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
                Trash Been was developed under an extreme timeline in <span className="text-[var(--foreground)] font-medium">May 2022</span>: one week to design and build a complete game from scratch for
                my Breda application.
              </p>
              <ul className="space-y-3 text-sm text-[var(--muted)]">
                <li>
                  <span className="text-[var(--foreground)] font-medium block mb-1">Core Loop:</span>
                  Players run and jump through a polluted city, collecting trash bags to clean each zone.
                </li>
                <li>
                  <span className="text-[var(--foreground)] font-medium block mb-1">Dynamic Progression:</span>
                  As more trash is collected, the world transitions from grim to vibrant, and the player gains movement upgrades (speed and jump).
                </li>
                <li>
                  <span className="text-[var(--foreground)] font-medium block mb-1">Pressure & Pacing:</span>
                  Enemy “globs” apply pressure by slowing momentum and forcing cleaner route execution.
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
                <LightboxVideo
                  embedUrl={trashBeenVideos[0].embedUrl}
                  thumbnailUrl={getThumbnailUrl(trashBeenVideos[0].embedUrl)}
                  title={getTitle(trashBeenVideos[0].embedUrl, trashBeenVideos[0].fallbackTitle)}
                  className="h-full w-full object-cover"
                  roundedClassName="rounded-none"
                  popupCaption={trashBeenVideos[0].caption}
                />
              </div>
            </div>
          </div>

          {/* Design & QA */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)] md:order-2">
              <div className="grid grid-cols-1 gap-4 p-4">
                <div className="overflow-hidden rounded-xl border border-[var(--border)]">
                  <LightboxImage
                    src="/images/TB_MindMap.png"
                    alt="Trash Been gameplay and systems mind map"
                    width={1400}
                    height={900}
                    className="h-full w-full object-cover"
                    roundedClassName="rounded-none"
                  />
                </div>
                <div className="overflow-hidden rounded-xl border border-[var(--border)]">
                  <LightboxImage
                    src="/images/TB_QA.png"
                    alt="Trash Been QA and testing notes"
                    width={1400}
                    height={900}
                    className="h-full w-full object-cover"
                    roundedClassName="rounded-none"
                  />
                </div>
              </div>
            </div>

            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)] md:order-1">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Rapid Development & QA</h2>
              <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
                The hardest part was programming under time pressure in a pre-AI workflow era. I combined rapid implementation with community support and lightweight iterative testing.
              </p>
              <ul className="space-y-3 text-sm text-[var(--muted)]">
                <li>- Unity (Engine, Visual Scripting)</li>
                <li>- Blender (Asset Retopology)</li>
                <li>- Rapid iteration + remote playtest loop</li>
              </ul>
              <p className="text-sm text-[var(--muted)] leading-relaxed mt-4">
                <span className="text-[var(--foreground)] font-medium">Outcome:</span> Trash Been helped secure acceptance into Breda by demonstrating strong scope control, systems thinking, and execution under constraint.
              </p>
            </div>
          </div>

          {/* Additional Gameplay Video */}
          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Additional Gameplay</h2>
            <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
              <div className="aspect-video w-full">
                <LightboxVideo
                  embedUrl={trashBeenVideos[1].embedUrl}
                  thumbnailUrl={getThumbnailUrl(trashBeenVideos[1].embedUrl)}
                  title={getTitle(trashBeenVideos[1].embedUrl, trashBeenVideos[1].fallbackTitle)}
                  className="h-full w-full object-cover"
                  roundedClassName="rounded-none"
                  popupCaption={trashBeenVideos[1].caption}
                />
              </div>
            </div>
            <p className="mt-4 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] text-center">
              {getTitle(trashBeenVideos[1].embedUrl, trashBeenVideos[1].fallbackTitle)}
            </p>
            <p className="text-xs text-[var(--muted)] text-center mt-2">{trashBeenVideos[1].caption}</p>
          </div>
        </section>
      </div>
    </main>
  );
}





