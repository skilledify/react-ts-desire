import { HOME_COLLECTION } from '@/data/collection'
import { Collection } from '@/components/sections/Collection'
import styles from './NewCollection.module.css'

const COLLECTION_INTRO =
  "Deep v you probably haven't heard of them banh mi synth actually affogato. Aesthetic lyft ethical drinking vinegar austint"

export function NewCollection() {
  return (
    <section className={styles.newCollection}>
      <div className="container-fluid">
        <h3 className={styles.newCollectionTitle}>Furniture new collection</h3>
        <p className={styles.newCollectionText}>{COLLECTION_INTRO}</p>
        <Collection items={HOME_COLLECTION} />
      </div>
    </section>
  )
}
