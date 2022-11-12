/*
 * @Author: 邱狮杰
 * @Date: 2022-07-17 22:02:27
 * @LastEditTime: 2022-10-25 15:04:56
 * @Description:
 * @FilePath: /repo/packages/weChatPublicAccountHelper/window.d.ts
 */
// 没有结果，允许异步类型
declare type noResultsAllowAsynchrony = void | Promise<void>

declare abstract class CommonCallback<s = unknown, f = unknown, c = unknown> {
  abstract success(cb?: (res?: s) => noResultsAllowAsynchrony): this
  abstract fail(cb?: (res?: f) => noResultsAllowAsynchrony): this
  abstract complete(cb?: (res?: c) => noResultsAllowAsynchrony): this
  abstract done(): noResultsAllowAsynchrony
  abstract cancel(cb?: (res?: unknown) => void): this // 用户点击取消时的回调函数，仅部分有用户取消操作的 api 才会用到。
  abstract trigger(cb?: (res?: unknown) => void): this // 监听 Menu 中的按钮点击时触发的方法，该方法仅支持 Menu 中的相关接口。
  abstract weChatSdkJnjectionTriggerBehavior(): noResultsAllowAsynchrony // 微信sdk注入才会触发行为
  abstract weChatDdkDoesNotInjectTriggerBehavior(): unknown // 微信sdk未注入才会触发行为
}

// 微信api常用回调
type wechatAPICommonCallback<s = unknown, f = unknown, c = unknown> = Pick<CommonCallback<s, f, c>, 'success' | 'fail' | 'complete' | 'cancel' | 'trigger'>

// 分享到朋友和qq
declare interface updateAppMessageShareDataConfig {
  title: string // 分享标题
  desc: string // 分享描述
  link: string // 分享链接，该链接域名或路径必须与当前页面对应的公众号 JS 安全域名一致
  imgUrl: string // 分享图标
}
// 自定义“分享到朋友圈”及“分享到 QQ 空间”按钮的分享内容
declare interface updateTimelineShareDataConfig {
  title: string // 分享标题
  link: string // 分享链接，该链接域名或路径必须与当前页面对应的公众号 JS 安全域名一致
  imgUrl: string // 分享图标
}

namespace chooseImage {
  // 拍照或从手机相册中选图接口
  declare interface chooseImageConfig {
    count: number // 默认9
    sizeType: ('original' | 'compressed')[] // 可以指定是原图还是压缩图，默认二者都有
    sourceType: ('album' | 'camera')[]
  }

  declare interface success {
    localIds: string[]
  }
}

interface previewImageConfig {
  current: string // 当前显示图片的 http 链接
  urls: string[]
}

type config<C = unknown, s = unknown, f = unknown, c = unknown> = Partial<Partial<C> & wechatAPICommonCallback<s, f, c>>

namespace uploadImage {
  declare interface uploadImageConfig {
    localId: string // 需要上传的图片的本地ID，由 chooseImage 接口获得
    isShowProgressTips?: number // 默认为1，显示进度提示
  }
  declare interface success {
    serverId: number
  }
}

namespace downloadImage {
  declare interface downloadImageConfig {
    serverId: string // 需要下载的图片的服务器端ID，由 uploadImage 接口获得
    isShowProgressTips: number // 默认为1，显示进度提示
  }
  declare interface success {
    localId: number // 返回图片下载后的本地ID
  }
}

// 获取本地图片接口
namespace getLocalImgData {
  declare interface getLocalImgDataConfig {
    localId: string
  }
  declare interface success {
    // localData是图片的base64数据，可以用 img 标签显示
    localData: string
  }
}

namespace startSearchBeacons {
  declare interface startSearchBeaconsConfig {
    ticket: string
  }

}
interface Window {
  wx?: {
    updateAppMessageShareData(conf: config<updateAppMessageShareDataConfig>): noResultsAllowAsynchrony
    updateTimelineShareData(conf: config<updateTimelineShareDataConfig>): noResultsAllowAsynchrony
    chooseImage(conf: config<chooseImage.chooseImageConfig, chooseImage.success>): noResultsAllowAsynchronypreviewImage
    previewImage(conf: config<previewImageConfig>): noResultsAllowAsynchrony
    // 备注：上传图片有效期3天，可用微信多媒体接口下载图片到自己的服务器，此处获得的 serverId 即 media_id。
    uploadImage(conf: config<uploadImage.uploadImageConfig, uploadImage.success>): noResultsAllowAsynchrony
    downloadImage(conf: config<downloadImage.downloadImageConfig, downloadImage.success>): noResultsAllowAsynchrony
    getLocalImgData(conf: config<getLocalImgData.getLocalImgDataConfig, getLocalImgData.success>): noResultsAllowAsynchrony
    startSearchBeacons(conf: config<startSearchBeacons.startSearchBeaconsConfig>): noResultsAllowAsynchrony
    stopSearchBeacons(): noResultsAllowAsynchrony
    onSearchBeacons(): noResultsAllowAsynchrony
  }
}
