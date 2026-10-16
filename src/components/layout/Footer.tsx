import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router'
import { COMPANY_ADDRESS, COMPANY_EMAIL, FOOTER_MENU } from '@/data/navigation'
import { SOCIAL_LINKS } from '@/data/social'
import { EMAIL_ICON } from '@/data/icons'
import { Icon } from '@/components/ui/Icon'
import styles from './Footer.module.css'

export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!email.trim()) return
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className="container">
          <div className={styles.footerInner}>
            <div className={styles.footerInfo}>
              <h6 className={styles.footerInfoTitle}>Contact Us</h6>
              <p className={styles.footerInfoText}>
                Keffiyeh poutine etsy, paleo cray put a bird on it microdosing schlitz
                you probably occupy
              </p>
              <a className={styles.footerInfoEmail} href={`mailto:${COMPANY_EMAIL}`}>
                <Icon shape={EMAIL_ICON} className={styles.footerInfoEmailIcon} />
                {COMPANY_EMAIL}
              </a>
              <form className={styles.footerForm} onSubmit={handleSubscribe}>
                <label className="visually-hidden" htmlFor="footer-subscribe-email">
                  Subscribe by email
                </label>
                <input
                  id="footer-subscribe-email"
                  className={styles.footerFormInput}
                  type="email"
                  name="email"
                  placeholder="Subscribe by email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
                <button className={`${styles.footerFormButton} btn`} type="submit">
                  Send
                </button>
              </form>
              {subscribed && (
                <p className={styles.footerFormSuccess} role="status">
                  Thanks for subscribing!
                </p>
              )}
            </div>

            <ul className={styles.footerSocial}>
              {SOCIAL_LINKS.map((social) => (
                <li key={social.id} className={styles.footerSocialItem}>
                  <a
                    className={styles.footerSocialLink}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Icon shape={social} className={styles.footerSocialIcon} />
                    <span>{social.label}</span>
                  </a>
                </li>
              ))}
            </ul>

            <nav className={styles.footerMenu}>
              <ul className={styles.footerMenuList}>
                {FOOTER_MENU.map((item) => (
                  <li key={item.label} className={styles.footerMenuItem}>
                    <Link className={styles.footerMenuLink} to={item.to}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className={styles.footerCopyright}>
        <div className="container">
          <div className={styles.footerCopyrightInner}>
            <p className={styles.footerCopyrightText}>{COMPANY_ADDRESS}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
