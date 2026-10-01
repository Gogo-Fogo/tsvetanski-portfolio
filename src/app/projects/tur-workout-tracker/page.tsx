import Breadcrumbs from '@/components/breadcrumbs';
import LightboxImage from '@/components/lightbox-image';
import ProjectAtAGlance from '@/components/project-at-a-glance';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TUR Workout Tracker | Georgi Tsvetanski',
  description:
    'An offline-first iPhone workout log in SwiftUI with a Garmin watch companion in Monkey C. Solo product: design, engineering, catalog and website.',
};

const snapshotItems = [
  { label: 'My role', value: 'Solo developer and designer: product, iOS app, watch app, data, brand and website' },
  { label: 'Status', value: 'Runs on a physical iPhone; Garmin and App Store release checks still open' },
  { label: 'Stack', value: 'Swift, SwiftUI, SwiftData, HealthKit, Garmin Connect IQ (Monkey C), Cloudflare Workers' },
  { label: 'Scale', value: '806-exercise catalog, about 350 Swift files, 42 test files' },
] as const;

const features = [
  {
    title: 'Fast set logging',
    body: 'Focused weight and rep controls, supersets, circuits, warm-up, drop and failure sets, and rest timers that keep running when you leave the app. Each session starts from last time’s numbers so you know what to beat.',
  },
  {
    title: 'Gym-swap mode',
    body: 'Save the equipment at each gym you train in. When a gym can’t support an exercise, the app suggests the closest substitutes, ranked by shared muscles, kind of work and movement pattern, without rewriting your logged history.',
  },
  {
    title: 'Heart-rate guided rest',
    body: 'With a Garmin watch streaming heart rate, the rest bar shows your pulse coming down toward a recovery target and can end the rest automatically. It also warns you when recovery slows across sets.',
  },
  {
    title: 'Race mode',
    body: 'For hybrid races, each station splits into work and transition on a wall-clock timer, with a live gap against a ghost of your previous attempt.',
  },
  {
    title: 'Progress you can feel',
    body: 'A front and back muscle-load body map, a week-by-week photo timeline, estimated one-rep-max records and a shareable year-in-review, all computed on the device.',
  },
  {
    title: 'Share without accounts',
    body: 'Workout plans share as an image card with a QR code. Anyone with the app scans it and saves the plan, with no account and no server.',
  },
];

const engineering = [
  {
    title: 'Offline and private by default',
    body: 'Records live in SwiftData on the phone with atomic commits, migration recovery copies and full backups. There is no account or server for the log itself.',
  },
  {
    title: 'Portable core',
    body: 'Training rules live in a separate GymCore Swift package that the iPhone app depends on. The Garmin app mirrors the same rules (next-set rotation, rest, set validation, volume), so phone and watch agree.',
  },
  {
    title: 'A real Garmin activity',
    body: 'Garmin watches don’t run watchOS, so the companion is a separate Connect IQ app written in Monkey C. It records a real Strength Training activity that reaches Garmin Connect, and syncs sets and timers with the phone over a versioned message link.',
  },
  {
    title: 'Licensed catalog',
    body: 'The exercise catalog is normalized from openly licensed sources, keeps per-entry license metadata, and merges duplicates so renamed exercises carry their history with them.',
  },
];

export default function TurWorkoutTrackerPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] p-8 font-sans text-[var(--foreground)] md:p-24">
      <div className="mx-auto max-w-5xl">
        <header className="mb-16">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Projects', href: '/career' },
              { label: 'TUR Workout Tracker' },
            ]}
            className="mb-4"
          />
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">
            iOS · SwiftUI · Garmin Connect IQ · Solo Product
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight">TUR Workout Tracker</h1>
          <p className="mt-3 max-w-3xl text-[var(--muted)]">
            An offline-first workout notebook for iPhone, with a Garmin watch companion. I built it because I wanted a log that is fast
            between sets, works without an account, and understands the way I train: lifting, hybrid racing and switching between gyms.
          </p>
        </header>

        <section className="flex flex-col gap-12 md:gap-16">
          <ProjectAtAGlance items={snapshotItems} />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div className="mx-auto w-full max-w-xs overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-strong)]">
              <LightboxImage
                src="/images/projects/tur-workout-tracker/today-screen.jpg"
                alt="TUR Today screen: the next workout, Upper + Easy Mile, with a Start workout button, weekly progress, and starred routines"
                width={863}
                height={1823}
                className="h-auto w-full object-cover"
                roundedClassName="rounded-none"
                popupCaption="The Today screen: the next routine, this week's progress, and starred routines."
              />
            </div>

            <div className="flex flex-col gap-8">
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
                <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">The Product</h2>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  Most workout apps are either too slow to use mid-set or lock your history behind an account. TUR keeps one action in
                  focus at a time, keeps every record on your phone, and lets the watch on your wrist do the timing.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                  The visual identity is a cave-wall theme: charcoal surfaces, one warm red accent for primary actions, and an
                  aurochs-horn mark. I designed the brand, the app UI and the marketing site, which includes a public feature-request
                  and roadmap portal running on Cloudflare Workers.
                </p>
              </div>
              <div className="rounded-2xl border border-[var(--border)] bg-[#0d0d0f] p-8 shadow-[var(--shadow)]">
                <LightboxImage
                  src="/images/projects/tur-workout-tracker/tur-lockup.png"
                  alt="TUR logo: a red aurochs-horn mark next to the TUR wordmark"
                  width={900}
                  height={288}
                  className="mx-auto h-auto w-full max-w-sm object-contain"
                  roundedClassName="rounded-none"
                  popupCaption="TUR brand lockup."
                />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">What It Does</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((item) => (
                <div key={item.title} className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
                  <p className="text-sm font-semibold text-[var(--foreground)]">{item.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Engineering</h2>
            <div className="mb-6 rounded-xl border border-[var(--border)] bg-[var(--background)] p-5 font-mono text-xs leading-relaxed text-[var(--muted)]">
              feature views -&gt; feature controllers<br />
              -&gt; GymCore rules and projections<br />
              -&gt; repository (named actions) -&gt; SwiftData records<br />
              -&gt; after commit: Health, notifications, Garmin link
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {engineering.map((item) => (
                <div key={item.title} className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
                  <p className="text-sm font-semibold text-[var(--foreground)]">{item.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Where It Stands</h2>
            <p className="text-sm leading-relaxed text-[var(--muted)]">
              The app builds in Xcode and runs on my iPhone, and the Garmin app builds for the epix Gen 2 and runs in Garmin’s device simulator. Before release I
              still need to finish the iPhone interaction checklist, test the watch link and recording on real hardware, and validate
              the Apple Health integration. The project keeps a written list of what has and hasn’t been verified, so the status above
              is not a guess.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
