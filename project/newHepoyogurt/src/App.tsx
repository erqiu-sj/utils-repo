/*
 * @Author: 邱狮杰
 * @Date: 2022-05-15 10:57:03
 * @LastEditTime: 2022-05-16 11:39:38
 * @Description: 
 * @FilePath: /repo/project/newHepoyogurt/src/App.tsx
 */
import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { RouterName } from '~/hooks'
import { Home, LuckDraw } from '~/pages/'
import './index.css'

function App() {
  return (
    <>
      <Routes>
        <Route path={RouterName.index} element={
          <Suspense fallback={<>loading...</>}>
            <Home />
          </Suspense>
        } />
        <Route path={RouterName.luckDraw} element={
          <Suspense fallback={<>loading...</>}>
            <LuckDraw />
          </Suspense>
        } />
      </Routes>
    </>
  )
}

export default App
