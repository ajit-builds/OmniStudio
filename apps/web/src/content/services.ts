export interface ServiceFamily {
  slug: string;
  order: number;
  numeral: string;
  title: string;
  tagline: string;
  shortDescription: string;
  description: string;
  scopeNote?: string;
  deliverables: readonly string[];
  suitableFor: readonly string[];
  relatedProjectSlugs: readonly string[];
  valueProposition: string;
}

export const SERVICE_FAMILIES: readonly ServiceFamily[] = [
  {
    slug: 'identity-systems',
    order: 1,
    numeral: '01',
    title: 'Identity Systems',
    tagline: 'Form follows systemic discipline.',
    shortDescription:
      'Coherent visual languages, custom typography, and physical-digital brand guidelines.',
    description:
      'We establish enduring visual identities grounded in mathematical proportions, typography, and material honesty. An identity from Studio Omni is not a superficial logo stuck onto marketing templates; it is a complete grammatical system that governs every mark, letterform, and spatial margin your audience encounters.',
    scopeNote:
      'Each identity scope is calibrated to institutional requirements—ranging from focused identity foundations to multi-format environmental guidelines.',
    deliverables: [
      'Brand discovery & creative direction framework',
      'Visual identity concepts & core mark geometry',
      'Wordmark craftsmanship & secondary brand elements',
      'Bespoke typography pairing & typographic hierarchy guidelines',
      'Tonal color systems & physical material specifications',
      'Graphic language, iconography & technical coordinate assets',
      'Comprehensive brand governance & usage documentation',
    ],
    suitableFor: [
      'Architectural practices & spatial design studios',
      'Pioneering technology platforms seeking tactile gravitas',
      'Cultural foundations, museums & independent research institutes',
      'Design-led ventures launching a definitive new presence',
    ],
    relatedProjectSlugs: ['aether-form', 'strata-identity'],
    valueProposition:
      'An immutable visual identity system that retains structural clarity and recognition across physical paper, environmental signage, and high-resolution screens.',
  },
  {
    slug: 'digital-experiences',
    order: 2,
    numeral: '02',
    title: 'Digital Experiences',
    tagline: 'Engineering the invisible interaction.',
    shortDescription:
      'High-performance web architecture, Three.js spatial scenes, and tactile editorial interfaces.',
    description:
      'We approach websites and digital platforms as complete architectural spaces rather than collections of interchangeable web templates. By pairing modern TypeScript foundations with Three.js spatial compositions and fluid GSAP physics, our digital experiences prioritize sustained reading comfort, instant responsiveness, and visceral craft.',
    scopeNote:
      'We clearly delineate between interface design, interactive prototyping, and full-stack frontend engineering, agreeing on implementation scopes prior to commencement.',
    deliverables: [
      'Digital strategy, information architecture & user flows',
      'High-density editorial interface design & spatial wireframing',
      'Responsive design systems with strict zero-layout-shift tokens',
      'Frontend engineering (React, TypeScript, Next.js / Vite)',
      'Three.js / WebGL spatial compositions & geometric calibration',
      'Restrained GSAP motion choreography & micro-interactions',
      'WCAG AAA accessibility auditing, keyboard navigation & contrast testing',
    ],
    suitableFor: [
      'High-end design practices requiring showcase portfolio platforms',
      'Generative art archives, digital monographs & cultural repositories',
      'Modern software tools seeking distinction from generic SaaS templates',
      'Publishers seeking distraction-free digital reading environments',
    ],
    relatedProjectSlugs: ['monolith-grid', 'kinetic-syntax'],
    valueProposition:
      'Digital platforms that merge artistic distinction with technical reliability—delivering sub-second load times, universal accessibility, and memorable interaction.',
  },
  {
    slug: 'editorial-campaigns',
    order: 3,
    numeral: '03',
    title: 'Editorial & Campaigns',
    tagline: 'Critical discourse staged with architectural precision.',
    shortDescription:
      'Printed journals, exhibition monographs, digital publishing engines, and spatial wayfinding.',
    description:
      'We stage complex cultural discourse, theoretical essays, and architectural publications with generous negative space, strict baseline registration, and tactile paper substrates. We treat publication design as spatial choreography across physical spreads and responsive screens alike.',
    scopeNote:
      'Editorial engagements span physical print production direction through to custom digital publishing engines and campaign design assets.',
    deliverables: [
      'Editorial art direction & publication architecture',
      'Multi-column grid systems & mathematical baseline cadences',
      'Printed exhibition catalogs, monographs & physical ephemera',
      'Digital publication engines & responsive essay reading layouts',
      'Campaign visual concepts & spatial exhibition graphics',
      'Content-led interactive landing experiences',
      'Print production direction, paper stock selection & foil specifications',
    ],
    suitableFor: [
      'Independent publishers, literary journals & design magazines',
      'Curators & cultural institutions staging major exhibitions',
      'Architects publishing monographs or retrospective catalogs',
      'Organizations launching thoughtful, content-first campaigns',
    ],
    relatedProjectSlugs: ['katalog-editorial', 'chronicle-journal'],
    valueProposition:
      'A commanding editorial voice that commands deep reader focus, honoring the intellectual weight of your ideas across print and digital media.',
  },
] as const;

export const getServiceBySlug = (slug: string): ServiceFamily | undefined => {
  return SERVICE_FAMILIES.find((s) => s.slug === slug);
};
