/*
 * @Author: 邱狮杰
 * @Date: 2022-07-03 10:55:48
 * @LastEditTime: 2022-07-03 12:42:27
 * @Description: 大转盘
 * @FilePath: /repo/packages/utils/src/businessLogic/bigTurntable/index.ts
 */

export interface setTurntableCycleOptions {
    time: number
}

export interface startTheCarouselOptions {
    // 正在抽奖回调
    onCallingBackDraws?: () => void
    // 预备抽奖
    onPreliminaryDraw?: () => void
    // 一次周期结束回调
    onDone?: () => void
    // 中奖id
    winningId: number
}

export class BigTurntable {
    // 起始角度
    private startRotate: number = 0

    // 上次旋转的角度
    private prevRotate: number = 0

    // 是否正在旋转
    private isPedding: boolean = false

    // 转盘周期指针
    private timerPointer: null | NodeJS.Timeout = null

    private prizeIndexAndAngle: { [k: number]: number } = {}

    private randomAngleWhenLotteryisNotDrawn: number[] = []

    // 未中奖时的奖品iid
    private prizeIdWhenNotWinning: number[] = []

    // 转盘旋转周期
    private turntableRotationCycleTiming: Function | null = null

    constructor() { }

    /**
     *  @description 设置奖品索引和角度
     */

    setPrizeIndexAndAngle(obj: { [k: number]: number }): this {
        this.prizeIndexAndAngle = obj
        return this
    }

    /**
     * @description 设置转盘周期,指旋转到停止需要多久时间
     */
    setTurntableCycle(config: setTurntableCycleOptions): this {

        this.turntableRotationCycleTiming = (cb?: () => void) => {
            this.timerPointer = setTimeout(() => {

                this.isPedding = false
                cb?.()
            }, config.time);
        }
        return this
    }
    /**
     * @description 设置未中奖时随机旋转角度
     */
    setRandomAngleWhenLotteryisNotDrawn(randomAngleWhenLotteryisNotDrawn: number[]) {
        this.randomAngleWhenLotteryisNotDrawn = randomAngleWhenLotteryisNotDrawn
        return this
    }
    /**
     * @description 设置未中奖时的奖品id
     */
    setPrizeIdWhenNotWinning(prizeIdWhenNotWinning: number[]) {
        this.prizeIdWhenNotWinning = prizeIdWhenNotWinning
        return this
    }

    /**
     * @description 随机取值
     * @param { T[] } list 
     * @returns { T }
     */
    private round<T = any>(list: T[]): T {
        return list[Math.ceil(Math.round(Math.random() * list.length))]
    }

    /**
     * @description 销毁转盘周期
     */
    destroySpinCycle() {
        if (this.timerPointer) clearTimeout(this.timerPointer)
        return this
    }

    startTheCarousel(el: HTMLElement, ops: startTheCarouselOptions) {
        if (!el) return
        if (this.isPedding) {
            ops.onCallingBackDraws?.()
            return
        } else {
            ops.onPreliminaryDraw?.()
        }

        const s = this.round(this.randomAngleWhenLotteryisNotDrawn)

        // 获取中奖id
        let curPoint = Reflect.get(this.prizeIndexAndAngle, ops.winningId) || this.round(this.prizeIdWhenNotWinning) || this.prizeIdWhenNotWinning[0]

        if (Reflect.get(this.prizeIndexAndAngle, ops.winningId) !== undefined) curPoint = ops.winningId

        else curPoint = this.round(this.prizeIdWhenNotWinning) || this.prizeIdWhenNotWinning[0]

        let realPointer = Reflect.get(this.prizeIndexAndAngle, curPoint) || s || this.randomAngleWhenLotteryisNotDrawn[0]

        if (Reflect.get(this.prizeIndexAndAngle, curPoint) !== undefined)
            realPointer = Reflect.get(this.prizeIndexAndAngle, curPoint)
        else realPointer = s || this.randomAngleWhenLotteryisNotDrawn[0]

        if (!this.startRotate) {
            // 第一次转
            const cur = this.startRotate + 1800 + realPointer
            this.prevRotate = realPointer
            el.style.transform = `rotate(${cur}deg)`
            this.startRotate += cur - this.startRotate
        } else {
            const cur = (this.startRotate + 1800 - this.prevRotate) + realPointer
            this.prevRotate = realPointer
            this.startRotate += cur - this.startRotate
            el.style.transform = `rotate(${cur}deg)`
        }

        this.turntableRotationCycleTiming?.(ops.onDone)
    }
}