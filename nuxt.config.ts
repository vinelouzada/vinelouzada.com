// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content'],

  routeRules: {
    '/': { prerender: true }
  },

  content: {
    highlight: {
        theme: 'one-dark-pro',
        langs: ["java", "php"]
      }
    },

  compatibilityDate: '2024-09-25'
})