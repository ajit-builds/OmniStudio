import type { FC } from 'react';
import styles from './AboutPOVSection.module.css';

export const AboutPOVSection: FC = () => {
  return (
    <header className={styles.section} aria-labelledby="about-pov-heading">
      <div className="container-wide">
        {/* Breadcrumbs & Status Bar */}
        <div className={styles.metaRow}>
          <div className={styles.breadcrumbs}>
            <span>Studio Omni</span>
            <span className={styles.divider}>/</span>
            <span className={styles.current}>Philosophy &amp; Ethos</span>
          </div>
          <div className={styles.systemMetrics}>
            <span className={styles.statusDot} aria-hidden="true" />
            <span>Foundational Axiom / Core Point of View</span>
          </div>
        </div>

        {/* Primary Typographic Gesture */}
        <div className={styles.heroGrid}>
          <div className={styles.titleColumn}>
            <div className={styles.sectionLead}>
              <span className={styles.leadBullet} aria-hidden="true" />
              Point of View
            </div>
            <h1 id="about-pov-heading" className={styles.title}>
              WE SHAPE THE <span className={styles.titleItalic}>Invisible</span>
            </h1>
            <p className={styles.subtitle}>Through rigorous, design-first systems.</p>
          </div>

          <div className={styles.statementColumn}>
            <p className={styles.leadParagraph}>
              We believe meaningful design is rarely an accident of styling. It is the visible
              outcome of an underlying architecture: strategy, relationships, structural
              constraints, and deliberate decisions made beneath the surface.
            </p>
            <p className={styles.subParagraph}>
              Before a letterform is placed or an interface is programmed, we examine the invisible
              geometry that holds an idea together. When the foundation is sound, the resulting work
              carries an enduring, unshakeable authority.
            </p>
          </div>
        </div>

        {/* Subsurface Geometric Caliper Device */}
        <div className={styles.diagramWrapper} aria-hidden="true">
          <svg
            className={styles.diagramSvg}
            viewBox="0 0 1200 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Horizontal Baseline Axis */}
            <line x1="40" y1="90" x2="1160" y2="90" stroke="#D8D2C4" strokeWidth="1" />
            <line
              x1="40"
              y1="45"
              x2="1160"
              y2="45"
              stroke="#D8D2C4"
              strokeWidth="0.5"
              strokeDasharray="4 4"
            />
            <line
              x1="40"
              y1="135"
              x2="1160"
              y2="135"
              stroke="#D8D2C4"
              strokeWidth="0.5"
              strokeDasharray="4 4"
            />

            {/* Subsurface Marker 01: Inquiry */}
            <circle cx="160" cy="90" r="28" stroke="#242522" strokeWidth="1.5" />
            <circle cx="160" cy="90" r="6" fill="#B6503B" />
            <text
              x="160"
              y="165"
              textAnchor="middle"
              fill="#8C8E85"
              fontFamily="JetBrains Mono, monospace"
              fontSize="11"
              letterSpacing="1.5"
            >
              01 / LATENT INQUIRY
            </text>

            {/* Connecting Vector */}
            <line x1="200" y1="90" x2="480" y2="90" stroke="#242522" strokeWidth="1.5" />

            {/* Subsurface Marker 02: Structural Rules */}
            <rect x="490" y="65" width="50" height="50" stroke="#242522" strokeWidth="1.5" />
            <rect x="507" y="82" width="16" height="16" fill="#242522" />
            <text
              x="515"
              y="165"
              textAnchor="middle"
              fill="#8C8E85"
              fontFamily="JetBrains Mono, monospace"
              fontSize="11"
              letterSpacing="1.5"
            >
              02 / SYSTEMIC GOVERNANCE
            </text>

            {/* Connecting Vector */}
            <line x1="550" y1="90" x2="830" y2="90" stroke="#242522" strokeWidth="1.5" />

            {/* Subsurface Marker 03: Visible Outcome */}
            <polygon points="870,60 900,120 840,120" stroke="#242522" strokeWidth="1.5" />
            <circle cx="870" cy="100" r="5" fill="#B6503B" />
            <text
              x="870"
              y="165"
              textAnchor="middle"
              fill="#8C8E85"
              fontFamily="JetBrains Mono, monospace"
              fontSize="11"
              letterSpacing="1.5"
            >
              03 / VISIBLE EXPRESSION
            </text>
          </svg>
        </div>
      </div>
    </header>
  );
};
