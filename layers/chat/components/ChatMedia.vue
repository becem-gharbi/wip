<template>
  <div class="flex flex-col gap-4">
    <div class="rounded overflow-hidden">
      <video v-show="streaming" id="stream" autoplay width="100%" />
    </div>

    <n-button v-if="calling || streaming" type="error" @click="end()">
      Hang
      <template #icon>
        <naive-icon name="ph:phone-disconnect" />
      </template>
    </n-button>

    <n-button v-if="calling && !isCaller" type="success" @click="answer()">
      Answer
      <template #icon>
        <naive-icon name="ph:phone-incoming" />
      </template>
    </n-button>

    <n-button v-if="!streaming && !calling" type="primary" @click="handleCall()">
      Call
      <template #icon>
        <naive-icon name="ph:phone-outgoing" />
      </template>
    </n-button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ userId: string }>()

const { answer, call, calling, streaming, end } = usePeerjsMedia('stream')

const isCaller = ref(false)

function handleCall () {
  isCaller.value = true
  call(props.userId)
}

watch(calling, (value) => {
  if (!value) {
    isCaller.value = false
  }
})
</script>
