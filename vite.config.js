import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// base relativo para funcionar sob o subpath do GitHub Pages
// (https://matheussantos-web.github.io/brokencrownsite/)
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './',
})
