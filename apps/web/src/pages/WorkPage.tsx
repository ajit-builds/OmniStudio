import { useState, useMemo, useEffect, type FC } from 'react';
import { ALL_PROJECTS } from '../content/projects.js';
import { WorkIntro } from '../components/work/WorkIntro.js';
import { WorkFilter, type FilterCategory } from '../components/work/WorkFilter.js';
import { WorkProjectList } from '../components/work/WorkProjectList.js';
import { ContactInvitationSection } from '../components/home/ContactInvitationSection.js';
import styles from './WorkPage.module.css';

export const WorkPage: FC = () => {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('All');

  // Update document title for SEO
  useEffect(() => {
    document.title =
      activeCategory === 'All'
        ? 'Selected Works — Studio Omni'
        : `${activeCategory} — Selected Works — Studio Omni`;
  }, [activeCategory]);

  // Compute category counts dynamically
  const categories = useMemo(() => {
    return [
      { label: 'All' as FilterCategory, count: ALL_PROJECTS.length },
      {
        label: 'Identity Systems' as FilterCategory,
        count: ALL_PROJECTS.filter((p) => p.category === 'Identity Systems').length,
      },
      {
        label: 'Digital Experiences' as FilterCategory,
        count: ALL_PROJECTS.filter((p) => p.category === 'Digital Experiences').length,
      },
      {
        label: 'Editorial & Campaigns' as FilterCategory,
        count: ALL_PROJECTS.filter((p) => p.category === 'Editorial & Campaigns').length,
      },
    ] as const;
  }, []);

  // Filter projects by active category
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') {
      return ALL_PROJECTS;
    }
    return ALL_PROJECTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <main id="main-content" className={styles.workPage}>
      {/* 1. Editorial Introduction */}
      <WorkIntro totalCount={ALL_PROJECTS.length} />

      {/* 2. Interactive Category Filter */}
      <WorkFilter
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      {/* 3. Varied Project Collection */}
      <WorkProjectList projects={filteredProjects} onResetFilter={() => setActiveCategory('All')} />

      {/* 4. Portfolio Conclusion / Contact Transition */}
      <ContactInvitationSection />
    </main>
  );
};

export default WorkPage;
