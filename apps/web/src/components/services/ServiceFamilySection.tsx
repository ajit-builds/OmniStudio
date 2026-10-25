import type { FC } from 'react';
import { SERVICE_FAMILIES } from '../../content/services.js';
import { ActionLink } from '../ui/ActionLink.js';
import { getWorkDetailPath } from '../../lib/routePaths.js';
import styles from './ServiceFamilySection.module.css';

export const ServiceFamilySection: FC = () => {
  return (
    <section className={styles.section} aria-labelledby="service-families-heading">
      <div className="container-wide">
        <div className={styles.sectionHeader}>
          <div className={styles.sectionLead}>
            <span className={styles.leadBullet} aria-hidden="true" />
            Core Disciplines
          </div>
          <h2 id="service-families-heading" className={styles.title}>
            Three Disciplines in Depth
          </h2>
          <p className={styles.subtitle}>
            Explore our scope of capabilities, concrete deliverables, and systemic value across each
            family.
          </p>
        </div>

        <div className={styles.familiesList}>
          {SERVICE_FAMILIES.map((family) => (
            <article
              key={family.slug}
              id={family.slug}
              className={styles.familyCard}
              aria-labelledby={`family-title-${family.slug}`}
            >
              {/* Left Column: Title, Narrative & Scope Guidance */}
              <div className={styles.leftCol}>
                <div className={styles.familyTopRow}>
                  <span className={styles.familyNumeral}>{family.numeral}</span>
                  <span className={styles.familyCategory}>Service Family</span>
                </div>

                <h3 id={`family-title-${family.slug}`} className={styles.familyTitle}>
                  {family.title}
                </h3>
                <p className={styles.familyTagline}>{family.tagline}</p>
                <p className={styles.familyDescription}>{family.description}</p>

                {family.scopeNote && (
                  <div className={styles.scopeNoteBox}>
                    <span className={styles.scopeNoteLabel}>Scope Note:</span>
                    <p className={styles.scopeNoteText}>{family.scopeNote}</p>
                  </div>
                )}

                <div className={styles.valueBox}>
                  <span className={styles.valueLabel}>Strategic Value:</span>
                  <p className={styles.valueText}>{family.valueProposition}</p>
                </div>

                {/* Related Systems Links */}
                {family.relatedProjectSlugs.length > 0 && (
                  <div className={styles.relatedSection}>
                    <span className={styles.relatedLabel}>Case Study Evidence:</span>
                    <div className={styles.relatedLinks}>
                      {family.relatedProjectSlugs.map((slug) => (
                        <ActionLink
                          key={slug}
                          to={getWorkDetailPath(slug)}
                          variant="underline"
                          size="sm"
                        >
                          View {slug.replace('-', ' ')} →
                        </ActionLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Concrete Deliverables & Suitability */}
              <div className={styles.rightCol}>
                <div className={styles.deliverablesBox}>
                  <h4 className={styles.boxHeading}>Potential Scope Deliverables</h4>
                  <ul className={styles.deliverablesList}>
                    {family.deliverables.map((item, idx) => (
                      <li key={idx} className={styles.deliverableItem}>
                        <span className={styles.itemBullet} aria-hidden="true">
                          0{idx + 1}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.suitableBox}>
                  <h4 className={styles.boxHeading}>Calibrated For</h4>
                  <ul className={styles.suitableList}>
                    {family.suitableFor.map((audience, idx) => (
                      <li key={idx} className={styles.suitableItem}>
                        <span className={styles.suitableBullet} aria-hidden="true">
                          —
                        </span>
                        <span>{audience}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
