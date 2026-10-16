import { Link, useParams } from 'react-router'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { BlogPost } from '@/components/sections/BlogPost'
import { BLOG_POST_DETAILS } from '@/data/blog'
import styles from './NotFoundPage.module.css'

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? BLOG_POST_DETAILS[slug] : undefined

  if (!post) {
    return (
      <>
        <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Blog', to: '/blog' }]} />
        <section className={styles.notFound}>
          <div className="container">
            <h1 className={styles.title}>Post not found</h1>
            <p className={styles.text}>
              We could not find the post you were looking for.
            </p>
            <Link to="/blog" className={`${styles.button} btn`}>
              Back to blog
            </Link>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <Breadcrumbs
        items={[{ label: 'Home', to: '/' }, { label: 'Blog', to: '/blog' }, { label: post.title }]}
      />
      <BlogPost post={post} />
    </>
  )
}
