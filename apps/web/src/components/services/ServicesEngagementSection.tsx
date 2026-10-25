import type { FC } from 'react';
import { PROCESS_STAGES } from '../../content/process.js';
import styles from './ServicesEngagementSection.module.css';

export const ServicesEngagementSection: FC = () => {
  return (
    <section className={styles.section} aria-labelledby="engagement-process-heading">
      <div className="container-wide">
        <div className={styles.sectionHeader}>
          <div className={styles.sectionLead}>
            <span className={styles.leadBullet} aria-hidden="true" />
            Engagement Framework
          </div>
          <h2 id="engagement-process-heading" className={styles.title}>
            What to Expect in Collaboration
          </h2>
          <p className={styles.subtitle}>
            Every commission follows our established four-stage methodology, adapted to the specific
            scope, medium, and timeline of your brief.
          </p>
        </div>

        <div className={styles.stagesGrid}>
          {PROCESS_STAGES.map((stage) => (
            <div key={stage.id} className={styles.stageBox}>
              <div className={styles.stageHeader}>
                <span className={styles.stageStep}>{stage.step}</span>
                <h3 className={styles.stageTitle}>{stage.title}</h3>
              </div>
              <p className={styles.stageTagline}>{stage.tagline}</p>
              <p className={styles.stageDesc}>{stage.description}</p>

              <div className={styles.clientExpectation}>
                <span className={styles.expectationLabel}>Collaborative Focus:</span>
                <ul className={styles.actionsList}>
                  {stage.actions.map((action, idx) => (
                    <li key={idx} className={styles.actionItem}>
                      <span className={styles.bullet} aria-hidden="true">
                        —
                      </span>
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Transparent Terms Note */}
        <div className={styles.scopeNotice}>
          <div className={styles.noticeHeader}>
            <span className={styles.noticeIcon} aria-hidden="true">
              ℹ
            </span>
            <span className={styles.noticeTitle}>Custom Calibration &amp; Scoping Policy</span>
          </div>
          <p className={styles.noticeText}>
            Because we construct bespoke systems rather than applying stock templates, engagement
            timelines, review milestones, and deliverables are tailored to each commission. All
            parameters are explicitly agreed upon in a detailed scope schedule prior to the start of
            work.
          </p>
        </div>
      </div>
    </section>
  );
};
