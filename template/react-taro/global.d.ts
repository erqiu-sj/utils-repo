/*
 * @Author: 邱狮杰
 * @Date: 2022-05-27 12:35:06
 * @LastEditTime: 2022-05-28 10:41:58
 * @Description: 
 * @FilePath: /myApp/global.d.ts
 */
/// <reference types="@tarojs/taro" />


declare module '*.png';
declare module '*.gif';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.styl';

declare namespace NodeJS {
  interface ProcessEnv {
    TARO_ENV: 'weapp' | 'swan' | 'alipay' | 'h5' | 'rn' | 'tt' | 'quickapp' | 'qq' | 'jd'
  }
}

interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function
}