/**
 *
 *
 * @file 低质量占位图
 *
 *
 */
import { mergeFnWithPromiseFn } from '@mxnet/types/dts';
import { PlaceholderPicture } from '../types';
export declare class CreatePlaceholderPicture implements PlaceholderPicture {
    private el;
    constructor(el?: HTMLImageElement);
    getEl(): HTMLImageElement;
    setAttr(attr: Attr[]): this;
    setClassName(iter: string[]): this;
    setSrc(url: string): this;
    hidden(): this;
    removeLoaded(): this;
    removeHidden(): this;
    loaded(): this;
    onTransitioned(fn: mergeFnWithPromiseFn): this;
}
