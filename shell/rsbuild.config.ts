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
      shared: {
        react: { singleton: true, requiredVersion: '^18.0.0' },
        'react-dom': { singleton: true, requiredVersion: '^18.0.0' },
      }
    }),
  ],
  server: {
    port: 2000,
  },
});