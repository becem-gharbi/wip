export default defineNuxtConfig({
  extends: ['./layers/base'],

  css: ['~/assets/main.css'],

  devtools: {
    enabled: true
  },

  app: {
    head: {
      title: 'WIP',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { name: 'description', content: 'A platform to share work progress and more' },
        { name: 'theme-color', content: '#18181B' }
      ]
    }
  }
})
