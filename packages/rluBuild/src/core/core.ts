/*
 * @Author: 邱狮杰
 * @Date: 2022-11-12 23:54:48
 * @LastEditTime: 2022-11-13 00:06:17
 * @Description: 
 * @FilePath: /repo/packages/rluBuild/src/core/core.ts
 */

import { defineConfig } from 'rollup';

export type ReturnValue = ReturnType<typeof defineConfig>


export class RluBuild {

    build(): ReturnValue {
        return defineConfig({
            plugins: []
        }) as ReturnValue
    }

}

const config = new RluBuild().build()