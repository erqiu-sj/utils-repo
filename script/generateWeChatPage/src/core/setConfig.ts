/*
 * @Author: 邱狮杰
 * @Date: 2022-08-06 14:35:15
 * @LastEditTime: 2022-08-06 15:40:54
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
        const content = readFileSync(this.data.path, { encoding: "utf-8" })
        const matchContent = content.match(/pages:\s+\[((.|\r|\s|\n)*?)\]/gmi)
        if (matchContent?.[0]) {
            const arr = matchContent?.[0]
            const pathsToBeMerged = this.data.replaceArray.filter(i => {
                return !new RegExp(i, 'gi').test(arr)
            })
            const replaceContent = pathsToBeMerged.map(i => `'${i}'`).join(',')
            writeFileSync(this.data.path,
                content.replace(matchContent[0],
                    arr.replace(/\]/g, `,${replaceContent}]`)
                )
            )
        }
    }
}