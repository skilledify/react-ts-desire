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


const buildCategory = (prefix: string, count: number): GalleryItem[] =>
  Array.from({ length: count }, (_, index) => ( {
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
