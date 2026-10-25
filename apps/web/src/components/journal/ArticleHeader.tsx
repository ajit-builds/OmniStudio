import type { FC } from 'react';
import type { Article } from '../../content/articles.js';
import { ProjectArtwork } from '../home/ProjectArtwork.js';
import { ActionLink } from '../ui/ActionLink.js';
import { ROUTES } from '../../lib/routePaths.js';
import styles from './ArticleHeader.module.css';

interface ArticleHeaderProps {
  article: Article;
}

export const ArticleHeader: FC<ArticleHeaderProps> = ({ article }) => {
  return (
    <header className={styles.articleHeader} aria-labelledby="article-detail-title">
      <div className="container-wide">
        {/* Navigation Breadcrumb */}
        <div className={styles.topBar}>
          <div className={styles.breadcrumbs}>
            <ActionLink to={ROUTES.JOURNAL} variant="underline" size="sm">
              ← Return to Journal &amp; Field Notes
            </ActionLink>
          </div>
          <div className={styles.metaStatus}>
            <span className={styles.statusDot} aria-hidden="true" />
            <span className={styles.conceptBadge}>Critical Essay</span>
          </div>
        </div>

        {/* Title & Metadata Header */}
        <div className={styles.titleWrapper}>
          <div className={styles.metaRow}>
            <span className={styles.categoryLabel}>{article.category}</span>
            <span className={styles.metaDivider}>/</span>
            <span className={styles.dateLabel}>{article.date}</span>
            <span className={styles.metaDivider}>•</span>
            <span className={styles.timeLabel}>{article.readingTime}</span>
            <span className={styles.metaDivider}>•</span>
            <span className={styles.authorLabel}>{article.author}</span>
          </div>

          <h1 id="article-detail-title" className={styles.title}>
            {article.title}
          </h1>

          <p className={styles.subtitle}>{article.subtitle}</p>
        </div>

        {/* Architectural Visual Plate */}
        <div className={styles.coverVisual}>
          <ProjectArtwork type={article.coverVisualType} title={article.title} aspect="wide" />
        </div>
      </div>
    </header>
  );
};
