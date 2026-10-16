import { Link } from 'react-router'
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Pagination } from 'swiper/modules'
import { CONTACT_SLIDER_ITEMS } from '@/data/contact'
import styles from './ContactSlider.module.css'


const SLIDES = [...CONTACT_SLIDER_ITEMS, ...CONTACT_SLIDER_ITEMS]

export function ContactSlider() {
  return (
    <div className={styles.contactSlider}>
      <div className="container-fluid">
        <Swiper
          className={styles.contactSliderInner}
          modules={[Pagination, A11y]}
          slidesPerView={10}
          slidesPerGroup={10}
          spaceBetween={0}
          loop
          speed={600}
          pagination={{ clickable: true }}
          breakpoints={ {
            1700: { slidesPerView: 8, slidesPerGroup: 8 },
            1511: { slidesPerView: 6, slidesPerGroup: 6 },
            1201: { slidesPerView: 4, slidesPerGroup: 4 },
            851: { slidesPerView: 3, slidesPerGroup: 3 },
            551: { slidesPerView: 2, slidesPerGroup: 2 },
            376: { slidesPerView: 1, slidesPerGroup: 1 },
          }}
          a11y={{ prevSlideMessage: 'Previous slide', nextSlideMessage: 'Next slide' }}
        >
          {SLIDES.map((slide, index) => (
            <SwiperSlide key={`${slide.id}-${index}`} className={styles.contactSliderSlide}>
              <Link className={styles.contactSliderLink} to="/gallery">
                <img className={styles.contactSliderImg} src={slide.src} alt={slide.alt} />
                <p className={styles.contactSliderTitle}>{slide.title}</p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
