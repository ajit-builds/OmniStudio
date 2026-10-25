import { useEffect, type FC } from 'react';
import { ContactIntro } from '../components/contact/ContactIntro.js';
import { ContactForm } from '../components/contact/ContactForm.js';
import { ContactDirectInfo } from '../components/contact/ContactDirectInfo.js';
import styles from './ContactPage.module.css';

export const ContactPage: FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Initiate Dialogue — Contact — Studio Omni';
  }, []);

  return (
    <main id="main-content" className={styles.contactPage}>
      {/* 1. Distinctive Editorial Introduction */}
      <ContactIntro />

      {/* 2. Primary Inquiry Section with Form and Studio Protocol */}
      <section className={styles.formSection} aria-label="Commission Inquiry">
        <div className="container-wide">
          <div className={styles.layoutGrid}>
            <div className={styles.formCol}>
              <div className={styles.formHeader}>
                <span className={styles.sectionIndex} aria-hidden="true">
                  Section / 01
                </span>
                <h2 className={styles.formTitle}>Project Context & Parameters</h2>
                <p className={styles.formSubtitle}>
                  Please articulate your organizational background and core engagement goals.
                </p>
              </div>

              <ContactForm />
            </div>

            <div className={styles.infoCol}>
              <ContactDirectInfo />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
