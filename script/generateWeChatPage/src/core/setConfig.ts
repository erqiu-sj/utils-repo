/*
 * @Author: 邱狮杰
 * @Date: 2022-08-06 14:35:15
 * @LastEditTime: 2022-09-02 22:52:32
 * @Description: 
 * @FilePath: /repo/script/generateWeChatPage/src/core/setConfig.ts
 */

import { readFileSync, writeFileSync } from 'fs-extra';

export interface SetAppletConfigurationPagesOptionTypes {
    path: string
    replaceArray: string[]
}

export class SetAppletConfigurationPages {
    private data: SetAppletConfigurationPagesOptionTypes = {
        replaceArray: [],
        path: ""
    }

    constructor(ops: SetAppletConfigurationPagesOptionTypes) {
        this.data = ops
    }

    check() {
        // 根据路径读取config.ts 内容
        const content = readFileSync(this.data.path, { encoding: "utf-8" })
        // 正则匹配出 pages 的内容包括 pages 对象
        const matchContent = content.match(/pages:\s+\[((.|\r|\s|\n)*?)\]/gmi)
        if (matchContent?.[0]) {
            // 匹配出内容
            const arr = matchContent?.[0]
            const pathsToBeMerged = this.data.replaceArray.filter(i => {
                // 去掉 pages 前的 / 再进行 test
                return !new RegExp(i.substring(1), 'gi').test(arr)
            })
            const replaceContent = pathsToBeMerged.map(i => `'${i.substring(1)}'`).join(',')
            writeFileSync(this.data.path,
                content.replace(matchContent[0],
                    arr.replace(/\]/g, `,${replaceContent}]`)
                )
            )
        }
    }
}