import { NextImage } from '../types';
import { mergeFnWithPromiseFn } from '@mxnet/types/dts';
/**
 * @desc 创建过渡后元素
 */
export declare class CreateRealisticPostTransitionElements implements NextImage {
    prevImage: null | HTMLImageElement;
    img: HTMLImageElement;
    transitionedCallback: mergeFnWithPromiseFn | null;
    constructor(el: HTMLImageElement);
    createImg(): this;
    setSrc(src: string): this;
    getImage(): HTMLImageElement;
    loaded(): this;
    onTransitioned(cb?: mergeFnWithPromiseFn): this;
}
