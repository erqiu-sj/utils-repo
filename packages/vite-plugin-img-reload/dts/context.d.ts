import { vitePluginImgReloadOption } from './plugin';
export declare class ImgReloadContext {
    private ops;
    constructor(ops: vitePluginImgReloadOption);
    genOutputDir(): void;
    genResourcePathDir(): void;
    filenameConversionVariable(fileName: string): string;
    processingResourcePathDir(): void;
}
