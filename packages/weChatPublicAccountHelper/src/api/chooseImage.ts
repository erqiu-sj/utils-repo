/*
 * @Author: 邱狮杰
 * @Date: 2022-07-23 13:35:59
 * @LastEditTime: 2022-08-03 22:09:52
 * @Description: 
 * @FilePath: /repo/packages/weChatPublicAccountHelper/src/api/chooseImage.ts
 */

import { ApiImplementation } from "../common/apiImplementation";

export class ChooseImage extends ApiImplementation<chooseImage.chooseImageConfig, chooseImage.success> {
    constructor() {
        super()
        this.callName('chooseImage')
    }
}
new ChooseImage().readConfiguration