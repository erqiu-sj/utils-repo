"use strict";
/*
 * @Author: 邱狮杰
 * @Date: 2022-06-22 16:29:45
 * @LastEditTime: 2022-06-22 17:13:01
 * @Description:
 * @FilePath: /repo/packages/taro/src/utils/getCurRouter.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurRouter = void 0;
const taro_1 = require("@tarojs/taro");
/**
 * @description 获取当前页面基本信息
 * @returns
 */
function getCurRouter() {
    const curPage = (0, taro_1.getCurrentInstance)().router;
    /**
     * @description 获取页面query参数
     * @returns
     */
    function getParameter() {
        return curPage === null || curPage === void 0 ? void 0 : curPage.params;
    }
    return {
        getParameter
    };
}
exports.getCurRouter = getCurRouter;