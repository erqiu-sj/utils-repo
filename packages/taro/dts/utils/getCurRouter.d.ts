/**
 * @description 获取当前页面基本信息
 * @returns
 */
export declare function getCurRouter<P = object>(): {
    getParameter: () => P;
    getCurRoute: () => import("@tarojs/taro").RouterInfo<Partial<Record<string, string>>> | null;
};
