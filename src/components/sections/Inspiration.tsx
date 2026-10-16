import { INSPIRATION_METRICS } from '@/data/collection'
import { INSPIRATION_TEXT, INSPIRATION_TITLE } from '@/data/contact'
import inspirationDecor from '@/assets/img/inspiration-decor.png'
import styles from './Inspiration.module.css'

export function Inspiration() {
  return (
    <section className={styles.inspiration}>
      <div className="container-fluid">
        <div className={styles.inspirationInner}>
          <img
            className={styles.inspirationImg}
            src={inspirationDecor}
            alt="inspiration img"
          />
          <div className={styles.inspirationContent}>
            <h3 className={styles.inspirationTitle}>{INSPIRATION_TITLE}</h3>
            <p className={styles.inspirationText}>{INSPIRATION_TEXT}</p>
            <ul className={styles.inspirationList}>
              {INSPIRATION_METRICS.map((metric) => (
                <li key={metric.label} className={styles.inspirationItem}>
                  <div className={styles.inspirationItemContent}>
                    <p className={styles.inspirationItemText}>{metric.label}</p>
                    <div className={styles.inspirationNum}>{metric.value}%</div>
                  </div>
                  <div
                    className={styles.inspirationLine}
                    style={{ width: `${metric.value}%` }}
                    role="presentation"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
