<template>
  <n-card title="Team" segmented>
    <template #header-extra>
      <n-button size="small" tertiary @click="$emit('hide')">
        <naive-icon name="ph:x" />
      </n-button>
    </template>

    <div v-if="team.users.length" class="flex flex-col gap-4">
      <div
        v-for="user of team.users"
        :key="user.id"
        class="flex gap-4 items-center"
      >
        <account-info :user="user" />

        <n-button
          v-if="isOwner && user.id !== project.ownerId"
          class="ml-auto"
          @click="removeUser(user.email)"
        >
          Remove
        </n-button>
      </div>
    </div>

    <n-empty v-else description="No users are found" />

    <template v-if="isOwner" #footer>
      <n-collapse arrow-placement="right">
        <n-collapse-item title="Add new member">
          <team-add-user-form :team-id="teamId" />
        </n-collapse-item>
      </n-collapse>
    </template>
  </n-card>
</template>

<script setup lang="ts">
const props = defineProps<{ teamId: Team['id']; }>()
defineEmits(['hide'])

const team = await useTeam().findUnique(props.teamId)

const project = await useProject().findUnique(team.value.projectId)

const isOwner = await useTeam().isOwner(team.value)

async function removeUser (email: string) {
  await useTeam().removeUser(props.teamId, { email })
}
</script>
