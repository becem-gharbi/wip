import nitroCloudflareBindings from 'nitro-cloudflare-dev'
import { auth, naiveui, tailwindcss, pwa } from './config'

export default defineNuxtConfig({
  ssr: false,

  nitro: {
    modules: [nitroCloudflareBindings],
    experimental: {
      database: true,
      wasm: true,
    },
  },

  modules: [
    '@bg-dev/nuxt-auth',
    '@bg-dev/nuxt-naiveui',
    '@nuxtjs/tailwindcss',
    '@vite-pwa/nuxt',
  ],

  auth,
  naiveui,
  tailwindcss,
  pwa,
})
