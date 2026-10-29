import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Figure, Prose, Section } from '@/components/case-study/case-study';
import cs from '@/components/case-study/case-study.module.css';
import VideoGrid from '@/components/case-study/video-grid';
import LightboxImage from '@/components/lightbox-image';
import { getYouTubeThumbnailUrl } from '@/app/youtube';
import { pageMetadata } from '@/content/project-helpers';
import { animationCategories, animationSelected } from '@/app/creative/animation-gallery';
import ArtGallery from '@/app/creative/art-gallery';
import styles from '@/app/creative/creative.module.css';
import ui from '@/components/ui/ui.module.css';

export const metadata = pageMetadata({
  title: 'Animation',
  description: 'Georgi Tsvetanski’s Digital Animation degree work and how its craft carries into game characters, interaction and video production.',
  path: '/animation',
});

const degreeVideos = [
  { id: 'v9rzaW82IU4', title: 'Animation process video' },
  { id: 'lMrWcN3ko-I', title: 'Animation process video 2' },
  { id: 'UfA0f0ih1I8', title: 'Animation project (degree work)' },
  { id: 'bWOdY2UhzWE', title: 'Animation concept video' },
  { id: '7hqtDkMbLaQ', title: 'Animatic' },
  { id: 'hwuUvoTI_JM', title: 'Intro logo animation (for a friend)' },
  { id: 'FtY1ZvEQQM0', title: 'Sketchbook video' },
];

export default function AnimationPage() {
  return (
    <main className={ui.page}>
      <nav className={styles.jump} aria-label="Breadcrumb"><Link href="/creative">Creative</Link><span aria-hidden="true">/</span><span aria-current="page">Animation</span></nav>
      <p className={ui.eyebrow}>Digital Animation · Games · Video</p>
      <h1 className={ui.pageTitle}>Animation</h1>
      <p className={ui.pageLede}>
        My associate&apos;s degree in Digital Animation gave me a foundation in movement, character work and visual storytelling. I carried
        that craft into game development and video production, where an action or idea has to read clearly to its audience.
      </p>

      <div className={cs.body}>
        <Section id="selected" title="Selected degree work" intro={<p>Rigging, posing and animation setup from my coursework. Open a piece to see its process note.</p>}>
          <ArtGallery pieces={animationSelected} label="selected pieces" visible={animationSelected.length} curated />
        </Section>

        <Section id="practice" title="Where I applied it" intro={<p>The same skills became part of finished games and media work.</p>}>
          <Figure caption="The pug rig I built and animated for the Cranky game jam.">
            <LightboxImage src="/images/CRANKY_Animation_Blender_Rigging.png" alt="Cranky pug rig and animation controls in Blender" width={3840} height={2043} sizes="(min-width: 1024px) 1000px, 90vw" className="h-auto w-full" roundedClassName="rounded-none" />
          </Figure>
          <div className={styles.cards}>
            <Prose><h3>Characters for games</h3><p>For <Link href="/projects/cranky-game-jam">Cranky</Link>, I made the pug model, rig, textures and animation for a team game jam. On <Link href="/projects/shinobi-story">Shinobi Story</Link>, I worked on character and ability animation as part of a larger development team.</p></Prose>
            <Prose><h3>Movement in interaction</h3><p>In <Link href="/projects/shinobi-story-2">Shinobi Story 2</Link>, code controls traversal while animation communicates the pose and action to players.</p></Prose>
            <Prose><h3>Storytelling in video</h3><p>My visual training also informs how I frame, sequence and edit media. See my <Link href="/cpse">UMD CPSE program films and campaign work</Link> and the wider <Link href="/creative">Creative portfolio</Link>.</p></Prose>
          </div>
        </Section>

        <Section id="testudo" title="A 3D project for the campus" intro={<p>My animation and 3D skills also helped make something students can see at the Universities at Shady Grove.</p>}>
          <Prose>
            <p>I improved an existing Testudo 3D model for printing, then printed it with CPSE. I painted the turtle and invited other students to contribute to the finish. The completed piece stands in front of the USG library.</p>
            <p>At the Montgomery County Chamber of Commerce Business Awards Dinner, Montgomery College President Dr. Jermaine F. Williams recognized me from the Testudo project. He shared this group photo with me and fellow students.</p>
          </Prose>
          <Figure caption="With Montgomery College President Dr. Jermaine F. Williams and fellow students at the Montgomery County Chamber of Commerce Business Awards Dinner.">
            <LightboxImage src="/images/animation/montgomery-college-president-group.jpg" alt="Georgi Tsvetanski with Montgomery College President Jermaine F. Williams and two fellow students at an awards dinner" width={1280} height={923} sizes="(min-width: 1024px) 1000px, 90vw" className="h-auto w-full" roundedClassName="rounded-none" />
          </Figure>
          <Prose><p><a href="https://www.linkedin.com/posts/jermainefwilliams_awesome-to-see-former-montgomery-college-ugcPost-7128932818302238720-vZfl" target="_blank" rel="noopener noreferrer">See President Williams’s LinkedIn post</a> and read more about my <Link href="/cpse">CPSE work</Link>.</p></Prose>
        </Section>

        <Section id="motion" title="Motion and process videos" intro={<p>Degree projects, animatics and process recordings from the archive.</p>}>
          <VideoGrid items={degreeVideos.map((video) => {
            const embedUrl = `https://www.youtube.com/embed/${video.id}`;
            return { title: video.title, embedUrl, thumbnailUrl: video.id === 'UfA0f0ih1I8' ? `https://img.youtube.com/vi/${video.id}/hqdefault.jpg` : getYouTubeThumbnailUrl(embedUrl) };
          })} />
        </Section>

        <Section id="archive" title="Coursework archive" intro={<p>3D studies, digital illustration and traditional drawing. The selected work above shows the clearest animation process; the archive shows its broader art foundation.</p>}>
          {animationCategories.map((category) => (
            <div key={category.id} className={styles.group}>
              <Prose><h3>{category.label}</h3><p>{category.blurb}</p></Prose>
              <ArtGallery pieces={category.pieces} label="pieces" />
            </div>
          ))}
          <Link href="/creative" className={styles.allLink}>More creative work <ArrowRight aria-hidden="true" size={17} /></Link>
        </Section>
      </div>
    </main>
  );
}
