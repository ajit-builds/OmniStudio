import type { FC } from 'react';
import { SELECTED_PROJECTS } from '../../content/projects.js';
import { ProjectArtwork } from './ProjectArtwork.js';
import { ActionLink } from '../ui/ActionLink.js';
import { ROUTES, getWorkDetailPath } from '../../lib/routePaths.js';
import styles from './SelectedWorkSection.module.css';

export const SelectedWorkSection: FC = () => {
  return (
    <section id="work" className={styles.section} aria-labelledby="selected-work-heading">
      <div className="container-wide">
        {/* Section Header */}
        <div className={styles.headerRow}>
          <div className={styles.titleGroup}>
            <div className={styles.sectionLead}>
              <span className={styles.leadBullet} aria-hidden="true" />
              Selected Portfolio
            </div>
            <h2 id="selected-work-heading" className={styles.title}>
              Form Follows System
            </h2>
            <p className={styles.subtitle}>
              Visual identity, spatial design, and high-performance digital experiences.
            </p>
          </div>
          <p className={styles.disclaimer}>
            All entries represent self-directed conceptual systems and exploratory architectural
            briefs developed by Studio Omni.
          </p>
        </div>

        {/* Varied Project Compositions */}
        <div className={styles.projectsList}>
          {SELECTED_PROJECTS.map((project, index) => {
            // Alternate compositions: 0 = Split, 1 = Offset, 2 = Full-Width, 3 = Split
            const isFull = index === 2;
            const isOffset = index === 1;

            return (
              <article
                key={project.id}
                className={
                  isFull
                    ? styles.projectFull
                    : isOffset
                      ? styles.projectOffset
                      : styles.projectSplit
                }
                aria-label={`Project: ${project.title}`}
              >
                <div className={styles.projectInfo}>
                  <div className={styles.projectMeta}>
                    <span className={styles.metaYear}>{project.year}</span>
                    <span className={styles.metaDot} aria-hidden="true">
                      •
                    </span>
                    <span>{project.discipline}</span>
                  </div>

                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectSubtitle}>{project.subtitle}</p>
                  <p className={styles.projectSummary}>{project.summary}</p>

                  <ul className={styles.detailsList} aria-label="Systemic Deliverables">
                    {project.details.map((detail, idx) => (
                      <li key={idx} className={styles.detailItem}>
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <div className={styles.tagsRow} aria-label="Discipline tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className={styles.actionWrapper}>
                    <ActionLink to={getWorkDetailPath(project.slug)} variant="underline" size="md">
                      Examine Architecture →
                    </ActionLink>
                  </div>
                </div>

                <div className={styles.artworkWrapper}>
                  <ProjectArtwork
                    type={project.visualType}
                    title={project.title}
                    aspect={isFull ? 'wide' : 'default'}
                  />
                </div>
              </article>
            );
          })}
        </div>

        {/* Explore All Link */}
        <div className={styles.exploreAllRow}>
          <ActionLink to={ROUTES.WORK} variant="solid" size="lg">
            Explore All Selected Work
          </ActionLink>
        </div>
      </div>
    </section>
  );
};
