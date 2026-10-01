import { BulletList, CaseStudyHeader, CaseStudyShell, Figure, MediaGrid, Prose, Section, Split } from '@/components/case-study/case-study';
import { CaseStudyBody, CaseStudyFooter } from '@/components/case-study/case-study-layout';
import LightboxImage from '@/components/lightbox-image';
import { projectMetadata } from '@/content/project-helpers';

const slug = 'ami-research-companion' as const;

export const metadata = projectMetadata(
  slug,
  'A private research app I built for my mother: it searches her local documents, shows the original pages, and keeps evidence organised on her MacBook.'
);

const IMG = '/images/projects/ami';

const glance = [
  { label: 'My role', value: 'Solo product designer and developer' },
  { label: 'Built with', value: 'Python, FAISS, local storage, Codex SDK bridge, HTML/CSS/JS' },
  { label: 'Platform', value: 'Browser-based app packaged for macOS' },
  { label: 'Result', value: "Running on my mother's MacBook as a portable app with its own data folder" },
] as const;

const constraintItems = [
  'The interface had to be comfortable for a non-technical user.',
  'Documents and the search index needed to remain on the device for privacy and offline access.',
  'Answers needed visible links to source pages and careful wording when evidence was incomplete.',
  'Installation, startup, and shutdown had to work without developer support.',
];

const shippedItems = [
  'Imports PDF, EPUB, TXT, Markdown, and short notes into a searchable local library.',
  'Finds relevant passages, shows page previews, and sends only the selected evidence to the AI.',
  'Stores personal notes and medical files separately while allowing them to be referenced when needed.',
  'Provides saved chats, document previews, suggested next steps, and optional reference images.',
  'Packages the app and its data folder together for portable macOS use.',
];

const latestBuildItems = [
  'A second launch detects the running server and reopens the interface instead of causing a port conflict.',
  'Browser heartbeat and shutdown signals close the background service after the Ami tab is closed.',
  'Ami.app contains the application; AmiData contains the library, search index, and personal records.',
  'Testing on my mother\'s MacBook exposed startup and shutdown problems that did not appear during development.',
];

export default function AmiPage() {
  return (
    <CaseStudyShell>
      <CaseStudyHeader
        slug={slug}
        lede={
          <p>
            I built Ami for my mother. It organises her PDFs, books, notes and personal records, searches them on her own computer, and shows
            the original page behind every AI-assisted answer.
          </p>
        }
        hero={
          <LightboxImage
            src={`${IMG}/ami-banner.png`}
            alt="Ami interface with saved chats, an answer and an evidence preview card"
            width={2048}
            height={1280}
            priority
            className="h-auto w-full"
            roundedClassName="rounded-none"
          />
        }
        heroCaption="The current build: saved chats, an answer, and the document pages it came from."
        glance={glance}
      />

      <CaseStudyBody>
        <Section
          id="problem"
          title="The problem"
          intro={
            <>
              <p>
                My mother had articles, books, photos, lab documents and notes spread across different places. The first job was organising
                that so she could find evidence without juggling several tools.
              </p>
              <p>
                The library and search index stay on her device. AI summarises the selected passages and suggests follow-up questions, while the
                source pages stay visible so she can check them.
              </p>
            </>
          }
        >
          <Prose>
            <h3>Constraints that shaped it</h3>
          </Prose>
          <BulletList items={constraintItems} />
        </Section>

        <Section
          id="build"
          title="What it does"
          intro={
            <p>
              Ami manages a private library, classifies imports, renders PDF page previews, saves settings and answer history, and sends only the
              selected evidence to Codex through a local bridge.
            </p>
          }
        >
          <Split
            media={
              <Figure caption="When the library has no direct match, Ami says so, then offers practical next steps instead of bluffing.">
                <LightboxImage
                  src={`${IMG}/ami-chat-followup.png`}
                  alt="Ami follow-up answer with practical next steps and a reference image"
                  width={1800}
                  height={1200}
                  className="h-auto w-full"
                  roundedClassName="rounded-none"
                />
              </Figure>
            }
          >
            <BulletList items={shippedItems} />
          </Split>
          <MediaGrid>
            <Figure caption="An evidence-heavy answer: saved folders, the answer, and document preview cards.">
              <LightboxImage
                src={`${IMG}/ami-chat-evidence.png`}
                alt="Ami answer view with saved folders, answer text and document evidence cards"
                width={1800}
                height={1200}
                className="h-auto w-full"
                roundedClassName="rounded-none"
              />
            </Figure>
            <Figure caption="Options: account, model, storage location, library paths and image preferences.">
              <LightboxImage
                src={`${IMG}/ami-settings-panel.png`}
                alt="Ami options panel"
                width={1600}
                height={1500}
                className="h-auto w-full"
                roundedClassName="rounded-none"
              />
            </Figure>
          </MediaGrid>
        </Section>

        <Section
          id="testing"
          title="Testing on her MacBook"
          intro={
            <p>
              Installing it on my mother&apos;s MacBook exposed start-up and shutdown problems that never appeared on my development machine. I
              simplified relaunching and shutting down the background service:
            </p>
          }
        >
          <BulletList items={latestBuildItems} />
        </Section>

        <Section
          id="outcome"
          title="Outcome"
          intro={
            <p>
              Ami runs on my mother&apos;s MacBook as a portable app with local document search, page-level evidence, saved conversations, and a
              data folder she can move or back up on its own. I handled the product design, retrieval, storage, interface, packaging, debugging
              and deployment.
            </p>
          }
        />
      </CaseStudyBody>

      <CaseStudyFooter slug={slug} />
    </CaseStudyShell>
  );
}
