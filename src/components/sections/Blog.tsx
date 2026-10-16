import { Link } from 'react-router'
import { BLOG_POSTS } from '@/data/blog'
import type { BlogPost } from '@/data/blog'
import { ArticleSlider } from '@/components/sliders/ArticleSlider'
import { VideoBlock } from '@/components/ui/VideoBlock'
import { Aside } from './Aside'
import { Pagination } from './Pagination'
import styles from './Blog.module.css'

const QUOTE = {
  text:
    '“Simplicity is not the goal. It is the by-product of a good idea and modest expectations”',
  author: 'Paul Rand',
}

function PostMeta({ post }: { post: BlogPost }) {
  return (
    <div className={styles.blogItemInfo}>
      <span className={styles.blogItemInfoDate}>{post.date}</span>|
      <span className={styles.blogItemInfoAuthor}> by {post.author}</span>|
      <Link className={styles.blogItemInfoTitle} to={`/blog/${post.slug}`}>
        {post.category}
      </Link>
    </div>
  )
}

interface BlogProps {
  activePage?: number
}

export function Blog({ activePage = 1 }: BlogProps) {
  const [first, second, third] = BLOG_POSTS

  return (
    <section className={styles.blog}>
      <div className="container">
        <div className={styles.blogInner}>
          <div className={styles.blogItems}>
            {first && (
              <article className={styles.blogItem}>
                <img className={styles.blogItemImg} src={first.image} alt="blog 1" />
                <PostMeta post={first} />
                <Link className={styles.blogItemLink} to={`/blog/${first.slug}`}>
                  <h3 className={`${styles.blogItemTitle} ${styles.blogItemTitleFirst}`}>
                    {first.title}
                  </h3>
                </Link>
                <p className={`${styles.blogItemText} ${styles.blogItemTextTop}`}>
                  {first.excerpt}
                </p>
              </article>
            )}

            <blockquote className={styles.blogBlockquote}>
              <p className={styles.blogBlockquoteText}>{QUOTE.text}</p>
              <div className={styles.blogBlockquoteAuthor}>{QUOTE.author}</div>
            </blockquote>

            {second && (
              <article>
                <VideoBlock className={styles.articlePopup} label="Play the studio film" />
                <PostMeta post={second} />
                <Link className={styles.blogItemLink} to={`/blog/${second.slug}`}>
                  <h3 className={`${styles.blogItemTitle} ${styles.blogItemTitleSecond}`}>
                    {second.title}
                  </h3>
                </Link>
              </article>
            )}

            {third && (
              <article>
                <ArticleSlider />
                <PostMeta post={third} />
                <Link className={styles.blogItemLink} to={`/blog/${third.slug}`}>
                  <h3 className={`${styles.blogItemTitle} ${styles.blogItemTitleThird}`}>
                    {third.title}
                  </h3>
                </Link>
                <p className={`${styles.blogItemText} ${styles.blogItemTextBottom}`}>
                  {third.excerpt}
                </p>
              </article>
            )}

            <Pagination pages={[1, 2]} activePage={activePage} />
          </div>

          <Aside />
        </div>
      </div>
    </section>
  )
}
