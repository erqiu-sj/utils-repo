/*
 * @Author: 邱狮杰
 * @Date: 2022-06-12 21:13:02
 * @LastEditTime: 2022-07-01 12:14:52
 * @Description:  自动导入api
 * @FilePath: /repo/packages/build/src/plugin/autoImport.ts
 */

import defaultsDeep from 'lodash.defaultsdeep';
// @ts-ignore
import autoImport from 'unplugin-auto-import';
import { Plugin, UserConfig, UserConfigExport } from 'vite';
import { MergeConfiguration, technologyStackTypes } from '../types';

export type autoImportOptions = NonNullable<Parameters<typeof autoImport.vite>[0]>

const include = [
    /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
    /\.vue$/, /\.vue\?vue/, // .vue
    /\.md$/, // .md
]

export class AutoImportApi extends MergeConfiguration {

    private userConfig?: Plugin

    private defaultImports: string[] = []

    // 根据技术栈配置预设
    configurePresets(technologyStackTypes?: technologyStackTypes) {
        this.defaultImports = technologyStackTypes === 'react' ? this.reactImports() : this.vueImports()
        return this
    }

    private vueImports() {
        return ['vue', 'vue-router', 'pinia']
    }

    private reactImports() {
        return ['react']
    }

    // 实例插件
    instancePlugin(conf?: autoImportOptions) {
        const newLocal: autoImportOptions = conf || {};
        const userConfig: Plugin = autoImport.vite({
            include,
            dts: true,
            // vue模版自动导入
            vueTemplate: false,
            // @ts-ignore
            imports: [
                ...this.defaultImports,
            ],
            ...newLocal as object
        })

        this.userConfig = userConfig
        return this
    }

    getConfig(userConfig: UserConfigExport): UserConfigExport {
        const c = userConfig as UserConfig
        c.plugins = [...(c.plugins || []), this.userConfig]
        return c
    }
}

