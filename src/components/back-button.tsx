'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

type BackButtonProps = {
  fallbackHref?: string;
  label?: string;
};

export default function BackButton({ fallbackHref = '/career', label = 'Go back' }: BackButtonProps) {
  const router = useRouter();

  const handleBack = () => {
    const referrer = document.referrer;
    const cameFromThisSite = referrer.startsWith(window.location.origin) && referrer !== window.location.href;

    if (cameFromThisSite) {
      router.back();
      return;
    }

    router.push(fallbackHref);
  };

  return (
    <button
      type="button"
      onClick={handleBack}
      className="inline-flex w-fit items-center gap-2 rounded-md border border-[var(--border)] bg-[var(--surface)] px-3.5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)] shadow-[var(--shadow)] transition hover:-translate-y-0.5 hover:border-[var(--accent-cyan)] hover:text-[var(--foreground)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-cyan)]"
      aria-label={label}
    >
      <ArrowLeft aria-hidden="true" size={15} strokeWidth={1.8} />
      {label}
    </button>
  );
}
