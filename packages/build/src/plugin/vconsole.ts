/*
 * @Author: 邱狮杰
 * @Date: 2022-06-12 19:33:50
 * @LastEditTime: 2022-06-12 21:02:10
 * @Description: 
 * @FilePath: /repo/packages/build/src/common/vconsole.ts
 */

import { resolve } from 'path';
import { Plugin, UserConfig, UserConfigExport } from 'vite';
import { viteVConsole, viteVConsoleOptions } from "vite-plugin-vconsole";
import { MergeConfiguration } from "../types";


export class Vconsole implements MergeConfiguration {
    private config: Plugin | undefined = undefined
    private defaultConfig(): viteVConsoleOptions {
        return {
            entry: resolve("src/main.ts"),
            localEnabled: false,
            enabled: false,
            config: {
                maxLogNumber: 1000,
                theme: 'light'
            }
        }
    }

    changeSetting(conf?: Partial<viteVConsoleOptions>): this {
        this.config = viteVConsole({
            ...(conf || {}),
            ...this.defaultConfig(),
        })
        return this
    }

    getConfig(config: UserConfigExport): UserConfigExport {
        const c = config as UserConfig
        c.plugins = [...(c.plugins || []), this.config]
        // lodash.defaultsDeep  在此处无法达到预期效果
        return c
    }

}
