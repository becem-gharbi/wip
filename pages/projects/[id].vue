<template>
  <n-page-header v-if="project">
    <template #title>
      {{ project.name }}
    </template>

    <template #avatar>
      <img :src="project.icon || '/images/project-icon.svg'" width="24" alt="project_icon">
    </template>

    <template #extra>
      <div class="flex gap-4">
        <n-button text @click="showTeamModal = true">
          <template #icon>
            <naive-icon name="ph:users" />
          </template>
          Team
        </n-button>

        <n-button text @click="showProjectModal = true">
          <template #icon>
            <naive-icon name="ph:plus-circle" />
          </template>
          More
        </n-button>
      </div>
    </template>

    <kanban-board :project-id="project.id" />
    <project-modal v-model:show="showProjectModal" :project-id="project.id" />
    <team-modal v-if="project.team" v-model:show="showTeamModal" :team-id="project.team.id" />
    <chat-button v-if="project.team" :team-id="project.team.id" />
  </n-page-header>
</template>

<script setup lang="ts">
const showProjectModal = ref(false)
const showTeamModal = ref(false)

const projectId = useRoute().params.id as string

const project = await useProject().findUnique(projectId)
  .catch(async () => {
    await navigateTo('/')
  })
</script>
