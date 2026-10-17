import { createModuleFederationConfig } from '@module-federation/vite';

export default createModuleFederationConfig({
  name: 'mobile_bridgeHost',
  manifest: true,
  remotes: {
    mobile_project2: 'mobile_project2@http://localhost:5176/mf-manifest.json',
  },
  dts: {
    consumeTypes: {
      typesOnBuild: true,
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