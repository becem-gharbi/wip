<template>
  <n-form @submit.prevent="onSubmit">
    <div class="flex gap-4">
      <n-input v-model:value="message" />
      <n-button type="primary" :attr-type="'submit'">
        <template #icon>
          <naive-icon name="ph:paper-plane-right" />
        </template>
      </n-button>
    </div>
  </n-form>
</template>

<script setup lang="ts">
const emits = defineEmits(['submit'])

const message = ref('')

function onSubmit () {
  emits('submit', message.value)
  message.value = ''
}
</script>
