import Breadcrumbs from '@/components/breadcrumbs';
import LightboxImage from '@/components/lightbox-image';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Patapon VR: The First Beat | Georgi Tsvetanski",
  description: "Design document for a VR rhythm-strategy prequel to Patapon — the player physically drums to command an army from a Divine Chariot across a roguelite expedition.",
};

export default function PataponVRCaseStudy() {
  return (
    <main className="min-h-screen bg-[var(--background)] p-8 font-sans text-[var(--foreground)] md:p-24">
      <div className="mx-auto max-w-4xl">
        <header className="mb-16">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Projects', href: '/career' },
              { label: 'Patapon VR: The First Beat' },
            ]}
            className="mb-4"
          />

          {/* Planning-stage badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-amber-400">
              Planning Stage — Not Yet in Development
            </span>
          </div>

          <p className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">
            VR Rhythm-Action · Roguelite Strategy · Meta Quest 3 + PCVR
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight">Patapon VR: The First Beat</h1>
          <p className="mt-3 max-w-3xl text-[var(--muted)]">
            A VR prequel to the Patapon series set in the mythic Golden Age. The player embodies the Almighty riding a Divine Chariot,
            physically drumming commands to lead a Patapon army through a roguelite expedition — sealing Seven Archfiends before the world dissolves into the Static.
          </p>
        </header>

        <section className="flex flex-col gap-12 md:gap-16">

          {/* Hero Banner */}
          <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)] max-w-2xl mx-auto">
            <div className="aspect-video w-full">
              <LightboxImage
                src="/images/projects/patapon-vr/patapon-hero.png"
                alt="Archfiend boss looming over marching Patapons — Patapon series title art"
                width={600}
                height={720}
                className="h-full w-full object-cover object-top"
                roundedClassName="rounded-none"
              />
            </div>
          </div>

          {/* High Concept */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">The Hook</h2>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                You do not press buttons. You physically wield the Bachi — VR drumsticks — to command an army of 3D Patapons.
                Every march, attack, defend, and miracle is a real drum pattern you perform in physical space.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                The player rides a massive stabilized Chariot pulled by the Twin Titans — two divine stone beasts that answer only to the Beat.
                The army advances ahead; you command from the rear, reading the field and timing your patterns.
              </p>
            </div>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Project Spec</h2>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                <li><span className="font-medium text-[var(--foreground)]">Genre:</span> VR Rhythm-Action / Roguelite Strategy</li>
                <li><span className="font-medium text-[var(--foreground)]">Platform:</span> Meta Quest 3 (Standalone) & PCVR</li>
                <li><span className="font-medium text-[var(--foreground)]">Engine:</span> Unity (OpenXR)</li>
                <li><span className="font-medium text-[var(--foreground)]">Visual Style:</span> Low Poly Stylized — "Living Vinyl Toys"</li>
                <li><span className="font-medium text-[var(--foreground)]">Setting:</span> The Golden Age (Patapon prequel era)</li>
                <li><span className="font-medium text-[var(--foreground)]">GDD Version:</span> 1.0 (Final Concept Lock, Dec 2025)</li>
              </ul>
            </div>
          </div>

          {/* Patapolis panorama */}
          <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)]">
            <LightboxImage
              src="/images/projects/patapon-vr/patapon-patapolis.png"
              alt="Patapolis city panorama — the Golden Age hub from the Patapon series"
              width={2048}
              height={256}
              className="h-auto w-full object-cover"
              popupCaption="The Great Patapolis at its peak — the player's evolving hub between runs. Starts as a campfire in ruins; grows into a golden city as Archfiends are sealed."
              roundedClassName="rounded-none"
            />
          </div>

          {/* Input + Commands */}
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Drum Input System</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="flex flex-col gap-4">
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  Four physical drums are mounted on the Chariot railing at waist height. Each maps to a face-button symbol from the original games.
                  A hit must exceed <span className="font-medium text-[var(--foreground)]">2.0 m/s velocity</span> to register — gentle touches do nothing.
                </p>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  Commands are sequences of four beats. The rhythm engine tracks timing against a metronome; perfect sequences trigger Fever Mode,
                  amplifying army speed, damage, and visual intensity.
                </p>
              </div>
              <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Command Patterns</p>
                <ul className="space-y-2 font-mono text-sm text-[var(--muted)]">
                  <li><span className="text-[var(--foreground)]">March:</span> Pata – Pata – Pata – Pon</li>
                  <li><span className="text-[var(--foreground)]">Attack:</span> Pon – Pon – Pata – Pon</li>
                  <li><span className="text-[var(--foreground)]">Defend:</span> Chaka – Chaka – Pata – Pon</li>
                  <li><span className="text-[var(--foreground)]">Charge:</span> Don – Don – Chaka – Chaka</li>
                  <li><span className="text-[var(--foreground)]">Miracle:</span> Don – Don – Don – Don – Don</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Marching image */}
          <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)]">
            <LightboxImage
              src="/images/projects/patapon-vr/patapon-march.png"
              alt="Patapon warriors marching under a moonlit sky — Patapon series"
              width={1280}
              height={720}
              className="h-auto w-full object-cover"
              popupCaption="The Patapon army on the march — the player's commanded units advancing to the beat of the Almighty's drums."
              roundedClassName="rounded-none"
            />
          </div>

          {/* Roguelite + Motion Sickness */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Roguelite Structure</h2>
              <p className="mb-4 text-sm leading-relaxed text-[var(--muted)]">
                Each run is a branching expedition map (Slay the Spire style) across three biomes: the Whispering Woods, Sunken Dunes, and Glitch-Lands.
              </p>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                <li>- Combat, resource, mystery, and boss nodes</li>
                <li>- Star-Boons offered by Hoshipons after clears</li>
                <li>- Permanent unit evolution unlocks between runs</li>
                <li>- Hub (Patapolis) evolves visually with progression</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">VR Comfort Design</h2>
              <p className="mb-4 text-sm leading-relaxed text-[var(--muted)]">
                The Chariot never walks or jumps — it glides using a SmoothDamp follow behind the army's jerky beat-driven movement.
                This "Tow Rope" system keeps the player's reference frame stable while the action unfolds ahead.
              </p>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                <li>- Kinematic Chariot (script-driven, no physics bounce)</li>
                <li>- Army moves independently on-beat; Chariot lags smoothly</li>
                <li>- No player locomotion — stationary command post</li>
              </ul>
            </div>
          </div>

          {/* Enemy Faction */}
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Enemy Faction: The Archfiends (Seven Sins)</h2>
            <p className="mb-6 text-sm leading-relaxed text-[var(--muted)]">
              Seven Archfiends — the Seven Deadly Sins made manifest — are the final bosses of each act. They cannot be killed; they must be
              Sealed. The player must break the boss's host body, expose the Black Spirit within, and capture it into the Chariot's Vessel.
              Each captured Sin sets up the lore of Patapon 3.
            </p>
            <div className="overflow-hidden rounded-xl border border-[var(--border)]">
              <LightboxImage
                src="/images/projects/patapon-vr/patapon-archfiends.png"
                alt="The seven Dark Heroes / Archfiends from the Patapon series"
                width={1200}
                height={400}
                className="h-auto w-full object-contain bg-white p-4"
                popupCaption="The Seven Archfiends — each representing a Deadly Sin. In The First Beat they are unsealed and actively corrupting the world. The player must capture all seven."
                roundedClassName="rounded-none"
              />
            </div>
          </div>

          {/* Boss battle + Hoshipons */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)]">
              <LightboxImage
                src="/images/projects/patapon-vr/patapon-boss-battle.png"
                alt="Boss encounter atmosphere — Patapon army facing a dark tentacled enemy"
                width={1280}
                height={720}
                className="h-auto w-full object-cover"
                popupCaption="Boss encounter atmosphere. Phase 2 of the Sealing mechanic exposes the Black Spirit — game audio distorts, forcing players to rely on internal rhythm."
                roundedClassName="rounded-none"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)]">
              <LightboxImage
                src="/images/projects/patapon-vr/patapon-hoshipons.png"
                alt="Gold, Silver, Black Hoshipon NPCs and the Trifecta from Patapon"
                width={1200}
                height={300}
                className="h-full w-full object-contain bg-white p-4"
                popupCaption="The three Hoshipons: Gold (economy/crits), Silver (healing/defense), Black (cursed pacts/chaos) — plus the Trifecta commanders who evolve across runs."
                roundedClassName="rounded-none"
              />
            </div>
          </div>

          {/* Development Roadmap */}
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Development Roadmap</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
              {[
                { phase: 'Phase 1', label: 'Greybox', items: ['VR rig + hand tracking', '4-drum velocity input', 'Rhythm engine + metronome', 'Chariot tow-rope movement'] },
                { phase: 'Phase 2', label: 'Loop', items: ['Hatapon + vanguard squad', 'March & Attack commands', '1 enemy type (Ah-Ooh grunt)', 'Win/Loss state'] },
                { phase: 'Phase 3', label: 'Juice', items: ['Trident Chariot model', 'Twin Titan models', 'SFX + audio sync', 'Fever visuals'] },
                { phase: 'Phase 4', label: 'Content', items: ['Weapon/Rune system', 'Roguelite biome generation', 'Hoshipon encounters', 'Boss Sealing mechanic'] },
              ].map((p) => (
                <div key={p.phase} className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">{p.phase}</p>
                  <p className="mt-1 mb-3 text-sm font-semibold text-[var(--foreground)]">{p.label}</p>
                  <ul className="space-y-1.5 text-xs text-[var(--muted)]">
                    {p.items.map((item) => (
                      <li key={item}>— {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Image Attribution */}
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow)]">
            <h2 className="mb-3 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Image Attribution</h2>
            <p className="text-sm leading-relaxed text-[var(--muted)]">
              All images on this page are sourced from the official Patapon series (Patapon, Patapon 2, Patapon 3) and are the property of
              Sony Interactive Entertainment and Japan Studio. They are used here solely as visual reference to communicate the design intent
              and aesthetic direction of this fan concept project. This project is not affiliated with or endorsed by Sony.
            </p>
          </div>

        </section>
      </div>
    </main>
  );
}
