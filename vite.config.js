import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Simple Vite config; no path aliases used to avoid build errors.
export default defineConfig({
  plugins: [react()],
})
