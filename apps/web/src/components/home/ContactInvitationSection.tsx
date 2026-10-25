import type { FC } from 'react';
import { ActionLink } from '../ui/ActionLink.js';
import { ROUTES } from '../../lib/routePaths.js';
import styles from './ContactInvitationSection.module.css';

export const ContactInvitationSection: FC = () => {
  return (
    <section className={styles.section} aria-labelledby="contact-invitation-heading">
      <div className="container-wide">
        <div className={styles.inner}>
          {/* Oxide Vermilion Registration Corners */}
          <div className={styles.cornerTl} aria-hidden="true" />
          <div className={styles.cornerTr} aria-hidden="true" />
          <div className={styles.cornerBl} aria-hidden="true" />
          <div className={styles.cornerBr} aria-hidden="true" />

          <div className={styles.contentCol}>
            <div className={styles.sectionLead}>
              <span className={styles.leadBullet} aria-hidden="true" />
              Dialogue & Commission
            </div>

            <h2 id="contact-invitation-heading" className={styles.headline}>
              Shape Your Next System
            </h2>

            <p className={styles.statement}>
              We collaborate with cultural institutions, architecture practices, and pioneering
              technology studios.
            </p>

            <p className={styles.description}>
              Whether commissioning a comprehensive brand identity, a high-performance digital
              platform, or an editorial publication, our process begins with disciplined inquiry.
            </p>
          </div>

          <div className={styles.actionCol}>
            <ActionLink
              to={ROUTES.CONTACT}
              variant="invertedSolid"
              size="lg"
              ariaLabel="Initiate contact with Studio Omni"
            >
              Initiate Dialogue
            </ActionLink>
            <span className={styles.availabilityNote}>
              Now reviewing commissions for upcoming quarters
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
