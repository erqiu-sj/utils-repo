import { mergeFnWithPromiseFn } from '@mxnet/types/dts';
import { processCurrentTransitionElement } from '../types';
/**
 * @description 处理当前元素
 */
export declare class ProcessCurrentTransitionElement implements processCurrentTransitionElement {
    el: HTMLImageElement;
    originalPictureSrc: string;
    originalClassName: string[];
    originalAttributes: Attr[];
    constructor(el: HTMLImageElement);
    setSrc(url: string): this;
    getOriginalPicture(): string;
    getOriginalClassName(): string[];
    loaded(): this;
    removeLoaded(): this;
    removeHidden(): this;
    hidden(): this;
    getOriginalAttributes(): Attr[];
    onTransitioned(fn: mergeFnWithPromiseFn): this;
    getEl(): HTMLImageElement;
}
