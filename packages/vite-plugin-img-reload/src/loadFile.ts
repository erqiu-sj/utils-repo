import {pathExists, ensureFile, readdir, readFile, writeFile} from 'fs-extra'

export class LoadFile {
    loadCssFile(filePath: string, readFilePath: string) {
        pathExists(filePath).then(hasFile => {
            if (hasFile) return
            ensureFile(filePath, () => {
                readFile(readFilePath, {encoding: 'utf-8'}, (err, data) => {
                    if (err) throw err
                    writeFile(filePath, data, {encoding: 'utf-8'}, (writeError) => {
                        if (err) throw writeError
                    })
                })
            })
        })

    }
}
