<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const id = ref(route.params.id)

console.log('watch外', id.value)

watch(route, () => {
  id.value = route.params.id
  console.log('watch内', id.value)
})
</script>

<template>
  <p>blog page</p>
  <p>blog id = {{ id }}</p>
</template>
