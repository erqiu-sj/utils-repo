/*
 * @Author: 邱狮杰
 * @Date: 2022-07-23 13:29:19
 * @LastEditTime: 2022-07-23 13:30:21
 * @Description: 
 * @FilePath: /repo/packages/weChatPublicAccountHelper/src/api/updateTimelineShareData.ts
 */

import { ApiImplementation } from "../common/apiImplementation";


export class UpdateTimelineShareDataConfig extends ApiImplementation<updateTimelineShareDataConfig> {
    constructor() {
        super()
        this.callName('updateTimelineShareData')
    }
}