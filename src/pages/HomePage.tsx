import { HeroVideo } from '@/components/sections/HeroVideo'
import { PromoBanner } from '@/components/sections/PromoBanner'
import { DiscountCountdown } from '@/components/sections/DiscountCountdown'
import { HeroSlider } from '@/components/sliders/HeroSlider'
import { NewCollection } from '@/components/sections/NewCollection'
import { Decor } from '@/components/sections/Decor'
import { Gallery } from '@/components/sections/Gallery'
import { BlogBox } from '@/components/sections/BlogBox'

export function HomePage() {
  return (
    <>
      <DiscountCountdown />
      <HeroVideo />
      <PromoBanner />
      <HeroSlider />
      <NewCollection />
      <Decor />
      <Gallery variant="home" />
      <BlogBox />
    </>
  )
}
