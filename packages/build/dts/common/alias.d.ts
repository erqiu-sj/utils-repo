import { UserConfigExport } from 'vite';
export declare class Alias {
    config: UserConfigExport;
    private pwd;
    analysis(obj?: {
        [key: string]: string;
    }): this;
    getConfig(): UserConfigExport;
}
