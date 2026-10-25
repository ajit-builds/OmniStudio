export type ArticleBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; level: 2 | 3; text: string }
  | { type: 'image'; visualType: string; alt: string; caption?: string }
  | { type: 'quote'; text: string; attribution?: string }
  | { type: 'list'; items: string[]; ordered?: boolean }
  | { type: 'divider' }
  | { type: 'callout'; title: string; text: string };

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: string;
  topic: string; // backwards compatibility
  date: string; // backwards compatibility
  publishedAt?: string;
  updatedAt?: string;
  status: 'published' | 'draft';
  author: string;
  readingTime: string;
  readingTimeMinutes: number;
  featured: boolean;
  coverVisualType: string;
  isConcept: boolean;
  content: readonly ArticleBlock[];
  relatedArticleSlugs: readonly string[];
}

export const ARTICLES: readonly Article[] = [
  {
    id: 'art-01',
    slug: 'the-invisible-grid',
    title: 'The Invisible Grid',
    subtitle: 'Why the most transformative systems remain imperceptible to the eye.',
    excerpt:
      'True structural mastery does not shout for attention. When typography, spatial ratios, and negative space align with mathematical discipline, the user experiences clarity without ever conscious awareness of the armature underneath.',
    category: 'Systemic Design',
    topic: 'Systemic Design',
    date: 'Autumn 2025',
    publishedAt: '2025-10-15',
    status: 'published',
    author: 'Studio Omni Editorial',
    readingTime: '5 min read',
    readingTimeMinutes: 5,
    featured: true,
    coverVisualType: 'grid-specimen',
    isConcept: true,
    content: [
      {
        type: 'paragraph',
        text: 'In architectural discourse, structural engineering is celebrated when it achieves near-invisibility. The load-bearing pillars of a cathedral or the tension cables of a suspension bridge do not exist to be scrutinized in isolation; they exist to make space possible. In digital and visual design, the grid serves the identical purpose.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'The Fallacy of Decorative Geometry',
      },
      {
        type: 'paragraph',
        text: 'Too often, contemporary design templates treat the grid as an aesthetic gimmick—drawing visible lines across a screen simply to suggest technical competence. But drawing a grid is not the same as submitting to one. A true grid is an unyielding mathematical contract: it governs the baseline cadence of typography, dictates the volumetric ratio between image plates, and regulates the velocity at which an eye travels across the plane.',
      },
      {
        type: 'quote',
        text: 'The grid does not exist to be seen; it exists so that everything placed upon it can be understood.',
        attribution: 'Studio Omni Field Notes, Axis 01',
      },
      {
        type: 'paragraph',
        text: 'When we designed the construction armature for Studio Omni, we established a 16-column modular system calibrated to a 4mm baseline grid. Every headline line-height is locked to an exact multiple of this unit. As a consequence, reading velocity remains serene even across complex multi-column case studies.',
      },
      {
        type: 'image',
        visualType: 'grid-specimen',
        alt: 'Architectural modular 16-column layout engine and baseline registration preview',
        caption: 'Figure 1.0 — Baseline registration analysis across asymmetric editorial columns.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Restraint as an Active Agent',
      },
      {
        type: 'paragraph',
        text: 'Embracing an invisible grid requires the courage of restraint. It demands that designers resist the temptation to fill empty space with gratuitous widgets, floating 3D spheres, or synthetic gradients. Negative space is not empty void; it is active structural mass.',
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Negative space must be calculated with the same proportional rigor as physical matter.',
          'Type size transitions must adhere to an uncompromising mathematical scale.',
          'Horizontal hairline boundaries must reflect physical structural tolerances rather than decorative accents.',
        ],
      },
      {
        type: 'callout',
        title: 'Systemic Axiom',
        text: 'If an element cannot justify its spatial coordinates through structural necessity, it does not belong in the system.',
      },
      {
        type: 'divider',
      },
      {
        type: 'paragraph',
        text: 'When the invisible grid functions flawlessly, the reader forgets about the screen entirely. What remains is pure discourse: clear thinking, unencumbered by noise, enduring in its precision.',
      },
    ],
    relatedArticleSlugs: ['when-a-website-becomes-an-identity', 'the-case-for-less-done-better'],
  },
  {
    id: 'art-02',
    slug: 'when-a-website-becomes-an-identity',
    title: 'When a Website Becomes an Identity',
    subtitle: 'Moving past static brand PDFs into living, kinetic digital artifacts.',
    excerpt:
      'For contemporary practices, the digital interface is not a passive brochure—it is the definitive manifestation of the brand. How state machines, interaction physics, and editorial typography form the primary corporate identity.',
    category: 'Digital Architecture',
    topic: 'Digital Architecture',
    date: 'Summer 2025',
    publishedAt: '2025-07-20',
    status: 'published',
    author: 'Studio Omni Editorial',
    readingTime: '7 min read',
    readingTimeMinutes: 7,
    featured: false,
    coverVisualType: 'monolith-system',
    isConcept: true,
    content: [
      {
        type: 'paragraph',
        text: 'For decades, brand identity was conceived as an exercise in flat graphic reproduction. A studio would design a mark, specify two Pantone swatches, bind them into a hundred-page brand guidelines book, and consider the system complete. The digital experience was treated as an afterthought—a secondary medium tasked with translating print assets into HTML.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'The Inversion of Primary Touchpoints',
      },
      {
        type: 'paragraph',
        text: 'Today, this hierarchy is completely inverted. For modern architecture practices, cultural foundations, and technology ventures, the website is the primary physical-digital interface where audiences experience the brand. A static PDF cannot articulate how an identity moves, how it responds to pointer velocity, or how its typography scales across viewports.',
      },
      {
        type: 'image',
        visualType: 'monolith-system',
        alt: 'Spatial coordinate matrix and responsive state machine projection',
        caption:
          'Figure 2.1 — Kinetic typography and WebGL viewport coordinates functioning as primary brand identity.',
      },
      {
        type: 'quote',
        text: 'An identity is no longer what an organization prints on business cards; it is how its digital presence behaves under human interaction.',
        attribution: 'Studio Omni Digital Practice Notes',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Code as an Artisanal Medium',
      },
      {
        type: 'paragraph',
        text: 'When we approach digital experiences at Studio Omni, code is not viewed as a mechanical implementation layer to be outsourced. It is treated as an artisanal medium alongside typography and paper stock. TypeScript contracts, Three.js shaders, and GSAP timing curves are the digital mortar holding the brand system together.',
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'State machines define emotional composure: predictable, serene, never frantic.',
          'Micro-interactions must have tangible physical mass and cubic-bezier deceleration.',
          'Layout shifts must be mathematically zero to preserve reader trust and legibility.',
        ],
      },
      {
        type: 'paragraph',
        text: 'By elevating the digital platform to the status of primary brand artifact, organizations achieve an authentic, living identity that communicates confidence before a single paragraph is read.',
      },
    ],
    relatedArticleSlugs: ['the-invisible-grid', 'the-case-for-less-done-better'],
  },
  {
    id: 'art-03',
    slug: 'the-case-for-less-done-better',
    title: 'The Case for Less, Done Better',
    subtitle: 'On radical restraint and resisting interface inflation in an era of noise.',
    excerpt:
      'When every interface glows with synthetic gradients and AI-generated noise, true distinction is found in typographic conviction, tactile paper substrates, and the deliberate courage of negative space.',
    category: 'Editorial Philosophy',
    topic: 'Editorial Philosophy',
    date: 'Spring 2025',
    publishedAt: '2025-04-10',
    status: 'published',
    author: 'Studio Omni Editorial',
    readingTime: '4 min read',
    readingTimeMinutes: 4,
    featured: false,
    coverVisualType: 'type-specimen',
    isConcept: true,
    content: [
      {
        type: 'paragraph',
        text: 'We live in an era of interface inflation. Digital products and studio portfolios increasingly resemble sensory overload: animated gradients, glowing borders, floating blobs, and popup interruptions competing for attention. The assumption underlying this trend is that visual intensity equates to creative sophistication.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'The Dignity of the Unadorned Surface',
      },
      {
        type: 'paragraph',
        text: 'Studio Omni was founded on the opposite conviction: that radical restraint is the ultimate expression of creative confidence. When work is genuinely thoughtful, it does not require decorative camouflage. An unbleached paper surface (#F1EDE3), deep graphite ink (#242522), and a selective vermilion accent (#B6503B) provide all the contrast necessary to convey profound ideas.',
      },
      {
        type: 'image',
        visualType: 'type-specimen',
        alt: 'High-contrast typographic tension plate contrasting condensed display with delicate Newsreader serif',
        caption:
          'Figure 3.0 — The tension between raw monolithic display type and expressive optical serif prose.',
      },
      {
        type: 'quote',
        text: 'Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.',
        attribution: 'Antoine de Saint-Exupéry',
      },
      {
        type: 'paragraph',
        text: 'Restraint is not minimalism for the sake of austerity. It is a purposeful filter that ensures every element has earned its place. When you remove the noise, what remains is unmistakable: structure, cadence, and meaning.',
      },
    ],
    relatedArticleSlugs: ['the-invisible-grid', 'when-a-website-becomes-an-identity'],
  },
  {
    id: 'art-04',
    slug: 'the-topology-of-reading-velocity',
    title: 'The Topology of Reading Velocity',
    subtitle:
      'Draft exploration of eye-tracking telemetry and cognitive cadence in digital monographs.',
    excerpt:
      'A working research paper analyzing how line length, font optical sizing, and marginal annotations alter reading speed and comprehension retention.',
    category: 'Editorial Philosophy',
    topic: 'Editorial Philosophy',
    date: 'Draft — Unpublished',
    status: 'draft',
    author: 'Studio Omni Research Desk',
    readingTime: '6 min read',
    readingTimeMinutes: 6,
    featured: false,
    coverVisualType: 'chronicle-spread',
    isConcept: true,
    content: [
      {
        type: 'paragraph',
        text: 'This working paper is currently in draft formulation and is not publicly listed.',
      },
    ],
    relatedArticleSlugs: ['the-invisible-grid'],
  },
] as const;

/**
 * All articles including drafts
 */
export const ALL_ARTICLES = ARTICLES;

/**
 * Filtered subset for public listing: Only published articles
 */
export const PUBLISHED_ARTICLES: readonly Article[] = ARTICLES.filter(
  (a) => a.status === 'published',
);

/**
 * Draft articles for internal editorial inspection
 */
export const DRAFT_ARTICLES: readonly Article[] = ARTICLES.filter((a) => a.status === 'draft');

/**
 * Filter published articles by category
 */
export const getArticlesByCategory = (category: string): readonly Article[] => {
  if (category === 'All') {
    return PUBLISHED_ARTICLES;
  }
  return PUBLISHED_ARTICLES.filter((a) => a.category === category);
};

/**
 * Backwards compatibility export for homepage preview section
 */
export const JOURNAL_PREVIEWS: readonly Article[] = PUBLISHED_ARTICLES.slice(0, 3);

/**
 * Query helper to retrieve an article by slug (honors publication status if requested)
 */
export const getArticleBySlug = (slug: string, includeDrafts = false): Article | undefined => {
  return ARTICLES.find((a) => a.slug === slug && (includeDrafts || a.status === 'published'));
};

/**
 * Query helper for published articles
 */
export const getPublishedArticles = (): readonly Article[] => {
  return PUBLISHED_ARTICLES;
};

/**
 * Query helper for related articles excluding current
 */
export const getRelatedArticles = (currentArticle: Article, limit = 2): readonly Article[] => {
  const related = currentArticle.relatedArticleSlugs
    .map((slug) => getArticleBySlug(slug, false))
    .filter((a): a is Article => a !== undefined && a.slug !== currentArticle.slug);

  if (related.length < limit) {
    const siblings = PUBLISHED_ARTICLES.filter(
      (a) =>
        a.slug !== currentArticle.slug &&
        !related.some((r) => r.slug === a.slug) &&
        a.category === currentArticle.category,
    );
    related.push(...siblings);
  }

  return related.slice(0, limit);
};
