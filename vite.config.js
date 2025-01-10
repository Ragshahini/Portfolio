import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/Portfolio/', // Required for proper asset resolution on GitHub Pages
  plugins: [react()],
  css: {
    modules: {
      localsConvention: 'camelCase', // Use camelCase for CSS module classes
    },
  },
});