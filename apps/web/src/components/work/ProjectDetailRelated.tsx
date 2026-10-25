import type { FC } from 'react';
import type { Project } from '../../content/projects.js';
import { ProjectArtwork } from '../home/ProjectArtwork.js';
import { ActionLink } from '../ui/ActionLink.js';
import { ROUTES, getWorkDetailPath } from '../../lib/routePaths.js';
import styles from './ProjectDetailRelated.module.css';

interface ProjectDetailRelatedProps {
  relatedProjects: readonly Project[];
  currentProjectTitle: string;
}

export const ProjectDetailRelated: FC<ProjectDetailRelatedProps> = ({ relatedProjects }) => {
  return (
    <section className={styles.section} aria-labelledby="related-projects-heading">
      <div className="container-wide">
        <div className={styles.headerRow}>
          <div className={styles.titleGroup}>
            <div className={styles.sectionLead}>
              <span className={styles.leadBullet} aria-hidden="true" />
              Related Investigations
            </div>
            <h2 id="related-projects-heading" className={styles.sectionTitle}>
              Parallel Design Systems
            </h2>
          </div>

          <div className={styles.backLinkWrapper}>
            <ActionLink to={ROUTES.WORK} variant="underline" size="md">
              View All Selected Works →
            </ActionLink>
          </div>
        </div>

        {relatedProjects.length > 0 ? (
          <div className={styles.relatedGrid}>
            {relatedProjects.map((project) => (
              <article key={project.id} className={styles.relatedCard}>
                <div className={styles.artworkWrapper}>
                  <ActionLink
                    to={getWorkDetailPath(project.slug)}
                    aria-label={`Examine related project: ${project.title}`}
                    className={styles.artworkLink}
                  >
                    <ProjectArtwork
                      type={project.visualType}
                      title={project.title}
                      aspect="default"
                    />
                  </ActionLink>
                </div>

                <div className={styles.cardInfo}>
                  <div className={styles.cardMeta}>
                    <span className={styles.metaYear}>{project.year}</span>
                    <span className={styles.metaDivider}>/</span>
                    <span className={styles.metaCategory}>{project.category}</span>
                  </div>

                  <h3 className={styles.cardTitle}>
                    <ActionLink to={getWorkDetailPath(project.slug)} variant="underline" size="md">
                      {project.title}
                    </ActionLink>
                  </h3>

                  <p className={styles.cardSummary}>{project.summary}</p>

                  <div className={styles.actionRow}>
                    <ActionLink to={getWorkDetailPath(project.slug)} variant="solid" size="sm">
                      Examine Architecture →
                    </ActionLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className={styles.emptyNotice}>
            <p>No adjacent projects available in this discipline.</p>
            <ActionLink to={ROUTES.WORK} variant="solid" size="md">
              Browse Entire Portfolio Index
            </ActionLink>
          </div>
        )}
      </div>
    </section>
  );
};
