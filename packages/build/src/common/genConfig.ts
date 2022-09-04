/*
 * @Author: 邱狮杰
 * @Date: 2022-09-04 15:24:26
 * @LastEditTime: 2022-09-04 15:53:14
 * @Description:
 * @FilePath: /repo/packages/build/src/common/genConfig.ts
 */

import { Plugin, PluginOption } from 'vite'

export function getGenPluginConfig(ops?: Plugin): PluginOption {
  return {
    ...ops,
    name: `vite-plugin-mxnet/${ops?.name}`,
  }
}
