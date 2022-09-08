import { PluginOption } from 'vite';
export interface vitePluginImgReloadOption {
    resourcePathDir: string;
    outputDir: string;
    cssOutputPath?: string;
}
declare const _default: (ops: vitePluginImgReloadOption) => PluginOption;
export default _default;
