import type { FC } from 'react';
import type { Article } from '../../content/articles.js';
import { ProjectArtwork } from '../home/ProjectArtwork.js';
import { ActionLink } from '../ui/ActionLink.js';
import { getJournalDetailPath } from '../../lib/routePaths.js';
import styles from './JournalFeaturedCard.module.css';

interface JournalFeaturedCardProps {
  article: Article;
}

export const JournalFeaturedCard: FC<JournalFeaturedCardProps> = ({ article }) => {
  return (
    <article className={styles.featuredCard} aria-labelledby="featured-essay-title">
      <div className={styles.contentCol}>
        <div className={styles.metaRow}>
          <span className={styles.featuredBadge}>Featured Essay</span>
          <span className={styles.metaDivider} aria-hidden="true">
            /
          </span>
          <span className={styles.metaCategory}>{article.category}</span>
          <span className={styles.metaDivider} aria-hidden="true">
            •
          </span>
          <span className={styles.metaMuted}>{article.date}</span>
          <span className={styles.metaDivider} aria-hidden="true">
            •
          </span>
          <span className={styles.metaMuted}>{article.readingTime}</span>
        </div>

        <h2 id="featured-essay-title" className={styles.title}>
          <ActionLink
            to={getJournalDetailPath(article.slug)}
            variant="underline"
            size="lg"
            className={styles.titleLink}
          >
            {article.title}
          </ActionLink>
        </h2>

        <p className={styles.subtitle}>{article.subtitle}</p>
        <p className={styles.excerpt}>{article.excerpt}</p>

        <div className={styles.actionRow}>
          <ActionLink to={getJournalDetailPath(article.slug)} variant="solid" size="md">
            Read Critical Essay →
          </ActionLink>
        </div>
      </div>

      <div className={styles.artworkCol}>
        <ActionLink
          to={getJournalDetailPath(article.slug)}
          className={styles.artworkLink}
          aria-label={`Read ${article.title}`}
        >
          <ProjectArtwork type={article.coverVisualType} title={article.title} aspect="wide" />
        </ActionLink>
      </div>
    </article>
  );
};
