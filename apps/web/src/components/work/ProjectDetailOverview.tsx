import type { FC } from 'react';
import type { ProjectOverview } from '../../content/projects.js';
import styles from './ProjectDetailOverview.module.css';

interface ProjectDetailOverviewProps {
  overview: ProjectOverview;
  services: string[];
}

export const ProjectDetailOverview: FC<ProjectDetailOverviewProps> = ({ overview, services }) => {
  return (
    <section className={styles.section} aria-labelledby="overview-heading">
      <div className="container-wide">
        <div className={styles.sectionLead}>
          <span className={styles.leadBullet} aria-hidden="true" />
          Project Architecture &amp; Brief
        </div>

        <div className={styles.grid}>
          {/* Left Column: Context & Approach */}
          <div className={styles.mainNarrative}>
            <div className={styles.block}>
              <h2 id="overview-heading" className={styles.blockTitle}>
                The Architectural Challenge
              </h2>
              <p className={styles.paragraph}>{overview.challenge}</p>
            </div>

            <div className={styles.block}>
              <h3 className={styles.blockTitle}>Strategic System Approach</h3>
              <p className={styles.paragraph}>{overview.approach}</p>
            </div>
          </div>

          {/* Right Column: Services & Demonstrated Capabilities */}
          <aside className={styles.metaSidebar} aria-label="System Capabilities">
            <div className={styles.capabilitiesBox}>
              <h3 className={styles.sidebarTitle}>System Deliverables</h3>
              <ul className={styles.servicesList}>
                {services.map((service, index) => (
                  <li key={index} className={styles.serviceItem}>
                    <span className={styles.serviceIndex} aria-hidden="true">
                      0{index + 1}
                    </span>
                    <span className={styles.serviceName}>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.methodologyNote}>
              <h4 className={styles.noteTitle}>Rigorous Integrity Note</h4>
              <p className={styles.noteText}>
                This project represents a formal conceptual study developed by Studio Omni. No real
                commercial client is claimed or implied; all metrics evaluate internal system
                integrity and typographic tolerances.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
