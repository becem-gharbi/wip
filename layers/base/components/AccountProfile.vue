<template>
  <n-form
    ref="formRef"
    :model="model"
    :rules="rules"
    @submit.prevent="onSubmit(updateAccount)"
  >
    <n-form-item
      label="Name"
      path="name"
    >
      <n-input v-model:value="model.name" />
    </n-form-item>

    <div
      v-if="edited"
      class="flex gap-2"
    >
      <n-button
        attr-type="reset"
        :disabled="pending"
        @click="reset"
      >
        Reset
      </n-button>

      <n-button
        attr-type="submit"
        :loading="pending"
        :disabled="pending"
        type="primary"
      >
        Update
      </n-button>
    </div>
  </n-form>

  <n-collapse>
    <n-collapse-item title="Delete account">
      <p>Once your account, there is no going back. Please be certain.</p>
      <br>
      <n-button
        type="error"
        @click="deleteAccount"
      >
        Delete account
      </n-button>
    </n-collapse-item>
  </n-collapse>
</template>

<script setup lang="ts">
const { user } = useAuthSession()

const model = ref({
  name: user.value!.name,
  picture: user.value!.picture,
})

const { edited, pending, onSubmit, reset, formRef, rules } = useNaiveForm(model)

rules.value = {
  name: {
    required: true,
    trigger: 'input',
  },
}

async function updateAccount() {
  await useNuxtApp().$auth.fetch('/api/user', {
    method: 'patch',
    body: {
      name: model.value.name,
      picture: model.value.picture,
    },
  })

  await useAuth().fetchUser()
}

async function deleteAccount() {
  await useNuxtApp().$auth.fetch('/api/user', {
    method: 'delete',
    credentials: 'include',
  })
  location.reload()
}
</script>
