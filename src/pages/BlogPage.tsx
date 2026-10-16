import { useSearchParams } from 'react-router'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { Blog } from '@/components/sections/Blog'

const TOTAL_PAGES = 2

export function BlogPage() {
  const [searchParams] = useSearchParams()
  const raw = Number.parseInt(searchParams.get('page') ?? '1', 10)
  const page = Number.isNaN(raw) ? 1 : Math.min(Math.max(raw, 1), TOTAL_PAGES)

  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Blog' }]} />
      <Blog key={page} activePage={page} />
    </>
  )
}
