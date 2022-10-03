/*
 * @Author: 邱狮杰
 * @Date: 2022-08-01 17:15:33
 * @LastEditTime: 2022-10-03 12:25:08
 * @Description:
 * @FilePath: /repo/packages/taro/src/hooks/useAudio.ts
 */

import { ReactInstance, TaroInstance } from '../utils/importTaro'

interface onErrorDetail extends TaroGeneral.CallbackResult {
  /** 错误码 */
  errCode: number
  /** 错误信息 */
  errMsg: string
}

/** InnerAudioContext 实例，可通过 [Taro.createInnerAudioContext](./createInnerAudioContext) 接口获取实例。
 *
 * **支持格式**
 *
 * | 格式 | iOS  | Android |
 * | ---- | ---- | ------- |
 * | flac | x    | √       |
 * | m4a  | √    | √       |
 * | ogg  | x    | √       |
 * | ape  | x    | √       |
 * | amr  | x    | √       |
 * | wma  | x    | √       |
 * | wav  | √    | √       |
 * | mp3  | √    | √       |
 * | mp4  | x    | √       |
 * | aac  | √    | √       |
 * | aiff | √    | x       |
 * | caf  | √    | x       |
 * @example
 * ```tsx
 * const innerAudioContext = Taro.createInnerAudioContext()
 * innerAudioContext.autoplay = true
 * innerAudioContext.src = 'https://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46'
 * innerAudioContext.onPlay(() => {
 *   console.log('开始播放')
 * })
 * innerAudioContext.onError((res) => {
 *   console.log(res.errMsg)
 *   console.log(res.errCode)
 * })
 * ```
 * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.html
 */
interface InnerAudioContext {
  /** 音频资源的地址，用于直接播放。 */
  src: string
  /** 开始播放的位置（单位：s）
   * @default 0
   */
  startTime: number
  /** 是否自动开始播放
   * @default false
   */
  autoplay: boolean
  /** 是否循环播放
   * @default false
   */
  loop: boolean
  /** 是否遵循系统静音开关。当此参数为 `false` 时，即使用户打开了静音开关，也能继续发出声音。从 2.3.0 版本开始此参数不生效，使用 [Taro.setInnerAudioOption](/docs/apis/media/audio/setInnerAudioOption) 接口统一设置。
   * @default true
   */
  obeyMuteSwitch: boolean
  /** 音量。范围 0~1。
   * @default 1
   */
  volume: number
  /** 播放速度。范围 0.5-2.0。
   * @default 1
   */
  playbackRate: number
  /** 当前音频的长度（单位 s）。只有在当前有合法的 src 时返回
   * @readonly
   */
  duration: number
  /** 当前音频的播放位置（单位 s）。只有在当前有合法的 src 时返回，时间保留小数点后 6 位
   * @readonly
   */
  currentTime: number
  /** 当前是是否暂停或停止状态
   * @readonly
   */
  paused: boolean
  /** 音频缓冲的时间点，仅保证当前播放时间点到此时间点内容已缓冲
   * @readonly
   */
  buffered: number
  /** origin: 发送完整的 referrer; no-referrer: 不发送 */
  referrerPolicy?: 'origin' | 'no-referrer' | string
  /** 播放
   * @supported weapp, h5, rn
   */
  play(): void
  /** 暂停
   * @supported weapp, h5, rn
   */
  pause(): void
  /** 停止
   * @supported weapp, h5, rn
   */
  stop(): void
  /** 跳转到指定位置，单位 s
   * @supported weapp, h5, rn
   */
  seek(position: number): void
  /** 销毁当前实例
   * @supported weapp, h5
   */
  destroy(): void
  /** 音频进入可以播放状态，但不保证后面可以流畅播放
   * @supported weapp, h5, rn
   */
  onCanplay(callback?: () => void): void
  /** 音频播放事件
   * @supported weapp, h5, rn
   */
  onPlay(callback?: () => void): void
  /** 音频暂停事件
   * @supported weapp, h5, rn
   */
  onPause(callback?: () => void): void
  /** 音频停止事件
   * @supported weapp, h5, rn
   */
  onStop(callback?: () => void): void
  /** 音频自然播放结束事件
   * @supported weapp, h5, rn
   */
  onEnded(callback?: () => void): void
  /** 音频播放进度更新事件
   * @supported weapp, h5, rn
   */
  onTimeUpdate(callback?: () => void): void
  /** 音频播放错误事件
   * @supported weapp, h5, rn
   */
  onError(callback?: (res: onErrorDetail) => void): void
  /** 音频加载中事件，当音频因为数据不足，需要停下来加载时会触发
   * @supported weapp, h5, rn
   */
  onWaiting(callback?: () => void): void
  /** 音频进行 seek 操作事件
   * @supported weapp, h5, rn
   */
  onSeeking(callback?: () => void): void
  /** 音频完成 seek 操作事件
   * @supported weapp, h5, rn
   */
  onSeeked(callback?: () => void): void
  /** 取消监听 onCanplay 事件
   * @supported weapp, h5, rn
   */
  offCanplay(callback?: () => void): void
  /** 取消监听 onPlay 事件
   * @supported weapp, h5, rn
   */
  offPlay(callback?: () => void): void
  /** 取消监听 onPause 事件
   * @supported weapp, h5, rn
   */
  offPause(callback?: () => void): void
  /** 取消监听 onStop 事件
   * @supported weapp, h5, rn
   */
  offStop(callback?: () => void): void
  /** 取消监听 onEnded 事件
   * @supported weapp, h5, rn
   */
  offEnded(callback?: () => void): void
  /** 取消监听 onTimeUpdate 事件
   * @supported weapp, h5, rn
   */
  offTimeUpdate(callback?: () => void): void
  /** 取消监听 onError 事件
   * @supported weapp, h5, rn
   */
  offError(callback?: () => void): void
  /** 取消监听 onWaiting 事件
   * @supported weapp, h5, rn
   */
  offWaiting(callback?: () => void): void
  /** 取消监听 onSeeking 事件
   * @supported weapp, h5, rn
   */
  offSeeking(callback?: () => void): void
  /** 取消监听 onSeeked 事件
   * @supported weapp, h5, rn
   */
  offSeeked(callback?: () => void): void
}

export function useAudio() {
  // 每次更新保存 audio 实例
  const audioInstanceRef = ReactInstance?.useRef<InnerAudioContext>()

  // 每次页面render都会创建一个新的 audio context
  // 每次的创建不可用useState和useRef
  // 会出现实例调用失灵的情况
  const audioInstance = TaroInstance?.createInnerAudioContext()

  function audioInstanceToUpdate(conf: Partial<InnerAudioContext>) {
    /**
     *  每次修改audio配置时都更新一次audio实例的引用,保持一个页面只存在一个audio引用
     */
    for (const key in conf) {
      if (audioInstance && key in audioInstance) audioInstance![key] = conf[key]
    }
    if (audioInstanceRef) {
      audioInstanceRef.current = audioInstance
    }
  }

  return { audioInstanceToUpdate, audioInstanceRef }
}
