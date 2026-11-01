import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { federation } from '@module-federation/vite';
import mfConfig from './module-federation.config.ts';
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), federation(mfConfig)],
})
