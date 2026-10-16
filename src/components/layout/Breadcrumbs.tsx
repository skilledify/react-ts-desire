import { Link } from 'react-router'
import styles from './Breadcrumbs.module.css'

export interface Crumb {
  label: string

  to?: string
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <div className={styles.breadcrumbs}>
      <div className="container">
        <ul className={styles.breadcrumbsList}>
          {items.map((item, index) => (
            <li key={item.label} className={styles.breadcrumbsItem}>
              {}
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
