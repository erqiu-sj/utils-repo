import { downloadFile } from '@tarojs/taro';
import { Callback, getAllParameterTypesOfFunction } from './chainCall';
export interface downloadFileOptions {
    /**
     * @description  默认下载返回临时文件地址 根据改选项选择保存文件地址 cache(缓存文件) userFile(用户文件), 区别见下方链接
     * @see https://developers.weixin.qq.com/miniprogram/dev/framework/ability/file-system.html
     */
    downloadLocation?: 'cache' | 'userFile';
}
interface SaveFileFailCallbackResult extends TaroGeneral.CallbackResult {
    /** 错误信息
     *
     * 可选值：
     * - 'fail tempFilePath file not exist': 指定的 tempFilePath 找不到文件;
     * - 'fail permission denied, open "${filePath}"': 指定的 filePath 路径没有写权限;
     * - 'fail no such file or directory "${dirPath}"': 上级目录不存在;
     * - 'fail the maximum size of the file storage limit is exceeded': 存储空间不足; */
    errMsg: string;
}
interface SaveFileSuccessCallbackResult extends TaroGeneral.CallbackResult {
    /** 存储后的文件路径 */
    savedFilePath: string;
    /** 调用结果 */
    errMsg: string;
}
interface SaveFileOptionCallback {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: (res: TaroGeneral.CallbackResult) => void;
    /** 接口调用失败的回调函数 */
    fail?: (result: SaveFileFailCallbackResult) => void;
    /** 要存储的文件路径 */
    filePath?: string;
    /** 接口调用成功的回调函数 */
    success?: (result: SaveFileSuccessCallbackResult) => void;
}
/** 字符编码 */
interface Encoding {
    ascii: any;
    base64: any;
    binary: any;
    hex: any;
    /** 以小端序读取 */
    ucs2: any;
    /** 以小端序读取 */
    'ucs-2': any;
    /** 以小端序读取 */
    utf16le: any;
    /** 以小端序读取 */
    'utf-16le': any;
    'utf-8': any;
    utf8: any;
    latin1: any;
}
interface WriteFileFailCallbackResult extends TaroGeneral.CallbackResult {
    /** 错误信息
     *
     * 可选值：
     * - 'fail no such file or directory, open ${filePath}': 指定的 filePath 所在目录不存在;
     * - 'fail permission denied, open ${dirPath}': 指定的 filePath 路径没有写权限;
     * - 'fail the maximum size of the file storage limit is exceeded': 存储空间不足; */
    errMsg: string;
}
interface WriteFileOption {
    /** 要写入的文本或二进制数据 */
    data: string | ArrayBuffer;
    /** 要写入的文件路径 */
    filePath: string;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: (res: TaroGeneral.CallbackResult) => void;
    /** 指定写入文件的字符编码 */
    encoding?: keyof Encoding;
    /** 接口调用失败的回调函数 */
    fail?: (result: WriteFileFailCallbackResult) => void;
    /** 接口调用成功的回调函数 */
    success?: (res: TaroGeneral.CallbackResult) => void;
}
export interface WriteFileCallback extends Omit<WriteFileOption, 'data' | 'encoding' | 'filePath'> {
}
interface downloadFileCallback extends Pick<getAllParameterTypesOfFunction<'downloadFile'>, 'success' | 'fail' | 'complete'> {
}
declare type downloadFileOptionsTypes = Parameters<typeof downloadFile>[0];
declare type writeFileOptionType = Pick<WriteFileOption, 'data' | 'encoding' | 'filePath'>;
declare type withDownloadLocationTypeCallBack<T extends downloadFileOptions['downloadLocation'] = undefined> = T extends undefined | null ? downloadFileCallback : T extends 'cache' ? SaveFileOptionCallback : WriteFileCallback;
declare type getCallParameters<T extends downloadFileOptions['downloadLocation'] = undefined> = T extends undefined | null ? downloadFileOptionsTypes : T extends 'userFile' ? writeFileOptionType : downloadFileOptionsTypes;
export declare class DownloadFile<C = downloadFileCallback, K extends downloadFileOptions['downloadLocation'] = downloadFileOptions['downloadLocation']> extends Callback<C> {
    private ops?;
    constructor();
    setDownloadLocation<T extends downloadFileOptions['downloadLocation'] = downloadFileOptions['downloadLocation']>(type: T): Omit<DownloadFile<withDownloadLocationTypeCallBack<T>, T>, 'setCallback'>;
    private cacheDownload;
    private writeFile;
    down(params: getCallParameters<K>): void;
}
export {};
