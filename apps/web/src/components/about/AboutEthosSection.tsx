import type { FC } from 'react';
import styles from './AboutEthosSection.module.css';

export const AboutEthosSection: FC = () => {
  return (
    <section className={styles.section} aria-labelledby="about-ethos-heading">
      <div className="container-wide">
        <div className={styles.grid}>
          {/* Left Column: Conceptual Philosophy */}
          <div className={styles.leadCol}>
            <div className={styles.sectionLead}>
              <span className={styles.leadBullet} aria-hidden="true" />
              The Meaning of Omni
            </div>
            <h2 id="about-ethos-heading" className={styles.title}>
              The Continuum of Disciplines
            </h2>
            <p className={styles.leadQuote}>
              “Omni represents the totality of relationships between form, interface, and text—a
              refusal to treat design as fragmented silos.”
            </p>
          </div>

          {/* Right Column: Narrative of Interconnections */}
          <div className={styles.narrativeCol}>
            <div className={styles.paragraphBlock}>
              <h3 className={styles.subheading}>Why the Three Disciplines Belong Together</h3>
              <p className={styles.bodyText}>
                Traditional creative agencies divide branding, web development, and publication
                design into isolated departments. The result is often an identity that breaks when
                coded into an interactive browser, or a website that lacks the typographic cadence
                of fine editorial prose.
              </p>
              <p className={styles.bodyText}>
                At Studio Omni, we approach these three disciplines as one continuous architectural
                exercise. An identity system establishes the typographic DNA and tonal coordinates;
                digital experiences translate those rules into tactile kinetic reality; and
                editorial publications provide the physical substance and pacing that make an
                institution permanent.
              </p>
            </div>

            <div className={styles.disciplineTensionBox}>
              <div className={styles.disciplineRow}>
                <span className={styles.disciplineName}>Identity Systems</span>
                <span className={styles.disciplineRole}>The Root Grammar</span>
              </div>
              <div className={styles.disciplineDivider} aria-hidden="true" />
              <div className={styles.disciplineRow}>
                <span className={styles.disciplineName}>Digital Experiences</span>
                <span className={styles.disciplineRole}>The Spatial Interface</span>
              </div>
              <div className={styles.disciplineDivider} aria-hidden="true" />
              <div className={styles.disciplineRow}>
                <span className={styles.disciplineName}>Editorial &amp; Campaigns</span>
                <span className={styles.disciplineRole}>The Cultural Substance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
