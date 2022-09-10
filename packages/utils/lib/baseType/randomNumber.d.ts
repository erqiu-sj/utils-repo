/**
 * @description 随机数区间
 */
export declare class RandomNumberInterval {
    private n;
    constructor(interval: [number, number], ops?: {
        isInteger: boolean;
    });
    getNumber(): number;
}
