export interface StudioPrinciple {
  id: string;
  numeral: string;
  title: string;
  italicWord?: string;
  statement: string;
  rationale: string;
  coordinate: string;
}

export const STUDIO_PRINCIPLES: readonly StudioPrinciple[] = [
  {
    id: 'principle-01',
    numeral: '01',
    title: 'Structure before',
    italicWord: 'Surface',
    statement:
      'Meaningful creative work is not cosmetic styling applied at the end; it is the natural consequence of structural decisions made at the root.',
    rationale:
      'We construct the rules, typographic proportions, and spatial constraints first. When the underlying architecture is sound, aesthetic elegance emerges inevitably without the need for superficial decorative filler.',
    coordinate: 'AXIS 01 / FORM',
  },
  {
    id: 'principle-02',
    numeral: '02',
    title: 'Clarity over',
    italicWord: 'Noise',
    statement:
      'Every unnecessary element dilutes the potency of the essential; communication achieves authority through deliberate subtraction.',
    rationale:
      'The modern landscape is saturated with gratuitous animations, gradient noise, and visual distractions. We choose quiet confidence: high typographic contrast, generous negative space, and absolute legibility.',
    coordinate: 'AXIS 02 / VOID',
  },
  {
    id: 'principle-03',
    numeral: '03',
    title: 'Systems that permit',
    italicWord: 'Expression',
    statement:
      'A true design system is not an unbending prison; it is an instrument that enables infinite, coherent improvisation.',
    rationale:
      'We author systems that provide clear boundaries while leaving deliberate room for expressive typography, dynamic spatial compositions, and project-specific nuance. The system creates the baseline; the content creates the rhythm.',
    coordinate: 'AXIS 03 / CADENCE',
  },
  {
    id: 'principle-04',
    numeral: '04',
    title: 'Restraint with',
    italicWord: 'Intention',
    statement:
      'Limitation is not a compromise—it is the catalyst for rigor, precision, and lasting recognition.',
    rationale:
      'By committing to an uncompromising 3-color palette (Archive Paper, Graphite Ink, Oxide Vermilion) and disciplined typographic families, we focus energy entirely on proportion, rhythm, and execution rather than trendy novelty.',
    coordinate: 'AXIS 04 / LIMIT',
  },
  {
    id: 'principle-05',
    numeral: '05',
    title: 'Details that earn their',
    italicWord: 'Place',
    statement:
      'Every hairline border, coordinate tag, and letterform axis must justify its presence through functional and spatial purpose.',
    rationale:
      'We reject arbitrary ornamental flourishes. If an element cannot demonstrate a structural, navigational, or typographic purpose, it is eliminated from the composition.',
    coordinate: 'AXIS 05 / RIGOR',
  },
] as const;
