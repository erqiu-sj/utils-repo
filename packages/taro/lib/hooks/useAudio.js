"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAudio = void 0;
/*
 * @Author: 邱狮杰
 * @Date: 2022-08-01 14:33:11
 * @LastEditTime: 2022-08-01 14:48:56
 * @Description:
 * @FilePath: /repo/packages/taro/src/hooks/useAudio.ts
 */
const taro_1 = require("@tarojs/taro");
const react_1 = require("react");
function useAudio() {
    const [audioInstance, setAudioInstance] = (0, react_1.useState)((0, taro_1.createInnerAudioContext)());
    function audioInstanceToUpdate(conf) {
        const s = (0, taro_1.createInnerAudioContext)();
        for (const key in conf)
            s[key] = conf[key];
        setAudioInstance(s);
    }
    return { audioInstance, audioInstanceToUpdate };
}
exports.useAudio = useAudio;
