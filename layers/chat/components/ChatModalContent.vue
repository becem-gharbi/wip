<template>
  <n-card title="Latest messages" segmented size="small">
    <template #header-extra>
      <n-button size="small" tertiary @click="$emit('hide')">
        <naive-icon name="ph:x" />
      </n-button>
    </template>

    <chat-message-list ref="messageListRef" :team-id="teamId" :user-id="other!.id" />

    <template #footer>
      <chat-message-form @submit="sendMessage" />
    </template>
  </n-card>
</template>

<script setup lang="ts">
const props = defineProps<{ teamId: Team['id'] }>()
defineEmits(['hide'])

const messageListRef = ref()

const me = useAuthSession().user.value
const team = await useTeam().findUnique(props.teamId)
const other = team.value.users.find(u => u.id !== me!.id)

async function sendMessage (content: string) {
  const message = await useChat().create({
    teamId: props.teamId,
    content
  })

  messageListRef.value.sendData(message)
}
</script>
