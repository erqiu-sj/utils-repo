export interface SetAppletConfigurationPagesOptionTypes {
    path: string;
    replaceArray: string[];
}
export declare class SetAppletConfigurationPages {
    private data;
    constructor(ops: SetAppletConfigurationPagesOptionTypes);
    check(): void;
}
