import type { FC } from 'react';
import type { ArticleBlock } from '../../content/articles.js';
import { ProjectArtwork } from '../home/ProjectArtwork.js';
import styles from './ArticleRenderer.module.css';

interface ArticleRendererProps {
  blocks: readonly ArticleBlock[];
  articleTitle: string;
}

export const ArticleRenderer: FC<ArticleRendererProps> = ({ blocks, articleTitle }) => {
  return (
    <div className={styles.articleBody} aria-label="Article content body">
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'paragraph':
            return (
              <p key={index} className={styles.paragraph}>
                {block.text}
              </p>
            );

          case 'heading':
            if (block.level === 2) {
              return (
                <h2 key={index} className={styles.heading2}>
                  {block.text}
                </h2>
              );
            }
            return (
              <h3 key={index} className={styles.heading3}>
                {block.text}
              </h3>
            );

          case 'image':
            return (
              <div key={index} className={styles.imageBlock}>
                <ProjectArtwork
                  type={block.visualType}
                  title={`${articleTitle} — figure`}
                  aspect="wide"
                  caption={block.caption}
                />
              </div>
            );

          case 'quote':
            return (
              <blockquote key={index} className={styles.quoteBlock}>
                <p className={styles.quoteText}>“{block.text}”</p>
                {block.attribution && (
                  <footer className={styles.quoteAttribution}>
                    <span className={styles.attributionLine} aria-hidden="true" />
                    <span>{block.attribution}</span>
                  </footer>
                )}
              </blockquote>
            );

          case 'list':
            if (block.ordered) {
              return (
                <ol key={index} className={styles.orderedList}>
                  {block.items.map((item, idx) => (
                    <li key={idx} className={styles.orderedItem}>
                      <span className={styles.orderedNum} aria-hidden="true">
                        0{idx + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              );
            }
            return (
              <ul key={index} className={styles.unorderedList}>
                {block.items.map((item, idx) => (
                  <li key={idx} className={styles.unorderedItem}>
                    <span className={styles.unorderedBullet} aria-hidden="true">
                      —
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );

          case 'divider':
            return <hr key={index} className={styles.divider} />;

          case 'callout':
            return (
              <aside key={index} className={styles.calloutBlock}>
                <div className={styles.calloutHeader}>
                  <span className={styles.calloutDot} aria-hidden="true" />
                  <span className={styles.calloutTitle}>{block.title}</span>
                </div>
                <p className={styles.calloutText}>{block.text}</p>
              </aside>
            );

          default:
            return null;
        }
      })}
    </div>
  );
};
