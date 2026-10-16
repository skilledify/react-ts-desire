import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import {
  DISCOUNT_BADGE,
  DISCOUNT_DURATION_DAYS,
  DISCOUNT_TEXT,
  DISCOUNT_TITLE,
} from '@/data/promo'
import styles from './DiscountCountdown.module.css'

const MS_PER_DAY = 86_400_000

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}


function getTimeLeft(deadline: number): TimeLeft {
  // Math.ceil keeps the boundary exact: a few ms after the mount the display
  // still reads "14 00:00:00" instead of "13 23:59:59".
  const totalSeconds = Math.max(0, Math.ceil((deadline - Date.now()) / 1_000))
  return {
    days: Math.floor(totalSeconds / 86_400),
    hours: Math.floor((totalSeconds / 3_600) % 24),
    minutes: Math.floor((totalSeconds / 60) % 60),
    seconds: totalSeconds % 60,
  }
}

const UNITS: Array<{ key: keyof TimeLeft; label: string }> = [
  { key: 'days', label: 'Days' },
  { key: 'hours', label: 'Hours' },
  { key: 'minutes', label: 'Minutes' },
  { key: 'seconds', label: 'Seconds' },
]


const pad = (value: number) => String(value).padStart(2, '0')


export function DiscountCountdown() {
  // The deadline is computed once per mount: every visit to the site starts
  // a fresh countdown instead of counting down to a fixed calendar date.
  const [deadline] = useState(() => Date.now() + DISCOUNT_DURATION_DAYS * MS_PER_DAY)
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeft(deadline))

  useEffect(() => {
    const id = window.setInterval(() => setTimeLeft(getTimeLeft(deadline)), 1000)
    return () => window.clearInterval(id)
  }, [deadline])

  const endsAtLabel = new Date(deadline).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

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
              aria-label={`Offer ends ${endsAtLabel}`}
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
