interface RouterInfo<TParams extends Partial<Record<string, string>> = Partial<Record<string, string>>> {
    /** 路由参数 */
    params: TParams;
    /** 页面路径 */
    path: string;
    onReady: string;
    onHide: string;
    onShow: string;
    shareTicket: string | undefined;
    scene: number | undefined;
}
/**
 * @description 获取当前页面基本信息
 * @returns
 */
export declare function getCurRouter<P = object>(): {
    getParameter: () => P;
    getCurRoute: () => RouterInfo<Partial<Record<string, string>>> | null;
};
export {};
