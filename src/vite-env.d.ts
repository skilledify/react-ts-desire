/// <reference types="vite/client" />

// Swiper ships its base stylesheet as a bare CSS import, which TypeScript
// cannot resolve through `vite/client`'s `*.css` wildcard.
declare module 'swiper/css'
