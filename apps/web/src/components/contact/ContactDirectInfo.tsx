import type { FC } from 'react';
import styles from './ContactDirectInfo.module.css';

export const ContactDirectInfo: FC = () => {
  return (
    <aside className={styles.directInfo} aria-label="Studio Inquiry Protocol">
      <div className={styles.block}>
        <div className={styles.blockHeader}>
          <span className={styles.num} aria-hidden="true">
            01
          </span>
          <h2 className={styles.blockTitle}>Direct Studio Engagement</h2>
        </div>
        <p className={styles.text}>
          Studio Omni operates without account executives, intermediaries, or outsourced sales
          representatives. Every inquiry received via this portal is reviewed directly by the studio
          principals.
        </p>
      </div>

      <div className={styles.block}>
        <div className={styles.blockHeader}>
          <span className={styles.num} aria-hidden="true">
            02
          </span>
          <h2 className={styles.blockTitle}>Scope of Practice</h2>
        </div>
        <p className={styles.text}>
          We take on a deliberate, limited volume of commissions each year across our core
          disciplines: Identity Systems, Digital Experiences, and Editorial & Campaigns.
        </p>
      </div>

      <div className={styles.block}>
        <div className={styles.blockHeader}>
          <span className={styles.num} aria-hidden="true">
            03
          </span>
          <h2 className={styles.blockTitle}>Confidentiality & Discretion</h2>
        </div>
        <p className={styles.text}>
          All submitted descriptions, prospective timelines, and organizational contexts are treated
          with strict professional confidence. Information is utilized solely to assess engagement
          alignment and facilitate direct studio correspondence.
        </p>
      </div>

      <div className={styles.callout}>
        <span className={styles.calloutIcon} aria-hidden="true">
          §
        </span>
        <div className={styles.calloutContent}>
          <h3 className={styles.calloutHeading}>Verified Direct Portal</h3>
          <p className={styles.calloutText}>
            This validated transmission portal is the studio’s primary channel for reviewing new
            client engagements.
          </p>
        </div>
      </div>
    </aside>
  );
};
