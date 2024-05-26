<template>
  <n-card
    class="cursor-pointer h-full"
    hoverable
    size="small"
  >
    <template #header>
      <n-thing :title="project.name">
        <template #avatar>
          <img
            :src="project.icon || '/images/project-icon.svg'"
            width="22"
            alt="project"
          >
        </template>

        <template #description>
          <n-text depth="3">
            Updated
            <n-time
              type="relative"
              :time="new Date(project.updatedAt)"
            />
          </n-text>
        </template>

        <template
          v-if="isOwner"
          #header-extra
        >
          <naive-icon name="ph:star" />
        </template>
      </n-thing>
    </template>
  </n-card>
</template>

<script setup lang="ts">
const props = defineProps<{ project: Project }>()

const isOwner = await useProject().isOwner(props.project)
</script>
