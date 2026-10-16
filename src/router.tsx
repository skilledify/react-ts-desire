import { createBrowserRouter } from 'react-router'
import { Layout } from '@/components/layout/Layout'
import { NotFoundPage } from '@/pages/NotFoundPage'

/**
 * Route tree. Pages are code-split with `lazy`, so the initial bundle only
 * carries the layout plus the home page.
 */
export const router = createBrowserRouter(
  [
    {
      path: '/',
      Component: Layout,
      children: [
        {
          index: true,
          lazy: async () => ({ Component: (await import('@/pages/HomePage')).HomePage }),
        },
        {
          path: 'about',
          lazy: async () => ({ Component: (await import('@/pages/AboutPage')).AboutPage }),
        },
        {
          path: 'gallery',
          lazy: async () => ({ Component: (await import('@/pages/GalleryPage')).GalleryPage }),
        },
        {
          path: 'blog',
          lazy: async () => ({ Component: (await import('@/pages/BlogPage')).BlogPage }),
        },
        {
          path: 'blog/:slug',
          lazy: async () => ({ Component: (await import('@/pages/BlogPostPage')).BlogPostPage }),
        },
        {
          path: 'contact',
          lazy: async () => ({ Component: (await import('@/pages/ContactPage')).ContactPage }),
        },
        {
          path: '*',
          Component: NotFoundPage,
        },
      ],
    },
  ],
  // Match Vite's `base` so the router works under the GitHub Pages sub-path.
  { basename: '/react-ts-desire/' },
)
