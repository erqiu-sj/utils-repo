/*
 * @Author: 邱狮杰
 * @Date: 2022-05-15 13:15:24
 * @LastEditTime: 2022-05-19 10:27:59
 * @Description:
 * @FilePath: /repo/project/newHepoyogurt/src/hooks/useRouter.ts
 */

export const RouterName = {
  index: '/',
  luckDraw: '/luckDraw',
}

import { useNavigate } from 'react-router-dom'

export function useRouter() {
  const goHandler = useNavigate()
  function go(key: keyof typeof RouterName, state?: object) {
    goHandler(RouterName[key], { state, replace: true })
  }

  return {
    go,
  }

}
