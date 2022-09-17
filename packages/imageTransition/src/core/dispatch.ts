/*
 * @Author: 邱狮杰
 * @Date: 2022-09-17 11:18:29
 * @LastEditTime: 2022-09-17 13:18:26
 * @Description:
 * @FilePath: /repo/packages/imageTransition/src/core/dispatch.ts
 */
import { mergeFnWithPromiseFn } from '@mxnet/types/dts'
import { PlaceholderPicture, processCurrentTransitionElement } from '../types'

export function dispatchProcessCurrentTransitionElement(core: processCurrentTransitionElement, setup?: mergeFnWithPromiseFn<void, [processCurrentTransitionElement]>) {
  setup?.(core)

  return core
}

export function dispatchPlaceholderPicture(core: PlaceholderPicture, setup?: mergeFnWithPromiseFn<void, [PlaceholderPicture]>) {
  setup?.(core)
  return core
}
