<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'

import type { PostResponse } from './BlogPage.vue'

const route = useRoute()
const id = route.params.id
const post = ref<PostResponse>()

const fetchDate = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  post.value = await response.json()
}

onMounted(fetchDate)
</script>

<template>
  <div>
    <h1 class="title">{{ post?.title }}</h1>
    <div class="dtl">
      {{ post?.body }}
    </div>
  </div>
</template>

<style scoped>
.title {
  margin: 12px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}

.dtl {
  line-height: 1.5;
}
</style>
