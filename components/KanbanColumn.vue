<template>
  <n-card class="h-96 min-w-72" segmented size="small" content-class="overflow-auto">
    <template #header>
      <div class="flex gap-2 items-end">
        <naive-icon :name="issueStatus[column].icon" size="20" />
        <n-text>{{ issueStatus[column].title }}</n-text>
        <n-text depth="3">{{ list.length }}</n-text>
      </div>
    </template>

    <template #header-extra>
      <n-button size="small" text @click="createIssue">
        <template #icon>
          <naive-icon name="ph:plus" size="16" />
        </template>
      </n-button>
    </template>

    <draggable :list="list" group="kanban" item-key="id" @change="onReoder">
      <template #item="{ element }">
        <kanban-issue
          class="mb-4"
          :issue-id="element.id"
          :summary="element.summary"
          @dblclick="onSelectIssue(element.id)"
        />
      </template>
    </draggable>

    <issue-modal v-if="selectedIssueId" v-model:show="showIssueModal" v-model:issue-id="selectedIssueId" />
  </n-card>
</template>

<script setup lang="ts">
import Draggable from 'vuedraggable'

const props = defineProps<{ column: number; projectId: string }>()

const showIssueModal = ref(false)
const selectedIssueId = ref()

function onSelectIssue (id: number) {
  selectedIssueId.value = id
  showIssueModal.value = true
}

const { issueStatus } = useIssue()

const issues = await useIssue().findMany({ projectId: props.projectId })

const list = computed(() => issues.value.filter(i => i.column === props.column)
  .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()))

async function createIssue () {
  const issue = await useIssue().create({ projectId: props.projectId, column: props.column })
  onSelectIssue(issue.id)
}

async function onReoder (c: any) {
  if (c.added) {
    await useIssue().update(c.added.element.id, { column: props.column })
  }
}
</script>
