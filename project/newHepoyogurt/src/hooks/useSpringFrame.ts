/*
 * @Author: 邱狮杰
 * @Date: 2022-05-17 10:35:54
 * @LastEditTime: 2022-05-17 10:38:44
 * @Description: 
 * @FilePath: /repo/project/newHepoyogurt/src/hooks/useSpringFrame.ts
 */
import { bindActionCreators } from '@zealforchange/conciseredux';
import { useDispatch, useSelector } from 'react-redux';
import { springFrame, springFrameStateTypes } from '~/reducer/springFrame';

export function useSpringFrame() {

    const dispatchWithSpringFrame = bindActionCreators(
        springFrame.getCallBackAll(), useDispatch())

    const curStateWithSpringFrameForRedux = springFrame.getCurState()

    const curStateWithSpringFrame = useSelector((state: { springFrame: springFrameStateTypes }) => {
        return state.springFrame
    })

    return { dispatchWithSpringFrame, curStateWithSpringFrame, curStateWithSpringFrameForRedux }

}