import { useState, useMemo, useEffect, type FC } from 'react';
import { PUBLISHED_ARTICLES } from '../content/articles.js';
import { JournalIntro } from '../components/journal/JournalIntro.js';
import { JournalFeaturedCard } from '../components/journal/JournalFeaturedCard.js';
import { JournalFilter } from '../components/journal/JournalFilter.js';
import { JournalList } from '../components/journal/JournalList.js';
import { ContactInvitationSection } from '../components/home/ContactInvitationSection.js';
import styles from './JournalPage.module.css';

export const JournalPage: FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title =
      activeCategory === 'All'
        ? 'Journal & Field Notes — Studio Omni'
        : `${activeCategory} — Journal — Studio Omni`;
  }, [activeCategory]);

  const categories = useMemo(() => {
    const counts: Record<string, number> = { All: PUBLISHED_ARTICLES.length };
    PUBLISHED_ARTICLES.forEach((a) => {
      counts[a.category] = (counts[a.category] || 0) + 1;
    });

    return [
      { label: 'All', count: counts['All'] || 0 },
      { label: 'Systemic Design', count: counts['Systemic Design'] || 0 },
      { label: 'Digital Architecture', count: counts['Digital Architecture'] || 0 },
      { label: 'Editorial Philosophy', count: counts['Editorial Philosophy'] || 0 },
    ];
  }, []);

  const filteredArticles = useMemo(() => {
    if (activeCategory === 'All') {
      return PUBLISHED_ARTICLES;
    }
    return PUBLISHED_ARTICLES.filter((a) => a.category === activeCategory);
  }, [activeCategory]);

  // When 'All' is active, highlight the first featured article separately
  const featuredArticle = useMemo(() => {
    return activeCategory === 'All' ? PUBLISHED_ARTICLES.find((a) => a.featured) : undefined;
  }, [activeCategory]);

  const remainingArticles = useMemo(() => {
    if (activeCategory === 'All' && featuredArticle) {
      return filteredArticles.filter((a) => a.slug !== featuredArticle.slug);
    }
    return filteredArticles;
  }, [activeCategory, featuredArticle, filteredArticles]);

  return (
    <main id="main-content" className={styles.journalPage}>
      {/* 1. Editorial Introduction */}
      <JournalIntro publishedCount={PUBLISHED_ARTICLES.length} />

      {/* 2. Interactive Topic Spectrum Filter */}
      <JournalFilter
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      {/* 3. Featured Essay (on 'All' view) */}
      {featuredArticle && (
        <section className={styles.featuredSection} aria-label="Featured Reading">
          <div className="container-wide">
            <JournalFeaturedCard article={featuredArticle} />
          </div>
        </section>
      )}

      {/* 4. Filtered or Remaining Essays Grid */}
      <JournalList articles={remainingArticles} onResetFilter={() => setActiveCategory('All')} />

      {/* 5. Commission & Engagement Dialogue Transition */}
      <ContactInvitationSection />
    </main>
  );
};

export default JournalPage;
