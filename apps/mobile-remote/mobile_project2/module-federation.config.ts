import { createModuleFederationConfig } from '@module-federation/vite';

export default createModuleFederationConfig({
  name: 'mobile_project2',
  manifest: true,
  exposes: {
    './export-app': './src/export-app.tsx',
  },
  bridge: {
    // 启用 Bridge Router 路由能力，默认为 true
    enableBridgeRouter: true,
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