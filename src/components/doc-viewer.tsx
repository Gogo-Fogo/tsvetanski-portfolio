'use client';

import Image from 'next/image';
import { useState, useCallback } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

export type DocPage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export type DocOutlineItem = {
  heading: string;
  pageIndex: number;
};

type DocViewerProps = {
  title: string;
  description?: string;
  pages: DocPage[];
  outline?: DocOutlineItem[];
};

export default function DocViewer({ title, description, pages, outline }: DocViewerProps) {
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const goTo = useCallback(
    (index: number) => {
      setCurrentPage(Math.max(0, Math.min(pages.length - 1, index)));
    },
    [pages.length],
  );

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next) setCurrentPage(0);
  };

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        goTo(currentPage + 1);
      }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        goTo(currentPage - 1);
      }
    },
    [currentPage, goTo],
  );

  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      if (e.deltaY > 30) goTo(currentPage + 1);
      else if (e.deltaY < -30) goTo(currentPage - 1);
    },
    [currentPage, goTo],
  );

  // active outline = last item whose pageIndex <= currentPage
  const activeOutlineItem =
    outline
      ?.slice()
      .reverse()
      .find((item) => item.pageIndex <= currentPage) ?? null;

  const page = pages[currentPage];

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      {/* ── Trigger card ── */}
      <Dialog.Trigger asChild>
        <button
          type="button"
          className="group w-full max-w-xs text-left overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow),0_0_40px_rgba(86,215,255,0.05)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]"
        >
          {/* thumbnail */}
          <div className="relative overflow-hidden bg-[var(--background)]" style={{ aspectRatio: '5/3' }}>
            <Image
              src={pages[0].src}
              alt={pages[0].alt}
              width={pages[0].width}
              height={pages[0].height}
              className="w-full scale-105 object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] via-transparent to-transparent" />
            <span className="absolute top-3 right-3 rounded-full bg-black/55 backdrop-blur-sm px-2.5 py-1 font-mono text-[10px] text-white/65">
              {pages.length} pages
            </span>
          </div>

          <div className="px-5 pb-5 pt-4">
            <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[var(--muted)]">
              Document
            </p>
            <p className="mt-1 text-sm font-semibold text-[var(--foreground)]">{title}</p>
            {description && (
              <p className="mt-1.5 line-clamp-2 text-[11px] leading-relaxed text-[var(--muted)]">
                {description}
              </p>
            )}
            <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--muted)] transition-colors group-hover:text-[var(--foreground)]">
              View Document →
            </p>
          </div>
        </button>
      </Dialog.Trigger>

      {/* ── Modal ── */}
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/88 backdrop-blur-md" />

        <Dialog.Content
          className="fixed inset-0 z-50 flex flex-col outline-none"
          onKeyDown={handleKeyDown}
          onWheel={handleWheel}
        >
          <Dialog.Title className="sr-only">{title}</Dialog.Title>

          {/* Close */}
          <Dialog.Close asChild>
            <button
              type="button"
              className="absolute right-5 top-5 z-10 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/55 backdrop-blur-sm transition-all hover:bg-white/18 hover:text-white/90"
            >
              Close
            </button>
          </Dialog.Close>

          {/* ── Backdrop click area — clicking empty space closes ── */}
          <div
            className="flex flex-1 items-center justify-center overflow-hidden px-5 py-8"
            onClick={() => setOpen(false)}
          >
            {/* ── Inner row — stop propagation so clicking doc doesn't close ── */}
            <div
              className="flex items-center gap-5"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Outline — LEFT */}
              {outline && outline.length > 0 && (
                <div className="hidden shrink-0 lg:block">
                  <div className="rounded-2xl border border-white/[0.07] bg-black/30 px-4 py-4 backdrop-blur-xl">
                    <ul className="space-y-3.5">
                      {outline.map((item, i) => {
                        const isActive = activeOutlineItem?.pageIndex === item.pageIndex;
                        return (
                          <li key={i}>
                            <button
                              type="button"
                              onClick={() => goTo(item.pageIndex)}
                              className="group/item flex items-start gap-2 text-left"
                            >
                              <span
                                className={`mt-0.5 shrink-0 font-mono text-[9px] transition-colors ${
                                  isActive
                                    ? 'text-[var(--accent-cyan)]'
                                    : 'text-white/18 group-hover/item:text-white/40'
                                }`}
                              >
                                {String(item.pageIndex + 1).padStart(2, '0')}
                              </span>
                              <span
                                className={`max-w-[130px] text-[11px] leading-snug transition-colors ${
                                  isActive
                                    ? 'font-medium text-white'
                                    : 'text-white/32 group-hover/item:text-white/65'
                                }`}
                              >
                                {item.heading}
                              </span>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              )}

              {/* Document page + caption — CENTER */}
              <div className="flex flex-col items-center gap-3">
                {/* Paper backdrop */}
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.08] p-3 shadow-[0_0_60px_rgba(245,242,235,0.06)]">
                  <Image
                    key={currentPage}
                    src={page.src}
                    alt={page.alt}
                    width={page.width}
                    height={page.height}
                    className="max-h-[70vh] w-auto max-w-full rounded-lg object-contain"
                    quality={100}
                    priority
                    unoptimized
                  />
                </div>

                {/* Caption — aligned to doc width */}
                {page.caption && (
                  <p className="max-w-sm text-center text-[11px] leading-relaxed text-white/50">
                    {page.caption}
                  </p>
                )}
              </div>

              {/* Thumbnail strip — RIGHT */}
              <div className="ml-4 hidden shrink-0 lg:flex flex-col gap-2 overflow-y-auto max-h-[76vh] py-1 pr-1">
                {pages.map((p, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => goTo(i)}
                    className={`group/thumb relative overflow-hidden rounded-lg transition-all duration-150 ${
                      i === currentPage
                        ? 'opacity-100 ring-2 ring-white/50 shadow-[0_0_12px_rgba(86,215,255,0.3)]'
                        : 'opacity-35 hover:opacity-65'
                    }`}
                    style={{ width: 52 }}
                  >
                    <Image
                      src={p.src}
                      alt={p.alt}
                      width={p.width}
                      height={p.height}
                      className="w-full rounded-lg object-cover object-top"
                    />
                    <span
                      className={`absolute bottom-0 left-0 right-0 rounded-b-lg py-0.5 text-center font-mono text-[8px] transition-colors ${
                        i === currentPage ? 'bg-black/50 text-white/80' : 'bg-black/40 text-white/40'
                      }`}
                    >
                      {i + 1}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
