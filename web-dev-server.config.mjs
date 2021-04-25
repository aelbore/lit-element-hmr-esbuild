import { hmrPlugin, presets } from '@open-wc/dev-server-hmr'
import { esbuildPlugin } from '@web/dev-server-esbuild'

export default {
  nodeResolve: true,
  plugins: [
    esbuildPlugin({ ts: true }),
    hmrPlugin({
      include: ['src/**/*'],
      presets: [presets.litElement],
    })
  ],
};