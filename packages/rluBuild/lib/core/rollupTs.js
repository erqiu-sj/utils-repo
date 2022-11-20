/*
 * @Author: 邱狮杰
 * @Date: 2022-11-18 17:46:36
 * @LastEditTime: 2022-11-20 15:30:54
 * @Description: rollupTs
 * @FilePath: /repo/packages/rluBuild/src/core/rollupTs.ts
 */
import typescript from '@rollup/plugin-typescript';
import { PluginHelper } from '../utils/pluginHelper';
/**
 * @description Rollup和TypeScript之间的无缝集成
 */
export class RollupTs extends PluginHelper {
    constructor() {
        super(...arguments);
        this.config = {};
    }
    readPlugInConfiguration(config) {
        this.config = config || {};
        return this;
    }
    getConfig() {
        const that = this;
        return Object.assign({}, typescript(that.config));
    }
}
