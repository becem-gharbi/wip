<template>
  <n-card class="cursor-pointer" hoverable size="small">
    <template #header>
      <n-thing :title="project.name" description="3 days ago">
        <template #avatar>
          <img
            :src="project.icon || '/images/project-icon.svg'"
            width="24"
            alt="project_icon"
          >
        </template>

        <template #description>
          <n-text depth="3">
            <n-time type="relative" :time="new Date(project.updatedAt)" />
          </n-text>
        </template>

        <template v-if="isOwner" #header-extra>
          <naive-icon name="ph:star" />
        </template>
      </n-thing>
    </template>
  </n-card>
</template>

<script setup lang="ts">
const props = defineProps<{ project: ProjectExtended }>()

const isOwner = await useProject().isOwner(props.project)
</script>
