import type { FC } from 'react';
import styles from './ServicesIntroSection.module.css';

export const ServicesIntroSection: FC = () => {
  return (
    <header className={styles.section} aria-labelledby="services-intro-heading">
      <div className="container-wide">
        {/* Breadcrumbs & Status Bar */}
        <div className={styles.metaRow}>
          <div className={styles.breadcrumbs}>
            <span>Studio Omni</span>
            <span className={styles.divider}>/</span>
            <span className={styles.current}>Services &amp; Offerings</span>
          </div>
          <div className={styles.systemMetrics}>
            <span className={styles.statusDot} aria-hidden="true" />
            <span>Three Interconnected Capability Families</span>
          </div>
        </div>

        {/* Primary Typographic Gesture */}
        <div className={styles.heroGrid}>
          <div className={styles.titleColumn}>
            <div className={styles.sectionLead}>
              <span className={styles.leadBullet} aria-hidden="true" />
              Connected Capabilities
            </div>
            <h1 id="services-intro-heading" className={styles.title}>
              DISCIPLINE <span className={styles.titleItalic}>Catalog</span>
            </h1>
            <p className={styles.subtitle}>
              Tangible systems engineered across identity, digital architecture, and publication.
            </p>
          </div>

          <div className={styles.statementColumn}>
            <p className={styles.leadParagraph}>
              We do not sell isolated design assets or disjointed creative fragments. We engineer
              complete, connected systems that unify how an organization looks, functions, and
              communicates across all touchpoints.
            </p>
            <p className={styles.subParagraph}>
              Whether partnering on a foundational visual identity, a custom WebGL digital archive,
              or a tri-annual print monograph, every engagement is grounded in clear scoping,
              meticulous typographic execution, and direct principal access.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
