<template>
  <div>
    <n-list v-if="team.users.length" hoverable>
      <n-list-item v-for="user of team.users" :key="user.id">
        <div class="flex gap-4">
          <account-info class="mr-auto" :user="user" />

          <n-button
            v-if="isOwner && user.id !== project.ownerId"
            tertiary
            @click="removeUser(user.email)"
          >
            Remove
          </n-button>

          <n-button
            v-if="user.id !== myUserId"
            tertiary
            @click="messageUser(user.id)"
          >
            <naive-icon name="ph:chat-circle-dots" />
          </n-button>
        </div>
      </n-list-item>

      <chat-modal v-model:show="showChatModal" :team-id="teamId" :user-id="selectedUserId" />
    </n-list>

    <n-empty v-else description="No users are found" />

    <br>

    <n-collapse v-if="isOwner">
      <n-collapse-item title="Add new member">
        <team-add-user-form :team-id="teamId" />
      </n-collapse-item>
    </n-collapse>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ teamId: Team['id']; }>()

const selectedUserId = ref()
const showChatModal = ref(false)

const team = await useTeam().findUnique(props.teamId)

const project = await useProject().findUnique(team.value.projectId)

const isOwner = await useTeam().isOwner(team.value)

const myUserId = useAuthSession().user.value!.id

async function removeUser (email: string) {
  await useTeam().removeUser(props.teamId, { email })
}

function messageUser (id: string) {
  selectedUserId.value = id
  showChatModal.value = true
}
</script>
