<template>
  <n-modal :show="show" @mask-click="$emit('update:show', false)">
    <TeamModalContent
      :team-id="teamId"
      class="sm:max-w-lg max-w-md"
      :project-id="projectId"
    />
  </n-modal>
</template>

<script setup lang="ts">
defineProps<{ show: boolean; teamId: string; projectId: string }>()
defineEmits(['update:show'])
</script>
