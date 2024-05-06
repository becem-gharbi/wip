<template>
  <n-card hoverable class="cursor-pointer" size="small">
    {{ issue.summary }}

    <template #footer>
      <div v-if="issue.labels" class="flex gap-2 flex-wrap">
        <n-tag v-for="label of issue.labels.split(';')" :key="label" :bordered="false" size="small">
          {{ label }}
        </n-tag>
      </div>
    </template>
  </n-card>
</template>

<script setup lang="ts">
defineProps<{ issue: Issue; }>()
</script>
