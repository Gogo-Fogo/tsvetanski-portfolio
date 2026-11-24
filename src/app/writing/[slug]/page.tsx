import Link from 'next/link';
import { notFound } from 'next/navigation';
import ui from '@/components/ui/ui.module.css';
import { pageMetadata, SITE_NAME } from '@/content/project-helpers';
import { formatPostDate, testudoPostPath, usgPosts, writingPath, writingTitle } from '@/content/usg-writing';
import styles from '../writing.module.css';

type WritingPageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return usgPosts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: WritingPageProps) {
  const { slug } = await params;
  const post = usgPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  const metadata = pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `${writingPath}/${post.slug}`,
  });

  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      type: 'article' as const,
      publishedTime: post.date,
      authors: [SITE_NAME],
    },
  };
}

export default async function WritingPostPage({ params }: WritingPageProps) {
  const { slug } = await params;
  const post = usgPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  return (
    <main className={ui.page}>
      <div className={styles.column}>
        <nav className={styles.pageLinks} aria-label="Breadcrumb">
          <Link href={writingPath}>{writingTitle}</Link>
        </nav>
        <article>
          <header className={styles.articleHeader}>
            <h1 className={ui.pageTitle}>{post.title}</h1>
            <p className={styles.byline}>
              {SITE_NAME} · <time dateTime={post.date}>{formatPostDate(post.date)}</time>
            </p>
            <p className={styles.byline}>Originally published on the USG Student Blog.</p>
          </header>
          {/* Imported and reviewed offline. The checked-in archive contains only allowlisted markup. */}
          <div className={styles.prose} dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
        <nav className={`${styles.pageLinks} ${styles.articleNav}`} aria-label="More to read">
          <Link href={writingPath}>All USG blog posts</Link>
          {`${writingPath}/${post.slug}` === testudoPostPath && (
            <Link href="/animation#testudo">Testudo in my portfolio</Link>
          )}
        </nav>
      </div>
    </main>
  );
}
