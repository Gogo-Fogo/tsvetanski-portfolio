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
  hidePopupCaption = false
}: LightboxImageProps) {
  const resolvedCaption = hidePopupCaption ? '' : (popupCaption ?? alt);
  const hasCaption = resolvedCaption.trim().length > 0;
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
        <button
          type="button"
          className={`group relative block w-full ${fill ? 'h-full' : ''} ${roundedClassName} cursor-pointer focus:outline-none transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:0_0_16px_rgba(251,146,60,0.68)]`}
          aria-label={`Open image ${alt}`}
        >
          <Image
            src={src}
            alt={alt}
            width={fill ? undefined : width}
            height={fill ? undefined : height}
            fill={fill}
            sizes={sizes}
            priority={priority}
            className={`${roundedClassName} ${className ?? ''} relative z-0`.trim()}
          />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[90vw] max-w-6xl -translate-x-1/2 -translate-y-1/2 outline-none">
          <Dialog.Title className="sr-only">{alt}</Dialog.Title>
          <Dialog.Close asChild>
            <button
              type="button"
              className="absolute -top-10 right-0 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 hover:text-white"
            >
              Close
            </button>
          </Dialog.Close>
          <div className={useSideCaption ? 'md:grid md:grid-cols-[minmax(0,1fr)_320px] md:items-start md:gap-4' : 'space-y-3'}>
            <Image
              src={src}
              alt={alt}
              width={width ?? 1600}
              height={height ?? 900}
              sizes="90vw"
              className="mx-auto max-h-[84vh] w-auto max-w-full rounded-2xl object-contain shadow-[0_20px_80px_rgba(0,0,0,0.6)]"
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
