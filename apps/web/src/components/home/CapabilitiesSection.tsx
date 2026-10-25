import type { FC } from 'react';
import { CAPABILITIES } from '../../content/capabilities.js';
import { ActionLink } from '../ui/ActionLink.js';
import { ROUTES } from '../../lib/routePaths.js';
import styles from './CapabilitiesSection.module.css';

export const CapabilitiesSection: FC = () => {
  return (
    <section id="capabilities" className={styles.section} aria-labelledby="capabilities-heading">
      <div className="container-wide">
        {/* Header */}
        <div className={styles.headerRow}>
          <div className={styles.titleGroup}>
            <div className={styles.sectionLead}>
              <span className={styles.leadBullet} aria-hidden="true" />
              Three Connected Disciplines
            </div>
            <h2 id="capabilities-heading" className={styles.title}>
              Capabilities & Systems
            </h2>
            <p className={styles.subtitle}>
              Unified architecture across brand identity, digital engineering, and publication.
            </p>
          </div>
          <p className={styles.connectingCopy}>
            Identity informs digital interface architecture, and digital interactions feed back into
            tangible publication systems. We do not partition our studio into isolated silos.
          </p>
        </div>

        {/* Staggered Capabilities Display */}
        <div className={styles.capabilitiesGrid}>
          {CAPABILITIES.map((cap) => (
            <article
              key={cap.id}
              className={styles.capabilityBlock}
              aria-label={`Capability: ${cap.title}`}
            >
              <div className="crop-corner-tl" aria-hidden="true" />
              <div className="crop-corner-tr" aria-hidden="true" />
              <div className="crop-corner-bl" aria-hidden="true" />
              <div className="crop-corner-br" aria-hidden="true" />

              <div className={styles.capabilityNumeral} aria-hidden="true">
                {cap.numeral}
              </div>

              <div className={styles.capabilityMain}>
                <h3 className={styles.capTitle}>{cap.title}</h3>
                <p className={styles.capStatement}>{cap.statement}</p>
                <p className={styles.capDescription}>{cap.description}</p>
              </div>

              <div className={styles.deliverablesCol}>
                <span className={styles.deliverableHeading}>System Deliverables</span>
                <ul className={styles.deliverableList}>
                  {cap.deliverables.map((item, idx) => (
                    <li key={idx} className={styles.deliverableItem}>
                      <span className={styles.bullet} aria-hidden="true">
                        —
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* Explore Services Link */}
        <div className={styles.exploreRow}>
          <ActionLink to={ROUTES.SERVICES} variant="solid" size="lg">
            Explore Full Services Architecture
          </ActionLink>
        </div>
      </div>
    </section>
  );
};
