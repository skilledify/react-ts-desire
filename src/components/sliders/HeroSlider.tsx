import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Autoplay, EffectFade, Pagination } from 'swiper/modules'
import { HERO_SLIDES } from '@/data/blog'
import styles from './HeroSlider.module.css'

export function HeroSlider() {
  return (
    <section className={styles.top}>
      <div className={styles.topInner}>
        <Swiper
          className={styles.topSlider}
          modules={[Pagination, Autoplay, EffectFade, A11y]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop
          speed={700}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          a11y={{ prevSlideMessage: 'Previous slide', nextSlideMessage: 'Next slide' }}
        >
          {HERO_SLIDES.map((slide) => (
            <SwiperSlide key={slide.id} className={styles.topSliderItem}>
              <div className={styles.topSliderContent}>
                <img className={styles.topSliderImg} src={slide.image} alt={slide.alt} />
                <div className={styles.topSliderInfo}>
                  <h2 className={styles.topSliderTitle}>{slide.title}</h2>
                  <p className={styles.topSliderText}>{slide.text}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
