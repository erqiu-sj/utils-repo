/*
 * @Author: 邱狮杰
 * @Date: 2022-11-12 23:54:48
 * @LastEditTime: 2022-11-20 15:37:16
 * @Description:
 * @FilePath: /repo/packages/rluBuild/src/core/core.ts
 */
import { defineConfig } from 'rollup';
import { PlugHelper } from './plugHelper';
export class RluBuild {
    constructor() {
        this.pluginList = [];
    }
    addPlugin(pl) {
        const plug = new PlugHelper();
        pl === null || pl === void 0 ? void 0 : pl(plug);
        this.pluginList = plug.getPluginList();
        return this;
    }
    build(opt) {
        return defineConfig(Object.assign(Object.assign({}, opt), { 
            // @ts-ignore
            plugins: [...((opt === null || opt === void 0 ? void 0 : opt.plugins) || []), ...this.pluginList] }));
    }
}
