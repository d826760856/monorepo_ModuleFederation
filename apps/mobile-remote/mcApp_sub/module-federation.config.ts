import { createModuleFederationConfig } from '@module-federation/vite';

export default createModuleFederationConfig({
  name: 'device-status',
  manifest: true,
  filename: 'remoteEntry.js',
  exposes: {
    './CellStatusContent': './src/exposeComp.tsx',
  },
  // bridge: {
  //   // 启用 Bridge Router 路由能力，默认为 true
  //   enableBridgeRouter: true,
  // },
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