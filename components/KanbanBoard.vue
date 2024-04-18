<template>
  <div class="flex gap-8 mb-4 overflow-auto">
    <kanban-column :column="0" :project-id="projectId" />
    <kanban-column :column="1" :project-id="projectId" />
    <kanban-column :column="2" :project-id="projectId" />
    <kanban-column :column="3" :project-id="projectId" />
  </div>
</template>

<script setup lang="ts">
defineProps<{ projectId: string }>()
</script>
