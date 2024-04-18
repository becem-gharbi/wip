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

    <div class="flex gap-4 flex-wrap">
      <nuxt-link
        v-for="project of projects"
        :key="project.id"
        class="w-full sm:w-auto"
        :to="`/projects/${project.id}`"
      >
        <project-card :name="project.name" :updated-at="project.updatedAt" :icon="project.icon" />
      </nuxt-link>
    </div>
  </n-page-header>
</template>

<script setup lang="ts">
const projects = await useProject().findMany()

async function createProject () {
  const project = await useProject().create()
  return navigateTo(`/projects/${project.id}`)
}
</script>
