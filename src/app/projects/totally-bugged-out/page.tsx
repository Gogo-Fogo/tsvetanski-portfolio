import { ActionLinks, CardGrid, CaseStudyHeader, CaseStudyShell, Figure, MediaGrid, Prose, Section } from '@/components/case-study/case-study';
import { CaseStudyBody, CaseStudyFooter } from '@/components/case-study/case-study-layout';
import LightboxImage from '@/components/lightbox-image';
import LightboxVideo from '@/components/lightbox-video';
import { projectMetadata } from '@/content/project-helpers';

const slug = 'totally-bugged-out' as const;

export const metadata = projectMetadata(
  slug,
  'Solo first-person bug survival prototype: a throw-anything system, multi-state roach AI, and enemies that climb walls and ceilings.'
);

const glance = [
  { label: 'My role', value: 'Solo designer and developer (free-time project)' },
  { label: 'Built with', value: 'Unity, C#, Blender, WebGL' },
  { label: 'Challenge', value: 'Responsive object throwing against wall-climbing enemy AI' },
  { label: 'Result', value: 'A playable survival prototype with tested combat and AI systems' },
] as const;

const systems = [
  {
    title: 'Throw anything',
    body: 'A Rigidbody-based system lets the player pick up household props and use them as weapons.',
  },
  {
    title: 'Roach behaviour',
    body: 'Several states: wandering, climbing walls, chasing the player, and panic-fleeing when nearby roaches are destroyed.',
  },
  {
    title: 'Survival loop',
    body: 'Health and a timer keep the pressure on and reward efficiency, with win and lose conditions.',
  },
];

export default function TotallyBuggedOutPage() {
  return (
    <CaseStudyShell>
      <CaseStudyHeader
        slug={slug}
        lede={
          <p>
            A solo first-person prototype: clear a cockroach-infested house with a spray and whatever household objects you can throw. I built it
            to explore player-enemy interaction and reactive AI.
          </p>
        }
        actions={<ActionLinks links={[{ href: 'https://gogo81.itch.io/totally-bugged-out', label: 'Play in the browser (itch.io)', primary: true }]} />}
        hero={
          <div className="aspect-video">
            <LightboxVideo
              embedUrl="https://www.youtube.com/embed/u_uQalC8x_Y"
              thumbnailUrl="https://img.youtube.com/vi/u_uQalC8x_Y/maxresdefault.jpg"
              title="Totally Bugged Out gameplay"
              className="h-full w-full object-cover"
              roundedClassName="rounded-none"
            />
          </div>
        }
        heroCaption="Gameplay video."
        glance={glance}
      />

      <CaseStudyBody>
        <Section id="systems" title="Combat and AI">
          <CardGrid items={systems} />
          <MediaGrid>
            <Figure caption="In the house.">
              <LightboxImage src="/images/Totally Bugged Out_page_mainPhoto.png" alt="Totally Bugged Out gameplay screenshot" width={596} height={334} className="h-auto w-full" roundedClassName="rounded-none" />
            </Figure>
            <Figure caption="Tools and technologies snapshot.">
              <LightboxImage src="/images/Totally Bugged Out_photo_Tools&Technologies.png" alt="Totally Bugged Out tools and technologies" width={595} height={335} className="h-auto w-full" roundedClassName="rounded-none" />
            </Figure>
          </MediaGrid>
        </Section>

        <Section
          id="challenges"
          title="The hard part"
          intro={
            <p>
              Making throwing feel responsive while balancing it against reactive AI took several prototypes. I worked down physics clipping and
              unintended exploits, and tuned it to run smoothly in WebGL. Props were edited and retopologised in Blender from free Unity kits.
            </p>
          }
        >
          <ActionLinks
            links={[
              { href: 'https://docs.google.com/document/d/1jzVgY0v35YnP3SgC22iMdTLhXWFto3gIAMeecEug4YM/edit?usp=sharing', label: 'Dev notes' },
              { href: 'https://docs.google.com/document/d/1W6ZaNEkFeXCRFYmjpj-PdToEHJoA4ZVVI6UWBz3XbQ4/edit?usp=sharing', label: 'Game design document' },
            ]}
          />
          <Prose>
            <p>
              <small>
                Thanks to the Unity and Reddit developer communities, my professors and classmates at Montgomery College, free asset creators on
                the Unity Asset Store and Pixabay, and early playtesters for honest, practical feedback.
              </small>
            </p>
          </Prose>
        </Section>
      </CaseStudyBody>

      <CaseStudyFooter slug={slug} />
    </CaseStudyShell>
  );
}
