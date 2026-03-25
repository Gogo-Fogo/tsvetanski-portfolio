"use client";

import { useEffect, useRef, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

type LightboxLocalVideoProps = {
  src: string;
  title: string;
  popupCaption?: string;
  popupCtaHref?: string;
  popupCtaLabel?: string;
  className?: string;
  roundedClassName?: string;
};

export default function LightboxLocalVideo({
  src,
  title,
  popupCaption,
  popupCtaHref,
  popupCtaLabel,
  className,
  roundedClassName = 'rounded-2xl'
}: LightboxLocalVideoProps) {
  const [open, setOpen] = useState(false);
  const modalVideoRef = useRef<HTMLVideoElement | null>(null);
  const resolvedCaption = popupCaption ?? title;
  const resolvedCtaLabel = popupCtaHref && popupCtaLabel ? popupCtaLabel : undefined;
  const hasCaption = resolvedCaption.trim().length > 0;

  useEffect(() => {
    const video = modalVideoRef.current;
    if (!video) {
      return;
    }

    if (!open) {
      video.pause();
      video.currentTime = 0;
      return;
    }

    const startPlayback = () => {
      video.currentTime = 0;
      void video.play().catch(() => {
        // If autoplay is blocked, the controls are already visible for manual playback.
      });
    };

    if (video.readyState >= 2) {
      startPlayback();
      return;
    }

    const handleCanPlay = () => {
      startPlayback();
      video.removeEventListener('canplay', handleCanPlay);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.load();

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, [open, src]);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className="group relative block h-full w-full cursor-pointer focus:outline-none"
          aria-label={`Play ${title}`}
        >
          <video
            src={src}
            muted
            playsInline
            preload="metadata"
            aria-hidden="true"
            className={`${roundedClassName} ${className ?? ''} relative z-0 h-full w-full bg-black object-contain`.trim()}
          />
          <span
            aria-hidden="true"
            className={`pointer-events-none absolute inset-0 z-10 ${roundedClassName} bg-gradient-to-t from-black/40 via-black/10 to-transparent transition-opacity duration-200 group-hover:opacity-90`}
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 z-20 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-black/55 shadow-[0_0_28px_rgba(0,0,0,0.5)] transition-all duration-200 group-hover:scale-105 group-hover:bg-black/65"
          >
            <span className="ml-1 block h-0 w-0 border-y-[10px] border-y-transparent border-l-[16px] border-l-white" />
          </span>
          <span className="sr-only">Open video in lightbox</span>
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
              <video ref={modalVideoRef} src={src} className="h-full w-full bg-black object-contain" controls playsInline preload="metadata" autoPlay />
            </div>
            {hasCaption ? (
              <div className="mt-3 rounded-xl border border-white/10 bg-black/55 px-4 py-3 text-sm text-white/85 backdrop-blur-sm">
                <p className="max-w-[70ch] leading-relaxed">{resolvedCaption}</p>
                {popupCtaHref && resolvedCtaLabel ? (
                  <a
                    href={popupCtaHref}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-block text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70 transition-colors hover:text-white"
                  >
                    {resolvedCtaLabel}
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

