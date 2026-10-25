import type { FC } from 'react';
import { PROCESS_STAGES } from '../../content/process.js';
import styles from './AboutProcessSection.module.css';

export const AboutProcessSection: FC = () => {
  return (
    <section className={styles.section} aria-labelledby="about-process-heading">
      <div className="container-wide">
        <div className={styles.sectionHeader}>
          <div className={styles.sectionLead}>
            <span className={styles.leadBullet} aria-hidden="true" />
            Sequential Methodology
          </div>
          <h2 id="about-process-heading" className={styles.title}>
            The Four-Stage Progression
          </h2>
          <p className={styles.subtitle}>
            From initial structural inquiry to uncompromising execution, our methodology moves in a
            disciplined sequence.
          </p>
        </div>

        <div className={styles.processSequence}>
          {PROCESS_STAGES.map((stage, index) => (
            <article key={stage.id} className={styles.stageCard}>
              <div className={styles.stageTopRow}>
                <span className={styles.stepNum}>{stage.step}</span>
                <span className={styles.stepCoordinate}>STAGE 0{index + 1} / 04</span>
              </div>

              <h3 className={styles.stageTitle}>{stage.title}</h3>
              <p className={styles.stageTagline}>{stage.tagline}</p>
              <p className={styles.stageDesc}>{stage.description}</p>

              <div className={styles.actionsBox}>
                <span className={styles.actionsLabel}>Key Actions &amp; Deliverables:</span>
                <ul className={styles.actionsList}>
                  {stage.actions.map((action, idx) => (
                    <li key={idx} className={styles.actionItem}>
                      <span className={styles.actionBullet} aria-hidden="true">
                        —
                      </span>
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
