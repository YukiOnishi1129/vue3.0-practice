<script setup lang="ts">
type Props = {
  color?: string
}

const { color } = defineProps<Props>()

const aaa = () => {}
</script>

<template>
  <button class="btn" :class="color" @click="aaa"><slot /></button>
</template>

<style scoped>
.btn {
  padding: 8px;
  font-size: 14px;
  color: #fff;
  text-align: center;
  border-radius: 6px;
}

.blur {
  background-color: #03a9f4;
}

.green {
  background-color: #00c853;
}

.pink {
  background-color: #ff4081;
}
</style>
