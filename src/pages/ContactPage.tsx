import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { ContactUs } from '@/components/sections/ContactUs'
import { ContactSlider } from '@/components/sliders/ContactSlider'

export function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Contact' }]} />
      <ContactUs />
      <ContactSlider />
    </>
  )
}
