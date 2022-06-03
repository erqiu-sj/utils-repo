/*
 * @Author: 邱狮杰
 * @Date: 2022-05-11 23:12:13
 * @LastEditTime: 2022-06-03 20:46:48
 * @Description: 
 * @FilePath: /repo/template/vue/src/main.ts
 */
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { router } from './router/index'
import App from './app.vue'

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.mount('#app')
