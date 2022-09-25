/*
 * @Author: 邱狮杰
 * @Date: 2022-09-06 23:48:36
 * @LastEditTime: 2022-09-25 10:32:23
 * @Description:
 * @FilePath: /repo/packages/vite-plugin-img-reload/src/context.ts
 */
import { createFile, ensureDir, pathExists, readdir, writeFile } from 'fs-extra'
import { base64 } from 'lqip'
import { resolve } from 'path'
import { vitePluginImgReloadOption } from './plugin'

interface soureceListItem {
  outPutFilePath: string
  base64Source: string
  fileName: string
  joinSourcePath: string
}

const constant = {
  constantCollectionFilename: 'base64.ts',
}

export class ImgReloadContext {
  private ops: vitePluginImgReloadOption = { resourcePathDir: '', outputDir: '' }

  constructor(ops: vitePluginImgReloadOption) {
    this.ops = ops
  }

  genOutputDir() {
    this.ops?.outputDir && ensureDir(this.ops?.outputDir)
  }

  genResourcePathDir() {
    this.ops?.resourcePathDir && ensureDir(this.ops?.resourcePathDir).then(() => this.processingResourcePathDir())
  }

  // 文件名转变量名
  filenameConversionVariable(fileName: string) {
    return fileName.replace(/(\.|-)/g, '_')
  }

  processingResourcePathDir() {
    this.ops.resourcePathDir &&
      readdir(this.ops.resourcePathDir, { encoding: 'utf-8' }).then(async res => {
        // @ts-ignore
        let soureceList: soureceListItem[] = res.map(p => {
          return {
            joinSourcePath: resolve(this.ops?.resourcePathDir as string, p),
            fileName: p,
          }
        })
        for (const key in soureceList) {
          try {
            const base64Source = await base64(soureceList[key].joinSourcePath)
            const outPutFilePath = resolve(this.ops.outputDir as string, constant.constantCollectionFilename)
            soureceList[key] = {
              ...soureceList[key],
              base64Source,
              outPutFilePath,
            }
          } catch {}
        }

        const outPutFilePath = resolve(this.ops.outputDir as string, constant.constantCollectionFilename)

        const content = soureceList.map(n => `export const ${this.filenameConversionVariable(n.fileName)} = '${n.base64Source}';`).join('\r\n')

        pathExists(outPutFilePath).then(hasFile => {
          if (hasFile) return
          createFile(outPutFilePath).then(() => {
            writeFile(outPutFilePath, content, { encoding: 'utf-8' })
          })
        })
      })
  }
}
