/*
 * @Author: 邱狮杰
 * @Date: 2022-09-12 22:09:41
 * @LastEditTime: 2022-09-24 22:55:52
 * @Description:
 * @FilePath: /repo/packages/vite-plugin-img-reload/src/loadFile.ts
 */
import { ensureFile, pathExists, readFile, writeFile } from 'fs-extra'

export class LoadFile {
  loadCssFile(filePath: string, readFilePath: string) {
    pathExists(filePath).then(hasFile => {
      if (hasFile) return
      ensureFile(filePath, () => {
        readFile(readFilePath, { encoding: 'utf-8' }, (err, data) => {
          if (err) throw err
          writeFile(filePath, data, { encoding: 'utf-8' }, writeError => {
            if (err) throw writeError
          })
        })
      })
    })
  }
}
