import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    include: [
      'echarts-gl',
    ],
  },
  build: {
      rollupOptions: {
        external: [
    
        ]
      }
    }
})


