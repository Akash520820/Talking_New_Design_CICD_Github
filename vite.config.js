import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Talking_New_Design_CICD_Github/",
  server:{
    open: true,
    port:3002,
  }
})
