<template>
  <div>
    <n-card size="small">
      <n-form
        ref="formRef"
        :rules="rules"
        :model="model"
        @submit.prevent="onSubmit(updateProject)"
      >
        <n-form-item label="Name" path="name">
          <n-input
            v-model:value="model.name"
            maxlength="20"
            show-count
            :readonly="!isOwner"
            placeholder="Unique name"
          />
        </n-form-item>

        <n-form-item label="Icon" path="icon">
          <n-input
            v-model:value="model.icon"
            :readonly="!isOwner"
            placeholder="Icon URL"
            show-count
            maxlength="80"
          />
        </n-form-item>

        <n-form-item label="Description" path="description">
          <n-input
            v-model:value="model.description"
            type="textarea"
            autosize
            maxlength="100"
            show-count
            :readonly="!isOwner"
            placeholder="Description"
          />
        </n-form-item>

        <div v-if="isOwner" class="flex gap-2">
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
    </n-card>

    <br>

    <n-collapse v-if="isOwner">
      <n-collapse-item title="Delete Project">
        <p>Once you delete a project, there is no going back. Please be certain.</p>
        <br>
        <n-button type="error" @click="deleteProject">
          Delete project
        </n-button>
      </n-collapse-item>
    </n-collapse>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ projectId: Project['id'] }>()

const project = await useProject().findUnique(props.projectId)

const isOwner = await useProject().isOwner(project.value)

const model = ref({
  name: project.value.name,
  icon: project.value.icon,
  description: project.value.description
})

const { edited, pending, onSubmit, reset, rules, formRef, apiErrors } =
  useNaiveForm(model)

apiErrors.value = {
  nameAlreadyUsed: false
}

rules.value = {
  name: [
    {
      required: true,
      trigger: 'input'
    },
    {
      message: 'Name already used',
      validator: () => !apiErrors.value.nameAlreadyUsed
    }
  ],
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
    .catch(() => { apiErrors.value.nameAlreadyUsed = true })
}
</script>
