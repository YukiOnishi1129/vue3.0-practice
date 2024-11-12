<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue'

const emit = defineEmits<{
  'show-click': [void]
}>()
</script>

<template>
  <BaseButton color="green" @on-click="emit('show-click')">編</BaseButton>
</template>
