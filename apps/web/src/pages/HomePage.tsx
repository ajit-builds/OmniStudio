import type { FC } from 'react';
import { HeroSection } from '../components/home/HeroSection.js';
import { SelectedWorkSection } from '../components/home/SelectedWorkSection.js';
import { PhilosophySection } from '../components/home/PhilosophySection.js';
import { CapabilitiesSection } from '../components/home/CapabilitiesSection.js';
import { ProcessSection } from '../components/home/ProcessSection.js';
import { JournalPreviewSection } from '../components/home/JournalPreviewSection.js';
import { ContactInvitationSection } from '../components/home/ContactInvitationSection.js';

export const HomePage: FC = () => {
  return (
    <main id="main-content">
      {/* A. Hero: Studio Omni Signature Experience */}
      <HeroSection />

      {/* B. Selected Work: Editorial Compositions */}
      <SelectedWorkSection />

      {/* C. Philosophy: The Thinking Behind the Work */}
      <PhilosophySection />

      {/* D. Capabilities: Three Connected Disciplines */}
      <CapabilitiesSection />

      {/* E. Process: Structure to Expression */}
      <ProcessSection />

      {/* F. Journal: Essays & Field Notes Preview */}
      <JournalPreviewSection />

      {/* G. Contact Invitation: High-Contrast Dialogue Block */}
      <ContactInvitationSection />
    </main>
  );
};

export default HomePage;
