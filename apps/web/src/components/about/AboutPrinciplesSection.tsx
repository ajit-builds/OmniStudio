import type { FC } from 'react';
import { STUDIO_PRINCIPLES } from '../../content/principles.js';
import styles from './AboutPrinciplesSection.module.css';

export const AboutPrinciplesSection: FC = () => {
  return (
    <section className={styles.section} aria-labelledby="principles-heading">
      <div className="container-wide">
        <div className={styles.sectionHeader}>
          <div className={styles.sectionLead}>
            <span className={styles.leadBullet} aria-hidden="true" />
            Decision Architecture
          </div>
          <h2 id="principles-heading" className={styles.title}>
            Five Governing Principles
          </h2>
          <p className={styles.subtitle}>
            Axioms that dictate how we evaluate typography, allocate space, and author systems.
          </p>
        </div>

        {/* Asymmetrical Editorial Stack with Changing Alignment */}
        <div className={styles.principlesStack}>
          {STUDIO_PRINCIPLES.map((principle, index) => {
            const isOffset = index % 2 === 1;

            return (
              <article
                key={principle.id}
                className={`${styles.principleCard} ${isOffset ? styles.cardOffset : ''}`}
                aria-labelledby={`principle-title-${principle.id}`}
              >
                <div className={styles.caliperTl} aria-hidden="true" />
                <div className={styles.caliperBr} aria-hidden="true" />

                <div className={styles.cardHeader}>
                  <span className={styles.numeral}>{principle.numeral}</span>
                  <span className={styles.coordinate}>{principle.coordinate}</span>
                </div>

                <div className={styles.cardContent}>
                  <h3 id={`principle-title-${principle.id}`} className={styles.principleTitle}>
                    {principle.title}{' '}
                    {principle.italicWord && (
                      <span className={styles.italicWord}>{principle.italicWord}</span>
                    )}
                  </h3>

                  <p className={styles.statementText}>{principle.statement}</p>
                  <p className={styles.rationaleText}>{principle.rationale}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
