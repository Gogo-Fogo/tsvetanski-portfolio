"use client";

import Image from 'next/image';
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
  roundedClassName = 'rounded-2xl'
}: LightboxImageProps) {
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
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 max-h-[84vh] w-[88vw] max-w-5xl -translate-x-1/2 -translate-y-1/2 outline-none">
          <Dialog.Title className="sr-only">{alt}</Dialog.Title>
          <Dialog.Close asChild>
            <button
              type="button"
              className="absolute -top-10 right-0 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 hover:text-white"
            >
              Close
            </button>
          </Dialog.Close>
          <img
            src={src}
            alt={alt}
            className="mx-auto max-h-[84vh] w-auto max-w-full rounded-2xl object-contain shadow-[0_20px_80px_rgba(0,0,0,0.6)]"
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}