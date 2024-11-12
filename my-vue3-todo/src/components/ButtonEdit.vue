<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue'

const emit = defineEmits<{
  'edit-click': [void]
}>()
</script>

<template>
  <BaseButton color="green" @on-click="emit('edit-click')">変更</BaseButton>
</template>
