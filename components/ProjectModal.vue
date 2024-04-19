<template>
  <n-modal :show="show" @mask-click="$emit('update:show', false)">
    <project-modal-content
      class="sm:max-w-lg max-w-md"
      :project-id="projectId"
      @hide="$emit('update:show', false)"
    />
  </n-modal>
</template>

<script setup lang="ts">
defineProps<{ show: boolean; projectId: Project['id'] }>()
defineEmits(['update:show'])
</script>
