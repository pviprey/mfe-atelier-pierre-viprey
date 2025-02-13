import { defineConfig } from '@rsbuild/core';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  plugins: [
    pluginModuleFederation({
      name: 'mfe',
      remotes: {
        mfe:
          'mfe@http://localhost:3000/mf-manifest.json',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  server: {
    port: 2000,
  },
});