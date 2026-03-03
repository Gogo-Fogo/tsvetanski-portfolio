import Breadcrumbs from '@/components/breadcrumbs';
import LightboxImage from '@/components/lightbox-image';
import LightboxVideo from '@/components/lightbox-video';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Shonen Showdown | Georgi Tsvetanski",
  description: "Lead developer on a multiplayer first-person Trading Card Game built in Unity 6 — full TCG rules engine, Photon Fusion 2 networking, and a ScriptableObject-driven card data system.",
};

export default function ShonenShowdownPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-8 md:p-24 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Projects', href: '/career' },
              { label: 'Shonen Showdown' },
            ]}
            className="mb-4"
          />
          <h1 className="text-4xl font-bold tracking-tight mt-4">SHONEN SHOWDOWN</h1>
          <p className="text-[var(--muted)] mt-3 max-w-2xl">
            A multiplayer first-person Trading Card Game prototype — players physically hold cards, declare attacks,
            and watch monsters spawn as 3D holograms on the board. Built in Unity 6 with Photon Fusion 2 networking.
          </p>
        </header>

        <section className="flex flex-col gap-12 md:gap-16">

          {/* Hero — Full-width video */}
          <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
            <div className="aspect-video w-full">
              <LightboxVideo
                embedUrl="https://www.youtube.com/embed/CIesifEUpTg"
                thumbnailUrl="https://img.youtube.com/vi/CIesifEUpTg/maxresdefault.jpg"
                title="Shonen Showdown — Gameplay Prototype"
                className="h-full w-full object-cover"
                roundedClassName="rounded-none"
              />
            </div>
          </div>

          {/* Project Summary — full width */}
          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Project Summary</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                Shonen Showdown bridges physical card games and anime battles. Unlike flat 2D simulators, the player
                holds cards in-hand and witnesses monsters materialize as 3D holograms on the field — closer to
                the Yu-Gi-Oh! anime fantasy than any existing simulator. Built in Unity 6 with Photon Fusion 2
                networking and proximity voice chat for social lobbies.
              </p>
              <div>
                <p className="text-sm text-[var(--muted)] leading-relaxed mb-6">
                  3-person team with strict scene sovereignty and Git discipline.
                  I own the core battle logic: turn management, the chain stack, summoning rules, damage calculation,
                  Photon Fusion 2 networking, and the ScriptableObject data architecture the whole team builds on.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Unity 6 (URP)', 'Photon Fusion 2', 'C#', 'ScriptableObjects', 'Shared Mode Networking'].map((tag) => (
                    <span key={tag} className="rounded-full border border-[var(--border)] px-3 py-1 text-[10px] font-mono uppercase tracking-[0.15em] text-[var(--muted)]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* FP Duel (right) + Rules Engine (left) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Rules Engine & Turn System</h2>
              <ul className="space-y-4 text-sm text-[var(--muted)]">
                <li>
                  <span className="text-[var(--foreground)] font-medium block mb-1">6-Phase Turn Structure:</span>
                  TurnManager enforces Draw → Standby → Main Phase 1 → Battle → Main Phase 2 → End Phase,
                  with state-machine transitions and UI feedback at each step.
                </li>
                <li>
                  <span className="text-[var(--foreground)] font-medium block mb-1">Summoning Rules:</span>
                  Level 1–4: Normal Summon (free). Level 5–6: Tribute 1 monster. Level 7+: Tribute 2.
                  Successful summons trigger 3D model instantiation — the card stays flat, the avatar stands above it.
                </li>
                <li>
                  <span className="text-[var(--foreground)] font-medium block mb-1">The Stack (Chain System):</span>
                  LIFO priority resolution — Attack → Trap → Quick-Spell resolves in reverse order.
                  Max 3 conditional effects per card enforced at the data layer.
                </li>
              </ul>
            </div>

            <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
              <div className="relative aspect-video w-full">
                <LightboxImage
                  src="/images/projects/shonen-showdown/duel-fp-01.png"
                  alt="First-person duel view — player holds Celtic Guardian, opponent has Blue-Eyes White Dragon on field"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  width={1705}
                  height={691}
                  className="object-cover"
                  roundedClassName="rounded-none"
                  popupCaption="First-person duel perspective — cards held in hand, opponent's monsters visible across the field"
                />
              </div>
            </div>
          </div>

          {/* Field Full + Attack Declare — two-shot gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
              <div className="relative aspect-video w-full">
                <LightboxImage
                  src="/images/projects/shonen-showdown/field-full.png"
                  alt="Full board state with multiple monsters on both sides — Turn 11 Battle Phase"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  width={1674}
                  height={666}
                  className="object-cover"
                  roundedClassName="rounded-none"
                  popupCaption="Turn 11 — both sides have full fields. The TurnManager enforces the full phase flow end-to-end."
                />
              </div>
            </div>

            <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
              <div className="relative aspect-video w-full">
                <LightboxImage
                  src="/images/projects/shonen-showdown/attack-declare.png"
                  alt="Battle phase attack declaration — red dashed arrow targeting opponent's monster"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  width={1481}
                  height={599}
                  className="object-cover"
                  roundedClassName="rounded-none"
                  popupCaption="Attack declaration — drag-to-target selects valid attack targets. The dashed line renders from attacker to target during the Damage Step."
                />
              </div>
            </div>
          </div>

          {/* Unity Editor (right) + Data Architecture (left) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Data Architecture</h2>
              <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
                I designed the <code className="text-[var(--foreground)] text-[11px] bg-[var(--background)] px-1.5 py-0.5 rounded">CardData</code> ScriptableObject
                schema — ID, name, frame type, rarity, attribute, level, ATK/DEF, keyword references, and full effect text.
                The battle engine queries the SO directly; the team populates new cards by following the template.
              </p>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                Keywords like <em>Piercing</em> and <em>SpecialSummon</em> live as separate assets, so balance
                changes propagate instantly across every card that references them — no merge conflicts, no script edits required.
              </p>
            </div>

            <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
              <div className="relative aspect-video w-full">
                <LightboxImage
                  src="/images/projects/shonen-showdown/unity-editor.png"
                  alt="Unity editor showing CardData ScriptableObject inspector and card assets"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  width={1711}
                  height={1388}
                  className="object-cover object-top"
                  roundedClassName="rounded-none"
                  popupCaption="Unity editor — CardData ScriptableObject inspector. I designed this template; the team populates new cards by following it."
                />
              </div>
            </div>
          </div>

          {/* Game Modes */}
          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Game Modes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: 'Standard Duel', format: '1v1', desc: 'Classic TCG rules. 8,000 LP. Players sit across the table.' },
                { name: 'Tag Team', format: '2v2', desc: '16,000 shared LP. Alternating turns. Voice chat open to all.' },
                { name: 'Raid Boss', format: '2v1', desc: 'Asymmetrical. 1 Boss player (double LP + bonus cards) vs. 2 challengers.' },
                { name: 'Battle Royale', format: 'FFA', desc: '4-player free-for-all. Last player with LP wins.' },
              ].map((mode) => (
                <div key={mode.name} className="rounded-xl border border-[var(--border)] p-4 bg-[var(--background)]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-[var(--foreground)]">{mode.name}</span>
                    <span className="text-[10px] font-mono text-[var(--muted)] border border-[var(--border)] rounded-full px-2 py-0.5">{mode.format}</span>
                  </div>
                  <p className="text-xs text-[var(--muted)] leading-relaxed">{mode.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team & Roles */}
          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Team & Responsibilities</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  name: 'Georgi',
                  role: 'Lead Developer',
                  items: [
                    'GameScene.unity — core battle logic',
                    'MainMenu.unity — lobby & UI (current)',
                    'Photon Fusion 2 networking',
                    'Turn/Phase state machine',
                    'CardData SO schema & keyword architecture',
                    'VR interaction handling',
                  ],
                  highlight: true,
                },
                {
                  name: 'Ricardo',
                  role: 'Art Lead (in production)',
                  items: [
                    'Custom 3D monster models & animations',
                    'Environment design (Share House)',
                    'Card illustration import',
                    'UI/UX polish & menus',
                  ],
                  highlight: false,
                },
                {
                  name: 'Sam',
                  role: 'Data & Audio',
                  items: [
                    'CardData entry',
                    'Keyword asset population',
                    'Game balance & stats',
                    'SFX/BGM selection & QA',
                  ],
                  highlight: false,
                },
              ].map((member) => (
                <div key={member.name} className={`rounded-xl border p-4 ${member.highlight ? 'border-[var(--foreground)] bg-[var(--background)]' : 'border-[var(--border)] bg-[var(--background)]'}`}>
                  <p className="text-sm font-semibold text-[var(--foreground)] mb-0.5">{member.name}</p>
                  <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-[var(--muted)] mb-3">{member.role}</p>
                  <ul className="space-y-1">
                    {member.items.map((item) => (
                      <li key={item} className="text-xs text-[var(--muted)]">— {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack + Systems Built */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Tech Stack</h2>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                <li>— Unity 6 (URP) — primary engine</li>
                <li>— Photon Fusion 2 (Shared Mode) — real-time networking</li>
                <li>— Photon Voice — proximity voice chat</li>
                <li>— C# — all gameplay and networking scripts</li>
                <li>— ScriptableObjects — card data, keyword assets, game settings</li>
                <li>— TextMesh Pro — UI text rendering</li>
                <li>— GitHub (private) — version control with scene sovereignty</li>
              </ul>
            </div>
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Systems Built</h2>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                <li>— Full 6-phase turn state machine</li>
                <li>— LIFO chain/stack resolution system</li>
                <li>— Level-based tribute summoning rules</li>
                <li>— ATK/DEF damage calculation with LP tracking</li>
                <li>— Drag-to-target attack declaration UI</li>
                <li>— Cinematic &quot;Showdown Phase&quot; for boss monster clashes</li>
                <li>— ScriptableObject card registry with keyword references</li>
              </ul>
            </div>
          </div>

          {/* Card Database */}
          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Live Card Database</h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed mb-6">
              The card roster is managed in a shared Google Sheet maintained by the team&apos;s Data Lead. Each row maps a
              card&apos;s <code className="text-[var(--foreground)] text-[11px] bg-[var(--background)] px-1.5 py-0.5 rounded">Card ID</code> to
              its Unity Prefab Name, Frame type, Rarity, Attribute, Level, ATK/DEF, Keywords, and full Effect text.
              A custom <strong className="text-[var(--foreground)]">Anime Race</strong> column sits alongside Standard Race —
              so a card can be both a <em>Spellcaster</em> (game rule) and an <em>Arrancar</em> (lore).
              Card art thumbnails are embedded directly in the sheet for fast visual review.
            </p>
            <a
              href="https://docs.google.com/spreadsheets/d/1j0_lvJtXyrgeOpKc3R4PLXgIjcxCwakaPbCksPANC-M/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-full border border-[var(--foreground)] bg-[var(--foreground)] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--background)] shadow-[var(--shadow)] transition-all duration-300 hover:bg-transparent hover:text-[var(--foreground)] hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]"
            >
              View Card Database →
            </a>
          </div>

          {/* Documents */}
          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Design Documents</h2>
            <div className="flex flex-wrap gap-3">
              <a
                href="/documents/projects/shonen-showdown/recruiter/shonen-showdown-gdd-v0-2.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-full border border-[var(--border)] px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--foreground)] transition-colors hover:border-[var(--foreground)]"
              >
                Game Design Document (v0.2)
              </a>
              <a
                href="/documents/projects/shonen-showdown/recruiter/shonen-showdown-technical-bible-v03.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-full border border-[var(--border)] px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--foreground)] transition-colors hover:border-[var(--foreground)]"
              >
                Technical Bible (v0.3)
              </a>
            </div>
          </div>

        </section>
      </div>
    </main>
  );
}
