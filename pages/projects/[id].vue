<template>
  <n-page-header title="Project name">
    <template #avatar>
      <naive-icon name="ph:stack" size="24" />
    </template>

    <template #extra>
      <div class="flex gap-4">
        <n-button text @click="showProjectModal = true">
          <template #icon>
            <naive-icon name="ph:pen" />
          </template>
          Edit
        </n-button>

        <n-button text @click="showChatModal = true">
          <template #icon>
            <naive-icon name="ph:chat-circle-dots" />
          </template>
          Chat
        </n-button>
      </div>
    </template>

    <kanban-board />
    <issue-modal />
    <project-modal v-model:show="showProjectModal" />
    <chat-modal v-model:show="showChatModal" />
  </n-page-header>
</template>

<script setup lang="ts">
const showProjectModal = ref(false)
const showChatModal = ref(false)
</script>
