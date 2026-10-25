export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Engagement' | 'Scope' | 'Disciplines';
}

export const FAQ_ITEMS: readonly FaqItem[] = [
  {
    id: 'faq-01',
    question: 'What types of projects does Studio Omni take on?',
    answer:
      'We collaborate primarily with architecture practices, cultural institutions, independent publishers, and technology-led studios that value intellectual rigor and design-first thinking. Engagements typically center on visual identity systems, bespoke digital experiences, or publication and editorial design.',
    category: 'Engagement',
  },
  {
    id: 'faq-02',
    question: 'Can I commission a single standalone discipline?',
    answer:
      'Yes. While our disciplines are engineered to interconnect seamlessly, many commissions begin with a single focused need—such as an identity system, an exhibition catalog, or a specialized web platform. In every case, we design with systemic principles so future extensions remain completely harmonious.',
    category: 'Disciplines',
  },
  {
    id: 'faq-03',
    question: 'Can visual identity and digital platform work be combined?',
    answer:
      'Combining visual identity with digital experience architecture is one of our strongest collaborative models. Developing the brand language in direct conjunction with the digital design system ensures that typography, spatial grids, and interaction physics reflect one unified creative vision with zero translation loss.',
    category: 'Disciplines',
  },
  {
    id: 'faq-04',
    question: 'How is a project scope defined?',
    answer:
      'Every project commences with our Discover and Define methodology. During this initial inquiry, we analyze your institutional context, communication objectives, technical requirements, and material constraints. Together we draft a detailed scope document establishing exact deliverables, milestones, and responsibilities before any construction begins.',
    category: 'Scope',
  },
  {
    id: 'faq-05',
    question: 'How do timelines and pricing operate?',
    answer:
      'Because we author bespoke, tailored systems rather than reusing pre-packaged templates, timelines and fees are calculated individually based on the complexity, deliverables, and technical requirements of each brief. We establish fixed, milestone-based agreements with complete scope transparency and no hidden contingencies.',
    category: 'Scope',
  },
  {
    id: 'faq-06',
    question: 'What happens after the initial inquiry is submitted?',
    answer:
      'Upon receiving an inquiry through our contact channel, we review the brief within 2 to 3 business days to assess alignment with our studio capabilities and current schedule. If the inquiry aligns, we schedule an initial dialogue to explore the project context in depth and determine whether our design-first process is the right fit.',
    category: 'Engagement',
  },
] as const;
