import type { FC } from 'react';
import styles from './PageLoadingFallback.module.css';

export const PageLoadingFallback: FC = () => {
  return (
    <div className={styles.fallbackContainer} role="status" aria-label="Loading page content">
      <div className={styles.inner}>
        <div className={styles.indicatorRow}>
          <span className={styles.statusDot} aria-hidden="true" />
          <span className={styles.systemText}>STUDIO OMNI // LOADING SYSTEM</span>
        </div>
        <div className={styles.progressTrack} aria-hidden="true">
          <div className={styles.progressBar} />
        </div>
      </div>
    </div>
  );
};

export default PageLoadingFallback;
