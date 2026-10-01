import manifest from '../../../public/images/animation/manifest.json';

/**
 * The Digital Animation gallery is generated, not hand-listed.
 *
 * `scripts/build-creative-art.py` reads the full-resolution originals in
 * `art-source/`, writes web-sized derivatives into
 * `public/images/animation/<category>/`, and records every piece — including
 * its title and note from `art-source/captions.json` — in the manifest.
 *
 * So this module only has to group the manifest. Adding a piece is a file drop
 * plus one captions entry; no TypeScript changes and no chance of the listing
 * drifting out of step with the files on disk.
 */

export type AnimationPiece = {
  src: string;
  title: string;
  note: string;
  width: number;
  height: number;
};

export type AnimationCategory = {
  id: string;
  label: string;
  blurb: string;
  pieces: AnimationPiece[];
};

type ManifestPiece = {
  name: string;
  width: number;
  height: number;
  title?: string;
  note?: string;
};

type ManifestSheet = {
  category: string;
  pieces: ManifestPiece[];
};

const sheets = Object.values(manifest as unknown as Record<string, ManifestSheet>);

function piecesFor(category: string): AnimationPiece[] {
  return sheets
    .filter((sheet) => sheet.category === category)
    .flatMap((sheet) =>
      sheet.pieces.map((piece) => ({
        src: `/images/animation/${category}/${piece.name}`,
        title: piece.title ?? piece.name,
        note: piece.note ?? piece.title ?? piece.name,
        width: piece.width,
        height: piece.height,
      })),
    );
}

export const animationUiDesign = piecesFor('ui-design');

const CATEGORY_COPY = [
  {
    id: '3d',
    label: '3D — rigging, modelling, and look dev',
    blurb: 'Rig tests, sculpts, low-poly scenes, and shading work from pipeline coursework.',
  },
  {
    id: 'digital',
    label: 'Digital illustration and environment art',
    blurb: 'Painted characters, model sheets, icon sets, and environment lighting studies.',
  },
  {
    id: 'traditional',
    label: 'Traditional — charcoal, pencil, and colour',
    blurb: 'Life drawing, still life, and tonal studies that built the fundamentals underneath everything else.',
  },
];

export const animationCategories: AnimationCategory[] = CATEGORY_COPY.map((category) => ({
  ...category,
  pieces: piecesFor(category.id),
})).filter((category) => category.pieces.length > 0);
