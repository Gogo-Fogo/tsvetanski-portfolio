"use client";

import { useState } from 'react';
import Image from 'next/image';

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
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`group relative block w-full ${fill ? 'h-full' : ''} focus:outline-none`}
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

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div className="relative max-h-[85vh] w-[90vw] max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute -top-10 right-0 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 hover:text-white"
            >
              Close
            </button>
            <img
              src={src}
              alt={alt}
              className="h-full w-full rounded-2xl object-contain shadow-[0_20px_80px_rgba(0,0,0,0.6)]"
            />
          </div>
        </div>
      )}
    </>
  );
}