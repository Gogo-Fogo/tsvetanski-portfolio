import Breadcrumbs from '@/components/breadcrumbs';
import LightboxImage from '@/components/lightbox-image';

const gallery = [
  {
    src: '/images/B360_bike_simulator.png',
    alt: 'B-360 VR dirt bike simulator scene',
    width: 1600,
    height: 900,
  },
  {
    src: '/images/B360_dev_vr.jpeg',
    alt: 'Development preview of the B-360 VR prototype',
    width: 1600,
    height: 900,
  },
  {
    src: '/images/B360_budget_phoneVR.png',
    alt: 'Low-cost mobile VR headset setup used for the prototype',
    width: 1600,
    height: 900,
  },
  {
    src: '/images/B360_dirtbike_riders.jpg',
    alt: 'B-360 dirt bike riders and community context',
    width: 1600,
    height: 900,
  },
  {
    src: '/images/B360_mainmmenu.png',
    alt: 'Main menu interface for the VR prototype',
    width: 1600,
    height: 900,
  },
  {
    src: '/images/B360_volunteering_baltimore.jpeg',
    alt: 'Community volunteering context tied to the B-360 collaboration',
    width: 1600,
    height: 900,
  },
];

const [simulatorImage, devImage, budgetImage, ridersImage, menuImage, volunteeringImage] = gallery;

const snapshot = [
  {
    title: 'Client & Mission',
    description:
      'Built with B-360, a Baltimore nonprofit that uses dirt bike culture to connect youth with STEM learning, mentorship, and community support.',
  },
  {
    title: 'Team',
    description:
      'Developed in Dr. Elka Cahn\'s community-focused game design class with teammates Zefran Jehle and Lewis Plested.',
  },
  {
    title: 'My Role',
    description:
      'I handled technical implementation, VR interaction flow, gameplay feel, and comfort-focused iteration across the prototype.',
  },
];

const prototypeLoop = [
  'Inspect a dirt bike in a workshop to learn parts and placement.',
  'Answer short quiz prompts tied to safety and bike knowledge.',
  'Test ride the bike in first-person instead of stopping at a static learning scene.',
  'Keep the experience useful for outreach and workshop discussion, not just impressive on first glance.',
];

const constraints = [
  {
    title: 'Affordable VR Target',
    description:
      'The prototype was built around Google Cardboard-style mobile VR instead of expensive headset setups.',
  },
  {
    title: 'Comfort First',
    description:
      'Camera behavior, movement, and pacing were tuned to reduce sickness risk for first-time VR users.',
  },
  {
    title: 'Real-World Use',
    description:
      'The goal was to give B-360 something they could imagine using in workshops and outreach, not just a class demo.',
  },
];

const developmentNotes = [
  'Frequent class reviews and team syncs kept the prototype grounded in feedback instead of drifting into over-scope ideas.',
  'Desktop and mobile test loops helped us catch comfort, clarity, and stability problems early.',
  'UI, onboarding, and interaction changes were made around readability and ease-of-use for new players.',
];

const feedbackPoints = [
  'We showed B-360 a working prototype during our final in-person meeting and gathered direct reactions while they playtested it.',
  'That session helped us understand how the project might fit real workshops instead of only classroom expectations.',
  'The hosted playtest ended with strong engagement and no reported motion sickness during the session.',
  'The project felt more serious because the feedback came from people who could actually use it.',
];

const continuationPlan = [
  'The semester ended before the final cross-platform version was finished.',
  'As of March 2026, Zefran and I plan to keep developing the project through Summer 2026.',
  'The current target is a cleaner build for PC, Android phones, and Meta Quest headsets.',
  'The next pass is focused on quality-of-life improvements, onboarding, polish, and broader device support.',
];

const takeaways = [
  'This project pushed me away from designing for novelty alone and toward work that felt useful, accessible, and meaningful to the people being served.',
  'It gave me much better experience with clients, community organizations, and real constraints than a normal classroom-only game project could.',
  'It also reinforced how much I care about XR when it is tied to actual people, actual goals, and actual practical limits.',
];

export default function VRMicrogamesCaseStudy() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-8 md:p-24 font-sans">
      <div className="max-w-5xl mx-auto">
        <header className="mb-16">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Projects', href: '/career' },
              { label: 'Shift Culture VR (B-360)' },
            ]}
            className="mb-4"
          />
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Community XR Collaboration</p>
          <h1 className="text-4xl font-bold tracking-tight mt-4">Shift Culture VR</h1>
          <p className="text-[var(--muted)] mt-3 max-w-3xl text-base leading-relaxed">
            A B-360 dirt bike safety and outreach prototype built in VR under real client, hardware, and accessibility constraints.
          </p>
        </header>

        <section className="grid gap-10">
          <div className="rounded-2xl border border-[var(--foreground)]/30 bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <div className="grid gap-8 md:grid-cols-2 md:items-start">
              <div>
                <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Why This Project Matters</h2>
                <p className="text-lg font-semibold tracking-tight text-[var(--foreground)]">
                  Featured by the University of Baltimore Newsroom on January 30, 2026
                </p>
                <p className="mt-3 text-sm text-[var(--muted)] leading-relaxed">
                  This project went beyond a normal class exercise. It had to reflect B-360&apos;s mission, work on affordable mobile VR hardware, and make sense for real outreach and workshop use.
                </p>
                <ul className="mt-5 space-y-2 text-sm text-[var(--muted)] leading-relaxed">
                  <li>- Built with a real Baltimore nonprofit instead of an imaginary assignment brief.</li>
                  <li>- Designed around Google Cardboard-style accessibility instead of high-end headset assumptions.</li>
                  <li>- Strengthened by direct B-360 feedback during in-person prototype review and playtesting.</li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="https://www.ubalt.edu/about/newsroom/ubalt-stories-community-game-design.cfm"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full border border-[var(--foreground)] bg-[var(--foreground)] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--background)] shadow-[var(--shadow)] transition-all duration-300 hover:bg-transparent hover:text-[var(--foreground)] hover:[box-shadow:var(--shadow-strong),0_0_22px_var(--accent-cyan)]"
                  >
                    Read UBalt Story
                  </a>
                  <a
                    href="https://b360baltimore.org/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full border border-[var(--border)] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--foreground)] transition-all duration-300 hover:border-[var(--foreground)]"
                  >
                    Visit B-360
                  </a>
                </div>
              </div>
              <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)]">
                <div className="relative aspect-video w-full">
                  <LightboxImage
                    src={ridersImage.src}
                    alt={ridersImage.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    width={ridersImage.width}
                    height={ridersImage.height}
                    className="object-cover"
                    roundedClassName="rounded-none"
                    popupCaption="B-360 youth riders and program context in Baltimore, the real community backdrop for the prototype."
                  />
                </div>
                <div className="border-t border-[var(--border)] px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Source: University of Baltimore Newsroom</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Project Snapshot</h2>
              <ul className="space-y-4 text-sm text-[var(--muted)] leading-relaxed">
                {snapshot.map((item) => (
                  <li key={item.title}>
                    <span className="text-[var(--foreground)] font-medium block mb-1">{item.title}</span>
                    {item.description}
                  </li>
                ))}
              </ul>
            </div>
            <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)]">
              <div className="relative aspect-video w-full">
                <LightboxImage
                  src={simulatorImage.src}
                  alt={simulatorImage.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  width={simulatorImage.width}
                  height={simulatorImage.height}
                  className="object-cover"
                  roundedClassName="rounded-none"
                  popupCaption="In-simulator riding view used while testing road readability, obstacle awareness, and overall first-person comfort."
                />
              </div>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">What The Prototype Actually Did</h2>
              <ul className="space-y-3 text-sm text-[var(--muted)] leading-relaxed">
                {prototypeLoop.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
            <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)]">
              <div className="relative aspect-video w-full">
                <LightboxImage
                  src={menuImage.src}
                  alt={menuImage.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  width={menuImage.width}
                  height={menuImage.height}
                  className="object-cover"
                  roundedClassName="rounded-none"
                  popupCaption="Menu and onboarding pass designed to keep first-time players oriented before entering the workshop and riding sections."
                />
              </div>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)]">
              <div className="relative aspect-video w-full">
                <LightboxImage
                  src={budgetImage.src}
                  alt={budgetImage.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  width={budgetImage.width}
                  height={budgetImage.height}
                  className="object-cover"
                  roundedClassName="rounded-none"
                  popupCaption="Low-cost mobile VR setup chosen so the project aligned with practical access instead of expensive hardware expectations."
                />
              </div>
            </div>
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Constraint-Led Design</h2>
              <ul className="space-y-4 text-sm text-[var(--muted)] leading-relaxed">
                {constraints.map((item) => (
                  <li key={item.title}>
                    <span className="text-[var(--foreground)] font-medium block mb-1">{item.title}</span>
                    {item.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Development Workflow</h2>
              <ul className="space-y-3 text-sm text-[var(--muted)] leading-relaxed">
                {developmentNotes.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
            <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)]">
              <div className="relative aspect-video w-full">
                <LightboxImage
                  src={devImage.src}
                  alt={devImage.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  width={devImage.width}
                  height={devImage.height}
                  className="object-cover"
                  roundedClassName="rounded-none"
                  popupCaption="Development setup showing iterative build checks and team testing while the prototype was still being shaped."
                />
              </div>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Partner Feedback & Playtest Value</h2>
              <ul className="space-y-3 text-sm text-[var(--muted)] leading-relaxed">
                {feedbackPoints.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">What Happened Next</h2>
              <ul className="space-y-3 text-sm text-[var(--muted)] leading-relaxed">
                {continuationPlan.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)]">
              <div className="relative aspect-video w-full">
                <LightboxImage
                  src={volunteeringImage.src}
                  alt={volunteeringImage.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  width={volunteeringImage.width}
                  height={volunteeringImage.height}
                  className="object-cover"
                  roundedClassName="rounded-none"
                  popupCaption="Community event context that helped ground the project in actual people and actual outreach needs."
                />
              </div>
            </div>
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">What I Took From It</h2>
              <ul className="space-y-3 text-sm text-[var(--muted)] leading-relaxed">
                {takeaways.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
