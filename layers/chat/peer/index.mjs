import { PeerServer } from 'peer'

const port = 9000

const peerServer = PeerServer({ port, path: '/' })

peerServer.listen(() => console.log(`✔️ 󠀠 Peer server running on port ${port}`))
