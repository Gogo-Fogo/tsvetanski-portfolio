"use client";

import { useState } from 'react';

type LightboxVideoProps = {
  embedUrl: string;
  thumbnailUrl: string;
  title: string;
  className?: string;
  roundedClassName?: string;
};

export default function LightboxVideo({
  embedUrl,
  thumbnailUrl,
  title,
  className,
  roundedClassName = 'rounded-2xl'
}: LightboxVideoProps) {
  const [open, setOpen] = useState(false);
  const embedParams = 'rel=0&modestbranding=1&playsinline=1&vq=hd1080';
  const embedSrc = embedUrl.includes('?') ? `${embedUrl}&${embedParams}` : `${embedUrl}?${embedParams}`;

  const shouldZoomThumbnail =
    thumbnailUrl.includes('hqdefault') ||
    thumbnailUrl.includes('mqdefault') ||
    thumbnailUrl.includes('default');

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative block w-full focus:outline-none"
        aria-label={`Play ${title}`}
      >
        <img
          src={thumbnailUrl}
          alt={title}
          className={`${roundedClassName} ${className ?? ''} relative z-0 h-full w-full object-cover ${
            shouldZoomThumbnail ? 'scale-[1.08]' : ''
          }`.trim()}
          onLoad={(event) => {
            const target = event.currentTarget;
            if (target.dataset.fallbackApplied) {
              return;
            }

            const isPlaceholder = target.naturalWidth <= 120 && target.naturalHeight <= 90;
            if (!isPlaceholder) {
              return;
            }

            target.dataset.fallbackApplied = 'true';

            if (thumbnailUrl.includes('maxresdefault')) {
              target.src = thumbnailUrl.replace('maxresdefault', 'hqdefault');
            } else if (thumbnailUrl.includes('hqdefault')) {
              target.src = thumbnailUrl.replace('hqdefault', 'mqdefault');
            } else if (thumbnailUrl.includes('mqdefault')) {
              target.src = thumbnailUrl.replace('mqdefault', 'default');
            }
          }}
          onError={(event) => {
            const target = event.currentTarget;
            if (target.dataset.fallbackApplied) {
              return;
            }
            target.dataset.fallbackApplied = 'true';

            if (thumbnailUrl.includes('maxresdefault')) {
              target.src = thumbnailUrl.replace('maxresdefault', 'hqdefault');
            } else if (thumbnailUrl.includes('hqdefault')) {
              target.src = thumbnailUrl.replace('hqdefault', 'mqdefault');
            }
          }}
        />
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div className="relative w-[90vw] max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute -top-10 right-0 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 hover:text-white"
            >
              Close
            </button>
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
          </div>
        </div>
      )}
    </>
  );
}