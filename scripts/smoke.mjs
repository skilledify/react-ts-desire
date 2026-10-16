/**
 * Runtime smoke test: boots the real client bundle inside jsdom and asserts
 * that every route renders its landmarks without throwing.
 *
 *   node scripts/smoke.mjs
 */
import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { JSDOM, VirtualConsole } from 'jsdom'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')

/**
 * The app is deployed under a sub-path (see `base` in vite.config.ts and the
 * `homepage` field in package.json), and the router mirrors it with `basename`.
 * The smoke harness must mount the bundle at the same base, otherwise React
 * Router refuses to match any route.
 */
const BASE_PATH = new URL(
  JSON.parse(readFileSync(resolve(root, 'package.json'), 'utf-8')).homepage,
).pathname.replace(/\/$/, '')

let bundleSource
try {
  bundleSource = readFileSync(resolve(root, '.smoke/app.js'), 'utf-8')
} catch {
  console.error('Missing .smoke/app.js — run: npx vite build --config vite.smoke.config.ts')
  process.exit(1)
}

const SHELL = '<!doctype html><html><head></head><body><div id="root"></div></body></html>'

const ROUTES = [
  { path: '/', expect: ['Furniture new collection', 'How it works', 'Aesthetic ethical drinking', 'Crafted for the way you live', 'Seasonal sale', 'Days', 'Hours', 'Minutes', 'Seconds'] },
  { path: '/about', expect: ['About Us', 'Our Inspiration in details'] },
  { path: '/gallery', expect: ['Bedroom furniture', 'Living room furniture'] },
  { path: '/blog', expect: ['Authentic kogi shabby chic', 'Recent Posts'] },
  {
    path: '/blog/red-selfies-edison-bulb',
    expect: ['Post a Comment', 'Red selfies edison bulb', 'Lea Brown'],
  },
  { path: '/contact', expect: ['Contact Us', 'Your message'] },
  { path: '/this-route-does-not-exist', expect: ['404'] },
]

let failed = false

/** Boots the bundle at `path` and returns the live jsdom window. */
function mount(path) {
  const errors = []
  const virtualConsole = new VirtualConsole()
  virtualConsole.on('jsdomError', (error) => errors.push(String(error)))
  virtualConsole.on('error', (...args) => errors.push(args.join(' ')))

  const dom = new JSDOM(SHELL, {
    url: `http://localhost${BASE_PATH}${path}`,
    runScripts: 'dangerously',
    pretendToBeVisual: true,
    virtualConsole,
  })

  // jsdom omits a few fetch/stream globals that React Router relies on.
  for (const name of [
    'Request',
    'Response',
    'Headers',
    'fetch',
    'FormData',
    'AbortController',
    'ReadableStream',
    'TextEncoder',
    'TextDecoder',
    'structuredClone',
  ]) {
    if (dom.window[name] === undefined && globalThis[name] !== undefined) {
      dom.window[name] = globalThis[name]
    }
  }

  // jsdom has no layout engine, so scrolling is a no-op stub.
  dom.window.scrollTo = () => {}
  dom.window.HTMLElement.prototype.scrollIntoView = () => {}

  try {
    dom.window.eval(`${bundleSource}\n//# sourceURL=desire-app.js`)
  } catch (error) {
    errors.push(String(error))
  }

  return { dom, errors }
}

const tick = () => new Promise((r) => setTimeout(r, 250))

for (const route of ROUTES) {
  const { dom, errors } = mount(route.path)
  await tick()

  const doc = dom.window.document
  const html = doc.getElementById('root')?.innerHTML ?? ''
  const missing = route.expect.filter((needle) => !html.includes(needle))
  const slides = doc.querySelectorAll('.swiper-slide').length
  const bullets = doc.querySelectorAll('.swiper-pagination-bullet').length

  const label = route.path.padEnd(34)
  if (html.length === 0) {
    failed = true
    console.error(`x ${label} #root is empty`)
  } else if (missing.length > 0) {
    failed = true
    console.error(`x ${label} missing: ${missing.join(', ')}`)
  } else if (errors.length > 0) {
    failed = true
    console.error(`x ${label} console errors: ${errors.join(' | ')}`)
  } else {
    const swiper = slides > 0 ? `, swiper: ${slides} slides / ${bullets} bullets` : ''
    console.log(`OK ${label} ${html.length} chars${swiper}`)
  }

  dom.window.close()
}

const findByLabel = (doc, label) =>
  [...doc.querySelectorAll('button')].find((b) => b.getAttribute('aria-label') === label)
const findButtonByText = (doc, text) =>
  [...doc.querySelectorAll('button')].find((b) => b.textContent.trim() === text)

/* ------------------------------------------------------- interaction tests -- */

const interactions = []
const check = (name, condition, detail = '') => {
  interactions.push({ name, ok: Boolean(condition), detail })
  if (!condition) failed = true
}

// 1. Gallery filtering — replaces the jQuery mixitup plugin.
{
  const { dom, errors } = mount('/gallery')
  await tick()
  const doc = dom.window.document
  const before = doc.querySelector('img[alt^="living furniture"]')?.getAttribute('alt')

  // The pill label is followed by a count badge, so match on the text prefix.
  const bedroomBtn = [...doc.querySelectorAll('button')].find((b) =>
    b.textContent.trim().startsWith('Bedroom furniture'),
  )
  bedroomBtn?.click()
  await tick()

  const after = doc.querySelector('img[alt^="bedroom furniture"]')?.getAttribute('alt')
  check('gallery filter switches category', Boolean(before && after && after !== before), `${before} -> ${after}`)
  check('gallery filter has no console errors', errors.length === 0, errors.join(' | '))
  dom.window.close()
}

// 2. Slide-in side menu — replaces the jQuery .css('transform') handlers.
{
  const { dom, errors } = mount('/')
  await tick()
  const doc = dom.window.document

  check('body scroll is unlocked initially', doc.body.style.overflow === '')
  findByLabel(doc, 'Open side menu')?.click()
  await tick()
  check('side menu locks body scroll', doc.body.style.overflow === 'hidden', doc.body.style.overflow)

  findByLabel(doc, 'Close menu')?.click()
  await tick()
  check('side menu releases body scroll', doc.body.style.overflow === '', doc.body.style.overflow)
  check('side menu has no console errors', errors.length === 0, errors.join(' | '))
  dom.window.close()
}

// 3. Video modal — replaces jQuery magnificPopup.
{
  const { dom, errors } = mount('/blog')
  await tick()
  const doc = dom.window.document

  check('no dialog before clicking play', doc.querySelector('[role="dialog"]') === null)
  findByLabel(doc, 'Play the studio film')?.click()
  await tick()

  const dialog = doc.querySelector('[role="dialog"]')
  const iframe = dialog?.querySelector('iframe')
  check('video modal opens', Boolean(dialog))
  check('video modal embeds YouTube', iframe?.getAttribute('src')?.includes('youtube.com/embed') === true, iframe?.getAttribute('src') ?? 'none')
  check('video modal has no console errors', errors.length === 0, errors.join(' | '))
  dom.window.close()
}

// 4. Client-side navigation via the header.
{
  const { dom, errors } = mount('/')
  await tick()
  const doc = dom.window.document
  const galleryLink = [...doc.querySelectorAll('a')].find((a) => a.textContent.trim() === 'Gallery')
  galleryLink?.click()
  await tick()

  check('header link navigates to /gallery', dom.window.location.pathname === `${BASE_PATH}/gallery`, dom.window.location.pathname)
  check('navigation has no console errors', errors.length === 0, errors.join(' | '))
  dom.window.close()
}

// 5. Burger button toggles its accessible state (and cross icon via CSS).
{
  const { dom, errors } = mount('/')
  await tick()
  const doc = dom.window.document

  const burger = findByLabel(doc, 'Toggle navigation')
  check('burger starts collapsed', burger?.getAttribute('aria-expanded') === 'false')
  burger?.click()
  await tick()
  check('burger expands on click', burger?.getAttribute('aria-expanded') === 'true')
  burger?.click()
  await tick()
  check('burger collapses back', burger?.getAttribute('aria-expanded') === 'false')
  check('burger toggle has no console errors', errors.length === 0, errors.join(' | '))
  dom.window.close()
}

// 6. Promo hero renders a self-playing (muted, looping) background video.
{
  const { dom, errors } = mount('/')
  await tick()
  const doc = dom.window.document

  const heroVideo = [...doc.querySelectorAll('video')].find((v) =>
    (v.getAttribute('src') ?? '').includes('mixkit.co/videos/3090'),
  )
  check('hero renders background video', Boolean(heroVideo))
  // React sets `muted` as a DOM property, not an attribute — check accordingly.
  check(
    'hero video autoplays muted on loop',
    heroVideo?.hasAttribute('autoplay') === true &&
      heroVideo?.muted === true &&
      heroVideo?.hasAttribute('loop') === true,
  )
  check('hero video is inline (mobile)', heroVideo?.hasAttribute('playsinline'))
  check('hero video has no console errors', errors.length === 0, errors.join(' | '))
  dom.window.close()
}

console.log('\nInteraction tests:')
for (const { name, ok, detail } of interactions) {
  console.log(`  ${ok ? 'OK  ' : 'FAIL'} ${name}${detail ? ` — ${detail}` : ''}`)
}

if (failed) {
  console.error('\nSmoke test FAILED')
  process.exit(1)
}

console.log('\nSmoke test passed: routing + interactions')

