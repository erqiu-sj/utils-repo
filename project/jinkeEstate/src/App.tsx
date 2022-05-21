/*
 * @Author: 邱狮杰
 * @Date: 2022-05-14 11:41:35
 * @LastEditTime: 2022-05-21 11:58:52
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

  window.wx.ready(function () {
    window.wx.onMenuShareAppMessage({
      title: curStateWithCommonForRedux.commonData.title || 'title',
      link: curStateWithCommonForRedux.commonData.link || 'link',
      imgUrl: curStateWithCommonForRedux.commonData.imgUrl || 'imgUrl',
      // desc: ((!!curStateWithCommonForRedux.commonData.fans?.award1 || !!curStateWithCommonForRedux.commonData.fans?.award2) ? curStateWithCommonForRedux.commonData.desc2 : curStateWithCommonForRedux.commonData.desc) || 'desc',
      desc: curStateWithCommonForRedux.commonData.desc2 || curStateWithCommonForRedux.commonData.desc || 'desc',
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
