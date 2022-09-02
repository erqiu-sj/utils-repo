/*
 * @Author: 邱狮杰
 * @Date: 2022-08-05 22:27:45
 * @LastEditTime: 2022-09-02 22:52:48
 * @Description: 生成 pages
 * @FilePath: /repo/script/generateWeChatPage/src/index.ts
 */

import { gray } from 'colors';
import { commonFolderDataTypes, GeneratePage } from './core/generate';
import { ResolvePath, resolvePathMapTypes } from './core/resolvePath';
import { SetAppletConfigurationPages } from './core/setConfig';
import { generateWeChatPageReadOptions } from './types/options';
export function generateWeChatPage(ops: generateWeChatPageReadOptions) {
    console.log(
        gray(
            `
            start!  @mxnet/generateWeChatPage
        `
        )
    );
    const pathCollection: (resolvePathMapTypes & commonFolderDataTypes)[] = []
    ops.pages.forEach(i => {
        const path = typeof i === 'string' ? `${ops.rootDir}${i}` : `${ops.rootDir}${i.path}`
        const map = new GeneratePage({
            path: path,
            ...ops
        })
        map.createIndex()
        if (typeof i === 'string') {
            map.createHooks()
            map.createComponents()
        } else {
            i?.generateComponents !== false && map.createComponents()
            i?.generateHooks !== false && map.createHooks()
        }
        pathCollection.push(map.getPathMap())
    })
    new SetAppletConfigurationPages({
        replaceArray: pathCollection.map(n => {
            return n.path
        }),
        path: ResolvePath.getPwd(ops.defineGenerateWeChatPagePath + ops.pagesConfigPath)
    }).check()
}

// generateWeChatPage({
//     pages: [
//         {
//             path: "/index/index/index",
//             generateComponents: true,
//             generateHooks: true,
//             generateRoute: false
//         },
//         {
//             path: "/work/index",
//             generateComponents: true,
//             generateHooks: true,
//             generateRoute: false
//         },
//     ],
//     rootDir: "/pages",
//     pagesConfigPath: "/pages/config.ts",
//     defineGenerateWeChatPagePath: resolve(__dirname),
//     routerFilePath: "pages/router.ts",
//     routeVariableName: "router"
// })