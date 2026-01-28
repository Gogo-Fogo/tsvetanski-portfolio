"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type VideoCard = {
  title: string;
  url: string;
  thumbnailUrl: string;
  note: string;
  statsText: string;
};

type VideoCarouselProps = {
  items: VideoCard[];
};

export default function VideoCarousel({ items }: VideoCarouselProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);

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
    <div className="relative">
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
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-2 pr-10 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-[var(--border)] scrollbar-track-transparent"
      >
        {items.map((video) => (
          <div
            key={video.url}
            className="snap-start min-w-[280px] max-w-[320px] flex-1 space-y-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[var(--shadow)]"
          >
            <a
              className="block aspect-video w-full overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]"
              href={video.url}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={video.thumbnailUrl}
                alt={video.title}
                className="h-full w-full object-cover"
              />
            </a>
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
  );
}