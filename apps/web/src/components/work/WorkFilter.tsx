import type { FC } from 'react';
import type { ProjectCategory } from '../../content/projects.js';
import styles from './WorkFilter.module.css';

export type FilterCategory = 'All' | ProjectCategory;

interface WorkFilterProps {
  categories: readonly { label: FilterCategory; count: number }[];
  activeCategory: FilterCategory;
  onSelectCategory: (category: FilterCategory) => void;
}

export const WorkFilter: FC<WorkFilterProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <nav className={styles.filterContainer} aria-label="Portfolio discipline filters">
      <div className="container-wide">
        <div className={styles.filterBar}>
          <span className={styles.filterLabel}>Filter by System:</span>
          <div className={styles.buttonGroup} role="toolbar" aria-label="Filter options">
            {categories.map(({ label, count }) => {
              const isActive = activeCategory === label;
              return (
                <button
                  key={label}
                  type="button"
                  className={`${styles.filterBtn} ${isActive ? styles.filterBtnActive : ''}`}
                  onClick={() => onSelectCategory(label)}
                  aria-pressed={isActive}
                  aria-label={`Filter by ${label} (${count} projects)`}
                >
                  <span className={styles.btnLabel}>{label}</span>
                  <span className={styles.countBadge} aria-hidden="true">
                    [{count}]
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};
