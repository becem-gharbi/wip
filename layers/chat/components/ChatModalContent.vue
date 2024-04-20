<template>
  <n-card title="Latest messages" segmented size="small">
    <template #header-extra>
      <n-button size="small" tertiary @click="$emit('hide')">
        <naive-icon name="ph:x" />
      </n-button>
    </template>

    <n-tabs type="segment" size="small">
      <n-tab-pane name="Text">
        <chat-message-list class="pb-8" :team-id="teamId" :user-id="userId" />
        <chat-message-form @submit="sendMessage" />
      </n-tab-pane>
      <n-tab-pane name="Media" />
    </n-tabs>
  </n-card>
</template>

<script setup lang="ts">
const props = defineProps<{ teamId: Team['id']; userId: string }>()
defineEmits(['hide'])

const myId = useAuthSession().user.value!.id

const { sendData, dataReceived } = useChatPeer(myId, props.userId)

watch(dataReceived, (message: Message) => {
  useChat().pushMessage(message)
})

async function sendMessage (content: string) {
  const message = await useChat().create({
    teamId: props.teamId,
    content
  })

  sendData(message)
}
</script>
