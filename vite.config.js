import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Simplified Vite config for deployment
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false
  },
  base: '/'
})
