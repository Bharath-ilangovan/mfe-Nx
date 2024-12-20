import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'masterdata',
  exposes: {
    './Module': './src/remote-entry.ts',
    './Skills': './src/components/Skills/remote-entry.ts',
  },
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
