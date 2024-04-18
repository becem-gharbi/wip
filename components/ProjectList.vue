<template>
  <n-page-header title="All Projects">
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

    <n-scrollbar x-scrollable>
      <div class="flex gap-4 pb-4">
        <nuxt-link
          v-for="project of projects"
          :key="project.id"
          :to="`/projects/${project.id}`"
        >
          <project-card :name="project.name" :updated-at="project.updatedAt" />
        </nuxt-link>
      </div>
    </n-scrollbar>
  </n-page-header>
</template>

<script setup lang="ts">
const projects = await useProject().findMany()

async function createProject () {
  const project = await useProject().create()
  return navigateTo(`/projects/${project.id}`)
}
</script>
