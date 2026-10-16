import { Link } from 'react-router'
import { BLOG_BOX_POSTS } from '@/data/blog'
import styles from './BlogBox.module.css'

export function BlogBox() {
  return (
    <section className={styles.blogBox}>
      <div className="container">
        <h3 className={styles.blogBoxTitle}>More inspiration ideas in our blog</h3>
        <div className={styles.blogBoxItems}>
          {BLOG_BOX_POSTS.map((post) => (
            <div key={post.id} className={styles.blogBoxItem}>
              <Link className={styles.blogBoxImgLink} to={`/blog/${post.slug}`}>
                <img className={styles.blogBoxImg} src={post.image} alt={post.title} />
              </Link>
              <p className={styles.blogBoxLinks}>
                <span className={styles.blogBoxDate}>{post.date}</span>
                <span className={styles.blogBoxAuthor}> | by {post.author}</span>
                <span className={styles.blogBoxTheme}>| {post.theme}</span>
              </p>
              <Link className={styles.blogBoxTitleLink} to={`/blog/${post.slug}`}>
                <h4 className={styles.blogBoxTitleLinkTitle}>{post.title}</h4>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
