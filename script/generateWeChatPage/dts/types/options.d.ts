export interface pagesConfig {
    generateRoute?: boolean;
    generateComponents?: boolean;
    generateHooks?: boolean;
    path: string;
}
export interface generateWeChatPageReadOptions {
    defineGenerateWeChatPagePath: string;
    pages: ((string) | (pagesConfig))[];
    rootDir: string;
    routerFilePath?: string;
    routeVariableName?: string;
    pagesConfigPath: string;
    templateFilePath?: string;
    replaceHandler?: (data: string) => string;
}
