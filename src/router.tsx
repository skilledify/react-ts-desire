import { createBrowserRouter } from 'react-router'
import { Layout } from '@/components/layout/Layout'
import { NotFoundPage } from '@/pages/NotFoundPage'


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

  { basename: '/react-ts-desire/' },
)
