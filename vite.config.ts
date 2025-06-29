import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base:'https://github.com/NelDavi/reseau-sante-plus-horizon.git',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
