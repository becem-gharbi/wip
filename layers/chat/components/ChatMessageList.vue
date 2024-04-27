<template>
  <n-scrollbar v-if="teamMessages.length" ref="scrollbarRef" class="pr-4 h-80">
    <chat-message-item
      v-for="message of teamMessages"
      :key="message.id"
      :message="message"
    />
  </n-scrollbar>

  <n-empty v-else description="No messages are found" />
</template>

<script setup lang="ts">
import type { ScrollbarInst } from 'naive-ui'

const props = defineProps<{ teamId: Team['id'], userId: string }>()

const scrollbarRef = ref<ScrollbarInst>()

// NOTE: need to always re-fetch messages
const messages = await useChat().findMany({
  refetch: true,
  query: {
    teamId: props.teamId,
    userId: props.userId
  }
})

const teamMessages = computed(() => messages.value.filter(m => m.teamId === props.teamId))

function scrollToBottom () {
  setTimeout(() => scrollbarRef.value?.scrollTo({ top: Number.MAX_SAFE_INTEGER }), 500)
}

onMounted(() => {
  scrollToBottom()
})

watch(teamMessages, () => {
  scrollToBottom()
})
</script>
