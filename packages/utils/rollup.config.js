/*
 * @Author: 邱狮杰
 * @Date: 2022-05-18 22:06:22
 * @LastEditTime: 2022-11-26 17:03:09
 * @Description:
 * @FilePath: /repo/packages/utils/rollup.config.js
 */

import { RluBuild } from '@mxnet/rlubuild'

export default new RluBuild()
  .addPlugin(pl => {
    pl.addRollupPluginNodeResolve()
      .externalPackagesHelper()
      .addTypescript({ tsconfig: './tsconfig.json' })
      .addRollupPluginTerser({
        compress: {
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true,
          drop_console: true,
          drop_debugger: true,
        },
      })
  })
  .build({
    input: './src/index.ts',
    output: [
      {
        dir: 'dist.umd',
        name: 'mxUtils',
        format: 'umd',
      },
      {
        dir: 'dist',
        format: 'es',
      },
      {
        dir: 'lib',
        format: 'cjs',
      },
    ],
  })
