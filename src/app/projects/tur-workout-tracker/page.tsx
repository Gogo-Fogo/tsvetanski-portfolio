import Image from 'next/image';
import { CardGrid, CaseStudyHeader, CaseStudyShell, Prose, Section, Split } from '@/components/case-study/case-study';
import { CaseStudyBody, CaseStudyFooter } from '@/components/case-study/case-study-layout';
import { projectMetadata } from '@/content/project-helpers';

const slug = 'tur-workout-tracker' as const;

export const metadata = projectMetadata(
  slug,
  'An offline-first iPhone workout log in SwiftUI with a Garmin watch companion in Monkey C. Solo product: design, engineering, catalog and website.'
);

const glance = [
  { label: 'My role', value: 'Solo: product, iOS app, watch app, data, brand and website' },
  { label: 'Built with', value: 'Swift, SwiftUI, SwiftData, HealthKit, Garmin Connect IQ (Monkey C), Cloudflare Workers' },
  { label: 'Scale', value: '806-exercise catalog, about 350 Swift files, 42 test files' },
  { label: 'Status', value: 'Runs on a physical iPhone; Garmin and App Store release checks still open' },
] as const;

const features = [
  {
    title: 'Fast set logging',
    body: "Focused weight and rep controls, supersets, circuits, warm-up, drop and failure sets, and rest timers that keep running in the background. Each session starts from last time's numbers.",
  },
  {
    title: 'Gym-swap mode',
    body: "Save the equipment at each gym. When a gym can't support an exercise, the app suggests the closest substitutes, ranked by shared muscles, kind of work and movement pattern, without rewriting history.",
  },
  {
    title: 'Heart-rate guided rest',
    body: 'With a Garmin watch streaming heart rate, the rest bar shows your pulse dropping toward a recovery target, can end the rest automatically, and warns when recovery slows across sets.',
  },
  {
    title: 'Race mode',
    body: 'For hybrid races, each station splits into work and transition on a wall-clock timer, with a live gap against a ghost of your previous attempt.',
  },
  {
    title: 'Progress you can see',
    body: 'A front-and-back muscle-load body map, a weekly photo timeline, estimated one-rep-max records and a shareable year in review, all computed on the phone.',
  },
  {
    title: 'Share without accounts',
    body: 'Plans share as an image card with a QR code. Anyone with the app scans it and saves the plan; no account, no server.',
  },
];

const engineering = [
  {
    title: 'Offline and private by default',
    body: 'Records live in SwiftData on the phone with atomic commits, migration recovery copies and full backups. The log needs no account or server.',
  },
  {
    title: 'One set of training rules',
    body: 'Training rules live in a separate GymCore Swift package. The Garmin app mirrors the same rules (next-set rotation, rest, set validation, volume) so phone and watch agree.',
  },
  {
    title: 'A real Garmin activity',
    body: "Garmin watches don't run watchOS, so the companion is a Connect IQ app in Monkey C. It records a real Strength Training activity in Garmin Connect and syncs sets and timers with the phone over a versioned message link.",
  },
  {
    title: 'Licensed catalog',
    body: 'The exercise catalog is normalised from openly licensed sources, keeps per-entry licence metadata, and merges duplicates so renamed exercises keep their history.',
  },
];

export default function TurWorkoutTrackerPage() {
  return (
    <CaseStudyShell>
      <CaseStudyHeader
        slug={slug}
        lede={
          <p>
            An offline-first workout notebook for iPhone with a Garmin watch companion. I built it because I wanted a log that&apos;s fast
            between sets, needs no account, and fits how I train: lifting, hybrid racing and switching gyms.
          </p>
        }
        hero={
          <iframe
            src="/embeds/tur-site/index.html"
            title="TUR website, interactive snapshot"
            loading="lazy"
            className="h-[680px] bg-[#0d0d0f] md:h-[760px]"
          />
        }
        heroBleed
        heroCaption={
          <>
            The product website I designed and built, embedded as a working snapshot (sign-up and roadmap switched off). Try the phone
            demo: start a workout, log three sets, see the progress. The app screens on it are design mockups, not device captures.{' '}
            <a href="/embeds/tur-site/index.html" target="_blank" rel="noreferrer">
              Open the site full screen
            </a>
          </>
        }
        glance={glance}
      />

      <CaseStudyBody>
        <Section id="product" title="Why I built it">
          <Split
            media={
              <div className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[#0d0d0f] p-8">
                <Image
                  src="/images/projects/tur-workout-tracker/tur-lockup.png"
                  alt="TUR logo: a red aurochs-horn mark next to the TUR wordmark"
                  width={900}
                  height={288}
                  className="mx-auto h-auto w-full max-w-sm"
                />
              </div>
            }
          >
            <p>
              Most workout apps are either too slow to use mid-set or lock your history behind an account. TUR keeps one action in focus
              at a time, keeps every record on your phone, and lets the watch do the timing.
            </p>
            <p>
              I also designed the brand: a cave-wall theme with charcoal surfaces, one warm red for primary actions, and an aurochs-horn
              mark. The marketing site includes a public feature-request and roadmap portal on Cloudflare Workers.
            </p>
          </Split>
        </Section>

        <Section id="features" title="What it does">
          <CardGrid items={features} />
        </Section>

        <Section
          id="engineering"
          title="How it's built"
          intro={
            <pre className="overflow-x-auto rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--surface)] p-4 font-mono text-sm leading-relaxed">
              {'feature views → feature controllers\n→ GymCore rules and projections\n→ repository (named actions) → SwiftData records\n→ after commit: Health, notifications, Garmin link'}
            </pre>
          }
        >
          <CardGrid items={engineering} columns={2} />
        </Section>

        <Section id="status" title="Where it stands">
          <Prose>
            <p>
              The app builds in Xcode and runs on my iPhone. The Garmin app builds for the epix Gen 2 and runs in Garmin&apos;s device
              simulator. Before release I still need to finish the iPhone interaction checklist, test the watch link and recording on real
              hardware, and validate the Apple Health integration. The project keeps a written list of what has and hasn&apos;t been
              verified, so this status isn&apos;t a guess.
            </p>
          </Prose>
        </Section>
      </CaseStudyBody>

      <CaseStudyFooter slug={slug} />
    </CaseStudyShell>
  );
}
