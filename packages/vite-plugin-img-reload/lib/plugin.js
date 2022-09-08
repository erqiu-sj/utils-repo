/*
 * @Author: 邱狮杰
 * @Date: 2022-09-06 23:46:43
 * @LastEditTime: 2022-09-07 09:14:36
 * @Description:
 * @FilePath: /repo/packages/vite-plugin-img-reload/src/plugin.ts
 */
import { ImgReloadContext } from './utils';
const vitePluginImgReload = {
    name: 'vite-plugin-img-reload',
};
// - 图片 更新 逻辑通过指令完成 指令需要一个 超模糊 base64 路径
// - vite - plugin 取到 src 并且转为 模糊的 base64 后 放入 指令参数中, 又指令处理各种 image 操作
export default (ops) => {
    const ctx = new ImgReloadContext(ops);
    return {
        name: vitePluginImgReload.name,
        enforce: 'pre',
        configResolved() {
            ctx.genOutputDir();
            ctx.genResourcePathDir();
        },
    };
};
