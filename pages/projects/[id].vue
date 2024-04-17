<template>
  <n-page-header title="Project name">
    <template #avatar>
      <naive-icon name="ph:stack" size="24" />
    </template>

    <template #extra>
      <n-button text @click="showProjectModal = true">
        <template #icon>
          <naive-icon name="ph:pen" />
        </template>
        Edit
      </n-button>
    </template>

    <kanban-board />
    <issue-modal />
    <project-modal v-model:show="showProjectModal" />
  </n-page-header>
</template>

<script setup lang="ts">
const showProjectModal = ref(false)
</script>
