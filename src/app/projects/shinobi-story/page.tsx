import { CardGrid, CaseStudyHeader, CaseStudyShell, Figure, Prose, Section, Split } from '@/components/case-study/case-study';
import { CaseStudyBody, CaseStudyFooter } from '@/components/case-study/case-study-layout';
import VideoGrid from '@/components/case-study/video-grid';
import LightboxImage from '@/components/lightbox-image';
import LightboxVideo from '@/components/lightbox-video';
import { formatYouTubeStats, getYouTubeThumbnailUrl, getYouTubeVideoId, getYouTubeVideoStats } from '@/app/youtube';
import { projectMetadata } from '@/content/project-helpers';

const slug = 'shinobi-story' as const;

export const metadata = projectMetadata(
  slug,
  'Five years of live operations on a custom Naruto MMORPG built on an overhauled WoW 3.3.5 client: $110K revenue, 1M+ downloads, 56,000 players.'
);

export const revalidate = 3600;

const glance = [
  { label: 'My role', value: 'Live operations, content planning, animation, player support, marketing and developer mentoring' },
  { label: 'Project', value: 'Custom MMORPG built by overhauling the World of Warcraft 3.3.5 client and gameplay systems' },
  { label: 'Reach', value: '1M+ downloads, 56,000 players, a 16,500-member Discord' },
  { label: 'Result', value: '$110K revenue over five live years, 2019–2024' },
] as const;

const featured = { embedUrl: 'https://www.youtube.com/embed/bPsGUDkz6-0', fallbackTitle: 'Shinobi Story featured highlight' };

const moreVideos = [
  { embedUrl: 'https://www.youtube.com/embed/mkfwWyJT5OU', fallbackTitle: 'Shinobi Story video' },
  { embedUrl: 'https://www.youtube.com/embed/X1hkWDu-i9E', fallbackTitle: 'Shinobi Story video' },
  { embedUrl: 'https://www.youtube.com/embed/3NiuTEdX1IU', fallbackTitle: 'Shinobi Story video' },
];

const results = [
  { title: 'Scale', body: '1M+ downloads, 56,000 players and a 16,500+ member Discord community.' },
  { title: 'Revenue', body: '$110K total revenue at roughly an 85% margin, with low cost of goods.' },
  { title: 'Longevity', body: 'Engagement sustained across a five-year live project, 2019–2024.' },
];

export default async function ShinobiStoryPage() {
  const ids = [featured, ...moreVideos].map((video) => getYouTubeVideoId(video.embedUrl));
  const stats = await getYouTubeVideoStats(ids);
  const titleOf = (embedUrl: string, fallback: string) => stats.get(getYouTubeVideoId(embedUrl))?.title ?? fallback;
  const metaOf = (embedUrl: string) => formatYouTubeStats(stats.get(getYouTubeVideoId(embedUrl)));

  return (
    <CaseStudyShell>
      <CaseStudyHeader
        slug={slug}
        lede={
          <p>
            A custom Naruto MMORPG with original animation, rebuilt gameplay systems, weekly content and five years of live operations. I
            started in customer support and grew into animation, content production, marketing and mentoring new developers.
          </p>
        }
        hero={
          <div className="aspect-video">
            <LightboxVideo
              embedUrl={featured.embedUrl}
              thumbnailUrl={getYouTubeThumbnailUrl(featured.embedUrl)}
              title={titleOf(featured.embedUrl, featured.fallbackTitle)}
              className="h-full w-full object-cover"
              roundedClassName="rounded-none"
            />
          </div>
        }
        heroCaption={
          <>
            The featured highlight video{metaOf(featured.embedUrl) ? ` · ${metaOf(featured.embedUrl)}` : ''}.
          </>
        }
        glance={glance}
      />

      <CaseStudyBody>
        <Section
          id="what-i-did"
          title="What I did"
          intro={
            <>
              <p>
                The team used the WoW 3.3.5 client as a technical base, then replaced its characters, abilities, animation, combat and
                supporting systems to make a distinct MMORPG.
              </p>
              <p>
                I began in customer support, which taught me what the community actually felt, then moved into development: character and
                ability animation, guiding new developers through scripting, level design and debugging, and shaping content rollouts and
                training material.
              </p>
            </>
          }
        />

        <Section id="results" title="Results">
          <CardGrid items={results} />
        </Section>

        <Section id="live-ops" title="Running a live game">
          <Split
            media={
              <Figure>
                <LightboxImage
                  src="/images/SS_NewContentStrategy.png"
                  alt="Shinobi Story content planning board"
                  width={1200}
                  height={900}
                  className="h-auto w-full"
                  roundedClassName="rounded-none"
                />
              </Figure>
            }
          >
            <h3>Content planning</h3>
            <p>
              I mapped content drops to player progression: quests, story beats and seasonal events timed to keep both new players and
              five-year veterans coming back.
            </p>
          </Split>
          <Split
            reverse
            media={
              <Figure>
                <LightboxImage
                  src="/images/SS_MarketingCampaign.png"
                  alt="Shinobi Story marketing campaign graphics"
                  width={1200}
                  height={900}
                  className="h-auto w-full"
                  roundedClassName="rounded-none"
                />
              </Figure>
            }
          >
            <h3>Marketing rollouts</h3>
            <p>
              Promo material timed to major content drops: update trailers, event graphics and community announcements planned around peak
              player hours.
            </p>
          </Split>
          <Split
            media={
              <Figure>
                <LightboxImage
                  src="/images/SS_BeforeAndAfter.png"
                  alt="Before and after comparison of a Shinobi Story area"
                  width={1200}
                  height={900}
                  className="h-auto w-full"
                  roundedClassName="rounded-none"
                />
              </Figure>
            }
          >
            <h3>Quality reviews</h3>
            <p>
              A before-and-after review process to hold community-built areas to the standard of official content, focused on lighting, asset
              density and how clearly players can find their way.
            </p>
          </Split>
        </Section>

        <Section id="videos" title="More videos">
          <VideoGrid
            items={moreVideos.map((video) => ({
              title: titleOf(video.embedUrl, video.fallbackTitle),
              embedUrl: video.embedUrl,
              thumbnailUrl: getYouTubeThumbnailUrl(video.embedUrl),
              meta: metaOf(video.embedUrl),
            }))}
          />
          <Prose>
            <p>
              The sequel is in development in Unreal Engine 5: see <a href="/projects/shinobi-story-2">Shinobi Story 2</a>.
            </p>
          </Prose>
        </Section>
      </CaseStudyBody>

      <CaseStudyFooter slug={slug} />
    </CaseStudyShell>
  );
}
