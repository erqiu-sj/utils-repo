import { generateWeChatPageReadOptions } from '../types/options';
import { ResolvePath, resolvePathMapTypes, resolvePathOptions } from './resolvePath';
export interface commonFolderDataTypes {
    components: string;
    hooks: string;
}
declare class CommonFolder extends ResolvePath {
    private commonFolderDate;
    constructor(res: resolvePathOptions);
    getPathMap(): resolvePathMapTypes & commonFolderDataTypes;
}
export declare class Generate extends CommonFolder {
    private userConfig;
    constructor(ops: resolvePathOptions & generateWeChatPageReadOptions);
    readFile(cb: (content: string) => void): void;
    createIndex(): void;
}
export declare class GeneratePage extends Generate {
    createHooks(): void;
    createComponents(): void;
}
export {};
