import { useEffect, useRef } from 'react'
import closeIcon from '@/assets/img/close.svg'
import styles from './VideoModal.module.css'

interface VideoModalProps {
  open: boolean
  src: string
  title?: string
  onClose: () => void
}

/**
 * Lightweight replacement for the previous jQuery Magnific-Popup integration.
 * Renders an accessible dialog with the embedded video, closes on Esc / backdrop
 * click and stops propagating clicks inside the frame.
 */
export function VideoModal({ open, src, title = 'Video', onClose }: VideoModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)

    closeRef.current?.focus()

    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previous
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
    >
      <div className={styles.dialog} onClick={(event) => event.stopPropagation()}>
        <button
          ref={closeRef}
          type="button"
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close video"
        >
          <img src={closeIcon} alt="" />
        </button>
        <iframe
          className={styles.frame}
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  )
}
