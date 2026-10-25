import type { FC } from 'react';
import styles from './GeometricFallbackSvg.module.css';

interface GeometricFallbackSvgProps {
  className?: string;
  isFallback?: boolean;
}

export const GeometricFallbackSvg: FC<GeometricFallbackSvgProps> = ({
  className = '',
  isFallback = false,
}) => {
  return (
    <div
      className={`${styles.container} ${className}`}
      aria-label="Studio Omni Constructivist Geometry"
    >
      {/* Corner architectural registration ticks */}
      <div className="crop-corner-tl" aria-hidden="true" />
      <div className="crop-corner-tr" aria-hidden="true" />
      <div className="crop-corner-bl" aria-hidden="true" />
      <div className="crop-corner-br" aria-hidden="true" />

      <svg
        className={styles.svg}
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Omni Construction System: construct, intersect, reveal"
      >
        <defs>
          <pattern id="hatch-grid-hero" width="16" height="16" patternUnits="userSpaceOnUse">
            <path
              d="M 16 0 L 0 0 0 16"
              fill="none"
              stroke="#242522"
              strokeWidth="0.75"
              strokeOpacity="0.35"
            />
          </pattern>
          <pattern
            id="diagonal-hatch-hero"
            width="10"
            height="10"
            patternTransform="rotate(45 0 0)"
            patternUnits="userSpaceOnUse"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="10"
              stroke="#242522"
              strokeWidth="1"
              strokeOpacity="0.45"
            />
          </pattern>
        </defs>

        {/* Outer Registration Frame */}
        <rect x="30" y="30" width="340" height="340" fill="none" stroke="#D8D2C4" strokeWidth="1" />

        {/* Wireframe Grid Surfaces */}
        <rect x="60" y="240" width="120" height="80" fill="url(#hatch-grid-hero)" />
        <rect x="240" y="60" width="80" height="80" fill="url(#diagonal-hatch-hero)" />

        {/* Upper Left Solid Circle */}
        <circle cx="120" cy="100" r="40" fill="#242522" />

        {/* Upper Center Monolith */}
        <rect x="180" y="50" width="60" height="120" fill="#242522" />

        {/* Upper Right Quadrant Arch */}
        <path d="M 280 50 A 60 60 0 0 1 340 110 L 280 110 Z" fill="#242522" />

        {/* Center Structural Negative Space */}
        <rect x="180" y="170" width="60" height="60" fill="#595B55" />
        <circle cx="210" cy="200" r="26" fill="#F1EDE3" />

        {/* Middle Right Semicircle */}
        <path d="M 240 160 A 40 40 0 0 1 320 160 Z" fill="#242522" />

        {/* Far Right Monolith Block */}
        <rect x="320" y="140" width="60" height="100" fill="#242522" />

        {/* Lower Left Quarter Arch */}
        <path d="M 50 280 A 40 40 0 0 0 90 320 L 50 320 Z" fill="#242522" />

        {/* Lower Inverted Arch */}
        <path d="M 180 320 A 40 40 0 0 1 180 240 Z" fill="#242522" />
        <rect x="220" y="220" width="50" height="100" fill="#242522" />

        {/* Diagonal Ray Lines */}
        <line x1="80" y1="160" x2="150" y2="90" stroke="#242522" strokeWidth="2" />
        <line x1="95" y1="175" x2="165" y2="105" stroke="#242522" strokeWidth="1.5" />
        <line x1="110" y1="190" x2="180" y2="120" stroke="#242522" strokeWidth="1" />

        {/* Oxide Vermilion Selective Accent Point */}
        <circle cx="280" cy="280" r="4.5" fill="#B6503B" />
        <line
          x1="280"
          y1="255"
          x2="280"
          y2="305"
          stroke="#B6503B"
          strokeWidth="1.25"
          strokeDasharray="2 3"
        />

        {/* Architectural Crosshairs */}
        <circle cx="340" cy="340" r="6" stroke="#242522" strokeWidth="1" fill="none" />
        <line x1="333" y1="340" x2="347" y2="340" stroke="#242522" strokeWidth="1" />
        <line x1="340" y1="333" x2="340" y2="347" stroke="#242522" strokeWidth="1" />
      </svg>

      {isFallback && (
        <span className={styles.fallbackNotice} aria-hidden="true">
          Static Architectural Vector System
        </span>
      )}
    </div>
  );
};
