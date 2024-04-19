<template>
  <n-card class="cursor-pointer" hoverable size="small">
    <template #header>
      <n-thing :title="name" description="3 days ago">
        <template #avatar>
          <img :src="icon ?? '/images/project-icon.svg'" width="24" alt="project_icon">
        </template>

        <template #description>
          <n-text depth="3">
            <n-time
              type="relative"
              :time="new Date(updatedAt)"
            />
          </n-text>
        </template>
      </n-thing>
    </template>
  </n-card>
</template>

<script setup lang="ts">
defineProps<{ name: string; icon: string | null; updatedAt: string | Date }>()
</script>
