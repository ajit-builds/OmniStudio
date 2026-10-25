import type { FC } from 'react';
import type { Article } from '../../content/articles.js';
import { ActionLink } from '../ui/ActionLink.js';
import { getJournalDetailPath } from '../../lib/routePaths.js';
import styles from './JournalList.module.css';

interface JournalListProps {
  articles: readonly Article[];
  onResetFilter?: () => void;
}

export const JournalList: FC<JournalListProps> = ({ articles, onResetFilter }) => {
  if (articles.length === 0) {
    return (
      <section className={styles.emptyContainer} aria-labelledby="empty-journal-heading">
        <div className="container-wide">
          <div className={styles.emptyBox}>
            <div className={styles.emptyCrosshair} aria-hidden="true" />
            <h2 id="empty-journal-heading" className={styles.emptyTitle}>
              No Essays In Current Topic
            </h2>
            <p className={styles.emptyText}>
              There are currently no published essays registered under this topic spectrum filter.
            </p>
            {onResetFilter && (
              <button
                type="button"
                className={styles.resetBtn}
                onClick={onResetFilter}
                aria-label="Reset filter to display all essays"
              >
                Reset Filter to All Topics
              </button>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.listSection} aria-label="Published Essays Archive">
      <div className="container-wide">
        <div className={styles.articlesGrid}>
          {articles.map((article) => (
            <article
              key={article.id}
              className={styles.articleCard}
              aria-labelledby={`article-heading-${article.slug}`}
            >
              <div className={styles.cardHeader}>
                <span className={styles.metaTopic}>{article.category}</span>
                <span className={styles.metaDivider} aria-hidden="true">
                  /
                </span>
                <span className={styles.metaDate}>{article.date}</span>
                <span className={styles.metaDivider} aria-hidden="true">
                  •
                </span>
                <span className={styles.metaTime}>{article.readingTime}</span>
              </div>

              <h2 id={`article-heading-${article.slug}`} className={styles.cardTitle}>
                <ActionLink
                  to={getJournalDetailPath(article.slug)}
                  variant="underline"
                  size="md"
                  className={styles.titleLink}
                >
                  {article.title}
                </ActionLink>
              </h2>

              <p className={styles.cardSubtitle}>{article.subtitle}</p>
              <p className={styles.cardExcerpt}>{article.excerpt}</p>

              <div className={styles.actionRow}>
                <ActionLink to={getJournalDetailPath(article.slug)} variant="underline" size="sm">
                  Read Essay →
                </ActionLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
