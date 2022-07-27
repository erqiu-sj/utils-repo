/*
 * @Author: 邱狮杰
 * @Date: 2022-07-23 13:40:09
 * @LastEditTime: 2022-07-23 13:44:53
 * @Description: previewImage
 * @FilePath: /repo/packages/weChatPublicAccountHelper/src/api/previewImage.ts
 */


import { ApiImplementation } from "../common/apiImplementation";

export class PreviewImage extends ApiImplementation<previewImageConfig> {
    constructor() {
        super()
        this.callName('previewImage')
    }
}