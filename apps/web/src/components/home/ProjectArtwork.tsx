import type { FC } from 'react';
import styles from './ProjectArtwork.module.css';

export type ArtworkType =
  | 'arch-form'
  | 'katalog-grid'
  | 'monolith-system'
  | 'chronicle-spread'
  | 'strata-topo'
  | 'kinetic-type'
  | 'grid-specimen'
  | 'type-specimen'
  | 'spatial-elevation'
  | 'component-matrix'
  | string;

interface ProjectArtworkProps {
  type: ArtworkType;
  title: string;
  aspect?: 'default' | 'square' | 'wide' | 'tall';
  className?: string;
  caption?: string;
}

export const ProjectArtwork: FC<ProjectArtworkProps> = ({
  type,
  title,
  aspect = 'default',
  className = '',
  caption,
}) => {
  const aspectClass = {
    default: '',
    square: styles.aspectSquare,
    wide: styles.aspectWide,
    tall: styles.aspectTall,
  }[aspect];

  return (
    <figure className={styles.figureWrapper}>
      <div
        className={`${styles.artworkBox} ${aspectClass} ${className}`}
        role="img"
        aria-label={`Architectural composition for ${title}`}
      >
        <div className={styles.cornerTl} aria-hidden="true" />
        <div className={styles.cornerTr} aria-hidden="true" />
        <div className={styles.cornerBl} aria-hidden="true" />
        <div className={styles.cornerBr} aria-hidden="true" />

        <span className={styles.projectBadge}>Concept Architecture</span>

        {/* 1. Arch Form: Architectural Pavilion & Cast Monolith */}
        {type === 'arch-form' && (
          <svg
            className={styles.svg}
            viewBox="0 0 600 375"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="60" y1="50" x2="60" y2="325" stroke="#D8D2C4" strokeWidth="1" />
            <line x1="160" y1="50" x2="160" y2="325" stroke="#D8D2C4" strokeWidth="1" />
            <line x1="260" y1="50" x2="260" y2="325" stroke="#D8D2C4" strokeWidth="1" />
            <line x1="360" y1="50" x2="360" y2="325" stroke="#D8D2C4" strokeWidth="1" />
            <line x1="460" y1="50" x2="460" y2="325" stroke="#D8D2C4" strokeWidth="1" />

            <rect x="180" y="80" width="90" height="200" fill="#242522" />
            <rect x="290" y="120" width="70" height="160" fill="#595B55" />
            <circle cx="420" cy="180" r="65" fill="#242522" />
            <circle cx="420" cy="180" r="30" fill="#F1EDE3" />

            <line x1="120" y1="280" x2="280" y2="120" stroke="#242522" strokeWidth="2" />
            <line x1="145" y1="295" x2="305" y2="135" stroke="#242522" strokeWidth="1" />

            <circle cx="480" cy="130" r="6" fill="#B6503B" />
            <line
              x1="480"
              y1="100"
              x2="480"
              y2="160"
              stroke="#B6503B"
              strokeWidth="1"
              strokeDasharray="2 2"
            />
            <circle cx="100" cy="100" r="4" stroke="#242522" strokeWidth="1" />
          </svg>
        )}

        {/* 2. Katalog Grid: Editorial Architecture */}
        {type === 'katalog-grid' && (
          <svg
            className={styles.svg}
            viewBox="0 0 600 375"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="80"
              y="60"
              width="120"
              height="255"
              fill="none"
              stroke="#242522"
              strokeWidth="1"
            />
            <rect
              x="240"
              y="60"
              width="120"
              height="255"
              fill="none"
              stroke="#242522"
              strokeWidth="1"
            />
            <rect x="400" y="60" width="120" height="255" fill="#242522" />

            <line x1="100" y1="90" x2="180" y2="90" stroke="#242522" strokeWidth="2" />
            <line x1="100" y1="110" x2="170" y2="110" stroke="#8C8E85" strokeWidth="1" />
            <line x1="100" y1="125" x2="165" y2="125" stroke="#8C8E85" strokeWidth="1" />
            <line x1="100" y1="140" x2="175" y2="140" stroke="#8C8E85" strokeWidth="1" />

            <circle cx="300" cy="130" r="35" fill="#242522" />
            <line x1="260" y1="200" x2="340" y2="200" stroke="#8C8E85" strokeWidth="1" />
            <line x1="260" y1="215" x2="330" y2="215" stroke="#8C8E85" strokeWidth="1" />

            <circle cx="460" cy="130" r="28" fill="#F1EDE3" />
            <circle cx="460" cy="130" r="8" fill="#B6503B" />
            <line x1="420" y1="200" x2="500" y2="200" stroke="#DDD8CB" strokeWidth="1" />
            <line x1="420" y1="215" x2="480" y2="215" stroke="#DDD8CB" strokeWidth="1" />

            <circle cx="140" cy="260" r="5" fill="#B6503B" />
          </svg>
        )}

        {/* 3. Monolith System: Digital Coordinates */}
        {type === 'monolith-system' && (
          <svg
            className={styles.svg}
            viewBox="0 0 600 375"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="60"
              y="50"
              width="480"
              height="275"
              fill="none"
              stroke="#242522"
              strokeWidth="1.25"
            />
            <line x1="60" y1="187.5" x2="540" y2="187.5" stroke="#D8D2C4" strokeWidth="1" />
            <line x1="300" y1="50" x2="300" y2="325" stroke="#D8D2C4" strokeWidth="1" />

            <circle cx="300" cy="187.5" r="70" stroke="#242522" strokeWidth="2" fill="none" />
            <circle cx="300" cy="187.5" r="45" fill="#242522" />
            <circle cx="300" cy="187.5" r="15" fill="#F1EDE3" />

            <rect x="110" y="90" width="60" height="90" fill="#242522" />
            <path d="M 430 90 A 45 45 0 0 1 475 135 L 430 135 Z" fill="#242522" />
            <rect x="430" y="210" width="55" height="75" fill="#595B55" />

            <circle cx="160" cy="250" r="5" fill="#B6503B" />
            <circle cx="160" cy="250" r="12" stroke="#B6503B" strokeWidth="1" fill="none" />
            <line x1="140" y1="250" x2="180" y2="250" stroke="#B6503B" strokeWidth="1" />
            <line x1="160" y1="230" x2="160" y2="270" stroke="#B6503B" strokeWidth="1" />
          </svg>
        )}

        {/* 4. Chronicle Spread: Book Architecture */}
        {type === 'chronicle-spread' && (
          <svg
            className={styles.svg}
            viewBox="0 0 600 375"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="300" y1="40" x2="300" y2="335" stroke="#242522" strokeWidth="1.5" />

            <path d="M 120 187.5 A 75 75 0 0 1 270 187.5 Z" fill="#242522" />
            <line x1="120" y1="230" x2="240" y2="230" stroke="#242522" strokeWidth="1.5" />
            <line x1="120" y1="245" x2="220" y2="245" stroke="#8C8E85" strokeWidth="1" />

            <rect x="340" y="90" width="180" height="2" stroke="#242522" strokeWidth="1" />
            <rect x="340" y="115" width="80" height="120" fill="#242522" />
            <circle cx="470" cy="175" r="40" fill="#595B55" />
            <circle cx="470" cy="175" r="20" fill="#F1EDE3" />

            <rect x="296" y="40" width="8" height="45" fill="#B6503B" />
          </svg>
        )}

        {/* 5. Strata Topo: Topographical Isolines & Geological Stratum */}
        {type === 'strata-topo' && (
          <svg
            className={styles.svg}
            viewBox="0 0 600 375"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Elevation Isolines */}
            <path
              d="M 50 120 Q 180 80 300 130 T 550 110"
              stroke="#D8D2C4"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M 50 160 Q 200 120 330 180 T 550 150"
              stroke="#242522"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M 50 200 Q 170 180 310 230 T 550 200"
              stroke="#595B55"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M 50 240 Q 220 220 340 270 T 550 250"
              stroke="#242522"
              strokeWidth="1.5"
              fill="none"
            />

            {/* Geological Core Stratum Sample */}
            <rect x="140" y="70" width="50" height="235" fill="#242522" />
            <rect x="140" y="130" width="50" height="35" fill="#595B55" />
            <rect x="140" y="200" width="50" height="15" fill="#B6503B" />
            <rect x="140" y="250" width="50" height="40" fill="#8C8E85" />

            {/* Topographical Benchmark Triangles */}
            <polygon points="380,140 395,165 365,165" fill="#242522" />
            <polygon points="450,210 465,235 435,235" fill="#B6503B" />

            {/* Survey Datum Crosshair */}
            <circle cx="280" cy="180" r="24" stroke="#B6503B" strokeWidth="1" fill="none" />
            <line x1="280" y1="150" x2="280" y2="210" stroke="#B6503B" strokeWidth="1" />
            <line x1="250" y1="180" x2="310" y2="180" stroke="#B6503B" strokeWidth="1" />
            <circle cx="280" cy="180" r="3" fill="#B6503B" />
          </svg>
        )}

        {/* 6. Kinetic Type: Parametric Letterform Workbench */}
        {type === 'kinetic-type' && (
          <svg
            className={styles.svg}
            viewBox="0 0 600 375"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Caliper Reference Lines */}
            <line
              x1="60"
              y1="90"
              x2="540"
              y2="90"
              stroke="#B6503B"
              strokeWidth="1"
              strokeDasharray="3 3"
            />
            <line x1="60" y1="150" x2="540" y2="150" stroke="#D8D2C4" strokeWidth="1" />
            <line x1="60" y1="285" x2="540" y2="285" stroke="#242522" strokeWidth="1.5" />

            {/* Constructivist Parametric Glyph "O" */}
            <path
              d="M 230 187.5 C 230 110, 370 110, 370 187.5 C 370 265, 230 265, 230 187.5 Z"
              stroke="#242522"
              strokeWidth="24"
              fill="none"
            />
            <path
              d="M 230 187.5 C 230 110, 370 110, 370 187.5 C 370 265, 230 265, 230 187.5 Z"
              stroke="#F1EDE3"
              strokeWidth="2"
              fill="none"
            />

            {/* Vector Anchor Points & Bezier Handles */}
            <circle cx="230" cy="187.5" r="5" fill="#B6503B" />
            <circle cx="370" cy="187.5" r="5" fill="#B6503B" />
            <circle cx="300" cy="110" r="5" fill="#B6503B" />
            <circle cx="300" cy="265" r="5" fill="#B6503B" />

            <line x1="190" y1="187.5" x2="270" y2="187.5" stroke="#B6503B" strokeWidth="1" />
            <line x1="330" y1="187.5" x2="410" y2="187.5" stroke="#B6503B" strokeWidth="1" />

            {/* Variable Axis Sliders in Artwork */}
            <rect x="90" y="315" width="140" height="4" fill="#D8D2C4" />
            <circle cx="160" cy="317" r="6" fill="#242522" />
            <rect x="270" y="315" width="140" height="4" fill="#D8D2C4" />
            <circle cx="380" cy="317" r="6" fill="#B6503B" />
          </svg>
        )}

        {/* 7. Grid Specimen: Modular Architectural Grid Engine */}
        {type === 'grid-specimen' && (
          <svg
            className={styles.svg}
            viewBox="0 0 600 375"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* 12-Column Architectural System */}
            {[...Array(12)].map((_, i) => (
              <g key={i}>
                <rect x={60 + i * 40} y="50" width="30" height="275" fill="#DDD8CB" opacity="0.5" />
                <line
                  x1={60 + i * 40}
                  y1="50"
                  x2={60 + i * 40}
                  y2="325"
                  stroke="#242522"
                  strokeWidth="0.75"
                />
              </g>
            ))}
            {/* Horizontal Baseline Cadence */}
            {[...Array(8)].map((_, i) => (
              <line
                key={`h-${i}`}
                x1="40"
                y1={70 + i * 32}
                x2="560"
                y2={70 + i * 32}
                stroke="#D8D2C4"
                strokeWidth="0.75"
              />
            ))}
            {/* Active Content Span */}
            <rect
              x="140"
              y="102"
              width="270"
              height="160"
              fill="none"
              stroke="#242522"
              strokeWidth="2"
            />
            <rect x="140" y="102" width="270" height="24" fill="#242522" />
            <circle cx="160" cy="114" r="4" fill="#B6503B" />
          </svg>
        )}

        {/* 8. Type Specimen: Condensed & Serif Font Tension */}
        {type === 'type-specimen' && (
          <svg
            className={styles.svg}
            viewBox="0 0 600 375"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="50" y="45" width="500" height="285" fill="#242522" />
            <text
              x="80"
              y="180"
              fill="#F1EDE3"
              fontFamily="Antonio, sans-serif"
              fontSize="120"
              fontWeight="bold"
              letterSpacing="-2"
            >
              Aa
            </text>
            <text
              x="240"
              y="180"
              fill="#B6503B"
              fontFamily="Newsreader, Georgia, serif"
              fontSize="85"
              fontStyle="italic"
            >
              &amp; System
            </text>
            <line x1="80" y1="210" x2="520" y2="210" stroke="#595B55" strokeWidth="1" />
            <text
              x="80"
              y="250"
              fill="#DDD8CB"
              fontFamily="JetBrains Mono, monospace"
              fontSize="14"
              letterSpacing="2"
            >
              OPTICAL WEIGHT: 700 / TRACKING: -0.02EM / AXIS: CONDENSED
            </text>
            <text
              x="80"
              y="280"
              fill="#8C8E85"
              fontFamily="Plus Jakarta Sans, sans-serif"
              fontSize="13"
            >
              Structured tension between condensed geometric display and expressive editorial serif.
            </text>
          </svg>
        )}

        {/* 9. Spatial Elevation: Architectural Facade Guidelines */}
        {type === 'spatial-elevation' && (
          <svg
            className={styles.svg}
            viewBox="0 0 600 375"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="50" y1="300" x2="550" y2="300" stroke="#242522" strokeWidth="3" />
            <rect
              x="120"
              y="90"
              width="360"
              height="210"
              fill="none"
              stroke="#242522"
              strokeWidth="2"
            />
            {/* Vertical Mullions */}
            <line x1="200" y1="90" x2="200" y2="300" stroke="#595B55" strokeWidth="1.5" />
            <line x1="280" y1="90" x2="280" y2="300" stroke="#595B55" strokeWidth="1.5" />
            <line x1="360" y1="90" x2="360" y2="300" stroke="#595B55" strokeWidth="1.5" />
            <line x1="440" y1="90" x2="440" y2="300" stroke="#595B55" strokeWidth="1.5" />
            {/* Cutout Entrance */}
            <rect x="240" y="210" width="80" height="90" fill="#242522" />
            <circle cx="280" cy="180" r="16" fill="#B6503B" />
            {/* Dimension Line */}
            <line x1="120" y1="70" x2="480" y2="70" stroke="#B6503B" strokeWidth="1" />
            <line x1="120" y1="65" x2="120" y2="75" stroke="#B6503B" strokeWidth="1" />
            <line x1="480" y1="65" x2="480" y2="75" stroke="#B6503B" strokeWidth="1" />
          </svg>
        )}

        {/* 10. Component Matrix: Micro-Interface Tokens */}
        {type === 'component-matrix' && (
          <svg
            className={styles.svg}
            viewBox="0 0 600 375"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Button State 1: Inverted */}
            <rect x="80" y="80" width="200" height="48" fill="#242522" />
            <rect x="96" y="98" width="12" height="12" fill="#B6503B" />
            <line x1="125" y1="104" x2="240" y2="104" stroke="#F1EDE3" strokeWidth="3" />

            {/* Button State 2: Hairline Border */}
            <rect
              x="320"
              y="80"
              width="200"
              height="48"
              fill="none"
              stroke="#242522"
              strokeWidth="1.5"
            />
            <line x1="355" y1="104" x2="485" y2="104" stroke="#242522" strokeWidth="2" />

            {/* Filter Toggle States */}
            <rect x="80" y="160" width="90" height="34" fill="#B6503B" />
            <rect
              x="185"
              y="160"
              width="100"
              height="34"
              fill="none"
              stroke="#242522"
              strokeWidth="1"
            />
            <rect
              x="300"
              y="160"
              width="110"
              height="34"
              fill="none"
              stroke="#D8D2C4"
              strokeWidth="1"
            />

            {/* Radio Matrix & Coordinates */}
            <circle cx="95" cy="245" r="8" fill="#242522" />
            <circle cx="95" cy="245" r="4" fill="#F1EDE3" />
            <line x1="120" y1="245" x2="260" y2="245" stroke="#242522" strokeWidth="1.5" />

            <circle cx="95" cy="285" r="8" stroke="#8C8E85" strokeWidth="1" fill="none" />
            <line x1="120" y1="285" x2="240" y2="285" stroke="#8C8E85" strokeWidth="1" />

            {/* Status Indicator Dot */}
            <circle cx="480" cy="245" r="6" fill="#B6503B" />
            <circle cx="480" cy="245" r="14" stroke="#B6503B" strokeWidth="1" fill="none" />
          </svg>
        )}
      </div>

      {caption && <figcaption className={styles.captionText}>{caption}</figcaption>}
    </figure>
  );
};
