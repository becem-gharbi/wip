<template>
  <div class="flex gap-8 mb-4 overflow-auto">
    <kanban-column title="Backlog" icon="ph:lightbulb" :list="backlogList" />
    <kanban-column title="Todo" icon="ph:fire" :list="todoList" />
    <kanban-column title="In progress" icon="ph:activity" :list="inProgressList" />
    <kanban-column title="Done" icon="ph:check" :list="doneList" />
  </div>
</template>

<script setup lang="ts">
const backlogList = ref([
  {
    id: Math.random(),
    summary: 'Issue title 1'
  },
  {
    id: Math.random(),
    summary: 'Issue title 2'
  },
  {
    id: Math.random(),
    summary: 'Issue title 3'
  }
])

const todoList = ref([
  {
    id: Math.random(),
    summary: 'Issue title 1'
  },
  {
    id: Math.random(),
    summary: 'Issue title 2'
  },
  {
    id: Math.random(),
    summary: 'Issue title 3'
  }
])

const inProgressList = ref([
  {
    id: Math.random(),
    summary: 'Issue title 1'
  },
  {
    id: Math.random(),
    summary: 'Issue title 2'
  },
  {
    id: Math.random(),
    summary: 'Issue title 3'
  }
])

const doneList = ref([
  {
    id: Math.random(),
    summary: 'Issue title 1'
  },
  {
    id: Math.random(),
    summary: 'Issue title 2'
  },
  {
    id: Math.random(),
    summary: 'Issue title 3'
  }
])
</script>
