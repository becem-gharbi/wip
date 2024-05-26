import { SimplePeer } from '@bg-dev/simple-peerjs'

export default defineNuxtPlugin({
  enforce: 'pre',

  setup(nuxtApp) {
    const peerjs = new SimplePeer(nuxtApp.$config.public.peerjs)

    nuxtApp.hook('auth:loggedIn', (loggedIn) => {
      if (loggedIn) {
        const userId = useAuthSession().user.value!.id
        peerjs.init(userId)
      }
      else {
        peerjs.end()
      }
    })

    peerjs.hooks.hook('data:received', (_, data) => {
      useChat().pushMessage(data as Message)
    })

    return {
      provide: {
        peerjs,
      },
    }
  },
})
