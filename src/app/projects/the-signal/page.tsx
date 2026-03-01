import Breadcrumbs from '@/components/breadcrumbs';
import LightboxImage from '@/components/lightbox-image';
import LightboxVideo from '@/components/lightbox-video';

export default function TheSignalPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-8 md:p-24 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Projects', href: '/career' },
              { label: 'The Signal' },
            ]}
            className="mb-4"
          />
          <h1 className="text-4xl font-bold tracking-tight mt-4">The Signal</h1>
          <p className="text-[var(--muted)] mt-3 max-w-3xl">Sci-fi board game built with two teammates — FTL and Darkest Dungeon inspired exploration, procedural room layouts, and a narrative insight system.</p>
          <p className="text-[var(--muted)] mt-1 text-sm">Georgi Tsvetanski, Alex Jeffries, Zefran Jehle</p>
        </header>

        <section className="flex flex-col gap-12 md:gap-16">
          {/* Hero Banner */}
          <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
            <div className="aspect-video w-full">
              <LightboxImage
                src="/images/Banner_TheSignal.jpg"
                alt="The Signal board game banner"
                width={1600}
                height={900}
                className="h-full w-full object-cover"
                roundedClassName="rounded-none"
              />
            </div>
          </div>

          {/* Overview & Collaborative Design */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Overview</h2>
              <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
                The Signal is a sci-fi narrative board game inspired by <i>FTL</i> and <i>Darkest Dungeon</i>. Players explore a decaying alien vessel while navigating procedural room layouts and hostile encounters.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://docs.google.com/document/d/18TgjQ83h_Q6F8Q9KVB6a97QQQzh9wcs-PznotlDIVQ0/edit?tab=t.0"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-[var(--foreground)] bg-[var(--foreground)] px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--background)] shadow-[var(--shadow)] transition-all duration-300 hover:bg-transparent hover:text-[var(--foreground)]"
                >
                  Design Doc
                </a>
                <a
                  href="https://docs.google.com/presentation/d/1bfBJ6skJa0pFTh2KjSEqbHBgYkYuR89TeZupIfUqqG8/edit?slide=id.g35076292f3f_3_305#slide=id.g35076292f3f_3_305"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-[var(--border)] px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--foreground)] transition-all duration-300 hover:border-[var(--foreground)]"
                >
                  Presentation
                </a>
              </div>
            </div>
            <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
              <div className="aspect-video w-full">
                <LightboxImage
                  src="/images/TheSignal_BoardGame_Done_Showcase.png"
                  alt="The Signal final board game showcase"
                  width={1400}
                  height={900}
                  className="h-full w-full object-cover"
                  roundedClassName="rounded-none"
                />
              </div>
            </div>
          </div>

          {/* Systems & Gameplay Walkthrough */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)] md:order-2">
              <div className="aspect-video w-full">
                <LightboxVideo
                  embedUrl="https://www.youtube.com/embed/vf-XuVHubbk"
                  thumbnailUrl="https://img.youtube.com/vi/vf-XuVHubbk/maxresdefault.jpg"
                  title="The Signal Team Walkthrough"
                  className="h-full w-full object-cover"
                  roundedClassName="rounded-none"
                />
              </div>
            </div>
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)] md:order-1">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Key Design Pillars</h2>
              <ul className="space-y-4 text-sm text-[var(--muted)]">
                <li>
                  <span className="text-[var(--foreground)] font-medium block mb-1">Procedural Discovery:</span>
                  Room tiles and encounters are placed dynamically, ensuring no two explorations feel identical.
                </li>
                <li>
                  <span className="text-[var(--foreground)] font-medium block mb-1">Dopamine-Driven Loops:</span>
                  Focused on high-impact loot drops and risk-reward decision points inspired by modern roguelikes.
                </li>
                <li>
                  <span className="text-[var(--foreground)] font-medium block mb-1">Insight System:</span>
                  A narrative-driven mechanic where players gather data logs that influence both scoring and the final confrontation.
                </li>
              </ul>
            </div>
          </div>

          {/* Visual Asset Pipeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
              <div className="grid grid-cols-1 gap-4 p-4">
                <div className="overflow-hidden rounded-xl border border-[var(--border)]">
                  <LightboxImage
                    src="/images/TheSignal_Board.png"
                    alt="The Signal board and room layout visualization"
                    width={1400}
                    height={900}
                    className="h-auto w-full object-contain"
                    roundedClassName="rounded-none"
                  />
                </div>
                <div className="overflow-hidden rounded-xl border border-[var(--border)]">
                  <LightboxImage
                    src="/images/TheSignal_PhotoshopBoardCreation.png"
                    alt="The Signal board creation process"
                    width={1400}
                    height={900}
                    className="h-auto w-full object-cover"
                    roundedClassName="rounded-none"
                  />
                </div>
              </div>
            </div>
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Visual Production</h2>
              <p className="text-sm text-[var(--muted)] leading-relaxed mb-6">
                I managed the visual asset pipeline, combining custom iconography with high-fidelity stock assets to create an oppressive, decaying sci-fi aesthetic.
              </p>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                <li>- Photoshop-driven board & tile creation</li>
                <li>- Custom card & token layout design</li>
                <li>- Fragmented narrative flavor text writing</li>
              </ul>
            </div>
          </div>

          {/* Monster Design & Balance */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)] md:order-2">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Systems Balancing</h2>
              <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
                Balancing evolving enemy behaviors against player &quot;builds&quot; was the core challenge of the implementation phase.
              </p>
              <a
                href="https://docs.google.com/spreadsheets/d/1lhhB8pDsiwd-MkOLUejhbkQfkNkfXh6KfUYBQohW_Mk/edit?gid=0#gid=0"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-[var(--border)] px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--foreground)] transition-all duration-300 hover:border-[var(--foreground)]"
              >
                View Balancing Sheet
              </a>
            </div>
            <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)] md:order-1">
              <div className="grid grid-cols-1 gap-4 p-4">
                <div className="overflow-hidden rounded-xl border border-[var(--border)]">
                  <LightboxImage
                    src="/images/TheSignal_Monsters-scaled.png"
                    alt="The Signal monster design sheet"
                    width={1400}
                    height={900}
                    className="h-auto w-full object-cover"
                    roundedClassName="rounded-none"
                  />
                </div>
                <div className="overflow-hidden rounded-xl border border-[var(--border)]">
                  <LightboxImage
                    src="/images/TheSignal_Equipment_EnemySheet.png"
                    alt="The Signal equipment and enemy sheet"
                    width={1400}
                    height={900}
                    className="h-auto w-full object-cover"
                    roundedClassName="rounded-none"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Overview & Key Features</h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              My design philosophy focused on dopamine triggers: discovery, progression, risk-reward choices, and environmental
              storytelling. Players take the role of a scavenger, mercenary, or scholar exploring procedurally generated rooms
              aboard an ancient alien ship.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
              <li>- Procedural exploration with player-driven choices</li>
              <li>- Evolving enemy behaviors and randomized encounters</li>
              <li>- Loot and Alien Augment system to customize player builds</li>
              <li>- Insight-driven storytelling influencing both narrative and scoring</li>
              <li>- Final confrontation with The Corpus boss</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Narrative & Visual Design</h2>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                The Signal was heavily inspired by the oppressive tone of FTL and Darkest Dungeon. I focused on environmental
                storytelling and flavor text to create isolation, mystery, and unease.
              </p>
              <p className="text-sm text-[var(--muted)] leading-relaxed mt-3">
                I designed over a dozen Insight cards containing fragmented logs, cryptic data, and research notes that slowly reveal
                the vessel’s true purpose and the nature of The Signal.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                <li>- Room tiles, enemy tokens, and player boards</li>
                <li>- Custom iconography and card/token layouts</li>
                <li>- Thematic illustrations and Adobe Stock assets for a decaying sci-fi aesthetic</li>
              </ul>
            </div>

            <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
              <LightboxImage
                src="/images/TheSignal_BoardGame_Done_Showcase.png"
                alt="The Signal final board game showcase"
                width={1400}
                height={900}
                className="h-auto w-full object-cover"
                roundedClassName="rounded-2xl"
              />
            </div>
          </div>

          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Challenges</h2>
            <ul className="space-y-2 text-sm text-[var(--muted)]">
              <li>- Balancing procedural generation with fairness</li>
              <li>- Preserving player agency without overwhelming complexity</li>
              <li>- Tuning difficulty after early playtest feedback</li>
              <li>- Iterating visual communication (icons, cards, board layout) for clarity</li>
            </ul>
            <p className="text-sm text-[var(--muted)] leading-relaxed mt-4">
              Built and playtested a complete physical board game from concept to final build within one semester.
            </p>
            <a
              href="https://docs.google.com/spreadsheets/d/1lhhB8pDsiwd-MkOLUejhbkQfkNkfXh6KfUYBQohW_Mk/edit?gid=0#gid=0"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center rounded-full border border-[var(--border)] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--foreground)] transition-all duration-300 hover:border-[var(--foreground)]"
            >
              View Equipment and Enemy Sheet
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:items-start">
            <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
              <LightboxImage
                src="/images/TheSignal_Monsters-scaled.png"
                alt="The Signal monster design sheet"
                width={1400}
                height={900}
                className="h-auto w-full object-cover"
                roundedClassName="rounded-2xl"
              />
            </div>
            <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
              <LightboxImage
                src="/images/TheSignal_Equipment_EnemySheet.png"
                alt="The Signal equipment and enemy sheet"
                width={1400}
                height={900}
                className="h-auto w-full object-cover"
                roundedClassName="rounded-2xl"
              />
            </div>
          </div>

          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Our Visual Assets & Sources</h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              The following visual assets are licensed from Adobe Stock. You can find each asset by searching its ID number on
              stock.adobe.com.
            </p>
            <p className="text-sm text-[var(--muted)] leading-relaxed mt-4 break-words">
              Adobe Stock Asset IDs: 1337241987, 1242619877, 539383063, 1420474354, 796495238, 531304463, 971053543, 644836659,
              507100069, 623844078, 709447241, 1388930014, 1219422605, 554417793, 916383953, 1242256513, 1109927530, 734301646,
              694200398, 701509136, 589381035, 1128312251, 585248097, 1264785348, 760621412, 471882847, 1092308462, 660353982,
              597507260, 702464453, 1254781232, 1358880054, 706733728, 1063203575, 507117639, 465328661, 316028652, 921974697.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
