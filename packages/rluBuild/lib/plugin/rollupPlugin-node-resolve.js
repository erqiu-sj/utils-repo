/*
 * @Author: 邱狮杰
 * @Date: 2022-11-20 14:21:54
 * @LastEditTime: 2022-11-20 15:35:05
 * @Description:
 * @FilePath: /repo/packages/rluBuild/src/plugin/rollupPlugin-node-resolve.ts
 */
import resolve from '@rollup/plugin-node-resolve';
import { PluginHelper } from '../utils/pluginHelper';
export class RollupPluginNodeResolve extends PluginHelper {
    constructor() {
        super(...arguments);
        this.conf = {};
    }
    readPlugInConfiguration(config) {
        this.conf = config || {};
        return this;
    }
    getConfig() {
        const that = this;
        return Object.assign({}, resolve(that.conf));
    }
}
