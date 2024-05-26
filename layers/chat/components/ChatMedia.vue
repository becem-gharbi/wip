<template>
  <div class="flex flex-col gap-4">
    <div class="rounded overflow-hidden">
      <video
        v-show="status === 'active'"
        id="peerjs-rm-video"
        autoplay
        width="100%"
        class="aspect-video"
      />
    </div>

    <n-button
      v-if="status !== 'inactive'"
      type="error"
      @click="$peerjs.peerMedia?.endCall()"
    >
      Hang
      <template #icon>
        <naive-icon name="ph:phone-disconnect" />
      </template>
    </n-button>

    <n-button
      v-if="status === 'calling'"
      type="success"
      @click="$peerjs.peerMedia?.acceptCall()"
    >
      Answer
      <template #icon>
        <naive-icon name="ph:phone-incoming" />
      </template>
    </n-button>

    <n-button
      v-if="status === 'inactive'"
      type="primary"
      @click="$peerjs.peerMedia?.startCall(userId)"
    >
      Call
      <template #icon>
        <naive-icon name="ph:phone-outgoing" />
      </template>
    </n-button>
  </div>
</template>

<script setup lang="ts">
defineProps<{ userId: string }>()

const { $peerjs } = useNuxtApp()

const status = ref($peerjs.peerMedia!.status)

$peerjs.hooks.hook('media:status', (_status) => {
  status.value = _status
})
</script>
