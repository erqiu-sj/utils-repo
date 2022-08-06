/*
 * @Author: 邱狮杰
 * @Date: 2022-08-05 22:27:45
 * @LastEditTime: 2022-08-06 15:59:45
 * @Description: 生成 pages
 * @FilePath: /repo/script/generateWeChatPage/src/index.ts
 */
import { commonFolderDataTypes, GeneratePage } from './core/generate';
import { ResolvePath, resolvePathOptions } from './core/resolvePath';
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

    const pathCollection: (resolvePathOptions & commonFolderDataTypes)[] = []
    ops.pages.forEach(i => {
        if (typeof i === 'string') {
            const map = new GeneratePage({
                path: `${ops.rootDir}${i}`,
                ...ops
            })
            map.createIndex()
            map.createHooks()
            map.createComponents()
            map.getPathMap()
            pathCollection.push(map.getPathMap())
        }
        else {
            const map = new GeneratePage(
                {
                    path: `${ops.rootDir}${i.path}`,
                    ...ops
                }
            )
            map.createIndex()
            i.generateComponents !== false && map.createComponents()
            i.generateHooks !== false && map.createHooks()
            pathCollection.push(map.getPathMap())
        }
    })
    new SetAppletConfigurationPages({
        replaceArray: pathCollection.map(n => {
            return n.path
        }),
        path: ResolvePath.getPwd(ops.pagesConfigPath)
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
//     rootDir: "pages",
//     pagesConfigPath: "pages/config.ts"
// })