<template>
  <n-dropdown
    v-if="otherUsers.length"
    trigger="click"
    :options="options"
    :style="{ padding: '8px', minWidth: '240px' }"
    @select="handleDropdownSelect"
  >
    <n-float-button :right="24" :bottom="24" shape="circle">
      <naive-icon name="ph:chat-circle-dots" />
    </n-float-button>
  </n-dropdown>

  <chat-modal
    v-model:show="showChatModal"
    :team-id="teamId"
    :user-id="selectedUserId"
  />
</template>

<script setup lang="ts">
import type { DropdownOption } from 'naive-ui'

const props = defineProps<{ teamId: Team['id'] }>()

const showChatModal = ref(false)
const selectedUserId = ref()

const team = await useTeam().findUnique(props.teamId)

const myUserId = useAuthSession().user.value!.id

const otherUsers = computed(() => team.value.users.filter(u => u.id !== myUserId))

const options = computed<DropdownOption[]>(() => otherUsers.value.map(u => ({
  key: u.id,
  label: u.name
}))
)

function handleDropdownSelect (key:string) {
  selectedUserId.value = key
  showChatModal.value = true
}
</script>
