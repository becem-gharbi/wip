<template>
  <n-card title="Latest messages" segmented size="small">
    <template #header-extra>
      <n-button size="small" tertiary @click="$emit('hide')">
        <naive-icon name="ph:x" />
      </n-button>
    </template>

    <chat-message-list ref="messageListRef" :team-id="teamId" :user-id="userId" />

    <template #footer>
      <chat-message-form @submit="sendMessage" />
    </template>
  </n-card>
</template>

<script setup lang="ts">
const props = defineProps<{ teamId: Team['id']; userId: string }>()
defineEmits(['hide'])

const messageListRef = ref()

async function sendMessage (content: string) {
  const message = await useChat().create({
    teamId: props.teamId,
    content
  })

  messageListRef.value.sendData(message)
}
</script>
