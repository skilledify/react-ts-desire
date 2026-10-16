import { useState } from 'react'
import type { FormEvent } from 'react'
import {
  CONTACT_CITY,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
  CONTACT_STREET,
  CONTACT_TEXT,
  GOOGLE_MAPS_EMBED,
} from '@/data/contact'
import { SOCIAL_LINKS } from '@/data/social'
import { Icon } from '@/components/ui/Icon'
import styles from './ContactUs.module.css'

const EMPTY_FORM = { name: '', email: '', message: '' }

export function ContactUs() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [sent, setSent] = useState(false)

  const update = (field: keyof typeof EMPTY_FORM) => (value: string) => {
    setForm((current) => ({ ...current, [field]: value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
    setForm(EMPTY_FORM)
  }

  return (
    <section className={styles.contact}>
      <div className={styles.map}>
        <iframe
          title="Desire office location"
          src={GOOGLE_MAPS_EMBED}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="container">
        <h3 className={styles.contactTitle}>Contact Us</h3>

        <ul className={styles.contactSocialsList}>
          {SOCIAL_LINKS.map((social) => (
            <li key={social.id} className={styles.contactSocialsItem}>
              <a
                className={styles.contactSocialsLink}
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={social.label}
              >
                <Icon shape={social} />
              </a>
            </li>
          ))}
        </ul>

        <p className={styles.contactText}>{CONTACT_TEXT}</p>

        <ul className={styles.contactLocationList}>
          <li className={styles.contactLocationItem}>
            <a className={styles.contactLocationLink} href={CONTACT_PHONE_HREF}>
              {CONTACT_PHONE}
            </a>
          </li>
          <li className={styles.contactLocationItem}>
            <span className={styles.contactLocationLink}>{CONTACT_STREET}</span>
          </li>
          <li className={styles.contactLocationItem}>
            <span className={styles.contactLocationLink}>{CONTACT_CITY}</span>
          </li>
        </ul>

        <a className={styles.contactEmail} href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
        </a>

        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.contactInputBox}>
            <label className="visually-hidden" htmlFor="contact-name">
              Your name
            </label>
            <input
              id="contact-name"
              className={styles.contactInput}
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={(event) => update('name')(event.target.value)}
              required
            />
            <label className="visually-hidden" htmlFor="contact-email">
              Your e-mail
            </label>
            <input
              id="contact-email"
              className={styles.contactInput}
              type="email"
              name="email"
              placeholder="Your e-mail"
              value={form.email}
              onChange={(event) => update('email')(event.target.value)}
              required
            />
          </div>

          <label className="visually-hidden" htmlFor="contact-message">
            Your message
          </label>
          <textarea
            id="contact-message"
            className={styles.contactTextarea}
            name="message"
            placeholder="Your message"
            value={form.message}
            onChange={(event) => update('message')(event.target.value)}
            required
          />
          <button className={`${styles.contactBtn} btn`} type="submit">
            Send
          </button>
          {sent && (
            <p className={styles.contactSuccess} role="status">
              Thanks! We will get back to you shortly.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
