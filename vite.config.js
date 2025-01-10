import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/Portfolio/', // This is crucial for GitHub Pages
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase", // Ensure camelCase naming for CSS module classes
    },
  },
});
