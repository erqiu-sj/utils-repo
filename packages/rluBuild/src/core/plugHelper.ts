/*
 * @Author: 邱狮杰
 * @Date: 2022-11-18 17:38:40
 * @LastEditTime: 2022-11-20 15:31:55
 * @Description: 插件帮手
 * @FilePath: /repo/packages/rluBuild/src/core/plugHelper.ts
 */

import { RollupCommonJSOptions } from "@rollup/plugin-commonjs";
import { RollupNodeResolveOptions } from '@rollup/plugin-node-resolve';
import { Plugin } from "rollup";
import { Options } from 'rollup-plugin-terser';
import { RollupCommonjs } from '../plugin/rollupCommonjs';
import { RollupPluginNodeResolve } from '../plugin/rollupPlugin-node-resolve';
import { RollupPluginTerser } from '../plugin/rollupPluginTerser';
import { ExternalPackages } from '../plugin/externalPackages';
import { RollupTs } from '../plugin/rollupTs';

export class PlugHelper {
    private pluginList: Plugin[] = []
    private externalPackages: ExternalPackages = new ExternalPackages()
    private rollupTs: RollupTs = new RollupTs()
    private rollupCommonjs: RollupCommonjs = new RollupCommonjs()
    private rollupPluginNodeResolve: RollupPluginNodeResolve = new RollupPluginNodeResolve()
    private rollupPluginTerser: RollupPluginTerser = new RollupPluginTerser()

    /**
     * @description 汇总插件以缩小生成的es捆绑包
     * @returns 
     */
    addRollupPluginTerser(conf?: Options) {
        this.pluginList.push(this.rollupPluginTerser.readPlugInConfiguration(conf).getConfig())
        return this
    }

    /**
     * @description 在node_modules中查找并捆绑第三方依赖项
     */
    addRollupPluginNodeResolve(config?: RollupNodeResolveOptions) {
        this.pluginList.push(
            this.rollupPluginNodeResolve.readPlugInConfiguration(config).getConfig()
        )
        return this
    }

    /**
     * @description 将CommonJS模块转换为ES2015
     */
    addRollupCommonjs(config?: RollupCommonJSOptions) {
        this.pluginList.push(
            this.rollupCommonjs.readPlugInConfiguration(config).getConfig()
        )
        return this
    }

    /**
     * @description Rollup和TypeScript之间的无缝集成
     */
    addTypescript(config?: Parameters<RollupTs['readPlugInConfiguration']>[0]) {
        this.pluginList.push(
            this.rollupTs.readPlugInConfiguration(config).getConfig()
        )
        return this
    }

    /**
     * @description 打包时排出外部资源
     */
    externalPackagesHelper(config?: Parameters<ExternalPackages['readPlugInConfiguration']>[0]) {
        this.pluginList.push(
            this.externalPackages.readPlugInConfiguration(config).getConfig()
        )
        return this
    }

    getPluginList() {
        return this.pluginList
    }
}