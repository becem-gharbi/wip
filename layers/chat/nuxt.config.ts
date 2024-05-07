export default defineNuxtConfig({
  ssr: false,

  runtimeConfig: {
    public: {
      peerjs: {
        host: '0.peerjs.com',
        path: '/',
        port: 443,
        secure: true,
        rmVideoElId: 'peerjs-rm-video',
        connectIntervalMs: 7000
      }
    }
  },

  vite: {
    optimizeDeps: {
      include: ['sdp']
    }
  }
})
