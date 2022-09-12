import { PluginOption } from 'vite';
export interface vitePluginImgReloadOption {
    resourcePathDir?: string;
    outputDir?: string;
}
declare const _default: (ops: vitePluginImgReloadOption) => PluginOption;
export default _default;
