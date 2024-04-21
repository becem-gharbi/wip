<template>
  <n-card
    v-if="issue"
    size="small"
    :title="issue.summary"
    segmented
  >
    <template #header-extra>
      <n-button size="small" tertiary @click="$emit('hide')">
        <naive-icon name="ph:x" />
      </n-button>
    </template>

    <n-form
      ref="formRef"
      :rules="rules"
      :model="model"
      @submit.prevent="onSubmit(updateIssue)"
    >
      <n-form-item label="Summary" path="summary">
        <n-input
          v-model:value="model.summary"
          maxlength="50"
          show-count
          :readonly="!isOwner"
          placeholder="Short summary"
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

      <n-form-item label="Labels" path="labels">
        <n-select
          v-model:value="model.labels"
          filterable
          multiple
          tag
          placeholder="Input, press enter to create label"
          :show-arrow="false"
          :show="false"
          :disabled="!isOwner"
        />
      </n-form-item>

      <div v-if="isOwner && edited" class="flex gap-2">
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

    <template v-if="isOwner" #footer>
      <n-collapse arrow-placement="right">
        <n-collapse-item title="Delete Issue">
          <p>Once you delete an issue, there is no going back. Please be certain.</p>
          <br>
          <n-button type="error" @click="deleteIssue">
            Delete issue
          </n-button>
        </n-collapse-item>
      </n-collapse>
    </template>
  </n-card>
</template>

<script setup lang="ts">
const props = defineProps<{ issueId: Issue['id'] }>()
const emits = defineEmits(['hide'])

const issue = await useIssue().findUnique(props.issueId)

const isOwner = await useIssue().isOwner(issue.value)

const model = ref({
  summary: issue.value.summary,
  description: issue.value.description,
  labels: issue.value.labels?.split(';')
})

const { edited, pending, onSubmit, reset, rules, formRef } =
  useNaiveForm(model)

rules.value = {
  summary: {
    required: true,
    trigger: 'input'
  }
}

async function deleteIssue () {
  emits('hide', false)
  await useIssue().remove(issue.value.id)
}

async function updateIssue () {
  await useIssue().update(issue.value.id, {
    ...model.value,
    labels: model.value.labels?.join(';')
  })
}
</script>
