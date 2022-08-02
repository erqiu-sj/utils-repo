/*
 * @Author: 邱狮杰
 * @Date: 2022-08-01 18:30:24
 * @LastEditTime: 2022-08-01 18:37:00
 * @Description: 
 * @FilePath: /repo/packages/taro/src/utils/download.ts
 */

import { downloadFile, getFileSystemManager } from '@tarojs/taro';
import { Callback, getAllParameterTypesOfFunction } from './chainCall';


export interface downloadFileOptions {
    // cache  |  userFile
    /**
     * @description  默认下载返回临时文件地址 根据改选项选择保存文件地址 cache(缓存文件) userFile(用户文件), 区别见下方链接
     * @see https://developers.weixin.qq.com/miniprogram/dev/framework/ability/file-system.html
     */
    downloadLocation: 'cache' | 'userFile'
}

export class DownloadFile extends Callback<Pick<getAllParameterTypesOfFunction<'downloadFile'>, 'success' | 'fail' | 'complete'>> {

    private ops?: Partial<downloadFileOptions> = {}

    constructor(ops?: Partial<downloadFileOptions>) {
        super()
        this.ops = ops
    }

    down() { }
}
