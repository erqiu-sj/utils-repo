import {mergeFnWithPromiseFn} from '@mxnet/types/dts'

export interface ImageTransitionAnimationOptions {
    // 默认图片
    def: string
    // 真实图片即将加载
    onLoad?: mergeFnWithPromiseFn<void, []>
    // 真实图片完成过渡后
    onTransitioned?: mergeFnWithPromiseFn<void, []>
}


export abstract class NextImage {
    // prevImage
    abstract prevImage: null | HTMLImageElement
    // nextImg
    abstract img: HTMLImageElement

    abstract transitionedCallback: mergeFnWithPromiseFn | null

    constructor(el: HTMLImageElement) {
    }

    abstract createImg(): this

    abstract setSrc(src: string): this

    abstract getImage(): HTMLImageElement

    // 加载 显示函数
    abstract loaded(): this

    // 过渡结束回调函数
    abstract onTransitioned(cb: mergeFnWithPromiseFn): this

}
