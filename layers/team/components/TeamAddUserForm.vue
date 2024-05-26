<template>
  <n-form
    ref="formRef"
    :rules="rules"
    :model="model"
    @submit.prevent="onSubmit(addUser)"
  >
    <n-form-item
      label="Email"
      path="email"
    >
      <n-input
        v-model:value="model.email"
        placeholder="Email of new team member"
      />
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
        Add
      </n-button>
    </div>
  </n-form>
</template>

<script setup lang="ts">
const props = defineProps<{ teamId: Team['id'] }>()

const model = ref({
  email: '',
})

const { edited, pending, onSubmit, reset, rules, formRef }
  = useNaiveForm(model)

rules.value = {
  email: {
    type: 'email',
  },
}

async function addUser() {
  await useTeam().addUser(props.teamId, model.value)
}
</script>
