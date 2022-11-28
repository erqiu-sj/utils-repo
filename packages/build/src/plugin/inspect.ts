/*
 * @Author: 邱狮杰
 * @Date: 2022-11-27 16:45:20
 * @LastEditTime: 2022-11-27 16:50:02
 * @Description: 
 * @FilePath: /repo/packages/build/src/plugin/inspect.ts
 */

import { Plugin } from 'vite'
import inspect, { Options } from 'vite-plugin-inspect'
import { MergeConfiguration } from '../types'

export type { Options }

export class Inspect implements MergeConfiguration<Options> {
    private plugin: null | Plugin = null

    createBasicConfiguration(conf?: Options): this {
        this.plugin = inspect(conf)
        return this
    }

    getPlugin(): Plugin | null {
        return this.plugin
    }

}