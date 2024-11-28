import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import compress from 'vite-plugin-compression'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), compress(), VitePWA({
    registerType: 'autoUpdate',
    includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
    manifest: {
      name: 'Ikramullah Karokhail Portfolio',
      short_name: 'IK Portfolio',
      theme_color: '#2563eb',
      icons: [
        {
          src: '/logo.svg',
          sizes: '192x192',
          type: 'image/svg+xml'
        }
      ]
    }
  })],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'animation-vendor': ['framer-motion'],
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  }
})
