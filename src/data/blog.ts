import blogCover from '@/assets/img/blog-1.jpg'
import articleSlider1 from '@/assets/img/article-slider-1.jpg'
import heroSlide from '@/assets/img/content/slider-1.png'
import blogBox1 from '@/assets/img/content/blog-box-1.jpg'
import blogBox2 from '@/assets/img/content/blog-box-2.jpg'
import avatar from '@/assets/img/avatar.jpg'

export type PostMedia = 'none' | 'video' | 'slider'

export interface BlogPost {
  slug: string
  title: string
  date: string
  author: string
  category: string
  /** Cover image — posts with `video`/`slider` media omit it. */
  image?: string
  excerpt: string
  media: PostMedia
}

const POST_TEXT =
  'Everyday carry actually neutra authentic kogi shabby chic migas small batch craft beer. ' +
  'Literally williamsburg tote bag farm-to-table mustache ugh deep v irony. Af man bun copper mug ' +
  'iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke. ' +
  'Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table'

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'red-selfies-edison-bulb',
    title: 'Red selfies edison bulb four dollar toast humblebrag for the furniture',
    date: 'August 15, 2020',
    author: 'Ann Summers',
    category: 'Bedroom Furniture',
    image: blogCover,
    excerpt: POST_TEXT,
    media: 'none',
  },
  {
    slug: 'authentic-kogi-shabby-chic',
    title: 'Authentic kogi shabby chic',
    date: 'August 12, 2020',
    author: 'Lux Morningstar',
    category: 'Design',
    excerpt: POST_TEXT,
    media: 'video',
  },
  {
    slug: 'semiotics-fixie-four-dollar-toast',
    title: 'Semiotics fixie four dollar toast, next level woke',
    date: 'August 18, 2020',
    author: 'Ann Summers',
    category: 'Table Furniture',
    excerpt: POST_TEXT,
    media: 'slider',
  },
]

export interface BlogPostDetail extends BlogPost {
  paragraphs: string[]
  quote: { text: string; author: string }
  tags: string[]
}

const DETAIL_PARAGRAPH_ONE =
  'Everyday carry actually neutra authentic kogi shabby chic migas small batch craft beer. ' +
  'Literally williamsburg tote bag farm-to-table mustache ugh deep v irony. Af man bun copper mug ' +
  'iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke. ' +
  'Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table portland kickstarter, readymade ' +
  'ramps humblebrag ennui banjo mumblecore vaporware pickled cray stumptown 8-bit mlkshk. Tumeric ' +
  'tousled austin, kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo ' +
  'bushwick coloring book. Semiotics man bun venmo viral cliche. Tousled yr williamsburg austin ' +
  'edison bulb cloud bread vegan street art. Locavore food truck trust fund palo santo asymmetrical, ' +
  'franzen deep v marfa kogi whatever swag pop-up seitan.'

const DETAIL_PARAGRAPH_TWO =
  'Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats ' +
  'coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table. ' +
  'Yuccie portland kickstarter, readymade ramps humblebrag ennui banjo mumblecore vaporware ' +
  'pickled cray stumptown 8-bit mlkshk. Tumeric tousled austin, kinfolk scenester authentic craft ' +
  'beer truffaut irony intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo ' +
  'viral cliche. Tousled yr williamsburg austin edison bulb cloud bread vegan street art. Locavore ' +
  'food truck trust fund palo santo asymmetrical, franzen deep v marfa kogi whatever swag pop-up ' +
  'seitan.'

export const BLOG_POST_DETAILS: Record<string, BlogPostDetail> = Object.fromEntries(
  BLOG_POSTS.map((post) => [
    post.slug,
    {
      ...post,
      image: post.image ?? blogCover,
      paragraphs: [DETAIL_PARAGRAPH_ONE, DETAIL_PARAGRAPH_TWO],
      quote: {
        text:
          '“Simplicity is not the goal. It is the by-product of a good idea and modest expectations”',
        author: 'Paul Rand',
      },
      tags: ['Bedroom furniture', 'Office furniture', 'Dining room furniture', 'Chair'],
    },
  ]),
)


/** Slides shown inside the "slider" post on the blog index. */
export const ARTICLE_SLIDER_IMAGES = [
  { id: 'a1', src: articleSlider1, alt: 'slider 1' },
  { id: 'a2', src: articleSlider1, alt: 'slider 2' },
  { id: 'a3', src: articleSlider1, alt: 'slider 3' },
]

const HERO_TEXT =
  "Deep v you probably haven't heard of them banh mi synth actually affogato. Aesthetic lyft ethical drinking vinegar austint"

/** Slides shown inside the hero slider on the home page. */
export const HERO_SLIDES = [
  { id: 'hero-1', image: heroSlide, alt: 'slider img', title: 'Furniture collection', text: HERO_TEXT },
  { id: 'hero-2', image: heroSlide, alt: 'slider img', title: 'Furniture collection', text: HERO_TEXT },
  { id: 'hero-3', image: heroSlide, alt: 'slider img', title: 'Furniture collection', text: HERO_TEXT },
]

/** The two teaser cards rendered at the bottom of the home page. */
export const BLOG_BOX_POSTS = [
  {
    id: 'box-1',
    image: blogBox1,
    date: 'March 12, 2020',
    author: 'Ann Summers',
    theme: 'Inrerior',
    title: 'Listicle actually selvage activated charcoal for the drinking vinegar',
    slug: 'red-selfies-edison-bulb',
  },
  {
    id: 'box-2',
    image: blogBox2,
    date: 'September 28,2020',
    author: 'Finnagan Morningstar',
    theme: 'Dining room interior',
    title: 'Red selfies edison bulb four dollar toast humblebrag',
    slug: 'semiotics-fixie-four-dollar-toast',
  },
]

export interface Comment {
  id: string
  author: string
  date: string
  text: string
  avatar: string
}

export const POST_COMMENTS: Comment[] = [
  {
    id: 'c1',
    author: 'Lea Brown',
    date: 'August 12, 2020',
    text: 'Tumeric tousled austin, kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche',
    avatar,
  },
]

export const ASIDE_CATEGORIES = [
  { id: 'cat-1', label: 'Dining room', count: 1 },
  { id: 'cat-2', label: 'Office furniture', count: 12 },
  { id: 'cat-3', label: 'Simple interiror design', count: 2 },
  { id: 'cat-4', label: 'Design', count: 4 },
  { id: 'cat-5', label: 'Bedroom Furniture', count: 1 },
]

export const ASIDE_RECENT_POSTS = [
  {
    id: 'recent-1',
    title: 'Cred selfies edison bulb four dollar toast humblebrag',
    date: 'August 10, 2020',
    author: 'Ann Summers',
    slug: 'red-selfies-edison-bulb',
  },
  {
    id: 'recent-2',
    title: 'Semiotics fixie four dollar toast, next level woke scenester direct trade photo booth',
    date: 'September 30 ,2020',
    author: 'Ann Summers',
    slug: 'semiotics-fixie-four-dollar-toast',
  },
  {
    id: 'recent-3',
    title: 'Cred selfies edison bulb four dollar toast humblebrag',
    date: 'May 2, 2020',
    author: 'Ann Summers',
    slug: 'red-selfies-edison-bulb',
  },
]

export const ASIDE_TAGS = [
  'Dining room futniture',
  'Chair',
  'Table',
  'Bedroom',
  'Office Furniture',
]

export const VIDEO_URL = 'http://www.youtube.com/watch?v=0O2aH4XLbto'
export const VIDEO_EMBED_URL = 'https://www.youtube.com/embed/0O2aH4XLbto?autoplay=1'

/**
 * Free furniture-themed stock film shown behind the home hero
 * (Mixkit Stock Video Free License — commercial use allowed).
 * The `<video>` element autoplays muted and loops natively.
 */
export const HERO_VIDEO_SRC = 'https://assets.mixkit.co/videos/3090/3090-1080.mp4'
/** Low-res poster shown before the video loads / if it cannot play. */
export const HERO_VIDEO_POSTER = 'https://assets.mixkit.co/videos/3090/3090-thumb-720-0.jpg'

/** Full-screen promo video hero shown at the top of the home page. */
export const HERO_VIDEO_TITLE = 'Crafted for the way you live'
export const HERO_VIDEO_TEXT =
  'Watch the Desire story — from the first sketch to the finished piece. ' +
  'Sustainable materials, honest craft and design that stays with you for years.'
