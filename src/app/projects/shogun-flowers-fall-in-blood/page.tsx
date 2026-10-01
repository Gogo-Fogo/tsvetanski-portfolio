import {
  ActionLinks,
  BulletList,
  CaseStudyHeader,
  CaseStudyShell,
  DeepDive,
  Figure,
  MediaGrid,
  Prose,
  Section,
  Split,
} from '@/components/case-study/case-study';
import { CaseStudyBody, CaseStudyFooter } from '@/components/case-study/case-study-layout';
import LightboxImage from '@/components/lightbox-image';
import LightboxLocalVideo from '@/components/lightbox-local-video';
import LightboxVideo from '@/components/lightbox-video';
import { projectMetadata } from '@/content/project-helpers';

const slug = 'shogun-flowers-fall-in-blood' as const;

export const metadata = projectMetadata(
  slug,
  'Solo mobile tactics RPG in Unity. First combat prototype in May 2025; the March 2026 build focuses on one battle slice, a revised HUD and cleaned-up support scenes.'
);

const VIDEOS = '/videos/projects/shogun-flowers-fall-in-blood';

const glance = [
  { label: 'My role', value: 'Solo designer and developer' },
  { label: 'Built with', value: 'Unity; Aseprite and PixelLab for sprites; Gemini for portrait ideation' },
  { label: 'Focus', value: 'One complete, readable battle slice before expanding scope' },
  { label: 'Status', value: 'In development; playable combat, summon, barracks and settings scenes' },
] as const;

const sliceScope = [
  'Party: Ryoma, Kuro and Tsukiko against Ronin Footman, Oni Brute and Yurei Caster.',
  <>One authored battle, <code>Courtyard Ambush</code>, in one gameplay scene, <code>Dev_Sandbox</code>.</>,
  'Success means a readable battle from setup to result without manual repair.',
];

const inBuild = [
  'CharacterDefinition, CharacterInstance and CharacterStats as the runtime data foundation.',
  'Battle HUD, drag indicators, range displays, floating combat text and result-state scaffolding.',
  'Authored encounter definitions and battle framing.',
  'Main Menu, Barracks, Summon and Settings scenes that can be tested directly.',
];

export default function ShogunPage() {
  return (
    <CaseStudyShell>
      <CaseStudyHeader
        slug={slug}
        lede={
          <p>
            A solo mobile tactics RPG in Unity. I built the first combat prototype in May 2025. The March 2026 build is narrower on purpose:
            one battle slice, a portrait-first HUD and cleaner support scenes, built properly before anything else is added.
          </p>
        }
        hero={
          <LightboxLocalVideo
            src={`${VIDEOS}/shogun-2026-03-25-battle-prototype.mp4`}
            title="Shogun battle slice, March 25 2026"
            triggerLabel="Play the March 2026 battle slice"
            className="aspect-video h-full w-full bg-black"
            roundedClassName="rounded-none"
          />
        }
        heroCaption="The March 2026 battle slice: portrait-first HUD, clearer drag-and-release feedback, range readability, floating damage text."
        glance={glance}
      />

      <CaseStudyBody>
        <Section
          id="before-after"
          title="What changed since 2025"
          intro={
            <p>
              The May 2025 prototype set the direction and pacing. Its problems were a loose battle loop, unclear UI and no reliable build target.
              In March 2026 I audited the project, separated working systems from placeholders, cut claims that were ahead of the build, and
              reset everything around one battle.
            </p>
          }
        >
          <Split
            media={
              <Figure caption="The original May 2025 prototype, kept as a reference point.">
                <div className="aspect-video">
                  <LightboxVideo
                    embedUrl="https://www.youtube.com/embed/mTIhaiYbRDk"
                    thumbnailUrl="https://img.youtube.com/vi/mTIhaiYbRDk/maxresdefault.jpg"
                    title="Shogun: Flowers Fall in Blood, May 2025 prototype"
                    className="h-full w-full object-cover"
                    roundedClassName="rounded-none"
                  />
                </div>
              </Figure>
            }
          >
            <h3>The current slice</h3>
            <BulletList items={sliceScope} />
          </Split>
        </Section>

        <Section
          id="support-scenes"
          title="Support scenes"
          intro={
            <p>
              Outside combat I rebuilt the summon, barracks and settings scenes so they behave like real scenes, not loose placeholders, and so
              scene view and play mode stop drifting apart. Combat is still the main build target.
            </p>
          }
        >
          <MediaGrid>
            <Figure caption="Summon screen: banner layout and featured-unit framing (March 25, 2026).">
              <LightboxLocalVideo
                src={`${VIDEOS}/shogun-2026-03-25-summons-prototype.mp4`}
                title="Shogun summon screen prototype"
                className="aspect-video h-full w-full bg-black"
                roundedClassName="rounded-none"
              />
            </Figure>
            <Figure caption="Barracks browsing and settings after the cleanup (March 25, 2026).">
              <LightboxLocalVideo
                src={`${VIDEOS}/shogun-2026-03-25-settings-and-barracks-prototype.mp4`}
                title="Shogun barracks and settings prototype"
                className="aspect-video h-full w-full bg-black"
                roundedClassName="rounded-none"
              />
            </Figure>
          </MediaGrid>
        </Section>

        <Section
          id="pipeline"
          title="Build and art pipeline"
          intro={
            <>
              <p>
                The art pipeline is deliberately simple: Gemini for portrait ideation, PixelLab for sprite and animation starting points,
                Aseprite for cleanup, and Unity for integration. Ronin Footman is the first real test of that pipeline.
              </p>
              <p>Shogun is an independent personal project.</p>
            </>
          }
        >
          <Prose>
            <h3>What exists in the current build</h3>
          </Prose>
          <BulletList items={inBuild} />
          <ActionLinks
            links={[
              { href: 'https://docs.google.com/document/d/1tQy-96n6PT-5ejI6dY2StB-Uuhs10RdjcZGwNd-t5xM/edit?usp=sharing', label: 'Systems audit (Google Doc)' },
              { href: 'https://docs.google.com/document/d/1H1RVHiRcTWC9bKdPeEIab16GYU6gXJxJ2aQxmZIGaZg/edit?tab=t.0#heading=h.p4vrpp5ibll6', label: 'Working GDD (Google Doc)' },
            ]}
          />
          <DeepDive summary="Early 2025 systems research board">
            <Figure caption="Research board from the 2025 analysis phase.">
              <LightboxImage
                src="/images/ShogunFlowersFallinBlood_HW_NarutoBlazing_Showcase_Example.png"
                alt="Early Shogun systems research board"
                width={1400}
                height={900}
                className="h-auto w-full"
                roundedClassName="rounded-none"
              />
            </Figure>
          </DeepDive>
        </Section>
      </CaseStudyBody>

      <CaseStudyFooter slug={slug} />
    </CaseStudyShell>
  );
}
