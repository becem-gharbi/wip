<template>
  <n-modal v-model:show="show">
    <n-card
      class="sm:max-w-lg max-w-md"
      title="Issue summary"
      role="dialog"
      aria-modal="true"
    >
      Content
    </n-card>
  </n-modal>
</template>

<script setup lang="ts">
const show = ref(false)
const { currentRoute } = useRouter()

watch(currentRoute, (value) => {
  show.value = !!value.query.selectedIssue
}, { immediate: true })

watch(show, (value) => {
  if (value === false) {
    return navigateTo({ query: { selectedIssue: undefined } })
  }
})
</script>
