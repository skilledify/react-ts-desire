import { ABOUT_PARAGRAPHS, ABOUT_TITLE } from '@/data/contact'
import { VideoBlock } from '@/components/ui/VideoBlock'
import styles from './AboutSection.module.css'

export function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutPrev}>
        <div className="container">
          <h2 className={styles.aboutPrevTitle}>About Us</h2>
        </div>
      </div>
      <section className={styles.aboutContent}>
        <div className="container">
          <h3 className={styles.aboutTitle}>{ABOUT_TITLE}</h3>
          <div className={styles.aboutText}>
            {ABOUT_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
      <VideoBlock className={styles.aboutPopup} label="Play the Desire film" />
    </section>
  )
}
