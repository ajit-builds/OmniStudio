import type { FC } from 'react';
import type { Project } from '../../content/projects.js';
import { WorkProjectCard } from './WorkProjectCard.js';
import styles from './WorkProjectList.module.css';

interface WorkProjectListProps {
  projects: readonly Project[];
  onResetFilter?: () => void;
}

export const WorkProjectList: FC<WorkProjectListProps> = ({ projects, onResetFilter }) => {
  if (projects.length === 0) {
    return (
      <section className={styles.emptyContainer} aria-labelledby="empty-heading">
        <div className="container-wide">
          <div className={styles.emptyBox}>
            <div className={styles.emptyCrosshair} aria-hidden="true" />
            <h2 id="empty-heading" className={styles.emptyTitle}>
              No Systems Found in Current Category
            </h2>
            <p className={styles.emptyText}>
              There are currently no conceptual briefs registered under this discipline filter.
            </p>
            {onResetFilter && (
              <button
                type="button"
                className={styles.resetBtn}
                onClick={onResetFilter}
                aria-label="Reset filter to display all projects"
              >
                Reset Filter to All Systems
              </button>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.listContainer} aria-label="Selected Projects List">
      <div className="container-wide">
        <div className={styles.projectsStack}>
          {projects.map((project, index) => {
            // Varied editorial rhythm:
            // index 0 -> 'full', index 1 -> 'offset', index 2 -> 'split',
            // index 3 -> 'offset', index 4 -> 'full', index 5 -> 'split'
            let layout: 'full' | 'split' | 'offset' = 'split';
            if (index % 4 === 0) {
              layout = 'full';
            } else if (index % 2 === 1) {
              layout = 'offset';
            } else {
              layout = 'split';
            }

            return <WorkProjectCard key={project.id} project={project} layoutVariant={layout} />;
          })}
        </div>
      </div>
    </section>
  );
};
