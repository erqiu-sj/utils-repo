/*
 * @Author: 邱狮杰
 * @Date: 2022-10-25 09:38:46
 * @LastEditTime: 2022-10-25 09:55:19
 * @Description:
 * @FilePath: /repo/packages/weChatPublicAccountHelper/src/api/uploadImage.ts
 */

import { ApiImplementation } from '../common/apiImplementation'

export class UploadImage extends ApiImplementation<uploadImage.uploadImageConfig, uploadImage.success> {
  constructor() {
    super()
    this.callName('uploadImage')
  }
  override async weChatDdkDoesNotInjectTriggerBehavior(): Promise<uploadImage.success> {
    return {
      serverId: 1,
    }
  }
}
