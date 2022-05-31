/*
 * @Author: 邱狮杰
 * @Date: 2022-05-31 21:27:16
 * @LastEditTime: 2022-05-31 21:27:17
 * @Description: 
 * @FilePath: /repo/template/taro-vue/src/service/index.ts
 */
import { Service } from '@mx/service'

const http = new Service({}).injectionInterceptorPlugin([]).defaultInterceptor().getAxios()

export { http }
