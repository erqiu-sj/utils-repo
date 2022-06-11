/*
 * @Author: 邱狮杰
 * @Date: 2022-05-18 22:06:22
 * @LastEditTime: 2022-06-11 22:12:15
 * @Description: 
 * @FilePath: /repo/packages/utils/rollup.config.ts
 */

import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { defineConfig } from 'rollup';
import terser from 'rollup-plugin-terser';

export default defineConfig({
    input: "./src/index.ts",
    output: {
        dir: 'dist.es',
        name: 'mxUtils',
        format: 'umd',
    },
    plugins: [
        resolve(),
        typescript({ tsconfig: './tsconfig.json', module: 'es2015' }),
        terser.terser({
            compress: {
                pure_getters: true,
                unsafe: true,
                unsafe_comps: true,
                drop_console: true,
                drop_debugger: true
            }
        })
    ]
})

