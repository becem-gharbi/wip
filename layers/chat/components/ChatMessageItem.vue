<template>
  <div>
    <n-divider :style="{margin:'8px'}" />
    <div
      class="flex gap-3 items-center"
      :style="{ flexDirection: isMyMessage ? 'row-reverse' : 'row' }"
    >
      <div :style="{width:'32px'}">
        <img :src="author!.picture" alt="avatar" class="rounded-full">
      </div>
      <div class="flex-grow text-wrap">
        {{ props.message.content }}
      </div>
      <div :style="{width:'32px'}" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ message: Message }>()

const team = await useTeam().findUnique(props.message.teamId)

const author = team.value.users.find(u => u.id === props.message.authorId)

const isMyMessage = useAuthSession().user.value?.id === author?.id
</script>
