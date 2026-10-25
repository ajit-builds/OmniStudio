import type { FC } from 'react';
import styles from './JournalIntro.module.css';

interface JournalIntroProps {
  publishedCount: number;
}

export const JournalIntro: FC<JournalIntroProps> = ({ publishedCount }) => {
  return (
    <header className={styles.introHeader} aria-labelledby="journal-main-heading">
      <div className="container-wide">
        {/* Editorial Sub-bar & Metadata */}
        <div className={styles.metaRow}>
          <div className={styles.breadcrumbs}>
            <span>Studio Omni</span>
            <span className={styles.divider}>/</span>
            <span className={styles.current}>Journal &amp; Field Notes</span>
          </div>
          <div className={styles.systemMetrics}>
            <span className={styles.statusDot} aria-hidden="true" />
            <span>Archive Index: {publishedCount} Published Critical Essays</span>
          </div>
        </div>

        {/* Primary Typographic Headline */}
        <div className={styles.heroGrid}>
          <div className={styles.titleColumn}>
            <div className={styles.sectionLead}>
              <span className={styles.leadBullet} aria-hidden="true" />
              Critical Discourse
            </div>
            <h1 id="journal-main-heading" className={styles.title}>
              ESSAYS &amp; <span className={styles.titleItalic}>Field Notes</span>
            </h1>
          </div>
          <div className={styles.statementColumn}>
            <p className={styles.leadParagraph}>
              An ongoing series of critical inquiries authored from our design research desk,
              examining the invisible armatures of typography, digital interaction physics, and
              tactile publication systems.
            </p>
            <p className={styles.disclaimerText}>
              All entries represent self-directed theoretical investigations and architectural
              essays authored by Studio Omni.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
