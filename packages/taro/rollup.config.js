/*
 * @Author: 邱狮杰
 * @Date: 2022-08-01 16:35:52
 * @LastEditTime: 2022-11-29 00:19:56
 * @Description:
 * @FilePath: /repo/packages/taro/rollup.config.js
 */
// import { RluBuild } from '@mxnet/rlubuild';

// const h = new RluBuild().addPlugin(pl => {
//   pl.externalPackagesHelper({})
//   pl.addRollupPluginNodeResolve()
//   pl.addTypescript({
//     tsconfig: "./tsconfig.rollup.json"
//   })
//   pl.addRollupCommonjs({
//     include: /\/node_modules\//
//   })
//   pl.addRollupPluginTerser({
//     compress: {
//       pure_getters: true,
//       unsafe: true,
//       unsafe_comps: true,
//       drop_console: false,
//       drop_debugger: true,
//     }
//   })
// }).build(
//   {
//     input: './src/index.ts',
//     output: [
//       {
//         file: './lib/index.js',
//         format: 'cjs',
//         sourcemap: true,
//       },
//       {
//         file: './dist/index.js',
//         format: 'es',
//         sourcemap: true,
//       },
//     ],
//   }
// )

// export default h

// @ts-ignore
import rollupCommonjs from '@rollup/plugin-commonjs'
import rollupNodeResolve from '@rollup/plugin-node-resolve'
import { defineConfig } from 'rollup'
import { terser } from 'rollup-plugin-terser'
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
    terser({
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
