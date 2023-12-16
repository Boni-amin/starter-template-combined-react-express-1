import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // Connect client to backend 
  server: {
    proxy:{
      '/api':{
        target: 'http://localhost:5000'
      }
    }
  }
  
  
})
