<template>
  <n-modal :show="show" @mask-click="$emit('update:show', false)">
    <n-card
      class="sm:max-w-lg max-w-md"
      title="Chat"
      role="dialog"
      aria-modal="true"
    >
      Content
    </n-card>
  </n-modal>
</template>

<script setup lang="ts">
defineProps<{ show: boolean }>()
defineEmits(['update:show'])
</script>
