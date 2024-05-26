<template>
  <n-scrollbar x-scrollable>
    <div class="flex gap-6 mb-4">
      <kanban-column
        :column="0"
        :project-id="projectId"
      />
      <kanban-column
        :column="1"
        :project-id="projectId"
      />
      <kanban-column
        :column="2"
        :project-id="projectId"
      />
      <kanban-column
        :column="3"
        :project-id="projectId"
      />
    </div>
  </n-scrollbar>
</template>

<script setup lang="ts">
defineProps<{ projectId: Project['id'] }>()
</script>
