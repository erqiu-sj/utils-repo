export interface genRouterParams {
    path: string;
    variableName: string;
}
export declare class GenRouter {
    private ops;
    constructor(ops: genRouterParams);
    checkSimpleRouteJumpImport(): void;
    getRoutingTableContent(): void;
    updateRouterTable(): void;
}
