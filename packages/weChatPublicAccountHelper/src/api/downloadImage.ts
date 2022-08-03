/*
 * @Author: 邱狮杰
 * @Date: 2022-08-03 17:22:42
 * @LastEditTime: 2022-08-03 17:49:22
 * @Description: 
 * @FilePath: /repo/packages/weChatPublicAccountHelper/src/api/downloadImage.ts
 */
import { ApiImplementation } from "../common/apiImplementation";

export class DownloadImage extends ApiImplementation<downloadImage.downloadImageConfig, downloadImage.success> {

    constructor() {
        super()
        this.callName('downloadImage')
    }
    override async weChatDdkDoesNotInjectTriggerBehavior(): Promise<downloadImage.success> {
        return { localId: 1 }
    }

}