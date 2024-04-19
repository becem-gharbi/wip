<template>
  <n-card title="Team" segmented>
    <div class="flex flex-col gap-2">
      <div
        v-for="user of team.users"
        :key="user.id"
        class="flex gap-4 items-center"
      >
        <n-avatar :src="user.picture" />
        <div class="flex flex-col justify-between">
          <n-text>
            {{ user.name }}
            {{ user.id === project.ownerId ? "(lead)" : "(viewer)" }}
          </n-text>
          <n-text depth="3">
            {{ user.email }}
          </n-text>
        </div>
      </div>
    </div>

    <template #footer>
      <n-collapse arrow-placement="right">
        <n-collapse-item title="Invite new user">
          <n-form
            ref="formRef"
            :rules="rules"
            :model="model"
            @submit.prevent="onSubmit(inviteUser)"
          >
            <n-form-item label="Email" path="email">
              <n-input v-model:value="model.email" />
            </n-form-item>

            <div class="flex gap-2">
              <n-button
                attr-type="reset"
                :disabled="pending || !edited"
                @click="reset"
              >
                Reset
              </n-button>

              <n-button
                attr-type="submit"
                :loading="pending"
                :disabled="pending || !edited"
                type="primary"
              >
                Invite
              </n-button>
            </div>
          </n-form>
        </n-collapse-item>
      </n-collapse>
    </template>
  </n-card>
</template>

<script setup lang="ts">
const props = defineProps<{ teamId: string; projectId: string }>()
const emits = defineEmits(['hide'])

const team = await useTeam().findUnique(props.teamId)
const project = await useProject().findUnique(props.projectId)

const model = ref({
  email: ''
})

const { edited, pending, onSubmit, reset, rules, formRef } =
  useNaiveForm(model)

rules.value = {
  email: {
    type: 'email'
  }
}

async function inviteUser () {
  emits('hide')
}
</script>
