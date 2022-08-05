/*
 * @Author: 邱狮杰
 * @Date: 2022-08-01 17:15:33
 * @LastEditTime: 2022-08-05 22:01:21
 * @Description: 
 * @FilePath: /repo/packages/taro/src/hooks/useAudio.ts
 */

import { createInnerAudioContext, InnerAudioContext } from "@tarojs/taro";
import { useRef } from 'react';

export function useAudio() {
    // 每次更新保存 audio 实例
    const audioInstanceRef = useRef<InnerAudioContext>()

    // 每次页面render都会创建一个新的 audio context 
    // 每次的创建不可用useState和useRef
    // 会出现实例调用失灵的情况
    const audioInstance = createInnerAudioContext()

    function audioInstanceToUpdate(conf: Partial<InnerAudioContext>) {
        /**
         *  每次修改audio配置时都更新一次audio实例的引用,保持一个页面只存在一个audio引用
         */
        for (const key in conf) audioInstance[key] = conf[key]
        audioInstanceRef.current = audioInstance
    }

    return { audioInstanceToUpdate, audioInstanceRef }

}