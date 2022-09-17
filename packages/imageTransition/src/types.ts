/*
 * @Author: 邱狮杰
 * @Date: 2022-09-12 22:09:41
 * @LastEditTime: 2022-09-17 14:23:17
 * @Description:
 * @FilePath: /repo/packages/imageTransition/src/types.ts
 */

import { mergeFnWithPromiseFn } from '@mxnet/types/dts'

export interface ImageTransitionAnimationOptions {
  // 默认图片
  def: string
  // // 真实图片即将加载
  // onLoad?: mergeFnWithPromiseFn<void, []>
  // // 真实图片完成过渡后
  // onTransitioned?: mergeFnWithPromiseFn<void, []>
}

abstract class GeneralMethodOfTransition {
  // add 出现动画
  abstract loaded(): this
  // add 消失动画
  abstract hidden(): this
  // 删除 消失动画
  abstract removeHidden(): this
  // 删除 出现动画
  abstract removeLoaded(): this
  // 过渡结束动画
  abstract onTransitioned(fn: mergeFnWithPromiseFn): this
  abstract getEl(): HTMLElement
}

export abstract class processCurrentTransitionElement extends GeneralMethodOfTransition {
  abstract el: HTMLImageElement
  // 设置元素src
  abstract setSrc(url: string): this
  // 获取原始图片
  abstract getOriginalPicture(): string
  // 获取原始的class
  abstract getOriginalClassName(): string[]
  // 获取所有原始属性
  abstract getOriginalAttributes(): Attr[]
}

export abstract class PlaceholderPicture extends GeneralMethodOfTransition {
  // 获取 image 元素
  abstract getEl(): HTMLImageElement
  // 设置 图片 src
  abstract setSrc(url: string): this
  // 设置属性
  abstract setAttr(attr: Attr[]): this

  abstract setClassName(iter: string[]): this
}
