import Breadcrumbs from '@/components/breadcrumbs';
import LightboxImage from '@/components/lightbox-image';
import LightboxVideo from '@/components/lightbox-video';

export default function TotallyBuggedOutPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-8 md:p-24 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Projects', href: '/career' },
              { label: 'Totally Bugged Out' },
            ]}
            className="mb-4"
          />
          <h1 className="text-4xl font-bold tracking-tight mt-4">TOTALLY BUGGED OUT</h1>
          <p className="text-[var(--muted)] mt-3 max-w-2xl">
            Prototype FPS · Unity · Solo Project
          </p>
        </header>

        <section className="grid gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:items-start">
            <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-shadow duration-300 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
              <LightboxImage
                src="/images/Totally Bugged Out_banner.png"
                alt="Totally Bugged Out banner"
                width={1600}
                height={900}
                className="h-auto w-full object-cover"
                roundedClassName="rounded-2xl"
              />
            </div>

            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Project Summary</h2>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                Totally Bugged Out is a first-person prototype where the player must clear an abandoned house of invasive
                cockroaches. Players can use a spray weapon and throw household objects to eliminate enemies.
              </p>
              <p className="text-sm text-[var(--muted)] leading-relaxed mt-3">
                The project was built to experiment with player-enemy interactions, basic combat feedback, and light survival
                mechanics in a confined environment. It was developed in Unity and deployed for WebGL browser play.
              </p>
              <a
                href="https://gogo81.itch.io/totally-bugged-out"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center rounded-full border border-[var(--foreground)] bg-[var(--foreground)] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--background)] shadow-[var(--shadow)] transition-all duration-300 hover:bg-transparent hover:text-[var(--foreground)] hover:[box-shadow:var(--shadow-strong),0_0_22px_var(--accent-cyan)]"
              >
                Play Now
              </a>
            </div>
          </div>

          <div className="group border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-6 shadow-[var(--shadow)] transition-all duration-300 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-4">Gameplay Preview</h2>
            <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-black">
              <div className="aspect-video md:aspect-[32/9] w-full">
                <LightboxVideo
                  embedUrl="https://www.youtube.com/embed/u_uQalC8x_Y"
                  thumbnailUrl="https://img.youtube.com/vi/u_uQalC8x_Y/maxresdefault.jpg"
                  title="Totally Bugged Out Gameplay"
                  className="h-full w-full object-cover"
                  roundedClassName="rounded-none"
                />
              </div>
            </div>
          </div>

          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Core Features</h2>
            <ul className="space-y-2 text-sm text-[var(--muted)]">
              <li>- <span className="text-[var(--foreground)] font-medium">Throwable object system:</span> pick up and throw household objects to eliminate roaches.</li>
              <li>- <span className="text-[var(--foreground)] font-medium">Roach AI behaviors:</span> enemies climb walls, chase players, bite, and panic-flee when nearby roaches are destroyed.</li>
              <li>- <span className="text-[var(--foreground)] font-medium">Health + timer systems:</span> survive and clear infestations under time pressure.</li>
              <li>- <span className="text-[var(--foreground)] font-medium">WebGL deployment:</span> browser-playable for accessible demos and rapid playtesting.</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-shadow duration-300 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
              <LightboxImage
                src="/images/Totally Bugged Out_page_mainPhoto.png"
                alt="Totally Bugged Out gameplay screenshot"
                width={1400}
                height={900}
                className="h-full w-full object-cover"
                roundedClassName="rounded-2xl"
              />
            </div>
            <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-shadow duration-300 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
              <LightboxImage
                src="/images/Totally Bugged Out_photo_Tools&Technologies.png"
                alt="Totally Bugged Out tools and technologies snapshot"
                width={1400}
                height={900}
                className="h-full w-full object-cover"
                roundedClassName="rounded-2xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Development Overview</h2>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                This was a solo free-time project where I designed and programmed the core gameplay systems, including
                enemy AI, throwable object mechanics, and health + timer systems.
              </p>
            </div>
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Systems Explored</h2>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                <li>- Enemy behavior: wandering, chasing, panic fleeing</li>
                <li>- Rigidbody-based object interaction and throwing</li>
                <li>- Basic player health and win/lose conditions</li>
                <li>- Iterative player feedback and system tuning</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Tools & Technologies</h2>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                <li>- Unity (player/enemy systems, WebGL build)</li>
                <li>- Blender (retopology, prop edits from free Unity kits)</li>
                <li>- C# (gameplay scripting)</li>
              </ul>
            </div>
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Overcoming Challenges</h2>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                Building a responsive throwing system and balancing it against reactive AI was the most complex part of development.
                I iterated through multiple prototypes to reduce physics clipping and unintended player exploits. Optimizing for smooth
                WebGL playtesting strengthened both my problem-solving process and technical design judgment.
              </p>
            </div>
          </div>

          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Links</h2>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://docs.google.com/document/d/1jzVgY0v35YnP3SgC22iMdTLhXWFto3gIAMeecEug4YM/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-full border border-[var(--border)] px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--foreground)] transition-colors hover:border-[var(--foreground)]"
              >
                View Dev Notes
              </a>
              <a
                href="https://docs.google.com/document/d/1W6ZaNEkFeXCRFYmjpj-PdToEHJoA4ZVVI6UWBz3XbQ4/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-full border border-[var(--border)] px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--foreground)] transition-colors hover:border-[var(--foreground)]"
              >
                Game Design Document
              </a>
            </div>
          </div>

          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Acknowledgments</h2>
            <ul className="space-y-2 text-sm text-[var(--muted)]">
              <li>- Unity and Reddit dev communities for troubleshooting and implementation guidance.</li>
              <li>- Professors and classmates at Montgomery College for support and feedback.</li>
              <li>- Free asset creators on Unity Asset Store and Pixabay for audio/visual resources.</li>
              <li>- Early playtesters who gave honest, practical feedback.</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
