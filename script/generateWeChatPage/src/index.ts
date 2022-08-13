/*
 * @Author: 邱狮杰
 * @Date: 2022-08-05 22:27:45
 * @LastEditTime: 2022-08-13 16:35:10
 * @Description: 生成 pages
 * @FilePath: /repo/script/generateWeChatPage/src/index.ts
 */
import { commonFolderDataTypes, GeneratePage } from './core/generate';
import { ResolvePath, resolvePathMapTypes, resolvePathOptions } from './core/resolvePath';
import { SetAppletConfigurationPages } from './core/setConfig';
import { generateWeChatPageReadOptions } from './types/options';

export function generateWeChatPage(ops: generateWeChatPageReadOptions) {
    console.log(
        `
             ______                                                   __            __                                                            __                                                  __                   __                                             
           _/      \_                                                |  \          /  \                                                          |  \                                                |  \                 |  \                                            
          /   $$$$$$ \   ______ ____   __    __  _______    ______  _| $$_        /  $$______    ______   _______    ______    ______   ______  _| $$_     ______   __   __   __   ______    _______ | $$____    ______  _| $$_     ______    ______    ______    ______  
         /  $$$____$$$\ |      \    \ |  \  /  \|       \  /      \|   $$ \      /  $$/      \  /      \ |       \  /      \  /      \ |      \|   $$ \   /      \ |  \ |  \ |  \ /      \  /       \| $$    \  |      \|   $$ \   /      \  |      \  /      \  /      \ 
        |  $$/     \ $$\| $$$$$$\$$$$\ \$$\/  $$| $$$$$$$\|  $$$$$$\\$$$$$$     /  $$|  $$$$$$\|  $$$$$$\| $$$$$$$\|  $$$$$$\|  $$$$$$\ \$$$$$$\\$$$$$$  |  $$$$$$\| $$ | $$ | $$|  $$$$$$\|  $$$$$$$| $$$$$$$\  \$$$$$$\\$$$$$$  |  $$$$$$\  \$$$$$$\|  $$$$$$\|  $$$$$$\
        | $$|  $$$$$| $$| $$ | $$ | $$  >$$  $$ | $$  | $$| $$    $$ | $$ __   /  $$ | $$  | $$| $$    $$| $$  | $$| $$    $$| $$   \$$/      $$ | $$ __ | $$    $$| $$ | $$ | $$| $$    $$| $$      | $$  | $$ /      $$ | $$ __ | $$  | $$ /      $$| $$  | $$| $$    $$
        | $$| $$| $$| $$| $$ | $$ | $$ /  $$$$\ | $$  | $$| $$$$$$$$ | $$|  \ /  $$  | $$__| $$| $$$$$$$$| $$  | $$| $$$$$$$$| $$     |  $$$$$$$ | $$|  \| $$$$$$$$| $$_/ $$_/ $$| $$$$$$$$| $$_____ | $$  | $$|  $$$$$$$ | $$|  \| $$__/ $$|  $$$$$$$| $$__| $$| $$$$$$$$
        | $$ \$$  $$| $$| $$ | $$ | $$|  $$ \$$\| $$  | $$ \$$     \  \$$  $$|  $$    \$$    $$ \$$     \| $$  | $$ \$$     \| $$      \$$    $$  \$$  $$ \$$     \ \$$   $$   $$ \$$     \ \$$     \| $$  | $$ \$$    $$  \$$  $$| $$    $$ \$$    $$ \$$    $$ \$$     \
         \$$\ \$$$$$$$$  \$$  \$$  \$$ \$$   \$$ \$$   \$$  \$$$$$$$   \$$$$  \$$     _\$$$$$$$  \$$$$$$$ \$$   \$$  \$$$$$$$ \$$       \$$$$$$$   \$$$$   \$$$$$$$  \$$$$$\$$$$   \$$$$$$$  \$$$$$$$ \$$   \$$  \$$$$$$$   \$$$$ | $$$$$$$   \$$$$$$$ _\$$$$$$$  \$$$$$$$
          \$$\ __/   \                                                               |  \__| $$                                                                                                                                   | $$                |  \__| $$          
           \$$$    $$$                                                                \$$    $$                                                                                                                                   | $$                 \$$    $$          
             \$$$$$$                                                                   \$$$$$$                                                                                                                                     \$$                  \$$$$$$           
        `
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