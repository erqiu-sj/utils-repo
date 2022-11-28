declare type getDistributedKey<T> = T extends any[] ? never : T extends object ? keyof T : T extends string ? T : never;
export declare class Storeage<T> {
    get<V>(k: getDistributedKey<T>): V;
    set<V>(k: getDistributedKey<T>, val: V): this;
}
export {};
