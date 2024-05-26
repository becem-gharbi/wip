<template>
  <div class="flex items-center gap-3">
    <img
      :src="user.picture "
      class="w-9 h-9 object-cover rounded"
      alt="avatar"
    >

    <div class="flex flex-col text-sm">
      <n-text strong>
        {{ user.name }}
      </n-text>
      <n-text :depth="3">
        {{ user.email }}
      </n-text>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ user: { picture: string, name: string, email: string } }>()
</script>
