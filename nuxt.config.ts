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
          { rel: 'icon', type: 'image/x-icon', href: '/assets/img/logo.png' },
          { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
          { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap' }
        ]
      }
    },

  compatibilityDate: '2024-09-25'
})