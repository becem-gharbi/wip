<template>
  <n-card hoverable class="cursor-pointer">
    {{ summary }}
  </n-card>
</template>

<script setup lang="ts">
defineProps<{ summary: string }>()
</script>
