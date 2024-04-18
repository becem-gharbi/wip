<template>
  <n-card class="cursor-pointer min-w-72" hoverable size="small">
    <template #header>
      <n-thing :title="name" description="3 days ago">
        <template #avatar>
          <n-avatar>
            <naive-icon name="ph:stack" />
          </n-avatar>
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

    <n-progress
      type="line"
      :percentage="60"
      indicator-placement="outside"
      :height="6"
    />
  </n-card>
</template>

<script setup lang="ts">
defineProps<{ name: string; updatedAt: string | Date }>()
</script>
