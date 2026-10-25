import { useEffect, useRef, type FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from './MainNavigation.js';
import { ROUTES } from '../../lib/routePaths.js';
import { ActionLink } from '../ui/ActionLink.js';
import styles from './MobileNavigation.module.css';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNavigation: FC<MobileNavigationProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const isFirstMount = useRef(true);

  // Close menu automatically whenever route changes (e.g. browser back/forward)
  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }
    if (isOpen) {
      onClose();
    }
  }, [location.pathname]);

  // Close menu when Escape key is pressed
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={styles.overlay}
      id="mobile-navigation"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      <nav className={styles.mobileNavList} aria-label="Mobile Site Navigation">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={onClose}
            className={({ isActive }) =>
              `${styles.mobileNavLink} ${isActive ? styles.active : ''}`.trim()
            }
          >
            {({ isActive }) => (
              <>
                <span>{item.label}</span>
                {isActive && <span className={styles.activeBullet} aria-hidden="true" />}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className={styles.mobileFooter}>
        <p className={styles.tagline}>We shape the invisible.</p>
        <ActionLink
          to={ROUTES.CONTACT}
          variant="solid"
          size="lg"
          onClick={onClose}
          ariaLabel="Initiate contact"
        >
          Let’s Talk
        </ActionLink>
      </div>
    </div>
  );
};
