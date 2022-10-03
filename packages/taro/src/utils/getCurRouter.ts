/*
 * @Author: 邱狮杰
 * @Date: 2022-06-22 16:29:45
 * @LastEditTime: 2022-10-03 11:01:27
 * @Description:
 * @FilePath: /repo/packages/taro/src/utils/getCurRouter.ts
 */

import { getTaroApi } from './importTaro'

interface RouterInfo<TParams extends Partial<Record<string, string>> = Partial<Record<string, string>>> {
  /** 路由参数 */
  params: TParams

  /** 页面路径 */
  path: string

  onReady: string
  onHide: string
  onShow: string

  shareTicket: string | undefined
  scene: number | undefined
}
/**
 * @description 获取当前页面基本信息
 * @returns
 */
export function getCurRouter<P = object>() {
  let curPage: null | RouterInfo<Partial<Record<string, string>>> = null

  getTaroApi(res => {
    curPage = res.getCurrentInstance().router
  })

  /**
   * @description 获取页面query参数
   * @returns
   */
  function getParameter(): P {
    return curPage?.params as P
  }

  function getCurRoute() {
    return curPage
  }

  return {
    getParameter,
    getCurRoute,
  }
}
