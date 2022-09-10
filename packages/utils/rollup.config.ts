/*
 * @Author: 邱狮杰
 * @Date: 2022-05-18 22:06:22
 * @LastEditTime: 2022-09-02 23:05:04
 * @Description:
 * @FilePath: /repo/packages/utils/rollup.config.ts
 */

import resolve from '@rollup/plugin-node-resolve'
import {defineConfig} from 'rollup'
import terser from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2'

export default defineConfig({
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
    plugins: [
        resolve(),
        typescript({tsconfig: './tsconfig.json',}),
        terser.terser({
            compress: {
                pure_getters: true,
                unsafe: true,
                unsafe_comps: true,
                drop_console: true,
                drop_debugger: true,
            },
        }),
    ],
})
