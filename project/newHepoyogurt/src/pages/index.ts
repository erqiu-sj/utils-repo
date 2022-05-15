import { lazy } from 'react'

const Home = lazy(() => import('~/pages/home/index'))

const LuckDraw = lazy(() => import('~/pages/luckDraw/index'))

export { LuckDraw, Home }
