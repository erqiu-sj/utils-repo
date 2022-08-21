/*
 * @Author: 邱狮杰
 * @Date: 2022-08-20 21:55:44
 * @LastEditTime: 2022-08-21 13:06:07
 * @Description: 时序控制器
 * @FilePath: /repo/packages/utils/src/businessLogic/controlTiming/controlTiming.ts
 */

import { controlTimingTask } from '../../types/controlTiming'

/**
 * 创建一个时序控制器
 * const httpList = new ControlTiming()
 * 添加一个时序项名(name), 添加请求函数
 * httpList.addTimingItems(name,httpTask)
 * httpList.addTimingItems(name,httpTask)
 *
 *
 * 触发器
 * 触发的时序标识,以及触发的参数
 * httpList.trigger('name',{})
 *
 * 监听器
 * 返回响应时触发回调
 * httpList.monitor('name',()=>{})
 *
 */

export class ControlTiming<T extends object> {
  private collector = new Map<string | number | symbol, controlTimingTask>()

  private cbCollector = new Map<string | number | symbol, ReturnType<controlTimingTask>>()

  addTimingItems<N extends string, F extends controlTimingTask>(name: N, fn: F): ControlTiming<T & Record<N, F>> {
    this.collector.set(name, fn)
    return this
  }

  // @ts-ignore
  trigger<K extends keyof T>(k: K, ...params: Parameters<T[K]>) {
    if (!this.collector.has(k)) throw new Error(`no timing transmitter identified by ${k as string} exists`)
    const result = this.collector.get(k)?.(params)
    if (typeof result !== 'object') {
      this.cbCollector.get(k)(result)
      return
    }
    if (!Reflect.get(result, 'then')) {
      this.cbCollector.get(k)(result)
      return
    }
    result.then((res: unknown) => {
      this.cbCollector.get(k)(res)
    })
  }

  // @ts-ignore
  monitor<K extends keyof T, R extends ReturnType<T[K]>>(k: K, cb?: (res: Awaited<R>) => void) {
    this.cbCollector.set(k, cb)
  }
}
