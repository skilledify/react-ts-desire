import { Link } from 'react-router'
import styles from './Breadcrumbs.module.css'

export interface Crumb {
  label: string
  /** Omit on the last (current) crumb to render it as plain text. */
  to?: string
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <div className={styles.breadcrumbs}>
      <div className="container">
        <ul className={styles.breadcrumbsList}>
          {items.map((item, index) => (
            <li key={item.label} className={styles.breadcrumbsItem}>
              {/* Own separator instead of a CSS ::after, so nothing is
                  injected automatically before the active (current) crumb. */}
              {index > 0 && (
                <span className={styles.breadcrumbsSeparator} aria-hidden="true">
                  /
                </span>
              )}
              {item.to ? (
                <Link className={styles.breadcrumbsLink} to={item.to}>
                  {item.label}
                </Link>
              ) : (
                <span className={styles.breadcrumbsCurrent}>{item.label}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
