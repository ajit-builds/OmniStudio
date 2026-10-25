import type { FC } from 'react';
import type { Article } from '../../content/articles.js';
import { ActionLink } from '../ui/ActionLink.js';
import { ROUTES, getJournalDetailPath } from '../../lib/routePaths.js';
import styles from './ArticleRelated.module.css';

interface ArticleRelatedProps {
  relatedArticles: readonly Article[];
}

export const ArticleRelated: FC<ArticleRelatedProps> = ({ relatedArticles }) => {
  return (
    <section className={styles.section} aria-labelledby="related-essays-heading">
      <div className="container-wide">
        <div className={styles.headerRow}>
          <div className={styles.titleGroup}>
            <div className={styles.sectionLead}>
              <span className={styles.leadBullet} aria-hidden="true" />
              Adjacent Discourse
            </div>
            <h2 id="related-essays-heading" className={styles.sectionTitle}>
              Related Critical Readings
            </h2>
          </div>

          <div className={styles.backLinkWrapper}>
            <ActionLink to={ROUTES.JOURNAL} variant="underline" size="md">
              View All Journal Essays →
            </ActionLink>
          </div>
        </div>

        {relatedArticles.length > 0 && (
          <div className={styles.relatedGrid}>
            {relatedArticles.map((article) => (
              <article key={article.id} className={styles.relatedCard}>
                <div className={styles.cardHeader}>
                  <span className={styles.metaTopic}>{article.category}</span>
                  <span className={styles.metaDivider}>•</span>
                  <span className={styles.metaTime}>{article.readingTime}</span>
                </div>

                <h3 className={styles.cardTitle}>
                  <ActionLink to={getJournalDetailPath(article.slug)} variant="underline" size="md">
                    {article.title}
                  </ActionLink>
                </h3>

                <p className={styles.cardExcerpt}>{article.excerpt}</p>

                <div className={styles.actionRow}>
                  <ActionLink to={getJournalDetailPath(article.slug)} variant="solid" size="sm">
                    Read Essay →
                  </ActionLink>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
