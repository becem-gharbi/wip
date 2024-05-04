<template>
  <n-page-header v-if="project">
    <template #title>
      {{ project.name }}
    </template>

    <template #avatar>
      <img :src="project.icon || '/images/project-icon.svg'" width="22" alt="project">
    </template>

    <n-tabs type="line" animated>
      <n-tab-pane name="board" tab="Board">
        <template #tab>
          <naive-icon name="ph:cards" class="mr-1" />
          Board
        </template>
        <kanban-board :project-id="project.id" class="mt-2" />
      </n-tab-pane>

      <n-tab-pane v-if="project.team" name="details" tab="Details">
        <template #tab>
          <naive-icon name="ph:info" class="mr-1" />
          Details
        </template>
        <project-details :project-id="project.id" class="mt-2" />
      </n-tab-pane>

      <n-tab-pane v-if="project.team" name="team" tab="Team">
        <template #tab>
          <naive-icon name="ph:users" class="mr-1" />
          Team
        </template>
        <team :team-id="project.team.id" class="mt-2" />
      </n-tab-pane>
    </n-tabs>
  </n-page-header>
</template>

<script setup lang="ts">
const { id: projectId } = useRoute().params as {id:string}

const project = await useProject().findUnique(projectId)
  .catch(async () => {
    await navigateTo('/home')
  })
</script>
