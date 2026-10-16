import { Link } from 'react-router'
import {
  PROMO_BANNER_BADGE,
  PROMO_BANNER_BG,
  PROMO_BANNER_BTN,
  PROMO_BANNER_TEXT,
  PROMO_BANNER_TITLE,
} from '@/data/promo'
import styles from './PromoBanner.module.css'

/**
 * Slim advertising banner placed directly under the hero. It matches the promo
 * countdown bar in height (`--promo-bar-height`) and palette — dark photo tint,
 * yellow badge/CTA — but leads with a free-shipping hook instead of a timer.
 */
export function PromoBanner() {
  return (
    <section className={styles.banner} aria-label="Free delivery offer">
      <img className={styles.bannerBg} src={PROMO_BANNER_BG} alt="" aria-hidden="true" />
      <div className={styles.bannerOverlay} />

      <div className="container">
        <div className={styles.bannerInner}>
          <div className={styles.bannerContent}>
            <span className={styles.bannerBadge}>{PROMO_BANNER_BADGE}</span>
            <h2 className={styles.bannerTitle}>{PROMO_BANNER_TITLE}</h2>
            <p className={styles.bannerText}>{PROMO_BANNER_TEXT}</p>
          </div>

          <Link className={styles.bannerBtn} to="/contact">
            {PROMO_BANNER_BTN}
          </Link>
        </div>
      </div>
    </section>
  )
}
