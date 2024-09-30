<template>
  <div>
    <h1>Post: {{ pageId }}</h1>
  </div>
</template>

<script setup lang="ts">
const { params } = useRoute()
const pageId = params.id
</script>
