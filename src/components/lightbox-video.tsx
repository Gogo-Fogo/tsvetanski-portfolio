"use client";

import Image from 'next/image';
import { useMemo, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

type LightboxVideoProps = {
  embedUrl: string;
  thumbnailUrl: string;
  title: string;
  popupCaption?: string;
  popupCtaHref?: string;
  popupCtaLabel?: string;
  className?: string;
  roundedClassName?: string;
};

export default function LightboxVideo({
  embedUrl,
  thumbnailUrl,
  title,
  popupCaption,
  popupCtaHref,
  popupCtaLabel,
  className,
  roundedClassName = 'rounded-2xl'
}: LightboxVideoProps) {
  const embedParams = 'rel=0&modestbranding=1&playsinline=1&vq=hd1080';
  const embedSrc = embedUrl.includes('?') ? `${embedUrl}&${embedParams}` : `${embedUrl}?${embedParams}`;

  const shouldZoomThumbnail =
    thumbnailUrl.includes('hqdefault') ||
    thumbnailUrl.includes('mqdefault') ||
    thumbnailUrl.includes('default');

  const fallbackThumbnails = useMemo(() => {
    const candidates = [thumbnailUrl];

    if (thumbnailUrl.includes('maxresdefault')) {
      candidates.push(thumbnailUrl.replace('maxresdefault', 'hqdefault'));
      candidates.push(thumbnailUrl.replace('maxresdefault', 'mqdefault'));
      candidates.push(thumbnailUrl.replace('maxresdefault', 'default'));
    } else if (thumbnailUrl.includes('hqdefault')) {
      candidates.push(thumbnailUrl.replace('hqdefault', 'mqdefault'));
      candidates.push(thumbnailUrl.replace('hqdefault', 'default'));
    } else if (thumbnailUrl.includes('mqdefault')) {
      candidates.push(thumbnailUrl.replace('mqdefault', 'default'));
    }

    return Array.from(new Set(candidates));
  }, [thumbnailUrl]);

  const [thumbnailState, setThumbnailState] = useState({ source: thumbnailUrl, index: 0 });
  const activeThumbnailIndex = thumbnailState.source === thumbnailUrl ? thumbnailState.index : 0;
  const currentThumbnail = fallbackThumbnails[Math.min(activeThumbnailIndex, fallbackThumbnails.length - 1)];

  const advanceThumbnail = () => {
    setThumbnailState((state) => {
      const currentIndex = state.source === thumbnailUrl ? state.index : 0;
      const nextIndex = Math.min(currentIndex + 1, fallbackThumbnails.length - 1);
      return { source: thumbnailUrl, index: nextIndex };
    });
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className="group relative block h-full w-full cursor-pointer focus:outline-none"
          aria-label={`Play ${title}`}
        >
          <Image
            src={currentThumbnail}
            alt={title}
            width={1280}
            height={720}
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className={`${roundedClassName} ${className ?? ''} relative z-0 h-full w-full object-cover ${
              shouldZoomThumbnail ? 'scale-[1.08]' : ''
            }`.trim()}
            onLoad={(event) => {
              const target = event.currentTarget as HTMLImageElement;
              const isPlaceholder = target.naturalWidth <= 120 && target.naturalHeight <= 90;
              if (!isPlaceholder) {
                return;
              }
              advanceThumbnail();
            }}
            onError={advanceThumbnail}
          />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[90vw] max-w-5xl -translate-x-1/2 -translate-y-1/2 outline-none">
          <Dialog.Title className="sr-only">{title}</Dialog.Title>
          <Dialog.Close asChild>
            <button
              type="button"
              className="absolute -top-10 right-0 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 hover:text-white"
            >
              Close
            </button>
          </Dialog.Close>
          <div className="relative">
            <div
              aria-hidden="true"
              className="video-ambient-glow pointer-events-none absolute inset-[-7%] -z-10 rounded-[2rem]"
            />
            <div className="aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
              <iframe
                className="h-full w-full"
                src={embedSrc}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            {popupCaption ? (
              <div className="mt-3 rounded-xl border border-white/10 bg-black/55 px-4 py-3 text-sm text-white/85 backdrop-blur-sm">
                <p className="max-w-[70ch] leading-relaxed">{popupCaption}</p>
                {popupCtaHref && popupCtaLabel ? (
                  <a
                    href={popupCtaHref}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-block text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70 transition-colors hover:text-white"
                  >
                    {popupCtaLabel}
                  </a>
                ) : null}
              </div>
            ) : null}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
