import Breadcrumbs from '@/components/breadcrumbs';
import LightboxImage from '@/components/lightbox-image';
import ProjectAtAGlance from '@/components/project-at-a-glance';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Horror VN Kit | Georgi Tsvetanski',
  description:
    'A zero-programming Unity toolkit for branching psychological-horror visual novels, built so a writer could author scenes entirely in the Inspector.',
};

const snapshotItems = [
  { label: 'My role', value: 'Toolkit programmer and tools designer' },
  { label: 'Status', value: 'Delivered as a university major project (spring 2026), packaged as a .unitypackage' },
  { label: 'Engine', value: 'Unity 6, C#, TextMeshPro, ScriptableObjects, custom editor drawers' },
  { label: 'User', value: 'Built for Eden, the project’s writer, who shouldn’t have to write any code or markup' },
] as const;

const systems = [
  {
    title: 'Data, not scenes',
    body: 'Characters and conversations are ScriptableObject assets. A character profile holds a list of named emotion portraits, so a writer can add a “Smirk” or a “NoFace” without anyone changing code.',
  },
  {
    title: 'Branching with memory',
    body: 'Choices link to the next conversation asset. The dialogue manager remembers which branches the player has seen and hides choices that lead back to them, so a hub investigation can’t loop forever.',
  },
  {
    title: 'Typewriter and audio',
    body: 'A standalone typewriter reveals text without re-wrapping lines mid-reveal, plays randomized voice blips every few letters, and lets the player click to finish a line early.',
  },
  {
    title: 'Horror text effects',
    body: 'Per-character mesh effects like jitter, wobble and a blackout focus that darkens everything but one phrase. The writer picks an effect and types the target word into a box; no tags.',
  },
];

const guardrails = [
  {
    title: 'Character counter',
    body: 'Every line shows a live count in the Inspector and turns red past 110 characters, the point where text would overflow the dialogue box.',
  },
  {
    title: 'Emotion dropdowns that can’t lie',
    body: 'The emotion menu only lists portraits that character actually has. If an invalid one slips in, it snaps back to Neutral and logs a warning instead of showing an invisible character.',
  },
  {
    title: 'Manual overrides for glitches',
    body: 'A line can override the speaker’s name or portrait for one moment, to create a distorted or “imposter” beat without making a new character.',
  },
];

export default function HorrorVnKitPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] p-8 font-sans text-[var(--foreground)] md:p-24">
      <div className="mx-auto max-w-5xl">
        <header className="mb-16">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Projects', href: '/career' },
              { label: 'Horror VN Kit' },
            ]}
            className="mb-4"
          />
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">
            Tools Programming · Unity · Designer UX
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight">Horror VN Kit</h1>
          <p className="mt-3 max-w-3xl text-[var(--muted)]">
            A Unity toolkit for branching psychological-horror visual novels. I built the systems so our writer could author every
            scene, choice and scare from the Inspector, without code and without learning a scripting language.
          </p>
        </header>

        <section className="flex flex-col gap-12 md:gap-16">
          <ProjectAtAGlance items={snapshotItems} />

          <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-strong)]">
            <LightboxImage
              src="/images/projects/horror-vn-kit/branching-choices.png"
              alt="Visual novel scene: the character Ares asks where to start, with two choices, Investigate the workbench and Check the padlocked freezer"
              width={1080}
              height={592}
              className="h-auto w-full object-cover"
              roundedClassName="rounded-none"
              popupCaption="A branching choice. Once a path has been explored, its button hides automatically."
            />
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Design Goal</h2>
            <p className="text-sm leading-relaxed text-[var(--muted)]">
              The kit handles the tedious parts of a visual novel (memory, text formatting, portraits) so the writer can focus on
              writing and atmosphere. Partway through, Eden found Ink, a narrative scripting language. I looked into it and decided
              against it: Ink is powerful for huge branching RPGs, but it means learning a markup language and writing outside Unity,
              which broke our zero-programming goal. We spent that time on horror effects instead.
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Systems</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {systems.map((item) => (
                <div key={item.title} className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
                  <p className="text-sm font-semibold text-[var(--foreground)]">{item.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              <figure className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--background)]">
                <LightboxImage
                  src="/images/projects/horror-vn-kit/jitter-text-effect.png"
                  alt="Dialogue line where the word jitter is highlighted in red and shaking"
                  width={1190}
                  height={703}
                  className="h-auto w-full object-cover"
                  roundedClassName="rounded-none"
                  popupCaption="A targeted jitter effect on one word, set up entirely in the Inspector."
                />
                <figcaption className="px-4 py-3 text-xs text-[var(--muted)]">Targeted text effect</figcaption>
              </figure>
              <figure className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--background)]">
                <LightboxImage
                  src="/images/projects/horror-vn-kit/dialogue-scene.png"
                  alt="Dialogue scene with Ares and the styled horror dialogue box"
                  width={941}
                  height={427}
                  className="h-auto w-full object-cover"
                  roundedClassName="rounded-none"
                  popupCaption="The styled dialogue box with a handwritten font baked for TextMeshPro."
                />
                <figcaption className="px-4 py-3 text-xs text-[var(--muted)]">Styled dialogue box</figcaption>
              </figure>
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Designer Guardrails</h2>
            <p className="mb-6 max-w-3xl text-sm leading-relaxed text-[var(--muted)]">
              Most bugs in a writer-driven tool come from the data, not the code. I put the checks where the writer works: in a custom
              Inspector drawer that lays itself out without overlapping labels.
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {guardrails.map((item) => (
                <div key={item.title} className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
                  <p className="text-sm font-semibold text-[var(--foreground)]">{item.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 overflow-hidden rounded-xl border border-[var(--border)]">
              <LightboxImage
                src="/images/projects/horror-vn-kit/emotion-guardrail-warning.png"
                alt="Unity console warning: Ares does not have the SlightSmile expression, snapping back to Neutral"
                width={884}
                height={113}
                className="h-auto w-full object-cover"
                roundedClassName="rounded-none"
                popupCaption="The emotion guardrail catching a portrait the character doesn't have."
              />
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Process</h2>
            <p className="text-sm leading-relaxed text-[var(--muted)]">
              I documented the build in six dev diaries, covering everything from a Git ignore rule that tried to upload 33,000 Unity
              files to a typewriter flicker caused by update order. I also wrote a designer’s manual covering setup, branching and
              troubleshooting. The kit shipped as a single Unity package with that manual inside.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
