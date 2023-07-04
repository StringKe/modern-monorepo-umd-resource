import { appTools, defineConfig } from '@modern-js/app-tools';

import { garfishPlugin } from '@modern-js/plugin-garfish';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  dev: {
    port: 3000,
  },
  runtime: {
    router: true,
    masterApp: {
      apps: [
        {
          name: 'micro-sub',
          entry: 'http://localhost:3001/sub',
          activeWhen: '/sub',
        },
      ],
    },
  },
  plugins: [appTools(), garfishPlugin()],
});
