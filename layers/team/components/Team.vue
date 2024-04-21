<template>
  <n-list v-if="team.users.length" hoverable>
    <n-list-item v-for="user of team.users" :key="user.id">
      <div class="flex gap-4 justify-between">
        <account-info :user="user" />

        <n-button
          v-if="isOwner && user.id !== project.ownerId"
          quaternary
          @click="removeUser(user.email)"
        >
          Remove
        </n-button>
      </div>
    </n-list-item>
  </n-list>

  <n-empty v-else description="No users are found" />

  <br>

  <n-collapse v-if="isOwner">
    <n-collapse-item title="Add new member">
      <team-add-user-form :team-id="teamId" />
    </n-collapse-item>
  </n-collapse>
</template>

<script setup lang="ts">
const props = defineProps<{ teamId: Team['id']; }>()

const team = await useTeam().findUnique(props.teamId)

const project = await useProject().findUnique(team.value.projectId)

const isOwner = await useTeam().isOwner(team.value)

async function removeUser (email: string) {
  await useTeam().removeUser(props.teamId, { email })
}
</script>
