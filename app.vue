<template>
  <ul>
    <template v-for="(item, index) in items" :key="item.id">
      <li v-if="index % 2 == 0">{{ item.message }}</li>
    </template>
  </ul>
</template>

<script setup lang="ts">
const items = reactive([
  { id: 1, message: 'java' },
  { id: 2, message: 'javascript' },
  { id: 3, message: 'c#' },
  { id: 4, message: 'typescript' }
])
</script>

<style scoped></style>
