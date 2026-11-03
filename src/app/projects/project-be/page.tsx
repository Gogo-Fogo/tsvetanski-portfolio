import {
  ActionLinks,
  BulletList,
  CardGrid,
  CaseStudyHeader,
  CaseStudyShell,
  DeepDive,
  Prose,
  Section,
} from '@/components/case-study/case-study';
import { CaseStudyBody, CaseStudyFooter } from '@/components/case-study/case-study-layout';
import LightboxImage from '@/components/lightbox-image';
import { projectMetadata } from '@/content/project-helpers';

const slug = 'project-be' as const;

export const metadata = projectMetadata(
  slug,
  'An offline kit for a household: a Kiwix library, a local Ollama AI that answers only from it with citations, and printable first-aid cards. Measured on a GPU desktop and an Intel MacBook on battery.'
);

const IMG = '/images/projects/project-be';
const REPO = 'https://github.com/Gogo-Fogo/project-be';

// Screenshots still to capture (real ones only): the chat page answering "how do I stop severe
// bleeding" with the card on top and cited sources, the library home, and a printed card.
// Add them as Figures in "What's in the kit" and "How a question is answered", and swap the
// card source in scripts/build-card-images.py to the chat capture.

const glance = [
  { label: 'My role', value: 'Designed and directed it; built it with Claude Code as an AI pair' },
  { label: 'Built with', value: 'Python (standard library only), Ollama, Kiwix, Windows and macOS launchers' },
  { label: 'Runs on', value: 'Windows desktop with a GPU (power on); Intel MacBook on battery (power out)' },
  { label: 'Result', value: 'Running on both machines, tested with no network; public repo with an agent setup guide' },
] as const;

const constraints = [
  'No internet or cell service: everything, including the AI, runs on the machine.',
  'Used under stress by people who are not technical, so one double-click starts it.',
  'A wrong first-aid answer is worse than no answer, so the AI may only repeat what the library says.',
  'The laptop has to last on battery, so model choice is measured in seconds and watt-hours.',
  'Nothing personal in the public version: addresses and plans stay in git-ignored files.',
];

const kit = [
  {
    title: 'Offline library',
    body: 'Kiwix with Wikipedia, WikiMed, iFixit, survival guides and Wikivoyage, readable in any browser. Each download is checked against its SHA-256.',
  },
  {
    title: 'Local AI with sources',
    body: 'Ollama answers plain-language questions only from the library, lists its sources as [1] [2] [3], and says "Not found in the offline library" instead of guessing.',
  },
  {
    title: 'First-aid cards',
    body: 'Eight short printable cards (choking, CPR, bleeding, burns, heart attack and stroke, food, water, carbon monoxide). The matching card appears before the AI answer and takes priority over it.',
  },
  {
    title: 'First-aid videos',
    body: '48 official videos from the Red Cross, American Heart Association, St John Ambulance and FEMA, about 900 MB.',
  },
  {
    title: 'Offline games',
    body: 'Games that run without internet, many with controller support for two or more players.',
  },
  {
    title: 'Checklists',
    body: 'Two weeks of supplies, a household communication plan and grid alerts, handed over at the end of setup.',
  },
];

const pipeline = [
  <>
    <strong>Card first.</strong> Keywords match the question to a first-aid card, which is shown word for word before anything else.
  </>,
  <>
    <strong>Topics.</strong> The model turns everyday wording into Wikipedia-style search topics.
  </>,
  <>
    <strong>Search.</strong> kiwix-serve runs a full-text search, exact titles first.
  </>,
  <>
    <strong>Read.</strong> The best articles are read and only their most relevant paragraphs are kept.
  </>,
  <>
    <strong>Answer.</strong> The model answers from those sources only, at temperature 0, and cites them.
  </>,
  <>
    <strong>Safety line.</strong> Code, not the model, adds a &quot;call 911&quot; line for life-threatening topics. The number is
    configurable.
  </>,
];

const models = [
  {
    title: 'Desktop: gemma4:12b',
    body: 'RTX 5070 Ti, 16 GB VRAM. About 7–12 s per answer. The most faithful model tested: it cited everything and never invented a fact.',
  },
  {
    title: 'MacBook: qwen3.5:4b',
    body: '2019 MacBook Pro, Intel i9, CPU only. About 50 s and 0.42 Wh per answer, 0.5% of the battery.',
  },
  {
    title: 'MacBook, low battery: qwen3.5:2b',
    body: 'About 25 s and 0.20 Wh per answer. Idle with the library and AI running, the MacBook draws 6.2 W: about 13 hours on a full battery. The screen costs more than the AI.',
  },
];

const evalFindings = [
  'Every model correctly refused the trap question, whose answer is not in the library.',
  <>
    <strong>gpt-oss:20b was dropped.</strong> It invented facts even with sources in front of it, for example &quot;fridge food is safe for
    1–7 days&quot; where the source says about 4 hours.
  </>,
  <>
    <strong>&quot;Uncensored&quot; models were excluded.</strong> Abliterated variants added advice that no source supported.
  </>,
  <>
    <strong>The best answers came from a 27B model,</strong> but it is only safe to run one at a time with someone at the PC (see the limits
    below), so it is not the default.
  </>,
];

const searchFixes = [
  {
    title: 'Everyday words missed',
    body: 'Keyword search alone failed on normal phrasing: "bleeding" returned a song and "fridge" an article about a pork shortage. Letting the model pick encyclopedia topics first fixed it.',
  },
  {
    title: 'Small models copied examples',
    body: 'The 2B model echoed the prompt\'s worked example for every question. Sending the examples as separate chat turns instead of one flat prompt stopped it.',
  },
  {
    title: 'Answers drifted between runs',
    body: 'Temperature 0 made answers repeatable, and the cards give the critical steps a fixed wording that does not depend on the model.',
  },
];

const limits = [
  'Ollama always keeps 2 GB of video memory free (OLLAMA_GPU_OVERHEAD), so the screen keeps working.',
  'Only one model is loaded at a time.',
  'A model that has not loaded within 2 minutes is abandoned instead of hanging.',
  'Large models are used only with the owner at the PC; the family chat page offers only the safe models.',
];

const verification = [
  <>
    <strong>Tested with the network off.</strong> Both machines ran the full question flow in no-network sandboxes; on macOS,{' '}
    <code>sandbox-exec</code> denied all outbound traffic except localhost.
  </>,
  <>
    <strong>Checked library files.</strong> Every library download is verified against the SHA-256 that Kiwix publishes.
  </>,
  <>
    <strong>Scrubbed before going public.</strong> All files and the full git history were checked for personal details, and commit emails
    were rewritten to the GitHub no-reply address.
  </>,
];

const toc = [
  { id: 'problem', label: 'The problem' },
  { id: 'kit', label: "What's in the kit" },
  { id: 'answers', label: 'How a question is answered' },
  { id: 'models', label: 'Choosing models by measurement' },
  { id: 'safety', label: 'Search fixes and safety limits' },
  { id: 'verification', label: 'Verifying it offline' },
  { id: 'setup', label: 'Setup by any AI agent' },
  { id: 'outcome', label: 'Outcome' },
];

export default function ProjectBePage() {
  return (
    <CaseStudyShell>
      <CaseStudyHeader
        slug={slug}
        lede={
          <p>
            I designed an offline kit for a household: an encyclopedia library, a local AI that answers only from it and cites its sources,
            and printable first-aid cards. I built it with Claude Code as my AI pair and measured every model choice on the two machines it
            runs on.
          </p>
        }
        hero={
          <LightboxImage
            src={`${IMG}/project-be-pipeline-hero.png`}
            alt="Diagram: a question goes to a first-aid card, then the offline library, then a cited answer, all with no internet"
            width={1600}
            height={660}
            priority
            className="h-auto w-full"
            roundedClassName="rounded-none"
          />
        }
        heroCaption="How a question is answered. Everything runs on the machine; nothing goes to the internet."
        glance={glance}
        actions={<ActionLinks links={[{ href: REPO, label: 'Source on GitHub', primary: true }]} />}
      />

      <CaseStudyBody toc={toc}>
        <Section
          id="problem"
          title="The problem"
          intro={
            <p>
              When power, internet or cell service are out for days, a household loses the tools it normally uses to look things up. The goal
              was a kit that still answers practical questions, from first aid to safe food and water, on hardware the household already
              owns.
            </p>
          }
        >
          <Prose>
            <h3>Constraints that shaped it</h3>
          </Prose>
          <BulletList items={constraints} />
        </Section>

        <Section
          id="kit"
          title="What's in the kit"
          intro={
            <p>
              Two machines cover two situations: a Windows desktop with a GPU while the power is on, and a MacBook on battery when it is not.
              Printed cards cover the case where no device is available.
            </p>
          }
        >
          <CardGrid items={kit} />
        </Section>

        <Section
          id="answers"
          title="How a question is answered"
          intro={
            <p>
              <code>tools/ask.py</code> uses only Python&apos;s standard library, so it runs on the Mac&apos;s built-in Python with no
              installs. <code>tools/chat_server.py</code> serves a chat page on 127.0.0.1:8090 that streams its output.
            </p>
          }
        >
          <BulletList items={pipeline} />
        </Section>

        <Section
          id="models"
          title="Choosing models by measurement"
          intro={
            <p>
              Each machine got the model that was fastest while still faithful to its sources. I timed every candidate and, on the MacBook,
              measured battery cost per answer.
            </p>
          }
        >
          <CardGrid items={models} />
          <Prose>
            <h3>Answer-quality test: 8 models, 8 questions</h3>
            <p>
              The same eight questions went through each model one at a time, including a trap question the library cannot answer.
            </p>
          </Prose>
          <BulletList items={evalFindings} />
        </Section>

        <Section id="safety" title="Search fixes and safety limits">
          <CardGrid items={searchFixes} />
          <Prose>
            <h3>Limits after a freeze</h3>
            <p>
              During testing, a 27B model filled the GPU&apos;s memory and froze Windows, because nothing was left to draw the screen. That
              set four rules:
            </p>
          </Prose>
          <BulletList items={limits} />
        </Section>

        <Section id="verification" title="Verifying it offline">
          <BulletList items={verification} />
        </Section>

        <Section
          id="setup"
          title="Setup by any AI agent"
          intro={
            <>
              <p>
                The public repo&apos;s <code>AGENTS.md</code> is a setup protocol. Anyone can tell their coding agent to clone the repo and
                follow it. The agent checks the system, memory, GPU and free disk space, recommends a library size and model, asks before
                big downloads or system changes, installs, tests with the internet off, and walks through the checklists.
              </p>
              <p>
                The repo is free for non-commercial use under CC BY-NC 4.0 and states clearly that it is not medical advice and does not
                replace emergency services or a first-aid class.
              </p>
            </>
          }
        >
          <DeepDive summary="What the agent does, step by step">
            <BulletList
              items={[
                'Checks the computer: operating system, memory, graphics card, free space and battery.',
                'Asks about the household and its phones.',
                'Recommends a library tier, an AI model and optional extras for that hardware.',
                'Installs only after the owner agrees. Purchases, passwords and sign-ups stay with the owner.',
                'Tests the kit with the internet off.',
                'Hands over the supplies, communication-plan and grid-alert checklists.',
              ]}
            />
          </DeepDive>
        </Section>

        <Section
          id="outcome"
          title="Outcome"
          intro={
            <>
              <p>
                The kit runs on a Windows desktop and an Intel MacBook, answers in about 7–12 s on the GPU and about 50 s on the laptop CPU,
                and refuses questions its library cannot answer. A generalised version is public with a setup guide any AI agent can follow.
              </p>
              <p>
                My part: the requirements, the answer pipeline design, the safety rules, model selection, the tests on both machines and the
                privacy review. I built it with Claude Code as an AI pair programmer, working under my direction.
              </p>
            </>
          }
        >
          <ActionLinks links={[{ href: REPO, label: 'Source on GitHub', primary: true }]} />
        </Section>
      </CaseStudyBody>

      <CaseStudyFooter slug={slug} />
    </CaseStudyShell>
  );
}
