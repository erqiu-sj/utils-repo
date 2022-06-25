/*
 * @Author: 邱狮杰
 * @Date: 2022-06-25 11:06:44
 * @LastEditTime: 2022-06-25 11:08:53
 * @Description: 
 * @FilePath: /repo/packages/taro/src/utils/getAppMetadata.ts
 */

import { getAccountInfoSync, login } from '@tarojs/taro'

export async function getWxLoginCode(): Promise<string> {
    return (await login()).code
}

export async function getAppId() {
    return getAccountInfoSync().miniProgram.appId
}
