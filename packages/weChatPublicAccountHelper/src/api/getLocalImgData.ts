/*
 * @Author: 邱狮杰
 * @Date: 2022-08-03 17:31:11
 * @LastEditTime: 2022-08-03 17:47:58
 * @Description: 
 * @FilePath: /repo/packages/weChatPublicAccountHelper/src/api/getLocalImgData.ts
 */

import { ApiImplementation } from "../common/apiImplementation";
import { basicConfiguration } from '../common/basicConfiguration';


export class GetLocalImgData extends ApiImplementation<getLocalImgData.getLocalImgDataConfig, getLocalImgData.success> {
    constructor() {
        super()
        this.callName('getLocalImgData')
    }
    override async weChatDdkDoesNotInjectTriggerBehavior(): Promise<getLocalImgData.success> {
        return {
            localData: basicConfiguration?.baseSrc || ''
        }
    }
}