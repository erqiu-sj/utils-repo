<!--
 * @Author: 邱狮杰
 * @Date: 2022-05-11 23:12:13
 * @LastEditTime: 2022-06-11 15:22:55
 * @Description: 
 * @FilePath: /vue/src/app.vue
-->

<script lang="ts" setup>
import { http } from './service/index'
import { onMounted } from 'vue'
onMounted(async () => {
  const result = await http({
    url: '/hello',
    returnOnPromiseError: { update: 1 },
    preventUnexpectedTriggers: true,
  })
})
</script>
<template>
  <button>hello</button>
</template>
<style lang="scss" scoped></style>
