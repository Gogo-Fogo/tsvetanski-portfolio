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

        <section className="flex flex-col gap-12 md:gap-16">
          {/* Hero Banner */}
          <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
            <div className="aspect-video w-full">
              <LightboxImage
                src="/images/Cranky_GameJam_Banner_2024.jpg"
                alt="Cranky Game Jam 2024 banner"
                width={1600}
                height={900}
                className="h-full w-full object-cover"
                roundedClassName="rounded-none"
              />
            </div>
          </div>

          {/* Overview & Core pug render */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
                <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Overview</h2>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  Cranky is a local split-screen co-op game where players control pugs trying to catch squirrels. Built for Global Game
                  Jam 2024 under the theme <span className="text-[var(--foreground)]">Make Me Laugh</span>, the game embraces chaotic,
                  intentionally clunky movement inspired by Party Animals and Fall Guys.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                  <li>- Jam Year: 2024</li>
                  <li>- Jam Site: uBalt at the Universities at Shady Grove</li>
                  <li>- Platform: MS Windows</li>
                </ul>
              </div>

              <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
                <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Roles & Tools</h2>
                <div className="grid grid-cols-2 gap-4 text-sm text-[var(--muted)]">
                  <ul className="space-y-1">
                    <li className="text-[var(--foreground)] font-medium">Roles</li>
                    <li>3D Artist</li>
                    <li>Animator</li>
                    <li>Project Manager</li>
                  </ul>
                  <ul className="space-y-1">
                    <li className="text-[var(--foreground)] font-medium">Tools</li>
                    <li>Unity</li>
                    <li>Blender</li>
                    <li>Substance Painter</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
              <div className="aspect-square w-full">
                <LightboxImage
                  src="/images/Cranky_Pug_Render_Blender.png"
                  alt="Cranky pug render in Blender"
                  width={1000}
                  height={1000}
                  className="h-full w-full object-cover"
                  roundedClassName="rounded-none"
                />
              </div>
            </div>
          </div>

          {/* Production & Leadership */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)] md:order-2">
              <div className="grid grid-cols-1 gap-4 p-4">
                <div className="overflow-hidden rounded-xl border border-[var(--border)]">
                  <LightboxImage
                    src="/images/GAMEJAM_CRANKY_PlanningWithTeamBoard.jpg"
                    alt="Cranky game jam planning board"
                    width={1400}
                    height={900}
                    className="h-auto w-full object-cover"
                    roundedClassName="rounded-none"
                  />
                </div>
                <div className="overflow-hidden rounded-xl border border-[var(--border)]">
                  <LightboxImage
                    src="/images/Cranky_GameJam_Trello.png"
                    alt="Cranky game jam Trello management board"
                    width={1400}
                    height={900}
                    className="h-auto w-full object-cover"
                    roundedClassName="rounded-none"
                  />
                </div>
              </div>
            </div>

            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)] md:order-1">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Management & Leadership</h2>
              <p className="text-sm text-[var(--muted)] leading-relaxed mb-6">
                As the Project Manager and 3D Lead, I focused on keeping a one-week scope realistic while maintaining a high visual standard.
              </p>
              <ul className="space-y-4 text-sm text-[var(--muted)]">
                <li>
                  <span className="text-[var(--foreground)] font-medium block mb-1">Trello Workflow Management:</span>
                  I structured sprint tasks and live progress tracking so contributors stayed aligned throughout the tight jam timeline.
                </li>
                <li>
                  <span className="text-[var(--foreground)] font-medium block mb-1">Team Coordination:</span>
                  Managed design/art task distribution and timeline to ensure all core pug animations were integrated before the final build.
                </li>
              </ul>
            </div>
          </div>

          {/* Technical Art Deep Dive */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
              <div className="grid grid-cols-2 gap-0">
                <LightboxImage
                  src="/images/CRANKY_Animation_Blender_Rigging.png"
                  alt="Cranky animation rigging work in Blender"
                  width={1000}
                  height={1000}
                  className="h-full w-full object-cover"
                  roundedClassName="rounded-none"
                />
                <LightboxImage
                  src="/images/Cranky_SubstancePainter.png"
                  alt="Cranky texture workflow in Substance Painter"
                  width={1000}
                  height={1000}
                  className="h-full w-full object-cover"
                  roundedClassName="rounded-none"
                />
              </div>
            </div>

            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Technical Art Pipeline</h2>
              <p className="text-sm text-[var(--muted)] leading-relaxed mb-6">
                The pug character was built from scratch to support the game’s playful, goofy tone. I handled the full pipeline from initial poly-modeling to final game-ready export.
              </p>
              <ul className="space-y-4 text-sm text-[var(--muted)]">
                <li>
                  <span className="text-[var(--foreground)] font-medium block mb-1">Modeling & Rigging:</span>
                  Built in Blender with a focus on flexible rigging to allow for the exaggerated, &quot;floppy&quot; movements inspired by Party Animals.
                </li>
                <li>
                  <span className="text-[var(--foreground)] font-medium block mb-1">Texture Workflow:</span>
                  Applied hand-painted stylized textures in Substance Painter to ensure visual clarity on a split-screen display.
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2 border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Final Results</h2>
              <ul className="space-y-3 text-sm text-[var(--muted)]">
                <li>- A complete, playable jam build delivered within one week.</li>
                <li>- Distinctive pug character pipeline integrated into gameplay successfully.</li>
                <li>- Designed and tested for both keyboard and handheld controller play.</li>
                <li>- Team delivery quality supported by clear production structure and ownership.</li>
              </ul>
              <p className="mt-6 text-xs text-[var(--muted)] leading-relaxed border-t border-[var(--border)] pt-4 italic">
                While the pug character concept was inspired by the work of Gil Rimmer and Rhenan Fidelis, all 3D modeling, rigging, and animations were created from scratch for this project.
              </p>
            </div>

            <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
              <div className="aspect-square w-full">
                <LightboxImage
                  src="/images/Cranky_GameJam_DemoDay_Handheld_LegionGo.jpg"
                  alt="Cranky game jam demo day on Lenovo Legion Go"
                  width={1400}
                  height={900}
                  className="h-full w-full object-cover"
                  roundedClassName="rounded-none"
                />
              </div>
            </div>
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
