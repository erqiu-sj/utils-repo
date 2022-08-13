/*
 * @Author: 邱狮杰
 * @Date: 2022-08-06 11:19:36
 * @LastEditTime: 2022-08-13 15:28:03
 * @Description: 
 * @FilePath: /repo/script/generateWeChatPage/src/core/resolvePath.ts
 */
import { dirname, resolve } from 'path'

export interface resolvePathOptions {
    path: string
    defineGenerateWeChatPagePath: string
}

export interface resolvePathMapTypes {
    dir: string
    path: string
    absolutePath: string
    dirName: string
}
export class ResolvePath {

    private data: resolvePathMapTypes = {
        dir: '',
        path: '',
        absolutePath: '',
        dirName: "",
    }

    constructor(ops: resolvePathOptions) {
        ops.defineGenerateWeChatPagePath
        this.setDate('path', ops.path)
        this.setDate('absolutePath', ResolvePath.getPwd(ops.defineGenerateWeChatPagePath + ops.path))
        const dirPath = dirname(this.data.absolutePath)
        this.setDate('dir', dirPath)
        this.setDate('dirName', dirPath.split('/').at(-1) as string)
    }

    static getPwd(path: string) {
        return resolve(path)
    }


    getPathMap() {
        return this.data
    }

    protected getDir(): string {
        return this.data.dir
    }

    protected setDate<T extends keyof resolvePathMapTypes>(key: T, val: resolvePathMapTypes[T]) {
        this.data = { ...this.data, [key]: val }
        return this
    }
}