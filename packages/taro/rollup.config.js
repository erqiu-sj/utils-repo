"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: 邱狮杰
 * @Date: 2022-08-01 16:35:52
 * @LastEditTime: 2022-08-01 16:52:46
 * @Description:
 * @FilePath: /repo/packages/taro/rollup.config.ts
 */
const plugin_commonjs_1 = __importDefault(require("@rollup/plugin-commonjs"));
const plugin_node_resolve_1 = __importDefault(require("@rollup/plugin-node-resolve"));
const rollup_plugin_terser_1 = __importDefault(require("rollup-plugin-terser"));
const rollup_1 = require("rollup");
const rollup_plugin_typescript2_1 = __importDefault(require("rollup-plugin-typescript2"));
const externalPackages = ['react', '@tarojs/taro', '@tarojs/runtime', '@tarojs/react'];
exports.default = (0, rollup_1.defineConfig)({
    input: "./src/index.ts",
    output: [
        {
            file: "./lib/index.js",
            format: 'cjs',
            sourcemap: true
        },
        {
            file: "./dist/index.js",
            format: 'es',
            sourcemap: true
        },
    ],
    external: externalPackages,
    plugins: [
        (0, plugin_node_resolve_1.default)({}),
        (0, plugin_commonjs_1.default)({
            include: /\/node_modules\//
        }),
        (0, rollup_plugin_typescript2_1.default)({
            tsconfig: "./tsconfig.rollup.json"
        }),
        rollup_plugin_terser_1.default.terser({
            compress: {
                pure_getters: true,
                unsafe: true,
                unsafe_comps: true,
                drop_console: true,
                drop_debugger: true
            }
        })
    ]
});
