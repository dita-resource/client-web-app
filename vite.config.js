import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Update the alias for the new entry file
      '/src/main.jsx': '/src/index.jsx',
    },
  },
})
