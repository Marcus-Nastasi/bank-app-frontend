import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
   rollupOptions: {
      input: {
         main: resolve(__dirname, 'index.html'),
         card: resolve(__dirname, './pages/card.html'),
         login: resolve(__dirname, './pages/login.html')
      }
   }
  }
});




