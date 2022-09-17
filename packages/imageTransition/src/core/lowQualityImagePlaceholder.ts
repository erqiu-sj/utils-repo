/*
 * @Author: 邱狮杰
 * @Date: 2022-09-12 22:09:41
 * @LastEditTime: 2022-09-17 13:44:43
 * @Description:
 * @FilePath: /repo/packages/imageTransition/src/core/lowQualityImagePlaceholder.ts
 */

/**
 *
 *
 * @file 低质量占位图
 *
 *
 */
import { mergeFnWithPromiseFn } from '@mxnet/types/dts'
import { PlaceholderPicture } from '../types'
import { returnClass } from '../utils'

export class CreatePlaceholderPicture implements PlaceholderPicture {
  private el: HTMLImageElement

  constructor(el?: HTMLImageElement) {
    this.el = el || document.createElement('img')
  }

  getEl() {
    return this.el
  }

  setAttr(attr: Attr[]): this {
    attr.forEach(n => {
      if (/^data/.test(n.name)) this.el.setAttribute(n.name, n.value)
    })
    return this
  }

  setClassName(iter: string[]): this {
    iter.forEach(n => {
      if (!/^mxnet_/g.test(n)) {
        this.el.classList.add(n)
      }
    })
    return this
  }

  setSrc(url: string): this {
    this.el.src = url
    return this
  }

  hidden(): this {
    this.el.classList.add(returnClass('hidden'))
    return this
  }

  removeLoaded(): this {
    return this
  }
  removeHidden(): this {
    this.el.classList.remove(returnClass('hidden'))
    return this
  }

  loaded(): this {
    this.el.classList.add(returnClass('pre'))
    return this
  }

  onTransitioned(fn: mergeFnWithPromiseFn): this {
    const that = this
    this.el.addEventListener('transitionend', function ani() {
      fn()
      that.el.removeEventListener('transitionend', ani)
    })
    return this
  }
}
