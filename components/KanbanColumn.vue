<template>
  <n-card class="h-96 min-w-72" segmented size="small" content-class="overflow-auto">
    <template #header>
      <div class="flex gap-2 items-center">
        <naive-icon :name="icon" size="20" />
        {{ title }}
      </div>
    </template>

    <template #header-extra>
      <n-button size="small" text @click="createIssue">
        <template #icon>
          <naive-icon name="ph:plus" size="16" />
        </template>
      </n-button>
    </template>

    <draggable group="kanban" item-key="id" :list="list" @change="() => {}">
      <template #item="{ element }">
        <kanban-issue class="mb-4" :summary="element.summary" />
      </template>
    </draggable>
  </n-card>
</template>

<script setup lang="ts">
import Draggable from 'vuedraggable'

defineProps<{ title: string; icon: string; list:Array<any> }>()

function createIssue () {
  return navigateTo({ query: { selectedIssue: '1' } })
}
</script>
