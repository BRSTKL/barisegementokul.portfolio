import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/barisegementokul.portfolio/', // GitHub Pages için base path
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
