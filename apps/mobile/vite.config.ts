import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { federation } from '@module-federation/vite';
import mfConfig from './module-federation.config.ts';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), federation(mfConfig)]
})
