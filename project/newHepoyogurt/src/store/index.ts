/*
 * @Author: 邱狮杰
 * @Date: 2022-05-15 14:04:12
 * @LastEditTime: 2022-05-24 14:08:09
 * @Description:
 * @FilePath: /repo/project/newHepoyogurt/src/store/index.ts
 */
import { combineReducers, createStore } from '@zealforchange/conciseredux';
import { common } from '~/reducer/common';
import { lottery } from '~/reducer/lottery';
import { springFrame } from '~/reducer/springFrame';

const store = createStore(combineReducers({
    lottery: lottery.finish(), springFrame: springFrame.finish(),
    common: common.finish(),
}))

export { store };
