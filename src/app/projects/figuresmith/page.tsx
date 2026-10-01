import { ActionLinks, BulletList, CaseStudyHeader, CaseStudyShell, Prose, Section } from '@/components/case-study/case-study';
import { CaseStudyBody, CaseStudyFooter } from '@/components/case-study/case-study-layout';
import InstagramGrid from '@/components/instagram-grid';
import LightboxVideo from '@/components/lightbox-video';
import { projectMetadata } from '@/content/project-helpers';

const slug = 'figuresmith' as const;

export const metadata = projectMetadata(
  slug,
  'I founded Figuresmith LLC as a figurine studio after a 2024 Concept Track grant, combining 3D printing, hand painting, LEDs and custom electronics.'
);

const youtubeShorts = ['rR83laKg7MM', 'IJKsUegf6xo', 'CxWfmaZat_g', 'APO4Cfk-8G0', 'UAwoRD7nFaY', 'MEPPntSmgoE', '0Agb3PO1sgs'];

const instagramPosts = [
  'https://www.instagram.com/p/DMbttH9RBed/',
  'https://www.instagram.com/p/DFh7DlAxUNC/',
  'https://www.instagram.com/p/DEdgZLMRETF/',
];

const glance = [
  { label: 'My role', value: 'Founder, owner and independent maker' },
  { label: 'Milestone', value: 'Formed Figuresmith LLC with support from a 2024 Concept Track grant' },
  { label: 'Process', value: 'FDM and resin printing, finishing, LEDs, custom controls' },
  { label: 'Status', value: 'LLC later closed; the practice continues as a hobby and side business' },
] as const;

const craft = [
  'Statuette design and 3D printing (FDM and resin).',
  'Hand painting and finishing: priming, layering, weathering.',
  'LED lighting rigs built into the figures.',
  'Custom buttons and electronics for interactive pieces.',
  'Regular publishing on Instagram and YouTube as @v4n_gogo.',
];

export default function FiguresmithPage() {
  return (
    <CaseStudyShell>
      <CaseStudyHeader
        slug={slug}
        lede={
          <p>
            After pitching a figurine studio through the Shady Grove Concept Track and receiving a small grant in 2024, I formed Figuresmith LLC.
            The studio combined 3D printing, hand painting, built-in LEDs and custom electronics. I closed the LLC when it no longer fit around
            school, and keep making figures as a hobby and side business.
          </p>
        }
        actions={
          <ActionLinks
            links={[
              { href: 'https://www.youtube.com/@v4n_gogo', label: 'YouTube @v4n_gogo', primary: true },
              { href: 'https://www.instagram.com/v4n_gogo/', label: 'Instagram @v4n_gogo' },
            ]}
          />
        }
        glance={glance}
      />

      <CaseStudyBody>
        <Section id="videos" title="Process and figure videos" intro={<p>Short clips of printing, painting and finished pieces.</p>}>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {youtubeShorts.map((id) => (
              <li key={id} className="aspect-[9/16] overflow-hidden rounded-[var(--radius-md)] border border-[var(--border)] bg-black">
                <LightboxVideo
                  embedUrl={`https://www.youtube.com/embed/${id}`}
                  thumbnailUrl={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                  title="Figuresmith process video (YouTube Short)"
                  className="h-full w-full object-cover"
                  roundedClassName="rounded-none"
                />
              </li>
            ))}
          </ul>
        </Section>

        <Section id="work" title="Recent work" intro={<p>Figure stills and work-in-progress posts from Instagram.</p>}>
          <InstagramGrid permalinks={instagramPosts} />
        </Section>

        <Section id="craft" title="What I make">
          <BulletList items={craft} />
          <Prose>
            <p>
              <a href="https://shadygrove.usmd.edu/academics/faq" target="_blank" rel="noreferrer">
                About the Shady Grove Concept Track
              </a>
            </p>
          </Prose>
        </Section>
      </CaseStudyBody>

      <CaseStudyFooter slug={slug} />
    </CaseStudyShell>
  );
}
