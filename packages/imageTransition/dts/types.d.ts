import { mergeFnWithPromiseFn } from '@mxnet/types/dts';
export interface ImageTransitionAnimationOptions {
    def: string;
}
declare abstract class GeneralMethodOfTransition {
    abstract loaded(): this;
    abstract hidden(): this;
    abstract removeHidden(): this;
    abstract removeLoaded(): this;
    abstract onTransitioned(fn: mergeFnWithPromiseFn): this;
    abstract getEl(): HTMLElement;
}
export declare abstract class processCurrentTransitionElement extends GeneralMethodOfTransition {
    abstract el: HTMLImageElement;
    abstract setSrc(url: string): this;
    abstract getOriginalPicture(): string;
    abstract getOriginalClassName(): string[];
    abstract getOriginalAttributes(): Attr[];
}
export declare abstract class PlaceholderPicture extends GeneralMethodOfTransition {
    abstract getEl(): HTMLImageElement;
    abstract setSrc(url: string): this;
    abstract setAttr(attr: Attr[]): this;
    abstract setClassName(iter: string[]): this;
}
export {};
