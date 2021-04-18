import { hmrPlugin, presets } from '@open-wc/dev-server-hmr'
import { esbuildPlugin } from '@web/dev-server-esbuild'

export default {
  nodeResolve: true,
  plugins: [
    hmrPlugin({
      include: ['src/**/*'],
      presets: [presets.litElement],
    }),
    esbuildPlugin({ ts: true })
  ],
};