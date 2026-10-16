import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Navigation } from 'swiper/modules'
import { ARTICLE_SLIDER_IMAGES } from '@/data/blog'
import arrowLeft from '@/assets/img/arrow-left.svg'
import arrowRight from '@/assets/img/arrow-right.svg'
import styles from './ArticleSlider.module.css'

export function ArticleSlider() {

  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null)
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null)

  return (
    <div className={styles.articleSlider}>
      <Swiper
        className={styles.articleSliderItems}
        modules={[Navigation, A11y]}
        slidesPerView={1}
        loop
        speed={500}
        navigation={{ prevEl, nextEl }}
        a11y={{ prevSlideMessage: 'Previous slide', nextSlideMessage: 'Next slide' }}
      >
        {ARTICLE_SLIDER_IMAGES.map((slide) => (
          <SwiperSlide key={slide.id} className={styles.articleSliderItem}>
            <img className={styles.articleSliderImg} src={slide.src} alt={slide.alt} />
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        ref={setPrevEl}
        type="button"
        className={`${styles.arrow} ${styles.arrowPrev}`}
        aria-label="Previous slide"
      >
        <img src={arrowLeft} alt="" />
      </button>
      <button
        ref={setNextEl}
        type="button"
        className={`${styles.arrow} ${styles.arrowNext}`}
        aria-label="Next slide"
      >
        <img src={arrowRight} alt="" />
      </button>
    </div>
  )
}
