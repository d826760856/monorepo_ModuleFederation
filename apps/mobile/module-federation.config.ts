import { createModuleFederationConfig } from '@module-federation/vite';

export default createModuleFederationConfig({
  name: 'mobile',
  manifest: true,
  remotes: {
    mobile_project1: 'mobile_project1@http://localhost:5174/mf-manifest.json',
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