<template>
  <n-page-header title="Projects">
    <template #avatar>
      <naive-icon name="ph:stack" size="24" />
    </template>

    <template #extra>
      <n-button text @click="createProject">
        <template #icon>
          <naive-icon name="ph:plus" />
        </template>
        Create
      </n-button>
    </template>

    <project-list :projects="projects" />
  </n-page-header>
</template>

<script setup lang="ts">
const projects = await useProject().findMany()

async function createProject () {
  const project = await useProject().create()
  return navigateTo(`/projects/${project.id}`)
}
</script>
