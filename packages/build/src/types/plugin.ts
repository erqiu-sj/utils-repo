/*
 * @Author: 邱狮杰
 * @Date: 2022-06-12 19:42:50
 * @LastEditTime: 2022-11-27 16:48:10
 * @Description:
 * @FilePath: /repo/packages/build/src/types/plugin.ts
 */

import { Plugin, UserConfigExport } from 'vite';

/**
 * @description 合并配置基础继承抽象类
 */
export abstract class MergeConfiguration<T = unknown> {
  abstract getPlugin(): Plugin | null | Plugin[]
  abstract createBasicConfiguration(conf?: T): this
}
