/**
 *
 *
 * @file 低质量占位图
 *
 *
 */
import {returnClass, attribute} from '../utils'
import {NextImage} from '../types'
import {mergeFnWithPromiseFn} from '@mxnet/types/dts'


/**
 * @desc 创建过渡后元素
 */
export class CreateRealisticPostTransitionElements implements NextImage {
    prevImage: null | HTMLImageElement = null
    img = document.createElement("img")
    transitionedCallback: mergeFnWithPromiseFn | null = null

    constructor(el: HTMLImageElement) {
        this.prevImage = el
    }

    createImg(): this {
        const isReturn = this.prevImage?.classList.entries()
        while (true) {
            const next = isReturn?.next()
            if (next?.done) break
            next?.value?.[1] && this.img.classList.add(next?.value?.[1])
        }
        if (this.prevImage?.attributes) {
            Array.from(this.prevImage?.attributes).forEach(n => {
                if (/^data/.test(n.name)) this.img.setAttribute(n.name, n.value)
            })
        }
        this.img.classList.add(returnClass('next'))
        const that = this
        this.img.addEventListener("transitionend", function ani() {
            that.transitionedCallback?.()
            that.img.removeEventListener("transitionend", ani)
        })
        return this
    }
    
    setSrc(src: string) {
        this.img.src = src
        return this
    }

    getImage() {
        return this.img
    }

    loaded() {
        this.img.classList.add("loaded")
        return this
    }

    onTransitioned(cb?: mergeFnWithPromiseFn): this {
        this.transitionedCallback = cb || null
        return this
    }
}
