/*
 * @Author: 邱狮杰
 * @Date: 2022-09-06 23:48:36
 * @LastEditTime: 2022-09-06 23:48:36
 * @Description:
 * @FilePath: /repo/packages/vite-plugin-img-reload/src/utils.ts
 */
import { ensureDir, readdir } from 'fs-extra'
import { base64 } from 'lqip'
import { resolve } from 'path'
import { vitePluginImgReloadOption } from './plugin'

export class ImgReloadContext {
  private ops: vitePluginImgReloadOption = { resourcePathDir: '', outputDir: '' }
  constructor(ops: vitePluginImgReloadOption) {
    this.ops = ops
  }

  genOutputDir() {
    ensureDir(this.ops.outputDir)
  }
  genResourcePathDir() {
    ensureDir(this.ops.resourcePathDir).then(() => this.processingResourcePathDir())
  }
  processingResourcePathDir() {
    console.log(this.ops.resourcePathDir, 'this.ops.resourcePathDir')
    readdir(this.ops.resourcePathDir, { encoding: 'utf-8' }).then(async res => {
      const soureceList = res.map(p => {
        return {
          joinSourcePath: resolve(this.ops.resourcePathDir, p),
          path: p,
        }
      })

      for (const key in soureceList) {
        const base64Source = await base64(soureceList[key].joinSourcePath)
        soureceList[key] = {
          ...soureceList[key],
          // @ts-ignore
          base64Source,
        }
      }

      console.log(soureceList)
    })
  }
}
