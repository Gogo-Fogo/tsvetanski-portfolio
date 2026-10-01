"use client";

import Image from 'next/image';
import { useMemo } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

type LightboxImageProps = {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  roundedClassName?: string;
  popupCaption?: string;
  popupCtaHref?: string;
  popupCtaLabel?: string;
  captionPosition?: 'auto' | 'bottom' | 'right';
  hidePopupCaption?: boolean;
  showPreviewIcon?: boolean;
  triggerVariant?: 'image' | 'preview-icon';
  /**
   * Opt-in for small source images: caps the popup image at this pixel width
   * so a low-resolution piece still reads at a comfortable size without being
   * blown up to full container width. Undefined keeps the previous behaviour.
   */
  lightboxMaxWidth?: number;
};

export default function LightboxImage({
  src,
  alt,
  className,
  width,
  height,
  fill,
  sizes,
  priority,
  roundedClassName = 'rounded-2xl',
  popupCaption,
  popupCtaHref,
  popupCtaLabel,
  captionPosition = 'auto',
  hidePopupCaption = false,
  showPreviewIcon = false,
  triggerVariant = 'image',
  lightboxMaxWidth,
}: LightboxImageProps) {
  const resolvedCaption = hidePopupCaption ? '' : (popupCaption ?? alt);
  const hasCaption = resolvedCaption.trim().length > 0;
  const cappedLightboxWidth = typeof lightboxMaxWidth === 'number' && typeof width === 'number';
  const ruledCaptionWidth = cappedLightboxWidth ? Math.round(lightboxMaxWidth as number) : undefined;
  const isPortrait = useMemo(() => {
    if (captionPosition === 'right') return true;
    if (captionPosition === 'bottom') return false;
    if (!width || !height) return false;
    return height > width;
  }, [captionPosition, height, width]);
  const useSideCaption = hasCaption && isPortrait;

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        {triggerVariant === 'preview-icon' ? (
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-[7px] border border-white/30 bg-black/55 text-white shadow-lg backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-white/70"
            aria-label={`Preview image for ${alt}`}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <rect x="3.5" y="4" width="17" height="16" rx="2" />
              <circle cx="8.5" cy="9" r="1.25" />
              <path d="m4.5 17 4.2-4.2 3.2 3.1 2.45-2.45L19.5 17" />
            </svg>
          </button>
        ) : (
          <button
            type="button"
            className={`group relative block w-full ${fill ? 'h-full' : ''} ${roundedClassName} cursor-pointer transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:0_0_16px_rgba(251,146,60,0.68)]`}
            aria-label={`Open image ${alt}`}
          >
            <Image
              src={src}
              alt={alt}
              width={fill ? undefined : width}
              height={fill ? undefined : height}
              fill={fill}
              sizes={sizes}
              preload={priority}
              className={`${roundedClassName} ${className ?? ''} relative z-0`.trim()}
            />
            {showPreviewIcon ? (
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-5 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-[7px] border border-white/30 bg-black/55 text-white shadow-lg backdrop-blur-sm"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3.5" y="4" width="17" height="16" rx="2" />
                  <circle cx="8.5" cy="9" r="1.25" />
                  <path d="m4.5 17 4.2-4.2 3.2 3.1 2.45-2.45L19.5 17" />
                </svg>
              </span>
            ) : null}
          </button>
        )}
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[90vw] max-w-6xl -translate-x-1/2 -translate-y-1/2 outline-none">
          <Dialog.Title className="sr-only">{alt}</Dialog.Title>
          <Dialog.Description className="sr-only">{resolvedCaption || alt}</Dialog.Description>
          <Dialog.Close asChild>
            <button
              type="button"
              className="absolute -top-12 right-0 inline-flex min-h-11 items-center gap-1.5 rounded-full px-3 text-sm font-medium text-white/85 hover:text-white focus-visible:outline-2 focus-visible:outline-white"
            >
              Close <span aria-hidden="true">✕</span>
            </button>
          </Dialog.Close>
          <div
            className={`${useSideCaption ? 'md:grid md:grid-cols-[minmax(0,1fr)_320px] md:items-start md:gap-4' : 'space-y-3'} ${
              ruledCaptionWidth !== undefined && !useSideCaption ? 'mx-auto' : ''
            }`}
            style={
              ruledCaptionWidth !== undefined && !useSideCaption
                ? { maxWidth: `${ruledCaptionWidth}px` }
                : undefined
            }
          >
            <Image
              src={src}
              alt={alt}
              width={width ?? 1600}
              height={height ?? 900}
              sizes="90vw"
              className={`mx-auto max-h-[84vh] max-w-full rounded-2xl object-contain shadow-[0_20px_80px_rgba(0,0,0,0.6)] ${
                cappedLightboxWidth ? 'w-full' : 'w-auto'
              }`}
              style={cappedLightboxWidth ? { maxWidth: `${ruledCaptionWidth}px` } : undefined}
            />
            {hasCaption ? (
              <div
                className={`rounded-xl border border-white/10 bg-black/55 px-4 py-3 text-sm text-white/85 backdrop-blur-sm ${
                  useSideCaption ? 'mt-3 md:mt-0 md:self-stretch' : ''
                }`}
              >
                <p className="max-w-[70ch] leading-relaxed">{resolvedCaption}</p>
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
