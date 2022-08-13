/*
 * @Author: 邱狮杰
 * @Date: 2022-08-13 12:02:05
 * @LastEditTime: 2022-08-13 14:51:58
 * @Description: 
 * @FilePath: /repo/script/generateWeChatPage/src/core/genRouter.ts
 */
import { readFileSync } from 'fs-extra'
import { ResolvePath } from './resolvePath'


export interface genRouterParams {
    path: string
    variableName: string
}

export class GenRouter {

    constructor(private ops: genRouterParams) {
    }

    /**
     *  @description 检查 SimpleRouteJump 是否导入
     */
    checkSimpleRouteJumpImport() {
        const content = readFileSync(ResolvePath.getPwd(this.ops.path), { encoding: 'utf-8' })
        console.log(content)
    }

    /**
     * @description 根据路由变量名取路由表内容
     */
    getRoutingTableContent() {

    }

    /**
     * @description 更新路由表内容
     */
    updateRouterTable() {

    }
}