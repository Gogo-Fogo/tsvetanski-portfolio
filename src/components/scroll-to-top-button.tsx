"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const SCROLL_THRESHOLD = 560;

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > SCROLL_THRESHOLD);

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, left: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`fixed bottom-5 left-4 z-50 inline-flex h-12 items-center gap-2.5 rounded-full border border-[var(--accent-cyan)]/45 bg-[var(--surface)]/88 px-5 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--foreground)] shadow-[0_14px_36px_rgba(0,0,0,0.38)] backdrop-blur-md transition-all duration-200 hover:-translate-y-1 hover:border-[var(--accent-cyan)] hover:bg-[var(--accent-cyan)] hover:text-[var(--background)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-cyan)] motion-reduce:transition-none min-[1340px]:bottom-auto min-[1340px]:left-auto min-[1340px]:right-[calc(25vw_-_16rem)] min-[1340px]:top-[65%] min-[1340px]:translate-x-1/2 min-[1340px]:-translate-y-1/2 min-[1340px]:hover:translate-x-1/2 min-[1340px]:hover:-translate-y-1/2 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
      aria-label="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      title="Back to top"
    >
      <ArrowUp aria-hidden="true" className="h-4 w-4" strokeWidth={1.9} />
      Go up
    </button>
  );
}
