import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// base relativo para funcionar sob o subpath do GitHub Pages
// (https://matheussantos-web.github.io/brokencrownsite/)
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './',
  build: {
    rollupOptions: {
      output: {
        // Separa o vendor React para melhor cache (muda menos que o app)
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('/react-dom')) {
            return 'react'
          }
        },
      },
    },
  },
})
