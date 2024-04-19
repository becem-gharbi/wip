<template>
  <n-card title="Members" segmented>
    <div v-if="team.users.length" class="flex flex-col gap-4">
      <div
        v-for="user of team.users"
        :key="user.id"
        class="flex gap-4 items-center"
      >
        <n-avatar :src="user.picture" />
        <div class="flex flex-col justify-between">
          <n-text>
            {{ user.name }}
            {{ user.id === project.ownerId ? "(owner)" : "(viewer)" }}
          </n-text>
          <n-text depth="3">
            {{ user.email }}
          </n-text>
        </div>

        <n-button v-if="isOwner" class="ml-auto" @click="removeUser(user.email!)">
          Remove
        </n-button>
      </div>
    </div>

    <n-empty v-else description="No users are found" />

    <template v-if="isOwner" #footer>
      <n-collapse arrow-placement="right">
        <n-collapse-item title="Add new user to team">
          <n-form
            ref="formRef"
            :rules="rules"
            :model="model"
            @submit.prevent="onSubmit(addUser)"
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
                Add
              </n-button>
            </div>
          </n-form>
        </n-collapse-item>
      </n-collapse>
    </template>
  </n-card>
</template>

<script setup lang="ts">
const props = defineProps<{ teamId: string; }>()

const team = await useTeam().findUnique(props.teamId)
const project = await useProject().findUnique(team.value.projectId)

const isOwner = await useTeam().isOwner(team.value)

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

async function addUser () {
  await useTeam().addUser(props.teamId, model.value)
}

async function removeUser (email: string) {
  await useTeam().removeUser(props.teamId, { email })
}
</script>
