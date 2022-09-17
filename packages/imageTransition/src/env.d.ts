/*
 * @Author: 邱狮杰
 * @Date: 2022-09-17 13:58:40
 * @LastEditTime: 2022-09-17 13:58:40
 * @Description:
 * @FilePath: /repo/packages/imageTransition/src/env.d.ts
 */

/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
