import { Link } from 'react-router'
import type { CollectionItem } from '@/data/collection'
import styles from './Collection.module.css'

interface CollectionProps {
  items: CollectionItem[]
}

export function Collection({ items }: CollectionProps) {
  return (
    <div className={styles.collection}>
      <div className="container-fluid">
        <div className={styles.collectionItems}>
          {items.map((item) => (
            <Link key={item.id} className={styles.collectionItem} to="/gallery">
              <img className={styles.collectionImg} src={item.src} alt={item.alt} />
              <div className={styles.collectionInfo}>
                <div className={styles.collectionInfoTitle}>{item.title}</div>
                <p className={styles.collectionInfoText}>{item.caption}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
