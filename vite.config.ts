import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  
    // ... other configurations ...
    css: {
      modules: {
        generateScopedName: '[name]__[local]--[hash:base64:5]',
      },
    },
 

})
