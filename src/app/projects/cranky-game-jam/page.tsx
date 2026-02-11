import Breadcrumbs from '@/components/breadcrumbs';
import LightboxImage from '@/components/lightbox-image';

export default function CrankyGameJamPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-8 md:p-24 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Projects', href: '/career' },
              { label: 'Cranky (Game Jam 2024)' },
            ]}
            className="mb-4"
          />
          <h1 className="text-4xl font-bold tracking-tight mt-4">Cranky (Game Jam 2024)</h1>
          <p className="text-[var(--muted)] mt-3 max-w-3xl">
            1 Week Game Jam · Local Split-Screen Co-op · Unity · Not to be confused with the later solo expansion,
            <span className="text-[var(--foreground)]"> Cranky: The Squirrel Annihilator</span>
          </p>
        </header>

        <section className="grid gap-8">
          <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
            <LightboxImage
              src="/images/Cranky_GameJam_Banner_2024.jpg"
              alt="Cranky Game Jam 2024 banner"
              width={1600}
              height={900}
              className="h-auto w-full object-cover"
              roundedClassName="rounded-2xl"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Overview</h2>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                Cranky is a local split-screen co-op game where players control pugs trying to catch squirrels. Built for Global Game
                Jam 2024 under the theme <span className="text-[var(--foreground)]">Make Me Laugh</span>, the game embraces chaotic,
                intentionally clunky movement inspired by Party Animals and Fall Guys.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                <li>- Jam Year: 2024</li>
                <li>- Jam Theme: Make Me Laugh</li>
                <li>- Jam Site: uBalt at the Universities at Shady Grove</li>
                <li>- Platform: MS Windows</li>
              </ul>
            </div>

            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Roles</h2>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                <li>- 3D Artist</li>
                <li>- Animator</li>
                <li>- Game Designer</li>
                <li>- Project Manager</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
              <LightboxImage
                src="/images/GAMEJAM_CRANKY_PlanningWithTeamBoard.jpg"
                alt="Cranky game jam planning board"
                width={1400}
                height={900}
                className="h-auto w-full object-cover"
                roundedClassName="rounded-2xl"
              />
            </div>
            <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
              <LightboxImage
                src="/images/GAMEJAM_CRANKY_TEAM_DEVMODE.jpg"
                alt="Cranky game jam team in development mode"
                width={1400}
                height={900}
                className="h-auto w-full object-cover"
                roundedClassName="rounded-2xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
              <LightboxImage
                src="/images/Cranky_GameJam_Trello.png"
                alt="Cranky game jam Trello management board"
                width={1400}
                height={900}
                className="h-auto w-full object-cover"
                roundedClassName="rounded-2xl"
              />
            </div>
            <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
              <LightboxImage
                src="/images/Cranky_GameJam_DemoDay_Handheld_LegionGo.jpg"
                alt="Cranky game jam demo day on Lenovo Legion Go"
                width={1400}
                height={900}
                className="h-auto w-full object-cover"
                roundedClassName="rounded-2xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
              <LightboxImage
                src="/images/Cranky_Pug_Render_Blender.png"
                alt="Cranky pug render in Blender"
                width={1000}
                height={1000}
                className="h-auto w-full object-cover"
                roundedClassName="rounded-2xl"
              />
            </div>
            <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
              <LightboxImage
                src="/images/CRANKY_Animation_Blender_Rigging.png"
                alt="Cranky animation rigging work in Blender"
                width={1000}
                height={1000}
                className="h-auto w-full object-cover"
                roundedClassName="rounded-2xl"
              />
            </div>
            <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
              <LightboxImage
                src="/images/Cranky_SubstancePainter.png"
                alt="Cranky texture workflow in Substance Painter"
                width={1000}
                height={1000}
                className="h-auto w-full object-cover"
                roundedClassName="rounded-2xl"
              />
            </div>
          </div>

          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">My Approach & Contributions</h2>
            <ul className="space-y-3 text-sm text-[var(--muted)]">
              <li>
                - <span className="text-[var(--foreground)] font-medium">3D Modeling, Rigging, and Animation:</span> I built the pug
                model, rigged it, and animated movement to support the game’s playful, goofy tone.
              </li>
              <li>
                - <span className="text-[var(--foreground)] font-medium">Project Management & Team Leadership:</span> I coordinated
                design/art tasks, timeline, and team communication to keep the one-week scope realistic and shippable.
              </li>
              <li>
                - <span className="text-[var(--foreground)] font-medium">Trello Workflow Management:</span> I structured sprint tasks,
                deadlines, and live progress tracking so contributors stayed aligned throughout the jam.
              </li>
              <li>
                - <span className="text-[var(--foreground)] font-medium">Art Direction + Unity Environment Work:</span> I guided visual
                cohesion across assets and implemented/optimized environment elements for gameplay flow.
              </li>
            </ul>
          </div>

          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Results</h2>
            <ul className="space-y-3 text-sm text-[var(--muted)]">
              <li>- A complete, playable jam build delivered within one week.</li>
              <li>- Distinctive pug character pipeline integrated into gameplay successfully.</li>
              <li>- Designed and tested for both keyboard and handheld controller play.</li>
              <li>- Team delivery quality supported by clear production structure and ownership.</li>
            </ul>
            <p className="mt-4 text-sm text-[var(--muted)] leading-relaxed">
              While the pug character concept in Cranky was inspired by the work of Gil Rimmer and Rhenan Fidelis, I created the 3D
              model, rigging, and animations from scratch to fit the game’s playful direction.
            </p>
          </div>

          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Links & Documents</h2>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://globalgamejam.org/games/2024/cranky-6"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-[var(--foreground)] bg-[var(--foreground)] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--background)] shadow-[var(--shadow)] transition-all duration-300 hover:bg-transparent hover:text-[var(--foreground)] hover:[box-shadow:var(--shadow-strong),0_0_22px_var(--accent-cyan)]"
              >
                GGJ Page
              </a>

              <a
                href="https://drive.google.com/drive/folders/1Ptmv3frb4hGwuTKd5TdjwfhNmiuD52Ra?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-[var(--border)] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--foreground)] transition-all duration-300 hover:border-[var(--foreground)]"
              >
                Build + Source Files
              </a>

              <a
                href="https://docs.google.com/presentation/d/1-Pe5afGlmk3xhx1DTXY-sLpxyAqgKiaYJ33Mq-4bof8/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-[var(--border)] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--foreground)] transition-all duration-300 hover:border-[var(--foreground)]"
              >
                Presentation
              </a>

              <a
                href="https://docs.google.com/document/d/1tJRc-iaIuqC71HeNq85wr4q9N26GP7WCNk34q3LItCQ/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-[var(--border)] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--foreground)] transition-all duration-300 hover:border-[var(--foreground)]"
              >
                Jam GDD
              </a>

              <a
                href="https://docs.google.com/document/d/1eFnm2fgrBZUmR9nk0wMXdvT5SPWTmVtTMpOW1DCmleg/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-[var(--border)] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--foreground)] transition-all duration-300 hover:border-[var(--foreground)]"
              >
                Concept Overview
              </a>
            </div>
          </div>

          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Acknowledgments</h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              Special thanks to Julian Apostolov for helping troubleshoot 3D pug and texture issues at 2AM.
              {' '}<a className="text-[var(--foreground)] underline underline-offset-4" href="https://www.instagram.com/uapostolov_17/" target="_blank" rel="noreferrer">@uapostolov_17</a>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
