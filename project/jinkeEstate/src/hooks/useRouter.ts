/*
 * @Author: 邱狮杰
 * @Date: 2022-05-20 11:10:39
 * @LastEditTime: 2022-05-21 00:06:13
 * @Description: 
 * @FilePath: /repo/project/jinkeEstate/src/hooks/useRouter.ts
 */

import { useNavigate } from 'react-router-dom'


export const RouterName = {
    "/": '/',
    "lottery": "/lottery",
    "canvas": "/canvas"
}

export function useRouter() {
    const nav = useNavigate()

    function go(key: keyof typeof RouterName) {
        nav(RouterName[key], {
            replace: true
        })
    }

    return { go }

}
