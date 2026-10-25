import type { FC } from 'react';
import type { Project } from '../../content/projects.js';
import { ProjectArtwork } from '../home/ProjectArtwork.js';
import { ActionLink } from '../ui/ActionLink.js';
import { ROUTES } from '../../lib/routePaths.js';
import styles from './ProjectDetailCover.module.css';

interface ProjectDetailCoverProps {
  project: Project;
}

export const ProjectDetailCover: FC<ProjectDetailCoverProps> = ({ project }) => {
  return (
    <header className={styles.coverHeader} aria-labelledby="project-main-title">
      <div className="container-wide">
        {/* Breadcrumb Navigation */}
        <div className={styles.topBar}>
          <div className={styles.breadcrumbs}>
            <ActionLink to={ROUTES.WORK} variant="underline" size="sm">
              ← Return to Selected Works
            </ActionLink>
          </div>
          <div className={styles.metaStatus}>
            <span className={styles.statusDot} aria-hidden="true" />
            <span className={styles.conceptBadge}>Self-Directed Conceptual System</span>
          </div>
        </div>

        {/* Hero Title & Identity Row */}
        <div className={styles.titleGrid}>
          <div className={styles.headlineGroup}>
            <div className={styles.disciplineRow}>
              <span className={styles.yearLabel}>{project.year}</span>
              <span className={styles.dotSeparator} aria-hidden="true">
                /
              </span>
              <span className={styles.disciplineLabel}>{project.discipline}</span>
            </div>
            <h1 id="project-main-title" className={styles.title}>
              {project.title}
            </h1>
            <p className={styles.subtitle}>{project.subtitle}</p>
          </div>

          <div className={styles.specsSidebar}>
            <div className={styles.specBox}>
              <span className={styles.specLabel}>Category</span>
              <span className={styles.specValue}>{project.category}</span>
            </div>
            <div className={styles.specBox}>
              <span className={styles.specLabel}>Core Focus</span>
              <span className={styles.specValue}>{project.tags.join(' • ')}</span>
            </div>
            <div className={styles.specBox}>
              <span className={styles.specLabel}>Investigation Type</span>
              <span className={styles.specValue}>Research Brief &amp; Systemic Guidelines</span>
            </div>
          </div>
        </div>

        {/* Large Architectural Visual Composition */}
        <div className={styles.artworkContainer}>
          <ProjectArtwork type={project.visualType} title={project.title} aspect="wide" />
        </div>
      </div>
    </header>
  );
};
