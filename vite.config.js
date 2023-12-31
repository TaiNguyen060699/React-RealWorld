import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'https://conduit.productionready.io',
        changeOrigin: true,
        secure: false,      
        ws: true,
      }
    }
  }
})
