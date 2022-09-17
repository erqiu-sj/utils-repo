/*
 * @Author: 邱狮杰
 * @Date: 2022-09-17 13:33:39
 * @LastEditTime: 2022-09-17 13:33:40
 * @Description:
 * @FilePath: /repo/packages/imageTransition/src/core/imageReload.ts
 */
import { mergeFnWithPromiseFn } from '@mxnet/types/dts'

export class ImageReload {
  private img = new Image()
  private callback: mergeFnWithPromiseFn<void, [Event]> | null = null

  constructor(src: string) {
    this.img.src = src
    this.img.onload = event => {
      this.callback?.(event)
    }
  }

  onLoad(cb: mergeFnWithPromiseFn<void, [Event]>) {
    this.callback = cb
  }
}
