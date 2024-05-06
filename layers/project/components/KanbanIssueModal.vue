<template>
  <n-modal :show="show" @mask-click="$emit('update:show', false)">
    <kanban-issue-modal-content
      v-if="issueId"
      class="sm:max-w-lg max-w-md"
      :issue-id="issueId"
      @hide="$emit('update:show', false)"
    />
  </n-modal>
</template>

<script setup lang="ts">
defineProps<{ show: boolean; issueId?: Issue['id'] }>()
defineEmits(['update:show'])
</script>
