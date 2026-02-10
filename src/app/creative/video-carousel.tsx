"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import LightboxVideo from '@/components/lightbox-video';

export type VideoCard = {
  title: string;
  url: string;
  embedUrl: string;
  thumbnailUrl: string;
  note: string;
  statsText: string;
  hoverClassName?: string;
  className?: string;
};

type VideoCarouselProps = {
  items: VideoCard[];
  featuredVariant?: 'default' | 'compact';
};

export default function VideoCarousel({ items, featuredVariant = 'default' }: VideoCarouselProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [featured, ...rest] = items;
  const isCompactFeatured = featuredVariant === 'compact';

  const scrollByOffset = (direction: "prev" | "next") => {
    if (!scrollRef.current) {
      return;
    }

    const offset = scrollRef.current.clientWidth * 0.9;
    scrollRef.current.scrollBy({
      left: direction === "next" ? offset : -offset,
      behavior: "smooth",
    });
  };

  return (
    <div className="space-y-6 overflow-visible pt-6 -mt-6">
      {featured && (
        <div
          className={`relative z-10 rounded-3xl border border-[var(--border)] bg-[var(--surface)] ${
            isCompactFeatured ? 'p-4 md:p-5 max-w-3xl mx-auto' : 'p-5'
          } shadow-[var(--shadow-strong)] transition-shadow duration-300 ${
            featured.hoverClassName ?? 'hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]'
          }`}
        >
          <div className="block aspect-video w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
            <LightboxVideo
              embedUrl={featured.embedUrl}
              thumbnailUrl={featured.thumbnailUrl}
              title={featured.title}
              className={`h-full w-full object-cover ${featured.className ?? ''}`.trim()}
              roundedClassName="rounded-2xl"
            />
          </div>
          <div className="mt-4 text-sm text-[var(--muted)]">
            <a
              className={`${isCompactFeatured ? 'text-base md:text-lg' : 'text-lg'} font-semibold text-[var(--foreground)] hover:underline`}
              href={featured.url}
              target="_blank"
              rel="noreferrer"
            >
              {featured.title}
            </a>
            <p className="text-xs text-[var(--muted)] mt-1">{featured.note}</p>
            <p className="mt-2 text-xs text-[var(--muted)]">{featured.statsText}</p>
          </div>
        </div>
      )}

      <div className="relative overflow-visible">
        {rest.length > 0 && (
          <div className="absolute -top-2 right-0 flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollByOffset("prev")}
              aria-label="Scroll videos left"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] shadow-[var(--shadow)] transition hover:-translate-y-0.5 hover:border-[var(--foreground)]"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollByOffset("next")}
              aria-label="Scroll videos right"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] shadow-[var(--shadow)] transition hover:-translate-y-0.5 hover:border-[var(--foreground)]"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
        <div className="overflow-visible">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto overflow-y-visible pl-4 pr-10 pb-8 pt-4 snap-x snap-mandatory"
          >
            {rest.map((video) => (
              <div
                key={video.url}
                className={`snap-start min-w-[240px] max-w-[280px] flex-1 space-y-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[var(--shadow)] transition-shadow duration-300 ${
                  video.hoverClassName ?? 'hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]'
                }`}
              >
                <div className="block aspect-video w-full overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]">
                  <LightboxVideo
                    embedUrl={video.embedUrl}
                    thumbnailUrl={video.thumbnailUrl}
                    title={video.title}
                  className={`h-full w-full object-cover ${video.className ?? ''}`.trim()}
                    roundedClassName="rounded-xl"
                  />
                </div>
                <div className="text-sm text-[var(--muted)]">
                  <a
                    className="font-medium text-[var(--foreground)] hover:underline"
                    href={video.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {video.title}
                  </a>
                  <span className="text-xs text-[var(--muted)] block">{video.note}</span>
                  <span className="mt-2 block text-xs text-[var(--muted)]">{video.statsText}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}