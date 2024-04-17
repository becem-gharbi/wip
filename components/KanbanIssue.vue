<template>
  <div @dblclick="navigateTo({ query: { selectedIssue: '1' } })">
    <n-card hoverable class="cursor-pointer">
      {{ summary }}
    </n-card>
  </div>
</template>

<script setup lang="ts">
defineProps<{ summary: string }>()
</script>
