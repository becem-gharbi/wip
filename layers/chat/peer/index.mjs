import { PeerServer } from 'peer'

const port = 9000

const peerServer = PeerServer({ port, path: '/' })

// eslint-disable-next-line no-console
peerServer.listen(() => console.log(`✔️ 󠀠 Peer server running on port ${port}`))
