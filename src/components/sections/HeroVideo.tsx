import { useEffect, useRef } from 'react'
import { HERO_VIDEO_POSTER, HERO_VIDEO_SRC, HERO_VIDEO_TEXT, HERO_VIDEO_TITLE } from '@/data/blog'
import styles from './HeroVideo.module.css'

/** Backdrop film plays a touch faster than real time so it reads as lively. */
const HERO_VIDEO_PLAYBACK_RATE = 1.25

/**
 * Promo hero: a free furniture-themed stock film autoplays muted and loops as
 * the backdrop (native `<video>`), under a dark tint in the site's palette,
 * with the headline on top using the signature divider line.
 *
 * The video is `aria-hidden` and non-interactive — it is pure decoration.
 */
export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)

  // Reinforce the playback rate on mount: the `playbackRate` content attribute
  // is not always honoured by browsers for an autoplaying, muted `<video>`.
  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.playbackRate = HERO_VIDEO_PLAYBACK_RATE
    }
  }, [])

  return (
    <section className={styles.hero}>
      <video
        ref={videoRef}
        className={styles.heroVideo}
        src={HERO_VIDEO_SRC}
        poster={HERO_VIDEO_POSTER}
        autoPlay
        muted
        loop
        playsInline
        playbackRate={HERO_VIDEO_PLAYBACK_RATE}
        aria-hidden="true"
        tabIndex={-1}
      />

      <div className={styles.heroOverlay} />

      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{HERO_VIDEO_TITLE}</h1>
          <p className={styles.heroText}>{HERO_VIDEO_TEXT}</p>
        </div>
      </div>
    </section>
  )
}