<template>
  <n-modal :show="show" @mask-click="$emit('update:show', false)">
    <n-card
      class="sm:max-w-lg max-w-md"
      :title="issue.summary"
      role="dialog"
      aria-modal="true"
    >
      <n-form
        ref="formRef"
        :rules="rules"
        :model="model"
        @submit.prevent="onSubmit(updateIssue)"
      >
        <n-form-item label="Summary" path="summary">
          <n-input v-model:value="model.summary" />
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

      <n-divider />

      <n-h4>Delete Issue</n-h4>
      <p>Once you delete a issue, there is no going back. Please be certain.</p>
      <br>
      <n-button type="error" secondary @click="deleteIssue">
        Delete issue
      </n-button>
    </n-card>
  </n-modal>
</template>

<script setup lang="ts">
const props = defineProps<{ show: boolean; issueId: string }>()
const emits = defineEmits(['update:show', 'update:issueId'])

const issue = await useIssue().findUnique(props.issueId)

const model = ref({
  summary: issue.value.summary
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
  emits('update:show', false)
  emits('update:issueId', undefined)
  await useIssue().remove(issue.value.id)
}

async function updateIssue () {
  await useIssue().update(issue.value.id, { summary: model.value.summary })
  emits('update:issueId', undefined)
  emits('update:show', false)
}
</script>
