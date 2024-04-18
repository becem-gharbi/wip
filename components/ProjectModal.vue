<template>
  <n-modal :show="show" @mask-click="$emit('update:show', false)">
    <n-card class="sm:max-w-lg max-w-md" title="Project name" role="dialog" aria-modal="true">
      <n-form ref="formRef" :rules="rules" :model="model" @submit.prevent="onSubmit(updateProject)">
        <n-form-item label="Name" path="name">
          <n-input v-model:value="model.name" />
        </n-form-item>

        <div class="flex gap-2">
          <n-button attr-type="reset" :disabled="pending || !edited" @click="reset">
            Reset
          </n-button>

          <n-button attr-type="submit" :loading="pending" :disabled="pending || !edited" type="primary">
            Update
          </n-button>
        </div>
      </n-form>

      <n-divider />

      <n-h4>Delete Project</n-h4>
      <p>
        Once you delete a project, there is no going back. Please be certain.
      </p>
      <br>
      <n-button type="error" secondary @click="deleteProject">
        Delete project
      </n-button>
    </n-card>
  </n-modal>
</template>

<script setup lang="ts">
const props = defineProps<{ show: boolean; id: string;}>()
const emits = defineEmits(['update:show', 'update:name'])

const project = await useProject().findUnique(props.id)

const model = ref({
  name: project.value.name
})

const { edited, pending, onSubmit, reset, rules, formRef } = useNaiveForm(model)

rules.value = {
  name: {
    required: true,
    trigger: 'input'
  }
}

async function deleteProject () {
  await navigateTo('/')
  await useProject().remove(props.id)
}

async function updateProject () {
  await useProject().update(props.id, { name: model.value.name })
  emits('update:show', false)
}
</script>
