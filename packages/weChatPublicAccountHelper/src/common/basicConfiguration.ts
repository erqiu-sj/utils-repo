/*
 * @Author: 邱狮杰
 * @Date: 2022-08-03 17:33:54
 * @LastEditTime: 2022-08-03 17:41:53
 * @Description: 
 * @FilePath: /repo/packages/weChatPublicAccountHelper/src/common/basicConfiguration.ts
 */

type basicConfigurationTypes = {
    baseSrc: string
}

export let basicConfiguration: Partial<basicConfigurationTypes> = {}

// 用户基本配置 
// 例如配置 baseSrc 为一张配置图片 那么在未注入wechat sdk 的情况下调用 new GetLocalImgData().success(res=>{ res?.localData })
// 这里的 res?.localData 将是  baseSrc base64 后的内容,用于模拟注入wechat sdk后的调用行为

export class BasicConfiguration {
    constructor(conf: Partial<basicConfigurationTypes>) {
        basicConfiguration = conf
    }
    getConfig() {
        return basicConfiguration
    }
}