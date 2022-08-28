import { mergeFnWithPromiseFn } from "@mxnet/types/dts";
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
export declare class ControlTiming<T extends object> {
    private collector;
    private cbCollector;
    addTimingItems<N extends string, F extends mergeFnWithPromiseFn<any, any>>(name: N, fn: F): ControlTiming<T & Record<N, F>>;
    trigger<K extends keyof T>(k: K, ...params: Parameters<T[K]>): void;
    monitor<K extends keyof T, R extends ReturnType<T[K]>>(k: K, cb?: (res: Awaited<R>) => void): void;
}
