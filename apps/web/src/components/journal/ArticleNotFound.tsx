import type { FC } from 'react';
import { ActionLink } from '../ui/ActionLink.js';
import { ROUTES } from '../../lib/routePaths.js';
import styles from './ArticleNotFound.module.css';

interface ArticleNotFoundProps {
  slug?: string;
}

export const ArticleNotFound: FC<ArticleNotFoundProps> = ({ slug }) => {
  return (
    <main id="main-content" className={styles.notFoundContainer}>
      <div className="container-wide">
        <div className={styles.contentBox}>
          {/* Constructivist Crosshair Coordinate Device */}
          <div className={styles.crosshair} aria-hidden="true">
            <span className={styles.lineH} />
            <span className={styles.lineV} />
          </div>

          <div className={styles.metaBadge}>Archive Record Unresolved</div>

          <h1 className={styles.title}>Essay Not Found</h1>

          <p className={styles.leadText}>
            The essay identifier{' '}
            {slug ? <code className={styles.slugCode}>{slug}</code> : 'requested'} does not
            correspond to any published critical reading in the Studio Omni journal archive.
          </p>

          <p className={styles.secondaryText}>
            This text may be an unpublished draft, currently undergoing editorial revision, or has
            been archived from public circulation.
          </p>

          <div className={styles.actionsGroup}>
            <ActionLink to={ROUTES.JOURNAL} variant="solid" size="lg">
              Explore Available Essays →
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
