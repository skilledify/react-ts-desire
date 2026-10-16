import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router'
import type { BlogPostDetail } from '@/data/blog'
import { POST_COMMENTS } from '@/data/blog'
import { Aside } from './Aside'
import { CustomCheckbox } from '@/components/ui/CustomCheckbox'
import styles from './BlogPost.module.css'

const EMPTY_COMMENT = { text: '', name: '', email: '', remember: false }

function CommentForm() {
  const [form, setForm] = useState(EMPTY_COMMENT)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
    setForm(EMPTY_COMMENT)
  }

  return (
    <form className={styles.blogSingleForm} onSubmit={handleSubmit}>
      <h4 className={styles.blogSingleFormTitle}>Post a Comment</h4>
      <label className="visually-hidden" htmlFor="comment-text">
        Your comment
      </label>
      <textarea
        id="comment-text"
        className={styles.blogSingleFormTextarea}
        placeholder="Your comment"
        value={form.text}
        onChange={(event) => setForm((c) => ({ ...c, text: event.target.value }))}
        required
      />
      <label className="visually-hidden" htmlFor="comment-name">
        Your name
      </label>
      <input
        id="comment-name"
        className={`${styles.blogSingleFormInput} ${styles.blogSingleFormInputFirst}`}
        type="text"
        placeholder="Your name"
        value={form.name}
        onChange={(event) => setForm((c) => ({ ...c, name: event.target.value }))}
        required
      />
      <label className="visually-hidden" htmlFor="comment-email">
        Your e-mail
      </label>
      <input
        id="comment-email"
        className={styles.blogSingleFormInput}
        type="email"
        placeholder="Your e-mail"
        value={form.email}
        onChange={(event) => setForm((c) => ({ ...c, email: event.target.value }))}
        required
      />

      <CustomCheckbox
        label="Remember me"
        checked={form.remember}
        onChange={(remember) => setForm((c) => ({ ...c, remember }))}
      />

      <button className={`${styles.blogSingleFormBtn} btn`} type="submit">
        Submit
      </button>
      {submitted && (
        <p className={styles.blogSingleFormSuccess} role="status">
          Your comment has been posted.
        </p>
      )}
    </form>
  )
}

export function BlogPost({ post }: { post: BlogPostDetail }) {
  return (
    <section className={styles.blogSingle}>
      <div className="container">
        <div className={styles.blogSingleInner}>
          <div className={styles.blogSingleItems}>
            <article>
              <img className={styles.blogSingleItemImg} src={post.image} alt="blog 1" />
              <div className={styles.blogSingleItemInfo}>
                <span className={styles.blogSingleItemInfoDate}>{post.date}</span>|
                <span className={styles.blogSingleItemInfoAuthor}> by {post.author}</span>|
                <span className={styles.blogSingleItemInfoTitle}>{post.category}</span>
              </div>
              <h1 className={styles.blogSingleItemTitle}>{post.title}</h1>

              {post.paragraphs.map((paragraph, index) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className={index === 0 ? styles.blogSingleItemTextTop : styles.blogSingleItemTextBottom}
                >
                  {paragraph}
                </p>
              ))}

              <blockquote className={styles.blogSingleBlockquote}>
                <p className={styles.blogSingleBlockquoteText}>{post.quote.text}</p>
                <div className={styles.blogSingleBlockquoteAuthor}>{post.quote.author}</div>
              </blockquote>

              <div className={styles.blogSingleTags}>
                <h4 className={styles.blogSingleTagsTitle}>Tags</h4>
                <div className={styles.blogSingleTagsList}>
                  {post.tags.map((tag) => (
                    <Link key={tag} className={styles.blogSingleTagsLink} to="/blog">
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              <div className={styles.blogSingleLinks}>
                <Link className={`${styles.blogSingleLink} ${styles.blogSingleLinkPrev}`} to="/blog">
                  Cred selfies edison bulb four dollar toast humblebrag
                </Link>
                <Link className={`${styles.blogSingleLink} ${styles.blogSingleLinkNext}`} to="/blog">
                  Semiotics fixie four dollar toast, next level
                </Link>
              </div>

              <div className={styles.blogSingleComments}>
                <h4 className={styles.blogSingleCommentsTitle}>Comments:</h4>
                {POST_COMMENTS.map((comment) => (
                  <div key={comment.id} className={styles.blogSingleCommentsItem}>
                    <img
                      className={styles.blogSingleCommentsAvatar}
                      src={comment.avatar}
                      alt="avatar"
                    />
                    <div className={styles.blogSingleCommentsInfo}>
                      <p className={styles.blogSingleCommentsName}>{comment.author}</p>
                      <p className={styles.blogSingleCommentsDate}>{comment.date}</p>
                      <p className={styles.blogSingleCommentsText}>{comment.text}</p>
                    </div>
                    <button className={styles.blogSingleReply} type="button">
                      Reply
                    </button>
                  </div>
                ))}
              </div>

              <CommentForm />
            </article>
          </div>

          <Aside />
        </div>
      </div>
    </section>
  )
}
