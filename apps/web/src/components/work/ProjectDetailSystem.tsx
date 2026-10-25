import type { FC } from 'react';
import type { ProjectSystemSpec } from '../../content/projects.js';
import styles from './ProjectDetailSystem.module.css';

interface ProjectDetailSystemProps {
  system: ProjectSystemSpec;
}

export const ProjectDetailSystem: FC<ProjectDetailSystemProps> = ({ system }) => {
  return (
    <section className={styles.section} aria-labelledby="system-heading">
      <div className="container-wide">
        <div className={styles.sectionHeader}>
          <div className={styles.sectionLead}>
            <span className={styles.leadBullet} aria-hidden="true" />
            Underlying Visual &amp; Interaction System
          </div>
          <h2 id="system-heading" className={styles.sectionTitle}>
            Systemic Grammar &amp; Rules
          </h2>
          <p className={styles.sectionSubtitle}>
            A rigorous visual architecture built from typography, structural color tokens, and
            modular coordinate grids.
          </p>
        </div>

        <div className={styles.systemGrid}>
          {/* 1. Typography Specs */}
          <div className={styles.systemCard}>
            <h3 className={styles.cardTitle}>
              <span className={styles.cardIndex}>01</span>
              <span>Typography Roles</span>
            </h3>
            <div className={styles.specRows}>
              <div className={styles.specRow}>
                <span className={styles.specLabel}>Display Axis</span>
                <span className={styles.specValue}>{system.typography.display}</span>
              </div>
              <div className={styles.specRow}>
                <span className={styles.specLabel}>Body Architecture</span>
                <span className={styles.specValue}>{system.typography.body}</span>
              </div>
              <div className={styles.specRow}>
                <span className={styles.specLabel}>Systemic Metadata</span>
                <span className={styles.specValue}>{system.typography.notes}</span>
              </div>
            </div>
          </div>

          {/* 2. Color Palette Roles */}
          <div className={styles.systemCard}>
            <h3 className={styles.cardTitle}>
              <span className={styles.cardIndex}>02</span>
              <span>Palette &amp; Substrates</span>
            </h3>
            <div className={styles.paletteList}>
              {system.palette.map((color, index) => (
                <div key={index} className={styles.colorItem}>
                  <div
                    className={styles.colorSwatch}
                    style={{ backgroundColor: color.hex }}
                    aria-hidden="true"
                  />
                  <div className={styles.colorInfo}>
                    <div className={styles.colorNameRow}>
                      <span className={styles.colorName}>{color.name}</span>
                      <span className={styles.colorHex}>{color.hex}</span>
                    </div>
                    <span className={styles.colorRole}>{color.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Grid & Spatial Layout Engine */}
          <div className={styles.systemCard}>
            <h3 className={styles.cardTitle}>
              <span className={styles.cardIndex}>03</span>
              <span>Grid &amp; Spatial Rationale</span>
            </h3>
            <p className={styles.gridDescription}>{system.grid}</p>
            <div className={styles.gridVisualPreview} aria-hidden="true">
              <div className={styles.gridLine} />
              <div className={styles.gridLine} />
              <div className={styles.gridLine} />
              <div className={styles.gridLine} />
              <div className={styles.gridLine} />
              <div className={styles.gridLine} />
            </div>
          </div>

          {/* 4. Core System Principles */}
          <div className={styles.systemCard}>
            <h3 className={styles.cardTitle}>
              <span className={styles.cardIndex}>04</span>
              <span>Operating Principles</span>
            </h3>
            <ul className={styles.principlesList}>
              {system.principles.map((principle, index) => (
                <li key={index} className={styles.principleItem}>
                  <span className={styles.principleBullet} aria-hidden="true">
                    —
                  </span>
                  <span>{principle}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
