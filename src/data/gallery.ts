import gallery1 from '@/assets/img/content/gallery-1.jpg'
import gallery2 from '@/assets/img/content/gallery-2.jpg'
import gallery3 from '@/assets/img/content/gallery-3.jpg'
import gallery4 from '@/assets/img/content/gallery-4.jpg'
import gallery5 from '@/assets/img/content/gallery-5.jpg'

export const GALLERY_CATEGORIES = [
  { id: 'bedroom', label: 'Bedroom furniture' },
  { id: 'living', label: 'Living room furniture' },
  { id: 'office', label: 'Office furniture' },
  { id: 'dining', label: 'Dining room futniture' },
  { id: 'chair', label: 'Chair' },
] as const

export type GalleryCategoryId = (typeof GALLERY_CATEGORIES)[number]['id']

/** Category pre-selected on first render — matches the original mixitup config. */
export const DEFAULT_CATEGORY: GalleryCategoryId = 'living'

export interface GalleryItem {
  id: string
  src: string
  alt: string
}

const SOURCES = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
] as const

/**
 * Builds the item list for one category.
 *
 * @param prefix alt-text prefix, e.g. `bedroom`
 * @param count  how many tiles the category shows
 *
 * The page grid is 4 columns and one tile is a 2×2 featured one, so each
 * count is chosen such that `(count - 1) singles + 4 featured cells` divides
 * evenly by 4 — the grid renders as a solid block with no empty cells. That's
 * why every count here is 1 mod 4. They are laid out in a strictly DECREASING
 * order (25, 21, 17, 13, 9) so the filter badges read as a clear downward
 * sequence left→right, and being all distinct each badge shows its own number.
 */
const buildCategory = (prefix: string, count: number): GalleryItem[] =>
  Array.from({ length: count }, (_, index) => ({
    id: `${prefix}-${index + 1}`,
    src: SOURCES[index % SOURCES.length],
    alt: `${prefix} furniture ${index + 1}`,
  }))

export const GALLERY_ITEMS: Record<GalleryCategoryId, GalleryItem[]> = {
  bedroom: buildCategory('bedroom', 25),
  living: buildCategory('living', 21),
  office: buildCategory('office', 17),
  dining: buildCategory('dining', 13),
  chair: buildCategory('chair', 9),
}
