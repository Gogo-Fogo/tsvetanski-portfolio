import LightboxVideo from '@/components/lightbox-video';
import styles from './case-study.module.css';

export interface VideoGridItem {
  title: string;
  embedUrl: string;
  thumbnailUrl: string;
  /** e.g. live view counts; omitted when unavailable. */
  meta?: string | null;
}

/** A plain grid of YouTube videos that open in a lightbox. No carousel, no arrows. */
export default function VideoGrid({ items }: { items: readonly VideoGridItem[] }) {
  return (
    <ul className={styles.videoGrid}>
      {items.map((item) => (
        <li key={item.embedUrl} className={styles.videoItem}>
          <div className={styles.videoThumb}>
            <LightboxVideo
              embedUrl={item.embedUrl}
              thumbnailUrl={item.thumbnailUrl}
              title={item.title}
              className="h-full w-full object-cover"
              roundedClassName="rounded-none"
            />
          </div>
          <p className={styles.videoTitle}>{item.title}</p>
          {item.meta ? <p className={styles.videoMeta}>{item.meta}</p> : null}
        </li>
      ))}
    </ul>
  );
}
