import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { Gallery } from '@/components/sections/Gallery'

export function GalleryPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Gallery' }]} />
      <Gallery variant="page" />
    </>
  )
}
