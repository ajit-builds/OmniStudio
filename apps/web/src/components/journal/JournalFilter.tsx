import type { FC } from 'react';
import styles from './JournalFilter.module.css';

interface JournalFilterProps {
  categories: readonly { label: string; count: number }[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export const JournalFilter: FC<JournalFilterProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <nav className={styles.filterContainer} aria-label="Journal topic filters">
      <div className="container-wide">
        <div className={styles.filterBar}>
          <span className={styles.filterLabel}>Topic Spectrum:</span>
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
                  aria-label={`Filter by ${label} (${count} essays)`}
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
