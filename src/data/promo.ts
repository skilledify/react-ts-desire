import promoBannerBg from '@/assets/img/container.jpg'

/**
 * Home page promo block with a discount countdown.
 *
 * `DISCOUNT_ENDS_AT` is a fixed UTC timestamp, so every visitor sees exactly
 * the same remaining time no matter when they open the site — the countdown
 * never restarts per session. Bump the date when the campaign is extended.
 */
export const DISCOUNT_ENDS_AT = '2026-12-31T23:59:59Z'
/** Human-readable deadline shown next to the CTA. */
export const DISCOUNT_ENDS_AT_LABEL = 'December 31, 2026'

export const DISCOUNT_BADGE = 'Special offer'
export const DISCOUNT_TITLE = 'Seasonal sale — up to 50% off'
export const DISCOUNT_TEXT =
  'Furniture pieces you have been eyeing all year are now up to half the price. ' +
  'The offer is shared by every visitor and ends at the same moment — do not let it slip away.'

/**
 * Slim advertising banner shown directly under the hero. It mirrors the promo
 * countdown bar in height (`--promo-bar-height`) and palette, but leads with a
 * free-shipping hook and a CTA instead of a live timer.
 */
export const PROMO_BANNER_BADGE = 'Free delivery'
export const PROMO_BANNER_TITLE = 'Get free shipping on orders over $300'
export const PROMO_BANNER_TEXT =
  'Anywhere in the country, straight to your door — carefully packed and fully insured.'
export const PROMO_BANNER_BTN = 'Learn more'
export const PROMO_BANNER_BG = promoBannerBg