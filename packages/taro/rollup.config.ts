/*
 * @Author: 邱狮杰
 * @Date: 2022-08-01 16:35:52
 * @LastEditTime: 2022-09-25 11:25:46
 * @Description:
 * @FilePath: /repo/packages/taro/rollup.config.ts
 */
import rollupCommonjs from '@rollup/plugin-commonjs'
import rollupNodeResolve from '@rollup/plugin-node-resolve'
import { defineConfig } from 'rollup'
import terser from 'rollup-plugin-terser'
import rollupTs from 'rollup-plugin-typescript2'

const externalPackages = ['react', '@tarojs/taro', '@tarojs/runtime', '@tarojs/react']

export default defineConfig({
  input: './src/index.ts',
  output: [
    {
      file: './lib/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: './dist/index.js',
      format: 'es',
      sourcemap: true,
    },
  ],
  external: externalPackages,
  plugins: [
    rollupNodeResolve({}),
    rollupCommonjs({
      include: /\/node_modules\//,
    }),
    rollupTs({
      tsconfig: './tsconfig.rollup.json',
    }),
    terser.terser({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        drop_console: false,
        drop_debugger: true,
      },
    }),
  ],
})
