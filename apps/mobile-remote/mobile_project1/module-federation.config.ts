import { createModuleFederationConfig } from '@module-federation/vite';

export default createModuleFederationConfig({
  name: 'mobile_project1',
  manifest: true,
  exposes: {
    '.': './src/index.ts',
  },
   dts: {
    generateTypes: {
      tsConfigPath: './tsconfig.app.json',
    },
  },
  shared: {
    react: {
      singleton: true,
    },
    'react/': {
      singleton: true,
    },
  },
});