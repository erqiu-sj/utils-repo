/*
 * @Author: 邱狮杰
 * @Date: 2022-09-12 22:09:41
 * @LastEditTime: 2022-09-17 14:17:22
 * @Description:
 * @FilePath: /repo/packages/imageTransition/src/index.ts
 */
import { mergeFnWithPromiseFn } from '@mxnet/types/dts'
import { Directive, DirectiveBinding, Plugin } from 'vue'
import { ImageReload } from './core/imageReload'
import { CreatePlaceholderPicture } from './core/lowQualityImagePlaceholder'
import { ProcessCurrentTransitionElement } from './core/processCurrentTransitionElement'
import ImgWrapper from './ImgWrapper.vue'
import { ImageTransitionAnimationOptions, PlaceholderPicture, processCurrentTransitionElement } from './types'

function transitionPrerequisites(el: HTMLImageElement, bind: DirectiveBinding<ImageTransitionAnimationOptions>, cb?: mergeFnWithPromiseFn) {
  if (el.tagName !== 'IMG') return
  if (!el.src) return
  if (!bind.value.def) return
  cb?.()
}

class DispatchRun {
  private dispatchProcessCurrent: processCurrentTransitionElement
  private dispatchProcessPreElement: PlaceholderPicture
  private mount: boolean
  private bind: DirectiveBinding<ImageTransitionAnimationOptions>

  constructor(cur: processCurrentTransitionElement, pl: PlaceholderPicture, bind: DirectiveBinding<ImageTransitionAnimationOptions>, mount?: boolean) {
    this.dispatchProcessCurrent = cur
    this.dispatchProcessPreElement = pl
    this.bind = bind
    this.mount = mount || true
  }

  init() {
    if (this.mount) {
      this.dispatchProcessCurrent.setSrc('')
      this.dispatchProcessCurrent.hidden()
      this.dispatchProcessPreElement.setAttr(this.dispatchProcessCurrent.getOriginalAttributes())
      this.dispatchProcessPreElement.setClassName(this.dispatchProcessCurrent.getOriginalClassName())
      this.dispatchProcessPreElement.loaded()
      this.dispatchProcessPreElement.setSrc(this.bind.value.def)
      this.dispatchProcessCurrent.onTransitioned(() => {
        this.dispatchProcessPreElement.hidden()
        this.dispatchProcessPreElement.getEl().remove()
      })
    }
    return this
  }

  inserDom() {
    if (this.mount) {
      this.dispatchProcessCurrent.getEl().parentNode?.insertBefore(this.dispatchProcessPreElement.getEl(), this.dispatchProcessCurrent.getEl().nextElementSibling)
    }
    return this
  }

  imageReload() {
    if (this.mount) {
      new ImageReload(this.dispatchProcessCurrent.getOriginalPicture()).onLoad(() => {
        this.dispatchProcessCurrent.setSrc(this.dispatchProcessCurrent.getOriginalPicture())
        this.dispatchProcessCurrent.loaded()
        this.dispatchProcessCurrent.getEl().style.zIndex = '10'
      })
    }
    return this
  }
}

const ImageTransitionAnimation: Directive = {
  mounted(el: HTMLImageElement, bind: DirectiveBinding<ImageTransitionAnimationOptions>) {
    transitionPrerequisites(el, bind, () => {
      new DispatchRun(new ProcessCurrentTransitionElement(el), new CreatePlaceholderPicture(), bind, true).init().inserDom().imageReload()
    })
  },
}

const ImageTransitionAnimationPlugin: Plugin = {
  install(app, ...options) {
    app.directive('imgTs', ImageTransitionAnimation)
    app.component(ImgWrapper.name, ImgWrapper)
  },
}

export { ImageTransitionAnimation, ImgWrapper, ImageTransitionAnimationPlugin }
