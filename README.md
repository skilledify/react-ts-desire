<!-- README badges -->
<p align="center">
  <img src="src/assets/img/logo.png" alt="Desire logo" width="140" />
</p>

<h1 align="center">Desire — Furniture for Life</h1>

<p align="center">
  <strong>A modern furniture-studio website rebuilt from legacy HTML/SCSS/jQuery<br/>
  into a fast, typed, component-driven SPA.</strong>
</p>

<p align="center">
  <a href="https://skilledify.github.io/react-ts-desire/"><img src="https://img.shields.io/badge/demo-GitHub%20Pages-181717?style=for-the-badge&logo=githubpages&logoColor=white" alt="Live demo" /></a>
  <a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/Vite-7.1-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" /></a>
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" /></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" /></a>
  <a href="https://reactrouter.com/"><img src="https://img.shields.io/badge/React%20Router-7-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" alt="React Router" /></a>
  <a href="https://swiperjs.com/"><img src="https://img.shields.io/badge/Swiper-11-6332F6?style=for-the-badge&logo=swiper&logoColor=white" alt="Swiper" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-green?style=for-the-badge" alt="MIT License" /></a>
</p>

<p align="center">
  🏠 <a href="#-overview"><b>Overview</b></a> •
  ✨ <a href="#-key-features"><b>Features</b></a> •
  🚀 <a href="#-quick-start"><b>Quick Start</b></a> •
  🗂️ <a href="#-project-structure"><b>Structure</b></a> •
  🧪 <a href="#-testing"><b>Testing</b></a> •
  📦 <a href="#-deployment"><b>Deployment</b></a> •
  🇷🇺 <a href="#-русская-версия"><b>Русская версия</b></a>
</p>

---

## 📖 Overview

**Desire** is a multi-page furniture-studio website (designer consultation, measurements and
production) for living, bedroom, dining and office furniture. The current codebase is a full
rewrite of the original static site (HTML + SCSS + jQuery + gulp) onto a modern toolchain —
same design, zero jQuery, fully typed components and lazy-loaded routes.

> **Live demo:** https://skilledify.github.io/react-ts-desire/

### ✨ Key features

- 🎨 **Pixel-faithful redesign** of the legacy site with CSS Modules — scoped styles, no class-name leaks
- 🧭 **7 lazy-loaded routes** with a nested layout (`Header` / `Footer` / `ScrollToTop`)
- 🎠 **3 Swiper carousels** replacing jQuery `slick-carousel` (fade hero, article nav, 10-per-view contacts)
- 🗂️ **Filterable gallery** — pure `useState` instead of the `mixitup` jQuery plugin
- ▶️ **Accessible video modal** — Esc / backdrop close, scroll lock (replaces `magnificPopup`)
- 🍔 **Slide-in side menu** with backdrop and scroll lock (replaces jQuery burger handlers)
- 📝 **Blog with 9 articles**, tags, comments form and `?page=` pagination
- ⏱️ **Discount countdown**, partners grid, inspiration metrics, contact form + map
- 🧪 **jsdom smoke test** covering every route and key interactions
- ⚡ **Vite 7 build**: per-route code splitting, sourcemaps, fast HMR

## 🛠️ Tech stack

| Concern | Choice | Why |
| --- | --- | --- |
| Build | **Vite 7** | ESM dev server, fast HMR, code-split routes |
| UI | **React 19** (`StrictMode`) | Current stable; double-render caught real bugs |
| Routing | **React Router 7** (`createBrowserRouter`) | Nested `Layout` route, `lazy()` per page, data-router APIs |
| Styles | **CSS Modules** (`.module.css`) | Scoped per component; legacy BEM names no longer leak globally |
| Sliders | **Swiper 11** | Replaces `slick-carousel` (see [migration table](#-migrated-third-party-code)) |
| Types | **TypeScript 5.9**, `strict` | Project references: `tsconfig.app.json` + `tsconfig.node.json` |
| Testing | **jsdom** smoke runner | Boots the real bundle and asserts every route renders |
| Hosting | **GitHub Pages** | Static SPA deploy via `gh-pages` |

## 🚀 Quick start

**Prerequisites:** [Node.js](https://nodejs.org/) 20.19+ / 22.12+ and npm.

```bash
# 1. clone the repository
git clone https://github.com/skilledify/react-ts-desire.git
cd react-ts-desire

# 2. install dependencies
npm install

# 3. start the dev server (opens http://localhost:5173)
npm run dev
```

### 📜 Available scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start Vite dev server with HMR → http://localhost:5173 |
| `npm run build` | Typecheck (`tsc -b`) + production bundle into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run typecheck` | Run TypeScript project references check only |
| `npm run smoke` | jsdom runtime test: every route + key interactions |
| `npm run deploy` | Build and publish `dist/` to GitHub Pages (`gh-pages`) |

> 💡 **Troubleshooting:** if `npm install` fails with `EACCES` on `~/.npm/_cacache`,
> the global npm cache is not writable — use a project-local cache:
> `npm install --cache ./.npm-cache`

## 🗺️ Routes

| Path | Page | Contents |
| --- | --- | --- |
| `/` | `HomePage` | hero slider, new collection, decor banner, how-it-works, gallery, blog teasers |
| `/about` | `AboutPage` | about section + video, inspiration metrics, partners, collection |
| `/gallery` | `GalleryPage` | filterable category grid |
| `/blog` | `BlogPage` | post list with video/slider embeds, aside, pagination (`?page=`) |
| `/blog/:slug` | `BlogPostPage` | article, tags, comments, comment form |
| `/contact` | `ContactPage` | map, contact form, horizontal slider |
| `*` | `NotFoundPage` | 404 |

Every page is **lazy-loaded** (`lazy: async () => …` in `src/router.tsx`), so each route
ships as its own chunk.

## 🗂️ Project structure

```
src/
├── main.tsx              # entry: RouterProvider + global styles
├── router.tsx            # route tree, every page lazy-loaded
├── styles/index.css      # design tokens, reset, base, .container/.btn utilities
├── data/                 # typed content + inline SVG icon paths
│   ├── blog.ts           # 9 articles with slugs, tags, comments
│   ├── gallery.ts        # categories + items (typed by GalleryCategoryId)
│   ├── collection.ts     # new-collection products
│   ├── contact.ts        # contact slider images & company info
│   ├── navigation.ts     # header/footer menus, address, email
│   └── …                 # promo, social, icons
├── components/
│   ├── layout/           # Layout, Header, Footer, Breadcrumbs, ScrollToTop
│   ├── sections/         # 17 page sections (Gallery, Blog, Decor, Partners, …)
│   ├── sliders/          # 3 Swiper carousels (Hero, Article, Contact)
│   └── ui/               # Icon, VideoModal, VideoBlock, CustomCheckbox
├── pages/                # one file per route
└── assets/img/           # images, logos, SVG icons
```

Component styles live next to the component as `<Name>.module.css`. Only the reset,
design tokens and two shared utilities (`.container`, `.container-fluid`, `.btn`) are global.

<details>
<summary>🎨 <b>Design tokens</b></summary>

Colours, fonts, container widths and easing are CSS custom properties on `:root`
(`src/styles/index.css`). The old SCSS `$variables` map 1:1 onto them — swap `--color-yellow`
etc. rather than editing component files.

> Note that `html { font-size: 10px }` is preserved from the original design, so `1rem`
> equals `10px` and the existing `rem`-based sizing keeps working.

</details>

## 🔄 Migrated third-party code

The legacy site was plain HTML + SCSS + jQuery. Everything below was removed:

| Legacy | Replacement |
| --- | --- |
| `slick-carousel` `.top__slider` | `HeroSlider` — Swiper `EffectFade` + `Pagination` + `Autoplay` + `A11y` |
| `slick-carousel` `.article-slider__items` | `ArticleSlider` — Swiper `Navigation` with React-rendered SVG arrows |
| `slick-carousel` `.contact-slider__inner` | `ContactSlider` — Swiper `slidesPerView: 10` with the original 6 breakpoints |
| `mixitup` gallery filtering | `useState<GalleryCategoryId>` in `Gallery.tsx` |
| `magnificPopup` video iframe | `VideoModal` — accessible dialog, Esc/backdrop close, scroll lock |
| jQuery rightside-menu / burger handlers | `useState` in `Header.tsx` + CSS transitions, backdrop, scroll lock |
| `slick-dots` bullets | Swiper pagination bullets restyled per slider via `:global()` |
| `rateyo`, `ion-rangeslider`, `fancybox` | Dropped — never wired up in the legacy code (only commented out) |

Slick's responsive `breakpoint` keys map to Swiper's `breakpoints` object — same
"max-width" semantics.

## 🧪 Testing

`npm run smoke` builds an IIFE bundle (`vite.smoke.config.ts`) and boots it in **jsdom**.
It asserts that all seven routes render their landmarks **without console errors** and
exercises the interactive replacements:

- ✅ gallery category filtering (the `mixitup` replacement)
- ✅ slide-in side menu open/close incl. body scroll lock
- ✅ video modal opening with the YouTube embed
- ✅ client-side navigation from the header

```
OK /                                  20406 chars, swiper: 3 slides / 3 bullets
OK /contact                           27689 chars, swiper: 20 slides / 2 bullets
OK   gallery filter switches category — living furniture 1 -> bedroom furniture 1
OK   video modal embeds YouTube
```

## 📦 Deployment

The app is a client-rendered SPA published to **GitHub Pages**:

```bash
npm run deploy   # = predeploy (build) + gh-pages -d dist
```

Any static host also works, provided it falls back to `index.html` for unknown paths
(required for direct links to `/blog/:slug`):

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

> ⚠️ The app is served under a sub-path: `base: '/react-ts-desire/'` in `vite.config.ts`
> and `basename: '/react-ts-desire/'` in `src/router.tsx` must match the repository name.
> If you rename the repo or deploy to another sub-path, update **both**, plus the
> absolute asset paths in `src/data/*.ts` and CSS `url()` values.

## 🤝 Contributing

1. Fork the repository and create a feature branch: `git checkout -b feat/my-feature`
2. Make your changes and keep `npm run typecheck` and `npm run smoke` green
3. Commit using [Conventional Commits](https://www.conventionalcommits.org/): `feat: …`, `fix: …`
4. Open a Pull Request describing the change and why it is needed

## 📄 License

Distributed under the **MIT License** — see [LICENSE](LICENSE) for details.

---

## 🇷🇺 Русская версия

<details>
<summary>📖 <b>Открыть полную русскую версию README</b></summary>

## 📖 Обзор

**Desire** — многостраничный сайт мебельной студии (дизайн-консультация, замеры,
производство) для гостиной, спальни, столовой и офиса. Текущий код — полный рерайт
исходного статического сайта (HTML + SCSS + jQuery + gulp) на современный стек:
тот же дизайн, ноль jQuery, типизированные компоненты и лениво загружаемые маршруты.

> **Демо:** https://skilledify.github.io/react-ts-desire/

### ✨ Ключевые возможности

- 🎨 Точный редизайн легаси-сайта на **CSS Modules** — изолированные стили без утечек имён классов
- 🧭 **7 лениво загружаемых маршрутов** с вложенным лейаутом (`Header` / `Footer` / `ScrollToTop`)
- 🎠 **3 карусели на Swiper** вместо jQuery `slick-carousel`
- 🗂️ **Фильтруемая галерея** на чистом `useState` вместо `mixitup`
- ▶️ **Доступное видео-модальное окно** (Esc / клик по фону, блокировка скролла) вместо `magnificPopup`
- 🍔 **Выезжающее боковое меню** с подложкой вместо jQuery-обработчиков бургера
- 📝 **Блог из 9 статей** с тегами, формой комментариев и пагинацией `?page=`
- 🧪 **jsdom smoke-тест** всех маршрутов и ключевых интеракций
- ⚡ **Сборка на Vite 7**: код-сплиттинг по маршрутам, sourcemaps, быстрый HMR

## 🛠️ Технологии

| Область | Выбор | Почему |
| --- | --- | --- |
| Сборка | **Vite 7** | ESM dev-сервер, быстрый HMR, код-сплиттинг |
| UI | **React 19** (`StrictMode`) | Актуальный stable; двойной рендер ловил реальные баги |
| Роутинг | **React Router 7** | Вложенный `Layout`, `lazy()` на каждую страницу |
| Стили | **CSS Modules** | Область видимости на компонент, BEM-имена больше не протекают в глобальную область |
| Слайдеры | **Swiper 11** | Замена `slick-carousel` |
| Типы | **TypeScript 5.9**, `strict` | Project references: `tsconfig.app.json` + `tsconfig.node.json` |
| Тесты | **jsdom** smoke-runner | Поднимает реальный бандл и проверяет рендер всех маршрутов |
| Хостинг | **GitHub Pages** | Статический деплой SPA через `gh-pages` |

## 🚀 Быстрый старт

**Требования:** [Node.js](https://nodejs.org/) 20.19+ / 22.12+ и npm.

```bash
git clone https://github.com/skilledify/react-ts-desire.git
cd react-ts-desire
npm install
npm run dev        # http://localhost:5173
```

| Скрипт | Описание |
| --- | --- |
| `npm run dev` | Dev-сервер Vite с HMR → http://localhost:5173 |
| `npm run build` | Проверка типов + продакшен-бандл в `dist/` |
| `npm run preview` | Локальный просмотр продакшен-сборки |
| `npm run typecheck` | Только проверка типов (`tsc -b`) |
| `npm run smoke` | jsdom-тест: все маршруты + ключевые интеракции |
| `npm run deploy` | Сборка и публикация `dist/` на GitHub Pages |

> 💡 Если `npm install` падает с `EACCES` на `~/.npm/_cacache` — глобальный кеш
> недоступен на запись. Используйте локальный: `npm install --cache ./.npm-cache`

## 🗺️ Маршруты

| Путь | Страница | Содержимое |
| --- | --- | --- |
| `/` | `HomePage` | hero-слайдер, новая коллекция, декор-баннер, как это работает, галерея, блог |
| `/about` | `AboutPage` | о нас + видео, метрики вдохновения, партнёры, коллекция |
| `/gallery` | `GalleryPage` | фильтруемая сетка по категориям |
| `/blog` | `BlogPage` | список постов, aside, пагинация (`?page=`) |
| `/blog/:slug` | `BlogPostPage` | статья, теги, комментарии, форма комментария |
| `/contact` | `ContactPage` | карта, форма обратной связи, горизонтальный слайдер |
| `*` | `NotFoundPage` | 404 |

## 🧪 Тесты

`npm run smoke` собирает IIFE-бандл (`vite.smoke.config.ts`) и запускает его в **jsdom**:
проверяет, что все семь маршрутов отрисовываются без ошибок в консоли, и прогоняет
интерактивные замены легаси-плагинов — фильтр галереи, боковое меню (с блокировкой
скролла), видео-модалку с YouTube-эмбедом и клиентскую навигацию из шапки.

## 📦 Деплой

```bash
npm run deploy   # predeploy (build) + gh-pages -d dist
```

Хост должен отдавать `index.html` для неизвестных путей (нужно для прямых ссылок на
`/blog/:slug`):

```nginx
location / { try_files $uri $uri/ /index.html; }
```

> ⚠️ Приложение раздаётся из-под подпути: `base` в `vite.config.ts` и `basename` в
> `src/router.tsx` должны совпадать с именем репозитория.

## 🤝 Участие в разработке

1. Сделайте fork и создайте ветку: `git checkout -b feat/my-feature`
2. Внесите изменения и держите `npm run typecheck` и `npm run smoke` зелёными
3. Коммитьте по [Conventional Commits](https://www.conventionalcommits.org/)
4. Откройте Pull Request с описанием изменения и его причиной

## 📄 Лицензия

**MIT License** — подробности в [LICENSE](LICENSE).

</details>
