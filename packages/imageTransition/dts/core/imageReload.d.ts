import { mergeFnWithPromiseFn } from '@mxnet/types/dts';
export declare class ImageReload {
    private img;
    private callback;
    constructor(src: string);
    onLoad(cb: mergeFnWithPromiseFn<void, [Event]>): void;
}
