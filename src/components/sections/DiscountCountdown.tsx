import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import {
  DISCOUNT_BADGE,
  DISCOUNT_ENDS_AT,
  DISCOUNT_ENDS_AT_LABEL,
  DISCOUNT_TEXT,
  DISCOUNT_TITLE,
} from '@/data/promo'
import styles from './DiscountCountdown.module.css'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

/** Remaining time until the fixed deadline, clamped at zero. */
function getTimeLeft(): TimeLeft {
  const diff = Math.max(0, new Date(DISCOUNT_ENDS_AT).getTime() - Date.now())
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1_000) % 60),
  }
}

const UNITS: Array<{ key: keyof TimeLeft; label: string }> = [
  { key: 'days', label: 'Days' },
  { key: 'hours', label: 'Hours' },
  { key: 'minutes', label: 'Minutes' },
  { key: 'seconds', label: 'Seconds' },
]

/** Leading-zero padded value, e.g. `07`. */
const pad = (value: number) => String(value).padStart(2, '0')

/**
 * Promo block with a discount countdown. The deadline is a fixed timestamp
 * (`DISCOUNT_ENDS_AT`), so every visitor sees the same remaining time — the
 * timer does not restart per session. When it reaches zero the block switches
 * to a static "offer has ended" state.
 */
export function DiscountCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft)

  useEffect(() => {
    const id = window.setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => window.clearInterval(id)
  }, [])

  const isExpired = Object.values(timeLeft).every((value) => value === 0)

  return (
    <section className={styles.promo} aria-label="Discount offer">
      <div className="container">
        <div className={styles.promoInner}>
          <div className={styles.promoContent}>
            <span className={styles.promoBadge}>{DISCOUNT_BADGE}</span>
            <h2 className={styles.promoTitle}>{DISCOUNT_TITLE}</h2>
            <p className={styles.promoText}>{DISCOUNT_TEXT}</p>
            <Link className={`${styles.promoBtn} btn`} to="/gallery">
              Shop the sale
            </Link>
          </div>

          {isExpired ? (
            <p className={styles.promoExpired} role="status">
              This offer has ended — new deals are coming soon.
            </p>
          ) : (
            <div
              className={styles.timer}
              role="timer"
              aria-label={`Offer ends ${DISCOUNT_ENDS_AT_LABEL}`}
            >
              {UNITS.map((unit) => (
                <div key={unit.key} className={styles.timerItem}>
                  <span className={styles.timerValue}>{pad(timeLeft[unit.key])}</span>
                  <span className={styles.timerLabel}>{unit.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}