<script lang="ts" setup>
import { ref, onMounted, h } from 'vue'
import H from './h.vue'
const S = ref(h(H))
onMounted(() => {
  console.log(h(H))
})
</script>
<template>
  <H />
  <component :is="S" />
  <h1>hello!</h1>
</template>
<style lang="scss" scoped></style>
