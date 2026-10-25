import type { FC } from 'react';
import styles from './AboutMethodologySection.module.css';

export const AboutMethodologySection: FC = () => {
  return (
    <section className={styles.section} aria-labelledby="methodology-heading">
      <div className="container-wide">
        <div className={styles.inner}>
          <div className={styles.headerGroup}>
            <div className={styles.sectionLead}>
              <span className={styles.leadBullet} aria-hidden="true" />
              Translation Methodology
            </div>
            <h2 id="methodology-heading" className={styles.title}>
              Between Thinking &amp; Making
            </h2>
            <p className={styles.subtitle}>
              Strategy without structural execution is empty theory; execution without strategy is
              arbitrary decoration.
            </p>
          </div>

          <div className={styles.narrativeGrid}>
            <div className={styles.textBlock}>
              <h3 className={styles.blockTitle}>01 / Strategic Codification</h3>
              <p className={styles.blockText}>
                We begin by translating qualitative institutional objectives into hard mathematical
                constraints: column grids, typographic scaling ratios, and tonal palettes. By
                codifying intent into an explicit ruleset, decisions cease to be matters of
                subjective taste and become structural necessities.
              </p>
            </div>

            <div className={styles.textBlock}>
              <h3 className={styles.blockTitle}>02 / Artisanal Implementation</h3>
              <p className={styles.blockText}>
                We do not hand off flat mockups to third-party factories. We write our own semantic
                React markup, tune our own Three.js shaders, and calibrate our own print foil
                plates. Because the architect and the builder are the same team, every micron and
                millisecond is held to the same standard.
              </p>
            </div>
          </div>

          {/* Purposeful Architectural Transformation Diagram */}
          <div
            className={styles.diagramContainer}
            aria-label="Thinking to Making translation diagram"
          >
            <svg
              className={styles.diagramSvg}
              viewBox="0 0 1000 320"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Coordinate Grid Box */}
              <rect
                x="40"
                y="40"
                width="920"
                height="240"
                stroke="#D8D2C4"
                strokeWidth="1"
                fill="none"
              />
              <line
                x1="40"
                y1="160"
                x2="960"
                y2="160"
                stroke="#D8D2C4"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
              <line x1="340" y1="40" x2="340" y2="280" stroke="#D8D2C4" strokeWidth="1" />
              <line x1="660" y1="40" x2="660" y2="280" stroke="#D8D2C4" strokeWidth="1" />

              {/* Col 1: Inquiry & Intent */}
              <circle cx="190" cy="110" r="35" stroke="#242522" strokeWidth="1.5" />
              <line x1="155" y1="110" x2="225" y2="110" stroke="#B6503B" strokeWidth="1" />
              <line x1="190" y1="75" x2="190" y2="145" stroke="#B6503B" strokeWidth="1" />
              <text
                x="190"
                y="210"
                textAnchor="middle"
                fill="#242522"
                fontFamily="Antonio, sans-serif"
                fontSize="18"
                fontWeight="bold"
                letterSpacing="1"
              >
                INQUIRY &amp; TENSION
              </text>
              <text
                x="190"
                y="235"
                textAnchor="middle"
                fill="#8C8E85"
                fontFamily="Plus Jakarta Sans, sans-serif"
                fontSize="12"
              >
                Cultural context &amp; latent problem
              </text>

              {/* Col 2: The Armature / Rules */}
              <rect x="470" y="80" width="60" height="60" stroke="#242522" strokeWidth="1.5" />
              <line x1="470" y1="80" x2="530" y2="140" stroke="#242522" strokeWidth="1" />
              <circle cx="500" cy="110" r="12" fill="#B6503B" />
              <text
                x="500"
                y="210"
                textAnchor="middle"
                fill="#242522"
                fontFamily="Antonio, sans-serif"
                fontSize="18"
                fontWeight="bold"
                letterSpacing="1"
              >
                SYSTEMIC ARMATURE
              </text>
              <text
                x="500"
                y="235"
                textAnchor="middle"
                fill="#8C8E85"
                fontFamily="Plus Jakarta Sans, sans-serif"
                fontSize="12"
              >
                Grid, type hierarchy &amp; tokens
              </text>

              {/* Col 3: The Artifact */}
              <polygon points="810,75 845,145 775,145" fill="#242522" />
              <circle cx="810" cy="120" r="8" fill="#F1EDE3" />
              <circle cx="810" cy="120" r="3" fill="#B6503B" />
              <text
                x="810"
                y="210"
                textAnchor="middle"
                fill="#242522"
                fontFamily="Antonio, sans-serif"
                fontSize="18"
                fontWeight="bold"
                letterSpacing="1"
              >
                PHYSICAL / DIGITAL REALITY
              </text>
              <text
                x="810"
                y="235"
                textAnchor="middle"
                fill="#8C8E85"
                fontFamily="Plus Jakarta Sans, sans-serif"
                fontSize="12"
              >
                Tactile print &amp; artisanal code
              </text>

              {/* Directional Connector Arrows */}
              <path d="M 310 110 L 330 110" stroke="#B6503B" strokeWidth="2" />
              <path d="M 630 110 L 650 110" stroke="#B6503B" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
