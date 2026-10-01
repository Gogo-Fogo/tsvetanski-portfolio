'use client';

import dynamic from 'next/dynamic';
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const loadPalette = () => import('@/components/command-palette');
const CommandPalette = dynamic(loadPalette, { ssr: false });

interface PaletteContextValue {
  openPalette: () => void;
  /** Start downloading the palette before the first click (hover/focus on the trigger). */
  preloadPalette: () => void;
}

const PaletteContext = createContext<PaletteContextValue>({
  openPalette: () => {},
  preloadPalette: () => {},
});

export function useCommandPalette() {
  return useContext(PaletteContext);
}

/** Owns the palette's open state and the Ctrl/⌘K shortcut; mounts the palette on first use. */
export default function CommandPaletteProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const openPalette = useCallback(() => {
    setMounted(true);
    setOpen(true);
  }, []);

  const preloadPalette = useCallback(() => {
    void loadPalette();
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setMounted(true);
        setOpen((value) => !value);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const value = useMemo(() => ({ openPalette, preloadPalette }), [openPalette, preloadPalette]);

  return (
    <PaletteContext.Provider value={value}>
      {children}
      {mounted ? <CommandPalette open={open} onOpenChange={setOpen} /> : null}
    </PaletteContext.Provider>
  );
}
