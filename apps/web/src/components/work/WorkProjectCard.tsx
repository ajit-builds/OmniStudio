import type { FC } from 'react';
import type { Project } from '../../content/projects.js';
import { ProjectArtwork } from '../home/ProjectArtwork.js';
import { ActionLink } from '../ui/ActionLink.js';
import { getWorkDetailPath } from '../../lib/routePaths.js';
import styles from './WorkProjectCard.module.css';

interface WorkProjectCardProps {
  project: Project;
  layoutVariant: 'full' | 'split' | 'offset';
}

export const WorkProjectCard: FC<WorkProjectCardProps> = ({ project, layoutVariant }) => {
  const containerClass = {
    full: styles.cardFull,
    split: styles.cardSplit,
    offset: styles.cardOffset,
  }[layoutVariant];

  const artworkAspect = layoutVariant === 'full' ? 'wide' : 'default';

  return (
    <article
      className={`${styles.card} ${containerClass}`}
      aria-labelledby={`project-${project.slug}-title`}
    >
      <div className={styles.infoCol}>
        {/* Project Meta Bar */}
        <div className={styles.metaRow}>
          <span className={styles.metaYear}>{project.year}</span>
          <span className={styles.metaDivider} aria-hidden="true">
            /
          </span>
          <span className={styles.metaCategory}>{project.category}</span>
          {project.conceptProject && <span className={styles.conceptTag}>Concept System</span>}
        </div>

        {/* Title & Subtitle */}
        <h2 id={`project-${project.slug}-title`} className={styles.title}>
          <ActionLink
            to={getWorkDetailPath(project.slug)}
            variant="underline"
            size="lg"
            className={styles.titleLink}
          >
            {project.title}
          </ActionLink>
        </h2>

        <p className={styles.subtitle}>{project.subtitle}</p>
        <p className={styles.summary}>{project.summary}</p>

        {/* Services / Deliverables */}
        <div className={styles.servicesSection}>
          <span className={styles.servicesHeading}>System Deliverables:</span>
          <ul className={styles.servicesList}>
            {project.services.slice(0, 3).map((service, idx) => (
              <li key={idx} className={styles.serviceItem}>
                <span className={styles.serviceBullet} aria-hidden="true">
                  —
                </span>
                <span>{service}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Button */}
        <div className={styles.actionRow}>
          <ActionLink to={getWorkDetailPath(project.slug)} variant="solid" size="md">
            View Case Study →
          </ActionLink>
        </div>
      </div>

      <div className={styles.artworkCol}>
        <ActionLink
          to={getWorkDetailPath(project.slug)}
          className={styles.artworkLink}
          aria-label={`Examine ${project.title} case study`}
        >
          <ProjectArtwork type={project.visualType} title={project.title} aspect={artworkAspect} />
        </ActionLink>
      </div>
    </article>
  );
};
