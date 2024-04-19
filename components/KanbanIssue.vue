<template>
  <n-card hoverable class="cursor-pointer" size="small">
    {{ summary }}

    <template #footer>
      <div v-if="labels" class="flex gap-2 flex-wrap">
        <n-tag v-for="label of labels.split(';')" :key="label" :bordered="false" size="small">
          {{ label }}
        </n-tag>
      </div>
    </template>
  </n-card>
</template>

<script setup lang="ts">
defineProps<{ issueId: number; summary: string; labels: string | null; }>()
</script>
