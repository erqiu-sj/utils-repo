/*
 * @Author: 邱狮杰
 * @Date: 2022-05-15 11:03:13
 * @LastEditTime: 2022-05-18 09:54:13
 * @Description: 
 * @FilePath: /repo/project/newHepoyogurt/src/pages/index.ts
 */
import { lazy } from 'react'
import { SpringFrame } from './springFrame/index'

const Home = lazy(() => import('~/pages/home/index'))

const LuckDraw = lazy(() => import('~/pages/luckDraw/index'))

export { LuckDraw, Home, SpringFrame }
