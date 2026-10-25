import type { FC } from 'react';
import styles from './ProjectDetailOutcome.module.css';

interface ProjectDetailOutcomeProps {
  outcome: string;
  projectTitle: string;
}

export const ProjectDetailOutcome: FC<ProjectDetailOutcomeProps> = ({ outcome, projectTitle }) => {
  return (
    <section className={styles.section} aria-labelledby="outcome-heading">
      <div className="container-wide">
        <div className={styles.innerBox}>
          <div className={styles.contentCol}>
            <div className={styles.sectionLead}>
              <span className={styles.leadBullet} aria-hidden="true" />
              Demonstrated Outcome &amp; Critical Evaluation
            </div>
            <h2 id="outcome-heading" className={styles.title}>
              {projectTitle} / Systemic Validity
            </h2>
            <p className={styles.outcomeNarrative}>{outcome}</p>
          </div>

          <div className={styles.evaluationCol}>
            <h3 className={styles.colTitle}>Architectural Audit</h3>
            <ul className={styles.auditList}>
              <li className={styles.auditItem}>
                <span className={styles.auditStatus}>Verified</span>
                <span className={styles.auditDesc}>
                  Strict 3-color palette adherence across all physical and digital touchpoints.
                </span>
              </li>
              <li className={styles.auditItem}>
                <span className={styles.auditStatus}>Verified</span>
                <span className={styles.auditDesc}>
                  Zero decorative overhead; all margins and glyphs align to mathematical baseline.
                </span>
              </li>
              <li className={styles.auditItem}>
                <span className={styles.auditStatus}>Verified</span>
                <span className={styles.auditDesc}>
                  Universal keyboard navigation and AAA contrast compliant across all media.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
