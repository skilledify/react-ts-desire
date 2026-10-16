import { PARTNERS_LOGOS } from '@/data/collection'
import styles from './Partners.module.css'

export function Partners() {
  return (
    <div className={styles.partners}>
      <div className="container-fluid">
        <div className={styles.partnersItems}>
          {PARTNERS_LOGOS.map((partner) => (
            <img key={partner.id} className={styles.partnersItem} src={partner.src} alt={partner.alt} />
          ))}
        </div>
      </div>
    </div>
  )
}
