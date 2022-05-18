/*
 * @Author: 邱狮杰
 * @Date: 2022-05-18 09:56:12
 * @LastEditTime: 2022-05-18 09:59:35
 * @Description: open popup
 * @FilePath: /repo/project/newHepoyogurt/src/hooks/usePopup.ts
 */

import { useSpringFrame } from "./useSpringFrame";

export function usePopup() {
    const { dispatchWithSpringFrame } = useSpringFrame()

    function openRule() {
        dispatchWithSpringFrame.setPopStatusBox({ popStatusBox: { id: 2 } })
        dispatchWithSpringFrame.setBulletFrameSwitchStatus({ open: true })
    }

    function openFillinUserInfo() {
        dispatchWithSpringFrame.setPopStatusBox({ popStatusBox: { id: 1 } })
        dispatchWithSpringFrame.setBulletFrameSwitchStatus({ open: true })
    }

    function openQrcode() {
        dispatchWithSpringFrame.setPopStatusBox({ popStatusBox: { id: 1 } })
        dispatchWithSpringFrame.setBulletFrameSwitchStatus({ open: true })
    }


    return { openRule, openQrcode, openFillinUserInfo }

}
