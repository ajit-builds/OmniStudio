import { useState, type FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../lib/routePaths.js';
import { MainNavigation } from './MainNavigation.js';
import { MobileNavigation } from './MobileNavigation.js';
import { ActionLink } from '../ui/ActionLink.js';
import styles from './SiteHeader.module.css';

export const SiteHeader: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={`container-wide ${styles.headerInner}`}>
        <Link to={ROUTES.HOME} className={styles.wordmark} aria-label="Studio Omni — Home">
          <span className={styles.wordmarkStudio}>STUDIO</span>
          <span className={styles.wordmarkOmni}>OMNI</span>
        </Link>

        <div className={styles.navContainer}>
          <MainNavigation />
        </div>

        <div className={styles.actionsContainer}>
          <ActionLink
            to={ROUTES.CONTACT}
            variant="solid"
            size="md"
            ariaLabel="Initiate contact with Studio Omni"
          >
            Let’s Talk
          </ActionLink>
        </div>

        <button
          type="button"
          className={`${styles.mobileToggle} ${isMobileMenuOpen ? styles.toggleOpen : ''}`}
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          <span className={styles.toggleBar} />
          <span className={styles.toggleBar} />
          <span className={styles.toggleBar} />
        </button>
      </div>

      <MobileNavigation isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </header>
  );
};
