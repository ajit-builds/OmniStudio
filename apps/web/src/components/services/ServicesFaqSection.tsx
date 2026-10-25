import { useState, type FC } from 'react';
import { FAQ_ITEMS } from '../../content/faq.js';
import styles from './ServicesFaqSection.module.css';

export const ServicesFaqSection: FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('faq-01');

  const toggleItem = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section className={styles.section} aria-labelledby="faq-heading">
      <div className="container-wide">
        <div className={styles.sectionHeader}>
          <div className={styles.sectionLead}>
            <span className={styles.leadBullet} aria-hidden="true" />
            Practical Inquiries
          </div>
          <h2 id="faq-heading" className={styles.title}>
            Frequently Addressed Questions
          </h2>
          <p className={styles.subtitle}>
            Clear, honest answers regarding our collaboration terms, disciplinary scope, and
            operational model.
          </p>
        </div>

        <div className={styles.faqList} role="region" aria-label="Frequently asked questions list">
          {FAQ_ITEMS.map((item, index) => {
            const isExpanded = expandedId === item.id;
            const buttonId = `faq-trigger-${item.id}`;
            const panelId = `faq-panel-${item.id}`;

            return (
              <div
                key={item.id}
                className={`${styles.faqItem} ${isExpanded ? styles.itemExpanded : ''}`}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    className={styles.triggerButton}
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isExpanded}
                    aria-controls={panelId}
                  >
                    <span className={styles.itemIndex} aria-hidden="true">
                      0{index + 1}
                    </span>
                    <span className={styles.questionText}>{item.question}</span>
                    <span className={styles.indicator} aria-hidden="true">
                      {isExpanded ? '—' : '+'}
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`${styles.answerPanel} ${isExpanded ? styles.panelOpen : ''}`}
                  hidden={!isExpanded}
                >
                  <p className={styles.answerText}>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
