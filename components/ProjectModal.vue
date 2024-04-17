<template>
  <n-modal :show="show" @mask-click="$emit('update:show', false)">
    <n-card
      class="sm:max-w-lg max-w-md"
      title="Project name"
      role="dialog"
      aria-modal="true"
    >
      <template #header-extra>
        <n-button text @click="deleteProject">
          <template #icon>
            <naive-icon name="ph:trash" />
          </template>
          Delete
        </n-button>
      </template>

      Content
    </n-card>
  </n-modal>
</template>

<script setup lang="ts">
defineProps<{show: boolean}>()
defineEmits(['update:show'])

function deleteProject () {

}
</script>
