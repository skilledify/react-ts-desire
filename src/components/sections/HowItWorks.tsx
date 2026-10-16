import { HOW_IT_WORKS } from '@/data/contact'
import styles from './HowItWorks.module.css'

type Variant = 'consultation' | 'production' | 'measurements'

const VARIANTS: Variant[] = ['consultation', 'production', 'measurements']

export function HowItWorks() {
  return (
    <section className={styles.how}>
      <div className="container">
        <h3 className={styles.howTitle}>How it works</h3>
        <div className={styles.howItems}>
          <div className={styles.howItemsBox}>
            {HOW_IT_WORKS.slice(0, 2).map((step, index) => {
              const variant = VARIANTS[index]
              return (
                <div
                  key={step.id}
                  className={`${styles.howItem} ${styles[`item${variant}`]}`}
                >
                  <img className={styles.howItemImg} src={step.icon} alt={step.alt} />
                  <h6 className={styles.howItemTitle}>{step.title}</h6>
                  <p className={styles.howItemText}>{step.text}</p>
                </div>
              )
            })}
          </div>
          {HOW_IT_WORKS.slice(2).map((step, index) => {
            const variant = VARIANTS[index + 2]
            return (
              <div
                key={step.id}
                className={`${styles.howItem} ${styles[`item${variant}`]}`}
              >
                <img className={styles.howItemImg} src={step.icon} alt={step.alt} />
                <h6 className={styles.howItemTitle}>{step.title}</h6>
                <p className={styles.howItemText}>{step.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
