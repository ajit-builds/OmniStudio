import type { FC } from 'react';
import styles from './ContactIntro.module.css';

export const ContactIntro: FC = () => {
  return (
    <header className={styles.header}>
      <div className="container-wide">
        <div className={styles.inner}>
          <div className={styles.leadCol}>
            <div className={styles.sectionLead}>
              <span className={styles.leadBullet} aria-hidden="true" />
              Commission & Inquiry / Studio Omni
            </div>
            <h1 className={styles.title}>Initiate Dialogue</h1>
            <p className={styles.statement}>
              We shape the invisible through rigorous, design-first systems.
            </p>
          </div>

          <div className={styles.contextCol}>
            <p className={styles.guidance}>
              Every commission begins with an open exploration of context, intent, and structural
              ambition. You do not need a predefined technical brief or rigid scope to initiate
              contact.
            </p>
            <p className={styles.note}>
              The most productive partnerships articulate the core problem, institutional objective,
              or creative opportunity at hand. We evaluate inquiries with deliberate care to ensure
              philosophical alignment and disciplined execution.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
