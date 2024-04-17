<template>
  <div @dblclick="navigateTo({ query: { selectedIssue: '1' } })">
    <n-card hoverable class="cursor-pointer" size="small">
      {{ summary }}

      <template #header>
        <n-avatar size="small">
          <naive-icon name="ph:target" />
        </n-avatar>
      </template>
    </n-card>
  </div>
</template>

<script setup lang="ts">
defineProps<{ summary: string }>()
</script>
