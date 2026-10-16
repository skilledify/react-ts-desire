import contactSlider1 from '@/assets/img/content/contact-slider-1.jpg'
import contactSlider2 from '@/assets/img/content/contact-slider-2.jpg'
import contactSlider3 from '@/assets/img/content/contact-slider-3.jpg'
import contactSlider4 from '@/assets/img/content/contact-slider-4.jpg'
import contactSlider5 from '@/assets/img/content/contact-slider-5.jpg'
import contactSlider6 from '@/assets/img/content/contact-slider-6.jpg'
import contactSlider7 from '@/assets/img/content/contact-slider-7.jpg'
import contactSlider8 from '@/assets/img/content/contact-slider-8.jpg'
import contactSlider9 from '@/assets/img/content/contact-slider-9.jpg'
import contactSlider10 from '@/assets/img/content/contact-slider-10.jpg'

export const CONTACT_PHONE = '+1 (415) 829-7934'
export const CONTACT_PHONE_HREF = 'tel:415829-7934'
export const CONTACT_STREET = '725 Green St'
export const CONTACT_CITY = 'San Francisco, California(CA), 94133'
export const CONTACT_EMAIL = 'ouremailaddress@email.com'

export const CONTACT_TEXT =
  'Vexillologist vape microdosing freegan pork belly deep v direct trade cray single-origin coffee ' +
  'street art. Viral shaman mustache master cleanse, pour-over affogato poutine copper mug marfa ' +
  'fanny pack normcore. Lo-fi pop-up banjo portland, echo park hammock'

export const GOOGLE_MAPS_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.6149257674356!2d-122.41327504897585!3d37.79906321843501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580f18d8c6ea7%3A0x5d7f53fb70a3a903!2zNzI1IEdyZWVuIFN0LCBTYW4gRnJhbmNpc2NvLCBDQSA5NDEzMywg0KHQqNCQ!5e0!3m2!1sru!2sru!4v1648372545803!5m2!1sru!2sru'

/**
 * Items for the horizontal "recently seen" carousel on the contact page.
 * The set is duplicated once so the loop has enough slides to scroll smoothly.
 */
export const CONTACT_SLIDER_TITLES = Array.from({ length: 2 }, (_, index) => index)

const CONTACT_SLIDER_SOURCES = [
  contactSlider1,
  contactSlider2,
  contactSlider3,
  contactSlider4,
  contactSlider5,
  contactSlider6,
  contactSlider7,
  contactSlider8,
  contactSlider9,
  contactSlider10,
]

export const CONTACT_SLIDER_ITEMS = CONTACT_SLIDER_SOURCES.map((src, index) => ({
  id: `contact-slider-${index + 1}`,
  src,
  alt: `Contact slider ${index + 1}`,
  title: 'Truffaut literally trust',
}))

export const DECOR_TITLE = 'Aesthetic ethical drinking'
export const DECOR_TEXT =
  "Deep v you probably haven't heard of them banh mi synth actually affogato. Artlyft ethical the one drinking vinegar austint"

export const ABOUT_TITLE =
  'Balance in the simple through an informed marriage of design, functional and craft'

export const ABOUT_PARAGRAPHS = [
  'Vexillologist vape microdosing freegan pork belly deep v direct trade cray single-origin coffee street art. Viral shaman mustache master cleanse, pour-over affogato poutine copper mug marfa fanny pack normcore. Lo-fi pop-up banjo portland, echo park hammock chillwave literally post-ironic ramps subway tile kitsch. Shaman tumblr fixie echo park street art. Enamel pin vaporware wayfarers, organic succulents hella sustainable cardigan.',
  'Sustainable hot chicken skateboard, dreamcatcher meggings actually squid. Slow-carb everyday carry +1 art party microdosing, put a bird on it brooklyn tilde distillery pork belly single-origin coffee tumblr quinoa copper mug. Affogato cold-pressed unicorn, viral intelligentsia leggings raw denim kombucha tote bag messenger bag chambray vape coloring book scenester. Activated charcoal wayfarers church-key tote bag synth brunch. Retro cornhole',
]

export const INSPIRATION_TITLE = 'Our Inspiration in details'
export const INSPIRATION_TEXT =
  'Semiotics fixie four dollar toast, next level woke scenester direct trade photo booth helvetica jean shorts. Fanny pack church-key cornhole, banh mi thundercats gochujang keytar.'
