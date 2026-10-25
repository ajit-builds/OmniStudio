import type { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../lib/routePaths.js';
import styles from './MainNavigation.module.css';

interface NavItem {
  label: string;
  path: string;
}

export const NAV_ITEMS: readonly NavItem[] = [
  { label: 'Work', path: ROUTES.WORK },
  { label: 'About', path: ROUTES.ABOUT },
  { label: 'Services', path: ROUTES.SERVICES },
  { label: 'Journal', path: ROUTES.JOURNAL },
] as const;

export const MainNavigation: FC = () => {
  return (
    <nav className={styles.nav} aria-label="Main Navigation">
      {NAV_ITEMS.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`.trim()}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
};
