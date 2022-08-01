/*
 * @Author: 邱狮杰
 * @Date: 2022-08-01 14:33:11
 * @LastEditTime: 2022-08-01 14:48:56
 * @Description: 
 * @FilePath: /repo/packages/taro/src/hooks/useAudio.ts
 */
import { createInnerAudioContext, InnerAudioContext } from "@tarojs/taro";
import { useState } from 'react';

export function useAudio() {

    const [audioInstance, setAudioInstance] = useState(createInnerAudioContext())

    function audioInstanceToUpdate(conf: Partial<InnerAudioContext>) {
        const s = createInnerAudioContext()
        for (const key in conf) s[key] = conf[key]
        setAudioInstance(s)
    }

    return { audioInstance, audioInstanceToUpdate }

}