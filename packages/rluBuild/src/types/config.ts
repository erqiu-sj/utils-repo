/*
 * @Author: 邱狮杰
 * @Date: 2022-11-13 00:05:26
 * @LastEditTime: 2022-11-18 17:52:48
 * @Description: 
 * @FilePath: /repo/packages/rluBuild/src/types/config.ts
 */
import { Plugin } from 'rollup';

export abstract class ConfigImpl<C = unknown> {
    abstract readPlugInConfiguration(config?: C): this
    abstract getConfig(): Plugin
}
