import { ArrowRight, FileText } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import DegreeGraph from '@/components/degree-graph';
import ui from '@/components/ui/ui.module.css';
import { pageMetadata } from '@/content/project-helpers';
import styles from './about.module.css';

export const metadata = pageMetadata({
  title: 'About',
  description:
    'Georgi Tsvetanski: game developer and designer working across simulation, XR and gameplay systems. Experience, education and contact.',
  path: '/about',
});

const experience = [
  {
    role: 'Game developer and multimedia specialist',
    org: 'Pixel Bulb Studio · Shinobi Story',
    period: 'May 2021 – Apr 2024',
    detail: 'Live operations, content and animation on a Naruto MMORPG with 1M+ downloads and $110K revenue.',
    href: '/projects/shinobi-story',
  },
  {
    role: 'Digital and visual media specialist',
    org: 'UMD Cyber-Physical Systems Engineering',
    period: 'Sep 2023 – Oct 2024',
    detail: 'Led video production and social media; managed interns and campaigns for a program rebrand.',
    href: '/cpse',
  },
  {
    role: 'Gameplay QA and analysis',
    org: 'Shokuho mod team · freelance',
    period: 'Mar 2025 – Aug 2025',
    detail: 'Testing, balance and capture.',
    href: null,
  },
] as const;

const education = [
  {
    school: 'University of Baltimore',
    degree: "Bachelor's, Simulation and Game Design (design, coding and development track)",
    period: '2025 – present',
  },
  {
    school: 'University of Baltimore',
    degree: 'M.S., Interaction Design and Information Architecture',
    period: 'Accelerated program',
  },
  {
    school: 'University of Maryland, College Park',
    degree: "Bachelor's, Digital Media and Communication",
    period: '2023 – 2024',
  },
  {
    school: 'Montgomery College',
    degree: "Associate's, Digital Animation",
    period: '2020 – 2023',
  },
] as const;

export default function AboutPage() {
  return (
    <main className={ui.page}>
      <section className={styles.intro} aria-labelledby="about-title">
        <div>
          <p className={ui.eyebrow}>Simulation · XR · Gameplay Systems</p>
          <h1 id="about-title" className={ui.pageTitle}>
            About
          </h1>
          <div className={styles.bio}>
            <p>
              I&apos;m Georgi Tsvetanski, a game developer and designer working where simulation, XR and gameplay systems meet. From 2021 to
              2024 I worked on Shinobi Story, a live Naruto MMORPG with over a million downloads, moving from player support into animation,
              content and mentoring developers.
            </p>
            <p>
              Since then I&apos;ve built VR prototypes, research tools and engines: an Unreal evidence-review prototype for an Army Research
              Laboratory client project, a VR safety simulator for a Baltimore nonprofit, and a local-first tabletop RPG engine. I&apos;m studying
              Simulation and Game Design at the University of Baltimore.
            </p>
          </div>
          <div className={styles.actions}>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className={ui.buttonPrimary}>
              <FileText aria-hidden="true" size={18} strokeWidth={1.8} />
              View Resume
            </a>
            <Link href="/projects" className={ui.buttonSecondary}>
              See all projects
              <ArrowRight aria-hidden="true" size={17} strokeWidth={1.8} />
            </Link>
          </div>
        </div>
        <div className={styles.portrait}>
          <Image
            src="/images/georgi-hero-portrait.webp"
            alt="Georgi Tsvetanski"
            width={863}
            height={745}
            className={styles.portraitImage}
            preload
            unoptimized
          />
        </div>
      </section>

      <section className={styles.section} aria-labelledby="experience-title">
        <h2 id="experience-title" className={styles.sectionTitle}>
          Experience
        </h2>
        <ul className={styles.list}>
          {experience.map((item) => (
            <li key={item.role} className={styles.row}>
              <div>
                <h3 className={styles.rowTitle}>{item.role}</h3>
                <p className={styles.rowMeta}>
                  {item.org} · {item.period}
                </p>
                <p className={styles.rowDetail}>{item.detail}</p>
              </div>
              {item.href ? (
                <Link href={item.href} className={styles.rowLink}>
                  See the work <ArrowRight aria-hidden="true" size={16} strokeWidth={1.8} />
                </Link>
              ) : null}
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section} aria-labelledby="education-title">
        <h2 id="education-title" className={styles.sectionTitle}>
          Education
        </h2>
        <ul className={styles.list}>
          {education.map((item) => (
            <li key={item.degree} className={styles.row}>
              <div>
                <h3 className={styles.rowTitle}>{item.degree}</h3>
                <p className={styles.rowMeta}>
                  {item.school} · {item.period}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section} aria-labelledby="skills-title">
        <h2 id="skills-title" className={styles.sectionTitle}>
          Skills map
        </h2>
        <p className={styles.sectionLede}>
          How the degrees connect to the skills I use. Select a degree to see what it added; the list above has the same information.
        </p>
        <DegreeGraph className="mx-auto h-[560px] w-full max-w-3xl sm:h-[500px] lg:h-[540px]" />
      </section>
    </main>
  );
}
