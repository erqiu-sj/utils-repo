/*
 * @Author: 邱狮杰
 * @Date: 2022-07-17 22:12:30
 * @LastEditTime: 2022-07-23 13:25:17
 * @Description:  自定义“分享给朋友”及“分享到QQ”按钮的分享内容（1.4.0）
 * @FilePath: /repo/packages/weChatPublicAccountHelper/src/api/updateAppMessageShareData.ts
 */

import { ApiImplementation } from '../common/apiImplementation'

export class UpdateAppMessageShareData extends ApiImplementation<updateAppMessageShareDataConfig> {

  constructor() {
    super()
    this.callName('updateAppMessageShareData')
  }

}