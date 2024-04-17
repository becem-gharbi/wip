<template>
  <n-page-header title="Project name">
    <template #avatar>
      <naive-icon name="ph:stack" size="24" />
    </template>

    <template #extra>
      <n-button text @click="deleteProject">
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
const dialog = useDialog()

function deleteProject () {
  dialog.warning({
    title: 'Delete project',
    content: 'Do you want to permanently delete your project?',
    negativeText: 'No',
    positiveText: 'Yes',
    onPositiveClick: () => {
      return navigateTo('/')
    }
  })
}
</script>
