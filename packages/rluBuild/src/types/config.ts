/*
 * @Author: 邱狮杰
 * @Date: 2022-11-13 00:05:26
 * @LastEditTime: 2022-11-13 00:28:20
 * @Description: 
 * @FilePath: /repo/packages/rluBuild/src/types/config.ts
 */
import { Plugin } from 'rollup';

export abstract class ConfigImpl {
    abstract getConfig(): Plugin
}
