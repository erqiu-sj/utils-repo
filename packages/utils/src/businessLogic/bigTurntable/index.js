"use strict";
/*
 * @Author: 邱狮杰
 * @Date: 2022-07-03 10:55:48
 * @LastEditTime: 2022-07-03 12:42:27
 * @Description: 大转盘
 * @FilePath: /repo/packages/utils/src/businessLogic/bigTurntable/index.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BigTurntable = void 0;
class BigTurntable {
    constructor() {
        // 起始角度
        this.startRotate = 0;
        // 上次旋转的角度
        this.prevRotate = 0;
        // 是否正在旋转
        this.isPedding = false;
        // 转盘周期指针
        this.timerPointer = null;
        this.prizeIndexAndAngle = {};
        this.randomAngleWhenLotteryisNotDrawn = [];
        // 未中奖时的奖品iid
        this.prizeIdWhenNotWinning = [];
        // 转盘旋转周期
        this.turntableRotationCycleTiming = null;
    }
    /**
     *  @description 设置奖品索引和角度
     */
    setPrizeIndexAndAngle(obj) {
        this.prizeIndexAndAngle = obj;
        return this;
    }
    /**
     * @description 设置转盘周期,指旋转到停止需要多久时间
     */
    setTurntableCycle(config) {
        this.turntableRotationCycleTiming = (cb) => {
            this.timerPointer = setTimeout(() => {
                this.isPedding = false;
                cb === null || cb === void 0 ? void 0 : cb();
            }, config.time);
        };
        return this;
    }
    /**
     * @description 设置未中奖时随机旋转角度
     */
    setRandomAngleWhenLotteryisNotDrawn(randomAngleWhenLotteryisNotDrawn) {
        this.randomAngleWhenLotteryisNotDrawn = randomAngleWhenLotteryisNotDrawn;
        return this;
    }
    /**
     * @description 设置未中奖时的奖品id
     */
    setPrizeIdWhenNotWinning(prizeIdWhenNotWinning) {
        this.prizeIdWhenNotWinning = prizeIdWhenNotWinning;
        return this;
    }
    /**
     * @description 随机取值
     * @param { T[] } list
     * @returns { T }
     */
    round(list) {
        return list[Math.ceil(Math.round(Math.random() * list.length))];
    }
    /**
     * @description 销毁转盘周期
     */
    destroySpinCycle() {
        if (this.timerPointer)
            clearTimeout(this.timerPointer);
        return this;
    }
    startTheCarousel(el, ops) {
        var _a, _b, _c;
        if (!el)
            return;
        if (this.isPedding) {
            (_a = ops.onCallingBackDraws) === null || _a === void 0 ? void 0 : _a.call(ops);
            return;
        }
        else {
            (_b = ops.onPreliminaryDraw) === null || _b === void 0 ? void 0 : _b.call(ops);
        }
        const s = this.round(this.randomAngleWhenLotteryisNotDrawn);
        // 获取中奖id
        let curPoint = Reflect.get(this.prizeIndexAndAngle, ops.winningId) || this.round(this.prizeIdWhenNotWinning) || this.prizeIdWhenNotWinning[0];
        if (Reflect.get(this.prizeIndexAndAngle, ops.winningId) !== undefined)
            curPoint = ops.winningId;
        else
            curPoint = this.round(this.prizeIdWhenNotWinning) || this.prizeIdWhenNotWinning[0];
        let realPointer = Reflect.get(this.prizeIndexAndAngle, curPoint) || s || this.randomAngleWhenLotteryisNotDrawn[0];
        if (Reflect.get(this.prizeIndexAndAngle, curPoint) !== undefined)
            realPointer = Reflect.get(this.prizeIndexAndAngle, curPoint);
        else
            realPointer = s || this.randomAngleWhenLotteryisNotDrawn[0];
        if (!this.startRotate) {
            // 第一次转
            const cur = this.startRotate + 1800 + realPointer;
            this.prevRotate = realPointer;
            el.style.transform = `rotate(${cur}deg)`;
            this.startRotate += cur - this.startRotate;
        }
        else {
            const cur = (this.startRotate + 1800 - this.prevRotate) + realPointer;
            this.prevRotate = realPointer;
            this.startRotate += cur - this.startRotate;
            el.style.transform = `rotate(${cur}deg)`;
        }
        (_c = this.turntableRotationCycleTiming) === null || _c === void 0 ? void 0 : _c.call(this, ops.onDone);
    }
}
exports.BigTurntable = BigTurntable;
