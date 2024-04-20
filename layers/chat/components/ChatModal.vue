<template>
  <n-modal :show="show" @mask-click="$emit('update:show', false)">
    <ChatModalContent
      v-if="userId"
      :team-id="teamId"
      :user-id="userId"
      class="sm:max-w-lg max-w-md"
      @hide="$emit('update:show', false)"
    />
  </n-modal>
</template>

<script setup lang="ts">
defineProps<{ show: boolean; teamId: Team['id']; userId?: string }>()
defineEmits(['update:show'])
</script>
