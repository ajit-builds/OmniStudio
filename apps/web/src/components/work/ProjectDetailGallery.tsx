import type { FC } from 'react';
import type { ProjectGalleryItem } from '../../content/projects.js';
import { ProjectArtwork } from '../home/ProjectArtwork.js';
import styles from './ProjectDetailGallery.module.css';

interface ProjectDetailGalleryProps {
  gallery: ProjectGalleryItem[];
  projectTitle: string;
}

export const ProjectDetailGallery: FC<ProjectDetailGalleryProps> = ({ gallery, projectTitle }) => {
  return (
    <section className={styles.section} aria-labelledby="gallery-heading">
      <div className="container-wide">
        <div className={styles.sectionHeader}>
          <div className={styles.sectionLead}>
            <span className={styles.leadBullet} aria-hidden="true" />
            Execution &amp; Visual Artifacts
          </div>
          <h2 id="gallery-heading" className={styles.sectionTitle}>
            Architectural Evidence
          </h2>
          <p className={styles.sectionSubtitle}>
            Systemic applications, specimen plates, and spatial projections designed for{' '}
            {projectTitle}.
          </p>
        </div>

        <div className={styles.galleryLayout}>
          {gallery.map((item) => {
            const isFull = item.layout === 'full-width';
            const isTwoCol = item.layout === 'two-column';
            const isOffset = item.layout === 'offset';

            const itemClass = isFull
              ? styles.itemFull
              : isTwoCol
                ? styles.itemTwoCol
                : isOffset
                  ? styles.itemOffset
                  : styles.itemSpecimen;

            return (
              <div key={item.id} className={`${styles.galleryItem} ${itemClass}`}>
                <ProjectArtwork
                  type={item.visualType}
                  title={`${projectTitle} — ${item.title}`}
                  aspect={isFull ? 'wide' : isOffset ? 'tall' : 'default'}
                  caption={`${item.title} — ${item.caption}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
