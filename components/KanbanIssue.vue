<template>
  <n-card hoverable class="cursor-pointer" size="small">
    {{ summary }}
  </n-card>
</template>

<script setup lang="ts">
defineProps<{ issueId: number; summary: string; }>()
</script>
