'use client';

import Script from 'next/script';
import { useCallback } from 'react';

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process(): void;
      };
    };
  }
}

type Props = {
  permalinks: string[];
};

export default function InstagramGrid({ permalinks }: Props) {
  const handleScriptLoad = useCallback(() => {
    window.instgrm?.Embeds.process();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {permalinks.map((permalink) => (
          <div key={permalink} className="instagram-embed-shell min-w-0 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]">
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={permalink}
              data-instgrm-version="14"
              style={{ margin: 0, minWidth: 0, width: '100%' }}
            />
            <a
              href={permalink}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-11 items-center justify-center border-t border-[var(--border)] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              View post on Instagram ↗
            </a>
          </div>
        ))}
      </div>
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="afterInteractive"
        onLoad={handleScriptLoad}
      />
    </>
  );
}
