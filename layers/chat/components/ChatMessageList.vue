<template>
  <n-scrollbar ref="scrollbarRef" class="pr-4 h-80">
    <chat-message-item
      v-for="message of messages"
      :key="message.id"
      :message="message"
    />
  </n-scrollbar>
</template>

<script setup lang="ts">
import type { ScrollbarInst } from 'naive-ui'

const props = defineProps<{ teamId: Team['id'], userId: string }>()

const scrollbarRef = ref<ScrollbarInst>()

const myId = useAuthSession().user.value!.id

const { sendData, dataReceived } = useChatPeer(myId, props.userId)

defineExpose({ sendData })

// NOTE: need to always re-fetch messages
const messages = await useChat().findMany({
  teamId: props.teamId,
  userId: props.userId,
  timestamp: new Date().getTime()
})

function scrollToBottom () {
  setTimeout(() => scrollbarRef.value?.scrollTo({ top: Number.MAX_SAFE_INTEGER }), 500)
}

onMounted(() => {
  scrollToBottom()
})

watch(dataReceived, (message: Message) => {
  useChat().pushMessage(message)
})

watch(messages, () => {
  scrollToBottom()
})
</script>
