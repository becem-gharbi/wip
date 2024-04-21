<template>
  <n-card class="min-w-72" segmented size="small">
    <template #header>
      <div class="flex gap-2 items-end">
        <naive-icon :name="issueStatus[column].icon" size="20" />
        <n-text>{{ issueStatus[column].title }}</n-text>
        <n-badge :value="list.length" color="gray" />
      </div>
    </template>

    <template v-if="isOwner" #header-extra>
      <n-button size="small" text @click="createIssue">
        <template #icon>
          <naive-icon name="ph:plus" size="16" />
        </template>
      </n-button>
    </template>

    <div class="h-80 pr-4 overflow-auto scroller">
      <draggable :list="list" group="kanban" item-key="id" @change="onReoder">
        <template #item="{ element }">
          <kanban-issue
            class="mb-4"
            :issue="element"
            @dblclick="onSelectIssue(element.id)"
          />
        </template>
      </draggable>
    </div>

    <kanban-issue-modal
      v-model:show="showIssueModal"
      :issue-id="selectedIssueId"
    />
  </n-card>
</template>

<script setup lang="ts">
import Draggable from 'vuedraggable'

const props = defineProps<{ column: Issue['column']; projectId: Project['id'] }>()

const isOwner = await useProject().isOwner(props.projectId)

const showIssueModal = ref(false)
const selectedIssueId = ref()

function onSelectIssue (id: Issue['id']) {
  selectedIssueId.value = id
  showIssueModal.value = true
}

const issueStatus: Array<{ title: string, icon: string }> = [
  { title: 'Backlog', icon: 'ph:lightbulb' },
  { title: 'Todo', icon: 'ph:fire' },
  { title: 'In progress', icon: 'ph:activity' },
  { title: 'Done', icon: 'ph:check' }
]

const issues = await useIssue().findMany({ projectId: props.projectId })

const list = computed(() => issues.value
  .filter(i => i.projectId === props.projectId)
  .filter(i => i.column === props.column)
  .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()))

async function createIssue () {
  const issue = await useIssue().create({ projectId: props.projectId, column: props.column })
  onSelectIssue(issue.id)
}

async function onReoder (c: any) {
  if (isOwner && c.added) {
    await useIssue().update(c.added.element.id, { column: props.column })
  }
}
</script>

<style>
.scroller::-webkit-scrollbar {
    display: none;
}
.scroller {
    -ms-overflow-style: none;
     scrollbar-width: none;
}
</style>
