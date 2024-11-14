<script setup lang="ts">
import { onUnmounted } from 'vue'

import BaseButton from '@/components/BaseButton.vue'

onUnmounted(() => {
  console.log('onUnmounted')
})

const emit = defineEmits<{
  'add-click': [void]
}>()
</script>

<template>
  <BaseButton color="blue" @on-click="emit('add-click')">追加</BaseButton>
</template>
