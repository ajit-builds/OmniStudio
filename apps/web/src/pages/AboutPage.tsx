import { useEffect, type FC } from 'react';
import { AboutPOVSection } from '../components/about/AboutPOVSection.js';
import { AboutEthosSection } from '../components/about/AboutEthosSection.js';
import { AboutPrinciplesSection } from '../components/about/AboutPrinciplesSection.js';
import { AboutMethodologySection } from '../components/about/AboutMethodologySection.js';
import { AboutPracticeSection } from '../components/about/AboutPracticeSection.js';
import { AboutProcessSection } from '../components/about/AboutProcessSection.js';
import { ContactInvitationSection } from '../components/home/ContactInvitationSection.js';
import styles from './AboutPage.module.css';

export const AboutPage: FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'About & Philosophy — Studio Omni';
  }, []);

  return (
    <main id="main-content" className={styles.aboutPage}>
      {/* 1. Point of View */}
      <AboutPOVSection />

      {/* 2. What Studio Omni Means */}
      <AboutEthosSection />

      {/* 3. Five Governing Principles */}
      <AboutPrinciplesSection />

      {/* 4. Between Thinking & Making */}
      <AboutMethodologySection />

      {/* 5. Studio in Practice */}
      <AboutPracticeSection />

      {/* 6. Four-Stage Working Process */}
      <AboutProcessSection />

      {/* 7. Engagement & Commission Transition */}
      <ContactInvitationSection />
    </main>
  );
};

export default AboutPage;
