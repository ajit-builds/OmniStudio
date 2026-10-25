import type { FC } from 'react';
import styles from './AboutPracticeSection.module.css';

export const AboutPracticeSection: FC = () => {
  return (
    <section className={styles.section} aria-labelledby="practice-heading">
      <div className="container-wide">
        <div className={styles.sectionLead}>
          <span className={styles.leadBullet} aria-hidden="true" />
          Studio in Practice
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.headingCol}>
            <h2 id="practice-heading" className={styles.title}>
              Factual, Disciplined Collaboration
            </h2>
            <p className={styles.subtitle}>
              An independent studio structured for depth, direct dialogue, and uncompromised focus.
            </p>
          </div>

          <div className={styles.practicesList}>
            <div className={styles.practiceItem}>
              <span className={styles.itemIndex}>01</span>
              <div className={styles.itemContent}>
                <h3 className={styles.itemTitle}>Direct Principal Collaboration</h3>
                <p className={styles.itemDesc}>
                  You work directly with the designers and engineers shaping your system. There are
                  no intermediary account managers, sales layers, or outsourced handoffs. Every
                  conversation takes place directly with the people crafting the work.
                </p>
              </div>
            </div>

            <div className={styles.practiceItem}>
              <span className={styles.itemIndex}>02</span>
              <div className={styles.itemContent}>
                <h3 className={styles.itemTitle}>Limited Concurrent Commissions</h3>
                <p className={styles.itemDesc}>
                  We intentionally limit our active studio schedule to a small number of concurrent
                  engagements. This discipline ensures adequate cognitive space to immerse ourselves
                  in your project's context rather than rushing through superficial deliverables.
                </p>
              </div>
            </div>

            <div className={styles.practiceItem}>
              <span className={styles.itemIndex}>03</span>
              <div className={styles.itemContent}>
                <h3 className={styles.itemTitle}>Deliberate Iteration &amp; Editorial Rigor</h3>
                <p className={styles.itemDesc}>
                  We believe in presenting considered, defensible solutions rather than twenty
                  half-baked options. Every presentation is accompanied by the underlying rationale:
                  why this grid works, how this typography scales, and why this constraint was
                  chosen.
                </p>
              </div>
            </div>

            <div className={styles.practiceItem}>
              <span className={styles.itemIndex}>04</span>
              <div className={styles.itemContent}>
                <h3 className={styles.itemTitle}>Complete Technical Transparency</h3>
                <p className={styles.itemDesc}>
                  All code is clean, modular, typed, and accessible. All print files adhere strictly
                  to press standards and physical ink tolerances. We deliver clean, self-sustaining
                  systems with comprehensive documentation so your internal team can operate them
                  with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
