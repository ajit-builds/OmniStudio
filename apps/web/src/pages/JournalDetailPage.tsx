import { useEffect, useMemo, type FC } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleBySlug, getRelatedArticles } from '../content/articles.js';
import { ArticleHeader } from '../components/journal/ArticleHeader.js';
import { ArticleRenderer } from '../components/journal/ArticleRenderer.js';
import { ArticleRelated } from '../components/journal/ArticleRelated.js';
import { ArticleNotFound } from '../components/journal/ArticleNotFound.js';
import { ContactInvitationSection } from '../components/home/ContactInvitationSection.js';
import styles from './JournalDetailPage.module.css';

export const JournalDetailPage: FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Only retrieve published articles for public routing (drafts return undefined)
  const article = useMemo(() => {
    return slug ? getArticleBySlug(slug, false) : undefined;
  }, [slug]);

  const relatedArticles = useMemo(() => {
    return article ? getRelatedArticles(article, 2) : [];
  }, [article]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    if (article) {
      document.title = `${article.title} — Journal — Studio Omni`;
    } else {
      document.title = 'Essay Not Found — Studio Omni';
    }
  }, [article, slug]);

  if (!article) {
    return <ArticleNotFound slug={slug} />;
  }

  return (
    <main id="main-content" className={styles.detailPage}>
      {/* 1. Article Header & Cover Visual */}
      <ArticleHeader article={article} />

      {/* 2. Structured Body Content Blocks */}
      <section className={styles.contentSection} aria-label="Essay Reading Area">
        <div className="container-wide">
          <ArticleRenderer blocks={article.content} articleTitle={article.title} />
        </div>
      </section>

      {/* 3. Related Critical Discourse */}
      <ArticleRelated relatedArticles={relatedArticles} />

      {/* 4. Commission & Engagement Dialogue */}
      <ContactInvitationSection />
    </main>
  );
};

export default JournalDetailPage;
