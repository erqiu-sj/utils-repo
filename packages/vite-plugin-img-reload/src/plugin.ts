/*
 * @Author: 邱狮杰
 * @Date: 2022-09-06 23:46:43
 * @LastEditTime: 2022-09-07 17:27:39
 * @Description:
 * @FilePath: /repo/packages/vite-plugin-img-reload/src/plugin.ts
 */

import {resolve} from 'path'
import {PluginOption} from 'vite'
import {ImgReloadContext} from './context'
import {LoadFile} from './loadFile'

const vitePluginImgReload = {
    name: 'vite-plugin-img-reload',
} as const

export interface vitePluginImgReloadOption {
    // 资源路径
    resourcePathDir?: string
    // 输出路径
    outputDir?: string
}

export default (ops: vitePluginImgReloadOption) => {
    return {
        name: vitePluginImgReload.name,
        enforce: "pre",
        configResolved(config) {
            const ctx = new ImgReloadContext({...ops, outputDir: ops?.outputDir || config.root})
            // 初始化css文件
            new LoadFile().loadCssFile(resolve(config.root, 'imgReload.css'), resolve(__dirname, './imgReload.css'))
            ctx.genOutputDir()
            ctx.genResourcePathDir()
        },
    } as PluginOption
}
