<!--
 * @Author: 邱狮杰
 * @Date: 2022-09-17 13:49:30
 * @LastEditTime: 2022-09-17 14:28:16
 * @Description: 
 * @FilePath: /repo/packages/imageTransition/src/ImgWrapper.vue
-->
<script lang="ts">
export default {
  name: 'ImgWrapper',
}
</script>

<script lang="ts" setup>
import { ImageTransitionAnimationOptions } from './types'
import { useAttrs, defineProps } from 'vue'
const props = useAttrs() as unknown as ImageTransitionAnimationOptions & HTMLElement & HTMLImageElement
</script>

<template>
  <div class="mxnet_img_wrapper">
    <img :src="props.src" alt="" class="mxnet_img_wrapper_child" :class="props.classNames" v-imgTs="props" />
  </div>
</template>

<style lang="scss" scoped>
.mxnet_img_wrapper {
  position: relative;
  .mxnet_img_wrapper_child {
    position: absolute;
    height: 100%;
    width: 100%;
  }
}
</style>
