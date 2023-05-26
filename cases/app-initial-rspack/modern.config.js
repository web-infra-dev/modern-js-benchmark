import appTools from '@modern-js/app-tools';
import {
  measureBundleSizePlugin,
  measureCompileSpeedPlugin,
} from '@modern-js/benchmark-scripts/plugins';

export default {
  runtime: {
    router: true,
  },
  output: {
    disableTsChecker: true,
  },
  plugins: [appTools({
    bundler: 'experimental-rspack',
  }), measureBundleSizePlugin(), measureCompileSpeedPlugin()],
};
