"use strict";
/*
 * @Author: 邱狮杰
 * @Date: 2022-08-20 21:55:44
 * @LastEditTime: 2022-09-02 22:29:29
 * @Description: 时序控制器
 * @FilePath: /repo/packages/utils/src/businessLogic/controlTiming/controlTiming.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlTiming = void 0;
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
class ControlTiming {
    constructor() {
        this.collector = new Map();
        this.cbCollector = new Map();
    }
    addTimingItems(name, fn) {
        var _a;
        (_a = this === null || this === void 0 ? void 0 : this.collector) === null || _a === void 0 ? void 0 : _a.set(name, fn);
        return this;
    }
    // @ts-ignore
    trigger(k, ...params) {
        var _a, _b, _c, _d;
        if (!((_a = this.collector) === null || _a === void 0 ? void 0 : _a.has(k)))
            throw new Error(`no timing transmitter identified by ${k} exists`);
        const result = (_b = this.collector.get(k)) === null || _b === void 0 ? void 0 : _b(params);
        if (typeof result !== 'object') {
            (_c = this.cbCollector) === null || _c === void 0 ? void 0 : _c.get(k)(result);
            return;
        }
        if (!Reflect.get(result, 'then')) {
            (_d = this.cbCollector) === null || _d === void 0 ? void 0 : _d.get(k)(result);
            return;
        }
        result.then((res) => {
            var _a;
            (_a = this.cbCollector) === null || _a === void 0 ? void 0 : _a.get(k)(res);
        });
    }
    // @ts-ignore
    monitor(k, cb) {
        var _a;
        (_a = this.cbCollector) === null || _a === void 0 ? void 0 : _a.set(k, cb);
    }
    /**
     * @description delete instance
     */
    deleteInstance() {
        this.collector = null;
        this.cbCollector = null;
    }
}
exports.ControlTiming = ControlTiming;
