export default defineNuxtPlugin({
  dependsOn: ['peerjs:init'],
  enforce: 'pre',
  hooks: {
    'auth:loggedIn': (loggedIn) => {
      const { $peerjs } = useNuxtApp()
      if (loggedIn) {
        const { user } = useAuthSession()
        $peerjs.init(user.value!.id)
      } else {
        $peerjs.end()
      }
    }
  }
})
