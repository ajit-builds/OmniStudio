import type { FC } from 'react';
import { ActionLink } from '../components/ui/ActionLink.js';
import { ROUTES } from '../lib/routePaths.js';
import styles from './NotFoundPage.module.css';

export const NotFoundPage: FC = () => {
  return (
    <main className={styles.notFoundContainer} id="main-content">
      <div className={styles.card}>
        <div className={styles.vermilionDetail} aria-hidden="true" />
        <h1 className={styles.numeral}>404</h1>
        <h2 className={styles.title}>The requested coordinate does not exist.</h2>
        <p className={styles.description}>
          The path you navigated to is outside Studio Omni’s indexed index. It may have been
          re-architected, archived, or temporarily sequestered.
        </p>
        <div className={styles.actionGroup}>
          <ActionLink to={ROUTES.HOME} variant="solid" size="md">
            Return to Overview
          </ActionLink>
          <ActionLink to={ROUTES.WORK} variant="outline" size="md">
            Explore Selected Work
          </ActionLink>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
