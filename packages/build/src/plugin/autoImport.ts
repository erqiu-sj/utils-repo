/*
 * @Author: 邱狮杰
 * @Date: 2022-06-12 21:13:02
 * @LastEditTime: 2022-06-12 21:33:18
 * @Description:  自动导入api
 * @FilePath: /repo/packages/build/src/plugin/autoImport.ts
 */

import autoImport from 'unplugin-auto-import/index';
import { UserConfigExport } from 'vite';

const include = [
    /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
    /\.vue$/, /\.vue\?vue/, // .vue
    /\.md$/, // .md
]

export class AutoImportApi {
    // 根据技术栈配置预设
    configurePresets() { }

    private vueImports() {
        return ['vue']
    }

    private reactImports() {
        return ['react']
    }

    // 实例插件
    instancePlugin() {
        const userConfig: UserConfigExport = {
            plugins: [
                autoImport.vite({
                    include,
                    dts: true,
                    // vue模版自动导入
                    vueTemplate: false,
                    imports: [
                    ]
                })
            ]
        }

        return userConfig

    }
}

