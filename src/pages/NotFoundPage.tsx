import { Link } from 'react-router'
import styles from './NotFoundPage.module.css'

export function NotFoundPage() {
  return (
    <section className={styles.notFound}>
      <div className="container">
        <h1 className={styles.title}>404 — Page not found</h1>
        <p className={styles.text}>
          The page you are looking for does not exist or has been moved.
        </p>
        <Link to="/" className={`${styles.button} btn`}>
          Back to home
        </Link>
      </div>
    </section>
  )
}
