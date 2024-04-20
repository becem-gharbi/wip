<template>
  <n-card title="Latest messages" segmented size="small">
    <template #header-extra>
      <n-button size="small" tertiary @click="$emit('hide')">
        <naive-icon name="ph:x" />
      </n-button>
    </template>

    <n-scrollbar ref="scrollbarRef" class="pr-4 h-80">
      <chat-message
        v-for="message of messages"
        :key="message.id"
        :message="message"
      />
    </n-scrollbar>

    <template #footer>
      <chat-message-form @submit="sendMessage" />
    </template>
  </n-card>
</template>

<script setup lang="ts">
import type { ScrollbarInst } from 'naive-ui'

const props = defineProps<{ teamId: Team['id'] }>()
defineEmits(['hide'])

const me = useAuthSession().user.value
const team = await useTeam().findUnique(props.teamId)
const other = team.value.users.find(u => u.id !== me!.id)

const { sendData, dataReceived } = useChatPeer(me!.id, other!.id)

const scrollbarRef = ref<ScrollbarInst>()

function scrollToBottom () {
  setTimeout(
    () => scrollbarRef.value?.scrollTo({ top: Number.MAX_SAFE_INTEGER }),
    500
  )
}

onMounted(() => {
  scrollToBottom()
})

const messages = await useChat().findMany({ teamId: props.teamId })

async function sendMessage (content: string) {
  const message = await useChat().create({
    teamId: props.teamId,
    content
  })
  scrollToBottom()
  sendData(message)
}

watch(dataReceived, (message: Message) => {
  useChat().pushMessage(message)
  scrollToBottom()
})
</script>
