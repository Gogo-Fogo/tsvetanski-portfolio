import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { ActionLinks, DeepDive, Figure, Prose, Split } from '@/components/case-study/case-study';
import cs from '@/components/case-study/case-study.module.css';
import VideoGrid, { type VideoGridItem } from '@/components/case-study/video-grid';
import LightboxImage from '@/components/lightbox-image';
import LightboxVideo from '@/components/lightbox-video';
import ProjectCard from '@/components/ui/project-card';
import ui from '@/components/ui/ui.module.css';
import { formatYouTubeStats, getYouTubeThumbnailUrl, getYouTubeVideoId, getYouTubeVideoStats } from '@/app/youtube';
import { pageMetadata, projectsIn } from '@/content/project-helpers';
import { animationCategories, animationUiDesign, type AnimationPiece } from './animation-gallery';
import styles from './creative.module.css';

export const metadata = pageMetadata({
  title: 'Creative',
  description:
    'Video production, animation, 3D, illustration and writing by Georgi Tsvetanski: university program films, game trailers and a Digital Animation portfolio.',
  path: '/creative',
});

export const revalidate = 3600;

const embed = (id: string) => `https://www.youtube.com/embed/${id}`;

const pathway = { id: 'dX-CHGxzUyA', title: 'Find Your Pathway | UMD Communication 2025' };
const summerProgram = { id: 'YP9sqDBSWdo', title: 'UMD CPSE | Summer Program 2024' };

const moreVideos = [
  { id: 'bPsGUDkz6-0', title: 'Shinobi Story | Environment Showcase' },
  { id: 'mkfwWyJT5OU', title: 'Blood Moon Festival | Shinobi Story Halloween Update' },
  { id: 'X1hkWDu-i9E', title: 'Shinobi Story | Gameplay Prototype' },
  { id: '3NiuTEdX1IU', title: 'Shinobi Story | Combat Mechanics' },
  { id: 'y6Y0rzSf0Mc', title: 'UMD CPSE | Dr. Romel Gomez | Shaping Future Engineers' },
  { id: 'ZgFJxupFYzQ', title: 'UMD CPSE | Team Video' },
];

const animationVideos = [
  { id: 'v9rzaW82IU4', title: 'Animation process video' },
  { id: 'lMrWcN3ko-I', title: 'Animation process video 2' },
  { id: 'UfA0f0ih1I8', title: 'Animation project (degree work)' },
  { id: 'bWOdY2UhzWE', title: 'Animation concept video' },
  { id: '7hqtDkMbLaQ', title: 'Animatic' },
  { id: 'hwuUvoTI_JM', title: 'Intro logo animation (for a friend)' },
  { id: 'FtY1ZvEQQM0', title: 'Sketchbook video' },
];

const VISIBLE = 8;

function Gallery({ pieces, label }: { pieces: AnimationPiece[]; label: string }) {
  const tile = (piece: AnimationPiece) => (
    <li key={piece.src} className={styles.tile}>
      <LightboxImage
        src={piece.src}
        alt={piece.title}
        width={piece.width}
        height={piece.height}
        sizes="(min-width: 1024px) 300px, 45vw"
        popupCaption={piece.note}
        lightboxMaxWidth={Math.round(Math.min(piece.width, 1200))}
        className="h-auto w-full"
        roundedClassName="rounded-none"
      />
    </li>
  );
  const shown = pieces.slice(0, VISIBLE);
  const rest = pieces.slice(VISIBLE);
  return (
    <>
      <ul className={styles.masonry}>{shown.map(tile)}</ul>
      {rest.length ? (
        <details className={styles.more}>
          <summary className={styles.moreSummary}>
            Show all {pieces.length} {label}
          </summary>
          <ul className={styles.masonry}>{rest.map(tile)}</ul>
        </details>
      ) : null}
    </>
  );
}

function Block({ id, title, intro, children }: { id: string; title: string; intro?: ReactNode; children: ReactNode }) {
  return (
    <section id={id} className={cs.section} aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`} className={cs.sectionTitle}>
        {title}
      </h2>
      {intro ? <div className={cs.prose}>{intro}</div> : null}
      {children}
    </section>
  );
}

export default async function CreativePage() {
  const ids = [pathway.id, summerProgram.id, ...moreVideos.map((video) => video.id), ...animationVideos.map((video) => video.id)];
  const stats = await getYouTubeVideoStats(ids.map((id) => getYouTubeVideoId(embed(id))));
  const toItem = (video: { id: string; title: string }): VideoGridItem => ({
    title: stats.get(video.id)?.title ?? video.title,
    embedUrl: embed(video.id),
    thumbnailUrl: getYouTubeThumbnailUrl(embed(video.id)),
    meta: formatYouTubeStats(stats.get(video.id)),
  });
  const creativeProjects = projectsIn('creative');

  return (
    <main className={ui.page}>
      <p className={ui.eyebrow}>Video · Animation · Art · Writing</p>
      <h1 className={ui.pageTitle}>Creative</h1>
      <p className={ui.pageLede}>
        Before and alongside games, I make films, animation and art: university program videos, game trailers, a Digital Animation portfolio
        and published writing.
      </p>

      <nav className={styles.jump} aria-label="On this page">
        <a href="#case-studies">Case studies</a>
        <a href="#video">Video</a>
        <a href="#animation">Animation &amp; 3D</a>
        <a href="#illustration">Illustration</a>
        <a href="#writing">Writing</a>
      </nav>

      <div className={cs.body}>
        <Block id="case-studies" title="Creative case studies">
          <ul className={styles.cards}>
            {creativeProjects.map((project) => (
              <li key={project.slug}>
                <ProjectCard project={project} variant="grid" headingLevel="h3" />
              </li>
            ))}
          </ul>
          <Link href="/projects?category=creative" className={styles.allLink}>
            All Creative projects <ArrowRight aria-hidden="true" size={17} strokeWidth={1.8} />
          </Link>
        </Block>

        <Block
          id="video"
          title="Video"
          intro={
            <p>
              Interview-led films and program videos for the University of Maryland, plus trailers and update videos for Shinobi Story.
            </p>
          }
        >
          <Split
            media={
              <Figure caption={stats.get(pathway.id)?.title ?? pathway.title}>
                <div className="aspect-video">
                  <LightboxVideo
                    embedUrl={embed(pathway.id)}
                    thumbnailUrl={getYouTubeThumbnailUrl(embed(pathway.id))}
                    title={stats.get(pathway.id)?.title ?? pathway.title}
                    className="h-full w-full object-cover"
                    roundedClassName="rounded-none"
                  />
                </div>
              </Figure>
            }
          >
            <h3>Find Your Pathway (UMD Communication)</h3>
            <p>
              An interview-led film that turns communication, a broad major, into concrete career outcomes through alumni and faculty voices.
              I led the editing, technical direction and camera work, and carried most of the production direction and storytelling while
              working with student contributors across drafts.
            </p>
          </Split>
          <Split
            reverse
            media={
              <Figure caption={stats.get(summerProgram.id)?.title ?? summerProgram.title}>
                <div className="aspect-video">
                  <LightboxVideo
                    embedUrl={embed(summerProgram.id)}
                    thumbnailUrl={getYouTubeThumbnailUrl(embed(summerProgram.id))}
                    title={stats.get(summerProgram.id)?.title ?? summerProgram.title}
                    className="h-full w-full object-cover"
                    roundedClassName="rounded-none"
                  />
                </div>
              </Figure>
            }
          >
            <h3>UMD CPSE Summer Program 2024</h3>
            <p>
              A paid role with the UMD Cyber-Physical Systems Engineering program: field capture, interviews and editing. This summer program
              film attracted a Nobel Prize-winning physicist as a special guest.
            </p>
            <p>
              <Link href="/cpse">More on the CPSE work</Link>
            </p>
          </Split>
          <VideoGrid items={moreVideos.map(toItem)} />
          <ActionLinks
            links={[
              { href: 'https://www.youtube.com/@georgitsvetanski4061', label: 'My YouTube channel' },
              { href: 'https://www.youtube.com/@WarswornMOBA', label: 'WarswornMOBA channel' },
            ]}
          />
        </Block>

        <Block
          id="animation"
          title="Animation and 3D"
          intro={
            <p>
              Work from my Digital Animation associate&apos;s degree: rig tests, sculpts, low-poly scenes and shading, plus process videos and
              older degree projects.
            </p>
          }
        >
          {animationCategories
            .filter((category) => category.id === '3d')
            .map((category) => (
              <Gallery key={category.id} pieces={category.pieces} label="3D pieces" />
            ))}
          <DeepDive summary="Animation videos and the degree archive">
            <VideoGrid items={animationVideos.map(toItem)} />
          </DeepDive>
        </Block>

        <Block
          id="illustration"
          title="Illustration"
          intro={<p>Digital painting, model sheets, icons and environment lighting, then the charcoal and pencil studies underneath it all.</p>}
        >
          {animationCategories
            .filter((category) => category.id !== '3d')
            .map((category) => (
              <div key={category.id} className={styles.group}>
                <Prose>
                  <h3>{category.id === 'digital' ? 'Digital' : 'Traditional'}</h3>
                  <p>{category.blurb}</p>
                </Prose>
                <Gallery pieces={category.pieces} label={`${category.id} pieces`} />
              </div>
            ))}
          {animationUiDesign.length ? (
            <DeepDive summary="Paper UI design sketches (MUMOSA VR prototype)">
              <Prose>
                <p>
                  Hand-drawn low-fidelity design for the <Link href="/projects/mumosa-crisis-response-vr">MUMOSA</Link> VR prototype: the
                  scene, the incidents it surfaces, and the controller mapping, worked out on paper before anything was built.
                </p>
              </Prose>
              <Gallery pieces={animationUiDesign} label="sketches" />
            </DeepDive>
          ) : null}
        </Block>

        <Block
          id="writing"
          title="Writing"
          intro={<p>Science and student-life stories published at the Universities at Shady Grove.</p>}
        >
          <ActionLinks links={[{ href: 'https://uatshadygrove.org/author/georgitsvetanskigogo/', label: 'My articles at USG' }]} />
        </Block>
      </div>
    </main>
  );
}
