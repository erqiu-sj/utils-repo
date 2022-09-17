/*
 * @Author: 邱狮杰
 * @Date: 2022-09-17 10:59:45
 * @LastEditTime: 2022-09-17 13:27:58
 * @Description:
 * @FilePath: /repo/packages/imageTransition/src/core/processCurrentTransitionElement.ts
 */

import { fn, mergeFnWithPromiseFn, promiseFn } from '@mxnet/types/dts'
import { processCurrentTransitionElement } from '../types'
import { returnClass } from '../utils'

/**
 * @description 处理当前元素
 */

export class ProcessCurrentTransitionElement implements processCurrentTransitionElement {
  el: HTMLImageElement
  originalPictureSrc: string
  originalClassName: string[]
  originalAttributes: Attr[]

  constructor(el: HTMLImageElement) {
    this.el = el
    this.originalPictureSrc = this.el.src
    this.originalClassName = Array.from(this.el.classList)
    this.originalAttributes = Array.from(this.el.attributes)
  }

  setSrc(url: string): this {
    this.el.src = url
    return this
  }

  getOriginalPicture(): string {
    return this.originalPictureSrc
  }

  getOriginalClassName(): string[] {
    return this.originalClassName
  }

  loaded(): this {
    this.el?.classList.add(returnClass('loaded'))
    return this
  }

  removeLoaded(): this {
    this.el?.classList.remove(returnClass('loaded'))
    return this
  }

  removeHidden(): this {
    this.el?.classList.remove(returnClass('next'))
    return this
  }

  hidden(): this {
    this.el?.classList.add(returnClass('next'))
    return this
  }

  getOriginalAttributes() {
    return this.originalAttributes
  }

  onTransitioned(fn: mergeFnWithPromiseFn): this {
    const that = this
    this.el.addEventListener('transitionend', function ani() {
      fn()
      that.el.removeEventListener('transitionend', ani)
    })
    return this
  }
  getEl(): HTMLImageElement {
    return this.el
  }
}
