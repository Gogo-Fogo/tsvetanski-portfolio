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

export default function VRMicrogamesCaseStudy() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-8 md:p-24 font-sans">
      <div className="max-w-5xl mx-auto">
        <header className="mb-16">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Projects', href: '/career' },
              { label: 'VR Dirt Bike Game (B-360)' },
            ]}
            className="mb-4"
          />
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Community XR Collaboration</p>
          <h1 className="text-4xl font-bold tracking-tight mt-4">B-360 VR Dirt Bike Safety Prototype</h1>
          <p className="text-[var(--muted)] mt-3 max-w-3xl text-base">
            A student-led XR project built to support B-360&apos;s mission through an accessible, comfort-first riding simulation.
          </p>
        </header>

        <section className="flex flex-col gap-12 md:gap-16">
          <div className="rounded-2xl border border-[var(--foreground)]/30 bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Featured Coverage</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">Published by University of Baltimore Newsroom</h2>
            <p className="mt-3 max-w-3xl text-sm text-[var(--muted)]">
              This project was selected for official UBalt coverage highlighting community impact through game design and XR prototyping with B-360.
            </p>
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
                href="/documents/projects/b360/recruiter/b360-end-of-semester-reflection.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-[var(--border)] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--foreground)] transition-all duration-300 hover:border-[var(--foreground)]"
              >
                Reflection PDF
              </a>
            </div>
          </div>

          <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
            <div className="aspect-[2/1] md:aspect-[5/2] w-full">
              <LightboxImage
                src={gallery[0].src}
                alt={gallery[0].alt}
                width={gallery[0].width}
                height={gallery[0].height}
                className="h-full w-full object-cover"
                roundedClassName="rounded-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Project Context</h2>
              <ul className="space-y-3 text-sm text-[var(--muted)]">
                <li>
                  <span className="text-[var(--foreground)] font-medium block mb-1">Client & Mission</span>
                  Designed for B-360 to help support safer riding habits and youth engagement through interactive simulation.
                </li>
                <li>
                  <span className="text-[var(--foreground)] font-medium block mb-1">Academic Setting</span>
                  Built in Dr. Elka Cahn&apos;s class with teammates Zefran Jehle and Lewis Plested.
                </li>
                <li>
                  <span className="text-[var(--foreground)] font-medium block mb-1">Role</span>
                  Led technical implementation and comfort-focused iteration for XR interaction and gameplay systems.
                </li>
              </ul>
            </div>

            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Design Constraints</h2>
              <ul className="space-y-3 text-sm text-[var(--muted)]">
                <li>
                  <span className="text-[var(--foreground)] font-medium block mb-1">Accessibility</span>
                  Optimized for low-cost mobile VR headsets (around $18) instead of expensive hardware.
                </li>
                <li>
                  <span className="text-[var(--foreground)] font-medium block mb-1">Comfort First</span>
                  Prioritized stability and movement tuning to reduce motion sickness risk.
                </li>
                <li>
                  <span className="text-[var(--foreground)] font-medium block mb-1">Practical Outcome</span>
                  Built as a useful training and outreach artifact, not only an entertainment prototype.
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {gallery.slice(1).map((image) => (
              <div
                key={image.src}
                className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]"
              >
                <div className="aspect-video w-full">
                  <LightboxImage
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="h-full w-full object-cover"
                    roundedClassName="rounded-none"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Playtest Outcome</h2>
              <ul className="space-y-3 text-sm text-[var(--muted)]">
                <li>- Final prototype delivered by end of semester.</li>
                <li>- B-360 representatives tested the build at the Universities at Shady Grove.</li>
                <li>- Team observed strong engagement from first-time VR users.</li>
                <li>- No motion sickness reported during the hosted playtest session.</li>
              </ul>
            </div>

            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Reflection Highlights</h2>
              <blockquote className="text-sm text-[var(--muted)] leading-relaxed border-l-2 border-[var(--border)] pl-4">
                &quot;It&apos;s not just about what is fun, it&apos;s about what is useful, accessible, and meaningful for the group you are serving, while still being fun.&quot;
              </blockquote>
              <blockquote className="mt-4 text-sm text-[var(--muted)] leading-relaxed border-l-2 border-[var(--border)] pl-4">
                &quot;Their excitement when they first playtested it motivated our team and reminded us that our hard work can make a difference.&quot;
              </blockquote>
            </div>
          </div>

          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Supporting Notes</h2>
            <p className="text-sm text-[var(--muted)]">
              Additional process detail is available in the end-of-semester reflection document.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
