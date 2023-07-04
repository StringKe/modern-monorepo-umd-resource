import { appTools, defineConfig } from '@modern-js/app-tools';
import { garfishPlugin } from '@modern-js/plugin-garfish';

function unpkg(name: string, version: string, path: string) {
  const isStyle = path.endsWith('.css');
  const url = `https://unpkg.com/${name}@${version}/${path}`;
  return {
    tag: isStyle ? 'link' : 'script',
    attrs: {
      ...(isStyle ? { rel: 'stylesheet', href: url } : {}),
      ...(!isStyle ? { src: url } : {}),
      crossorigin: 'anonymous',
    },
  };
}

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  dev: {
    port: 3001,
  },
  runtime: {
    router: true,
    state: true,
  },
  html: {
    inject: 'body',
    tags: [
      unpkg('@alifd/theme-lowcode-light', '0.2.1', 'variables.css'),
      unpkg('@alifd/theme-lowcode-light', '0.2.1', 'dist/next.var.min.css'),
      unpkg('@alilc/lowcode-engine', '1.1.7', 'dist/css/engine-core.css'),
      unpkg('@alilc/lowcode-engine-ext', '1.0.5', 'dist/css/engine-ext.css'),
      unpkg('react', '18.2.0', 'umd/react.production.min.js'),
      unpkg('react-dom', '18.2.0', 'umd/react-dom.production.min.js'),
      unpkg('prop-types', '15.8.1', 'prop-types.js'),
      unpkg('lodash', '4.17.21', 'lodash.min.js'),
      unpkg('moment', '2.24.0', 'min/moment.min.js'),
      unpkg('@alifd/next', '1.23.24', 'dist/next.min.js'),
      unpkg('@alilc/lowcode-engine', '1.1.7', 'dist/js/engine-core.js'),
      unpkg('@alilc/lowcode-engine-ext', '1.0.5', 'dist/js/engine-ext.js'),
    ],
  },
  deploy: {
    microFrontend: true,
  },
  plugins: [appTools(), garfishPlugin()],
});
