import type { FC } from 'react';
import styles from './WorkIntro.module.css';

interface WorkIntroProps {
  totalCount: number;
}

export const WorkIntro: FC<WorkIntroProps> = ({ totalCount }) => {
  return (
    <header className={styles.introHeader} aria-labelledby="work-heading">
      <div className="container-wide">
        {/* Editorial Sub-bar & Metadata */}
        <div className={styles.metaRow}>
          <div className={styles.breadcrumbs}>
            <span>Studio Omni</span>
            <span className={styles.divider}>/</span>
            <span className={styles.current}>Selected Works</span>
          </div>
          <div className={styles.systemMetrics}>
            <span className={styles.statusDot} aria-hidden="true" />
            <span>Archive Index: {totalCount} Conceptual Systems</span>
          </div>
        </div>

        {/* Primary Typographic Headline */}
        <div className={styles.heroGrid}>
          <div className={styles.titleColumn}>
            <h1 id="work-heading" className={styles.title}>
              DISCIPLINES IN <span className={styles.titleItalic}>Tension</span>
            </h1>
          </div>
          <div className={styles.statementColumn}>
            <p className={styles.leadParagraph}>
              We develop enduring design systems across visual identity, digital architecture, and
              editorial publications. Each project is an uncompromising investigation into
              structure, negative space, and typographic cadence.
            </p>
            <p className={styles.disclaimerText}>
              All entries represent self-directed exploratory briefs and research systems authored
              by Studio Omni to demonstrate systemic design principles.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
