<template>
  <n-page-header title="Project name">
    <template #avatar>
      <naive-icon name="ph:stack" size="24" />
    </template>

    <template #extra>
      <n-button text>
        <template #icon>
          <naive-icon name="ph:trash" />
        </template>
        Delete
      </n-button>
    </template>

    <kanban-board />
    <issue-modal />
  </n-page-header>
</template>

<script setup lang="ts">
</script>
