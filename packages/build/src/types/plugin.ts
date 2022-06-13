/*
 * @Author: 邱狮杰
 * @Date: 2022-06-12 19:42:50
 * @LastEditTime: 2022-06-12 20:30:29
 * @Description: 
 * @FilePath: /repo/packages/build/src/types/plugin.ts
 */

import { UserConfigExport } from "vite";

/**
 * @description 合并配置基础继承抽象类
 */
export abstract class MergeConfiguration {
    abstract getConfig(userConfig: UserConfigExport): UserConfigExport
}

