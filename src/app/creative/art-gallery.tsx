import LightboxImage from '@/components/lightbox-image';
import type { AnimationPiece } from './animation-gallery';
import styles from './creative.module.css';

export default function ArtGallery({ pieces, label, visible = 8, curated = false }: { pieces: AnimationPiece[]; label: string; visible?: number; curated?: boolean }) {
  const tile = (piece: AnimationPiece) => (
    <li key={piece.src} className={styles.tile}>
      <LightboxImage
        src={piece.src}
        alt={piece.title}
        width={piece.width}
        height={piece.height}
        sizes="(min-width: 1024px) 300px, 45vw"
        popupCaption={piece.note}
        lightboxMaxWidth={piece.width}
        className="h-auto w-full"
        roundedClassName="rounded-none"
      />
      <p className={styles.tileCaption}>{piece.title}</p>
    </li>
  );
  const shown = pieces.slice(0, visible);
  const rest = pieces.slice(visible);
  return (
    <>
      <ul className={curated ? styles.curatedGrid : styles.masonry}>{shown.map(tile)}</ul>
      {rest.length ? (
        <details className={styles.more}>
          <summary className={styles.moreSummary}>Browse all {pieces.length} {label}</summary>
          <ul className={styles.masonry}>{rest.map(tile)}</ul>
        </details>
      ) : null}
    </>
  );
}
