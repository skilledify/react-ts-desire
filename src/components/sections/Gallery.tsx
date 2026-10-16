import { useState } from 'react'
import {
  DEFAULT_CATEGORY,
  GALLERY_CATEGORIES,
  GALLERY_ITEMS,
} from '@/data/gallery'
import type { GalleryCategoryId } from '@/data/gallery'
import styles from './Gallery.module.css'

interface GalleryProps {
  /** `page` renders the full grid used on the /gallery route. */
  variant?: 'home' | 'page'
}

/** Home page highlights the first tile; the gallery page highlights the 8th. */
function isFeatured(index: number, variant: GalleryProps['variant']) {
  return variant === 'home' ? index === 0 : index === 7
}

export function Gallery({ variant = 'home' }: GalleryProps) {
  const [activeCategory, setActiveCategory] = useState<GalleryCategoryId>(DEFAULT_CATEGORY)

  const items = GALLERY_ITEMS[activeCategory]
  const activeLabel =
    GALLERY_CATEGORIES.find((category) => category.id === activeCategory)?.label ?? ''

  return (
    <div className={`${styles.gallery} ${variant === 'page' ? styles.galleryPage : ''}`}>
      <div className="container-fluid">
        <div className={styles.galleryHeader}>
          <h2 className={styles.galleryTitle}>Browse by category</h2>

          <div className={styles.galleryButtons} role="group" aria-label="Filter photos by category">
            {GALLERY_CATEGORIES.map((category) => {
              const isActive = category.id === activeCategory
              return (
                <button
                  key={category.id}
                  type="button"
                  className={`${styles.galleryBtn} ${isActive ? styles.galleryBtnActive : ''}`}
                  aria-pressed={isActive}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.label}
                  <span className={styles.galleryBtnCount}>{GALLERY_ITEMS[category.id].length}</span>
                </button>
              )
            })}
          </div>

          <p className={styles.galleryStatus} role="status" aria-live="polite">
            {items.length} photos in “{activeLabel}”
          </p>
        </div>

        <div className={styles.galleryInner} key={activeCategory}>
          <div className={styles.galleryItems}>
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`${styles.galleryItem} ${
                  isFeatured(index, variant) ? styles.galleryItemFeatured : ''
                }`}
              >
                <a
                  className={styles.galleryItemLink}
                  href={item.src}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img className={styles.galleryItemImg} src={item.src} alt={item.alt} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
