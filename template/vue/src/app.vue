<!--
 * @Author: 邱狮杰
 * @Date: 2022-05-11 23:12:13
 * @LastEditTime: 2022-05-28 21:13:15
 * @Description: 
 * @FilePath: /repo/template/vue/src/app.vue
-->
<script lang="ts" setup>
import { http } from './service'
import { onMounted } from 'vue'

onMounted(() => {
  http()({
    url: '/weaknet/hello', data: {
      daata: 1
    }
  }).then(r => {
    console.log(r);
  })
  http()({
    url: '/weaknet/hello', data: {
      daata: 1
    }
  }).then(r => {
    console.log(r);
  })
})
</script>
<template>
  <button>cancel</button>
</template>
<style lang="scss" scoped>
</style>
