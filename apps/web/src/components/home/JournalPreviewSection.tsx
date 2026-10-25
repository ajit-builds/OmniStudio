import type { FC } from 'react';
import { JOURNAL_PREVIEWS } from '../../content/articles.js';
import { ActionLink } from '../ui/ActionLink.js';
import { ROUTES, getJournalDetailPath } from '../../lib/routePaths.js';
import styles from './JournalPreviewSection.module.css';

export const JournalPreviewSection: FC = () => {
  const featuredArticle = JOURNAL_PREVIEWS[0];
  const secondaryArticles = JOURNAL_PREVIEWS.slice(1);

  return (
    <section id="journal" className={styles.section} aria-labelledby="journal-heading">
      <div className="container-wide">
        {/* Header */}
        <div className={styles.headerRow}>
          <div className={styles.titleGroup}>
            <div className={styles.sectionLead}>
              <span className={styles.leadBullet} aria-hidden="true" />
              Journal & Discourse
            </div>
            <h2 id="journal-heading" className={styles.title}>
              Essays & Field Notes
            </h2>
            <p className={styles.subtitle}>
              Critical inquiry into typography, spatial technology, and systemic design.
            </p>
          </div>
          <p className={styles.editorialDisclaimer}>
            Conceptual essays and design tenets written from the Studio Omni research desk.
          </p>
        </div>

        {/* Varied Editorial Layout */}
        <div className={styles.journalLayout}>
          {/* Featured Article */}
          {featuredArticle && (
            <article
              className={styles.featuredArticle}
              aria-label={`Featured essay: ${featuredArticle.title}`}
            >
              <div className="crop-corner-tl" aria-hidden="true" />
              <div className="crop-corner-tr" aria-hidden="true" />
              <div className="crop-corner-bl" aria-hidden="true" />
              <div className="crop-corner-br" aria-hidden="true" />

              <div className={styles.articleMeta}>
                <span className={styles.metaTopic}>{featuredArticle.topic}</span>
                <span className={styles.metaDot} aria-hidden="true">
                  •
                </span>
                <span className={styles.metaMuted}>{featuredArticle.date}</span>
                <span className={styles.metaDot} aria-hidden="true">
                  •
                </span>
                <span className={styles.metaMuted}>{featuredArticle.readingTime}</span>
              </div>

              <h3 className={styles.featuredTitle}>{featuredArticle.title}</h3>
              <p className={styles.featuredSubtitle}>{featuredArticle.subtitle}</p>
              <p className={styles.featuredExcerpt}>{featuredArticle.excerpt}</p>

              <div>
                <ActionLink
                  to={getJournalDetailPath(featuredArticle.slug)}
                  variant="underline"
                  size="md"
                >
                  Read Critical Essay →
                </ActionLink>
              </div>
            </article>
          )}

          {/* Secondary Articles Grid */}
          <div className={styles.secondaryGrid}>
            {secondaryArticles.map((article) => (
              <article
                key={article.id}
                className={styles.secondaryArticle}
                aria-label={`Essay: ${article.title}`}
              >
                <div className="crop-corner-tl" aria-hidden="true" />
                <div className="crop-corner-tr" aria-hidden="true" />
                <div className="crop-corner-bl" aria-hidden="true" />
                <div className="crop-corner-br" aria-hidden="true" />

                <div className={styles.articleMeta}>
                  <span className={styles.metaTopic}>{article.topic}</span>
                  <span className={styles.metaDot} aria-hidden="true">
                    •
                  </span>
                  <span className={styles.metaMuted}>{article.date}</span>
                  <span className={styles.metaDot} aria-hidden="true">
                    •
                  </span>
                  <span className={styles.metaMuted}>{article.readingTime}</span>
                </div>

                <h3 className={styles.secondaryTitle}>{article.title}</h3>
                <p className={styles.secondarySubtitle}>{article.subtitle}</p>
                <p className={styles.secondaryExcerpt}>{article.excerpt}</p>

                <div>
                  <ActionLink to={getJournalDetailPath(article.slug)} variant="underline" size="sm">
                    Read Essay →
                  </ActionLink>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Explore All Journal Link */}
        <div className={styles.exploreRow}>
          <ActionLink to={ROUTES.JOURNAL} variant="solid" size="lg">
            Explore All Essays & Field Notes
          </ActionLink>
        </div>
      </div>
    </section>
  );
};
