<template>
  <n-card class="h-96 min-w-72" segmented size="small" content-class="overflow-auto">
    <template #header>
      <div class="flex gap-2 items-center">
        <naive-icon :name="icon" size="20" />
        {{ title }}
      </div>
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
</script>
