export interface resolvePathOptions {
    path: string;
    defineGenerateWeChatPagePath: string;
}
export interface resolvePathMapTypes {
    dir: string;
    path: string;
    absolutePath: string;
    dirName: string;
}
export declare class ResolvePath {
    private data;
    constructor(ops: resolvePathOptions);
    static getPwd(path: string): string;
    getPathMap(): resolvePathMapTypes;
    protected getDir(): string;
    protected setDate<T extends keyof resolvePathMapTypes>(key: T, val: resolvePathMapTypes[T]): this;
}
