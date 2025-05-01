import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'   
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/",  // ✅ Root base for Vercel
})
