import { useEffect, useMemo, type FC } from 'react';
import { useParams } from 'react-router-dom';
import { getProjectBySlug, getRelatedProjects } from '../content/projects.js';
import { ProjectDetailCover } from '../components/work/ProjectDetailCover.js';
import { ProjectDetailOverview } from '../components/work/ProjectDetailOverview.js';
import { ProjectDetailInsight } from '../components/work/ProjectDetailInsight.js';
import { ProjectDetailSystem } from '../components/work/ProjectDetailSystem.js';
import { ProjectDetailGallery } from '../components/work/ProjectDetailGallery.js';
import { ProjectDetailOutcome } from '../components/work/ProjectDetailOutcome.js';
import { ProjectDetailRelated } from '../components/work/ProjectDetailRelated.js';
import { ProjectNotFound } from '../components/work/ProjectNotFound.js';
import { ContactInvitationSection } from '../components/home/ContactInvitationSection.js';
import styles from './WorkDetailPage.module.css';

export const WorkDetailPage: FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const project = useMemo(() => {
    return slug ? getProjectBySlug(slug) : undefined;
  }, [slug]);

  const relatedProjects = useMemo(() => {
    return project ? getRelatedProjects(project, 2) : [];
  }, [project]);

  // Scroll to top and set document title on slug change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    if (project) {
      document.title = `${project.title} — Case Study — Studio Omni`;
    } else {
      document.title = 'Project Not Found — Studio Omni';
    }
  }, [project, slug]);

  if (!project) {
    return <ProjectNotFound slug={slug} />;
  }

  return (
    <main id="main-content" className={styles.detailPage}>
      {/* 1. Project Cover: Hero & Spatial Specs */}
      <ProjectDetailCover project={project} />

      {/* 2. Structured Overview: Challenge, Approach & Deliverables */}
      <ProjectDetailOverview overview={project.overview} services={project.services} />

      {/* 3. The Central Architectural Insight */}
      <ProjectDetailInsight insight={project.overview.insight} projectTitle={project.title} />

      {/* 4. The System: Typography, Color Palette, Grid Rationale & Operating Principles */}
      <ProjectDetailSystem system={project.system} />

      {/* 5. Execution & Visual Gallery: Varied plates, full-width spreads & captions */}
      <ProjectDetailGallery gallery={project.gallery} projectTitle={project.title} />

      {/* 6. Outcome & Critical Evaluation */}
      <ProjectDetailOutcome outcome={project.overview.outcome} projectTitle={project.title} />

      {/* 7. Adjacent Parallel Systems / Related Work */}
      <ProjectDetailRelated relatedProjects={relatedProjects} currentProjectTitle={project.title} />

      {/* 8. Portfolio Commission / Dialogue Transition */}
      <ContactInvitationSection />
    </main>
  );
};

export default WorkDetailPage;
