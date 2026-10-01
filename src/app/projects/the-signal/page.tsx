import {
  ActionLinks,
  BulletList,
  CardGrid,
  CaseStudyHeader,
  CaseStudyShell,
  DeepDive,
  Figure,
  MediaGrid,
  Prose,
  Section,
} from '@/components/case-study/case-study';
import { CaseStudyBody, CaseStudyFooter } from '@/components/case-study/case-study-layout';
import LightboxImage from '@/components/lightbox-image';
import LightboxVideo from '@/components/lightbox-video';
import { projectMetadata } from '@/content/project-helpers';

const slug = 'the-signal' as const;

export const metadata = projectMetadata(
  slug,
  'Systems and narrative design for a sci-fi co-op board game: modular exploration, evolving enemies, class customisation and an insight-card story system.'
);

const glance = [
  { label: 'My role', value: 'Systems and narrative designer: insight cards, progression, risk-reward, playtest iteration, visual production' },
  { label: 'Team', value: 'Georgi Tsvetanski, Alex Jeffries and Zefran Jehle' },
  { label: 'Format', value: 'Physical sci-fi board game, built over one semester' },
  { label: 'Result', value: 'A complete playable build, tested and revised with the team' },
] as const;

const pillars = [
  {
    title: 'Procedural discovery',
    body: 'Room tiles and encounters are placed as you explore, so no two runs through the ship feel the same.',
  },
  {
    title: 'Risk and reward',
    body: 'Loot, discoveries and hard choices give players reasons to push deeper. Alien Augments customise each build.',
  },
  {
    title: 'Insight system',
    body: 'Players collect data logs that shape both scoring and the final confrontation with The Corpus.',
  },
];

const challenges = [
  'Balancing procedural generation with fairness.',
  'Keeping player agency without overwhelming complexity.',
  'Tuning difficulty after early playtests.',
  'Iterating icons, cards and board layout until they read clearly.',
];

const stockIds =
  '1337241987, 1242619877, 539383063, 1420474354, 796495238, 531304463, 971053543, 644836659, 507100069, 623844078, 709447241, 1388930014, 1219422605, 554417793, 916383953, 1242256513, 1109927530, 734301646, 694200398, 701509136, 589381035, 1128312251, 585248097, 1264785348, 760621412, 471882847, 1092308462, 660353982, 597507260, 702464453, 1254781232, 1358880054, 706733728, 1063203575, 507117639, 465328661, 316028652, 921974697';

export default function TheSignalPage() {
  return (
    <CaseStudyShell>
      <CaseStudyHeader
        slug={slug}
        lede={
          <p>
            A sci-fi board game inspired by FTL and Darkest Dungeon: play a scavenger, mercenary or scholar exploring a decaying alien ship room
            by room. On our three-person team I designed the systems and narrative, and ran the visual production.
          </p>
        }
        hero={
          <LightboxImage
            src="/images/TheSignal_BoardGame_Done_Showcase.png"
            alt="The finished Signal board game laid out for play"
            width={1400}
            height={900}
            priority
            className="h-auto w-full"
            roundedClassName="rounded-none"
          />
        }
        heroCaption="The finished game."
        glance={glance}
      />

      <CaseStudyBody>
        <Section id="design" title="Design pillars">
          <CardGrid items={pillars} />
          <Figure caption="Team walkthrough of the game.">
            <div className="aspect-video">
              <LightboxVideo
                embedUrl="https://www.youtube.com/embed/vf-XuVHubbk"
                thumbnailUrl="https://img.youtube.com/vi/vf-XuVHubbk/maxresdefault.jpg"
                title="The Signal team walkthrough"
                className="h-full w-full object-cover"
                roundedClassName="rounded-none"
              />
            </div>
          </Figure>
        </Section>

        <Section
          id="narrative"
          title="Story and visuals"
          intro={
            <>
              <p>
                I wrote over a dozen Insight cards: fragmented logs, cryptic data and research notes that slowly reveal the ship&apos;s purpose and
                the nature of the Signal, aiming for isolation and unease.
              </p>
              <p>
                I also ran the visual pipeline in Photoshop: room tiles, enemy tokens, player boards, card and token layouts and custom icons, with
                licensed Adobe Stock art for the decaying sci-fi look.
              </p>
            </>
          }
        >
          <MediaGrid>
            <Figure caption="The board and room layout.">
              <LightboxImage src="/images/TheSignal_Board.png" alt="The Signal board and room layout" width={1400} height={900} className="h-auto w-full" roundedClassName="rounded-none" />
            </Figure>
            <Figure caption="Building the board in Photoshop.">
              <LightboxImage src="/images/TheSignal_PhotoshopBoardCreation.png" alt="Creating The Signal board in Photoshop" width={1400} height={900} className="h-auto w-full" roundedClassName="rounded-none" />
            </Figure>
          </MediaGrid>
        </Section>

        <Section
          id="balance"
          title="Balancing"
          intro={<p>Balancing evolving enemy behaviour against player builds was the core challenge of the build phase.</p>}
        >
          <BulletList items={challenges} />
          <MediaGrid>
            <Figure caption="Monster designs.">
              <LightboxImage src="/images/TheSignal_Monsters-scaled.png" alt="The Signal monster design sheet" width={1400} height={900} className="h-auto w-full" roundedClassName="rounded-none" />
            </Figure>
            <Figure caption="Equipment and enemy sheet.">
              <LightboxImage src="/images/TheSignal_Equipment_EnemySheet.png" alt="The Signal equipment and enemy sheet" width={1400} height={900} className="h-auto w-full" roundedClassName="rounded-none" />
            </Figure>
          </MediaGrid>
          <ActionLinks
            links={[
              { href: 'https://docs.google.com/spreadsheets/d/1lhhB8pDsiwd-MkOLUejhbkQfkNkfXh6KfUYBQohW_Mk/edit?gid=0#gid=0', label: 'Balancing sheet' },
              { href: 'https://docs.google.com/document/d/18TgjQ83h_Q6F8Q9KVB6a97QQQzh9wcs-PznotlDIVQ0/edit?tab=t.0', label: 'Design document' },
              { href: 'https://docs.google.com/presentation/d/1bfBJ6skJa0pFTh2KjSEqbHBgYkYuR89TeZupIfUqqG8/edit?slide=id.g35076292f3f_3_305#slide=id.g35076292f3f_3_305', label: 'Presentation' },
            ]}
          />
          <DeepDive summary="Image credits (Adobe Stock)">
            <Prose>
              <p>Licensed from Adobe Stock; search each ID on stock.adobe.com.</p>
              <p className="break-words text-sm">{stockIds}.</p>
            </Prose>
          </DeepDive>
        </Section>
      </CaseStudyBody>

      <CaseStudyFooter slug={slug} />
    </CaseStudyShell>
  );
}
