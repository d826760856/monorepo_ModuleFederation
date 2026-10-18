import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { federation } from '@module-federation/vite';
import mfConfig from './module-federation.config.ts';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), federation(mfConfig)],
  resolve: {
    alias: [
      {
        find: /^react-router-dom$/,
        replacement: '@module-federation/bridge-react/router',
      },
      {
        find: /^react-router-dom\/$/,
        replacement: 'react-router-dom',
      },
    ],
  },
  server: {
    port: 5176,
    strictPort: true,
    origin: 'http://localhost:5176',
  },
})
