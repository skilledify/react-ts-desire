import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { AboutSection } from '@/components/sections/AboutSection'
import { Inspiration } from '@/components/sections/Inspiration'
import { Partners } from '@/components/sections/Partners'
import { Collection } from '@/components/sections/Collection'
import { ABOUT_COLLECTION } from '@/data/collection'

export function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'About' }]} />
      <AboutSection />
      <Inspiration />
      <Partners />
      <Collection items={ABOUT_COLLECTION} />
    </>
  )
}
