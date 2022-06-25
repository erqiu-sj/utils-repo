/*
 * @Author: 邱狮杰
 * @Date: 2022-06-22 16:29:45
 * @LastEditTime: 2022-06-22 17:13:01
 * @Description: 
 * @FilePath: /repo/packages/taro/src/utils/getCurRouter.ts
 */

import { getCurrentInstance } from "@tarojs/taro"

/**
 * @description 获取当前页面基本信息
 * @returns 
 */
export function getCurRouter<P = object>() {

    const curPage = getCurrentInstance().router

    /**
     * @description 获取页面query参数 
     * @returns 
     */
    function getParameter(): P {
        return curPage?.params as P
    }

    return {
        getParameter
    }

}
