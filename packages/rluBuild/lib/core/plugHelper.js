/*
 * @Author: 邱狮杰
 * @Date: 2022-11-18 17:38:40
 * @LastEditTime: 2022-11-26 15:40:22
 * @Description: 插件帮手
 * @FilePath: /repo/packages/rluBuild/src/core/plugHelper.ts
 */
import { ExternalPackages } from '../plugin/externalPackages';
import { RollupCommonjs } from '../plugin/rollupCommonjs';
import { RollupPluginNodeResolve } from '../plugin/rollupPlugin-node-resolve';
import { RollupPluginJson } from '../plugin/rollupPluginJson';
import { RollupPluginPolyfillNode } from '../plugin/rollupPluginPolyfillNode';
import { RollupPluginTerser } from '../plugin/rollupPluginTerser';
import { RollupTs } from '../plugin/rollupTs';
export class PlugHelper {
    constructor() {
        this.pluginList = [];
        this.externalPackages = new ExternalPackages();
        this.rollupTs = new RollupTs();
        this.rollupCommonjs = new RollupCommonjs();
        this.rollupPluginNodeResolve = new RollupPluginNodeResolve();
        this.rollupPluginTerser = new RollupPluginTerser();
        this.rollupPluginJson = new RollupPluginJson();
        this.rollupPluginPolyfillNode = new RollupPluginPolyfillNode();
    }
    /**
     * @description  node 垫片
     */
    addRollupPluginPolyfillNode(conf) {
        this.pluginList.push(this.rollupPluginPolyfillNode.readPlugInConfiguration(conf).getConfig());
        return this;
    }
    /**
     * @description  json 转为 es6 module
     */
    addRollupPluginJson(conf) {
        this.pluginList.push(this.rollupPluginJson.readPlugInConfiguration(conf).getConfig());
        return this;
    }
    /**
     * @description 汇总插件以缩小生成的es捆绑包
     * @returns
     */
    addRollupPluginTerser(conf) {
        this.pluginList.push(this.rollupPluginTerser.readPlugInConfiguration(conf).getConfig());
        return this;
    }
    /**
     * @description 在node_modules中查找并捆绑第三方依赖项
     */
    addRollupPluginNodeResolve(config) {
        this.pluginList.push(this.rollupPluginNodeResolve.readPlugInConfiguration(config).getConfig());
        return this;
    }
    /**
     * @description 将CommonJS模块转换为ES2015
     */
    addRollupCommonjs(config) {
        this.pluginList.push(this.rollupCommonjs.readPlugInConfiguration(config).getConfig());
        return this;
    }
    /**
     * @description Rollup和TypeScript之间的无缝集成
     */
    addTypescript(config) {
        this.pluginList.push(this.rollupTs.readPlugInConfiguration(config).getConfig());
        return this;
    }
    /**
     * @description 打包时排出外部资源
     */
    externalPackagesHelper(config) {
        this.pluginList.push(this.externalPackages.readPlugInConfiguration(config).getConfig());
        return this;
    }
    getPluginList() {
        return this.pluginList;
    }
}
