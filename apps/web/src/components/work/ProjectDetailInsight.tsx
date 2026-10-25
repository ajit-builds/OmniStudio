import type { FC } from 'react';
import styles from './ProjectDetailInsight.module.css';

interface ProjectDetailInsightProps {
  insight: string;
  projectTitle: string;
}

export const ProjectDetailInsight: FC<ProjectDetailInsightProps> = ({ insight, projectTitle }) => {
  return (
    <section className={styles.section} aria-labelledby="insight-heading">
      <div className="container-wide">
        <div className={styles.inner}>
          {/* Constructivist Corner Calipers */}
          <div className={styles.caliperTl} aria-hidden="true" />
          <div className={styles.caliperBr} aria-hidden="true" />

          <div className={styles.headerRow}>
            <div className={styles.sectionLead}>
              <span className={styles.leadBullet} aria-hidden="true" />
              The Central Structural Insight
            </div>
            <span className={styles.projectTag}>{projectTitle} / Axiom</span>
          </div>

          <blockquote className={styles.quoteBlock}>
            <p id="insight-heading" className={styles.quoteText}>
              “{insight}”
            </p>
          </blockquote>

          <div className={styles.systemFooter}>
            <span className={styles.systemRule}>
              Every element in the system must serve an structural purpose; anything else is noise.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
