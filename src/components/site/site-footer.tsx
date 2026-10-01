import { ArrowUp, FileText, Instagram, Linkedin, Mail } from 'lucide-react';
import CopyEmailButton from '@/components/copy-email-button';
import styles from './site.module.css';

export const CONTACT_EMAIL = 'georgi@tsvetanski.com';

export default function SiteFooter() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerLead}>
          <h2 className={styles.footerTitle}>Contact</h2>
          <p className={styles.footerLine}>Open to thoughtful work in XR, gameplay, and interaction design.</p>
        </div>

        <div className={styles.footerActions}>
          <div className={styles.emailRow}>
            <a href={`mailto:${CONTACT_EMAIL}`} className={styles.footerLink}>
              <Mail aria-hidden="true" size={19} strokeWidth={1.6} />
              {CONTACT_EMAIL}
            </a>
            <CopyEmailButton email={CONTACT_EMAIL} />
          </div>
          <ul className={styles.footerLinks}>
            <li>
              <a href="https://www.linkedin.com/in/georgitsvetanski-526373234" target="_blank" rel="noreferrer" className={styles.footerLink}>
                <Linkedin aria-hidden="true" size={19} strokeWidth={1.6} />
                LinkedIn
              </a>
            </li>
            <li>
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className={styles.footerLink}>
                <FileText aria-hidden="true" size={19} strokeWidth={1.6} />
                Resume (PDF)
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/v4n_gogo/" target="_blank" rel="noreferrer" className={styles.footerLink}>
                <Instagram aria-hidden="true" size={19} strokeWidth={1.6} />
                Instagram
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.footerMeta}>
          <span>© 2026 Georgi Tsvetanski</span>
          <a href="#top" className={styles.footerLink}>
            <ArrowUp aria-hidden="true" size={17} strokeWidth={1.6} />
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
