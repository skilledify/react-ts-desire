import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Builds `src/main.tsx` as a classic IIFE script so the smoke test can evaluate
 * the real client bundle inside jsdom (which does not support ES modules).
 */
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  build: {
    outDir: '.smoke',
    emptyOutDir: true,
    minify: false,
    cssCodeSplit: false,
    lib: {
      entry: fileURLToPath(new URL('./src/main.tsx', import.meta.url)),
      formats: ['iife'],
      name: 'DesireApp',
      fileName: () => 'app.js',
    },
  },
})
