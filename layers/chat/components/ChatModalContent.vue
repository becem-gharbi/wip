<template>
  <n-card title="Chat" segmented size="small">
    <template #header-extra>
      <n-button size="small" tertiary @click="$emit('hide')">
        <naive-icon name="ph:x" />
      </n-button>
    </template>

    <n-tabs type="segment" size="small">
      <n-tab-pane name="Media">
        <chat-media class="mt-2" :user-id="userId" />
      </n-tab-pane>
      <n-tab-pane name="Text">
        <chat-message-list class="mt-2 mb-4" :team-id="teamId" :user-id="userId" />
        <chat-message-form @submit="sendMessage" />
      </n-tab-pane>
    </n-tabs>
  </n-card>
</template>

<script setup lang="ts">
const props = defineProps<{ teamId: Team['id']; userId: string }>()
defineEmits(['hide'])

const { send, dataReceived, connect } = usePeerjsData(props.teamId)

connect(props.userId)

watch(dataReceived, (message: Message) => {
  useChat().pushMessage(message)
})

async function sendMessage (content: string) {
  const message = await useChat().create({
    teamId: props.teamId,
    content
  })

  await send(message)
}
</script>
