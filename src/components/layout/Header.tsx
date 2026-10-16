import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { HEADER_NAV_LEFT, HEADER_NAV_RIGHT } from '@/data/navigation'
import type { NavLink as NavLinkItem } from '@/data/navigation'
import logo from '@/assets/img/logo.png'
import logoBurger from '@/assets/img/logo-burger.png'
import menuIcon from '@/assets/img/icon_menu.svg'
import closeIcon from '@/assets/img/close.svg'
import rightsideMenuImg from '@/assets/img/content/rightside-menu.jpg'
import styles from './Header.module.css'

function Menu({ links, open }: { links: NavLinkItem[]; open: boolean }) {
  return (
    <nav className={`${styles.menu} ${open ? styles.menuOpen : ''}`}>
      <ul className={styles.menuList}>
        {links.map((link) => (
          <li key={link.to} className={styles.menuItem}>
            <NavLink to={link.to} className={styles.menuLink}>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function RightSideMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <>
      <button
        type="button"
        className={`${styles.backdrop} ${open ? styles.backdropVisible : ''}`}
        aria-label="Close menu"
        tabIndex={open ? 0 : -1}
        onClick={onClose}
      />
      <div className={`${styles.rightsideMenu} ${open ? styles.rightsideMenuOpen : ''}`}>
        <button
          type="button"
          className={styles.rightsideCloseBtn}
          onClick={onClose}
          aria-label="Close menu"
        >
          <img src={closeIcon} alt="close" />
        </button>
        <div className={styles.rightsideContent}>
          <Link to="/" className={styles.rightsideLogo} onClick={onClose}>
            <img src={logoBurger} alt="logo burger" />
          </Link>
          <h4 className={styles.rightsideTitle}>Furniture for life</h4>
          <p className={styles.rightsideText}>
            Sustainable hot chicken skateboard, dreamcatcher meggings actually squid.
            Slow-carb everyday carry +1 art party microdosing, put a bird on it brooklyn
          </p>
        </div>
        <img
          className={styles.rightsideImg}
          src={rightsideMenuImg}
          alt="rightside menu"
        />
      </div>
    </>
  )
}

export function Header() {
  const [burgerOpen, setBurgerOpen] = useState(false)
  const [sideOpen, setSideOpen] = useState(false)
  const { pathname } = useLocation()


  useEffect(() => {
    setBurgerOpen(false)
    setSideOpen(false)
  }, [pathname])


  useEffect(() => {
    if (!sideOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [sideOpen])

  useEffect(() => {
    if (!sideOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSideOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [sideOpen])

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerInner}>
          <Menu links={HEADER_NAV_LEFT} open={burgerOpen} />
          <Link to="/" className={styles.logo}>
            <img src={logo} alt="Desire" />
          </Link>
          <Menu links={HEADER_NAV_RIGHT} open={burgerOpen} />
          <button
            type="button"
            className={`${styles.btnMenu} ${burgerOpen ? styles.btnMenuOpen : ''}`}
            aria-label="Toggle navigation"
            aria-expanded={burgerOpen}
            onClick={() => setBurgerOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
          <button
            type="button"
            className={styles.btn}
            aria-label="Open side menu"
            onClick={() => setSideOpen(true)}
          >
            <img src={menuIcon} alt="icon menu" />
          </button>
          <RightSideMenu open={sideOpen} onClose={() => setSideOpen(false)} />
        </div>
      </div>
    </header>
  )
}
