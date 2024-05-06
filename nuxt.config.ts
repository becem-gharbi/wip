export default defineNuxtConfig({
  extends: ['./layers/base', './layers/chat', './layers/project', './layers/team'],

  devtools: {
    enabled: false
  },

  experimental: {
    typedPages: true
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
      ],
      link: [
        { rel: 'icon', href: '/images/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Rubik&display=swap' }
      ]
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  }
})
