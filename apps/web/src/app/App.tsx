import { useEffect, type FC } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { SiteHeader } from '../components/layout/SiteHeader.js';
import { SiteFooter } from '../components/layout/SiteFooter.js';
import styles from '../App.module.css';

export const App: FC = () => {
  const { pathname } = useLocation();

  // Ensure scroll is instantly reset to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <div className={styles.appShell}>
      {/* Keyboard Accessibility Skip Link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Global Shared Header */}
      <SiteHeader />

      {/* Dynamic Content Viewport */}
      <div className={styles.mainArea}>
        <Outlet />
      </div>

      {/* Global Shared Footer */}
      <SiteFooter />
    </div>
  );
};

export default App;
