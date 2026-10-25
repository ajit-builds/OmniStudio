import type { FC } from 'react';
import { ActionLink } from '../ui/ActionLink.js';
import { ROUTES } from '../../lib/routePaths.js';
import styles from './ProjectNotFound.module.css';

interface ProjectNotFoundProps {
  slug?: string;
}

export const ProjectNotFound: FC<ProjectNotFoundProps> = ({ slug }) => {
  return (
    <main id="main-content" className={styles.notFoundContainer}>
      <div className="container-wide">
        <div className={styles.contentBox}>
          {/* Constructivist Crosshair Coordinate Device */}
          <div className={styles.crosshair} aria-hidden="true">
            <span className={styles.lineH} />
            <span className={styles.lineV} />
          </div>

          <div className={styles.metaBadge}>System Coordinates Unresolved</div>

          <h1 className={styles.title}>Project Not Found</h1>

          <p className={styles.leadText}>
            The project identifier{' '}
            {slug ? <code className={styles.slugCode}>{slug}</code> : 'requested'} does not
            correspond to any registered architectural brief or design system in the Studio Omni
            archive.
          </p>

          <p className={styles.secondaryText}>
            The system may have been archived, renamed, or is currently under active development.
          </p>

          <div className={styles.actionsGroup}>
            <ActionLink to={ROUTES.WORK} variant="solid" size="lg">
              Explore Available Portfolio →
            </ActionLink>
            <ActionLink to={ROUTES.HOME} variant="underline" size="md">
              Return to Studio Homepage
            </ActionLink>
          </div>
        </div>
      </div>
    </main>
  );
};
