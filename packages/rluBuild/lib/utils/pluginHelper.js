/*
 * @Author: 邱狮杰
 * @Date: 2022-11-13 00:29:49
 * @LastEditTime: 2022-11-18 17:50:22
 * @Description:
 * @FilePath: /repo/packages/rluBuild/src/utils/pluginHelper.ts
 */
export class PluginHelper {
    /**
     * @description 插件名前缀
     */
    plugInNamePrefix(name) {
        return `rollup-plugin-mxnet-${name}`;
    }
}
