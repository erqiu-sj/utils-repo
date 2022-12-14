/*
 * @Author: 邱狮杰
 * @Date: 2022-12-10 22:58:37
 * @LastEditTime: 2022-12-11 09:18:26
 * @Description: 
 * @FilePath: /repo/packages/build/src/plugin/vueMacro.ts
 */

import { Plugin } from 'vite'
import vuePlugin from '@vitejs/plugin-vue'
import VueMacros from 'unplugin-vue-macros/vite'
import { Options } from 'unplugin-vue-macros'
import { MergeConfiguration } from '../types'

export class VueMacro implements MergeConfiguration<Options> {

    private plugin: Plugin[] | null = null

    private defaultConfig: Options = {
        plugins: {
            vue: vuePlugin()
        }
    }

    createBasicConfiguration(conf?: Options | undefined): this {
        this.plugin = VueMacros(Object.assign({}, conf, this.defaultConfig))
        return this
    }

    getPlugin(): Plugin[] | null {
        return this.plugin
    }

}