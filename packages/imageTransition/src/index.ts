import {Directive, DirectiveBinding} from 'vue'
import {ImageTransitionAnimationOptions, NextImage} from './types'
import {mergeFnWithPromiseFn} from "@mxnet/types/dts"
import {CreateRealisticPostTransitionElements} from './core/lowQualityImagePlaceholder'
import {attribute, returnClass} from './utils'


function transitionPrerequisites(el: HTMLImageElement, bind: DirectiveBinding<ImageTransitionAnimationOptions>, cb?: mergeFnWithPromiseFn) {
    if (el.tagName !== 'IMG') return
    if (!el.src) return
    if (!bind.value.def) return
    cb?.()
}


/**
 * @desc 处理当前元素 过渡效果
 */
class ProcessCurrentElementTransitionEffect {
    private el: HTMLElement | null

    constructor(el: HTMLElement) {
        this.el = el
    }

    vague(): this {
        this.el?.classList.add(returnClass("pre"))
        return this
    }

    changeResourcePath(src: string): this {
        this.el?.setAttribute("src", src)
        return this
    }

    loaded() {
        this.el?.classList.add("loaded")
        return this
    }

    hidden() {
        this.el?.classList.add(returnClass("hidden"))
        return this
    }
}


class ImageReload {
    private img = new Image()
    private callback: mergeFnWithPromiseFn<void, [Event]> | null = null

    constructor(src: string) {
        this.img.src = src
        this.img.onload = (event) => {
            this.callback?.(event)
        }
    }

    onLoad(cb: mergeFnWithPromiseFn<void, [Event]>) {
        this.callback = cb
    }
}


const ImageTransitionAnimation: Directive = {
    mounted(el: HTMLImageElement, bind: DirectiveBinding<ImageTransitionAnimationOptions>) {
        transitionPrerequisites(el, bind, () => {
            const realSrc = el.src
            const realClassName = el.classList.entries()
            const curImage = new ProcessCurrentElementTransitionEffect(el)
            const nextImage = new CreateRealisticPostTransitionElements(el).onTransitioned(() => {
                curImage.hidden()
            })
            curImage.vague().changeResourcePath(bind.value.def)
            el?.parentNode?.insertBefore(nextImage.createImg().getImage(), el.nextElementSibling)
            new ImageReload(realSrc).onLoad(() => {
                nextImage.setSrc(realSrc)
                curImage.loaded()
                nextImage.loaded()
            })
        })
    },
}

export {
    ImageTransitionAnimation
}
