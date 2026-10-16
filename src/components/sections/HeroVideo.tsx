import { useEffect, useRef } from 'react'
import { HERO_VIDEO_POSTER, HERO_VIDEO_SRC, HERO_VIDEO_TEXT, HERO_VIDEO_TITLE } from '@/data/blog'
import styles from './HeroVideo.module.css'


const HERO_VIDEO_PLAYBACK_RATE = 1.25


export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)


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
