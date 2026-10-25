export type ProjectCategory = 'Identity Systems' | 'Digital Experiences' | 'Editorial & Campaigns';

export interface ProjectSystemSpec {
  typography: {
    display: string;
    body: string;
    notes: string;
  };
  palette: Array<{
    name: string;
    hex: string;
    role: string;
  }>;
  grid: string;
  principles: string[];
}

export interface ProjectGalleryItem {
  id: string;
  title: string;
  caption: string;
  layout: 'full-width' | 'two-column' | 'offset' | 'specimen';
  visualType: string;
}

export interface ProjectOverview {
  challenge: string;
  insight: string;
  approach: string;
  outcome: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  discipline: string; // backwards compatibility
  year: string;
  summary: string;
  featured: boolean;
  isConcept: boolean; // backwards compatibility
  conceptProject: boolean;
  details: string[]; // backwards compatibility
  visualType: string;
  tags: string[];
  overview: ProjectOverview;
  system: ProjectSystemSpec;
  services: string[];
  gallery: ProjectGalleryItem[];
  relatedProjectSlugs: string[];
}

export const ALL_PROJECTS: readonly Project[] = [
  {
    id: 'proj-01',
    slug: 'aether-form',
    title: 'Aether Form',
    subtitle: 'Spatial Identity & Architectural Identity System',
    category: 'Identity Systems',
    discipline: 'Visual Identity & Spatial Graphics',
    year: '2025',
    summary:
      'A monolithic visual language for an experimental architecture pavilion, exploring negative space, constructivist proportions, and raw concrete materiality.',
    featured: true,
    isConcept: true,
    conceptProject: true,
    details: [
      'Comprehensive typographic and spatial identity guidelines',
      'Tactile printed exhibition catalog with custom embossed grid',
      'Architectural signage system engineered with hairline steel',
    ],
    visualType: 'arch-form',
    tags: ['Identity', 'Spatial Design', 'Exhibition'],
    services: [
      'Visual Identity System',
      'Environmental Signage',
      'Printed Exhibition Ephemera',
      'Material Specifications',
    ],
    overview: {
      challenge:
        'Experimental architectural pavilions frequently rely on transient, decorative marketing that fails to articulate the rigorous geometric tensions of the built environment.',
      insight:
        'When identity graphics adopt the structural proportions and physical tolerances of cast concrete and brushed steel, the communication ceases to be signage and becomes an organic extension of the building envelope.',
      approach:
        'We drafted an uncompromising constructivist identity derived from a 90mm modular grid. Monolithic letterforms, hairline geometric intersecting radii, and unvarnished natural paper substrates translate the spatial volume directly onto the printed surface.',
      outcome:
        'The resulting identity establishes an enduring graphic dialect that honors tactile materiality. It proves that architectural branding can be as permanent, sculptural, and unapologetic as the physical structure it inhabits.',
    },
    system: {
      typography: {
        display: 'Antonio Bold / Condensed Monolithic Titlecase',
        body: 'Plus Jakarta Sans / Medium Architectural Notation',
        notes: 'JetBrains Mono / Millimeter Tolerances & Axis Coordinates',
      },
      palette: [
        { name: 'Archive Paper', hex: '#F1EDE3', role: 'Raw cast background & substrate' },
        { name: 'Graphite Ink', hex: '#242522', role: 'Structural geometry & primary typography' },
        { name: 'Oxide Vermilion', hex: '#B6503B', role: 'Survey datum points & elevation marks' },
      ],
      grid: 'A 12-column architectural matrix with 4mm micro-dividers and locked vertical rhythm corresponding to cast concrete formwork joints.',
      principles: [
        'Negative space is active structural mass, not empty void',
        'Hairline divisions reflect physical structural tolerances',
        'Color is applied strictly as an orientation reference, never decorative ornament',
      ],
    },
    gallery: [
      {
        id: 'gal-01-1',
        title: 'Primary Monolith Elevation',
        caption:
          'Spatial proportion study calibrating the 3:5 aspect ratio against physical sightlines.',
        layout: 'full-width',
        visualType: 'arch-form',
      },
      {
        id: 'gal-01-2',
        title: 'Modular Column Specimen',
        caption: 'Hairline grid divisions calibrated to millimeter architectural formwork joints.',
        layout: 'two-column',
        visualType: 'grid-specimen',
      },
      {
        id: 'gal-01-3',
        title: 'Typographic Tension Matrix',
        caption:
          'Extreme condensed letterforms juxtaposed against expressive editorial serif annotations.',
        layout: 'two-column',
        visualType: 'type-specimen',
      },
      {
        id: 'gal-01-4',
        title: 'Pavilion Directional System',
        caption: 'Etched steel wayfinding markers utilizing unvarnished physical coordinates.',
        layout: 'offset',
        visualType: 'spatial-elevation',
      },
    ],
    relatedProjectSlugs: ['strata-identity', 'katalog-editorial'],
  },
  {
    id: 'proj-02',
    slug: 'katalog-editorial',
    title: 'Katalog Editorial',
    subtitle: 'Publication Architecture & Typography Suite',
    category: 'Editorial & Campaigns',
    discipline: 'Editorial Architecture & Typography',
    year: '2024',
    summary:
      'A tri-annual design journal examining structuralist typography, algorithmic grids, and the intersection of physical print with digital archives.',
    featured: true,
    isConcept: true,
    conceptProject: true,
    details: [
      'Bespoke variable grotesk and serif font pairing',
      'Modular 16-column layout engine for high-density essays',
      'Foil-stamped archival dust jackets on unbleached cotton paper',
    ],
    visualType: 'katalog-grid',
    tags: ['Publication', 'Editorial', 'Typography'],
    services: [
      'Editorial Architecture',
      'Custom Typography Pairing',
      'Print Production Direction',
      'Archival Indexing Engine',
    ],
    overview: {
      challenge:
        'Contemporary critical design journals often struggle to balance dense scholarly footnotes, mathematical diagrams, and high-impact typographic essays without succumbing to visual clutter.',
      insight:
        'Editorial clarity does not require removing complexity; it requires a disciplined multi-track layout grid where critical body text, marginalia, and diagrams occupy distinct, mathematically aligned strata.',
      approach:
        'We engineered a 16-column editorial engine inspired by Otl Aicher and Wim Crouwel. Body columns shift according to essay density, while marginal commentary occupies dedicated outer channels set in a refined editorial serif italic.',
      outcome:
        'The publication achieves an authoritative yet fluid reading experience. The physical tactile unbleached paper stock gives weight to theoretical debates, establishing a permanent collectible document for design practitioners.',
    },
    system: {
      typography: {
        display: 'Antonio Heavy / Ultra-Condensed Editorial Headlines',
        body: 'Newsreader / Optical Serif for Sustained Long-Form Prose',
        notes: 'Plus Jakarta Sans / Tabular Data & Critical Marginalia',
      },
      palette: [
        { name: 'Archive Paper', hex: '#F1EDE3', role: 'Unbleached rag paper surface' },
        { name: 'Graphite Ink', hex: '#242522', role: 'High-density typographic impressions' },
        { name: 'Oxide Vermilion', hex: '#B6503B', role: 'Foil-stamped volume identifiers' },
      ],
      grid: 'A flexible 16-column layout grid permitting 4, 8, and 12-column reading spans with strict baseline lock across all double-page spreads.',
      principles: [
        'Body typography maintains an unbroken vertical cadence across spreads',
        'Marginal commentary mirrors reading velocity',
        'Paper materiality and ink absorption dictate line weights',
      ],
    },
    gallery: [
      {
        id: 'gal-02-1',
        title: 'Editorial Spread Architecture',
        caption:
          'Double-page spread showcasing asymmetric margins and high-contrast typographic hierarchy.',
        layout: 'full-width',
        visualType: 'katalog-grid',
      },
      {
        id: 'gal-02-2',
        title: 'Baseline Cadence Analysis',
        caption:
          'Strict baseline registration ensuring uninterrupted horizontal flow between text blocks.',
        layout: 'two-column',
        visualType: 'grid-specimen',
      },
      {
        id: 'gal-02-3',
        title: 'Typographic Weight Study',
        caption: 'Tension between ultra-condensed title display and delicate Newsreader italics.',
        layout: 'two-column',
        visualType: 'type-specimen',
      },
    ],
    relatedProjectSlugs: ['chronicle-journal', 'aether-form'],
  },
  {
    id: 'proj-03',
    slug: 'monolith-grid',
    title: 'Monolith Grid',
    subtitle: 'Digital System & Interactive Exploration Engine',
    category: 'Digital Experiences',
    discipline: 'Digital Experience & Interface Engineering',
    year: '2024',
    summary:
      'An architectural digital platform for contemporary generative art archives, balancing dense algorithmic metadata with visceral kinetic typography.',
    featured: true,
    isConcept: true,
    conceptProject: true,
    details: [
      'WebGL-accelerated catalog navigation with zero layout shift',
      'Fluid typographic scaling and responsive spatial grids',
      'Accessible keyboard-first interface and micro-interactions',
    ],
    visualType: 'monolith-system',
    tags: ['Web Architecture', 'Three.js', 'Interface'],
    services: [
      'Digital Architecture',
      'WebGL Scene Composition',
      'Design System Engineering',
      'Accessibility Auditing',
    ],
    overview: {
      challenge:
        'Interactive art archives often sacrifice accessibility and sustained reading comfort in pursuit of gratuitous 3D eye candy and unpredictable navigation schemes.',
      insight:
        'Spatial depth and 3D rendering are most powerful when subordinated to a strict architectural coordinate system—acting as a lens for inspection rather than a distracting decorative playground.',
      approach:
        'We designed a headless digital archive powered by a Three.js spatial viewport constrained to planar 2D grid coordinates. Keyboard shortcuts, fluid viewport interpolation, and strict WCAG AAA contrast ensure universal legibility.',
      outcome:
        'The platform demonstrates that high-performance WebGL can live in complete harmony with editorial elegance and universal keyboard navigation, providing an immersive yet distraction-free catalog for digital artifacts.',
    },
    system: {
      typography: {
        display: 'Antonio Regular / Monospaced Coordinate Labels',
        body: 'Plus Jakarta Sans / Precision Interface Text',
        notes: 'JetBrains Mono / Algorithmic Seed Values & Metadata',
      },
      palette: [
        { name: 'Archive Paper', hex: '#F1EDE3', role: 'Canvas ambient backdrop' },
        { name: 'Graphite Ink', hex: '#242522', role: 'Wireframe matrices & typographic labels' },
        { name: 'Oxide Vermilion', hex: '#B6503B', role: 'Active vector coordinate crosshairs' },
      ],
      grid: 'A dynamic responsive viewport matrix dividing screen coordinates into 64 mathematical bounding units with zero cumulative layout shift.',
      principles: [
        'WebGL rendering strictly reflects data structure, never idle motion',
        'Keyboard navigation operates as a first-class spatial controller',
        'State persistence ensures immediate back-button navigation',
      ],
    },
    gallery: [
      {
        id: 'gal-03-1',
        title: 'Coordinate Matrix Projection',
        caption:
          'Interactive spatial canvas displaying mathematical bounding zones and vector crosshairs.',
        layout: 'full-width',
        visualType: 'monolith-system',
      },
      {
        id: 'gal-03-2',
        title: 'Component Matrix & Tokens',
        caption:
          'Strict architectural button and control states engineered with zero rounded corners.',
        layout: 'two-column',
        visualType: 'component-matrix',
      },
      {
        id: 'gal-03-3',
        title: 'Interactive Spatial Calipers',
        caption: 'Realtime dimension calipers calculating viewport scale in mathematical units.',
        layout: 'two-column',
        visualType: 'grid-specimen',
      },
    ],
    relatedProjectSlugs: ['kinetic-syntax', 'aether-form'],
  },
  {
    id: 'proj-04',
    slug: 'chronicle-journal',
    title: 'Chronicle Journal',
    subtitle: 'Digital Monograph & Cultural Archive',
    category: 'Editorial & Campaigns',
    discipline: 'Brand System & Digital Publishing',
    year: '2023',
    summary:
      'A minimalist publishing platform crafted for independent art critics, emphasizing long-form legibility, tactile paper-like backgrounds, and restrained motion.',
    featured: true,
    isConcept: true,
    conceptProject: true,
    details: [
      'Zero-distraction editorial reading environment',
      'Systemic color token framework optimized for low eye strain',
      'Bespoke typographic rhythm and responsive footnote layouts',
    ],
    visualType: 'chronicle-spread',
    tags: ['Publishing', 'Cultural Archive', 'Design Systems'],
    services: [
      'Digital Publishing Platform',
      'Editorial Strategy',
      'Responsive Typography System',
      'Content Modeling',
    ],
    overview: {
      challenge:
        'Digital culture publications have become fragmented by intrusive popups, shifting layout banners, and exhausting high-frequency animations that destroy reader concentration.',
      insight:
        'Long-form critical thinking requires a digital environment that replicates the stillness, intentional proportions, and tactile paper dignity of a physical monograph.',
      approach:
        'We stripped away all decorative overhead, constructing a pure reading environment around an unyielding 68ch column width. Footnotes appear inline at breakpoint scale, and margins expand deliberately on high-resolution displays.',
      outcome:
        'Chronicle Journal sets an editorial benchmark for contemplative digital reading. Readers engage with critical essays with the patience and depth usually reserved for fine printed books.',
    },
    system: {
      typography: {
        display: 'Antonio Medium / Editorial Section Chapters',
        body: 'Newsreader / Literary Serif with Customized Tracking',
        notes: 'JetBrains Mono / Footnote Indexes & Citation References',
      },
      palette: [
        { name: 'Archive Paper', hex: '#F1EDE3', role: 'Warm matte reading ground' },
        { name: 'Graphite Ink', hex: '#242522', role: 'Deep contrast text characters' },
        { name: 'Oxide Vermilion', hex: '#B6503B', role: 'Bookmark ribbons & citation anchors' },
      ],
      grid: 'A central golden-ratio reading column flanked by asymmetric marginalia tracks for critical footnotes and archival citations.',
      principles: [
        'Reading rhythm takes absolute priority over marketing real estate',
        'Transitions occur exclusively on user intent',
        'Footnotes maintain spatial proximity to referencing citations',
      ],
    },
    gallery: [
      {
        id: 'gal-04-1',
        title: 'Asymmetric Reading Spread',
        caption:
          'Monograph layout featuring comfortable 68-character reading lines and dedicated margin tracks.',
        layout: 'full-width',
        visualType: 'chronicle-spread',
      },
      {
        id: 'gal-04-2',
        title: 'Citation Anchor System',
        caption:
          'Fine vermilion indexes connecting critical annotations without interrupting reading velocity.',
        layout: 'two-column',
        visualType: 'type-specimen',
      },
      {
        id: 'gal-04-3',
        title: 'Marginalia Proportion Study',
        caption:
          'Responsive shift converting marginal commentary into collapsible drawer units on mobile.',
        layout: 'two-column',
        visualType: 'grid-specimen',
      },
    ],
    relatedProjectSlugs: ['katalog-editorial', 'monolith-grid'],
  },
  {
    id: 'proj-05',
    slug: 'strata-identity',
    title: 'Strata System',
    subtitle: 'Visual Identity & Cartographic Systems',
    category: 'Identity Systems',
    discipline: 'Visual Identity & Cartographic Systems',
    year: '2025',
    summary:
      'A comprehensive brand and cartographic design system for an independent geology and earth research foundation, built on topographical isolines and mineral data.',
    featured: false,
    isConcept: true,
    conceptProject: true,
    details: [
      'Topographical vector guideline and mathematical symbol set',
      'Field survey notebook system printed with weather-resistant inks',
      'Digital data visualization tokens for geological stratification',
    ],
    visualType: 'strata-topo',
    tags: ['Identity', 'Data Visualization', 'Cartography'],
    services: [
      'Identity Architecture',
      'Cartographic Visual Language',
      'Printed Field Guidelines',
      'Scientific Data Tokens',
    ],
    overview: {
      challenge:
        'Scientific institutions frequently communicate through either dry technical charts or overly sanitized corporate branding that drains the raw physical wonder from geological discovery.',
      insight:
        'Topographical isolines, core sample strata, and survey coordinates contain innate visual poetry when executed with mathematical precision and tactile paper substrates.',
      approach:
        'We derived a complete identity system directly from elevation contours and geological stratification layers. A bespoke set of vector symbols provides clarity across field notebooks, digital sensors, and scientific whitepapers.',
      outcome:
        'Strata System bridges rigorous scientific documentation with an inspiring aesthetic identity, proving that empirical research and fine art direction share the same fundamental pursuit of truth.',
    },
    system: {
      typography: {
        display: 'Antonio Regular / Geological Epoch Classifications',
        body: 'Plus Jakarta Sans / Research Documentation & Field Data',
        notes: 'JetBrains Mono / Elevation Coordinates & Sample IDs',
      },
      palette: [
        { name: 'Archive Paper', hex: '#F1EDE3', role: 'Limestone substrate surface' },
        { name: 'Graphite Ink', hex: '#242522', role: 'Topographic contour vectors' },
        {
          name: 'Oxide Vermilion',
          hex: '#B6503B',
          role: 'Fault lines & geological survey benchmarks',
        },
      ],
      grid: 'A mathematical coordinate grid based on 100m real-world elevation increments translated into proportional typographic increments.',
      principles: [
        'Line density communicates real-world elevation gradient',
        'Labels are aligned along natural geological strata',
        'Symbols adhere to strict scientific cartographic standards',
      ],
    },
    gallery: [
      {
        id: 'gal-05-1',
        title: 'Topographic Stratification Map',
        caption: 'Primary visual identity device mapping subterranean mineral fault lines.',
        layout: 'full-width',
        visualType: 'strata-topo',
      },
      {
        id: 'gal-05-2',
        title: 'Elevation Caliper Specimen',
        caption: 'Micro-calibrated scale bars for geological field survey documentation.',
        layout: 'two-column',
        visualType: 'grid-specimen',
      },
      {
        id: 'gal-05-3',
        title: 'Scientific Symbol Index',
        caption:
          'Vector glyph set designed for instantaneous recognition under harsh field conditions.',
        layout: 'two-column',
        visualType: 'type-specimen',
      },
    ],
    relatedProjectSlugs: ['aether-form', 'kinetic-syntax'],
  },
  {
    id: 'proj-06',
    slug: 'kinetic-syntax',
    title: 'Kinetic Syntax',
    subtitle: 'Digital Experience & Algorithmic Tooling',
    category: 'Digital Experiences',
    discipline: 'Digital Experience & Algorithmic Tooling',
    year: '2024',
    summary:
      'A real-time typography workbench and web playground exploring parametric letterforms, optical optical sizing, and algorithmic layout transformations.',
    featured: false,
    isConcept: true,
    conceptProject: true,
    details: [
      'Interactive canvas rendering variable font axes in real time',
      'Parametric grid generator with direct CSS/SVG export',
      'Audited zero-latency keyboard controls and presets',
    ],
    visualType: 'kinetic-type',
    tags: ['Web Application', 'Typography Tool', 'Parametric Design'],
    services: [
      'Parametric Web Application',
      'Variable Font Engineering',
      'Interactive Canvas Controls',
      'Performance Optimization',
    ],
    overview: {
      challenge:
        'Type design tools are notoriously complex desktop software, while web-based font specimen pages are static and fail to reveal how type behaves dynamically under user interaction.',
      insight:
        'When letterforms can be manipulated in real time along weight, width, and slant axes inside the browser, typography transforms from a static asset into an interactive instrument.',
      approach:
        'We built a lightweight web workbench that exposes variable font axes through intuitive geometric sliders and direct keyboard controls. Users can test layouts across extreme viewports and export production-ready CSS tokens immediately.',
      outcome:
        'Kinetic Syntax serves as both an educational playground and an indispensable production utility for typographic designers, receiving enthusiastic praise across international type communities.',
    },
    system: {
      typography: {
        display: 'Antonio Heavy / Parametric Dynamic Specimen Titles',
        body: 'Plus Jakarta Sans / Control Parameters & Sliders',
        notes: 'JetBrains Mono / Realtime Variable Font Axis Coordinates',
      },
      palette: [
        { name: 'Archive Paper', hex: '#F1EDE3', role: 'Workbench inspection surface' },
        { name: 'Graphite Ink', hex: '#242522', role: 'Letterform glyphs & measurement calipers' },
        { name: 'Oxide Vermilion', hex: '#B6503B', role: 'Active vector control handles' },
      ],
      grid: 'A modular inspection canvas featuring variable baseline increments and dynamic optical caliper overlays.',
      principles: [
        'Render loops stay locked to 60fps with zero layout thrashing',
        'Sliders reflect exact variable font OpenType axis tags',
        'State is serializable directly into shareable URL parameters',
      ],
    },
    gallery: [
      {
        id: 'gal-06-1',
        title: 'Parametric Letterform Inspection',
        caption: 'Dynamic glyph canvas showing anchor points, bezier handles, and optical bounds.',
        layout: 'full-width',
        visualType: 'kinetic-type',
      },
      {
        id: 'gal-06-2',
        title: 'Variable Axis Matrix',
        caption:
          'Simultaneous multi-axis comparison evaluating letterform degradation at extreme widths.',
        layout: 'two-column',
        visualType: 'component-matrix',
      },
      {
        id: 'gal-06-3',
        title: 'Optical Caliper Guides',
        caption:
          'Precision hairline calipers measuring x-height, cap-height, and overshoot margins.',
        layout: 'two-column',
        visualType: 'grid-specimen',
      },
    ],
    relatedProjectSlugs: ['monolith-grid', 'katalog-editorial'],
  },
] as const;

/**
 * Filtered subset for homepage selected work (maintains backwards compatibility)
 */
export const SELECTED_PROJECTS: readonly Project[] = ALL_PROJECTS.filter((p) => p.featured);

/**
 * Query helper to retrieve a project by its URL-safe slug
 */
export const getProjectBySlug = (slug: string): Project | undefined => {
  return ALL_PROJECTS.find((p) => p.slug === slug);
};

/**
 * Query helper to retrieve all projects
 */
export const getAllProjects = (): readonly Project[] => {
  return ALL_PROJECTS;
};

/**
 * Query helper to retrieve projects by category
 */
export const getProjectsByCategory = (category: ProjectCategory | 'All'): readonly Project[] => {
  if (category === 'All') {
    return ALL_PROJECTS;
  }
  return ALL_PROJECTS.filter((p) => p.category === category);
};

/**
 * Query helper to retrieve valid related projects (excluding the current project)
 */
export const getRelatedProjects = (currentProject: Project, limit = 2): readonly Project[] => {
  const related = currentProject.relatedProjectSlugs
    .map((slug) => getProjectBySlug(slug))
    .filter((p): p is Project => p !== undefined && p.slug !== currentProject.slug);

  // If related slugs don't yield enough, fill with other projects from same category
  if (related.length < limit) {
    const categorySiblings = ALL_PROJECTS.filter(
      (p) =>
        p.slug !== currentProject.slug &&
        !related.some((r) => r.slug === p.slug) &&
        p.category === currentProject.category,
    );
    related.push(...categorySiblings);
  }

  return related.slice(0, limit);
};

/**
 * Development & test time data invariant validator
 */
export const validateProjectData = (): {
  valid: boolean;
  errors: string[];
} => {
  const errors: string[] = [];
  const slugs = new Set<string>();
  const validCategories: ProjectCategory[] = [
    'Identity Systems',
    'Digital Experiences',
    'Editorial & Campaigns',
  ];

  ALL_PROJECTS.forEach((project) => {
    // Unique slug check
    if (slugs.has(project.slug)) {
      errors.push(`Duplicate slug detected: ${project.slug}`);
    }
    slugs.add(project.slug);

    // Category validity check
    if (!validCategories.includes(project.category)) {
      errors.push(`Invalid category for ${project.slug}: ${project.category}`);
    }

    // Concept honesty check
    if (!project.conceptProject || !project.isConcept) {
      errors.push(`Project ${project.slug} must be explicitly marked as a concept project`);
    }

    // Related projects resolution check
    project.relatedProjectSlugs.forEach((relSlug) => {
      const resolved = ALL_PROJECTS.find((p) => p.slug === relSlug);
      if (!resolved) {
        errors.push(`Project ${project.slug} references invalid related slug: ${relSlug}`);
      }
      if (relSlug === project.slug) {
        errors.push(`Project ${project.slug} references itself in relatedProjectSlugs`);
      }
    });

    // Gallery integrity check
    if (!project.gallery || project.gallery.length === 0) {
      errors.push(`Project ${project.slug} has no gallery items`);
    }
  });

  return {
    valid: errors.length === 0,
    errors,
  };
};
