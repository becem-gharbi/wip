<template>
  <n-card
    v-if="project"
    :title="project.name"
    segmented
  >
    <n-form
      ref="formRef"
      :rules="rules"
      :model="model"
      @submit.prevent="onSubmit(updateProject)"
    >
      <n-form-item label="Name" path="name">
        <n-input v-model:value="model.name" maxlength="30" show-count />
      </n-form-item>

      <n-form-item label="Icon" path="icon">
        <n-input v-model:value="model.icon" />
      </n-form-item>

      <n-form-item label="Description" path="description">
        <n-input v-model:value="model.description" type="textarea" autosize maxlength="100" show-count />
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
          Update
        </n-button>
      </div>
    </n-form>

    <template #footer>
      <n-collapse arrow-placement="right">
        <n-collapse-item title="Delete Project">
          <p>Once you delete a project, there is no going back. Please be certain.</p>
          <br>
          <n-button type="error" secondary @click="deleteProject">
            Delete project
          </n-button>
        </n-collapse-item>
      </n-collapse>
    </template>
  </n-card>
</template>

<script setup lang="ts">
const props = defineProps<{ projectId: string }>()
const emits = defineEmits(['hide'])

const project = await useProject().findUnique(props.projectId)

const model = ref({
  name: project.value.name,
  icon: project.value.icon,
  description: project.value.description
})

const { edited, pending, onSubmit, reset, rules, formRef } =
  useNaiveForm(model)

rules.value = {
  name: {
    required: true,
    trigger: 'input'
  },
  icon: {
    type: 'url'
  }
}

async function deleteProject () {
  await navigateTo('/')
  await useProject().remove(props.projectId)
}

async function updateProject () {
  await useProject().update(props.projectId, model.value)
}
</script>
