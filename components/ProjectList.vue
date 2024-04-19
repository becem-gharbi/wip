<template>
  <div
    v-if="projects.length"
    class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4"
  >
    <nuxt-link
      v-for="project of projects"
      :key="project.id"
      class="w-full sm:w-auto"
      :to="`/projects/${project.id}`"
    >
      <project-card :project="project" />
    </nuxt-link>
  </div>

  <n-empty v-else description="No projects are found" />
</template>

<script setup lang="ts">
defineProps<{ projects: Project[] }>()
</script>
