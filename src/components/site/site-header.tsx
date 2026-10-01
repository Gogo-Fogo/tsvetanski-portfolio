'use client';

import { Search } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSyncExternalStore } from 'react';
import { useCommandPalette } from './command-palette-provider';
import LogoMark from './logo-mark';
import ThemeButton from './theme-button';
import styles from './site.module.css';

const navLinks = [
  { href: '/projects', label: 'Projects', match: (path: string) => path.startsWith('/projects') || path === '/cpse' || path === '/creative' },
  { href: '/about', label: 'About', match: (path: string) => path === '/about' },
] as const;

const noSubscribe = () => () => {};
const shortcutLabel = () => (/Mac|iPhone|iPad/.test(navigator.platform) ? '⌘K' : 'Ctrl K');

export default function SiteHeader() {
  const pathname = usePathname() ?? '/';
  const { openPalette, preloadPalette } = useCommandPalette();
  const shortcut = useSyncExternalStore(noSubscribe, shortcutLabel, () => 'Ctrl K');

  return (
    <header id="top" className={styles.header}>
      <div className={styles.headerInner}>
        <Link href="/" className={styles.brand} aria-label="Georgi Tsvetanski, home">
          <LogoMark className={styles.brandMark} />
          <span className={styles.brandName} aria-hidden="true">
            Georgi Tsvetanski
          </span>
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.navLink}
              aria-current={link.match(pathname) ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
          <a href="#contact" className={styles.navLink}>
            Contact
          </a>
        </nav>

        <div className={styles.headerTools}>
          <button
            type="button"
            className={styles.searchButton}
            onClick={openPalette}
            onPointerEnter={preloadPalette}
            onFocus={preloadPalette}
            aria-label="Search projects and pages"
          >
            <Search aria-hidden="true" size={16} strokeWidth={1.8} />
            <span>Search</span>
            <kbd aria-hidden="true">{shortcut}</kbd>
          </button>
          <ThemeButton />
        </div>
      </div>
    </header>
  );
}
