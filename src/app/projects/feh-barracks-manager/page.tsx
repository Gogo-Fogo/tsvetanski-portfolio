import {
  ActionLinks,
  BulletList,
  CardGrid,
  CaseStudyHeader,
  CaseStudyShell,
  DeepDive,
  Figure,
  MediaGrid,
  Section,
} from '@/components/case-study/case-study';
import { CaseStudyBody, CaseStudyFooter } from '@/components/case-study/case-study-layout';
import DocViewer from '@/components/doc-viewer';
import type { DocOutlineItem, DocPage } from '@/components/doc-viewer';
import LightboxImage from '@/components/lightbox-image';
import { projectMetadata } from '@/content/project-helpers';

const slug = 'feh-barracks-manager' as const;

export const metadata = projectMetadata(
  slug,
  'Solo-built Fire Emblem Heroes companion app: synced collections, a custom data pipeline, AI export and a portable Windows launcher.'
);

const glance = [
  { label: 'My role', value: 'Solo developer: product design, frontend, data ingestion, releases and launcher packaging' },
  { label: 'Built with', value: 'Next.js 16, React 19, Supabase, a custom Game8/Fandom pipeline, GitHub Releases' },
  { label: 'Runs on', value: 'Browser, mobile browser and a portable Windows launcher' },
  { label: 'Scale', value: '1,270 indexed heroes, 5,081 character images and 1,267 quote files (local data set)' },
] as const;

const productScreens = [
  {
    src: '/images/projects/feh-barracks/feh-hero-library.png',
    alt: 'FEH Barracks My Heroes library showing owned units, merges, dupes, and build summaries',
    width: 1328,
    height: 1213,
    title: 'My Heroes Library',
    caption: 'Owned units stay searchable and sortable, with merges, dupes, tags, and build-state summaries readable in one pass.',
    popupCaption:
      'Current My Heroes capture showing the owned-library grid, filter row, and the build-management direction for each synced barracks entry.',
  },
  {
    src: '/images/projects/feh-barracks/feh-tavern.png',
    alt: 'FEH Barracks Tavern screen with social panel, stage avatars, and friends list',
    width: 1240,
    height: 1436,
    title: 'Tavern Social Surface',
    caption: 'The Tavern pushes the product past plain CRUD by giving the collection app a social lounge, avatar stage, and friend-state layer.',
    popupCaption:
      'Current Tavern capture showing the stage presentation, friend management panel, and social features beyond collection management.',
  },
  {
    src: '/images/projects/feh-barracks/feh-aether-resort.png',
    alt: 'FEH Barracks Aether Resort prototype with mini sprites roaming a map',
    width: 1200,
    height: 1250,
    title: 'Aether Resort Prototype',
    caption: 'Local mini sprites, slot selection, and saved background preferences turn collection data into a playful companion surface.',
    popupCaption:
      'Current Aether Resort capture showing the selected hero slots, background selection, and roaming mini-sprite prototype built on top of the FEH data set.',
  },
  {
    src: '/images/projects/feh-barracks/feh-login-screen.png',
    alt: 'FEH Barracks login screen with account form and FEH presentation art',
    width: 1600,
    height: 1265,
    title: 'Synced Entry Surface',
    caption: 'The account entry flow frames the tool as a synced multi-device product instead of a local-only prototype.',
    popupCaption:
      'Current FEH Barracks login surface: account entry on the left, FEH presentation art on the right, and the project framed as a synced multi-device product.',
  },
];

const productItems = [
  'Account-based barracks with synced favorites, notes, team comps, and profile preferences.',
  'Hero browser, owned-library management, and direct entry editing for merges, dupes, blessings, and tracked build inventory.',
  'AI export endpoints that package owned-state context for planning and build-assistance workflows.',
  'Aether Resort and Tavern side surfaces that push the project past a plain database shell.',
  'Launcher-driven local install path for heavier asset bundles and desktop-first usage.',
];

const systemItems = [
  {
    title: 'App Product',
    body: 'The app layer handles auth, account-bound user state, hero browsing, barracks CRUD, My Heroes editing, Aether Resort, Tavern, and the AI export surface.',
  },
  {
    title: 'Data Pipeline',
    body: 'Behind the UI is a custom FEH dataset built from Game8 and Fandom. Game8 stays the canonical identity source, while Fandom fills in art, quotes, and shared assets.',
  },
  {
    title: 'Distribution',
    body: 'The project also ships as a portable Windows launcher that installs update bundles from GitHub Releases and keeps the heavier local asset path viable.',
  },
];

const hardProblemItems = [
  {
    title: 'Upstream Data Was Not Stable',
    body: 'This was never a clean API integration. The project had to survive roster drift, naming mismatches, lazy-loaded discovery gaps, and repeated importer hardening work.',
  },
  {
    title: 'Cloud Sync And Heavy Art Needed Different Homes',
    body: 'I kept user metadata in Supabase, but treated the full FEH art archive as local release-bundle material. That kept the app useful without pushing storage costs in the wrong direction.',
  },
  {
    title: 'Release Quality Mattered',
    body: 'This project needed real maintenance habits: scheduled imports, reconcile checks, launcher updates, asset bundles, release notes, and safer fallbacks when source data drifted.',
  },
];

const evidencePages: DocPage[] = [
  {
    src: '/images/projects/feh-barracks/feh-doc-01.png',
    alt: 'FEH Barracks Manager project summary page',
    width: 1224,
    height: 1584,
    caption: 'Project summary framing the app, pipeline, launcher, and cross-platform usage model.',
  },
  {
    src: '/images/projects/feh-barracks/feh-doc-02.png',
    alt: 'FEH Barracks Manager architecture and scale page',
    width: 1224,
    height: 1584,
    caption: 'Architecture and scale snapshot pulled from the current local project state and supporting notes.',
  },
  {
    src: '/images/projects/feh-barracks/feh-doc-03.png',
    alt: 'FEH Barracks Manager release and maintenance evidence page',
    width: 1224,
    height: 1584,
    caption: 'Release-direction and maintenance evidence based on recent release notes and active roadmap docs.',
  },
];

const evidenceOutline: DocOutlineItem[] = [
  { heading: 'Project Summary', pageIndex: 0 },
  { heading: 'Architecture & Scale', pageIndex: 1 },
  { heading: 'Release Notes', pageIndex: 2 },
];

const documentLinks = [
  {
    href: '/documents/projects/FEH_Barracks/portfolio-case-study/07-portfolio-case-study-draft.md',
    label: 'Case study notes (Markdown)',
  },
  {
    href: '/documents/projects/FEH_Barracks/portfolio-case-study/01-project-summary.md',
    label: 'Project summary (Markdown)',
  },
  {
    href: '/documents/projects/FEH_Barracks/release-notes-v0.4.0.md',
    label: 'Release notes v0.4.0 (Markdown)',
  },
];

export default function FehBarracksManagerPage() {
  return (
    <CaseStudyShell>
      <CaseStudyHeader
        slug={slug}
        lede={
          <p>
            A Fire Emblem Heroes companion app for tracking owned characters across devices. I built the interface, cloud sync, data importer,
            release bundles and a portable Windows launcher, without an official game API.
          </p>
        }
        hero={
          <LightboxImage
            src="/images/projects/feh-barracks/feh-hero-library.png"
            alt="My Heroes library with owned units, merges, dupes and build summaries"
            width={1328}
            height={1213}
            priority
            className="h-auto w-full"
            roundedClassName="rounded-none"
          />
        }
        heroCaption="The My Heroes library: owned units, merges, dupes, tags and build state, searchable in one place."
        glance={glance}
      />

      <CaseStudyBody>
        <Section
          id="why"
          title="Why I built it"
          intro={
            <>
              <p>
                Fire Emblem Heroes players track more than owned units: merge projects, duplicates, skill plans, favourites, team ideas, and a
                roster that keeps changing. I wanted one place to keep that usable across devices.
              </p>
              <p>
                That turned into real systems work fast. The app had to feel like a proper collection manager while surviving unstable source
                data, naming mismatches, release maintenance and the cost of shipping a lot of game art.
              </p>
            </>
          }
        >
          <BulletList items={productItems} />
        </Section>

        <Section id="screens" title="Product screens">
          <MediaGrid>
            <Figure caption="Dashboard: synced account, quick hero add, favourites and the team builder.">
              <LightboxImage src="/images/projects/feh-barracks/feh-barracks-dashboard.png" alt="FEH Barracks dashboard" width={1200} height={1376} className="h-auto w-full" roundedClassName="rounded-none" />
            </Figure>
            {productScreens
              .filter((screen) => !screen.src.includes('hero-library'))
              .map((screen) => (
                <Figure key={screen.src} caption={<><strong>{screen.title}.</strong> {screen.caption}</>}>
                  <LightboxImage src={screen.src} alt={screen.alt} width={screen.width} height={screen.height} className="h-auto w-full" roundedClassName="rounded-none" />
                </Figure>
              ))}
          </MediaGrid>
        </Section>

        <Section id="systems" title="How it's built">
          <CardGrid items={systemItems} />
        </Section>

        <Section id="hard-problems" title="Hard problems">
          <CardGrid items={hardProblemItems} />
        </Section>

        <Section
          id="outcome"
          title="Outcome"
          intro={
            <p>
              The release workflow keeps the tool usable while its source data changes, and lets someone else launch it without rebuilding my
              development environment.
            </p>
          }
        >
          <ActionLinks links={documentLinks.map((link) => ({ href: link.href, label: link.label }))} />
          <DeepDive summary="Evidence pack: summary, architecture and release notes">
            <DocViewer
              title="FEH Barracks Manager evidence pack"
              description="Project summary, architecture and scale, and release-hardening notes from the working docs."
              pages={evidencePages}
              outline={evidenceOutline}
            />
          </DeepDive>
        </Section>
      </CaseStudyBody>

      <CaseStudyFooter slug={slug} />
    </CaseStudyShell>
  );
}
