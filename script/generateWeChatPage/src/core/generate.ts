/*
 * @Author: 邱狮杰
 * @Date: 2022-08-05 22:44:11
 * @LastEditTime: 2022-08-13 16:57:09
 * @Description: 
 * @FilePath: /repo/script/generateWeChatPage/src/core/generate.ts
 */
import { green } from 'colors';
import { readFile } from 'fs';
import { ensureDir, ensureFileSync, pathExistsSync, writeFile } from 'fs-extra';
import { generateWeChatPageReadOptions } from '../types/options';
import { ResolvePath, resolvePathMapTypes, resolvePathOptions } from './resolvePath';

export interface commonFolderDataTypes {
    components: string
    hooks: string
}

/**
 * @description 通用文件夹路径(components,hooks)
 */
class CommonFolder extends ResolvePath {

    private commonFolderDate: commonFolderDataTypes = {
        components: "",
        hooks: ""
    }

    constructor(res: resolvePathOptions) {
        super(res)
        this.commonFolderDate = {
            components: `${this.getDir()}/components`,
            hooks: `${this.getDir()}/hooks`
        }
    }

    override getPathMap(): resolvePathMapTypes & commonFolderDataTypes {
        return { ...this.commonFolderDate, ...super.getPathMap() }
    }
}

export class Generate extends CommonFolder {

    private userConfig: generateWeChatPageReadOptions = {
        defineGenerateWeChatPagePath: '',
        pages: [],
        rootDir: "",
        pagesConfigPath: ""
    }

    constructor(ops: resolvePathOptions & generateWeChatPageReadOptions) {
        super(ops)
        this.userConfig = ops
    }

    readFile(cb: (content: string) => void) {
        readFile(ResolvePath.getPwd(this.userConfig.templateFilePath || 'index.txt'), { encoding: "utf-8" }, (err, data) => {
            if (err) {
                const text = `
import { FC } from 'react'

export interface $\{s1}Props {}

const $\{s1}: FC<$\{s1}Props> = () => {

return <></>

} 

export default $\{s1}
                `
                cb(this.userConfig.replaceHandler?.(text) || text.replace(/\$\{s1\}/g, this.getPathMap().dirName))
                return
            }
            const content = this.userConfig.replaceHandler?.(data) || data.replace(/\$\{s1\}/g, this.getPathMap().dirName)
            cb(content)
        })
    }

    // index页面以及文件夹需要同步创建,后续创建components and hooks
    createIndex() {
        const path = `${this.getPathMap().absolutePath}.tsx`
        const hasFile = pathExistsSync(path)
        // 是否存在目录，不存在则创建
        if (!hasFile) {
            ensureFileSync(path)
            this.readFile((content) => {
                writeFile(path, content)
                console.log(green(`created! index => ${path}.`))
            })
        }

    }
}

export class GeneratePage extends Generate {
    createHooks() {
        if (
            !pathExistsSync(this.getPathMap().hooks)
        ) {
            ensureDir(this.getPathMap().hooks, (e) => {
                if (!e) {
                    console.log(green(`created! hooks => ${this.getPathMap().hooks}.`))
                }
            })
        }
    }
    createComponents() {
        if (!pathExistsSync(this.getPathMap().components)) {
            ensureDir(this.getPathMap().components, (e) => {
                if (!e) {
                    console.log(green(`created! components => ${this.getPathMap().components}.`))
                }
            })
        }

    }
}
