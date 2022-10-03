/*
 * @Author: 邱狮杰
 * @Date: 2022-06-25 11:06:44
 * @LastEditTime: 2022-10-03 10:57:30
 * @Description:
 * @FilePath: /repo/packages/taro/src/utils/getAppMetadata.ts
 */

import { getTaroApi } from './importTaro'

export async function getWxLoginCode(): Promise<string> {
  return (await getTaroApi<string>(async res => {
    return (await res.login()).code
  })) as unknown as Promise<string>
}

export async function getAppId() {
  return await getTaroApi<string>(res => {
    return res.getAccountInfoSync().miniProgram.appId
  })
}
