# Desire

Furniture studio website — **Vite + React 19 + TypeScript + React Router 7 + CSS Modules**.

## Quick start

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # typecheck + production bundle into dist/
npm run preview    # serve the production build
npm run typecheck  # tsc -b
npm run smoke      # jsdom runtime test: every route + key interactions
```

> If `npm install` fails with `EACCES` on `~/.npm/_cacache`, the global cache is
> not writable. Use a project-local cache instead:
> `npm install --cache ./.npm-cache`.

## Stack decisions

| Concern | Choice | Why |
| --- | --- | --- |
| Build | Vite 7 | ESM dev server, fast HMR, code-split routes |
| UI | React 19 | Current stable, `StrictMode` double-render caught real bugs |
| Routing | React Router 7 (`createBrowserRouter`) | Nested `Layout` route, `lazy()` per page, data-router APIs |
| Styles | CSS Modules (`.module.css`) | Scoped per component; the old BEM class names no longer leak globally |
| Sliders | Swiper 11 | Replaces `slick-carousel` — see the migration table below |
| Types | TypeScript 5.9, `strict` | Project references: `tsconfig.app.json` + `tsconfig.node.json` |

## Routes

| Path | Page | Contents |
| --- | --- | --- |
| `/` | `HomePage` | hero slider, new collection, decor banner, how-it-works, gallery, blog teasers |
| `/about` | `AboutPage` | about section + video, inspiration metrics, partners, collection |
| `/gallery` | `GalleryPage` | filterable 10-item grid |
| `/blog` | `BlogPage` | post list with video/slider embeds, aside, pagination (`?page=`) |
| `/blog/:slug` | `BlogPostPage` | article, tags, comments, comment form |
| `/contact` | `ContactPage` | map, contact form, horizontal slider |
| `*` | `NotFoundPage` | 404 |

## Migrated third-party code

The legacy site was plain HTML + SCSS + jQuery. Everything below was removed:

| Legacy | Replacement |
| --- | --- |
| `slick-carousel` `.top__slider` | `HeroSlider` — Swiper `EffectFade` + `Pagination` + `Autoplay` + `A11y` |
| `slick-carousel` `.article-slider__items` | `ArticleSlider` — Swiper `Navigation` with React-rendered SVG arrows (`prevEl`/`nextEl`) |
| `slick-carousel` `.contact-slider__inner` | `ContactSlider` — Swiper `slidesPerView: 10` with the original 6 responsive breakpoints |
| `mixitup` gallery filtering | `useState<GalleryCategoryId>` in `Gallery.tsx` |
| `magnificPopup` video iframe | `VideoModal` — accessible dialog, Esc/backdrop close, scroll lock |
| jQuery rightside-menu / burger handlers | `useState` in `Header.tsx` + CSS transitions, plus a backdrop, scroll lock and Esc-to-close |
| `slick-dots` bullets | Swiper pagination bullets restyled per slider via `:global()` in each module |
| `rateyo`, `ion-rangeslider`, `fancybox` | Dropped — they were never wired up in the legacy code (only commented out) |

Slick's responsive `breakpoint` keys map to Swiper's `breakpoints` object, which
uses the same "max-width" semantics.

## Project structure

```
src/
├── main.tsx              # entry: RouterProvider + global styles
├── router.tsx            # route tree, every page lazy-loaded
├── styles/index.css      # design tokens, reset, base, .container/.btn utilities
├── data/                 # typed content + inline SVG icon paths
├── components/
│   ├── layout/           # Layout, Header, Footer, Breadcrumbs, ScrollToTop
│   ├── sections/         # page sections (gallery, blog, contact, ...)
│   ├── sliders/          # the three Swiper carousers
│   └── ui/               # Icon, VideoModal, VideoBlock, CustomCheckbox
└── pages/                # one file per route
```

Component styles live next to the component as `<Name>.module.css`. Only the
reset, design tokens and two shared utilities (`.container`, `.container-fluid`,
`.btn`) are global.

### Design tokens

Colours, fonts, container widths and easing are CSS custom properties on
`:root` (`src/styles/index.css`). The old SCSS `$variables` map 1:1 onto them —
swap `--color-yellow` etc. rather than editing component files.

Note that `html { font-size: 10px }` is preserved from the original, so `1rem`
equals `10px` and the existing `rem`-based sizing keeps working.

## Testing

`npm run smoke` builds an IIFE bundle (`vite.smoke.config.ts`) and boots it in
jsdom. It asserts that all seven routes render their landmarks without console
errors, and exercises the interactive replacements:

- gallery category filtering (the mixitup replacement)
- slide-in side menu open/close incl. body scroll lock
- video modal opening with the YouTube embed
- client-side navigation from the header

```
OK /                                  20406 chars, swiper: 3 slides / 3 bullets
OK /contact                           27689 chars, swiper: 20 slides / 2 bullets
...
OK   gallery filter switches category — living furniture 1 -> bedroom furniture 1
OK   video modal embeds YouTube
```

## Deployment

The app is a client-rendered SPA. Any static host works provided it falls back
to `index.html` for unknown paths (required for direct links to `/blog/:slug`):

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

If you deploy under a sub-path, set `base` in `vite.config.ts` and prefix the
absolute asset paths in `src/data/*.ts` and the CSS `url()` values accordingly.
