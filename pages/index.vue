<template>
  <n-page-header title="Projects">
    <template #avatar>
      <img
        src="/images/project-icon.svg"
        width="22"
        alt="project"
      >
    </template>

    <template #extra>
      <n-button
        quaternary
        @click="createProject"
      >
        <template #icon>
          <naive-icon name="ph:plus" />
        </template>
        Create
      </n-button>
    </template>

    <project-list />
  </n-page-header>
</template>

<script setup lang="ts">
async function createProject() {
  const project = await useProject().create()
  return navigateTo(`/projects/${project.id}`)
}
</script>
