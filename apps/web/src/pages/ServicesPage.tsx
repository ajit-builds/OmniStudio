import { useEffect, type FC } from 'react';
import { ServicesIntroSection } from '../components/services/ServicesIntroSection.js';
import { ServiceFamilySection } from '../components/services/ServiceFamilySection.js';
import { ServicesIntersectionsSection } from '../components/services/ServicesIntersectionsSection.js';
import { ServicesEngagementSection } from '../components/services/ServicesEngagementSection.js';
import { ServicesFaqSection } from '../components/services/ServicesFaqSection.js';
import { ContactInvitationSection } from '../components/home/ContactInvitationSection.js';
import styles from './ServicesPage.module.css';

export const ServicesPage: FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Services & Disciplines — Studio Omni';
  }, []);

  return (
    <main id="main-content" className={styles.servicesPage}>
      {/* 1. Services Introduction */}
      <ServicesIntroSection />

      {/* 2. Core Service Families: Identity, Digital, Editorial */}
      <ServiceFamilySection />

      {/* 3. Intersections: The Tripartite Omni Construction System */}
      <ServicesIntersectionsSection />

      {/* 4. Engagement Framework: Four-Stage Client Expectations */}
      <ServicesEngagementSection />

      {/* 5. Frequently Addressed Questions (Accessible Accordion) */}
      <ServicesFaqSection />

      {/* 6. Closing Commission & Dialogue Invitation */}
      <ContactInvitationSection />
    </main>
  );
};

export default ServicesPage;
