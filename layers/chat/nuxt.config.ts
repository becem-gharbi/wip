export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      peerjs: {
        host: '0.peerjs.com',
        path: '/',
        port: 443,
        rmVideoElId: 'peerjs-rm-video'
      }
    }
  },
  vite: {
    optimizeDeps: {
      include: ['sdp']
    }
  }
})
