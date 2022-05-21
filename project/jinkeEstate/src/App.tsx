/*
 * @Author: 邱狮杰
 * @Date: 2022-05-14 11:41:35
 * @LastEditTime: 2022-05-20 21:03:41
 * @Description:
 * @FilePath: /repo/project/jinkeEstate/src/App.tsx
 */

import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouterName, useCommon } from '~/hooks';
import { useService } from '~/hooks/useService';
import Canvas from './pages/canvas/index';
import Home from './pages/home/index';
import Prize from './pages/prize/index';

/**
 * @description main
 * @return { Element }
 */
function App() {
  const { curStateWithCommonForRedux } = useCommon()
  const { init, news, openSharingPage } = useService()

  useEffect(() => {
    init()
    news()
  }, [])

  window.wx.onMenuShareAppMessage({
    title: curStateWithCommonForRedux.commonData.title || '金科24年 点亮重庆',
    link: curStateWithCommonForRedux.commonData.link || 'https://act.yoois.com/zt/jkmap/index.php?i=3&logout=1',
    imgUrl: curStateWithCommonForRedux.commonData.imgUrl || 'https://act.yoois.com/zt/jkmap/logo.jpg',
    desc: curStateWithCommonForRedux.commonData.desc || '重庆的美好见证者，快来跟我一起点亮重庆版图',
    success() {
      openSharingPage()
    }
  })

  window.wx.onMenuShareTimeline({
    title: curStateWithCommonForRedux.commonData.title || 'title',
    link: curStateWithCommonForRedux.commonData.link || 'link',
    imgUrl: curStateWithCommonForRedux.commonData.imgUrl || 'imgUrl',
    success() {
      openSharingPage()
    }
  })

  return (
    <>
      <Routes>
        <Route element={<Home />} path={RouterName['/']} />
        <Route element={<Prize />} path={RouterName.lottery} />
        <Route element={<Canvas />} path={RouterName.canvas} />
      </Routes>
    </>
  );
}

export default App;
