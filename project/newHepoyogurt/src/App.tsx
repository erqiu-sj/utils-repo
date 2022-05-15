import './index.css'
import { Suspense } from 'react'
import { RouterName } from '~/hooks'
import { Routes, Route } from 'react-router-dom'
import { Home, LuckDraw } from '~/pages/'
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
