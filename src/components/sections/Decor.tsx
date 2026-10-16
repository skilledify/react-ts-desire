import { DECOR_TEXT, DECOR_TITLE } from '@/data/contact'
import styles from './Decor.module.css'

export function Decor() {
  return (
    <section className={styles.decor}>
      <div className="container">
        <h2 className={styles.decorTitle}>{DECOR_TITLE}</h2>
        <p className={styles.decorText}>{DECOR_TEXT}</p>
      </div>
    </section>
  )
}
