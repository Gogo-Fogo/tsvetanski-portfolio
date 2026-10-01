import { ActionLinks, CardGrid, CaseStudyHeader, CaseStudyShell, Section } from '@/components/case-study/case-study';
import { CaseStudyBody, CaseStudyFooter } from '@/components/case-study/case-study-layout';
import LightboxImage from '@/components/lightbox-image';
import { projectMetadata } from '@/content/project-helpers';

const slug = 'the-last-paycheck' as const;

export const metadata = projectMetadata(
  slug,
  'Narrative and systems design document for a dystopian 2050 board game about poverty, unstable work and inflation. Concept only.'
);

const glance = [
  { label: 'My role', value: 'Solo narrative and systems designer' },
  { label: 'Focus', value: 'Economic pressure, unstable work and family trade-offs' },
  { label: 'Deliverable', value: 'Board-game concept and full game design document' },
  { label: 'Status', value: 'Completed design document; no playable build' },
] as const;

const focus = [
  { title: 'Narrative systems', body: 'Social pressure and personal trade-offs in a harsh economy.' },
  { title: 'Economic mechanics', body: 'Unstable income and rising costs, and how they bend every daily decision.' },
  { title: 'Emotional stakes', body: 'A parent keeping a child afloat, with consequence-driven decision loops.' },
];

export default function TheLastPaycheckPage() {
  return (
    <CaseStudyShell>
      <CaseStudyHeader
        slug={slug}
        lede={
          <p>
            A game design document about poverty, unstable work and emotional survival in a dystopian 2050 America. The player supports their
            child through job insecurity, inflation and high-risk daily choices. Solo concept; there is no playable build.
          </p>
        }
        actions={
          <ActionLinks
            links={[
              {
                href: 'https://docs.google.com/document/d/1JTBtBdJxqJtGmq32sABKRfg9poBi-yePNI8TkbjgvEI/edit?usp=sharing',
                label: 'Read the game design document',
                primary: true,
              },
            ]}
          />
        }
        hero={
          <LightboxImage
            src="/images/TheLastPaycheck_Banner.png"
            alt="The Last Paycheck banner with silhouetted figures"
            width={1600}
            height={900}
            priority
            className="h-auto w-full"
            roundedClassName="rounded-none"
          />
        }
        glance={glance}
      />

      <CaseStudyBody>
        <Section id="focus" title="Design focus">
          <CardGrid items={focus} />
        </Section>
      </CaseStudyBody>

      <CaseStudyFooter slug={slug} />
    </CaseStudyShell>
  );
}
