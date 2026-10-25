import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { ROUTES } from '../../lib/routePaths.js';
import styles from './SiteFooter.module.css';

export const SiteFooter: FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="container-wide">
        <div className={styles.footerGrid}>
          {/* Brand Identity & Tagline */}
          <div className={styles.brandCol}>
            <Link
              to={ROUTES.HOME}
              className={styles.footerWordmark}
              aria-label="Studio Omni — Home"
            >
              <span>STUDIO</span>
              <span>OMNI</span>
            </Link>
            <p className={styles.tagline}>We shape the invisible.</p>
            <p className={styles.taglineSupport}>
              Through rigorous, design-first systems. Independent multidisciplinary creative studio
              working across visual identity, digital experiences, and editorial design.
            </p>
          </div>

          {/* Navigation & Destinations */}
          <div className={styles.navCols}>
            <div>
              <p className={styles.colHeading}>Exploration</p>
              <ul className={styles.linkList}>
                <li>
                  <Link to={ROUTES.WORK} className={styles.footerLink}>
                    Work
                  </Link>
                </li>
                <li>
                  <Link to={ROUTES.ABOUT} className={styles.footerLink}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to={ROUTES.SERVICES} className={styles.footerLink}>
                    Services
                  </Link>
                </li>
                <li>
                  <Link to={ROUTES.JOURNAL} className={styles.footerLink}>
                    Journal
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className={styles.colHeading}>Dialogue</p>
              <ul className={styles.linkList}>
                <li>
                  <Link to={ROUTES.CONTACT} className={styles.footerLink}>
                    Let’s Talk
                  </Link>
                </li>
                <li>
                  <Link to={ROUTES.CONTACT} className={styles.footerLink}>
                    New Commission
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className={styles.colHeading}>Disciplines</p>
              <ul className={styles.linkList}>
                <li>
                  <Link to={ROUTES.SERVICES} className={styles.footerLink}>
                    Identity Systems
                  </Link>
                </li>
                <li>
                  <Link to={ROUTES.SERVICES} className={styles.footerLink}>
                    Digital Experiences
                  </Link>
                </li>
                <li>
                  <Link to={ROUTES.SERVICES} className={styles.footerLink}>
                    Editorial & Campaigns
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Strip */}
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {currentYear} Studio Omni. All rights reserved. Architectural and editorial systems.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className={styles.backToTop}
            aria-label="Scroll back to top of the page"
          >
            <span>Back to top</span>
            <ArrowUp className={styles.backToTopIcon} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
};
