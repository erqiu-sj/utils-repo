export declare class MultiVersionSwitching {
    private versionPlaceholder;
    private baseURL;
    private originalBaseURL;
    setVersionPlaceholder(pl: string): this;
    setBaseURL(URL: string): void;
    replaceVersionPlaceholder(baseURL: string, repl: string): string;
    getOriginalBaseURL(): string;
    switchVersion(item: string): string;
}
