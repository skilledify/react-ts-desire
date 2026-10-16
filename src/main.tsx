import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { router } from '@/router'

// Base Swiper stylesheet — required once, individual sliders restyle
// the generated classes inside their own *.module.css files.
import 'swiper/css'
import '@/styles/index.css'

const container = document.getElementById('root')

if (!container) {
  throw new Error('Unable to start Desire: #root container is missing in index.html')
}

createRoot(container).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
