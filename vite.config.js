import { defineConfig } from 'vite'
import vitedgePlugin from 'vitedge/plugin.js'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vitedgePlugin(), vue()]
})
