import { Link } from 'react-router'
import arrowPrev from '@/assets/img/pagination-arrow-prev.svg'
import arrowNext from '@/assets/img/pagination-arrow-next.svg'
import styles from './Pagination.module.css'

interface PaginationProps {
  pages: number[]
  activePage: number
}

export function Pagination({ pages, activePage }: PaginationProps) {
  return (
    <div className={styles.pagination}>
      {activePage > 1 ? (
        <Link className={styles.paginationArrow} to={`/blog?page=${activePage - 1}`} aria-label="Previous page">
          <img className={styles.paginationArrowIcon} src={arrowPrev} alt="" />
        </Link>
      ) : (
        <span className={`${styles.paginationArrow} ${styles.paginationArrowDisabled}`}>
          <img className={styles.paginationArrowIcon} src={arrowPrev} alt="" />
        </span>
      )}

      <ul className={styles.paginationList}>
        {pages.map((page) => (
          <li key={page} className={styles.paginationListItem}>
            <Link
              className={`${styles.paginationListNum} ${
                page === activePage ? styles.paginationListNumActive : ''
              }`}
              to={`/blog?page=${page}`}
              aria-current={page === activePage ? 'page' : undefined}
            >
              {page}
            </Link>
          </li>
        ))}
      </ul>

      {activePage < pages.length ? (
        <Link className={styles.paginationArrow} to={`/blog?page=${activePage + 1}`} aria-label="Next page">
          <img className={styles.paginationArrowIcon} src={arrowNext} alt="" />
        </Link>
      ) : (
        <span className={`${styles.paginationArrow} ${styles.paginationArrowDisabled}`}>
          <img className={styles.paginationArrowIcon} src={arrowNext} alt="" />
        </span>
      )}
    </div>
  )
}
