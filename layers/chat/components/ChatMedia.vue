<template>
  <div class="flex items-center justify-center">
    <div class="rounded overflow-hidden">
      <video v-show="streaming" ref="rmVideoRef" autoplay />
    </div>
    <n-button v-if="calling" block type="success" @click="answer">
      Answer
      <template #icon>
        <naive-icon name="ph:phone-incoming" />
      </template>
    </n-button>
    <n-button v-else-if="!streaming" block type="primary" @click="call">
      Call
      <template #icon>
        <naive-icon name="ph:phone-outgoing" />
      </template>
    </n-button>
  </div>
</template>

<script setup lang="ts">
import type { Peer, MediaConnection } from 'peerjs'

const props = defineProps<{ peer: Peer; userId: string }>()

let rmMediaConnection: MediaConnection | null = null
let lcMediaStream: MediaStream | null = null

const rmVideoRef = ref<HTMLVideoElement>()
const calling = ref(false)
const streaming = ref(false)

async function call () {
  lcMediaStream = await navigator.mediaDevices.getUserMedia({
    video: {
      facingMode: 'user',
      width: {
        ideal: window.innerWidth
      }
    },
    audio: {
      echoCancellation: true,
      noiseSuppression: true
    }
  })

  const call = props.peer.call(props.userId, lcMediaStream)

  call.on('stream', (stream) => {
    streaming.value = true
    rmVideoRef.value!.srcObject = stream
  })

  call.on('close', () => {
    streaming.value = false
  })
}

async function answer () {
  calling.value = false
  lcMediaStream = await navigator.mediaDevices.getUserMedia({
    video: {
      facingMode: 'user',
      width: {
        ideal: window.innerWidth
      }
    },
    audio: {
      echoCancellation: true,
      noiseSuppression: true
    }
  })
  rmMediaConnection?.answer(lcMediaStream)
}

props.peer.on('call', function (call) {
  // TODO: play ringtone when calling
  calling.value = true
  rmMediaConnection = call

  call.on('stream', (stream) => {
    streaming.value = true
    rmVideoRef.value!.srcObject = stream
  })

  call.on('close', () => {
    streaming.value = false
  })
})

onUnmounted(() => {
  lcMediaStream?.getTracks().forEach((track) => {
    if (track.readyState === 'live') {
      track.stop()
    }
  })
})
</script>
