import type { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ROUTES } from '../lib/routePaths.js';
import { ActionLink } from '../components/ui/ActionLink.js';
import styles from './PlaceholderPage.module.css';

interface PlaceholderPageProps {
  title: string;
  subtitle: string;
  scheduledPhase: string;
  description: string;
  section: string;
}

export const PlaceholderPage: FC<PlaceholderPageProps> = ({
  title,
  subtitle,
  scheduledPhase,
  description,
  section,
}) => {
  const { slug } = useParams<{ slug?: string }>();
  const displayTitle = slug ? `${title}: ${slug}` : title;

  return (
    <main className={styles.pageWrapper} id="main-content">
      <div className={styles.inner}>
        <nav className={styles.breadcrumbs} aria-label="Breadcrumb navigation">
          <Link to={ROUTES.HOME}>Overview</Link>
          <span className={styles.breadcrumbSeparator} aria-hidden="true">
            /
          </span>
          <span>{section}</span>
          {slug && (
            <>
              <span className={styles.breadcrumbSeparator} aria-hidden="true">
                /
              </span>
              <span>{slug}</span>
            </>
          )}
        </nav>

        <header className={styles.header}>
          <span className={styles.phaseTag}>{scheduledPhase}</span>
          <h1 className={styles.title}>{displayTitle}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
        </header>

        <div className={styles.contentBlock}>
          <p className={styles.bodyCopy}>{description}</p>
          <ActionLink to={ROUTES.HOME} variant="solid" size="md">
            Return to Overview
          </ActionLink>
        </div>
      </div>
    </main>
  );
};
