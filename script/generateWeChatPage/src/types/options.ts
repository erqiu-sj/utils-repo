/*
 * @Author: 邱狮杰
 * @Date: 2022-08-05 22:37:45
 * @LastEditTime: 2022-08-13 16:32:37
 * @Description: 
 * @FilePath: /repo/script/generateWeChatPage/src/types/options.ts
 */

export interface pagesConfig {
    // 生成路由 true
    generateRoute?: boolean
    // 生成 components 文件夹 默认 true
    generateComponents?: boolean
    // 生成 hooks 文件夹 默认 true
    generateHooks?: boolean
    path: string
}

// 生成文件的基本配置 
export interface generateWeChatPageReadOptions {
    // 定义 generateWeChat 函数文件的位置  用于获取绝对路径 后续方便获取 rootDir, pagesConfigPath,routerFilePath,routeVariableName 的绝对路径
    defineGenerateWeChatPagePath: string
    pages: ((string) | (pagesConfig))[]
    rootDir: string
    // 路由文件地址
    routerFilePath?: string
    // 路由变量名
    routeVariableName?: string
    // pages 配置文件路径
    pagesConfigPath: string
    // 模版文件路径
    templateFilePath?: string
    // 替换index内容处理函数 ,data 为 templateFilePath 文件内容
    replaceHandler?: (data: string) => string
}
