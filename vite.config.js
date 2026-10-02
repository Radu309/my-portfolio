import { existsSync, readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Every image dropped in public/pushure/ shows up in the featured project gallery, sorted by name.
const screenshotsDir = fileURLToPath(new URL('./public/pushure', import.meta.url))
const pushureScreenshots = existsSync(screenshotsDir)
  ? readdirSync(screenshotsDir).filter((file) => /\.(avif|webp|png|jpe?g)$/i.test(file)).sort()
  : []

// https://vite.dev/config/
export default defineConfig({
  base: '/my-portfolio/',
  plugins: [react()],
  define: {
    __PUSHURE_SCREENSHOTS__: JSON.stringify(pushureScreenshots),
  },
})
