export interface setTurntableCycleOptions {
    time: number;
}
export interface startTheCarouselOptions {
    onCallingBackDraws?: () => void;
    onPreliminaryDraw?: () => void;
    onDone?: () => void;
    winningId: number;
}
export declare class BigTurntable {
    private startRotate;
    private prevRotate;
    private isPedding;
    private timerPointer;
    private prizeIndexAndAngle;
    private randomAngleWhenLotteryisNotDrawn;
    private prizeIdWhenNotWinning;
    private turntableRotationCycleTiming;
    constructor();
    /**
     *  @description 设置奖品索引和角度
     */
    setPrizeIndexAndAngle(obj: {
        [k: number]: number;
    }): this;
    /**
     * @description 设置转盘周期,指旋转到停止需要多久时间
     */
    setTurntableCycle(config: setTurntableCycleOptions): this;
    /**
     * @description 设置未中奖时随机旋转角度
     */
    setRandomAngleWhenLotteryisNotDrawn(randomAngleWhenLotteryisNotDrawn: number[]): this;
    /**
     * @description 设置未中奖时的奖品id
     */
    setPrizeIdWhenNotWinning(prizeIdWhenNotWinning: number[]): this;
    /**
     * @description 随机取值
     * @param { T[] } list
     * @returns { T }
     */
    private round;
    /**
     * @description 销毁转盘周期
     */
    destroySpinCycle(): this;
    startTheCarousel(el: HTMLElement, ops: startTheCarouselOptions): void;
}
