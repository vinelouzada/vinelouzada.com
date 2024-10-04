// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content'],

  routeRules: {
    '/**': { prerender: true }
  },

  content: {
    highlight: {
        theme: 'one-dark-pro',
        langs: ["java", "php"]
      }
    },

  app: {
    head: {
      link: [
          { rel: 'icon', type: 'image/x-icon', href: '/assets/img/logo.png' }
        ]
      }
    },

  compatibilityDate: '2024-09-25'
})