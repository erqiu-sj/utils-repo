/*
 * @Author: 邱狮杰
 * @Date: 2022-10-25 15:05:29
 * @LastEditTime: 2022-10-25 15:05:30
 * @Description: 
 * @FilePath: /repo/packages/weChatPublicAccountHelper/src/api/startSearchBeacons.ts
 */
import { ApiImplementation } from '../common/apiImplementation'

export class StartSearchBeacons extends ApiImplementation<startSearchBeacons.startSearchBeaconsConfig> {
    constructor() {
        super()
        this.callName('startSearchBeacons')
    }
}

