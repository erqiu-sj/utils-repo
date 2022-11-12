/*
 * @Author: 邱狮杰
 * @Date: 2022-07-23 10:50:11
 * @LastEditTime: 2022-10-25 15:22:35
 * @Description: 
 * @FilePath: /repo/packages/weChatPublicAccountHelper/rollup.config.ts
 */
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { defineConfig } from 'rollup';
import terser from 'rollup-plugin-terser';

export default defineConfig({
    input: "./src/index.ts",
    output:
        [
            {
                dir: 'dist.es',
                name: 'weChatPublicAccountHelper',
                format: 'umd',
            },
        ]
    ,
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
    ],
})

