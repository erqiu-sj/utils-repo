import { mergeFnWithPromiseFn } from '@mxnet/types/dts';
export interface ImageTransitionAnimationOptions {
    def: string;
    onLoad?: mergeFnWithPromiseFn<void, []>;
    onTransitioned?: mergeFnWithPromiseFn<void, []>;
}
export declare abstract class NextImage {
    abstract prevImage: null | HTMLImageElement;
    abstract img: HTMLImageElement;
    abstract transitionedCallback: mergeFnWithPromiseFn | null;
    constructor(el: HTMLImageElement);
    abstract createImg(): this;
    abstract setSrc(src: string): this;
    abstract getImage(): HTMLImageElement;
    abstract loaded(): this;
    abstract onTransitioned(cb: mergeFnWithPromiseFn): this;
}
