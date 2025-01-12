import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/coded-alchemy.github.io/dist/',
  build: {
    outDir: "dist",
  },
})
