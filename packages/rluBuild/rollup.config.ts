/*
 * @Author: 邱狮杰
 * @Date: 2022-11-20 14:08:58
 * @LastEditTime: 2022-11-20 14:19:59
 * @Description: 
 * @FilePath: /repo/packages/rluBuild/rollup.config.ts
 */

import { RluBuild } from '@mxnet/rlubuild'

export default new RluBuild().addPlugin(pl => {

    pl.addRollupCommonjs()

    pl.externalPackagesHelper({})

    pl.addTypescript(
        { tsconfig: "./tsconfig.rollup.json" }
    )

}).build({
    input: "./src/index.ts",
    output: {
        file: "./dist/index.js",
        format: 'esm',
    }
})