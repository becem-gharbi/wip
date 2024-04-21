<template>
  <n-modal :show="show" @mask-click="$emit('update:show', false)">
    <TeamModalContent
      :team-id="teamId"
      class="sm:max-w-lg max-w-md"
      @hide="$emit('update:show', false)"
    />
  </n-modal>
</template>

<script setup lang="ts">
defineProps<{ show: boolean; teamId: Team['id']; }>()
defineEmits(['update:show'])
</script>
