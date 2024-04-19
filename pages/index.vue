<template>
  <div>
    <n-page-header title="My projects">
      <template #extra>
        <n-button text @click="createProject">
          <template #icon>
            <naive-icon name="ph:plus" />
          </template>
          Create
        </n-button>
      </template>

      <project-list :projects="projectsOwner" />
    </n-page-header>

    <br>
    <br>

    <n-page-header title="Other projects">
      <project-list :projects="projectsViewer" />
    </n-page-header>
  </div>
</template>

<script setup lang="ts">
const { user } = useAuthSession()
const projects = await useProject().findMany()

const projectsOwner = computed(() => projects.value.filter(p => p.ownerId === user.value!.id))
const projectsViewer = computed(() => projects.value.filter(p => p.ownerId !== user.value!.id))

async function createProject () {
  const project = await useProject().create()
  return navigateTo(`/projects/${project.id}`)
}
</script>
