import partners1 from '@/assets/img/content/partners-1.svg'
import partners2 from '@/assets/img/content/partners-2.svg'
import partners3 from '@/assets/img/content/partners-3.svg'
import partners4 from '@/assets/img/content/partners-4.svg'
import partners5 from '@/assets/img/content/partners-5.svg'
import collection1 from '@/assets/img/content/collection-1.jpg'
import collection2 from '@/assets/img/content/collection-2.jpg'
import collection3 from '@/assets/img/content/collection-3.jpg'
import collection4 from '@/assets/img/content/collection-4.jpg'
import collection5 from '@/assets/img/content/collection-5.jpg'
import aboutGallery1 from '@/assets/img/content/about-gallery-1.jpg'
import aboutGallery2 from '@/assets/img/content/about-gallery-2.jpg'
import aboutGallery3 from '@/assets/img/content/about-gallery-3.jpg'
import aboutGallery4 from '@/assets/img/content/about-gallery-4.jpg'
import aboutGallery5 from '@/assets/img/content/about-gallery-5.jpg'

export interface CollectionItem {
  id: string
  src: string
  alt: string
  title: string
  caption: string
}

/** Shown on the home page — "Furniture new collection". */
export const HOME_COLLECTION: CollectionItem[] = [
  { id: 'c1', src: collection1, alt: 'Truffaut chair', title: 'Truffaut literally trust', caption: 'Living room furntiture | Chair' },
  { id: 'c2', src: collection2, alt: 'Truffaut chair', title: 'Truffaut literally trust', caption: 'Living room furntiture | Chair' },
  { id: 'c3', src: collection3, alt: 'Truffaut chair', title: 'Truffaut literally trust', caption: 'Living room furntiture | Chair' },
  { id: 'c4', src: collection4, alt: 'Truffaut chair', title: 'Truffaut literally trust', caption: 'Living room furntiture | Chair' },
  { id: 'c5', src: collection5, alt: 'Truffaut chair', title: 'Truffaut literally trust', caption: 'Living room furntiture | Chair' },
]

/** Shown at the bottom of the about page. */
export const ABOUT_COLLECTION: CollectionItem[] = [
  { id: 'a1', src: aboutGallery1, alt: 'About gallery 1', title: 'Truffaut literally trust', caption: 'Living room furntiture | Chair' },
  { id: 'a2', src: aboutGallery2, alt: 'About gallery 2', title: 'Truffaut literally trust', caption: 'Living room furntiture | Chair' },
  { id: 'a3', src: aboutGallery3, alt: 'About gallery 3', title: 'Truffaut literally trust', caption: 'Living room furntiture | Chair' },
  { id: 'a4', src: aboutGallery4, alt: 'About gallery 4', title: 'Truffaut literally trust', caption: 'Living room furntiture | Chair' },
  { id: 'a5', src: aboutGallery5, alt: 'About gallery 5', title: 'Truffaut literally trust', caption: 'Living room furntiture | Chair' },
]

export interface InspirationMetric {
  label: string
  /** Percentage rendered on the progress bar. */
  value: number
}

export const INSPIRATION_METRICS: InspirationMetric[] = [
  { label: 'Design and technical drawings', value: 80 },
  { label: 'Measurments', value: 70 },
  { label: 'Furniture functionality analysis', value: 75 },
  { label: 'Interior visualization', value: 40 },
]

export const PARTNERS_LOGOS = [
  { id: 'p1', src: partners1, alt: 'Partner 1' },
  { id: 'p2', src: partners2, alt: 'Partner 2' },
  { id: 'p3', src: partners3, alt: 'Partner 3' },
  { id: 'p4', src: partners4, alt: 'Partner 4' },
  { id: 'p5', src: partners5, alt: 'Partner 5' },
]
