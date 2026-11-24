import Link from 'next/link';
import ui from '@/components/ui/ui.module.css';
import { pageMetadata } from '@/content/project-helpers';
import { formatPostDate, usgPosts, writingPath, writingTitle } from '@/content/usg-writing';
import styles from './writing.module.css';

const description = 'Student blog posts I wrote for The Universities at Shady Grove while studying Communication at the University of Maryland.';

export const metadata = pageMetadata({
  title: writingTitle,
  description,
  path: writingPath,
});

export default function WritingPage() {
  return (
    <main className={ui.page}>
      <div className={styles.column}>
        <nav className={styles.pageLinks} aria-label="Breadcrumb">
          <Link href="/about">About</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{writingTitle}</span>
        </nav>
        <h1 className={ui.pageTitle}>{writingTitle}</h1>
        <p className={ui.pageLede}>{description}</p>
        <ol className={styles.posts}>
          {usgPosts.map((post) => (
            <li key={post.slug}>
              <Link href={`${writingPath}/${post.slug}`} className={styles.postLink}>
                <h2>{post.title}</h2>
                <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                <p>{post.excerpt}</p>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
}
