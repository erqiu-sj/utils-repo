/*
 * @Author: 邱狮杰
 * @Date: 2022-07-23 10:50:11
 * @LastEditTime: 2022-11-27 17:17:50
 * @Description: 
 * @FilePath: /repo/packages/weChatPublicAccountHelper/rollup.config.ts
 */
import { RluBuild } from '@mxnet/rlubuild';

const h = new RluBuild().addPlugin(pl => {
    pl.addTypescript({
        tsconfig: './tsconfig.json', module: 'es2015'
    })
    pl.addRollupPluginTerser({
        compress: {
            pure_getters: true,
            unsafe: true,
            unsafe_comps: true,
            drop_console: true,
            drop_debugger: true
        }
    })
}).build({
    input: "./src/index.ts",
    output:
        [
            {
                dir: 'dist.es',
                name: 'weChatPublicAccountHelper',
                format: 'umd',
            },
            {
                dir: "./dist",
                format: "esm",
                sourcemap: true
            },
            {
                dir: "./lib",
                format: "cjs",
                sourcemap: true
            }
        ]
    ,
})

export default h
