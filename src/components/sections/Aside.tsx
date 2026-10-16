import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router'
import { ASIDE_CATEGORIES, ASIDE_RECENT_POSTS, ASIDE_TAGS } from '@/data/blog'
import { SOCIAL_LINKS } from '@/data/social'
import { Icon } from '@/components/ui/Icon'
import searchIcon from '@/assets/img/search-icon.svg'
import styles from './Aside.module.css'

export function Aside() {
  const [query, setQuery] = useState('')

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setQuery('')
  }

  return (
    <aside className={styles.aside}>
      <form className={styles.asideSearch} onSubmit={handleSearch} role="search">
        <label className="visually-hidden" htmlFor="aside-search">
          Search posts
        </label>
        <input
          id="aside-search"
          className={styles.asideSearchInput}
          type="search"
          placeholder="Search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button className={styles.asideSearchBtn} type="submit">
          <img src={searchIcon} alt="" />
        </button>
      </form>

      <div className={styles.asideCategory}>
        <h6 className={styles.asideCategoryTitle}>Categories</h6>
        <ul className={styles.asideCategoryList}>
          {ASIDE_CATEGORIES.map((category) => (
            <li key={category.id} className={styles.asideCategoryItem}>
              <Link className={styles.asideCategoryLink} to="/blog">
                {category.label} ({category.count})
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.asidePosts}>
        <h6 className={styles.asidePostsTitle}>Recent Posts</h6>
        <ul className={styles.asidePostsList}>
          {ASIDE_RECENT_POSTS.map((post) => (
            <li key={post.id} className={styles.asidePostsItem}>
              <Link className={styles.asidePostsItemTitle} to={`/blog/${post.slug}`}>
                {post.title}
              </Link>
              <span className={styles.asidePostsDate}>{post.date}</span>|
              <span className={styles.asidePostsAuthor}> by {post.author}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.asideTags}>
        <h6 className={styles.asideTagsTitle}>Tags</h6>
        <div className={styles.asideTagsList}>
          {ASIDE_TAGS.map((tag) => (
            <Link key={tag} className={styles.asideTagsLink} to="/blog">
              {tag}
            </Link>
          ))}
        </div>
      </div>

      <div className={styles.asideSocials}>
        <ul className={styles.asideSocialsList}>
          {SOCIAL_LINKS.map((social) => (
            <li key={social.id} className={styles.asideSocialsItem}>
              <a
                className={styles.asideSocialsLink}
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
      </div>
    </aside>
  )
}
