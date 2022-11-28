/*
 * @Author: 邱狮杰
 * @Date: 2022-11-26 15:06:09
 * @LastEditTime: 2022-11-26 17:12:39
 * @Description:
 * @FilePath: /repo/packages/service/rollup.config.js
 */

import { RluBuild } from '@mxnet/rlubuild'
const h = new RluBuild()
  .addPlugin(pl => {
    pl.addTypescript({ tsconfig: './tsconfig.json' })
    pl.addRollupPluginPolyfillNode({
      baseDir: './src',
    })
    pl.externalPackagesHelper({})
    pl.addRollupCommonjs()
    pl.addRollupPluginNodeResolve()
    pl.addRollupPluginTerser({})
    pl.addRollupPluginJson({})
  })
  .build({
    input: './src/index.ts',
    output: [
      {
        file: './dist.umd/index.js',
        format: 'umd',
        name: 'mxNetService',
        sourcemap: true,
      },
    ],
  })

export default h
