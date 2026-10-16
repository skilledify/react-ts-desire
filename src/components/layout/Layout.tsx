import { Outlet } from 'react-router'
import { Header } from './Header'
import { Footer } from './Footer'
import { ScrollToTop } from './ScrollToTop'
import styles from './Layout.module.css'

export function Layout() {
  return (
    <div className={styles.wrapper}>
      <ScrollToTop />
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
