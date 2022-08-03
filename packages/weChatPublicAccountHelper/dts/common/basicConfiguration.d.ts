declare type basicConfigurationTypes = {
    baseSrc: string;
};
export declare let basicConfiguration: Partial<basicConfigurationTypes>;
export declare class BasicConfiguration {
    constructor(conf: Partial<basicConfigurationTypes>);
    getConfig(): Partial<basicConfigurationTypes>;
}
export {};
