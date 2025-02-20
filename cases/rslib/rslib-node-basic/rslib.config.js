import { defineConfig } from '@rslib/core';
import { measureRslibBuildPlugin } from '@modern-js/benchmark-scripts/plugins/rsbuild';

const shared = {
  dts: {
    bundle: false,
  },
  plugins: [measureRslibBuildPlugin()],
};

export default defineConfig({
  lib: [
    {
      ...shared,
      format: 'esm',
      output: {
        distPath: {
          root: './dist/esm',
        },
      },
    },
    {
      ...shared,
      format: 'cjs',
      output: {
        distPath: {
          root: './dist/cjs',
        },
      },
    },
  ],
  source: {
    entry: {
      index: './src/index.ts',
    },
  },
  output: {
    target: 'node',
  },
});
