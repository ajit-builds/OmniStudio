export interface ProcessStage {
  id: string;
  step: string;
  title: string;
  tagline: string;
  description: string;
  actions: readonly string[];
}

export const PROCESS_STAGES: readonly ProcessStage[] = [
  {
    id: 'stage-discover',
    step: 'Stage 01',
    title: 'Discover',
    tagline: 'Unearthing latent structural tensions and opportunities.',
    description:
      'We examine the deeper cultural context, institutional history, and architectural tensions of the project. We resist early superficial solutions, focusing instead on defining the foundational inquiry.',
    actions: [
      'Structural context analysis and precedent auditing',
      'Stakeholder discourse and core intent crystallization',
      'Material and medium feasibility studies',
    ],
  },
  {
    id: 'stage-define',
    step: 'Stage 02',
    title: 'Define',
    tagline: 'Establishing mathematical ratios and typographic principles.',
    description:
      'Before a single layout is assembled, we construct the underlying rules: typographic scales, mathematical grid proportions, palette boundaries, and interaction physics that govern the entire system.',
    actions: [
      'Formulation of the core conceptual armature',
      'Color token governance and contrast validation',
      'Typographic pairing and responsive scaling models',
    ],
  },
  {
    id: 'stage-construct',
    step: 'Stage 03',
    title: 'Construct',
    tagline: 'Assembling the identity, interface, and spatial choreography.',
    description:
      'The architecture takes physical and digital form. We engineer the identity components, develop production-grade web systems, and compose spatial geometry with uncompromising typographic precision.',
    actions: [
      'Rigorous component development and layout orchestration',
      'Three.js spatial composition and WebGL engineering',
      'Tactile print proofing and prototype validation',
    ],
  },
  {
    id: 'stage-refine',
    step: 'Stage 04',
    title: 'Refine',
    tagline: 'Editing, stress-testing, and bringing the system into razor-sharp focus.',
    description:
      'We subject the system to rigorous stress testing: accessibility compliance, responsive edge cases, kinetic timing curves, and editorial clarity. The outcome is distilled until nothing can be removed.',
    actions: [
      'Micro-interaction choreography and frame-rate optimization',
      'Accessibility auditing (WCAG AAA focus states, reduced motion)',
      'Documentation of enduring system governance',
    ],
  },
] as const;
