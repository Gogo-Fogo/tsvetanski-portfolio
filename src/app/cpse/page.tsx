import { ActionLinks, BulletList, CaseStudyHeader, CaseStudyShell, Figure, MediaGrid, Section } from '@/components/case-study/case-study';
import { CaseStudyBody, CaseStudyFooter } from '@/components/case-study/case-study-layout';
import VideoGrid from '@/components/case-study/video-grid';
import LightboxImage from '@/components/lightbox-image';
import LightboxVideo from '@/components/lightbox-video';
import { formatYouTubeStats, getYouTubeThumbnailUrl, getYouTubeVideoStats } from '@/app/youtube';
import { projectMetadata } from '@/content/project-helpers';

const slug = 'cpse' as const;

export const metadata = projectMetadata(
  slug,
  'Two roles making video and social media for the UMD Cyber-Physical Systems Engineering program: interviews, recruitment videos and the Summer Program 2024 film.'
);

export const revalidate = 3600;

const embed = (id: string) => `https://www.youtube.com/embed/${id}`;

const featured = { id: 'YP9sqDBSWdo', title: 'UMD CPSE | Summer Program 2024' };
const moreVideos = [
  { id: 'y6Y0rzSf0Mc', title: 'UMD CPSE | Dr. Romel Gomez | Shaping Future Engineers' },
  { id: 'ZgFJxupFYzQ', title: 'UMD CPSE | Team Video' },
];

const glance = [
  { label: 'Roles', value: 'Digital & Visual Media Specialist (May–Oct 2024); Social Media & Marketing Content Creator (Sep 2023 – May 2024)' },
  { label: 'Organisation', value: 'UMD Cyber-Physical Systems Engineering (CPSE)' },
  { label: 'Work', value: 'Interviews, recruitment and program videos, weekly social content, campaign graphics' },
  { label: 'Type', value: 'Paid role' },
] as const;

const impact = [
  'Led video production from planning to post: interview strategy, filming and editing.',
  'Produced the Summer Program 2024 video, which attracted a Nobel Prize-winning physicist as a special guest.',
  'Ran weekly social campaigns and analytics reporting across Instagram, Facebook and YouTube.',
  'Mentored interns, coordinated media at events, and handled equipment and materials purchasing.',
];

const assets = [
  { src: '/images/CPSE_FLYER_SummerProgram.jpg', alt: 'CPSE Summer Program flyer', width: 624, height: 800, caption: 'Summer Program flyer.' },
  { src: '/images/CPSE_MoCoShowArticleHeader.jpg', alt: 'CPSE MoCoShow article header', width: 800, height: 674, caption: 'Header for a MoCoShow article.' },
  { src: '/images/CPSE_FactSheet.jpg', alt: 'CPSE program fact sheet', width: 619, height: 800, caption: 'Program fact sheet.' },
];

export default async function CpsePage() {
  const stats = await getYouTubeVideoStats([featured.id, ...moreVideos.map((video) => video.id)]);
  const titleOf = (video: { id: string; title: string }) => stats.get(video.id)?.title ?? video.title;
  const featuredMeta = formatYouTubeStats(stats.get(featured.id));

  return (
    <CaseStudyShell>
      <CaseStudyHeader
        slug={slug}
        lede={
          <p>
            Two back-to-back roles making media for the University of Maryland&apos;s Cyber-Physical Systems Engineering program: turning technical
            IoT and cyber-physical research into videos people want to watch, running weekly social content, and producing recruitment videos.
          </p>
        }
        hero={
          <div className="aspect-video">
            <LightboxVideo
              embedUrl={embed(featured.id)}
              thumbnailUrl={getYouTubeThumbnailUrl(embed(featured.id))}
              title={titleOf(featured)}
              className="h-full w-full object-cover"
              roundedClassName="rounded-none"
            />
          </div>
        }
        heroCaption={`${titleOf(featured)}${featuredMeta ? ` · ${featuredMeta}` : ''}`}
        glance={glance}
      />

      <CaseStudyBody>
        <Section id="impact" title="What I did">
          <BulletList items={impact} />
        </Section>

        <Section id="videos" title="More videos">
          <VideoGrid
            items={moreVideos.map((video) => ({
              title: titleOf(video),
              embedUrl: embed(video.id),
              thumbnailUrl: getYouTubeThumbnailUrl(embed(video.id)),
              meta: formatYouTubeStats(stats.get(video.id)),
            }))}
          />
          <ActionLinks links={[{ href: 'https://www.youtube.com/@UMDCPSE', label: 'UMD CPSE YouTube channel' }]} />
        </Section>

        <Section id="graphics" title="Campaign graphics">
          <MediaGrid columns={3}>
            {assets.map((asset) => (
              <Figure key={asset.src} caption={asset.caption}>
                <LightboxImage src={asset.src} alt={asset.alt} width={asset.width} height={asset.height} className="h-auto w-full" roundedClassName="rounded-none" />
              </Figure>
            ))}
          </MediaGrid>
        </Section>
      </CaseStudyBody>

      <CaseStudyFooter slug={slug} />
    </CaseStudyShell>
  );
}
