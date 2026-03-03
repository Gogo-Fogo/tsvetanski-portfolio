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
          <blockquote
            key={permalink}
            className="instagram-media"
            data-instgrm-permalink={permalink}
            data-instgrm-version="14"
            style={{ margin: '0 auto', minWidth: 'min(100%, 326px)', width: '100%' }}
          />
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
