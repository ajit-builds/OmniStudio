import type { FC } from 'react';
import styles from './ServicesIntersectionsSection.module.css';

export const ServicesIntersectionsSection: FC = () => {
  return (
    <section className={styles.section} aria-labelledby="intersections-heading">
      <div className="container-wide">
        <div className={styles.inner}>
          <div className={styles.headerGroup}>
            <div className={styles.sectionLead}>
              <span className={styles.leadBullet} aria-hidden="true" />
              Omni Construction System
            </div>
            <h2 id="intersections-heading" className={styles.title}>
              How the Disciplines Intersect
            </h2>
            <p className={styles.subtitle}>
              True distinction occurs at the intersections—where identity rules govern digital code,
              and editorial pacing structures interactive journeys.
            </p>
          </div>

          <div className={styles.diagramAndNarrative}>
            {/* Architectural Tripartite Venn / Intersection Vector */}
            <div className={styles.diagramWrapper} aria-label="Discipline intersection diagram">
              <svg
                className={styles.diagramSvg}
                viewBox="0 0 600 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Discipline 1 Circle: Identity Systems (Top) */}
                <circle
                  cx="300"
                  cy="190"
                  r="130"
                  stroke="#242522"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />

                {/* Discipline 2 Circle: Digital Experiences (Bottom Left) */}
                <circle cx="220" cy="320" r="130" stroke="#242522" strokeWidth="1.5" />

                {/* Discipline 3 Circle: Editorial & Campaigns (Bottom Right) */}
                <circle cx="380" cy="320" r="130" stroke="#242522" strokeWidth="1.5" />

                {/* Central Intersection Focal Core: Omni Unified System */}
                <circle cx="300" cy="275" r="22" fill="#B6503B" />
                <circle cx="300" cy="275" r="32" stroke="#B6503B" strokeWidth="1" fill="none" />

                {/* Node Labels */}
                <text
                  x="300"
                  y="95"
                  textAnchor="middle"
                  fill="#242522"
                  fontFamily="Antonio, sans-serif"
                  fontSize="16"
                  fontWeight="bold"
                  letterSpacing="1"
                >
                  IDENTITY SYSTEMS
                </text>
                <text
                  x="300"
                  y="115"
                  textAnchor="middle"
                  fill="#8C8E85"
                  fontFamily="JetBrains Mono, monospace"
                  fontSize="10"
                >
                  TYPOGRAPHY &amp; TOKENS
                </text>

                <text
                  x="130"
                  y="420"
                  textAnchor="middle"
                  fill="#242522"
                  fontFamily="Antonio, sans-serif"
                  fontSize="16"
                  fontWeight="bold"
                  letterSpacing="1"
                >
                  DIGITAL EXPERIENCES
                </text>
                <text
                  x="130"
                  y="440"
                  textAnchor="middle"
                  fill="#8C8E85"
                  fontFamily="JetBrains Mono, monospace"
                  fontSize="10"
                >
                  KINETIC CODE &amp; 3D SPATIAL
                </text>

                <text
                  x="470"
                  y="420"
                  textAnchor="middle"
                  fill="#242522"
                  fontFamily="Antonio, sans-serif"
                  fontSize="16"
                  fontWeight="bold"
                  letterSpacing="1"
                >
                  EDITORIAL ARCHITECTURE
                </text>
                <text
                  x="470"
                  y="440"
                  textAnchor="middle"
                  fill="#8C8E85"
                  fontFamily="JetBrains Mono, monospace"
                  fontSize="10"
                >
                  CADENCE &amp; SUBSTANCE
                </text>

                {/* Central Core Label */}
                <text
                  x="300"
                  y="280"
                  textAnchor="middle"
                  fill="#F1EDE3"
                  fontFamily="Antonio, sans-serif"
                  fontSize="11"
                  fontWeight="bold"
                  letterSpacing="1"
                >
                  OMNI
                </text>
              </svg>
            </div>

            {/* Three Intersectional Axioms */}
            <div className={styles.intersectionsList}>
              <div className={styles.intersectionItem}>
                <span className={styles.intersectionTag}>Intersection 01</span>
                <h3 className={styles.itemTitle}>Identity × Digital Platform</h3>
                <p className={styles.itemText}>
                  Rather than handing off brand guidelines as a static PDF, the identity rules
                  directly become production TypeScript tokens, Three.js vector materials, and fluid
                  CSS styles—ensuring zero visual compromise in the browser.
                </p>
              </div>

              <div className={styles.intersectionItem}>
                <span className={styles.intersectionTag}>Intersection 02</span>
                <h3 className={styles.itemTitle}>Digital × Editorial Cadence</h3>
                <p className={styles.itemText}>
                  We apply the strict baseline registration and generous marginalia of print
                  monographs to responsive web interfaces, creating digital reading environments
                  that command sustained contemplation instead of frantic skimming.
                </p>
              </div>

              <div className={styles.intersectionItem}>
                <span className={styles.intersectionTag}>Intersection 03</span>
                <h3 className={styles.itemTitle}>Editorial × Identity Permanence</h3>
                <p className={styles.itemText}>
                  An identity is solidified when embodied in fine printed catalogs, tactile paper
                  substrates, and exhibition ephemera. Publication design gives physical durability
                  and cultural prestige to the studio brand system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
