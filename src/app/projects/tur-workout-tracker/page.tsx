import Image from 'next/image';
import { CardGrid, CaseStudyHeader, CaseStudyShell, Prose, Section, Split } from '@/components/case-study/case-study';
import { CaseStudyBody, CaseStudyFooter } from '@/components/case-study/case-study-layout';
import { projectMetadata } from '@/content/project-helpers';

const slug = 'tur-workout-tracker' as const;

export const metadata = projectMetadata(
  slug,
  'A local-first iPhone workout log in invitation-only TestFlight beta, with a Garmin Connect IQ companion. Solo product: design, engineering, catalog and website.'
);

const glance = [
  { label: 'My role', value: 'Solo: product, iOS app, watch app, data, brand and website' },
  { label: 'Built with', value: 'Swift, SwiftUI, SwiftData, HealthKit, Garmin Connect IQ (Monkey C), Cloudflare Workers' },
  { label: 'Scale', value: '806 bundled exercises' },
  { label: 'Status', value: 'Invitation-only iPhone TestFlight beta; Garmin companion listed on Connect IQ' },
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
    title: 'Share and export',
    body: 'Plans share as an image card with a QR code. Workout history can be exported as CSV or a complete backup.',
  },
];

const engineering = [
  {
    title: 'Local-first records',
    body: 'Workout records live in SwiftData on the phone, with atomic commits and migration recovery copies. The beta also includes accounts and online backups.',
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
            A local-first workout notebook for iPhone with a Garmin watch companion. I built it because I wanted a log that&apos;s fast
            between sets and fits how I train: lifting, hybrid racing and switching gyms.
          </p>
        }
        hero={
          <iframe
            src="https://tur-app.tur-gym-georgi.workers.dev/"
            title="TUR product website"
            loading="lazy"
            className="h-[680px] bg-[#0d0d0f] md:h-[760px]"
          />
        }
        heroBleed
        heroCaption={
          <>
            The live product website I designed and built. Its interactive demos use example data.{' '}
            <a href="https://tur-app.tur-gym-georgi.workers.dev/" target="_blank" rel="noreferrer">
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
              I wanted faster set logging and control over my training history. TUR keeps one action in focus at a time, stores the
              workout log on the phone, and lets the watch do the timing. Beta accounts and online backups add ways to carry that log
              across devices.
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
              TUR runs on a physical iPhone and is available to invited TestFlight testers. Its Garmin companion is listed on the{' '}
              <a href="https://apps.garmin.com/apps/0d792d60-3471-4eab-bb92-4a1aa06f0a7a" target="_blank" rel="noreferrer">
                Connect IQ Store
              </a>
              . The iPhone app is not yet on the public App Store; device testing, Garmin sync reliability and release checks are still
              in progress.
            </p>
          </Prose>
        </Section>
      </CaseStudyBody>

      <CaseStudyFooter slug={slug} />
    </CaseStudyShell>
  );
}
