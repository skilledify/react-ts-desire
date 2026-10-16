import { useState } from 'react'
import { VIDEO_EMBED_URL } from '@/data/blog'
import playButton from '@/assets/img/play-button.svg'
import { VideoModal } from './VideoModal'
import styles from './VideoBlock.module.css'

interface VideoBlockProps {
  /** Applied to the outer block — e.g. `article-popup` or `about-section__popup`. */
  className: string
  label?: string
}

/**
 * Background block with a play button that opens the embedded video —
 * replaces the previous `.magnificPopup()` wiring.
 */
export function VideoBlock({ className, label = 'Play video' }: VideoBlockProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className={className}>
        <button
          type="button"
          className={styles.playButton}
          onClick={() => setOpen(true)}
          aria-label={label}
        >
          <img src={playButton} alt="" />
        </button>
      </div>
      <VideoModal open={open} src={VIDEO_EMBED_URL} onClose={() => setOpen(false)} />
    </>
  )
}
