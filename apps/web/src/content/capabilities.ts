export interface Capability {
  id: string;
  numeral: string;
  title: string;
  statement: string;
  description: string;
  deliverables: readonly string[];
}

export const CAPABILITIES: readonly Capability[] = [
  {
    id: 'cap-01',
    numeral: 'I',
    title: 'Identity Systems',
    statement: 'Form follows systemic discipline.',
    description:
      'We craft architectural brand identities built to withstand ephemeral trends. From mathematical logomarks and bespoke typography to tactile physical collateral, every element functions as part of a coherent visual grammar.',
    deliverables: [
      'Visual Identity & Brand Architecture',
      'Custom Grotesk & Serif Typographic Systems',
      'Tactile Print Collateral & Material Specifications',
      'Systemic Guidelines & Component Tokens',
    ],
  },
  {
    id: 'cap-02',
    numeral: 'II',
    title: 'Digital Experiences',
    statement: 'Engineering the invisible interaction.',
    description:
      'We build websites and digital environments that feel tactile, immediate, and editorially confident. Combining modern TypeScript architecture, Three.js spatial compositions, and fluid GSAP physics, our digital work treats code as an artisanal craft.',
    deliverables: [
      'Bespoke Web Platforms & Editorial Archives',
      'Three.js Spatial Graphics & WebGL Explorations',
      'Design Systems & Component Architectures',
      'Micro-Interactions & Accessible Motion Choreography',
    ],
  },
  {
    id: 'cap-03',
    numeral: 'III',
    title: 'Editorial & Campaigns',
    statement: 'Critical writing staged with architectural precision.',
    description:
      'We stage complex cultural discourse, monographs, and architectural publications with rigorous hierarchy and generous negative space. We treat publication design as spatial choreography across both physical pages and digital canvases.',
    deliverables: [
      'Monographs, Books & Cultural Publications',
      'Exhibition Identity & Spatial Wayfinding',
      'Campaign Architecture & Editorial Direction',
      'Digital Essay Staging & Publication Engines',
    ],
  },
] as const;
