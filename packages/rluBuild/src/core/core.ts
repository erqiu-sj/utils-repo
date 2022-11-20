/*
 * @Author: 邱狮杰
 * @Date: 2022-11-12 23:54:48
 * @LastEditTime: 2022-11-20 15:37:16
 * @Description: 
 * @FilePath: /repo/packages/rluBuild/src/core/core.ts
 */

import { mergeFnWithPromiseFn } from '@mxnet/types';
import { defineConfig, Plugin, RollupOptions } from 'rollup';
import { PlugHelper } from './plugHelper';

export type ReturnValue = ReturnType<typeof defineConfig>

export class RluBuild {
    private pluginList: Plugin[] = []

    addPlugin(pl?: mergeFnWithPromiseFn<void, [PlugHelper], false>) {
        const plug = new PlugHelper()
        pl?.(plug)
        this.pluginList = plug.getPluginList()
        return this
    }

    build(opt?: RollupOptions): ReturnValue {
        return defineConfig({
            ...opt,
            // @ts-ignore
            plugins: [...(opt?.plugins || []), ...this.pluginList],
        }) as ReturnValue
    }
}