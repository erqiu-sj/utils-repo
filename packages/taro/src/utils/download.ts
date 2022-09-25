/*
 * @Author: 邱狮杰
 * @Date: 2022-08-01 18:30:24
 * @LastEditTime: 2022-09-18 10:35:56
 * @Description:
 * @FilePath: /repo/packages/taro/src/utils/download.ts
 */
import { downloadFile, getFileSystemManager } from '@tarojs/taro'
import { Callback, ChainCall, getAllParameterTypesOfFunction } from './chainCall'

export interface downloadFileOptions {
  // cache  |  userFile
  /**
   * @description  默认下载返回临时文件地址 根据改选项选择保存文件地址 cache(缓存文件) userFile(用户文件), 区别见下方链接
   * @see https://developers.weixin.qq.com/miniprogram/dev/framework/ability/file-system.html
   */
  downloadLocation?: 'cache' | 'userFile'
}

interface FileSuccessCallbackResult extends TaroGeneral.CallbackResult {
  /** 用户文件路径。传入 filePath 时会返回，跟传入的 filePath 一致 */
  filePath: string
  /** 开发者服务器返回的 HTTP 状态码 */
  statusCode: number
  /** 临时文件路径。没传入 filePath 指定文件存储路径时会返回，下载后的文件会存储到一个临时文件 */
  tempFilePath: string
  /** 调用结果 */
  errMsg: string
}

interface SaveFileFailCallbackResult extends TaroGeneral.CallbackResult {
  /** 错误信息
   *
   * 可选值：
   * - 'fail tempFilePath file not exist': 指定的 tempFilePath 找不到文件;
   * - 'fail permission denied, open "${filePath}"': 指定的 filePath 路径没有写权限;
   * - 'fail no such file or directory "${dirPath}"': 上级目录不存在;
   * - 'fail the maximum size of the file storage limit is exceeded': 存储空间不足; */
  errMsg: string
}
interface SaveFileSuccessCallbackResult extends TaroGeneral.CallbackResult {
  /** 存储后的文件路径 */
  savedFilePath: string
  /** 调用结果 */
  errMsg: string
}
interface SaveFileOptionCallback {
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  complete?: (res: TaroGeneral.CallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (result: SaveFileFailCallbackResult) => void
  /** 要存储的文件路径 */
  filePath?: string
  /** 接口调用成功的回调函数 */
  success?: (result: SaveFileSuccessCallbackResult) => void
}

/** 字符编码 */
interface Encoding {
  ascii
  base64
  binary
  hex
  /** 以小端序读取 */
  ucs2
  /** 以小端序读取 */
  'ucs-2'
  /** 以小端序读取 */
  utf16le
  /** 以小端序读取 */
  'utf-16le'
  'utf-8'
  utf8
  latin1
}
interface WriteFileFailCallbackResult extends TaroGeneral.CallbackResult {
  /** 错误信息
   *
   * 可选值：
   * - 'fail no such file or directory, open ${filePath}': 指定的 filePath 所在目录不存在;
   * - 'fail permission denied, open ${dirPath}': 指定的 filePath 路径没有写权限;
   * - 'fail the maximum size of the file storage limit is exceeded': 存储空间不足; */
  errMsg: string
}

interface WriteFileOption {
  /** 要写入的文本或二进制数据 */
  data: string | ArrayBuffer
  /** 要写入的文件路径 */
  filePath: string
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  complete?: (res: TaroGeneral.CallbackResult) => void
  /** 指定写入文件的字符编码 */
  encoding?: keyof Encoding
  /** 接口调用失败的回调函数 */
  fail?: (result: WriteFileFailCallbackResult) => void
  /** 接口调用成功的回调函数 */
  success?: (res: TaroGeneral.CallbackResult) => void
}

export interface WriteFileCallback extends Omit<WriteFileOption, 'data' | 'encoding' | 'filePath'> {}
class WriteFile extends Callback<WriteFileCallback> {
  done(ops: WriteFileOption) {
    getFileSystemManager().writeFile({
      ...this.getCallbackAll(),
      ...ops,
    })
  }
}

class CacheFile extends Callback<SaveFileOptionCallback> {
  done(params: FileSuccessCallbackResult) {
    getFileSystemManager().saveFile({
      tempFilePath: params.tempFilePath,
      ...this.getCallbackAll(),
    })
  }
}

interface downloadFileCallback extends Pick<getAllParameterTypesOfFunction<'downloadFile'>, 'success' | 'fail' | 'complete'> {}

type downloadFileOptionsTypes = Parameters<typeof downloadFile>[0]

type writeFileOptionType = Pick<WriteFileOption, 'data' | 'encoding' | 'filePath'>

type withDownloadLocationTypeCallBack<T extends downloadFileOptions['downloadLocation'] = undefined> = T extends undefined | null ? downloadFileCallback : T extends 'cache' ? SaveFileOptionCallback : WriteFileCallback

type getCallParameters<T extends downloadFileOptions['downloadLocation'] = undefined> = T extends undefined | null ? downloadFileOptionsTypes : T extends 'userFile' ? writeFileOptionType : downloadFileOptionsTypes

// @ts-ignore
export class DownloadFile<C = downloadFileCallback, K extends downloadFileOptions['downloadLocation'] = downloadFileOptions['downloadLocation']> extends Callback<C> {
  private ops?: Partial<downloadFileOptions> = {}

  constructor() {
    super()
  }

  setDownloadLocation<T extends downloadFileOptions['downloadLocation'] = downloadFileOptions['downloadLocation']>(
    type: T
  ): Omit<DownloadFile<withDownloadLocationTypeCallBack<T>, T>, 'setCallback' | 'callTrigger' | 'setDownloadLocation'> {
    this.ops = { ...this.ops, downloadLocation: type }
    return this as unknown as Omit<DownloadFile<withDownloadLocationTypeCallBack<T>, T>, 'setCallback' | 'callTrigger' | 'setDownloadLocation'>
  }

  private cacheDownload(params: downloadFileOptionsTypes) {
    const c = new CacheFile()
    c.setCallback('complete', this.getCallback('complete'))
    c.setCallback('success', this.getCallback('success'))
    c.setCallback('fail', this.getCallback('fail'))

    new ChainCall()
      .injectApi('downloadFile')
      .success(res => {
        c.done(res)
      })
      .fail(res => {
        c.callTrigger('fail', res)
      })
      .complete(res => {
        c.callTrigger('complete', res)
      })
      .injectionParameters(params)
      .done()
  }

  private writeFile(ops: writeFileOptionType) {
    const w = new WriteFile()
    w.setCallback('fail', this.getCallback('fail'))
    w.setCallback('complete', this.getCallback('complete'))
    w.setCallback('success', this.getCallback('success'))
    w.done(ops)
  }

  down(params: getCallParameters<K>) {
    if (!this.ops?.downloadLocation) {
      new ChainCall()
        .injectApi('downloadFile')
        .success(this.getCallback('success'))
        .fail(this.getCallback('fail'))
        .complete(this.getCallback('complete'))
        .injectionParameters(params as downloadFileOptionsTypes)
        .done()
      return
    }
    this.ops?.downloadLocation === 'cache' ? this.cacheDownload(params as downloadFileOptionsTypes) : this.writeFile(params as writeFileOptionType)
  }
}
