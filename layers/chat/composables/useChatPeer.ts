import { Peer } from 'peerjs'
import type { DataConnection } from 'peerjs'

export function useChatPeer (lcPeerId: string, rmPeerId: string) {
  let lcDataConnection: DataConnection | null = null
  let interval: NodeJS.Timeout | null = null

  const peer = new Peer(lcPeerId)

  const connectedToServer = ref(false)
  const rmPeerConnected = ref(false)
  const dataReceived = ref()

  peer.on('open', () => { connectedToServer.value = true })
  peer.on('disconnected', () => { connectedToServer.value = false })
  peer.on('connection', (conn) => { lcDataConnection = conn })

  onMounted(() => {
    interval = setInterval(() => {
      if (connectedToServer.value && !rmPeerConnected.value) {
        const rmDataConnection = peer.connect(rmPeerId)

        rmDataConnection.on('open', () => {
          rmPeerConnected.value = true
          rmDataConnection.on('data', (data) => {
            dataReceived.value = data
          })
        })

        rmDataConnection.on('close', () => {
          rmPeerConnected.value = false
        })
      }
    }, 1000)
  })

  onUnmounted(() => {
    peer.destroy()
    if (interval) {
      clearInterval(interval)
    }
  })

  function sendData (data: unknown) {
    lcDataConnection?.send(data)
  }

  return { sendData, dataReceived, peer }
}
