import type { FC } from 'react';
import styles from './PhilosophySection.module.css';

export const PhilosophySection: FC = () => {
  return (
    <section id="philosophy" className={styles.section} aria-labelledby="philosophy-heading">
      <div className="container-wide">
        <div className={styles.inner}>
          {/* Main Manifesto Statement */}
          <div className={styles.manifestoBlock}>
            <div className={styles.sectionLead}>
              <span className={styles.leadBullet} aria-hidden="true" />
              Studio Philosophy
            </div>

            <h2 id="philosophy-heading" className={styles.manifestoHeadline}>
              “Meaningful design emerges from the systems, relationships, and decisions beneath the
              surface.”
            </h2>

            <p className={styles.manifestoSupport}>
              We reject the superficial cycle of cosmetic agency redesigns. True distinction is not
              applied as a decorative veneer; it is engineered through mathematical proportions,
              typographic hierarchy, and intentional negative space.
            </p>
          </div>

          {/* 3 Pillars of Studio Omni */}
          <div className={styles.pillarsGrid}>
            <div className={styles.pillarCard}>
              <span className={styles.pillarNumeral}>Principle 01</span>
              <h3 className={styles.pillarTitle}>The Invisible Grid</h3>
              <p className={styles.pillarText}>
                Structure precedes expression. Before any visual mark is drawn, we establish the
                invisible armature—proportions, fluid scales, and spatial rhythms that bring
                harmonious order to chaos.
              </p>
            </div>

            <div className={styles.pillarCard}>
              <span className={styles.pillarNumeral}>Principle 02</span>
              <h3 className={styles.pillarTitle}>Material Restraint</h3>
              <p className={styles.pillarText}>
                True intellectual confidence requires no synthetic ornamentation. We eliminate
                transient noise, glowing borders, and decorative filler in favor of bold typography
                and honest paper materiality.
              </p>
            </div>

            <div className={styles.pillarCard}>
              <span className={styles.pillarNumeral}>Principle 03</span>
              <h3 className={styles.pillarTitle}>Enduring Systems</h3>
              <p className={styles.pillarText}>
                We do not design for the current news cycle. Our visual identities, publication
                layouts, and digital architectures are built as resilient frameworks intended to
                endure and evolve over decades.
              </p>
            </div>
          </div>

          {/* Constructivist Alignment Diagram */}
          <div
            className={styles.diagramBox}
            role="img"
            aria-label="Omni Construction System: Structural Alignment Diagram"
          >
            <div className="crop-corner-tl" aria-hidden="true" />
            <div className="crop-corner-tr" aria-hidden="true" />
            <div className="crop-corner-bl" aria-hidden="true" />
            <div className="crop-corner-br" aria-hidden="true" />

            <svg
              className={styles.diagramSvg}
              viewBox="0 0 1000 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Horizontal Datum Lines */}
              <line x1="40" y1="60" x2="960" y2="60" stroke="#242522" strokeWidth="1.25" />
              <line
                x1="40"
                y1="30"
                x2="960"
                y2="30"
                stroke="#D8D2C4"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              <line
                x1="40"
                y1="90"
                x2="960"
                y2="90"
                stroke="#D8D2C4"
                strokeWidth="1"
                strokeDasharray="4 4"
              />

              {/* Structural Node 1: Construct */}
              <circle cx="160" cy="60" r="6" fill="#242522" />
              <line x1="160" y1="15" x2="160" y2="105" stroke="#242522" strokeWidth="1" />
              <text
                x="180"
                y="55"
                fontFamily="Plus Jakarta Sans, sans-serif"
                fontSize="11"
                fontWeight="600"
                letterSpacing="0.12em"
                fill="#242522"
              >
                01 / CONSTRUCT [STRUCTURAL ANCHOR]
              </text>

              {/* Structural Node 2: Intersect */}
              <circle cx="500" cy="60" r="6" fill="#242522" />
              <line x1="500" y1="15" x2="500" y2="105" stroke="#242522" strokeWidth="1" />
              <text
                x="520"
                y="55"
                fontFamily="Plus Jakarta Sans, sans-serif"
                fontSize="11"
                fontWeight="600"
                letterSpacing="0.12em"
                fill="#242522"
              >
                02 / INTERSECT [MATHEMATICAL RATIOS]
              </text>

              {/* Structural Node 3: Reveal (Vermilion) */}
              <circle cx="820" cy="60" r="7" fill="#B6503B" />
              <line x1="820" y1="15" x2="820" y2="105" stroke="#B6503B" strokeWidth="1.5" />
              <text
                x="840"
                y="55"
                fontFamily="Plus Jakarta Sans, sans-serif"
                fontSize="11"
                fontWeight="600"
                letterSpacing="0.12em"
                fill="#B6503B"
              >
                03 / REVEAL [RESTRAINT]
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
