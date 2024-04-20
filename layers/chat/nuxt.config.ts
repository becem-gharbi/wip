export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      chat: {
        peer: {
          host: '0.peerjs.com',
          port: 443,
          path: '/'
        }
      }
    }
  }
})
